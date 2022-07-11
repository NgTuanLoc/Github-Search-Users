import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Error = () => {
  return (
    <Container>
      <div>
        <h1>404</h1>
        <h3>Sorry, Page not Found</h3>
        <Link to='/' className='btn'>Back Home</Link>
      </div>
    </Container>
  )
}

const Container = styled.section`
  min-height: 100vh;
  display: grid;  
  place-items: center;  
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`

export default Error