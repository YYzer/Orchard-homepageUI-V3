import React from 'react'
import { Link } from "react-router-dom";
import {
  Container, 
  CardWrap,
  CardWrap2,
  Wrap,
  TextWrap, 
  TextWrap2,
  H2, 
  P,
  CardH2, 
  CardP,
  BtnWrap,
  Button
} from './FarmCardElements'
  
const FarmCard = () => {
  return (  
  <Container>
      <CardWrap>
        <TextWrap>
          <H2>Farming</H2>
          <P>Stake liquidity pool tokens to earn rewards in OrchardSwap</P>
          <P>TVL: $114.2M</P>
        </TextWrap>
        <CardWrap2>
          <CardH2>Sprout to Harvest</CardH2>
          <Wrap>
          <TextWrap2>
          <CardP>0 tokens</CardP>
          <CardP>$0.00</CardP>
          </TextWrap2>
          <BtnWrap>
          <Link to="./harvest" style={{textDecoration: 'none'}}> 
            <Button>
              Harvest All
            </Button>
          </Link>
          </BtnWrap>
          </Wrap>
        </CardWrap2>
      </CardWrap>
  </Container>
  )
};

export default FarmCard;