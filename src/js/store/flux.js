const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      agenda: 'andreszabala'
    },
    actions: {
      loadContact: () => {
        fetch('https://assets.breatheco.de/apis/fake/contact/agenda/andreszabala')
          .then(response => response.json())
          .then(data => setStore(data))
          .catch(error => console.log(error))
      },
    }
  };
};

export default getState;
