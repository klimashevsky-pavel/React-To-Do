import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-relative-link";



const Root = styled.div`
  display: flex;
  flex-directon: row;
  font-size: 2vh;
  font-family: Arial;
`;

const ShowDone = styled.input`
  margin: 0 0.5vh ;
`;

const SearchWrapper = styled.div`
  margin-left: 1vw;
  padding: 0.25vh;
  background-color: white;
`;

const Search = styled.input`
  width: 8vw;
  font-size: 1.5vh;
  height: 2vh;
  border: none;
`;

const CancelButton = styled.button`
  border: none;
  height: 2vh;
  width: 2vh;
  font-size: 1.5vh;
  background-color: white;
`;


export default class SearchBar extends PureComponent {

  changeInput(){
    this.props.onChangeInput(this.CategoryInput.value);
  }

  changShowDone(){
    this.props.onChangeShowDone();
  }

  clear(){
    this.CategoryInput.value = '';
    this.props.onChangeInput('');
  }

  render() {
    let categoryId = window.location.pathname.split('/')[1];
    return (
      <Root>
        <ShowDone type = 'checkbox' checked = {this.props.store.showDone} onClick = {this.changShowDone.bind(this)} /> Show done
        <SearchWrapper>
          <Link to = {categoryId + '/filter'}><Search type = 'text' placeholder="Search" 
          onChange = {this.changeInput.bind(this)} innerRef = {(input) => {this.CategoryInput = input;}}/></Link>
          <CancelButton onClick = {this.clear.bind(this)}>X</CancelButton>
        </SearchWrapper>
      </Root>
    );
  }
}


