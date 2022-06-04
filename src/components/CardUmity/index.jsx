import * as Styled from './styles';
import P from 'prop-types';

export const CardUmity = ({ children }) => {
  return <Styled.CardUmity>{children}</Styled.CardUmity>;
};

CardUmity.propTypes = {
  children: P.node.isRequired,
};
