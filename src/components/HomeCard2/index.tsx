import React from 'react';
import Icon1 from '../../assets/images/stake.svg';
import Icon2 from '../../assets/images/farm.svg';
import Icon3 from '../../assets/images/swap.svg';
import Icon4 from '../../assets/images/orchardswap.svg';
import {
  CardContainer, 
  CardWrapper,
  CardCard,
  CardIcon,
  CardH1,
  CardH2,
  CardH3,
  CardP,
} from './CardElements';

const HomeEcoCard = () => {
  return (
    <CardContainer>
      <CardH1>The Orchard Ecosystem</CardH1>
      <CardH3>By farmers, for farmers. With low fees and high impact APRs, our DeFi services provide everything you need in a few clicks</CardH3>
      <CardWrapper>
        <CardCard>
          <CardIcon src={Icon1} />
          <CardH2>Orchard Indices</CardH2>
          <CardP>
            Get exposure to the best assets without day-to-day hassle in monitoring. 
            Our index fund is professionally managed by our asset managers.
          </CardP>
        </CardCard>

        <CardCard>
          <CardIcon src={Icon2} />
          <CardH2>Orchard Earn</CardH2>
          <CardP>
            Put your tokenised index in action and earn passive income. 
            Deposit them in different farm pools or borrow/lend vaults to earn amazing rewards!
          </CardP>
        </CardCard>

        <CardCard>
          <CardIcon src={Icon3} />
          <CardH2>Orchard Trade</CardH2>
          <CardP>
            Powered by Polygon Matic. 
            Swap between crypto assets on our OrchardSwap in a secure and permissionless manner.
          </CardP>
        </CardCard>

        <CardCard>
          <CardIcon src={Icon4} />
          <CardH2>Fiat to Crypto</CardH2>
          <CardP>
            Need some crypto tokens to get started?
            Buy crypto coins directly with your bank account or credit card easily.
          </CardP>
        </CardCard>
      </CardWrapper>
    </CardContainer>
  );
};

export default HomeEcoCard;
