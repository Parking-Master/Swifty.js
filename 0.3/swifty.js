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
const DOM = !document.body ? document.querySelector("body") : document.body;

/**
 * Convert the window to a constant "Browser"
 */
window.getLocation = function() {
  let filename, filetype, file, uri, path;
  (async () => {
    var ifURIslash = Browser[0].location.href.split("://") ? "//" : "";
    const urlnosearch = location.search ? document.URL.split("?")[0] : document.URL;
    path = "/" + urlnosearch.split("/").pop();
    const n_ = window.location.pathname.split("/").pop();
    filename = n_.split(".")[0], filetype = "." + Browser[0].location.pathname.split(".").pop(), file = window.location.pathname.split("/").pop(), uri = location.protocol + ifURIslash + document.URL.split("://").pop();
  })();
  if (arguments[0] == "href") {
    return window.location.href;
  } else if (arguments[0] == "port") {
    return window.location.port;
  } else if (arguments[0] == "name") {
    return window.location.hostname;
  } else if (arguments[0] == "host") {
    return window.location.host;
  } else if (arguments[0] == "referrer") {
    return document.referrer;
  } else if (arguments[0] == "protocol") {
    return window.location.protocol;
  } else if (arguments[0] == "url") {
    return window.location.href;
  } else if (arguments[0] == "uri") {
    return uri;
  } else if (arguments[0] == "file") {
    return file;
  } else if (arguments[0] == "filetype") {
    return filetype;
  } else if (arguments[0] == "filename") {
    return filename;
  } else if (arguments[0] == "path") {
    return path;
  } else if (arguments[0] == "pathname") {
    return window.location.pathname;
  } else {
    return location;
  }
};

const Browser = [];

Browser[0] = top || window;

/**
 * Add all default browser features
 */
for (let i in Browser[0]) {
  Browser.push(Browser[0][i]);
}

/**
 * Convert to constant "Browser" object interface
 * (May be deprecated, use v3.1 for better uses)
 */
window = Browser;

/**
 * Add location uses
 */


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
document.RootElement = () => { return document.documentElement; };

Window.prototype.out = console;

for (var scripts = document.querySelectorAll("script"), i = 0; i < scripts.length; i++) scripts = scripts[i];

Window.prototype.POP = {};

(function() {
  const i = (o) => { return alert(String(o)) };
  POP.Alert = function POP() {
    return i(arguments[0]);
  }
})();

(function() {
  const i = (o, e) => { return prompt(String(o), String(e)) };
  POP.Prompt = function POP() {
    return i(arguments[0], arguments[1]);
  }
})();

(function() {
  const i = (o) => { return confirm(String(o)) };
  POP.Confirm = function POP() {
    return i(arguments[0]);
  }
})();

(function() {
  const i = (o) => { return Dialouge(String(o)) };
  POP.Dialouge = function POP() {
    return i(arguments[0]);
  }
})();

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

HTMLElement.prototype.runClickEvent = function() {
  return this.click();
};

HTMLElement.prototype.runDoubleClickEvent = function() {
  return this.dispatchEvent(new MouseEvent("dblclick"));
};

var ElementClicks = 1;
HTMLElement.prototype.runTripleClickEvent = function() {
  return void(ElementClicks = 3), this.click();
};

HTMLElement.prototype.runLoadEvent = function() {
  return this.dispatchEvent(new Event("load"));
};

HTMLElement.prototype.runContextMenuEvent = function() {
  return this.dispatchEvent(new Event("contextmenu"));
};

HTMLElement.prototype.runDoubleTapEvent = function() {
  (typeof this.oncontextmenu == "function") && this.oncontextmenu() || this.oncontextmenu();
};

Window.prototype.onLoadEvent = function(event) {
  return this.addEventListener("load", event);
};

Window.prototype.Run = function() {
  const _function = arguments[0].toString();
  return new Function(_function)();
}

