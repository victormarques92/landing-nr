import styled from 'styled-components';
import { Colors } from '../../styles';

export const Container = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  z-index: 9998;

  a {
    border-radius: 50%;
    color: ${Colors.primary};
    cursor: pointer;
    display: flex;
    font-size: 28px;
    opacity: 0.7;
    padding: 5px;
    transition: 0.3s ease-in-out;

    &:hover {
      opacity: 1;
    }

    & + a {
      margin-top: 8px;
    }
  }
`;
