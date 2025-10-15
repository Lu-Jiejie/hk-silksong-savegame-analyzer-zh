import type { NormalisedTrackableCategory } from '../types';

export const upgrades: NormalisedTrackableCategory = {
  id: 'category_upgrades',
  name: 'Upgrades',
  description: 'Each Upgrade counts 1% towards completion.',
  sections: [
    {
      id: 'section_needle_upgrades',
      name: 'Needle Upgrades',
      description: 'Each of these upgrades count 1% towards completion.',
      items: [
        { id: 'upgrade_needle_upgrade_1', name: 'Needle Upgrade 1 (Sharpened Needle)', whichAct: 1, completionPercent: 1, prereqs: [], location: 'Bellhart: Speak to Plinney after defeating Widow.', parsingInfo: { type: 'flagInt', internalId: ['nailUpgrades', 1] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478210' },
        { id: 'upgrade_needle_upgrade_2', name: 'Needle Upgrade 2 (Shining Needle)', whichAct: 2, completionPercent: 1, prereqs: [], location: 'Bellhart: Speak to Plinney after acquiring 1 Pale Oil.', parsingInfo: { type: 'flagInt', internalId: ['nailUpgrades', 2] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478211' },
        { id: 'upgrade_needle_upgrade_3', name: 'Needle Upgrade 3 (Hivesteel Needle)', whichAct: 2, completionPercent: 1, prereqs: [], location: 'Bellhart: Complete "Great Taste of Pharloom" wish. Speak to Plinney and give him 450 Rosaries, and 1 Pale Oil.', parsingInfo: { type: 'flagInt', internalId: ['nailUpgrades', 3] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478889' },
        { id: 'upgrade_needle_upgrade_4', name: 'Needle Upgrade 4 (Pale Steel Needle)', whichAct: 3, completionPercent: 1, prereqs: [], location: 'Bellhart: Complete "Ecstasy of the End" wish (Appears on the Bellhart Wishwall in ACT 3 after finding every Lost Flea). Speak to Plinney and give him 680 Rosaries, and 1 Pale Oil.', parsingInfo: { type: 'flagInt', internalId: ['nailUpgrades', 4] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479444' },
      ]
    },
    {
      id: 'section_tool_pouch_upgrades',
      name: 'Tool Pouch Upgrades',
      description: 'Each of these upgrades count 1% towards completion.',
      items: [
        { id: 'upgrade_tool_pouch_upgrade_1', name: 'Tool Pouch Upgrade 1', whichAct: 1, completionPercent: 1, prereqs: [], location: 'Far Fields (Pilgrim\'s Rest) / Blasted Steps: Sold by Mort for 220 Rosaries. If you don\'t purchase this from Mort, it is sold by Grindle in ACT 3 for 220 Rosaries.', parsingInfo: { type: 'flag', internalId: 'PurchasedPilgrimsRestToolPouch' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477946' },
        { id: 'upgrade_tool_pouch_upgrade_2', name: 'Tool Pouch Upgrade 2', whichAct: 1, completionPercent: 1, prereqs: [], location: 'The Marrow: Complete Loddie\'s first pin challenge by hitting the target 15 times, or pick it up from this location in ACT 3.', parsingInfo: [{ type: 'flagInt', internalId: ['pinGalleriesCompleted', 1] }, { type: 'sceneData', internalId: ['Bone_12', 'Ladybug Craft Pickup'] }], mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478252' },
        { id: 'upgrade_tool_pouch_upgrade_3', name: 'Tool Pouch Upgrade 3', whichAct: 2, completionPercent: 1, prereqs: [], location: 'Greymoor (Halfway Home): Complete "Bugs of Pharloom" wish.', parsingInfo: { type: 'quest', internalId: 'Journal' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479167' },
        { id: 'upgrade_tool_pouch_upgrade_4', name: 'Tool Pouch Upgrade 4', whichAct: 2, completionPercent: 1, prereqs: [], location: 'Putrified Ducts (Fleatopia): Find 20 Lost Fleas in Pharloom.', parsingInfo: { type: 'sceneData', internalId: ['Aqueduct_05', 'Caravan Troupe Leader Fleatopia NPC'] }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479436' },
      ]
    },
    {
      id: 'section_crafting_kit_upgrades',
      name: 'Crafting Kit Upgrades',
      description: 'Each of these upgrades count 1% towards completion.',
      items: [
        { id: 'upgrade_crafting_kit_upgrade_1', name: 'Crafting Kit Upgrade 1', whichAct: 1, completionPercent: 1, prereqs: [], location: 'Deep Docks: Sold by Forge Daughter for 180 Rosaries.', parsingInfo: { type: 'flag', internalId: 'PurchasedForgeToolKit' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477919' },
        { id: 'upgrade_crafting_kit_upgrade_2', name: 'Crafting Kit Upgrade 2', whichAct: 1, completionPercent: 1, prereqs: [], location: 'Bellhart: Complete "Crawbug Clearing" wish.', parsingInfo: { type: 'quest', internalId: 'Crow Feathers' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478348' },
        { id: 'upgrade_crafting_kit_upgrade_3', name: 'Crafting Kit Upgrade 3', whichAct: 2, completionPercent: 1, prereqs: [], location: 'Blasted Steps: Sold by Grindle for 700 Rosaries.', parsingInfo: { type: 'flag', internalId: 'purchasedGrindleToolKit' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478533' },
        { id: 'upgrade_crafting_kit_upgrade_4', name: 'Crafting Kit Upgrade 4', whichAct: 2, completionPercent: 1, prereqs: [], location: 'Underworks: Sold by Twelfth Architect for 450 Rosaries.', parsingInfo: { type: 'flag', internalId: 'PurchasedArchitectToolKit' }, mapLink: 'https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478728' },
      ]
    },
  ],
};