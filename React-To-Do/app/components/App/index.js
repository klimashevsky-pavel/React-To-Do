import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import Content, { Root as ContentRoot } from 'components/Content';


const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  & ${ContentRoot} {
    flex-grow: 1;
  }
`;

export default class App extends PureComponent {
  render() {

    return (
      <Root>
        <Route  component={Header} />
        <Route  component={Content} />
      </Root>
    );
  }
}


