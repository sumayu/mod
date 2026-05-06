ServerEvents.recipes(event => {

  event.shaped(
    Item.of('chorus_craft:infused_chorus'),
    [
      '_C_',
      'C_C',
      '_C_'
    ],
    {
      C: 'minecraft:chorus_fruit',
    }
  )

  event.smelting(
    'chorus_craft:compressed_chorus',
    'chorus_craft:infused_chorus'
  ).xp(1.0).cookingTime(400)

  event.shaped(
    Item.of('minecraft:ender_pearl'),
    [
      'CSC',
      'SXS',
      'CSC'
    ],
    {
      C: 'minecraft:chorus_fruit',
      S: 'shadow_alchemist:shadow_shard',
      X: 'chorus_craft:compressed_chorus'
    }
  )

})