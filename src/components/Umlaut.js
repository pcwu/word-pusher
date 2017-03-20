import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import './Karten.css';

const style = {
  color: 'white',
};

export default class PopoverExampleSimple extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
        >
        Äß
        </RaisedButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <div className="umlaut-container">
              <MenuItem primaryText="Ä" style={style} />
              <MenuItem primaryText="Ö" style={style} />
              <MenuItem primaryText="Ü" style={style} />
              <MenuItem primaryText="ä" style={style} />
              <MenuItem primaryText="ö" style={style} />
              <MenuItem primaryText="ü" style={style} />
              <MenuItem primaryText="ß" style={style} />
            </div>
          </Menu>
        </Popover>
      </div>
    );
  }
}
