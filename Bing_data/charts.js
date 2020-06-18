var nys_population_chart = new CanvasJS.Chart("nys-population-chart", {
    animationEnabled: true,
    animationDuration: 5000,
    theme: "light2",
    title: {
        text: "Population Comparison Among Cities in New York State",
    },
    axisX: {
        valueFormatString: "####",
        crosshair: {
            enabled: true,
            snapToDataPoint: true,
        },
    },
    axisY: {
        title: "Population",
        crosshair: {
            enabled: true,
        },
    },
    toolTip: {
        shared: true,
    },
    legend: {
        cursor: "pointer",
        verticalAlign: "bottom",
        horizontalAlign: "left",
        dockInsidePlotArea: true,
        itemclick: toogleDataSeries,
    },
    data: [
        {
            type: "line",
            showInLegend: true,
            name: "Binghamton",
            markerType: "square",
            xValueFormatString: "####",
            color: "#F08080",
            dataPoints: population["Binghamton"],
        },
        {
            type: "line",
            showInLegend: true,
            name: "New Rochelle",
            markerType: "circle",
            lineDashType: "dash",
            color: "#0a6214",
            dataPoints: population["New Rochelle"],
        },
        {
            type: "line",
            showInLegend: true,
            name: "Ithaca",
            markerType: "cross",
            lineDashType: "dot",
            color: "#4c5fe8",
            dataPoints: population["Ithaca"],
        },
        {
            type: "line",
            showInLegend: true,
            name: "Schenectady",
            markerType: "triangle",
            lineDashType: "dashDot",
            color: "#c5dcd5",
            dataPoints: population["Schenectady"],
        },
    ],
});

function toogleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
    } else {
        e.dataSeries.visible = true;
    }
    nys_population_chart.render();
}

var health_bar1 = new CanvasJS.Chart("health-bar1", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
        text: "Hospital Beds in Broome County",
    },
    axisY: {
        title: "Numbers",
    },
    data: [
        {
            type: "column",
            dataPoints: health["health1"],
        },
    ],
});

var health_bar2 = new CanvasJS.Chart("health-bar2", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
        text: "Population",
    },
    axisY: {
        title: "Numbers",
    },
    data: [
        {
            type: "column",
            dataPoints: health["health2"],
        },
    ],
});

var bing_ethnicity_pie = new CanvasJS.Chart("bing-ethnicity-pie", {
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
        text: "Demographics at Binghamton City, 2018",
    },
    data: [
        {
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: ethnicity["Binghamton"],
        },
    ],
});

var bu_ethnicity_pie = new CanvasJS.Chart("bu-ethnicity-pie", {
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
        text: "Demographics at Binghamton University, 2018",
    },
    data: [
        {
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: ethnicity["BU"],
        },
    ],
});

var housing_bar_1 = new CanvasJS.Chart("housing-bar-1", {
    animationEnabled: true,
    title: {
        text: "Home Prices in Binghamton",
    },
    axisX: {
        interval: 1,
    },
    axisY2: {
        interlacedColor: "rgba(1,77,101,.2)",
        gridColor: "rgba(1,77,101,.1)",
        title: "Ratio",
    },
    data: [
        {
            type: "bar",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: housing["housing1"],
        },
    ],
});

var housing_bar_2 = new CanvasJS.Chart("housing-bar-2", {
    animationEnabled: true,
    title: {
        text: "Age Of Homes",
    },
    axisX: {
        interval: 1,
    },
    axisY2: {
        interlacedColor: "rgba(1,77,101,.2)",
        gridColor: "rgba(1,77,101,.1)",
        title: "Ratio",
    },
    data: [
        {
            type: "bar",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: housing["housing2"],
        },
    ],
});

var housing_bar_3 = new CanvasJS.Chart("housing-bar-3", {
    animationEnabled: true,
    title: {
        text: "Types Of Homes",
    },
    axisX: {
        interval: 1,
    },
    axisY2: {
        interlacedColor: "rgba(1,77,101,.2)",
        gridColor: "rgba(1,77,101,.1)",
        title: "Ratio",
    },
    data: [
        {
            type: "bar",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: housing["housing3"],
        },
    ],
});

