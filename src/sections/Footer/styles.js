import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  width: 90%;

  p {
    margin-top: 10px;
    cursor: pointer;
  }

  p + p {
    cursor: none;
    font-size: 12px;
    margin-top: 8px;
  }
`;

export const Copy = styled.div`
  border-top: 1px solid ${Colors.primary};
  text-align: center;
`;

export const PoliticaModal = styled.div`
  h1 {
    font-size: 28px;
    font-weight: 600;
    border-bottom: 1px solid ${Colors.light};
    margin-bottom: 32px;
    padding-bottom: 8px;
  }

  h4 {
    line-height: 34px;
  }

  p {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 32px;
  }

  span {
    color: ${Colors.greylight};
    font-size: 14px;
  }

  li {
    font-size: 14px;
    line-height: 30px;
  }

  ul {
    margin-bottom: 32px;
  }
`;
