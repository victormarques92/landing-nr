import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.div`
  padding: 60px 0;
  position: relative;

  &::before {
    background-color: ${Colors.white};
    content: '';
    height: 150px;
    left: 0;
    position: absolute;
    top: -72px;
    transform: rotate(-2deg);
    width: 110%;
  }

  h2 {
    color: ${Colors.primary};
    font-size: 36px;
    margin: 0 auto;
    position: relative;
    text-align: center;
    width: 90%;
  }
`;
