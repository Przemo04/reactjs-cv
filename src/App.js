import React, { Component } from 'react';
import './App.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Sidebar from './sidebar';
import Main from './main';
import Parralax from './parralax';

class App extends Component {
  render() {
    return (
      <div className="App">

				<Grid fluid>
					<Row>
						<Col xs={12} sm={12} md={3} lg={3} >
							<Sidebar />
						</Col>
						<Col xs={12} sm={12} md={9} lg={9} >
							<Main />
						</Col>
					</Row>
					<Row>
							<Parralax />
					</Row>
				</Grid>
      </div>
    );
  }
}

export default App;
