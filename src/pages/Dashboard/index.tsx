import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Button } from '../../globalStyles';
import CircularIcon from '../../components/Circularprogress';

const GetButton = styled(Button)`
  ${Button};
`

const Dashboard = () => {
  const getData = () => {
    axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      headers: {'X-CMC_PRO_API_KEY': 'bc63d819-dc0d-4be7-8a39-1551431d34c8'}
    })
    .then(res => {
      var x = JSON.parse(res.request.responseText);
      console.log(x.data); //print all data of crypto tokens
    })
    .catch(error => console.log(error));
  }

  return (
    <>
    <CircularIcon />
    <GetButton onClick={getData}>Get</GetButton>
    </>
  )
}

export default Dashboard;