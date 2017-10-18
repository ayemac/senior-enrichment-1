import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SingleCollection extends Component {
    render(){
        const collection = this.props.collection;
        const cocktails = this.props.cocktails;

        return (
            <div className="single-collection">
                <i className="fa fa-glass fa-3x" aria-hidden="true"></i>
                <h2>{collection && collection.name}</h2>
                <div className="cocktail-content">
                <ul className="cocktail-ul">
                    {cocktails && cocktails.map(cocktail => (
                        <li key={cocktail.id}><Link to={`/cocktails/${cocktail.id}`} className="cocktail-link">{cocktail.name}</Link></li>
                    ))}
                </ul>
                </div>
            </div>
        )
    }

    
}

const mapStateToProps = (state, ownProps) => {
    const collectionId = Number(ownProps.match.params.collectionId);
    return {
        collection: state.collection.find(collection => collection.id === collectionId),
        cocktails: state.cocktails.filter(cocktail => cocktail.collection.id === collectionId)
    }
}

export default connect(mapStateToProps, null)(SingleCollection);
