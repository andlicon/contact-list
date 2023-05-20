import React, { useState } from 'react';
import '../../styles/alerta.css';

const ERROR = false;
const EXITO = true;

const Alerta = ({ mensaje, tipo }) => {
  const [visible, setVisible] = useState(true);
  const handlerOnClick = () => {
    setVisible(false);
  }

  return (
    <>
      {
        visible &&
        <div
          className={`alerta ${tipo == ERROR
            ? 'alerta--error'
            : 'alerta--exito'}`}
          onClick={handlerOnClick}
        >
          <p className='alerta__mensaje'>
            {mensaje}
          </p>
        </div>
      }
    </>
  );
}
export default Alerta;