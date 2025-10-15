import type { NormalisedTrackableCategory } from "../types";

export const maps: NormalisedTrackableCategory = {
  id: "category_maps",
  name: "Maps",
  description:
    "Area maps that reveal the layouts (and secrets) of different regions in Pharloom.",
  sections: [
    {
      name: "Main",
      description: "",
      items: [
        {
          id: "map_mosslands",
          name: "Mosslands",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Sold by Shakra for 40 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasMossGrottoMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479514",
        },
        {
          id: "map_the_marrow",
          name: "The Marrow",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Sold by Shakra for 50 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasBoneforestMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479515",
        },
        {
          id: "map_deep_docks",
          name: "Deep Docks",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Sold by Shakra for 50 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasDocksMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479516",
        },
        {
          id: "map_hunters_march",
          name: "Hunter's March",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Sold by Shakra for 70 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasHuntersNestMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479518",
        },
        {
          id: "map_far_fields",
          name: "Far Fields",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Sold by Shakra for 50 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasWildsMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479517",
        },
        {
          id: "map_greymoor",
          name: "Greymoor",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Sold by Shakra for 70 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasGreymoorMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479527",
        },
        {
          id: "map_bellhart",
          name: "Bellhart",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Sold by Shakra for 40 Rosaries, when you find her in Shellwoods onwards.",
          parsingInfo: { type: "flag", internalId: "HasBellhartMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479529",
        },
        {
          id: "map_shellwood",
          name: "Shellwood",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Sold by Shakra for 70 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasShellwoodMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479530",
        },
        {
          id: "map_wormways",
          name: "Wormways",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Sold by Shakra for 70 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasCrawlMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479523",
        },
        {
          id: "map_weavenest_atla",
          name: "Weavenest Atla",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Open Needolin Door to this area, then hit two glowing cylinders at the end of the corridor.",
          parsingInfo: { type: "flag", internalId: "HasWeavehomeMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478227",
        },
        {
          id: "map_blasted_steps",
          name: "Blasted Steps",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Sold by Shakra for 70 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasJudgeStepsMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479673",
        },
        {
          id: "map_sinners_road",
          name: "Sinner's Road",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Sold by Shakra for 90 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasHangMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479526",
        },
        {
          id: "map_grand_gate",
          name: "Grand Gate",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Purchased for 40 Rosaries from a machine displaying a model of the Citadel.",
          parsingInfo: { type: "flag", internalId: "HasSongGateMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478548",
        },
        {
          id: "map_underworks",
          name: "Underworks",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Acquired from an interactable wooden board in a dimly lit room.",
          parsingInfo: { type: "flag", internalId: "HasCitadelUnderstoreMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478551",
        },
        {
          id: "map_choral_chambers",
          name: "Choral Chambers",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Purchased for 70 Rosaries from a machine displaying a model of the Citadel.",
          parsingInfo: { type: "flag", internalId: "HasCoralMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479733",
        },
        {
          id: "map_whispering_vaults",
          name: "Whispering Vaults",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Purchased for 70 Rosaries from a machine displaying a model of the Citadel.",
          parsingInfo: { type: "flag", internalId: "HasLibraryMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478628",
        },
        {
          id: "map_whiteward",
          name: "Whiteward",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Purchased for 70 Rosaries from a machine displaying a model of the Citadel.",
          parsingInfo: { type: "flag", internalId: "HasWardMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478920",
        },
        {
          id: "map_cogwork_core",
          name: "Cogwork Core",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Acquired from a room above the bench.",
          parsingInfo: { type: "flag", internalId: "HasCogMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478612",
        },
        {
          id: "map_memorium",
          name: "Memorium",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Purchased for 70 Rosaries from a machine displaying a model of the Citadel.",
          parsingInfo: { type: "flag", internalId: "HasArboriumMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479107",
        },
        {
          id: "map_high_halls",
          name: "High Halls",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Purchased for 70 Rosaries from a machine displaying a model of the Citadel.",
          parsingInfo: { type: "flag", internalId: "HasHallsMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478907",
        },
        {
          id: "map_the_slab",
          name: "The Slab",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Drawn on a corpse, found at the end of a secret passage next to the bench.",
          parsingInfo: { type: "flag", internalId: "HasSlabMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478468",
        },
        {
          id: "map_mount_fay",
          name: "Mount Fay",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Sold by Shakra for 40 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasPeakMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479525",
        },
        {
          id: "map_bilewater",
          name: "Bilewater",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Sold by Shakra for 90 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasSwampMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479528",
        },
        {
          id: "map_putrified_ducts",
          name: "Putrified Ducts",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Found at the top of a room, reached by letting yourself be grabbed by a Barnark.",
          parsingInfo: { type: "flag", internalId: "HasAqueductMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479128",
        },
        {
          id: "map_sands_of_karak",
          name: "Sands of Karak",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Sold by Shakra for 90 Rosaries.",
          parsingInfo: { type: "flag", internalId: "HasCoralMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479524",
        },
        {
          id: "map_the_cradle",
          name: "The Cradle",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Purchased for 70 Rosaries from a machine displaying a model of the Citadel.",
          parsingInfo: { type: "flag", internalId: "HasCradleMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479095",
        },
        {
          id: "map_verdania",
          name: "Verdania",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Found in an old camp at the eastern end alongside a few deceased bugs, and a bench.",
          parsingInfo: { type: "flag", internalId: "HasCloverMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479382",
        },
        {
          id: "map_the_abyss",
          name: "The Abyss",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location: "Found right on top of the southern bench.",
          parsingInfo: { type: "flag", internalId: "HasAbyssMap" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479282",
        },
      ],
    },
  ],
};
