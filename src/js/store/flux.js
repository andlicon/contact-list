import {
  getAll,
  deleteOne,
  createOne
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
              message: err.message,
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
              message: err.message,
              type: false
            }
          }))

        const actualContacts = getStore().contacts;
        const newContacts = actualContacts.filter((element) => {
          return element.id != id;
        });

        setStore({ ...getStore(), contacts: newContacts });
      },
      createContact: (bodyContact) => {
        createOne(getStore().urlBase, bodyContact)
          .then(response => console.log(response))
          .catch(err => setStore({
            alert: {
              message: err.message,
              type: false
            }
          }))
      }
    }
  };
};

export default getState;
