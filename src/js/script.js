/**
 * @file
 * Provides Javascript functionality for the theme.
 */

// Need the below imports to keep Rollup iife output happy.
import Drupal from 'Drupal';
import drupalSettings from 'drupalSettings';
//import $ from 'jQuery'; // only add this if your library in the libraries.yml has it and you use it.

// Just an example
// Does not need to be in the usual iife as rollup surrounds our code with an iife anyway.
Drupal.behaviors.cbst = {
  attach: function(context) {
    console.log(drupalSettings);
    console.log('CB was here');

  },
};
