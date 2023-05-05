import styled,  { CSSProperties } from 'styled-components';

type TextProps = {
  fontSize?: string;
  fontWeight?: string;
}

const Text = styled.p<TextProps>`
  font-size: ${props => props.fontSize ? props.fontSize : '24px'};
  padding: 0;
  margin: 12px;
  font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
`;

export { Text };

