'use strict';
$(document).ready(function() {
    // pageview and prod sale end
    floatchart()
    $(window).on('resize', function() {
        floatchart();
    });
    $('#mobile-collapse').on('click', function() {
        setTimeout(function() {
            floatchart();
        }, 700);
    });
    // Round Chart statustc card start
    var chart = new Chartist.Pie('#status-round-1', {
        series: [5, 7]
    }, {
        donut: true,
        donutWidth: 5,
        showLabel: false
    });
    var chart = new Chartist.Pie('#status-round-2', {
        series: [7, 5]
    }, {
        donut: true,
        donutWidth: 5,
        showLabel: false
    });
    var chart = new Chartist.Pie('#status-round-3', {
        series: [11, 5]
    }, {
        donut: true,
        donutWidth: 5,
        showLabel: false
    });
    var chart = new Chartist.Pie('#status-round-4', {
        series: [11, 10]
    }, {
        donut: true,
        donutWidth: 5,
        showLabel: false
    });
    // Round Chart statustc card end
    // Total revenue start
    var chart = new Chartist.Pie('#tot-rev-chart', {
        series: [11, 10]
    }, {
        donut: true,
        donutWidth: 5,
        showLabel: false
    });
    // Total revenue end
    // seo ecommerce start
    $(function() {});
    // seo ecommerce end
    // sale-diff
    var chart = AmCharts.makeChart("sale-diff", {
        "type": "serial",
        "theme": "light",
        "dataDateFormat": "YYYY-MM-DD",
        "precision": 2,
        "valueAxes": [{
            "id": "v1",
            "fontSize": 0,
            "axisAlpha": 0,
            "lineAlpha": 0,
            "gridAlpha": 0,
            "position": "left",
            "autoGridCount": false,
            "labelFunction": function(value) {
                return "$" + Math.round(value) + "M";
            }
        }],
        "graphs": [{
            "id": "g3",
            "valueAxis": "v1",
            "lineColor": "#2ed8b6",
            "fillColors": "#2ed8b6",
            "fillAlphas": 0.3,
            "type": "column",
            "title": "Actual Sales",
            "valueField": "sales2",
            "columnWidth": 0.5,
            "legendValueText": "$[[value]]M",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
        }, {
            "id": "g4",
            "valueAxis": "v1",
            "lineColor": "#2ed8b6",
            "fillColors": "#2ed8b6",
            "fillAlphas": 1,
            "type": "column",
            "title": "Target Sales",
            "valueField": "sales1",
            "columnWidth": 0.5,
            "legendValueText": "$[[value]]M",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
        }],
        "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "valueLineAlpha": 0.2
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "axisAlpha": 0,
            "lineAlpha": 0,
            "gridAlpha": 0,
            "minorGridEnabled": true,
        },
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "export": {
            "enabled": true
        },
        "dataProvider": [{
            "date": "2013-01-16",
            "sales1": 5,
            "sales2": 8
        }, {
            "date": "2013-01-17",
            "sales1": 4,
            "sales2": 6
        }, {
            "date": "2013-01-18",
            "sales1": 5,
            "sales2": 2
        }, {
            "date": "2013-01-19",
            "sales1": 8,
            "sales2": 9
        }, {
            "date": "2013-01-20",
            "sales1": 9,
            "sales2": 6
        }]
    });
    // deal-analytic-chart
    var chart = AmCharts.makeChart("deal-analytic-chart", {
        "type": "serial",
        "theme": "light",
        "dataDateFormat": "YYYY-MM-DD",
        "precision": 2,
        "valueAxes": [{
            "id": "v1",
            "position": "left",
            "autoGridCount": false,
            "labelFunction": function(value) {
                return "$" + Math.round(value) + "M";
            }
        }, {
            "id": "v2",
            "gridAlpha": 0,
            "autoGridCount": false
        }],
        "graphs": [{
            "id": "g1",
            "valueAxis": "v2",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 8,
            "hideBulletsCount": 50,
            "lineThickness": 3,
            "lineColor": "#2ed8b6",
            "title": "Market Days",
            "useLineColorForBulletBorder": true,
            "valueField": "market1",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
        }, {
            "id": "g2",
            "valueAxis": "v2",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 8,
            "hideBulletsCount": 50,
            "lineThickness": 3,
            "lineColor": "#e95753",
            "title": "Market Days ALL",
            "useLineColorForBulletBorder": true,
            "valueField": "market2",
            "balloonText": "[[title]]<br /><b style='font-size: 130%'>[[value]]</b>"
        }],
        "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "valueLineAlpha": 0.2
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "dashLength": 1,
            "minorGridEnabled": true
        },
        "legend": {
            "useGraphSettings": true,
            "position": "top"
        },
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "dataProvider": [{
            "date": "2013-01-16",
            "market1": 71,
            "market2": 75
        }, {
            "date": "2013-01-17",
            "market1": 80,
            "market2": 84
        }, {
            "date": "2013-01-18",
            "market1": 78,
            "market2": 83
        }, {
            "date": "2013-01-19",
            "market1": 85,
            "market2": 88
        }, {
            "date": "2013-01-20",
            "market1": 87,
            "market2": 85
        }, {
            "date": "2013-01-21",
            "market1": 97,
            "market2": 88
        }, {
            "date": "2013-01-22",
            "market1": 93,
            "market2": 88
        }, {
            "date": "2013-01-23",
            "market1": 85,
            "market2": 80
        }, {
            "date": "2013-01-24",
            "market1": 90,
            "market2": 85
        }]
    });

    // allocation map start
    var map = AmCharts.makeChart("allocation-map", {
        "type": "map",
        "theme": "light",
        "colorSteps": 10,
        "dataProvider": {
            "map": "usaLow",
            "areas": [{
                "id": "US-AL",
                "value": 4447100
            }, {
                "id": "US-AK",
                "value": 626932
            }, {
                "id": "US-AZ",
                "value": 5130632
            }, {
                "id": "US-AR",
                "value": 2673400
            }, {
                "id": "US-CA",
                "value": 33871648
            }, {
                "id": "US-CO",
                "value": 4301261
            }, {
                "id": "US-CT",
                "value": 3405565
            }, {
                "id": "US-DE",
                "value": 783600
            }, {
                "id": "US-FL",
                "value": 15982378
            }, {
                "id": "US-GA",
                "value": 8186453
            }, {
                "id": "US-HI",
                "value": 1211537
            }, {
                "id": "US-ID",
                "value": 1293953
            }, {
                "id": "US-IL",
                "value": 12419293
            }, {
                "id": "US-IN",
                "value": 6080485
            }, {
                "id": "US-IA",
                "value": 2926324
            }, {
                "id": "US-KS",
                "value": 2688418
            }, {
                "id": "US-KY",
                "value": 4041769
            }, {
                "id": "US-LA",
                "value": 4468976
            }, {
                "id": "US-ME",
                "value": 1274923
            }, {
                "id": "US-MD",
                "value": 5296486
            }, {
                "id": "US-MA",
                "value": 6349097
            }, {
                "id": "US-MI",
                "value": 9938444
            }, {
                "id": "US-MN",
                "value": 4919479
            }, {
                "id": "US-MS",
                "value": 2844658
            }, {
                "id": "US-MO",
                "value": 5595211
            }, {
                "id": "US-MT",
                "value": 902195
            }, {
                "id": "US-NE",
                "value": 1711263
            }, {
                "id": "US-NV",
                "value": 1998257
            }, {
                "id": "US-NH",
                "value": 1235786
            }, {
                "id": "US-NJ",
                "value": 8414350
            }, {
                "id": "US-NM",
                "value": 1819046
            }, {
                "id": "US-NY",
                "value": 18976457
            }, {
                "id": "US-NC",
                "value": 8049313
            }, {
                "id": "US-ND",
                "value": 642200
            }, {
                "id": "US-OH",
                "value": 11353140
            }, {
                "id": "US-OK",
                "value": 3450654
            }, {
                "id": "US-OR",
                "value": 3421399
            }, {
                "id": "US-PA",
                "value": 12281054
            }, {
                "id": "US-RI",
                "value": 1048319
            }, {
                "id": "US-SC",
                "value": 4012012
            }, {
                "id": "US-SD",
                "value": 754844
            }, {
                "id": "US-TN",
                "value": 5689283
            }, {
                "id": "US-TX",
                "value": 20851820
            }, {
                "id": "US-UT",
                "value": 2233169
            }, {
                "id": "US-VT",
                "value": 608827
            }, {
                "id": "US-VA",
                "value": 7078515
            }, {
                "id": "US-WA",
                "value": 5894121
            }, {
                "id": "US-WV",
                "value": 1808344
            }, {
                "id": "US-WI",
                "value": 5363675
            }, {
                "id": "US-WY",
                "value": 493782
            }]
        },

        "areasSettings": {
            "autoZoom": true
        },
        "export": {
            "enabled": true
        }

    });
    var chart = AmCharts.makeChart("allocation-chart", {
        "type": "pie",
        "startDuration": 0,
        "theme": "light",
        "labelRadius": 0,
        "pullOutRadius": 0,
        "labelText": "",
        "colorField": "color",
        "legend": {
            // "enabled":false,
        },
        "innerRadius": "70%",
        "dataProvider": [{
            "country": "Lithuania",
            "litres": 501.9,
            "color": "#85C5E3"
        }, {
            "country": "Czech Republic",
            "litres": 301.9,
            "color": "#6AA3C4"
        }, {
            "country": "Ireland",
            "litres": 201.1,
            "color": "#6097B9"
        }, {
            "country": "india",
            "litres": 220.1,
            "color": "#4E81A4"
        }],
        "valueField": "litres",
    });
    // allocation map end
});

