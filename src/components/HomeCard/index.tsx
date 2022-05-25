import React from 'react';
import Icon1 from '../../assets/images/basket.svg';
import Icon2 from '../../assets/images/returns.svg';
import Icon3 from '../../assets/images/monitor.svg';
import Icon4 from '../../assets/images/fiat.svg';
import Icon5 from '../../assets/images/vault.svg';
import Icon6 from '../../assets/images/lock.svg';
import HomeEcoCard from '../../components/HomeCard2';
import {
  CardContainer, 
  CardWrapper,
  CardCard,
  CardIcon,
  CardH1,
  CardH3,
} from './CardElements';

const Card = () => {
  return (
    <CardContainer id="services">
      <CardH1>Why Orchard ?</CardH1>
      <CardWrapper>
        <CardCard>
          <CardIcon src={Icon1} />
          <CardH3>Exposure to a diversified basket of top-performing crypto assets</CardH3>
        </CardCard>

        <CardCard>
          <CardIcon src={Icon2} />
          <CardH3>Maximise returns via yield farming with Sprout token</CardH3>
        </CardCard>

        <CardCard>
          <CardIcon src={Icon3} />
          <CardH3>Save hassle in monitoring each crypto asset</CardH3>
        </CardCard>

        <CardCard>
          <CardIcon src={Icon4} />
          <CardH3>Buy with Fiat Currency</CardH3>
        </CardCard>

        <CardCard>
          <CardIcon src={Icon5} />
          <CardH3>Secured Vault for your assets</CardH3>
        </CardCard>

        <CardCard>
          <CardIcon src={Icon6} />
          <CardH3>No Lock in Period</CardH3>
        </CardCard>
      </CardWrapper>
      <HomeEcoCard />
    </CardContainer>
  );
};

export default Card;
