import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DamageState = {
  attacks: number[];
};

type ActionDamage = {
  attacks: number[];
}

// Initial state
const initialState = {
  attacks: []
} as DamageState;



// Actual Slice
const damageSlice = createSlice({
  name: "damage",
  initialState,
  reducers: {
    // Actions
    getAnAttack: (state, action: PayloadAction<ActionDamage>) => ({
      ...state,
      attacks: action.payload.attacks
    }),
  },
});

const { getAnAttack } = damageSlice.actions;

const selectDamageState = (state: { damage: DamageState }) =>
  state?.damage;

  const selectAttacks = (state: { damage: DamageState }) =>
  state.damage.attacks;

export { damageSlice };
// Actions
export { getAnAttack };
// Selector
export { selectDamageState, selectAttacks };
// Reducer
export default damageSlice.reducer


