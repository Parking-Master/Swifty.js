/**
 * @license MIT (c)
 * (c) Copyright 2021 Parking-Master / (Swifty.js)
 * All uses of this project exports [modded] functions.
 * This library should ONLY be used under a linked / downloaded file (from the source project).
 * (Swifty.js regular file) https://github.com/Parking-Master/Swifty.js/blob/main/LICENSE
 */
;(async () => {
  "use strict";
  function i(l) {
    return arguments[0].replace(/\n/g, "").replace(/[\(]function/g, "!function").replace(/\}[\)][\(][\)]/g, "}()").replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "").replace(/=/g, "=").replace(/\n/, "").replace(/, [123456789]000[\)]/g, ",1e3)").replace(/, [123456789]000[\)]/g, ",1e3)").replace(/setTimeout\!/g, "setTimeout(").replace(/setInterval\!/g, "setInterval(").replace(/; \}/g, "}");
  };
  Window.prototype.MINIFY = function() {
    !arguments[0] ? arguments[0] = "" : void(0);
    return i(arguments[0]);
  };
})();

/**
 * Defaut variables (constants)
 */
"use strict";
const RED = "red",
  BLUE = "blue",
  GREEN = "green",
  YELLOW = "yellow",
  ORANGE = "orange",
  PINK = "pink",
  PURPLE = "purple",
  BEIGE = "beige",
  WHITE = "white",
  BLACK = "black",
  GRAY = "gray";
const DOC = document,
  WIND = (content || top || self || window);
const DOM = !document.body ? document.querySelector("body") : document.body;

/**
 * Convert the window to a constant "Browser"
 */
WIND.href = window.location.href, WIND.loc = window.location, WIND.port = window.location.port, WIND.name = window.location.hostname, WIND.host = window.location.host, WIND.referrer = document.referrer, WIND.protocol = window.location.protocol, WIND.url = window.location.href || document.URL;

WIND.Loc = window.location;

const Browser = [];

Browser[0] = WIND || top || window;

/**
 * Add all default browser features
 */
for (let i in WIND) {
  Browser.push(WIND[i]);
}

/**
 * Convert to constant "Browser" object interface
 * (May be deprecated, use v3.1 for better uses)
 */
window = Browser;

/**
 * Add location uses
 */
(async () => {
  var ifURIslash = WIND.loc.href.split("://") ? "//" : "";
  const urlnosearch = loc.search ? document.URL.split("?")[0] : document.URL;
  window.path = "/" + urlnosearch.split("/").pop();
  const n_ = window.loc.pathname.split("/").pop();
  WIND.filename = n_.split(".")[0], WIND.filetype = "." + WIND.loc.pathname.split(".").pop(), WIND.file = window.loc.pathname.split("/").pop(), WIND.uri = location.protocol + ifURIslash + document.URL.split("://").pop();
})();

/**
 * Selector functions
 */
Document.prototype.id = function() {
  return document.getElementById(arguments[0]);
};
Document.prototype.class = function() {
  return document.getElementsByClassName(arguments[0])[arguments[1]];
};

/**
 * Add common features like strings, numbers, etc.
 */
String.prototype.locate = function() {
  return this.includes(arguments[0]) ? (this.toString().indexOf(arguments[0]) + 1) : false;
};

/**
 * Console object
 */
console.put = {};
console.put.error = console.error, console.put.line = console.log, console.put.information = console.info, console.put.style = function(t, s) {
  const i = null === t || undefined === t || isNaN(t) ? "color: #555;" : typeof t == "number" ? "color: #61ea00;" : "color: #222;";
  console.log(`%c${t}`, (i + s.toString()));
};

const Console = console.put;

Document.prototype.getElement = function(e) {
  return document.querySelector(e);
};
Document.prototype.getElements = function(e) {
  return document.querySelectorAll(e);
};

/**
 * HTML Element get / modify innerHTML
 */
HTMLElement.prototype.html = function(e) {
  if (!e) {
    return this.innerHTML;
  } else {
    return (this.innerHTML = e);
  }
}

/**
 * Root Element Interface
 */
DOC.RootElement = () => { return document.documentElement; };

Window.prototype.out = console;

for (var scripts = document.querySelectorAll("script"), i = 0; i < scripts.length; i++) scripts = scripts[i];

Window.prototype.POP = {};

/**
 * Add event listeners
 */
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

/**
 * Add advanced features like dialouges, etc.
 */
