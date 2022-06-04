import { CardSolar } from '../../components/CardSolar';
import { Heading } from '../../components/Heading';
import { Container } from '../../components/Container';

import { Dados } from '../../components/Dados/';

import * as Styled from './styles';
import { useFetch } from '../../hooks/useFetch';
import { useState, useEffect } from 'react';
import { ImgDay } from '../../components/ImgDay';
import { Input, Section, SectionInfo } from './styles';
import { DadosSide } from '../../components/DadosSide';
import { AnimationPage } from '../../components/AnimationPage';

function Home() {
  const [city, setCity] = useState('ituiutaba');

  const url = `http://api.weatherapi.com/v1/current.json?key=ee247ccd93a24801b39191150223005&q=${city}&aqi=no`;
  const { data, loading } = useFetch(url);

  const handleSearchLocation = (event) => {
    if (event.key === 'Enter') {
      console.log('apertei entar');
      setCity(event.target.value);
    }
  };

  return (
    <div className="App">
      <Styled.Wrapper>
        <AnimationPage>
          <Container data={data} loading={loading}>
            <Input
              type="text"
              placeholder="Digite uma cidade"
              onKeyPress={handleSearchLocation}
            ></Input>
            <CardSolar>
              <Section>
                <Dados data={data} loading={loading} />
                <ImgDay data={data} loading={loading}></ImgDay>
              </Section>
              <SectionInfo>
                <DadosSide data={data} loading={loading} />
              </SectionInfo>
            </CardSolar>
          </Container>
        </AnimationPage>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
