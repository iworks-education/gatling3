var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "19350",
        "ok": "18204",
        "ko": "1146"
    },
    "minResponseTime": {
        "total": "556",
        "ok": "556",
        "ko": "10178"
    },
    "maxResponseTime": {
        "total": "60495",
        "ok": "59802",
        "ko": "60495"
    },
    "meanResponseTime": {
        "total": "6062",
        "ok": "5564",
        "ko": "13967"
    },
    "standardDeviation": {
        "total": "8507",
        "ok": "8323",
        "ko": "7435"
    },
    "percentiles1": {
        "total": "1197",
        "ok": "865",
        "ko": "12236"
    },
    "percentiles2": {
        "total": "10178",
        "ok": "8778",
        "ko": "13507"
    },
    "percentiles3": {
        "total": "17479",
        "ok": "17440",
        "ko": "17639"
    },
    "percentiles4": {
        "total": "48301",
        "ok": "46947",
        "ko": "60005"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8895,
    "percentage": 46
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 784,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8525,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "count": 1146,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "81.992",
        "ok": "77.136",
        "ko": "4.856"
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
        "ok": "18204",
        "ko": "1146"
    },
    "minResponseTime": {
        "total": "556",
        "ok": "556",
        "ko": "10178"
    },
    "maxResponseTime": {
        "total": "60495",
        "ok": "59802",
        "ko": "60495"
    },
    "meanResponseTime": {
        "total": "6062",
        "ok": "5564",
        "ko": "13967"
    },
    "standardDeviation": {
        "total": "8507",
        "ok": "8323",
        "ko": "7435"
    },
    "percentiles1": {
        "total": "1194",
        "ok": "865",
        "ko": "12236"
    },
    "percentiles2": {
        "total": "10183",
        "ok": "8778",
        "ko": "13507"
    },
    "percentiles3": {
        "total": "17480",
        "ok": "17440",
        "ko": "17639"
    },
    "percentiles4": {
        "total": "48301",
        "ok": "46947",
        "ko": "60005"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 8895,
    "percentage": 46
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 784,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8525,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "count": 1146,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "81.992",
        "ok": "77.136",
        "ko": "4.856"
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
