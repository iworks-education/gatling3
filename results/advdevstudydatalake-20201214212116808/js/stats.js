var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "61500",
        "ok": "61500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "798",
        "ok": "798",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9685",
        "ok": "9685",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1216",
        "ok": "1216",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "928",
        "ok": "928",
        "ko": "-"
    },
    "percentiles1": {
        "total": "904",
        "ok": "904",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1068",
        "ok": "1069",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3471",
        "ok": "3471",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5780",
        "ok": "5780",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 51885,
    "percentage": 84
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 9614,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "101.653",
        "ok": "101.653",
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
        "total": "61500",
        "ok": "61500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "798",
        "ok": "798",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9685",
        "ok": "9685",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1216",
        "ok": "1216",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "928",
        "ok": "928",
        "ko": "-"
    },
    "percentiles1": {
        "total": "904",
        "ok": "904",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1068",
        "ok": "1068",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3471",
        "ok": "3471",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5780",
        "ok": "5780",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 51885,
    "percentage": 84
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 9614,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "101.653",
        "ok": "101.653",
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
