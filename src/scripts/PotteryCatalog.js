let readyToSellPottery = []

export const toSellOrNotToSell = (pottery) =>{
    if (pottery.weight >= 6 && pottery.cracked == false) {
        pottery.price = 40
        readyToSellPottery.push(pottery)
    }
    else if (pottery.weight < 6 && pottery.cracked == false){
        pottery.price = 20
        readyToSellPottery.push(pottery)
    }
return pottery
}

export const usePottery = () =>{
    return structuredClone(readyToSellPottery)
}