import { connect } from 'react-redux';
import Base from './base';

const mapStateToProps = (state) => {
  return ({
    modals: state.modals
  });
}

export default connect(
  mapStateToProps,
  null
)(Base);
