import React, { PureComponent } from 'react';
import styled from 'styled-components';


const Root = styled.div`
  display: inline-block;
  font-size: 2vh;
  font-family: Arial;
  margin: 0 2vw;
`;

const AddTaskField = styled.input`
  width: 15vw;
  margin: 0;
  padding: 0;
  border: 1px solid black;
  font-size: 2vh;
  height: 3vh;
`;

const AddTaskButton = styled.button`
  border: 1px solid black;
  height: 3.2vh;
  width: 3vw;
  font-size: 2vh;
  margin: 0;
  padding: 0;
  background-color: white;
`;
 
export default class AddTask extends PureComponent {
  
  addTask(){
        this.props.onAddTask(this.CategoryInput.value, this.props.store );
        this.CategoryInput.value = '';
  }

  render() {
    return (
      <Root>
        <AddTaskField type = 'text' placeholder="Enter task" innerRef = {(input) => {this.CategoryInput = input;}}/>
        <AddTaskButton onClick = {this.addTask.bind(this)}>Add</AddTaskButton>
      </Root>
    );
  }
}


