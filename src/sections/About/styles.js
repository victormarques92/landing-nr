import styled from 'styled-components';
import Colors from '../../styles/colors';
import bg from '../../images/bg-about.jpg';

export const Container = styled.div`
  background-attachment: fixed;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0 200px;
  position: relative;

  &::before {
    content: '';
    background-image: linear-gradient(
      ${Colors.secondary},
      ${Colors.primary}
    );
    top: 0;
    opacity: 0.9;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  h1 {
    font-size: 48px;
    margin-bottom: 32px;
    text-align: center;
  }

  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 32px;

    & + p {
      margin-top: 32px;
    }
  }
`;

export const Content = styled.div`
  color: ${Colors.white};
  margin: 0 auto;
  position: relative;
  width: 90%;
`;
