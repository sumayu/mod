StartupEvents.registry('item', event => {

  event.create('chorus_craft:infused_chorus')
    .displayName('§5Настоянный Хорус')
    .maxStackSize(16)
    .glow(true)
    .rarity('uncommon')
    .tooltip('§7Хорус-фрукт, пропитанный энергией Края.')

  event.create('chorus_craft:compressed_chorus')
    .displayName('§1Сжатый Хорус')
    .maxStackSize(16)
    .glow(true)
    .rarity('rare')
    .tooltip('§7Готов к преобразованию в жемчуг.')

})