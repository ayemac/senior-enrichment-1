import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCocktail } from '../reducers';

class EditCocktail extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
       
            <div>
                <h2>Edit Cocktail</h2>
                <h3>_______</h3>
                <div className="collection-add">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="cocktailName"
                                placeholder="New Name For Cocktail"
                            />
                            <input
                                className="form-control"
                                type="text"
                                name="cocktailRecipe"
                                placeholder="New Recipe URL For Cocktail"
                            />
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

//container

const mapDispatchtoProps = (dispatch, ownProps) => {
    return {
        submit: (event) => {
            event.preventDefault();
            dispatch(editCocktail({
                id: Number(ownProps.match.params.cocktailId),
                name: event.target.cocktailName.value,
                url: event.target.cocktailRecipe.value
            }, ownProps.history))
        }
    }
}

export default connect(null, mapDispatchtoProps)(EditCocktail);
