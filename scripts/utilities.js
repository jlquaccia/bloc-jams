function forEach(points) {
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        scrollEffect(point);
    }
}

function scrollEffect(point) {
    point.style.opacity = 1;
    point.style.transform = "scaleX(1) translateY(0)";
    point.style.msTransform = "scaleX(1) translateY(0)";
    point.style.WebkitTransform = "scaleX(1) translateY(0)";
}