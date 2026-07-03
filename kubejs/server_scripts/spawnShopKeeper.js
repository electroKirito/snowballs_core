LevelEvents.tick(event => {
    if (event.server.runCommandSilent("scoreboard players get process game") != 1) return;
    if (event.server.getTickCount() % 20 != 0) return;
    if (Math.random() > 1) return; 

    if (event.level.clientSide) return;

    let level = event.getLevel()
    let players = level.getPlayers();
    if (players.isEmpty()) return;

    let randomPlayer = players.get(Math.floor(Math.random() * players.size()));
    
    let pX = Math.floor(randomPlayer.getX());
    let pY = Math.floor(randomPlayer.getY());
    let pZ = Math.floor(randomPlayer.getZ());


    

    let foundY = null;
    let radius = 50;
    let randX = pX + Math.floor(Math.random() * (radius * 2 + 1)) - radius;
    let randZ = pZ + Math.floor(Math.random() * (radius * 2 + 1)) - radius;

    
    
    for (let dY = 2; dY >= -25; dY--) {
        let checkY = pY + dY;
        let currentBlock = level.getBlock(randX, checkY, randZ);
        let blockAbove = level.getBlock(randX, checkY + 1, randZ);
        
        if (currentBlock.id == 'snowballs_el_edition:game_ice_block' && blockAbove.id == "minecraft:air") {
            foundY = checkY + 1;
            break;
        }
    }
        
    

    if (foundY !== null) {
        event.server.runCommandSilent(`summon snowballs_el_edition:frozen_shopkeeper ${randX + 0.5} ${foundY} ${randZ + 0.5}`)
        event.server.runCommandSilent(`say helllo`)
    }

});