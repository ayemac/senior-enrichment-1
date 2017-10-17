import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Collection extends Component {
    render() {
        const collections = this.props.collection;
        return (
            <div>
            <h2>All Collections</h2>
            <h3>_______</h3>
            <div className="collection-content">
                {collections.map(collection => 
                    <div className="collection-grid">
                    <img src={collection.image} className="collection-image" />
                    <Link to={`/collection/${collection.id}`} className="selectbtn">{collection.name} </Link>
                    </div>
                )}
            </div>
            </div>
        );
    }
}

//container

const mapStateToProps = (state) => {
    return {
        collection: state.collection
    }
}

export default connect(mapStateToProps, null)(Collection);
