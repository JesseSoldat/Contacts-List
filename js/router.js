import Backbone from 'backbone';
import $ from 'jquery';

import ContactsCollection from './contacts_collection';

import contactsTemplate from './views/contacts';
import contactTemplate from './views/contact';

let Router = Backbone.Router.extend({

  routes: {
    "" : "showContacts",  //http://localhost:8000/ calls the showContacts function
    "contacts/:id" : "showContact", //#todos/AZrTh2DD3b 
    
  },

  initialize: function(appElement) {
    this.$el = appElement;  //get the div in index.html

    this.contacts = new ContactsCollection();  //Router.contacts uses the ContactsCollection constructor

    let router = this; //declare to use in the function below

    this.$el.on('click', '.contact-list-item', function(event) { //click on any li (delegate) and the event will bubble up to the event listener the (div in index.html)
      let $li = $(event.currentTarget); // the list item that we clicked on
      var contactId = $li.data('contact-id'); //the data-contact-id ="${item.objectId}" making it unique
      router.navigate(`contacts/${contactId}`); //change to #contact/(unique contact)
      router.showContact(contactId); //run the showContact function 
    });
  },

  showSpinner: function() {  // shows a spinner while waiting for the dated to load
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
    );
  },

  showContact: function(contactId) {
    let contact = this.contacts.get(contactId);

    if (contact) {
      // todos have fetched and we grabbed the one we want
      this.$el.html( contactTemplate(contact.toJSON()) );
    } else {
      // todos not fetched so we need to load the one we want
      let router = this;
      contact = this.contacts.add({objectId: contactId});
      this.showSpinner();
      contact.fetch().then(function() {
        router.$el.html( contactTemplate(contact.toJSON()) );
      });
    }

  },

  showContacts: function() {
    
    this.showSpinner(); // shows a spinner while waiting for the dated to load

    var router = this;  //Router constructor

    this.contacts.fetch().then(function(){  //points to Router.contacts which is a variable that holds an instance created from the ContactsCollection constructor

      router.$el.html( contactsTemplate(router.contacts.toJSON()) );

    });

  },

  start: function() {
    Backbone.history.start();
  }

});

export default Router;
