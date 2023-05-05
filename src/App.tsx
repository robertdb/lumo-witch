import styled from "styled-components";
import { WitchDamage, PotionForm, Text }from "./modules/components";

const Container = styled.div`
  padding: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const App = () => {
  return (
    <Container>
      <Text fontWeight="600">Choose your combination of potions, the witch needs your help!</Text>
        <Wrapper>
        <PotionForm />
        <WitchDamage/>
      </Wrapper>
    </Container>
  );
}

export default App;
