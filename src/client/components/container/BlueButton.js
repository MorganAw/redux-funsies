import { connect }  from 'react-redux';
import { button_press }   from '../../actions/index';
import Button       from '../presentation/Button';

const mapStateToProps = (state) => {
  return {
    color: 'BLUE',
    active_color: state.color
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (color) => { dispatch(button_press(color)) }
  }
}

const BlueButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default BlueButton;