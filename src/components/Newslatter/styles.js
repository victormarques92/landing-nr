import styled from 'styled-components';
import { Colors } from '../../styles';

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

export const Button = styled.button`
  align-items: center;
  background-color: ${Colors.primary};
  border-radius: 8px;
  color: ${Colors.white};
  display: flex;
  font-size: 18px;
  margin-top: 24px;
  padding: 12px 16px;
  transition: 0.15s ease-in-out;

  &:hover {
    filter: brightness(85%);
  }
`;
