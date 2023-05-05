
import { useAppDispatch, useAppSelector }from "../../state-managment/hooks"; 
import { 
  incrementPotionCounter, 
  decrementPotionCounter, 
  selectPotionConterState,
  restartPotions,
  potionsEmpty 
} from "../../state-managment/slices/potionCounter";
import { getAnAttack} from "../../state-managment/slices/damage";

import { InputCounter, Button } from "../common";
import { potionTypes as types } from "../../constants";
import { Form,SubmitWrapper } from "./styles";
import { getDamage } from "./utils";

const PotionForm = () => {
 const dispatch = useAppDispatch();
  const potions = useAppSelector(selectPotionConterState);
  const isPotionsEmpty = useAppSelector(potionsEmpty);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(getAnAttack({ attacks: getDamage(potions) as number[] }));
  }

  const handleRestart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(restartPotions());
  }
  return (
    <Form onSubmit={handleSubmit }>
      <InputCounter
        label="Red"
        count={potions[types.RED]}
        onIncrement={() => dispatch(incrementPotionCounter({ potionType: types.RED }))}
        onDecrement={() => dispatch(decrementPotionCounter({ potionType: types.RED }))}
      />
       <InputCounter
        label="Blue"
        count={potions[types.BLUE]}
        onIncrement={() => dispatch(incrementPotionCounter({ potionType: types.BLUE }))}
        onDecrement={() => dispatch(decrementPotionCounter({ potionType: types.BLUE }))}
      />
       <InputCounter
        label="Green"
        count={potions[types.GREEN]}
        onIncrement={() => dispatch(incrementPotionCounter({ potionType: types.GREEN }))}
        onDecrement={() => dispatch(decrementPotionCounter({ potionType: types.GREEN }))}
      />
       <InputCounter
        label="Yellow"
        count={potions[types.YELLOW]}
        onIncrement={() => dispatch(incrementPotionCounter({ potionType: types.YELLOW }))}
        onDecrement={() => dispatch(decrementPotionCounter({ potionType: types.YELLOW }))}
      />
       <InputCounter
        label="Gray"
        count={potions[types.GRAY]}
        onIncrement={() => dispatch(incrementPotionCounter({ potionType: types.GRAY }))}
        onDecrement={() => dispatch(decrementPotionCounter({ potionType: types.GRAY }))}
      />
      <SubmitWrapper>
        <Button type="submit"  disabled={isPotionsEmpty} fontSize="28px" margin="0px 8px">Attack!</Button>
        <Button type="button" onClick={handleRestart} disabled={isPotionsEmpty} fontSize="28px">x</Button>
      </SubmitWrapper>
    </Form>
  );
}

export { PotionForm };
