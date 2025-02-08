import React from 'react'
import styled from 'styled-components'

const Offers = () => {
  return (
    <Wrapper>
    <div className='offer'><h3>Offers are coming soon, Stay Tuned...</h3></div>
    </Wrapper>
  )
}

export default Offers

const Wrapper = styled.section`
.offer{
// display: inline-block;
text-align: center;
margin-top: 150px;
padding: 10px;
background-color: orange;
border-radius: 7px;
}
`