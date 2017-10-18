import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCollection, fetchCocktails, deleteCocktail } from '../reducers';

class Cocktail extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const cocktails = this.props.cocktails;
        return (
            <div>
                <h2>All Cocktails</h2>
                <h3>_______</h3>
                <div className="collection-add">
                    <Link to="/add-cocktail" className="createbtn">Create New Cocktail</Link>
                </div>
                <div className="cocktail-content">
                    <ul className="cocktail-ul">
                        {cocktails.map(cocktail => (
                            <li key={cocktail.id}>
                            <Link to={`/cocktails/${cocktail.id}`} className="cocktail-link">{cocktail.name}</Link>
                            <i className="fa fa-times fa-2x" aria-hidden="true" onClick={() => this.handleClick(cocktail.id)}></i>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchInitialData();
    }

    handleClick(id) {
        this.props.delete(id);
    }
}

//container

const mapStateToProps = (state) => {
    return {
        cocktails: state.cocktails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitialData: function () {
            dispatch(fetchCocktails());
            dispatch(fetchCollection());
        },

        delete: (id) => {
            dispatch(deleteCocktail(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cocktail);
