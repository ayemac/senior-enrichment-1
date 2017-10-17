import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Cocktail extends Component {
    render() {
        const cocktails = this.props.cocktails;
        return (
            <div>
                <h2>All Cocktails</h2>
                <h3>_______</h3>
                <div className="cocktail-content">
                    {cocktails.map(cocktail => 
                        <ul className="cocktail-ul">
                            <li><Link to={`/cocktails/${cocktail.id}`} className="cocktail-link">{cocktail.name}</Link></li>
                        </ul>
                    )}
                </div>
            </div>
        );
    }
}

//container

const mapStateToProps = (state) => {
    return {
        cocktails: state.cocktails
    }
}

export default connect(mapStateToProps, null)(Cocktail);