Window.prototype.Create = function() {
  const name = arguments[0];
  let func = arguments[1];
  func = typeof func == "string" ? new Function("(" + func + ")()") : func;
  return Browser[0][name.toString()] = func;
}

Window.prototype.Assign = function() {
  const variable = arguments[0];
  const to = arguments[1];
  "use strict";
  if (typeof (new Function(`return ${variable};`)()) != "undefined") {
    let fn = new Function(["to"], `${variable} = to`);
    return fn;
  }
};

/**
 * Add advanced features like dialouges, etc.
 */
Window.prototype.Dialouge = function(e) {
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
    })), document.body.appendChild(t), n = document.createElement("div"), null == e.title && null == typeof e.title || e.title, null == e.text && null == typeof e.text || e.text, document.body.innerHTML += '<div class="swift-modal-content" oncontextmenu="return false" style="color:#111; opacity: 1 !important;z-index:10000;"><img style="width:4%;margin-left:10px;margin-top:10px;user-select:none;-ms-user-select:none;-moz-user-select:none;-webkit-user-select;none;pointer-events:none;" src="data:image/jpeg;base64,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" width="4%" /><span style="user-select:none;-ms-user-select:none;-moz-user-select:none;-webkit-user-select;none;margin-left:6px;display:inline-block;" id="swift-info-location"></span><span style="position:relative;top:45%;left:-50%;">' + e + "</span><br><button id='swift-modal-button__confirm'>OK</button></div>", t.innerHTML = n.innerHTML, document.querySelector("#swift-modal-button__confirm").onclick = function() {
        o()
    }, document.querySelector("#swift-modal-button__confirm").style = "cursor:pointer;position:relative;left:85%;top:40%;background-color:#dbdbdb;padding:4px 10px;margin:2px;color:#222;font-size:0.8em;border:0;border-radius:4px;", document.querySelector("#swift-info-location").textContent = location.hostname, document.querySelector(".swift-modal-content").style = "font-family:Arial,helvetica,sans-serif;font-size:auto;padding:5px;position:absolute;left:50%;top:42.5%;margin-left:-201px;width:402px;height:105px;background-color:#fdfdfd;border:0;border-radius:5px;z-index:11000;")
};

Window.prototype.Import = function(e) {
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

Window.prototype.ConvertTo = function() {
  const to = arguments[0];
  const from = arguments[1];
  if (to && from) {
    if (to.toLowerCase() == "binary") {
      var output = "";
      var input = from;
      output.value = "";
      for (var i = 0; i < input.length; i++) {
        output += input[i].charCodeAt(0).toString(2) + " ";
      }
      return output.trim();
    } else if (to.toLowerCase() == "base64") {
      return btoa(from);
    } else {
      return String(from);
    }
  }
}

Window.prototype.ConvertFrom = function() {
  const from = arguments[0];
  const to = arguments[1];
  if (from && to) {
    if (from.toLowerCase() == "binary") {
      return (function(str) {
        var newBin = str.split(" ");
        var binCode = [];
        for (i = 0; i < newBin.length; i++) {
          binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
        }
        return binCode.join("");
      })(to);
    } else if (from.toLowerCase() == "base64") {
      return atob(to);
    } else {
      return String(to);
    }
  }
}

/**
 * Swifty.js parsing engine
 * DO NOT change under ANY circumstance
 * This function is for uses under parsing swift tags, and (not recommended) linked ".swift.txt" files.
 * Avoid changing prototypes of this engine to avoid errors and minor security issues.
 */
setTimeout(function() {
  for (let i = 0; i < document.querySelectorAll("swift").length; i++) {
    document.querySelectorAll("swift")[i].style.display = "none";
    let r = document.createElement("script");
    r.src = "https://cdn.jsdelivr.net/gh/Parking-Master/Swifty.js@latest/" + String(document.querySelectorAll("swift")[i].getAttribute("version")) + "/engine.js";
    document.body.appendChild(r);
  }
}, 1);

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