function floatchart() {
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

    $.plot($("#pbc-1"), [{
        data: [
            [0, 8],
            [1, 10],
            [2, 20],
            [3, 10],
            [4, 27],
            [5, 15],
            [6, 20],
            [7, 24],
            [8, 20]
        ],
        color: "#4099ff",
        bars: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                    opacity: 0.7
                }, {
                    opacity: 0.7
                }]
            },
            barWidth: 0.3,
            align: 'center',
            horizontal: false
        },
        points: {
            show: false
        },
    }], options);
    $.plot($("#pbc-2"), [{
        data: [
            [0, 20],
            [1, 24],
            [2, 20],
            [3, 15],
            [4, 27],
            [5, 10],
            [6, 18],
            [7, 22],
            [8, 15]
        ],
        color: "#FF5370",
        bars: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                    opacity: 0.7
                }, {
                    opacity: 0.7
                }]
            },
            barWidth: 0.3,
            align: 'center',
            horizontal: false
        },
        points: {
            show: false
        },
    }], options);
    $.plot($("#pbc-3"), [{
        data: [
            [0, 8],
            [1, 10],
            [2, 20],
            [3, 10],
            [4, 27],
            [5, 15],
            [6, 20],
            [7, 12],
            [8, 6]
        ],
        color: "#4099ff",
        bars: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                    opacity: 0.7
                }, {
                    opacity: 0.7
                }]
            },
            barWidth: 0.3,
            align: 'center',
            horizontal: false
        },
        points: {
            show: false
        },
    }], options);
    $.plot($("#pbc-4"), [{
        data: [
            [0, 20],
            [1, 24],
            [2, 20],
            [3, 15],
            [4, 27],
            [5, 10],
            [6, 18],
            [7, 22],
            [8, 15]
        ],
        color: "#2ed8b6",
        bars: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                    opacity: 0.7
                }, {
                    opacity: 0.7
                }]
            },
            barWidth: 0.3,
            align: 'center',
            horizontal: false
        },
        points: {
            show: false
        },
    }], options);
    $.plot($("#pbc-5"), [{
        data: [
            [0, 20],
            [1, 24],
            [2, 20],
            [3, 15],
            [4, 27],
            [5, 10],
            [6, 18],
            [7, 22],
            [8, 15]
        ],
        color: "#FF5370",
        bars: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                    opacity: 0.7
                }, {
                    opacity: 0.7
                }]
            },
            barWidth: 0.3,
            align: 'center',
            horizontal: false
        },
        points: {
            show: false
        },
    }], options);
    $.plot($("#pbc-6"), [{
        data: [
            [0, 20],
            [1, 24],
            [2, 20],
            [3, 15],
            [4, 27],
            [5, 10],
            [6, 18],
            [7, 22],
            [8, 15]
        ],
        color: "#FF5370",
        bars: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                    opacity: 0.7
                }, {
                    opacity: 0.7
                }]
            },
            barWidth: 0.3,
            align: 'center',
            horizontal: false
        },
        points: {
            show: false
        },
    }], options);

    //real-time update
    $(function() {
        // We use an inline data source in the example, usually data would
        // be fetched from a server
        var data = [],
            totalPoints = 300;

        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);
            // Do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;
                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }
                data.push(y);
            }
            // Zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }
            return res;
        }
        // Set up the control widget
        var updateInterval = 30;
        $("#updateInterval").val(updateInterval).change(function() {
            var v = $(this).val();
            if (v && !isNaN(+v)) {
                updateInterval = +v;
                if (updateInterval < 1) {
                    updateInterval = 1;
                } else if (updateInterval > 2000) {
                    updateInterval = 2000;
                }
                $(this).val("" + updateInterval);
            }
        });
        var plot = $.plot("#realtime-profit", [getRandomData()], {

            lines: {
                show: true,
                fill: true,
                lineWidth: 1,
                borderWidth: 0,
            },
            shadowSize: 5,
            highlightColor: "rgba(0,0,0,0.5)",
            points: {
                show: true,
                radius: 0,
                fill: true,
                fillColor: '#fff'
            },
            curvedLines: {
                apply: false,
            },
            legend: {
                show: false
            },
            series: {
                label: "",
                color: "#2ed8b6",
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
                minBorderMargin: 0,
            },
            yaxis: {
                min: 0,
                max: 100,
            },
            xaxis: {
                font: {
                    size: 0,
                }
            }
        });

        function update() {
            plot.setData([getRandomData()]);
            // Since the axes don't change, we don't need to call plot.setupGrid()
            plot.draw();
            setTimeout(update, updateInterval);
        }
        update();
    });
    $(function() {
        // sale start
        $.plot($("#sec-ecommerce-chart-line"), [{
            data: [
                [0, 18],
                [1, 10],
                [2, 20],
                [3, 10],
                [4, 27],
                [5, 15],
                [6, 20],
                [7, 24],
                [8, 20],
                [9, 16],
                [10, 18],
                [11, 10],
                [12, 20],
                [13, 10],
                [14, 27],
            ],
            color: "#fff",
            lines: {
                show: true,
                fill: false,
                lineWidth: 2
            },
            points: {
                show: true,
                radius: 3,
                fill: true,
                fillColor: '#fff'
            },
            curvedLines: {
                apply: false,
            }
        }], options);
        $.plot($("#sec-ecommerce-chart-bar"), [{
            data: [
                [0, 18],
                [1, 10],
                [2, 20],
                [3, 10],
                [4, 27],
                [5, 15],
                [6, 20],
                [7, 24],
                [8, 20],
                [9, 16],
                [10, 18],
                [11, 10],
                [12, 20],
                [13, 10],
                [14, 27],
            ],
            color: "#5ffddd",
            bars: {
                show: true,
                lineWidth: 1,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 1
                    }, {
                        opacity: 1
                    }]
                },
                barWidth: 0.6,
                align: 'center',
                horizontal: false
            },
            points: {
                show: false
            },
        }], options);
    });
    // sale Income start
    $.plot($("#sal-income"), [{
        data: [
            [0, 25],
            [1, 15],
            [2, 20],
            [3, 27],
            [4, 10],
            [5, 20],
            [6, 10],
            [7, 26],
            [8, 20],
            [9, 10],
            [10, 25],
            [11, 27],
            [12, 12],
            [13, 26],
        ],
        color: "#4099ff",
        lines: {
            show: true,
            fill: true,
            lineWidth: 3
        },
        points: {
            show: false,
        },
        curvedLines: {
            apply: true,
        }
    }], options);
    $.plot($("#rent-income"), [{
        data: [
            [0, 25],
            [1, 15],
            [2, 25],
            [3, 27],
            [4, 10],
            [5, 20],
            [6, 15],
            [7, 26],
            [8, 20],
            [9, 13],
            [10, 25],
            [11, 27],
            [12, 12],
            [13, 1],
        ],
        color: "#2ed8b6",
        lines: {
            show: true,
            fill: true,
            lineWidth: 3
        },
        points: {
            show: false,
        },
        curvedLines: {
            apply: true,
        }
    }], options);
    $.plot($("#income-analysis"), [{
        data: [
            [0, 25],
            [1, 30],
            [2, 25],
            [3, 27],
            [4, 10],
            [5, 20],
            [6, 15],
            [7, 26],
            [8, 10],
            [9, 13],
            [10, 25],
            [11, 27],
            [12, 12],
            [13, 27],
        ],
        color: "#FF5370",
        lines: {
            show: true,
            fill: true,
            lineWidth: 3
        },
        points: {
            show: false,
        },
        curvedLines: {
            apply: true,
        }
    }], options);

    $(window).on('resize',function() {

        $(".dial").knob({
            draw: function() {
                // "tron" case
                if (this.$.data('skin') == 'tron') {
                    this.cursorExt = 0.3;
                    var a = this.arc(this.cv) // Arc
                        ,
                        pa // Previous arc
                        , r = 1;
                    this.g.lineWidth = this.lineWidth;
                    if (this.o.displayPrevious) {
                        pa = this.arc(this.v);
                        this.g.beginPath();
                        this.g.strokeStyle = this.pColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                        this.g.stroke();
                    }
                    this.g.beginPath();
                    this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                    this.g.stroke();
                    this.g.lineWidth = 2;
                    this.g.beginPath();
                    this.g.strokeStyle = this.o.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                    this.g.stroke();
                    return false;
                }
            }
        });
    });


    $(document).ready(function() {
        /*× Overloaded 'draw' method*/
        $(".dial").knob({
            draw: function() {
                // "tron" case
                if (this.$.data('skin') == 'tron') {
                    this.cursorExt = 0.3;
                    var a = this.arc(this.cv) // Arc
                        ,
                        pa // Previous arc
                        , r = 1;
                    this.g.lineWidth = this.lineWidth;
                    if (this.o.displayPrevious) {
                        pa = this.arc(this.v);
                        this.g.beginPath();
                        this.g.strokeStyle = this.pColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                        this.g.stroke();
                    }
                    this.g.beginPath();
                    this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                    this.g.stroke();
                    this.g.lineWidth = 2;
                    this.g.beginPath();
                    this.g.strokeStyle = this.o.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                    this.g.stroke();
                    return false;
                }
            }
        });

    });
}
