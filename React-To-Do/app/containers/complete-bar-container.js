import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import CompleteBar from 'components/CompleteBar';

const mapStateToProps = state => ({
  store: state.categories
});

const mapDispatchToProps = dispatch => ({
  onChangeInput: (searchValue) => {
    dispatch({type: 'ON_CHANGE_INPUT', payload: searchValue})
  }
});

const CompleteBarContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CompleteBar));

export default CompleteBarContainer;

