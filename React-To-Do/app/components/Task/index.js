import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-relative-link";

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 7vh;
  width: 98%;
  margin: 1%;
  border: 1px solid black;
  background: rgb(225, 225, 225)
`;

const TaskCheckboxAndName = styled.div`
  margin: 0 1vw;
`;

const TaskCheckbox = styled.input`
  margin: 1vw;
`;

const TaskName = styled.span`
  font-family: Arial;
  margin: 1vh 2vw;
`;

const TaskButton = styled.button`
  margin: 2vh 2vw;
  height: 3vh;
  width: 3vh;
  background-size: 100%;
  background-image: url(http://freevector.co/wp-content/uploads/2010/01/83969-edit-button.png);
`;



export default class Task extends PureComponent {
  changeCompleteState(){
    this.props.onChangeComplete(this.props.id, this.props.parentID, this.props.store);
  }

  render() {
    
    return (
      <Root>
        <TaskCheckboxAndName>
          <TaskCheckbox type = 'checkbox' checked = {this.props.children.isDone} onClick = {this.changeCompleteState.bind(this)}/>
          <TaskName>{this.props.children.taskName}</TaskName>
        </TaskCheckboxAndName>
        <Link to = {this.props.id + '/edit'}><TaskButton /></Link>
      </Root>
    );
  }
}

