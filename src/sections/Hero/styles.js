import styled, { keyframes } from 'styled-components';
import bg from '../../images/bg.png';
import Colors from '../../styles/colors';

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
`;

export const Content = styled.div`
  align-items: baseline;
  background-attachment: fixed;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  height: calc(100vh - 100px);
  padding-top: 120px;
  position: relative;
  width: 100%;
`;

export const Covid = styled.button`
  background-color: ${Colors.black};
  color: ${Colors.white};
  font-size: 14px;
  height: 24px;
  left: -32px;
  opacity: 0.7;
  padding: 2px;
  position: absolute;
  text-align: center;
  top: 22px;
  transform: rotate(-45deg);
  transition: 0.15s ease-in-out;
  width: 140px;
  z-index: 1;

  &:hover {
    cursor: pointer;
    font-size: 16px;
    height: 32px;
    opacity: 1;
    padding: 6px;
    top: 20px;
  }
`;

export const CovidModal = styled.div`
  h1 {
    font-size: 28px;
    font-weight: 600;
    border-bottom: 1px solid ${Colors.light};
    margin-bottom: 32px;
    padding-bottom: 8px;
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
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 32px 5%;
  position: absolute;
  top: 0;
  width: 100%;

  img {
    max-height: 56px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    button + button {
      margin-left: 32px;
    }
  }
`;

export const Container = styled.div`
  align-items: center;
  color: ${Colors.white};
  display: flex;
  margin: 0 auto;
  padding-top: 24px;
  width: 90%;

  div {
    h3 {
      font-size: 20px;
      font-weight: 500;
    }

    h2 {
      font-size: 36px;
      font-weight: 600;
    }

    h4 {
      font-size: 38px;
      font-weight: 600;
      margin-top: 12px;
      max-width: 660px;
      width: 100%;
    }

    h6 {
      font-size: 16px;
      text-align: center;
    }

    & > p {
      font-size: 14px;
      margin-top: 12px;
      max-width: 710px;
      width: 100%;
    }
  }
`;

export const Invite = styled.div`
  display: flex;
  margin-top: 28px;

  a {
    margin-left: 24px;
  }
`;

export const Next = styled.button`
  align-items: center;
  animation: ${bounce} 1s linear infinite;
  background-color: transparent;
  bottom: 0;
  color: ${Colors.white};
  display: flex;
  font-size: 60px;
  height: 60px;
  justify-content: center;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 60px;
`;
