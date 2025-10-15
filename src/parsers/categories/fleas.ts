import type { NormalisedTrackableCategory } from "../types";

export const fleas: NormalisedTrackableCategory = {
  id: "category_lost_fleas",
  name: "Lost Fleas",
  description:
    "Seek fleas across the lands of Pharloom and guide them to the Flea Caravan.",
  sections: [
    {
      name: "Main",
      description: "",
      items: [
        {
          id: "flea_lost_flea_1",
          name: "Lost Flea #1",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "The Marrow (Top): On a high-up ledge.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Bone_06" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477890",
        },
        {
          id: "flea_lost_flea_2",
          name: "Lost Flea #2",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "The Marrow: In a secret room towards the left of the Bellway. In the corner of an area filled with lavafalls.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Dock_16" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477907",
        },
        {
          id: "flea_lost_flea_3",
          name: "Lost Flea #3",
          whichAct: 1,
          completionPercent: 0,
          prereqs: ["Swift Step"],
          location:
            "Deep Docks (Top): Pull a lever down below, and Swift Step your way up towards it.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Bone_East_05" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477916",
        },
        {
          id: "flea_lost_flea_4",
          name: "Lost Flea #4",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Far Fields: Watch out for the pressure plate trap!",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Bone_East_17b" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477940",
        },
        {
          id: "flea_lost_flea_5",
          name: "Lost Flea #5",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Hunter's March: At the top of a long series of red fruit. ",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Ant_03" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477999",
        },
        {
          id: "flea_lost_flea_6",
          name: "Lost Flea #6",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Greymoor: Above and to the right of Craw Lake.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Greymoor_15b" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478145",
        },
        {
          id: "flea_lost_flea_7",
          name: "Lost Flea #7",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Greymoor: Reached through the top of the tower.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Greymoor_06" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478287",
        },
        {
          id: "flea_lost_flea_8",
          name: "Lost Flea #8",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Shellwood: At the bottom of a pit filled with Pollenica (and a few Phacia) enemies.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Shellwood_03" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478176",
        },
        {
          id: "flea_lost_flea_9",
          name: "Lost Flea #9",
          whichAct: 1,
          completionPercent: 0,
          prereqs: ["Drifter's Cloak", "Cling Grip"],
          location:
            "Far Fields: Hidden parkour path to the right of the Bellway.",
          parsingInfo: {
            type: "flag",
            internalId: "SavedFlea_Bone_East_10_Church",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478219",
        },
        {
          id: "flea_lost_flea_10",
          name: "Lost Flea #10",
          whichAct: 1,
          completionPercent: 0,
          prereqs: ["Cling Grip"],
          location:
            "Blasted Steps (Top): Near the section (above the Bellway) that connects to Sands of Karak.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Coral_35" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478386",
        },
        {
          id: "flea_lost_flea_11",
          name: "Lost Flea #11",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Sinner's Road: Jump over the first cage, then break the right side of the cage holding the flea.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Dust_12" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478360",
        },
        {
          id: "flea_lost_flea_12",
          name: "Lost Flea #12",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Exhaust Organ (Inside): In a room with a silk-refill spindle. Go towards left from there.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Dust_09" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478378",
        },
        {
          id: "flea_lost_flea_13",
          name: "Lost Flea #13",
          whichAct: 1,
          completionPercent: 0,
          prereqs: ["Cling Grip"],
          location: "Bellhart (Top): Behind a breakable wall.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Belltown_04" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478193",
        },
        {
          id: "flea_lost_flea_14",
          name: "Lost Flea #14",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Wormways: Behind a breakable wall, carried by an Aknid flying around the room.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Crawl_06" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478450",
        },
        {
          id: "flea_lost_flea_15",
          name: "Lost Flea #15",
          whichAct: 1,
          completionPercent: 0,
          prereqs: ["Key of Indolent"],
          location: "The Slab: In a small side-room at the edge of the area.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Slab_Cell" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478393",
        },
        {
          id: "flea_lost_flea_16",
          name: "Lost Flea #16",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bilewater: In a room behind a breakable wall. Defeat the two Snitchflies to rescue it.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Shadow_28" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478443",
        },
        {
          id: "flea_lost_flea_17",
          name: "Lost Flea #17",
          whichAct: 1,
          completionPercent: 0,
          prereqs: ["Clawline"],
          location:
            "Deep Docks: In a room that can only be reached after defeating a nearby arena battle.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Dock_03d" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478437",
        },
        {
          id: "flea_lost_flea_18",
          name: "Lost Flea #18",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Underworks: Can only be accessed by passing through Wisp Thicket, and traversing a room full of saws.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Under_23" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478419",
        },
        {
          id: "flea_lost_flea_19",
          name: "Lost Flea #19",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Bilewater: At the end of a trap-filled secret room.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Shadow_10" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478408",
        },
        {
          id: "flea_lost_flea_20",
          name: "Lost Flea #20",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Choral Chambers: At the end of a platforming challenge.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Song_14" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478398",
        },
        {
          id: "flea_lost_flea_21",
          name: "Lost Flea #21",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Sands of Karak: In a secret area, behind a breakable wall.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Coral_24" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478385",
        },
        {
          id: "flea_lost_flea_22",
          name: "Lost Flea #22",
          whichAct: 1,
          completionPercent: 0,
          prereqs: ["Cling Grip"],
          location: "Mount Fay: At the top of a room in the middle.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Peak_05c" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478380",
        },
        {
          id: "flea_lost_flea_23",
          name: "Lost Flea #23",
          whichAct: 2,
          completionPercent: 0,
          prereqs: ["Clawline"],
          location:
            "Songclave (Top-right): Parkour challange, accessible through Whispering Vaults.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Library_09" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478404",
        },
        {
          id: "flea_lost_flea_24",
          name: "Lost Flea #24",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Choral Chambers: Inside a secret shaft. Go behind a breakable wall at the bottom of the shaft to turn on a fan, and ride the air current in the shaft to the top.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Song_11" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478416",
        },
        {
          id: "flea_lost_flea_25",
          name: "Lost Flea #25",
          whichAct: 2,
          completionPercent: 0,
          prereqs: ["Clawline"],
          location:
            "Whispering Vaults: Move the box with a long track to its final position to reach this flea.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Library_01" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478402",
        },
        {
          id: "flea_lost_flea_26",
          name: "Lost Flea #26",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Underworks: In the bottom-most room beneath the Ventrica Station.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Under_21" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478420",
        },
        {
          id: "flea_lost_flea_27",
          name: "Lost Flea #27",
          whichAct: 2,
          completionPercent: 0,
          prereqs: ["Faydown Cloak"],
          location: "The Slab: Right above the lower-most bench.",
          parsingInfo: { type: "flag", internalId: "SavedFlea_Slab_06" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478392",
        },
        {
          id: "flea_lost_flea_28",
          name: "Lost Flea #28 (Giant Flea)",
          whichAct: 2,
          completionPercent: 0,
          prereqs: ["Faydown Cloak"],
          location: "Memorium: The dome-like area at the very top.",
          parsingInfo: { type: "flag", internalId: "tamedGiantFlea" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478413",
        },
        {
          id: "flea_lost_flea_29",
          name: "Lost Flea #29 (Kratt)",
          whichAct: 1,
          completionPercent: 0,
          prereqs: ["Cling Grip"],
          location:
            "Greymoor: Behind a breakable wall that's towards the upper-right of Halfway Home.",
          parsingInfo: {
            type: "flag",
            internalId: "CaravanLechReturnedToCaravan",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478271",
        },
        {
          id: "flea_lost_flea_30",
          name: "Lost Flea #30 (Vog)",
          whichAct: 2,
          completionPercent: 0,
          prereqs: ["Faydown Cloak"],
          location:
            "Putrified Ducts: In a hidden passage towards the right of the Bellway.",
          parsingInfo: { type: "flag", internalId: "MetTroupeHunterWild" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479138",
        },
      ],
    },
  ],
};
