import React, { FC, useState } from 'react';
import { Link } from "react-router-dom";
import { Data } from './Data';
import Popup from '../Tooltip';
import Calculator from '../RoiCalculatorModal';
import { 
  AccordionSection,
  Container,
  Wrap,
  ImgWrap,
  TextWrap,
  InputWrap,
  InputWrap2,
  IconWrap,
  Dropdown,
  CardContainer, 
  TextButWrap,
  TextWrap2,
  FooterWrapper,
  FooterWrap,
  FooterWrap2,
  H2, 
  P, 
  CardH2, 
  CardH3,
  CardP,
  Input,
  Button,
  CardButton,
  Img1,
  Img2, 
  ArrowUp,
  ArrowDown,
  ArrowUpRight 
} from './AccordionElements';

interface AccordionProps {
  item?: string;
  id?: number;
  index?: number;
  click?: boolean;
  onClick?: () => void;
}

const Accordion: FC<AccordionProps> = () => {
  const [click, setClick] = useState(-1);
  
  const toggle = index => { //open the click accordion only
    if (click === index) { 
      return setClick(-1);
    }
    setClick(index);
  };
  
  return (
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <ImgWrap>
                    <Img1 src={item.img} />
                    <Img2 src={item.icon} />
                  </ImgWrap>
                  <H2>{item.name}</H2>
                  <TextWrap>
                    <P>Earned</P>
                    <P>{item.earn}</P>
                  </TextWrap>

                  <TextWrap>
                    <P>Liquidity</P>
                    <P>{item.liquidity}</P>
                  </TextWrap>

                  <TextWrap>
                    <IconWrap>
                      <P>APR</P>
                      <Popup />
                    </IconWrap>
                    <IconWrap>
                      <P>{item.apr}</P>
                      <Calculator />
                    </IconWrap>
                  </TextWrap>
                  {click === index ? <ArrowUp /> : <ArrowDown />}
                </Wrap>
                {click === index ? (
                  <Dropdown>
                    <InputWrap>
                      <label htmlFor=""></label>
                      <Input type="text" name="" placeholder="0.0" />
                      <Button>Stake</Button>
                    </InputWrap>

                    <InputWrap2>
                      <label htmlFor=""></label>
                      <Input type="text" name="" placeholder="0.0" />
                      <Button>Unstake</Button>
                    </InputWrap2>
                    
                    <CardContainer>
                      <CardH2>Sprout Earned</CardH2>
                      <TextButWrap>
                        <TextWrap2>
                          <CardH3>0</CardH3>
                          <CardH3>~0</CardH3>
                        </TextWrap2>
                        <Link to="/harvest" style={{textDecoration: 'none'}}> 
                          <CardButton>Harvest</CardButton>
                        </Link>
                      </TextButWrap>
               
                      <FooterWrapper>
                          <FooterWrap>
                            <ArrowUpRight />
                            <CardP>View Contract</CardP>
                          </FooterWrap>
                        {Data.filter(item => Number(item.id)==index+1).map(item => { //compare similar data type
                          return (
                            <FooterWrap2>
                              <ArrowUpRight />
                              <CardP key={item.id}>Get {item.name}</CardP>
                            </FooterWrap2>
                          );
                        })}
                      </FooterWrapper>
                    </CardContainer>
                  </Dropdown>
                ) : null}
            </>
            );
          })}
        </Container>
      </AccordionSection>
  );
};

export default Accordion;