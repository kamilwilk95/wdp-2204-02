import { connect } from 'react-redux';

import Feedback from './Feedback';

import { getAllFeedback } from '../../../redux/feedbackRedux.js';

const mapState = state => ({
  feedback: getAllFeedback(state),
});

export default connect(mapState)(Feedback);
