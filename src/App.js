import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'

// Layout
import Layout from './layout/Layout'

// pages
import Home from './pages/Home'
import Registration from './pages/Registration'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Layout>
      <Container>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/registration' component={Registration} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Layout >
  )
}

export default App
