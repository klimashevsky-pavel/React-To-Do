import {connect} from 'react-redux';
import TaskHeader from 'components/TaskHeader';

const mapStateToProps = state => ({
  store: state.categories
});

const mapDispatchToProps = dispatch => ({});

const TaskHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(TaskHeader);

export default TaskHeaderContainer;