import styled, { css } from 'styled-components';

const titleSize = {
  xsmall: (theme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
  `,
};
const titleWeight = {
  bold: (theme) => css`
    font-weight: ${theme.font.weight.bold};
  `,
  semiBold: (theme) => css`
    font-weight: ${theme.font.weight.semiBold};
  `,
  regular: (theme) => css`
    font-weight: ${theme.font.weight.regular};
  `,
  thin: (theme) => css`
    font-weight: ${theme.font.weight.thin};
  `,
};

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase, weight }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleWeight[weight](theme)};
    ${titleCase(uppercase)};
  `}
`;
