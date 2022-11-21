import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import QRcode from '../pages/html-qr-code-plugin';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/qrcode" component={QRcode} />
      </Switch>
    </Router>
  )
}

export default Routes