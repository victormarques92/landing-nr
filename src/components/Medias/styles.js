import styled from 'styled-components';
import { Colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  a {
    background-color: ${Colors.greylight};
    border-radius: 50%;
    color: ${Colors.white};
    display: flex;
    font-size: 33px;
    margin-bottom: 14px;
    padding: 5px;
    transition: 0.3s ease-in-out;
    /* position: fixed; */

    &:hover {
      background-color: ${Colors.primary};
      cursor: pointer;
    }
  }
`;
