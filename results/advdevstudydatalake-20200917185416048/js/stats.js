var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "19350",
        "ok": "19350",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "770",
        "ok": "770",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8644",
        "ok": "8644",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1120",
        "ok": "1120",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "838",
        "ok": "838",
        "ko": "-"
    },
    "percentiles1": {
        "total": "826",
        "ok": "826",
        "ko": "-"
    },
    "percentiles2": {
        "total": "906",
        "ok": "906",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3424",
        "ok": "3424",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4886",
        "ok": "4886",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3886,
    "percentage": 20
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 12878,
    "percentage": 67
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2586,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "105.163",
        "ok": "105.163",
        "ko": "-"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "19350",
        "ok": "19350",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "770",
        "ok": "770",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8644",
        "ok": "8644",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1120",
        "ok": "1120",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "838",
        "ok": "838",
        "ko": "-"
    },
    "percentiles1": {
        "total": "826",
        "ok": "826",
        "ko": "-"
    },
    "percentiles2": {
        "total": "906",
        "ok": "906",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3424",
        "ok": "3424",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4886",
        "ok": "4886",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3886,
    "percentage": 20
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 12878,
    "percentage": 67
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2586,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "105.163",
        "ok": "105.163",
        "ko": "-"
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
