import styled from 'styled-components';
import { Colors } from '../../styles';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  margin: 0 auto;
  width: 90%;

  div {
    align-items: center;
    display: flex;

    p {
      color: ${Colors.light};
      font-size: 18px;
    }

    img {
      max-height: 60px;
      margin-left: 16px;
    }
  }
`;
