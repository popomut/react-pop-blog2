import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';
import Grid from '@material-ui/core/Grid';
import MainPage from './MainPage';
import MarkdownEditor from './MarkdownEditor';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShowArticle from './ShowArticle';




class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Router>
        <Grid container spacing={1}>
        
          <Grid item xs={1} lg={1}>
          </Grid>

          <Grid item xs={10} lg={10}>




            <Switch>
              <Route  exact path='/' component={MainPage} />
              <Route  exact path='/showArticle/:id' component={ShowArticle} />
              <Route  exact path='/addArticle' component={MarkdownEditor} />

            </Switch>


          </Grid>

          <Grid item xs={1} lg={1}>
          </Grid>

        </Grid>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
