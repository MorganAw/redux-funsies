export default const redActions = (state = [], action) => {
  switch (action.type) {
    case 'BUTTON_PRESS':
      return {
        color: 'RED'
      }
    default:
      return state;
  }
};