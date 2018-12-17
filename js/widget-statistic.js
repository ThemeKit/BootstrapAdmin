'use strict';
$(document).ready(function() {
    // page statustic chart start
    setTimeout(function() {
        var widgetlineChart = new Chartist.Line('#Widget-line-chart1', {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
            series: [
                [50, 45, 60, 55, 70, 55, 60, 55, 65, 57, 60, 53, 53]
            ]
        }, {
            axisX: {
                showGrid: true,
                showLabel: false,
                offset: 0,
            },
            axisY: {
                showGrid: false,
                low: 40,
                showLabel: false,
                offset: 0,
            },
            fullWidth: true,
        });
        var widgetlineChart = new Chartist.Line('#Widget-line-chart2', {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
            series: [
                [50, 45, 60, 55, 70, 55, 60, 55, 65, 57, 60, 53, 53]
            ]
        }, {
            axisX: {
                showGrid: true,
                showLabel: false,
                offset: 0,
            },
            axisY: {
                showGrid: false,
                low: 40,
                showLabel: false,
                offset: 0,
            },
            fullWidth: true,
        });
        var widgetlineChart = new Chartist.Line('#Widget-line-chart3', {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
            series: [
                [50, 45, 60, 55, 70, 55, 60, 55, 65, 57, 60, 53, 53]
            ]
        }, {
            axisX: {
                showGrid: true,
                showLabel: false,
                offset: 0,
            },
            axisY: {
                showGrid: false,
                low: 40,
                showLabel: false,
                offset: 0,
            },
            fullWidth: true,
        });
        var widgetlineChart = new Chartist.Line('#Widget-line-chart4', {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
            series: [
                [50, 45, 60, 55, 70, 55, 60, 55, 65, 57, 60, 53, 53]
            ]
        }, {
            axisX: {
                showGrid: true,
                showLabel: false,
                offset: 0,
            },
            axisY: {
                showGrid: false,
                low: 40,
                showLabel: false,
                offset: 0,
            },
            fullWidth: true,
        });


    }, 800);
    // page statustic chart end

    // Social Slider start
    $('#fb-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        autoplay:true,
        nav: false,
        loop: true
    });
    $('#tw-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        autoplay:true,
        nav: false,
        loop: true
    });
    $('#gp-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        autoplay:true,
        nav: false,
        loop: true
    });
    // Social Slider end
});
