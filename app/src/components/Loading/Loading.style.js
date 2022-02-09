import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

const Loading = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${breatheAnimation} 2s linear infinite;
`;

const LoadingContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #ffffffa8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Loading, LoadingContainer };
