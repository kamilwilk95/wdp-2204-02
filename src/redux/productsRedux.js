/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);
export const getComparedProducts = ({ products }) =>
  products.filter(item => item.comparing === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const TOGGLE_COMPARING = createActionName('TOGGLE_COMPARING');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');

/* action creators */
export const toggleComparing = payload => ({ type: TOGGLE_COMPARING, payload });
export const toggleCardFavorite = payload => ({type: TOGGLE_CARD_FAVORITE, payload});

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
    default:
      return statePart;
  }
}
