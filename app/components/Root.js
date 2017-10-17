import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from './Home';
import Collection from './Collection';
import Cocktails from './Cocktails';
import { fetchCollection, fetchCocktails } from '../reducers';

class Root extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/collection" component={Collection} />
          <Route exact path="/cocktails" component={Cocktails} />
          {/* <Route exact path="/new-collection" component={Students} />
          <Route exact path="/new-cocktail" component={Students} /> */}
        </Switch>
      </HashRouter>
    );
  }

  componentDidMount() {
    this.props.fetchInitialData();
  }
}

// container

const mapDispatch = (dispatch) => {

  return {
    fetchInitialData: function () {
      dispatch(fetchCocktails());
      dispatch(fetchCollection());
    }
  };
};

//connect and export
export default connect(null, mapDispatch)(Root);
