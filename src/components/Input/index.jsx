import P from 'prop-types';
import * as Styled from './styles';
import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

export const Input = (onKeyPress) => {
  return (
    <Styled.Container
      type="text"
      placeholder="Digite uma cidade"
      onKeyPress={onKeyPress}
    ></Styled.Container>
  );
};
Input.propTypes = {
  onKeyPress: P.func.isRequired,
};
