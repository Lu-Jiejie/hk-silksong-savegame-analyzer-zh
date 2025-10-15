import type { NormalisedTrackableCategory } from "../types";

export const quests: NormalisedTrackableCategory = {
  id: "category_quests",
  name: "Quests",
  description: "Quests",
  sections: [
    {
      id: "section_objectives",
      name: "Objectives",
      description:
        "Main story objectives that Hornet must complete to progress through the game.",
      items: [
        {
          id: "quest_the_great_citadel",
          name: "The Great Citadel",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bone Bottom: Ascend through the lands of Pharloom to reach the Citadel at the kingdom's peak.",
          parsingInfo: { type: "quest", internalId: "Citadel Seeker" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477834",
        },
        {
          id: "quest_the_threadspun_town",
          name: "The Threadspun Town",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Bellhart: Defeat Widow.",
          parsingInfo: { type: "quest", internalId: "The Threadspun Town" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478028",
        },
        {
          id: "quest_grand_gate",
          name: "Grand Gate",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Blasted Steps (Outside Grand Gate): Awaken the old bells throughout the lands.",
          parsingInfo: { type: "quest", internalId: "Grand Gate Bellshrines" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478544",
        },
        {
          id: "quest_silent_halls",
          name: "Silent Halls",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Grand Gate",
          parsingInfo: { type: "quest", internalId: "Citadel Investigate" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478547",
        },
        {
          id: "quest_conductors_melody",
          name: "Conductor's Melody",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "High Halls",
          parsingInfo: { type: "flag", internalId: "HasMelodyConductor" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478609",
        },
        {
          id: "quest_architects_melody",
          name: "Architect's Melody",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Cogwork Core",
          parsingInfo: { type: "flag", internalId: "HasMelodyArchitect" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478610",
        },
        {
          id: "quest_vaultkeepers_melody",
          name: "Vaultkeeper's Melody",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Whispering Vaults",
          parsingInfo: { type: "flag", internalId: "HasMelodyLibrarian" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478611",
        },
        {
          id: "quest_pharlooms_crown",
          name: "Pharloom's Crown",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Cogwork Core (Centre)",
          parsingInfo: { type: "quest", internalId: "Citadel Ascent" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479087",
        },
        {
          id: "quest_pale_monarch",
          name: "Pale Monarch",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "The Cradle: One of the endings.",
          parsingInfo: { type: "quest", internalId: "Silk Defeat Snare" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479100",
        },
        {
          id: "quest_soul_snare",
          name: "Soul Snare",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'The Cradle: Scale the Citadel and ensnare its monarch in a deadly trap (requires the completion of "Silk and Soul" wish).',
          parsingInfo: { type: "quest", internalId: "Soul Snare" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479260",
        },
        {
          id: "quest_after_the_fall",
          name: "After the Fall",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location: "The Cradle: Discover the fate of Pharloom.",
          parsingInfo: { type: "quest", internalId: "Black Thread Pt0" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479261",
        },
        {
          id: "quest_beast_in_the_bells",
          name: "Beast in the Bells",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Grand Bellway: This is also accessible from any other Bellway.",
          parsingInfo: { type: "quest", internalId: "Bellbeast Rescue" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479263",
        },
        {
          id: "quest_awaiting_the_end",
          name: "Awaiting the End",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Songclave: Confront the Caretaker and his family in the Ruined Chapel beside Bone Bottom.",
          parsingInfo: {
            type: "quest",
            internalId: "Black Thread Pt1 Shamans",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479262",
        },
        {
          id: "quest_the_dark_below",
          name: "The Dark Below",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bone Bottom (Ruined Chapel): Find aid in Deep Docks to access its diving bell and descend beneath Pharloom.",
          parsingInfo: { type: "quest", internalId: "Diving Bell Pt3 Descend" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479267",
        },
        {
          id: "quest_return_to_pharloom",
          name: "Return to Pharloom",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location: "The Abyss: Escape!",
          parsingInfo: { type: "quest", internalId: "Black Thread Pt3 Escape" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479283",
        },
        {
          id: "quest_spell_seeker",
          name: "Spell Seeker",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location: "Bone Bottom (Ruined Chapel): Return to the Snail Shamans.",
          parsingInfo: { type: "quest", internalId: "Black Thread Pt4 Return" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479385",
        },
        {
          id: "quest_the_old_hearts",
          name: "The Old Hearts",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            'Bone Bottom (Ruined Chapel): Complete the "Heart of Might", "Heart of the Woods", "Heart of the Wild" objectives.',
          parsingInfo: { type: "quest", internalId: "Black Thread Pt5 Heart" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479387",
        },
        {
          id: "quest_heart_of_might",
          name: "Heart of Might",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location: "Sands of Karak (Coral Tower)",
          parsingInfo: { type: "flag", internalId: "CollectedHeartCoral" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479388",
        },
        {
          id: "quest_heart_of_the_woods",
          name: "Heart of the Woods",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Shellwood: Find a breakable wall in Grand Gate's elevator shaft, to reach here.",
          parsingInfo: { type: "flag", internalId: "CollectedHeartFlower" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479389",
        },
        {
          id: "quest_heart_of_the_wild",
          name: "Heart of the Wild",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location: "Far Fields: Silk Soar near Karmelita's statue.",
          parsingInfo: { type: "flag", internalId: "CollectedHeartHunter" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479390",
        },
        {
          id: "quest_last_dive",
          name: "Last Dive",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location: "The Abyss: The final ending(?).",
          parsingInfo: { type: "journal", internalId: ["Lost Lace", 1] },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479431",
        },
      ],
    },
    {
      id: "section_wishes_wayfarer",
      name: "Wishes · Wayfarer",
      description:
        "Wishes involving travel and exploration, finding something or someone in the world.",
      items: [
        {
          id: "quest_the_lost_fleas",
          name: "The Lost Fleas",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "The Marrow: Wish from Fleamaster Mooshka.",
          parsingInfo: [
            { type: "quest", internalId: "Save the Fleas" },
            { type: "quest", internalId: "Save the Fleas Pre" },
          ],
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477857",
        },
        {
          id: "quest_my_missing_courier",
          name: "My Missing Courier",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bellhart: On the Wishwall (appears after defeating Widow).",
          parsingInfo: { type: "quest", internalId: "Save Courier Short" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478207",
        },
        {
          id: "quest_pinmaster",
          name: "Pinmaster's Oil",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bellhart: Wish from Pinmaster Plinney (accessible after sharpening your needle for the first time, and speaking to Pinmaster Plinney).",
          parsingInfo: { type: "quest", internalId: "A Pinsmiths Tools" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478211",
        },
        {
          id: "quest_the_wandering_merchant",
          name: "The Wandering Merchant",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Songclave: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Save City Merchant" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478634",
        },
        {
          id: "quest_rite_of_rebirth",
          name: "Rite of Rebirth",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Shellwood: Wish from Greyroot (accessible after completing the "Rite of the Pollip" wish and giving Twisted Bud to them).',
          parsingInfo: { type: "quest", internalId: "Wood Witch Curse" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478792",
        },
        {
          id: "quest_my_missing_brother",
          name: "My Missing Brother",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Bellhart: On the Wishwall (appears in ACT 2, provided that "My Missing Courier" wish is completed).',
          parsingInfo: { type: "quest", internalId: "Save Courier Tall" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478798",
        },
        {
          id: "quest_infestation_operation",
          name: "Infestation Operation",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Greymoor: Wish from Yarnaby (accessible after completing "Rite of Rebirth" wish).',
          parsingInfo: { type: "quest", internalId: "Doctor Curse Cure" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478814",
        },
        {
          id: "quest_balm_for_the_wounded",
          name: "Balm for the Wounded",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Songclave: Wish from Sherma (appears after you discover Whiteward, is also accessible by directly speaking to Sherma in Whiteward).",
          parsingInfo: { type: "quest", internalId: "Save Sherma" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478933",
        },
        {
          id: "quest_trails_end",
          name: "Trail's End",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Any Wishwall (appears after purchasing all maps from Shakra)",
          parsingInfo: { type: "quest", internalId: "Shakra Final Quest" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479237",
        },
        {
          id: "quest_the_lost_merchant",
          name: "The Lost Merchant",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Songclave: On the Wishwall (appears after getting the Faydown Cloak and completing "The Wandering Merchant" and "Strengthening Songclave" wishes).',
          parsingInfo: {
            type: "quest",
            internalId: "Save City Merchant Bridge",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479244",
        },
        {
          id: "quest_final_audience",
          name: "Final Audience",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Songclave: On the Wishwall (appears after learning The Conductor's Melody, activating Second Sentinel (3 Cogheart Pieces), encountering a couple of Second Sentinel fight scenes in Choral Chambers).",
          parsingInfo: { type: "quest", internalId: "Song Knight" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479245",
        },
        {
          id: "quest_fatal_resolve",
          name: "Fatal Resolve",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Songclave: On the Wishwall (appears after returning from The Abyss, is also accessible by visiting Pinstress' Home).",
          parsingInfo: { type: "quest", internalId: "Pinstress Battle" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479443",
        },
        {
          id: "quest_heros_call",
          name: "Hero's Call",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bellhart: On the Wishwall (appears after encountering a couple of Garmond and Zaza fight scenes).",
          parsingInfo: { type: "quest", internalId: "Garmond Black Threaded" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479445",
        },
        {
          id: "quest_ecstasy_of_the_end",
          name: "Ecstasy of the End",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bellhart: On the Wishwall (appears after finding all 30 Lost Fleas).",
          parsingInfo: { type: "quest", internalId: "Flea Games" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479641",
        },
        {
          id: "quest_pain_anguish_and_misery",
          name: "Pain, Anguish, and Misery",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location: "Songclave: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Tormented Trobbio" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479370",
        },
      ],
    },
    {
      id: "section_wishes_gather",
      name: "Wishes · Gather",
      description:
        "Wishes requiring collection of a specific amount or variety of items.",
      items: [
        {
          id: "quest_berry_picking",
          name: "Berry Picking",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Moss Grotto (Mosshome): Wish from Moss Druid.",
          parsingInfo: { type: "quest", internalId: "Mossberry Collection 1" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477876",
        },
        {
          id: "quest_rite_of_the_pollip",
          name: "Rite of the Pollip",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Shellwood: Wish from Greyroot.",
          parsingInfo: { type: "quest", internalId: "Shell Flowers" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478173",
        },
        {
          id: "quest_silver_bells",
          name: "Silver Bells",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bellhart: On the Wishwall (appears after defeating Widow).",
          parsingInfo: { type: "quest", internalId: "Shiny Bell Goomba" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478206",
        },
        {
          id: "quest_alchemists_assistant",
          name: "Alchemist's Assistant",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Wormways: Wish from Alchemist Zylotol (accessed after talking to him twice).",
          parsingInfo: { type: "quest", internalId: "Extractor Blue" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478482",
        },
        {
          id: "quest_great_taste_of_pharloom",
          name: "Great Taste of Pharloom",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Choral Chambers: Wish from Loyal Mergwin.",
          parsingInfo: { type: "quest", internalId: "Great Gourmand" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478889",
        },
        {
          id: "quest_advanced_alchemy",
          name: "Advanced Alchemy",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            'Wormways: Wish from Alchemist Zylotol (accessed in ACT 3, provided that "Alchemist\'s Assistant" wish is completed).',
          parsingInfo: { type: "quest", internalId: "Extractor Blue Worms" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479278",
        },
      ],
    },
    {
      id: "section_wishes_donate",
      name: "Wishes · Donate",
      description:
        "Wishes requiring donation of shell shards or rosaries for construction and improvements.",
      items: [
        {
          id: "quest_bone_bottom_repairs",
          name: "Bone Bottom Repairs",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Bone Bottom: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Building Materials" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477884",
        },
        {
          id: "quest_a_lifesaving_bridge",
          name: "A Lifesaving Bridge",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bone Bottom: On the Wishwall (appears after you reach Greymoor).",
          parsingInfo: {
            type: "quest",
            internalId: "Building Materials (Bridge)",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478220",
        },
        {
          id: "quest_restoration_of_bellhart",
          name: "Restoration of Bellhart",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bellhart: On the Wishwall (appears after defeating Widow, speaking to Pinmaster Plinney for the first needle upgrade, and selling a(ny) relic to Relic Seeker Scrounge).",
          parsingInfo: { type: "quest", internalId: "Belltown House Start" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478291",
        },
        {
          id: "quest_bellharts_glory",
          name: "Bellhart's Glory",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            'Bellhart: On the Wishwall (appears sometime after completing "Restoration of Bellhart" wish).',
          parsingInfo: { type: "quest", internalId: "Belltown House Mid" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478797",
        },
        {
          id: "quest_an_icon_of_hope",
          name: "An Icon of Hope",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Bone Bottom: On the Wishwall (appears in ACT 2).",
          parsingInfo: {
            type: "quest",
            internalId: "Building Materials (Statue)",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478839",
        },
        {
          id: "quest_building_up_songclave",
          name: "Building up Songclave",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Songclave: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Songclave Donation 1" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478631",
        },
        {
          id: "quest_strengthening_songclave",
          name: "Strengthening Songclave",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Songclave: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Songclave Donation 2" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479239",
        },
      ],
    },
    {
      id: "section_wishes_hunt",
      name: "Wishes · Hunt",
      description:
        "Wishes involving hunting a certain number or type of normal enemies for specific objectives.",
      items: [
        {
          id: "quest_garb_of_the_pilgrims",
          name: "Garb of the Pilgrims",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Bone Bottom: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Pilgrim Rags" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477885",
        },
        {
          id: "quest_flexile_spines",
          name: "Flexile Spines",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Far Fields: Wish from Seamstress.",
          parsingInfo: { type: "quest", internalId: "Brolly Get" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477964",
        },
        {
          id: "quest_crawbug_clearing",
          name: "Crawbug Clearing",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bellhart: On the Wishwall (appears after defeating Widow).",
          parsingInfo: { type: "quest", internalId: "Crow Feathers" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478208",
        },
        {
          id: "quest_volatile_flintbeetles",
          name: "Volatile Flintbeetles",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bone Bottom: On the Wishwall (appears after you reach Greymoor).",
          parsingInfo: { type: "quest", internalId: "Rock Rollers" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478221",
        },
        {
          id: "quest_roach_guts",
          name: "Roach Guts",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Sinner's Roard: Wish from Crull and Benjin.",
          parsingInfo: { type: "quest", internalId: "Roach Killing" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478356",
        },
        {
          id: "quest_fine_pins",
          name: "Fine Pins",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Songclave: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Fine Pins" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478633",
        },
        {
          id: "quest_cloaks_of_the_choir",
          name: "Cloaks of the Choir",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Songclave: On the Wishwall. (appears after completing "Buildung Up Songclave" and "Fine Pins" wishes).',
          parsingInfo: { type: "quest", internalId: "Song Pilgrim Cloaks" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478934",
        },
        {
          id: "quest_broodfeast",
          name: "Broodfeast",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Putrified Ducts: Wish from Runt.",
          parsingInfo: { type: "quest", internalId: "Huntress Quest" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478865",
        },
      ],
    },
    {
      id: "section_wishes_grand_hunt",
      name: "Wishes · Grand Hunt",
      description:
        "Wishes involving hunting and defeating boss-level enemies to achieve objectives.",
      items: [
        {
          id: "quest_the_terrible_tyrant",
          name: "The Terrible Tyrant",
          whichAct: 1,
          completionPercent: 0,
          prereqs: ["Cling Grip"],
          location:
            "Bone Bottom: On the Wishwall (appears after acquiring Cling Grip).",
          parsingInfo: { type: "quest", internalId: "Skull King" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478223",
        },
        {
          id: "quest_savage_beastfly",
          name: "Savage Beastfly",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bellhart: On the Wishwall (appears sometime in ACT 2, provided that Savage Beastfly in Hunter's March (Chapel of the Beast) is defeated).",
          parsingInfo: { type: "quest", internalId: "Beastfly Hunt" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478799",
        },
        {
          id: "quest_the_wailing_mother",
          name: "The Wailing Mother",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Songclave: On the Wishwall (appears after completing "The Wandering Merchant" and "Strengthening Songclave" wishes).',
          parsingInfo: { type: "quest", internalId: "Broodmother Hunt" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479246",
        },
        {
          id: "quest_dark_hearts",
          name: "Dark Hearts",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location: "Bellhart: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Destroy Thread Cores" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479448",
        },
        {
          id: "quest_the_hidden_hunter",
          name: "The Hidden Hunter",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location: "Bellhart: On the Wishwall.",
          parsingInfo: { type: "quest", internalId: "Ant Trapper" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479446",
        },
      ],
    },
    {
      id: "section_wishes_delivery",
      name: "Wishes · Delivery",
      description:
        "Wishes requiring delivery of fragile packages from one location to another without using fast travel.",
      items: [
        {
          id: "quest_bone_bottom_supplies",
          name: "Bone Bottom Supplies",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Bellhart: Wish from Couriers Tipp & Pill (accessible after completing "My Missing Courier" and "My Missing Brother" wishes).',
          parsingInfo: {
            type: "quest",
            internalId: "Courier Delivery Bonebottom",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478313",
        },
        {
          id: "quest_pilgrims_rest_supplies",
          name: "Pilgrim's Rest Supplies",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Bellhart: Wish from Couriers Tipp & Pill (accessible after completing "My Missing Courier" and "My Missing Brother" wishes).',
          parsingInfo: {
            type: "quest",
            internalId: "Courier Delivery Pilgrims Rest",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478313",
        },
        {
          id: "quest_fleatopia_supplies",
          name: "Fleatopia Supplies",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Bellhart: Wish from Couriers Tipp & Pill (accessible after completing "My Missing Courier" and "My Missing Brother" wishes).',
          parsingInfo: {
            type: "quest",
            internalId: "Courier Delivery Fleatopia",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478313",
        },
        {
          id: "quest_songclave_supplies",
          name: "Songclave Supplies",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Bellhart: Wish from Couriers Tipp & Pill (accessible after completing "My Missing Courier" and "My Missing Brother" wishes).',
          parsingInfo: {
            type: "quest",
            internalId: "Courier Delivery Songclave",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478313",
        },
        {
          id: "quest_queens_egg",
          name: "Queen's Egg",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Bellhart: Wish from Couriers Tipp & Pill (accessible after completing "My Missing Courier" and "My Missing Brother" wishes).',
          parsingInfo: {
            type: "quest",
            internalId: "Courier Delivery Dustpens Slave",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479177",
        },
        {
          id: "quest_liquid_lacquer",
          name: "Liquid Lacquer",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Bellhart: Wish from Couriers Tipp & Pill (accessible after completing "My Missing Courier" and "My Missing Brother" wishes).',
          parsingInfo: {
            type: "quest",
            internalId: "Courier Delivery Mask Maker",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479199",
        },
        {
          id: "quest_survivors_camp_supplies",
          name: "Survivor's Camp Supplies",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bellhart: Wish from Couriers Tipp & Pill (accessible in ACT 3).",
          parsingInfo: { type: "quest", internalId: "Courier Delivery Fixer" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478313",
        },
      ],
    },
    {
      id: "section_wishes_learn",
      name: "Wishes · Learn",
      description: "Unique wish to learn about the creatures of Pharloom.",
      items: [
        {
          id: "quest_bugs_of_pharloom",
          name: "Bugs of Pharloom",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Greymoor (Halfway Home): Wish from Nuu.",
          parsingInfo: { type: "quest", internalId: "Journal" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478042",
        },
      ],
    },
    {
      id: "section_wishes_collect",
      name: "Wishes · Collect",
      description:
        "Unique wish to collect souls (and a trap) for a special objective.",
      items: [
        {
          id: "quest_silk_and_soul",
          name: "Silk and Soul",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Songclave: On the Wishwall (appears after defeating Lace, saving 25 Fleas and moving the caravan to Fleatopia, unlocking the Bellhome, completing all the available wishes, and talking to the Caretaker).",
          parsingInfo: { type: "quest", internalId: "Soul Snare Pre" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479243",
        },
      ],
    },
    {
      id: "section_wishes_sprint",
      name: "Wishes · Sprint",
      description: "Unique wish to prove speed and agility.",
      items: [
        {
          id: "quest_fastest_in_pharloom",
          name: "Fastest in Pharloom",
          whichAct: 3,
          completionPercent: 0,
          prereqs: ["Silk Soar"],
          location: "Far Fields: Wish from Sprintmaster Swift.",
          parsingInfo: { type: "quest", internalId: "Sprintmaster Race" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479193",
        },
      ],
    },
    {
      id: "section_wishes_witness",
      name: "Wishes · Witness",
      description:
        "Unique wish triggered by interacting with a mysterious riddle tablet.",
      items: [
        {
          id: "quest_passing_of_the_age",
          name: "Passing of the Age",
          whichAct: 3,
          completionPercent: 0,
          prereqs: ["Silk Soar"],
          location:
            "Putrified Ducts (Pale Lake): Interact with the riddle tablet.",
          parsingInfo: { type: "quest", internalId: "Mr Mushroom" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479142",
        },
      ],
    },
    {
      id: "section_wishes_steel",
      name: "Wishes · Steel",
      description:
        "Unique wish given by a seer, available only in Steel Soul mode.",
      items: [
        {
          id: "quest_a_vassal_lost",
          name: "A Vassal Lost (Steel Soul Wish)",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Shellwood: (Steel Soul Only) Wish from Steel Seer Zi.",
          parsingInfo: { type: "quest", internalId: "Steel Sentinel Pt2" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479727",
        },
      ],
    },
  ],
};
