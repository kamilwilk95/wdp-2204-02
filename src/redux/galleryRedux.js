/* selectors */
export const getAll = ({ galleryCategories }) => galleryCategories;

/* reducer */
const galleryReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default galleryReducer;
