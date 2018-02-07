import axios from 'axios';

//action type
const GET_COLLECTION = 'GET_COLLECTION';
const GET_COCKTAILS = 'GET_COCKTAILS';

//action creator
export const getCollection = (collection) => ({ type: GET_COLLECTION, collection })
export const getCocktails = (cocktails) => ({ type: GET_COCKTAILS, cocktails })


//thunk creators

//fetch 
export const fetchCollection = () => dispatch =>
  axios.get('/api/collection')
    .then(res => res.data)
    .then(collection => {
      dispatch(getCollection(collection))
    })
    .catch(console.error)

export const fetchCocktails = () => dispatch =>
  axios.get('/api/cocktails')
    .then(res => res.data)
    .then(cocktails => {
      dispatch(getCocktails(cocktails))
    })
    .catch(console.error)

//delete
export const deleteCollection = (id) => dispatch =>
  axios.delete(`/api/collection/${id}`)
    .then(res => res.data)
    .then(collection => dispatch(getCollection(collection)))
    .catch(console.error)

export const deleteCocktail = (id) => dispatch => {
  axios.delete(`/api/cocktails/${id}`)
    .then(res => res.data)
    .then(cocktails => dispatch(getCocktails(cocktails)))
    .catch(console.error)
}

//add
export const addCollection = (collection, history) => dispatch =>
  axios.post('/api/collection', collection)
    .then(res => res.data)
    .then(collections => {
      dispatch(getCollection(collections));
      history.push('/collection');
    })
    .catch(console.error)

export const addCocktail = (cocktail, history) => dispatch =>
  axios.post('/api/cocktails', cocktail)
    .then(res => res.data)
    .then(cocktails => {
      dispatch(getCocktails(cocktails));
      history.push('/cocktails');
    })
    .catch(console.error)

//reassign
export const assignCocktailToCollection = (cocktailId, collectionId) => dispatch =>
  axios.put(`/api/cocktails/${cocktailId}`, collectionId)
    .then(res => res.data)
    .then(cocktails => {
      dispatch(getCocktails(cocktails));
    })
    .catch(console.error)

export const removeCocktailFromCollection = (cocktailId) => assignCocktailToCollection(cocktailId, { collectionId: null });


//edit
export const editCollection = (reqbody, history) => dispatch => {
  axios.put(`/api/collection/edit/${reqbody.id}`, reqbody)
    .then(res => res.data)
    .then(collections => {
      dispatch(getCollection(collections));
      history.push('/collection');
    })
    .catch(console.error)
}

export const editCocktail = (reqbody, history) => dispatch => {
  axios.put(`/api/cocktails/edit/${reqbody.id}`, reqbody)
    .then(res => res.data)
    .then(cocktails => {
      dispatch(getCocktails(cocktails));
      history.push('/cocktails');
    })
    .catch(console.error)
}


//state
const initialState = {
  collection: [],
  cocktails: []
}


//reducer
const rootReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_COLLECTION:
      return Object.assign({}, state, { collection: action.collection })

    case GET_COCKTAILS:
      return Object.assign({}, state, { cocktails: action.cocktails })

    default: return state
  }
};

export default rootReducer;
