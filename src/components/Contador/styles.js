import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Cont = styled.div`
  display: flex;
  text-align: center;

  div {
    color: ${Colors.primary};
    font-family: 'Maven Pro', sans-serif;
    font-size: 56px;
    font-weight: 500;
    width: 94px;

    p {
      color: ${Colors.white};
      font-size: 12px;
      opacity: 0.4;
    }

    & + div {
      margin-left: 32px;
    }
  }
`;