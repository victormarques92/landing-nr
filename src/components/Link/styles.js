import styled from 'styled-components';
import { Colors } from '../../styles';

export const Container = styled.button`
  background-color: transparent;
  color: ${Colors.white};
  font-size: 18px;
  opacity: 0.7;
  transition: 0.15s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
