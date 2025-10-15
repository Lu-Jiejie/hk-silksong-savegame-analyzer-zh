import type { NormalisedTrackableCategory } from "../types";

export const craftmetals: NormalisedTrackableCategory = {
  id: "category_craftmetals",
  name: "Craftmetals",
  description:
    "Rare element found naturally within the rock and bone of Pharloom. Used by skilled craftsbugs in the construction of tools and trinkets.",
  sections: [
    {
      name: "Main",
      description: "",
      items: [
        // TODO: Grindle sells this item later, if it is not purchased until ACT 3. The internalId would probably not change, because we see Grindle's mates looting this location. However, adding a note here to verify this later...
        {
          id: "craftmetal_craftmetal_1",
          name: "Craftmetal #1",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Bone Bottom / Blasted Steps: Sold by Pebb for 60 Rosaries. If you don't purchase this from Pebb, it is sold by Grindle in ACT 3 for 120 Rosaries.",
          parsingInfo: {
            type: "flag",
            internalId: "PurchasedBonebottomToolMetal",
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477838",
        },
        {
          id: "craftmetal_craftmetal_2",
          name: "Craftmetal #2",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "The Marrow: At the end of a booby-trapped tunnel in a secret room.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Bone_07", "Collectable Item Pickup - Tool Metal"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477894",
        },
        {
          id: "craftmetal_craftmetal_3",
          name: "Craftmetal #3",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Deep Docks: Inside a chest behind the blockade. Whack it, or get one of the nearby enemies' explosive projectiles to clear it.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Dock_03", "Collectable Item Pickup"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=477937",
        },
        {
          id: "craftmetal_craftmetal_4",
          name: "Craftmetal #4",
          whichAct: 1,
          completionPercent: 0,
          prereqs: [],
          location:
            "Blasted Steps: At the end of a passage filled with worms and falling rocks.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Coral_32", "Collectable Item Pickup - Tool Metal"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478541",
        },
        {
          id: "craftmetal_craftmetal_5",
          name: "Craftmetal #5",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Underworks: At the end of a lava-filled tunnel. Taking it will trigger an Undercrank ambush.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Under_19b", "Collectable Item Pickup - Tool Metal"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=478711",
        },
        {
          id: "craftmetal_craftmetal_6",
          name: "Craftmetal #6",
          whichAct: 2,
          completionPercent: 0,
          prereqs: ["Faydown Cloak"],
          location:
            "Putrified Ducts: Far-right of Pale Lake, in a crevice above the water.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Aqueduct_05", "Collectable Item Pickup - Tool Metal"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479139",
        },
        {
          id: "craftmetal_craftmetal_7",
          name: "Craftmetal #7",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            "Wisp Thicket: At the end of a hidden path, found in the top-left part of the area filled with (fire) Wisp spawners.",
          parsingInfo: {
            type: "sceneData",
            internalId: ["Wisp_05", "Collectable Item Pickup - Tool Metal"],
          },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479157",
        },
        {
          id: "craftmetal_craftmetal_8",
          name: "Craftmetal #8",
          whichAct: 2,
          completionPercent: 0,
          prereqs: [],
          location:
            'Songclave: Sold by Jubilana for 180 Rosaries, after completing "The Lost Merchant" wish.',
          parsingInfo: { type: "flag", internalId: "MerchantEnclaveToolMetal" },
          mapLink:
            "https://mapgenie.io/hollow-knight-silksong/maps/pharloom?locationIds=479250",
        },
      ],
    },
  ],
};
