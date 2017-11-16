type = ['', 'info', 'success', 'warning', 'danger'];


demo = {
    initPickColor: function () {
        $('.pick-class-label').click(function () {
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if (display_div.length) {
                var display_buttons = display_div.find('.btn');
                display_buttons.removeClass(old_class);
                display_buttons.addClass(new_class);
                display_div.attr('data-class', new_class);
            }
        });
    },

    initChartist: function () {

        var dataSales = {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
                [287, 385, 490, 562, 594, 626, 698, 895, 952],
                [67, 152, 193, 240, 387, 435, 535, 642, 744],
                [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
        };

        var optionsSales = {
            lineSmooth: false,
            low: 0,
            high: 1000,
            showArea: true,
            height: "245px",
            axisX: {
                showGrid: false,
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 3
            }),
            showLine: true,
            showPoint: false,
        };

        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


        var data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
                [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
        };

        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };

        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        Chartist.Line('#chartActivity', data, options, responsiveOptions);

        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };

        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };

        Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

        Chartist.Pie('#chartPreferences', {
            labels: ['62%', '18%', '6%', '14%'],
            series: [62, 18, 6, 14]
        });

        var userdata = {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            series: [
                [5, 4, 3, 7, 5, 10, 3],
                [3, 2, 9, 5, 4, 6, 4]
            ]
        };

        var useroptions = {
            seriesBarDistance: 10
        };

        var userresponsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        new Chartist.Bar('#userchart', userdata, useroptions, userresponsiveOptions);

        var assessordata = {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            series: [
                [3, 5, 5, 6, 1, 4, 1],
                [2, 1, 3, 8, 6, 5, 3]
            ]
        };

        var assessoroptions = {
            seriesBarDistance: 10
        };

        var assessorresponsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        new Chartist.Bar('#assessorchart', assessordata, assessoroptions, assessorresponsiveOptions);
    },

    initGoogleMaps: function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            styles: [{ "featureType": "water", "stylers": [{ "saturation": 43 }, { "lightness": -11 }, { "hue": "#0088ff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }, { "saturation": -100 }, { "lightness": 99 }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#808080" }, { "lightness": 54 }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ece2d9" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#ccdca1" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#767676" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#b8cb93" }] }, { "featureType": "poi.park", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.medical", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "simplified" }] }]

        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    },

    showNotification: function (from, align) {
        color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: "ti-gift",
            message: "Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer."

        }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                }
            });
    },
    initDocumentationCharts: function () {
        //     	init single simple line chart
        var dataPerformance = {
            labels: ['6pm', '9pm', '11pm', '2am', '4am', '8am', '2pm', '5pm', '8pm', '11pm', '4am'],
            series: [
                [1, 6, 8, 7, 4, 7, 8, 12, 16, 17, 14, 13]
            ]
        };

        var optionsPerformance = {
            showPoint: false,
            lineSmooth: true,
            height: "200px",
            axisX: {
                showGrid: false,
                showLabel: true
            },
            axisY: {
                offset: 40,
            },
            low: 0,
            high: 16,
            height: "250px"
        };

        Chartist.Line('#chartPerformance', dataPerformance, optionsPerformance);

        //     init single line with points chart
        var dataStock = {
            labels: ['\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
            series: [
                [22.20, 34.90, 42.28, 51.93, 62.21, 80.23, 62.21, 82.12, 102.50, 107.23]
            ]
        };

        var optionsStock = {
            lineSmooth: false,
            height: "200px",
            axisY: {
                offset: 40,
                labelInterpolationFnc: function (value) {
                    return '$' + value;
                }

            },
            low: 10,
            height: "250px",
            high: 110,
            classNames: {
                point: 'ct-point ct-green',
                line: 'ct-line ct-green'
            }
        };

        Chartist.Line('#chartStock', dataStock, optionsStock);

        //      init multiple lines chart
        var dataSales = {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
                [287, 385, 490, 562, 594, 626, 698, 895, 952],
                [67, 152, 193, 240, 387, 435, 535, 642, 744],
                [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
        };

        var optionsSales = {
            lineSmooth: false,
            low: 0,
            high: 1000,
            showArea: true,
            height: "245px",
            axisX: {
                showGrid: false,
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 3
            }),
            showLine: true,
            showPoint: false,
        };

        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);

        //      pie chart
        Chartist.Pie('#chartPreferences', {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
        });

        //      bar chart
        var dataViews = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };

        var optionsViews = {
            seriesBarDistance: 10,
            classNames: {
                bar: 'ct-bar'
            },
            axisX: {
                showGrid: false,

            },
            height: "250px"

        };

        var responsiveOptionsViews = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        Chartist.Bar('#chartViews', dataViews, optionsViews, responsiveOptionsViews);

        //     multiple bars chart
        var data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
                [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
        };

        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };

        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        Chartist.Line('#chartActivity', data, options, responsiveOptions);

    }

}
var sliders = $("#sliders .slider");
var availableTotal = 100;

