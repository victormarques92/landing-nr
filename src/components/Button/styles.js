import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Btn = styled.button`
  align-items: center;
  background-color: ${Colors.primary};
  border-radius: 4px;
  color: ${Colors.white};
  display: flex;
  padding: 10px;

  p {
    margin-right: 12px;
  }
`;