Window.prototype.DIALOUGE = function(e) {
    !e ? void(e = "") : void(0);
    e === null ? (e = null) : void(0);
    var t, n, o = function() {
        document.querySelector(".swift-overlay").remove(), document.querySelector(".swift-modal-content").remove()
    };
    null != document.querySelector(".swift-overlay") || "object" != typeof e && ((t = document.createElement("div")).className = "swift-overlay swift-modal", t.addEventListener("oncontextmenu", (function(e) {
        return e.preventDefault(), !1
    })), t.style = "position:absolute;left:0;top:0;bottom:0;right:0;width:100%;height:100%;background:#555;opacity:0.6;z-index:10000;", t.oncontextmenu = function(e) {
        return e.preventDefault(), !1
    }, document.addEventListener("keydown", (function(e) {
        "Escape" === e.key && o()
    })), document.body.appendChild(t), n = document.createElement("div"), null == e.title && null == typeof e.title || e.title, null == e.text && null == typeof e.text || e.text, document.body.innerHTML += '<div class="swift-modal-content" oncontextmenu="return false" style="color:#111; opacity: 1 !important;z-index:10000;"><img style="width:4%;margin-left:10px;margin-top:10px;user-select:none;-ms-user-select:none;-moz-user-select:none;-webkit-user-select;none;pointer-events:none;" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xOSgETTAT00g2Bd9n8SWJgHaHa%26pid%3DApi&f=1" width="4%" /><span style="user-select:none;-ms-user-select:none;-moz-user-select:none;-webkit-user-select;none;margin-left:6px;display:inline-block;" id="swift-info-location"></span><span style="position:relative;top:45%;left:-50%;">' + e + "</span><br><button id='swift-modal-button__confirm'>OK</button></div>", t.innerHTML = n.innerHTML, document.querySelector("#swift-modal-button__confirm").onclick = function() {
        o()
    }, document.querySelector("#swift-modal-button__confirm").style = "cursor:pointer;position:relative;left:85%;top:40%;background-color:#dbdbdb;padding:4px 10px;margin:2px;color:#222;font-size:0.8em;border:0;border-radius:4px;", document.querySelector("#swift-info-location").textContent = location.hostname, document.querySelector(".swift-modal-content").style = "font-family:Arial,helvetica,sans-serif;font-size:auto;padding:5px;position:absolute;left:50%;top:42.5%;margin-left:-201px;width:402px;height:105px;background-color:#fdfdfd;border:0;border-radius:5px;z-index:11000;")
};

Window.prototype.IMPORT = function(e) {
    if ("css" == e.split(".").pop().toLowerCase())(t = document.createElement("link")).href = e, document.head.appendChild(t);
    else if ("js" == e.split(".").pop().toLowerCase()) {
        var t;
        (t = document.createElement("script")).src = e, document.body.appendChild(t)
    } else {
      let o = document.createElement("link");
      o.href = e, document.head.appendChild(o);
      o = document.createElement("script");
      o.src = e, document.body.appendChild(o);
    }
}

/**
 * Swifty.js parsing engine
 * DO NOT change under ANY circumstance
 * This function is for uses under parsing swift tags, and (not recommended) linked ".swift.txt" files.
 * Avoid changing prototypes of this engine to avoid errors and minor security issues.
 */

