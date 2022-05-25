import React from 'react';
import styled from 'styled-components';
import { h1 } from '../../globalStyles';
import img from '../../assets/images/roadmap.jpg';

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: #000;
  width: 100%;
  max-width: 1728px;
  margin: 0 auto;
`

const H1 = styled(h1)`
  color: #fff;
  ${h1};
`

const Map = styled.img`
  width: 80%;
  height: auto;
  border-radius: 1.875rem;
  margin-bottom: 2.5rem;
`

const RoadMap = () => {
  return (
    <InfoContainer>
      <H1>RoadMap</H1>
      <Map src={img} />
    </InfoContainer>
  )
}

export default RoadMap;