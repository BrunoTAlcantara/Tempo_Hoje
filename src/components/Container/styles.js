import styled, { css } from 'styled-components';

const time = {
  day: (theme) => css`
    background-image: url(${theme.imgs.day});
  `,
  night: (theme) => css`
    background-image: url(${theme.imgs.night});
  `,
  rain: (theme) => css`
    background-image: url(${theme.imgs.rain});
  `,
};

export const Container = styled.div`
  ${({ img, theme }) => css`
    margin: 0 auto;
    min-height: 100vh;
    max-width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: url(${img}) no-repeat;
    background-repeat: no-repeat;
    background-size: 100%;
  `}
`;
