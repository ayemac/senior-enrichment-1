import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCocktail } from '../reducers';

class AddCocktail extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const collection = this.props.collection;
        if (!collection) { return null }
        return (
            <div>
                <h2>New Cocktail</h2>
                <h3>_______</h3>
                <div className="collection-add">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="cocktailName"
                                placeholder="Enter cocktail name"
                            />
                            <input
                                className="form-control"
                                type="text"
                                name="cocktailRecipe"
                                placeholder="Enter cocktail recipe URL"
                            />
                            <p>Assign to Collection:</p>
                            <select name="selectedValue" className="select-window">
                                {collection && collection.map(curCollection => (
                                    <option value={curCollection.id} key={curCollection.id}>{curCollection.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="smallbtn">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    handleSubmit(event) {
        this.props.submit(event);
    }

}


const mapStateToProps = (state) => {
    if (!state.collection) { return undefined }
    return {
        collection: state.collection
    }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        submit: (event) => {
            event.preventDefault();
            dispatch(addCocktail({
                name: event.target.cocktailName.value,
                url: event.target.cocktailRecipe.value,
                collectionId: event.target.selectedValue.value,
            }, ownProps.history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(AddCocktail);

