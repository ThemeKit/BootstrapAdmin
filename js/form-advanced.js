"use strict";
$(document).ready(function() {
    // Single swithces
    var elemsingle = document.querySelector('.js-single');
    var switchery = new Switchery(elemsingle, {
        color: '#4099ff',
        jackColor: '#fff'
    });
    // Multiple swithces
    var elem = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
    elem.forEach(function(html) {
        var switchery = new Switchery(html, {
            color: '#4099ff',
            jackColor: '#fff'
        });
    });
    // Disable enable swithces
    var elemstate = document.querySelector('.js-dynamic-state');
    var switcheryy = new Switchery(elemstate, {
        color: '#4099ff',
        jackColor: '#fff'
    });
    document.querySelector('.js-dynamic-disable').addEventListener('click', function() {
        switcheryy.disable();
    });
    document.querySelector('.js-dynamic-enable').addEventListener('click', function() {
        switcheryy.enable();
    });
    // Color Swithces
    var elemdefault = document.querySelector('.js-default');
    var switchery = new Switchery(elemdefault, {
        color: '#d6d6d6',
        jackColor: '#fff'
    });
    var elemprimary = document.querySelector('.js-primary');
    var switchery = new Switchery(elemprimary, {
        color: '#4099ff',
        jackColor: '#fff'
    });
    var elemprimary = document.querySelector('.js-success');
    var switchery = new Switchery(elemprimary, {
        color: '#2ed8b6',
        jackColor: '#fff'
    });
    var elemprimary = document.querySelector('.js-info');
    var switchery = new Switchery(elemprimary, {
        color: '#4099ff',
        jackColor: '#fff'
    });
    var elemprimary = document.querySelector('.js-warning');
    var switchery = new Switchery(elemprimary, {
        color: '#FFB64D',
        jackColor: '#fff'
    });
    var elemprimary = document.querySelector('.js-danger');
    var switchery = new Switchery(elemprimary, {
        color: '#FF5370',
        jackColor: '#fff'
    });
    var elemprimary = document.querySelector('.js-inverse');
    var switchery = new Switchery(elemprimary, {
        color: '#222',
        jackColor: '#fff'
    });
    // Switch sizes
    var elemlarge = document.querySelector('.js-large');
    var switchery = new Switchery(elemlarge, {
        color: '#4099ff',
        jackColor: '#fff',
        size: 'large'
    });
    var elemmedium = document.querySelector('.js-medium');
    var switchery = new Switchery(elemmedium, {
        color: '#4099ff',
        jackColor: '#fff',
        size: 'medium'
    });
    var elemsmall = document.querySelector('.js-small');
    var switchery = new Switchery(elemsmall, {
        color: '#4099ff',
        jackColor: '#fff',
        size: 'small'
    });

    $('#tags').tagsinput('items');
    $('.repeater').repeater({
      // (Optional)
      // "defaultValues" sets the values of added items.  The keys of
      // defaultValues refer to the value of the input's name attribute.
      // If a default value is not specified for an input, then it will
      // have its value cleared.
      defaultValues: {
        'text-input': 'foo'
      },
      // (Optional)
      // "show" is called just after an item is added.  The item is hidden
      // at this point.  If a show callback is not given the item will
      // have $(this).show() called on it.
      show: function() {
        $(this).slideDown();
      },
      // (Optional)
      // "hide" is called when a user clicks on a data-repeater-delete
      // element.  The item is still visible.  "hide" is passed a function
      // as its first argument which will properly remove the item.
      // "hide" allows for a confirmation step, to send a delete request
      // to the server, etc.  If a hide callback is not given the item
      // will be deleted.
      hide: function(deleteElement) {
        if (confirm('Are you sure you want to delete this element?')) {
          $(this).slideUp(deleteElement);
        }
      },
      // (Optional)
      // Removes the delete button from the first list item,
      // defaults to false.
      isFirstItemUndeletable: true
    });
    $(".select2").select2();
    $('.html-editor').summernote({
      height: 300,
      tabsize: 2
    });
});