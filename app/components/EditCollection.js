import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCollection } from '../reducers';

class EditCollection extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
       
            <div>
                <h2>Edit Collection</h2>
                <h3>_______</h3>
                <div className="collection-add">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="collectionName"
                                placeholder="New Name For Collection"
                            />
                            <input
                                className="form-control"
                                type="text"
                                name="collectionImage"
                                placeholder="New Image URL For Collection"
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="deletebtn">Save</button>
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
            dispatch(editCollection({
                id: Number(ownProps.match.params.collectionId),
                name: event.target.collectionName.value,
                image: event.target.collectionImage.value
            }, ownProps.history))
        }
    }
}

export default connect(null, mapDispatchtoProps)(EditCollection);
