import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCollection } from '../reducers';

class Collection extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const collections = this.props.collection;
        return (
            <div>
                <h2>All Collections</h2>
                <h3>_______</h3>
                <div className="collection-add">
                <Link to="/add-collection" className="createbtn">Create New Collection</Link>
                </div>
                <div className="collection-content">
                    {collections && collections.map(collection => (
                        <div className="collection-grid" key={collection.id}>
                            <img src={collection.image} className="collection-image" />
                            <Link to={`/collection/${collection.id}`} className="selectbtn">{collection.name}</Link>
                            <button className="deletebtn" onClick={() => this.handleClick(collection.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    handleClick(id){
        this.props.delete(id);
    }

}

//container

const mapStateToProps = (state) => {
    return {
        collection: state.collection
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        delete: (id) => {
            dispatch(deleteCollection(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Collection);