sliders.each(function () {
    var init_value = parseInt($(this).text());

    $(this).siblings('.value').text(init_value);

    $(this).empty().slider({
        value: init_value,
        min: 0,
        max: availableTotal,
        range: "max",
        step: 2,
        animate: 0,

        slide: function (event, ui) {

            // Update display to current value
            $(this).siblings('.value').text(ui.value);

            // Get current total
            var total = 0;

            sliders.not(this).each(function () {
                total += $(this).slider("option", "value");
            });

            // Need to do this because apparently jQ UI
            // does not update value until this event completes
            total += ui.value;

            var delta = availableTotal - total;

            // Update each slider
            sliders.not(this).each(function () {
                var t = $(this),
                    value = t.slider("option", "value");

                var new_value = value + (delta / 2);

                if (new_value < 0 || ui.value == 100)
                    new_value = 0;
                if (new_value > 100)
                    new_value = 100;

                t.slider('value', new_value);
                $(this).find('.ui-slider-handle').text(new_value + '%');
            });
        },
        create: function (event, ui) {
            var v = $(this).slider('value');
            $(this).find('.ui-slider-handle').text(v - 1 + '%');
        }
    });
});
$(function () {
    $("#progressbar").progressbar({
        value: 55
    });
    $("#progressbar1").progressbar({
        value: 16
    });
});

$("div.panel-heading, .next-acc").on("click", function (event) {

    var target = $(event.target);
    if (target.is('input:checkbox')) return;

    var that = this;

    if (target.is('.next-acc')) {
        that = $('div[data-href="' + $(target).attr("href") + '"]');
    }

    $("#accordion").each(function () {
        var checkbox = $(this).find("input[type='checkbox']");
        checkbox.prop("checked", false);
    })
    var checkbox = $(that).find("input[type='checkbox']");
    if (!checkbox.prop("checked")) {
        checkbox.prop("checked", true);
    } else {
        checkbox.prop("checked", false);
    }
});

$(function () {
    $('input[type="radio"]').on('click', function () {
        $('.textboxes').show();

        $("#score").text("test");
    });
});

$(function () {
    var handle = $("#custom-handle");
    $(".slider-impact").slider({
        create: function () {
            handle.text($(this).slider("value"));
        },
        slide: function (event, ui) {
            handle.text(ui.value);
        }
    });
    var handle2 = $(".ui-slider-handle");
    $(".slider-assessor").slider({
        max: 20,
        create: function () {
            handle2.text($(this).slider("value"));
        },
        slide: function (event, ui) {
            handle2.text(ui.value);
        }
    });
});
$("input:radio").click(function () {
    var target = $('.panel > a[aria-expanded="true"]').parent('div');
    //var val = $(this).val();
    $(target).find('.criteria-content > ul').find("input:radio").attr("disabled", "disabled");
    //$("input:radio[value='" + val + "']").not(this).attr("disabled", "disabled");
});

