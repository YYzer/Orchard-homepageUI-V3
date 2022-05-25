import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {
  Container, 
  Wrapper,
  HeaderWrap,
  SwapWrap,
  TextWrap,
  ButWrap,
  H2, 
  H3, 
  H4,
  P,
  CalcIcon,
  CloseIcon,
  SwapIcon,
  ArrowIcon
} from './CalcElements';

const Calculator = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open); //open icon
  const untoggle = () => setOpen(false); //close icon

  const [query, setQuery] = useState(""); //controlled input field
  const update = (e: React.ChangeEvent<HTMLInputElement>) => {setQuery(e.target.value)};

  return (
    <>
    <CalcIcon onClick={toggle} />
      {open &&
      <Container>
        <Wrapper>
          <HeaderWrap>
            <H2>ROI Calculator</H2>
            <CloseIcon onClick={untoggle} />
          </HeaderWrap>
          <H3>SPROUT-USDC LP Staked</H3>
            <SwapWrap>
              <TextWrap>
                <TextField
                  id="outlined"
                  label="Amount"
                  placeholder="0.0"
                  value={query}
                  onChange={update}
                  InputProps={{
                    startAdornment:(
                    <InputAdornment position="start">$</InputAdornment>),
                  }}
                  sx={{width: 250}}
                  size="small"
                  />
                <P>USD</P>
              </TextWrap>
              <SwapIcon />
              <TextWrap>
                <TextField
                  id="outlined"
                  label="Staked LP"
                  defaultValue="0"
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{width: 250}}
                  size="small"
                />
                <P>SPROUT-USDC LP</P>
              </TextWrap>
            </SwapWrap>
            <ButWrap>
              <Button variant="contained">$10</Button>
              <Button variant="contained">$50</Button>
              <Button variant="contained">$100</Button>
              <Button variant="contained">$1000</Button>
            </ButWrap>
          <H4>Staked For</H4>
            <ButWrap>
              <Button variant="contained">1D</Button>
              <Button variant="contained">7D</Button>
              <Button variant="contained">30D</Button>
              <Button variant="contained">1Y</Button>
              <Button variant="contained">5Y</Button>
            </ButWrap>
          <ArrowIcon />
          <H4>ROI AT CURRENT RATES</H4>
          <TextField
            id="outlined"
            label="ROI"
            defaultValue="0.000"
            InputProps={{
              readOnly: true,
              endAdornment:(<InputAdornment position="end">%</InputAdornment>)
            }}
            sx={{width: 250, mb: "0.625rem"}} 
            size="small"
          />
          <TextField
            id="outlined"
            label="Rewards"
            defaultValue="~NaN"
            InputProps={{
              readOnly: true,
              endAdornment:(<InputAdornment position="end">SPROUT</InputAdornment>)
            }}
            sx={{width: 250, mt: "0.625rem" }} 
            size="small"
          />
        </Wrapper>
      </Container>}
    </>
  )
}

export default Calculator;