import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import TaskWrapper from 'components/TaskWrapper';
import { Link } from "react-router-relative-link";

const Root = styled.div`
  display: flex;
  margin: 1vh 1vw 1vh 0vw;
  width: 65%;
  background: rgb(235, 235, 235);
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const Button = styled.button`
  height: 4vh;
  width: 6vw;
  margin: 2vh 1vw;
`;

const InputData = styled.div`
  display: flex;
  font-size: 2vh;
  font-family: Arial;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;

`;

const InputDescription = styled.textarea`
  margin: 1vh 1vw;
  resize: none;
  height: 30vh;
  width: 49vw;
  font-size: 2vh;
`;

const InputDone = styled.input`
  margin: 1vh 1vw;
`;

const InputName = styled.input`
  margin: 1vh 1vw;
  height: 3vh;
  width: 15vw;
  font-size: 2vh;
  font-family: Arial;
`;


export default class EditArea extends PureComponent {

  saveChanges(){
    this.props.onSaveChanges(window.location.pathname.split('/')[1], +window.location.pathname.split('/')[2],
    this.CategoryInput.value, this.Done.checked, this.Description.value, this.props.store);
  }

  render() {
    return (
      <Root>
        <Buttons>
          <Link to = '../../'><Button onClick = {this.saveChanges.bind(this)}>Save</Button></Link>
          <Link to = '../../'><Button>Cancel</Button></Link>
        </Buttons>
        <InputData>
          <InputName type = 'text' placeholder = 'Enter new name' innerRef = {(input) => {this.CategoryInput = input;}}/>
          <div><InputDone type = 'checkbox' innerRef = {(input) => {this.Done = input;}}/>Done</div>
          <InputDescription placeholder = 'Enter description' innerRef = {(input) => {this.Description = input;}}/>
        </InputData>
      </Root>
    );
  }

  
}





