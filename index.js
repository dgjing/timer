var numDom = $(".num");
var timeDom = $(".time a");
var playerDom = $(".player a");
var hour = 0;
var minute = 0;
var second = 0;
var timeout = null;
var timeoutstart = null;
var clickTime = new Date().getTime();

function editPlayer(index) {
    var name = playerDom[index].innerHTML;
    var newName = window.prompt("修改" + name + "名称", name);
    if (newName && name != newName) {
        playerDom[index].innerHTML = newName;
    }
}

timeDom.on("click", function () {
    if (new Date().getTime() - clickTime < 500) {
        var status = confirm("确定重置记时？");
        if (!status) {
            return;
        }
        resetTime();
    } else {
        clickTime = new Date().getTime();
    }
});

numDom.on("click", function () {
    if (new Date().getTime() - clickTime < 500) {
        var status = confirm("确定重置分数？");
        if (!status) {
            return;
        }
        numDom[0].innerHTML = 0;
        numDom[1].innerHTML = 0;
    } else {
        clickTime = new Date().getTime();
    }
});

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