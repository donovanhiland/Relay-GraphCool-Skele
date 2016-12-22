import React from 'react'
import Relay from 'react-relay'
import ReactDOM from 'react-dom'
import FeedPage from './views/FeedPage'
import { Router, Route, browserHistory, applyRouterMiddleware } from 'react-router'
import useRelay from 'react-router-relay'

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://127.0.0.1:3000/graphql/')
)

const ViewerQueries = {
  viewer: () => Relay.QL`query { viewer }`
}

ReactDOM.render(
  <Router
    forceFetch
    environment={Relay.Store}
    render={applyRouterMiddleware(useRelay)}
    history={browserHistory}
  >

    <Route path='/' component={FeedPage} queries={ViewerQueries} />

  </Router>
  , document.getElementById('root')
)
