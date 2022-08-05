var a_idx = 0;
jQuery(document).ready(function ($) {
    var b = new Array("😀", "😂", "❤", "😍", "😒", "😘", "💕", "😁", "🤞", "💖", "😜", "💋", "🌹", "😊", "😆", "✨", "🤩", "😚")
    $("body").click(function (e) {
        var c = Math.round(Math.random() * 17);
        var a = new Array("嘿嘿", "嘻嘻", "坏猫猫", "好猫猫", "乖猫猫", "怪猫猫", "哼哼");
        var $i = $("<span/>").text(b[c] + a[a_idx] + b[c]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,    
            y = e.pageY;
        var getRandomColor = function() {
            return "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 10) + ')';
        }
        $i.css({
            "z-index": 9999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": getRandomColor()
        });
        // $i.css.color = "red";
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            1800,
            function () {
                $i.remove();
            });
    });
});