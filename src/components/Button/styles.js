import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Btn = styled.button`
  align-items: center;
  background-color: ${props =>
    props.primary ? Colors.primary : Colors.light};
  border-radius: 8px;
  color: ${props => (props.color ? props.color : Colors.white)};
  display: flex;
  font-size: 18px;
  padding: 12px;
  transition: 0.15s ease-in-out;

  svg {
    margin-left: 12px;
  }

  &:hover {
    filter: brightness(85%);
  }
`;
