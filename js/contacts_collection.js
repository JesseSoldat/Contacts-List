import Backbone from 'backbone';
import ContactModel from './contact_model';

let ContactsCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/ContactList',

  model: ContactModel,

  parse: function(data) {
    return data.results;
  }

});

export default ContactsCollection;
