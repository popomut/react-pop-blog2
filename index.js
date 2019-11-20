import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';
import Grid from '@material-ui/core/Grid';
import MainPage from './MainPage';
import MarkdownEditor from './MarkdownEditor';


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
        <Grid container spacing={1}>
        
          <Grid item xs={1} lg={2}>
          </Grid>

          <Grid item xs={10} lg={8}>



              <MainPage/>
              <br/>
              <MarkdownEditor/>



          </Grid>

          <Grid item xs={1} lg={2}>
          </Grid>

        </Grid>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
