import React from 'react';
import './Mail.css'
import { IconButton } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RefreshIcon from '@material-ui/icons/Refresh';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function Mail() {
  return (
    <div class = "mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton>
            <CheckBoxOutlineBlankIcon/>
          </IconButton>
          <IconButton>
            <ExpandMoreIcon/>
          </IconButton>
          <IconButton>
            <RefreshIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <ArrowBackIosIcon/>
          </IconButton>
          <IconButton>
            <ArrowForwardIosIcon/>
          </IconButton>
          <IconButton>
            <KeyboardIcon/>
          </IconButton>
          <IconButton>
            <ExpandMoreIcon/>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Mail;