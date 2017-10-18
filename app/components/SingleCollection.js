import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { fetchCollection, fetchCocktails } from '../reducers';
import { deleteCocktail } from '../reducers';

class SingleCollection extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
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
                    <form>
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

    // componentDidMount() {
    //     this.props.fetchInitialData();
    //   }

    handleClick(id) {
        this.props.delete(id);
    }

    // handleSubmit(event) {
    //     this.props.submit(event);
    // }


}

const mapStateToProps = (state, ownProps) => {
    const collectionId = Number(ownProps.match.params.collectionId);
    return {
        collection: state.collection.find(collection => collection.id === collectionId),
        cocktails: state.cocktails.filter(cocktail => cocktail.collectionId === collectionId),
        allCocktails: state.cocktails.filter(cocktail => cocktail.collectionId !== collectionId)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // fetchInitialData: function () {
        //     dispatch(fetchCocktails());
        //     dispatch(fetchCollection());
        //   }
        delete: (id) => {
            //this should be update cocktail
            dispatch(deleteCocktail(id));
        }

        // submit: (event) => {
        //     event.preventDefault();
        //     const collectionId = Number(ownProps.match.params.collectionId);
        //     dispatch(reassignCocktail({
        //         cocktailid: event.target.selectedCocktail.value
        //     }, collectionId));
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCollection);
