// 1. YOUR DATA SECTION
const allSkills = [
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 26/04/2026",
    "description": "Cleric (Rank 1)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Heal  -",
    "stats": "OH: 2  CD: 22s",
    "description": "Creates a magic circle in front of you, restoring allies HP & SP or dealing damage to enemies.\nThe amount of HP restored increases according to the caster’s SPR and INT. The amount of Healing tiles created increases with skill level. Does not affect [Flying] targets.\r★ Tiles can now heal players at full HP",
    "iconUrl": "icons/heal_[magic]_-_[holy].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Cure  -",
    "stats": "CD: 0s",
    "description": "Create a magic circle in front of you that removes Lv.1 status ailments from allies or inflicts damage to enemies.\nDoes not affect [Flying] targets. Duration of magic circle and No. of Hits dealt  increases by skill level.\n★ No Cooldown",
    "iconUrl": "icons/cure_[magic]_-_[holy].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Safety Zone",
    "stats": "CD: 48s",
    "description": "Create a protective magic circle that blocks incoming attacks to friendly targets standing inside the circle.\nThe amount of hits blocked increases with skill level.",
    "iconUrl": "icons/safety_zone_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Deprotected Zone",
    "stats": "CD: 13s",
    "description": "Creates a magic circle that decreases enemies defense over time.\nDuration of the magic circle increases with skill level.",
    "iconUrl": "icons/deprotected_zone_[debuff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Divine Might",
    "stats": "CD: 27s",
    "description": "Temporarily enhances the level of the next skill cast for you and nearby party members.\nThe number of casts temporarily enhanced is increased by skill level.",
    "iconUrl": "icons/divine_might_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Fade",
    "stats": "CD: 40s",
    "description": "Hide yourself and nearby party members, preventing enemies from seeing and attacking you.\nCertain skills and attacks will remove the effect of [Fade] prematurely.\nThe duration of [Fade] increases by skill level.",
    "iconUrl": "icons/fade_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Guardian Saint",
    "stats": "CD: 60s",
    "description": "Bless the caster with the wisdom of the Guardian Saint, boosting the effects of healing skills by a percentage.",
    "iconUrl": "icons/guardian_saint_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 26/04/2026",
    "description": "Priest (Rank 2)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Aspersion",
    "stats": " CD: 20s",
    "description": "Sprinkle holy water in front of you, increasing the defense of you and your allies, while also dealing damage to enemies in range.\nRequires [Holy Water] to cast.",
    "iconUrl": "icons/aspersion_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Monstrance",
    "stats": " CD: 20s",
    "description": "Create a magic circle in front of you that reduces enemies evasion and physical defense. When cast, you and nearby allies temporarily gain increased DEX.\r\r★ No Longer provides a Fixed Percentage of DEX to allies, The amount of DEX gained is now based on the Priest’s known Level of Monstrance, as well as their DEX stat & Requires the Monstrance: Buff Duration Attribute to apply the bonus scaling DEX\r\n★ New Bonus DEX Formula: [DEX Gained = 5 + (Monstrance Skill Lv * (Caster's DEX/100))]",
    "iconUrl": "icons/monstrance_[buff]_[debuff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Blessing",
    "stats": " CD: 35s",
    "description": "Bless yourself and nearby allies, granting additional damage to attacks. The strength of the blessing scales according to the priest’s SPR and is also increased by the affected player’s individual attack and magic attack stats.\nRequires [Holy Powder] to cast.",
    "iconUrl": "icons/blessing_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Resurrection",
    "stats": " CD: 30s",
    "description": "Create an area of life in front of you that resurrects allies, while dealing damage to enemies, knocking them away. In Team Battle League, resurrection effects will only apply once per round.\nCasting time is faster with a higher skill level.",
    "iconUrl": "icons/resurrection_[cast_time].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Sacrament",
    "stats": " CD: 90s",
    "description": "Grants an additional holy property attack to nearby players.\n\nRequires [Gyslotis] to cast.",
    "iconUrl": "icons/sacrament_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Revive",
    "stats": " CD: 120s",
    "description": "Prevents nearby allies from becoming Incapable of Combat while the buff is active, if a player has taken lethal damage the effect ends and the players health will be restored depending on skill level, the player also becomes temporarily Invincible to incoming damage.",
    "iconUrl": "icons/revive_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Mass Heal",
    "stats": " CD: 30s",
    "description": "Restores HP of nearby allies.\nThe amount of HP restored increases with skill level.",
    "iconUrl": "icons/mass_heal_[restorative].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Exorcise  -",
    "stats": " CD: 0s",
    "description": "Create a magic circle in front of you that applies a damage over time effect to all enemies that enter the magic circle. The duration of the magic circle increases with skill level.\n★ No Cooldown",
    "iconUrl": "icons/exorcise_[magic]_-_[holy].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Turn Undead  -",
    "stats": "OH: 2  CD: 50s",
    "description": "Inflicts holy property magic damage to enemies in front of you. Mutant and Demon race enemies have a chance of being instantly defeated. (This does not apply to boss monsters or characters)",
    "iconUrl": "icons/turn_undead_[magic]_-_[holy].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 13/10/2025",
    "description": "Krivis (Rank 3)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Aukuras",
    "stats": "CD: 60s",
    "description": "Summons a holy torch, constantly restoring the HP of nearby allies.\nWhile near the torch, the duration of status ailments is reduced.\nEnemies near the torch have their accuracy reduced.",
    "iconUrl": "icons/aukuras_[buff]_[restorative].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Zalciai  &",
    "stats": "CD: 20s",
    "description": "Create a magic circle that increases allies critical rate & critical attack, while reducing the critical resistance of enemies.",
    "iconUrl": "icons/zalciai_[buff]_&_[debuff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Daino",
    "stats": "CD: 60s",
    "description": "Perform a brief prayer, blessing yourself and nearby allies. While under the effects of Daino, magical attacks and skills have the chance to critically strike against enemies.",
    "iconUrl": "icons/daino_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Zaibas  -",
    "stats": "CD: 0s",
    "description": "Create a magic circle that calls down bolts of lightning using the God of Thunder’s power.\nThe maximum number of hits increases with skill level. \n★ [No Cooldown]\r★ Hitbox and Visual size has been increased",
    "iconUrl": "icons/zaibas_[magic]_-_[lightning].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Divine Stigma",
    "stats": "CD: 30s",
    "description": "Mark enemies in front of you with a stigma causing them to burn, dealing damage over time. Marked enemies take 1.5x damage from [Zaibas]. When a marked enemy is defeated, you and your allies STR and INT are temporarily increased. \n★ STR/INT Buff Formula: [Skill Level * (SPR/30)]",
    "iconUrl": "icons/divine_stigma_[debuff]_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Melstis",
    "stats": "CD: 60s",
    "description": "Bless you and your allies, extending the duration of beneficial effects.\nThe amount of time that buffs are extended by will not surpass 20 seconds.\nMelstis does not extend the effects of buffs that grant invincibility.\n★ Requires 5 Holy Powder to cast",
    "iconUrl": "icons/melstis_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 12/11/2025",
    "description": "Bokor (Rank 3)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Hexing",
    "stats": "CD: 0s",
    "description": "Curse nearby enemies with a hex, reducing their Magic Defense and preventing HP recovery.\r★ No Cooldown",
    "iconUrl": "icons/hexing_[debuff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Effigy  -",
    "stats": "CD: 0s",
    "description": "Rapidly stab your effigy, constantly dealing damage to enemies afflicted with [Hexing] from afar.\nDeals additional damage on every third consecutive hit.\r★ No Cooldown",
    "iconUrl": "icons/effigy_[magic]_-_[dark]_[channel]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Tet Mamak La",
    "stats": " CD: 0s",
    "description": "Throw the skull of a monkey at a target location, luring Zombies to attack enemies where the skull is thrown.",
    "iconUrl": "icons/tet_mamak_la.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Zombify",
    "stats": "CD: 25s",
    "description": "Create a magic circle of death, raising dead enemies as zombies under your command.\nEnemies defeated within the magic circle are brought back to life as a zombie, inheriting some of the stats of the defeated monster. Summoned  Zombies’ HP and STR increases according to the caster’s INT and SPR.\n★ Zombies also now inherit player’s stats",
    "iconUrl": "icons/zombify_[debuff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Mackangdal",
    "stats": "CD: 67s",
    "description": "Throw a talisman to nearby allies that temporarily suppress pain.\nWhile the talisman is active, allies are immune to damage but receive the full damage that has been accumulated at once when the effect ends.",
    "iconUrl": "icons/mackangdal_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Bwa Kayiman  -",
    "stats": "CD: 10s",
    "description": "Instruct your zombies to celebrate, forming a conga line of zombies that follow  behind the bokor’s movement. Zombies deal damage to enemies that come into contact with them. Zombies STR stat is applied as additional damage to enemies.",
    "iconUrl": "icons/bwa_kayiman_[physical]_-_[strike].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Samediveve",
    "stats": "CD: 51s",
    "description": "Place a glyph on the ground symbolizing Baron Samedi, the Loa of Death. You and your zombies gain increased Max. HP and Movement Speed when in close range of the glyph. The strength of the effects applied to you is only half of the listed value.",
    "iconUrl": "icons/samediveve_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Ogouveve",
    "stats": "CD: 51s",
    "description": "Place a glyph on the ground symbolizing Ogoun Feray, the Loa of Power.\nZombies near the glyph gain increased STR and AoE Attack Ratio.",
    "iconUrl": "icons/ogouveve_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Damballa",
    "stats": "CD: 10s",
    "description": "Create a cursed sphere in front of you that draws in nearby Zombies.\nZombies that are pulled into the sphere will detonate, dealing damage to nearby enemies.",
    "iconUrl": "icons/damballa_[magic].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 12/05/2025",
    "description": "Dievdirbys (Rank 3)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Statue of Goddess Vakarine",
    "stats": "CD: 85s",
    "description": "Carve a statue of Vakarine, Goddess of the Evening Star.\nYou may warp to other areas by interacting with this statue.\nRequires [Sculpting Wood] to cast.",
    "iconUrl": "icons/statue_of_goddess_vakarine_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Statue of Goddess Zemyna",
    "stats": "CD: 47s",
    "description": "Carve a statue of Zemyna, Goddess of the Earth.\nAllies within range of the statue have their SP costs for skills reduced and improved SP recovery.\nRequires [Sculpting Wood] to cast.",
    "iconUrl": "icons/statue_of_goddess_zemyna_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Statue of Goddess Laima",
    "stats": "OH: 0  CD: 47s",
    "description": "Carve a statue of Laima, Goddess of Fate.\nAllies using skills within range of the statue have their cooldown times reduced.\nRequires [Sculpting Wood] to cast.",
    "iconUrl": "icons/statue_of_goddess_laima_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Carve Attack  -",
    "stats": "OH: 3  CD: 13s",
    "description": "Attack a target using a carving knife.\nPlant type monsters take additional damage and have a chance of dropping statue carving materials.",
    "iconUrl": "icons/carve_attack_[physical]_-_[pierce]_[attack_speed].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Carve Owl",
    "stats": "OH: 2  CD: 50s",
    "description": "Carve an Owl Sculpture that fires attacks at targets in front of it.\n\nRequires [Sculpting Wood] to cast.",
    "iconUrl": "icons/carve_owl_[magic].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Carve World Tree",
    "stats": "OH: 0  CD: 92s",
    "description": "Carve a Divine World Tree.\nEnemies within range of the Divine World Tree are silenced and unable to attack.\nRequires [Sculpting Wood] to cast.",
    "iconUrl": "icons/carve_world_tree_[debuff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Statue of Goddess Ausrine",
    "stats": "OH: 0  CD: 80s",
    "description": "Carve a statue of Ausrine, Goddess of the Morning Star.\nParty members who circle around the statue in a counterclockwise rotation are granted [Blessing of the Goddess] and become temporarily immune to damage.\nRequires [Sculpting Wood] to cast.",
    "iconUrl": "icons/statue_of_goddess_ausrine_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 4/12/2025",
    "description": "Paladin (Rank 4)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Stone Skin",
    "stats": "OH: 0  CD: 60s",
    "description": "Cover yourself and nearby allies in a magical coating made of stone. Reducing damage taken from Slash, Pierce ,Bow ,Gun and Magic type attacks.\nThe amount of damage that is reduced increases with skill level.\r★ Damage Reduction = (7.5 + (Skill Lv * 2.5)%",
    "iconUrl": "icons/stone_skin_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Smite   -",
    "stats": "OH: 0  CD: 0s",
    "description": "Strike down enemies with a powerful attack. Deals triple damage to Mutant and Devil type enemies.\n\n★No Cooldown\r★ Hitbox has been increased\r★ Updated visual effects",
    "iconUrl": "icons/smite_[physical]_-_[strike]_[attack_speed].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Restoration",
    "stats": "OH: 0  CD: 60s",
    "description": "Activate an aura, increasing the HP Recovery of nearby allies.\r\r★ The effects of the Restoration: SP Recovery (Attribute) have been improved",
    "iconUrl": "icons/restoration_[buff]_[restorative].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Resist Elements",
    "stats": "OH: 0  CD: 180s",
    "description": "Increase you and your party members' resistance to Fire, Ice, Lightning, Earth and Poison elements. When attacked by any of these elements there is a chance to completely nullify the attack. Upon cast, nearby enemies have their Magic Defense reduced.",
    "iconUrl": "icons/resist_elements_[buff]_[debuff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Sanctuary",
    "stats": "OH: 0  CD: 30s",
    "description": "Creates a protective zone around you, temporarily increasing you and your allies’ Physical and Magical Defense. Allies that attack within range of the Sanctuary also deal additional Holy property damage equivalent to how much their defense was increased.\n★ Requires [Holy Water] to cast.\r★ Now also redirects damage done to the Paladin casting Sanctuary\r★ Applies a 30 second ‘Sanctuary’ buff when leaving the protective area, or the skill ends. While the buff is active, damage taken by allies will instead be redirected to the Paladin that casted ‘Sanctuary’\r★ Damage Taken by allies that is transferred to you is also converted into a stacking effect that boosts Paladin’s attack skills, when using attack skills, a portion of the stacks are consumed and will allow the skills to deal additional damage as a reward.\r\r★DEF/MDEF Boost Formula = [Skill Level * 10]",
    "iconUrl": "icons/sanctuary_[buff]_[channel]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Demolition   -",
    "stats": "OH: 2  CD: 25s",
    "description": "Gather your strength and swing your weapon into the ground triggering an explosive attack that hits enemies in a wide area around you.\r\r★ Now deals damage as 2 hits",
    "iconUrl": "icons/demolition_[physical]_-_[strike]_[attack_speed]_[cast_time].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Barrier",
    "stats": "OH: 0  CD: 40s",
    "description": "Create a protective barrier that prevents enemies from entering an area. When the barrier is created it will push back enemies until the barrier reaches its maximum size. Allies who are inside the barrier received increased Magic Defense.\nDuration of the barrier increases with skill level.\n★ Requires [Holy Water] to cast\r★ Devotion Attribute’s damage redirection effect has been removed, but the defense bonus still applies",
    "iconUrl": "icons/barrier_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Conviction  -",
    "stats": "OH: 3  CD: 20s",
    "description": "Slam your weapon in front of you several times, enemies struck are branded as traitors, reducing their resistances to Fire, Ice, Lightning and Poison properties. Stunned Enemies take additional damage.\r★ Requires a 2 Handed Mace\r★ Now is a Channel Skill (7 Hits over Approx. 5 Seconds)\r★ Cooldown is now 20 Seconds",
    "iconUrl": "icons/conviction_[physical]_-_[strike]_[attack_speed]_[channel]_[debuff]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 29/09/2025",
    "description": "Sadhu (Rank 4)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Out of Body",
    "stats": "OH: 0  CD: 0s",
    "description": "Enter a spiritual state creating a spiritual projection of yourself that is capable of moving around and performing basic attacks. The maximum distance between you and your spirit increases with skill level.",
    "iconUrl": "icons/out_of_body.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Prakriti",
    "stats": "OH: 0  CD: 9s",
    "description": "Relocates your body towards your Spirit’s current location.\nCan only be used while [Out of Body] is active.",
    "iconUrl": "icons/prakriti.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Astral Body Explosion  -",
    "stats": "OH: 0  CD: 30s",
    "description": "Detonates your Spirit creating an explosion at its current location, can only be used while [Out of Body] is active.\nThe damage of the skill increases with skill level.\n★ Knockdown Attribute: [Skill will drain all current SP when cast, Damage dealt increases in accordance with the amount of SP consumed]\r★ This skill cannot crit under any circumstance",
    "iconUrl": "icons/astral_body_explosion_[magic]_-_[psychokinesis].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Vashita Siddhi",
    "stats": "OH: 0  CD: 50s",
    "description": "Emanates a controlling spiritual aura. Enemies within range have their STR, CON, INT, SPR and DEX stats reduced. The amount of stats reduced increases with skill level.",
    "iconUrl": "icons/vashita_siddhi_[channel]_[debuff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Possession  -",
    "stats": "OH: 0  CD: 20s",
    "description": "Channels a pillar of light in front of you dealing damage to enemies within range and binding them in place.\nDamage and number of targets increases with skill level.",
    "iconUrl": "icons/possession_[magic]_-_[psychokinesis]_[channel]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Transmit Prana",
    "stats": "OH: 0  CD: 80s",
    "description": "Transmit a portion of your INT to a friendly target in front of you. Also temporarily enhances the damage of your Psychokinesis property skills. The value of stats transferred increases with skill level.\r\n★ The Transmit Prana is no longer a percentage transfer of stats\r★ The formula for INT that is given to an ally has been changed, the new formula is:\n [INT Given = (Skill Lv * (Caster’s INT/50))]\n\rThis formula applies for transmitting other stats too via the Transmit Prana Attribute, In order to know how much is being transferred you must replace  INT in the formula with the stat you are trying to transfer, I.e. CON or SPR",
    "iconUrl": "icons/transmit_prana_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 03/05/2026",
    "description": "Monk (Rank 5)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Awakening",
    "stats": "CD: 120s",
    "description": "Enter an Awakened state. Upon activation, recover all of your SP.\nWhile Awakened your SP drains over time and you gain the following effects:\nWeapon Scaling is treated as [Unarmed]\nMovement Speed is increased\nPhysical & Magical Attack, Critical Attack is increased in accordance to your STA/CON\n[Double Punch] no longer consumes Stamina, and instead restores stamina.\n(Z) Key Performs a Punch attack, dealing damage and restoring Stamina (Damage based on Phys Atk)\n(C) Key Performa  Kick attack, dealing damage and Consuming Stamina (Damage based on Sub-Wep Atk)\nSTA cost for all other Monk skills are increased and cost a larger percentage of your stamina to use\n★ The strength of your healing skills is reduced while Awakened\n★ If your SP becomes 0 while Awakened, the effects of Awakening will end.\n★ The amount of SP drained per second is increased according to your CON\n★ The amount of SP drained per second is reduced according to your level of Iron Skin.",
    "iconUrl": "icons/awakening_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Dharma Law: Meteor Kick  -",
    "stats": "CD: 0s",
    "description": "Perform an explosive flying kick  in a target direction, dealing damage to enemies in the area you fly towards.\r★ Flying Kick Consumes 10% Max. STA when cast\r★ Flying Kick Consumes 45% Max. STA when under the effects of [Awakening]",
    "iconUrl": "icons/dharma_law:_meteor_kick_[physical]_-_[strike].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Dharma Law: Hollow Palm  -",
    "stats": "CD: 0s",
    "description": "Punch an enemy's vital points with the palm of your hand, causing the enemy to be knocked down and pushed away. Additional damage is dealt depending on the defense stat of the enemy.\n★ Consumes 5% of Max. STA upon cast",
    "iconUrl": "icons/dharma_law:_hollow_palm_[physical]_-_[strike]_[attack_speed].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Siddhi: World Split  -",
    "stats": "CD: 0s",
    "description": "Strike with a powerful hand knife strike, causing enemies to be launched into the air.\rWhen Awakened, the attack becomes enhanced, shattering the earth in front of you.\n★ Consumes 10% of Max. STA upon cast\r★ Consumes 45% of Max. STA upon cast when under the effects of [Awakening]",
    "iconUrl": "icons/siddhi:_world_split_[physical]_-_[strike]_[attack_speed].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Buddha’s Will: Universal Expression  -",
    "stats": "CD: 0s",
    "description": "Charge up energy and release the energy as a beam in front of you, dealing damage and knocking back enemies caught in its path. While [Energy Blast] is being released, your SP will rapidly be consumed.\r★ Upon learning this skill, it will display as a maximum level of 150, this skill can be charged up for a very long time.\r★The size, damage, duration and SP cost of Energy Blast now scale depending on what level the Monk has charged up to.",
    "iconUrl": "icons/buddha’s_will:_universal_expression_[magic]_-_[holy]_[cast_time].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Buddha’s Stillness: Collapsing Strike  -",
    "stats": "CD: 0s",
    "description": "Extend your fist from a very close distance, striking the enemy with full force. \nStruck enemies will be afflicted with a debuff causing them to lose HP and SP over time.\n★ Consumes 10% of Max. STA upon cast\r★ Consumes 90% of Max. STA upon cast when under the effects of [Awakening]",
    "iconUrl": "icons/buddha’s_stillness:_collapsing_strike_[physical]_-_[strike]_[attack_speed].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Buddha’s Balance: Karmic Tithe  -",
    "stats": "CD: 0s",
    "description": "Throw a coin using the tip of your finger to inflict damage to an enemy.\nThe target hit will become vulnerable to [Strike] type attacks. If the coin successfully hits an enemy, it will ricochet and hit nearby enemies as well.\nConsumes [Silver] when cast.\n\n★ Consumes 5% of Max. STA upon cast\r★ Consumes 50% of Max. STA when under the effects of [Awakening]\r★ The damage calculation for this skill uses a combination of 50% of the player's Physical Attack and 50% of the player's Sub-weapon Attack.",
    "iconUrl": "icons/buddha’s_balance:_karmic_tithe_[physical]_-_[strike].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Moment of Zen",
    "stats": "CD: 24s",
    "description": "Root yourself in place for a moment’s respite, restores your Stamina in exchange for some SP & Granting you invincibility to all attacks temporarily. While the buff is active you are unable to move, but can still perform actions.\r★ Invincibility Duration is now 2 seconds\r★ Consumes a percentage of your SP in exchange for recovering STA\n★ Cooldown Time is reduced the higher the skill level",
    "iconUrl": "icons/moment_of_zen_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Vajra’s Rage: Infinite Strikes  -",
    "stats": "CD: 45s",
    "description": "Using your disciplined fists, rapidly strike enemies in front of you for a few seconds.\nEnemies hit have a chance of temporarily taking additional damage from further [Strike] type attacks.\r\n★ Consumes STA upon hitting an enemy (This does not apply while under the effect of [Awakening])\r★ Double Punch Damage now scales better with the Monk's CON/STR",
    "iconUrl": "icons/vajra’s_rage:_infinite_strikes_[physical]_-_[strike]_[channel]_[attack_speed].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Asura: Shattered Nirvana  -",
    "stats": "CD: 0s",
    "description": "Dash to a target area and perform multiple rapid strikes at enemies in an area around your destination.\r★ Damage calculations combine both the Physical Attack and Sub-Weapon Physical Attack stats together.\r★ Ends the effects of [Awakening] upon casting Asura: Shattered Nirvana",
    "iconUrl": "icons/asura:_shattered_nirvana_[physical]_-_[strike].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 12/05/2025",
    "description": "Pardoner (Rank 5)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Simony",
    "stats": "Max Lv: 15",
    "description": "Crafts a scroll infused with the ability of a skill that you have learned.\nWhen a skill scroll is used, the magic fades and the scroll is destroyed.\nThe following skills can be made into scrolls:\n\nAssociated Class\nSkill \nCleric\nCure\nKrivis\nAukuras\n\nZalciai\n\nDaino\nPriest\nMonstrance\nPaladin\nRestoration\n\nTurn Undead\n\nBarrier\nOracle\nArcane Energy\n\nClairvoyance\n\nForecast",
    "iconUrl": "icons/simony.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Indulgentia",
    "stats": "Max Lv: 15",
    "description": "Perform a ritual to cure allies from Lv.2 status ailments.\nAlso deals damage to nearby enemies.\nConsumes [Silver] when cast.",
    "iconUrl": "icons/indulgentia.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Discerning Evil",
    "stats": "Max Lv: 15",
    "description": "Extends the duration of debuffs currently applied to the enemy.\nOnce the duration has been extended once, it is not possible to extend it a second time.",
    "iconUrl": "icons/discerning_evil.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Increase Magic Defense",
    "stats": "Max Lv: 15",
    "description": "Temporarily increase the magic defense of you and your party members.\nRequires [Holy Water] to cast.",
    "iconUrl": "icons/increase_magic_defense_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Oblation",
    "stats": "Max Lv: 10",
    "description": "Open an offering box, allowing you to receive donations in the form of items from allies.\nOffering boxes can only be  opened near a Goddess Statue, and cannot be opened in towns.",
    "iconUrl": "icons/oblation.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Spell Shop",
    "stats": "Max Lv: 5",
    "description": "Open a service shop to sell some of your learned skills buffing effects to other players.\nThe prices in the shop increase when opened on a dungeon map.",
    "iconUrl": "icons/spell_shop.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Dekatos  -",
    "stats": "Max Lv: 5",
    "description": "Swings at the enemy using a sack of silver coins collected from offerings.\nEnemies hit have a 10% chance of being instantly defeated. (Excludes Bosses and Players)\nThe chance of instantly defeating an enemy increases according to your SPR.\nConsumes [Silver] when cast.",
    "iconUrl": "icons/dekatos_[physical]_-_[strike].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 27/06/2025",
    "description": "Chaplain (R5 Hidden)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Last Rites",
    "stats": "CD: 40s",
    "description": "Grant an extra Holy property attack to nearby allies. The Holy property damage increases based upon the caster’s [Sacrament] level, the damage bonus increases further when HP is below 40%",
    "iconUrl": "icons/last_rites_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Deploy Capella",
    "stats": "CD: 65s",
    "description": "Deploys a temporary sacellum with a wrapped cloak.\nWhen allies walk nearby the sacellum, they are granted enhanced versions  of the caster’s Aspersion, Monstrance, Blessing and  Sacrament. The enhanced buff effects increase with skill level.\nRequires [Cape] to cast.\r\r★ Due to [Stoneskin] being moved from Priest to the Paladin class, Stoneskin no longer currently applies",
    "iconUrl": "icons/deploy_capella_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Magnus Exorcismus  -",
    "stats": "CD: 60s",
    "description": "Transforms nearby [Exorcise] magic circles into divine pillars of light that deal continuous damage to nearby enemies.",
    "iconUrl": "icons/magnus_exorcismus_[magic]_-_[holy].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Aspergillum",
    "stats": "CD: 30s",
    "description": "Fills your equipped weapon with holy water, causing it to splash with every attack. The damage splash on enemies increases depending on the caster’s level of [Aspersion].\nBuff duration increases with skill level.\nRequires [Holy Water] to cast.",
    "iconUrl": "icons/aspergillum_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 11/10/2025",
    "description": "Druid (Rank 6)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Carnivory",
    "stats": "OH: 0  CD: 20s",
    "description": "Enchants grass near you, causing it to attack the enemy. When cast it prioritizes enchanting any existing grass grown by [Chortasmata], otherwise it will target nearby terrain. If there is no grass available when cast, the skill will have no effect.",
    "iconUrl": "icons/carnivory_[magic].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Chrotasmata   -",
    "stats": "OH: 0  CD: 20s",
    "description": "Grow grass in an area. Monsters within the grass are treated as [Plant] type monsters.\nAllies within the grass receive a [Floral Scent] buff, recovering their HP over time.\nEnemies within the grass receive a [Rash] debuff, dealing damage over time.\nDuration of the grass, and HP Recovered from [Floral Scent] increases with skill level.",
    "iconUrl": "icons/chrotasmata_[magic]_-_[poison]_[restorative]_[debuff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Shape Shifting",
    "stats": "OH: 0  CD: 120s",
    "description": "Transform yourself into an Insect, Animal or Plant type monster that is in front of you.\nWhile transformed, you are able to mimic the attacks of the monster you have shape shifted into. You are also still able to use Druid skills while transformed. The duration you can be transformed for increases with skill level. The skill will have no effect, if the target is not an Insect, Animal or Plant.",
    "iconUrl": "icons/shape_shifting_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Telepath",
    "stats": "OH: 0  CD: 60s",
    "description": "Enter the mind of an enemy in front of you, afflicting them with [Telepathy], allowing you to control their movements and attacks. The duration that you can control the enemy for increases with skill level.",
    "iconUrl": "icons/telepath.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Seed Bomb",
    "stats": "OH: 0  CD: 25s",
    "description": "Applies a seed buff to yourself and nearby allies. While the buff is active, the next attack received from enemies will cause the seeds to explode, dealing magic damage to nearby enemies.",
    "iconUrl": "icons/seed_bomb_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Sterea Trofh",
    "stats": "OH: 0  CD: 30s",
    "description": "Enchants grass in an area to protect you and your allies. When cast it prioritizes enchanting any existing grass grown by [Chortasmata], otherwise it will target nearby terrain. If there is no grass available when cast, the skill will have no effect. The protection duration increases with skill level.",
    "iconUrl": "icons/sterea_trofh_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Transform",
    "stats": "OH: 0  CD: 120s",
    "description": "Transforms back into the last monster that you successfully shape shifted into.\nDuration of the transformation increases with skill level.",
    "iconUrl": "icons/transform_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Thorn",
    "stats": "OH: 0  CD: 20s",
    "description": "Throw thorny vines at enemies in front of you to deal continuous damage over time.\nEnemies that are on the ground  are trapped in the vines and become afflicted with [Hold], making them unable to move.",
    "iconUrl": "icons/thorn_[debuff]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Lycanthropy",
    "stats": "OH: 0  CD: 0s",
    "description": "Transform yourself into a wolf.\nWhile Transformed, your SP drains over time and you gain the following bonuses:\nIncreased Max. HP, HP Recovery, Movement Speed, Crit. Rate, Block Penetration, Physical & Magic Defense\nRecover 2% of your Max. HP every 8 seconds\nSprinting is possible\nAccess to Wolf Skills (Scratch, Slash, Wild Breath, Warcry)",
    "iconUrl": "icons/lycanthropy_[buff]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Henge Stone",
    "stats": "OH: 0  CD: 25s",
    "description": "Summons the Henge Stone at a target location. While the Henge Stone is active,  it increases the skill level of Cleric Tree skills and Magic Circle skills by 1.  The damage of magic attacks from cleric skills is also increased.",
    "iconUrl": "icons/henge_stone_[buff]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 29/09/2025",
    "description": "Oracle (Rank 6)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Arcane Energy",
    "stats": "",
    "description": "Increase the Max.SP and SP Recovery of you and your party members.\nThe STA and SP gained increases with skill level.\n★ Skill does not provide bonuses to Max. SP, not STA anymore, but instead increases your current SP Recovery at a rate of +3% SP Regen Per Skill Lv.",
    "iconUrl": "icons/arcane_energy_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Change",
    "stats": "",
    "description": "Change the monster in front of you to a different monster with a similar level.",
    "iconUrl": "icons/change_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Clairvoyance",
    "stats": "",
    "description": "Predict and show what item the monster will drop in advance.",
    "iconUrl": "icons/clairvoyance_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Counter Spell",
    "stats": "",
    "description": "Create a magic circle around you that grants protection from enemy magic attacks.\nUpon casting this skill, nearby existing magic circles are removed at the same time Counter Spell is placed. The cooldown of this skill decreases with skill level.",
    "iconUrl": "icons/counter_spell_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Forecast",
    "stats": "",
    "description": "Shows in advance the attack hitboxes of attacks from you, your party members and also enemies.",
    "iconUrl": "icons/forecast_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Resetting",
    "stats": "",
    "description": "Change the item dropped from an enemy into a different item. You will be notified when the item is changed.",
    "iconUrl": "icons/resetting_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Prophecy",
    "stats": "",
    "description": "Grants you and nearby party members protection from Lv.1 Status Ailments\nThe number of times a Lv.1 Status Ailment can be prevented increases with skill level.",
    "iconUrl": "icons/prophecy_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Death Sentence",
    "stats": "",
    "description": "Sentence an enemy to death The damage dealt to the target is greatly increased, but when the effect ends and if the target is still alive, then the damage that has been dealt to the target is returned and also dealt to the caster. The additional damage taken is increased with skill level.",
    "iconUrl": "icons/death_sentence_[debuff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Foretell",
    "stats": "",
    "description": "Summon a magic circle in front of you that travels forward. Characters that are actively moving while inside the circle will not take damage from enemies and their attacks cannot be evaded.",
    "iconUrl": "icons/foretell_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Gender Switch",
    "stats": "",
    "description": "Set up a service shop that allows players to change their character’s gender. Players that use the store must have a [Mirror of Truth] item in order to change gender, other than the item requirement there are no other restrictions and you can change gender as many times as you like. You cannot perform Gender Switch on yourself.\nConsumes [Holy Water] when a user attempts to change their gender.\n★ No Cooldown",
    "iconUrl": "icons/gender_switch.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Twist of Fate",
    "stats": "",
    "description": "Deal a fixed amount of damage to a target based on its Maximum HP. Upon dealing damage to the target, they are afflicted with a [Twist of Fate] debuff that causes them to continually regenerate HP up to double the amount of HP that was lost from this skill. Boss monsters only take 50% of the damage dealt, and the skill does not work against Field Boss Monsters.",
    "iconUrl": "icons/twist_of_fate_[debuff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 12/05/2025",
    "description": "Miko (R6 Hidden)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Gohei  -",
    "stats": "",
    "description": "Swings a Gohei made of a wooden stick and white paper. Removes 1 harmful effect of rank 1 or below on allies and 1 beneficial effect of rank 1 or lower on enemies in front. Enemies hit by the Gohei take holy property damage.",
    "iconUrl": "icons/gohei_[magic]_-_[holy]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Sweeping",
    "stats": "",
    "description": "Sweeps the floor with a purified, divine broom . While sweeping, areas around you become enchanted leaving magic circles on the floor. These [Sweeping] magic circles  temporarily increase the skill level of other magic circle skills that are cast in the purified area.",
    "iconUrl": "icons/sweeping_[buff]_[channel].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Hamaya  -",
    "stats": "",
    "description": "Hold an arrow in your hand and throw it at a target location. Enemies that are near the arrow take constant holy property damage over time.",
    "iconUrl": "icons/hamaya_[magic]_-_[holy].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Clap",
    "stats": "",
    "description": "Clap your hands twice. Increases duration for some installations nearby.",
    "iconUrl": "icons/clap.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Kagura",
    "stats": "",
    "description": "Dance to bless allies around you. Grants additional Holy-property damage to melee physical attacks against enemies affected by this skill. Effect is only active while channeling the skill.",
    "iconUrl": "icons/kagura_[buff]_[debuff]_[channel].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 29/09/2025",
    "description": "Kabbalist (Rank 7)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Revenged Sevenfold",
    "stats": "",
    "description": "Use the power of the goddess to avenge yourself, when attacked by an enemy, the attack is instead reflected back at the attacking enemy with 7x the power of the enemy’s attack.\nAdditional damage can be reflected, and this additional damage bonus is increased with skill level.",
    "iconUrl": "icons/revenged_sevenfold_[buff]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Ein Sof",
    "stats": "",
    "description": "Create a magic circle in front of you.\nWhen you or an ally walk onto the magic circle, their maximum HP will increase drastically for a period of time.\n★ The percent of HP gained per Skill Lv. has been reduced.",
    "iconUrl": "icons/ein_sof_[buff]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Merkabah  -",
    "stats": "",
    "description": "Summons the wagon of the goddess that will travel and explode at a target location.\nWhen the wagon explodes, nearby enemies will take damage.",
    "iconUrl": "icons/merkabah_[magic]_-_[holy].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Gematria",
    "stats": "",
    "description": "Divide the numbers of an enemy’s name and calculate a new number.",
    "iconUrl": "icons/gematria.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Notarikon",
    "stats": "",
    "description": "Calculate a new number from the first and last letter of an enemy’s name",
    "iconUrl": "icons/notarikon_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Double Chance",
    "stats": "",
    "description": "Based on the number derived from selected targets, gain a chance to perform repeated hits. The attacked target receives damage according to the number of hits.",
    "iconUrl": "icons/double_chance_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Clone",
    "stats": "",
    "description": "Clone a selected monster based on the number calculated from the formula. Cloned monsters will not yield EXP, but items can still be dropped. Furthermore, the original monster and the copy cannot be further cloned.",
    "iconUrl": "icons/clone.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Nachash  -",
    "stats": "",
    "description": "Use the power of Kabbalah to summon serpents that attack your enemies.",
    "iconUrl": "icons/nachash_[magic]_-_[holy].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Gevura",
    "stats": "",
    "description": "Triggers an effect based on the numbers calculated on enemies. Enemies attacked while under the effect of Gevura receive additional damage proportional to the number of enemies and the calculated number.",
    "iconUrl": "icons/gevura_[buff]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Tree of Sepiroth",
    "stats": "",
    "description": "Invoke a magic circle in the shape of the Tree of Sepiroth which reduces the damage received by allies and continuously restores HP.",
    "iconUrl": "icons/tree_of_sepiroth_[buff]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 12/05/2025",
    "description": "Plague Doctor (Rank 7)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Healing Factor",
    "stats": "",
    "description": "Install a magic circle that grants super healing abilities temporarily. You or your party members recover HP equal to the amount left at the point when the magic circle is stepped on.",
    "iconUrl": "icons/healing_factor_[buff]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Incineration   -",
    "stats": "",
    "description": "Incinerate enemies with status ailments. The duration of [Incineration]'s effects will increase depending on the enemies' number of status ailments.",
    "iconUrl": "icons/incineration_[magic]_-_[fire].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Bloodletting",
    "stats": "",
    "description": "Temporarily let you and your allies bleed to prevent further status ailments. While Bloodletting is active, you and affected allies will become  invulnerable to all rank 2 or lower status ailments.",
    "iconUrl": "icons/bloodletting_[buff]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Fumigate",
    "stats": "",
    "description": "Spray a cloud of antidote that cures the status ailments of an ally. Allies within the effect will be cured of rank 3 or lower status ailments.",
    "iconUrl": "icons/fumigate_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Pandemic",
    "stats": "",
    "description": "Spread all status ailments on targeted enemies to other enemies within the range.",
    "iconUrl": "icons/pandemic_[debuff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Beak Mask",
    "stats": "",
    "description": "Equip the Bird Beak Mask containing medication to prevent diseases.\nWhile wearing the Beak Mask you become immune to Rank 2 or lower status ailments.The front side of the mask has a special drug that prevents rank 2 or lower status ailments from affecting you",
    "iconUrl": "icons/beak_mask_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Black Death Steam  -",
    "stats": "",
    "description": "Spread Black Death Steam around and deal continuous damage. The affected targets infect other targets nearby. When using Incinerate on the target, it receives additional damage.",
    "iconUrl": "icons/black_death_steam_[magic]_-_[poison]_[debuff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Disenchant",
    "stats": "",
    "description": "Attempt to remove all positive buffs from enemies in front of you.\nThe chance of removing all enemy buffs increases with skill level.",
    "iconUrl": "icons/disenchant_[debuff]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Methadone",
    "stats": "",
    "description": "Grants an effect that provides knockdown, knockback, and casting interruption immunity for you and your party members. Damage taken from enemies is increased by 20%.",
    "iconUrl": "icons/methadone_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 12/05/2025",
    "description": "Inquisitor (Rank 8)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "God Smash  -",
    "stats": "",
    "description": "Lift your weapon high up in the air above your head and smash it down, damaging enemies in front of you. If you are equipped with a Blunt weapon (one- or two-handed), then God Smash deals additional damage.",
    "iconUrl": "icons/god_smash_[physical]_-_[strike]_[attack_speed].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Pear of Anguish  -",
    "stats": "",
    "description": "Install Pear of Anguish on the ground that deals damage to incoming enemies. If a magic-using enemy is detected, it flies over to it and deals even greater damage.",
    "iconUrl": "icons/pear_of_anguish_[physical]_-_[strike].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Breaking Wheel  -",
    "stats": "",
    "description": "Summon a wheel that inflicts damage to surrounding enemies. Attacking the wheel causes its attack range to expand, striking enemies that are further away.",
    "iconUrl": "icons/breaking_wheel_[physical]_-_[slash].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Malleus Maleficarum",
    "stats": "",
    "description": "Release the power of the spellbook to attack enemies. Attacked enemies will have their INT and SPR halved and SP consumption doubled.",
    "iconUrl": "icons/malleus_maleficarum_[magic]_[debuff]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Iron Maiden",
    "stats": "",
    "description": "Summon an Iron Maiden to trap a medium or small sized enemy.. Trapped enemies will be unable to move while trapped, and if a Demon type enemy is trapped they will take constant damage.\nThe duration of Iron Maiden increases with skill level.",
    "iconUrl": "icons/iron_maiden_[debuff]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Judgment",
    "stats": "",
    "description": "Change the type of enemies within a specified range to Demon type. Enemies afflicted with [Judgment] debuff also take 10% additional Holy property damage.\nThe duration of Judgment increases with skill level.",
    "iconUrl": "icons/judgment_[magic]_[debuff]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 12/05/2025",
    "description": "Exorcist (Rank 8)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Rubric  -",
    "stats": "",
    "description": "Read commandments imbued with the power of the Goddesses to deal Holy property damage and reduce the enemy's movement speed. When used against Demon type enemies, the skill deals additional hits and the  movement speed reducing effects are amplified. While reciting commandments, attacks from enemies will not interrupt the casting of this skill, but knockback and knockdown effects will.",
    "iconUrl": "icons/rubric_[magic]_-_[holy]_[channel]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Entity  -",
    "stats": "",
    "description": "Command nearby hidden enemies to reveal themselves.\nTargets that are revealed by this skill take holy property damage.\nThe holy property damage dealt to hidden targets increases with skill level.",
    "iconUrl": "icons/entity_[magic]_-_[holy].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Aqua Benedicta   -",
    "stats": "",
    "description": "Sprinkle Holy Water at a target location, creating a purified magic circle on the ground.\nEnemies that stand on the purified magic circle take constant Holy property damage over time.\nDoes not affect flying-type enemies.",
    "iconUrl": "icons/aqua_benedicta_[magic]_-_[holy].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Engkrateia",
    "stats": "",
    "description": "Exercise your strong restraint by praying to the Goddesses. During the prayer, you receive less damage and become immune to knockback and knockdown. Additional reduction applied to damage received from Demon type enemies.",
    "iconUrl": "icons/engkrateia_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Gregorate  -",
    "stats": "",
    "description": "Sends out a wave of divine energy to overthrow the forces of evil.\nRemoves rank 2 debuffs currently applied to you or your allies, and nearby enemies receive Holy property damage. For each debuff you are suffering, Gregorate deals an additional 50% damage to enemies. If the skill hits a  zombie, the zombie is killed.",
    "iconUrl": "icons/gregorate_[magic]_-_[holy].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Koinonia  -",
    "stats": "",
    "description": "Consolidate the faith of your party members into a display of divine energy capable of overthrowing demons. Create a link between yourself and 2 allies creating a divine shape between you, enemies caught within the area of the link take continuous Holy property damage while Koinonia is active. This skill can only be used when 3 or more members are within range. (Including yourself) Koinonia deals additional damage when 3 or more of the members linked together are of the [Cleric] tree.",
    "iconUrl": "icons/koinonia_[magic]_-_[holy].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 12/05/2025",
    "description": "Zealot (Rank 8)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Invulnerable",
    "stats": "",
    "description": "Temporarily grant yourself immunity against knockback and knockdown attacks.",
    "iconUrl": "icons/invulnerable_[buff]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Immolation",
    "stats": "",
    "description": "Sets enemies on fire, inflicting Fire property damage. Your own body also catches fire, reducing your HP. Your character will not die from the effects of Immolation when your HP is below 1%",
    "iconUrl": "icons/immolation_[physical]_[fire].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Beady Eyed",
    "stats": "",
    "description": "Instantly teleport behind an enemy.",
    "iconUrl": "icons/beady_eyed.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Fanaticism",
    "stats": "",
    "description": "Lose the ability to recover HP, but in exchange your attacks deal increased damage to enemies.",
    "iconUrl": "icons/fanaticism_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Fanatic Illusion",
    "stats": "",
    "description": "Envelop your body in lightning, continuously dealing damage to nearby enemies. Continuously consumes SP while the skill is active and cancels if SP runs out.",
    "iconUrl": "icons/fanatic_illusion_[physical]_[lightning]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Blind Faith  -",
    "stats": "",
    "description": "Consume 50% of your remaining SP to deal additional Holy property damage.",
    "iconUrl": "icons/blind_faith_[magic]_-_[holy].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "",
    "stats": "Last Updated: 12/05/2025",
    "description": "Taoist (Rank 8)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Begone Demon",
    "stats": "",
    "description": "Instantly activates the spell effects inside a thrown charm.\nStorm Calling immediately summons a rainstorm.\nCreeping Death, Tri-Disaster and Dark Sight explode, attacking nearby enemies.",
    "iconUrl": "icons/begone_demon_[magic].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Storm Calling",
    "stats": "",
    "description": "Throws a charm that calls upon a furious storm.\nThe charm activates when coming into contact with an enemy, at which time enemies within range will take damage and receive a debuff that temporarily causes them to take additional damage from Lightning property attacks.\nThe damage and duration of the charm/storm effects increase with skill level.\n★ Requires 2 Strange Yellow Paper per cast",
    "iconUrl": "icons/storm_calling_[magic].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Dark Sight",
    "stats": "",
    "description": "Activate a charm that removes one’s presence, allies near the activated charm will be temporarily undetected by monsters.\n★ Requires 2 Strange Yellow Paper per cast",
    "iconUrl": "icons/dark_sight_[buff]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Tri-Disaster Charm",
    "stats": "",
    "description": "Throws a protective charm at a target location.\nAllies near the [Tri-Disaster Charm] will have their Fire, Ice and Lightning property resistance increased.\nThis charm can be detonated via [Begone Demon], dealing Fire/Ice/Lightning property damage to enemies\n★ Requires 2 Strange Yellow Paper per cast",
    "iconUrl": "icons/tri-disaster_charm_[magic]_[buff].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Creeping Death Charm",
    "stats": "",
    "description": "Throw a Creeping Death Charm at a target location.\nOnce the charm arrives at its target location it will begin to slowly travel forward based on the direction it was thrown from. Enemies that touch the charm while it is moving will take continuous amounts of damage.\nThis skill deals additional damage when it is detonated via [Begone Demon]\n★ Requires 3 Strange Yellow Paper per cast",
    "iconUrl": "icons/creeping_death_charm_[magic]_.png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Divine Punishment  -",
    "stats": "",
    "description": "Mark a target for Divine Punishment, after 3 seconds they receive heavy damage.\n★ Requires 3 Strange Yellow Paper per cast",
    "iconUrl": "icons/divine_punishment_[magic]_-_[lightning].png"
  },
  {
    "tree": "Cleric Tree",
    "name": "Upper Level",
    "stats": "",
    "description": "Enchant magic circles in front of you.\nAny magic circles that are enchanted by Upper Level will temporarily be able to affect Flying-type enemies.\nThe duration of the enchantment increases with skill level\n★ Requires 3 Strange Yellow Paper per cast",
    "iconUrl": "icons/upper_level_[buff]_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 25/04/2026",
    "description": "Swordsman (Rank 1)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Thrust  -",
    "stats": " CD: 0s",
    "description": "Lunges a short distance forward, attacking enemies in front of you.\n\n★[No cooldown]",
    "iconUrl": "icons/thrust_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Bash  -",
    "stats": "CD: 0s",
    "description": "Slashes your weapon at enemies in front of you.\n\n★[No cooldown]",
    "iconUrl": "icons/bash_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Gung Ho",
    "stats": "CD: 40s",
    "description": "Sacrifice your Defense, while increasing your damage dealt.\r★ Buff Duration is now unlimited. (Expires on death/map change)\r★ Effect values increase according to number of invested Circles in Swordsman\r★ Players with at least 1 Circle of the [Barbarian] Class gain an additional bonus while Gung Ho is active; The [Barbarian's Rage] effect which \"Increases Physical & Critical Attack stats the lower that the player's current HP is\"",
    "iconUrl": "icons/gung_ho_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Concentrate",
    "stats": "CD: 45s",
    "description": "Temporarily increase your damage and Crit Rate.\n★ Effect values increase according to number of invested Circles in Swordsman",
    "iconUrl": "icons/concentrate_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Pain Barrier",
    "stats": "CD: 39s",
    "description": "Temporarily grants immunity to Knockback, Knockdown and staggering attacks.\nAlso increases the chance of resisting debuffs applied on you.",
    "iconUrl": "icons/pain_barrier_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Restrain",
    "stats": "CD: 120s",
    "description": "Temporarily reduces your Max HP, in exchange for enhancing your attacks.\nWhile [Restrain] is active, enemies struck have a chance to become afflicted with [Stun]",
    "iconUrl": "icons/restrain_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Pommel  -",
    "stats": "OH: 3  CD: 14s",
    "description": "Strikes enemies with the hilt of your weapon.\n[Stunned] targets take additional damage.",
    "iconUrl": "icons/pommel_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Double Slash  -",
    "stats": "OH: 3  CD: 21s",
    "description": "Slashes your weapon sideways.\n[Bleeding] targets take additional damage.",
    "iconUrl": "icons/double_slash_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 25/04/2026",
    "description": "Highlander (Rank 2)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Wagon Wheel  -",
    "stats": "CD: 15s",
    "description": "Swing upwards at an enemy, launching them into the air.\n★ This skill will deal an additional line of damage for each Elemental Imbue you have active. (A total of +3 additional lines of damage split between Fire, Ice and Lightning property)",
    "iconUrl": "icons/wagon_wheel_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Cartar Stroke  -",
    "stats": "OH: 2  CD: 21s",
    "description": "Channels your energy into a physical strike towards the ground, hit targets are knocked back a large distance\n★ If you are currently [Imbued with Fire], this attack will trigger a flame explosion in a large area around you, and remove your [Imbued with Fire] state.\n★ While charging Cartar Stroke, your character will receive the protective effects of [Cross Guard] if learned. Deals increased damage against targets that you successfully block.\r★This skill will deal an additional 3 lines of damage for each Elemental Imbue you have active. (A total of +9 additional lines of damage split between Fire, Ice and Lightning property)",
    "iconUrl": "icons/cartar_stroke_[physical]_-_[strike]_[cast_time].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Herald of Brigid  -",
    "stats": "CD: 30s",
    "description": "Swing the hilt of your blade at the enemy’s head. Targets hit are afflicted with  [Shock], temporarily reducing their INT and SPR.\r★ Upon use, you gain the effect [Blessing of Brigid], imbuing the weapon with fire and enhancing the effects of highlander’s skills.\r★This skill will deal an additional line of damage for each Elemental Imbue you have active. (A total of +3 additional lines of damage split between Fire, Ice and Lightning property)",
    "iconUrl": "icons/herald_of_brigid_[physical]_-_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Cross Guard",
    "stats": "CD: 0s",
    "description": "Raise your weapon to block incoming attacks. Enemies that you successfully block attacks from will be temporarily afflicted with [Staggered], increasing vulnerability to [Pierce] type attacks. \n\n★ [No cooldown]\n★ Can be used by any weapon type",
    "iconUrl": "icons/cross_guard.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Moulinet  -",
    "stats": "CD: 35s",
    "description": "Swing your sword around attacking the enemy continuously. [Shocked] targets take increased damage.\n★ This skill will deal an additional 5 lines of damage for each Elemental Imbue you have active. (A total of +15 additional lines of damage split between Fire, Ice and Lightning property)",
    "iconUrl": "icons/moulinet_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Skyliner  -",
    "stats": "CD: 0s",
    "description": "Slash sideways at an enemy. [Bleeding] targets take increased damage.\n★This skill will deal an additional 2 lines of damage for each Elemental Imbue you have active. (A total of +6 additional lines of damage split between Fire, Ice and Lightning property)",
    "iconUrl": "icons/skyliner_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Chosen of the Cailleach  -",
    "stats": "CD: 28s",
    "description": "Slash your sword twice in the shape of a cross. Afflicts targets  hit with [Bleeding].\n★ Upon use, you gain the effect [Curse of the Cailleach], imbuing the weapon with Ice and enhancing the effects of highlander’s skills.\n★ This skill will deal an additional 2 lines of damage for each Elemental Imbue you have active. (A total of +6 lines of damage split between Fire, Ice and Lightning property)",
    "iconUrl": "icons/chosen_of_the_cailleach_[physical]_-_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Avatar of Taranis  -",
    "stats": "CD: 40s",
    "description": "Strike the enemy with the side of your sword. Hit targets are pushed sideways and become afflicted with [Skull Swing], reducing physical defense momentarily\n★ Upon use, you gain the effect [Grace of Tanaris], imbuing the weapon with Lightning and enhancing the effects of highlander’s skills.\n★ This skill will deal an additional line of damage for each Elemental Imbue you have active. (A total of +3 additional lines of damage split between Fire, Ice and Lightning property)",
    "iconUrl": "icons/avatar_of_taranis_[physical]_-_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Vertical Slash  -",
    "stats": "OH: 2  CD: 25s",
    "description": "Attack with a descending vertical slash.\nTargets suffering from [Skull Swing] take increased damage if they are [Medium] & [Large] size.\nDeals additional damage depending on how many Debuffs the target currently has.\n★ This skill will deal an additional line of damage for each Elemental Imbue you have active. (A total of +3 additional lines of damage split between Fire, Ice and Lightning property)",
    "iconUrl": "icons/vertical_slash_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 25/04/2026",
    "description": "Peltasta (Rank 2)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Umbo Blow  -",
    "stats": "OH: 2  CD: 12s",
    "description": "Spins and attacks enemies using the bump of your shield.\nDeals additional damage to targets afflicted with [Staggered]",
    "iconUrl": "icons/umbo_blow_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Rim Blow  -",
    "stats": "CD: 0s",
    "description": "Strike enemies using the edge of your shield.\nDeals additional damage to [Petrified] & [Frozen] enemies.\n★[No cooldown]",
    "iconUrl": "icons/rim_blow_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Swash Buckling",
    "stats": "CD: 0s",
    "description": "Bashes your shield, provoking the attention of nearby enemies. While the Swash Buckling buff is active it also raises the Max. No. of Enemies that a player can aggro. While enemies are provoked, your AoE Attack Ratio is also increased.\n\n★[No cooldown]",
    "iconUrl": "icons/swash_buckling.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Guardian",
    "stats": "CD: 50s",
    "description": "Increases your damage with shield skills, while also increasing your Physical & Magical Defense.\nCannot be used at the same time as [Gung Ho] or [Finestra] and prevents the trigger of Barbarian’s [Wild Nature] regeneration effect of the attribute\r★ The Attribute (Guardian:Reduce Damage) Is baked into this skill, so it does not need to be learned\r★ Buff Duration is now unlimited. (Expires on death/map change)",
    "iconUrl": "icons/guardian_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Shield Lob  -",
    "stats": "CD: 14s",
    "description": "Throws your shield at a targeted area, dealing damage to nearby enemies.\nWhen the shield is thrown, you temporarily lose all Physical Defense granted by the shield.\nThe shield can be picked up again by walking near the location the shield was thrown at.\n\nIf the [Guardian] buff is active when cast, it is consumed and Shield Lob will deal additional damage.",
    "iconUrl": "icons/shield_lob_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "High Guard",
    "stats": "CD: 90s",
    "description": "Temporarily enter the High Guard stance, raising your shield  in preparation for incoming attacks.\nBlock Rate is increased while in this stance.",
    "iconUrl": "icons/high_guard_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Butterfly  -",
    "stats": "OH: 2  CD: 25s",
    "description": "Unleash a flurry of attacks on an enemy using both sword and shield to strike.",
    "iconUrl": "icons/butterfly_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Umbo Thrust  -",
    "stats": "CD: 0s",
    "description": "Has a chance of afflicting targets with [Armor Break], reducing Physical Defense\n\n★[No cooldown]",
    "iconUrl": "icons/umbo_thrust_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Langort  -",
    "stats": "CD: 15s",
    "description": "Executes a piercing attack while defending yourself, dealing damage to enemies while simultaneously blocking.",
    "iconUrl": "icons/langort_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 25/04/2026",
    "description": "Hoplite (Rank 3)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Stabbing  -",
    "stats": "CD: 25s",
    "description": "Repeatedly stab enemies with your spear. Repeated stabs will inflict more damage to enemies.",
    "iconUrl": "icons/stabbing_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Pierce  -",
    "stats": "OH: 2  CD: 20s",
    "description": "Attacks enemies, piercing them with your spear.\nWhen attacking larger enemies, additional hits are applied depending on their size.",
    "iconUrl": "icons/pierce_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Finestra",
    "stats": "CD: 120s",
    "description": "Raise your weapon in preparation to fight, entering the Window fighting stance.\nIncreases Critical Rate & Block while also reducing Evasion.\r★ When you cast [Finestra] your next attack will be a guaranteed Critical Hit\r★ Works with [ALL] weapons\n★  Max. Lv. Increases by 1 per Hoplite Circle",
    "iconUrl": "icons/finestra_[buff]_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Synchro Thrusting  -  &",
    "stats": "OH: 2  CD: 15s",
    "description": "Use your shield and spear to attack enemies in front of you.\nCounters enemies that attack you during use, causing them to receive additional damage.",
    "iconUrl": "icons/synchro_thrusting_[physical]_-_[pierce]_&_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Long Stride  -",
    "stats": "OH: 3  CD: 30s",
    "description": "Leap into the air to a designated location, damaging enemies as you land.\nDamage increases by up to 100% depending on the total amount of weight in your inventory.",
    "iconUrl": "icons/long_stride_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Spear Lunge  -",
    "stats": "OH: 2  CD: 20s",
    "description": "Stab your spear into an enemy in front of you.\nStruck enemies temporarily become vulnerable to [Pierce] type attacks.",
    "iconUrl": "icons/spear_lunge_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Spear Throw  -",
    "stats": "OH: 5  CD: 10s",
    "description": "Throw your spear at enemies from a distance.\nDamage increases based on how far the spear was thrown to the enemy.",
    "iconUrl": "icons/spear_throw_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 25/04/2026",
    "description": "Barbarian (Rank 3)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Embowel  -",
    "stats": "CD: 30s",
    "description": "Stab into an enemy, then kick them away with your foot.\n★ When cast some of your HP is sacrificed. (Approximately 50% of current HP)",
    "iconUrl": "icons/embowel_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Frenzy",
    "stats": "CD: 0s",
    "description": "Enter a frenzied state, while [Frenzy] is active, when you attack targets using Barbarian Skills, you will generate stacks of [Frenzy], these stacks will gradually fall off after a short period of time of not  hitting targets with Barbarian skills. For each stack of [Frenzy] the player gains increased Physical & Sub-Physical Attack the lower that the player’s current HP is.",
    "iconUrl": "icons/frenzy_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Cleave  -",
    "stats": "CD: 0s",
    "description": "Slash targets in front of you, afflicting them with [Cleave], causing enemies to become vulnerable to [Slash] type attacks for 5 seconds. When used, some HP is sacrificed. If you successfully hit a target you gain [Aggressor] for 5 seconds, temporarily raising your critical rate.\r★ When cast some of your HP is sacrificed.\n★ No Cooldown",
    "iconUrl": "icons/cleave_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Helm Chopper  -",
    "stats": "OH: 2  CD: 20s",
    "description": "Strike twice at an enemy’s head, causing them to become stunned.\n★ When cast some of your HP is sacrificed. (Approximately 40% of current HP)",
    "iconUrl": "icons/helm_chopper_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Stomping Kick  -",
    "stats": "OH: 3 CD: 36s",
    "description": "Perform a high leap and stomp down from the sky dealing damage to enemies below you.\nDamage increases according to the size of your character and the defense of your shoes. \n★ When cast some of your HP is sacrificed. Your character will also auto-jump from their current landing position, allowing for consecutive Stomping Kicks.",
    "iconUrl": "icons/stomping_kick_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Warcry",
    "stats": "CD: 42s",
    "description": "Release a warcry, provoking enemies to attack you. Every few seconds, Warcry will passively taunt any enemies near you. Enemies provoked by [Warcry] will temporarily have their defense reduced.",
    "iconUrl": "icons/warcry_[debuff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Seism  -",
    "stats": "OH: 2  CD: 18s",
    "description": "Swing at the ground creating a shockwave that deals damage to enemies in front of you. Enemies hit have a chance to be afflicted with [Stun]\r★ When cast some of your HP is sacrificed. (Approximately 25% of current HP)",
    "iconUrl": "icons/seism_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Giant Swing  -",
    "stats": " CD: 60s",
    "description": "Throw a rope at a target location to capture an enemy. If an enemy is captured they are swung around several times before being thrown away, causing them to take damage. Thrown enemies are afflicted with [Giant Swing], reducing their accuracy temporarily.\n★ Consumes Approximately 75% of current HP upon successful use",
    "iconUrl": "icons/giant_swing_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Pouncing  -",
    "stats": "CD: 0s",
    "description": "Charge forward while slashing away at enemies in your path. Has a chance of dealing additional damage to stunned enemies. Attacks will only occur while the character is moving, standing still will pause the attack swings from Pouncing.\n★ Consumes STA during channeling, Channel for up to 30 Seconds\n★ On successful hits against enemies, some of your HP is sacrificed.(Will drain health if below 25% of your Max.HP)\n★ No Cooldown",
    "iconUrl": "icons/pouncing_[physical]_-_[slash]_[channel].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 12/05/2025",
    "description": "Cataphract (Rank 4)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Impaler  -",
    "stats": "",
    "description": "Impale a small or medium-type monster with your spear. When an enemy becomes impaled on your spear, you can attack enemies with the impaled enemy. This attack applies as a critical hit to enemies afflicted with [Shock].",
    "iconUrl": "icons/impaler_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Earth Wave  -",
    "stats": "",
    "description": "Gather up power and use your weapon to attack targets by smashing it to the ground. Deals increased damage to knocked-down enemies.",
    "iconUrl": "icons/earth_wave_[physical]_-_[strike]_[cast_time].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Trot",
    "stats": "",
    "description": "Increases your movement speed while riding.",
    "iconUrl": "icons/trot_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Steed Charge  -",
    "stats": "",
    "description": "Charges into the enemy, dealing damage. Deals additional damage to enemies affected by the Dethrone debuff. Able to use skill again 1.5 sec after casting.",
    "iconUrl": "icons/steed_charge_[physical]_-_[strike]_[cast_time].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Doom Spike  -",
    "stats": "",
    "description": "Strongly stabs the enemy with the tip of your spear, decreasing the target’s critical resistance.",
    "iconUrl": "icons/doom_spike_[physical]_-_[pierce]_[cast_time].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Acrobatic Mount",
    "stats": "",
    "description": "Gives a buff that increases the damage of skills that can be used only while riding. SP consumption of riding-only skills is increased. Buff disappears if you dismount or become too low on SP.",
    "iconUrl": "icons/acrobatic_mount_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Rush  -",
    "stats": "",
    "description": "Spins your spear above your head to inflict damage all around. Deals additional damage if you are under the effect of [Initiate].",
    "iconUrl": "icons/rush_[physical]_-_[slash]_[channel].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 25/04/2026",
    "description": "Rodelero (Rank 4)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Shield Charge  -",
    "stats": "CD: 40s",
    "description": "Charge forward into enemies using your shield.\nEnemies struck will be knocked down.\nWhile the skill is being held, the chance to block [Missile] type attacks is increased.\n★ While Channeling, Movement speed is increased",
    "iconUrl": "icons/shield_charge_[physical]_-_[strike]_[channel].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Montano  -",
    "stats": "OH: 2  CD: 15s",
    "description": "Slashes at the enemies legs, struck targets are knocked down and stunned.\nDamage increases with skill level.",
    "iconUrl": "icons/montano_[physical]_-_[slash]_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Targe Smash  -",
    "stats": "CD: 0s",
    "description": "Swing your shield down creating a shockwave that deals damage and knocks enemies back. Targets hit have a chance to become afflicted with [Blind]. Enemies that are [Frozen] or [Petrified] will receive additional damage.\n★ No Cooldown",
    "iconUrl": "icons/targe_smash_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Shield Push  -",
    "stats": "CD: 15s",
    "description": "Push your shield into enemies in front of you, knocking them off balance.\nAffected enemies will be afflicted with [Unbalanced].",
    "iconUrl": "icons/shield_push_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Shield Shoving  -",
    "stats": "OH: 2  CD: 15s",
    "description": "Forcefully shove your shield into the enemy.\nHit enemies are turned around and temporarily unable to act.",
    "iconUrl": "icons/shield_shoving_[physical]_-_[strike]_[debuff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Shield Bash  -",
    "stats": "OH: 2  CD: 10s",
    "description": "Bashes targets in front of you, using your shield.\nHit targets temporarily have their stat points jumbled.",
    "iconUrl": "icons/shield_bash_[physical]_-_[slash]_[debuff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Slithering  -",
    "stats": "CD: 20s",
    "description": "Enter a crouching position behind your shield to avoid incoming attacks.\nWhile the skill is being held, you will have a very high chance to dodge any [Physical] & [Missile] attacks and debuffs aimed at you. Triggers an attack once you finish channeling the skill, adds 30% of shield's physical defense to your physical attack.",
    "iconUrl": "icons/slithering_[physical]_-_[slash]_[channel].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Shooting Star  -",
    "stats": "OH: 2  CD: 25s",
    "description": "Strikes a target multiple times using both your weapon and shield offensively.",
    "iconUrl": "icons/shooting_star_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "High Kick  -",
    "stats": "CD: 0s",
    "description": "Performs a high kick on an enemy.\nHit targets will temporarily receive more damage from [Strike] type attacks.\n★ No Cooldown",
    "iconUrl": "icons/high_kick_[physical]_-_[strike]_[debuff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 24/04/2026",
    "description": "Corsair (Rank 5)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Unlock Chest",
    "stats": "CD: 49s",
    "description": "Enhances your ability to unlock chests, temporarily raising the Lv. of any keys held in your inventory, enabling you to unlock higher level treasure chests.",
    "iconUrl": "icons/unlock_chest_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Jolly Roger",
    "stats": "CD: 35s",
    "description": "Place down a pirate flag, encouraging your allies to battle in the surrounding area.\nA combo bonus is triggered whenever you or friendly targets attack enemies near the flag.\nWhen the combo bonus reaches 300, all nearby allies receive the effects of [Combo Fever], enhancing [Missile] type damage. Missile damage buff  increases with skill level.",
    "iconUrl": "icons/jolly_roger_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Iron Hook",
    "stats": "CD: 25s",
    "description": "Throws a hook at a target location, when cast near an enemy, the hook will capture the target, afflicting them with [Iron Hook] preventing them from moving and taking actions. The duration of Iron Hook increases with skill level.",
    "iconUrl": "icons/iron_hook_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Keel Hauling  -",
    "stats": "CD: 25s",
    "description": "Drag and pull an enemy towards you, dealing damage.\nCan only be cast when a target is currently being held by [Iron Hook]",
    "iconUrl": "icons/keel_hauling_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Full Metal Jacket   -",
    "stats": "OH: 4  CD: 20s",
    "description": "Fires a powerful bullet at a target, ignoring half of their defense.",
    "iconUrl": "icons/full_metal_jacket_[missile]_-_[gun].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Napalm Bullet   -",
    "stats": "CD: 0s",
    "description": "Fires an explosive bullet, dealing fire damage to enemies in a wide area in front of you.\n★ No Cooldown\n★ Consumes a Flame Bullet when cast",
    "iconUrl": "icons/napalm_bullet_[missile]_-_[gun]_[fire]_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Dust Devil  -",
    "stats": "OH: 3  CD: 16s",
    "description": "Attack enemies in all directions with a flourishing spin.\nTargets struck are spun around and become immobilized temporarily.",
    "iconUrl": "icons/dust_devil_[physical]_-_[slash]_[attack_speed].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Tase   -",
    "stats": " CD: 0s",
    "description": "Fires an electric shock to a target in front of you dealing lightning-type damage to the target. The electric shock will bounce from your original target and shock nearby enemies.\n★ No Cooldown\n★ Consumes a Lightning Bullet when cast",
    "iconUrl": "icons/tase_[missile]_-_[gun]_[lightning].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Hexen Dropper  -",
    "stats": "CD: 0s",
    "description": "Use both weapons in your hands to quickly stab at the enemy repeatedly.\n★ No Cooldown",
    "iconUrl": "icons/hexen_dropper_[physical]_-_[pierce]_[attack_speed].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Double Weapon Assault",
    "stats": "CD: 60s",
    "description": "Brandish your blades offensively, entering a Dual Wielding state. When performing Basic Attacks, you will slash with each weapon simultaneously, While active, gain the following bonuses:\n - Increased Corsair Skill Damage\n - Increased Swordsman Skill Damage\n - Increased Basic Attack Speed\nRequires a [One-Handed Sword] equipped in the Sub Weapon Slot. Effect ends when the Sub-Weapon equipment is changed.",
    "iconUrl": "icons/double_weapon_assault_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Quick and Dead  -",
    "stats": "OH: 3  CD: 26s",
    "description": "Wildly fire your pistol around you, dealing damage to nearby enemies.",
    "iconUrl": "icons/quick_and_dead_[missile]_-_[gun]_[attack_speed].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Impale Dagger  -",
    "stats": "OH: 4 CD: 20s",
    "description": "Using your dagger, deeply stab into enemies in front of you.",
    "iconUrl": "icons/impale_dagger_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Smash Bullet   -",
    "stats": "CD: 0s",
    "description": "Fires a shot that causes earth spikes to shoot upwards, dealing heavy damage to enemies in the surrounding area.\n★ No Cooldown\n★ Consumes a [Chill Bullet] when cast",
    "iconUrl": "icons/smash_bullet_[missile]_-_[gun]_[earth].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 24/04/2026",
    "description": "Squire (Rank 5)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Arrest",
    "stats": "CD: 52s",
    "description": "Throws a rope at a target and any nearby enemies, including [Boss] type, afflicting them with [Arrest], preventing affected enemies from being able to move. The number of targets you can arrest simultaneously increases with skill level.",
    "iconUrl": "icons/arrest_[channel]_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Repair",
    "stats": "CD: 60s",
    "description": "Open up a store to repair damaged equipment.\nItems repaired can restore durability higher than the limit of the equipment itself, allowing it to be used for longer. The service price of the shop increases when opened within a dungeon map.\n\r★ Restores additional durability based on the Squire’s STR/CON/SPR/DEX/INT Stats",
    "iconUrl": "icons/repair.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Equipment Maintenance",
    "stats": "CD: 60s",
    "description": "Open up a store to process weapons and armor, temporarily increasing their abilities.\nMaintenance can only be done on Weapons, Top, Bottom and Shield items only.",
    "iconUrl": "icons/equipment_maintenance.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Base Camp",
    "stats": "CD: 0s",
    "description": "Set up a base camp for party members. Party members can teleport to the base camp and also make use of it for accessing personal storage. The duration of Base Camp can be extended every time you use the ‘Renew’ option when interacting with the Base Camp, this can be done multiple times to allow the Base Camp to last several days.\n\n★ Requires 10 Camping Tools each time you wish to construct a Base Camp\n★ Consumes 2000 Silver each time the duration is extended (Has been increased a lot, but so has Camp duration)",
    "iconUrl": "icons/base_camp.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Refreshment Table",
    "stats": "CD: 0s",
    "description": "Set up a refreshment table to prepare dishes that boost the abilities of your party members.\nThe refreshment table can only be set up near a base camp, if the camp is removed at any time, the refreshment table will also be removed. The Skill level of Refreshment Table will influence the strength of the food buffs.\n\n★ Requires 10 Camping Tools each time you wish to construct a Refreshment Table\nEach food has a different effect, food must be crafted first and then it is available for you/your party members or other adventurers too. ( If you have enabled share outside of party option) \n\n★ BBQ Skewer & Champagne refreshments are available from Lv.6+\r★ (1/12/2025) Sandwich, Salad and BBQ Skewers have had their values changed, check the table below for the best approximations\n\n\nRefreshment Table Foods (Lv. 10)\n\n\n\nFood\nCrafting Materials\n\nFood Benefits\nSandwich\n2 White Bread\n4 Lettuce\nMax. SP  + 10%\nSoup\n2 Pine Mushroom\n3 Milk\nNatural HP Recovery time becomes 10 seconds faster\nYogurt\n5 Milk\n\nNatural SP Recovery time becomes 10 seconds faster\nSalad\n6 Pine Mushroom\n\nMax. HP + 15%\nBBQ Skewer\n3 Spring Onion\n3 Kebab Meat\nAoE Attack Ratio + 1\nChampagne\n6 Grapes\n\nAoE Defense Ratio + 3",
    "iconUrl": "icons/refreshment_table.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "",
    "description": "Food\nCrafting Materials\n\nFood Benefits",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Penalty Reduction",
    "stats": "CD: 900s",
    "description": "Preserves your items currently being held, reducing the negative penalty effects that occur when you become incapable of combat.",
    "iconUrl": "icons/penalty_reduction_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Deadly Combo  -",
    "stats": "OH: 3  CD: 13s",
    "description": "Slashes your weapon multiple times at enemies in front of you.",
    "iconUrl": "icons/deadly_combo_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 06/05/2026",
    "description": "Doppelsoeldner (Rank 6)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Punish  -",
    "stats": "CD: 0s",
    "description": "Pierce your weapon into an enemy that is currently Knocked Down.",
    "iconUrl": "icons/punish_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Zwerchhau  -",
    "stats": "CD: 30s",
    "description": "Swing your sword to attack a wide range of enemies. Targets struck that do not have plate armor become more vulnerable to slash type attacks.",
    "iconUrl": "icons/zwerchhau_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Deeds of Valor",
    "stats": "CD: ??s",
    "description": "Increase damage that you deal to enemies and the effectiveness of Doppelsoeldner skills, but also increases damage received from enemies. Upon activation your HP will double and you will fully restore your HP. While the buff is active, healing effects are reduced and the player will gain 3x damage against enemies, but also receive 3x damage from enemies",
    "iconUrl": "icons/deeds_of_valor_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Mordschlag  -",
    "stats": "CD: 0s",
    "description": "Knocks down enemies by striking them with the back of your sword.",
    "iconUrl": "icons/mordschlag_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Double Pay Earn",
    "stats": "OH: 0  CD: 300s",
    "description": "Temporarily doubles EXP and loot dropped from an enemy when it is defeated.\nWhile buff is active, damage taken from enemies is increased by 3x and you lose more durability if you become incapable of combat.",
    "iconUrl": "icons/double_pay_earn_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Zornhau  -",
    "stats": "OH: 0  CD: 15s",
    "description": "Swing your weapon down on an enemy with extreme force, inflicting high damage to targets and afflicting them with [Shock].",
    "iconUrl": "icons/zornhau_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Zucken  -",
    "stats": "CD: 15s",
    "description": "Inflict damage on an enemy in front of you through a series of lateral slashes. Deals additional damage to enemies currently afflicted with [Shock].",
    "iconUrl": "icons/zucken_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Redel  -",
    "stats": "OH: 2  CD: 30s",
    "description": "Swing your weapon around several times, dealing multiple attacks to enemies in front of you.",
    "iconUrl": "icons/redel_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Sturtzhau  -",
    "stats": "OH: 2  CD: 25s",
    "description": "Strike with your weapon at a diagonal angle against an enemy. The attack ignores a portion of enemy defense.",
    "iconUrl": "icons/sturtzhau_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Cyclone  -",
    "stats": "OH: 2  CD: 75s",
    "description": "Using centrifugal force, attack enemies within an area continuously.\nThe number of attacks you deal increases with skill level.",
    "iconUrl": "icons/cyclone_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 25/04/2026",
    "description": "Fencer (Rank 6)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Lunge  -",
    "stats": " CD: 0s",
    "description": "Lunge your spear at an enemy. On a successful hit, enemies become vulnerable to [Slash] attacks and your evasion is increased.\n★ No Cooldown",
    "iconUrl": "icons/lunge_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Sept Etoiles  -",
    "stats": "CD: 0s",
    "description": "Stab an enemy in front of you multiple times in succession.\n\n★ No Cooldown",
    "iconUrl": "icons/sept_etoiles_[physical]_-_[pierce]_[attack_speed].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Attaque  Coquille  -",
    "stats": "CD: 0s",
    "description": "Strike the enemy with the guard of your rapier, afflicting them with [Attaque Coquille], temporarily allowing [Pierce] type attacks to ignore the enemies defense. Debuff duration increases with skill level.\n★ No Cooldown",
    "iconUrl": "icons/attaque_coquille_[physical]_-_[strike]_[debuff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Esquive Toucher  -",
    "stats": "CD: 0s",
    "description": "Move swiftly to avoid enemy attacks while striking back with a complex movement. While using this skill, Critical Attack and Evasion is increased. The critical attack and evasion boosting effects increase with skill level.\n\n★ No Cooldown",
    "iconUrl": "icons/esquive_toucher_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Flanconnade  -",
    "stats": "CD: 0s",
    "description": "Perform an upward attack with your rapier, while protecting yourself from enemy attacks.\nIf an enemy attempts to strike you while using this skill, the attack is blocked.\n★ No Cooldown",
    "iconUrl": "icons/flanconnade_[physical]_-_[slash]_[attack_speed].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Attaque Composee  -",
    "stats": "OH: 5  CD: 10s",
    "description": "Stabs an enemy in front of you twice.",
    "iconUrl": "icons/attaque_composee_[physical]_-_[pierce]_[attack_speed].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Preparation",
    "stats": "CD: 35s",
    "description": "Twirl your rapier to parry incoming attacks, while enhancing your next attack.\nAfter channeling, your next [Pierce] type attack will deal double damage.\n\nChannel duration increases with skill level.",
    "iconUrl": "icons/preparation_[buff]_[channel].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Balestra Fente  -",
    "stats": "CD: 0s",
    "description": "Dash forward, piercing enemies in front of you.\nStruck enemies are afflicted with [Balestra Fente] and have their Critical Resistance temporarily reduced.\n★ No Cooldown",
    "iconUrl": "icons/balestra_fente_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Attaque au Fer  -",
    "stats": "CD: 35s",
    "description": "Strike the enemies hands, causing them to drop their weapons. Enemies cannot benefit from the effects of their weapons until they pick it up themselves. (The weapon is automatically picked up after the debuff ends)",
    "iconUrl": "icons/attaque_au_fer_[physical]_-_[pierce]_[attack_speed]_[debuff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Epee Garde",
    "stats": "CD: 45s",
    "description": "Sacrifices the defense given by your shield to enhance your critical damage when attacking with [Pierce] type attacks. The bonus critical damage and duration of the buff increase with skill level.",
    "iconUrl": "icons/epee_garde_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Fleche  -",
    "stats": "OH: 3  CD: 42s",
    "description": "Stabs the enemy three times.",
    "iconUrl": "icons/fleche_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 25/04/2026",
    "description": "Dragoon (Rank 7)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Dragontooth  -",
    "stats": "CD: 0s",
    "description": "Rotate your spear using centrifugal force to attack an enemy. Critical attack rate is doubled, and the skill gives additional effects based on the type of equipped spear.\r★ No Cooldown",
    "iconUrl": "icons/dragontooth_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Serpentine  -",
    "stats": "CD: 0s",
    "description": "Use your spear to deal continuous damage to enemies in front of you.\r★ No Cooldown",
    "iconUrl": "icons/serpentine_[physical]_-_[pierce]_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Gae Bulg  -",
    "stats": "CD: 30s",
    "description": "Attack several enemies ahead of you  by throwing your spear. Damaged enemies will temporarily become weaker to physical property attacks. The thrown spear must be picked up to use it again.",
    "iconUrl": "icons/gae_bulg_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Dragon Soar  -",
    "stats": "OH: 3  CD: 15s",
    "description": "Vault into the air while swinging your spear upwards. Deals additional damage to flying enemies.",
    "iconUrl": "icons/dragon_soar_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Dethrone  -",
    "stats": "OH: 2  CD: 16s",
    "description": "Pierce your weapon into the enemies in front of you, halting their movement. When used against Boss Monsters, their movement speed and attack speed is reduced.",
    "iconUrl": "icons/dethrone_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Dragon Fall  -",
    "stats": "CD: 50s",
    "description": "Fly up to the sky, and then shoot downwards at a targeted area on the ground, dealing damage to enemies in a wide radius around where you land.",
    "iconUrl": "icons/dragon_fall_[physical]_-_[pierce]_[cast_time].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Dragoon Helmet",
    "stats": "CD: 1s",
    "description": "Equip your Dragoon Helmet. While the helmet is equipped, all Dragoon skills deal increased damage and SP cost of Dragoon skills are reduced. Use the skill again to remove the helmet.",
    "iconUrl": "icons/dragoon_helmet_[buff]_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 25/04/2026",
    "description": "Templar (Rank 7)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Summon Guild Member",
    "stats": "CD: 600s",
    "description": "Summons a specific guild member to your current location. You need permission from the specified guild member to allow for teleportation.\n[★ SKILL DOES NOT CURRENTLY FUNCTION ★ ]",
    "iconUrl": "icons/summon_guild_member.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Warp to Guild Member",
    "stats": "CD: 600s",
    "description": "Warps to a specific guild member’s location.\nYou cannot warp to guild members who are inside instanced dungeons.\n[★ SKILL DOES NOT CURRENTLY FUNCTION ★ ]",
    "iconUrl": "icons/warp_to_guild_member.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Build Guild Tower",
    "stats": "CD: 0s",
    "description": "Expands access to extra features of the Guild Tower, depending on skill level learned.\nThis skill can be used by using the [Build Guild Tower] item\nLevel 1: Warp\nLevel 2: Storage\nLevel 3: Guild Upgrade\nLevel 4: Guild Quests\nLevel 5: Guild Hangout \n[★ SKILL DOES NOT CURRENTLY FUNCTION ★ ]",
    "iconUrl": "icons/build_guild_tower.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Reduce Craft Time",
    "stats": "CD: 600s",
    "description": "Deploys a flag that reduces crafting time for all nearby guild members.\nThe flag can only be placed near a Guild Tower, within a city or inside a Guild Hangout.\nThis skill can only be used by a Guild Master.\n[★ SKILL DOES NOT CURRENTLY FUNCTION ★ ]",
    "iconUrl": "icons/reduce_craft_time.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Battle Orders",
    "stats": "CD: 60s",
    "description": "Increases movement speed to the maximum value for guild members near the guild master.\nThe buff expires early when players move away from the guild master.\nAdditionally decreases the movement speed of nearby enemies.",
    "iconUrl": "icons/battle_orders_[buff]_[debuff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Buff Share",
    "stats": "CD: 30s",
    "description": "Shares beneficial properties with party members within range.",
    "iconUrl": "icons/buff_share_[channeling].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Forge",
    "stats": "CD: 180s",
    "description": "Erects a forge that deals damage in all directions.\nThe forge is able to detect hidden enemies.\nRequires a [Forge] item to cast.",
    "iconUrl": "icons/forge.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Shield Charger",
    "stats": "CD: 180s",
    "description": "Build a Shield Charger that protects nearby guild members with a Shield Gauge.\nThe durability of the shield gauge can be recovered once it reaches a certain threshold.\nThe shield’s maximum health is equal to 2x your own HP.\nRequires a [Shield Charger] item to cast.",
    "iconUrl": "icons/shield_charger.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Mortal Slash  -",
    "stats": "OH: 3  CD: 38s",
    "description": "Swing your sword in all directions before slashing the enemy from the bottom up.\nEnemies suffering from [Battle Orders] debuff take additional damage.",
    "iconUrl": "icons/mortal_slash_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Non-Invasive Area",
    "stats": "CD: 60s",
    "description": "Create a protective zone around you. While Guild Members are within the protective zone they are able to block [Magic] type attacks.",
    "iconUrl": "icons/non-invasive_area_[buff]_[channeling].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 25/04/2026",
    "description": "Nak Muay (R7 Hidden)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Ram Muay",
    "stats": " CD: 0s",
    "description": "Performs a traditional dance to enter the [Ram Muay] stance, an unarmed stance changing your basic attacks and enabling the use of [Nak Muay] skills.\r★ Character’s Weapon Modifier becomes [Unarmed (Nak Muay)] while active",
    "iconUrl": "icons/ram_muay_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Te Kha  -",
    "stats": "OH: 2  CD: 12s",
    "description": "Kicks the lower body of an enemy with your leg, targets hit have a chance to be afflicted with [Stiff Legs], lowering their movement speed temporarily. \nDeals increased damage to [Small] size targets",
    "iconUrl": "icons/te_kha_[physical]_-_[strike]_[attack_speed].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Sok Chiang  -",
    "stats": "OH: 2  CD: 14s",
    "description": "Slashes the enemy using your elbow, targets hit have a chance to be afflicted with [Bleeding]",
    "iconUrl": "icons/sok_chiang_[physical]_-_[slash]_[attack_speed].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Te Trong  -",
    "stats": "CD: 10s",
    "description": "Strikes the enemy with a powerful kick, spinning them around and knocking them down.",
    "iconUrl": "icons/te_trong_[physical]_-_[strike]_[attack_speed].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Khao Loi  -",
    "stats": "CD: 13s",
    "description": "Strikes the enemy with a flying knee kick. \nDeals increased damage to [Flying] type enemies.",
    "iconUrl": "icons/khao_loi_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Muay Thai",
    "stats": "CD: 30s",
    "description": "Enhances your Muay Thai capabilities temporarily, when using [Nak Muay] skills, the cooldown of other [Nak Muay] skills will be reduced by a few seconds.",
    "iconUrl": "icons/muay_thai_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Langon",
    "stats": "CD: 0s",
    "description": "Dash at an enemy target, appearing in front of them instantly. While dashing, you are invincible against enemy attacks.",
    "iconUrl": "icons/langon.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 24/04/2026",
    "description": "Shinobi (R7 Hidden)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Kunai  -",
    "stats": "OH: 6  CD: 20s",
    "description": "Throws 5 Kunai at enemies in front of you.\nIf this skill is used by clones,  the attack is applied as two consecutive hits.\r★ No Cooldown\r★ Hitbox has been increased",
    "iconUrl": "icons/kunai_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Bunshin no Jutsu",
    "stats": "CD: 120s",
    "description": "Create clones of yourself. The summoned clones will follow you and copy the skills you use when possible.\nThe attributes of learned skills do not apply when they are used by a clone. When a clone copies your skills, the SP consumed and cooldown time of those skills increase in proportion to how many clones are currently active.\nThe number of clones you can summon increases with skill level.",
    "iconUrl": "icons/bunshin_no_jutsu_[buff]_[cast_time].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Mokuton no Jutsu",
    "stats": "CD: 35s",
    "description": "Prepares the Mokuton Jutsu technique, anticipating an attack from an enemy.\nWhile the buff is active, the next time you are attacked by an enemy you will disappear from your current location, leaving a wooden log in your place and teleport above the head of the enemy, following up with an attack, damaging enemies around your target. The duration of the buff increases with skill level.",
    "iconUrl": "icons/mokuton_no_jutsu_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Katon no Jutsu   -",
    "stats": "OH: 2  CD: 25s",
    "description": "Attack multiple enemies by exploding gunpowder in a line in front of you.",
    "iconUrl": "icons/katon_no_jutsu_[physical]_-_[pierce]_[fire].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Mijin no Jutsu  -",
    "stats": "CD: 50s",
    "description": "Perform an explosion technique by detonating gunpowder, dealing damage to enemies nearby and consuming a percentage of your current HP, Deals additional damage based on the value of HP consumed. If this skill is used by Bunshin Clones, the effect of Bunshin no Jutsu is canceled and the clones are destroyed.\r★ HP Consumption = 100 - (5*Skill Lv)%",
    "iconUrl": "icons/mijin_no_jutsu_[physical]_-_[pierce]_[fire].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 12/05/2025",
    "description": "Matador (Rank 8)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Capote",
    "stats": "Max Lv:1 0",
    "description": "Provokes nearby enemies, Increasing enemies movement speed while reducing their Accuracy and Evasion.\nIf a boss monster is in range, they will be provoked first over other targets.\nProvoked enemies will also become immune to other provoke effects for 30 seconds.",
    "iconUrl": "icons/capote_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Muleta  -",
    "stats": "Max Lv: 10",
    "description": "Hold out a red cape, preparing to counterattack.\nWhen attacked while holding the cape, you will prevent the incoming damage and counter attack the enemy instead. During use the skill also blocks all melee attacks against you. \nOn a successful counterattack, your critical rate is increased temporarily.\nCounters on  [Beast] Type enemies afflict them with the [SeeRed] debuff.",
    "iconUrl": "icons/muleta_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Faena  -",
    "stats": "Max Lv: 10",
    "description": "Attack an enemy multiple times using a Rapier.\nThe number of attacks increases with skill level.",
    "iconUrl": "icons/faena_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Ole",
    "stats": "Max Lv: 10",
    "description": "Flaps your red cloak, attracting the attention of enemies.",
    "iconUrl": "icons/ole_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Paso Doble  -",
    "stats": "",
    "description": "Rotate 360 degrees while attacking enemies in front of you. While attacking, you are invulnerable.\nEnemies hit by the skill are knocked down.",
    "iconUrl": "icons/paso_doble_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Back Slide",
    "stats": "",
    "description": "Quickly move backwards a set distance. \nThe Cooldown time decreases with skill level.",
    "iconUrl": "icons/back_slide.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 02/05/2026",
    "description": "Murmillo (Rank 8)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Cassis Crista",
    "stats": "",
    "description": "Equip a Cassis Crista Helmet in preparation for battle.\nGaining the following effects:\nGain access to Murmillo class skills\nMissile and Magic type attacks against you have a chance to be dodged\nYour Evasion against Physical/Melee attacks is lowered",
    "iconUrl": "icons/cassis_crista_[buff].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Frenzied Slash  -",
    "stats": "",
    "description": "Perform a large leap forwards, striking foes on the ground where you land. Enemies hit are temporarily stunned.",
    "iconUrl": "icons/frenzied_slash_[physical]_-_[slash].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Evade Thrust  -",
    "stats": "",
    "description": "Attack an enemy while protecting yourself with your shield.",
    "iconUrl": "icons/evade_thrust_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Headbutt  -",
    "stats": "",
    "description": "Headbutt a target and force them to turn around.\nEnemies hit have a chance to be stunned, If you are not currently wearing the  [Cassis Crista] Helmet, you may also be stunned by this move.",
    "iconUrl": "icons/headbutt_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Scutum Hit  -",
    "stats": "",
    "description": "Swing your shield in a wide arc, attacking enemies in front of you.\nWhen successfully hitting an enemy, 30% of your shield’s Physical Defense is added to your Physical Attack.",
    "iconUrl": "icons/scutum_hit_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Shield Train  -",
    "stats": "",
    "description": "Rush forward with your shield, pushing enemies, and then strike the ground with your shield, gathering enemies in front of you. When successfully hitting an enemy, 30% of your shield’s Physical Defense is added to your Physical Attack.",
    "iconUrl": "icons/shield_train_[physical]_-_[strike].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Sprint",
    "stats": "",
    "description": "Temporarily increase your movement speed. When enemies are nearby, your movement speed increases even further.",
    "iconUrl": "icons/sprint_[buff]_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Emperor’s Bane",
    "stats": "",
    "description": "Grapple a target preventing them from taking actions, repeatedly using this skill causes you to strike the enemy, dealing damage to the grappled target and any enemies nearby. Can also be used against Boss-type targets.",
    "iconUrl": "icons/emperor’s_bane.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 12/05/2025",
    "description": "Lancer (Rank 8)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Crush  -",
    "stats": "",
    "description": "Lunge with your spear forward to pierce enemies in front. The target temporarily loses either attack or defense. If the target is an enemy summon, it will be displaced.",
    "iconUrl": "icons/crush_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Joust  -",
    "stats": "",
    "description": "Charges forward to lunge the spear at the enemy and destroy magic circles. The target's INT and SPR stats get reduced and cleric and wizard types will be silenced and normal attacks and skills cannot be used.",
    "iconUrl": "icons/joust_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Unhorsing  -",
    "stats": "",
    "description": "Fix your grip on your spear and strike your enemy downward, knocking them off of their companion.",
    "iconUrl": "icons/unhorsing_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Quintain  -",
    "stats": "",
    "description": "Push the spear far in front of you to attack enemies. Enemies in Crush state get additional damage.",
    "iconUrl": "icons/quintain_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Initiate",
    "stats": "",
    "description": "Strengthen your will before the battle. Increases the chance for you to penetrate the enemy's defense and the affected enemy's block stat can be decreased.",
    "iconUrl": "icons/initiate_[buff]_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Prevent",
    "stats": "",
    "description": "Temporarily become immune to all debuffs. Cooldown time decreases with skill level.",
    "iconUrl": "icons/prevent_[buff]_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Rhongomiant  -",
    "stats": "",
    "description": "Rush towards the enemy and deal damage. Upon hitting an enemy, you stop and deal increased damage based on the distance traveled.",
    "iconUrl": "icons/rhongomiant_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "",
    "stats": "Last Updated: 12/05/2025",
    "description": "Retiarius (Rank 8)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Pull Rete",
    "stats": "CD: 25s",
    "description": "Throw the rete at nearby enemies and pull them towards you. Enemies trapped by the rete become unable to move and take additional damage from Pierce attacks while equipped with a One-handed Spear. Cooldown time reduces as skill level increases.",
    "iconUrl": "icons/pull_rete_[debuff]_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Throw Rete",
    "stats": "CD: 30s",
    "description": "Throw the rete within a designated range to immobilize the enemies trapped by it. Duration applies as half for character enemies. Enemies trapped by the rete take additional damage from Pierce attacks while equipped with a One-handed Spear.",
    "iconUrl": "icons/throw_rete_[debuff]_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Dagger Guard",
    "stats": "CD: 30s",
    "description": "Deflect Slash, Strike and Pierce type attacks with your dagger. This buff is automatically canceled if your character is not currently equipping a dagger.",
    "iconUrl": "icons/dagger_guard_[buff]_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Trident Finish  -",
    "stats": "OH: 3  CD: 15s",
    "description": "Pierce enemies all around and deal damage with your spear. Critical chance and damage increased when attacking enemies affected by Rete, Iron Hook, or Arrest debuffs.\n* Character critical rates apply separately.\n* Damage increase does not stack with rete debuff effects.",
    "iconUrl": "icons/trident_finish_[physical]_-_[pierce]_[attack_speed].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Disarm  -",
    "stats": "CD: 35s",
    "description": "Attack enemies all around with the rete to deal damage and reduce their physical defense. Affected character targets become momentarily unable to equip a shield.",
    "iconUrl": "icons/disarm_[physical]_-_[strike]_[debuff]_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Dagger Finish  -",
    "stats": "",
    "description": "Leap forward and stab the enemy with your dagger. If the target's HP is at 50% or lower, your attack can deal up to 350% additional damage based on how low their HP is. Deals additional damage to enemies affected by the rete debuff, Iron Hook, and Arrest.\n* The HP damage increase does not stack with the debuff increase.",
    "iconUrl": "icons/dagger_finish_[physical]_-_[pierce].png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Vital Protection",
    "stats": "CD: 50s",
    "description": "Protect your body’s vital points, raising your Critical Resistance.\nThe amount of Critical Resistance gained increases with skill level.",
    "iconUrl": "icons/vital_protection_[buff]_.png"
  },
  {
    "tree": "Swordsman Tree",
    "name": "Blandir Cadena  -",
    "stats": "OH: 2  CD: 25s",
    "description": "Protect your body’s vital points, raising your Critical Resistance.\nThe amount of Critical Resistance gained increases with skill level.",
    "iconUrl": "icons/blandir_cadena_[physical]_-_[slash].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 26/04/2026",
    "description": "Wizard (Rank 1)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Energy Bolt",
    "stats": "CD: 0s",
    "description": "Gather magical energy and launch it towards an enemy.\n\n★ [No Cooldown]",
    "iconUrl": "icons/energy_bolt_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Lethargy",
    "stats": "CD: 20s",
    "description": "Exhaust the energy of enemies in a location, reducing their attack and evasion.",
    "iconUrl": "icons/lethargy_[debuff]_[cast_time].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Sleep",
    "stats": "CD: 25s",
    "description": "Create a magic cloud at a targeted location, causing enemies within range to fall asleep. Enemies will stay asleep until they reach the attack threshold when taking damage, or the debuff timer ends.",
    "iconUrl": "icons/sleep_[debuff]_[cast_time].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Magic Shield",
    "stats": "CD: 300s",
    "description": "Create a protective barrier around yourself and nearby allies, converting SP to protect the player's HP. While Magic Barrier is active, damage dealt against the player will instead damage the barrier first, draining their SP instead of HP.\r\n★ Buff duration is unlimited/until sp runs out for the caster (lasts 500s for allies)\n★ Efficiency of the Magic Shield improves with higher Circles in Wizard",
    "iconUrl": "icons/magic_shield_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Earthquake  -",
    "stats": "OH: 3  CD: 17s",
    "description": "Create an earthquake in front of you, dealing damage to enemies and knocking them up in the air.",
    "iconUrl": "icons/earthquake_[magic]_-_[earth].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Surespell",
    "stats": "CD: 60s",
    "description": "Increase you and your allies' focus when using magical spells.\nPrevents skills from being interrupted.\n★ Unlimited Buff Duration",
    "iconUrl": "icons/surespell_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Magic Missile",
    "stats": "CD: 0s",
    "description": "Cast a barrage of magical missiles towards enemies in front of you.\n\n★ No Cooldown",
    "iconUrl": "icons/magic_missile_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Quick Cast",
    "stats": "CD: 120s",
    "description": "Focuses your spells into your mind, allowing you to materialize them instantly. Grants you a ‘Concentrate’ stacking effect that allows you to cast your spells faster. When performing certain spells with cast time, they will have their casting time reduced in exchange for consuming some of the Concentrate stacks, the amount consumed varies per skill.\n\n★ Reworked Effect: This skill now grants a stacking ‘Concentrate’ buff, which allows you to cast faster when using skills with cast times - certain spells (Particularly from Elementalist) Will now consume these ‘Concentrate stacks in exchange for the amplified cast time.\n★ The amount of stacks gained is (5 * SkillLv Cast), Please note that the skill can be released early - but this means that you will gain only as many stacks based on the level you were able to charge up to.\n\n Please refer to the following below as an example, for the Concentration cost for Elementalist abilities:\n\nSkill Used\nConcentrate Stack Cost\nElectrocute\n-10\nRain\n-10\nStorm Dust\n-10\nStone Curse\n-10\nFrost Cloud\n-20\nMeteor\n-40",
    "iconUrl": "icons/quick_cast_[buff]_[cast_time].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 26/04/2026",
    "description": "Cryomancer (Rank 2)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Ice Bolt  -",
    "stats": "CD: 0s",
    "description": "Throws a bolt of ice that splits into 3 hits, dealing damage with a chance of freezing the enemy.",
    "iconUrl": "icons/ice_bolt_[magic]_-_[ice].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Ice Pike  -",
    "stats": "OH: 3  CD: 20s",
    "description": "Create ice spikes at a target location, dealing damage to enemies nearby with a chance of freezing the enemy.",
    "iconUrl": "icons/ice_pike_[magic]_-_[ice].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Ice Wall  -",
    "stats": "CD: 65s",
    "description": "Conjures a wall of ice that has a chance of freezing enemies that go near the ice wall.\nDeals damage to targets in the surrounding area when [Ice Blast] is used.",
    "iconUrl": "icons/ice_wall_[magic]_-_[ice].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Ice Blast  -",
    "stats": "OH: 3  CD: 14s",
    "description": "Snap your fingers, triggering a cold blast on frozen enemies and on up to 8 Ice walls nearby.",
    "iconUrl": "icons/ice_blast_[magic]_-_[ice].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Subzero Shield",
    "stats": "CD: 45s",
    "description": "Create a protective ice barrier around you that mitigates a percentage of incoming damage.\nEnemies that attack you have a chance to become [Frozen].\r\n★Buff duration is now fixed to 25s for all levels",
    "iconUrl": "icons/subzero_shield_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Snow Rolling  -",
    "stats": "CD: 20s",
    "description": "Create a giant snowball that crushes enemies in its path. Enemies near the snowball are pulled into the snowball and receive [Ice] property damage over time. The size of the snowball increases drastically the longer you channel the skill.",
    "iconUrl": "icons/snow_rolling_[magic]_-_[ice]_[cast_time].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Frost Pillar  -",
    "stats": "CD: 45s",
    "description": "Summons a frozen tree at a target location. The tree will freeze and deal constant damage to any nearby enemies.\nRequires [Cryorite] to cast.",
    "iconUrl": "icons/frost_pillar_[magic]_-_[ice].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 26/04/2026",
    "description": "Pyromancer (Rank 2)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Fireball  -",
    "stats": "CD: 0s",
    "description": "Place a fireball at a target location, enemies near the fireball will take damage.\r\n★ [Fireball: Burn Debuff] - With this attribute learned, if you hit an enemy currently suffering from the stacking [Fire] debuff, each hit the fireball will continue to build stacks of [Fire] on the affected enemy. The total number of [Fire] debuff stacks on an enemy cannot exceed 100. No. of hits per target increases with skill level. Up to 5 Fireballs can be summoned.\r* This attribute currently overwrites other Fire/Burn stacks, I would advise against using the attribute.\n★ No Cooldown",
    "iconUrl": "icons/fireball_[magic]_-_[fire].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Fire Wall  -",
    "stats": "OH: 3  CD: 20s",
    "description": "Creates a wall of fire at a target location that deals constant damage to approaching enemies. Enemies within range of the fire wall receive constant damage and are afflicted with a stacking [Fire] debuff. The total number of [Fire] debuff stacks on an enemy cannot exceed 100.",
    "iconUrl": "icons/fire_wall_[magic]_-_[fire]_[debuff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Enchant Fire",
    "stats": "CD: 110s",
    "description": "Grants Fire property to you and nearby allies attacks.\n★ Buff Duration has been increased.\r★ Add. Fire Property Damage scales up according to caster’s INT & SPR",
    "iconUrl": "icons/enchant_fire_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Flare  -",
    "stats": "CD: 0s",
    "description": "Snap your fingers to trigger an explosion on enemies. \nConsumes all stacks of [Fire] on nearby targets to deal damage, damage dealt increases in proportion to how many stacks have been consumed on a target. The total number of [Fire] debuff stacks on an enemy cannot exceed 100.\n★ No Cooldown",
    "iconUrl": "icons/flare_[magic]_-_[fire].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Flame Ground  -",
    "stats": "CD: 0s",
    "description": "Creates a magic circle of fire beneath you, dealing constant damage to enemies.\nEnemies hit are afflicted with a stack of [Fire]. The total number of [Fire] debuff stacks on an enemy cannot exceed 100\n★ Applies 1 stack of [Fire] per hit",
    "iconUrl": "icons/flame_ground_[magic]_-_[fire]_[debuff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Hell Breath  -",
    "stats": "CD: 25s",
    "description": "Burn enemies in front of you, dealing continuous fire damage to enemies.\nEach time an enemy is hit by Hell Breath they are afflicted with a stacking [Fire] debuff. The total number of [Fire] debuff stacks on an enemy cannot exceed 100. While channeling Hell Breath, you block any incoming melee attacks. Enemies that take multiple hits from Hell Breath have a chance of temporarily taking additional damage from fire property attacks.\n\nRequires [Pyrite] to cast.\n★ Applies 2 stacks of [Fire] per hit",
    "iconUrl": "icons/hell_breath_[magic]_-_[fire]_[debuff]_[channel].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Prominence  -",
    "stats": "CD: 120s",
    "description": "Engulf yourself in a pillar of flames, constantly dealing high damage to enemies within range. Each time an enemy is hit by Prominence, they are afflicted with [Fire]. While Channeling, the skill will consume SP over time.\n\n★ Applies 50 stacks of [Fire] per hit",
    "iconUrl": "icons/prominence_[magic]_-_[fire]_[channel].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 26/04/2026",
    "description": "Linker (Rank 3)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Unbind",
    "stats": "CD: 0s",
    "description": "Disconnects any links made via Physical Link, Joint Penalty, Spiritual Chain and Spiritual Shock.",
    "iconUrl": "icons/unbind_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Physical Link",
    "stats": "CD: 22s",
    "description": "Links party members together, causing all damage taken to be shared between the linked players. This buff can be cancelled with the Unbind skill.\r\r★ SP Cost is reduced the higher the learned Skill Lv.",
    "iconUrl": "icons/physical_link_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Joint Penalty",
    "stats": "CD: 0s",
    "description": "Connect enemies together, allowing damage dealt to be done simultaneously to connected enemies. Connected enemies will share any incoming damage that they take. Damage dealt to targets is compiled and released as a single hit to connected enemies at regular intervals. This can be cancelled with the Unbind skill.\r\r★ The link behaviour has been adjusted, if you want to relink the same initial target again, you must break the current link with [Unbind], or wait for the debuff to drop naturally, currently linked enemies are removed from the pool of potential targets when using Joint Penalty.\n★ Compiles (2 * Skill Lv)% of all damage dealt to the targets,any damage compiled is considered to have been dealt by the linker once the compiled damage has been released.\r★ Debuff Duration: 8~15 Seconds (Skill Lv. 1 – Lv.15)\n★ The targeting distance for connecting enemies has been increased\r★ SP Cost is reduced the higher the learned Skill Lv.",
    "iconUrl": "icons/joint_penalty_[debuff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Hangman’s Knot",
    "stats": "CD: 15s",
    "description": "Tighten the connection between enemies, pulling all connected enemies together in front of you. Once connected enemies have been pulled together they are briefly unable to move.",
    "iconUrl": "icons/hangman’s_knot_[debuff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Spiritual Chain",
    "stats": " CD: 55s",
    "description": "Link party members together to share buff effects. This can be cancelled with the Unbind skill.\r\r\r★ SP Cost is reduced the higher the learned Skill Lv.",
    "iconUrl": "icons/spiritual_chain_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Spirit Shock  -",
    "stats": "CD: 15s",
    "description": "Link yourself to the soul of a single target in front of you to deal psychokinetic damage over time.\nCan only be used on one target at a time. This can be cancelled with the Unbind skill.",
    "iconUrl": "icons/spirit_shock_[magic]_-_[psychokinesis].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Lifeline",
    "stats": "CD: 60s",
    "description": "Shares the highest STR, CON, INT, SPR and DEX stats between party members currently linked together by [Spiritual Chain]. The duration of Lifeline increases with skill level.\n\r★ SP Cost is reduced the higher the learned Skill Lv.",
    "iconUrl": "icons/lifeline_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 26/04/2026",
    "description": "Psychokino (Rank 3)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Psychic Pressure  -",
    "stats": "CD: 25s",
    "description": "Concentrate energy to the tip of your hand, dealing continuous psychokinetic type damage to nearby enemies. Damage is doubled when attacking  Mutant-type monsters.",
    "iconUrl": "icons/psychic_pressure_[magic]_-_[psychokinesis]_[channel]_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Telekinesis",
    "stats": "CD: 30s",
    "description": "Traps an enemy in front of you in a bubble of psychokinetic energy.\nTrapped enemies can be thrown around in any direction using your arrow keys. Deals 50% additional damage to Mutant-type enemies.\n★ Can also be used again Boss-type targets",
    "iconUrl": "icons/telekinesis_[magic]_[debuff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Swap",
    "stats": "OH: 2  CD: 18s",
    "description": "Swap your current position with an enemy in front of you.\nThe amount of enemies that can be swapped increases with skill level.",
    "iconUrl": "icons/swap_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Teleportation",
    "stats": " CD: 0s",
    "description": "Teleport to a random location on the map.\n★ SP Cost is reduced the higher the learned Skill Lv.",
    "iconUrl": "icons/teleportation_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Magnetic Force",
    "stats": "CD: 25s",
    "description": "Create a magnetized area, pulling all nearby enemies together. Enemies pulled together will collide and take damage. Deals 50% additional damage to Mutant-type monsters.",
    "iconUrl": "icons/magnetic_force_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Heavy Gravity  -",
    "stats": " CD: 25s",
    "description": "Increases the force of gravity in an area, dealing [Psychokinesis] damage to enemies in an area.\n[Flying]-type targets are changed to Ground-type in this area, and any [Raise] tiles are removed. Deals 50% additional damage to Mutant enemies. \n★ Targets currently affected by [Raise] take impact damage that increases depending on the size of the enemy.",
    "iconUrl": "icons/heavy_gravity_[magic]_-_[psychokinesis].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Raise",
    "stats": "CD: 50s",
    "description": "Create a magic circle with low gravity, lifting up enemies into the air.\nEnemies that are raised are treated as Flying-type enemies and cannot evade attacks.",
    "iconUrl": "icons/raise_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Gravity Pole  -",
    "stats": "CD: 30s",
    "description": "Creates a gravity field in front of you in a line that pulls nearby enemies into it.\nEnemies within the field are unable to move and receive continuous magic damage over time.",
    "iconUrl": "icons/gravity_pole_[magic]_-_[psychokinesis]_[channel].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 03/05/2026",
    "description": "Elementalist (Rank 4)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Electrocute  -",
    "stats": "CD: 0s",
    "description": "Release a surge of electricity from your fingertips, dealing damage as the electricity jumps between enemies. \n\n\r★ Consumes 10 stacks of [Concentrate] if Quick Cast buff is currently active",
    "iconUrl": "icons/electrocute_[magic]_-_[lightning]_[cast_time].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Rain",
    "stats": "CD: 120s",
    "description": "Creates rainfall in a targeted area, soaking enemies that step in the area.\nWhile it is raining, the following effects occur:\nEnemy movement speed is reduced.\n[Fire] property magic circles  are removed.\n[Lightning] property damage is increased when attacking enemies within the rain.\n[Fire] property targets will constantly take damage when standing in the rain.\nRain Duration: 10 Seconds\n\n★ Consumes 10 stacks of [Concentrate] if Quick Cast buff is currently active",
    "iconUrl": "icons/rain_[debuff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Lava Eruption  -",
    "stats": "CD: 0s",
    "description": "Slam your weapon into the ground, triggering an explosion of flames that deals damage to enemies.",
    "iconUrl": "icons/lava_eruption_[magic]_-_[fire].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Hail  -",
    "stats": "OH: 3  CD: 140s",
    "description": "Create a hailstorm that drops large chunks of ice on surrounding enemies, dealing continuous damage in an area for the duration of the hailstorm. Duration of the hailstorm increases with skill level.",
    "iconUrl": "icons/hail_[magic]_-_[ice].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Storm Dust  -",
    "stats": "CD: 0s",
    "description": "Create a sandstorm at the target area. Enemies within range of [Storm Dust] take continuous Earth property damage. Flying-type enemies will only receive half of the damage dealt by Storm Dust.\n\n\r★ Total Hits of storm have been reduced to 6 hits over the duration of Storm Dust (1 hit per 0.9s over 5.4s)\r★ Storm Dust: Second Storm (Attribute) - adds an additional hit per attribute level(12 additional hits at Max.Lv)\r★ Consumes 10 stacks of [Concentrate] if Quick Cast buff is currently active",
    "iconUrl": "icons/storm_dust_[magic]_-_[earth]_[cast_time].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Stone Curse",
    "stats": "CD: 50s",
    "description": "Temporarily petrify enemies in a line in front of you.\nEnemies afflicted with [Petrify] receive additional damage from [Fire] and [Psychokinesis] property attacks, but receive reduced damage from other property attacks.\r★ Consumes 10 stacks of [Concentrate] if Quick Cast buff is currently active",
    "iconUrl": "icons/stone_curse_[cast_time]_[debuff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Frost Cloud  -",
    "stats": "CD: 0s",
    "description": "Creates a magic circle of ice at a target area. Deals continuous Ice property damage to enemies within the magic circle. Can cast a lower level version of the skill by releasing the skill early once it has charged to at least LV 1.\nThe size and damage of the magic circle increases with skill level.\n\r★ Consumes 20 stacks of [Concentrate] if Quick Cast buff is currently active",
    "iconUrl": "icons/frost_cloud_[magic]_-_[ice]_[cast_time].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Meteor  -",
    "stats": "CD: 0s",
    "description": "Drop a meteor on a targeted area inflicting massive damage to enemies.\nCan cast a lower level version of the skill by releasing the skill early once it has charged to at least LV 1.The size and damage of meteor increases with skill level.\n\r★ Consumes 40 stacks of [Concentrate] if Quick Cast buff is currently active",
    "iconUrl": "icons/meteor_[magic]_-_[fire]_[cast_time].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 26/04/2026",
    "description": "Thaumaturge (Rank 4)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Swell Hands",
    "stats": "CD: 0s",
    "description": "Enlarge both the hands of yourself and nearby party members, increasing your Physical/Magical Attack when wielding weapons, and increasing Physical Defense when wearing Shields.\n★ No Cooldown",
    "iconUrl": "icons/swell_hands_[buff]_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Shrink Body",
    "stats": "OH: 2  CD: 25s",
    "description": "Temporarily shrink an enemy to a smaller size, while also reducing its Max.HP\n★ Debuff Duration: 30 + (5 * Skill Lv.) Seconds",
    "iconUrl": "icons/shrink_body_[debuff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Swell Body",
    "stats": "OH: 2  CD: 25s",
    "description": "Temporarily enlarge the size of an enemy, while also increasing its Max. HP.\n★ Debuff Duration: 30 + (5 * Skill Lv.) Seconds",
    "iconUrl": "icons/swell_body_[debuff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Transpose",
    "stats": "CD: 70s",
    "description": "Temporarily swaps your INT and  CON.\n★ Buff Duration is now unlimited. (Expires on death/map change)",
    "iconUrl": "icons/transpose_[buff]_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Reversi",
    "stats": "OH: 3  CD: 40s",
    "description": "Takes ownership of a magic circle that was created by an enemy. Converted magic circles behave as though they have been originally cast by you.",
    "iconUrl": "icons/reversi_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Swell Brain",
    "stats": "CD: 120s",
    "description": "Enlarge the size of you and your party members’ heads to increase INT and additional Magic Attack.\r\r★ INT Bonus Formula = (5 + CON/10)\r★ Swell Brain: Fast Operation (Attribute)The 'Quick Cast' buff effect now lasts for 1.2 seconds per attribute level. \n ★ When activating Swell Brain will now cause the 'Quick Cast' buff to provide a 10% Additional Cast Time Reduction on top of your current passive Cast Time Reduction for the duration of the timed 'Quick Cast' buff.",
    "iconUrl": "icons/swell_brain_[buff]_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 26/04/2026",
    "description": "Chronomancer (Rank 5)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Quicken",
    "stats": " CD: 40s",
    "description": "Increase the attack speed of you and nearby party members.\nThe attack speed bonus increases by up to double the amount based upon your SPR and the target’s level.\n★ Requires [Time Crystal Fragment] to cast",
    "iconUrl": "icons/quicken_[buff]_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Reincarnate",
    "stats": "CD: 120s",
    "description": "Manipulates time on a monster in front of you, afflicting it with [Reincarnate].\nIf the monster dies while the debuff is active, it will reincarnate on the same spot it was defeated. Monsters can only be reincarnated once, using this skill on a reincarnated monster will cause the skill to fail. \r★ Requires [Time Crystal Fragment] to cast",
    "iconUrl": "icons/reincarnate_[debuff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Stop",
    "stats": "CD: 100s",
    "description": "Create a magic circle around you that freezes time, preventing enemies from moving and taking action. While time is stopped, enemies within the magic circle do not receive damage.\n★ Requires [Time Crystal Fragment] to cast",
    "iconUrl": "icons/stop_[debuff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Slow",
    "stats": "CD: 35s",
    "description": "Creates a magic circle at a target location that slows down time. Enemies that travel through the magic circle have their movement speed decreased. The movement speed reduction and duration of the magic circle increases with skill level.",
    "iconUrl": "icons/slow_[debuff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Haste",
    "stats": "CD: 35s",
    "description": "Manipulate time to increase the movement speed of you and your party members. The movement speed effect increases up to double based on the caster’s SPR and target’s level.\n★ Requires [Time Crystal Fragment] to cast",
    "iconUrl": "icons/haste_[buff]_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Backmasking",
    "stats": "CD: 300s",
    "description": "Rewinds time within an area, allies and enemies are moved around to the position they were at 10 seconds before Backmasking was cast. Previously defeated enemies will not be brought back to life when using Backmasking.\n★ Requires [Time Crystal] to cast",
    "iconUrl": "icons/backmasking_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Pass",
    "stats": "CD: 50s",
    "description": "Reduces the cooldown of all skills for you and your party members. The cooldown of skills cannot be reduced again until they have been used.\n★ Requires [Time Crystal] to cast",
    "iconUrl": "icons/pass_[buff]_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 26/04/2026",
    "description": "Sorcerer (Rank 5)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Summoning",
    "stats": "CD:300s",
    "description": "Summons a Devil version of the card that is currently inserted in your grimoire. Upon being summoned, the Devil will fight enemies alongside you. The Devil’s Attack and Defense are determined by your character’s level, and will increase by 5% for each star on the corresponding card. Only [Devil-type] cards can be inserted into the Grimoire.",
    "iconUrl": "icons/summoning_[grimoire_command].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Summon Familiar  -",
    "stats": " CD: 39s",
    "description": "Summon 5 familiars that follow you around, The familiars will rush into enemies that you attack, or enemies attack you and then explode itself.",
    "iconUrl": "icons/summon_familiar_[magic]_-_[dark].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Summon Salamion",
    "stats": "CD: 60s",
    "description": "Summon the fire devil Salamion.\nSalamion will follow your commands and fight with you against enemies.",
    "iconUrl": "icons/summon_salamion_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Summon Servant",
    "stats": "CD: 60s",
    "description": "Summon a servant. The servant will grant beneficial effects while following its master. The number of buffs increases proportionally to the level of [Summon Servant]. Requires 1x [Empty Spellbook] to cast\nCasts the following buffs in order:\n+ AoE Attack Ratio\n+ SP Recovery Speed \n+ STA Recovery\n+ Magic Defense\n+ Add. Dark Property Damage\n★ SP Cost is reduced the higher the learned Skill Lv.",
    "iconUrl": "icons/summon_servant_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Attack Ground",
    "stats": "CD: 3s",
    "description": "Command the devil summoned from your Grimoire to move and attack at a targeted area.",
    "iconUrl": "icons/attack_ground_[grimoire_command].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Riding",
    "stats": "CD: 20s",
    "description": "Ride the devil summoned from your Grimoire and take control of it.\nWhile you are mounted on the Grimoire devil: \nYou can command the devil to perform skills that are unique to each devil\nDamage dealt to you is instead redirected to the Summoned Devil\nYou are unable to cast regular skills",
    "iconUrl": "icons/riding_[grimoire_command].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Morph",
    "stats": "CD: 30s",
    "description": "Transforms your currently summoned Grimoire devil into one that is currently equipped in your secondary Grimoire card slot. When the devil is transformed, it retains the originally summoned devil’s stats.",
    "iconUrl": "icons/morph_[grimoire_command].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Hold",
    "stats": "CD: 3s",
    "description": "Commands your Grimoire Devil to wait and guard the area at a target location.",
    "iconUrl": "icons/hold_[grimoire_command].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Evocation  -",
    "stats": "CD: 60s",
    "description": "Summon a Devil in your secondary Grimoire slot and command it to perform a unique attack, dealing damage to nearby enemies.",
    "iconUrl": "icons/evocation_[magic]_-_[dark].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Desmodus",
    "stats": "OH: 2  CD: 25s",
    "description": "Summon and release blood sucking bats against enemies to inflict damage. Applies struck targets with [Vampirism] which increases damage taken from [Summons]",
    "iconUrl": "icons/desmodus_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 26/04/2026",
    "description": "Alchemist (Rank 6)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Combustion  -",
    "stats": "CD: 32s",
    "description": "Explodes an item of yours on the ground to damage nearby enemies",
    "iconUrl": "icons/combustion_[magic]_-_[fire].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Dig",
    "stats": "CD: 14s",
    "description": "Dig up the ground to collect materials required for alchemy.",
    "iconUrl": "icons/dig_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Item Awakening",
    "stats": "CD: 60s",
    "description": "Opens a shop to awaken hidden abilities in items. The items gain new stats, but they lose Potential unless a sacrificial item is used.",
    "iconUrl": "icons/item_awakening_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Tincturing",
    "stats": "CD: 0s",
    "description": "Extract fluid from herbs to create different potions.The level of potions created is based on skill level.",
    "iconUrl": "icons/tincturing_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Magnum Opus",
    "stats": "CD: 0s",
    "description": "Perform experimental alchemy to create items. By placing certain combinations of items in a particular order in the Magnum Opus window you can create brand new items.",
    "iconUrl": "icons/magnum_opus_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Gem Roasting",
    "stats": "CD: 0s",
    "description": "Opens a shop to roast and enhance gems. Reduces the penalty of an enhanced gem.",
    "iconUrl": "icons/gem_roasting.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Alchemistic Missile  -",
    "stats": "OH: 3  CD: 18s",
    "description": "Concentrate magical energy and fire it at enemies in front of you.",
    "iconUrl": "icons/alchemistic_missile_[magic]_-_[psychokinesis].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 26/04/2026",
    "description": "Necromancer (Rank 6)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Gather Corpse",
    "stats": "CD: 0s",
    "description": "Releases evil energy into your opponent. The corpses of monsters affected by the evil energy can be collected once defeated. The duration of the debuff increases with skill level.\r★ No Cooldown",
    "iconUrl": "icons/gather_corpse_[debuff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Create Shoggoth",
    "stats": "CD: 240s",
    "description": "Create a Shoggoth with stats based on the cards that are placed in the Necronomicon. The attack and defense of the Shoggoth are affected by the skill level. The Shoggoth's attack and defense increase by 5% for each star on the card. Only Beast, Plant and Mutant-type cards can be placed in the Necronomicon.",
    "iconUrl": "icons/create_shoggoth_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Flesh Cannon",
    "stats": "OH: 2  CD: 20s",
    "description": "Throw corpse parts on a targeted area to attack nearby enemies.",
    "iconUrl": "icons/flesh_cannon_[magic]_[cast_time].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Flesh Hoop",
    "stats": "CD: 25s",
    "description": "Encircle yourself with corpse parts that will damage nearby enemies. Has a chance to deal additional damage to enemies afflicted with [Decay].",
    "iconUrl": "icons/flesh_hoop_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Raise Dead",
    "stats": "CD: 60s",
    "description": "Summon a skeleton soldier made with a corpse. The skeleton soldier will engage in combat and follow its master. The amount of Skeleton Soldiers that you can summon increases with skill level.\r★ Increased Summon HP & Also inherits the caster’s stats\r★ Has an indefinite summoning duration, only despawning on map changes",
    "iconUrl": "icons/raise_dead_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Disinter",
    "stats": "OH: 3  CD: 24s",
    "description": "Collect the corpses of enemies around you that have recently died.",
    "iconUrl": "icons/disinter_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Raise Skull Archer",
    "stats": "CD: 60s",
    "description": "Summon a skeleton archer made with corpse parts. The skeleton archer will engage in combat and follow its master.\n★ Increased Summon HP & Also inherits the caster’s stats\r★ Has an indefinite summoning duration, only despawning on map changes",
    "iconUrl": "icons/raise_skull_archer_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Corpse Tower",
    "stats": "CD: 50s",
    "description": "Build a cursed tower in front of you made with corpses, the corpse tower will then attack nearby enemies. The strength, duration and defenses of the corpse tower increase with skill level.",
    "iconUrl": "icons/corpse_tower_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Flesh Strike  -",
    "stats": "CD: 30s",
    "description": "Gather and throw corpse parts at a target location, dealing damage to enemies.",
    "iconUrl": "icons/flesh_strike_[magic]_-_[poison].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Raise Skull Mage",
    "stats": "OH: 3  CD: 60s",
    "description": "Summon a skeleton archer made with corpse parts. The skeleton mage will engage in combat and follow its master.\n★ Increased Summon HP & Also inherits the caster’s stats\r★ Has an indefinite summoning duration, only despawning on map changes",
    "iconUrl": "icons/raise_skull_mage_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 26/04/2026",
    "description": "Rune Caster (R6 Hidden)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Rune of Destruction",
    "stats": "OH: 2  CD: 40s",
    "description": "Deals damage to enemies in a targeted area. Enemies that are hit will reflect some of the damage received to other nearby enemies.\n\n★ Requires [Rune Stone] to cast\r★ Damage Dealt by this skill is influenced by the current number of [Concentrate] stacks you have\r★ Gain 10 stacks of [Concentrate] if Quick Cast buff is active & You have ‘Rune Caster: Skilled Casting’ Lv.50",
    "iconUrl": "icons/rune_of_destruction_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Rune of Ice",
    "stats": "CD: 140s",
    "description": "Temporarily boosts the power of ice-type magic for you and your party members.\n★ Requires [Rune Stone] to cast\r★ Gain 40 stacks of [Concentrate] if Quick Cast buff is active & You have ‘Rune Caster: Skilled Casting’ Lv.50",
    "iconUrl": "icons/rune_of_ice_[buff]_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Rune of Giants",
    "stats": "CD: 120s",
    "description": "Create a magic circle in front of you that will turn you or your allies into a giant. Giant players are considered to be a Large sized target and will temporarily gain more HP and Defense. While enlarged, you will have limited access to your skills.\n★ Requires [Rune Stone] to cast\r★ Gain 30 stacks of [Concentrate] if Quick Cast buff is active & You have ‘Rune Caster: Skilled Casting’ Lv.50\r★ Duration of the Giant buff has been changed to [25 + (5 * Skill Level)] Seconds",
    "iconUrl": "icons/rune_of_giants_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Rune of Justice  -",
    "stats": "OH: 3  CD: 30s",
    "description": "Fires a beam of divine magic in a straight line, dealing damage to enemies.\n★ Requires [Rune Stone] to cast\r★ Gain 5 stacks of [Concentrate] if Quick Cast buff is active & You have ‘Rune Caster: Skilled Casting’ Lv.50",
    "iconUrl": "icons/rune_of_justice_[magic]_-_[holy].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Rune of Protection",
    "stats": "CD: 200s",
    "description": "Enchants your body with a protective rune that provides immunity from being knocked back and knocked down.\n★ Requires [Rune Stone] to cast\r★ Gain 50 stacks of [Concentrate] if Quick Cast buff is active & You have ‘Rune Caster: Skilled Casting’ Lv.50",
    "iconUrl": "icons/rune_of_protection_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 26/04/2026",
    "description": "Featherfoot (Rank 7)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Dark Contract",
    "stats": " CD: 120s",
    "description": "Cover yourself in blood. Allows you to stack blood from enemies. As you collect blood from enemies, your Max. HP, HP Recovery and Max. SP will increase. Upon Activation, your SP bar will generate stacks relative to the level of Curse of Blood the user cast. The Maximum HP that you can gain via the blood stacks increases with skill level.\n\nWhile this buff is active, Your character’s Costume Appearance will change & Natural SP Recovery is disabled",
    "iconUrl": "icons/dark_contract_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Blood Sucking  -",
    "stats": "CD: 40s",
    "description": "Absorb the life force from a Beast, Devil or Insect-type enemy in front of you. (check what debuff mean)\nIf the enemy is a Beast, Devil or Insect-type enemy you recover HP each time you attack with this skill.\nIf you are currently under the effect of [Blood Bath], each hit of [Blood Sucking]  generates more stacks of [Blood].\r★ While the effect of [Dark Contract] is active, when you continually hit targets with Blood Sucking, the cooldown time of Blood Sucking is reduced\r★ While generating blood stacks from enemies, you will recover SP\n★ Damage of this skill increases in proportion to how many stacks of [Blood] you currently have.",
    "iconUrl": "icons/blood_sucking_[magic]_-_[poison]_[channel].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Blood Spilling",
    "stats": "CD: 0s",
    "description": "Use your blood to create a Blood Pool at a target location, dealing constant damage to enemies in the pool. As the Blood Pool expires, targets in range take an additional 5 hits from this skill. If you do not have enough HP at the time of casting this skill, it will cause you to become incapacitated.\nConsumes 50% of Max. HP upon cast\nBlood Pool Duration: 5 Seconds\n\r★ Damage of this skill increases in proportion to how many stacks of [Blood] you currently have.",
    "iconUrl": "icons/blood_spilling_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Blood Conversion",
    "stats": "CD: 1s",
    "description": "Sacrifice a percentage of your HP, allowing you to recover SP, the amount of SP that is recovered is the total value of HP that was consumed in the conversion. If you do not have enough HP when casting the skill, you will become incapacitated.\nConverts 5% of your Max. HP per second\nMax. Channel Duration: 20 Seconds",
    "iconUrl": "icons/blood_conversion_[channel].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Bone Pointing  -",
    "stats": "CD: 50s",
    "description": "Summon a carved, pointed bone called a ‘Kundela’. The Kundela points towards enemies and attacks them from range with bone shards. Enemies hit by the Kundela are temporarily afflicted with [Curse]\nThe summoning duration increases with skill level.\n\n★ Damage of this skill increases in proportion to how many stacks of [Blood] you currently have.",
    "iconUrl": "icons/bone_pointing_[magic]_-_[poison]_[debuff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Kundela Slash  -",
    "stats": "OH: 3  CD: 14s",
    "description": "Use the Kundela to attack enemies in front of you. Deals additional damage to enemies currently afflicted with [Curse]\rConsumes 25% of Max. HP upon cast\n★ Damage of this skill increases in proportion to how many stacks of [Blood] you currently have.",
    "iconUrl": "icons/kundela_slash_[magic]_-_[poison].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Levitation",
    "stats": "CD: 65s",
    "description": "Levitate in the sky, becoming airborne.\nWhile levitating you are immune to melee attacks, but will take additional damage from Missile-type attacks.",
    "iconUrl": "icons/levitation_[buff]_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Blood Curse  -",
    "stats": "OH: 0  CD: 36s",
    "description": "Consumes a large percentage of your HP, damage dealt is based upon the amount of HP consumed.\nEnemies hit are afflicted with [Blood Curse], temporarily preventing enemies from recovering SP. Dealing damage to enemies that are under the effect of [Blood Curse] will also restore your HP. Using this skill without sufficient HP will incapacitate you.",
    "iconUrl": "icons/blood_curse_[magic]_-_[poison].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Enervation",
    "stats": "OH: 0  CD: 50s",
    "description": "Inflict a curse spell on nearby enemies, causing them to receive additional damage when hit. The additional damage dealt to enemies is based on the caster’s Magic Attack, once you reach a certain threshold of hits, the debuff will end.\r★ Enemies afflicted with [Enervation] will bleed, regardless of race if hit by Blood Sucking or Blood Bath",
    "iconUrl": "icons/enervation_[debuff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Corrupted Infusion",
    "stats": "CD: 120s",
    "description": "Infuse and mix your blood with an enemy over a period of time, during this time you will begin to lose a portion of HP every second, after 15 seconds an explosion of blood is triggered on your initial target, dealing heavy damage to all nearby enemies. The damage formula uses a combination of the Player's Sacrificed HP and the Enemy's HP, meaning the more HP that you and the enemy have, will cause this skill to deal greater damage, please do be aware though that the final damage calculation will be based on your Magic Attack stat.\n\n  - Explosion Timer: 15 Seconds\n  - HP Drain Duration: 15 Seconds",
    "iconUrl": "icons/corrupted_infusion_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Blood Bath  -",
    "stats": "CD: 120s",
    "description": "Stabs an enemy with a bone knife.\nIf the enemy is a Beast, Devil or Insect-type, the enemy will begin to bleed.\nWhen an enemy successfully is afflicted with [Bleed], if you stand in the blood of the enemy you will gain stacks of Blood.\n\n★ [Blood] grants the caster increased Max. HP, HP Recovery and SP, and also allows Featherfoot Skills to deal increased damage according to the number of stacks the caster currently has.",
    "iconUrl": "icons/blood_bath_[magic]_-_[poison]_[debuff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 26/04/2026",
    "description": "Warlock (Rank 7)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Pole of Agony  -",
    "stats": " CD: 60s",
    "description": "Summon a pillar of darkness that constantly inflicts pain on enemies who come in contact with it.",
    "iconUrl": "icons/pole_of_agony_[magic]_-_[dark].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Invocation  -",
    "stats": " CD: 60s",
    "description": "Summon evil spirits from the death of enemies. The summoned spirits remain in the field damaging enemies who come into contact with them. The number of attacks is the same as [Dark Theurge]'s evil spirits.",
    "iconUrl": "icons/invocation_[magic]_-_[dark].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Dark Theurge  -",
    "stats": "CD: 30s",
    "description": "Summon evil spirits that surround you for protection, enemies that come into contact with the evil spirits take damage.",
    "iconUrl": "icons/dark_theurge_[magic]_-_[dark].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Mastema  -",
    "stats": "CD: 37s",
    "description": "Summon the devil of hatred to attack enemies. Enemies attacked by this magic will temporarily take extra damage from Holy property attacks.",
    "iconUrl": "icons/mastema_[magic]_-_[dark].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Evil Sacrifice  -",
    "stats": "CD: 0s",
    "description": "Set the enemies in the targeted area as a sacrifice to the evil spirits. The evil spirits will move towards the targeted area to attack enemies.",
    "iconUrl": "icons/evil_sacrifice_[magic]_-_[dark].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Drain",
    "stats": "CD: 40s",
    "description": "Absorbs nearby Evil Spirits. Dark property attack increases proportionally to the number of evil spirits absorbed.",
    "iconUrl": "icons/drain_[buff]_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Ghastly Trail   -",
    "stats": "CD: 30s",
    "description": "Command the summoned evil spirits to follow you in line. The damage increases proportionally to the skill level.",
    "iconUrl": "icons/ghastly_trail_[magic]_-_[dark]_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Demon Scratch  -",
    "stats": "OH: 2  CD: 40s",
    "description": "Create a magic circle that summons a demonic arm. The demonic arm scratches the floor with its claws in a line in front of you, dealing damage to enemies in its path. The demon arm disappears once it has finished its attack.",
    "iconUrl": "icons/demon_scratch_[magic]_-_[dark]_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 12/05/2025",
    "description": "Onmyoji (Rank 8)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Fire Fox Shikigami  -",
    "stats": "",
    "description": "Summon a Fire Fox Shikigami. The summoned Shikigami follows you while automatically attacking nearby enemies. Enemies attacking the caster will be targeted first by the Shikigami.\nRequires [Paper Doll] to cast.",
    "iconUrl": "icons/fire_fox_shikigami_[magic]_-_[fire]_[cast_time].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Greenwood Shikigami  -",
    "stats": "",
    "description": "Summon a Tree Shikigami. The summoned Shikigami sprouts from the ground, dealing continuous damage to nearby enemies. Once fully grown, the Shikigami disappears, slowing down enemies around it.\nRequires [Paper Doll] to cast.",
    "iconUrl": "icons/greenwood_shikigami_[magic]_-_[earth]_[cast_time].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Howling White Tiger",
    "stats": "",
    "description": "Release the roar of the White Tiger to instill fear in nearby enemies. Enemies affected by the roar receive damage and become struck with [Fear]. Damage increases by 50% on Plant type enemies.\nRequires [Paper Doll] to cast.",
    "iconUrl": "icons/howling_white_tiger_[magic]_[cast_time].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Water Shikigami  -",
    "stats": "",
    "description": "Invoke the power of the Water Shikigami to summon strong water currents and attack your enemies.\nRequires [Paper Doll] to cast.",
    "iconUrl": "icons/water_shikigami_[magic]_-_[ice]_[cast_time].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Genbu Armor",
    "stats": "",
    "description": "Use the armor of Genbu (Water Shikigami) to generate a protective barrier around you. Attacks received consume SP instead of HP. If you are low on SP, the protective barrier disappears. Genbu Armor does not stack with Magic Shield. \nWhile Genbu Armor is active: \nSP does not naturally regenerate. \nIce property attacks against you have a chance of being blocked.\nRequires [Paper Doll] to cast.",
    "iconUrl": "icons/genbu_armor_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Toyou  -",
    "stats": "",
    "description": "Invoke the power of the Earth Shikigami and unleash its force on the ground below your enemies, dealing damage. Knocked down enemies receive half the damage, but have a chance of being immobilized.\nRequires [Paper Doll] to cast.",
    "iconUrl": "icons/toyou_[magic]_-_[earth]_[cast_time].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 12/05/2025",
    "description": "Sage (Rank 8)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Portal",
    "stats": "CD: 0s",
    "description": "Memorize your current location or create a portal for you or your party members to be able to use. If a location is being saved, it records the coordinates of your current position before going on cooldown, you must wait for the cooldown to end before you are then able to open a portal.",
    "iconUrl": "icons/portal_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Micro Dimension",
    "stats": "OH: 3  CD: 35s",
    "description": "Using magic, compress the space in front of you, dealing damage to enemies.\nThe damage dealt to enemies increases with skill level.",
    "iconUrl": "icons/micro_dimension_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Ultimate Dimension",
    "stats": "CD: 40s",
    "description": "Using magic, expand the space in front of you, dealing damage to enemies.",
    "iconUrl": "icons/ultimate_dimension_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Blink",
    "stats": "CD: 19s",
    "description": "Teleport away from your current location into a different place, leaving behind an apparition. The apparition remains for a brief duration and will take the attention of monsters in your stead. The duration of the apparition increases with skill level.",
    "iconUrl": "icons/blink_[magic].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Missile Hole",
    "stats": "CD: 60s",
    "description": "Protect you and your allies from enemy missile and magic projectiles by distorting the space around your bodies. Damage taken from missile and magic projectiles is reduced. Reduces each attack received by 3 hits.",
    "iconUrl": "icons/missile_hole_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Portal Shop",
    "stats": "CD: 0s",
    "description": "Set up a Portal Shop, allowing players to be transported to certain maps that have been memorized by the Sage in exchange for Silver. Up to 3 locations that you have saved via [Portal] may be used in the Portal Shop.",
    "iconUrl": "icons/portal_shop.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Dimension Compression",
    "stats": "OH: 2  CD: 30s",
    "description": "Compresses the space around a single enemy, dealing damage. Quick Cast has no effect, but the longer the skill is charged, the more damage that is dealt. Nearby enemies are pulled in.",
    "iconUrl": "icons/dimension_compression_[magic]_[cast_time].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 23/10/2025",
    "description": "Enchanter (Rank 8)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Agility",
    "stats": "",
    "description": "Enchant the shoes of nearby allies. Temporarily increases Max. Stamina and increases the chance of dodging an attack based on your current Stamina. The amount of Stamina gained increases with skill level.",
    "iconUrl": "icons/agility_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Enchant Armor",
    "stats": "",
    "description": "Open a service store, allowing you to enchant other player’s Top, Bottom and Shield items.\nThe list of available enchantment effect options increases with skill level.\nArmor enchants last for 24 hours once they have been applied.\r\n★The 'Magic-Resistance' option in the store now increases the target equipment's MDEF by a flat 5% per item when equipped",
    "iconUrl": "icons/enchant_armor_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Craft Spellbook",
    "stats": "",
    "description": "Craft a spellbook containing the magic of a learned skill that can be used by anyone.\nThe level of the skill that is stored in the spellbook depends on your level of Craft Spellbook.\n\nThe following skills can be converted into consumable Spellbooks:\nAssociated Class\nSkill Name\nWizard\nMagic Missile\n\nPyromancer\nEnchant Fire\n\nFlame Ground\nCryomancer\nGust\nLinker\nJoint Penalty\nThaumaturge\nReversi\nChronomancer\nQuicken\nWarlock\nPole of Agony",
    "iconUrl": "icons/craft_spellbook_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Enchant Lightning",
    "stats": "",
    "description": "Grants a Lightning property damage buff to you and your party members. Changes melee and missile attacks to Lightning property. Additional Lightning property damage increases in proportion to the caster's INT and SPR.",
    "iconUrl": "icons/enchant_lightning_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Empowering",
    "stats": "",
    "description": "Briefly increases you and your party members' character levels and Max. SP. The increased level will not be explicitly shown but when entering instances, it will prove very useful.",
    "iconUrl": "icons/empowering_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Enchant Earth",
    "stats": "",
    "description": "Enchant the armor of you and your party with the power of the land, granting the ability to block without having to wear shields.",
    "iconUrl": "icons/enchant_earth_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Lightning Hands",
    "stats": "",
    "description": "Change your basic attack to a Lightning property ranged attack.",
    "iconUrl": "icons/lightning_hands_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "",
    "stats": "Last Updated: 12/05/2025",
    "description": "Shadowmancer (Rank 8)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Shadow Thorn  -",
    "stats": "",
    "description": "Sharp thorns rise from within the shadow of an enemy, dealing damage.",
    "iconUrl": "icons/shadow_thorn_[magic]_-_[dark].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Shadow Conjuration  -",
    "stats": "",
    "description": "Cast your shadow outwards, dealing damage to enemies within it.",
    "iconUrl": "icons/shadow_conjuration_[magic]_-_[dark].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Shadow Pool",
    "stats": "",
    "description": "Drift into the shadows and hide within the ground. Enemies cannot attack you while in this state.",
    "iconUrl": "icons/shadow_pool_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Hallucination",
    "stats": "",
    "description": "Summon a shadow that looks exactly the same as you to take damage in your place. The shadow has 20% of your maximum HP.",
    "iconUrl": "icons/hallucination_[buff].png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Shadow Condensation  -",
    "stats": "",
    "description": "Extract shadows from surrounding enemies and compress them into small beads. The beads explode after 3 seconds and inflict damage to enemies.",
    "iconUrl": "icons/shadow_condensation_[magic]_-_[dark]_.png"
  },
  {
    "tree": "Wizard Tree",
    "name": "Shadow Fetter",
    "stats": "",
    "description": "Nail the shadow of enemies to the ground to prevent them from moving.",
    "iconUrl": "icons/shadow_fetter_.png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 30/04/2026",
    "description": "Archer (Rank 1)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Swift Step",
    "stats": "CD: 36s",
    "description": "Increases your movement speed and evasion while attacking.",
    "iconUrl": "icons/swift_step_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Multi Shot  -",
    "stats": "OH: 2  CD: 14s",
    "description": "Quickly fires a number of arrows at a targeted area.\nDamage dealt increases with skill level.",
    "iconUrl": "icons/multi_shot_[missile]_-_[bow]_[cast_time].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Full Draw  -",
    "stats": "OH: 2  CD: 20s",
    "description": "Fire an arrow that pierces through enemies. Enemies hit can be pinned to nearby terrain.\nEnemies that are successfully pinned are afflicted with [Skew], preventing movement.\nDuration of [Skew] increases with skill level.",
    "iconUrl": "icons/full_draw_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Oblique Shot  -",
    "stats": "CD: 0s",
    "description": "Fire an arrow that bounces off of a target to hit an adjacent enemy.\nDamage dealt increases with skill level\n★ No Cooldown\r★ Hits additional targets based on Skill Level & AoE Attack Ratio",
    "iconUrl": "icons/oblique_shot_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Kneeling Shot",
    "stats": "CD: 0s",
    "description": "Kneel down to improve your concentration. While kneeling, your attack, attack speed and attack range will be increased drastically, however you will only be able to use certain skills and basic attacks in this state. Re-using this skill or jumping will cancel the kneeling state.\n\n★ The skill [Oblique Shot] can be cast while in Kneeling stance\n★ Some skills from Musketeer & Cannoneer can also be cast while in Kneeling stance\n★ The [Kneeling Shot: Critical Rate] Attribute raises your Critical Rate by +4 Per Attribute level. (Max. Attribute Lv. 5)",
    "iconUrl": "icons/kneeling_shot_.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Heavy Shot  -",
    "stats": "OH: 5  CD: 10s",
    "description": "Fire an arrow that pushes enemies away.\nDamage increases with skill level.",
    "iconUrl": "icons/heavy_shot_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Twin Arrow  -",
    "stats": "OH: 5  CD: 7s",
    "description": "Fire two arrows simultaneously at an enemy.\nDamage increases with skill level.",
    "iconUrl": "icons/twin_arrow_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 30/04/2026",
    "description": "Ranger (Rank 2)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Barrage  -",
    "stats": "CD: 0s",
    "description": "Fires several arrows forward in an arc shape in front of you.\n\n★ No Cooldown",
    "iconUrl": "icons/barrage_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "High Anchoring  -",
    "stats": "CD: 0s",
    "description": "Using the tip of your arrow to aim, fire an arrow that penetrates through enemies in front of you.\n\n★ No Cooldown",
    "iconUrl": "icons/high_anchoring_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Critical Shot  -",
    "stats": "OH: 5  CD: 180s",
    "description": "Fires an arrow with a high chance of being a critical attack.\nUpon a successful critical attack with this skill, gain a [Critical Shot] buff for 15 seconds, increasing your critical attack damage by a percentage when a critical attack is performed on an enemy. The [Critical Shot] buff can be stacked up to 5 times",
    "iconUrl": "icons/critical_shot_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Steady Aim",
    "stats": "CD: 25s",
    "description": "Increase your missile type damage by stabilizing your focus.\n\n★ Steady Aim:Enhance attribute now grants an increase on Missile type damage by 1% per Attribute Level\r★ Unlimited Buff Duration",
    "iconUrl": "icons/steady_aim_[buff]_.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Time Bomb Arrow  -",
    "stats": "CD: 60s",
    "description": "Shoot a time-bomb at a target, when a bomb is currently active, you and your target will have a bomb icon above your heads. The bomb can be detonated at any time by pressing (C)/Sub Weapon Attack key, when a bomb is currently attached to an enemy, upon detonation this will deal damage to enemies that are currently near your initial target at the time of detonation.\r\r★ Time Bomb Arrow: Enhance:\n  - The effect of this attribute now increases the total damage cap of the Time Bomb Arrow, but also reduces the interval speed of the damage increase bonus.",
    "iconUrl": "icons/time_bomb_arrow_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Bounce Shot  -",
    "stats": " CD: 0s",
    "description": "Fires an arrow that splits when hitting a target in order to hit other nearby enemies.\n★ Attacks additional targets based on your AoE Attack Ratio.\n★ Can be used while [Kneeling]",
    "iconUrl": "icons/bounce_shot_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Spiral Arrow  -",
    "stats": "CD: 15s",
    "description": "Fire a spiral arrow dealing several attacks to a single enemy, this partially ignores enemy defense. Spiral Arrow Temporarily debuffs the enemy with [Increased Hits] debuff, allowing additional uses of Spiral Arrow on the same target to increase the total number of hits on the enemy.\n\n★ The total hit count of this skill also increases based on your AoE Attack Ratio.\r★ The Increased hits debuff has a maximum of 5 stacks",
    "iconUrl": "icons/spiral_arrow_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 20/05/2025",
    "description": "Quarrel Shooter (Rank 2)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Deploy Pavise",
    "stats": "OH: 2  CD: 35s",
    "description": "Set up an upright shield to protect yourself from enemy attacks.\nEnemies that do not have a target will instead attack the Pavise.\nWhen installing the shield, nearby enemies will take damage and have a chance of being afflicted with [Bleeding].",
    "iconUrl": "icons/deploy_pavise.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Scatter Caltrops  -",
    "stats": "CD: 30s",
    "description": "Throw caltrops on the ground at a target location, dealing damage to enemies that step on them.\nEnemies that step on the caltrops will temporarily have their movement speed reduced.",
    "iconUrl": "icons/scatter_caltrops_[physical]_-_[pierce].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Stone Shot  -",
    "stats": "OH: 5  CD: 10s",
    "description": "Fires a stone bullet that pushes enemies away. The bullet will bounce to very close targets for an additional attack. On a successful hit, enemies have a chance to be stunned.\n\nRequires [Stone Bullet] to cast.",
    "iconUrl": "icons/stone_shot_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Rapid Fire  -",
    "stats": "OH: 32  CD: 25s",
    "description": "Load multiple arrows into your crossbow and fire them in quick succession at the enemy.\nCan be released early to fire less arrows. \n★ Damage dealt increases based on your AoE Attack Ratio",
    "iconUrl": "icons/rapid_fire_[missile]_-_[bow]_[cast_time].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Teardown  -",
    "stats": "OH: 4 CD: 50s",
    "description": "Destroys any installed objects in front of you, if an object is destroyed then nearby enemies will take damage.",
    "iconUrl": "icons/teardown_[physical]_-_[strike].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Running Shot",
    "stats": "CD: 35s",
    "description": "Allows you to attack while moving quickly. Your attack speed is increased, and the damage you deal from basic attacks is increased.\n★ You deal additional lines of damage based on your AoE Attack Ratio.\n★ Buff duration is 5 minutes",
    "iconUrl": "icons/running_shot_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 02/05/2026",
    "description": "Hunter (Rank 3)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Coursing",
    "stats": "CD: 90s",
    "description": "Your companion bites a target, holding them in place.\nThe target takes constant damage over time",
    "iconUrl": "icons/coursing_[physical]_.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Snatching",
    "stats": "CD: 15s",
    "description": "Your Companion attacks a flying-type enemy, forcing it to the ground.\nThe enemy is then afflicted with [Bleeding]\n ★ If used on an enemy that is not flying-type, the skill will fail to activate.",
    "iconUrl": "icons/snatching_[physical]_.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Praise",
    "stats": "CD: 90s",
    "description": "Praise your Companion, temporarily raising your companion’s Attack, Accuracy, Crit Rate and Attack Speed.",
    "iconUrl": "icons/praise_[companion_buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Pointing",
    "stats": "CD: 17s",
    "description": "Encourages your companion to be more aggressive.\nOnce activated, your companion will attack nearby enemies Your companion will also automatically bite enemies while fighting, dealing damage in an area around the target. This aggressive state will end once your character changes map.",
    "iconUrl": "icons/pointing_[companion_command].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Rush Dog",
    "stats": "CD: 0s",
    "description": "Commands your companion to charge and headbutt an enemy.\nDamage increases with skill level, and player’s INT.",
    "iconUrl": "icons/rush_dog_[physical]_.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Retrieve",
    "stats": "OH: 2  CD: 10s",
    "description": "Order your companion to attack an enemy and drag the target to you.\nThe target will be unable to attack while your companion pulls them towards you.",
    "iconUrl": "icons/retrieve_[physical]_.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Hounding",
    "stats": "CD: 9s",
    "description": "Allows your companion the ability to detect and reveal nearby hidden enemies.",
    "iconUrl": "icons/hounding_[companion_command].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Growling",
    "stats": "CD: 34s",
    "description": "Command your companion to stop moving and continuously growl on the spot. Enemies that walk near your companion will be afflicted with [Fear] and unable to attack. Your companion will continue to growl until you give it a command that forces it to move a large distance from its current location, or if you command it to go to your current position. (Via Typing /comeon in chat)",
    "iconUrl": "icons/growling_[companion_command].png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 02/05/2026",
    "description": "Sapper (Rank 3)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Stake Stockades  -",
    "stats": "OH: 2  CD: 35s",
    "description": "Quickly deploys a stockade in front of you that deals damage to enemies that walk into it.",
    "iconUrl": "icons/stake_stockades_[physical]_-_[pierce].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Conceal",
    "stats": "CD: 20s",
    "description": "Hide traps so that enemies cannot see them.",
    "iconUrl": "icons/conceal_.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Claymore  -",
    "stats": " CD: 32s",
    "description": "Set an explosive claymore charge in front of you.\nOnce set up, the skill can be re-used to detonate the Claymore, causing damage to be dealt to enemies in front of the claymore trap.\n★ Requires Trap Kit to cast",
    "iconUrl": "icons/claymore_[physical]_-_[pierce].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Punji Stake  -",
    "stats": "CD: 39s",
    "description": "Set a trap that triggers once enemies stand on it.\nWhen the trap is activated, it will launch the enemies back a large distance from the location of the trap.\n★ Requires Trap Kit to cast",
    "iconUrl": "icons/punji_stake_[physical]_-_[pierce]_[cast_time].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Detonate Traps  -",
    "stats": "OH: 2  CD: 20s",
    "description": "Detonates any nearby traps and magic circles, dealing damage to enemies.",
    "iconUrl": "icons/detonate_traps_[physical]_-_[strike].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Broom Trap  -",
    "stats": " CD: 40s",
    "description": "Deploy a trap that rotates in place, damaging all enemies within range.\n★ Requires Trap Kit to cast",
    "iconUrl": "icons/broom_trap_[physical]_-_[strike].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Collar Bomb  -",
    "stats": "30s",
    "description": "Attach a bomb to an enemy, this bomb will explode when the target gets too close to another enemy.",
    "iconUrl": "icons/collar_bomb_[physical]_-_[strike].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Spike Shooter  -",
    "stats": " CD: 100s",
    "description": "Sets up a Wire-trap that shoots arrows at enemies that touch the wire.\n★ Requires Trap Kit to cast",
    "iconUrl": "icons/spike_shooter_[physical]_-_[pierce].png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 02/05/2026",
    "description": "Wugushi (Rank 4)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Detoxify",
    "stats": "CD: 9s",
    "description": "Cleanse poison debuffs affecting you and nearby allies.\nIf the ailment level of the poison is higher than your level of Detoxify, then this skill will instead reduce the remaining duration of the poison instead of curing it entirely.",
    "iconUrl": "icons/detoxify_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Wugong Gu  -",
    "stats": "OH: 2  CD: 0s",
    "description": "Fire a poisonous arrow at a target.\nThe poisoned target will spread the poison when it gets close to other enemies.\r★ Can only infect targets once per use of Wugong Gu (infinite re-infection among same target is no longer possible)\r★ The duration of the Wugong Gu DoT that is spread to additional targets Increases based on the player’s INT",
    "iconUrl": "icons/wugong_gu_[missile]_-_[bow]_[poison].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Zhendu",
    "stats": "CD: 110s",
    "description": "Coat your weapon in a deadly poison.\nGrants Add. Poison Property Damage to the caster\n\r★ Add. Poison Property value scales according to caster’s INT & DEX",
    "iconUrl": "icons/zhendu_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Latent Venom  -",
    "stats": "CD: 30s",
    "description": "Fire a poisonous arrow that deals damage over a long period of time.\nThe longer that the target suffers from the effects of Latent Venom, the more powerful the damage.\r★ DoT now is 60 Seconds\r★ Has a ‘primed poison’ time, enemies poisoned by latent will use chat emotes, depending on the emote they use will influence the strength of damage dealt if the poison is triggered by Crescendo Bane",
    "iconUrl": "icons/latent_venom_[missile]_-_[bow]_[poison].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Poison Pot",
    "stats": "CD: 35s",
    "description": "Throw a pot of poison that smashes into a toxic puddle at a target location.\nWhile enemies stand within the puddle of poison, they will constantly take damage.\nDoes not affect [Flying] type targets.",
    "iconUrl": "icons/poison_pot_[physical]_[poison].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Jincan Gu",
    "stats": "CD: 40s",
    "description": "Throw Jincan to attack enemies in a target area.\nEnemies in the area will become poisoned, taking damage over time.\nDefeated enemies have a chance to summon Poison Insects that will attack other enemies.",
    "iconUrl": "icons/jincan_gu_[physical]_[poison].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Wide Miasma",
    "stats": "CD: 30s",
    "description": "Throw a vial of poison at the ground to smash it.\nA toxic cloud forms around you, poisoning nearby enemies.",
    "iconUrl": "icons/wide_miasma_[physical]_[poison].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Crescendo Bane",
    "stats": "CD: 35s",
    "description": "Detonate the effects of your active poisons instantly, dealing the total damage that would be accumulated by the duration of the poisons applied. Total damage dealt is increased based on the level of Crescendo Bane used.\r★ Crescendo Bane's detonation effect does not apply to [Jincan Gu] & [Poison Pot] skills at this moment in time",
    "iconUrl": "icons/crescendo_bane.png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 27/04/2026",
    "description": "Scout (Rank 4)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Camouflage",
    "stats": "CD: 76s",
    "description": "Hide yourself in a wooden barrel. While hiding in the barrel, you are able to block a certain number of physical attacks. The number of physical attacks you can block increases with skill level.",
    "iconUrl": "icons/camouflage_.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Flu Flu  -",
    "stats": "CD: 61s",
    "description": "Fire a musical arrow at a target. Enemies near the target will be afflicted with [Fear].",
    "iconUrl": "icons/flu_flu_[[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Flare Shot  -",
    "stats": "CD: 41s",
    "description": "Fire a flare on the ground at a targeted area. Upon hitting the ground, the flare bursts into sparks that damage nearby enemies.",
    "iconUrl": "icons/flare_shot_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Cloaking",
    "stats": "CD: 35s",
    "description": "Hide yourself away from an enemy’s vision. [Cloaking] is removed if you jump or attack.\nThe duration of cloaking increases with skill level.",
    "iconUrl": "icons/cloaking_[buff]_.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Perspective Distortion",
    "stats": " CD: 40s",
    "description": "Distorts the sense of distance, allowing attacks from allies to be made from a longer range.\nContinually drains your SP while channeling this skill.",
    "iconUrl": "icons/perspective_distortion_[channel].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Scan",
    "stats": " CD: 58s",
    "description": "Scan an area at a target location, hidden objects and enemies within the area become temporarily revealed.",
    "iconUrl": "icons/scan_[buff]_.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Split Arrow  -",
    "stats": "CD: 0s",
    "description": "Fires an arrow that upon hitting a target, splits into fragments to hit nearby enemies. Split Arrow Can bounce to additional targets based on the caster’s AoE Attack Ratio.",
    "iconUrl": "icons/split_arrow_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 02/05/2026",
    "description": "Fletcher (Rank 5)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Arrow Recipe Materials",
    "stats": "",
    "description": "Broadhead Arrow\r(40x)\n20 Oak Wood\n\n\n\n\n\nNone",
    "iconUrl": "icons/arrow_recipe_materials.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Broadhead  -",
    "stats": "CD: 10s",
    "description": "Fires a wide broadhead arrow. Inflicts [Bleeding] on the enemy hit.\r★ Consumes 1 Broadhead Arrow per cast\n★ SP Cost Removed",
    "iconUrl": "icons/broadhead_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Bodkin Point  -",
    "stats": "CD: 0s",
    "description": "Missing Data\n★ Consumes 1 Bodkin Point Arrow per cast\n★ SP Cost Removed",
    "iconUrl": "icons/bodkin_point_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Barbed Arrow  -",
    "stats": "CD: 0s",
    "description": "Missing Data\r★ Consumes 1 Barbed Arrow per cast\r★ No Cooldown\n★ SP Cost Removed",
    "iconUrl": "icons/barbed_arrow_[missile]_-_[bow]_[attack_speed].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Crossfire  -",
    "stats": "CD: 0s",
    "description": "Fires an arrow that creates a cross-shaped explosion upon hitting an enemy.\r★ Consumes 1 Hail Mary Arrow per cast\n★ SP Cost Removed",
    "iconUrl": "icons/crossfire_[missile]_-_[bow]_[attack_speed].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Magic Arrow  -",
    "stats": "CD: 5s",
    "description": "Fire a magic infused arrow at a target location. The arrow will explode creating a temporary magical field that will latch onto nearby enemies creating a small pillar of light, dealing constant damage to the current target and any nearby enemies within the pillar of light.\r★ Consumes 1 Magic Arrow per cast\n★ The skill effect lasts for about 60 seconds and you can have multiple instances of occuring it at once\n★ SP Cost Removed",
    "iconUrl": "icons/magic_arrow_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Divine Machine Arrow  -",
    "stats": "CD: 0s",
    "description": "Fire an explosive arrow that deals damage to a target, \r★ Consumes 1 Divine Machine Arrow per cast\n★ SP Cost Removed",
    "iconUrl": "icons/divine_machine_arrow_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 23/09/2025",
    "description": "Rogue (Rank 5)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Sneak Hit",
    "stats": "CD: 70s",
    "description": "Temporarily increases your Critical Chance when attacking enemies from behind.",
    "iconUrl": "icons/sneak_hit_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Feint",
    "stats": "CD: 25s",
    "description": "Trick an enemy to lower its guard. Temporarily decreases the evasion of enemies in front of you.",
    "iconUrl": "icons/feint_[debuff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Capture",
    "stats": "CD: 180s",
    "description": "Steals the enemy's trap and magic circle. You may use it later when you need it.",
    "iconUrl": "icons/capture_.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Vendetta  -",
    "stats": "OH: 2  CD: 30s",
    "description": "If the target dies from this attack, it explodes. Party members gain STR for a period of time.\n★ (30/4 Observation) -  The buff does not appear to improve any stats",
    "iconUrl": "icons/vendetta_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Evasion",
    "stats": "CD: 90s",
    "description": "Temporarily Increases your evasion.",
    "iconUrl": "icons/evasion_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Lachrymator",
    "stats": " CD: 60s",
    "description": "Throw a tear gas bomb at the selected area. The affected target becomes blinded and unable to attack.",
    "iconUrl": "icons/lachrymator_[debuff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Backstab  -",
    "stats": "OH: 3  CD: 10s",
    "description": "Continuously attack using your dagger. A double attack with a high critical rate may stun the enemy. Attacking from the back deals extra damage.",
    "iconUrl": "icons/backstab_[physical]_-_[pierce].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Burrow",
    "stats": "CD: 35s",
    "description": "Hide underground to conceal your appearance. In this state you can attack but cannot move.",
    "iconUrl": "icons/burrow_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 30/04/2026",
    "description": "Appraiser (R5 Hidden)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Identify",
    "stats": "CD: 60s",
    "description": "Set up a shop to identify unidentified items. The higher the skill level, the higher the chances of applying additional stats to the item.\n\r★ Applies better bonuses based on Skill Level (And better rates than the Appraisal NPC in Fedimian)\n★ Notice: We currently do not have Hunting Ground equipment to appraise",
    "iconUrl": "icons/identify.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Overestimate",
    "stats": "CD: 50s",
    "description": "Overestimate the strength of you and your allies.\nTemporarily Increases the refine enhancement level of you and your allies currently equipped Shield/Sub-Weapon.\nThe refine enhancement effect increases with skill level.",
    "iconUrl": "icons/overestimate_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Forgery",
    "stats": " CD: 300s",
    "description": "Setup a Forgery table, creating copies of your character’s Bracelets and Necklace.\nParty members can interact with the Forgery table and can choose to temporarily replace their currently equipped accessories with a selection of the ones the Appraiser had equipped at the time of using Forgery. When the Forgery buff expires, the party member’s accessories will revert back to their original item.",
    "iconUrl": "icons/forgery_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Devaluation",
    "stats": " CD: 20s",
    "description": "Attempt to appraise and devalue enemies in front of you, with a chance of weakening them.\nDepending on the type of target, the following effects occur:\n\nPlayer Targets:\nThe affected player’s enhancement and transcendence values are reduced to 0\n\nMonster Targets:\nPhysical/Magical Attack is reduced\nPhysical/Magical Defense is reduced\nThe duration of the debuff is halved when used against Boss monsters",
    "iconUrl": "icons/devaluation_[debuff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Blindside  -",
    "stats": "OH: 3  CD: 40s",
    "description": "Use a magnifying glass to attack an enemy and identify their weak spot.\nThis attack will always be a Critical Attack. Attacking enemies near the initial target will have an increased chance of being a Critical Attack.(The effects of Blindside and the character's critical rate apply separately.)",
    "iconUrl": "icons/blindside_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 02/05/2026",
    "description": "Falconer (Rank 6)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Call",
    "stats": "CD: 1s",
    "description": "Call your Falcon to join you.",
    "iconUrl": "icons/call.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Pre-Emptive Strike",
    "stats": "CD: 0s",
    "description": "Command your hawk the freedom to automatically fight  enemies near you.\nYour Hawk Companion will automatically attack enemies you’re fighting with Sonic Strike and Hovering.\nWhen your Hawk automatically casts Hovering or Sonic Strike, the damage is increased based on your skill level of Pre-Emptive Strike. While [Pre-Emptive Strike] is active, your SP is consumed gradually over time, automatically ending if you are too low on SP.\n★ No Cooldown",
    "iconUrl": "icons/pre-emptive_strike_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Circling",
    "stats": "CD: 35s",
    "description": "Command your Hawk to follow you, circling around you from above.\nEnemies that the Hawk circles around have their AoE Defense Ratio reduced to 1.\nThe duration that your Hawk circles around you increases with skill level.",
    "iconUrl": "icons/circling_[debuff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Hovering  -",
    "stats": "CD: 35s",
    "description": "Command your Hawk to attack enemies near you.\nApproaching enemies will be attacked by your Hawk.\nDeals additional damage to [Beast] type enemies.\nDamage dealt increases with skill level.",
    "iconUrl": "icons/hovering_[physical]_-_[strike].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Pheasant  -",
    "stats": "CD: 25s",
    "description": "Throw a training doll at a target location, your Hawk will then dive and attack in the targeted area.\nDeals additional damage to [Beast] type enemies.",
    "iconUrl": "icons/pheasant_[physical]_-_[strike].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Hanging Shot",
    "stats": "CD: 100s",
    "description": "Command your Hawk to carry you in the air.\nWhile [Hanging Shot] is active, the following effects will occur:\nMelee Attacks against you are dodged\nYou’re able to attack back against enemies with basic attacks\nThe duration of Hanging Shot increases with skill level.",
    "iconUrl": "icons/hanging_shot_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Sonic Strike  -",
    "stats": "CD: 45s",
    "description": "Commands your hawk to divebomb enemies multiple times at a targeted area.\nTargets hit have a chance of being afflicted with [Blind]\nDeals additional damage to [Beast] type enemies.",
    "iconUrl": "icons/sonic_strike_[physical]_-_[strike].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Aiming",
    "stats": " CD: 30s",
    "description": "Command your hawk to identify nearby enemies.\nEnemies affected will have their hitbox enlarged, allowing them to be attacked from outside of their normal range.\nThe range that targets can be attacked from increases with skill level.",
    "iconUrl": "icons/aiming_[debuff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Roost",
    "stats": "CD: 20s",
    "description": "Set up a roost for your Hawk. While the Roost is active, your Hawk will await for your commands on the roost.\n[Falconer] skills deal more damage when they are cast around the roost.\nThe Roost will disappear if you travel too far away from it.\n★ (30/4/2026) - Cannot be leveled higher than 1, but client has not been updated yet to reflect change",
    "iconUrl": "icons/roost_.png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 02/05/2026",
    "description": "Schwarzer Reiter (Rank 6)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Concentrated Fire  -",
    "stats": "CD: 30s",
    "description": "Fire multiple bullets in rapid succession at a target location.",
    "iconUrl": "icons/concentrated_fire_[missile]_-_[gun].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Caracole  -",
    "stats": "CD: 35s",
    "description": "Fire a powerful shot from your pistol, using the recoil to push yourself backwards.",
    "iconUrl": "icons/caracole_[missile]_-_[gun]_[cast_time].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Limacon",
    "stats": "CD: 35s",
    "description": "Enhance your ability to fight while mounted. While Limacon is active, the following effects occur:\nAllows you to fire your pistol while moving\nIncreased attack speed with Pistol Attack (C Key)\nPistol Attacks deal increased damage",
    "iconUrl": "icons/limacon_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Retreat Shot  -",
    "stats": "CD: 20s",
    "description": "While travelling forward in a direction, fire shots backwards at enemies behind you.",
    "iconUrl": "icons/retreat_shot_[missile]_-_[gun].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Wild Shot  -",
    "stats": "CD: 25s",
    "description": "Fire multiple shots from your Pistol and Crossbow at a target location.",
    "iconUrl": "icons/wild_shot_[missile]_-_[gun]_[cast_time].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Evasive Action",
    "stats": "CD: 45s",
    "description": "Temporarily increase your evasion while riding a Companion.",
    "iconUrl": "icons/evasive_action_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Marching Fire  -",
    "stats": "CD: 15s",
    "description": "Fire a constant barrage of shots at enemies in front of you.\nYou can move freely while this skill is being used.",
    "iconUrl": "icons/marching_fire_[missile]_-_[gun].png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 13/05/2025",
    "description": "Cannoneer (Rank 7)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Cannon Shot  -",
    "stats": "CD: 5s",
    "description": "Aim towards the ground, firing cannon balls to deal damage to enemies.\nDeals 50% less damage to [Flying] targets.\nThe damage dealt increases with skill level.\n\n★ Can be used while [Kneeling]",
    "iconUrl": "icons/cannon_shot_[missile]_-_[cannon].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Shootdown  -",
    "stats": "CD: 5s",
    "description": "Aim towards the sky, firing cannon balls to deal damage to enemies.\nDeals 50% less damage to [Ground] targets.\nThe damage dealt increases with skill level.\n\n★ Can be used while [Kneeling]",
    "iconUrl": "icons/shootdown_[missile]_-_[cannon].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Siege Burst  -",
    "stats": "CD: 7s",
    "description": "Charge and fire a howitzer at the ground, dealing damage to enemies at the target location.\nDamage is increased by 5x if the target is an enemy structure. \nThe damage dealt increases with skill level.\n\n★ Can be used while [Kneeling]",
    "iconUrl": "icons/siege_burst_[missile]_-_[cannon]_[cast_time].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Cannon Blast  -",
    "stats": "OH: 2  CD: 25s",
    "description": "Fires a cannonball that spreads in a large area in front of you, dealing damage to enemies.\nThe damage dealt increases with skill level.\n\n★ Can be used while [Kneeling]",
    "iconUrl": "icons/cannon_blast_[missile]_-_[cannon].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Cannon Barrage  -",
    "stats": "OH: 2  CD: 33s",
    "description": "Repeatedly fires your cannon at a target, dealing damage.\nThe damage dealt increases with skill level.\n\n★ Can be used while [Kneeling]",
    "iconUrl": "icons/cannon_barrage_[missile]_-_[cannon].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Smoke Grenade",
    "stats": " CD: 33s",
    "description": "Throws a smoke grenade at a target area, blinding enemies caught within the smoke.\nEnemies affected by [Smoke Grenade] will take additional damage from Cannon attacks, and any hidden enemies will be detected and visible. The duration of the Smoke Grenade increases with skill level. \n\n★ Can be used while [Kneeling]",
    "iconUrl": "icons/smoke_grenade_[debuff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Bazooka",
    "stats": "CD: 0s",
    "description": "Crouch to steady your aim when firing your cannon.\nBasic Attacks will be replaced with Cannon attacks, but enemies that are too close to you cannot be attacked.\nThe base AoE Attack Ratio of all Cannoneer Skills increases by 2x.\nIf you are near a [Deploy Pavise] shield while in Bazooka Stance, you  become immune to Knockdown and Knockback effects.",
    "iconUrl": "icons/bazooka.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Sweeping Cannon  -",
    "stats": "CD: 40s",
    "description": "Create a turret in front of you, allowing you to fire your cannon hitting a wide range of enemies.\nThe damage dealt increases with skill level.\n★ Can be used while [Kneeling]",
    "iconUrl": "icons/sweeping_cannon_[missile]_-_[cannon].png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 02/05/2026",
    "description": "Musketeer (Rank 7)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Covering Fire  -",
    "stats": "OH: 2  CD: 15s",
    "description": "Fire multiple shots from your musket at a target area, dealing damage to enemies.\nThe damage of the shots increases per level.",
    "iconUrl": "icons/covering_fire_[missile]_-_[gun].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Headshot  -",
    "stats": "OH: 2  CD: 20s",
    "description": "Aim and shoot at a target’s head. The enemy will have their INT and SPR temporarily reduced, and also be afflicted with [Bleeding] for 10 seconds. The amount of INT and SPR that the enemy loses will increase per skill level.",
    "iconUrl": "icons/headshot_[missile]_-_[gun].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Penetration Shot  -",
    "stats": "CD: 20s",
    "description": "Fire continuously  in a line in front of you, with each shot being further away. Enemies caught in the firing range of Penetration Shot have a chance of being knocked back slightly. The damage dealt by Penetration Shot increases with skill level.",
    "iconUrl": "icons/penetration_shot_[missile]_-_[gun].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Grooving Muzzle",
    "stats": "CD: 35s",
    "description": "Enhance your musket’s steel wire to increase the musket’s accuracy and penetration.\nWhile the buff is active, your basic attacks have a chance to critically hit and deal an additional 2 lines of damage at once. The duration of Grooving Muzzle’s buff increases with skill level.",
    "iconUrl": "icons/grooving_muzzle_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Volleyfire  -",
    "stats": "OH: 2  CD: 20s",
    "description": "Repeatedly fire shots at an enemy, dealing damage to your initial target and any enemies surrounding it.\nThe amount of damage dealt by Volleyfire increases with skill level.",
    "iconUrl": "icons/volleyfire_[missile]_-_[gun].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Birdfall  -",
    "stats": "OH: 2  CD: 21s",
    "description": "With a keen eye, take aim and fire a precise shot at a target.\n[Flying] type targets will take additional damage and will become Stunned.\n[Ground] type targets will take significantly less damage from this skill.",
    "iconUrl": "icons/birdfall_[missile]_-_[gun].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Snipe  -",
    "stats": "CD: 25s",
    "description": "Take aim through your scope to fire a lethal shot at an enemy far away.\nWhile taking aim, your range of fire is increased. (Screenwide)\nShooting a [Bleeding] target will cause them to take additional damage.\n★ Can be used while [Kneeling]",
    "iconUrl": "icons/snipe_[missile]_-_[gun].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Sniper’s Serenity",
    "stats": "CD: 0s",
    "description": "Charge your focus and steady your aim, increasing your Minimum Attack.\nThe longer that you charge the skill, the more your Minimum Attack increases.\nWhile the buff is active, your movement speed is decreased and you are no longer able to shoot while moving.\nIf you are attacked while the buff is active, the duration of Sniper’s Serenity buff will be reduced by 1 second each time you are hit.\n\n★ Can be used while [Kneeling]\n★ No Cooldown, and can now cancel the buff early by activating the skill again (Does not cost SP to cancel buff)",
    "iconUrl": "icons/sniper’s_serenity_[buff]_[cast_time].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Prime and Load",
    "stats": "Max Lv: 1",
    "description": "Resets the cooldown of certain musketeer skills.\nThe cooldown of Prime and Load will increase further depending on what skills were currently on cooldown.\nCooldown reducing effects cannot be applied to Prime and Load.\n\nPrime and Load base cooldown: 25 Seconds\nThe cooldown of Prime and Load will increase further by various amounts if it resets the cooldown of these skills:\n\nMusketeer Skill\nAdditional Cooldown time added to Prime and Load\nCovering Fire\n+5 Seconds\nPenetration Shot\n+5 Seconds\nVolleyfire\n+5 Seconds\nHeadshot\n+10 Seconds\nBirdfall\n+10 Seconds\nSnipe\n+10 Seconds\n\nExample: Using Prime and Load when only [Snipe] is on cooldown will result in a total cooldown of 35s for Prime and Load..",
    "iconUrl": "icons/prime_and_load.png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 02/05/2026",
    "description": "Pied Piper (Rank 8)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Dissonanz",
    "stats": "CD: 50s",
    "description": "Play a sharp note with your flute, stunning nearby enemies.\nHiding enemies will be revealed and also stunned.\nThe range of the stun effect increases with skill level.",
    "iconUrl": "icons/dissonanz_[debuff]_.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Wiegenlied",
    "stats": "CD: 35s",
    "description": "Play the flute to lull nearby enemies to sleep. Sleeping enemies cannot evade or block. When enemies wake from an attack, they have their accuracy momentarily lowered by the Drowsy debuff.",
    "iconUrl": "icons/wiegenlied_[debuff]_.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Hypnotische Floete",
    "stats": "CD: 40s",
    "description": "Play the flute to hypnotize nearby monsters. While playing the flute you are able to move while channeling the skill and Hypnotized monsters will follow your character and become unable to evade or block incoming attacks. Applies only to regular monsters.",
    "iconUrl": "icons/hypnotische_floete_[debuff]_[channel].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Hameln Nagetier  -",
    "stats": "CD: 20s",
    "description": "When casting certain Pied Piper skills, a mouse is summoned and you gain a stack of the [Hameln Nagetier] buff. You can have a maximum of 5 mice at any time. After at least one mouse is summoned, you can use the Hameln Nagetier skill again to have the mice attack a designated spot. All mice disappear when the Hameln Nagetier buff is canceled.",
    "iconUrl": "icons/hameln_nagetier_[physical]_-_[pierce]_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Friedenslied",
    "stats": "CD: 45s",
    "description": "Play an upbeat tune with the flute to make allies and enemies dance together for 5 seconds.\nAffected targets cannot move or take actions.",
    "iconUrl": "icons/friedenslied_[debuff]_[channel].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Marschierendeslied",
    "stats": "CD: 40s",
    "description": "Applies a buff that makes you and your party members temporarily immune to knockback and knockdown effects when hit. The buff count decreases every time you are attacked",
    "iconUrl": "icons/marschierendeslied_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Lied des Weltbaum",
    "stats": "CD: 60s",
    "description": "Applies a buff affecting yourself, and all party members and enemies nearby.\nDamage dealt will be increased, but damage received will also be increased by the same amount.",
    "iconUrl": "icons/lied_des_weltbaum.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Stegreifspiel",
    "stats": "CD: 70s",
    "description": "Attempt to perform a random Pied Piper skill that you have learned. The skill will activate even if you fail to activate the skill, but the effects of the skill being cast will be reduced. When a skill is used through casting [Stegreifspiel] it does not affect or apply a cooldown to the skill that was used.\n\nCastable Skills:\nDissonanz (Stun Duration Reduced by 50% when failed)\nWiegenlied (Drowsy Effects Reduced by 50% when failed)\nMarschierendeslied (Buff Duration is 50% when failed)\nLied des Weltbaum (Buff Duration is 50% when failed)",
    "iconUrl": "icons/stegreifspiel.png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 02/05/2026",
    "description": "Mergen (Rank 8)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Spread Shot  -",
    "stats": "OH: 3  CD: 30s",
    "description": "Fire 5 Arrows out in front of you, dealing damage to any enemies in range.",
    "iconUrl": "icons/spread_shot_[missile]_-_[bow]_[attack_speed].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Targeted Arrow  -",
    "stats": "OH: 2  CD: 30s",
    "description": "Charge up and prepare to shoot arrows at the enemy, once prepared, fire several arrows at the enemy.",
    "iconUrl": "icons/targeted_arrow_[missile]_-_[bow]_[cast_time].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Triple Arrow  -",
    "stats": "OH: 2  CD: 30s",
    "description": "Shoots three exploding arrows, dealing damage to enemies in front of you. The explosions caused by the arrows will also deal damage to nearby enemies.",
    "iconUrl": "icons/triple_arrow_[missile]_-_[bow]_[attack_speed].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Arrow Sprinkle  -",
    "stats": " CD: 40s",
    "description": "Fire multiple arrows into the sky, causing them to rain down at a target location.",
    "iconUrl": "icons/arrow_sprinkle_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Parthian Shaft  -",
    "stats": "OH: 3  CD: 30s",
    "description": "While running in a direction, shoot an arrow at a target behind you.\nCan only be used while moving.",
    "iconUrl": "icons/parthian_shaft_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Jump Shot  -",
    "stats": "OH: 2  CD: 20s",
    "description": "Jump backwards and fire several arrows straight ahead of you, dealing damage to enemies.",
    "iconUrl": "icons/jump_shot_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Down Fall  -",
    "stats": "OH: 2  CD: 15s",
    "description": "Fire several arrows into the air to rain down on a single enemy, causing them to take several hits of damage for a duration of time. The damage over time ends If you move too far from the enemy while using this skill.",
    "iconUrl": "icons/down_fall_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Zenith  -",
    "stats": "OH: 3 CD: 35s",
    "description": "Shoot a stream of arrows in a circle all around, attacking enemies within range. Enemies that are closer to you receive more hits.",
    "iconUrl": "icons/zenith_[missile]_-_[bow].png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 12/05/2025",
    "description": "Hackapell (Rank 8)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Skarphuggning  -",
    "stats": "OH: 2  CD: 20s",
    "description": "Slash your sword at enemies in front of you.",
    "iconUrl": "icons/skarphuggning_[physical]_-_[slash].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Storm Bolt  -",
    "stats": "OH: 2  CD: 18s",
    "description": "Push your sword into a target with great force. The target receives additional damage from Skarphuggning and has a chance to be afflicted with [Bleeding].",
    "iconUrl": "icons/storm_bolt_[physical]_-_[pierce].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Cavalry Charge  -",
    "stats": "OH: 2  CD: 20s",
    "description": "Charge forward and deal damage to enemies you come in contact with. Enemies struck by Cavalry Charge become temporarily more vulnerable to critical attacks, increasing the likelihood of a critical hit against them.",
    "iconUrl": "icons/cavalry_charge_[physical]_-_[strike].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Leg Shot  -",
    "stats": "OH: 2  CD: 24s",
    "description": "Fire your pistol at a target’s leg. The target's movement speed gets momentarily reduced.",
    "iconUrl": "icons/leg_shot_[missile]_-_[gun].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Hakka Palle",
    "stats": "CD: 60s",
    "description": "Shout and assume an offensive stance.\nWhile Hakka Palle is active you gain the following bonuses:\nIncreased Attack Speed\nChance to dodge Melee Attacks\nSP & Stamina Cost Reduction for Hackapell skills",
    "iconUrl": "icons/hakka_palle_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Grind Cutter  -",
    "stats": "OH: 3  CD: 25s",
    "description": "Cut down enemies before you continuously with a single-handed sword in your right hand.",
    "iconUrl": "icons/grind_cutter_[physical]_-_[slash].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Infinite Assault  -",
    "stats": "OH: 2  CD: 25s",
    "description": "Rush forward into enemies before you and quickly return back to your original position.",
    "iconUrl": "icons/infinite_assault_[physical]_-_[slash].png"
  },
  {
    "tree": "Archer Tree",
    "name": "",
    "stats": "Last Updated: 02/05/2026",
    "description": "Bullet Marker (Rank 8)",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Archer Tree",
    "name": "Double Gun Stance",
    "stats": "CD: 0s",
    "description": "Draw a copy of your currently equipped pistol and replace your main-hand weapon with it, entering a stance.\nWhile under the effects of Double Gun Stance, your basic attack is changed and you are also able to use Bullet Marker skills. By default, your attacks will become [Fire] property, but this can be changed if you use Silver Bullet,Tracer Bullet or Freeze Bullet.",
    "iconUrl": "icons/double_gun_stance_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Silver Bullet",
    "stats": "CD: 30s",
    "description": "Load silver bullets into your weapon, all pistol attacks will temporarily become holy property attacks.\nThe duration of the buff increases with skill level.",
    "iconUrl": "icons/silver_bullet_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "R.I.P.  -",
    "stats": "OH: 2  CD: 30s",
    "description": "Using both pistols, fire a barrage of bullets at enemies in front of you.\nWhen dealing damage to targets, some SP is drained from you.\n★ Damage scales on user’s AoE Attack Ratio",
    "iconUrl": "icons/r.i.p._[missile]_-_[gun]_[channel].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Bloody Overdrive  -",
    "stats": "OH: 2  CD: 30s",
    "description": "Fire numerous shots in all directions, attacking enemies around you.\n\n★ Can be used while kneeling.\n★ Damage scales on user’s AoE Attack Ratio",
    "iconUrl": "icons/bloody_overdrive_[missile]_-_[gun].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Mozambique Drill  -",
    "stats": "CD: 0s",
    "description": "Fires 4 shots at a target in front of you.\n\n★ Damage scales on user’s AoE Attack Ratio",
    "iconUrl": "icons/mozambique_drill_[missile]_-_[gun].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Charged Rounds",
    "stats": "CD: 20s",
    "description": "Augment your pistols with Lightning bullets.\nWhile the effect is active, Bullet Marker’s attacks are treated as [Lightning] property attacks.\n★  Buff duration is unlimited at Max. Lv.",
    "iconUrl": "icons/charged_rounds_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Subzero Shells",
    "stats": "CD: 40s",
    "description": "Augment your pistols with frozen bullets.\rWhile the effect is active, Bullet Marker’s attacks are treated as [Ice] property attacks.\n\n★  Buff duration is unlimited at Max. Lv.",
    "iconUrl": "icons/subzero_shells_[buff].png"
  },
  {
    "tree": "Archer Tree",
    "name": "Outrage",
    "stats": "CD: 30s",
    "description": "Fires your guns while moving. Basic attacks deal 2 consecutive hits and ricochet to nearby enemies  [Double Gun Stance] basic attacks will have additional damage added to it while this effect is active. While Outrage is active, you cannot perform any skills except basic attacks.\n\r★  While the buff is active, your basic attacks will also drain some SP per hit\n★ Additional Damage bonus increases based on the player’s AoE Attack Ratio\n★  Buff duration is unlimited at Max. Lv. (Due to how this skill works, the only way to remove the effect of this buff is to right-click the buff in the buff list, or to run out of SP)",
    "iconUrl": "icons/outrage_[buff].png"
  },
  {
    "tree": "Weapon Modifiers",
    "name": "",
    "stats": "",
    "description": "1 Handed Sword\nSTR\nCON\nINT\nSPR\nDEX",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Weapon Modifiers",
    "name": "",
    "stats": "",
    "description": "2 Handed Sword\nSTR\nCON\nINT\nSPR\nDEX",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Weapon Modifiers",
    "name": "",
    "stats": "",
    "description": "Bow\nSTR\nCON\nINT\nSPR\nDEX",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Weapon Modifiers",
    "name": "",
    "stats": "",
    "description": "Unarmed - Ram Muay (Nak Muay)\nSTR\nCON\nINT\nSPR\nDEX",
    "iconUrl": "icons/.png"
  },
  {
    "tree": "Gems",
    "name": "",
    "stats": "",
    "description": "Gem Type\nMain Weapon\nSecondary Weapon\nTop & Bottom\nBoots\nGloves",
    "iconUrl": "icons/.png"
  }
];

