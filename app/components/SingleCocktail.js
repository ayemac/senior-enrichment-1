import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { assignCocktailToCollection } from '../reducers';

class SingleCocktail extends Component {

    render() {
        const cocktail = this.props.cocktail;
        const collection = this.props.collection;
        if (!cocktail) { return null; }

        return (
            <div className="single-cocktail">
                <i className="fa fa-glass fa-3x" aria-hidden="true"></i>
                <p className="cocktail-name">{cocktail.name}</p>
                <Link to={`/cocktails/edit/${cocktail.id}`} className="createbtn">Edit</Link>
                <h2>Link To Recipe:</h2>
                <a href={cocktail.url} className="recipe-link">{cocktail.url}</a>
                <h2>Current Collection:</h2>
                <Link to={`/collection/${cocktail.collection.id}`} className="collection-link">{cocktail.collection.name}</Link>
                <p>Assign this cocktail to a different collection: </p>
                <form onSubmit={(event) => this.props.submit(event)}>
                    <select name="selectedCollection" className="select-window">
                        {collection && collection.filter(collection => collection.id !== cocktail.collectionId).map(eachCollection => (
                            <option value={eachCollection.id} key={eachCollection.id}>{eachCollection.name}</option>
                        ))}
                    </select>
                    <div className="form-group">
                        <button type="submit" className="deletebtn">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    if (!state.cocktails || !state.collection) { return null; }
    const cocktailId = Number(ownProps.match.params.cocktailId);
    return {
        cocktail: state.cocktails.find(cocktail => cocktail.id === cocktailId),
        collection: state.collection
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    const cocktailId = Number(ownProps.match.params.cocktailId);
    return {
        submit: (event) => {
            event.preventDefault();
            const newCollectionId = Number(event.target.selectedCollection.value);
            dispatch(assignCocktailToCollection(cocktailId, {collectionId: newCollectionId}));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCocktail);
