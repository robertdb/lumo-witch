import { getDamage, cleanEmptyPotions, calculateCombination } from "./damage";
import { potionTypes } from "../../../constants";
import { PotionCounterState as PotionCounter } from "../../../state-managment/slices/potionCounter";


describe("getDamage", () => {
  it("should return damage case 1", () => {
    const potions = {
      [potionTypes.RED]: 2,
      [potionTypes.BLUE]: 1,
      [potionTypes.GREEN]: 1,
      [potionTypes.YELLOW]: 0,
      [potionTypes.GRAY]: 0,
    };
    expect(getDamage(potions)).toEqual([10, 3]);
  });

  it("should return damage case 2", () => {
    const potions = {
      [potionTypes.RED]: 2,
      [potionTypes.BLUE]: 2,
      [potionTypes.GREEN]: 1,
      [potionTypes.YELLOW]: 1,
      [potionTypes.GRAY]: 1,
    };

    expect(getDamage(potions)).toEqual([25, 3, 3]);
  });

  it("should return damage case 3", () => {
    const potions = {
      [potionTypes.RED]: 2,
      [potionTypes.BLUE]: 2,
      [potionTypes.GREEN]: 2,
      [potionTypes.YELLOW]: 1,
      [potionTypes.GRAY]: 1,
    };

    expect(getDamage(potions)).toEqual([20, 20]);
  });

  it("should return damage case 3 different order [2,1,1,2,2]", () => {
    const potions = {
      [potionTypes.RED]: 2,
      [potionTypes.BLUE]: 1,
      [potionTypes.GREEN]: 1,
      [potionTypes.YELLOW]: 2,
      [potionTypes.GRAY]: 2,
    };

    expect(getDamage(potions)).toEqual([20, 20]);
  });

  it("should return damage with only 2 potions", () => {
    const potions = {
      [potionTypes.RED]: 1,
      [potionTypes.BLUE]: 1,
      [potionTypes.GREEN]: 0,
      [potionTypes.YELLOW]: 0,
      [potionTypes.GRAY]: 0,
    };

    expect(getDamage(potions)).toEqual([3, 3]);
  });

  it("should return damage [25, 3, 3]", () => {
    const potions = {
      [potionTypes.RED]: 1,
      [potionTypes.BLUE]: 3,
      [potionTypes.GREEN]: 1,
      [potionTypes.YELLOW]: 1,
      [potionTypes.GRAY]: 1,
    };

    expect(getDamage(potions)).toEqual([25, 3, 3]);
  });

  it("should return damage [3, 3, 3, 3, 3]", () => {
    const potions = {
      [potionTypes.RED]: 0,
      [potionTypes.BLUE]: 5,
      [potionTypes.GREEN]: 0,
      [potionTypes.YELLOW]: 0,
      [potionTypes.GRAY]: 0,
    };

    expect(getDamage(potions)).toEqual([3, 3, 3, 3, 3]);
  });

  it("should delete RED key value", () => {
    const potions = {
      [potionTypes.RED]: 0,
      [potionTypes.BLUE]: 1,
      [potionTypes.GREEN]: 1,
      [potionTypes.YELLOW]: 1,
      [potionTypes.GRAY]: 1,
    } as PotionCounter;

    const result = {
      [potionTypes.BLUE]: 1,
      [potionTypes.GREEN]: 1,
      [potionTypes.YELLOW]: 1,
      [potionTypes.GRAY]: 1,
    } as PotionCounter;
    expect(cleanEmptyPotions(potions)).toEqual(result);
  });

  it("should calculate the combinations with 2 secuence of 5 different types", () => {
    const potions = {
      [potionTypes.RED]: 2,
      [potionTypes.BLUE]: 2,
      [potionTypes.GREEN]: 2,
      [potionTypes.YELLOW]: 2,
      [potionTypes.GRAY]: 2,
    } as PotionCounter;

    expect(calculateCombination(potions, 5, []).currentPotion).toEqual({});

    expect(calculateCombination(potions, 5, []).combinations).toEqual([{ "dim": 5 }, { "dim": 5 }]);
  });

  it("should calculate the combination with 5 types different only once", () => {
    const potions = {
      [potionTypes.RED]: 1,
      [potionTypes.BLUE]: 1,
      [potionTypes.GREEN]: 1,
      [potionTypes.YELLOW]: 1,
      [potionTypes.GRAY]: 1,
    } as PotionCounter;

    expect(calculateCombination(potions, 5, []).currentPotion).toEqual({});

    expect(calculateCombination(potions, 5, []).combinations).toEqual([{ "dim": 5 }]);
  });

  it("should calculate the combination with dim 5", () => {
    const potions = {
      [potionTypes.RED]: 2,
      [potionTypes.BLUE]: 2,
      [potionTypes.GREEN]: 2,
      [potionTypes.YELLOW]: 1,
      [potionTypes.GRAY]: 1,
    } as PotionCounter;

    expect(calculateCombination(potions, 5, []).currentPotion).toEqual({});

    expect(calculateCombination(potions, 5, []).combinations).toEqual([{ "dim": 5 }, { "dim": 3 }]);
  });

  it("should calculate the combination with dim 4", () => {
    const potions = {
      [potionTypes.RED]: 2,
      [potionTypes.BLUE]: 2,
      [potionTypes.GREEN]: 2,
      [potionTypes.YELLOW]: 1,
      [potionTypes.GRAY]: 1,
    } as PotionCounter;

    expect(calculateCombination(potions, 4, []).currentPotion).toEqual({});

    expect(calculateCombination(potions, 4, []).combinations).toEqual([{ "dim": 4 }, { "dim": 4 }]);
  });

  it("should calculate the combination case 1", () => {
    const potions = {
      [potionTypes.RED]: 2,
      [potionTypes.BLUE]: 1,
      [potionTypes.GREEN]: 1,
      [potionTypes.YELLOW]: 0,
      [potionTypes.GRAY]: 0,
    } as PotionCounter;

    expect(calculateCombination(potions, 5, []).currentPotion).toEqual({ [potionTypes.RED]: 1, });

    expect(calculateCombination(potions, 5, []).combinations).toEqual([{ "dim": 3 }]);
  });

});
