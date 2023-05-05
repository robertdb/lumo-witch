import { PotionCounterState as PotionCounter } from "../../../state-managment/slices/potionCounter";
import { potionTypes } from "../../../constants";

const getDamage = (potions: PotionCounter) => {
  const currentPotion = cleanEmptyPotions(potions) as PotionCounter;
  const comb5 = calculateCombination(currentPotion, 5, []);
  const comb4 = calculateCombination(currentPotion, 4, []);
  console.log(JSON.stringify({comb5, comb4, potions }))

  const attacks5 = getAttacks(
    [...comb5.combinations, ...(Object.keys(comb5.currentPotion).map(() => ({ dim: 1 })))]
  )

  const attacks4 = getAttacks(
    [...comb4.combinations, ...(Object.keys(comb4.currentPotion).map(() => ({ dim: 1 })))]
  )

  
  if (getTotalDamage(attacks5) > getTotalDamage(attacks4)) {
    return attacks5;
  }

  return attacks4;
}

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

// Array with Dimension 5
const calculateCombination = (potions: PotionCounter, dim: number, combinations: any[]): any => {
  const potionDimension = Object.keys(potions).length;

  if (potionDimension < 3)
    return { currentPotion: potions, combinations };

  const info = { match: 0 } as { match: number } & PotionCounter;

  if (potions?.[potionTypes.RED] > 0) {
    info[potionTypes.RED] = potions[potionTypes.RED] - 1;
    info.match += 1;
  }

  if (potions?.[potionTypes.BLUE] > 0) {
    info[potionTypes.BLUE] = potions[potionTypes.BLUE] - 1;
    info.match += 1;
  }

  if (potions?.[potionTypes.GREEN] > 0) {
    info[potionTypes.GREEN] = potions[potionTypes.GREEN] - 1;
    info.match += 1;
  }

  if (potions?.[potionTypes.YELLOW] > 0) {
    info[potionTypes.YELLOW] = potions[potionTypes.YELLOW] - 1;
    info.match += 1;
  }

  if (potions?.[potionTypes.GRAY] > 0) {
    info[potionTypes.GRAY] = potions[potionTypes.GRAY] - 1;
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

const getAllCombinations = (potions: PotionCounter, combination = 5) => {
  return Object.entries(potions);
}


export { getDamage, getAllCombinations, cleanEmptyPotions, calculateCombination, getTotalDamage };