import styled from 'styled-components';
import bg from '../../images/bg.png';
import Colors from '../../styles/colors';

export const Content = styled.div`
  background-attachment: fixed;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - 100px);
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
  padding: 32px 0;

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

export const Credit = styled.div`
  color: ${Colors.white};
  display: inline-block;
  margin-left: 10px;
  position: relative;
  top: 50px;

  h3 {
    font-size: 17px;
    font-weight: 500;
  }

  h2 {
    font-size: 40px;
    font-weight: 500;
    margin-top: 2px;
  }

  h1 {
    color: ${Colors.primary};
    font-size: 56px;
  }
  span {
    font-size: 10px;
    display: flex;
    margin-left: 14px;

    & + span {
      margin-left: 38px;
    }
  }

  p {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const Invite = styled.div`
  display: flex;
  position: absolute;
  bottom: -50px;

  div + div {
    margin-left: 20px;
  }
`;
