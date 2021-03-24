import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.div`
  border-top: 1px solid ${Colors.primary};
  margin: 0 auto;
  padding: 20px 0;
  width: 90%;
`;

export const Parceiros = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
`;

export const Content = styled.div`
  border-left: 1px solid ${Colors.greylight};
  padding: 0 20px;
  height: 230px;

  form {
    margin-top: 10px;
  }

  input {
    border: 1px solid ${Colors.greylight};
    border-radius: 4px;
    margin-bottom: 12px;
    padding: 6px;
    width: 100%;
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: flex-end;

  input {
    color: ${Colors.white};
    cursor: pointer;
    justify-content: flex-end;
    background-color: ${Colors.primary};
    border: 1px solid ${Colors.primary};
    margin-bottom: 0;
    transition: 0.15s ease-in-out;
    width: 100px;

    &:hover {
      filter: brightness(85%);
    }
  }
`;

export const Contact = styled.div`
  h2 {
    font-weight: 400;
    line-height: 60px;
  }

  span {
    line-height: 26px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  p {
    cursor: pointer;
  }
`;
