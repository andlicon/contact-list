import { getAll } from '../util/apiUtil';

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      agenda: 'andreszabala',
      error: null
    },
    actions: {
      loadContact: () => {
        getAll(`https://assets.breatheco.de/apis/fake/contact/agenda/${getStore().agenda}`)
          .then(response => setStore({ contacts: response }))
          .catch(err => setStore({ error: err.message }));
      },
    }
  };
};

export default getState;
