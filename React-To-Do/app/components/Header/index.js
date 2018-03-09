import React, { PureComponent } from 'react';
import styled from 'styled-components';
import TopHeader from 'containers/top-header-container';
import CompleteBar from 'containers/complete-bar-container';
import BottomHeader from 'components/BottomHeader';
import { Route, Switch } from 'react-router-dom';



const Root = styled.div`
  height: 25vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(247, 247, 247);
`;

export default class extends PureComponent {
  render() {
    return (
      <Root>
        <Route component = {TopHeader} />
        <Route component = {CompleteBar} />
        <BottomHeader />
      </Root>
    );
  }
}
