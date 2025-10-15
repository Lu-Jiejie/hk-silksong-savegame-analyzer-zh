import type { TrackableCategory } from '../types';

export const stats: TrackableCategory = {
  id: 'category_stats',
  name: 'Stats',
  description: 'Statistics tracked in the game.',
  items: [
    { id: 'stat_playtime', name: 'Playtime', whichAct: 1, completionPercent: 0, prereqs: [], location: '', parsingInfo: { type: 'flagReturn', internalId: 'playTime' }, mapLink: '' },
    { id: 'stat_rosaries', name: 'Rosaries', whichAct: 1, completionPercent: 0, prereqs: [], location: '', parsingInfo: { type: 'flagReturn', internalId: 'geo' }, mapLink: '' },
    { id: 'stat_shell_shards', name: 'Shell Shards', whichAct: 1, completionPercent: 0, prereqs: [], location: '', parsingInfo: { type: 'flagReturn', internalId: 'ShellShards' }, mapLink: '' },
    { id: 'stat_game_mode', name: 'Game Mode', whichAct: 1, completionPercent: 0, prereqs: [], location: '', parsingInfo: { type: 'flagReturn', internalId: 'permadeathMode' }, mapLink: '' },
  ],
};
