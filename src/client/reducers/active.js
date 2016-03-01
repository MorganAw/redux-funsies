const active = (state = 'BLUE', action) => {
  console.log(action);
  switch (action.type) {
    case 'BUTTON_PRESS':
      return action.color
    default:
      return state;
  }
};

export default active;