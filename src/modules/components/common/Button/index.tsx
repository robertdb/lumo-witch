import styled from 'styled-components';

type ButtonProps = {
  disabled?: boolean;
  fontSize?: string;
  padding?: string;
  margin?: string;
}

const Button = styled.button<ButtonProps>`
  font-size: ${props => props.fontSize ? props.fontSize : '16px'};
  padding: ${props => props.padding ? props.padding : '8px 16px'};
  margin: ${props => props.margin ? props.margin : '0px'};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: ${props => props.disabled ? 'gray' : '#850e908c'};
  color: white;
  opacity: ${props => props.disabled ? 0.5 : 1};

  &:hover {
    background-color: ${props => props.disabled ? 'gray' : '#850e90'};
  }
`;

export { Button };




