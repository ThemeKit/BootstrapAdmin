'use strict';
$(document).ready(function() {
    floatchart()
    $(window).on('resize', function() {
        floatchart();
    });
    $('#mobile-collapse').on('click', function() {
        setTimeout(function() {
            floatchart();
        }, 700);
    });
    var ps = new PerfectScrollbar(".scroll-widget", {
        wheelSpeed: 10,
        wheelPropagation: true,
        minScrollbarLength: 5
    });
});

function floatchart() {
    $(function() {
        //flot options
        var options = {
            legend: {
                show: false
            },
            series: {
                label: "",
                curvedLines: {
                    active: true,
                    nrSplinePoints: 20
                },
            },
            tooltip: {
                show: true,
                content: "x : %x | y : %y"
            },
            grid: {
                hoverable: true,
                borderWidth: 0,
                labelMargin: 0,
                axisMargin: 0,
                minBorderMargin: 0,
            },
            yaxis: {
                min: 0,
                max: 30,
                color: 'transparent',
                font: {
                    size: 0,
                }
            },
            xaxis: {
                color: 'transparent',
                font: {
                    size: 0,
                }
            }
        };

        $.plot($("#app-sale1"), [{
            data: [
                [0, 18],
                [20, 10],
                [35, 20],
                [50, 10],
                [65, 27],
                [75, 15],
                [90, 20],
            ],
            color: "#ff5252",
            lines: {
                show: true,
                fill: false,
                lineWidth: 3
            },
            points: {
                show: false
            },
            //curve the line  (old pre 1.0.0 plotting function)
            curvedLines: {
                apply: true,
            }
        }], options);
        $.plot($("#app-sale2"), [{
            data: [
                [0, 10],
                [20, 25],
                [35, 27],
                [50, 10],
                [65, 20],
                [75, 10],
                [90, 18],
            ],
            color: "#448aff",
            lines: {
                show: true,
                fill: false,
                lineWidth: 3
            },
            points: {
                show: false
            },
            //curve the line  (old pre 1.0.0 plotting function)
            curvedLines: {
                apply: true,
            }
        }], options);
        $.plot($("#app-sale3"), [{
            data: [
                [0, 18],
                [20, 10],
                [35, 20],
                [50, 10],
                [65, 27],
                [75, 15],
                [90, 20],
            ],
            color: "#ffba57",
            lines: {
                show: true,
                fill: false,
                lineWidth: 3
            },
            points: {
                show: false
            },
            //curve the line  (old pre 1.0.0 plotting function)
            curvedLines: {
                apply: true,
            }
        }], options);
        $.plot($("#app-sale4"), [{
            data: [
                [0, 10],
                [20, 25],
                [35, 27],
                [50, 10],
                [65, 20],
                [75, 10],
                [90, 18],
            ],
            color: "#9ccc65",
            lines: {
                show: true,
                fill: false,
                lineWidth: 3
            },
            points: {
                show: false
            },
            //curve the line  (old pre 1.0.0 plotting function)
            curvedLines: {
                apply: true,
            }
        }], options);
    });
}
