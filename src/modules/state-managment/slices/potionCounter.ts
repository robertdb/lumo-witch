import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { potionTypes } from "../../constants";

export type PotionCounterState = {
  [potionTypes.RED]: number;
  [potionTypes.BLUE]: number;
  [potionTypes.GREEN]: number;
  [potionTypes.YELLOW]: number;
  [potionTypes.GRAY]: number;
};

type ActionCounter = {
  potionType: potionTypes.RED | potionTypes.BLUE | potionTypes.GREEN | potionTypes.YELLOW | potionTypes.GRAY;
}

// Initial state
const initialState = {
  [potionTypes.RED]: 0,
  [potionTypes.BLUE]: 0,
  [potionTypes.GREEN]: 0,
  [potionTypes.YELLOW]: 0,
  [potionTypes.GRAY]: 0,
} as PotionCounterState;



// Actual Slice
const potionCounterSlice = createSlice({
  name: "potionCounter",
  initialState,
  reducers: {
    // Actions
    incrementPotionCounter: (state, action: PayloadAction<ActionCounter>) => ({
      ...state,
      [action.payload.potionType]: state[action.payload.potionType] + 1
    }) ,
    decrementPotionCounter: (state, action: PayloadAction<ActionCounter>) => ({
      ...state,
      [action.payload.potionType]: state[action.payload.potionType] - 1 < 0 ? 0 : state[action.payload.potionType] - 1 
    }),
    restartPotions : (state) => ({
      ...state,
      ...initialState,
    })
  },
});

const { incrementPotionCounter, decrementPotionCounter, restartPotions } = potionCounterSlice.actions;

const selectPotionConterState = (state: { potionCounter: PotionCounterState }) =>
  state?.potionCounter;

const potionsEmpty = (state: { potionCounter: PotionCounterState }) =>
  JSON.stringify(state?.potionCounter) === JSON.stringify(initialState);

export { potionCounterSlice };
// Actions
export { incrementPotionCounter, decrementPotionCounter, restartPotions };
// Selector
export { selectPotionConterState, potionsEmpty };
// Reducer
export default potionCounterSlice.reducer


