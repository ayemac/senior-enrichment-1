import axios from 'axios';

//action type
const GET_COLLECTION = 'GET_COLLECTION';
const GET_COCKTAILS = 'GET_COCKTAILS';
const CREATE_COLLECTION = 'CREATE_COLLECTION'

//action creator
export const getCollection = (collection) => ({type: GET_COLLECTION, collection})
export const getCocktails = (cocktails) => ({type: GET_COCKTAILS, cocktails})
export const createCollection = (collection) => ({type: CREATE_COLLECTION, collection})

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

export const deleteCollection = (id) => dispatch =>
    axios.delete(`api/collection/${id}`)
    .then(res => res.data)
    .then(collection => dispatch(getCollection(collection)))
    .catch(console.error)


export const addCollection = (collection, history) => dispatch =>
    axios.post('api/collection', collection)
    .then(res => res.data)
    .then(collections => {
      dispatch(getCollection(collections));
      history.push('/collection')
    })
    .catch(console.error)

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
