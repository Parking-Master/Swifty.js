function progress() {
    var e = document.createElement("style");
    e.textContent = "#progress{position:fixed;top:0;left:0;width:100%;background-color:transparent}#bar{width:1%;height:2px;background-color:#333}", document.body.innerHTML = '\n<div id="progress">\n  <div id="bar"></div>\n</div>\n' + document.body.innerHTML, document.head.appendChild(e);
    var t = document.createElement("script");
    t.textContent = 'var loadTime=Date.now();document.onreadystatechange=function(){if(document.readyState=="complete"||document.readyState=="interactive"){var oldLoadTime = Date.now()-loadTime;function getNewLoadTime(){setInterval(function(){if(oldLoadTime==Date.now()-loadTime){return 20;}else{return Date.now()-loadTime;}},1);}getNewLoadTime();var init=0;window.addEventListener("load",function(){var e,t,n;0==init&&(init=1,e=document.getElementById("bar"),t=1,n=setInterval(function(){100<=t?(clearInterval(n),init=0,document.querySelector("#progress").remove()):(t++,e.style.width=t+"%")},getNewLoadTime()))});}};', document.getElementById("progress").appendChild(t);
}

function $minify(e) {
    return e.replace(/[\(]function/g, "!function").replace(/\}[\)][\(][\)]/g, "}()").replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "").replace(/=/g, "=").replace(/\n/, "").replace(/, [123456789]000[\)]/g, ",1e3)").replace(/, [123456789]000[\)]/g, ",1e3)").replace(/setTimeout\!/g, "setTimeout(").replace(/setInterval\!/g, "setInterval(").replace(/; \}/g, "}");
}
"complete" === document.readyState && setTimeout((function() {
    document.body.innerHTML = document.body.innerHTML.replace(/<script src="/g, '<script src="x'), document.body.innerHTML = document.body.innerHTML.replace(/<script src='/g, "<script src='x");
}), 100);
var red = "red",
    blue = "blue",
    green = "green",
    yellow = "yellow",
    orange = "orange",
    pink = "pink",
    purple = "purple",
    beige = "beige",
    white = "white",
    black = "black",
    gray = "gray",
    $doc = document,
    $wind = window;
const $dom = document.body;
window.href = window.location.href, window.loc = window.location, window.port = window.location.port, window.name = window.location.hostname, window.host = window.location.host, window.referrer = document.referrer, window.protocol = window.location.protocol, window.url = window.location.href || document.URL;
var ifURIslash = $wind.loc.href.split("://") ? "//" : "";
const urlnosearch = loc.search ? document.URL.split("?")[0] : document.URL;
window.path = "/" + urlnosearch.split("/").pop();
const n_ = window.loc.pathname.split("/").pop();

function id(e) {
    return document.getElementById(e);
}

function cs(e) {
    return document.querySelector("." + (e));
}

function $return(e) {
    return e;
}

function $output(e) {
    var t = null === e ? "color: #555;" : "color: #222;";
    console.log(`%c${e}`, t + " font-size: 12px; font-family: Arial");
}
let _;

function $locate(e, t, n) {
    e.includes(t);
}
window.filename = n_.split(".")[0], window.filetype = "." + window.loc.pathname.split(".").pop(), window.file = window.loc.pathname.split("/").pop(), window.uri = location.protocol + ifURIslash + document.URL.split("://").pop(), console.err = console.error, console.wn = console.warn, console.out = console.log, console.push = console.group, console.dr = console.dir, console.hp = console.info, document.tag = function(e) {
        return document.querySelector(e)
    }, document.tags = function(e) {
        for (var t = 0; t < document.querySelectorAll(e).length; t++) return document.querySelectorAll(e)[t]
    },
    function(e) {
        "object" != typeof this && (_ = null != this && _)
    }(), $html = function(e, t) {
        if (0 === html.arguments.length || null == html.arguments) return e.innerHTML;
        document.querySelector(e).innerHTML = t
    }, $doc.El = document.documentElement, $out = console;
for (var scripts = document.querySelectorAll("script"), i = 0; i < scripts.length; i++) scripts = scripts[i];

function $pop(e) {
  null == e || null == e || "undefined" == e ? alert() : alert(e);
}

function $run(e) {
  e();
}

HTMLElement.prototype.onClickEvent = function(event) {
  return this.addEventListener("click", event);
};

HTMLElement.prototype.onDoubleClickEvent = function(event) {
  return this.addEventListener("dblclick", event);
};

var ElementClicks = 1;
HTMLElement.prototype.onTripleClickEvent = function(event) {
  return this.addEventListener("click", function(){ if (ElementClicks >= 3) { event(); ElementClicks = 1; } else { ElementClicks++; } });
};

HTMLElement.prototype.onLoadEvent = function(event) {
  return this.addEventListener("load", event);
};

