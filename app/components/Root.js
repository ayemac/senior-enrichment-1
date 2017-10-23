import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Collection from './Collection';
import Cocktails from './Cocktails';
import SingleCollection from './SingleCollection';
import SingleCocktail from './SingleCocktail';
import AddCollection from './AddCollection';
import AddCocktail from './AddCocktail';
import EditCollection from './EditCollection';
import EditCocktail from './EditCocktail';
import { fetchCollection, fetchCocktails } from '../reducers';

class Root extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/collection" component={Collection} />
              <Route exact path="/cocktails" component={Cocktails} />
              <Route exact path="/collection/:collectionId" component={SingleCollection} />
              <Route exact path="/cocktails/:cocktailId" component={SingleCocktail} />
              <Route exact path="/add-collection" component={AddCollection} />
              <Route exact path="/add-cocktail" component={AddCocktail} />
              <Route exact path="/collection/edit/:collectionId" component={EditCollection} />
              <Route exact path="/cocktails/edit/:cocktailId" component={EditCocktail} />
              <Route component={Home} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }

  componentDidMount() {
    this.props.fetchInitialData();
  }
}

// container

const mapDispatchToProps = (dispatch) => {

  return {
    fetchInitialData: () => {
      dispatch(fetchCocktails());
      dispatch(fetchCollection());
    }
  };
};

//connect and export
export default connect(null, mapDispatchToProps)(Root);
