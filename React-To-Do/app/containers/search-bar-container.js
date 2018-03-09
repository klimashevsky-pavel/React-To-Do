import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import SearchBar from 'components/SearchBar';

const mapStateToProps = state => ({
  store: state
});

const mapDispatchToProps = dispatch => ({
  onChangeInput: (searchValue) => {
    dispatch({type: 'ON_CHANGE_INPUT', payload: searchValue})
  },

  onChangeShowDone: () => {
    dispatch({type: 'ON_CHANGE_SHOW_DONE'})
  }
});

const SearchBarContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));

export default SearchBarContainer;