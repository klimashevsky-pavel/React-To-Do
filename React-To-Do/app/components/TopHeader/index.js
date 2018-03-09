import React, { PureComponent } from 'react';
import styled from 'styled-components';
import SearchBar from 'containers/search-bar-container';
import { Route, Switch } from 'react-router-dom';




const Root = styled.div`
  height: 10vh;
  margin: 0 2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(247, 247, 247);
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

const Undo = styled.button`
  height: 3vh;
  width: 3vh;
  margin: 1vh;
  background-size: cover;
  background-image: url(http://www.iconarchive.com/download/i90012/icons8/windows-8/Arrows-Undo.ico);
`;

const Redo = styled.button`
  height: 3vh;
  width: 3vh;
  margin: 1vh;
  background-size: cover;
  background-image: url(https://png.icons8.com/metro/540/redo.png);
`;

const Title = styled.span`
  font-family: Arial;
`;

export default class TopHeader extends PureComponent {
  
  undo(){
    this.props.onUndo();
  }

  redo(){
    this.props.onRedo();
  }

  render() {
    return (
      <Root>
        <Wrapper>
          <Title>To-Do List</Title>
          <div>
            <Undo onClick = {this.undo.bind(this)} />
            <Redo onClick = {this.redo.bind(this)} />
          </div>
        </Wrapper>
        <Route><SearchBar /></Route>
      </Root>
    );
  }
}


