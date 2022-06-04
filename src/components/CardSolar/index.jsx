import * as Styled from './styles';
import P from 'prop-types';

export const CardSolar = ({ children }) => {
  return <Styled.Card>{children}</Styled.Card>;
};

CardSolar.propTypes = {
  children: P.node.isRequired,
};
