var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};
var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt(diffX * diffX + diffY * diffY);
};
var getDistanceHint = function (distance) {
    if (distance < 20) {
        return "Обожешься!";
    } else if (distance < 40) {
        return "Очень горячо!";
    } else if (distance < 80) {
        return "Горячо";
    } else if (distance < 160) {
        return "Тепло";
    } else if (distance < 320) {
        return "Холодно";
    } else if (distance < 640) {
        return "Очень холодно";
    } else {
        return "Замерзнешь!";
    }
};
var width = 600;
var height = 450;
var clicks = 0;
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height),
};
$("#map").click(function (event) {
    clicks++;
    var distance = getDistance(event, target);
    var distanceHint = getDistanceHint(distance);
    $("#distance").text(distanceHint);
    if (distance < 25) {
        alert("Подарки найдены!Кликов сделано: " + clicks);
    }
});
