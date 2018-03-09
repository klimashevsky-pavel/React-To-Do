import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Task from 'containers/task-container';

const Root = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
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



export default class TaskWrapper extends PureComponent {
  render() {
  	searchByID(this.props.testStore.categories, this.props.id);
    return (
      <Root id = {this.props.id}>
        {subArray.tasks.map((item, index) => { 
          if(item.taskName.indexOf(this.props.testStore.searchValue) >= 0 ){ 
            if(this.props.testStore.showDone || !this.props.testStore.showDone && !item.isDone){

        
            return (<Task key = {index} id = {index} parentID = {subArray.id}>{item}</Task>);
           }
          }
        }
        )}
      </Root>
    );
  }
}

