import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import Category from 'components/Category';
import {addNestedCategory, removeCategory, renameCategory, acceptRename, removeTask, hideNested } from 'actions/actions';

const mapStateToProps = state => ({
  store: state
});

const mapDispatchToProps = dispatch => ({

  onRemoveCategory: (id, obj) =>{
    dispatch(removeCategory(id, obj));
  },
		
  onRenameCategory: (id, obj) =>{
    dispatch(renameCategory(id, obj));
  },

  onRenameAccept: (id, newName, obj) =>{
    dispatch(acceptRename(id, newName, obj));
  },

  onAddNestedCategory: (id, obj) =>{
    dispatch(addNestedCategory(id, obj));
  },

  onRemoveTask: (oldId, taskIndex, newID, obj) =>{
    dispatch(removeTask(oldId, taskIndex, newID, obj));
  },

  onHideNested: (id, obj) => {
    dispatch(hideNested(id, obj));
  }

})

const CategoryContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));

export default CategoryContainer;


