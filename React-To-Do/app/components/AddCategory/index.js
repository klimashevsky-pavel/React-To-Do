import React, { PureComponent } from 'react';
import styled from 'styled-components';


const Root = styled.div`
  display: inline-block;
  font-size: 2vh;
  font-family: Arial;
  margin: 0 2vw;
`;

const AddCategoryField = styled.input`
  width: 10vw;
  margin: 0;
  padding: 0;
  border: 1px solid black;
  font-size: 2vh;
  height: 3vh;
`;

const AddCategoryButton = styled.button`
  border: 1px solid black;
  height: 3.2vh;
  width: 3vw;
  font-size: 2vh;
  margin: 0;
  padding: 0;
  background-color: white;
`;

export default class AddCaregory extends PureComponent {
  
  pushCategory(){
    if(this.CategoryInput.value){
      this.props.onPushCategory(this.CategoryInput.value, this.props.store);
      this.CategoryInput.value = '';
    }
  }
  
  render() {
    console.log(this);
    return (
      <Root>
        <AddCategoryField type = 'text' placeholder="Enter category title" innerRef = {(input) => {this.CategoryInput = input;}}/>
        <AddCategoryButton onClick = {this.pushCategory.bind(this)}>Add</AddCategoryButton>
      </Root>
    );
  }
}



