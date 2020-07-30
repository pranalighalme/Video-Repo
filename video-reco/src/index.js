// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// serviceWorker.unregister();

import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Notfound from './notfound'
import VideoPage from './VideoPage';
import ShowCamera from './ShowCamera';
const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/video-open" component={VideoPage} />
        <Route component={Notfound} />

      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
