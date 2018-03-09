import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import TopHeader from 'components/TopHeader';

const mapStateToProps = state => ({
  store: state.categories
});

const mapDispatchToProps = dispatch => ({
  onUndo: () => {
    dispatch({type: 'UNDO'});
  },

  onRedo: () => {
    dispatch({type: 'REDO'});
  }

});

const TopHeaderContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(TopHeader));

export default TopHeaderContainer;