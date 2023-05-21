import {
  get,
  deleteOne,
  createOne,
  updateOne
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
        const getAllUrl = `${getStore().urlBase}agenda/${getStore().agenda}`;

        get(getAllUrl)
          .then(response => setStore({ contacts: response }))
          .catch(err => setStore({
            alert: {
              message: err.message,
              type: false
            }
          }));
      },
      updateContact: (id, bodyContact) => {
        const updateUrl = getStore().urlBase + id;

        updateOne(updateUrl, bodyContact)
          .then(
            response => setStore({ contacts: [...getStore().contacts, response] }),
            setStore({
              alert: {
                message: 'Contact edited succssfull',
                type: true
              }
            })
          )
          .catch(err => setStore({
            alert: {
              message: err.message,
              type: false
            }
          }))
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
          .then(
            response => setStore({ contacts: [...getStore().contacts, response] }),
            setStore({
              alert: {
                message: 'Contact added succssfull',
                type: true
              }
            })
          )
          .catch(err => setStore({
            alert: {
              message: err.message,
              type: false
            }
          }))
      },
      getOneContact: async (id) => {
        const getOneUrl = `${getStore().urlBase}${id}`;

        let oneContact = {
          full_name: '',
          address: '',
          phone: '',
          email: '',
          agenda_slug: getStore().agenda
        };

        try {
          const response = await get(getOneUrl)
          oneContact = await response;

          delete oneContact.id;
          delete oneContact.created_at;
        }
        catch (error) {
          setStore({
            alert: {
              message: error.message,
              type: false
            }
          })
        }

        return oneContact;
      }
    }
  };
};

export default getState;
