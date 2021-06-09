import { useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const StyledSearch = styled.div`
& input{
width: 250px;
height: 35px;
padding: 5px;
border: 1px #777 solid;
border-radius: 5px;
}
`;

export default function Search() {
  const [term, setTerm] = useState('')

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/events/search?term=${term}`)
    setTerm('')
  }

  return (
    <StyledSearch>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder='Search Events'
        />
      </form>
    </StyledSearch>
  )
}
