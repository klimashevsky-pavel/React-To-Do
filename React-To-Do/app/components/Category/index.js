import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import {addNestedCategory} from 'actions/actions'
import './style.css';


const Root = styled.div`
	display: flex;
	width: 95%;
	height: 5vh;
	min-height: 5vh;
	background: rgb(225, 225, 225);
	border: 1px solid black;
	margin: 2px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const CategoryTextChangeShow = styled.div`
	display: flex;
	height: 100%;
	flex-direction: row;
	align-items: center;
`;

const CategoryShow = styled.button`
	height: 3vh;
	width: 1.5vh;
	margin: 0.5vh;
	background-size: cover;
	background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Tiwaz_rune.svg/2000px-Tiwaz_rune.svg.png);
	background-position: -0.5vh 0;
`;

const RenameInput = styled.input`
	width: 10vw;
	margin: 0.5vh 0.5vh 0.5vh 4.5vh;
	padding: -0.5vh 0 0 1vw;;
	border: 1px solid black;
	font-size: 2vh;
	height: 3vh;
`;

const CategoryText = styled.div`
	height: 3vh;
	font-size: 2vh;
	width: 10vw;
	padding: 0.5vh 0 0 1vw;
	border: 1px solid black;
	margin: 0.5vh;
	overflow: hidden;
`;

const CategoryRename = styled.button`
	height: 3vh;
	width: 3vh;
	border: 1px solid black;
	margin: 0.5vh;
	background-color: rgb(86, 252, 233);
	background-size: 100%;
	background-image: url(http://freevector.co/wp-content/uploads/2010/01/83969-edit-button.png)
`;


const AddDelete = styled.div`
	display: flex;
	height: 100%;
	flex-direction: row;
	align-items: center;
`;

const RenameAccept = styled.button`
	height: 3vh;
	width: 3vh;
	border: 1px solid black;
	margin: 0.5vh;
	background-color: rgb(22, 242, 121);
	background-size: 100%;
	background-image: url(https://cdn3.iconfinder.com/data/icons/buttons/512/Icon_13-512.png)
`;


const AddChildCategoryButton = styled.button`
	height: 3vh;
	width: 3vh;
	border: 1px solid black;
	margin: 0.5vh;
	background-color: rgb(127, 181, 143);
	background-size: 100%;
	background-image: url(http://freevector.co/wp-content/uploads/2009/08/64579-add-button.png)
`;

const DeleteCategoryButton = styled.button`
	height: 3vh;
	width: 3vh;
	border: 1px solid black;
	margin: 0.5vh;
	background-color: rgb(245, 125, 125);
	background-size: 100%;
	background-image: url(https://cdn1.iconfinder.com/data/icons/rcons-line-ios-3/32/trash-512.png)
`;

const ReturnButton = styled.button`
	height: 3vh;
	width: 3vh;
	border: 1px solid black;
	margin: 0.5vh;
	background-color: rgb(102, 237, 230);
	background-size: 100%;
	background-image: url(https://cdn2.iconfinder.com/data/icons/office-extras/512/Folder_Enter-512.png)
`;

export default class Category extends Component {

	removeCategory(){
		this.props.onRemoveCategory(this.props.id, this.props.store);
	}

	rename(){
		this.props.onRenameCategory(this.props.id, this.props.store)
	}
        
	pushNewName(){
		if(this.CategoryInput.value){
			this.props.onRenameAccept(this.props.id, this.CategoryInput.value, this.props.store);
		}
	}

	hideNested(){
		this.props.onHideNested(this.props.id, this.props.store);
	}

	removeTask(){
		this.props.onRemoveTask(window.location.pathname.split('/')[1], +window.location.pathname.split('/')[2], this.props.id, this.props.store);
	}

	addNestedCategory(){
		this.props.onAddNestedCategory(this.props.id, this.props.store);
	}

	render() {
		if(window.location.pathname.indexOf('edit') < 0){
			if(!this.props.children.isRenaming){
				return (
					<Root>
						<NavLink to = {'/' + this.props.id} style={{ textDecoration: 'none', color: 'black' }} 
						activeClassName="selected-category"><CategoryTextChangeShow>
							<CategoryShow onClick = {this.hideNested.bind(this)} style = {{transform: !this.props.children.displayNested ? 'rotate(0deg)' : 'rotate(180deg)'}}></CategoryShow>
							<CategoryText>{this.props.children.name}</CategoryText>
							<CategoryRename onClick = {this.rename.bind(this)} />
						</CategoryTextChangeShow></NavLink>
						<AddDelete>
							<Link to = '/'><DeleteCategoryButton onClick = {this.removeCategory.bind(this)} /></Link>
							<AddChildCategoryButton onClick = {this.addNestedCategory.bind(this)}/>
						</AddDelete>
					</Root>
				);
			}else{
				return(
					<Root>
						<CategoryTextChangeShow>
							<CategoryShow onClick = {this.hideNested.bind(this)} style = {{transform: !this.props.children.displayNested ? 'rotate(0deg)' : 'rotate(180deg)'}}></CategoryShow>
							<RenameInput type = "text" innerRef = {(input) => {this.CategoryInput = input;}}/>
							<RenameAccept onClick = {this.pushNewName.bind(this)} />
						</CategoryTextChangeShow>
						<Link to = '/'><DeleteCategoryButton onClick = {this.removeCategory.bind(this)} /></Link>
					</Root>
				)
			}
		}else{
			return (
					<Root>
						<CategoryTextChangeShow>
							<CategoryShow onClick = {this.hideNested.bind(this)} style = {{transform: !this.props.children.displayNested ? 'rotate(0deg)' : 'rotate(180deg)'}}></CategoryShow>
							<CategoryText>{this.props.children.name}</CategoryText>
						</CategoryTextChangeShow>
						<Link to = {'/' + this.props.id}><ReturnButton onClick = {this.removeTask.bind(this)}/></Link>
					</Root>
				);
			}
	}

}


