import {connect} from 'react-redux';
import TaskArea from 'components/TaskArea';

const mapStateToProps = state => ({
  testStore: state.categories
});

const mapDispatchToProps = dispatch => ({});

const TaskAreaContainer = connect(mapStateToProps, mapDispatchToProps)(TaskArea);

export default TaskAreaContainer;
