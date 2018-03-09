import {connect} from 'react-redux';
import TaskWrapper from 'components/TaskWrapper';

const mapStateToProps = state =>({
  testStore: state
});

const mapDispatchToProps = dispatch =>({});

const TaskWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(TaskWrapper);

export default TaskWrapperContainer;
