import type { NormalisedTrackableCategory } from "../types";

export const relics: NormalisedTrackableCategory = {
  id: "category_relics",
  name: "Relics",
  description: "Relics",
  sections: [
    {
      id: "section_bone_scrolls",
      name: "Bone Scrolls",
      description:
        "Journals written by pilgrims, and other lower-class bugs of Pharloom. They can be sold to Relic Seeker Scrounge for 90 Rosaries.",
      items: [
        {
          id: "relic_bone_scroll_1",
          name: "Bone Scroll #1",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Greymoor: Held by a corpse found after swimming all the way to the right in the corresponding secret room.",
          parsingInfo: {
            type: "relict",
            internalId: "Bone Record Greymoor_flooded_corridor",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478142",
        },
        {
          id: "relic_bone_scroll_2",
          name: "Bone Scroll #2",
          whichAct: 1,
          completionPercent: 0,
          prereqs: ["Drifter's Cloak"],
          location:
            "Far Fields: Found in a secret room, reachable with Drifter's Cloak.",
          parsingInfo: {
            type: "relict",
            internalId: "Bone Record Bone_East_14",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478213",
        },
        {
          id: "relic_bone_scroll_3",
          name: "Bone Scroll #3",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Underworks (Left): Behind a breakable wall.",
          parsingInfo: {
            type: "relict",
            internalId: "Bone Record Understore_Map_Room",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478553",
        },
        {
          id: "relic_bone_scroll_4",
          name: "Bone Scroll #4",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Wisp Thicket (Top): Platforming challenge.",
          parsingInfo: { type: "relict", internalId: "Bone Record Wisp Top" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479150",
        },
      ],
    },
    {
      id: "section_weaver_effigies",
      name: "Weaver Effigies",
      description:
        "Effigies carved from bone that depict various Weaver figures, with prayers dedicated to the specific Weaver etched onto the body of the figure. They can be sold to Relic Seeker Scrounge for 150 Rosaries.",
      items: [
        {
          id: "relic_weaver_effigy_1",
          name: "Weaver Effigy #1",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bone Bottom: In a secret room above Bone Bottom, easiest to reach with Drifter's Cloak and floating down from above.",
          parsingInfo: {
            type: "relict",
            internalId: "Weaver Totem Bonetown_upper_room",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478093",
        },
        {
          id: "relic_weaver_effigy_2",
          name: "Weaver Effigy #2",
          whichAct: 2,
          completionPercent: 0,
          prereqs: ["Cling Grip"],
          location:
            "Shellwood: At the very top-right area inside the Chapel of the Witch.",
          parsingInfo: { type: "relict", internalId: "Weaver Totem Witch" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478794",
        },
        {
          id: "relic_weaver_effigy_3",
          name: "Weaver Effigy #3",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "The Slab (Bottom-right): Held by a corpse.",
          parsingInfo: {
            type: "relict",
            internalId: "Weaver Totem Slab_Bottom",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479034",
        },
      ],
    },
    {
      id: "section_choral_commandments",
      name: "Choral Commandments",
      description:
        "They carry orders and decrees from The Citadel. They can be sold to Relic Seeker Scrounge for 180 Rosaries.",
      items: [
        {
          id: "relic_choral_commandment_1",
          name: "Choral Commandment #1",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Bone Bottom: On a high-up ledge, left from Mosshome.",
          parsingInfo: { type: "relict", internalId: "Seal Chit Aspid_01" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477867",
        },
        {
          id: "relic_choral_commandment_2",
          name: "Choral Commandment #2",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Whiteward: Top-left room.",
          parsingInfo: { type: "relict", internalId: "Seal Chit Ward Corpse" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478914",
        },
        {
          id: "relic_choral_commandment_3",
          name: "Choral Commandment #3",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Whiteward: At the end of a room above the hidden passage, easiest to reach via Silk Soar.",
          parsingInfo: { type: "relict", internalId: "Seal Chit Silk Siphon" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478919",
        },
        {
          id: "relic_choral_commandment_4",
          name: "Choral Commandment #4",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Songclave: Sold by Jubilana for 210 Rosaries, after completing "The Lost Merchant" wish.',
          parsingInfo: {
            type: "relict",
            internalId: "Seal Chit City Merchant",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479251",
        },
      ],
    },
    {
      id: "section_rune_harps",
      name: "Rune Harps",
      description:
        "Old recording instruments, strung with silk runes inscribed by the Weavers. They can be sold to Relic Seeker Scrounge for 210 Rosaries.",
      items: [
        {
          id: "relic_rune_harp_1",
          name: "Rune Harp #1",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Weavernest Atla: Found on a high-up ledge.",
          parsingInfo: { type: "relict", internalId: "Weaver Record Weave_08" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478231",
        },
        {
          id: "relic_rune_harp_2",
          name: "Rune Harp #2",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Far Fields (Weavernest): Use Silkspeed Anklets with Flea Brew, and run over all the pressure plates.",
          parsingInfo: {
            type: "relict",
            internalId: "Weaver Record Sprint_Challenge",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479057",
        },
        {
          id: "relic_rune_harp_3",
          name: "Rune Harp #3",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location:
            "High Halls: Pick it up from Conductor Ballador's room, in ACT 3.",
          parsingInfo: {
            type: "relict",
            internalId: "Weaver Record Conductor",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479495",
        },
      ],
    },
    {
      id: "section_psalm_cylinders",
      name: "Psalm Cylinders",
      description:
        "Cylinders inscribed with recordings, which may be heard by bringing them to Vaultkeeper Cardinius. They can be sold to Vaultkeeper Cardinius for 200 Rosaries, or 320 Rosaries for the Sacred Cylinder",
      items: [
        {
          id: "relic_psalm_cylinder_grindle",
          name: "Psalm Cylinder (Grindle)",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location: "Blasted Steps: Sold by Grindle for 240 Rosaries.",
          parsingInfo: { type: "relict", internalId: "Psalm Cylinder Grindle" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478530",
        },
        {
          id: "relic_psalm_cylinder_vaultkeeper_cardinius_lair",
          name: "Psalm Cylinder (Vaultkeeper Cardinius' Lair)",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location: "Whispering Vaults: Vaultkeeper Cardinius' Lair.",
          parsingInfo: {
            type: "relict",
            internalId: "Psalm Cylinder Librarian",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478650",
        },
        {
          id: "relic_psalm_cylinder_whispering_vaults",
          name: "Psalm Cylinder (Whispering Vaults)",
          whichAct: 2,
          completionPercent: 0,
          prereqs: ["Clawline"],
          location:
            "Whispering Vaults (Top): At the end of a parkour challenge.",
          parsingInfo: {
            type: "relict",
            internalId: "Psalm Cylinder Library Roof",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478774",
        },
        {
          id: "relic_psalm_cylinder_high_halls",
          name: "Psalm Cylinder (High Halls)",
          whichAct: 2,
          completionPercent: 0,
          prereqs: ["Clawline"],
          location: "High Halls: Behind a breakable wall.",
          parsingInfo: { type: "relict", internalId: "Psalm Cylinder Hang" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478908",
        },
        {
          id: "relic_psalm_cylinder_underworks",
          name: "Psalm Cylinder (Underworks)",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Underworks (Top): At the end of a corridor behind a breakable wall.",
          parsingInfo: { type: "relict", internalId: "Psalm Cylinder Ward" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478929",
        },
        {
          id: "relic_sacred_cylinder",
          name: "Sacred Cylinder",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Whispering Vaults: Part of the Vaultkeeper's Melody objective.",
          parsingInfo: {
            type: "relict",
            internalId: "Librarian Melody Cylinder",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479717",
        },
      ],
    },
    {
      id: "section_arcane_egg",
      name: "Arcane Egg",
      description:
        "Black stone egg formed before the birth of Pharloom. It can be sold to Relic Seeker Scrounge for 600 Rosaries.",
      items: [
        {
          id: "relic_arcane_egg",
          name: "Arcane Egg",
          whichAct: 3,
          completionPercent: 0,
          prereqs: [],
          location: "The Abyss: Behind a platforming sequence.",
          parsingInfo: {
            type: "relict",
            internalId: "Ancient Egg Abyss Middle",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479281",
        },
      ],
    },
  ],
};
