import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import TaskEditContent from 'components/TaskEditContent'
import TaskHeader from 'containers/task-header-container';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

`;

export default class TaskApp extends PureComponent {
  render() {
    return (
      <Root>
        <TaskHeader />
        <Route  component={TaskEditContent} />
      </Root>
    );
  }
}


