import type { NormalisedTrackableCategory } from '../types';

export const abilities: NormalisedTrackableCategory = {
  id: 'category_abilities',
  name: 'Abilities',
  description: 'Each Ability (except Cloak Abilities) counts 1% towards completion.',
  sections: [
    {
      id: 'section_silk_skills',
      name: 'Silk Skills',
      description: 'Each Silk Skill counts 1% towards completion.',
      items: [
        { id: 'ability_silkspear', name: 'Silkspear', whichAct: 1, completionPercent: 1, prereqs: [], location: 'Moss Grotto (Mosshome)', parsingInfo: { type: 'tool', internalId: ['Silk Spear'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477871' },
        { id: 'ability_thread_storm', name: 'Thread Storm', whichAct: 1, completionPercent: 1, prereqs: [], location: 'Greymoor (Craw Lake): At the top.', parsingInfo: { type: 'tool', internalId: ['Thread Sphere'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478061' },
        { id: 'ability_cross_stitch', name: 'Cross Stitch', whichAct: 1, completionPercent: 1, prereqs: [], location: 'Bilewater (Exhaust Organ): Defeat Phantom.', parsingInfo: { type: 'tool', internalId: ['Parry'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478371' },
        { id: 'ability_sharpdart', name: 'Sharpdart', whichAct: 1, completionPercent: 1, prereqs: [], location: 'Wormways (Weavernest)', parsingInfo: { type: 'tool', internalId: ['Silk Charge'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479079' },
        { id: 'ability_rune_rage', name: 'Rune Rage', whichAct: 1, completionPercent: 1, prereqs: [], location: 'The Slab: Defeat First Sinner.', parsingInfo: { type: 'tool', internalId: ['Silk Bomb'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479025' },
        { id: 'ability_pale_nails', name: 'Pale Nails', whichAct: 3, completionPercent: 1, prereqs: ['Silk Soar'], location: 'The Cradle: At the top.', parsingInfo: { type: 'tool', internalId: ['Silk Boss Needle'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479606' },
      ]
    },
    {
      id: 'section_silk_hearts',
      name: 'Silk Hearts',
      description: 'Each Silk Heart counts 1% towards completion.',
      items: [
        { id: 'ability_silk_heart_1', name: 'Silk Heart #1', whichAct: 1, completionPercent: 1, prereqs: ['Silkspear'], location: 'The Marrow: Defeat Bell Beast.', parsingInfo: { type: 'sceneVisited', internalId: 'Memory_Silk_Heart_BellBeast' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477879' },
        { id: 'ability_silk_heart_2', name: 'Silk Heart #2', whichAct: 2, completionPercent: 1, prereqs: [], location: 'Whiteward: Defeat The Unravelled (beneath a locked trapdoor, requires Surgeon\'s Key).', parsingInfo: { type: 'sceneVisited', internalId:'Memory_Silk_Heart_WardBoss' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479082' },
        { id: 'ability_silk_heart_3', name: 'Silk Heart #3', whichAct: 2, completionPercent: 1, prereqs: [], location: 'The Cradle: Defeat Lace.', parsingInfo: { type: 'sceneVisited', internalId:'Memory_Silk_Heart_LaceTower' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479089' },
      ]
    },
    {
      id: 'section_cloak_abilities',
      name: 'Cloak Abilities',
      description: 'Cloak Abilities do not count any % towards completion.',
      items: [
        { id: 'ability_drifters_cloak', name: 'Drifter\'s Cloak (Glide)', whichAct: 1, completionPercent: 0, prereqs: [], location: 'Far Fields: Complete Seamstress\' "Flexile Spines" wish.', parsingInfo: { type: 'flag', internalId: 'hasBrolly' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477971' },
        { id: 'ability_faydown_cloak', name: 'Faydown Cloak (Double Jump)', whichAct: 2, completionPercent: 0, prereqs: ['Needolin', 'Clawline'], location: 'Mount Fay: At the summit.', parsingInfo: { type: 'flag', internalId: 'hasDoubleJump' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479103' },
      ]
    },
    {
      id: 'section_ancestral_arts',
      name: 'Ancestral Arts',
      description: 'Each Ancestral Art counts 1% towards completion.',
      items: [
        { id: 'ability_swift_step', name: 'Swift Step (Dash / Sprint)', whichAct: 1, completionPercent: 1, prereqs: [], location: 'Deep Docks', parsingInfo: { type: 'flag', internalId: 'hasDash' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477915' },
        { id: 'ability_clawline', name: 'Clawline (Needle Harpoon)', whichAct: 2, completionPercent: 1, prereqs: [], location: 'Underworks (The Cauldron)', parsingInfo: { type: 'flag', internalId: 'hasHarpoonDash' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478714' },
        { id: 'ability_cling_grip', name: 'Cling Grip (Wall Jump)', whichAct: 1, completionPercent: 1, prereqs: [], location: 'Shellwood', parsingInfo: { type: 'flag', internalId: 'hasWalljump' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478189' },
        { id: 'ability_needolin', name: 'Needolin', whichAct: 1, completionPercent: 1, prereqs: [], location: 'Bellhart: Deafeat Widow.', parsingInfo: { type: 'flag', internalId: 'hasNeedolin' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478199' },
        { id: 'ability_needle_strike', name: 'Needle Strike', whichAct: 1, completionPercent: 1, prereqs: [], location: 'Blasted Steps (Pinstress\' Home)', parsingInfo: { type: 'flag', internalId: 'hasChargeSlash' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478510' },
        { id: 'ability_silk_soar', name: 'Silk Soar (Super Jump)', whichAct: 3, completionPercent: 1, prereqs: [], location: 'The Abyss', parsingInfo: { type: 'flag', internalId: 'hasSuperJump' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479288' },
      ],
    },
    {
      id: 'section_unique_abilities',
      name: 'Unique Abilities',
      description: 'These count 1% towards completion.',
      items: [
        { id: 'ability_sylphsong', name: 'Sylphsong', whichAct: 2, completionPercent: 1, prereqs: [], location: 'Weavnest Atla: Bind Eva after unlocking a total of 32 tool slots (excluding Hunter Crest slots) via Memory Lockets and acquiring new Crests.', parsingInfo: { type: 'flag', internalId: 'HasBoundCrestUpgrader' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479654' },
        { id: 'ability_everbloom', name: 'Everbloom', whichAct: 3, completionPercent: 1, prereqs: [], location: 'Complete "The Old Hearts" wish.', parsingInfo: { type: 'collectable', internalId: 'White Flower' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479387' },
      ],
    },
  ],
};