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

// const ADD_TO_COMPARING = createActionName('ADD_TO_COMPARING');
// const REMOVE_FROM_COMPARING = createActionName('REMOVE_FROM_COMPARING');

/* action creators */
export const toggleComparing = payload => ({ type: TOGGLE_COMPARING, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_COMPARING:
      return statePart.map(product => (product.id === action.payload) ? { ...product, comparing: !product.comparing } : product );
    default:
      return statePart;
  }
}
