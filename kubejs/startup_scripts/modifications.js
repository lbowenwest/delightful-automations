// priority: 0


ItemEvents.modification(event => {
    // stack size changes
    const size_tweaks = [
        {item: "minecraft:potion", size: 16},
        {item: "minecraft:lingering_potion", size: 16},
        {item: "minecraft:splash_potion", size: 16},
        {item: "minecraft:minecart", size: 4},
        {item: "minecraft:chest_minecart", size: 4},
        {item: "minecraft:furnace_minecart", size: 4},
        {item: "minecraft:tnt_minecart", size: 4},
        {item: "minecraft:hopper_minecart", size: 4},
        {item: "minecraft:hopper_minecart", size: 4},
        {item: "railways:benchcart", size: 4},
        {item: "railways:jukeboxcart", size: 4},
        {item: "supplementaries:dispenser_minecart", size: 4},
    ]

    size_tweaks.forEach(tweak => {
        event.modify(tweak.item, i => i.maxStackSize = tweak.size)
    })
})