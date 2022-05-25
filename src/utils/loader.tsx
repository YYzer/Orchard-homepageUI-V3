import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  width: 100%;
  overflow: hidden;
`

const Loader = () => {
  return (
    <LoaderContainer>
      <CircularProgress color="secondary" size="5rem"/>
    </LoaderContainer>
   )
}

export default Loader;