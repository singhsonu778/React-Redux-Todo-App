const visibilityFilter = (state = 'SHOW_ALL', action) => {
    console.log('visibilityFilter reducer...state ' + JSON.stringify(state) + ' action ' + JSON.stringify(action));
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
         return action.filter;
      default:
         return state;
   }
};

export default visibilityFilter;