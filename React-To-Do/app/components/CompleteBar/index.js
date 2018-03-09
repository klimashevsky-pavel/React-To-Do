import React, { PureComponent } from 'react';
import styled from 'styled-components';


const Root = styled.div`
  height: 5vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProgressBar = styled.div`
  margin: 0 2vw;
  width: 98vw;
  height: 1vh;
  border: 1px solid black;
  border-radius: 0.5vh;
`;

const CurrentProgress = styled.div`
  width: var(--color);
  background-color: rgb(200, 200, 200);
  height: 100%;
  transition: 0.5s linear;
  transition-property: width, background-color;
  --color: ${props => val+'%'};
`;

let val = 0;
let subArray = [];
let doneArray = [];

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

export default class CompleteBar extends  PureComponent {

  render() {
    val = 0;
    let id = window.location.pathname.split('/')[1];
    searchByID(this.props.store, id);
    if(subArray.tasks){
      doneArray = subArray.tasks.filter(item => item.isDone);
      if(doneArray.length/subArray.tasks.length * 100){
        val = doneArray.length/subArray.tasks.length * 100;
      }
    }
    return (
      <Root>
        <ProgressBar>
          <CurrentProgress/>
        </ProgressBar>
      </Root>
    );
  }
}

