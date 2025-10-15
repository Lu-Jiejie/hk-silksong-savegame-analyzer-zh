import type { NormalisedTrackableCategory } from "../types";

export const mementos: NormalisedTrackableCategory = {
  id: "category_mementos",
  name: "Mementos",
  description:
    "Personal keepsakes and tokens of remembrance from various characters and places throughout Pharloom. These are only tracked once they've been placed in your Bellhome.",
  sections: [
    {
      name: "Main",
      description: "",
      items: [
        {
          id: "memento_grey_memento",
          name: "Grey Memento",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location: "Sands of Karak: Defeat Watcher at the Edge.",
          parsingInfo: { type: "mementoDeposit", internalId: "Grey Memento" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479630",
        },
        {
          id: "memento_heros_memento",
          name: "Hero's Memento",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location: "Blasted Steps: Defeat Lost Garmond.",
          parsingInfo: {
            type: "mementoDeposit",
            internalId: "Memento Garmond",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479632",
        },
        {
          id: "memento_surface_memento",
          name: "Surface Memento",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "The Surface (atop The Cradle): Play the Needolin in the house on the far right side of the Nameless Town to make it drop from the ceiling.",
          parsingInfo: {
            type: "mementoDeposit",
            internalId: "Memento Surface",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479542",
        },
        {
          id: "memento_hunters_memento",
          name: "Hunter's Memento",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Greymoor (Halfway Home): Complete the Hunter's Journal. The journal entries for Shakra, Garmond & Zaza, Palestag, Lost Garmond, Lost Lace, and Summoned Saviour are not required.",
          parsingInfo: { type: "mementoDeposit", internalId: "Hunter Memento" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479635",
        },
        {
          id: "memento_craw_memento",
          name: "Craw Memento",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            'Far Fields: Greymoor (Craw Lake): Defeat Crawfather. Unlocked at the same time as a "Crawbell" (also used to decorate the Bellhome), which generates Rosaries and Shell Shards over time.',
          parsingInfo: {
            type: "mementoDeposit",
            internalId: "Crowman Memento",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479580",
        },
        {
          id: "memento_sprintmaster_memento",
          name: "Sprintmaster Memento",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Complete a race with Sprintmaster Swift after you deliver three hearts to the Snail Shamans in ACT 3.",
          parsingInfo: {
            type: "mementoDeposit",
            internalId: "Sprintmaster Memento",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479634",
        },
        {
          id: "memento_seth_memento",
          name: "Seth Memento",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Putrified Ducts (Fleatopia): Talk to Seth after beating all of his scores in all the Flea Games.",
          parsingInfo: { type: "mementoDeposit", internalId: "Memento Seth" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479638",
        },
        {
          id: "memento_heart_memento",
          name: "Heart Memento",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            'Of the four available hearts (Encrusted Heart, Pollen Heart, Hunter\'s Heart, Conjoined Heart), the heart that is not used as a part of the "The Old Hearts" wish (which requires 3 Hearts), can be showcased as a memento in your Bellhome.',
          parsingInfo: [
            { type: "mementoDeposit", internalId: "Flower Heart" },
            { type: "mementoDeposit", internalId: "Hunter Heart" },
            { type: "mementoDeposit", internalId: "Coral Heart" },
            { type: "mementoDeposit", internalId: "Clover Heart" },
          ],
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479631",
        },
      ],
    },
  ],
};
