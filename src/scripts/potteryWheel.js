let potteryMade = 0

export const makePottery = (shape,weight,height) => {
    let output = {}
    potteryMade += 1
    output = {
        shape: shape,
        weight: weight,
        hight:height,
        id:potteryMade
    }
    return output
}