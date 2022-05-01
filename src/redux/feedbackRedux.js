/* selectors */
export const getAllFeedback = ({ feedback }) => feedback;

export const getFeedbackById = ({ feedback }, feedbackId) =>
  feedback.find(item => item.id === feedbackId);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
