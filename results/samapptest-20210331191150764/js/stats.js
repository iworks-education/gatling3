var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "64500",
        "ok": "61577",
        "ko": "2923"
    },
    "minResponseTime": {
        "total": "197",
        "ok": "197",
        "ko": "10616"
    },
    "maxResponseTime": {
        "total": "42333",
        "ok": "39978",
        "ko": "42333"
    },
    "meanResponseTime": {
        "total": "2156",
        "ok": "1507",
        "ko": "15832"
    },
    "standardDeviation": {
        "total": "4986",
        "ok": "3997",
        "ko": "4012"
    },
    "percentiles1": {
        "total": "243",
        "ok": "239",
        "ko": "15149"
    },
    "percentiles2": {
        "total": "458",
        "ok": "420",
        "ko": "17410"
    },
    "percentiles3": {
        "total": "15280",
        "ok": "10599",
        "ko": "21323"
    },
    "percentiles4": {
        "total": "21376",
        "ok": "20242",
        "ko": "35577"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 51668,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 504,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 9405,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 2923,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "102.871",
        "ok": "98.209",
        "ko": "4.662"
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
        "ok": "61577",
        "ko": "2923"
    },
    "minResponseTime": {
        "total": "197",
        "ok": "197",
        "ko": "10616"
    },
    "maxResponseTime": {
        "total": "42333",
        "ok": "39978",
        "ko": "42333"
    },
    "meanResponseTime": {
        "total": "2156",
        "ok": "1507",
        "ko": "15832"
    },
    "standardDeviation": {
        "total": "4986",
        "ok": "3997",
        "ko": "4012"
    },
    "percentiles1": {
        "total": "243",
        "ok": "239",
        "ko": "15149"
    },
    "percentiles2": {
        "total": "458",
        "ok": "420",
        "ko": "17410"
    },
    "percentiles3": {
        "total": "15280",
        "ok": "10597",
        "ko": "21314"
    },
    "percentiles4": {
        "total": "21376",
        "ok": "20242",
        "ko": "35577"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 51668,
    "percentage": 80
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 504,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 9405,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 2923,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "102.871",
        "ok": "98.209",
        "ko": "4.662"
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
