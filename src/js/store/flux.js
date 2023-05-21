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
      loadContact: function () {
        const getAllUrl = `${getStore().urlBase}agenda/${getStore().agenda}`;

        get(getAllUrl)
          .then(response => setStore({ contacts: response }))
          .catch(err => this.throwAlert(err.message, false))
      },
      updateContact: (id, bodyContact) => {
        const updateUrl = getStore().urlBase + id;

        updateOne(updateUrl, bodyContact)
          .then(this.throwAlert('contact updated sucessfull', true))
          .catch(err => this.throwAlert(err.message, false))

        const actualContacts = getStore().contacts;
        const contactStatus = actualContacts.find((element) => (element.id == id));

        for (const property in contactStatus) {
          if (bodyContact[property]) contactStatus[property] = bodyContact[property];
        }
      },
      deleteContact: function (id) {
        const deleteUrl = getStore().urlBase + id;

        deleteOne(deleteUrl)
          .then(this.throwAlert('contact deleted sucessfull', true))
          .catch(err => this.throwAlert(err.message, false))

        const actualContacts = getStore().contacts;
        const newContacts = actualContacts.filter((element) => {
          return element.id != id;
        });

        setStore({ ...getStore(), contacts: newContacts });
      },
      createContact: function (bodyContact) {
        createOne(getStore().urlBase, bodyContact)
          .then(
            response => setStore({ contacts: [...getStore().contacts, response] }),
            this.throwAlert('Contact created sucessfull', true)
          )
          .catch(err => this.throwAlert(err.message, false))
      },
      getOneContact: async function (id) {
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
          this.throwAlert(error.message, false)
        }

        return oneContact;
      },
      throwAlert: (newText, newType) => {
        let newAlert = null;

        if (newText != undefined || newType != undefined) {
          newAlert = {
            message: newText,
            type: newType
          }
        }
        setStore({
          alert: newAlert
        })
      }
    },
  };
};

export default getState;
