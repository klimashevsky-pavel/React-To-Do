import {cloneDeep} from 'lodash';

let statesHistory = [];
let undoStep = 0;

const InitialState = {
  showDone: true,
  categories: [],
  searchValue: ''
}; 

function setUndoHistory(history, obj){
  if(history.length > 5){
    history.shift();
  }
  history.push(obj);
}

export const reducer = function(state = InitialState, action){
  console.log(statesHistory);
  switch(action.type){

    case 'CHANGE_CATEGORIES':
      console.log('ll');
      statesHistory.splice(statesHistory.length  - undoStep);
      undoStep = 0;
      setUndoHistory(statesHistory, Object.assign({}, _.cloneDeep({
        ...state,
        categories: action.payload
      })));
      return {
        ...state,
        categories: action.payload
      };

      case 'ON_CHANGE_INPUT':
        return {
          ...state,
          searchValue: action.payload
        };

      case 'ON_CHANGE_SHOW_DONE':
        return {
          ...state,
          showDone: !state.showDone
        }

      case 'UNDO':
        
        if(statesHistory[statesHistory.length-2-undoStep]){
          undoStep++;
          return Object.assign({}, _.cloneDeep(statesHistory[statesHistory.length-1-undoStep]));
        }else{
          return state;
        }

      case 'REDO':
        
        if(statesHistory[statesHistory.length-undoStep]){
          undoStep--;
          return Object.assign({}, _.cloneDeep(statesHistory[statesHistory.length-1-undoStep]));
        }else{
          return state
        }

   


    default: return state;
  }
}