import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({
  children,
  weight = 'bold',
  colorDark = true,
  as = 'h1',
  size = 'big',
  uppercase = false,
}) => {
  return (
    <Styled.Title
      colorDark={colorDark}
      weight={weight}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  weight: P.oneOf(['bold', 'regular', 'semiBold', 'thin']),
  size: P.oneOf(['small', 'medium', 'big', 'huge', 'xsmall']),
  uppercase: P.bool,
};
