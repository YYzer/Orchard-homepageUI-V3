import React from 'react'
import styled from 'styled-components';
import DropButton from '../../../components/Dropbutton';
import Search from '../../../components/Search';

const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: 25fr auto 1fr;
  grid-column-gap: 0.5rem;
  justify-items: end;
  align-items: center;
  width: 100%; 
  max-width: 1728px;
  background: #000; 
`

const FarmFilter = () => {
  return (
    <FilterContainer>
      <DropButton />
      <Search />
    </FilterContainer>
  )
}

export default FarmFilter;