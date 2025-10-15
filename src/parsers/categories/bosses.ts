import type { NormalisedTrackableCategory } from "../types";

export const bosses: NormalisedTrackableCategory = {
  id: "category_bosses",
  name: "Bosses",
  description: "🎶Epic battle music...🎶",
  sections: [
    {
      name: "Main",
      description: "",
      items: [
        {
          id: "boss_moss_mother",
          name: "Moss Mother",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Appears beside the Ruined Chapel, at the end of Moss Grotto.",
          parsingInfo: { type: "flag", internalId: "defeatedMossMother" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=476904",
        },
        {
          id: "boss_bell_beast",
          name: "Bell Beast",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "The Bell Beast can be found at the very top of The Marrow.",
          parsingInfo: { type: "flag", internalId: "defeatedBellBeast" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477879",
        },
        {
          id: "boss_lace",
          name: "Lace",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Encounter her at the entrance of Deep Docks.",
          parsingInfo: { type: "flag", internalId: "defeatedLace1" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=476915",
        },
        {
          id: "boss_fourth_chorus",
          name: "Fourth Chorus",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Wakes up to fight you after receiving the Drifter's Cloak.",
          parsingInfo: { type: "flag", internalId: "defeatedSongGolem" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477978",
        },
        {
          id: "boss_savage_beastfly",
          name: "Savage Beastfly",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Deep inside the Chapel of the Beast.",
          parsingInfo: { type: "flag", internalId: "defeatedBoneFlyerGiant" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478019",
        },
        {
          id: "boss_sister_splinter",
          name: "Sister Splinter",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "At north end of Shellwood.",
          parsingInfo: { type: "flag", internalId: "defeatedSplinterQueen" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478137",
        },
        {
          id: "boss_skull_tyrant",
          name: "Skull Tyrant",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Skull Tyrant is first found in The Marrow (center dome).",
          parsingInfo: { type: "flag", internalId: "skullKingDefeated" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478136",
        },
        {
          id: "boss_moorwing",
          name: "Moorwing",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Past three rooms towards the west of the Greymoor Bellway.",
          parsingInfo: { type: "flag", internalId: "defeatedVampireGnatBoss" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478453",
        },
        {
          id: "boss_widow",
          name: "Widow",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Encountered in the room just towards the north of Bellhart.",
          parsingInfo: { type: "flag", internalId: "spinnerDefeated" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478138",
        },
        {
          id: "boss_great_conchflies",
          name: "Great Conchflies",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "In the north-west section of the Blasted Steps, Hornet encounters a room filled with pinkish conch shells.",
          parsingInfo: { type: "flag", internalId: "defeatedCoralDrillers" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478506",
        },
        {
          id: "boss_last_judge",
          name: "Last Judge",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Activate all five bellshrines (The Marrow, Deep Docks, Far Fields, Greymoor, Shellwood) and play the Needolin outside the Grand Gate to begin the fight. If it's proving difficult, you can skip it by fighting Phantom instead.",
          parsingInfo: { type: "flag", internalId: "defeatedLastJudge" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478545",
        },
        {
          id: "boss_phantom",
          name: "Phantom",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "In a room at the top of the Exhaust Organ, which acts as an alternative entrance to the Citadel, skipping the Last Judge boss.",
          parsingInfo: { type: "flag", internalId: "defeatedPhantom" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478370",
        },
        {
          id: "boss_cogwork_dancers",
          name: "Cogwork Dancers",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Cogwork Dancers are fought in the central area of Cogwork Core.",
          parsingInfo: { type: "flag", internalId: "defeatedCogworkDancers" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478606",
        },
        {
          id: "boss_trobbio",
          name: "Trobbio",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Encountered at The Stage after traversing through the Whispering Vaults.",
          parsingInfo: { type: "flag", internalId: "defeatedTrobbio" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480343",
        },
        {
          id: "boss_garmond_and_zaza",
          name: "Garmond and Zaza (Missable Entry)",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Only available in ACT 2. South-east part of Songclave.",
          parsingInfo: { type: "journal", internalId: ["Garmond_Zaza", 1] },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479361",
        },
        {
          id: "boss_forebrothers_signis_gron",
          name: "Forebrothers Signis & Gron",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "In an earlier room in the Deep Docks.",
          parsingInfo: { type: "flag", internalId: "defeatedDockForemen" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478831",
        },
        {
          id: "boss_the_unravelled",
          name: "The Unravelled",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "The Unravelled is a hidden boss found in Whiteward at the bottom of a disposal pit unlocked by the Surgeon's Key.",
          parsingInfo: { type: "flag", internalId: "wardBossDefeated" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478926",
        },
        {
          id: "boss_disgraced_chef_lugoli",
          name: "Disgraced Chef Lugoli",
          whichAct: 2,
          completionPercent: 0,
          prereqs: ["Faydown Cloak"],
          location: "In the kitchen on the north-east of Sinner's Road.",
          parsingInfo: { type: "flag", internalId: "defeatedRoachkeeperChef" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478992",
        },
        {
          id: "boss_father_of_the_flame",
          name: "Father of the Flame",
          whichAct: 2,
          completionPercent: 0,
          prereqs: ["Faydown Cloak"],
          location: "Can be found in the west corner of Wisp Thicket.",
          parsingInfo: { type: "flag", internalId: "defeatedWispPyreEffigy" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479155",
        },
        {
          id: "boss_groal_the_great",
          name: "Groal the Great",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Can be found in Bilehaven, at the top of Bilewater. ",
          parsingInfo: { type: "flag", internalId: "DefeatedSwampShaman" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478861",
        },
        {
          id: "boss_craggler",
          name: "Craggler",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Can be found across the pit from the Mosshome exit above Bone Bottom, right outside Wormways.",
          parsingInfo: { type: "flag", internalId: "roofCrabDefeated" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478088",
        },
        {
          id: "boss_voltvyrm",
          name: "Voltvyrm",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location: "Can be found in Voltnest within Sands of Karak.",
          parsingInfo: { type: "flag", internalId: "defeatedZapCoreEnemy" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479223",
        },
        {
          id: "boss_raging_conchfly",
          name: "Raging Conchfly",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Can be found in the north-west area of Sands of Karak.",
          parsingInfo: { type: "flag", internalId: "defeatedCoralDrillerSolo" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479227",
        },
        {
          id: "boss_first_sinner",
          name: "First Sinner",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Can be found in the lower area of The Slab, accessible after obtaining the Key of Apostate.",
          parsingInfo: { type: "flag", internalId: "defeatedFirstWeaver" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479023",
        },
        {
          id: "boss_broodmother",
          name: "Broodmother",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Can be found in a cave in The Slab after accepting the "Grand Hunt" wish in Songclave.',
          parsingInfo: { type: "flag", internalId: "defeatedBroodMother" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479255",
        },
        {
          id: "boss_second_sentinel",
          name: "Second Sentinel",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Can only be fought after beginning the "Final Audience" wish, found in the south-east area of High Halls.',
          parsingInfo: {
            type: "flag",
            internalId: "defeatedSongChevalierBoss",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479253",
        },
        {
          id: "boss_shakra",
          name: "Shakra (Missable Entry)",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Only available in ACT 2. Towards the east of Bellhart after completing "Trail\'s End" wish; hit the ring that you find as you enter the Greymoor area, to summon Shakra for a friendly fight.',
          parsingInfo: { type: "journal", internalId: ["Shakra", 1] },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479822",
        },
        {
          id: "boss_grand_mother_silk",
          name: "Grand Mother Silk",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Can be found above Cogwork Core in The Cradle.",
          parsingInfo: { type: "journal", internalId: ["Silk Boss", 1] },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479099",
        },
        {
          id: "boss_bell_eater",
          name: "Bell Eater",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Can be found in any Bellway Station after the beginning of ACT 3.",
          parsingInfo: { type: "flag", internalId: "bellCentipedeAppeared" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479264",
        },
        {
          id: "boss_lost_garmond",
          name: "Lost Garmond",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            'Can be found in Blasted Steps, in a room to the west of the Bellway. He can only be fought during the "Hero\'s Call" wish.',
          parsingInfo: {
            type: "flag",
            internalId: "garmondBlackThreadDefeated",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479452",
        },
        {
          id: "boss_crawfather",
          name: "Crawfather",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Can be found in Greymoor, in the basement of the large building in Craw Lake.",
          parsingInfo: { type: "flag", internalId: "defeatedCrowCourt" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480319",
        },
        {
          id: "boss_plasmified_zango",
          name: "Plasmified Zango",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Can be found in a secret room within western Wormways during ACT 3.",
          parsingInfo: { type: "journal", internalId: ["Blue Assistant", 1] },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479273",
        },
        {
          id: "boss_watcher_at_the_edge",
          name: "Watcher at the Edge",
          whichAct: 3,
          completionPercent: 0,
          prereqs: ["Silk Soar", "Needolin"],
          location: "Can be found at the west-center of Sands of Karak.",
          parsingInfo: { type: "flag", internalId: "defeatedGreyWarrior" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479494",
        },
        {
          id: "boss_palestag",
          name: "Palestag",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location: "Can be found in Lost Verdania.",
          parsingInfo: { type: "flag", internalId: "defeatedWhiteCloverstag" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479408",
        },
        {
          id: "boss_clover_dancers",
          name: "Clover Dancers",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Encountered at the very top of Lost Verdania, after collecting enough memory orbs.",
          parsingInfo: { type: "flag", internalId: "defeatedCloverDancers" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479427",
        },
        {
          id: "boss_gurr_the_outcast",
          name: "Gurr the Outcast",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            'Can be found in Far Fields after accepting the "The Hidden Hunter" wish.',
          parsingInfo: { type: "flag", internalId: "defeatedAntTrapper" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479467",
        },
        {
          id: "boss_tormented_trobbio",
          name: "Tormented Trobbio",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Encountered at The Stage, above the Grand Bellway station.",
          parsingInfo: { type: "flag", internalId: "defeatedTormentedTrobbio" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479377",
        },
        {
          id: "boss_pinstress",
          name: "Pinstress",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Can be found in Mount Fay, in the same area as the bench that is at halfway up the mountain.",
          parsingInfo: {
            type: "flag",
            internalId: "PinstressPeakBattleAccepted",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479464",
        },
        {
          id: "boss_shrine_guardian_seth",
          name: "Shrine Guardian Seth",
          whichAct: 3,
          completionPercent: 0,
          prereqs: ["Silk Soar"],
          location:
            "Can be fought in a hidden area in Shellwood, accessed through a breakable wall in the Grand Gate's lift shaft.",
          parsingInfo: { type: "flag", internalId: "defeatedSeth" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=480352",
        },
        {
          id: "boss_nyleth",
          name: "Nyleth",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Section behind a breakable wall on the left of the elevator shaft of the Grand Gate.",
          parsingInfo: { type: "flag", internalId: "defeatedFlowerQueen" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479404",
        },
        {
          id: "boss_skarrsinger_karmelita",
          name: "Skarrsinger Karmelita",
          whichAct: 3,
          completionPercent: 0,
          prereqs: ["Elegy Of The Deep", "Silk Soar"],
          location: " Can be found in the north-east area of Far Fields.",
          parsingInfo: { type: "flag", internalId: "defeatedAntQueen" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479198",
        },
        {
          id: "boss_crust_king_khann",
          name: "Crust King Khann",
          whichAct: 3,
          completionPercent: 0,
          prereqs: ["Elegy Of The Deep"],
          location:
            "Can be found in the Coral Tower, north-east in Sands of Karak.",
          parsingInfo: { type: "flag", internalId: "defeatedCoralKing" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479392",
        },
        {
          id: "boss_summoned_saviour",
          name: "Summoned Saviour (Steel Soul Entry)",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Can be found at the extreme bottom-left of Bonegrave behind a breakable wall, a sub area of Moss Grotto.",
          parsingInfo: { type: "journal", internalId: ["Abyss Mass", 1] },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479740",
        },
        {
          id: "boss_lost_lace",
          name: "Lost Lace",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Located in The Abyss, under the vast void ocean that lies within.",
          parsingInfo: { type: "journal", internalId: ["Lost Lace", 1] },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479471",
        },
      ],
    },
  ],
};
