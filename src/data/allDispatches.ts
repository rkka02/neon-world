import type { Dispatch } from '../types'
import { DISPATCHES } from './dispatches'
import { DISPATCHES_WAVE_2 } from './dispatchesWave2'
import { DISPATCHES_WAVE_3 } from './dispatchesWave3'

/** Priority weight for same-date tie-breaking: breaking > featured > regular. */
const priority = (d: Dispatch) => (d.breaking ? 2 : 0) + (d.featured ? 1 : 0)

/** Unified 16-dispatch archive (Waves 1–3), newest-first. */
export const ALL_DISPATCHES: Dispatch[] = [
  ...DISPATCHES,
  ...DISPATCHES_WAVE_2,
  ...DISPATCHES_WAVE_3,
].sort((a, b) => b.date.localeCompare(a.date) || priority(b) - priority(a))
