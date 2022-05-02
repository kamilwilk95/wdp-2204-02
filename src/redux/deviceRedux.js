/* selectors */
export const getDevice = ({ device }) => device;

/* action name creator */
const reducerName = 'device';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const WINDOW_RESIZE = createActionName('WINDOW_RESIZE');

/* action creators */
export const windowResize = payload => ({ type: WINDOW_RESIZE, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case WINDOW_RESIZE:
      return action.payload;
    default:
      return statePart;
  }
}
