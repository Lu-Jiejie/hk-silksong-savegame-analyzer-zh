import type { NormalisedTrackableCategory } from "../types";

export const memoryLockets: NormalisedTrackableCategory = {
  id: "category_memory_lockets",
  name: "Memory Lockets",
  description: "Memory Lockets are used to add new Tool slots to your Crests.",
  sections: [
    {
      name: "Main",
      description: "",
      items: [
        // TODO: Grindle sells this item later, if it is not purchased until ACT 3. The internalId would probably not change, because we see Grindle's mates looting this location. However, adding a note here to verify this later...
        {
          id: "memory_locket_memory_locket_1",
          name: "Memory Locket #1",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Far Fields (Pilgrim's Rest) / Blasted Steps: Sold by Mort for 150 Rosaries. If you don't purchase this from Mort, it is sold by Grindle in ACT 3 for 250 Rosaries.",
          parsingInfo: {
            type: "flag",
            internalId: "PurchasedPilgrimsRestMemoryLocket",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477953",
        },
        {
          id: "memory_locket_memory_locket_2",
          name: "Memory Locket #2",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Hunter's March (Far-right): In a cage at the end of the spiky corridor. Break the cage to pick it up.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Ant_20", "Collectable Item Pickup"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478017",
        },
        {
          id: "memory_locket_memory_locket_3",
          name: "Memory Locket #3",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Greymoor: On a ledge above a Mitemother.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Greymoor_16", "Collectable Item Pickup"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478035",
        },
        {
          id: "memory_locket_memory_locket_4",
          name: "Memory Locket #4",
          whichAct: 2,
          completionPercent: 0,
          prereqs: ["Faydown Cloak"],
          location: "Greymoor: Inside Halfway Home.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Halfway_01", "Collectable Item Pickup"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478039",
        },
        {
          id: "memory_locket_memory_locket_5",
          name: "Memory Locket #5",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Bellhart: Sold by Frey for 330 Rosaries.",
          parsingInfo: {
            type: "flag",
            internalId: "PurchasedBelltownMemoryLocket",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478204",
        },
        {
          id: "memory_locket_memory_locket_6",
          name: "Memory Locket #6",
          whichAct: 3,
          completionPercent: 0,
          prereqs: ["Silk Soar"],
          location: "Bellhart: Silk Soar into the roof.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Belltown", "Collectable Item Pickup"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478212",
        },
        {
          id: "memory_locket_memory_locket_7",
          name: "Memory Locket #7",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: 'Bone Bottom: Complete "Volatile Flintbeetles" wish.',
          parsingInfo: { type: "quest", internalId: "Rock Rollers" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478222",
        },
        {
          id: "memory_locket_memory_locket_8",
          name: "Memory Locket #8",
          whichAct: 1,
          completionPercent: 0,
          prereqs: ["Cling Grip"],
          location: "The Marrow (Top)",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Bone_18", "Collectable Item Pickup"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478246",
        },
        {
          id: "memory_locket_memory_locket_9",
          name: "Memory Locket #9",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Choral Chambers (Grand Bellway): Behind a breakable wall above the Bellway, accessible through the "Exhaust Organ - Underworks" path.',
          parsingInfo: {
            type: "sceneData",
            internalId: ["Bellway_City", "Collectable Item Pickup"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478372",
        },
        {
          id: "memory_locket_memory_locket_10",
          name: "Memory Locket #10",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Wormways (Bottom-right): Held by a corpse.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Crawl_09", "Collectable Item Pickup"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478493",
        },
        {
          id: "memory_locket_memory_locket_11",
          name: "Memory Locket #11",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Blasted Steps: On a narrow platform above the sands.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Coral_02", "Collectable Item Pickup (1)"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478502",
        },
        {
          id: "memory_locket_memory_locket_12",
          name: "Memory Locket #12",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Underworks: In a hidden area towards the left of the confession booth.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Under_08", "Collectable Item Pickup"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478571",
        },
        {
          id: "memory_locket_memory_locket_13",
          name: "Memory Locket #13",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Whispering Vaults: At the top of a tunnel.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Library_08", "Collectable Item Pickup"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478676",
        },
        {
          id: "memory_locket_memory_locket_14",
          name: "Memory Locket #14",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bilewater: At the far-left edge of a secret room. Bounce over the infested waters and wall-jump up the vertical space to reach it.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Shadow_20", "Collectable Item Pickup"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478787",
        },
        {
          id: "memory_locket_memory_locket_15",
          name: "Memory Locket #15",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Deep Docks: Held by a corpse at the bottom of a magma-filled area found behind a breakable wall.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Dock_13", "Collectable Item Pickup"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478836",
        },
        {
          id: "memory_locket_memory_locket_16",
          name: "Memory Locket #16",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bilewater: Held by a corpse in a breakable cocoon dangling from the ceiling.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Shadow_27", "Sack Corpse Pickup"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478851",
        },
        {
          id: "memory_locket_memory_locket_17",
          name: "Memory Locket #17",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "The Slab: Inside the shortcut cave. Look out for a breakable wall as you climb a vertical space.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Slab_Cell_Quiet", "Collectable Item Pickup"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479017",
        },
        {
          id: "memory_locket_memory_locket_18",
          name: "Memory Locket #18",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Memorium: After a platforming section.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Arborium_05", "Collectable Item Pickup"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479110",
        },
        {
          id: "memory_locket_memory_locket_19",
          name: "Memory Locket #19",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "Far Fields: In a secret area towards the right of the Karmelita cave. Guarded by a void-powered Skarrgard.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Bone_East_25", "Collectable Item Pickup"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479196",
        },
        {
          id: "memory_locket_memory_locket_20",
          name: "Memory Locket #20",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Sands of Karak: Held by a corpse at the top of the area.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Coral_23", "Collectable Item Pickup"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479204",
        },
      ],
    },
  ],
};
