import type { NormalisedTrackableCategory } from "../types";

export const ventricaStations: NormalisedTrackableCategory = {
  id: "category_ventrica_stations",
  name: "Ventrica Stations",
  description:
    "Underground pneumatic transport system that connects major locations within The Citadel.",
  sections: [
    {
      name: "Main",
      description: "",
      items: [
        {
          id: "ventrica_terminus",
          name: "Terminus",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after opening any one of the Ventrica Stations.",
          parsingInfo: {
            type: "flagMulti",
            internalId: [
              "UnlockedArboriumTube",
              "UnlockedHangTube",
              "UnlockedSongTube",
              "UnlockedCityBellwayTube",
              "UnlockedUnderTube",
              "UnlockedEnclaveTube",
            ],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478426",
        },
        {
          id: "ventrica_memorium",
          name: "Memorium",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after paying a toll of 80 Rosaries.",
          parsingInfo: { type: "flag", internalId: "UnlockedArboriumTube" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478425",
        },
        {
          id: "ventrica_high_halls",
          name: "High Halls",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after paying a toll of 80 Rosaries.",
          parsingInfo: { type: "flag", internalId: "UnlockedHangTube" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478445",
        },
        {
          id: "ventrica_first_shrine",
          name: "First Shrine",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after paying a toll of 80 Rosaries.",
          parsingInfo: { type: "flag", internalId: "UnlockedEnclaveTube" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478427",
        },
        {
          id: "ventrica_choral_chambers",
          name: "Choral Chambers",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after paying a toll of 80 Rosaries.",
          parsingInfo: { type: "flag", internalId: "UnlockedSongTube" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478424",
        },
        {
          id: "ventrica_grand_bellway",
          name: "Grand Bellway",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after paying a toll of 80 Rosaries.",
          parsingInfo: { type: "flag", internalId: "UnlockedCityBellwayTube" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478376",
        },
        {
          id: "ventrica_underworks",
          name: "Underworks",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Unlocks after paying a toll of 80 Rosaries.",
          parsingInfo: { type: "flag", internalId: "UnlockedUnderTube" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478422",
        },
      ],
    },
  ],
};
