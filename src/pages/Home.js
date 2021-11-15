import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import logo from '../imgs/logo.png'

const Home = () => {
  return (
    <div className="row p-3 mt-5 justify-content-md-center">
      <img src={logo} alt="logo" />
      <div className="flex flex-grid col-4 p-3">
        <div className="row">
          <div className="col">
            <Nav>
              <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 p-2'>
                <li className='mr-5'>
                  <LinkContainer to='http://acicadubai.com'>
                    <button className="btn btn-success">Conference</button>
                  </LinkContainer>
                </li>
                &nbsp; &nbsp; &nbsp;
                <li className="ml-5">
                  <LinkContainer to='/registration'>
                    <button className="btn btn-success">Registration</button>
                  </LinkContainer>
                </li>
              </ul>
            </Nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home