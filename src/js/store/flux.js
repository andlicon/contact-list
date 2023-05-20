import {
  getAll,
  deleteOne
} from '../util/apiUtil';

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      agenda: 'andreszabala',
      alert: null,
      urlBase: 'https://assets.breatheco.de/apis/fake/contact/'
    },
    actions: {
      loadContact: () => {
        const getAllUrl = `${getStore().urlBase}/agenda/${getStore().agenda}`;

        getAll(getAllUrl)
          .then(response => setStore({ contacts: response }))
          .catch(err => setStore({
            alert: {
              mensaje: err.message,
              type: false
            }
          }));
      },
      updateContact: (id) => {
        console.log('actualizando', id);
      },
      deleteContact: (id) => {
        const deleteUrl = getStore().urlBase + id;

        deleteOne(deleteUrl)
          .then(wasDeleted => console.log(wasDeleted))
          .catch(err => setStore({
            alert: {
              mensaje: err.message,
              type: false
            }
          }))
      },
      createContact: (bodyContact) => {
        console.log('creando')
      }
    }
  };
};

export default getState;
