import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCocktailFromCollection, assignCocktailToCollection } from '../reducers';

class SingleCollection extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const curCollection = this.props.collection;
        const cocktails = this.props.cocktails;
        const allCocktails = this.props.allCocktails;
        if (!curCollection || !cocktails || !allCocktails) { return null; }

        return (
            <div className="single-collection">
                <i className="fa fa-glass fa-3x" aria-hidden="true"></i>
                <h2>{curCollection && curCollection.name}</h2>
                <div className="cocktail-content">
                    <ul className="cocktail-ul">
                        {cocktails && cocktails.map(cocktail => (
                            <li key={cocktail.id}>
                                <Link to={`/cocktails/${cocktail.id}`} className="cocktail-link">{cocktail.name}</Link>
                                <i className="fa fa-times fa-2x" aria-hidden="true" onClick={()=>this.handleClick(cocktail.id)}></i>
                            </li>
                        ))}
                    </ul>
                    <p>Add More Cocktails to This Collection:</p>
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <select name="selectedCocktail" className="select-window">
                            {allCocktails && allCocktails.map(eachCocktail => (
                                <option value={eachCocktail.id} key={eachCocktail.id}>{eachCocktail.name}</option>
                            ))}
                        </select>
                        <div className="form-group">
                            <button type="submit" className="deletebtn">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    handleClick(id) {
        this.props.remove(id);
    }

    handleSubmit(event) {
        this.props.submit(event);
    }


}

const mapStateToProps = (state, ownProps) => {
    const collectionId = Number(ownProps.match.params.collectionId);
    return {
        collection: state.collection.find(collection => collection.id === collectionId),
        cocktails: state.cocktails.filter(cocktail => cocktail.collectionId === collectionId),
        allCocktails: state.cocktails.filter(cocktail => cocktail.collectionId !== collectionId)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        remove: (id) => {
            dispatch(removeCocktailFromCollection(id));
        },

        submit: (event) => {
            event.preventDefault();
            const collectionId = Number(ownProps.match.params.collectionId);
            const cocktailId = Number(event.target.selectedCocktail.value);
            dispatch(assignCocktailToCollection(cocktailId, {collectionId: collectionId}));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCollection);
