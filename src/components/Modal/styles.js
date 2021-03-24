import styled from 'styled-components';
import { Colors } from '../../styles';

export const Container = styled.div`
  align-items: baseline;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  padding: ${props => !props.isVideo && '60px 0 20px'};
  width: 100vw;
  z-index: 9999;

  button {
    align-items: center;
    background-color: transparent;
    display: flex;
    color: orange;
    font-size: 32px;
    height: 40px;
    justify-content: center;
    position: fixed;
    right: 16px;
    top: 16px;
    width: 40px;
  }

  main {
    background-color: ${Colors.white};
    width: 90%;
    padding: 32px;
    border-radius: 8px;
    max-height: calc(100vh - 80px);
    overflow-y: auto;

    &::-webkit-scrollbar {
      border-radius: 8px;
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 8px;
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: #888;
    }
  }
`;
