import styled from 'styled-components';
import { Colors } from '../../styles';

export const Container = styled.div`
  align-items: ${props =>
    props.isVideo ? 'center' : 'baseline'};
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  padding: 60px 0 20px;
  width: 100vw;
  z-index: 9999;

  main {
    background-color: ${Colors.white};
    border-radius: 8px;
    box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
      0px 24px 38px 3px rgb(0 0 0 / 14%),
      0px 9px 46px 8px rgb(0 0 0 / 12%);
    max-height: calc(100vh - 80px);
    overflow-y: auto;
    padding: 32px;
    width: 90%;

    &::-webkit-scrollbar {
      border-radius: 8px;
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 8px;
      background: ${Colors.white};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: ${Colors.light};
    }
  }
`;

export const Close = styled.button`
  align-items: center;
  background-color: transparent;
  display: flex;
  color: ${Colors.light};
  font-size: 32px;
  height: 40px;
  justify-content: center;
  position: fixed;
  right: 16px;
  top: 16px;
  transition: 0.15s ease-in-out;
  width: 40px;

  &:hover {
    filter: brightness(85%);
  }
`;
