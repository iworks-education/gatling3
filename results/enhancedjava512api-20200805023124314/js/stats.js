var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20700",
        "ok": "20700",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "581",
        "ok": "581",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6478",
        "ok": "6478",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "857",
        "ok": "857",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "584",
        "ok": "584",
        "ko": "-"
    },
    "percentiles1": {
        "total": "695",
        "ok": "695",
        "ko": "-"
    },
    "percentiles2": {
        "total": "788",
        "ok": "788",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1756",
        "ok": "1756",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4414",
        "ok": "4414",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15846,
    "percentage": 77
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3284,
    "percentage": 16
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1570,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "114.365",
        "ok": "114.365",
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
        "total": "20700",
        "ok": "20700",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "581",
        "ok": "581",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6478",
        "ok": "6478",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "857",
        "ok": "857",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "584",
        "ok": "584",
        "ko": "-"
    },
    "percentiles1": {
        "total": "695",
        "ok": "695",
        "ko": "-"
    },
    "percentiles2": {
        "total": "788",
        "ok": "788",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1756",
        "ok": "1756",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4414",
        "ok": "4414",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15846,
    "percentage": 77
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3284,
    "percentage": 16
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1570,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "114.365",
        "ok": "114.365",
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
