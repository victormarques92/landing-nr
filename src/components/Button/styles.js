import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Btn = styled.button`
  align-items: center;
  background-color: ${props =>
    props.bg ? props.bg : Colors.primary};
  border-radius: 4px;
  color: ${props => (props.bg ? props.bg : Colors.white)};
  display: flex;
  padding: 10px;

  p {
    margin-right: 12px;
  }
`;
