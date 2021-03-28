import styled, { css } from 'styled-components';
import Colors from '../../styles/colors';

const styles = css`
  align-items: center;
  background-color: ${props =>
    props.primary ? Colors.primary : Colors.white};
  border-radius: 8px;
  color: ${props =>
    props.primary ? Colors.white : Colors.grey};
  display: flex;
  font-size: 18px;
  padding: 12px 16px;
  transition: 0.15s ease-in-out;

  @media (max-width: 768px) {
    margin: 20px 0;
    span {
      font-size: 12px;
    }
  }

  svg {
    margin-left: 12px;
  }

  &:hover {
    filter: brightness(85%);
  }
`;

export const Container = styled.div`
  a,
  button {
    ${styles}
  }
`;
