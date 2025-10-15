import type { NormalisedTrackableCategory } from "../types";

export const masksAndSpools: NormalisedTrackableCategory = {
  id: "category_masks_and_spools",
  name: "Masks & Spools",
  description: "Mask Shards & Spool Fragments",
  sections: [
    {
      id: "section_mask_shards",
      name: "Mask Shards",
      description: "Each Mask Shard counts 0.25% towards completion.",
      items: [
        // TODO: Grindle sells this item later, if it is not purchased until ACT 3. The internalId would probably not change, because we see Grindle's mates looting this location. However, adding a note here to verify this later...
        {
          id: "item_mask_shard_1",
          name: "Mask Shard #1",
          whichAct: 1,
          completionPercent: 0.25,
          prereqs: [],
          location:
            "Bone Bottom / Blasted Steps: Sold by Pebb for 300 Rosaries. If you don't purchase this from Pebb, it is sold by Grindle  in ACT 3 for 320 Rosaries.",
          parsingInfo: {
            type: "flag",
            internalId: "PurchasedBonebottomHeartPiece",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477840",
        },
        {
          id: "item_mask_shard_2",
          name: "Mask Shard #2",
          whichAct: 1,
          completionPercent: 0.25,
          prereqs: ["Swift Step"],
          location: "Wormways: Behind a breakable wall at the water's edge.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Crawl_02", "Heart Piece"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478091",
        },
        {
          id: "item_mask_shard_3",
          name: "Mask Shard #3",
          whichAct: 1,
          completionPercent: 0.25,
          prereqs: ["Drifter's Cloak"],
          location:
            "Far Fields: In a hidden area found towards the left of the Seamstress' Home.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Bone_East_20", "Heart Piece"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477975",
        },
        {
          id: "item_mask_shard_4",
          name: "Mask Shard #4",
          whichAct: 1,
          completionPercent: 0.25,
          prereqs: [],
          location:
            "Shellwood: At the end of a platforming challenge in a room behind a breakable wall.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Shellwood_14", "Heart Piece"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478177",
        },
        {
          id: "item_mask_shard_5",
          name: "Mask Shard #5",
          whichAct: 1,
          completionPercent: 0.25,
          prereqs: ["Cling Grip"],
          location:
            "Deep Docks: Near the Deep Docks entrance, approach from The Marrow.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Dock_08", "Heart Piece"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477901",
        },
        {
          id: "item_mask_shard_6",
          name: "Mask Shard #6",
          whichAct: 1,
          completionPercent: 0.25,
          prereqs: ["Needolin"],
          location: "Weavenest Atla: Behind a breakable wall.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Weave_05b", "Heart Piece"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478233",
        },
        {
          id: "item_mask_shard_7",
          name: "Mask Shard #7",
          whichAct: 1,
          completionPercent: 0.25,
          prereqs: [],
          location: 'Bellhart: Complete "Savage Beastfly" wish.',
          parsingInfo: { type: "quest", internalId: "Beastfly Hunt" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478800",
        },
        {
          id: "item_mask_shard_8",
          name: "Mask Shard #8",
          whichAct: 2,
          completionPercent: 0.25,
          prereqs: [],
          location:
            "Cogwork Core: At the top of the left-most tunnel, reached after an arena battle.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Song_09", "Heart Piece"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478615",
        },
        {
          id: "item_mask_shard_9",
          name: "Mask Shard #9",
          whichAct: 2,
          completionPercent: 0.25,
          prereqs: [],
          location: "Whispering Vaults",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Library_05", "Heart Piece"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478671",
        },
        {
          id: "item_mask_shard_10",
          name: "Mask Shard #10",
          whichAct: 2,
          completionPercent: 0.25,
          prereqs: ["Clawline"],
          location:
            "Bilewater: At the end of a couple of long corridors, filled with Slubberlugs and parasite-infested waters.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Shadow_13", "Heart Piece"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478849",
        },
        {
          id: "item_mask_shard_11",
          name: "Mask Shard #11",
          whichAct: 2,
          completionPercent: 0.25,
          prereqs: ["Clawline"],
          location: "Far Fields: At the top of the Skull Cavern.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Bone_East_LavaChallenge", "Heart Piece (1)"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478841",
        },
        {
          id: "item_mask_shard_12",
          name: "Mask Shard #12",
          whichAct: 2,
          completionPercent: 0.25,
          prereqs: [],
          location:
            "The Slab: At the top of a room behind a locked door (requires Key of Apostate) that holds a platforming challenge.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Slab_17", "Heart Piece"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479001",
        },
        {
          id: "item_mask_shard_13",
          name: "Mask Shard #13",
          whichAct: 2,
          completionPercent: 0.25,
          prereqs: ["Faydown Cloak"],
          location:
            "Mount Fay: Inside a large hollow cylinder, in an area towards the left of the bottom-most bench.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Peak_04c", "Heart Piece"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479038",
        },
        {
          id: "item_mask_shard_14",
          name: "Mask Shard #14",
          whichAct: 2,
          completionPercent: 0.25,
          prereqs: ["Faydown Cloak"],
          location:
            "Wisp Thicket: At the end of a platforming challenge  in the left-most area.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Wisp_07", "Heart Piece"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479151",
        },
        {
          id: "item_mask_shard_15",
          name: "Mask Shard #15",
          whichAct: 2,
          completionPercent: 0.25,
          prereqs: [],
          location:
            'Songclave: Sold by Jubilana for 750 Rosaries, after completing "The Wandering Merchant" wish.',
          parsingInfo: {
            type: "flag",
            internalId: "MerchantEnclaveShellFragment",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478879",
        },
        {
          id: "item_mask_shard_16",
          name: "Mask Shard #16",
          whichAct: 2,
          completionPercent: 0.25,
          prereqs: ["Faydown Cloak"],
          location:
            "Blasted Steps: At the top of an area near the map boundary.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Coral_19b", "Heart Piece"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478498",
        },
        {
          id: "item_mask_shard_17",
          name: "Mask Shard #17",
          whichAct: 3,
          completionPercent: 0.25,
          prereqs: [],
          location: 'Far Fields: Complete "Fastest in Pharloom" wish.',
          parsingInfo: { type: "quest", internalId: "Sprintmaster Race" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479194",
        },
        {
          id: "item_mask_shard_18",
          name: "Mask Shard #18",
          whichAct: 3,
          completionPercent: 0.25,
          prereqs: [],
          location: 'Bellhart: Complete "The Hidden Hunter" wish.',
          parsingInfo: { type: "quest", internalId: "Ant Trapper" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479447",
        },
        {
          id: "item_mask_shard_19",
          name: "Mask Shard #19",
          whichAct: 3,
          completionPercent: 0.25,
          prereqs: [],
          location: 'Bellhart: Complete "Dark Hearts" wish.',
          parsingInfo: { type: "quest", internalId: "Destroy Thread Cores" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479449",
        },
        {
          id: "item_mask_shard_20",
          name: "Mask Shard #20",
          whichAct: 3,
          completionPercent: 0.25,
          prereqs: ["Silk Soar"],
          location: "Mount Fay: At the very top of Brightvein.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Peak_06", "Heart Piece"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479460",
        },
      ],
    },
    {
      id: "section_spool_fragments",
      name: "Spool Fragments",
      description: "Each Spool Fragment counts 0.5% towards completion.",
      items: [
        {
          id: "item_spool_fragment_1",
          name: "Spool Fragment #1",
          whichAct: 1,
          completionPercent: 0.5,
          prereqs: [],
          location: "Bone Bottom: Above the Bone Bottom settlement.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Bone_11b", "Silk Spool"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478080",
        },
        {
          id: "item_spool_fragment_2",
          name: "Spool Fragment #2",
          whichAct: 1,
          completionPercent: 0.5,
          prereqs: [],
          location: "Deep Docks: At the end of a long room.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Bone_East_13", "Silk Spool"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477926",
        },
        {
          id: "item_spool_fragment_3",
          name: "Spool Fragment #3",
          whichAct: 1,
          completionPercent: 0.5,
          prereqs: ["Cling Grip"],
          location:
            "Greymoor: In an area that's towards the top-right of the Bellshrine.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Greymoor_02", "Silk Spool"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478263",
        },
        {
          id: "item_spool_fragment_4",
          name: "Spool Fragment #4",
          whichAct: 1,
          completionPercent: 0.5,
          prereqs: ["Cling Grip"],
          location:
            "The Slab: At the top of a frosty section towards the left.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Peak_01", "Silk Spool"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478475",
        },
        {
          id: "item_spool_fragment_5",
          name: "Spool Fragment #5",
          whichAct: 1,
          completionPercent: 0.5,
          prereqs: ["Needolin"],
          location: "Weavenest Atla: Behind a breakable wall.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Weave_11", "Silk Spool"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478230",
        },
        {
          id: "item_spool_fragment_6",
          name: "Spool Fragment #6",
          whichAct: 1,
          completionPercent: 0.5,
          prereqs: ["Needolin"],
          location:
            'Bellhart: Sold by Frey for 270 Rosaries after completing "My Missing Courier" wish.',
          parsingInfo: {
            type: "flag",
            internalId: "PurchasedBelltownSpoolSegment",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478347",
        },
        {
          id: "item_spool_fragment_7",
          name: "Spool Fragment #7",
          whichAct: 2,
          completionPercent: 0.5,
          prereqs: [],
          location:
            "Greymoor: Fleamaster reward in Greymoor, after rescuing 14 Fleas.",
          parsingInfo: {
            type: "flagInt",
            internalId: ["CaravanTroupeLocation", 2],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478820",
        },
        {
          id: "item_spool_fragment_8",
          name: "Spool Fragment #8",
          whichAct: 2,
          completionPercent: 0.5,
          prereqs: [],
          location: "Cogwork Core (Bottom-right)",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Cog_07", "Silk Spool"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478618",
        },
        {
          id: "item_spool_fragment_9",
          name: "Spool Fragment #9",
          whichAct: 2,
          completionPercent: 0.5,
          prereqs: [],
          location: "Underworks: In a hidden area, almost at the bottom-right.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Library_11b", "Silk Spool"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478704",
        },
        {
          id: "item_spool_fragment_10",
          name: "Spool Fragment #10",
          whichAct: 2,
          completionPercent: 0.5,
          prereqs: [],
          location: "Grand Gate: At the very top.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Song_19_entrance", "Silk Spool"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478586",
        },
        {
          id: "item_spool_fragment_11",
          name: "Spool Fragment #11",
          whichAct: 2,
          completionPercent: 0.5,
          prereqs: [],
          location: "Underworks: Behind an arena battle.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Under_10", "Silk Spool"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478931",
        },
        {
          id: "item_spool_fragment_12",
          name: "Spool Fragment #12",
          whichAct: 2,
          completionPercent: 0.5,
          prereqs: [],
          location:
            "Whiteward: At the bottom of the elevator shaft, requires the elevator to be called up first.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Ward_01", "Silk Spool"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479317",
        },
        {
          id: "item_spool_fragment_13",
          name: "Spool Fragment #13",
          whichAct: 2,
          completionPercent: 0.5,
          prereqs: [],
          location: 'Songclave: Complete "Balm for The Wounded" wish.',
          parsingInfo: { type: "quest", internalId: "Save Sherma" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479180",
        },
        {
          id: "item_spool_fragment_14",
          name: "Spool Fragment #14",
          whichAct: 2,
          completionPercent: 0.5,
          prereqs: [],
          location: "Deep Docks (Bottom-right)",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Dock_03c", "Silk Spool"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478825",
        },
        {
          id: "item_spool_fragment_15",
          name: "Spool Fragment #15",
          whichAct: 2,
          completionPercent: 0.5,
          prereqs: ["Clawline"],
          location: "High Halls: At the very top.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Hang_03_top", "Silk Spool"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478909",
        },
        {
          id: "item_spool_fragment_16",
          name: "Spool Fragment #16",
          whichAct: 2,
          completionPercent: 0.5,
          prereqs: ["Faydown Cloak"],
          location: "Memorium (Bottom-left)",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Arborium_09", "Silk Spool"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479117",
        },
        {
          id: "item_spool_fragment_17",
          name: "Spool Fragment #17",
          whichAct: 2,
          completionPercent: 0.5,
          prereqs: ["Faydown Cloak"],
          location: "Blasted Steps: Sold by Grindle for 680 Rosaries.",
          parsingInfo: {
            type: "flag",
            internalId: "purchasedGrindleSpoolPiece",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478527",
        },
        {
          id: "item_spool_fragment_18",
          name: "Spool Fragment #18",
          whichAct: 2,
          completionPercent: 0.5,
          prereqs: ["Faydown Cloak"],
          location:
            'Songclave: Sold by Jubilana for 500 Rosaries, after completing "The Lost Merchant" wish.',
          parsingInfo: {
            type: "flag",
            internalId: "MerchantEnclaveSpoolPiece",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479249",
        },
      ],
    },
  ],
};
