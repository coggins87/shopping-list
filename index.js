// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list
'use strict';

/**
 * when the 'check' button is CLICKED it will add the class .shopping-item__checked to
 * the .shopping-item only for that item
 * if shopping item toggle is CLICKED and if shopping item checked is NOT there (on the shopping item),
 *  then (toggle) add class to check off item; if shopping item toggle is CLICKED and item is checked,
 * remove checked class from the item
 */

$('.shopping-item-toggle').click(event => {
  event.preventDefault();
  console.log(event.currentTarget);
  $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

}
);
