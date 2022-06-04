import styled, { css } from 'styled-components';

export const Container = styled.input`
  ${({ theme }) => css`
    font-family: ${theme.font.family.default};
    font-size: ${theme.font.sizes.medium};
    font-weight: bold;
    color: ${theme.colors.primaryColor};
    width: 80rem;
    height: 5rem;
    margin: 2rem;

    padding: 1rem;
    background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.01)
    );

    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.18);
  `}
`;
