import {connect} from 'react-redux';
import Task from 'components/Task';
import {changeTaskState} from 'actions/actions';

const mapStateToProps = state => ({
  store: state
});

const mapDispatchToProps = dispatch => ({
  onChangeComplete: (id, parentID, obj) => {
    dispatch(changeTaskState(id, parentID, obj));
  }
});

const TaskContainer = connect(mapStateToProps, mapDispatchToProps)(Task);

export default TaskContainer;