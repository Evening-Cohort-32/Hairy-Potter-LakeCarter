let potteryHTML = '';

export const potteryList = (readyToBeSold) =>{
    for (const item of readyToBeSold){
        potteryHTML +=`
        <section class="pottery" id="pottery--1">
            <h2 class="pottery__shape">${item.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${item.weight} grams and is ${item.height} cm in height
            </div>
            <div class="pottery__price">Price is $${item.price}</div>
        </section>
    `
    }
return potteryHTML
}