import React, { useState } from 'react';
import { 
  Container,
  InputWrap,
  Input,
  SearchWrap,
  SearchIcon 
} from './SearchElements';


const Search = () => {
  const [query, setQuery] = useState('');
  const update = (event: React.ChangeEvent<HTMLInputElement>) => {setQuery(event.target.value)}; //update input field

  return (
    <Container>
      <InputWrap>
          <Input type="text" placeholder="Search by name, address" value={query} onChange={update} />
          {/* {query}  */}
          <SearchWrap>
            <SearchIcon />
          </SearchWrap>
      </InputWrap>
    </Container>
  )
}

export default Search;