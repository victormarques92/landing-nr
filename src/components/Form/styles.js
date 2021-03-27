import styled from 'styled-components';
import { Colors } from '../../styles';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 40px;
    width: 82%;
  }

  h1 {
    margin-top: 20px;
  }
`;

export const BoxInput = styled.div`
  input {
    border: 1px solid ${Colors.greylight};
    border-radius: 8px;
    font-size: 18px;
    padding: 8px 12px;
    width: 100%;
  }

  p {
    color: ${Colors.danger};
    font-size: 14px;
    margin-top: 4px;
    padding-left: 8px;
  }

  & + div {
    margin-top: 20px;
  }
`;

export const Check = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 10px;

  input {
    margin-right: 12px;
  }

  select {
    border: 1px solid ${Colors.greylight};
    border-radius: 4px;
    font-size: 12px;
    margin: 10px 8px;
    padding: 2px;
  }
`;

export const Env = styled.button`
  align-items: center;
  background-color: ${Colors.primary};
  border-radius: 8px;
  color: ${Colors.white};
  display: flex;
  font-size: 18px;
  justify-content: center;
  margin-top: 20px;
  padding: 12px 16px;
  transition: 0.15s ease-in-out;
  width: 120px;

  &:hover {
    filter: brightness(85%);
  }
`;
