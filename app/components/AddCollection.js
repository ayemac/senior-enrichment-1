import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCollection } from '../reducers';

class AddCollection extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h2>New Collection</h2>
                <h3>_______</h3>
                <div className="collection-add">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="collectionName"
                                placeholder="Enter collection name"
                            />
                            <input
                                className="form-control"
                                type="text"
                                name="collectionImage"
                                placeholder="Enter collection image URL"
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
            dispatch(addCollection({
                name: event.target.collectionName.value,
                image: event.target.collectionImage.value
            }, ownProps.history))
        }
    }
}

export default connect(null, mapDispatchtoProps)(AddCollection);
