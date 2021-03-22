import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  padding: 40px 0;

  h1 {
    font-size: 48px;
    margin-bottom: 32px;
    text-align: center;
  }

  p {
    font-size: 20px;
    line-height: 28px;

    & + p {
      margin-top: 12px;
    }
  }
`;
