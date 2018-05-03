import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

import DownloadIcon from '@material-ui/icons/CloudDownload';
import UploadIcon from '@material-ui/icons/CloudUpload';
import RemoveIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

import withStyles from '../Header/toolbar';
import classnames from 'classnames';

function AttachmentsToolbar (props) {

  return (
    <Toolbar disableGutters className={props.classes.toolbar}>
      <IconButton title="Добавить" onClick={props.handleAdd}><UploadIcon/></IconButton>
      <IconButton title="Получить" onClick={props.handleDownload}><DownloadIcon/></IconButton>
      <IconButton title="Удалить" onClick={props.handleDelete}><RemoveIcon/></IconButton>

      <Typography variant="title" color="inherit" className={props.classes.flex}> </Typography>

      {props.closeButton && <IconButton title="Закрыть форму" onClick={props.handleClose}><CloseIcon/></IconButton>}

    </Toolbar>
  );
};

AttachmentsToolbar.propTypes = {

  handleAdd: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleDownload: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  closeButton: PropTypes.bool,

};

export default withStyles(AttachmentsToolbar);

