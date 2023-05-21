import React, { useState, useEffect, useContext } from 'react';
import '../../styles/alerta.css';
import { Context } from '../store/appContext';

const ERROR = false;
const EXITO = true;

const Alerta = ({ mensaje, tipo }) => {
  const [visible, setVisible] = useState(true);
  const { actions } = useContext(Context);

  const handlerOnClick = () => {
    setVisible(false);
    console.log(actions);
    actions.throwAlert();
  }

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);

    }, 2500);
  }, []);

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