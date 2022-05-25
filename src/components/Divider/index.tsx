import React from 'react';
import styled from 'styled-components';

export const Line = styled.div`
    background: #fff;
    height: 1px;
    width: 90%;
    opacity: 0.25;
    margin: 1rem 0;
`

const Divider = () => {
  return (
    <Line />
  )
}

export default Divider;