let genDice = (numDice) => {
    const arr = [];

    for(let i = 1; i <= numDice; i++){
        const roll = Math.ceil(Math.random()*6);
        arr.push(roll)
    }

    return arr
}

const attacker = genDice(process.argv[2]).sort()
const defender = genDice(process.argv[3]).sort();


const compare = (att, def) => {
    let statements = [];
    if(att.length === 1 || def.length === 1){
        if(att[att.length-1] > def[def.length-1]){
            statements.push("Defender loses 1 army")
        } else {
            statements.push("Attacker loses 1 army")
        }
    } else {

        if(att[att.length -2] > def[def.length-2]){
            statements.push("Defender loses 1 army")
        } else {
            statements.push("Attacker loses 1 army")
        }

        if(att[att.length -1] > def[def.length-1]){
            statements.push("Defender loses 1 army")
        } else {
            statements.push("Attacker loses 1 army")
        }
    }
    return statements;
}


console.log({attacker})
console.log({defender})
const comparison = compare(attacker, defender)


comparison.forEach(item => console.log("\x1b[31m", item))