// 1. THIS IS THE MAP: Add all your jobs here so the site knows where they belong
const classMap = {
    "Swordsman": ["Swordsman Tree", "Highlander Tree", "Peltasta Tree", "Hoplite Tree", "Barbarian Tree", "Rodelero Tree", "Murmillo Tree", "Squire Tree", "Shinobi Tree", "Doppelsoeldner Tree", "Fencer Tree", "Dragoon Tree", "Templar Tree", "Lancer Tree", "Matador Tree", "Retiarius Tree"],
    "Wizard": ["Wizard Tree", "Pyromancer Tree", "Cryomancer Tree", "Psychokino Tree", "Linker Tree", "Thaumaturge Tree", "Elementalist Tree", "Chronomancer Tree", "Alchemist Tree", "Sorcerer Tree", "Necromancer Tree", "Warlock Tree", "Featherfoot Tree", "Sage Tree", "Enchanter Tree", "Runecaster Tree", "Terramancer Tree", "Onmyoji Tree"],
    "Archer": ["Archer Tree", "Quarrel Shooter Tree", "Ranger Tree", "Hunter Tree", "Sapper Tree", "Wugushi Tree", "Scout Tree", "Rogue Tree", "Fletcher Tree", "Falconer Tree", "Cannoneer Tree", "Musketeer Tree", "Schwarzer Reiter Tree", "Mergen Tree", "Appraiser Tree", "Hackapell Tree"],
    "Cleric": ["Cleric Tree", "Priest Tree", "Krivis Tree", "Bokor Tree", "Dievdirbys Tree", "Sadhu Tree", "Paladin Tree", "Monk Tree", "Pardoner Tree", "Oracle Tree", "Druid Tree", "Plague Doctor Tree", "Kabbalist Tree", "Inquisitor Tree", "Taoist Tree", "Miko Tree", "Zealot Tree"]
};

