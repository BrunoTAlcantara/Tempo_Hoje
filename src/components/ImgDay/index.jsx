import P from 'prop-types';
import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import * as Styled from './styles';
import sun from '../../imgs/sol.png';
import moon from '../../imgs/lua.png';

export const ImgDay = ({ data, loading }) => {
  const [imag, setImag] = useState('');

  const isDay = data.current ? data.current.is_day : null;

  useEffect(() => {
    if (isDay === 0 && isDay != 1) {
      setImag(moon);
    }
    if (isDay != 0 && isDay === 1) {
      setImag(sun);
    }
  }, [data]);
  console.log(isDay);
  console.log(imag);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && data) {
    return (
      <div className="App">
        {data.current ? (
          <Styled.Container img={imag} size="huge"></Styled.Container>
        ) : null}
      </div>
    );
  }
};

ImgDay.propTypes = {
  data: P.node.isRequired,
  loading: P.node.isRequired,
};
