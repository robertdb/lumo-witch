import { PotionCounterState as PotionCounter } from "../../../state-managment/slices/potionCounter";
import { potionTypes } from "../../../constants";


const getDamage = (potions: PotionCounter) => {
  const cleanPotions = cleanEmptyPotions(potions) as PotionCounter;
  const currentPotion  = sortPosionKeys(cleanPotions);
  const comb5 = calculateCombination(currentPotion, 5, []);
  const comb4 = calculateCombination(currentPotion, 4, []);
  console.log(JSON.stringify({potions, comb5, comb4 , currentPotion }))

  const attacks5 = getAttacks(
    [...comb5.combinations, ...flatSinglePotion(comb5.currentPotion)]
  )

  const attacks4 = getAttacks(
    [...comb4.combinations, ...flatSinglePotion(comb4.currentPotion)]
  )
  
  if (getTotalDamage(attacks5) > getTotalDamage(attacks4)) {
    return attacks5;
  }

  return attacks4;
}

const flatSinglePotion = (potions: PotionCounter) => 
  Object.keys(potions)
    .reduce((potionsArr: any, potionKey: any) =>{
      return  (potions[potionKey as potionTypes]  === 2 ? 
        [...potionsArr, ...[{ dim: 1 }, { dim: 1 }]]: [...potionsArr, { dim: 1 }])
    }, [])
      

const getTotalDamage = (attacks: any[]) =>
  attacks.reduce((damageTotal: number, damage): number => damageTotal + damage, 0);

const getAttacks = (attacks: any[]) => attacks.map((attack) => {
  if (attack.dim === 5) {
    return 25;
  }
  if (attack.dim === 4) {
    return 20;
  }
  if (attack.dim === 3) {
    return 10;
  }
  if (attack.dim === 1) {
    return 3;
  }
})

const cleanEmptyPotions = (potions: PotionCounter) => Object.fromEntries(
  Object.entries(potions).filter(([key, value]) => value !== 0)
);


const deleteLastKey = (obj: any): any => {
  const { [Object.keys(obj).pop() as any]: _, ...rest } = obj;
  return rest;
}

const sortPosionKeys = (potions: PotionCounter): PotionCounter => {
const arr = Object.entries(potions).sort((a, b) => b[1] - a[1]);
return Object.fromEntries(arr) as PotionCounter;
}

// Array with Dimension 5
const calculateCombination = (potions: PotionCounter, dim: number, combinations: any[]): any => {
  const potionTypes =  Object.keys(potions);
  const potionDimension = potionTypes.length;
  if (potionDimension < 3)
    return { currentPotion: potions, combinations };

  const info = { match: 0 } as { match: number } & PotionCounter;

  const potion_key_1 = potionTypes[0] as potionTypes;
  if (potions?.[potion_key_1]> 0) {
    info[potion_key_1] = potions[potion_key_1] - 1;
    info.match += 1;
  }

  const potion_key_2 = potionTypes[1] as potionTypes;
  if (potions?.[potion_key_2] > 0) {
    info[potion_key_2] = potions[potion_key_2] - 1;
    info.match += 1;
  }
  const potion_key_3: potionTypes | undefined = potionTypes[2] ? potionTypes[2] as potionTypes : undefined;
  if (potion_key_3 && potions?.[potion_key_3] > 0) {
    info[potion_key_3] = potions[potion_key_3] - 1;
    info.match += 1;
  }

  const potion_key_4: potionTypes | undefined = potionTypes[3] ? potionTypes[3] as potionTypes : undefined;
  if (potion_key_4 && potions?.[potion_key_4] > 0) {
    info[potion_key_4] = potions[potion_key_4] - 1;
    info.match += 1;
  }

  const potion_key_5: potionTypes | undefined = potionTypes[4] ? potionTypes[4] as potionTypes : undefined;
  if (potion_key_5 && potions?.[potion_key_5] > 0) {
    info[potion_key_5] = potions[potion_key_5] - 1;
    info.match += 1;
  }

  const { match, ...restInfo } = info;
  if (match === dim) {

    const currentPotion = cleanEmptyPotions({ ...potions, ...restInfo }) as PotionCounter;
    return calculateCombination(
      currentPotion,
      Object.keys(currentPotion).length,
      [...combinations, { dim }]
    )
  }

  if (match > dim) {

    const currentPotion = cleanEmptyPotions({ ...potions, ...deleteLastKey(restInfo) }) as PotionCounter;
    return calculateCombination(
      currentPotion,
      Object.keys(currentPotion).length,
      [...combinations, { dim }]
    )
  }

  return calculateCombination(potions, dim - 1 > 0 ? dim - 1 : 0, combinations)
}




export { getDamage, cleanEmptyPotions, calculateCombination, getTotalDamage };