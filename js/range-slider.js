 'use strict';
 $(document).ready(function() {
     // range slider

     $('#ex1').slider({
         formatter: function(value) {
             return 'Current value: ' + value;
         }
     });

     // With JQuery
     $("#ex2").slider({});



     //#ex3
     var RGBChange = function() {
         $('#RGB').css('background', 'rgb(' + r.getValue() + ',' + g.getValue() + ',' + b.getValue() + ')')
     };

     var r = $('#R').slider()
         .on('slide', RGBChange)
         .data('slider');
     var g = $('#G').slider()
         .on('slide', RGBChange)
         .data('slider');
     var b = $('#B').slider()
         .on('slide', RGBChange)
         .data('slider');


     //#ex4
     $("#ex4").slider({
         reversed: true
     });

     //#ex5

     var slider = new Slider('#ex5');

     var toggleBtn = document.querySelector('button[data-behaviour="toggle"]#destroyEx5Slider ');
        toggleBtn.addEventListener('click', function (e) {
            var container = e.target.previousElementSibling;
            if (container.style.cssText.match(/display[\s:]{1,3}none/)) {
                container.style.cssText = '';
            } else {
                container.style.cssText = 'display: none;';
            }
        }, false);

     //#ex6
     $("#ex6").slider();
     $("#ex6").on("slide", function(slideEvt) {
         $("#ex6SliderVal").text(slideEvt.value);
     });


     //#ex7
     $("#ex7-enabled").on('click',function() {
         if (this.checked) {
             // With JQuery
             $("#ex7").slider("enable");

             // Without JQuery
             slider.enable();
         } else {
             // With JQuery
             $("#ex7").slider("disable");

             // Without JQuery
             slider.disable();
         }
     });




     //#8
     var slider = new Slider("#ex8", {
         tooltip: 'always'
     });

     //#9
     var slider = new Slider("#ex9", {
         precision: 2,
         value: 8.115 // Slider will instantiate showing 8.12 due to specified precision
     });

     //#10
     var slider = new Slider("#ex10", {});

     //#11
     var slider = new Slider("#ex11", {
         step: 20000,
         min: 0,
         max: 200000,
         tooltip: 'always'
     });

     //#12
     $("#ex12a").slider({ id: "slider12a", min: 0, max: 10, value: 5 });
     $("#ex12b").slider({ id: "slider12b", min: 0, max: 10, range: true, value: [3, 7] });
     $("#ex12c").slider({ id: "slider12c", min: 0, max: 10, range: true, value: [3, 7] });

     //#13
     $("#ex13").slider({
         ticks: [0, 100, 200, 300, 400],
         ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
         ticks_snap_bounds: 30
     });


     //#14
     $("#ex14").slider({
         ticks: [0, 100, 200, 300, 400],
         ticks_positions: [0, 15, 35, 60, 90, 100],
         ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
         ticks_snap_bounds: 30
     });

     // #15
     $("#ex15").slider({
         min: 1000,
         max: 10000000,
         scale: 'logarithmic',
         step: 10
     });


     //#16
     $("#ex16a").slider({ min: 0, max: 10, value: 0, focus: true });
     $("#ex16b").slider({ min: 0, max: 10, value: [0, 10], focus: true });


     // #ex17
     $("#ex17a").slider({
         min: 0,
         max: 10,
         value: 0,
         tooltip_position: 'bottom'
     });
     $("#ex17b").slider({
         min: 0,
         max: 10,
         value: 0,
         orientation: 'vertical',
         tooltip_position: 'left'
     });



     // #ex18
     $("#ex18a").slider({
         min: 0,
         max: 10,
         value: 5,
         labelledby: 'ex18-label-1'
     });
     $("#ex18b").slider({
         min: 0,
         max: 10,
         value: [3, 6],
         labelledby: ['ex18-label-2a', 'ex18-label-2b']
     });

     //#ex19 no script

     //#ex20
     $('#ex20a').on('click', function(e) {
         $('#ex20a')
             .parent()
             .find(' >.show-well')
             .toggle()
             .find('input')
             .slider('relayout');
         e.preventDefault();
     });

     //#21 no script

     //#22
     // With JQuery
     $('#ex22').slider({
         id: 'slider22',
         min: 0,
         max: 20,
         step: 1,
         value: 14,
         rangeHighlights: [{ "start": 2, "end": 5 },
             { "start": 7, "end": 8 },
             { "start": 17, "end": 19 },
             { "start": 17, "end": 24 },
             { "start": -3, "end": 19 }
         ]
     });


     //#23

     $("#ex23").slider({
         ticks: [0, 1, 2, 3, 4],
         ticks_positions: [0, 30, 60, 70, 90, 100],
         ticks_snap_bounds: 200,
         formatter: function(value) {
             return 'Current value: ' + value;
         },
         ticks_tooltip: true,
         step: 0.01
     });




     


     //#7
     var slider = new Slider("#ex7");

     
 });
