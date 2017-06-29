import React from 'react';
import { connect } from 'react-redux';
import { currentTeam } from '../../../../selectors/selectors';

class SettingsMenuHeader extends React.Component {

  render() {
    return (
      <span className='settings-menu-header'>
        <span>{this.props.currentTeam.name}</span><i className="fa fa-angle-down" aria-hidden="true"></i>
      </span>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return ({
    currentTeam: currentTeam(state, ownProps)
  });
};

export default connect(
  mapStateToProps,
  null
)(SettingsMenuHeader);
