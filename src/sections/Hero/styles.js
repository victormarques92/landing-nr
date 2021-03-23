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

export const Covid = styled.div`
  background-color: ${Colors.black};
  color: ${Colors.greylight};
  font-size: 14px;
  height: 24px;
  left: -30px;
  padding: 2px;
  position: relative;
  text-align: center;
  top: 22px;
  transform: rotate(-45deg);
  transition: 0.5s ease-in-out;
  width: 126px;

  &:hover {
    color: ${Colors.white};
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  padding-right: 10%;
  padding-left: 10%;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  img {
    width: 180px;
  }
`;

export const Credit = styled.div`
  color: ${Colors.white};
  display:inline-block;
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


div + div{
  margin-left: 20px;
}
`;
