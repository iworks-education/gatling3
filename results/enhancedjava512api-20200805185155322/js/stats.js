var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20700",
        "ok": "10133",
        "ko": "10567"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "653",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "81163",
        "ok": "65840",
        "ko": "81163"
    },
    "meanResponseTime": {
        "total": "23042",
        "ok": "19022",
        "ko": "26896"
    },
    "standardDeviation": {
        "total": "21947",
        "ok": "19346",
        "ko": "23543"
    },
    "percentiles1": {
        "total": "15681",
        "ok": "10415",
        "ko": "20064"
    },
    "percentiles2": {
        "total": "43479",
        "ok": "35853",
        "ko": "52950"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "54749",
        "ko": "60034"
    },
    "percentiles4": {
        "total": "62134",
        "ok": "58964",
        "ko": "64659"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1892,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 251,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7990,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "count": 10567,
    "percentage": 51
},
    "meanNumberOfRequestsPerSecond": {
        "total": "88.462",
        "ok": "43.303",
        "ko": "45.158"
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
        "ok": "10133",
        "ko": "10567"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "653",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "81163",
        "ok": "65840",
        "ko": "81163"
    },
    "meanResponseTime": {
        "total": "23042",
        "ok": "19022",
        "ko": "26896"
    },
    "standardDeviation": {
        "total": "21947",
        "ok": "19346",
        "ko": "23543"
    },
    "percentiles1": {
        "total": "15681",
        "ok": "10415",
        "ko": "20080"
    },
    "percentiles2": {
        "total": "43479",
        "ok": "35853",
        "ko": "52540"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "54749",
        "ko": "60034"
    },
    "percentiles4": {
        "total": "62134",
        "ok": "58964",
        "ko": "64649"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1892,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 251,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7990,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "count": 10567,
    "percentage": 51
},
    "meanNumberOfRequestsPerSecond": {
        "total": "88.462",
        "ok": "43.303",
        "ko": "45.158"
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
