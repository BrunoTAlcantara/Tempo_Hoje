import P from 'prop-types';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const DadosSide = ({ data, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!loading && data) {
    return (
      <Styled.DadosSide>
        <div>
          {data.location ? (
            <Heading colorDark weight="thin" size="small">
              Chuva
            </Heading>
          ) : null}
          {data.current ? (
            <Heading colorDark weight="bold" size="small">
              {data.current.precip_mm}%
            </Heading>
          ) : null}
        </div>
        <div>
          {data.location ? (
            <Heading colorDark weight="thin" size="small">
              Umidade
            </Heading>
          ) : null}
          {data.current ? (
            <Heading colorDark weight="bold" size="small">
              {data.current.humidity}%
            </Heading>
          ) : null}
        </div>
        <div>
          {data.location ? (
            <Heading colorDark weight="thin" size="small">
              Sensação Termica
            </Heading>
          ) : null}
          {data.current ? (
            <Heading colorDark weight="bold" size="small">
              {data.current.feelslike_c}ºC
            </Heading>
          ) : null}
        </div>
      </Styled.DadosSide>
    );
  }
};

Heading.propTypes = {
  data: P.node.isRequired,
  loading: P.node.isRequired,
};
