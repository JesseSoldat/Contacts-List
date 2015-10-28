import Backbone from 'Backbone';

let ContactModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/ContactList',

  idAttribute: 'objectId'

});

export default ContactModel;
