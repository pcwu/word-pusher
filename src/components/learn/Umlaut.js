import React, { useState } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import '../../css/Umlaut.css';

const Umlaut = ({ addUmlaut }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState('');

  const handleRequestClose = () => setOpen(false);
  const handleTouchTap = e => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  return (
    <div>
      <RaisedButton onTouchTap={handleTouchTap}>
        Äß
      </RaisedButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        onRequestClose={handleRequestClose}
      >
        <Menu>
          <div className="umlaut-container">
            <MenuItem primaryText="Ä" style={{ color: 'white' }} onClick={() => addUmlaut('Ä')} />
            <MenuItem primaryText="Ö" style={{ color: 'white' }} onClick={() => addUmlaut('Ö')} />
            <MenuItem primaryText="Ü" style={{ color: 'white' }} onClick={() => addUmlaut('Ü')} />
            <MenuItem primaryText="ä" style={{ color: 'white' }} onClick={() => addUmlaut('ä')} />
            <MenuItem primaryText="ö" style={{ color: 'white' }} onClick={() => addUmlaut('ö')} />
            <MenuItem primaryText="ü" style={{ color: 'white' }} onClick={() => addUmlaut('ü')} />
            <MenuItem primaryText="ß" style={{ color: 'white' }} onClick={() => addUmlaut('ß')} />
          </div>
        </Menu>
      </Popover>
    </div>
  );
};

export default Umlaut;
