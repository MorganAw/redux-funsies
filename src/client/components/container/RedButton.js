import Button from '../presentation/Button';

const mapStateToProps(state) {
  return {
    color: 'RED',
    active_color: state.color
  }
}

export default const RedButton = connnect(
  mapStateToProps
)(Button);