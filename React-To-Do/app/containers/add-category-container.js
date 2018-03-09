import {connect} from 'react-redux';
import {addCategory} from 'actions/actions';
import AddCategory from 'components/AddCategory';

const mapStateToProps = state => ({
  store: state
});

const mapDispatchToProps = dispatch => ({
  onPushCategory: (categoryName, obj) =>{
    dispatch(addCategory(categoryName, obj));
  }
});

const AddCategoryContainer = connect(mapStateToProps, mapDispatchToProps)(AddCategory);
export default AddCategoryContainer;