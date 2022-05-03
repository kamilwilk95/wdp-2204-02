/* selectors */
export const getAllProducts = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);
export const getComparedProducts = ({ products }) =>
  products.filter(item => item.comparing === true);


export const getPromoted = ({ products }) =>
  products.filter(item => item.oldPrice !== undefined);


/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const TOGGLE_COMPARING = createActionName('TOGGLE_COMPARING');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const SET_RATING = createActionName('SET_RATING');

/* action creators */
export const toggleComparing = payload => ({ type: TOGGLE_COMPARING, payload });
export const toggleCardFavorite = payload => ({type: TOGGLE_CARD_FAVORITE, payload});
export const setRating = payload => ({ type: SET_RATING, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_COMPARING: {
      let selected = statePart.filter(item => item.comparing === true);
      if (selected.length < 4) {
        return statePart.map(product => (product.id === action.payload) ? { ...product, comparing: !product.comparing } : product );
      } else if (selected.length === 4) {
        return statePart.map(product => (product.id === action.payload) ? { ...product, comparing: false } : product );
      } else {
        return statePart;
      }
    }
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(product => (product.id === action.payload) ? { ...product, isFavorite: !product.isFavorite } : product);
    case SET_RATING:
      return statePart.map(product => (product.id === action.payload.id) ? { ...product,  rating: action.payload.starRating } : product);
    default:
      return statePart;
  }
}
