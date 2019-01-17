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
        var listDelete = $('.list-delete');
        listDelete.on('click', function() {
            swal({
                title: "Are you sure?",
                text: "Do you really want to delete this item?",
                icon: "warning",
                buttons: ["Cancel", "Delete Now"],
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    swal({
                        title: "Deleted",
                        text: "The list item has been deleted!",
                        icon: "success",
                    });
                } else {
                    swal("The item is not deleted!");
                }
            });
        });
        $('.html-editor').summernote({
          height: 300,
          tabsize: 2
        });
    })
})(jQuery);