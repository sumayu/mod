EntityEvents.death(event => {
  const entity = event.entity
  const level = entity.level

  if (level.clientSide) return

  const drops = {
    'minecraft:zombie':          { item: 'shadow_alchemist:shadow_shard', chance: 0.4, min: 1, max: 3 },
    'minecraft:skeleton':        { item: 'shadow_alchemist:shadow_shard', chance: 0.4, min: 1, max: 3 },
    'minecraft:creeper':         { item: 'shadow_alchemist:shadow_shard', chance: 0.5, min: 2, max: 4 },
    'minecraft:enderman':        { item: 'shadow_alchemist:shadow_shard', chance: 0.7, min: 3, max: 6 },
    'minecraft:wither_skeleton': { item: 'shadow_alchemist:shadow_shard', chance: 0.6, min: 4, max: 8 },
    'minecraft:ender_dragon':    { item: 'shadow_alchemist:void_stone',   chance: 1.0, min: 4, max: 8 },
    'minecraft:wither':          { item: 'shadow_alchemist:void_stone',   chance: 1.0, min: 2, max: 5 },
  }

  const drop = drops[entity.type]
  if (!drop) return

  if (Math.random() < drop.chance) {
    const count = Math.floor(Math.random() * (drop.max - drop.min + 1)) + drop.min
    entity.block.popItem(Item.of(drop.item, count))
  }
})

ItemEvents.rightClicked('shadow_alchemist:shadow_flask', event => {
  const player = event.player
  player.potionEffects.add('minecraft:invisibility', 20 * 30, 0)
  player.potionEffects.add('minecraft:speed', 20 * 30, 1)
  player.potionEffects.add('minecraft:night_vision', 20 * 40, 0)
  player.potionEffects.add('minecraft:nausea', 20 * 5, 0)
  player.tell(Text.of('§8Тьма течёт сквозь вас...'))
  player.playSound('minecraft:entity.generic.drink')
  event.item.shrink(1)
  event.cancel()
})

ItemEvents.rightClicked('shadow_alchemist:alchemist_seal', event => {
  const player = event.player
  const item = event.item
  const nbt = item.nbt || {}

  if (nbt.used) {
    player.tell(Text.of('§8Печать уже использована...'))
    return
  }

  player.potionEffects.add('minecraft:health_boost', 20 * 60, 4)
  player.heal(20)
  player.tell(Text.of('§6✦ Печать даёт силу! +10 сердец на 60 секунд.'))
  player.playSound('minecraft:block.enchantment_table.use')
  item.shrink(1)
  event.cancel()
})

PlayerEvents.loggedIn(event => {
  event.player.tell(Text.of('§8[§5Shadow Alchemist§8] §7Тьма приветствует вас!'))
})

ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event
  event.register(
    Commands.literal('shadowinfo')
      .executes(ctx => {
        const player = ctx.source.player
        if (!player) return 0
        player.tell(Text.of('§5═══ Shadow Alchemist ═══'))
        player.tell(Text.of('§8• §fОсколок Тьмы §8— §7дроп с мобов (40-70%)'))
        player.tell(Text.of('§8• §5Флакон Теней §8— §7ПКМ: невидимость+скорость'))
        player.tell(Text.of('§8• §6Печать Алхимика §8— §7ПКМ: +10 сердец (1 раз)'))
        player.tell(Text.of('§8• §1Камень Бездны §8— §7редкий материал'))
        player.tell(Text.of('§5════════════════════════'))
        return 1
      })
  )
})