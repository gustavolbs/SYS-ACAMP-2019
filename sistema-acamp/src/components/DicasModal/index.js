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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = async e => {
    e.preventDefault();

    try {
      await api.post(`/dicas`, {
        dica: title,
      });
      handleClose();
      window.location.reload();
    } catch (err) {
      console.log('Something went Wrong');
    } finally {
      console.log('OK');
    }
  };

  return (
    <div>
      <button id="addFinances" onClick={handleOpen}>
        Adicionar dica
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="modal"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} id="modalBody" className={classes.paper}>
          <h2 id="simple-modal-title">Adicionar Dica</h2>
          <label>
            <span>
              Descreva a dica<upper>*</upper>
            </span>
            <textarea
              type="text"
              name="title"
              value={title}
              placeholder="ex: Tem asas mas não voa"
              required
              onChange={e => setTitle(`${e.target.value}`)}
            />
          </label>

          <div id="buttonContainer">
            <button type="button" id="cancelButton" onClick={handleClose}>
              Cancelar
            </button>
            <button type="submit" id="addButton" onClick={handleAdd}>
              Confirmar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
