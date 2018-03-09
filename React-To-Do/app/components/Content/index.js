import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import CategoryArea from 'containers/category-area-container';
import TaskArea from 'containers/task-area-container';


export const Root = styled.div`
  display: flex;
  flex-direction: row;
  height: 75vh;
  background-color: rgb(210, 210, 210);
`;

export default class Content extends PureComponent {
  render() {
    
    return (
      <Root>
        <Route component={CategoryArea} />
        <Route component = {TaskArea} />
      </Root>
    );
  }
}

