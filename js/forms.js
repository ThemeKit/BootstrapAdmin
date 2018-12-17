(function($) {
  'use strict';
  $(function() {
    $('.file-upload-browse').on('click', function() {
      var file = $(this).parent().parent().parent().find('.file-upload-default');
      file.trigger('click');
    });
    $('.file-upload-default').on('change', function() {
      $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
    });
  });
  $(document).ready(function() {
    $(".select2").select2();
    $('#inlinedatetimepicker').datetimepicker({
        inline: true,
        sideBySide: true
    });
    $('#datepicker').datetimepicker({
        format: 'L'
    });
    $('#timepicker').datetimepicker({
        format: 'LT'
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
    $('.html-editor').summernote({
      height: 300,
      tabsize: 2
    });
  })
})(jQuery);