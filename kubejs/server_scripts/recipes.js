// priority: 0

// Visit the wiki for more info - https://kubejs.com/


ServerEvents.recipes(event => {
    event.shaped(
        "minecraft:bundle", 
        ["SLS", "L L", "LLL"], 
        {S: "minecraft:string", L: "minecraft:leather"}
    )
    event.shaped(
        "minecraft:saddle", 
        ["LLL", "S S", "I I"], 
        {S: "minecraft:string", L: "minecraft:leather", I: "#forge:nuggets/iron"}
    )

})
