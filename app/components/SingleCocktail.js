import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SingleCocktail extends Component {
    render(){
        const cocktail = this.props.cocktail;
        if (!cocktail) { return null; }

        return (
            <div className="single-cocktail">
                <i className="fa fa-glass fa-3x" aria-hidden="true"></i>
                <p className="cocktail-name">{cocktail.name}</p>
                <h2>Link To Recipe:</h2>
                <a href={cocktail.url} className="recipe-link">{cocktail.url}</a>
                <h2>Current Collection:</h2>
                <Link to={`/collection/${cocktail.collection.id}`} className="collection-link">{cocktail.collection.name}</Link>
            </div>
        )
    }

    
}

const mapStateToProps = (state, ownProps) => {
    const cocktailId = Number(ownProps.match.params.cocktailId);
    if (!state.cocktails) { return undefined }
    return {
        cocktail: state.cocktails.find(cocktail => cocktail.id === cocktailId)
    }
}

export default connect(mapStateToProps, null)(SingleCocktail);
