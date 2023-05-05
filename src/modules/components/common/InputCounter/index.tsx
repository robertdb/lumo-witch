import { Button } from "../Button";
import {  Text } from "../Text";
import { Container, ButtonWrapper } from "./styles";


type Props = {
  label: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const InputCounter: React.FC<Props> = ({ label, count, onIncrement, onDecrement }) => 
(<Container>
    <Text>{`${label}: ${count}`}</Text>
    <ButtonWrapper><Button onClick={onDecrement} disabled={count === 0} type="button">-</Button></ButtonWrapper>
    <ButtonWrapper><Button onClick={onIncrement} type="button">+</Button></ButtonWrapper>
  </Container>)

export { InputCounter };