function SetScore(select) {
    var target = $('.panel > a[aria-expanded="true"]').parent('div');

    var selectvalue = $(target).find(".score");
    //console.log()
    var level = $(target).find('input[type="radio"]:checked').val();
    var levelValue = (16 * level) + (level - 1);


    var min = levelValue - 16;

    var score = levelValue - (($(select).val() - 1) * 4);

    $(selectvalue).text(score);
}
var chart = AmCharts.makeChart("chartdiv", {
    "type": "radar",
    "theme": "light",
    "dataProvider": [{
        "criteria": "Criteria 1",
        "score": 156.9
    }, {
        "criteria": "Criteria 2",
        "score": 131.1
    }, {
        "criteria": "Criteria 3",
        "score": 115.8
    }, {
        "criteria": "Criteria 4",
        "score": 109.9
    }, {
        "criteria": "Criteria 5",
        "score": 108.3
    }, {
        "criteria": "Criteria 6",
        "score": 99
    }],
    "valueAxes": [{
        "axisTitleOffset": 20,
        "minimum": 0,
        "axisAlpha": 0.5,
        "axisColor": "#fff",
        "guides": [{
            "value": 0,
            "toValue": 50,
            "fillColor": "#fff",
            "fillAlpha": 0.4
        }, {
            "value": 50,
            "toValue": 100,
            "fillColor": "#fff",
            "fillAlpha": 0.3
        }, {
            "value": 100,
            "toValue": 150,
            "fillColor": "#fff",
            "fillAlpha": 0.2
        }, {
            "value": 150,
            "toValue": 200,
            "fillColor": "#fff",
            "fillAlpha": 0.1
        }]
    }],
    "startDuration": 2,
    "graphs": [{
        "balloonText": "Score : [[value]]",
        "bullet": "round",
        "valueField": "score"
    }],
    "categoryField": "criteria"
});
var chart2 = AmCharts.makeChart("chartdiv2", {
    "type": "radar",
    "theme": "light",
    "dataProvider": [{
        "criteria": "Criteria 1",
        "score": 156.9,
        "scorem": 100000
    }, {
        "criteria": "Criteria 2",
        "score": 131.1,
        "scorem": 90000
    }, {
        "criteria": "Criteria 3",
        "score": 115.8,
        "scorem": 120000
    }, {
        "criteria": "Criteria 4",
        "score": 109.9,
        "scorem": 190000
    }, {
        "criteria": "Criteria 5",
        "score": 108.3,
        "scorem": 70000
    }, {
        "criteria": "Criteria 6",
        "score": 99,
        "scorem": 60000
    }],
    "valueAxes": [{
        "axisTitleOffset": 20,
        "minimum": 1,
        "axisColor": "#fff",
        "axisAlpha": 0.15,
        "guides": [{
            "value": 0,
            "toValue": 50,
            "fillColor": "#fff",
            "fillAlpha": 0.4
        }, {
            "value": 50,
            "toValue": 100,
            "fillColor": "#fff",
            "fillAlpha": 0.3
        }, {
            "value": 100,
            "toValue": 150,
            "fillColor": "#fff",
            "fillAlpha": 0.2
        }, {
            "value": 150,
            "toValue": 200,
            "fillColor": "#fff",
            "fillAlpha": 0.1
        }]
    }, {
        "id": "v2",
        "axisTitleOffset": 20,
        "minimum": 0,
        "axisAlpha": 0.15,
        "axisColor": "#fff",
        "inside": true
    }],
    "startDuration": 2,
    "graphs": [{
        "balloonText": "[[value]]",
        "bullet": "round",
        "valueField": "score"
    }, {
        "balloonText": "[[value]]",
        "bullet": "square",
        "valueField": "scorem",
        "valueAxis": "v2"
    }],
    "categoryField": "criteria"
});