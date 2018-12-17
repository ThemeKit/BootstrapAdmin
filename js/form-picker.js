(function($) {
    'use strict';
    $(document).ready(function() {
        $("#dropper-default").dateDropper({
            dropWidth: 200,
            dropPrimaryColor: "#1abc9c",
            dropBorder: "1px solid #1abc9c"
        }),
        $("#dropper-animation").dateDropper({
            dropWidth: 200,
            init_animation: "bounce",
            dropPrimaryColor: "#1abc9c",
            dropBorder: "1px solid #1abc9c"
        }),
        $("#dropper-format").dateDropper({
            dropWidth: 200,
            format: "F S, Y",
            dropPrimaryColor: "#1abc9c",
            dropBorder: "1px solid #1abc9c"
        }),
        $("#dropper-lang").dateDropper({
            dropWidth: 200,
            format: "F S, Y",
            dropPrimaryColor: "#1abc9c",
            dropBorder: "1px solid #1abc9c",
            lang: "ar"
        }),
        $("#dropper-lock").dateDropper({
            dropWidth: 200,
            format: "F S, Y",
            dropPrimaryColor: "#1abc9c",
            dropBorder: "1px solid #1abc9c",
            lock: "from"
        }),
        $("#dropper-max-year").dateDropper({
            dropWidth: 200,
            dropPrimaryColor: "#1abc9c",
            dropBorder: "1px solid #1abc9c",
            maxYear: "2020"
        }),
        $("#dropper-min-year").dateDropper({
            dropWidth: 200,
            dropPrimaryColor: "#1abc9c",
            dropBorder: "1px solid #1abc9c",
            minYear: "1990"
        }),
        $("#year-range").dateDropper({
            dropWidth: 200,
            dropPrimaryColor: "#1abc9c",
            dropBorder: "1px solid #1abc9c",
            yearsRange: "5"
        }),
        $("#dropper-width").dateDropper({
            dropPrimaryColor: "#1abc9c",
            dropBorder: "1px solid #1abc9c",
            dropWidth: 500
        }),
        $("#dropper-dangercolor").dateDropper({
            dropWidth: 200,
            dropPrimaryColor: "#e74c3c",
            dropBorder: "1px solid #e74c3c",
        }),
        $("#dropper-backcolor").dateDropper({
            dropWidth: 200,
            dropPrimaryColor: "#1abc9c",
            dropBorder: "1px solid #1abc9c",
            dropBackgroundColor: "#bdc3c7"
        }),
        $("#dropper-txtcolor").dateDropper({
            dropWidth: 200,
            dropPrimaryColor: "#46627f",
            dropBorder: "1px solid #46627f",
            dropTextColor: "#FFF",
            dropBackgroundColor: "#e74c3c"
        }),
        $("#dropper-radius").dateDropper({
            dropWidth: 200,
            dropPrimaryColor: "#1abc9c",
            dropBorder: "1px solid #1abc9c",
            dropBorderRadius: "0"
        }),
        $("#dropper-border").dateDropper({
            dropWidth: 200,
            dropPrimaryColor: "#1abc9c",
            dropBorder: "2px solid #1abc9c"
        }),
        $("#dropper-shadow").dateDropper({
            dropWidth: 200,
            dropPrimaryColor: "#1abc9c",
            dropBorder: "1px solid #1abc9c",
            dropBorderRadius: "20px",
            dropShadow: "0 0 20px 0 rgba(26, 188, 156, 0.6)"
        }),
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
        $('.demo').each( function() {
            //
            // Dear reader, it's actually very easy to initialize MiniColors. For example:
            //
            //  $(selector).minicolors();
            //
            // The way I've done it below is just for the demo, so don't get confused
            // by it. Also, data- attributes aren't supported at this time...they're
            // only used for this demo.
            //
            $(this).minicolors({
                control: $(this).attr('data-control') || 'hue',
                defaultValue: $(this).attr('data-defaultValue') || '',
                format: $(this).attr('data-format') || 'hex',
                keywords: $(this).attr('data-keywords') || '',
                inline: $(this).attr('data-inline') === 'true',
                letterCase: $(this).attr('data-letterCase') || 'lowercase',
                opacity: $(this).attr('data-opacity'),
                position: $(this).attr('data-position') || 'bottom left',
                swatches: $(this).attr('data-swatches') ? $(this).attr('data-swatches').split('|') : [],
                change: function(value, opacity) {
                    if( !value ) return;
                    if( opacity ) value += ', ' + opacity;
                    if( typeof console === 'object' ) {
                        console.log(value);
                    }
                },
                theme: 'bootstrap'
            });

        });
    })
})(jQuery);