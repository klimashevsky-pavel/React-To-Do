import {connect} from 'react-redux';
import {addTask} from  'actions/actions';
import AddTask from 'components/AddTask';

const mapStateToProps = state => ({
  store: state
});

const mapDispatchToProps = dispatch => ({
  onAddTask: (taskName, obj) =>{
    dispatch(addTask(taskName,  obj));
  }
});

const AddTaskWrapper = connect(mapStateToProps, mapDispatchToProps)(AddTask);

export default AddTaskWrapper;