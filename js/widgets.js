$(function() {
  'use strict';
  jQuery('#visitfromworld').vectorMap({
    map: 'world_mill_en',
    backgroundColor: 'transparent',
    borderColor: '#000',
    borderOpacity: 0,
    borderWidth: 0,
    zoomOnScroll: false,
    color: '#93d5ed',
    regionStyle: {
      initial: {
        fill: '#bce2fb',
        'stroke-width': 1,
        stroke: '#fff'
      }
    },
    markerStyle: {
      initial: {
        r: 5,
        fill: '#93d5ed',
        'fill-opacity': 1,
        stroke: '#93d5ed',
        'stroke-width': 1,
        'stroke-opacity': 1
      }
    },
    enableZoom: true,
    hoverColor: '#79e580',
    markers: [
      {
        latLng: [21.0, 78.0],
        name: 'India : 9347',
        style: { fill: '#2961ff' }
      },
      {
        latLng: [-33.0, 151.0],
        name: 'Australia : 250',
        style: { fill: '#ff821c' }
      },
      {
        latLng: [36.77, -119.41],
        name: 'USA : 250',
        style: { fill: '#40c4ff' }
      },
      {
        latLng: [55.37, -3.41],
        name: 'UK   : 250',
        style: { fill: '#398bf7' }
      },
      {
        latLng: [25.2, 55.27],
        name: 'UAE : 250',
        style: { fill: '#6fc826' }
      }
    ],
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#93d5ed', '#93d5ee'],
    selectedColor: '#c9dfaf',
    selectedRegions: [],
    showTooltip: true,
    onRegionClick: function(element, code, region) {
      var message =
        'You clicked "' +
        region +
        '" which has the code: ' +
        code.toUpperCase();
      alert(message);
    }
  });
  $('#datepickerwidget').datetimepicker({
      inline: true,
      format: 'L'
  });
  var ps = new PerfectScrollbar(".scrollable", {
      wheelSpeed: 10,
      wheelPropagation: true,
      minScrollbarLength: 5
  });
});