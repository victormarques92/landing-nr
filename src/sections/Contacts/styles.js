import styled from 'styled-components';
import Colors from '../../styles/colors';

export const Container = styled.div`
  border-top: 1px solid ${Colors.primary};
  margin: 0 auto;
  padding: 28px 0;
  width: 90%;

  h3 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 12px;
    max-width: 300px;
  }

  & > div {
    & > div {
      & + div {
        border-left: 1px solid ${Colors.light};
        padding: 0 16px;
      }
    }
  }

  a {
    display: block;
    color: ${Colors.greylight};
    transition: 0.15s ease-in-out;

    & + a {
      margin-top: 12px;
    }

    &:hover {
      filter: brightness(70%);
    }
  }
`;

export const Logo = styled.img`
  margin-bottom: 20px;
  max-height: 70px;
`;
