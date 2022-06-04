import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ img }) => css`
    min-width: 100px;
    min-height: 100px;

    background: url(${img}) no-repeat;
  `}
`;
