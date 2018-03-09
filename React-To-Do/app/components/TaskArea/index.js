import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import TaskWrapper from 'containers/task-wrapper-container';

const Root = styled.div`
  display: flex;
  margin: 1vh 1vw 1vh 0vw;
  width: 65%;
  height: 73vh;
  background: rgb(235, 235, 235);
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

let ArrayOfIds = [];

function pushIds(array){
  array.map((item) =>{
    ArrayOfIds.push(item.id);
    if(item.subCategories[0]){
      pushIds(item.subCategories);
    }

  })
}



export default class TaskArea extends PureComponent {

  render() {
    ArrayOfIds = [];
    pushIds(this.props.testStore);
      return (
        <Root>
          <Switch>
            {ArrayOfIds.map( (item, index) => 
              <Route path ={'/' +  item} id = {item} key ={index}><TaskWrapper id = {item}></TaskWrapper></Route>
            )}
          </Switch>
        </Root>
      );
    }
  }





