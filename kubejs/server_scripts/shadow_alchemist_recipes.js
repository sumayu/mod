ServerEvents.recipes(event => {

  // Флакон Теней — без зелья воды, просто осколки + стекло
  event.shaped(
    Item.of('shadow_alchemist:shadow_flask', 2),
    [
      ' S ',
      'SGS',
      ' S '
    ],
    {
      S: 'shadow_alchemist:shadow_shard',
      G: 'minecraft:glass_bottle'
    }
  )

  // Печать Алхимика
  event.shaped(
    'shadow_alchemist:alchemist_seal',
    ['GSG', 'SDS', 'GSG'],
    {
      G: 'minecraft:gold_ingot',
      S: 'shadow_alchemist:shadow_shard',
      D: 'minecraft:diamond'
    }
  )

  // Камень Бездны
  event.shaped(
    Item.of('shadow_alchemist:void_stone', 4),
    ['SSS', 'SNS', 'SSS'],
    {
      S: 'shadow_alchemist:shadow_shard',
      N: 'minecraft:netherite_scrap'
    }
  )

  // Амулет Теней
  event.shaped(
    'shadow_alchemist:shadow_amulet',
    ['SES', 'EVE', 'SES'],
    {
      S: 'shadow_alchemist:shadow_shard',
      E: 'minecraft:ender_pearl',
      V: 'shadow_alchemist:void_stone'
    }
  )

  // Переплавка осколка в уголь
  event.smelting('minecraft:coal', 'shadow_alchemist:shadow_shard')
    .xp(0.5)
    .cookingTime(200)

  // Камень Бездны → незерит в горне
  event.blasting(
    'minecraft:netherite_ingot',
    'shadow_alchemist:void_stone'
  ).xp(2.0).cookingTime(400)

})