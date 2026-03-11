let potteryMade = 0

export const makePottery = (shape,weight,height) => {
    let output = {}
    potteryMade += 1
    output = {
        Shape: shape,
        Weight: weight,
        Hight:height,
        ID:potteryMade
    }
    return output
}