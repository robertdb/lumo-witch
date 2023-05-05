import styled, { keyframes } from "styled-components";
import { Text } from "../common";

const surprise = keyframes`
  0% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }

`;

const TextAnimate = styled(Text)`
  padding: 0;
  margin: 12px;
  animation-name: ${surprise};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`;

export { TextAnimate }
