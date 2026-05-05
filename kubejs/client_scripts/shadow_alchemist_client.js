// ============================================================
//  SHADOW ALCHEMIST — Client Script
//  Динамические тултипы для Амулета (показывает заряды)
// ============================================================

ItemEvents.tooltip(event => {

  // Динамический тултип для Амулета — показывает текущие заряды
  event.addAdvanced('shadow_alchemist:shadow_amulet', (item, advanced, text) => {
    const nbt = item.nbt
    const charges = nbt ? (nbt.charges || 0) : 0
    const filled = '§5█'.repeat(charges)
    const empty = '§8░'.repeat(5 - charges)
    text.add(Text.of(`§7Заряды: [${filled}${empty}§7] §8(${charges}/5)`))

    if (charges >= 5) {
      text.add(Text.of('§6✦ Готов к использованию! Зажмите ПКМ.'))
    } else {
      text.add(Text.of(`§8Нужно ещё ${5 - charges} Осколков Тьмы`))
    }
  })

  // Тултип для Печати — показывает прочность как "заряды"
  event.addAdvanced('shadow_alchemist:alchemist_seal', (item, advanced, text) => {
    const durability = item.maxDamage - item.damage
    text.add(Text.of(`§6Прочность: §f${durability}§8/§f${item.maxDamage}`))
  })

})

console.log('[Shadow Alchemist] ✔ Клиентские скрипты загружены.')
