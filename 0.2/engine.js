setTimeout((function() {
    window.swift = window, document.head.innerHTML += "<style>.swift-as-console.swift-console{margin:2px;padding:10px;position:absolute;background:#f9f9f9;color:black;width:50%;left:50%;margin-left:-25%;height:25%;border:2px solid #999}swift{display:none}</style>";
    for (var e = 0; e < document.querySelectorAll("swift").length; e++) {
        var t = document.querySelectorAll("swift")[e];
        if (!(/0.[123456789]/g.test(t.textContent.split("[ swift version ").pop().split(" ]")[0]) && t.textContent.split("[ swift version ").pop().split(" ]")[0].length <= 3)) throw new TypeError("Swift.js can't find version \"" + t.textContent.split("[ swift version ").pop().split(" ]")[0].toString() + '"');
        try {
          (new Function(t.textContent.replace(/\)\n/g, ");").replace(/\[ swift version 0.[123456789] \]/, "").replace(/func\(/g, "function(").replace(/variable /g, "var ").replace(/letter /g, "let ").replace(/constant /g, "const").replace(/object \{\}/g, "var object = {}").replace(/\$$/g, "swift").replace(/function /g, "var ").replace(/string /g, "var ").replace(/\#\#\+\*[\s\S]*?\*\/|\#\#\+.*/g, '/*').replace(/\#\#\-\*[\s\S]*?\*\/|\#\#\-.*/g, '*/').replace(/\# \*[\s\S]*?\*\/|\#.*/g, '')))();
        } catch (err) {
          document.querySelector(".swift-as-console-line").innerHTML += "Uncaught " + err + "<br />";
        }
    }
}), 10);
