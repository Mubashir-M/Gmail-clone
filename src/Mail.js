import React from 'react';
import './Mail.css'
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArchiveIcon from '@material-ui/icons/Archive';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelIcon from '@material-ui/icons/Label';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';

function Mail() {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);
  
  return (
    <div className = "mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.push('/')}>
            <ArrowBackIcon/>
          </IconButton>
          <IconButton>
            <ArchiveIcon/>
          </IconButton>
          <IconButton>
            <ReportIcon/>
          </IconButton>
          <IconButton>
            <DeleteIcon/>
          </IconButton>
          <IconButton>
            <EmailIcon/>
          </IconButton>
          <IconButton>
            <WatchLaterIcon/>
          </IconButton>
          <IconButton>
            <CheckCircleIcon/>
          </IconButton>
          <IconButton>
            <LabelIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
              <ArrowBackIosIcon className="arrow"/>
            </IconButton>
            <IconButton>
              <ArrowForwardIosIcon className="arrow"/>
            </IconButton>
            <IconButton>
              <KeyboardIcon/>
            </IconButton>
            <IconButton>
              <ExpandMoreIcon/>
            </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelIcon className="mail__important"/>
          <p>{selectedMail?.title}</p>
          <p className="mail__time">{selectedMail?.time}</p>
        </div>
        <div className="mail__message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;