var housing_bar_4 = new CanvasJS.Chart("housing-bar-4", {
    animationEnabled: true,
    title: {
        text: "Home Size",
    },
    axisX: {
        interval: 1,
    },
    axisY2: {
        interlacedColor: "rgba(1,77,101,.2)",
        gridColor: "rgba(1,77,101,.1)",
        title: "Ratio",
    },
    data: [
        {
            type: "bar",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: housing["housing4"],
        },
    ],
});

var housing_bar_5 = new CanvasJS.Chart("housing-bar-5", {
    animationEnabled: true,
    title: {
        text: "Home Ownership Rate",
    },
    axisX: {
        interval: 1,
    },
    axisY2: {
        interlacedColor: "rgba(1,77,101,.2)",
        gridColor: "rgba(1,77,101,.1)",
        title: "Ratio",
    },
    data: [
        {
            type: "bar",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints: housing["housing5"],
        },
    ],
});

var economy_spline = new CanvasJS.Chart("economy-spline", {
    animationEnabled: true,
    title: {
        text: "Binghamton GDP Per Capita",
    },
    axisY: {
        title: "USD",
        prefix: "$",
    },
    data: [
        {
            type: "splineArea",
            color: "rgba(54,158,173,.7)",
            markerSize: 8,
            markerType: "triangle",
            markerColor: "red",
            lineColor: "blue",
            xValueFormatString: "YYYY",
            yValueFormatString: "$#,##0.##",
            dataPoints: economy["BingGDP"],
        },
    ],
});

// nys_population_chart.render();
// health_bar1.render();
// health_bar2.render();
// bing_ethnicity_pie.render();
// bu_ethnicity_pie.render();
housing_bar_1.render();
housing_bar_2.render();
housing_bar_3.render();
housing_bar_4.render();
housing_bar_5.render();
economy_spline.render();

var health_section = document.getElementById("health");
var diversity_section = document.getElementById("diversity");
var commute_section = document.getElementById("commute");
var housing_section = document.getElementById("housing");
var economy_section = document.getElementById("economy");

function healthAppear() {
    if (health_section.getBoundingClientRect().top < window.innerHeight - 300) {
        nys_population_chart.render();
        health_bar1.render();
        health_bar2.render();
        document
            .getElementById("text-health1")
            .classList.add("enter-animation");
        document
            .getElementById("text-health2")
            .classList.add("enter-animation");
    }
}

function diversityAppear() {
    if (
        diversity_section.getBoundingClientRect().top <
        window.innerHeight - 300
    ) {
        bing_ethnicity_pie.render();
        bu_ethnicity_pie.render();
        document
            .getElementById("text-diversity1")
            .classList.add("enter-animation");
        document
            .getElementById("text-diversity2")
            .classList.add("enter-animation");
    }
}

function commuteAppear() {
    if (
        commute_section.getBoundingClientRect().top <
        window.innerHeight - 300
    ) {
        document
            .getElementById("text-commute1")
            .classList.add("enter-animation");
        document
            .getElementById("text-commute2")
            .classList.add("enter-animation");
        document
            .getElementById("text-commute3")
            .classList.add("enter-animation");
    }
}

function housingAppear() {
    if (
        housing_section.getBoundingClientRect().top <
        window.innerHeight - 300
    ) {
        document
            .getElementById("text-housing")
            .classList.add("enter-animation");
    }
}
function economyAppear() {
    if (
        economy_section.getBoundingClientRect().top <
        window.innerHeight - 300
    ) {
        document
            .getElementById("text-economy1")
            .classList.add("enter-animation");
        document
            .getElementById("text-economy2")
            .classList.add("enter-animation");
    }
}

window.addEventListener("scroll", healthAppear);
window.addEventListener("scroll", diversityAppear);
window.addEventListener("scroll", commuteAppear);
window.addEventListener("scroll", housingAppear);
window.addEventListener("scroll", economyAppear);
