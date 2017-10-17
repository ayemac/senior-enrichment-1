import axios from 'axios';

//action type
const GET_COLLECTION = 'GET_COLLECTION';
const GET_COCKTAILS = 'GET_COCKTAILS';

//action creator
export const getCollection = (collection) => {
  return {
    type: GET_COLLECTION,
    collection
  }
}

export const getCocktails = (cocktails) => {
  return {
    type: GET_COCKTAILS,
    cocktails
  }
}

//thunk creator
export const fetchCollection = () => dispatch =>
   axios.get('api/collection')
    .then(res => res.data)
    .then(collection => {
      dispatch(getCollection(collection))
    })

export const fetchCocktails = () => dispatch => 
    axios.get('api/cocktails')
    .then(res => res.data)
    .then(cocktails => {
      dispatch(getCocktails(cocktails))
    })


//state
const initialState = {
  collection: [],
  cocktails: []
}

const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_COLLECTION:
      return Object.assign({}, state, {collection: action.collection})

    case GET_COCKTAILS:
      return Object.assign({}, state, {cocktails: action.cocktails})

    default: return state
  }
};

export default rootReducer;
