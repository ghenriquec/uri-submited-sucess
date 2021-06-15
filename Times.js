var input = require("fs").readFileSync("stdin", "utf8")
var lines = input.split("\n")

class Player {
    constructor (name, hability){
        this.name = name;
        this.hability = hability;
    }
};

var quantityPlayer = lines[0].split(' ')[0];
var quantityTeams = lines[0].split(' ')[1];

let players = [];

for( let i = 1; i <= quantityPlayer; i++)
{
    let playerName = lines[i].split(' ')[0];
    let playerSkill = lines[i].split(' ')[1];

    let newPlayer = new Player(playerName, parseInt(playerSkill));

    players.push(newPlayer);
}

const ordene = (playerArray) => {
    let flag = 0;
    let aux;

    for ( let i = 0; i < playerArray.length - 1; i++ )
    {
        if(playerArray[i].hability < playerArray[i+1].hability)
        {
            aux = playerArray[i]
            playerArray[i] = playerArray[i+1]
            playerArray[i+1] = aux

            flag = 1
        }
    }

    if(flag == 1)
        playerArray = ordene(playerArray)

    return playerArray
}

players = ordene(players)

let teams = []

for( let i = 0;i < quantityTeams; i++)
{
    teams.push([])
}

while(players.length > 0)
{
    for( let i = 0; i < quantityTeams; i++)
    {
        if(players.length == 0)
            break

        teams[i].push(players[0].name)
        players.shift()
    }
}

teams.map((time, index)=>{
    console.log(`Time ${index + 1}`)
    time.sort().map(player=>{
        console.log(player);
    })
   console.log("")
})