/* Begin engine */
const swiftEngine = setTimeout((function() {
    window.swift = content, document.head.innerHTML += "<style>.swift-as-console.swift-console{margin:2px;padding:10px;position:absolute;background:#f9f9f9;color:black;width:500px;left:50%;top:10%;margin-left:-250px;height:250px;border:2px solid #999}swift{display:none}</style>";
    for (var e = 0; e < document.querySelectorAll("swift").length; e++) {
        var t = document.querySelectorAll("swift")[e];
        if (!(/0.[123456789]/g.test(t.textContent.split("[ swift version ").pop().split(" ]")[0]) && t.textContent.split("[ swift version ").pop().split(" ]")[0].length <= 3)) throw new TypeError("Swift.js can't find version \"" + t.textContent.split("[ swift version ").pop().split(" ]")[0].toString().substr(0, 50) + '"');
        try {
          (new Function(t.textContent.replace(/\)\n/g, ");").replace(/\[ swift version 0.[123456789] \]/, "").replace(/FUNC\(/g, "function(").replace(/VARIABLE /g, "var ").replace(/LETTER /g, "let ").replace(/CONSTANT /g, "const ").replace(/FUNCTION /g, "var ").replace(/STRING /g, "var ").replace(/\#\#\+\*[\s\S]*?\*\/|\#\#\+.*/g, '/*').replace(/\#\#\-\*[\s\S]*?\*\/|\#\#\-.*/g, '*/').replace(/\# \*[\s\S]*?\*\/|\#.*/g, '')))();
        } catch (err) {
          document.querySelector(".swift-as-console-line").innerHTML += "Uncaught " + (err.toString()) + "<br />";
        }
    }
}), 10);
/* End engine */

/**
 * Swifty.js default DATE object interface
 */
const DATE = {};
DATE.Month = function() {
    if (new Date().getMonth() == 0) {
    return 'January';
  } else if (new Date().getMonth() == 1) {
    return 'February';
  } else if (new Date().getMonth() == 2) {
    return 'March';
  } else if (new Date().getMonth() == 3) {
    return 'April';
  } else if (new Date().getMonth() == 4) {
    return 'May';
  } else if (new Date().getMonth() == 5) {
    return 'June';
  } else if (new Date().getMonth() == 6) {
    return 'July';
  } else if (new Date().getMonth() == 7) {
    return 'August';
  } else if (new Date().getMonth() == 8) {
    return 'September';
  } else if (new Date().getMonth() == 9) {
    return 'October';
  } else if (new Date().getMonth() == 10) {
    return 'November';
  } else if (new Date().getMonth() == 11) {
    return 'December';
  }
};
DATE.Year = function() {
  const e = (new Date()).getFullYear().toString();
  return e || 0;
};
DATE.Time = function() {
  var d = (new Date);
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};
DATE.Season = function() {
const md = (month, day) => ({month, day});
const toMd = date => md(date.getMonth(), date.getDate());
const before = (md1, md2) => (md1.month < md2.month) || ((md1.month === md2.month) && (md1.day <= md2.day)) ;
const after = (md1, md2) => !before(md1, md2)
const between = (mdX, mdLow, mdHigh) => after(mdX, mdLow) && before(mdX, mdHigh);
const season = (date, seasons) => ((md = toMd(date))  => Object.keys(seasons).find(season => seasons[season](md)))();
const MARCH_EQUINOX = md(2, 20);
const JUNE_SOLSTICE = md(5, 21);
const SEPTEMBER_EQUINOX = md(8, 23);
const DECEMBER_SOLSTICE = md(11, 21);
const NEW_YEAR = md(0, 1);
const seasons = {
  spring: d => between(d, MARCH_EQUINOX, JUNE_SOLSTICE),
  summer: d => between(d, JUNE_SOLSTICE, SEPTEMBER_EQUINOX),
  fall: d => between(d, SEPTEMBER_EQUINOX, DECEMBER_SOLSTICE),
  winter: d => between(d, DECEMBER_SOLSTICE, NEW_YEAR) || between(d, NEW_YEAR, MARCH_EQUINOX)
};
return (season(new Date(), seasons));
};

DATE.Hour = function() {
  var d = (new Date);
  var hours = d.getHours();
  var minutes = d.getMinutes();
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours;
  return (strTime).toString();
};
DATE.Minute = function() {
  var d = (new Date);
  var hours = d.getHours();
  var minutes = d.getMinutes();
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  const strTime = minutes;
  return (strTime).toString();
};
DATE.Second = function() {
  return (new Date()).getSeconds().toString();
};
DATE.Millisecond = function() {
  return (new Date()).getMilliseconds().toString();
};
DATE.Constructor = function Date() {
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  return ampm || undefined;
}
DATE.Week = () => {
  var mt = (new Date()).getMonth().toString().split('')[0].length != 2 ? '0' + (new Date()).getMonth().toString() : (new Date()).getMonth().toString();
  var dt = (new Date()).getDate().toString().split('').length != 2 ? '0' + (new Date()).getDate().toString() : (new Date()).getDate().toString();
  var s = (new Date()).getFullYear().toString() + '-' + mt + '-' + dt;
  const [y, m, d] = s.split('-');
  const date = new Date(y, m - 1, d);
  date.setDate(d - ((date.getDay() + 6) % 7));
  return Math.ceil(date.getDate() / 7).toFixed(0).toString();
}
DATE.TLMonth = function() {
  return (this.month()).substr(0, 3).toString();
};
DATE.Day = function() {
  const locale = navigator.language;
  var mt = (new Date()).getMonth().toString().split('')[0].length != 2 ? '0' + (new Date()).getMonth().toString() : (new Date()).getMonth().toString();
  var dt = (new Date()).getDate().toString().split('').length != 2 ? '0' + ((new Date()).getDate() + 2).toString() : (new Date()).getDate().toString();
  var dateStr = mt + '/' + dt + '/' + (new Date()).getFullYear().toString();
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: 'long' });        
};

/**
 * Console interface (debug, etc.)
 */
document.body.innerHTML += `
<div class="swift-as-console" style="margin-left: 0; z-index: 10000; position: fixed; bottom: 0px; width: 100%; height: 15%; font-family: sans-serif; color: rgb(204, 204, 204); background-color: #f9f9f9;">
  <div style="height: 5px; margin-top: -5px; cursor: n-resize; background-color: grey;" title="Double-click to toggle log minimization"></div>
    <div style="position: relative; font-family: Consolas, "Courier New", monospace; overflow: auto; height: 100%; padding-top: 5px;">
      <div title="${Date().split(" ").at(4)}" style="min-height: 16px;">
        <div class="swift-as-console-line" style="font-size: 12px; margin: 0px 8px; max-width: 100%; white-space: pre-wrap; overflow: auto;"></div>
      </div>
    </div>
    <div style="position: absolute; top: 5px; right: 20px; color: rgb(17, 17, 17); border-radius: 4px; cursor: pointer; font-weight: normal; text-align: center; padding: 3px 5px; background-color: rgb(51, 51, 51); font-size: 12px;" title="Close Log">&times;</div>
</div>
`;
document.querySelector(".swift-as-console").style.display = "none";

/**
 * Open the console (Ctrl + F12)
 */
let swiftConsoleOpen = true;
document.addEventListener("keydown", (function(e) {
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
}));

/**
 * By @Parking-Master
 * (parkingmaster@email.com)
 */
