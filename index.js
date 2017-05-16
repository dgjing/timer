var numDom = $(".num");
var timeDom = $(".time");
var playerDom = $(".player a");
var hour = 0;
var minute = 0;
var second = 0;
var timeout = null;
var timeoutstart = null;

$(timeDom).longpress(function () {
    if (!confirm("确定重置记时？")) {
        return;
    }
    resetTime();
});

$(numDom).longpress(function () {
    if (!confirm("确定重置分数？")) {
        return;
    }
    numDom[0].innerHTML = 0;
    numDom[1].innerHTML = 0;
});

function editPlayer(index) {
    var name = playerDom[index].innerHTML;
    var newName = window.prompt("修改" + name + "名称", name);
    if (newName && name != newName) {
        playerDom[index].innerHTML = newName;
    }
}

function resetTime() {
    hour = 0;
    minute = 0;
    second = 0;
    timeDom[0].innerHTML = "00:00:00";
    if (timeout) {
        clearTimeout(timeout);
    }
    if (timeoutstart) {
        clearTimeout(timeoutstart);
    }
    timeoutstart = setTimeout("getNowFormatDate()", 1000);
}

function countFun(index, type) {
    var num = parseInt(numDom[index].innerHTML);
    switch (type) {
        case "minus":
            if (num <= 0) {
                break;
            }
            numDom[index].innerHTML = --num;
            break;
        case "plus":
            numDom[index].innerHTML = ++num;
            break;
        default:
            break;
    }
}

function getNowFormatDate() {
    formateTime();
    var hourStr = hour;
    var minuteStr = minute;
    var secondStr = second;
    if (hour < 10) {
        hourStr = "0" + hour;
    }
    if (minute < 10) {
        minuteStr = "0" + minute;
    }
    if (second < 10) {
        secondStr = "0" + second;
    }
    timeDom[0].innerHTML = hourStr + ":" + minuteStr + ":" + secondStr;
    timeout = setTimeout("getNowFormatDate()", 1000);
}

function formateTime() {
    second++;
    if (second == 60) {
        second = 0;
        minute++;
        if (minute == 60) {
            hour++;
            minute = 0;
        }
    }
}
timeoutstart = setTimeout("getNowFormatDate()", 1000);