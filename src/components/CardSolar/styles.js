import styled, { css } from 'styled-components';

export const Card = styled.div`
  width: 80rem;
  height: 45rem;
  display: flex;
  padding: 5rem;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.01)
  );

  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
