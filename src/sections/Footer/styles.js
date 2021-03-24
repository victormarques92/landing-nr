import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  width: 90%;

  p + p {
    font-size: 12px;
    margin-top: 8px;
  }
`;

export const Parceiros = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Apoio = styled.div`
  border-bottom: 1px solid ${Colors.primary};
  display: flex;
  align-items: center;

  p {
    font-size: 20px;
    margin: 20px 0;
  }

  img {
    max-height: 33px;
    margin-left: 10px;
  }
`;

export const Copy = styled.div`
  border-top: 1px solid ${Colors.primary};
  text-align: center;
`;
