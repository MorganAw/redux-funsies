export default const blueActions = (state = [], action) => {
  switch (action.type) {
    case 'BUTTON_PRESS':
      return {
        color: action.color
      }
    default:
      return state;
  }
};