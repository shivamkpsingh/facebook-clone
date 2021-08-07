export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch(action.type){
      case "ADD__USER":
          return{
           ...state,
           user:action.user
      };
     default:
         return state
  }
};
export default reducer;