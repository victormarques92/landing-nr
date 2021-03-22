import styled from 'styled-components';
import bg from '../../images/bg.png';

export const Container = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: calc(100vh - 100px);
  width: 100%;
`;
