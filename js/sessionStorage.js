"use strict";

function promptToClearStorage() {
	// confirm dialog
	var clearStorage = confirm("Would you like to clear your LocalStorage?\n\nPress 'Ok' to clear.");
	if (clearStorage) {
  	// clear LocalStorage
    localStorage.removeItem('persistedItem');
    console.log('LocalStorage has been cleared.');
  }
}

// check to see if LocalStorage is supported
if (typeof(Storage) !== "undefined") {
	console.log('Local Storage is supported.');

    // try and get item from storage
    var persistedItem = localStorage.getItem('persistedItem');

    if (persistedItem !== null) {
        persistedItem = JSON.parse(persistedItem);
        console.log('A persistedItem was found in LocalStorage.');
        console.log(persistedItem);

        var name = persistedItem.name;
        var quantity = persistedItem.quantity;
        var comment = persistedItem.comment;

        console.log(name + '. Qty. ' + quantity + '. ' + comment);

        promptToClearStorage();
    }  else {
        console.log('No persistedItem found in LocalStorage.');
      console.log('Creating an item to persist...');
      
      var item = {
          "name": "Milk",
          "quantity": 1,
          "comment" : "Low Fat"
      };
      
      localStorage.setItem('persistedItem', JSON.stringify(item));
      console.log('Item persisted to localStorage.');
    }
  } else {
      console.log('Local Storage is not supported.');
}
  
