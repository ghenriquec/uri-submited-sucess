//@ts-check

const fs = require('fs')

function godSort(a, b) {
  // -1 0 +1
  if (a.powerLevel !== b.powerLevel) {
    return b.powerLevel - a.powerLevel
  } else if (a.kills !== b.kills) {
    return b.kills - a.kills
  } else if (a.deaths !== b.deaths) {
    return a.deaths - b.deaths
  } else {
    const alower = a.name.toLowerCase()
    const blower = b.name.toLowerCase()
    if (alower < blower) {
      return -1
    } else if (alower > blower) {
      return 1
    } else {
      return 0
    }
  }
}

/**
 * @typedef {{
 *  powerLevel: number
 *  kills: number
 *  deaths: number
 *  name: string
 * }} Godofor
 */

/**
 *
 * @param {Godofor[]} gods
 * @returns {Godofor[]}
 */

function getWinner(gods) {
  return gods.sort(godSort)
}

function godsMap(line) {
  const [name, powerLevel, kills, deaths] = line.split(" ")
  /** @type {Godofor} */
  const out = {
    name,
    powerLevel: Number(powerLevel),
    deaths: Number(deaths),
    kills: Number(kills),
  }
  return out
}

function run() {
  const input = fs.readFileSync("stdin", "utf8")
  const lines = input.split("\n").slice(1)
  //   console.log(lines)
  //   console.log(input)
  const gods = lines.map(godsMap)
  //console.log(gods)
  const sorted = getWinner(gods)
  // console.log(sorted)
  const winner = sorted[0]
  console.log(winner.name)
}
run()
