import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Cont = styled.div`
  display: flex;
  text-align: center;

  @media (max-width: 768px) {
    div {
      font-size: 34px !important;
    }
  }

  div {
    color: ${Colors.primary};
    font-family: 'Goldman', sans-serif;
    font-size: 48px;
    font-weight: 500;
    width: 94px;

    p {
      color: ${Colors.white};
      font-size: 8px !important;
      margin-top: -6px !important;
      opacity: 0.4;
    }

    & + div {
      margin-left: 32px;
    }
  }
`;
