import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import CategoryArea from 'containers/category-area-container';
import EditArea from 'containers/edit-area-container';


export const Root = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  background-color: #fac9b8;
`;

export default class TaskEditContent extends PureComponent {
  render() {
    return (
      <Root>
        <Route component={CategoryArea} />
        <Route component = {EditArea} />
      </Root>
    );
  }
}

