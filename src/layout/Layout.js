// router
import { BrowserRouter as Router } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <Router>
      {/* <Menu /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </Router>
  )
}

export default Layout
