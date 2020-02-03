import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import api from '../../services/Api';

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: '80vw',
    maxWidth: 600,
    backgroundColor: '#fff',
    color: '#5a5c69',
    boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important',
    borderRadius: '0.35rem',
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = async e => {
    e.preventDefault();

    const data = new Date();
    const dateFull = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;

    try {
      if (title.length > 0 && description.length > 0) {
        await api.post(`/recadinhos`, {
          para: title,
          recadinho: description,
          data: dateFull,
        });

        handleClose();
        window.location.reload();
      }
    } catch (err) {
      console.log('Something went Wrong');
    } finally {
      console.log('OK');
    }
  };

  return (
    <div>
      <button id="addFinances" onClick={handleOpen}>
        Mandar Recadinho
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} id="modalBody" className={classes.paper}>
          <h2 id="simple-modal-title">Mandar Recadinho do ❤️</h2>
          <label>
            <span>
              Para<upper>*</upper>
            </span>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="ex: Gabriel Sobreira"
              required
              onChange={e => setTitle(`${e.target.value}`)}
            />
          </label>

          <label>
            <span>
              Recadinho<upper>*</upper>
            </span>
            <textarea
              type="text"
              name="description"
              rows="5"
              value={description}
              placeholder="ex: Tu além de gatão joga massa no racha, quando eu chegar lá a gente joga junto"
              required
              onChange={e => setDescription(`${e.target.value}`)}
            />
          </label>

          <div id="buttonContainer">
            <button type="button" id="addButton" onClick={handleClose}>
              Cancelar
            </button>
            <button type="submit" id="cancelButton" onClick={handleAdd}>
              Mandar Recadinho
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
