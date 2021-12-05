const swiftEngine = setTimeout((function() {
    window.swift = content, document.head.innerHTML += "<style>.swift-as-console.swift-console{margin:2px;padding:10px;position:absolute;background:#f9f9f9;color:black;width:500px;left:50%;top:10%;margin-left:-250px;height:250px;border:2px solid #999}swift{display:none}</style>";
    for (var e = 0; e < document.querySelectorAll("swift").length; e++) {
        var t = document.querySelectorAll("swift")[e];
        if (!(/0(\.)[123456789]/g.test(String(t.getAttribute("version"))) && t.getAttribute("version").toString().length < 5)) throw new TypeError("Swift.js can't find version \"" + String(t.getAttribute("version")).substr(0, 50) + '"');
        try {
          (new Function(t.textContent.replace(/IF/g, "if").replace(/Then/g, "{").replace(/Endif/g, "}").replace(/ELSE/g, "else").replaceAll("Window", "(content || top || self || window)").replaceAll("Document", "document").replace(/\)\n/g, ");").replace(/\[ swift version 0.[123456789] \]/, "").replace(/FUNC\(/g, "function(").replace(/VARIABLE /g, "var ").replace(/LETTER /g, "let ").replace(/CONSTANT /g, "const ").replace(/FUNCTION /g, "var ").replace(/STRING /g, "var ").replace(/\#\#\+\*[\s\S]*?\*\/|\#\#\+.*/g, '/*').replace(/\#\#\-\*[\s\S]*?\*\/|\#\#\-.*/g, '*/').replace(/\# \*[\s\S]*?\*\/|\#.*/g, '')))();
        } catch (err) {
          document.querySelector(".swift-as-console-line").innerHTML += "Uncaught " + (err.toString()) + "<br />";
        }
    }
    Browser[0].KEYWORDS = {};
    Browser[0].KEYWORDS.set = function() {
      const vname = (arguments[0] || arguments[0]);
      const vrun = (arguments[1] || arguments[1]);
      if (vrun.variable) {
        if (vrun.type === "constant") {
          try {
            setInterval(new Function(t.textContent.replaceAll(vname.toString(), "const ")), 1);
          } catch (err) {
            document.querySelector(".swift-as-console-line").innerHTML += "Uncaught " + (err.toString()) + "<br />";
          }
        } else if (vrun.type === "global constant") {
          try {
            setInterval(new Function(t.textContent.replaceAll(vname.toString(), "CONSTANT ")), 3);
          } catch (err) {
            document.querySelector(".swift-as-console-line").innerHTML += new ReferenceError((err.toString())) + "<br />";
          }
        }
      } else if (vrun.operator) {
        try {
          setInterval(new Function(t.textContent.replaceAll(vname.toString(), vrun.operation)), 3);
        } catch (err) {
          document.querySelector(".swift-as-console-line").innerHTML += new ReferenceError((err.toString())) + "<br />";
        }
      }
    };
}), 10);
