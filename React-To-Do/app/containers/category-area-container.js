import {connect} from 'react-redux';
import CategoryArea from 'components/CategoryArea';


const mapStateToProps = state => ({
  testStore: state.categories
});

const mapDispatchToProps = dispatch => ({});

const CategoryAreaContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryArea);

export default CategoryAreaContainer;