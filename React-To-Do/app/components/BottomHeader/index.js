import React, { PureComponent } from 'react';
import styled from 'styled-components';
import AddCategory from 'containers/add-category-container';
import AddTask from 'containers/add-task-container';

const Root = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default class extends PureComponent {
  render() {
    return (
      <Root>
        <AddCategory/>
        <AddTask/>
      </Root>
    );
  }
}
