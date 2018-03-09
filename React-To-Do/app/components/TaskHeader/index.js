import React, { PureComponent } from 'react';
import styled from 'styled-components';


const Root = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(247, 247, 247);
  align-items: center;
`;

const Title = styled.span`
  font-family: Arial;
  margin: 0 2vw;
`;
let subArray;

function searchByID(array, id){
  for(let i = 0; i < array.length; i++){
    if(array[i].id === id){
      subArray = array[i];
    }
    if(array[i].subCategories.length !== 0){
      searchByID(array[i].subCategories, id);
    }
  } 
}

export default class TaskHeader extends PureComponent {

  getTitle() {
    let str = window.location.pathname;
    let array = str.split('/');
    searchByID(this.props.store, array[1]);
    return subArray.tasks[array[2]].taskName;
  }

  render() {
    return (
      <Root>
        <Title>{this.getTitle()}</Title>
      </Root>
    );
  }
}


