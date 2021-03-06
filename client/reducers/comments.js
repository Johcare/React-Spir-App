//
function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      //return the newstate with new comment

      return [...state,{
          user: action.author,
          text: action.comment
        }
      ];

    case 'REMOVE_COMMENT':
    console.log('REMOVE A COMMENT')
    //WE NEEDDTO RETERN A STATE WITHIUT DELETING A COMMENT
    return [
      // FROM THE STATE WEEWANT TO delete
      ...state.slice(0,action.i),
      ...state.slice(action.i +1)
    ]
      // return state;
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if (typeof action.postId !== 'underfined') {
    return {
      //take the curren t state
      ...state,
      //over ride thiss post wtih a new one
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

export default comments;
