document.addEventListener("readystatechange", function () {

    var xMin = -50,
        xMax = 50,
        yMin = -150,
        yMax = 150,
        positionsPerElement = 5,
        secondsPerIteration = 5,
        elements = [document.querySelector("#circle1"), document.querySelector("#circle2"), document.querySelector("#circle3")];
    var tl2 = new TimelineMax({ repeat: -1, yoyo: true, delay: 0 });
    tl2.to("#line3", 1, {attr: {points: "800,369 951,1059 333,507"}});
    for (var i = 0; i < elements.length; i++) {
        randomFloat(elements[i], positionsPerElement, secondsPerIteration);
    }

    //creates a timeline filled with sequenced animations for the paritcular element, randomly wandering around.
    function randomFloat(element, positions, duration) {
        var tl = new TimelineMax({ repeat: -1, yoyo: true, delay: Math.random() * duration });
        for (var i = 0; i < positions; i++) {
            var x = random(xMin, xMax);
            var y = random(yMin, yMax);
            tl.to(element, duration, { x: x, y: y, ease: Sine.easeInOut });

        }
        return tl;
    }

    function random(min, max) {
        return (min + Math.random() * (max - min));
    }

})