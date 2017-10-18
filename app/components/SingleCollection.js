import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCocktail, reassignCocktail } from '../reducers';

class SingleCollection extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const collection = this.props.collection;
        const cocktails = this.props.cocktails;
        const allCocktails = this.props.allCocktails;
        if (!collection || !cocktails || !allCocktails) { return null }

        return (
            <div className="single-collection">
                <i className="fa fa-glass fa-3x" aria-hidden="true"></i>
                <h2>{collection && collection.name}</h2>
                <div className="cocktail-content">
                    <ul className="cocktail-ul">
                        {cocktails && cocktails.map(cocktail => (
                            <li key={cocktail.id}>
                                <Link to={`/cocktails/${cocktail.id}`} className="cocktail-link">{cocktail.name}</Link>
                                <i className="fa fa-times fa-2x" aria-hidden="true" onClick={() => this.handleClick(cocktail.id)}></i>
                            </li>
                        ))}
                    </ul>
                    <p>Add More Cocktails to This Collection:</p>
                    <form onSubmit={() => { this.handleSubmit(event) }}>
                        <select name="selectedCocktail" className="select-window">
                            {allCocktails && allCocktails.map(eachCocktail => (
                                <option value={eachCocktail.id} key={eachCocktail.id}>{eachCocktail.name}</option>
                            ))}
                        </select>
                        <div className="form-group">
                            <button type="submit" className="deletebtn">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    handleClick(id) {
        this.props.delete(id);
    }

    handleSubmit(event) {
        this.props.submit(event);
    }


}

const mapStateToProps = (state, ownProps) => {
    const collectionId = Number(ownProps.match.params.collectionId);
    if (!state.collection || !state.cocktails) { return undefined; }

    return {
        collection: state.collection.find(collection => collection.id === collectionId),
        cocktails: state.cocktails.filter(cocktail => cocktail.collection.id === collectionId),
        allCocktails: state.cocktails.filter(cocktail => cocktail.collection.id !== collectionId)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        delete: (id) => {
            //this should be update cocktail
            dispatch(deleteCocktail(id));
        },

        submit: (event) => {
            event.preventDefault();
            const collectionId = Number(ownProps.match.params.collectionId);
            dispatch(reassignCocktail({
                cocktailid: event.target.selectedCocktail.value
            }, collectionId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCollection);
