import React from 'react';
import styled from 'styled-components';
import { h1, Button4 } from '../../globalStyles';
import ReactPlayer from 'react-player';

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: #000;
  width: 100%;
  height: auto;
  max-width: 1728px;
  margin: 0 auto;
`
const InfoWrap = styled.div`
  display: grid;
  justify-items: start;
  align-items: start;
  grid-template-columns: 1fr 2.5fr;
  grid-column-gap: 4rem;
  margin-top: 2rem;
`

const VideoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1.25rem;
`

const H1 = styled(h1)`
  color: #fff;
  ${h1};
`

const InfoButton = styled(Button4)`
  ${Button4};
`

const Info = () => {
  return (
    <InfoContainer>
      <H1>How It Works?</H1>
      <InfoWrap>
        <ButtonWrap>
          <InfoButton>1. Connect Wallet to Metamask</InfoButton>
          <InfoButton>2. Navigate to Swap</InfoButton>
          <InfoButton>3. Purchase the required tokens</InfoButton>
          <InfoButton>4. Add liquidity</InfoButton>
          <InfoButton>5. Stake liquidity</InfoButton>
          <InfoButton>6. Harvest rewards</InfoButton>
        </ButtonWrap>
        <VideoWrap>
          <ReactPlayer 
            url='https://youtu.be/uhN4VacqbJU'
            width='750px' 
            height='450px' 
            controls={true}
            playbackRate={1.0}
            volume={1.0}
            loop={false}
            muted={false} 
            playing={false} />
        </VideoWrap>
      </InfoWrap>
    </InfoContainer>
  )
}

export default Info;