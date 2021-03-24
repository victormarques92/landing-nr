import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.div`
  border-top: 1px solid ${Colors.primary};
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
  width: 90%;

  p + p {
    font-size: 12px;
    margin-top: 8px;
  }
`;
