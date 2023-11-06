// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {

    event.shaped("minecraft:saddle", ["LLL", "S S", "I I"], { L: "minecraft:leather", S: "minecraft:string", I: "minecraft:iron_nugget" })

    // event.remove({ output: "supplementaries:rope" })


    event.remove({ output: "backpacked:backpack" })
    event.shaped(
        "backpacked:backpack",
        ["LLL", "SIS", "LLL"],
        { I: "minecraft:iron_ingot", S: "minecraft:string", L: "minecraft:leather" }
    )

    event.shaped("minecraft:bundle", ["SLS", "L L", "LLL"], { S: "minecraft:string", L: "minecraft:leather" })

    event.shaped("railways:benchcart", ["IWI", "III"], { I: "minecraft:iron_ingot", W: "minecraft:crafting_table" }).id("kubejs:craft_cart")
    event.shaped("railways:jukeboxcart", ["IJI", "III"], { I: "minecraft:iron_ingot", J: "minecraft:jukebox" }).id("kubejs:juke_cart")

    event.shaped('supplementaries:quiver', [
        'L L',
        'LSL',
        ' L '
    ], {
        S: '#forge:string',
        L: '#forge:leather'
    })
})
