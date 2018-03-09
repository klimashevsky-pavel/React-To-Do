let subArray = [];
let deleted = false;
let sub;

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

function deleteCategory(array, id) {
  if(deleted){
    return;
  }
  for(let i = 0; i < array.length; i++){
    if(array[i].id === id){
      array.splice(i, 1);
      deleted = true;
      return;
    }
    if(array[i].subCategories.length !== 0){
      deleteCategory(array[i].subCategories, id);
    }
  }  
}


export const addTask = (taskName, obj) => (dispatch) => {
  let tempArr = obj.categories.slice();
  let path = '' + window.location.pathname.slice(1);
  if(path){
    searchByID(tempArr, path);
    sub = subArray;
    sub.tasks.unshift({
      taskName: taskName,
      isDone: false,
      description: '' 
    });
    dispatch({type: 'CHANGE_CATEGORIES', payload: tempArr});
  }

}

export const addCategory = (categoryName, obj) => (dispatch) => {
  let tempArr = obj.categories.slice();
  let category = {
    name: categoryName,
    id: Date.now().toString(),
    isRenaming: false,
    hasChildren: false,
    subCategories: [],
    displayNested: true,
    tasks: []
  }
  tempArr.unshift(category);
  dispatch({type: 'CHANGE_CATEGORIES', payload: tempArr});
  
}

export const addNestedCategory = (id, obj) => (dispatch) =>{
  let category = {
    name: 'New Category',
    id: Date.now().toString(),
    isRenaming: true,
    hasChildren: false,
    subCategories: [],
    displayNested: true,
    tasks: []
  }
  let tempArr = obj.categories.slice();
  searchByID(tempArr, id);
  let sub = subArray;
  sub.subCategories.unshift(category);
  dispatch({type: 'CHANGE_CATEGORIES', payload: tempArr});
}

export const removeCategory = (id, obj) => (dispatch) => {
  let tempArr = obj.categories.slice();
  deleted = false;
  deleteCategory(tempArr, id);
  dispatch({type: 'CHANGE_CATEGORIES', payload: tempArr});

}

export const renameCategory = (id, obj) => (dispatch) => {
  let tempArr = obj.categories.slice();
  searchByID(tempArr, id);
  sub = subArray;
  sub.isRenaming = true;
  dispatch({type: 'RENAME_CATEGORY', payload: tempArr});
}

export const acceptRename = (id, newName, obj) => (dispatch) => {
  let tempArr = obj.categories.slice();
  searchByID(tempArr, id);
  sub = subArray;
  sub.isRenaming = false;
  sub.name = newName;
  dispatch({type: 'CHANGE_CATEGORIES', payload: tempArr});
}

export const removeTask = (oldId, taskIndex, newId, obj) => (dispatch) => {
  let tempArr = obj.categories.slice();
  searchByID(tempArr, oldId);
  sub = subArray;
  let removed = sub.tasks.splice(taskIndex, 1);
  searchByID(tempArr, newId);
  sub = subArray;
  sub.tasks = removed.concat(sub.tasks);
  dispatch({type: 'CHANGE_CATEGORIES', payload: tempArr});
}

export const hideNested = (id, obj) => (dispatch) =>{
  let tempArr = obj.categories.slice();
  searchByID(tempArr, id);
  sub = subArray;
  sub.displayNested = !sub.displayNested;
  dispatch({type: 'CHANGE_CATEGORIES', payload: tempArr});
}

export const changeTaskState = (id, parentID, obj) => (dispatch) => {
  let tempArr = obj.categories.slice();
  searchByID(tempArr, parentID);
  sub = subArray;
  sub.tasks[id].isDone = !sub.tasks[id].isDone;
  dispatch({type: 'CHANGE_CATEGORIES', payload: tempArr});
}

export const changeTask = (categoryID, taskIndex, taskName, isDone, description, obj) => (dispatch) =>{
  let tempArr = obj.categories.slice();
  searchByID(tempArr, categoryID);
  sub = subArray;
  if(taskName){
    sub.tasks[taskIndex].taskName = taskName;
  }
  if(description){
    sub.tasks[taskIndex].description = description;
  }
  sub.tasks[taskIndex].isDone = isDone;
  dispatch({type: 'CHANGE_CATEGORIES', payload: tempArr});
}