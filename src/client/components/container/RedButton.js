import { connect }        from 'react-redux';
import { button_press }   from '../../actions/index';
import Button             from '../presentation/Button';

const mapStateToProps = (state) => {
  return {
    color: 'RED',
    active_color: state.color
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (color) => { dispatch(button_press(color)) }
  }
}

const RedButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default RedButton;