var a_idx = 0;
jQuery(document).ready(function ($) {
    var b = new Array("😀", "😂", "❤", "😍", "😒", "😘", "💕", "😁", "🤞", "💖", "😜", "💋", "🌹", "😊", "😆", "✨", "🤩", "😚", "😭", "😇", "🤭", "😻", "🙈", "🐾")
    $("body").click(function (e) {
        var c = Math.round(Math.random() * 23);
        var a = new Array("嘿嘿", "嘻嘻", "坏猫猫", "好猫猫", "乖猫猫", "怪猫猫", "哼哼", "忘记分开后的第几天起", "喜欢一个人 看下大雨", "没联络 孤单就像连锁反应", "想要快乐都没力气", "雷雨世界像场灾难电影", "让现在的我 可怜到底", "对不起 谁也没有时光机器", "已经结束的没有商量的余地", "我希望你 是我独家的记忆", "摆在心底", "不管别人说的多么难听", "现在我拥有的事情", "是你 是给我一半的爱情", "我喜欢你 是我独家的记忆", "谁也不行", "从我这个身体中拿走你", "在我感情的封锁区", "有关于你 绝口不提 没问题", "雷雨世界像场灾难电影", "让现在的我 可怜到底", "对不起 谁也没有时光机器", "已经结束的 没有商量的余地", "我希望你 是我独家的记忆", "摆在心底", "不管别人说的多么难听", "现在我拥有的事情", "是你 是给我一半的爱情", "我喜欢你 是我独家的记忆", "谁也不行", "从我这个身体中拿走你", "在我感情的封锁区", "有关于你绝口不提 没关系", "我喜欢你 是我独家的记忆", "摆在心底", "不管别人说的多么难听", "现在我拥有的事情", "是你 是给我一半的爱情", "我喜欢你 是我独家的记忆", "谁也不行", "从我这个身体中拿走你", "在我感情的封锁区", "有关于你 绝口不提 没限期");
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
            "color": getRandomColor(),
            FontFace: "/font/SIMSUN.TTC"
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