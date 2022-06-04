import P from 'prop-types';
import { Heading } from '../Heading';

export const Dados = ({ data, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!loading && data) {
    return (
      <div className="App">
        {data.location ? (
          <Heading colorDark weight="semiBold" size="xsmall">
            {data.location.name}
          </Heading>
        ) : null}
        {data.current ? (
          <Heading colorDark weight="bold" size="huge">
            {data.current.temp_c}ºC
          </Heading>
        ) : null}
      </div>
    );
  }
};

Heading.propTypes = {
  data: P.node.isRequired,
  loading: P.node.isRequired,
};
