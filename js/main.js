import $ from 'jquery';
import Router from './router';

import './ajax_setup';

var appElement = $('.app');  //get the div with a class of .app

var router = new Router(appElement); //created an instance with the Router constructor and use the appElement as its parameter  

router.start(); 

