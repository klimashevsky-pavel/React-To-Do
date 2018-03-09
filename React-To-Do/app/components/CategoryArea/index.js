import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Category from 'containers/category-container';
import { Route } from 'react-router-dom';


const Root = styled.div`
  display: flex;
  margin: 1vh 1vw;
  width: 30%;
  background: rgb(235, 235, 235);
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Sub = styled.div`
  margin-left: 1vw;
`;

function renderCategories(array){
  let index = 0;
  if(array.subCategories.length !== 0){
    return(
      array.subCategories.map((item, index) =>            
            <Wrapper key = {item.id}>
              <Route><Category id = {item.id}>{item}</Category></Route>
              <Sub key = {item.id} style={{display: item.displayNested ? 'block' : 'none' }}>{renderCategories(item)}</Sub>
            </Wrapper>
            )
    )
  }
  return;
}


export default class CategoryArea extends PureComponent {

  render() {
    if(this.props.testStore){
      return (
        <Root>
          {this.props.testStore.map((item, index) =>             
            <Wrapper key = {item.id}>
              <Route><Category id = {item.id}>{item}</Category></Route>
              <Sub key = {item.id} style={{display: item.displayNested ? 'block' : 'none' }}>{renderCategories(item)}</Sub>
            </Wrapper>
            
            )}
        </Root>
      );
    }else{
      return (
        <Root>
        </Root>
      );
    }     
  }
}




