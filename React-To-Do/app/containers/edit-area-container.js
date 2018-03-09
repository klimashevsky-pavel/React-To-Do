import {connect} from 'react-redux';
import EditArea from 'components/EditArea';
import {changeTask} from 'actions/actions';

const mapStateToProps = state => ({
	store: state
});

const mapDispatchToProps = dispatch => ({
  onSaveChanges: (categoryID, taskIndex, taskName, isDone, description, obj ) =>{
    dispatch(changeTask(categoryID, taskIndex, taskName, isDone, description, obj));
  }
});

const EditAreaContainer = connect(mapStateToProps, mapDispatchToProps)(EditArea);

export default EditAreaContainer;