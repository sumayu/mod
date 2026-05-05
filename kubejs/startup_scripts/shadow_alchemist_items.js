StartupEvents.registry('item', event => {

  event.create('shadow_alchemist:shadow_shard')
    .displayName('§8Осколок Тьмы')
    .maxStackSize(64)
    .rarity('uncommon')
    .glow(true)
    .tooltip('§7Сгусток чистой тьмы, оставшийся после гибели существа...')
    .tooltip('§8▶ Используется в алхимии теней')

  event.create('shadow_alchemist:shadow_flask')
    .displayName('§5Флакон Теней')
    .maxStackSize(4)
    .glow(true)
    .rarity('rare')
    .tooltip('§7Бурлящая тьма, заключённая в стекло.')
    .tooltip('§5▶ Даёт Невидимость, Скорость и Ночное Зрение')
    .tooltip('§c▶ Тьма берёт свою цену.')

  event.create('shadow_alchemist:alchemist_seal')
    .displayName('§6Печать Алхимика')
    .maxStackSize(1)
    .maxDamage(50)
    .glow(true)
    .rarity('epic')
    .tooltip('§7Инструмент мастера теневой алхимии.')
    .barColor(itemstack => Color.DARK_PURPLE)
    .barWidth(itemstack => {
      const maxDmg = itemstack.maxDamage
      if (!maxDmg || maxDmg <= 0) return 13
      const durability = maxDmg - itemstack.damage
      const result = Math.floor((durability / maxDmg) * 13)
      return Math.max(0, Math.min(13, isNaN(result) ? 13 : result))
    })

  event.create('shadow_alchemist:void_stone')
    .displayName('§1Камень Бездны')
    .maxStackSize(16)
    .fireResistant(true)
    .glow(true)
    .rarity('epic')
    .tooltip('§7Осколок из самой глубины пустоты.')

  event.create('shadow_alchemist:shadow_amulet')
    .displayName('§5Амулет Теней')
    .maxStackSize(1)
    .glow(true)
    .fireResistant(true)
    .rarity('epic')
    .tooltip('§5▶ ПКМ по блоку: зарядить / активировать')

})