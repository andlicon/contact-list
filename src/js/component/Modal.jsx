import React from 'react';

const Modal = ({ modalId, title, body, acceptAction, cancelAction }) => {

  const acceptHandler = () => {
    if (acceptAction) acceptAction();
  }

  const cancelHandler = () => {
    if (cancelAction) cancelAction();
  }

  return (
    <div className="modal fade" id={modalId} tabIndex="-1" role="dialog" aria-labelledby={`${modalId}Label`} aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${modalId}Label`}>{title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {body}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={cancelHandler}>
              Oh no!
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={acceptHandler}>
              Yes baby!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;