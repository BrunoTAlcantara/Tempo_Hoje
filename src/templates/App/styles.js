import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;
export const Section = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SectionInfo = styled.div`
  display: flex;
  justify-content: center;
`;
export const Input = styled.input`
  ${({ theme }) => css`
    font-family: ${theme.font.family.default};
    font-size: ${theme.font.sizes.medium};
    font-weight: bold;
    color: ${theme.colors.primaryColor};
    width: 80rem;
    height: 5rem;
    margin: 2rem;
    outline: none;

    padding: 1rem;
    background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.01)
    );

    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.18);

    ::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }
  `}
`;
