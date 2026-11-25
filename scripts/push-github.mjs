#!/usr/bin/env node
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const OWNER = process.env.GH_OWNER || 'rkka02'
const REPO = process.env.GH_REPO || 'neon-world'
const BRANCH = process.env.GH_BRANCH || 'main'
const COMMIT_MSG = process.argv[2] || 'feat: launch NEON//WORLD Jammin-E Singularity Observatory'
const ROOT = process.cwd()

const IGNORE_DIRS = new Set(['node_modules', 'dist', '.git', '.wrangler', '.DS_Store', 'assets-ref'])
const IGNORE_FILES = new Set(['.DS_Store', 'images.jpeg'])

const token = execSync('gh auth token', { encoding: 'utf8' }).trim()
if (!token) throw new Error('No GitHub token from `gh auth token`')

const headers = {
  Authorization: `Bearer ${token}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'Content-Type': 'application/json',
}

async function gh(endpoint, options = {}) {
  const res = await fetch(`https://api.github.com${endpoint}`, {
    ...options,
    headers: { ...headers, ...(options.headers || {}) },
  })
  const text = await res.text()
  let data = null
  try {
    data = text ? JSON.parse(text) : null
  } catch {
    data = text
  }
  if (!res.ok) {
    const err = new Error(`GitHub API ${res.status} on ${endpoint}: ${text.slice(0, 400)}`)
    err.status = res.status
    throw err
  }
  return data
}

function walk(dir, rel = '') {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORE_DIRS.has(entry.name) || IGNORE_FILES.has(entry.name)) continue
    const full = path.join(dir, entry.name)
    const relPath = rel ? `${rel}/${entry.name}` : entry.name
    if (entry.isDirectory()) {
      out.push(...walk(full, relPath))
    } else if (entry.isFile()) {
      out.push({ full, relPath })
    }
  }
  return out
}

async function ensureRepo() {
  try {
    await gh(`/repos/${OWNER}/${REPO}`)
    console.log(`Repo ${OWNER}/${REPO} exists.`)
  } catch (e) {
    if (e.status === 404) {
      console.log(`Creating public repo ${OWNER}/${REPO}...`)
      await gh('/user/repos', {
        method: 'POST',
        body: JSON.stringify({
          name: REPO,
          description: "NEON//WORLD — Jammin-E's November 2026 AI & Singularity Observatory (KO/EN)",
          private: false,
          auto_init: true,
        }),
      })
      // Wait briefly for initial branch creation
      await new Promise((r) => setTimeout(r, 2000))
    } else {
      throw e
    }
  }
}

async function main() {
  await ensureRepo()

  let parentSha = null
  try {
    const ref = await gh(`/repos/${OWNER}/${REPO}/git/ref/heads/${BRANCH}`)
    parentSha = ref.object.sha
    console.log(`Found existing ${BRANCH} HEAD: ${parentSha.slice(0, 8)}`)
  } catch {
    console.log(`Branch ${BRANCH} not initialized yet; creating seed README via Contents API...`)
    await gh(`/repos/${OWNER}/${REPO}/contents/README.md`, {
      method: 'PUT',
      body: JSON.stringify({
        message: 'chore: init repo',
        content: Buffer.from('# NEON//WORLD\n').toString('base64'),
        branch: BRANCH,
      }),
    })
    const ref = await gh(`/repos/${OWNER}/${REPO}/git/ref/heads/${BRANCH}`)
    parentSha = ref.object.sha
  }

  const files = walk(ROOT)
  console.log(`Uploading ${files.length} files to ${OWNER}/${REPO}...`)

  const treeEntries = []
  const CONCURRENCY = 6
  for (let i = 0; i < files.length; i += CONCURRENCY) {
    const batch = files.slice(i, i + CONCURRENCY)
    const results = await Promise.all(
      batch.map(async ({ full, relPath }) => {
        const buf = fs.readFileSync(full)
        const blob = await gh(`/repos/${OWNER}/${REPO}/git/blobs`, {
          method: 'POST',
          body: JSON.stringify({
            content: buf.toString('base64'),
            encoding: 'base64',
          }),
        })
        return {
          path: relPath,
          mode: '100644',
          type: 'blob',
          sha: blob.sha,
        }
      }),
    )
    treeEntries.push(...results)
    console.log(`  Uploaded ${Math.min(i + CONCURRENCY, files.length)}/${files.length}`)
  }

  const tree = await gh(`/repos/${OWNER}/${REPO}/git/trees`, {
    method: 'POST',
    body: JSON.stringify({ tree: treeEntries }),
  })

  const commit = await gh(`/repos/${OWNER}/${REPO}/git/commits`, {
    method: 'POST',
    body: JSON.stringify({
      message: COMMIT_MSG,
      tree: tree.sha,
      parents: [parentSha],
    }),
  })

  await gh(`/repos/${OWNER}/${REPO}/git/refs/heads/${BRANCH}`, {
    method: 'PATCH',
    body: JSON.stringify({ sha: commit.sha, force: true }),
  })

  console.log(`SUCCESS! Pushed commit ${commit.sha} to https://github.com/${OWNER}/${REPO}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
