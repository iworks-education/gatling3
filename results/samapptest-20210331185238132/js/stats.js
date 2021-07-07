var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "64500",
        "ok": "63106",
        "ko": "1394"
    },
    "minResponseTime": {
        "total": "200",
        "ok": "200",
        "ko": "10413"
    },
    "maxResponseTime": {
        "total": "41005",
        "ok": "41005",
        "ko": "37330"
    },
    "meanResponseTime": {
        "total": "1803",
        "ok": "1530",
        "ko": "14181"
    },
    "standardDeviation": {
        "total": "4080",
        "ok": "3652",
        "ko": "3123"
    },
    "percentiles1": {
        "total": "247",
        "ok": "245",
        "ko": "13986"
    },
    "percentiles2": {
        "total": "580",
        "ok": "507",
        "ko": "16047"
    },
    "percentiles3": {
        "total": "12593",
        "ok": "11136",
        "ko": "18901"
    },
    "percentiles4": {
        "total": "18600",
        "ok": "17970",
        "ko": "21063"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 49699,
    "percentage": 77
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1082,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12325,
    "percentage": 19
},
    "group4": {
    "name": "failed",
    "count": 1394,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "104.708",
        "ok": "102.445",
        "ko": "2.263"
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
        "total": "64500",
        "ok": "63106",
        "ko": "1394"
    },
    "minResponseTime": {
        "total": "200",
        "ok": "200",
        "ko": "10413"
    },
    "maxResponseTime": {
        "total": "41005",
        "ok": "41005",
        "ko": "37330"
    },
    "meanResponseTime": {
        "total": "1803",
        "ok": "1530",
        "ko": "14181"
    },
    "standardDeviation": {
        "total": "4080",
        "ok": "3652",
        "ko": "3123"
    },
    "percentiles1": {
        "total": "247",
        "ok": "245",
        "ko": "13986"
    },
    "percentiles2": {
        "total": "580",
        "ok": "507",
        "ko": "16047"
    },
    "percentiles3": {
        "total": "12593",
        "ok": "11137",
        "ko": "18901"
    },
    "percentiles4": {
        "total": "18600",
        "ok": "17970",
        "ko": "21063"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 49699,
    "percentage": 77
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1082,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12325,
    "percentage": 19
},
    "group4": {
    "name": "failed",
    "count": 1394,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "104.708",
        "ok": "102.445",
        "ko": "2.263"
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
