(function (window, document, undefined) {
    var requestAnimationFrame = window.requestAnimationFrame
        || window.webkitRequestAnimationFrame
        || window.mozRequestAnimationFrame
        || window.msRequestAnimationFrame
        || function (callback) { return setTimeout(callback, 1000 / 60); };

    window.animateCanvas = function (elementId, opts) {
        var canvas = document.getElementById(elementId),
            ctx = canvas.getContext('2d'),
            curves = 130,
            r = 250,
            vr = 0.2,
            x = 0,
            y = 0;

        function setSize() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }

        function setBg() {
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        function draw() {
            var width = canvas.width,
                height = canvas.height;

            setBg();

            ctx.strokeStyle = "rgba(0,200,255,.2)";

            for (var i = 0; i < curves; i++) {
                ctx.beginPath();
                ctx.moveTo(
                    width / 2, //starting point X
                    height / 2 //starting point Y
                );

                ctx.quadraticCurveTo(
                    width / 2 + r * Math.sin(i * 2 * Math.PI / curves) * 2, //cpX
                    height / 2 + r * Math.cos(i * 2 * Math.PI / curves) * 2, //cpY
                    width / 2 + 400 * Math.sin(i * 80 * Math.PI / curves + x) * 2, //end point X
                    height / 2 + 400 * Math.cos(i * 80 * Math.PI / curves + y) * 2 //end point Y
                );

                ctx.stroke();
            }

            if (r > 700 || r < 250) {
               vr *= -1;
            }

            r += vr;
            x += Math.PI/2880;
            y += Math.PI/2880;

            requestAnimationFrame(draw);
        }

        window.addEventListener('resize', function () {
            setSize();
        });

        setSize();
        draw();
    };
})(window, document);
