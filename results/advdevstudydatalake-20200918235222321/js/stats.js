var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "19350",
        "ok": "8760",
        "ko": "10590"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "850",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60152",
        "ok": "59526",
        "ko": "60152"
    },
    "meanResponseTime": {
        "total": "17752",
        "ok": "11413",
        "ko": "22996"
    },
    "standardDeviation": {
        "total": "17636",
        "ok": "13707",
        "ko": "18766"
    },
    "percentiles1": {
        "total": "12476",
        "ok": "4856",
        "ko": "22600"
    },
    "percentiles2": {
        "total": "30003",
        "ok": "17418",
        "ko": "30010"
    },
    "percentiles3": {
        "total": "55711",
        "ok": "44855",
        "ko": "57319"
    },
    "percentiles4": {
        "total": "59153",
        "ok": "56145",
        "ko": "59704"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2535,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6225,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 10590,
    "percentage": 55
},
    "meanNumberOfRequestsPerSecond": {
        "total": "91.706",
        "ok": "41.517",
        "ko": "50.19"
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
        "ok": "8760",
        "ko": "10590"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "850",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60152",
        "ok": "59526",
        "ko": "60152"
    },
    "meanResponseTime": {
        "total": "17752",
        "ok": "11413",
        "ko": "22996"
    },
    "standardDeviation": {
        "total": "17636",
        "ok": "13707",
        "ko": "18766"
    },
    "percentiles1": {
        "total": "12476",
        "ok": "4856",
        "ko": "22599"
    },
    "percentiles2": {
        "total": "30003",
        "ok": "17418",
        "ko": "30010"
    },
    "percentiles3": {
        "total": "55711",
        "ok": "44855",
        "ko": "57319"
    },
    "percentiles4": {
        "total": "59153",
        "ok": "56145",
        "ko": "59704"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2535,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6225,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "count": 10590,
    "percentage": 55
},
    "meanNumberOfRequestsPerSecond": {
        "total": "91.706",
        "ok": "41.517",
        "ko": "50.19"
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
