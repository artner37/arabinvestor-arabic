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
$(document).ready(function ()  {
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
    $("#slider-impact1").slider({
        orientation: "vertical",
        min: 0,
        max: 100,
        isRTL: true,
        create: function () {
            handle.text($(this).slider("value"));
        },
        slide: function (event, ui) {
            handle.text(ui.value);
        }
    });
    var handle3 = $("#custom-handle2");
    $("#slider-impact2").slider({
        orientation: "vertical",
        min: 0,
        max: 100,
        isRTL: true,
        create: function () {
            handle3.text($(this).slider("value"));
        },
        slide: function (event, ui) {
            handle3.text(ui.value);
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
var chart3 = AmCharts.makeChart("chartdiv3", {
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
var chartbar = AmCharts.makeChart("barchart", {
    "type": "serial",
    "theme": "light",
    "categoryField": "catergory",
    "rotate": true,
    "startDuration": 1,
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left"
    },
    "trendLines": [],
    "graphs": [
        {
            "balloonText": "Total Users:[[value]]",
            "fillAlphas": 0.8,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "Total Users",
            "type": "column",
            "valueField": "total"
        },
        {
            "balloonText": "Companies Completed:[[value]]",
            "fillAlphas": 0.8,
            "id": "AmGraph-2",
            "lineAlpha": 0.2,
            "title": "Completed",
            "type": "column",
            "valueField": "completed"
        },
        {
            "balloonText": "Companies in progress:[[value]]",
            "fillAlphas": 0.8,
            "id": "AmGraph-3",
            "lineAlpha": 0.2,
            "title": "Companies in progress",
            "type": "column",
            "valueField": "progress"
        }
    ],
    "guides": [],
    "valueAxes": [
        {
            "id": "ValueAxis-1",
            "position": "top",
            "axisAlpha": 0
        }
    ],
    "allLabels": [],
    "balloon": {},
    "titles": [],
    "dataProvider": [
        {
            "catergory": "CorporateGovernance",
            "total":100,
            "completed": 23.5,
            "progress": 18.1
        },
        {
            "catergory": "Corporate Social Responsiblity",
            "total": 10,
            "completed": 26.2,
            "progress": 22.8
        },
        {
            "catergory": "Gender Equality",
            "total": 40,
            "completed": 30.1,
            "progress": 23.9
        },
        {
            "catergory": "Innovation",
            "total": 30,
            "completed": 29.5,
            "progress": 25.1
        },
        {
            "catergory": "Impact of Investments",
            "total": 60,
            "completed": 24.6,
            "progress": 25
        },
        {
            "catergory": "Sustainablity",
            "total": 80,
            "completed": 24.6,
            "progress": 25
        }
    ],
    "export": {
        "enabled": true
    }

});
$(function () {
    $('#datetimepicker1').datetimepicker();
});

$(".showchart").click(function () {
    $(".chartshow").removeClass("hidechart");
    $(".chartshow").addClass("displaychart");
});