import P from 'prop-types';
import * as Styled from './styles';
import night from '../../imgs/luacerta.jpg';
import day from '../../imgs/newday.jpg';
import { AnimationPage } from '../../components/AnimationPage';

import { useEffect, useState } from 'react';

export const Container = ({ children, data }) => {
  const [imag, setImag] = useState('');

  const isDay = data.current ? data.current.is_day : null;

  useEffect(() => {
    if (isDay === 0 && isDay != 1) {
      setImag(night);
    }
    if (isDay != 0 && isDay === 1) {
      setImag(day);
    }
  }, [data]);
  console.log(isDay);
  console.log(imag);

  {
    return <Styled.Container img={imag}>{children}</Styled.Container>;
  }
};
Container.propTypes = {
  children: P.node.isRequired,
  data: P.node.isRequired,
};
