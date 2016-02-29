import Button from '../presentation/Button';

const mapStateToProps(state) {
  return {
    color: 'BLUE',
    active_color: state.color
  }
}

export default const BlueButton = connnect(
  mapStateToProps
)(Button);