HTMLElement.prototype.onContextMenuEvent = function(event) {
  return this.addEventListener("contextmenu", event);
};

HTMLElement.prototype.onDoubleTapEvent = function(event) {
  let gthis = this;
  function returnEvent(ethis) {
    return ethis.oncontextmenu = function(e) { if (!e.repeat) { e.preventDefault(); event(); gthis.oncontextmenu = void(0); returnEvent(ethis) } };
  }
  returnEvent(gthis || this);
};

function $dialog(e) {
    var t, n, o = function() {
        document.querySelector(".swift-overlay").remove(), document.querySelector(".swift-modal-content").remove()
    };
    null != document.querySelector(".swift-overlay") || "object" != typeof e && ((t = $doc.createElement("div")).className = "swift-overlay swift-modal", t.addEventListener("oncontextmenu", (function(e) {
        return e.preventDefault(), !1
    })), t.style = "position:absolute;left:0;top:0;bottom:0;right:0;width:100%;height:100%;background:#555;opacity:0.6;z-index:10000;", t.oncontextmenu = function(e) {
        return e.preventDefault(), !1
    }, document.addEventListener("keydown", (function(e) {
        "Escape" === e.key && o()
    })), $doc.body.appendChild(t), n = $doc.createElement("div"), null == e.title && null == typeof e.title || e.title, null == e.text && null == typeof e.text || e.text, document.body.innerHTML += '<div class="swift-modal-content" oncontextmenu="return false" style="color:#111; opacity: 1 !important;z-index:10000;"><img style="width:4%;margin-left:10px;margin-top:10px;user-select:none;-ms-user-select:none;-moz-user-select:none;-webkit-user-select;none;pointer-events:none;" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xOSgETTAT00g2Bd9n8SWJgHaHa%26pid%3DApi&f=1" width="4%" /><span style="user-select:none;-ms-user-select:none;-moz-user-select:none;-webkit-user-select;none;margin-left:6px;display:inline-block;" id="swift-info-location"></span><span style="position:relative;top:45%;left:-50%;">' + e + "</span><br><button id='swift-modal-button__confirm'>OK</button></div>", t.innerHTML = n.innerHTML, document.querySelector("#swift-modal-button__confirm").onclick = function() {
        o()
    }, document.querySelector("#swift-modal-button__confirm").style = "cursor:pointer;position:relative;left:85%;top:40%;background-color:#dbdbdb;padding:4px;margin:2px;color:#222;font-size:0.8em;padding-left:4px;padding-right:4px;border:0;border-radius:4px;", document.querySelector("#swift-info-location").textContent = location.hostname, $doc.querySelector(".swift-modal-content").style = "font-family:Arial,helvetica,sans-serif;font-size:auto;padding:5px;position:absolute;left:50%;top:42.5%;margin-left:-201px;width:402px;height:105px;background-color:#fdfdfd;border:0;border-radius:5px;z-index:11000;")
}

function $import(e) {
    if ("css" == e.split(".").pop())(t = document.createElement("link")).href = e, document.head.appendChild(t);
    else if ("js" == e.split(".").pop()) {
        var t;
        (t = document.createElement("script")).src = e, document.body.appendChild(t)
    }
}
var $build = function(e, t) {
    var n;
    return (n = document.createElement(e)).textContent = t, document.documentElement.appendChild(n)
};

function getSource(e) {
    var t = document.createElement("iframe");
    return t.src = "https://5e47-134-56-126-103.ngrok.io/view-source?url=" + e, t.style.display = "none", document.body.appendChild(t), window.addEventListener("message", (function(e) {
        window.newSource = decodeURIComponent(e.data)
    })), window.newSource
}

setTimeout(function() {
  for (let i = 0; i < document.querySelectorAll("swift").length; i++) {
    document.querySelectorAll("swift")[i].style.display = "none";
    let r = document.createElement("script");
    r.src = "https://cdn.jsdelivr.net/gh/Parking-Master/Swifty.js@latest/" + String(document.querySelectorAll("swift")[i].getAttribute("version")) + "/engine.js";
    document.body.appendChild(r);
  }
}, 1);

document.body.innerHTML += `
  <div class="swift-as-console swift-console">
    <div class="swift-as-console-content">
      <div class="swift-as-console-line">

      </div>
    </div>
  </div>
`;
document.querySelector(".swift-as-console").style.display = "none";

let swiftConsoleOpen = false;
document.onkeydown = function(e) {
  if (!e.repeat) {
    if (e.ctrlKey && e.key == "F12") {
      if (swiftConsoleOpen) {
        swiftConsoleOpen = false;
        document.querySelector(".swift-as-console").style.display = "block";
      } else {
        swiftConsoleOpen = true;
        document.querySelector(".swift-as-console").style.display = "none";
      }
    }
  }
}
