// Game content translations (Chinese)
// ID-based translation system for game items, categories, and descriptions
// IDs are stable and never change, unlike English names which may vary

export interface GameTranslations {
  categories: Record<string, string>;
  sections: Record<string, string>;
  items: Record<string, string>;
  descriptions: Record<string, string>;
}

export const gameTranslationsZH: GameTranslations = {
  // ============================================
  // Categories (主分类 - 按ID索引)
  // ============================================
  categories: {
    category_stats: "统计",
    category_masks_and_spools: "面甲 & 灵丝轴",
    category_abilities: "能力",
    category_upgrades: "升级",
    category_tools: "工具",
    category_crests: "纹章",
    category_lost_fleas: "迷途跳蚤",
    category_relics: "遗物",
    category_memory_lockets: "忆境纪念盒",
    category_craftmetals: "锻造金属",
    category_mossberries: "苔莓",
    category_keys: "钥匙",
    category_maps: "地图",
    category_bellways: "钟道",
    category_ventrica_stations: "圣脉枢管",
    category_mementos: "忆痕",
    category_quests: "任务",
    category_bosses: "Boss",
    category_hunters_journal: "猎人日志",
  },

  // ============================================
  // Sections (子分类 - 按ID索引)
  // ============================================
  sections: {
    // Stats sections
    section_stats: "统计",

    // Masks & Spools sections
    section_mask_shards: "面甲残片",
    section_spool_fragments: "灵丝轴碎片",

    // Abilities sections
    section_silk_skills: "灵丝技能",
    section_silk_hearts: "丝之心",
    section_cloak_abilities: "披风能力",
    section_ancestral_arts: "先祖技艺",
    section_unique_abilities: "独特能力",

    // Upgrades sections
    section_needle_upgrades: "织针升级",
    section_tool_pouch_upgrades: "工具袋升级",
    section_crafting_kit_upgrades: "制作匣升级",

    // Tools sections
    section_red_attack_tools: "红色（攻击）工具",
    section_blue_defense_tools: "蓝色（防御）工具",
    section_yellow_exploration_tools: "黄色（探索）工具",

    // Crests sections
    // (no subsections)

    // Lost Fleas sections
    // (no subsections)

    // Relics sections
    section_bone_scrolls: "骨卷轴",
    section_weaver_effigies: "织者雕像",
    section_choral_commandments: "圣咏诫律",
    section_rune_harps: "符文竖琴",
    section_psalm_cylinders: "圣咏音筒",
    section_arcane_egg: "神秘蛋",

    // Memory Lockets sections
    // (no subsections)

    // Craftmetals sections
    // (no subsections)

    // Mossberries sections
    // (no subsections)

    // Keys sections
    section_simple_keys: "简易钥匙",
    section_keys_of_the_slab: "罪石牢狱钥匙",
    section_other_keys: "其他钥匙",

    // Maps sections
    // (no subsections)

    // Bellways sections
    // (no subsections)

    // Ventrica Stations sections
    // (no subsections)

    // Mementos sections
    // (no subsections)

    // Quests sections
    section_objectives: "主线目标",
    section_wishes_wayfarer: "心愿·旅者助行",
    section_wishes_gather: "心愿·收集",
    section_wishes_donate: "心愿·捐赠",
    section_wishes_hunt: "心愿·狩猎",
    section_wishes_grand_hunt: "心愿·狩王试炼",
    section_wishes_delivery: "心愿·递送",
    section_wishes_learn: "心愿·研习",
    section_wishes_collect: "心愿·收藏",
    section_wishes_sprint: "心愿·竞速",
    section_wishes_witness: "心愿·见证",
    section_wishes_steel: "心愿·钢铁",

    // Bosses sections
    // (no subsections)

    // Hunter's Journal sections
    // (no subsections)
  },

  // ============================================
  // Items (条目 - 按ID索引)
  // ============================================
  items: {
    // ========== Stats ==========
    // (stats items are typically not translated, they show values)

    // ========== Masks & Spools ==========
    // Mask Shards
    item_mask_shard_1: "面甲残片 #1",
    item_mask_shard_2: "面甲残片 #2",
    item_mask_shard_3: "面甲残片 #3",
    item_mask_shard_4: "面甲残片 #4",
    item_mask_shard_5: "面甲残片 #5",
    item_mask_shard_6: "面甲残片 #6",
    item_mask_shard_7: "面甲残片 #7",
    item_mask_shard_8: "面甲残片 #8",
    item_mask_shard_9: "面甲残片 #9",
    item_mask_shard_10: "面甲残片 #10",
    item_mask_shard_11: "面甲残片 #11",
    item_mask_shard_12: "面甲残片 #12",
    item_mask_shard_13: "面甲残片 #13",
    item_mask_shard_14: "面甲残片 #14",
    item_mask_shard_15: "面甲残片 #15",
    item_mask_shard_16: "面甲残片 #16",
    item_mask_shard_17: "面甲残片 #17",
    item_mask_shard_18: "面甲残片 #18",
    item_mask_shard_19: "面甲残片 #19",
    item_mask_shard_20: "面甲残片 #20",
    // Spool Fragments
    item_spool_fragment_1: "灵丝轴碎片 #1",
    item_spool_fragment_2: "灵丝轴碎片 #2",
    item_spool_fragment_3: "灵丝轴碎片 #3",
    item_spool_fragment_4: "灵丝轴碎片 #4",
    item_spool_fragment_5: "灵丝轴碎片 #5",
    item_spool_fragment_6: "灵丝轴碎片 #6",
    item_spool_fragment_7: "灵丝轴碎片 #7",
    item_spool_fragment_8: "灵丝轴碎片 #8",
    item_spool_fragment_9: "灵丝轴碎片 #9",
    item_spool_fragment_10: "灵丝轴碎片 #10",
    item_spool_fragment_11: "灵丝轴碎片 #11",
    item_spool_fragment_12: "灵丝轴碎片 #12",
    item_spool_fragment_13: "灵丝轴碎片 #13",
    item_spool_fragment_14: "灵丝轴碎片 #14",
    item_spool_fragment_15: "灵丝轴碎片 #15",
    item_spool_fragment_16: "灵丝轴碎片 #16",
    item_spool_fragment_17: "灵丝轴碎片 #17",
    item_spool_fragment_18: "灵丝轴碎片 #18",

    // ========== Abilities ==========
    // Silk Skills
    ability_silkspear: "丝之矛",
    ability_thread_storm: "灵丝风暴",
    ability_cross_stitch: "十字绣",
    ability_sharpdart: "丝刃镖",
    ability_rune_rage: "符文之怒",
    ability_pale_nails: "苍白之爪",

    // Silk Hearts
    ability_silk_heart_1: "丝之心 #1",
    ability_silk_heart_2: "丝之心 #2",
    ability_silk_heart_3: "丝之心 #3",

    // Cloak Abilities
    ability_drifters_cloak: "流浪者披风（滑翔）",
    ability_faydown_cloak: "幻羽披风（二段跳）",

    // Ancestral Arts
    ability_swift_step: "疾风步（冲刺/疾跑）",
    ability_clawline: "飞针冲刺（钩爪）",
    ability_cling_grip: "蛛攀术（蹬墙跳）",
    ability_needolin: "织忆弦针",
    ability_needle_strike: "蓄力斩",
    ability_silk_soar: "灵丝升腾（上冲）",

    // Unique Abilities
    ability_sylphsong: "风灵谣",
    ability_everbloom: "永绽花",

    // ========== Upgrades ==========
    // Needle Upgrades
    upgrade_needle_upgrade_1: "织针升级 #1（尖锐织针）",
    upgrade_needle_upgrade_2: "织针升级 #2（辉光织针）",
    upgrade_needle_upgrade_3: "织针升级 #3（蜂钢织针）",
    upgrade_needle_upgrade_4: "织针升级 #4（苍白蜂钢织针）",
    // Tool Pouch Upgrades
    upgrade_tool_pouch_upgrade_1: "工具袋升级 #1",
    upgrade_tool_pouch_upgrade_2: "工具袋升级 #2",
    upgrade_tool_pouch_upgrade_3: "工具袋升级 #3",
    upgrade_tool_pouch_upgrade_4: "工具袋升级 #4",
    // Crafting Kit Upgrades
    upgrade_crafting_kit_upgrade_1: "制作匣升级 #1",
    upgrade_crafting_kit_upgrade_2: "制作匣升级 #2",
    upgrade_crafting_kit_upgrade_3: "制作匣升级 #3",
    upgrade_crafting_kit_upgrade_4: "制作匣升级 #4",

    // ========== Tools ==========
    // Red (Attack) Tools
    tool_straight_pin: "直针",
    tool_threefold_pin: "三重镖",
    tool_sting_shard: "蛰刺碎片",
    tool_tacks: "钉刺",
    tool_longpin: "长针",
    tool_curveclaw_curvesickle: "弧爪 / 曲镰",
    tool_throwing_ring: "投掷环",
    tool_pimpillo: "爆燃囊",
    tool_conchcutter: "螺切刃",
    tool_silkshot: "丝弹",
    tool_delvers_drill: "掘洞钻",
    tool_cogwork_wheel: "机轮刃",
    tool_cogfly: "齿轮蜂",
    tool_rosary_cannon: "念珠炮",
    tool_voltvessels: "电枢球",
    tool_flintslate: "燧石板",
    tool_flea_brew: "跳蚤秘酿",
    tool_plasmium_phial: "生质液瓶",
    tool_needle_phial: "储液针管",
    tool_snare_setter: "陷阱设置器",
    // Blue (Defense) Tools
    tool_druids_eye: "德鲁伊之眼",
    tool_magma_bell: "熔岩钟",
    tool_warding_bell: "护佑钟",
    tool_pollip_pouch: "花芯囊",
    tool_fractured_mask: "碎面甲",
    tool_multibinder: "多重缚丝器",
    tool_weavelight: "织光仪",
    tool_sawtooth_circlet: "锯齿环",
    tool_injector_band: "注丝套针",
    tool_spool_extender: "储丝延展器",
    tool_reserve_bind: "储备缚丝",
    tool_claw_mirror_claw_mirrors: "爪镜 / 双生爪镜",
    tool_memory_crystal: "记忆晶石",
    tool_snitch_pick: "撬赃钩",
    tool_volt_filament: "伏特丝",
    tool_quick_sling: "速射索",
    tool_wreath_of_purity: "净界花环",
    tool_longclaw: "长爪",
    tool_wispfire_latern: "灵灭提灯",
    tool_egg_of_flealia: "蚤母卵",
    tool_pin_badge: "针徽",
    // Yellow (Exploration) Tools
    tool_compass: "罗盘",
    tool_shard_pendant: "碎壳坠",
    tool_magnetite_brooch: "磁石胸针",
    tool_weighted_belt: "负重环带",
    tool_barbed_bracelet: "棘刺手环",
    tool_dead_bugs_purse_shell_satchel: "亡虫囊 / 壳囊",
    tool_magnetite_dice: "磁石骰",
    tool_scuttlebrace: "迅捷脊锁",
    tool_ascendants_grip: "登极握爪",
    tool_spider_strings: "蛛丝弦",
    tool_silkspeed_anklets: "丝速脚环",
    tool_thiefs_mark: "窃者印记",

    // ========== Crests ==========
    crest_hunter_crest: "猎手纹章",
    crest_hunter_crest_upgrade_1: "猎手纹章升级 #1",
    crest_hunter_crest_upgrade_2: "猎手纹章升级 #2",
    crest_vesticrest_1_extra_yellow_slot_1: "蜕形纹章 #1（额外黄色槽）",
    crest_vesticrest_2_extra_blue_slot_2: "蜕形纹章 #2（额外蓝色槽）",
    crest_reaper_crest: "收割者纹章",
    crest_wanderer_crest: "漫游者纹章",
    crest_beast_crest: "野兽纹章",
    crest_witch_crest: "巫妪纹章",
    crest_architect_crest: "建筑师纹章",
    crest_shaman_crest: "萨满纹章",

    // ========== Lost Fleas ==========
    flea_lost_flea_1: "迷途跳蚤 #1",
    flea_lost_flea_2: "迷途跳蚤 #2",
    flea_lost_flea_3: "迷途跳蚤 #3",
    flea_lost_flea_4: "迷途跳蚤 #4",
    flea_lost_flea_5: "迷途跳蚤 #5",
    flea_lost_flea_6: "迷途跳蚤 #6",
    flea_lost_flea_7: "迷途跳蚤 #7",
    flea_lost_flea_8: "迷途跳蚤 #8",
    flea_lost_flea_9: "迷途跳蚤 #9",
    flea_lost_flea_10: "迷途跳蚤 #10",
    flea_lost_flea_11: "迷途跳蚤 #11",
    flea_lost_flea_12: "迷途跳蚤 #12",
    flea_lost_flea_13: "迷途跳蚤 #13",
    flea_lost_flea_14: "迷途跳蚤 #14",
    flea_lost_flea_15: "迷途跳蚤 #15",
    flea_lost_flea_16: "迷途跳蚤 #16",
    flea_lost_flea_17: "迷途跳蚤 #17",
    flea_lost_flea_18: "迷途跳蚤 #18",
    flea_lost_flea_19: "迷途跳蚤 #19",
    flea_lost_flea_20: "迷途跳蚤 #20",
    flea_lost_flea_21: "迷途跳蚤 #21",
    flea_lost_flea_22: "迷途跳蚤 #22",
    flea_lost_flea_23: "迷途跳蚤 #23",
    flea_lost_flea_24: "迷途跳蚤 #24",
    flea_lost_flea_25: "迷途跳蚤 #25",
    flea_lost_flea_26: "迷途跳蚤 #26",
    flea_lost_flea_27: "迷途跳蚤 #27",
    flea_lost_flea_28: "迷途跳蚤 #28（巨大跳蚤）",
    flea_lost_flea_29: "迷途跳蚤 #29（克拉特）",
    flea_lost_flea_30: "迷途跳蚤 #30（沃葛）",

    // ========== Relics ==========
    // Bone Scrolls
    relic_bone_scroll_1: "骨卷轴 #1",
    relic_bone_scroll_2: "骨卷轴 #2",
    relic_bone_scroll_3: "骨卷轴 #3",
    relic_bone_scroll_4: "骨卷轴 #4",
    // Weaver Effigies
    relic_weaver_effigy_1: "织者雕像 #1",
    relic_weaver_effigy_2: "织者雕像 #2",
    relic_weaver_effigy_3: "织者雕像 #3",
    // Choral Commandments
    relic_choral_commandment_1: "圣咏诫律 #1",
    relic_choral_commandment_2: "圣咏诫律 #2",
    relic_choral_commandment_3: "圣咏诫律 #3",
    relic_choral_commandment_4: "圣咏诫律 #4",
    // Rune Harps
    relic_rune_harp_1: "符文竖琴 #1",
    relic_rune_harp_2: "符文竖琴 #2",
    relic_rune_harp_3: "符文竖琴 #3",
    // Psalm Cylinders
    relic_psalm_cylinder_grindle: "圣咏音筒（格林德尔）",
    relic_psalm_cylinder_vaultkeeper_cardinius_lair:
      "圣咏音筒（守门人卡迪尼斯的巢穴）",
    relic_psalm_cylinder_whispering_vaults: "圣咏音筒（低语书库）",
    relic_psalm_cylinder_high_halls: "圣咏音筒（高庭）",
    relic_psalm_cylinder_underworks: "圣咏音筒（圣堡工厂）",
    relic_sacred_cylinder: "圣歌音筒",

    // ========== Memory Lockets ==========
    memory_locket_memory_locket_1: "忆境纪念盒 #1",
    memory_locket_memory_locket_2: "忆境纪念盒 #2",
    memory_locket_memory_locket_3: "忆境纪念盒 #3",
    memory_locket_memory_locket_4: "忆境纪念盒 #4",
    memory_locket_memory_locket_5: "忆境纪念盒 #5",
    memory_locket_memory_locket_6: "忆境纪念盒 #6",
    memory_locket_memory_locket_7: "忆境纪念盒 #7",
    memory_locket_memory_locket_8: "忆境纪念盒 #8",
    memory_locket_memory_locket_9: "忆境纪念盒 #9",
    memory_locket_memory_locket_10: "忆境纪念盒 #10",
    memory_locket_memory_locket_11: "忆境纪念盒 #11",
    memory_locket_memory_locket_12: "忆境纪念盒 #12",
    memory_locket_memory_locket_13: "忆境纪念盒 #13",
    memory_locket_memory_locket_14: "忆境纪念盒 #14",
    memory_locket_memory_locket_15: "忆境纪念盒 #15",
    memory_locket_memory_locket_16: "忆境纪念盒 #16",
    memory_locket_memory_locket_17: "忆境纪念盒 #17",
    memory_locket_memory_locket_18: "忆境纪念盒 #18",
    memory_locket_memory_locket_19: "忆境纪念盒 #19",
    memory_locket_memory_locket_20: "忆境纪念盒 #20",

    // ========== Craftmetals ==========
    craftmetal_craftmetal_1: "锻造金属 #1",
    craftmetal_craftmetal_2: "锻造金属 #2",
    craftmetal_craftmetal_3: "锻造金属 #3",
    craftmetal_craftmetal_4: "锻造金属 #4",
    craftmetal_craftmetal_5: "锻造金属 #5",
    craftmetal_craftmetal_6: "锻造金属 #6",
    craftmetal_craftmetal_7: "锻造金属 #7",
    craftmetal_craftmetal_8: "锻造金属 #8",

    // ========== Mossberries ==========
    mossberry_mossberry_1: "苔莓 #1",
    mossberry_mossberry_2: "苔莓 #2",
    mossberry_mossberry_3: "苔莓 #3",
    mossberry_mossberry_4: "苔莓 #4",
    mossberry_mossberry_5: "苔莓 #5",
    mossberry_mossberry_6: "苔莓 #6",
    mossberry_mossberry_7: "苔莓 #7",

    // ========== Keys ==========
    // Simple Keys
    key_simple_key_1: "简易钥匙 #1",
    key_simple_key_2: "简易钥匙 #2",
    key_simple_key_3: "简易钥匙 #3",
    key_simple_key_4: "简易钥匙 #4",
    // Keys of The Slab
    key_key_of_indolent: "怠惰之钥",
    key_key_of_heretic: "异端之钥",
    key_key_of_apostate: "叛教之钥",
    // Other Keys
    key_architects_key: "建筑师钥匙",
    key_white_key: "白愈钥匙",
    key_surgeons_key: "医师钥匙",
    key_diving_bell_key: "潜钟钥匙",

    // ========== Maps ==========
    map_mosslands: "苔穴",
    map_the_marrow: "髓骨洞窟",
    map_deep_docks: "深坞",
    map_hunters_march: "猎者小径",
    map_far_fields: "远野",
    map_greymoor: "灰沼",
    map_bellhart: "钟心镇",
    map_shellwood: "甲木林",
    map_wormways: "沙噬虫道",
    map_weavenest_atla: "阿特拉织巢",
    map_blasted_steps: "蚀阶",
    map_sinners_road: "罪途",
    map_grand_gate: "巨扉圣门",
    map_underworks: "圣堡工厂",
    map_choral_chambers: "圣咏殿",
    map_whispering_vaults: "低语书库",
    map_whiteward: "白愈厅",
    map_cogwork_core: "机枢核心",
    map_memorium: "忆廊",
    map_high_halls: "高庭",
    map_the_slab: "罪石牢狱",
    map_mount_fay: "费耶山",
    map_bilewater: "腐汁泽",
    map_putrified_ducts: "腐殖渠",
    map_sands_of_karak: "卡拉卡沙川",
    map_the_cradle: "摇篮圣所",
    map_verdania: "翠庭",
    map_the_abyss: "深渊",

    // ========== Bellways ==========
    bellway_bone_bottom: "骸底镇",
    bellway_the_marrow: "髓骨洞窟",
    bellway_deep_docks: "深坞",
    bellway_far_fields: "远野",
    bellway_greymoor: "灰沼",
    bellway_bellhart: "钟心镇",
    bellway_shellwood: "甲木林",
    bellway_blasted_steps: "蚀阶",
    bellway_the_slab: "罪石牢狱",
    bellway_grand_bellway: "巨扉钟道",
    bellway_bilewater: "腐汁泽",
    bellway_putrified_ducts: "腐殖渠",

    // ========== Ventrica Stations ==========
    ventrica_terminus: "终界站",
    ventrica_memorium: "忆廊",
    ventrica_high_halls: "高庭",
    ventrica_first_shrine: "始源钟殿",
    ventrica_choral_chambers: "圣咏殿",
    ventrica_grand_bellway: "巨扉钟道",
    ventrica_underworks: "圣堡工厂",

    // ========== Mementos ==========
    memento_grey_memento: "灰色忆痕",
    memento_heros_memento: "英灵忆痕",
    memento_surface_memento: "墟野忆痕",
    memento_hunters_memento: "猎人忆痕",
    memento_craw_memento: "腐襄忆痕",
    memento_sprintmaster_memento: "飞毛腿忆痕",
    memento_seth_memento: "守望者忆痕",
    memento_heart_memento: "心脏忆痕",
    // ?? Guardian's Memento

    // ========== Quests ==========
    // Objectives
    quest_the_great_citadel: "至伟圣堡",
    quest_the_threadspun_town: "丝缚小镇",
    quest_grand_gate: "巨扇圣门",
    quest_silent_halls: "寂静圣堡",
    quest_conductors_melody: "指挥家的旋律",
    quest_architects_melody: "建筑师的旋律",
    quest_vaultkeepers_melody: "管理员的旋律",
    quest_pharlooms_crown: "纺络王冕",
    quest_pale_monarch: "苍白君主",
    quest_soul_snare: "魂丝陷阱",
    quest_after_the_fall: "坠落之后",
    quest_beast_in_the_bells: "钟道兽患",
    quest_awaiting_the_end: "等候终局",
    quest_the_dark_below: "暗藏其下",
    quest_return_to_pharloom: "返回纺络",
    quest_spell_seeker: "追寻咒语",
    quest_the_old_hearts: "古之心",
    quest_heart_of_might: "力量之心",
    quest_heart_of_the_woods: "森之心",
    quest_heart_of_the_wild: "野性之心",
    quest_last_dive: "最终潜跃",

    // Wishes · Wayfarer
    quest_the_lost_fleas: "迷途跳蚤",
    quest_my_missing_courier: "失踪送货员",
    quest_pinmaster: "针匠秘油",
    quest_the_wandering_merchant: "商贾无踪",
    quest_rite_of_rebirth: "重生仪式",
    quest_my_missing_brother: "寻虫启事",
    quest_infestation_operation: "寄生手术",
    quest_balm_for_the_wounded: "愈伤良方",
    quest_trails_end: "终迹",
    quest_the_lost_merchant: "再寻商贾",
    quest_final_audience: "最终觐见",
    quest_fatal_resolve: "针锋对决",
    quest_heros_call: "英勇救援",
    quest_ecstasy_of_the_end: "终幕狂欢",
    quest_pain_anguish_and_misery: "苦痛巡礼",

    // Wishes · Gather
    quest_berry_picking: "莓果采集",
    quest_rite_of_the_pollip: "花芯仪式",
    quest_silver_bells: "银光铃铛",
    quest_alchemists_assistant: "炼金助手",
    quest_great_taste_of_pharloom: "纺络珍馐",
    quest_advanced_alchemy: "高阶炼金",

    // Wishes · Donate
    quest_bone_bottom_repairs: "骸底修缮",
    quest_a_lifesaving_bridge: "救命桥",
    quest_restoration_of_bellhart: "重振钟心镇",
    quest_bellharts_glory: "钟心荣光",
    quest_an_icon_of_hope: "希望丰碑",
    quest_building_up_songclave: "建设圣歌盟地",
    quest_strengthening_songclave: "强化圣歌盟地",

    // Wishes · Hunt
    quest_garb_of_the_pilgrims: "朝圣者的衣装",
    quest_flexile_spines: "柔韧棘芯",
    quest_crawbug_clearing: "清剿腐囊虫",
    quest_volatile_flintbeetles: "暴烈燧甲虫",
    quest_roach_guts: "蟑螂内脏",
    quest_fine_pins: "精致刺针",
    quest_cloaks_of_the_choir: "圣咏外衣",
    quest_broodfeast: "育巢盛宴",

    // Wishes · Grand Hunt
    quest_the_terrible_tyrant: "暴君讨伐",
    quest_savage_beastfly: "野蛮兽蝇",
    quest_the_wailing_mother: "哀嚎母体",
    quest_dark_hearts: "暗蚀之心",
    quest_the_hidden_hunter: "隐秘猎手",

    // Wishes · Delivery
    quest_bone_bottom_supplies: "骸底补给",
    quest_pilgrims_rest_supplies: "朝圣者憩所补给",
    quest_fleatopia_supplies: "蚤托邦补给",
    quest_songclave_supplies: "圣歌盟地补给",
    quest_queens_egg: "女王之卵",
    quest_liquid_lacquer: "液状漆",
    quest_survivors_camp_supplies: "幸存者营地补给",

    // Wishes · Learn
    quest_bugs_of_pharloom: "纺络虫族图鉴",

    // Wishes · Collect
    quest_silk_and_soul: "灵丝与灵魂",

    // Wishes · Sprint
    quest_fastest_in_pharloom: "纺络竞速冠军",

    // Wishes · Witness
    quest_passing_of_the_age: "旧纪终焉",

    // Wishes · Steel
    quest_a_vassal_lost: "失踪侍从",

    // ========== Bosses ==========
    boss_moss_mother: "苔翼母虫",
    boss_bell_beast: "钟道兽",
    boss_lace: "蕾丝",
    boss_fourth_chorus: "第四圣咏团",
    boss_savage_beastfly: "暴怒兽蝇",
    boss_sister_splinter: "碎裂者修女",
    boss_skull_tyrant: "骷髅暴君",
    boss_moorwing: "荒沼翼主",
    boss_widow: "黑寡妇",
    boss_great_conchflies: "巨型螺蝇",
    boss_last_judge: "末代裁决者",
    boss_phantom: "幽影",
    boss_cogwork_dancers: "机枢舞者",
    boss_trobbio: "特罗比奥",
    boss_garmond_and_zaza: "加蒙德&扎扎（可错过）",
    boss_forebrothers_signis_gron: "监工兄弟 西格尼斯&格隆",
    boss_the_unravelled: "散茧魂渊",
    boss_disgraced_chef_lugoli: '"失格大厨"卢戈利',
    boss_father_of_the_flame: "炽焰之父",
    boss_groal_the_great: "伟大的格洛",
    boss_craggler: "酸蚀巨螯",
    boss_voltvyrm: "伏特维姆",
    boss_raging_conchfly: "狂怒螺蝇",
    boss_first_sinner: "原罪者",
    boss_broodmother: "育母",
    boss_second_sentinel: "次席戍卫",
    boss_shakra: "沙克拉（可错过）",
    boss_grand_mother_silk: "苍白之母",
    boss_bell_eater: "噬钟者",
    boss_lost_garmond: "失心加蒙德",
    boss_crawfather: "腐囊之父",
    boss_plasmified_zango: "生质异化的赞戈",
    boss_watcher_at_the_edge: "边陲守望者",
    boss_palestag: "苍白苜鹿",
    boss_clover_dancers: "三叶草舞者",
    boss_gurr_the_outcast: "被放逐的格尔",
    boss_tormented_trobbio: "痛苦的特罗比奥",
    boss_pinstress: "针姬",
    boss_shrine_guardian_seth: "赛斯",
    boss_nyleth: "尼莱斯",
    boss_skarrsinger_karmelita: '"斯卡尔歌后"卡梅莉塔',
    boss_crust_king_khann: "壳王卡汗",
    boss_summoned_saviour: "虚面救世主（钢魂）",
    boss_lost_lace: "失心蕾丝",

    // ========== Hunter's Journal ==========
    journal_mossgrub: "苔原蠕虫",
    journal_massive_mossgrub: "巨苔蠕虫",
    journal_mossmir: "苔翼虫",
    journal_moss_mother: "苔翼母虫",
    journal_aknid: "阿克尼",
    journal_skull_scuttler: "头骨潜行者",
    journal_skullwing: "颅翼虫",
    journal_skull_brute: "头骨傀儡",
    journal_skull_tyrant: "骷髅暴君",
    journal_kilik: "刺铠虫",
    journal_beastfly: "兽蝇",
    journal_savage_beastfly: "暴怒兽蝇",
    journal_caranid: "刃尾蜂",
    journal_vicious_caranid: "狂躁刃尾蜂",
    journal_hardbone_hopper: "硬骨跳跃者",
    journal_hardbone_elder: "巨骨长者",
    journal_tarmite: "焦油螨",
    journal_mawling: "卷球幼兽",
    journal_marrowmaw: "髓渊兽",
    journal_hoker: "绒棘虫",
    journal_flintbeetle: "燧甲虫",
    journal_rhinogrund: "犀角掘地兽",
    journal_gromling: "戈鲁姆幼虫",
    journal_grom: "戈鲁姆",
    journal_bell_beast: "钟道兽",
    journal_pilgrim_groveller: "伏地朝圣者",
    journal_pilgrim_pouncer: "朝圣扑袭者",
    journal_pilgrim_hornfly: "角枪朝圣者",
    journal_pilgrim_hulk: "朝圣巨汉",
    journal_pilgrim_bellbearer: "朝圣钟卫",
    journal_winged_pilgrim: "残翼朝圣者",
    journal_elder_pilgrim: "朝圣者长老",
    journal_winged_pilgrim_bellbearer: "飞翼朝圣者",
    journal_pilgrim_hiker: "攀山朝圣者",
    journal_pilgrim_guide: "引路朝圣者",
    journal_overgrown_pilgrim: "苔蚀朝圣者",
    journal_covetous_pilgrim: "念珠朝圣者",
    journal_snitchfly: "念珠窃贼",
    journal_lavalug: "熔岩蛞蝓",
    journal_lavalarga: "熔岩虫",
    journal_smelt_shoveller: "熔渣工",
    journal_flintstone_flyer: "燧石飞工",
    journal_flintflame_flyer: "燧焰飞工",
    journal_smokerock_sifter: "烟岩筛工",
    journal_deep_diver: "深潜者",
    journal_forebrothers_signis_gron: "监工兄弟 西格尼斯&格隆",
    journal_cragglite: "酸蚀幼虫",
    journal_craggler: "酸蚀巨螯",
    journal_brushflit: "惊叫虫",
    journal_fertid: "拟草虫",
    journal_flapping_fertid: "拟草蛾",
    journal_fourth_chorus: "第四圣咏团",
    journal_skarrlid: "斯卡尔工蚁",
    journal_skarrwing: "斯卡尔之翼",
    journal_skarr_scout: "斯卡尔斥候",
    journal_skarr_stalker: "斯卡尔追猎者",
    journal_spear_skarr: "斯卡尔长矛手",
    journal_skarrgard: "斯卡尔禁卫",
    journal_gurr_the_outcast: "被放逐的格尔",
    journal_last_claw: "最终之爪",
    journal_skarrsinger_karmelita: '"斯卡尔歌后"卡梅莉塔',
    journal_mite: "暗螨",
    journal_fluttermite: "飞蚀螨",
    journal_mitemother: "螨母",
    journal_dreg_catcher: "灵丝筛工",
    journal_silk_snipper: "裁丝疯匠",
    journal_thread_raker: "残丝耙工",
    journal_moorwing: "荒沼翼主",
    journal_wisp: "火灵",
    journal_burning_bug: "焚身信徒",
    journal_father_of_the_flame: "炽焰之父",
    journal_craw: "腐囊虫",
    journal_tallcraw: "高囊虫",
    journal_squatcraw: "矮囊虫",
    journal_craw_juror: "腐囊陪审官",
    journal_tallcraw_juror: "高陪审员",
    journal_squatcraw_juror: "矮陪审员",
    journal_crawfather: "腐囊之父",
    journal_muckmaggot: "淤秽蛆",
    journal_slubberlug: "沼蛆",
    journal_muckroach: "淤秽蟑螂",
    journal_bloatroach: "浮肿蟑螂",
    journal_roachcatcher: "蟑群牧者",
    journal_roachfeeder: "蟑螂饲养员",
    journal_roachkeeper: "蟑螂监管者",
    journal_roachserver: "蟑螂厨师",
    journal_disgraced_chef_lugoli: '"失格大厨"卢戈利',
    journal_wraith: "丝魂",
    journal_mothleaf_lagnia: "娥叶虫",
    journal_miremite: "蚀沼虫",
    journal_swamp_squit: "沼栖飞蚋",
    journal_spit_squit: "酸涎飞蚋",
    journal_stilkin: "斯提金猎手",
    journal_stilkin_trapper: "斯提金捕手",
    journal_groal_the_great: "伟大的格洛",
    journal_barnak: "巴纳克",
    journal_ductsucker: "腐殖吮吸者",
    journal_pond_skipper: "滑水者",
    journal_pondcatcher: "渔夫",
    journal_shellwood_gnat: "甲木蚋虫",
    journal_wood_wasp: "木蜂",
    journal_splinter: "碎裂者",
    journal_splinterhorn: "尖角碎裂者",
    journal_splinterbark: "裂皮碎裂者",
    journal_sister_splinter: "碎裂者修女",
    journal_phacia: "幻形花虻",
    journal_pollenica: "爆粉葵",
    journal_gahlia: "假面魔芋",
    journal_shrine_guardian_seth: "赛斯",
    journal_nyleth: "尼莱斯",
    journal_furm: "绒甲虫",
    journal_winged_furm: "披钟绒甲虫",
    journal_pharlid: "法利德蛛",
    journal_pharlid_diver: "法利德跳蛛",
    journal_shardillard: "碎甲突袭者",
    journal_sandcarver: "沙噬虫",
    journal_squirrm: "蠕蛆",
    journal_judge: "裁决者",
    journal_last_judge: "末代裁决者",
    journal_coral_furm: "珊瑚绒甲虫",
    journal_driznit: "掷面虫",
    journal_driznarga: "重甲掷面虫",
    journal_pokenabbin: "静候者",
    journal_conchfly: "螺蝇",
    journal_great_conchfly: "巨型螺蝇",
    journal_crustcrawler: "珊瑚壳虫",
    journal_crustcrag: "珊瑚巨怪",
    journal_kai: "凯虫",
    journal_spinebeak_kai: "旋角凯虫",
    journal_steelspine_kai: "钢脊凯虫",
    journal_yuma: "尤玛",
    journal_yumama: "尤玛玛",
    journal_karaka: "卡拉卡",
    journal_kakri: "轻翼斥候",
    journal_yago: "雅戈",
    journal_karak_gor: "坚塔冲锋者",
    journal_alita: "阿利塔",
    journal_corrcrust_karaka: "珊瑚卡拉卡",
    journal_crust_king_khann: "壳王卡汗",
    journal_watcher_at_the_edge: "边陲守望者",
    journal_voltvyrm: "伏特维姆",
    journal_drapefly: "帷虫",
    journal_drapelord: "帷虫之主",
    journal_drapemite: "帷螨",
    journal_giant_drapemite: "巨型帷螨",
    journal_underworker: "圣厂工虫",
    journal_underscrub: "圣厂擦地工",
    journal_undersweep: "圣厂清扫工",
    journal_underpoke: "圣厂残工",
    journal_underloft: "圣厂投掷者",
    journal_undercrank: "圣厂维修工",
    journal_envoy: "圣咏特使",
    journal_choir_pouncer: "圣咏扑袭者",
    journal_choir_hornhead: "圣咏角首",
    journal_choir_bellbearer: "圣咏钟卫",
    journal_choir_flyer: "圣咏飞卒",
    journal_choir_elder: "圣咏长老",
    journal_choristor: "圣咏使徒",
    journal_reed: "簧片战士",
    journal_grand_reed: "精英簧片战士",
    journal_choir_clapper: "圣咏槌手",
    journal_clawmaiden: "丝偶侍女",
    journal_memoria: "忆廊使徒",
    journal_minister: "圣咏大臣",
    journal_maestro: "圣咏指挥",
    journal_second_sentinel: "次席戍卫",
    journal_dreg_husk: "残丝空壳",
    journal_dregwheel: "残丝轮骸",
    journal_surgeon: "医师",
    journal_mortician: "殡葬师",
    journal_the_unravelled: "散茧魂渊",
    journal_cogwork_underfly: "机枢飞工",
    journal_cogwork_hauler: "机枢搬运工",
    journal_cogwork_crawler: "机枢巡游者",
    journal_cogworker: "机枢工匠",
    journal_cogwork_spine: "机枢棘球",
    journal_cogwork_choirbug: "机枢咏者",
    journal_cogwork_cleanser: "机枢清道夫",
    journal_cogwork_defender: "机枢戍卫",
    journal_cogwork_clapper: "机枢击钹者",
    journal_cogwork_dancers: "机枢舞者",
    journal_vaultborn: "书库弃子",
    journal_lampbearer: "执灯者",
    journal_scrollreader: "诵经使",
    journal_vaultkeeper: "书库管理员",
    journal_trobbio: "特罗比奥",
    journal_tormented_trobbio: "痛苦的特罗比奥",
    journal_penitent: "悔罪者",
    journal_puny_penitent: "卑罪者",
    journal_freshfly: "新生蝇",
    journal_scabfly: "痂蝇",
    journal_guardfly: "狱卒蝇",
    journal_wardenfly: "狱卒蝇",
    journal_broodmother: "育母",
    journal_driftlin: "雪精灵",
    journal_mnemonid: "冰晶虫",
    journal_mnemonord: "巨型冰晶虫",
    journal_servitor_ignim: "仆从伊格尼姆",
    journal_servitor_boran: "仆从博兰",
    journal_winged_lifeseed: "生质飞囊",
    journal_plasmid: "生质幼蚓",
    journal_plasmidas: "生质巨蚓",
    journal_plasmified_zango: "生质异化的赞戈",
    journal_leaf_glider: "滑叶虫",
    journal_leaf_roller: "卷叶虫",
    journal_pendra: "佩德拉",
    journal_pendragor: "潘德拉戈",
    journal_nuphar: "睡莲狩猎者",
    journal_cloverstag: "苜鹿",
    journal_palestag: "苍白苜鹿",
    journal_kindanir: "金达尼尔",
    journal_verdanir: "维达尼尔",
    journal_escalion: "埃斯卡里昂",
    journal_clover_dancers: "三叶草舞者",
    journal_shadow_creeper: "阴影爬虫",
    journal_shadow_charger: "影袭巨虫",
    journal_gloomsac: "黯噬囊",
    journal_gargant_gloom: "渊喉巨兽",
    journal_void_tendrils: "虚空触须",
    journal_void_mass: "虚空聚合体",
    journal_summoned_saviour: "虚面救世主（钢魂）",
    journal_wingmould: "飞行傀儡",
    journal_garpid: "加尔皮德",
    journal_imoba: "伊莫巴",
    journal_skrill: "沙行虫",
    journal_bell_eater: "噬钟者",
    journal_huge_flea: "巨蚤",
    journal_shakra: "沙克拉（可错过）",
    journal_garmond_zaza: "加蒙德&扎扎（可错过）",
    journal_lost_garmond: "失心加蒙德",
    journal_pinstress: "针姬",
    journal_widow: "黑寡妇",
    journal_first_sinner: "原罪者",
    journal_phantom: "幽影",
    journal_lace: "蕾丝",
    journal_grand_mother_silk: "苍白之母",
    journal_lost_lace: "失心蕾丝",
  },

  // ============================================
  // Descriptions (描述文本 - 按对应的 category/section ID 索引)
  // ============================================
  descriptions: {
    // ========== Category Descriptions (按 categories 顺序) ==========
    category_stats: "游戏中追踪的统计数据。",
    category_masks_and_spools: "面甲残片与灵丝轴碎片",
    category_abilities: "每个能力（斗篷能力除外）计入完成度的 1%。",
    category_upgrades: "每个升级计入完成度的 1%。",
    category_tools: "每个工具（少数例外）计入完成度的 1%。",
    category_crests: "这些（除了猎手纹章和蜕形纹章）每个计入完成度的 1%。",
    category_lost_fleas: "在纺络各地寻找跳蚤，并引导它们到跳蚤车队。",
    category_relics: "圣物",
    category_memory_lockets: "忆境纪念盒用于在你的纹章上添加新的工具槽位。",
    category_craftmetals: "稀有的金属，用于制作强大的工具和升级。",
    category_mossberries:
      "带有有毒种子的甜美浆果，生长在潮湿的环境中。最初作为心愿的一部分收集，后来用于交易念珠和其他奖励。",
    category_keys: "钥匙",
    category_maps: "揭示纺络不同区域布局（和秘密）的区域地图。",
    category_bellways: "古老的钟道系统，连接纺络各地的重要地点。",
    category_ventrica_stations: "连接城塞内主要地点的地下气动运输系统。",
    category_mementos:
      "来自纺络各地各种角色和地点的个人纪念品和回忆信物。只有放置在你的钟居后才会被追踪。",
    category_quests: "任务",
    category_bosses: "Boss",
    category_hunters_journal: "在纺络各地区遇到的虫子和生物。",

    // ========== Section Descriptions (按 categories 顺序分组) ==========
    // Stats sections
    // (no section descriptions)

    // Masks & Spools sections
    section_mask_shards: "每个面甲残片计入完成度的 0.25%。",
    section_spool_fragments: "每个灵丝轴碎片计入完成度的 0.5%。",

    // ========== Item Descriptions (物品位置/获取方式 - 按ID索引) ==========
    // Mask Shards
    item_mask_shard_1:
      "骸底镇 / 蚀阶：由佩珀以 300 念珠出售。如果未从佩珀处购买，则在第 3 幕由格林德尔以 320 念珠出售。",
    item_mask_shard_2: "沙噬虫道：水边可破坏墙壁后面。",
    item_mask_shard_3: "远野：织女虫之家左侧的隐藏区域。",
    item_mask_shard_4: "甲木林：可破坏墙壁后的房间内，跳跃挑战的尽头。",
    item_mask_shard_5: "深坞：靠近深坞入口处，从髓骨洞窟接近。",
    item_mask_shard_6: "阿特拉织巢：可破坏墙壁后面。",
    item_mask_shard_7: '钟心镇：完成"暴怒兽蝇"心愿。',
    item_mask_shard_8: "机枢核心：最左侧通道顶端，在竞技场战斗后到达。",
    item_mask_shard_9: "低语书库",
    item_mask_shard_10: "腐汁泽：几条长廊尽头，充满沼蛆和寄生虫感染的水域。",
    item_mask_shard_11: "远野：颅骨洞穴顶部。",
    item_mask_shard_12:
      "罪石牢狱：锁门（需要叛教之钥）后房间顶部，有跳跃挑战。",
    item_mask_shard_13: "费耶山：大型空心圆柱内，最底部长椅左侧区域。",
    item_mask_shard_14: "火灵竹丛：最左侧区域，跳跃挑战的尽头。",
    item_mask_shard_15:
      '圣歌盟地：完成"商贾无踪"心愿后，由朱比拉娜以 750 念珠出售。',
    item_mask_shard_16: "蚀阶：靠近地图边界的区域顶部。",
    item_mask_shard_17: '远野：完成"纺络竞速冠军"心愿。',
    item_mask_shard_18: '钟心镇：完成"隐秘猎手"心愿。',
    item_mask_shard_19: '钟心镇：完成"暗蚀之心"心愿。',
    item_mask_shard_20: "费耶山：冰晶脉窟最顶端。",

    // Spool Fragments
    item_spool_fragment_1: "骸底镇：位于骸底镇聚居地上方。",
    item_spool_fragment_2: "深坞：位于一个长房间的尽头。",
    item_spool_fragment_3: "灰沼：位于钟殿右上方的区域。",
    item_spool_fragment_4: "罪石牢狱：位于左侧寒冷区域的顶部。",
    item_spool_fragment_5: "阿特拉织巢：位于可破坏墙壁后方。",
    item_spool_fragment_6:
      '钟心镇：完成"失踪送货员"心愿后，由芙蕾以 270 念珠出售。',
    item_spool_fragment_7: "灰沼：在灰沼救出 14 只跳蚤后，由跳蚤首领奖励。",
    item_spool_fragment_8: "机枢核心（右下）",
    item_spool_fragment_9: "圣堡工厂：位于隐藏区域，几乎在右下角。",
    item_spool_fragment_10: "巨扉圣门：位于最顶部。",
    item_spool_fragment_11: "圣堡工厂：位于竞技场战斗后方。",
    item_spool_fragment_12:
      "白愈厅：位于升降梯井底部，需要先将升降梯召唤上去。",
    item_spool_fragment_13: '圣歌盟地：完成"伤者的慰籍"心愿。',
    item_spool_fragment_14: "深坞（右下）",
    item_spool_fragment_15: "高庭：位于最顶部。",
    item_spool_fragment_16: "忆廊（左下）",
    item_spool_fragment_17: "蚀阶：由 Grindle 以 680 念珠出售。",
    item_spool_fragment_18:
      '圣歌盟地：完成"再寻商贾"心愿后，由朱比拉娜以 500 念珠出售。',

    // Abilities sections
    section_silk_skills: "每个灵丝技能计入完成度的 1%。",
    section_silk_hearts: "每个丝之心计入完成度的 1%。",
    section_cloak_abilities: "斗篷能力不计入完成度。",
    section_ancestral_arts: "每个祖传技艺计入完成度的 1%。",
    section_unique_abilities: "这些计入完成度的 1%。",

    // Silk Skills
    ability_silkspear: "苔穴（苔栖乡）",
    ability_thread_storm: "灰沼（腐囊虫泽）：位于顶部。",
    ability_cross_stitch: "腐汁泽（废鸣管风琴）：击败幽影。",
    ability_sharpdart: "沙噬虫道（阿特拉织巢）",
    ability_rune_rage: "罪石牢狱：击败原罪者。",
    ability_pale_nails: "摇篮圣所：位于顶部。",

    // Silk Hearts
    ability_silk_heart_1: "髓骨洞窟：击败钟道兽。",
    ability_silk_heart_2:
      "白愈厅：击败散茧魂渊（位于上锁的活板门下方，需要外科医生钥匙）。",
    ability_silk_heart_3: "摇篮圣所：击败蕾丝。",

    // Cloak Abilities
    ability_drifters_cloak: '远野：完成裁缝的"钢棘"心愿。',
    ability_faydown_cloak: "费耶山：位于山顶。",

    // Ancestral Arts
    ability_swift_step: "深坞",
    ability_clawline: "圣堡工厂（大熔釜）",
    ability_cling_grip: "甲木林",
    ability_needolin: "钟心镇：击败黑寡妇。",
    ability_needle_strike: "蚀阶（针姬之家）",
    ability_silk_soar: "深渊",

    // Unique Abilities
    ability_sylphsong:
      "阿特拉织巢：通过忆境纪念盒和获取新纹章解锁总共 32 个工具栏位（不包括猎者纹章栏位）后，缚定伊娃。",
    ability_everbloom: '完成"古之心"心愿。',

    // Upgrades sections
    section_needle_upgrades: "这些升级每个计入完成度的 1%。",
    section_tool_pouch_upgrades: "这些升级每个计入完成度的 1%。",
    section_crafting_kit_upgrades: "这些升级每个计入完成度的 1%。",

    // Needle Upgrades
    upgrade_needle_upgrade_1: "钟心镇：击败黑寡妇后与普林尼对话。",
    upgrade_needle_upgrade_2: "钟心镇：获得 1 个苍白油后与普林尼对话。",
    upgrade_needle_upgrade_3:
      '钟心镇：完成"纺络珍馐"心愿。与普林尼对话并给他 450 念珠和 1 个苍白油。',
    upgrade_needle_upgrade_4:
      '钟心镇：完成"终幕狂欢"心愿（在找到所有迷途跳蚤后出现在第 3 幕钟心镇祈愿墙上）。与普林尼对话并给他 680 念珠和 1 个苍白油。',

    // Tool Pouch Upgrades
    upgrade_tool_pouch_upgrade_1:
      "远野（朝圣者憩所）/ 蚀阶：由莫特以 220 念珠出售。如果不从莫特处购买，第 3 幕可从格林德尔处以 220 念珠购买。",
    upgrade_tool_pouch_upgrade_2:
      "髓骨洞窟：完成洛迪的第一个飞针挑战（击中目标 15 次），或在第 3 幕从此位置拾取。",
    upgrade_tool_pouch_upgrade_3: '灰沼（中途酒馆）：完成"纺络虫族图鉴"心愿。',
    upgrade_tool_pouch_upgrade_4:
      "腐殖渠（蚤托邦）：在纺络找到 20 只迷途跳蚤。",

    // Crafting Kit Upgrades
    upgrade_crafting_kit_upgrade_1: "深坞：由熔炉之女以 180 念珠出售。",
    upgrade_crafting_kit_upgrade_2: '钟心镇：完成"清剿腐囊虫"心愿。',
    upgrade_crafting_kit_upgrade_3: "蚀阶：由格林德尔以 700 念珠出售。",
    upgrade_crafting_kit_upgrade_4:
      "圣堡工厂：由第十二席建筑师以 450 念珠出售。",

    // Tools sections
    section_red_attack_tools:
      "这些工具（除了少数临时获得的）每个计入完成度的 1%。",
    section_blue_defense_tools: "这些工具每个计入完成度的 1%。",
    section_yellow_exploration_tools: "这些工具每个计入完成度的 1%。",

    // Red (Attack) Tools
    tool_straight_pin: "髓骨洞窟：位于格林德尔牢房的上层。",
    tool_threefold_pin:
      "灰沼（腐囊虫泽）：位于秘密房间内，从右侧墙壁穿过进入。",
    tool_sting_shard: "深坞：由熔炉之女以 140 念珠和 1 个锻造金属出售。",
    tool_tacks: "罪途：完成蟑螂内脏心愿。在第三幕，可以从小屋地板上拾取。",
    tool_longpin: "钟心镇：位于木蜂巢后面的秘密房间内。",
    tool_curveclaw_curvesickle:
      '猎者小径 / 远野：由斑纹斯卡尔以 140 念珠出售。在第三幕，可以在"远野"房间升级曲爪，该房间可以通过钟道外的上升气流向上再向右到达。',
    tool_throwing_ring: '腐汁泽：完成"终迹"心愿。',
    tool_pimpillo:
      "灰沼：在雅纳碧的钟居附近左上角秘密房间的工作台制作。需要 1 个锻造金属。",
    tool_conchcutter: "珊瑚尖塔：进入珊瑚尖塔后几乎立即可以找到。",
    tool_silkshot:
      "深坞 / 圣堡工厂 / 费耶山：3 个变体之一可以使用损坏的工具和 1 个锻造金属获得。其中一个变体可以从熔炉之女处以 240 念珠购买。第二个变体可以从第十二席建筑师处以 130 念珠购买。最佳变体可以在费耶山顶附近长椅旁的工作台制作。",
    tool_delvers_drill: "圣堡工厂：位于左下角的工作台上。",
    tool_cogwork_wheel:
      "圣堡工厂：由第十二席建筑师以 360 念珠和 1 个锻造金属出售。",
    tool_cogfly:
      "高庭：在可破坏格栅后面的房间内的工作台制作。需要 1 个锻造金属。",
    tool_rosary_cannon:
      "高庭：位于念珠储藏室的可破坏墙壁后面（需要简易钥匙解锁）。",
    tool_voltvessels: "忆廊（右上）",
    tool_flintslate: "深坞",
    tool_flea_brew: '灰沼：完成"迷途跳蚤"心愿，并与格莉什琴对话。',
    tool_plasmium_phial: '沙噬虫道：完成"炼金助手"心愿。',
    tool_needle_phial: "沙噬虫道：用于收集生质液的临时工具。",
    tool_snare_setter: '阿特拉织巢：作为"灵丝与灵魂"心愿的一部分所需。',

    // Blue (Defense) Tools
    tool_druids_eye:
      '苔穴（苔栖乡）：完成"莓果采集"心愿。再给苔藓德鲁伊 4 个苔莓以升级。',
    tool_magma_bell: "深坞：由熔炉之女以 110 念珠和 1 个锻造金属出售。",
    tool_warding_bell: "深坞",
    tool_pollip_pouch: '甲木林：完成"花芯仪式"心愿。',
    tool_fractured_mask:
      "猎者小径：由斑纹斯卡尔以 260 念珠出售，或在游戏后期在同一位置的地面上找到。",
    tool_multibinder: '钟心镇：完成"失踪送货员"心愿后，由芙蕾以 880 念珠出售。',
    tool_weavelight:
      "阿特拉织巢：位于与 2 只苔藓之母战斗的屋顶天花板上的装饰物内。",
    tool_sawtooth_circlet:
      "圣堡工厂：由第十二席建筑师以 230 念珠和 1 个锻造金属出售。",
    tool_injector_band: "白愈厅",
    tool_spool_extender:
      '圣歌盟地：完成"商贾无踪"心愿后，由朱比拉娜以 720 念珠出售。',
    tool_reserve_bind: "高庭：击败次席戍卫。",
    tool_claw_mirror_claw_mirrors:
      "低语书库（剧台）：击败特罗比奥。击败受难的特罗比奥以升级。",
    tool_memory_crystal: "费耶山：位于隧道尽头的大型水晶碎片内。",
    tool_snitch_pick: "蚀阶：由格林德尔以 740 念珠出售。",
    tool_volt_filament: "珊瑚尖塔（电荷巢穴）：击败伏特维姆。",
    tool_quick_sling: "腐汁泽：位于两个可破坏天花板上方的秘密区域。",
    tool_wreath_of_purity: "腐殖渠",
    tool_longclaw: '腐殖渠：完成"育巢盛宴"心愿。',
    tool_wispfire_latern: "火灵竹丛：击败炽焰之父。",
    tool_egg_of_flealia: "腐殖渠（蚤托邦）：找到纺络的所有迷途跳蚤。",
    tool_pin_badge: "费耶山：击败针姬。",

    // Yellow (Exploration) Tools
    tool_compass: "髓骨洞窟：由沙克拉以 70 念珠出售。",
    tool_shard_pendant: "髓骨洞窟",
    tool_magnetite_brooch:
      "骸底镇 / 蚀阶：由佩珀以 120 念珠出售。在第三幕，可以从格林德尔处以 220 念珠购买。",
    tool_weighted_belt:
      "远野：由莫特（朝圣者憩所）以 160 念珠出售。如果不从莫特处购买，可以在第三幕在附近位置找到。",
    tool_barbed_bracelet: "罪途（右下）",
    tool_dead_bugs_purse_shell_satchel:
      "沙噬虫道：位于由 2 只戈鲁姆幼虫守卫的小房间内的尸体上。壳囊仅可在钢魂模式中找到。",
    tool_magnetite_dice:
      "蚀阶：多次击败幸运的兰布尔掷骰子游戏，或在访问圣咏殿后返回此处直接拾取。也可以在第三幕从格林德尔处以 300 念珠购买。",
    tool_scuttlebrace:
      "圣堡工厂：由第十二席建筑师以 140 念珠和 1 个锻造金属出售。",
    tool_ascendants_grip:
      '圣歌盟地：完成"商贾无踪"心愿后，由朱比拉娜以 350 念珠出售。',
    tool_spider_strings:
      '圣歌盟地：完成"再寻商贾"心愿后，由朱比拉娜以 320 念珠出售。',
    tool_silkspeed_anklets:
      "远野（织巢）：速度挑战。使用疾风步，踩过所有压力板。",
    tool_thiefs_mark: "蚀阶：由格林德尔以 350 念珠出售。",

    // Crests sections
    // (no section descriptions)

    // Crests
    crest_hunter_crest: "默认纹章，开始时已装备。",
    crest_hunter_crest_upgrade_1: "阿特拉织巢：与伊娃对话。",
    crest_hunter_crest_upgrade_2:
      "阿特拉织巢：通过忆境纪念盒和获取新纹章解锁总共 27 个工具栏位（不包括猎者纹章栏位）后，与伊娃对话。",
    crest_vesticrest_1_extra_yellow_slot_1:
      "阿特拉织巢：通过忆境纪念盒和获取新纹章解锁总共 12 个工具栏位（不包括猎者纹章栏位）后，与伊娃对话。解锁一个永久的黄色（探索）工具栏位。",
    crest_vesticrest_2_extra_blue_slot_2:
      "阿特拉织巢：通过忆境纪念盒和获取新纹章解锁总共 20 个工具栏位（不包括猎者纹章栏位）后，与伊娃对话。解锁一个永久的蓝色（防御）工具栏位。",
    crest_reaper_crest: "灰沼：收割者教堂。",
    crest_wanderer_crest: "苔穴（骸冢）：漫游者教堂。",
    crest_beast_crest: "猎者小径：野兽教堂。",
    crest_witch_crest:
      '钟心镇：将扭曲的畸芽交给灰蕨，完成"重生仪式"心愿，完成"寄生手术"心愿。',
    crest_architect_crest: "圣堡工厂：建筑师教堂。",
    crest_shaman_crest:
      "苔穴（颓败教堂）：位于第一块知识石碑上方的隧道中，需要丝之翱翔。",

    // Lost Fleas sections
    // (no section descriptions)

    // Lost Fleas
    flea_lost_flea_1: "髓骨洞窟（顶部）：位于高处的岩架上。",
    flea_lost_flea_2:
      "髓骨洞窟：位于钟道左侧的秘密房间内。在充满熔岩瀑布的区域角落。",
    flea_lost_flea_3: "深坞（顶部）：拉动下方的拉杆，然后使用疾步向上到达。",
    flea_lost_flea_4: "远野：小心压力板陷阱！",
    flea_lost_flea_5: "猎者小径：位于一长串红色果实的顶部。",
    flea_lost_flea_6: "灰沼：位于腐囊虫泽上方和右侧。",
    flea_lost_flea_7: "灰沼：通过塔顶到达。",
    flea_lost_flea_8: "甲木林：位于充满爆粉葵（和一些幻形花虻）敌人的坑底。",
    flea_lost_flea_9: "远野：钟道右侧的隐藏跑酷路径。",
    flea_lost_flea_10: "蚀阶（顶部）：靠近连接到卡拉卡沙川的区域（钟道上方）。",
    flea_lost_flea_11: "罪途：跳过第一个笼子，然后打破装有跳蚤的笼子右侧。",
    flea_lost_flea_12:
      "废鸣管风琴（内部）：在有灵丝补充纺锤的房间。从那里向左走。",
    flea_lost_flea_13: "钟心镇（顶部）：位于可破坏墙壁后面。",
    flea_lost_flea_14:
      "沙噬虫道：位于可破坏墙壁后面，由在房间里飞来飞去的阿克尼携带。",
    flea_lost_flea_15: "罪石牢狱：位于区域边缘的小侧室内。",
    flea_lost_flea_16:
      "腐汁泽：位于可破坏墙壁后面的房间内。击败两只念珠窃贼来救它。",
    flea_lost_flea_17: "深坞：位于只有在击败附近竞技场战斗后才能到达的房间内。",
    flea_lost_flea_18:
      "圣堡工厂：只能通过火灵竹丛并穿越充满锯子的房间才能到达。",
    flea_lost_flea_19: "腐汁泽：位于充满陷阱的秘密房间尽头。",
    flea_lost_flea_20: "圣咏殿：位于平台挑战的尽头。",
    flea_lost_flea_21: "卡拉卡沙川：位于可破坏墙壁后面的秘密区域。",
    flea_lost_flea_22: "费耶山：位于中间房间的顶部。",
    flea_lost_flea_23: "圣歌盟地（右上）：跑酷挑战，通过低语书库进入。",
    flea_lost_flea_24:
      "圣咏殿：位于秘密竖井内。在竖井底部的可破坏墙壁后面打开风扇，然后乘坐竖井中的气流到达顶部。",
    flea_lost_flea_25:
      "低语书库：将带有长轨道的箱子移动到最终位置以到达这只跳蚤。",
    flea_lost_flea_26: "圣堡工厂：位于圣脉枢管下方最底层的房间内。",
    flea_lost_flea_27: "罪石牢狱：位于最下方长椅的正上方。",
    flea_lost_flea_28: "忆廊：位于最顶部圆顶状区域。",
    flea_lost_flea_29: "灰沼：位于中途酒馆右上方的可破坏墙壁后面。",
    flea_lost_flea_30: "腐殖渠：位于钟道右侧的隐藏通道内。",

    // Relics sections
    section_bone_scrolls:
      "由朝圣者和纺络其他低阶虫子写的日志。可以卖给寻宝者拾荒奇换取 90 念珠。",
    section_weaver_effigies:
      "用骨头雕刻的肖像，描绘了各种织者形象，身体上刻有献给特定织者的祷文。可以卖给寻宝者拾荒奇换取 150 念珠。",
    section_choral_commandments:
      "它们承载着来自城塞的命令和法令。可以卖给寻宝者拾荒奇换取 180 念珠。",
    section_rune_harps:
      "古老的录音乐器，上面绑着织者铭刻的丝线符文。可以卖给寻宝者拾荒奇换取 210 念珠。",
    section_psalm_cylinders:
      "刻有录音的圆筒，可以带到书库管理员卡迪尼乌斯那里聆听。可以卖给书库管理员卡迪尼乌斯换取 200 念珠，神圣音筒可换取 320 念珠。",
    section_arcane_egg:
      "在纺络诞生前形成的黑色石蛋。可以卖给寻宝者拾荒奇换取 600 念珠。",

    // Relics
    relic_bone_scroll_1: "灰沼：位于秘密房间内一路向右游泳后找到的尸体上。",
    relic_bone_scroll_2: "远野：位于秘密房间内，需要漂流者披风才能到达。",
    relic_bone_scroll_3: "圣堡工厂（左侧）：位于可破坏墙壁后面。",
    relic_bone_scroll_4: "火灵竹丛（顶部）：平台挑战。",
    relic_weaver_effigy_1:
      "骸底镇：位于骸底镇上方的秘密房间内，最容易使用漂流者披风从上方飘落到达。",
    relic_weaver_effigy_2: "甲木林：位于女巫教堂内的最右上角区域。",
    relic_weaver_effigy_3: "罪石牢狱（右下）：位于尸体上。",
    relic_choral_commandment_1: "骸底镇：位于高处的岩架上，苔栖乡的左侧。",
    relic_choral_commandment_2: "白愈厅：左上角房间。",
    relic_choral_commandment_3:
      "白愈厅：位于隐藏通道上方房间的尽头，最容易通过丝之翱翔到达。",
    relic_choral_commandment_4:
      '圣歌盟地：完成"再寻商贾"心愿后，由朱比拉娜以 210 念珠出售。',
    relic_rune_harp_1: "阿特拉织巢：位于高处的岩架上。",
    relic_rune_harp_2: "远野（织巢）：使用丝速脚环和跳蚤酿，踩过所有压力板。",
    relic_rune_harp_3: "高庭：在第三幕从指挥家巴拉多尔的房间拾取。",
    relic_psalm_cylinder_grindle: "蚀阶：由格林德尔以 240 念珠出售。",
    relic_psalm_cylinder_vaultkeeper_cardinius_lair:
      "低语书库：书库管理员卡迪尼乌斯的巢穴。",
    relic_psalm_cylinder_whispering_vaults:
      "低语书库（顶部）：位于跑酷挑战的尽头。",
    relic_psalm_cylinder_high_halls: "高庭：位于可破坏墙壁后面。",
    relic_psalm_cylinder_underworks:
      "圣堡工厂（顶部）：位于可破坏墙壁后面的走廊尽头。",
    relic_sacred_cylinder: "低语书库：“管理员的旋律”任务的一部分。",

    // Memory Lockets sections
    // (no section descriptions)

    // Memory Lockets
    memory_locket_memory_locket_1:
      "远野（朝圣者憩所）/ 蚀阶：由莫特以 150 念珠出售。如果不从莫特处购买，可以在第三幕从格林德尔处以 250 念珠购买。",
    memory_locket_memory_locket_2:
      "猎者小径（最右侧）：位于尖刺走廊尽头的笼子内。打破笼子拾取。",
    memory_locket_memory_locket_3: "灰沼：位于螨母上方的岩架上。",
    memory_locket_memory_locket_4: "灰沼：位于中途酒馆内。",
    memory_locket_memory_locket_5: "钟心镇：由芙蕾以 330 念珠出售。",
    memory_locket_memory_locket_6: "钟心镇：使用丝之翱翔进入屋顶。",
    memory_locket_memory_locket_7: '骸底镇：完成"暴烈燧甲虫"心愿。',
    memory_locket_memory_locket_8: "髓骨洞窟（顶部）",
    memory_locket_memory_locket_9:
      '圣咏殿（圣堡钟道）：位于钟道上方的可破坏墙壁后面，通过"废鸣管风琴 - 圣堡工厂"路径进入。',
    memory_locket_memory_locket_10: "沙噬虫道（右下）：位于尸体上。",
    memory_locket_memory_locket_11: "蚀阶：位于沙地上方的狭窄平台上。",
    memory_locket_memory_locket_12: "圣堡工厂：位于忏悔室左侧的隐藏区域内。",
    memory_locket_memory_locket_13: "低语书库：位于隧道顶部。",
    memory_locket_memory_locket_14:
      "腐汁泽：位于秘密房间的最左边缘。在感染的水域上弹跳并沿垂直空间攀爬到达。",
    memory_locket_memory_locket_15:
      "深坞：位于可破坏墙壁后面充满岩浆区域底部的尸体上。",
    memory_locket_memory_locket_16:
      "腐汁泽：位于悬挂在天花板上的可破坏茧中的尸体上。",
    memory_locket_memory_locket_17:
      "罪石牢狱：位于捷径洞穴内。当你在垂直空间攀爬时注意可破坏墙壁。",
    memory_locket_memory_locket_18: "忆廊：位于平台关卡后。",
    memory_locket_memory_locket_19:
      "远野：位于卡梅莉塔洞穴右侧的秘密区域。由虚空强化的斯卡尔禁卫守卫。",
    memory_locket_memory_locket_20: "卡拉卡沙川：位于区域顶部的尸体上。",

    // Craftmetals sections
    // (no section descriptions)

    // Craftmetals
    craftmetal_craftmetal_1:
      "骸底镇 / 蚀阶：由佩珀以 60 念珠出售。如果不从佩珀处购买，可以在第三幕从格林德尔处以 120 念珠购买。",
    craftmetal_craftmetal_2: "髓骨洞窟：位于秘密房间内充满陷阱的隧道尽头。",
    craftmetal_craftmetal_3:
      "深坞：位于路障后面的箱子内。敲打它，或让附近敌人的爆炸性弹丸清除路障。",
    craftmetal_craftmetal_4: "蚀阶：位于充满蠕虫和落石的通道尽头。",
    craftmetal_craftmetal_5:
      "圣堡工厂：位于充满熔岩的隧道尽头。拾取它会触发圣厂维修工伏击。",
    craftmetal_craftmetal_6: "腐殖渠：位于苍湖最右侧水面上方的裂缝中。",
    craftmetal_craftmetal_7:
      "火灵竹丛：位于隐藏路径的尽头，在充满火灵生成器的区域左上部分。",
    craftmetal_craftmetal_8:
      '圣歌盟地：完成"再寻商贾"心愿后，由朱比拉娜以 180 念珠出售。',

    // Mossberries sections
    // (no section descriptions)

    // Mossberries
    mossberry_mossberry_1: "苔穴",
    mossberry_mossberry_2: "苔穴：使用附近的苔翼虫弹跳到达。",
    mossberry_mossberry_3:
      "苔穴（骸底镇）：由聚居地上方高处飞行的敌人携带。在第三幕移动到这里东侧的房间内。",
    mossberry_mossberry_4: "苔穴（苔栖乡）：由飞行敌人携带。",
    mossberry_mossberry_5: "苔穴（骸冢）：由在该区域高处飞行的敌人携带。",
    mossberry_mossberry_6: "阿特拉织巢：在天花板上生长。",
    mossberry_mossberry_7: "忆廊",

    // Keys sections
    section_simple_keys: "它们用于打开简单的锁。每把钥匙只能使用一次。",
    section_keys_of_the_slab: "它们用于打开石板中的大门。",
    section_other_keys: "在纺络各地发现的其他钥匙。",

    // Keys
    key_simple_key_1:
      "骸底镇 / 蚀阶：由佩珀以 500 念珠出售。如果不从佩珀处购买，可以在第三幕从格林德尔处以 600 念珠购买。",
    key_simple_key_2: "罪途（右上）：由（被击败的）蟑螂监管者掉落。",
    key_simple_key_3:
      '圣歌盟地：完成"商贾无踪"心愿后，由朱比拉娜以 650 念珠出售。',
    key_simple_key_4: "卡拉卡沙川（最右侧）：位于坐在最右侧长椅上的尸体上。",
    key_key_of_indolent: "罪石牢狱：位于从上方进入的房间边缘。",
    key_key_of_heretic: "罪石牢狱：由从上方进入的房间中的最后一个敌人掉落。",
    key_key_of_apostate: "腐殖渠（左下）：位于笼子内，击打几次让钥匙掉出来。",
    key_architects_key:
      "圣堡工厂：在获得 25 个工具后，由第十二席建筑师以 110 念珠出售。解锁建筑师教堂。",
    key_white_key:
      '圣歌盟地：位于区域边缘的尸体上。如果在完成"商贾无踪"心愿前没有拾取，可以从朱比拉娜处以 220 念珠购买。解锁白愈厅的升降梯。',
    key_surgeons_key:
      "白愈厅（右上）：悬挂在金属环上几秒钟，最终会有一具携带此钥匙的尸体掉落。解锁白愈厅的活板门。",
    key_diving_bell_key: "深坞",

    // Maps sections
    // (no section descriptions)

    // Maps
    map_mosslands: "由沙克拉以 40 念珠出售。",
    map_the_marrow: "由沙克拉以 50 念珠出售。",
    map_deep_docks: "由沙克拉以 50 念珠出售。",
    map_hunters_march: "由沙克拉以 70 念珠出售。",
    map_far_fields: "由沙克拉以 50 念珠出售。",
    map_greymoor: "由沙克拉以 70 念珠出售。",
    map_bellhart: "当你在甲木林及之后遇到沙克拉时，由她以 40 念珠出售。",
    map_shellwood: "由沙克拉以 70 念珠出售。",
    map_wormways: "由沙克拉以 70 念珠出售。",
    map_weavenest_atla:
      "打开通往该区域的织忆弦针门，然后击打走廊尽头的两个发光圆柱。",
    map_blasted_steps: "由沙克拉以 70 念珠出售。",
    map_sinners_road: "由沙克拉以 90 念珠出售。",
    map_grand_gate: "从展示圣堡模型的机器以 40 念珠购买。",
    map_underworks: "从昏暗房间内的可交互木板上获得。",
    map_choral_chambers: "从展示圣堡模型的机器以 70 念珠购买。",
    map_whispering_vaults: "从展示圣堡模型的机器以 70 念珠购买。",
    map_whiteward: "从展示圣堡模型的机器以 70 念珠购买。",
    map_cogwork_core: "从长椅上方的房间获得。",
    map_memorium: "从展示圣堡模型的机器以 70 念珠购买。",
    map_high_halls: "从展示圣堡模型的机器以 70 念珠购买。",
    map_the_slab: "绘制在尸体上，位于长椅旁边秘密通道的尽头。",
    map_mount_fay: "由沙克拉以 40 念珠出售。",
    map_bilewater: "由沙克拉以 90 念珠出售。",
    map_putrified_ducts: "位于房间顶部，通过让巴纳克抓住自己到达。",
    map_sands_of_karak: "由沙克拉以 90 念珠出售。",
    map_the_cradle: "从展示圣堡模型的机器以 70 念珠购买。",
    map_verdania: "位于东端的旧营地，有几只死去的虫子和一张长椅。",
    map_the_abyss: "位于南侧长椅的正上方。",

    // Bellways sections
    // (no section descriptions)

    // Bellways
    bellway_bone_bottom: "击败钟道兽后解锁。",
    bellway_the_marrow: "击败钟道兽后解锁。",
    bellway_deep_docks: "支付 40 念珠过路费后解锁。",
    bellway_far_fields: "支付 50 念珠过路费后解锁。",
    bellway_greymoor: "支付 60 念珠过路费后解锁。",
    bellway_bellhart: "支付 60 念珠过路费后解锁。",
    bellway_shellwood: "支付 40 念珠过路费后解锁。",
    bellway_blasted_steps: "支付 60 念珠过路费后解锁。",
    bellway_the_slab: "支付 40 念珠过路费后解锁。",
    bellway_grand_bellway: "支付 80 念珠过路费后解锁。",
    bellway_bilewater: "支付 80 念珠过路费后解锁。",
    bellway_putrified_ducts: "支付 80 念珠过路费后解锁。",

    // Ventrica Stations sections
    // (no section descriptions)

    // Ventrica Stations
    ventrica_terminus: "打开任意一个圣脉枢管后解锁。",
    ventrica_memorium: "支付 80 念珠过路费后解锁。",
    ventrica_high_halls: "支付 80 念珠过路费后解锁。",
    ventrica_first_shrine: "支付 80 念珠过路费后解锁。",
    ventrica_choral_chambers: "支付 80 念珠过路费后解锁。",
    ventrica_grand_bellway: "支付 80 念珠过路费后解锁。",
    ventrica_underworks: "支付 80 念珠过路费后解锁。",

    // Mementos sections
    // (no section descriptions)

    // Mementos
    memento_grey_memento: "卡拉卡沙川：击败边陲守望者。",
    memento_heros_memento: "蚀阶：击败失心加蒙德。",
    memento_surface_memento:
      "地表（摇篮圣所顶部）：在无名镇最右侧的房子里演奏织忆弦针，使其从天花板掉落。",
    memento_hunters_memento:
      "灰沼（中途酒馆）：完成猎手日志。不需要沙克拉、加蒙德 & 札札、苍白苜鹿、失心加蒙德、失心蕾丝和虚面救世主的日志条目。",
    memento_craw_memento:
      '远野：灰沼（腐囊虫泽）：击败腐囊之父。与"腐囊钟巢"（也用于装饰钟居）同时解锁，它会随时间产生念珠和甲壳碎片。',
    memento_sprintmaster_memento:
      "在第三幕向颓败教堂的蜗牛萨满交付三颗心脏后，与飞毛腿斯威夫特完成一场竞速。",
    memento_seth_memento:
      "腐殖渠（蚤托邦）：在所有跳蚤游戏中击败赛斯的所有分数后与他对话。",
    memento_heart_memento:
      '在四颗可用的心脏（壳王之心、花粉之心、猎手之心、共生之心）中，未用于"古之心"心愿（需要 3 颗心脏）的那颗心脏可以作为忆痕在钟居中展示。',

    // Quests sections
    section_objectives: "大黄蜂必须完成的主线目标，以推进游戏进程。",
    section_wishes_wayfarer: "涉及旅行和探索的心愿，在世界中寻找某物或某人。",
    section_wishes_gather: "需要收集特定数量或种类物品的心愿。",
    section_wishes_donate: "需要捐赠甲壳碎片或念珠以进行建设和改进的心愿。",
    section_wishes_hunt:
      "涉及猎杀一定数量或类型的普通敌人以达成特定目标的心愿。",
    section_wishes_grand_hunt: "涉及猎杀和击败Boss级敌人以达成目标的心愿。",
    section_wishes_delivery:
      "需要在不使用快速旅行的情况下将易碎包裹从一个地点运送到另一个地点的心愿。",
    section_wishes_learn: "学习纺络生物的独特心愿。",
    section_wishes_collect: "为特殊目标收集灵魂（和陷阱）的独特心愿。",
    section_wishes_sprint: "证明速度和敏捷性的独特心愿。",
    section_wishes_witness: "通过与神秘谜语石板互动触发的独特心愿。",
    section_wishes_steel: "由先知给予的独特心愿，仅在钢魂模式下可用。",

    // Quests
    quest_the_great_citadel: "骸底镇：穿越纺络大地，抵达王国巅峰的圣堡。",
    quest_the_threadspun_town: "钟心镇：击败黑寡妇。",
    quest_grand_gate: "蚀阶（巨扉圣门外）：复苏各地尘封的古钟。",
    quest_silent_halls: "巨扉圣门",
    quest_conductors_melody: "高庭",
    quest_architects_melody: "机枢核心",
    quest_vaultkeepers_melody: "低语书库",
    quest_pharlooms_crown: "机枢核心（中央）",
    quest_pale_monarch: "摇篮圣所：结局之一。",
    quest_soul_snare:
      '摇篮圣所：攀登圣堡，用致命陷阱禁锢其君主（需要完成"灵丝与灵魂"心愿）。',
    quest_after_the_fall: "摇篮圣所：探明纺络的命运。",
    quest_beast_in_the_bells: "圣堡钟道：也可以从任何其他钟道进入。",
    quest_awaiting_the_end:
      "圣歌盟地：在骸底镇旁的颓败教堂直面看守者及其家族。",
    quest_the_dark_below:
      "骸底镇（颓败教堂）：在深坞寻求帮助并找到潜钟以潜入纺络之下。",
    quest_return_to_pharloom: "深渊：逃离！",
    quest_spell_seeker: "骸底镇（颓败教堂）：返回蜗牛萨满处。",
    quest_the_old_hearts:
      '骸底镇（颓败教堂）：完成"力量之心"、"森之心"、"野性之心"目标。',
    quest_heart_of_might: "卡拉卡沙川（珊瑚尖塔）",
    quest_heart_of_the_woods:
      "甲木林：在巨扉圣门的升降梯井中找到可破坏墙壁到达此处。",
    quest_heart_of_the_wild: "远野：在卡梅莉塔雕像附近使用灵丝升腾。",
    quest_last_dive: "深渊：最终结局（？）。",
    quest_the_lost_fleas: "髓骨洞窟：跳蚤首领穆什卡的心愿。",
    quest_my_missing_courier: "钟心镇：祈愿墙上（击败黑寡妇后出现）。",
    quest_pinmaster:
      "钟心镇：针匠普林尼的心愿（在第一次磨针并与针匠普林尼对话后可访问）。",
    quest_the_wandering_merchant: "圣歌盟地：祈愿墙上。",
    quest_rite_of_rebirth:
      '甲木林：灰蕨的心愿（完成"花芯仪式"心愿并将扭曲的畸芽交给他们后可访问）。',
    quest_my_missing_brother:
      '钟心镇：祈愿墙上（第二幕出现，需要完成"失踪送货员"心愿）。',
    quest_infestation_operation:
      '灰沼：雅纳碧的心愿（完成"重生仪式"心愿后可访问）。',
    quest_balm_for_the_wounded:
      "圣歌盟地：谢尔玛的心愿（发现白愈厅后出现，也可以直接在白愈厅与谢尔玛对话访问）。",
    quest_trails_end: "任意祈愿墙（从沙克拉处购买所有地图后出现）",
    quest_the_lost_merchant:
      '圣歌盟地：祈愿墙上（获得幻羽披风并完成"商贾无踪"和"强化圣歌盟地"心愿后出现）。',
    quest_final_audience:
      "圣歌盟地：祈愿墙上（学习指挥家的旋律、激活次席戍卫（3 个机心部件对）、在圣咏殿遭遇几场次席戍卫战斗场景后出现）。",
    quest_fatal_resolve:
      "圣歌盟地：祈愿墙上（从深渊返回后出现，也可以通过访问针姬之家访问）。",
    quest_heros_call:
      "钟心镇：祈愿墙上（遭遇几场加蒙德和札札战斗场景后出现）。",
    quest_ecstasy_of_the_end:
      "钟心镇：祈愿墙上（找到所有 30 只迷途跳蚤后出现）。",
    quest_pain_anguish_and_misery: "圣歌盟地：祈愿墙上。",
    quest_berry_picking: "苔穴（苔栖乡）：苔藓德鲁伊的心愿。",
    quest_rite_of_the_pollip: "甲木林：灰蕨的心愿。",
    quest_silver_bells: "钟心镇：祈愿墙上（击败黑寡妇后出现）。",
    quest_alchemists_assistant:
      "虫道：炼金师奇洛托的心愿（与他对话两次后访问）。",
    quest_great_taste_of_pharloom: "圣咏殿：忠诚的梅尔格温的心愿。",
    quest_advanced_alchemy:
      '沙噬虫道：炼金师奇洛托的心愿（第三幕访问，需要完成"炼金助手"心愿）。',
    quest_bone_bottom_repairs: "骸底镇：祈愿墙上。",
    quest_a_lifesaving_bridge: "骸底镇：祈愿墙上（到达灰沼后出现）。",
    quest_restoration_of_bellhart:
      "钟心镇：祈愿墙上（击败黑寡妇、与针匠普林尼对话进行第一次织针升级、并向圣物探索者拾荒奇出售任意遗物后出现）。",
    quest_bellharts_glory:
      '钟心镇：祈愿墙上（完成"重振钟心镇"心愿后的某个时候出现）。',
    quest_an_icon_of_hope: "骸底镇：祈愿墙上（第二幕出现）。",
    quest_building_up_songclave: "圣歌盟地：祈愿墙上。",
    quest_strengthening_songclave: "圣歌盟地：祈愿墙上。",
    quest_garb_of_the_pilgrims: "骸底镇：祈愿墙上。",
    quest_flexile_spines: "远野：裁缝的心愿。",
    quest_crawbug_clearing: "钟心镇：祈愿墙上（击败黑寡妇后出现）。",
    quest_volatile_flintbeetles: "骸底镇：祈愿墙上（到达灰沼后出现）。",
    quest_roach_guts: "罪途：克鲁尔和班金的心愿。",
    quest_fine_pins: "圣歌盟地：祈愿墙上。",
    quest_cloaks_of_the_choir:
      '圣歌盟地：祈愿墙上（完成"建设圣歌盟地"和"精致刺针"心愿后出现）。',
    quest_broodfeast: "腐殖渠：幼兽的心愿。",
    quest_the_terrible_tyrant: "骸底镇：祈愿墙上（获得蛛攀术后出现）。",
    quest_savage_beastfly:
      "钟心镇：祈愿墙上（第二幕某个时候出现，需要击败猎者小径（野兽教堂）的暴怒兽蝇）。",
    quest_the_wailing_mother:
      '圣歌盟地：祈愿墙上（完成"商贾无踪"和"强化圣歌盟地"心愿后出现）。',
    quest_dark_hearts: "钟心镇：祈愿墙上。",
    quest_the_hidden_hunter: "钟心镇：祈愿墙上。",
    quest_bone_bottom_supplies:
      '钟心镇：送货员蒂普 & 皮尔的心愿（完成"失踪送货员"和"寻虫启事"心愿后可访问）。',
    quest_pilgrims_rest_supplies:
      '钟心镇：送货员蒂普 & 皮尔的心愿（完成"失踪送货员"和"寻虫启事"心愿后可访问）。',
    quest_fleatopia_supplies:
      '钟心镇：送货员蒂普 & 皮尔的心愿（完成"失踪送货员"和"寻虫启事"心愿后可访问）。',
    quest_songclave_supplies:
      '钟心镇：送货员蒂普 & 皮尔的心愿（完成"失踪送货员"和"寻虫启事"心愿后可访问）。',
    quest_queens_egg:
      '钟心镇：送货员蒂普 & 皮尔的心愿（完成"失踪送货员"和"寻虫启事"心愿后可访问）。',
    quest_liquid_lacquer:
      '钟心镇：送货员蒂普 & 皮尔的心愿（完成"失踪送货员"和"寻虫启事"心愿后可访问）。',
    quest_survivors_camp_supplies:
      "钟心镇：送货员蒂普 & 皮尔的心愿（第三幕可访问）。",
    quest_bugs_of_pharloom: "灰沼（中途酒馆）：努努的心愿。",
    quest_silk_and_soul:
      "圣歌盟地：祈愿墙上（击败蕾丝、拯救 25 只跳蚤并将旅团移至蚤托邦、解锁钟居、完成所有可用心愿并与看守者对话后出现）。",
    quest_fastest_in_pharloom: "远野：飞毛腿斯威夫特的心愿。",
    quest_passing_of_the_age: "腐殖渠（苍湖）：与谜题石碑交互。",
    quest_a_vassal_lost: "甲木林：（仅钢魂模式）钢之先知·梓的心愿。",

    // Bosses sections
    // (no section descriptions)

    // Bosses
    boss_moss_mother: "出现在颓败教堂旁边，苔穴的尽头。",
    boss_bell_beast: "钟道兽位于髓骨洞窟的最顶端。",
    boss_lace: "在深坞的入口处遇到她。",
    boss_fourth_chorus: "获得流浪者披风后醒来与你战斗。",
    boss_savage_beastfly: "在野兽教堂深处。",
    boss_sister_splinter: "在甲木林的北端。",
    boss_skull_tyrant: "骷髅暴君首次出现在髓骨洞窟（中央圆顶）。",
    boss_moorwing: "灰沼钟道以西穿过三个房间。",
    boss_widow: "在钟心镇以北的房间中遇到。",
    boss_great_conchflies:
      "在蚀阶的西北区域，大黄蜂遇到一个充满粉红色螺壳的房间。",
    boss_last_judge:
      "激活所有五个钟殿（髓骨洞窟、深坞、远野、灰沼、甲木林）并在巨扉圣门外演奏织忆弦针开始战斗。如果难度太大，可以通过与幽影战斗来跳过。",
    boss_phantom:
      "在废鸣管风琴顶部的房间中，作为圣堡的替代入口，跳过末代裁决者Boss。",
    boss_cogwork_dancers: "机枢舞者在机枢核心的中央区域战斗。",
    boss_trobbio: "穿过低语书库后在剧台遇到。",
    boss_garmond_and_zaza: "仅在第 2 幕可用。圣歌盟地的东南部。",
    boss_forebrothers_signis_gron: "在深坞的早期房间中。",
    boss_the_unravelled:
      "散茧魂渊是白愈厅中的隐藏Boss，位于由医师钥匙解锁的废弃坑底部。",
    boss_disgraced_chef_lugoli: "在罪途东北的厨房中。",
    boss_father_of_the_flame: "可以在火灵竹丛的西侧角落找到。",
    boss_groal_the_great: "可以在腐安乡、腐汁泽的顶部找到。",
    boss_craggler: "可以在骸底镇上方苔栖乡出口对面的坑中找到，就在沙噬虫道外。",
    boss_voltvyrm: "可以在卡拉卡沙川内的电荷巢穴中找到。",
    boss_raging_conchfly: "可以在卡拉卡沙川的西北区域找到。",
    boss_first_sinner: "可以在罪石牢狱的下层区域找到，获得叛教之钥后可进入。",
    boss_broodmother:
      '在圣歌盟地接受"狩王试炼"心愿后，可以在罪石牢狱的洞穴中找到。',
    boss_second_sentinel:
      '只能在开始"最终觐见"心愿后战斗，位于高庭的东南区域。',
    boss_shakra:
      '仅在第 2 幕可遇见。完成"终迹"心愿后在钟心镇以东；当你进入灰沼区域时敲击你找到的钟，召唤沙克拉进行友好战斗。',
    boss_grand_mother_silk: "可以在摇篮圣所的机枢核心上方找到。",
    boss_bell_eater: "第 3 幕开始后可以在任何钟道站找到。",
    boss_lost_garmond:
      '可以在蚀阶中找到，在钟道以西的房间中。他只能在"英勇救援"心愿期间战斗。',
    boss_crawfather: "可以在灰沼、腐囊虫泽大型建筑的地下室找到。",
    boss_plasmified_zango: "第 3 幕期间可以在沙噬虫道西部的秘密房间中找到。",
    boss_watcher_at_the_edge: "可以在卡拉卡沙川的中西部找到。",
    boss_palestag: "可以在翠庭找到。",
    boss_clover_dancers: "在翠庭的最顶端遇到，收集足够的忆境宝珠后。",
    boss_gurr_the_outcast: '在远野接受"隐秘猎手"心愿后可以找到。',
    boss_tormented_trobbio: "在剧台遇到，圣堡钟道站上方。",
    boss_pinstress: "可以在费耶山找到，在山腰的长椅所在的同一区域。",
    boss_shrine_guardian_seth:
      "可以在甲木林的隐藏区域战斗，通过巨扉圣门升降井的可破坏墙壁进入。",
    boss_nyleth: "巨扉圣门升降井左侧可破坏墙壁后的区域。",
    boss_skarrsinger_karmelita: "可以在远野的东北区域找到。",
    boss_crust_king_khann: "可以在卡拉卡沙川东北的珊瑚尖塔中找到。",
    boss_summoned_saviour:
      "可以在骸冢的最左下角找到，在可破坏墙壁后，苔穴的子区域。",
    boss_lost_lace: "位于深渊，在其中广阔的虚空之海下。",

    // Hunter's Journal sections
    // (no section descriptions)

    // Hunter's Journal sections
    // (no section descriptions)

    // Hunter's Journal - 占位文本（通常不需要location描述，这里仅作占位）
    // 注：猎人日志条目通常只需要名称翻译，不需要详细的位置描述
    // 这里添加通用占位符，以确保翻译系统能正常工作
  },
};