function selectBaseClass(baseName, element) {
    // Highlight the main button
    const buttons = document.querySelectorAll('#class-nav button');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (element) element.classList.add('active');

    // Look up the sub-classes using our Map above
    const jobTrees = classMap[baseName] || [];

    const subNav = document.getElementById('sub-nav');
    subNav.innerHTML = ""; 
    
    jobTrees.forEach(treeName => {
        // Check if we actually have data for this tree before making a button
        const hasData = allSkills.some(s => s.tree === treeName);
        if (hasData) {
            const btn = document.createElement('button');
            btn.innerText = treeName.replace(" Tree", ""); 
            btn.onclick = () => filterBySpecificJob(treeName, btn);
            subNav.appendChild(btn);
        }
    });

    // Auto-load the first job in the list
    if (subNav.firstChild) {
        subNav.firstChild.click();
    }
}

function filterBySpecificJob(treeName, element) {
    // Highlight Sub-Button
    const subButtons = document.querySelectorAll('#sub-nav button');
    subButtons.forEach(btn => btn.classList.remove('active-sub'));
    if (element) element.classList.add('active-sub');

    const container = document.getElementById('skill-board');
    container.innerHTML = "";

    // Show only skills for this specific job
    const filtered = allSkills.filter(s => s.tree === treeName);

    filtered.forEach(skill => {
        if (!skill.name) return; // Skip empty rows
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <div class="skill-tree">${skill.tree}</div>
            <h3 class="skill-name">${skill.name}</h3>
            <div class="skill-stats">${skill.stats}</div>
            <p class="skill-desc">${skill.description}</p>
        `;
        container.appendChild(card);
    });
}

// Ensure it starts on Swordsman when you open the file
window.onload = () => {
    const firstBtn = document.querySelector('#class-nav button');
    if (firstBtn) {
        selectBaseClass('Swordsman', firstBtn);
    }
};
