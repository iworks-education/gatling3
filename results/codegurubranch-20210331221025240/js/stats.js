var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "64500",
        "ok": "64370",
        "ko": "130"
    },
    "minResponseTime": {
        "total": "770",
        "ok": "770",
        "ko": "12618"
    },
    "maxResponseTime": {
        "total": "18020",
        "ok": "16834",
        "ko": "18020"
    },
    "meanResponseTime": {
        "total": "1707",
        "ok": "1680",
        "ko": "15188"
    },
    "standardDeviation": {
        "total": "2171",
        "ok": "2086",
        "ko": "1638"
    },
    "percentiles1": {
        "total": "895",
        "ok": "895",
        "ko": "14975"
    },
    "percentiles2": {
        "total": "1178",
        "ok": "1172",
        "ko": "16682"
    },
    "percentiles3": {
        "total": "6558",
        "ok": "6421",
        "ko": "17868"
    },
    "percentiles4": {
        "total": "11688",
        "ok": "11258",
        "ko": "17995"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9497,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 39247,
    "percentage": 61
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 15626,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "count": 130,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "105.565",
        "ok": "105.352",
        "ko": "0.213"
    }
},
contents: {
"req_findbytag-be401": {
        type: "REQUEST",
        name: "findByTag",
path: "findByTag",
pathFormatted: "req_findbytag-be401",
stats: {
    "name": "findByTag",
    "numberOfRequests": {
        "total": "64500",
        "ok": "64370",
        "ko": "130"
    },
    "minResponseTime": {
        "total": "770",
        "ok": "770",
        "ko": "12618"
    },
    "maxResponseTime": {
        "total": "18020",
        "ok": "16834",
        "ko": "18020"
    },
    "meanResponseTime": {
        "total": "1707",
        "ok": "1680",
        "ko": "15188"
    },
    "standardDeviation": {
        "total": "2171",
        "ok": "2086",
        "ko": "1638"
    },
    "percentiles1": {
        "total": "895",
        "ok": "895",
        "ko": "14975"
    },
    "percentiles2": {
        "total": "1179",
        "ok": "1174",
        "ko": "16682"
    },
    "percentiles3": {
        "total": "6556",
        "ok": "6420",
        "ko": "17868"
    },
    "percentiles4": {
        "total": "11688",
        "ok": "11262",
        "ko": "17995"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9497,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 39247,
    "percentage": 61
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 15626,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "count": 130,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "105.565",
        "ok": "105.352",
        "ko": "0.213"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
