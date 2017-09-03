import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import { fetchUserTeams } from '../../../../actions/team_actions';
import { firstTeam } from '../../../../selectors/selectors';
import SettingsMenuContainer from './settings_menu_container';

class SettingsMenuWrapper extends React.Component {

  componentDidMount() {
    this.props.fetchUserTeams();
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.firstTeam && newProps.firstTeam){
      newProps.history.push(`/messages/${newProps.firstTeam.id}`);
    }
  }

  render() {
    if(this.props.firstTeam){
      return (
        <section>
          <Route path='/messages/:team_id' component={SettingsMenuContainer} />
        </section>
      );
    } else {
      return (
        <section className='settings-menu' >
          <span className='settings-menu-header'>
            <span>Loading...</span><i className="fa fa-angle-down" aria-hidden="true"></i>
          </span>
          <span className='settings-menu-username'>
            <i className="fa fa-circle" aria-hidden="true"></i><span>...</span>
          </span>
        </section>
      );
    }
  }

}

const mapStateToProps = (state) => {
  return({
    firstTeam: firstTeam(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchUserTeams: () => dispatch(fetchUserTeams())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsMenuWrapper));
