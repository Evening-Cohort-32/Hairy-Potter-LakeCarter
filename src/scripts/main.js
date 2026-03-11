// Imports go first
import {makePottery} from './potteryWheel.js'
import { firePottery } from './kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug",3,5)
let vase = makePottery("vase",6,8)
let cup = makePottery("cup",1,4)
let bowl = makePottery("bowl",3,3)
let pot = makePottery("pot",6,6)
// Fire each piece of pottery in the kiln
mug = firePottery(mug,1500)
vase = firePottery(vase,2000)
cup = firePottery(cup,2500)
bowl = firePottery(bowl,2200)
pot = firePottery(pot, 1200)
// Determine which ones should be sold, and their price
cup = toSellOrNotToSell(cup)
vase = toSellOrNotToSell(vase)
mug = toSellOrNotToSell(mug)
bowl = toSellOrNotToSell(bowl)
pot = toSellOrNotToSell(pot)
// Invoke the component function that renders the HTML list
console.log(cup,vase,mug,bowl,pot)