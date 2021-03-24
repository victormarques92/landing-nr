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

export const Copy = styled.div`
  border-top: 1px solid ${Colors.primary};
  text-align: center;
`;
