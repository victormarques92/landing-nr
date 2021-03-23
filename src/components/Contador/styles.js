import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Cont = styled.div`
  color: ${Colors.primary};
  font-size: 58px;
  font-weight: 600;
  display: inline-block;

  div {
    display: flex;
    color: ${Colors.white};
    font-size: 10px;
  }

  p {
    margin-left: 16px;
    margin-right: 7px;

    & + p {
      margin-left: 44px;
    margin-right: -3px;
    }
  }
`;

