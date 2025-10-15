import type { NormalisedTrackableCategory } from "../types";

export const bellways: NormalisedTrackableCategory = {
  id: "category_bellways",
  name: "Bellways",
  description:
    "Fast travel stations throughout Pharloom that allow quick movement between discovered (and unlocked) Bellway stations.",
  sections: [
    {
      name: "Main",
      description: "",
      items: [
        {
          id: "bellway_bone_bottom",
          name: "Bone Bottom",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after defeating the Bell Beast.",
          parsingInfo: { type: "flag", internalId: "UnlockedFastTravel" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477883",
        },
        {
          id: "bellway_the_marrow",
          name: "The Marrow",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after defeating the Bell Beast.",
          parsingInfo: { type: "flag", internalId: "UnlockedFastTravel" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477882",
        },
        {
          id: "bellway_deep_docks",
          name: "Deep Docks",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after paying a toll of 40 Rosaries.",
          parsingInfo: { type: "flag", internalId: "UnlockedDocksStation" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477905",
        },
        {
          id: "bellway_far_fields",
          name: "Far Fields",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after paying a toll of 50 Rosaries.",
          parsingInfo: {
            type: "flag",
            internalId: "UnlockedBoneforestEastStation",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477933",
        },
        {
          id: "bellway_greymoor",
          name: "Greymoor",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after paying a toll of 60 Rosaries.",
          parsingInfo: { type: "flag", internalId: "UnlockedGreymoorStation" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478037",
        },
        {
          id: "bellway_bellhart",
          name: "Bellhart",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after paying a toll of 60 Rosaries.",
          parsingInfo: { type: "flag", internalId: "UnlockedBelltownStation" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478029",
        },
        {
          id: "bellway_shellwood",
          name: "Shellwood",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after paying a toll of 40 Rosaries.",
          parsingInfo: { type: "flag", internalId: "UnlockedShellwoodStation" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478178",
        },
        {
          id: "bellway_blasted_steps",
          name: "Blasted Steps",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after paying a toll of 60 Rosaries.",
          parsingInfo: {
            type: "flag",
            internalId: "UnlockedCoralTowerStation",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478308",
        },
        {
          id: "bellway_the_slab",
          name: "The Slab",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after paying a toll of 40 Rosaries.",
          parsingInfo: { type: "flag", internalId: "UnlockedPeakStation" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478390",
        },
        {
          id: "bellway_grand_bellway",
          name: "Grand Bellway",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after paying a toll of 80 Rosaries.",
          parsingInfo: { type: "flag", internalId: "UnlockedCityStation" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478374",
        },
        {
          id: "bellway_bilewater",
          name: "Bilewater",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after paying a toll of 80 Rosaries.",
          parsingInfo: { type: "flag", internalId: "UnlockedShadowStation" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478447",
        },
        {
          id: "bellway_putrified_ducts",
          name: "Putrified Ducts",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after paying a toll of 80 Rosaries.",
          parsingInfo: { type: "flag", internalId: "UnlockedAqueductStation" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478411",
        },
      ],
    },
  ],
};
