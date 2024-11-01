/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  "use strict";
  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
          return "function" == typeof t && "number" != typeof t.nodeType
      },
      y = function e(t) {
          return null != t && t === t.window
      },
      v = {
          type: !0,
          src: !0,
          noModule: !0
      };

  function m(e, t, n) {
      var i, o = (t = t || r).createElement("script");
      if (o.text = e, n)
          for (i in v) n[i] && (o[i] = n[i]);
      t.head.appendChild(o).parentNode.removeChild(o)
  }

  function x(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
  }
  var b = "3.3.1",
      w = function(e, t) {
          return new w.fn.init(e, t)
      },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  w.fn = w.prototype = {
      jquery: "3.3.1",
      constructor: w,
      length: 0,
      toArray: function() {
          return o.call(this)
      },
      get: function(e) {
          return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function(e) {
          var t = w.merge(this.constructor(), e);
          return t.prevObject = this, t
      },
      each: function(e) {
          return w.each(this, e)
      },
      map: function(e) {
          return this.pushStack(w.map(this, function(t, n) {
              return e.call(t, n, t)
          }))
      },
      slice: function() {
          return this.pushStack(o.apply(this, arguments))
      },
      first: function() {
          return this.eq(0)
      },
      last: function() {
          return this.eq(-1)
      },
      eq: function(e) {
          var t = this.length,
              n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function() {
          return this.prevObject || this.constructor()
      },
      push: s,
      sort: n.sort,
      splice: n.splice
  }, w.extend = w.fn.extend = function() {
      var e, t, n, r, i, o, a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
      for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
          if (null != (e = arguments[s]))
              for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      return a
  }, w.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
          throw new Error(e)
      },
      noop: function() {},
      isPlainObject: function(e) {
          var t, n;
          return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
      },
      isEmptyObject: function(e) {
          var t;
          for (t in e) return !1;
          return !0
      },
      globalEval: function(e) {
          m(e)
      },
      each: function(e, t) {
          var n, r = 0;
          if (C(e)) {
              for (n = e.length; r < n; r++)
                  if (!1 === t.call(e[r], r, e[r])) break
          } else
              for (r in e)
                  if (!1 === t.call(e[r], r, e[r])) break;
          return e
      },
      trim: function(e) {
          return null == e ? "" : (e + "").replace(T, "")
      },
      makeArray: function(e, t) {
          var n = t || [];
          return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
      },
      inArray: function(e, t, n) {
          return null == t ? -1 : u.call(t, e, n)
      },
      merge: function(e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
          return e.length = i, e
      },
      grep: function(e, t, n) {
          for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]);
          return i
      },
      map: function(e, t, n) {
          var r, i, o = 0,
              s = [];
          if (C(e))
              for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
          else
              for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
          return a.apply([], s)
      },
      guid: 1,
      support: h
  }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      l["[object " + t + "]"] = t.toLowerCase()
  });

  function C(e) {
      var t = !!e && "length" in e && e.length,
          n = x(e);
      return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }
  var E = function(e) {
      var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
          w = e.document,
          T = 0,
          C = 0,
          E = ae(),
          k = ae(),
          S = ae(),
          D = function(e, t) {
              return e === t && (f = !0), 0
          },
          N = {}.hasOwnProperty,
          A = [],
          j = A.pop,
          q = A.push,
          L = A.push,
          H = A.slice,
          O = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
              return -1
          },
          P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          M = "[\\x20\\t\\r\\n\\f]",
          R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
          W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
          $ = new RegExp(M + "+", "g"),
          B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
          F = new RegExp("^" + M + "*," + M + "*"),
          _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
          z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
          X = new RegExp(W),
          U = new RegExp("^" + R + "$"),
          V = {
              ID: new RegExp("^#(" + R + ")"),
              CLASS: new RegExp("^\\.(" + R + ")"),
              TAG: new RegExp("^(" + R + "|[*])"),
              ATTR: new RegExp("^" + I),
              PSEUDO: new RegExp("^" + W),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + P + ")$", "i"),
              needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
          },
          G = /^(?:input|select|textarea|button)$/i,
          Y = /^h\d$/i,
          Q = /^[^{]+\{\s*\[native \w/,
          J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          K = /[+~]/,
          Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
          ee = function(e, t, n) {
              var r = "0x" + t - 65536;
              return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
          },
          te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ne = function(e, t) {
              return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
          },
          re = function() {
              p()
          },
          ie = me(function(e) {
              return !0 === e.disabled && ("form" in e || "label" in e)
          }, {
              dir: "parentNode",
              next: "legend"
          });
      try {
          L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
      } catch (e) {
          L = {
              apply: A.length ? function(e, t) {
                  q.apply(e, H.call(t))
              } : function(e, t) {
                  var n = e.length,
                      r = 0;
                  while (e[n++] = t[r++]);
                  e.length = n - 1
              }
          }
      }

      function oe(e, t, r, i) {
          var o, s, l, c, f, h, v, m = t && t.ownerDocument,
              T = t ? t.nodeType : 9;
          if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
          if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
              if (11 !== T && (f = J.exec(e)))
                  if (o = f[1]) {
                      if (9 === T) {
                          if (!(l = t.getElementById(o))) return r;
                          if (l.id === o) return r.push(l), r
                      } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                  } else {
                      if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                      if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                  } if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                  if (1 !== T) m = t, v = e;
                  else if ("object" !== t.nodeName.toLowerCase()) {
                      (c = t.getAttribute("id")) ? c = c.replace(te, ne): t.setAttribute("id", c = b), s = (h = a(e)).length;
                      while (s--) h[s] = "#" + c + " " + ve(h[s]);
                      v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                  }
                  if (v) try {
                      return L.apply(r, m.querySelectorAll(v)), r
                  } catch (e) {} finally {
                      c === b && t.removeAttribute("id")
                  }
              }
          }
          return u(e.replace(B, "$1"), t, r, i)
      }

      function ae() {
          var e = [];

          function t(n, i) {
              return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
          }
          return t
      }

      function se(e) {
          return e[b] = !0, e
      }

      function ue(e) {
          var t = d.createElement("fieldset");
          try {
              return !!e(t)
          } catch (e) {
              return !1
          } finally {
              t.parentNode && t.parentNode.removeChild(t), t = null
          }
      }

      function le(e, t) {
          var n = e.split("|"),
              i = n.length;
          while (i--) r.attrHandle[n[i]] = t
      }

      function ce(e, t) {
          var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n)
              while (n = n.nextSibling)
                  if (n === t) return -1;
          return e ? 1 : -1
      }

      function fe(e) {
          return function(t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e
          }
      }

      function pe(e) {
          return function(t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e
          }
      }

      function de(e) {
          return function(t) {
              return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
          }
      }

      function he(e) {
          return se(function(t) {
              return t = +t, se(function(n, r) {
                  var i, o = e([], n.length, t),
                      a = o.length;
                  while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
              })
          })
      }

      function ge(e) {
          return e && "undefined" != typeof e.getElementsByTagName && e
      }
      n = oe.support = {}, o = oe.isXML = function(e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName
      }, p = oe.setDocument = function(e) {
          var t, i, a = e ? e.ownerDocument || e : w;
          return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function(e) {
              return e.className = "i", !e.getAttribute("className")
          }), n.getElementsByTagName = ue(function(e) {
              return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
          }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function(e) {
              return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
          }), n.getById ? (r.filter.ID = function(e) {
              var t = e.replace(Z, ee);
              return function(e) {
                  return e.getAttribute("id") === t
              }
          }, r.find.ID = function(e, t) {
              if ("undefined" != typeof t.getElementById && g) {
                  var n = t.getElementById(e);
                  return n ? [n] : []
              }
          }) : (r.filter.ID = function(e) {
              var t = e.replace(Z, ee);
              return function(e) {
                  var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                  return n && n.value === t
              }
          }, r.find.ID = function(e, t) {
              if ("undefined" != typeof t.getElementById && g) {
                  var n, r, i, o = t.getElementById(e);
                  if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                      i = t.getElementsByName(e), r = 0;
                      while (o = i[r++])
                          if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                  }
                  return []
              }
          }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
              return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
          } : function(e, t) {
              var n, r = [],
                  i = 0,
                  o = t.getElementsByTagName(e);
              if ("*" === e) {
                  while (n = o[i++]) 1 === n.nodeType && r.push(n);
                  return r
              }
              return o
          }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
              if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
          }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
              h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
          }), ue(function(e) {
              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = d.createElement("input");
              t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
          })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
              n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
          }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e,
                  r = t && t.parentNode;
              return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          } : function(e, t) {
              if (t)
                  while (t = t.parentNode)
                      if (t === e) return !0;
              return !1
          }, D = t ? function(e, t) {
              if (e === t) return f = !0, 0;
              var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
          } : function(e, t) {
              if (e === t) return f = !0, 0;
              var n, r = 0,
                  i = e.parentNode,
                  o = t.parentNode,
                  a = [e],
                  s = [t];
              if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
              if (i === o) return ce(e, t);
              n = e;
              while (n = n.parentNode) a.unshift(n);
              n = t;
              while (n = n.parentNode) s.unshift(n);
              while (a[r] === s[r]) r++;
              return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
          }, d) : d
      }, oe.matches = function(e, t) {
          return oe(e, null, null, t)
      }, oe.matchesSelector = function(e, t) {
          if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
              var r = m.call(e, t);
              if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
          } catch (e) {}
          return oe(t, d, null, [e]).length > 0
      }, oe.contains = function(e, t) {
          return (e.ownerDocument || e) !== d && p(e), x(e, t)
      }, oe.attr = function(e, t) {
          (e.ownerDocument || e) !== d && p(e);
          var i = r.attrHandle[t.toLowerCase()],
              o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
          return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
      }, oe.escape = function(e) {
          return (e + "").replace(te, ne)
      }, oe.error = function(e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
      }, oe.uniqueSort = function(e) {
          var t, r = [],
              i = 0,
              o = 0;
          if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
              while (t = e[o++]) t === e[o] && (i = r.push(o));
              while (i--) e.splice(r[i], 1)
          }
          return c = null, e
      }, i = oe.getText = function(e) {
          var t, n = "",
              r = 0,
              o = e.nodeType;
          if (o) {
              if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
              } else if (3 === o || 4 === o) return e.nodeValue
          } else
              while (t = e[r++]) n += i(t);
          return n
      }, (r = oe.selectors = {
          cacheLength: 50,
          createPseudo: se,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
              ">": {
                  dir: "parentNode",
                  first: !0
              },
              " ": {
                  dir: "parentNode"
              },
              "+": {
                  dir: "previousSibling",
                  first: !0
              },
              "~": {
                  dir: "previousSibling"
              }
          },
          preFilter: {
              ATTR: function(e) {
                  return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
              },
              CHILD: function(e) {
                  return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
              },
              PSEUDO: function(e) {
                  var t, n = !e[6] && e[2];
                  return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
              }
          },
          filter: {
              TAG: function(e) {
                  var t = e.replace(Z, ee).toLowerCase();
                  return "*" === e ? function() {
                      return !0
                  } : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t
                  }
              },
              CLASS: function(e) {
                  var t = E[e + " "];
                  return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                      return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                  })
              },
              ATTR: function(e, t, n) {
                  return function(r) {
                      var i = oe.attr(r, e);
                      return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                  }
              },
              CHILD: function(e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                  return 1 === r && 0 === i ? function(e) {
                      return !!e.parentNode
                  } : function(t, n, u) {
                      var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                          y = t.parentNode,
                          v = s && t.nodeName.toLowerCase(),
                          m = !u && !s,
                          x = !1;
                      if (y) {
                          if (o) {
                              while (g) {
                                  p = t;
                                  while (p = p[g])
                                      if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                  h = g = "only" === e && !h && "nextSibling"
                              }
                              return !0
                          }
                          if (h = [a ? y.firstChild : y.lastChild], a && m) {
                              x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                              while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                  if (1 === p.nodeType && ++x && p === t) {
                                      c[e] = [T, d, x];
                                      break
                                  }
                          } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                              while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                  if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                          return (x -= i) === r || x % r == 0 && x / r >= 0
                      }
                  }
              },
              PSEUDO: function(e, t) {
                  var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                  return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                      var r, o = i(e, t),
                          a = o.length;
                      while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
                  }) : function(e) {
                      return i(e, 0, n)
                  }) : i
              }
          },
          pseudos: {
              not: se(function(e) {
                  var t = [],
                      n = [],
                      r = s(e.replace(B, "$1"));
                  return r[b] ? se(function(e, t, n, i) {
                      var o, a = r(e, null, i, []),
                          s = e.length;
                      while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                  }) : function(e, i, o) {
                      return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                  }
              }),
              has: se(function(e) {
                  return function(t) {
                      return oe(e, t).length > 0
                  }
              }),
              contains: se(function(e) {
                  return e = e.replace(Z, ee),
                      function(t) {
                          return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                      }
              }),
              lang: se(function(e) {
                  return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                      function(t) {
                          var n;
                          do {
                              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                          } while ((t = t.parentNode) && 1 === t.nodeType);
                          return !1
                      }
              }),
              target: function(t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id
              },
              root: function(e) {
                  return e === h
              },
              focus: function(e) {
                  return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              },
              enabled: de(!1),
              disabled: de(!0),
              checked: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked || "option" === t && !!e.selected
              },
              selected: function(e) {
                  return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              },
              empty: function(e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                  return !0
              },
              parent: function(e) {
                  return !r.pseudos.empty(e)
              },
              header: function(e) {
                  return Y.test(e.nodeName)
              },
              input: function(e) {
                  return G.test(e.nodeName)
              },
              button: function(e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t
              },
              text: function(e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              },
              first: he(function() {
                  return [0]
              }),
              last: he(function(e, t) {
                  return [t - 1]
              }),
              eq: he(function(e, t, n) {
                  return [n < 0 ? n + t : n]
              }),
              even: he(function(e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e
              }),
              odd: he(function(e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e
              }),
              lt: he(function(e, t, n) {
                  for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                  return e
              }),
              gt: he(function(e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                  return e
              })
          }
      }).pseudos.nth = r.pseudos.eq;
      for (t in {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
          }) r.pseudos[t] = fe(t);
      for (t in {
              submit: !0,
              reset: !0
          }) r.pseudos[t] = pe(t);

      function ye() {}
      ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function(e, t) {
          var n, i, o, a, s, u, l, c = k[e + " "];
          if (c) return t ? 0 : c.slice(0);
          s = e, u = [], l = r.preFilter;
          while (s) {
              n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                  value: n,
                  type: i[0].replace(B, " ")
              }), s = s.slice(n.length));
              for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                  value: n,
                  type: a,
                  matches: i
              }), s = s.slice(n.length));
              if (!n) break
          }
          return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
      };

      function ve(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
          return r
      }

      function me(e, t, n) {
          var r = t.dir,
              i = t.next,
              o = i || r,
              a = n && "parentNode" === o,
              s = C++;
          return t.first ? function(t, n, i) {
              while (t = t[r])
                  if (1 === t.nodeType || a) return e(t, n, i);
              return !1
          } : function(t, n, u) {
              var l, c, f, p = [T, s];
              if (u) {
                  while (t = t[r])
                      if ((1 === t.nodeType || a) && e(t, n, u)) return !0
              } else
                  while (t = t[r])
                      if (1 === t.nodeType || a)
                          if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                          else {
                              if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                              if (c[o] = p, p[2] = e(t, n, u)) return !0
                          } return !1
          }
      }

      function xe(e) {
          return e.length > 1 ? function(t, n, r) {
              var i = e.length;
              while (i--)
                  if (!e[i](t, n, r)) return !1;
              return !0
          } : e[0]
      }

      function be(e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
          return n
      }

      function we(e, t, n, r, i) {
          for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
          return a
      }

      function Te(e, t, n, r, i, o) {
          return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function(o, a, s, u) {
              var l, c, f, p = [],
                  d = [],
                  h = a.length,
                  g = o || be(t || "*", s.nodeType ? [s] : s, []),
                  y = !e || !o && t ? g : we(g, p, e, s, u),
                  v = n ? i || (o ? e : h || r) ? [] : a : y;
              if (n && n(y, v, s, u), r) {
                  l = we(v, d), r(l, [], s, u), c = l.length;
                  while (c--)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
              }
              if (o) {
                  if (i || e) {
                      if (i) {
                          l = [], c = v.length;
                          while (c--)(f = v[c]) && l.push(y[c] = f);
                          i(null, v = [], l, u)
                      }
                      c = v.length;
                      while (c--)(f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                  }
              } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
          })
      }

      function Ce(e) {
          for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
                  return e === t
              }, s, !0), f = me(function(e) {
                  return O(t, e) > -1
              }, s, !0), p = [function(e, n, r) {
                  var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                  return t = null, i
              }]; u < o; u++)
              if (n = r.relative[e[u].type]) p = [me(xe(p), n)];
              else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                      for (i = ++u; i < o; i++)
                          if (r.relative[e[i].type]) break;
                      return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                          value: " " === e[u - 2].type ? "*" : ""
                      })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                  }
                  p.push(n)
              } return xe(p)
      }

      function Ee(e, t) {
          var n = t.length > 0,
              i = e.length > 0,
              o = function(o, a, s, u, c) {
                  var f, h, y, v = 0,
                      m = "0",
                      x = o && [],
                      b = [],
                      w = l,
                      C = o || i && r.find.TAG("*", c),
                      E = T += null == w ? 1 : Math.random() || .1,
                      k = C.length;
                  for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                      if (i && f) {
                          h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                          while (y = e[h++])
                              if (y(f, a || d, s)) {
                                  u.push(f);
                                  break
                              } c && (T = E)
                      }
                      n && ((f = !y && f) && v--, o && x.push(f))
                  }
                  if (v += m, n && m !== v) {
                      h = 0;
                      while (y = t[h++]) y(x, b, a, s);
                      if (o) {
                          if (v > 0)
                              while (m--) x[m] || b[m] || (b[m] = j.call(u));
                          b = we(b)
                      }
                      L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                  }
                  return c && (T = E, l = w), x
              };
          return n ? se(o) : o
      }
      return s = oe.compile = function(e, t) {
          var n, r = [],
              i = [],
              o = S[e + " "];
          if (!o) {
              t || (t = a(e)), n = t.length;
              while (n--)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
              (o = S(e, Ee(i, r))).selector = e
          }
          return o
      }, u = oe.select = function(e, t, n, i) {
          var o, u, l, c, f, p = "function" == typeof e && e,
              d = !i && a(e = p.selector || e);
          if (n = n || [], 1 === d.length) {
              if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                  if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                  p && (t = t.parentNode), e = e.slice(u.shift().value.length)
              }
              o = V.needsContext.test(e) ? 0 : u.length;
              while (o--) {
                  if (l = u[o], r.relative[c = l.type]) break;
                  if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                      if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                      break
                  }
              }
          }
          return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
      }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function(e) {
          return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
      }), ue(function(e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || le("type|href|height|width", function(e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), n.attributes && ue(function(e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || le("value", function(e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      }), ue(function(e) {
          return null == e.getAttribute("disabled")
      }) || le(P, function(e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
      }), oe
  }(e);
  w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
  var k = function(e, t, n) {
          var r = [],
              i = void 0 !== n;
          while ((e = e[t]) && 9 !== e.nodeType)
              if (1 === e.nodeType) {
                  if (i && w(e).is(n)) break;
                  r.push(e)
              } return r
      },
      S = function(e, t) {
          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
          return n
      },
      D = w.expr.match.needsContext;

  function N(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, t, n) {
      return g(t) ? w.grep(e, function(e, r) {
          return !!t.call(e, r, e) !== n
      }) : t.nodeType ? w.grep(e, function(e) {
          return e === t !== n
      }) : "string" != typeof t ? w.grep(e, function(e) {
          return u.call(t, e) > -1 !== n
      }) : w.filter(t, e, n)
  }
  w.filter = function(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
          return 1 === e.nodeType
      }))
  }, w.fn.extend({
      find: function(e) {
          var t, n, r = this.length,
              i = this;
          if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
              for (t = 0; t < r; t++)
                  if (w.contains(i[t], this)) return !0
          }));
          for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
          return r > 1 ? w.uniqueSort(n) : n
      },
      filter: function(e) {
          return this.pushStack(j(this, e || [], !1))
      },
      not: function(e) {
          return this.pushStack(j(this, e || [], !0))
      },
      is: function(e) {
          return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
      }
  });
  var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (w.fn.init = function(e, t, n) {
      var i, o;
      if (!e) return this;
      if (n = n || q, "string" == typeof e) {
          if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (i[1]) {
              if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
                  for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
              return this
          }
          return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
      }
      return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
  }).prototype = w.fn, q = w(r);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
      };
  w.fn.extend({
      has: function(e) {
          var t = w(e, this),
              n = t.length;
          return this.filter(function() {
              for (var e = 0; e < n; e++)
                  if (w.contains(this, t[e])) return !0
          })
      },
      closest: function(e, t) {
          var n, r = 0,
              i = this.length,
              o = [],
              a = "string" != typeof e && w(e);
          if (!D.test(e))
              for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                      if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                          o.push(n);
                          break
                      } return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
      },
      index: function(e) {
          return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
          return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
      },
      addBack: function(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
  });

  function P(e, t) {
      while ((e = e[t]) && 1 !== e.nodeType);
      return e
  }
  w.each({
      parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
          return k(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
          return k(e, "parentNode", n)
      },
      next: function(e) {
          return P(e, "nextSibling")
      },
      prev: function(e) {
          return P(e, "previousSibling")
      },
      nextAll: function(e) {
          return k(e, "nextSibling")
      },
      prevAll: function(e) {
          return k(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
          return k(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
          return k(e, "previousSibling", n)
      },
      siblings: function(e) {
          return S((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
          return S(e.firstChild)
      },
      contents: function(e) {
          return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
      }
  }, function(e, t) {
      w.fn[e] = function(n, r) {
          var i = w.map(this, t, n);
          return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
      }
  });
  var M = /[^\x20\t\r\n\f]+/g;

  function R(e) {
      var t = {};
      return w.each(e.match(M) || [], function(e, n) {
          t[n] = !0
      }), t
  }
  w.Callbacks = function(e) {
      e = "string" == typeof e ? R(e) : w.extend({}, e);
      var t, n, r, i, o = [],
          a = [],
          s = -1,
          u = function() {
              for (i = i || e.once, r = t = !0; a.length; s = -1) {
                  n = a.shift();
                  while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
              }
              e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
          },
          l = {
              add: function() {
                  return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                      w.each(n, function(n, r) {
                          g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                      })
                  }(arguments), n && !t && u()), this
              },
              remove: function() {
                  return w.each(arguments, function(e, t) {
                      var n;
                      while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
                  }), this
              },
              has: function(e) {
                  return e ? w.inArray(e, o) > -1 : o.length > 0
              },
              empty: function() {
                  return o && (o = []), this
              },
              disable: function() {
                  return i = a = [], o = n = "", this
              },
              disabled: function() {
                  return !o
              },
              lock: function() {
                  return i = a = [], n || t || (o = n = ""), this
              },
              locked: function() {
                  return !!i
              },
              fireWith: function(e, n) {
                  return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
              },
              fire: function() {
                  return l.fireWith(this, arguments), this
              },
              fired: function() {
                  return !!r
              }
          };
      return l
  };

  function I(e) {
      return e
  }

  function W(e) {
      throw e
  }

  function $(e, t, n, r) {
      var i;
      try {
          e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
      } catch (e) {
          n.apply(void 0, [e])
      }
  }
  w.extend({
      Deferred: function(t) {
          var n = [
                  ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                  ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                  ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
              ],
              r = "pending",
              i = {
                  state: function() {
                      return r
                  },
                  always: function() {
                      return o.done(arguments).fail(arguments), this
                  },
                  "catch": function(e) {
                      return i.then(null, e)
                  },
                  pipe: function() {
                      var e = arguments;
                      return w.Deferred(function(t) {
                          w.each(n, function(n, r) {
                              var i = g(e[r[4]]) && e[r[4]];
                              o[r[1]](function() {
                                  var e = i && i.apply(this, arguments);
                                  e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                              })
                          }), e = null
                      }).promise()
                  },
                  then: function(t, r, i) {
                      var o = 0;

                      function a(t, n, r, i) {
                          return function() {
                              var s = this,
                                  u = arguments,
                                  l = function() {
                                      var e, l;
                                      if (!(t < o)) {
                                          if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                          l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                      }
                                  },
                                  c = i ? l : function() {
                                      try {
                                          l()
                                      } catch (e) {
                                          w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
                                      }
                                  };
                              t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                          }
                      }
                      return w.Deferred(function(e) {
                          n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
                      }).promise()
                  },
                  promise: function(e) {
                      return null != e ? w.extend(e, i) : i
                  }
              },
              o = {};
          return w.each(n, function(e, t) {
              var a = t[2],
                  s = t[5];
              i[t[1]] = a.add, s && a.add(function() {
                  r = s
              }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                  return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
              }, o[t[0] + "With"] = a.fireWith
          }), i.promise(o), t && t.call(o, o), o
      },
      when: function(e) {
          var t = arguments.length,
              n = t,
              r = Array(n),
              i = o.call(arguments),
              a = w.Deferred(),
              s = function(e) {
                  return function(n) {
                      r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                  }
              };
          if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
          while (n--) $(i[n], s(n), a.reject);
          return a.promise()
      }
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  w.Deferred.exceptionHook = function(t, n) {
      e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
  }, w.readyException = function(t) {
      e.setTimeout(function() {
          throw t
      })
  };
  var F = w.Deferred();
  w.fn.ready = function(e) {
      return F.then(e)["catch"](function(e) {
          w.readyException(e)
      }), this
  }, w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
          (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
      }
  }), w.ready.then = F.then;

  function _() {
      r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
  }
  "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
  var z = function(e, t, n, r, i, o, a) {
          var s = 0,
              u = e.length,
              l = null == n;
          if ("object" === x(n)) {
              i = !0;
              for (s in n) z(e, t, s, n[s], !0, o, a)
          } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                  return l.call(w(e), n)
              })), t))
              for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
      },
      X = /^-ms-/,
      U = /-([a-z])/g;

  function V(e, t) {
      return t.toUpperCase()
  }

  function G(e) {
      return e.replace(X, "ms-").replace(U, V)
  }
  var Y = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };

  function Q() {
      this.expando = w.expando + Q.uid++
  }
  Q.uid = 1, Q.prototype = {
      cache: function(e) {
          var t = e[this.expando];
          return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
              value: t,
              configurable: !0
          }))), t
      },
      set: function(e, t, n) {
          var r, i = this.cache(e);
          if ("string" == typeof t) i[G(t)] = n;
          else
              for (r in t) i[G(r)] = t[r];
          return i
      },
      get: function(e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
      },
      access: function(e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
          var n, r = e[this.expando];
          if (void 0 !== r) {
              if (void 0 !== t) {
                  n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                  while (n--) delete r[t[n]]
              }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
          }
      },
      hasData: function(e) {
          var t = e[this.expando];
          return void 0 !== t && !w.isEmptyObject(t)
      }
  };
  var J = new Q,
      K = new Q,
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;

  function te(e) {
      return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
  }

  function ne(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType)
          if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
              try {
                  n = te(n)
              } catch (e) {}
              K.set(e, t, n)
          } else n = void 0;
      return n
  }
  w.extend({
      hasData: function(e) {
          return K.hasData(e) || J.hasData(e)
      },
      data: function(e, t, n) {
          return K.access(e, t, n)
      },
      removeData: function(e, t) {
          K.remove(e, t)
      },
      _data: function(e, t, n) {
          return J.access(e, t, n)
      },
      _removeData: function(e, t) {
          J.remove(e, t)
      }
  }), w.fn.extend({
      data: function(e, t) {
          var n, r, i, o = this[0],
              a = o && o.attributes;
          if (void 0 === e) {
              if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                  n = a.length;
                  while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                  J.set(o, "hasDataAttrs", !0)
              }
              return i
          }
          return "object" == typeof e ? this.each(function() {
              K.set(this, e)
          }) : z(this, function(t) {
              var n;
              if (o && void 0 === t) {
                  if (void 0 !== (n = K.get(o, e))) return n;
                  if (void 0 !== (n = ne(o, e))) return n
              } else this.each(function() {
                  K.set(this, e, t)
              })
          }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
          return this.each(function() {
              K.remove(this, e)
          })
      }
  }), w.extend({
      queue: function(e, t, n) {
          var r;
          if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
      },
      dequeue: function(e, t) {
          t = t || "fx";
          var n = w.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = w._queueHooks(e, t),
              a = function() {
                  w.dequeue(e, t)
              };
          "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
      },
      _queueHooks: function(e, t) {
          var n = t + "queueHooks";
          return J.get(e, n) || J.access(e, n, {
              empty: w.Callbacks("once memory").add(function() {
                  J.remove(e, [t + "queue", n])
              })
          })
      }
  }), w.fn.extend({
      queue: function(e, t) {
          var n = 2;
          return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
              var n = w.queue(this, e, t);
              w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
          })
      },
      dequeue: function(e) {
          return this.each(function() {
              w.dequeue(this, e)
          })
      },
      clearQueue: function(e) {
          return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
          var n, r = 1,
              i = w.Deferred(),
              o = this,
              a = this.length,
              s = function() {
                  --r || i.resolveWith(o, [o])
              };
          "string" != typeof e && (t = e, e = void 0), e = e || "fx";
          while (a--)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
          return s(), i.promise(t)
      }
  });
  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function(e, t) {
          return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
      },
      se = function(e, t, n, r) {
          var i, o, a = {};
          for (o in t) a[o] = e.style[o], e.style[o] = t[o];
          i = n.apply(e, r || []);
          for (o in t) e.style[o] = a[o];
          return i
      };

  function ue(e, t, n, r) {
      var i, o, a = 20,
          s = r ? function() {
              return r.cur()
          } : function() {
              return w.css(e, t, "")
          },
          u = s(),
          l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
          c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
      if (c && c[3] !== l) {
          u /= 2, l = l || c[3], c = +u || 1;
          while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
          c *= 2, w.style(e, t, c + l), n = n || []
      }
      return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
  }
  var le = {};

  function ce(e) {
      var t, n = e.ownerDocument,
          r = e.nodeName,
          i = le[r];
      return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
  }

  function fe(e, t) {
      for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
      for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
      return e
  }
  w.fn.extend({
      show: function() {
          return fe(this, !0)
      },
      hide: function() {
          return fe(this)
      },
      toggle: function(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
              ae(this) ? w(this).show() : w(this).hide()
          })
      }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
      };
  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

  function ye(e, t) {
      var n;
      return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
  }

  function ve(e, t) {
      for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
  }
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
      for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
          if ((o = e[d]) || 0 === o)
              if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
              else if (me.test(o)) {
          a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
          while (c--) a = a.lastChild;
          w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
      } else p.push(t.createTextNode(o));
      f.textContent = "", d = 0;
      while (o = p[d++])
          if (r && w.inArray(o, r) > -1) i && i.push(o);
          else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
          c = 0;
          while (o = a[c++]) he.test(o.type || "") && n.push(o)
      }
      return f
  }! function() {
      var e = r.createDocumentFragment().appendChild(r.createElement("div")),
          t = r.createElement("input");
      t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
  }();
  var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;

  function Ee() {
      return !0
  }

  function ke() {
      return !1
  }

  function Se() {
      try {
          return r.activeElement
      } catch (e) {}
  }

  function De(e, t, n, r, i, o) {
      var a, s;
      if ("object" == typeof t) {
          "string" != typeof n && (r = r || n, n = void 0);
          for (s in t) De(e, s, n, r, t[s], o);
          return e
      }
      if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
      else if (!i) return e;
      return 1 === o && (a = i, (i = function(e) {
          return w().off(e), a.apply(this, arguments)
      }).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
          w.event.add(this, t, i, r, n)
      })
  }
  w.event = {
      global: {},
      add: function(e, t, n, r, i) {
          var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
          if (y) {
              n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function(t) {
                  return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
              }), l = (t = (t || "").match(M) || [""]).length;
              while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && w.expr.match.needsContext.test(i),
                  namespace: h.join(".")
              }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
          }
      },
      remove: function(e, t, n, r, i) {
          var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
          if (y && (u = y.events)) {
              l = (t = (t || "").match(M) || [""]).length;
              while (l--)
                  if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                      f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                      while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                      a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
                  } else
                      for (d in u) w.event.remove(e, d + t[l], n, r, !0);
              w.isEmptyObject(u) && J.remove(e, "handle events")
          }
      },
      dispatch: function(e) {
          var t = w.event.fix(e),
              n, r, i, o, a, s, u = new Array(arguments.length),
              l = (J.get(this, "events") || {})[t.type] || [],
              c = w.event.special[t.type] || {};
          for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
          if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
              s = w.event.handlers.call(this, t, l), n = 0;
              while ((o = s[n++]) && !t.isPropagationStopped()) {
                  t.currentTarget = o.elem, r = 0;
                  while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
              }
              return c.postDispatch && c.postDispatch.call(this, t), t.result
          }
      },
      handlers: function(e, t) {
          var n, r, i, o, a, s = [],
              u = t.delegateCount,
              l = e.target;
          if (u && l.nodeType && !("click" === e.type && e.button >= 1))
              for (; l !== this; l = l.parentNode || this)
                  if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                      for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                      o.length && s.push({
                          elem: l,
                          handlers: o
                      })
                  } return l = this, u < t.length && s.push({
              elem: l,
              handlers: t.slice(u)
          }), s
      },
      addProp: function(e, t) {
          Object.defineProperty(w.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: g(t) ? function() {
                  if (this.originalEvent) return t(this.originalEvent)
              } : function() {
                  if (this.originalEvent) return this.originalEvent[e]
              },
              set: function(t) {
                  Object.defineProperty(this, e, {
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                      value: t
                  })
              }
          })
      },
      fix: function(e) {
          return e[w.expando] ? e : new w.Event(e)
      },
      special: {
          load: {
              noBubble: !0
          },
          focus: {
              trigger: function() {
                  if (this !== Se() && this.focus) return this.focus(), !1
              },
              delegateType: "focusin"
          },
          blur: {
              trigger: function() {
                  if (this === Se() && this.blur) return this.blur(), !1
              },
              delegateType: "focusout"
          },
          click: {
              trigger: function() {
                  if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
              },
              _default: function(e) {
                  return N(e.target, "a")
              }
          },
          beforeunload: {
              postDispatch: function(e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
          }
      }
  }, w.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
  }, w.Event = function(e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
  }, w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
  }, w.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      "char": !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(e) {
          var t = e.button;
          return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
  }, w.event.addProp), w.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
  }, function(e, t) {
      w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
              var n, r = this,
                  i = e.relatedTarget,
                  o = e.handleObj;
              return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
          }
      }
  }), w.fn.extend({
      on: function(e, t, n, r) {
          return De(this, e, t, n, r)
      },
      one: function(e, t, n, r) {
          return De(this, e, t, n, r, 1)
      },
      off: function(e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
          if ("object" == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this
          }
          return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() {
              w.event.remove(this, e, n, t)
          })
      }
  });
  var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Le(e, t) {
      return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
  }

  function He(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function Oe(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function Pe(e, t) {
      var n, r, i, o, a, s, u, l;
      if (1 === t.nodeType) {
          if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
              delete a.handle, a.events = {};
              for (i in l)
                  for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
          }
          K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
      }
  }

  function Me(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }

  function Re(e, t, n, r) {
      t = a.apply([], t);
      var i, o, s, u, l, c, f = 0,
          p = e.length,
          d = p - 1,
          y = t[0],
          v = g(y);
      if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function(i) {
          var o = e.eq(i);
          v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
      });
      if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
          for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
          if (u)
              for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
      }
      return e
  }

  function Ie(e, t, n) {
      for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
      return e
  }
  w.extend({
      htmlPrefilter: function(e) {
          return e.replace(Ne, "<$1></$2>")
      },
      clone: function(e, t, n) {
          var r, i, o, a, s = e.cloneNode(!0),
              u = w.contains(e.ownerDocument, e);
          if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
              for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
          if (t)
              if (n)
                  for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
              else Pe(e, s);
          return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
      },
      cleanData: function(e) {
          for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
              if (Y(n)) {
                  if (t = n[J.expando]) {
                      if (t.events)
                          for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                      n[J.expando] = void 0
                  }
                  n[K.expando] && (n[K.expando] = void 0)
              }
      }
  }), w.fn.extend({
      detach: function(e) {
          return Ie(this, e, !0)
      },
      remove: function(e) {
          return Ie(this, e)
      },
      text: function(e) {
          return z(this, function(e) {
              return void 0 === e ? w.text(this) : this.empty().each(function() {
                  1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
              })
          }, null, e, arguments.length)
      },
      append: function() {
          return Re(this, arguments, function(e) {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
          })
      },
      prepend: function() {
          return Re(this, arguments, function(e) {
              if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = Le(this, e);
                  t.insertBefore(e, t.firstChild)
              }
          })
      },
      before: function() {
          return Re(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this)
          })
      },
      after: function() {
          return Re(this, arguments, function(e) {
              this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
      },
      empty: function() {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
          return this
      },
      clone: function(e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function() {
              return w.clone(this, e, t)
          })
      },
      html: function(e) {
          return z(this, function(e) {
              var t = this[0] || {},
                  n = 0,
                  r = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                  e = w.htmlPrefilter(e);
                  try {
                      for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                      t = 0
                  } catch (e) {}
              }
              t && this.empty().append(e)
          }, null, e, arguments.length)
      },
      replaceWith: function() {
          var e = [];
          return Re(this, arguments, function(t) {
              var n = this.parentNode;
              w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
          }, e)
      }
  }), w.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
  }, function(e, t) {
      w.fn[e] = function(e) {
          for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
          return this.pushStack(r)
      }
  });
  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function(t) {
          var n = t.ownerDocument.defaultView;
          return n && n.opener || (n = e), n.getComputedStyle(t)
      },
      Be = new RegExp(oe.join("|"), "i");
  ! function() {
      function t() {
          if (c) {
              l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
              var t = e.getComputedStyle(c);
              i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
          }
      }

      function n(e) {
          return Math.round(parseFloat(e))
      }
      var i, o, a, s, u, l = r.createElement("div"),
          c = r.createElement("div");
      c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
          boxSizingReliable: function() {
              return t(), o
          },
          pixelBoxStyles: function() {
              return t(), s
          },
          pixelPosition: function() {
              return t(), i
          },
          reliableMarginLeft: function() {
              return t(), u
          },
          scrollboxSize: function() {
              return t(), a
          }
      }))
  }();

  function Fe(e, t, n) {
      var r, i, o, a, s = e.style;
      return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
  }

  function _e(e, t) {
      return {
          get: function() {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get
          }
      }
  }
  var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
      },
      Ve = {
          letterSpacing: "0",
          fontWeight: "400"
      },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;

  function Qe(e) {
      if (e in Ye) return e;
      var t = e[0].toUpperCase() + e.slice(1),
          n = Ge.length;
      while (n--)
          if ((e = Ge[n] + t) in Ye) return e
  }

  function Je(e) {
      var t = w.cssProps[e];
      return t || (t = w.cssProps[e] = Qe(e) || e), t
  }

  function Ke(e, t, n) {
      var r = ie.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }

  function Ze(e, t, n, r, i, o) {
      var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
      return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
  }

  function et(e, t, n) {
      var r = $e(e),
          i = Fe(e, t, r),
          o = "border-box" === w.css(e, "boxSizing", !1, r),
          a = o;
      if (We.test(i)) {
          if (!n) return i;
          i = "auto"
      }
      return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
  }
  w.extend({
      cssHooks: {
          opacity: {
              get: function(e, t) {
                  if (t) {
                      var n = Fe(e, "opacity");
                      return "" === n ? "1" : n
                  }
              }
          }
      },
      cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
      },
      cssProps: {},
      style: function(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i, o, a, s = G(t),
                  u = Xe.test(t),
                  l = e.style;
              if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
              "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
          }
      },
      css: function(e, t, n, r) {
          var i, o, a, s = G(t);
          return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
      }
  }), w.each(["height", "width"], function(e, t) {
      w.cssHooks[t] = {
          get: function(e, n, r) {
              if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function() {
                  return et(e, t, r)
              })
          },
          set: function(e, n, r) {
              var i, o = $e(e),
                  a = "border-box" === w.css(e, "boxSizing", !1, o),
                  s = r && Ze(e, t, r, a, o);
              return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
          }
      }
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
      if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
          marginLeft: 0
      }, function() {
          return e.getBoundingClientRect().left
      })) + "px"
  }), w.each({
      margin: "",
      padding: "",
      border: "Width"
  }, function(e, t) {
      w.cssHooks[e + t] = {
          expand: function(n) {
              for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
              return i
          }
      }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
  }), w.fn.extend({
      css: function(e, t) {
          return z(this, function(e, t, n) {
              var r, i, o = {},
                  a = 0;
              if (Array.isArray(t)) {
                  for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                  return o
              }
              return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
          }, e, t, arguments.length > 1)
      }
  });

  function tt(e, t, n, r, i) {
      return new tt.prototype.init(e, t, n, r, i)
  }
  w.Tween = tt, tt.prototype = {
      constructor: tt,
      init: function(e, t, n, r, i, o) {
          this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
      },
      cur: function() {
          var e = tt.propHooks[this.prop];
          return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
      },
      run: function(e) {
          var t, n = tt.propHooks[this.prop];
          return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
      }
  }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
      _default: {
          get: function(e) {
              var t;
              return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
          },
          set: function(e) {
              w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
          }
      }
  }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
      set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
  }, w.easing = {
      linear: function(e) {
          return e
      },
      swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
  }, w.fx = tt.prototype.init, w.fx.step = {};
  var nt, rt, it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;

  function at() {
      rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
  }

  function st() {
      return e.setTimeout(function() {
          nt = void 0
      }), nt = Date.now()
  }

  function ut(e, t) {
      var n, r = 0,
          i = {
              height: e
          };
      for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i
  }

  function lt(e, t, n) {
      for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
          if (r = i[o].call(n, t, e)) return r
  }

  function ct(e, t, n) {
      var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          y = J.get(e, "fxshow");
      n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
          a.unqueued || s()
      }), a.unqueued++, p.always(function() {
          p.always(function() {
              a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
          })
      }));
      for (r in t)
          if (i = t[r], it.test(i)) {
              if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                  if ("show" !== i || !y || void 0 === y[r]) continue;
                  g = !0
              }
              d[r] = y && y[r] || w.style(e, r)
          } if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
          f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
              h.display = l
          }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
              h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
          })), u = !1;
          for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
              display: l
          }), o && (y.hidden = !g), g && fe([e], !0), p.done(function() {
              g || fe([e]), J.remove(e, "fxshow");
              for (r in d) w.style(e, r, d[r])
          })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
      }
  }

  function ft(e, t) {
      var n, r, i, o, a;
      for (n in e)
          if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
              o = a.expand(o), delete e[r];
              for (n in o) n in e || (e[n] = o[n], t[n] = i)
          } else t[r] = i
  }

  function pt(e, t, n) {
      var r, i, o = 0,
          a = pt.prefilters.length,
          s = w.Deferred().always(function() {
              delete u.elem
          }),
          u = function() {
              if (i) return !1;
              for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
              return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
          },
          l = s.promise({
              elem: e,
              props: w.extend({}, t),
              opts: w.extend(!0, {
                  specialEasing: {},
                  easing: w.easing._default
              }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: nt || st(),
              duration: n.duration,
              tweens: [],
              createTween: function(t, n) {
                  var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                  return l.tweens.push(r), r
              },
              stop: function(t) {
                  var n = 0,
                      r = t ? l.tweens.length : 0;
                  if (i) return this;
                  for (i = !0; n < r; n++) l.tweens[n].run(1);
                  return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
              }
          }),
          c = l.props;
      for (ft(c, l.opts.specialEasing); o < a; o++)
          if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
      return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
          elem: e,
          anim: l,
          queue: l.opts.queue
      })), l
  }
  w.Animation = w.extend(pt, {
          tweeners: {
              "*": [function(e, t) {
                  var n = this.createTween(e, t);
                  return ue(n.elem, e, ie.exec(t), n), n
              }]
          },
          tweener: function(e, t) {
              g(e) ? (t = e, e = ["*"]) : e = e.match(M);
              for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
          },
          prefilters: [ct],
          prefilter: function(e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
          }
      }), w.speed = function(e, t, n) {
          var r = e && "object" == typeof e ? w.extend({}, e) : {
              complete: n || !n && t || g(e) && e,
              duration: e,
              easing: n && t || t && !g(t) && t
          };
          return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
              g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
          }, r
      }, w.fn.extend({
          fadeTo: function(e, t, n, r) {
              return this.filter(ae).css("opacity", 0).show().end().animate({
                  opacity: t
              }, e, n, r)
          },
          animate: function(e, t, n, r) {
              var i = w.isEmptyObject(e),
                  o = w.speed(t, n, r),
                  a = function() {
                      var t = pt(this, w.extend({}, e), o);
                      (i || J.get(this, "finish")) && t.stop(!0)
                  };
              return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
          },
          stop: function(e, t, n) {
              var r = function(e) {
                  var t = e.stop;
                  delete e.stop, t(n)
              };
              return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                  var t = !0,
                      i = null != e && e + "queueHooks",
                      o = w.timers,
                      a = J.get(this);
                  if (i) a[i] && a[i].stop && r(a[i]);
                  else
                      for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                  for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                  !t && n || w.dequeue(this, e)
              })
          },
          finish: function(e) {
              return !1 !== e && (e = e || "fx"), this.each(function() {
                  var t, n = J.get(this),
                      r = n[e + "queue"],
                      i = n[e + "queueHooks"],
                      o = w.timers,
                      a = r ? r.length : 0;
                  for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                  for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                  delete n.finish
              })
          }
      }), w.each(["toggle", "show", "hide"], function(e, t) {
          var n = w.fn[t];
          w.fn[t] = function(e, r, i) {
              return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
          }
      }), w.each({
          slideDown: ut("show"),
          slideUp: ut("hide"),
          slideToggle: ut("toggle"),
          fadeIn: {
              opacity: "show"
          },
          fadeOut: {
              opacity: "hide"
          },
          fadeToggle: {
              opacity: "toggle"
          }
      }, function(e, t) {
          w.fn[e] = function(e, n, r) {
              return this.animate(t, e, n, r)
          }
      }), w.timers = [], w.fx.tick = function() {
          var e, t = 0,
              n = w.timers;
          for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || w.fx.stop(), nt = void 0
      }, w.fx.timer = function(e) {
          w.timers.push(e), w.fx.start()
      }, w.fx.interval = 13, w.fx.start = function() {
          rt || (rt = !0, at())
      }, w.fx.stop = function() {
          rt = null
      }, w.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
      }, w.fn.delay = function(t, n) {
          return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
              var i = e.setTimeout(n, t);
              r.stop = function() {
                  e.clearTimeout(i)
              }
          })
      },
      function() {
          var e = r.createElement("input"),
              t = r.createElement("select").appendChild(r.createElement("option"));
          e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
      }();
  var dt, ht = w.expr.attrHandle;
  w.fn.extend({
      attr: function(e, t) {
          return z(this, w.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
          return this.each(function() {
              w.removeAttr(this, e)
          })
      }
  }), w.extend({
      attr: function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
      },
      attrHooks: {
          type: {
              set: function(e, t) {
                  if (!h.radioValue && "radio" === t && N(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t
                  }
              }
          }
      },
      removeAttr: function(e, t) {
          var n, r = 0,
              i = t && t.match(M);
          if (i && 1 === e.nodeType)
              while (n = i[r++]) e.removeAttribute(n)
      }
  }), dt = {
      set: function(e, t, n) {
          return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
      }
  }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = ht[t] || w.find.attr;
      ht[t] = function(e, t, r) {
          var i, o, a = t.toLowerCase();
          return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
      }
  });
  var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;
  w.fn.extend({
      prop: function(e, t) {
          return z(this, w.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
          return this.each(function() {
              delete this[w.propFix[e] || e]
          })
      }
  }), w.extend({
      prop: function(e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
      },
      propHooks: {
          tabIndex: {
              get: function(e) {
                  var t = w.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
              }
          }
      },
      propFix: {
          "for": "htmlFor",
          "class": "className"
      }
  }), h.optSelected || (w.propHooks.selected = {
      get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
  }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      w.propFix[this.toLowerCase()] = this
  });

  function vt(e) {
      return (e.match(M) || []).join(" ")
  }

  function mt(e) {
      return e.getAttribute && e.getAttribute("class") || ""
  }

  function xt(e) {
      return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
  }
  w.fn.extend({
      addClass: function(e) {
          var t, n, r, i, o, a, s, u = 0;
          if (g(e)) return this.each(function(t) {
              w(this).addClass(e.call(this, t, mt(this)))
          });
          if ((t = xt(e)).length)
              while (n = this[u++])
                  if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                      a = 0;
                      while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                      i !== (s = vt(r)) && n.setAttribute("class", s)
                  } return this
      },
      removeClass: function(e) {
          var t, n, r, i, o, a, s, u = 0;
          if (g(e)) return this.each(function(t) {
              w(this).removeClass(e.call(this, t, mt(this)))
          });
          if (!arguments.length) return this.attr("class", "");
          if ((t = xt(e)).length)
              while (n = this[u++])
                  if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                      a = 0;
                      while (o = t[a++])
                          while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                      i !== (s = vt(r)) && n.setAttribute("class", s)
                  } return this
      },
      toggleClass: function(e, t) {
          var n = typeof e,
              r = "string" === n || Array.isArray(e);
          return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
              w(this).toggleClass(e.call(this, n, mt(this), t), t)
          }) : this.each(function() {
              var t, i, o, a;
              if (r) {
                  i = 0, o = w(this), a = xt(e);
                  while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
              } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
          })
      },
      hasClass: function(e) {
          var t, n, r = 0;
          t = " " + e + " ";
          while (n = this[r++])
              if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
          return !1
      }
  });
  var bt = /\r/g;
  w.fn.extend({
      val: function(e) {
          var t, n, r, i = this[0];
          {
              if (arguments.length) return r = g(e), this.each(function(n) {
                  var i;
                  1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                      return null == e ? "" : e + ""
                  })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
              });
              if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n
          }
      }
  }), w.extend({
      valHooks: {
          option: {
              get: function(e) {
                  var t = w.find.attr(e, "value");
                  return null != t ? t : vt(w.text(e))
              }
          },
          select: {
              get: function(e) {
                  var t, n, r, i = e.options,
                      o = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      u = a ? o + 1 : i.length;
                  for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                      if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                          if (t = w(n).val(), a) return t;
                          s.push(t)
                      } return s
              },
              set: function(e, t) {
                  var n, r, i = e.options,
                      o = w.makeArray(t),
                      a = i.length;
                  while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                  return n || (e.selectedIndex = -1), o
              }
          }
      }
  }), w.each(["radio", "checkbox"], function() {
      w.valHooks[this] = {
          set: function(e, t) {
              if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
          }
      }, h.checkOn || (w.valHooks[this].get = function(e) {
          return null === e.getAttribute("value") ? "on" : e.value
      })
  }), h.focusin = "onfocusin" in e;
  var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function(e) {
          e.stopPropagation()
      };
  w.extend(w.event, {
      trigger: function(t, n, i, o) {
          var a, s, u, l, c, p, d, h, v = [i || r],
              m = f.call(t, "type") ? t.type : t,
              x = f.call(t, "namespace") ? t.namespace.split(".") : [];
          if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
              if (!o && !d.noBubble && !y(i)) {
                  for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                  u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
              }
              a = 0;
              while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
              return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
          }
      },
      simulate: function(e, t, n) {
          var r = w.extend(new w.Event, n, {
              type: e,
              isSimulated: !0
          });
          w.event.trigger(r, null, t)
      }
  }), w.fn.extend({
      trigger: function(e, t) {
          return this.each(function() {
              w.event.trigger(e, t, this)
          })
      },
      triggerHandler: function(e, t) {
          var n = this[0];
          if (n) return w.event.trigger(e, t, n, !0)
      }
  }), h.focusin || w.each({
      focus: "focusin",
      blur: "focusout"
  }, function(e, t) {
      var n = function(e) {
          w.event.simulate(t, e.target, w.event.fix(e))
      };
      w.event.special[t] = {
          setup: function() {
              var r = this.ownerDocument || this,
                  i = J.access(r, t);
              i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
          },
          teardown: function() {
              var r = this.ownerDocument || this,
                  i = J.access(r, t) - 1;
              i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
          }
      }
  });
  var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;
  w.parseXML = function(t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
          n = (new e.DOMParser).parseFromString(t, "text/xml")
      } catch (e) {
          n = void 0
      }
      return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
  };
  var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;

  function jt(e, t, n, r) {
      var i;
      if (Array.isArray(t)) w.each(t, function(t, i) {
          n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
      });
      else if (n || "object" !== x(t)) r(e, t);
      else
          for (i in t) jt(e + "[" + i + "]", t[i], n, r)
  }
  w.param = function(e, t) {
      var n, r = [],
          i = function(e, t) {
              var n = g(t) ? t() : t;
              r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
          };
      if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
          i(this.name, this.value)
      });
      else
          for (n in e) jt(n, e[n], t, i);
      return r.join("&")
  }, w.fn.extend({
      serialize: function() {
          return w.param(this.serializeArray())
      },
      serializeArray: function() {
          return this.map(function() {
              var e = w.prop(this, "elements");
              return e ? w.makeArray(e) : this
          }).filter(function() {
              var e = this.type;
              return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
          }).map(function(e, t) {
              var n = w(this).val();
              return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                  return {
                      name: t.name,
                      value: e.replace(Dt, "\r\n")
                  }
              }) : {
                  name: t.name,
                  value: n.replace(Dt, "\r\n")
              }
          }).get()
      }
  });
  var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");
  Bt.href = Ct.href;

  function Ft(e) {
      return function(t, n) {
          "string" != typeof t && (n = t, t = "*");
          var r, i = 0,
              o = t.toLowerCase().match(M) || [];
          if (g(n))
              while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
      }
  }

  function _t(e, t, n, r) {
      var i = {},
          o = e === Wt;

      function a(s) {
          var u;
          return i[s] = !0, w.each(e[s] || [], function(e, s) {
              var l = s(t, n, r);
              return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
          }), u
      }
      return a(t.dataTypes[0]) || !i["*"] && a("*")
  }

  function zt(e, t) {
      var n, r, i = w.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && w.extend(!0, e, r), e
  }

  function Xt(e, t, n) {
      var r, i, o, a, s = e.contents,
          u = e.dataTypes;
      while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r)
          for (i in s)
              if (s[i] && s[i].test(r)) {
                  u.unshift(i);
                  break
              } if (u[0] in n) o = u[0];
      else {
          for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                  o = i;
                  break
              }
              a || (a = i)
          }
          o = o || a
      }
      if (o) return o !== u[0] && u.unshift(o), n[o]
  }

  function Ut(e, t, n, r) {
      var i, o, a, s, u, l = {},
          c = e.dataTypes.slice();
      if (c[1])
          for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
      o = c.shift();
      while (o)
          if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
              if ("*" === o) o = u;
              else if ("*" !== u && u !== o) {
          if (!(a = l[u + " " + o] || l["* " + o]))
              for (i in l)
                  if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                      !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                      break
                  } if (!0 !== a)
              if (a && e["throws"]) t = a(t);
              else try {
                  t = a(t)
              } catch (e) {
                  return {
                      state: "parsererror",
                      error: a ? e : "No conversion from " + u + " to " + o
                  }
              }
      }
      return {
          state: "success",
          data: t
      }
  }
  w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
          url: Ct.href,
          type: "GET",
          isLocal: Pt.test(Ct.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
              "*": $t,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
          },
          contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
          },
          responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
          },
          converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": w.parseXML
          },
          flatOptions: {
              url: !0,
              context: !0
          }
      },
      ajaxSetup: function(e, t) {
          return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
      },
      ajaxPrefilter: Ft(It),
      ajaxTransport: Ft(Wt),
      ajax: function(t, n) {
          "object" == typeof t && (n = t, t = void 0), n = n || {};
          var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
              g = h.context || h,
              y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
              v = w.Deferred(),
              m = w.Callbacks("once memory"),
              x = h.statusCode || {},
              b = {},
              T = {},
              C = "canceled",
              E = {
                  readyState: 0,
                  getResponseHeader: function(e) {
                      var t;
                      if (c) {
                          if (!s) {
                              s = {};
                              while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
                          }
                          t = s[e.toLowerCase()]
                      }
                      return null == t ? null : t
                  },
                  getAllResponseHeaders: function() {
                      return c ? a : null
                  },
                  setRequestHeader: function(e, t) {
                      return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                  },
                  overrideMimeType: function(e) {
                      return null == c && (h.mimeType = e), this
                  },
                  statusCode: function(e) {
                      var t;
                      if (e)
                          if (c) E.always(e[E.status]);
                          else
                              for (t in e) x[t] = [x[t], e[t]];
                      return this
                  },
                  abort: function(e) {
                      var t = e || C;
                      return i && i.abort(t), k(0, t), this
                  }
              };
          if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
              l = r.createElement("a");
              try {
                  l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
              } catch (e) {
                  h.crossDomain = !0
              }
          }
          if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
          (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
          for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
          if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
          if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
              if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
              h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                  E.abort("timeout")
              }, h.timeout));
              try {
                  c = !1, i.send(b, k)
              } catch (e) {
                  if (c) throw e;
                  k(-1, e)
              }
          } else k(-1, "No Transport");

          function k(t, n, r, s) {
              var l, p, d, b, T, C = n;
              c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
          }
          return E
      },
      getJSON: function(e, t, n) {
          return w.get(e, t, n, "json")
      },
      getScript: function(e, t) {
          return w.get(e, void 0, t, "script")
      }
  }), w.each(["get", "post"], function(e, t) {
      w[t] = function(e, n, r, i) {
          return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
              url: e,
              type: t,
              dataType: i,
              data: n,
              success: r
          }, w.isPlainObject(e) && e))
      }
  }), w._evalUrl = function(e) {
      return w.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          "throws": !0
      })
  }, w.fn.extend({
      wrapAll: function(e) {
          var t;
          return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
              var e = this;
              while (e.firstElementChild) e = e.firstElementChild;
              return e
          }).append(this)), this
      },
      wrapInner: function(e) {
          return g(e) ? this.each(function(t) {
              w(this).wrapInner(e.call(this, t))
          }) : this.each(function() {
              var t = w(this),
                  n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e)
          })
      },
      wrap: function(e) {
          var t = g(e);
          return this.each(function(n) {
              w(this).wrapAll(t ? e.call(this, n) : e)
          })
      },
      unwrap: function(e) {
          return this.parent(e).not("body").each(function() {
              w(this).replaceWith(this.childNodes)
          }), this
      }
  }), w.expr.pseudos.hidden = function(e) {
      return !w.expr.pseudos.visible(e)
  }, w.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, w.ajaxSettings.xhr = function() {
      try {
          return new e.XMLHttpRequest
      } catch (e) {}
  };
  var Vt = {
          0: 200,
          1223: 204
      },
      Gt = w.ajaxSettings.xhr();
  h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function(t) {
      var n, r;
      if (h.cors || Gt && !t.crossDomain) return {
          send: function(i, o) {
              var a, s = t.xhr();
              if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                  for (a in t.xhrFields) s[a] = t.xhrFields[a];
              t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
              for (a in i) s.setRequestHeader(a, i[a]);
              n = function(e) {
                  return function() {
                      n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                          binary: s.response
                      } : {
                          text: s.responseText
                      }, s.getAllResponseHeaders()))
                  }
              }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                  4 === s.readyState && e.setTimeout(function() {
                      n && r()
                  })
              }, n = n("abort");
              try {
                  s.send(t.hasContent && t.data || null)
              } catch (e) {
                  if (n) throw e
              }
          },
          abort: function() {
              n && n()
          }
      }
  }), w.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1)
  }), w.ajaxSetup({
      accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
          script: /\b(?:java|ecma)script\b/
      },
      converters: {
          "text script": function(e) {
              return w.globalEval(e), e
          }
      }
  }), w.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), w.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
          var t, n;
          return {
              send: function(i, o) {
                  t = w("<script>").prop({
                      charset: e.scriptCharset,
                      src: e.url
                  }).on("load error", n = function(e) {
                      t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                  }), r.head.appendChild(t[0])
              },
              abort: function() {
                  n && n()
              }
          }
      }
  });
  var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
          var e = Yt.pop() || w.expando + "_" + Et++;
          return this[e] = !0, e
      }
  }), w.ajaxPrefilter("json jsonp", function(t, n, r) {
      var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
      if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
          return a || w.error(i + " was not called"), a[0]
      }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
          a = arguments
      }, r.always(function() {
          void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
      }), "script"
  }), h.createHTMLDocument = function() {
      var e = r.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
  }(), w.parseHTML = function(e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && (n = t, t = !1);
      var i, o, a;
      return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
  }, w.fn.load = function(e, t, n) {
      var r, i, o, a = this,
          s = e.indexOf(" ");
      return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
          url: e,
          type: i || "GET",
          dataType: "html",
          data: t
      }).done(function(e) {
          o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
      }).always(n && function(e, t) {
          a.each(function() {
              n.apply(this, o || [e.responseText, t, e])
          })
      }), this
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      w.fn[t] = function(e) {
          return this.on(t, e)
      }
  }), w.expr.pseudos.animated = function(e) {
      return w.grep(w.timers, function(t) {
          return e === t.elem
      }).length
  }, w.offset = {
      setOffset: function(e, t, n) {
          var r, i, o, a, s, u, l, c = w.css(e, "position"),
              f = w(e),
              p = {};
          "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
      }
  }, w.fn.extend({
      offset: function(e) {
          if (arguments.length) return void 0 === e ? this : this.each(function(t) {
              w.offset.setOffset(this, e, t)
          });
          var t, n, r = this[0];
          if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
              top: t.top + n.pageYOffset,
              left: t.left + n.pageXOffset
          }) : {
              top: 0,
              left: 0
          }
      },
      position: function() {
          if (this[0]) {
              var e, t, n, r = this[0],
                  i = {
                      top: 0,
                      left: 0
                  };
              if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
              else {
                  t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                  while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                  e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
              }
              return {
                  top: t.top - i.top - w.css(r, "marginTop", !0),
                  left: t.left - i.left - w.css(r, "marginLeft", !0)
              }
          }
      },
      offsetParent: function() {
          return this.map(function() {
              var e = this.offsetParent;
              while (e && "static" === w.css(e, "position")) e = e.offsetParent;
              return e || be
          })
      }
  }), w.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
  }, function(e, t) {
      var n = "pageYOffset" === t;
      w.fn[e] = function(r) {
          return z(this, function(e, r, i) {
              var o;
              if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
              o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
          }, e, r, arguments.length)
      }
  }), w.each(["top", "left"], function(e, t) {
      w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
          if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
      })
  }), w.each({
      Height: "height",
      Width: "width"
  }, function(e, t) {
      w.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
      }, function(n, r) {
          w.fn[r] = function(i, o) {
              var a = arguments.length && (n || "boolean" != typeof i),
                  s = n || (!0 === i || !0 === o ? "margin" : "border");
              return z(this, function(t, n, i) {
                  var o;
                  return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
              }, t, a ? i : void 0, a)
          }
      })
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
      w.fn[t] = function(e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
  }), w.fn.extend({
      hover: function(e, t) {
          return this.mouseenter(e).mouseleave(t || e)
      }
  }), w.fn.extend({
      bind: function(e, t, n) {
          return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
          return this.off(e, null, t)
      },
      delegate: function(e, t, n, r) {
          return this.on(t, e, n, r)
      },
      undelegate: function(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
  }), w.proxy = function(e, t) {
      var n, r, i;
      if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function() {
          return e.apply(t || this, r.concat(o.call(arguments)))
      }, i.guid = e.guid = e.guid || w.guid++, i
  }, w.holdReady = function(e) {
      e ? w.readyWait++ : w.ready(!0)
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function(e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
      return w
  });
  var Jt = e.jQuery,
      Kt = e.$;
  return w.noConflict = function(t) {
      return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
  }, t || (e.jQuery = e.$ = w), w
});

/*! jQuery Address v1.6 | (c) 2009, 2013 Rostislav Hristov | jquery.org/license */
(function(c) {
  c.address = function() {
      var s = function(a) {
              a = c.extend(c.Event(a), function() {
                  for (var b = {}, f = c.address.parameterNames(), m = 0, p = f.length; m < p; m++) b[f[m]] = c.address.parameter(f[m]);
                  return {
                      value: c.address.value(),
                      path: c.address.path(),
                      pathNames: c.address.pathNames(),
                      parameterNames: f,
                      parameters: b,
                      queryString: c.address.queryString()
                  }
              }.call(c.address));
              c(c.address).trigger(a);
              return a
          },
          g = function(a) {
              return Array.prototype.slice.call(a)
          },
          k = function() {
              c().bind.apply(c(c.address), Array.prototype.slice.call(arguments));
              return c.address
          },
          da = function() {
              c().unbind.apply(c(c.address), Array.prototype.slice.call(arguments));
              return c.address
          },
          G = function() {
              return A.pushState && d.state !== h
          },
          T = function() {
              return ("/" + n.pathname.replace(new RegExp(d.state), "") + n.search + (H() ? "#" + H() : "")).replace(S, "/")
          },
          H = function() {
              var a = n.href.indexOf("#");
              return a != -1 ? n.href.substr(a + 1) : ""
          },
          q = function() {
              return G() ? T() : H()
          },
          U = function() {
              return "javascript"
          },
          M = function(a) {
              a = a.toString();
              return (d.strict && a.substr(0, 1) != "/" ? "/" : "") + a
          },
          t = function(a,
              b) {
              return parseInt(a.css(b), 10)
          },
          C = function() {
              if (!I) {
                  var a = q();
                  if (decodeURI(e) != decodeURI(a))
                      if (v && x < 7) n.reload();
                      else {
                          v && !J && d.history && u(N, 50);
                          e = a;
                          B(o)
                      }
              }
          },
          B = function(a) {
              u(ea, 10);
              return s(V).isDefaultPrevented() || s(a ? W : X).isDefaultPrevented()
          },
          ea = function() {
              if (d.tracker !== "null" && d.tracker !== D) {
                  var a = c.isFunction(d.tracker) ? d.tracker : i[d.tracker],
                      b = (n.pathname + n.search + (c.address && !G() ? c.address.value() : "")).replace(/\/\//, "/").replace(/^\/$/, "");
                  if (c.isFunction(a)) a(b);
                  else if (c.isFunction(i.urchinTracker)) i.urchinTracker(b);
                  else if (i.pageTracker !== h && c.isFunction(i.pageTracker._trackPageview)) i.pageTracker._trackPageview(b);
                  else i._gaq !== h && c.isFunction(i._gaq.push) && i._gaq.push(["_trackPageview", decodeURI(b)])
              }
          },
          N = function() {
              var a = U() + ":" + o + ";document.open();document.writeln('<html><head><title>" + l.title.replace(/\'/g, "\\'") + "</title><script>var " + y + ' = "' + encodeURIComponent(q()).replace(/\'/g, "\\'") + (l.domain != n.hostname ? '";document.domain="' + l.domain : "") + "\";<\/script></head></html>');document.close();";
              if (x < 7) j.src =
                  a;
              else j.contentWindow.location.replace(a)
          },
          Z = function() {
              if (E && Y != -1) {
                  var a, b, f = E.substr(Y + 1).split("&");
                  for (a = 0; a < f.length; a++) {
                      b = f[a].split("=");
                      if (/^(autoUpdate|history|strict|wrap)$/.test(b[0])) d[b[0]] = isNaN(b[1]) ? /^(true|yes)$/i.test(b[1]) : parseInt(b[1], 10) !== 0;
                      if (/^(state|tracker)$/.test(b[0])) d[b[0]] = b[1]
                  }
                  E = D
              }
              e = q()
          },
          aa = function() {
              if (!$) {
                  $ = r;
                  Z();
                  c('a[rel*="address:"]').address();
                  if (d.wrap) {
                      var a = c("body");
                      c("body > *").wrapAll('<div style="padding:' + (t(a, "marginTop") + t(a, "paddingTop")) + "px " +
                          (t(a, "marginRight") + t(a, "paddingRight")) + "px " + (t(a, "marginBottom") + t(a, "paddingBottom")) + "px " + (t(a, "marginLeft") + t(a, "paddingLeft")) + 'px;" />').parent().wrap('<div id="' + y + '" style="height:100%;overflow:auto;position:relative;' + (K && !window.statusbar.visible ? "resize:both;" : "") + '" />');
                      c("html, body").css({
                          height: "100%",
                          margin: 0,
                          padding: 0,
                          overflow: "hidden"
                      });
                      K && c('<style type="text/css" />').appendTo("head").text("#" + y + "::-webkit-resizer { background-color: #fff; }")
                  }
                  if (v && !J) {
                      a = l.getElementsByTagName("frameset")[0];
                      j = l.createElement((a ? "" : "i") + "frame");
                      j.src = U() + ":" + o;
                      if (a) {
                          a.insertAdjacentElement("beforeEnd", j);
                          a[a.cols ? "cols" : "rows"] += ",0";
                          j.noResize = r;
                          j.frameBorder = j.frameSpacing = 0
                      } else {
                          j.style.display = "none";
                          j.style.width = j.style.height = 0;
                          j.tabIndex = -1;
                          l.body.insertAdjacentElement("afterBegin", j)
                      }
                      u(function() {
                          c(j).bind("load", function() {
                              var b = j.contentWindow;
                              e = b[y] !== h ? b[y] : "";
                              if (e != q()) {
                                  B(o);
                                  n.hash = e
                              }
                          });
                          j.contentWindow[y] === h && N()
                      }, 50)
                  }
                  u(function() {
                      s("init");
                      B(o)
                  }, 1);
                  if (!G())
                      if (v && x > 7 || !v && J)
                          if (i.addEventListener) i.addEventListener(F,
                              C, o);
                          else i.attachEvent && i.attachEvent("on" + F, C);
                  else fa(C, 50);
                  "state" in window.history && c(window).trigger("popstate")
              }
          },
          ga = function(a) {
              a = a.toLowerCase();
              a = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
              return {
                  browser: a[1] || "",
                  version: a[2] || "0"
              }
          },
          h, D = null,
          y = "jQueryAddress",
          F = "hashchange",
          V = "change",
          W = "internalChange",
          X = "externalChange",
          r = true,
          o = false,
          d = {
              autoUpdate: r,
              history: r,
              strict: r,
              wrap: o
          },
          z = function() {
              var a = {},
                  b = ga(navigator.userAgent);
              if (b.browser) {
                  a[b.browser] = true;
                  a.version = b.version
              }
              if (a.chrome) a.webkit = true;
              else if (a.webkit) a.safari = true;
              return a
          }(),
          x = parseFloat(z.version),
          K = z.webkit || z.safari,
          v = !c.support.opacity,
          i = function() {
              try {
                  return top.document !== h && top.document.title !== h ? top : window
              } catch (a) {
                  return window
              }
          }(),
          l = i.document,
          A = i.history,
          n = i.location,
          fa = setInterval,
          u = setTimeout,
          S = /\/{2,9}/g;
      z = navigator.userAgent;
      var J =
          "on" + F in i,
          j, E = c("script:last").attr("src"),
          Y = E ? E.indexOf("?") : -1,
          O = l.title,
          I = o,
          $ = o,
          ba = r,
          L = o,
          e = q();
      if (v) {
          x = parseFloat(z.substr(z.indexOf("MSIE") + 4));
          if (l.documentMode && l.documentMode != x) x = l.documentMode != 8 ? 7 : 8;
          var ca = l.onpropertychange;
          l.onpropertychange = function() {
              ca && ca.call(l);
              if (l.title != O && l.title.indexOf("#" + q()) != -1) l.title = O
          }
      }
      if (A.navigationMode) A.navigationMode = "compatible";
      if (document.readyState == "complete") var ha = setInterval(function() {
          if (c.address) {
              aa();
              clearInterval(ha)
          }
      }, 50);
      else {
          Z();
          c(aa)
      }
      c(window).bind("popstate", function() {
          if (decodeURI(e) != decodeURI(q())) {
              e = q();
              B(o)
          }
      }).bind("unload", function() {
          if (i.removeEventListener) i.removeEventListener(F, C, o);
          else i.detachEvent && i.detachEvent("on" + F, C)
      });
      return {
          bind: function() {
              return k.apply(this, g(arguments))
          },
          unbind: function() {
              return da.apply(this, g(arguments))
          },
          init: function() {
              return k.apply(this, ["init"].concat(g(arguments)))
          },
          change: function() {
              return k.apply(this, [V].concat(g(arguments)))
          },
          internalChange: function() {
              return k.apply(this,
                  [W].concat(g(arguments)))
          },
          externalChange: function() {
              return k.apply(this, [X].concat(g(arguments)))
          },
          baseURL: function() {
              var a = n.href;
              if (a.indexOf("#") != -1) a = a.substr(0, a.indexOf("#"));
              if (/\/$/.test(a)) a = a.substr(0, a.length - 1);
              return a
          },
          autoUpdate: function(a) {
              if (a !== h) {
                  d.autoUpdate = a;
                  return this
              }
              return d.autoUpdate
          },
          history: function(a) {
              if (a !== h) {
                  d.history = a;
                  return this
              }
              return d.history
          },
          state: function(a) {
              if (a !== h) {
                  d.state = a;
                  var b = T();
                  if (d.state !== h)
                      if (A.pushState) b.substr(0, 3) == "/#/" && n.replace(d.state.replace(/^\/$/,
                          "") + b.substr(2));
                      else b != "/" && b.replace(/^\/#/, "") != H() && u(function() {
                          n.replace(d.state.replace(/^\/$/, "") + "/#" + b)
                      }, 1);
                  return this
              }
              return d.state
          },
          strict: function(a) {
              if (a !== h) {
                  d.strict = a;
                  return this
              }
              return d.strict
          },
          tracker: function(a) {
              if (a !== h) {
                  d.tracker = a;
                  return this
              }
              return d.tracker
          },
          wrap: function(a) {
              if (a !== h) {
                  d.wrap = a;
                  return this
              }
              return d.wrap
          },
          update: function() {
              L = r;
              this.value(e);
              L = o;
              return this
          },
          title: function(a) {
              if (a !== h) {
                  u(function() {
                      O = l.title = a;
                      if (ba && j && j.contentWindow && j.contentWindow.document) {
                          j.contentWindow.document.title =
                              a;
                          ba = o
                      }
                  }, 50);
                  return this
              }
              return l.title
          },
          value: function(a) {
              if (a !== h) {
                  a = M(a);
                  if (a == "/") a = "";
                  if (e == a && !L) return;
                  e = a;
                  if (d.autoUpdate || L) {
                      if (B(r)) return this;
                      if (G()) A[d.history ? "pushState" : "replaceState"]({}, "", d.state.replace(/\/$/, "") + (e === "" ? "/" : e));
                      else {
                          I = r;
                          if (K)
                              if (d.history) n.hash = "#" + e;
                              else n.replace("#" + e);
                          else if (e != q())
                              if (d.history) n.hash = "#" + e;
                              else n.replace("#" + e);
                          v && !J && d.history && u(N, 50);
                          if (K) u(function() {
                              I = o
                          }, 1);
                          else I = o
                      }
                  }
                  return this
              }
              return M(e)
          },
          path: function(a) {
              if (a !== h) {
                  var b = this.queryString(),
                      f = this.hash();
                  this.value(a + (b ? "?" + b : "") + (f ? "#" + f : ""));
                  return this
              }
              return M(e).split("#")[0].split("?")[0]
          },
          pathNames: function() {
              var a = this.path(),
                  b = a.replace(S, "/").split("/");
              if (a.substr(0, 1) == "/" || a.length === 0) b.splice(0, 1);
              a.substr(a.length - 1, 1) == "/" && b.splice(b.length - 1, 1);
              return b
          },
          queryString: function(a) {
              if (a !== h) {
                  var b = this.hash();
                  this.value(this.path() + (a ? "?" + a : "") + (b ? "#" + b : ""));
                  return this
              }
              a = e.split("?");
              return a.slice(1, a.length).join("?").split("#")[0]
          },
          parameter: function(a, b, f) {
              var m,
                  p;
              if (b !== h) {
                  var P = this.parameterNames();
                  p = [];
                  b = b === h || b === D ? "" : b.toString();
                  for (m = 0; m < P.length; m++) {
                      var Q = P[m],
                          w = this.parameter(Q);
                      if (typeof w == "string") w = [w];
                      if (Q == a) w = b === D || b === "" ? [] : f ? w.concat([b]) : [b];
                      for (var R = 0; R < w.length; R++) p.push(Q + "=" + w[R])
                  }
                  c.inArray(a, P) == -1 && b !== D && b !== "" && p.push(a + "=" + b);
                  this.queryString(p.join("&"));
                  return this
              }
              if (b = this.queryString()) {
                  f = [];
                  p = b.split("&");
                  for (m = 0; m < p.length; m++) {
                      b = p[m].split("=");
                      b[0] == a && f.push(b.slice(1).join("="))
                  }
                  if (f.length !== 0) return f.length !=
                      1 ? f : f[0]
              }
          },
          parameterNames: function() {
              var a = this.queryString(),
                  b = [];
              if (a && a.indexOf("=") != -1) {
                  a = a.split("&");
                  for (var f = 0; f < a.length; f++) {
                      var m = a[f].split("=")[0];
                      c.inArray(m, b) == -1 && b.push(m)
                  }
              }
              return b
          },
          hash: function(a) {
              if (a !== h) {
                  this.value(e.split("#")[0] + (a ? "#" + a : ""));
                  return this
              }
              a = e.split("#");
              return a.slice(1, a.length).join("#")
          }
      }
  }();
  c.fn.address = function(s) {
      this.data("address") || this.on("click", function(g) {
          if (g.shiftKey || g.ctrlKey || g.metaKey || g.which == 2) return true;
          var k = g.currentTarget;
          if (c(k).is("a")) {
              g.preventDefault();
              g = s ? s.call(k) : /address:/.test(c(k).attr("rel")) ? c(k).attr("rel").split("address:")[1].split(" ")[0] : c.address.state() !== undefined && !/^\/?$/.test(c.address.state()) ? c(k).attr("href").replace(new RegExp("^(.*" + c.address.state() + "|\\.)"), "") : c(k).attr("href").replace(/^(#\!?|\.)/, "");
              c.address.value(g)
          }
      }).on("submit", function(g) {
          var k = g.currentTarget;
          if (c(k).is("form")) {
              g.preventDefault();
              g = c(k).attr("action");
              k = s ? s.call(k) : (g.indexOf("?") != -1 ? g.replace(/&$/, "") : g + "?") + c(k).serialize();
              c.address.value(k)
          }
      }).data("address",
          true);
      return this
  }
})(jQuery);

/*
* # Fomantic UI - 2.8.8
* https://github.com/fomantic/Fomantic-UI
* http://fomantic-ui.com/
*
* Copyright 2021 Contributors
* Released under the MIT license
* http://opensource.org/licenses/MIT
*
*/
! function(p, h, v, b) {
  p.isFunction = p.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, p.site = p.fn.site = function(e) {
      var s, l, i = (new Date).getTime(),
          o = [],
          t = e,
          n = "string" == typeof t,
          c = [].slice.call(arguments, 1),
          u = p.isPlainObject(e) ? p.extend(!0, {}, p.site.settings, e) : p.extend({}, p.site.settings),
          a = u.namespace,
          d = u.error,
          r = "module-" + a,
          f = p(v),
          m = this,
          g = f.data(r);
      return s = {
          initialize: function() {
              s.instantiate()
          },
          instantiate: function() {
              s.verbose("Storing instance of site", s), g = s, f.data(r, s)
          },
          normalize: function() {
              s.fix.console(), s.fix.requestAnimationFrame()
          },
          fix: {
              console: function() {
                  s.debug("Normalizing window.console"), console !== b && console.log !== b || (s.verbose("Console not available, normalizing events"), s.disable.console()), void 0 !== console.group && void 0 !== console.groupEnd && void 0 !== console.groupCollapsed || (s.verbose("Console group not available, normalizing events"), h.console.group = function() {}, h.console.groupEnd = function() {}, h.console.groupCollapsed = function() {}), void 0 === console.markTimeline && (s.verbose("Mark timeline not available, normalizing events"), h.console.markTimeline = function() {})
              },
              consoleClear: function() {
                  s.debug("Disabling programmatic console clearing"), h.console.clear = function() {}
              },
              requestAnimationFrame: function() {
                  s.debug("Normalizing requestAnimationFrame"), h.requestAnimationFrame === b && (s.debug("RequestAnimationFrame not available, normalizing event"), h.requestAnimationFrame = h.requestAnimationFrame || h.mozRequestAnimationFrame || h.webkitRequestAnimationFrame || h.msRequestAnimationFrame || function(e) {
                      setTimeout(e, 0)
                  })
              }
          },
          moduleExists: function(e) {
              return p.fn[e] !== b && p.fn[e].settings !== b
          },
          enabled: {
              modules: function(e) {
                  var n = [];
                  return e = e || u.modules, p.each(e, function(e, t) {
                      s.moduleExists(t) && n.push(t)
                  }), n
              }
          },
          disabled: {
              modules: function(e) {
                  var n = [];
                  return e = e || u.modules, p.each(e, function(e, t) {
                      s.moduleExists(t) || n.push(t)
                  }), n
              }
          },
          change: {
              setting: function(o, a, e, r) {
                  e = "string" == typeof e ? "all" === e ? u.modules : [e] : e || u.modules, r = r === b || r, p.each(e, function(e, t) {
                      var n, i = !s.moduleExists(t) || (p.fn[t].settings.namespace || !1);
                      s.moduleExists(t) && (s.verbose("Changing default setting", o, a, t), p.fn[t].settings[o] = a, r && i && 0 < (n = p(":data(module-" + i + ")")).length && (s.verbose("Modifying existing settings", n), n[t]("setting", o, a)))
                  })
              },
              settings: function(i, e, o) {
                  e = "string" == typeof e ? [e] : e || u.modules, o = o === b || o, p.each(e, function(e, t) {
                      var n;
                      s.moduleExists(t) && (s.verbose("Changing default setting", i, t), p.extend(!0, p.fn[t].settings, i), o && a && 0 < (n = p(":data(module-" + a + ")")).length && (s.verbose("Modifying existing settings", n), n[t]("setting", i)))
                  })
              }
          },
          enable: {
              console: function() {
                  s.console(!0)
              },
              debug: function(e, t) {
                  e = e || u.modules, s.debug("Enabling debug for modules", e), s.change.setting("debug", !0, e, t)
              },
              verbose: function(e, t) {
                  e = e || u.modules, s.debug("Enabling verbose debug for modules", e), s.change.setting("verbose", !0, e, t)
              }
          },
          disable: {
              console: function() {
                  s.console(!1)
              },
              debug: function(e, t) {
                  e = e || u.modules, s.debug("Disabling debug for modules", e), s.change.setting("debug", !1, e, t)
              },
              verbose: function(e, t) {
                  e = e || u.modules, s.debug("Disabling verbose debug for modules", e), s.change.setting("verbose", !1, e, t)
              }
          },
          console: function(e) {
              if (e) {
                  if (g.cache.console === b) return void s.error(d.console);
                  s.debug("Restoring console function"), h.console = g.cache.console
              } else s.debug("Disabling console function"), g.cache.console = h.console, h.console = {
                  clear: function() {},
                  error: function() {},
                  group: function() {},
                  groupCollapsed: function() {},
                  groupEnd: function() {},
                  info: function() {},
                  log: function() {},
                  markTimeline: function() {},
                  warn: function() {}
              }
          },
          destroy: function() {
              s.verbose("Destroying previous site for", f), f.removeData(r)
          },
          cache: {},
          setting: function(e, t) {
              if (p.isPlainObject(e)) p.extend(!0, u, e);
              else {
                  if (t === b) return u[e];
                  u[e] = t
              }
          },
          internal: function(e, t) {
              if (p.isPlainObject(e)) p.extend(!0, s, e);
              else {
                  if (t === b) return s[e];
                  s[e] = t
              }
          },
          debug: function() {
              u.debug && (u.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), s.debug.apply(console, arguments)))
          },
          verbose: function() {
              u.verbose && u.debug && (u.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), s.verbose.apply(console, arguments)))
          },
          error: function() {
              s.error = Function.prototype.bind.call(console.error, console, u.name + ":"), s.error.apply(console, arguments)
          },
          performance: {
              log: function(e) {
                  var t, n;
                  u.performance && (n = (t = (new Date).getTime()) - (i || t), i = t, o.push({
                      Element: m,
                      Name: e[0],
                      Arguments: [].slice.call(e, 1) || "",
                      "Execution Time": n
                  })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500)
              },
              display: function() {
                  var e = u.name + ":",
                      n = 0;
                  i = !1, clearTimeout(s.performance.timer), p.each(o, function(e, t) {
                      n += t["Execution Time"]
                  }), e += " " + n + "ms", (console.group !== b || console.table !== b) && 0 < o.length && (console.groupCollapsed(e), console.table ? console.table(o) : p.each(o, function(e, t) {
                      console.log(t.Name + ": " + t["Execution Time"] + "ms")
                  }), console.groupEnd()), o = []
              }
          },
          invoke: function(i, e, t) {
              var o, a, n, r = g;
              return e = e || c, t = m || t, "string" == typeof i && r !== b && (i = i.split(/[\. ]/), o = i.length - 1, p.each(i, function(e, t) {
                  var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                  if (p.isPlainObject(r[n]) && e != o) r = r[n];
                  else {
                      if (r[n] !== b) return a = r[n], !1;
                      if (!p.isPlainObject(r[t]) || e == o) return r[t] !== b ? a = r[t] : s.error(d.method, i), !1;
                      r = r[t]
                  }
              })), p.isFunction(a) ? n = a.apply(t, e) : a !== b && (n = a), Array.isArray(l) ? l.push(n) : l !== b ? l = [l, n] : n !== b && (l = n), a
          }
      }, n ? (g === b && s.initialize(), s.invoke(t)) : (g !== b && s.destroy(), s.initialize()), l !== b ? l : this
  }, p.site.settings = {
      name: "Site",
      namespace: "site",
      error: {
          console: "Console cannot be restored, most likely it was overwritten outside of module",
          method: "The method you called is not defined."
      },
      debug: !1,
      verbose: !1,
      performance: !0,
      modules: ["accordion", "api", "calendar", "checkbox", "dimmer", "dropdown", "embed", "form", "modal", "nag", "popup", "slider", "rating", "shape", "sidebar", "state", "sticky", "tab", "toast", "transition", "visibility", "visit"],
      siteNamespace: "site",
      namespaceStub: {
          cache: {},
          config: {},
          sections: {},
          section: {},
          utilities: {}
      }
  }, p.extend(p.expr[":"], {
      data: p.expr.createPseudo ? p.expr.createPseudo(function(t) {
          return function(e) {
              return !!p.data(e, t)
          }
      }) : function(e, t, n) {
          return !!p.data(e, n[3])
      }
  })
}(jQuery, window, document),
function(M, I, j, L) {
  "use strict";
  M.isFunction = M.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, I = void 0 !== I && I.Math == Math ? I : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), M.fn.form = function(k) {
      var T, S = M(this),
          D = S.selector || "",
          A = (new Date).getTime(),
          E = [],
          F = k,
          P = arguments[1],
          O = "string" == typeof F,
          R = [].slice.call(arguments, 1);
      return S.each(function() {
          var n, f, t, e, g, l, m, p, h, i, u, o, a, s, c, v, d = M(this),
              b = this,
              y = [],
              x = !1,
              r = !1,
              C = !1,
              w = ["clean", "clean"];
          (v = {
              initialize: function() {
                  v.get.settings(), O ? (c === L && v.instantiate(), v.invoke(F)) : (c !== L && (c.invoke("destroy"), v.refresh()), v.verbose("Initializing form validation", d, g), v.bindEvents(), v.set.defaults(), g.autoCheckRequired && v.set.autoCheck(), v.instantiate())
              },
              instantiate: function() {
                  v.verbose("Storing instance of module", v), c = v, d.data(a, v)
              },
              destroy: function() {
                  v.verbose("Destroying previous module", c), v.removeEvents(), d.removeData(a)
              },
              refresh: function() {
                  v.verbose("Refreshing selector cache"), n = d.find(p.field), f = d.find(p.group), t = d.find(p.message), d.find(p.prompt), e = d.find(p.submit), d.find(p.clear), d.find(p.reset)
              },
              submit: function() {
                  v.verbose("Submitting form", d), r = !0, d.submit()
              },
              attachEvents: function(e, t) {
                  t = t || "submit", M(e).on("click" + s, function(e) {
                      v[t](), e.preventDefault()
                  })
              },
              bindEvents: function() {
                  v.verbose("Attaching form events"), d.on("submit" + s, v.validate.form).on("blur" + s, p.field, v.event.field.blur).on("click" + s, p.submit, v.submit).on("click" + s, p.reset, v.reset).on("click" + s, p.clear, v.clear), g.keyboardShortcuts && d.on("keydown" + s, p.field, v.event.field.keydown), n.each(function(e, t) {
                      var n = M(t),
                          i = n.prop("type"),
                          o = v.get.changeEvent(i, n);
                      n.on(o + s, v.event.field.change)
                  }), g.preventLeaving && M(I).on("beforeunload" + s, v.event.beforeUnload), n.on("change click keyup keydown blur", function(e) {
                      v.determine.isDirty()
                  }), d.on("dirty" + s, function(e) {
                      g.onDirty.call()
                  }), d.on("clean" + s, function(e) {
                      g.onClean.call()
                  })
              },
              clear: function() {
                  n.each(function(e, t) {
                      var n = M(t),
                          i = n.parent(),
                          o = n.closest(f),
                          a = o.find(p.prompt),
                          r = n.closest(p.uiCalendar),
                          s = n.data(m.defaultValue) || "",
                          l = i.is(p.uiCheckbox),
                          c = i.is(p.uiDropdown) && v.can.useElement("dropdown"),
                          u = 0 < r.length && v.can.useElement("calendar");
                      o.hasClass(h.error) && (v.verbose("Resetting error on field", o), o.removeClass(h.error), a.remove()), c ? (v.verbose("Resetting dropdown value", i, s), i.dropdown("clear", !0)) : l ? n.prop("checked", !1) : u ? r.calendar("clear") : (v.verbose("Resetting field value", n, s), n.val(""))
                  }), v.remove.states()
              },
              reset: function() {
                  n.each(function(e, t) {
                      var n = M(t),
                          i = n.parent(),
                          o = n.closest(f),
                          a = n.closest(p.uiCalendar),
                          r = o.find(p.prompt),
                          s = n.data(m.defaultValue),
                          l = i.is(p.uiCheckbox),
                          c = i.is(p.uiDropdown) && v.can.useElement("dropdown"),
                          u = 0 < a.length && v.can.useElement("calendar"),
                          d = o.hasClass(h.error);
                      s !== L && (d && (v.verbose("Resetting error on field", o), o.removeClass(h.error), r.remove()), c ? (v.verbose("Resetting dropdown value", i, s), i.dropdown("restore defaults", !0)) : l ? (v.verbose("Resetting checkbox value", i, s), n.prop("checked", s)) : u ? a.calendar("set date", s) : (v.verbose("Resetting field value", n, s), n.val(s)))
                  }), v.remove.states()
              },
              determine: {
                  isValid: function() {
                      var n = !0;
                      return M.each(l, function(e, t) {
                          v.validate.field(t, e, !0) || (n = !1)
                      }), n
                  },
                  isDirty: function(e) {
                      var o = !1;
                      n.each(function(e, t) {
                          var n, i = M(t);
                          n = 0 < i.filter(p.checkbox).length ? v.is.checkboxDirty(i) : v.is.fieldDirty(i), i.data(g.metadata.isDirty, n), o |= n
                      }), o ? v.set.dirty() : v.set.clean()
                  }
              },
              is: {
                  bracketedRule: function(e) {
                      return e.type && e.type.match(g.regExp.bracket)
                  },
                  shorthandRules: function(e) {
                      return "string" == typeof e || Array.isArray(e)
                  },
                  empty: function(e) {
                      return !e || 0 === e.length || (e.is(p.checkbox) ? !e.is(":checked") : v.is.blank(e))
                  },
                  blank: function(e) {
                      return "" === String(e.val()).trim()
                  },
                  valid: function(e, n) {
                      var i = !0;
                      return e ? (v.verbose("Checking if field is valid", e), v.validate.field(l[e], e, !!n)) : (v.verbose("Checking if form is valid"), M.each(l, function(e, t) {
                          v.is.valid(e, n) || (i = !1)
                      }), i)
                  },
                  dirty: function() {
                      return C
                  },
                  clean: function() {
                      return !C
                  },
                  fieldDirty: function(e) {
                      var t = e.data(m.defaultValue);
                      null == t ? t = "" : Array.isArray(t) && (t = t.toString());
                      var n = e.val();
                      null == n ? n = "" : Array.isArray(n) && (n = n.toString());
                      var i = /^(true|false)$/i;
                      return i.test(t) && i.test(n) ? !new RegExp("^" + t + "$", "i").test(n) : n !== t
                  },
                  checkboxDirty: function(e) {
                      return e.data(m.defaultValue) !== e.is(":checked")
                  },
                  justDirty: function() {
                      return "dirty" === w[0]
                  },
                  justClean: function() {
                      return "clean" === w[0]
                  }
              },
              removeEvents: function() {
                  d.off(s), n.off(s), e.off(s), n.off(s)
              },
              event: {
                  field: {
                      keydown: function(e) {
                          var t = M(this),
                              n = e.which,
                              i = t.is(p.input),
                              o = t.is(p.checkbox),
                              a = 0 < t.closest(p.uiDropdown).length,
                              r = 13;
                          n == 27 && (v.verbose("Escape key pressed blurring field"), t[0].blur()), e.ctrlKey || n != r || !i || a || o || (x || (t.one("keyup" + s, v.event.field.keyup), v.submit(), v.debug("Enter pressed on input submitting form")), x = !0)
                      },
                      keyup: function() {
                          x = !1
                      },
                      blur: function(e) {
                          var t = M(this),
                              n = t.closest(f),
                              i = v.get.validation(t);
                          i && ("blur" == g.on || n.hasClass(h.error) && g.revalidate) && (v.debug("Revalidating field", t, i), v.validate.field(i), g.inline || v.validate.form(!1, !0))
                      },
                      change: function(e) {
                          var t = M(this),
                              n = t.closest(f),
                              i = v.get.validation(t);
                          i && ("change" == g.on || n.hasClass(h.error) && g.revalidate) && (clearTimeout(v.timer), v.timer = setTimeout(function() {
                              v.debug("Revalidating field", t, i), v.validate.field(i), g.inline || v.validate.form(!1, !0)
                          }, g.delay))
                      }
                  },
                  beforeUnload: function(e) {
                      if (v.is.dirty() && !r) return (e = e || I.event) && (e.returnValue = g.text.leavingMessage), g.text.leavingMessage
                  }
              },
              get: {
                  ancillaryValue: function(e) {
                      return !(!e.type || !e.value && !v.is.bracketedRule(e)) && (e.value !== L ? e.value : e.type.match(g.regExp.bracket)[1] + "")
                  },
                  ruleName: function(e) {
                      return v.is.bracketedRule(e) ? e.type.replace(e.type.match(g.regExp.bracket)[0], "") : e.type
                  },
                  changeEvent: function(e, t) {
                      return "checkbox" == e || "radio" == e || "hidden" == e || t.is("select") ? "change" : v.get.inputEvent()
                  },
                  inputEvent: function() {
                      return j.createElement("input").oninput !== L ? "input" : j.createElement("input").onpropertychange !== L ? "propertychange" : "keyup"
                  },
                  fieldsFromShorthand: function(e) {
                      var i = {};
                      return M.each(e, function(n, e) {
                          Array.isArray(e) || "object" != typeof e ? ("string" == typeof e && (e = [e]), i[n] = {
                              rules: []
                          }, M.each(e, function(e, t) {
                              i[n].rules.push({
                                  type: t
                              })
                          })) : i[n] = e
                      }), i
                  },
                  prompt: function(e, t) {
                      var n, i, o, a = v.get.ruleName(e),
                          r = v.get.ancillaryValue(e),
                          s = v.get.field(t.identifier),
                          l = s.val(),
                          c = M.isFunction(e.prompt) ? e.prompt(l) : e.prompt || g.prompt[a] || g.text.unspecifiedRule,
                          u = -1 !== c.search("{value}"),
                          d = -1 !== c.search("{name}");
                      return r && 0 <= r.indexOf("..") && (o = r.split("..", 2), e.prompt || (c += ("" === o[0] ? g.prompt.maxValue.replace(/\{ruleValue\}/g, "{max}") : "" === o[1] ? g.prompt.minValue.replace(/\{ruleValue\}/g, "{min}") : g.prompt.range).replace(/\{name\}/g, " " + g.text.and)), c = (c = c.replace(/\{min\}/g, o[0])).replace(/\{max\}/g, o[1])), u && (c = c.replace(/\{value\}/g, s.val())), d && (i = 1 == (n = s.closest(p.group).find("label").eq(0)).length ? n.text() : s.prop("placeholder") || g.text.unspecifiedField, c = c.replace(/\{name\}/g, i)), c = (c = c.replace(/\{identifier\}/g, t.identifier)).replace(/\{ruleValue\}/g, r), e.prompt || v.verbose("Using default validation prompt for type", c, a), c
                  },
                  settings: function() {
                      if (M.isPlainObject(k)) {
                          var e = Object.keys(k);
                          0 < e.length && (k[e[0]].identifier !== L && k[e[0]].rules !== L) ? (g = M.extend(!0, {}, M.fn.form.settings, P), l = M.extend({}, M.fn.form.settings.defaults, k), v.error(g.error.oldSyntax, b), v.verbose("Extending settings from legacy parameters", l, g)) : (k.fields && (k.fields = v.get.fieldsFromShorthand(k.fields)), g = M.extend(!0, {}, M.fn.form.settings, k), l = M.extend({}, M.fn.form.settings.defaults, g.fields), v.verbose("Extending settings", l, g))
                      } else g = M.fn.form.settings, l = M.fn.form.settings.defaults, v.verbose("Using default form validation", l, g);
                      o = g.namespace, m = g.metadata, p = g.selector, h = g.className, i = g.regExp, u = g.error, a = "module-" + o, s = "." + o, ((c = d.data(a)) || v).refresh()
                  },
                  field: function(e) {
                      var t;
                      return v.verbose("Finding field with identifier", e), e = v.escape.string(e), 0 < (t = n.filter("#" + e)).length ? t : 0 < (t = n.filter('[name="' + e + '"]')).length ? t : 0 < (t = n.filter('[name="' + e + '[]"]')).length ? t : 0 < (t = n.filter("[data-" + m.validate + '="' + e + '"]')).length ? t : M("<input/>")
                  },
                  fields: function(e) {
                      var n = M();
                      return M.each(e, function(e, t) {
                          n = n.add(v.get.field(t))
                      }), n
                  },
                  validation: function(i) {
                      var o, a;
                      return !!l && (M.each(l, function(e, n) {
                          a = n.identifier || e, M.each(v.get.field(a), function(e, t) {
                              if (t == i[0]) return n.identifier = a, o = n, !1
                          })
                      }), o || !1)
                  },
                  value: function(e) {
                      var t = [];
                      return t.push(e), v.get.values.call(b, t)[e]
                  },
                  values: function(e) {
                      var t = Array.isArray(e) ? v.get.fields(e) : n,
                          m = {};
                      return t.each(function(e, t) {
                          var n = M(t),
                              i = n.closest(p.uiCalendar),
                              o = n.prop("name"),
                              a = n.val(),
                              r = n.is(p.checkbox),
                              s = n.is(p.radio),
                              l = -1 !== o.indexOf("[]"),
                              c = 0 < i.length && v.can.useElement("calendar"),
                              u = !!r && n.is(":checked");
                          if (o)
                              if (l) o = o.replace("[]", ""), m[o] || (m[o] = []), r ? u ? m[o].push(a || !0) : m[o].push(!1) : m[o].push(a);
                              else if (s) m[o] !== L && !1 !== m[o] || (m[o] = !!u && (a || !0));
                          else if (r) m[o] = !!u && (a || !0);
                          else if (c) {
                              var d = i.calendar("get date");
                              if (null !== d) {
                                  if ("date" == g.dateHandling) m[o] = d;
                                  else if ("input" == g.dateHandling) m[o] = i.calendar("get input date");
                                  else if ("formatter" == g.dateHandling) {
                                      var f = i.calendar("setting", "type");
                                      switch (f) {
                                          case "date":
                                              m[o] = g.formatter.date(d);
                                              break;
                                          case "datetime":
                                              m[o] = g.formatter.datetime(d);
                                              break;
                                          case "time":
                                              m[o] = g.formatter.time(d);
                                              break;
                                          case "month":
                                              m[o] = g.formatter.month(d);
                                              break;
                                          case "year":
                                              m[o] = g.formatter.year(d);
                                              break;
                                          default:
                                              v.debug("Wrong calendar mode", i, f), m[o] = ""
                                      }
                                  }
                              } else m[o] = ""
                          } else m[o] = a
                      }), m
                  },
                  dirtyFields: function() {
                      return n.filter(function(e, t) {
                          return M(t).data(m.isDirty)
                      })
                  }
              },
              has: {
                  field: function(e) {
                      return v.verbose("Checking for existence of a field with identifier", e), "string" != typeof(e = v.escape.string(e)) && v.error(u.identifier, e), 0 < n.filter("#" + e).length || (0 < n.filter('[name="' + e + '"]').length || 0 < n.filter("[data-" + m.validate + '="' + e + '"]').length)
                  }
              },
              can: {
                  useElement: function(e) {
                      return M.fn[e] !== L || (v.error(u.noElement.replace("{element}", e)), !1)
                  }
              },
              escape: {
                  string: function(e) {
                      return (e = String(e)).replace(i.escape, "\\$&")
                  }
              },
              add: {
                  rule: function(e, t) {
                      v.add.field(e, t)
                  },
                  field: function(n, e) {
                      l[n] !== L && l[n].rules !== L || (l[n] = {
                          rules: []
                      });
                      var i = {
                          rules: []
                      };
                      v.is.shorthandRules(e) ? (e = Array.isArray(e) ? e : [e], M.each(e, function(e, t) {
                          i.rules.push({
                              type: t
                          })
                      })) : i.rules = e.rules, M.each(i.rules, function(e, t) {
                          0 == M.grep(l[n].rules, function(e) {
                              return e.type == t.type
                          }).length && l[n].rules.push(t)
                      }), v.debug("Adding rules", i.rules, l)
                  },
                  fields: function(e) {
                      l = M.extend({}, l, v.get.fieldsFromShorthand(e))
                  },
                  prompt: function(e, t, n) {
                      var i = v.get.field(e).closest(f),
                          o = i.children(p.prompt),
                          a = 0 !== o.length;
                      t = "string" == typeof t ? [t] : t, v.verbose("Adding field error state", e), n || i.addClass(h.error), g.inline && (a || (o = g.templates.prompt(t, h.label)).appendTo(i), o.html(t[0]), a ? v.verbose("Inline errors are disabled, no inline error added", e) : g.transition && v.can.useElement("transition") && d.transition("is supported") ? (v.verbose("Displaying error with css transition", g.transition), o.transition(g.transition + " in", g.duration)) : (v.verbose("Displaying error with fallback javascript animation"), o.fadeIn(g.duration)))
                  },
                  errors: function(e) {
                      v.debug("Adding form error messages", e), v.set.error(), t.html(g.templates.error(e))
                  }
              },
              remove: {
                  errors: function() {
                      v.debug("Removing form error messages"), t.empty()
                  },
                  states: function() {
                      d.removeClass(h.error).removeClass(h.success), g.inline || v.remove.errors(), v.determine.isDirty()
                  },
                  rule: function(n, e) {
                      var i = Array.isArray(e) ? e : [e];
                      if (l[n] !== L && Array.isArray(l[n].rules)) return e === L ? (v.debug("Removed all rules"), void(l[n].rules = [])) : void M.each(l[n].rules, function(e, t) {
                          t && -1 !== i.indexOf(t.type) && (v.debug("Removed rule", t.type), l[n].rules.splice(e, 1))
                      })
                  },
                  field: function(e) {
                      var t = Array.isArray(e) ? e : [e];
                      M.each(t, function(e, t) {
                          v.remove.rule(t)
                      })
                  },
                  rules: function(e, n) {
                      Array.isArray(e) ? M.each(e, function(e, t) {
                          v.remove.rule(t, n)
                      }) : v.remove.rule(e, n)
                  },
                  fields: function(e) {
                      v.remove.field(e)
                  },
                  prompt: function(e) {
                      var t = v.get.field(e).closest(f),
                          n = t.children(p.prompt);
                      t.removeClass(h.error), g.inline && n.is(":visible") && (v.verbose("Removing prompt for field", e), g.transition && v.can.useElement("transition") && d.transition("is supported") ? n.transition(g.transition + " out", g.duration, function() {
                          n.remove()
                      }) : n.fadeOut(g.duration, function() {
                          n.remove()
                      }))
                  }
              },
              set: {
                  success: function() {
                      d.removeClass(h.error).addClass(h.success)
                  },
                  defaults: function() {
                      n.each(function(e, t) {
                          var n = M(t),
                              i = n.parent(),
                              o = 0 < n.filter(p.checkbox).length,
                              a = i.is(p.uiDropdown) && v.can.useElement("dropdown"),
                              r = n.closest(p.uiCalendar),
                              s = 0 < r.length && v.can.useElement("calendar"),
                              l = o ? n.is(":checked") : n.val();
                          a ? i.dropdown("save defaults") : s && r.calendar("refresh"), n.data(m.defaultValue, l), n.data(m.isDirty, !1)
                      })
                  },
                  error: function() {
                      d.removeClass(h.success).addClass(h.error)
                  },
                  value: function(e, t) {
                      var n = {};
                      return n[e] = t, v.set.values.call(b, n)
                  },
                  values: function(e) {
                      M.isEmptyObject(e) || M.each(e, function(e, t) {
                          var n, i = v.get.field(e),
                              o = i.parent(),
                              a = i.closest(p.uiCalendar),
                              r = Array.isArray(t),
                              s = o.is(p.uiCheckbox) && v.can.useElement("checkbox"),
                              l = o.is(p.uiDropdown) && v.can.useElement("dropdown"),
                              c = i.is(p.radio) && s,
                              u = 0 < a.length && v.can.useElement("calendar");
                          0 < i.length && (r && s ? (v.verbose("Selecting multiple", t, i), o.checkbox("uncheck"), M.each(t, function(e, t) {
                              n = i.filter('[value="' + t + '"]'), o = n.parent(), 0 < n.length && o.checkbox("check")
                          })) : c ? (v.verbose("Selecting radio value", t, i), i.filter('[value="' + t + '"]').parent(p.uiCheckbox).checkbox("check")) : s ? (v.verbose("Setting checkbox value", t, o), !0 === t || 1 === t ? o.checkbox("check") : o.checkbox("uncheck")) : l ? (v.verbose("Setting dropdown value", t, o), o.dropdown("set selected", t)) : u ? a.calendar("set date", t) : (v.verbose("Setting field value", t, i), i.val(t)))
                      })
                  },
                  dirty: function() {
                      v.verbose("Setting state dirty"), C = !0, w[0] = w[1], w[1] = "dirty", v.is.justClean() && d.trigger("dirty")
                  },
                  clean: function() {
                      v.verbose("Setting state clean"), C = !1, w[0] = w[1], w[1] = "clean", v.is.justDirty() && d.trigger("clean")
                  },
                  asClean: function() {
                      v.set.defaults(), v.set.clean()
                  },
                  asDirty: function() {
                      v.set.defaults(), v.set.dirty()
                  },
                  autoCheck: function() {
                      v.debug("Enabling auto check on required fields"), n.each(function(e, t) {
                          var n = M(t),
                              i = M(t).closest(f),
                              o = 0 < n.filter(p.checkbox).length,
                              a = n.prop("required") || i.hasClass(h.required) || i.parent().hasClass(h.required),
                              r = n.is(":disabled") || i.hasClass(h.disabled) || i.parent().hasClass(h.disabled),
                              s = v.get.validation(n),
                              l = !!s && 0 !== M.grep(s.rules, function(e) {
                                  return "empty" == e.type
                              }),
                              c = s.identifier || n.attr("id") || n.attr("name") || n.data(m.validate);
                          !a || r || l || c === L || (o ? (v.verbose("Adding 'checked' rule on field", c), v.add.rule(c, "checked")) : (v.verbose("Adding 'empty' rule on field", c), v.add.rule(c, "empty")))
                      })
                  },
                  optional: function(n, i) {
                      i = !1 !== i, M.each(l, function(e, t) {
                          n != e && n != t.identifier || (t.optional = i)
                      })
                  }
              },
              validate: {
                  form: function(e, t) {
                      var n = v.get.values();
                      if (x) return !1;
                      if (y = [], v.determine.isValid()) {
                          if (v.debug("Form has no validation errors, submitting"), v.set.success(), g.inline || v.remove.errors(), !0 !== t) return g.onSuccess.call(b, e, n)
                      } else {
                          if (v.debug("Form has errors"), r = !1, v.set.error(), g.inline || v.add.errors(y), e && d.data("moduleApi") !== L && e.stopImmediatePropagation(), g.errorFocus) {
                              var i, o = !0;
                              "string" == typeof g.errorFocus ? (o = (i = M(g.errorFocus)).is("[tabindex]")) || i.attr("tabindex", -1) : i = f.filter("." + h.error).first().find(p.field), i.focus(), o || i.removeAttr("tabindex")
                          }
                          if (!0 !== t) return g.onFailure.call(b, y, n)
                      }
                  },
                  field: function(i, e, o) {
                      o = o === L || o, "string" == typeof i && (v.verbose("Validating field", i), i = l[e = i]);
                      var a = i.identifier || e,
                          t = v.get.field(a),
                          n = !!i.depends && v.get.field(i.depends),
                          r = !0,
                          s = [];
                      return i.identifier || (v.debug("Using field name as identifier", a), i.identifier = a), !t.filter(":not(:disabled)").length ? v.debug("Field is disabled. Skipping", a) : i.optional && v.is.blank(t) ? v.debug("Field is optional and blank. Skipping", a) : i.depends && v.is.empty(n) ? v.debug("Field depends on another value that is not present or empty. Skipping", n) : i.rules !== L && (o && t.closest(f).removeClass(h.error), M.each(i.rules, function(e, t) {
                          if (v.has.field(a)) {
                              var n = v.validate.rule(i, t, !0) || [];
                              0 < n.length && (v.debug("Field is invalid", a, t.type), s.push(v.get.prompt(t, i)), r = !1, o && M(n).closest(f).addClass(h.error))
                          }
                      })), r ? (o && (v.remove.prompt(a, s), g.onValid.call(t)), !0) : (o && (y = y.concat(s), v.add.prompt(a, s, !0), g.onInvalid.call(t, s)), !1)
                  },
                  rule: function(e, n, t) {
                      function i(e) {
                          var t = c ? M(e).filter(":checked").val() : M(e).val();
                          return t = t === L || "" === t || null === t ? "" : g.shouldTrim && !1 !== n.shouldTrim || n.shouldTrim ? String(t + "").trim() : String(t + ""), s.call(e, t, a, d)
                      }
                      var o = v.get.field(e.identifier),
                          a = v.get.ancillaryValue(n),
                          r = v.get.ruleName(n),
                          s = g.rules[r],
                          l = [],
                          c = o.is(p.checkbox);
                      if (M.isFunction(s)) return c ? i(o) || (l = o) : M.each(o, function(e, t) {
                          i(t) || l.push(t)
                      }), t ? l : !(0 < l.length);
                      v.error(u.noRule, r)
                  }
              },
              setting: function(e, t) {
                  if (M.isPlainObject(e)) M.extend(!0, g, e);
                  else {
                      if (t === L) return g[e];
                      g[e] = t
                  }
              },
              internal: function(e, t) {
                  if (M.isPlainObject(e)) M.extend(!0, v, e);
                  else {
                      if (t === L) return v[e];
                      v[e] = t
                  }
              },
              debug: function() {
                  !g.silent && g.debug && (g.performance ? v.performance.log(arguments) : (v.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), v.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !g.silent && g.verbose && g.debug && (g.performance ? v.performance.log(arguments) : (v.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), v.verbose.apply(console, arguments)))
              },
              error: function() {
                  g.silent || (v.error = Function.prototype.bind.call(console.error, console, g.name + ":"), v.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      g.performance && (n = (t = (new Date).getTime()) - (A || t), A = t, E.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: b,
                          "Execution Time": n
                      })), clearTimeout(v.performance.timer), v.performance.timer = setTimeout(v.performance.display, 500)
                  },
                  display: function() {
                      var e = g.name + ":",
                          n = 0;
                      A = !1, clearTimeout(v.performance.timer), M.each(E, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", D && (e += " '" + D + "'"), 1 < S.length && (e += " (" + S.length + ")"), (console.group !== L || console.table !== L) && 0 < E.length && (console.groupCollapsed(e), console.table ? console.table(E) : M.each(E, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), E = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = c;
                  return e = e || R, t = b || t, "string" == typeof i && r !== L && (i = i.split(/[\. ]/), o = i.length - 1, M.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (M.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== L) return a = r[n], !1;
                          if (!M.isPlainObject(r[t]) || e == o) return r[t] !== L && (a = r[t]), !1;
                          r = r[t]
                      }
                  })), M.isFunction(a) ? n = a.apply(t, e) : a !== L && (n = a), Array.isArray(T) ? T.push(n) : T !== L ? T = [T, n] : n !== L && (T = n), a
              }
          }).initialize()
      }), T !== L ? T : this
  }, M.fn.form.settings = {
      name: "Form",
      namespace: "form",
      debug: !1,
      verbose: !1,
      performance: !0,
      fields: !1,
      keyboardShortcuts: !0,
      on: "submit",
      inline: !1,
      delay: 200,
      revalidate: !0,
      shouldTrim: !0,
      transition: "scale",
      duration: 200,
      autoCheckRequired: !1,
      preventLeaving: !1,
      errorFocus: !1,
      dateHandling: "date",
      onValid: function() {},
      onInvalid: function() {},
      onSuccess: function() {
          return !0
      },
      onFailure: function() {
          return !1
      },
      onDirty: function() {},
      onClean: function() {},
      metadata: {
          defaultValue: "default",
          validate: "validate",
          isDirty: "isDirty"
      },
      regExp: {
          htmlID: /^[a-zA-Z][\w:.-]*$/g,
          bracket: /\[(.*)\]/i,
          decimal: /^\d+\.?\d*$/,
          email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
          escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|:,=@]/g,
          flags: /^\/(.*)\/(.*)?/,
          integer: /^\-?\d+$/,
          number: /^\-?\d*(\.\d+)?$/,
          url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i
      },
      text: {
          and: "and",
          unspecifiedRule: "Please enter a valid value",
          unspecifiedField: "This field",
          leavingMessage: "There are unsaved changes on this page which will be discarded if you continue."
      },
      prompt: {
          range: "{name} must be in a range from {min} to {max}",
          maxValue: "{name} must have a maximum value of {ruleValue}",
          minValue: "{name} must have a minimum value of {ruleValue}",
          empty: "{name} must have a value",
          checked: "{name} must be checked",
          email: "{name} must be a valid e-mail",
          url: "{name} must be a valid url",
          regExp: "{name} is not formatted correctly",
          integer: "{name} must be an integer",
          decimal: "{name} must be a decimal number",
          number: "{name} must be set to a number",
          is: '{name} must be "{ruleValue}"',
          isExactly: '{name} must be exactly "{ruleValue}"',
          not: '{name} cannot be set to "{ruleValue}"',
          notExactly: '{name} cannot be set to exactly "{ruleValue}"',
          contain: '{name} must contain "{ruleValue}"',
          containExactly: '{name} must contain exactly "{ruleValue}"',
          doesntContain: '{name} cannot contain  "{ruleValue}"',
          doesntContainExactly: '{name} cannot contain exactly "{ruleValue}"',
          minLength: "{name} must be at least {ruleValue} characters",
          length: "{name} must be at least {ruleValue} characters",
          exactLength: "{name} must be exactly {ruleValue} characters",
          maxLength: "{name} cannot be longer than {ruleValue} characters",
          match: "{name} must match {ruleValue} field",
          different: "{name} must have a different value than {ruleValue} field",
          creditCard: "{name} must be a valid credit card number",
          minCount: "{name} must have at least {ruleValue} choices",
          exactCount: "{name} must have exactly {ruleValue} choices",
          maxCount: "{name} must have {ruleValue} or less choices"
      },
      selector: {
          checkbox: 'input[type="checkbox"], input[type="radio"]',
          clear: ".clear",
          field: 'input:not(.search):not([type="file"]), textarea, select',
          group: ".field",
          input: 'input:not([type="file"])',
          message: ".error.message",
          prompt: ".prompt.label",
          radio: 'input[type="radio"]',
          reset: '.reset:not([type="reset"])',
          submit: '.submit:not([type="submit"])',
          uiCheckbox: ".ui.checkbox",
          uiDropdown: ".ui.dropdown",
          uiCalendar: ".ui.calendar"
      },
      className: {
          error: "error",
          label: "ui basic red pointing prompt label",
          pressed: "down",
          success: "success",
          required: "required",
          disabled: "disabled"
      },
      error: {
          identifier: "You must specify a string identifier for each field",
          method: "The method you called is not defined.",
          noRule: "There is no rule matching the one you specified",
          oldSyntax: "Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically.",
          noElement: "This module requires ui {element}"
      },
      templates: {
          error: function(e) {
              var n = '<ul class="list">';
              return M.each(e, function(e, t) {
                  n += "<li>" + t + "</li>"
              }), M(n += "</ul>")
          },
          prompt: function(e, t) {
              return M("<div/>").addClass(t).html(e[0])
          }
      },
      formatter: {
          date: function(e) {
              return Intl.DateTimeFormat("en-GB").format(e)
          },
          datetime: function(e) {
              return Intl.DateTimeFormat("en-GB", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit"
              }).format(e)
          },
          time: function(e) {
              return Intl.DateTimeFormat("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit"
              }).format(e)
          },
          month: function(e) {
              return Intl.DateTimeFormat("en-GB", {
                  month: "2-digit",
                  year: "numeric"
              }).format(e)
          },
          year: function(e) {
              return Intl.DateTimeFormat("en-GB", {
                  year: "numeric"
              }).format(e)
          }
      },
      rules: {
          empty: function(e) {
              return !(e === L || "" === e || Array.isArray(e) && 0 === e.length)
          },
          checked: function() {
              return 0 < M(this).filter(":checked").length
          },
          email: function(e) {
              return M.fn.form.settings.regExp.email.test(e)
          },
          url: function(e) {
              return M.fn.form.settings.regExp.url.test(e)
          },
          regExp: function(e, t) {
              if (t instanceof RegExp) return e.match(t);
              var n, i = t.match(M.fn.form.settings.regExp.flags);
              return i && (t = 2 <= i.length ? i[1] : t, n = 3 <= i.length ? i[2] : ""), e.match(new RegExp(t, n))
          },
          minValue: function(e, t) {
              return M.fn.form.settings.rules.range(e, t + "..", "number")
          },
          maxValue: function(e, t) {
              return M.fn.form.settings.rules.range(e, ".." + t, "number")
          },
          integer: function(e, t) {
              return M.fn.form.settings.rules.range(e, t, "integer")
          },
          range: function(e, t, n) {
              var i, o, a;
              return "string" == typeof n && (n = M.fn.form.settings.regExp[n]), n instanceof RegExp || (n = M.fn.form.settings.regExp.integer), t && -1 === ["", ".."].indexOf(t) && (-1 == t.indexOf("..") ? n.test(t) && (i = o = t - 0) : (a = t.split("..", 2), n.test(a[0]) && (i = a[0] - 0), n.test(a[1]) && (o = a[1] - 0))), n.test(e) && (i === L || i <= e) && (o === L || e <= o)
          },
          decimal: function(e, t) {
              return M.fn.form.settings.rules.range(e, t, "decimal")
          },
          number: function(e, t) {
              return M.fn.form.settings.rules.range(e, t, "number")
          },
          is: function(e, t) {
              return t = "string" == typeof t ? t.toLowerCase() : t, (e = "string" == typeof e ? e.toLowerCase() : e) == t
          },
          isExactly: function(e, t) {
              return e == t
          },
          not: function(e, t) {
              return (e = "string" == typeof e ? e.toLowerCase() : e) != (t = "string" == typeof t ? t.toLowerCase() : t)
          },
          notExactly: function(e, t) {
              return e != t
          },
          contains: function(e, t) {
              return t = t.replace(M.fn.form.settings.regExp.escape, "\\$&"), -1 !== e.search(new RegExp(t, "i"))
          },
          containsExactly: function(e, t) {
              return t = t.replace(M.fn.form.settings.regExp.escape, "\\$&"), -1 !== e.search(new RegExp(t))
          },
          doesntContain: function(e, t) {
              return t = t.replace(M.fn.form.settings.regExp.escape, "\\$&"), -1 === e.search(new RegExp(t, "i"))
          },
          doesntContainExactly: function(e, t) {
              return t = t.replace(M.fn.form.settings.regExp.escape, "\\$&"), -1 === e.search(new RegExp(t))
          },
          minLength: function(e, t) {
              return e !== L && e.length >= t
          },
          length: function(e, t) {
              return e !== L && e.length >= t
          },
          exactLength: function(e, t) {
              return e !== L && e.length == t
          },
          maxLength: function(e, t) {
              return e !== L && e.length <= t
          },
          match: function(e, t, n) {
              var i, o;
              return 0 < (o = n.find('[data-validate="' + t + '"]')).length ? i = o.val() : 0 < (o = n.find("#" + t)).length ? i = o.val() : 0 < (o = n.find('[name="' + t + '"]')).length ? i = o.val() : 0 < (o = n.find('[name="' + t + '[]"]')).length && (i = o), i !== L && e.toString() == i.toString()
          },
          different: function(e, t, n) {
              var i, o;
              return 0 < (o = n.find('[data-validate="' + t + '"]')).length ? i = o.val() : 0 < (o = n.find("#" + t)).length ? i = o.val() : 0 < (o = n.find('[name="' + t + '"]')).length ? i = o.val() : 0 < (o = n.find('[name="' + t + '[]"]')).length && (i = o), i !== L && e.toString() !== i.toString()
          },
          creditCard: function(n, e) {
              var t, i, o = {
                      visa: {
                          pattern: /^4/,
                          length: [16]
                      },
                      amex: {
                          pattern: /^3[47]/,
                          length: [15]
                      },
                      mastercard: {
                          pattern: /^5[1-5]/,
                          length: [16]
                      },
                      discover: {
                          pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
                          length: [16]
                      },
                      unionPay: {
                          pattern: /^(62|88)/,
                          length: [16, 17, 18, 19]
                      },
                      jcb: {
                          pattern: /^35(2[89]|[3-8][0-9])/,
                          length: [16]
                      },
                      maestro: {
                          pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
                          length: [12, 13, 14, 15, 16, 17, 18, 19]
                      },
                      dinersClub: {
                          pattern: /^(30[0-5]|^36)/,
                          length: [14]
                      },
                      laser: {
                          pattern: /^(6304|670[69]|6771)/,
                          length: [16, 17, 18, 19]
                      },
                      visaElectron: {
                          pattern: /^(4026|417500|4508|4844|491(3|7))/,
                          length: [16]
                      }
                  },
                  a = {},
                  r = !1,
                  s = "string" == typeof e && e.split(",");
              if ("string" == typeof n && 0 !== n.length) {
                  if (n = n.replace(/[\s\-]/g, ""), s && (M.each(s, function(e, t) {
                          (i = o[t]) && (a = {
                              length: -1 !== M.inArray(n.length, i.length),
                              pattern: -1 !== n.search(i.pattern)
                          }).length && a.pattern && (r = !0)
                      }), !r)) return !1;
                  if ((t = {
                          number: -1 !== M.inArray(n.length, o.unionPay.length),
                          pattern: -1 !== n.search(o.unionPay.pattern)
                      }).number && t.pattern) return !0;
                  for (var l = n.length, c = 0, u = [
                          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                          [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
                      ], d = 0; l--;) d += u[c][parseInt(n.charAt(l), 10)], c ^= 1;
                  return d % 10 == 0 && 0 < d
              }
          },
          minCount: function(e, t) {
              return 0 == t || (1 == t ? "" !== e : e.split(",").length >= t)
          },
          exactCount: function(e, t) {
              return 0 == t ? "" === e : 1 == t ? "" !== e && -1 === e.search(",") : e.split(",").length == t
          },
          maxCount: function(e, t) {
              return 0 != t && (1 == t ? -1 === e.search(",") : e.split(",").length <= t)
          }
      }
  }
}(jQuery, window, document),
function(k, T, e, S) {
  "use strict";
  k.isFunction = k.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, T = void 0 !== T && T.Math == Math ? T : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), k.fn.accordion = function(a) {
      var v, r = k(this),
          b = (new Date).getTime(),
          y = [],
          x = a,
          C = "string" == typeof x,
          w = [].slice.call(arguments, 1);
      return r.each(function() {
          var e, c, u = k.isPlainObject(a) ? k.extend(!0, {}, k.fn.accordion.settings, a) : k.extend({}, k.fn.accordion.settings),
              d = u.className,
              t = u.namespace,
              f = u.selector,
              s = u.error,
              n = "." + t,
              i = "module-" + t,
              o = r.selector || "",
              m = k(this),
              g = m.find(f.title),
              p = m.find(f.content),
              l = this,
              h = m.data(i);
          c = {
              initialize: function() {
                  c.debug("Initializing", m), c.bind.events(), u.observeChanges && c.observeChanges(), c.instantiate()
              },
              instantiate: function() {
                  h = c, m.data(i, c)
              },
              destroy: function() {
                  c.debug("Destroying previous instance", m), m.off(n).removeData(i)
              },
              refresh: function() {
                  g = m.find(f.title), p = m.find(f.content)
              },
              observeChanges: function() {
                  "MutationObserver" in T && ((e = new MutationObserver(function(e) {
                      c.debug("DOM tree modified, updating selector cache"), c.refresh()
                  })).observe(l, {
                      childList: !0,
                      subtree: !0
                  }), c.debug("Setting up mutation observer", e))
              },
              bind: {
                  events: function() {
                      c.debug("Binding delegated events"), m.on(u.on + n, f.trigger, c.event.click)
                  }
              },
              event: {
                  click: function() {
                      c.toggle.call(this)
                  }
              },
              toggle: function(e) {
                  var t = e !== S ? "number" == typeof e ? g.eq(e) : k(e).closest(f.title) : k(this).closest(f.title),
                      n = t.next(p),
                      i = n.hasClass(d.animating),
                      o = n.hasClass(d.active),
                      a = o && !i,
                      r = !o && i;
                  c.debug("Toggling visibility of content", t), a || r ? u.collapsible ? c.close.call(t) : c.debug("Cannot close accordion content collapsing is disabled") : c.open.call(t)
              },
              open: function(e) {
                  var t = e !== S ? "number" == typeof e ? g.eq(e) : k(e).closest(f.title) : k(this).closest(f.title),
                      n = t.next(p),
                      i = n.hasClass(d.animating);
                  n.hasClass(d.active) || i ? c.debug("Accordion already open, skipping", n) : (c.debug("Opening accordion content", t), u.onOpening.call(n), u.onChanging.call(n), u.exclusive && c.closeOthers.call(t), t.addClass(d.active), n.stop(!0, !0).addClass(d.animating), u.animateChildren && (k.fn.transition !== S && m.transition("is supported") ? n.children().transition({
                      animation: "fade in",
                      queue: !1,
                      useFailSafe: !0,
                      debug: u.debug,
                      verbose: u.verbose,
                      duration: u.duration,
                      skipInlineHidden: !0,
                      onComplete: function() {
                          n.children().removeClass(d.transition)
                      }
                  }) : n.children().stop(!0, !0).animate({
                      opacity: 1
                  }, u.duration, c.resetOpacity)), n.slideDown(u.duration, u.easing, function() {
                      n.removeClass(d.animating).addClass(d.active), c.reset.display.call(this), u.onOpen.call(this), u.onChange.call(this)
                  }))
              },
              close: function(e) {
                  var t = e !== S ? "number" == typeof e ? g.eq(e) : k(e).closest(f.title) : k(this).closest(f.title),
                      n = t.next(p),
                      i = n.hasClass(d.animating),
                      o = n.hasClass(d.active);
                  !o && !(!o && i) || o && i || (c.debug("Closing accordion content", n), u.onClosing.call(n), u.onChanging.call(n), t.removeClass(d.active), n.stop(!0, !0).addClass(d.animating), u.animateChildren && (k.fn.transition !== S && m.transition("is supported") ? n.children().transition({
                      animation: "fade out",
                      queue: !1,
                      useFailSafe: !0,
                      debug: u.debug,
                      verbose: u.verbose,
                      duration: u.duration,
                      skipInlineHidden: !0
                  }) : n.children().stop(!0, !0).animate({
                      opacity: 0
                  }, u.duration, c.resetOpacity)), n.slideUp(u.duration, u.easing, function() {
                      n.removeClass(d.animating).removeClass(d.active), c.reset.display.call(this), u.onClose.call(this), u.onChange.call(this)
                  }))
              },
              closeOthers: function(e) {
                  var t, n, i, o = e !== S ? g.eq(e) : k(this).closest(f.title),
                      a = o.parents(f.content).prev(f.title),
                      r = o.closest(f.accordion),
                      s = f.title + "." + d.active + ":visible",
                      l = f.content + "." + d.active + ":visible";
                  i = u.closeNested ? (t = r.find(s).not(a)).next(p) : (t = r.find(s).not(a), n = r.find(l).find(s).not(a), (t = t.not(n)).next(p)), 0 < t.length && (c.debug("Exclusive enabled, closing other content", t), t.removeClass(d.active), i.removeClass(d.animating).stop(!0, !0), u.animateChildren && (k.fn.transition !== S && m.transition("is supported") ? i.children().transition({
                      animation: "fade out",
                      useFailSafe: !0,
                      debug: u.debug,
                      verbose: u.verbose,
                      duration: u.duration,
                      skipInlineHidden: !0
                  }) : i.children().stop(!0, !0).animate({
                      opacity: 0
                  }, u.duration, c.resetOpacity)), i.slideUp(u.duration, u.easing, function() {
                      k(this).removeClass(d.active), c.reset.display.call(this)
                  }))
              },
              reset: {
                  display: function() {
                      c.verbose("Removing inline display from element", this), k(this).css("display", ""), "" === k(this).attr("style") && k(this).attr("style", "").removeAttr("style")
                  },
                  opacity: function() {
                      c.verbose("Removing inline opacity from element", this), k(this).css("opacity", ""), "" === k(this).attr("style") && k(this).attr("style", "").removeAttr("style")
                  }
              },
              setting: function(e, t) {
                  if (c.debug("Changing setting", e, t), k.isPlainObject(e)) k.extend(!0, u, e);
                  else {
                      if (t === S) return u[e];
                      k.isPlainObject(u[e]) ? k.extend(!0, u[e], t) : u[e] = t
                  }
              },
              internal: function(e, t) {
                  if (c.debug("Changing internal", e, t), t === S) return c[e];
                  k.isPlainObject(e) ? k.extend(!0, c, e) : c[e] = t
              },
              debug: function() {
                  !u.silent && u.debug && (u.performance ? c.performance.log(arguments) : (c.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), c.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !u.silent && u.verbose && u.debug && (u.performance ? c.performance.log(arguments) : (c.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), c.verbose.apply(console, arguments)))
              },
              error: function() {
                  u.silent || (c.error = Function.prototype.bind.call(console.error, console, u.name + ":"), c.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      u.performance && (n = (t = (new Date).getTime()) - (b || t), b = t, y.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: l,
                          "Execution Time": n
                      })), clearTimeout(c.performance.timer), c.performance.timer = setTimeout(c.performance.display, 500)
                  },
                  display: function() {
                      var e = u.name + ":",
                          n = 0;
                      b = !1, clearTimeout(c.performance.timer), k.each(y, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", o && (e += " '" + o + "'"), (console.group !== S || console.table !== S) && 0 < y.length && (console.groupCollapsed(e), console.table ? console.table(y) : k.each(y, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), y = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = h;
                  return e = e || w, t = l || t, "string" == typeof i && r !== S && (i = i.split(/[\. ]/), o = i.length - 1, k.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (k.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== S) return a = r[n], !1;
                          if (!k.isPlainObject(r[t]) || e == o) return r[t] !== S ? a = r[t] : c.error(s.method, i), !1;
                          r = r[t]
                      }
                  })), k.isFunction(a) ? n = a.apply(t, e) : a !== S && (n = a), Array.isArray(v) ? v.push(n) : v !== S ? v = [v, n] : n !== S && (v = n), a
              }
          }, C ? (h === S && c.initialize(), c.invoke(x)) : (h !== S && h.invoke("destroy"), c.initialize())
      }), v !== S ? v : this
  }, k.fn.accordion.settings = {
      name: "Accordion",
      namespace: "accordion",
      silent: !1,
      debug: !1,
      verbose: !1,
      performance: !0,
      on: "click",
      observeChanges: !0,
      exclusive: !0,
      collapsible: !0,
      closeNested: !1,
      animateChildren: !0,
      duration: 350,
      easing: "easeOutQuad",
      onOpening: function() {},
      onClosing: function() {},
      onChanging: function() {},
      onOpen: function() {},
      onClose: function() {},
      onChange: function() {},
      error: {
          method: "The method you called is not defined"
      },
      className: {
          active: "active",
          animating: "animating",
          transition: "transition"
      },
      selector: {
          accordion: ".accordion",
          title: ".title",
          trigger: ".title",
          content: ".content"
      }
  }, k.extend(k.easing, {
      easeOutQuad: function(e, t, n, i, o) {
          return -i * (t /= o) * (t - 2) + n
      }
  })
}(jQuery, window, document),
function(ve, S, D, be) {
  "use strict";
  ve.isFunction = ve.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, S = void 0 !== S && S.Math == Math ? S : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), ve.fn.calendar = function(h) {
      var v, e = ve(this),
          b = e.selector || "",
          y = (new Date).getTime(),
          x = [],
          C = h,
          w = "string" == typeof C,
          k = [].slice.call(arguments, 1),
          T = {
              5: {
                  row: 4,
                  column: 3
              },
              10: {
                  row: 3,
                  column: 2
              },
              15: {
                  row: 2,
                  column: 2
              },
              20: {
                  row: 3,
                  column: 1
              },
              30: {
                  row: 2,
                  column: 1
              }
          },
          he = ["", "one", "two", "three", "four", "five", "six", "seven", "eight"];
      return e.each(function() {
          var f, e, le, ce = ve.isPlainObject(h) ? ve.extend(!0, {}, ve.fn.calendar.settings, h) : ve.extend({}, ve.fn.calendar.settings),
              ue = ce.className,
              t = ce.namespace,
              r = ce.selector,
              de = ce.formatter,
              n = ce.parser,
              fe = ce.metadata,
              me = T[ce.minTimeGap],
              s = ce.error,
              i = "." + t,
              o = "module-" + t,
              l = ve(this),
              c = l.find(r.input),
              ge = l.find(r.popup),
              u = l.find(r.activator),
              d = this,
              m = l.data(o),
              g = !1,
              pe = l.hasClass(ue.inverted),
              p = !1,
              a = !1;
          le = {
              initialize: function() {
                  le.debug("Initializing calendar for", d, l), f = le.get.isTouch(), le.setup.config(), le.setup.popup(), le.setup.inline(), le.setup.input(), le.setup.date(), le.create.calendar(), le.bind.events(), le.observeChanges(), le.instantiate()
              },
              instantiate: function() {
                  le.verbose("Storing instance of calendar"), m = le, l.data(o, m)
              },
              destroy: function() {
                  le.verbose("Destroying previous calendar for", d), l.removeData(o), le.unbind.events(), le.disconnect.classObserver()
              },
              setup: {
                  config: function() {
                      null !== le.get.minDate() && le.set.minDate(l.data(fe.minDate)), null !== le.get.maxDate() && le.set.maxDate(l.data(fe.maxDate)), le.setting("type", le.get.type()), le.setting("on", ce.on || (c.length ? "focus" : "click"))
                  },
                  popup: function() {
                      if (!ce.inline && (u.length || (u = l.children().first()).length))
                          if (ve.fn.popup !== be) {
                              if (!ge.length) {
                                  var e = u.parent(),
                                      t = 0 !== e.closest(r.append).length ? "appendTo" : "prependTo";
                                  ge = ve("<div/>").addClass(ue.popup)[t](e)
                              }
                              ge.addClass(ue.calendar), pe && ge.addClass(ue.inverted);
                              var n = function() {
                                      return le.refreshTooltips(), ce.onVisible.apply(ge, arguments)
                                  },
                                  i = ce.onHidden;
                              c.length || (ge.attr("tabindex", "0"), n = function() {
                                  return le.refreshTooltips(), le.focus(), ce.onVisible.apply(ge, arguments)
                              }, i = function() {
                                  return le.blur(), ce.onHidden.apply(ge, arguments)
                              });
                              var o = le.setting("on"),
                                  a = ve.extend({}, ce.popupOptions, {
                                      popup: ge,
                                      on: o,
                                      hoverable: "hover" === o,
                                      closable: "click" === o,
                                      onShow: function() {
                                          return le.set.focusDate(le.get.date()), le.set.mode(le.get.validatedMode(ce.startMode)), ce.onShow.apply(ge, arguments)
                                      },
                                      onVisible: n,
                                      onHide: ce.onHide,
                                      onHidden: i
                                  });
                              le.popup(a)
                          } else le.error(s.popup)
                  },
                  inline: function() {
                      u.length && !ce.inline || (ce.inline = !0, ge = ve("<div/>").addClass(ue.calendar).appendTo(l), c.length || ge.attr("tabindex", "0"))
                  },
                  input: function() {
                      ce.touchReadonly && c.length && f && c.prop("readonly", !0), le.check.disabled()
                  },
                  date: function() {
                      var e;
                      ce.initialDate ? e = n.date(ce.initialDate, ce) : l.data(fe.date) !== be ? e = n.date(l.data(fe.date), ce) : c.length && (e = n.date(c.val(), ce)), le.set.date(e, ce.formatInput, !1), le.set.mode(le.get.mode(), !1)
                  }
              },
              trigger: {
                  change: function() {
                      var e = c[0];
                      if (e) {
                          var t = D.createEvent("HTMLEvents");
                          le.verbose("Triggering native change event"), t.initEvent("change", !0, !1), e.dispatchEvent(t)
                      }
                  }
              },
              create: {
                  calendar: function() {
                      var e, t, n, i, o, a, r, s = le.get.mode(),
                          l = new Date,
                          c = le.get.date(),
                          u = le.get.focusDate(),
                          d = le.helper.dateInRange(u || c || ce.initialDate || l);
                      u || (u = d, le.set.focusDate(u, !1, !1));
                      var f = "year" === s,
                          m = "month" === s,
                          g = "day" === s,
                          p = "hour" === s,
                          h = "minute" === s,
                          v = "time" === ce.type,
                          b = Math.max(ce.multiMonth, 1),
                          y = g ? le.get.monthOffset() : 0,
                          x = d.getMinutes(),
                          C = d.getHours(),
                          w = d.getDate(),
                          k = d.getMonth() + y,
                          T = d.getFullYear(),
                          S = g ? ce.showWeekNumbers ? 8 : 7 : p ? 4 : me.column,
                          D = g || p ? 6 : me.row,
                          A = g ? b : 1,
                          E = ge,
                          F = E.hasClass("left") ? "right center" : "left center";
                      for (E.empty(), 1 < A && (r = ve("<div/>").addClass(ue.grid).appendTo(E)), i = 0; i < A; i++) {
                          if (1 < A) E = ve("<div/>").addClass(ue.column).appendTo(r);
                          var P = k + i,
                              O = (new Date(T, P, 1).getDay() - ce.firstDayOfWeek % 7 + 7) % 7;
                          if (!ce.constantHeight && g) {
                              var R = new Date(T, P + 1, 0).getDate() + O;
                              D = Math.ceil(R / 7)
                          }
                          var M = f ? 10 : m ? 1 : 0,
                              I = g ? 1 : 0,
                              j = p || h ? 1 : 0,
                              L = p || h ? w : 1,
                              V = new Date(T - M, P - I, L - j, C),
                              q = new Date(T + M, P + I, L + j, C),
                              z = f ? new Date(10 * Math.ceil(T / 10) - 9, 0, 0) : m ? new Date(T, 0, 0) : g ? new Date(T, P, 0) : new Date(T, P, w, -1),
                              N = f ? new Date(10 * Math.ceil(T / 10) + 1, 0, 1) : m ? new Date(T + 1, 0, 1) : g ? new Date(T, P + 1, 1) : new Date(T, P, w + 1),
                              H = s;
                          g && ce.showWeekNumbers && (H += " andweek");
                          var U = ve("<table/>").addClass(ue.table).addClass(H).addClass(he[S] + " column").appendTo(E);
                          pe && U.addClass(ue.inverted);
                          var B = S;
                          if (!v) {
                              var W = ve("<thead/>").appendTo(U);
                              o = ve("<tr/>").appendTo(W), a = ve("<th/>").attr("colspan", "" + S).appendTo(o);
                              var Y = f || m ? new Date(T, 0, 1) : g ? new Date(T, P, 1) : new Date(T, P, w, C, x),
                                  Q = ve("<span/>").addClass(ue.link).appendTo(a);
                              Q.text(de.header(Y, s, ce));
                              var X = m ? ce.disableYear ? "day" : "year" : g ? ce.disableMonth ? "year" : "month" : "day";
                              if (Q.data(fe.mode, X), 0 === i) {
                                  var K = ve("<span/>").addClass(ue.prev).appendTo(a);
                                  K.data(fe.focusDate, V), K.toggleClass(ue.disabledCell, !le.helper.isDateInRange(z, s)), ve("<i/>").addClass(ue.prevIcon).appendTo(K)
                              }
                              if (i === A - 1) {
                                  var $ = ve("<span/>").addClass(ue.next).appendTo(a);
                                  $.data(fe.focusDate, q), $.toggleClass(ue.disabledCell, !le.helper.isDateInRange(N, s)), ve("<i/>").addClass(ue.nextIcon).appendTo($)
                              }
                              if (g)
                                  for (o = ve("<tr/>").appendTo(W), ce.showWeekNumbers && ((a = ve("<th/>").appendTo(o)).text(ce.text.weekNo), a.addClass(ue.weekCell), B--), e = 0; e < B; e++)(a = ve("<th/>").appendTo(o)).text(de.dayColumnHeader((e + ce.firstDayOfWeek) % 7, ce))
                          }
                          var G = ve("<tbody/>").appendTo(U);
                          for (e = f ? 10 * Math.ceil(T / 10) - 9 : g ? 1 - O : 0, t = 0; t < D; t++)
                              for (o = ve("<tr/>").appendTo(G), g && ce.showWeekNumbers && ((a = ve("<th/>").appendTo(o)).text(le.get.weekOfYear(T, P, e + 1 - ce.firstDayOfWeek)), a.addClass(ue.weekCell)), n = 0; n < B; n++, e++) {
                                  var J = f ? new Date(e, P, 1, C, x) : m ? new Date(T, e, 1, C, x) : g ? new Date(T, P, e, C, x) : p ? new Date(T, P, w, e) : new Date(T, P, w, C, e * ce.minTimeGap),
                                      Z = f ? e : m ? ce.text.monthsShort[e] : g ? J.getDate() : de.time(J, ce, !0);
                                  (a = ve("<td/>").addClass(ue.cell).appendTo(o)).text(Z), a.data(fe.date, J);
                                  var _, ee = g && J.getMonth() !== (P + 12) % 12,
                                      te = !ce.selectAdjacentDays && ee || !le.helper.isDateInRange(J, s) || ce.isDisabled(J, s) || le.helper.isDisabled(J, s) || !le.helper.isEnabled(J, s);
                                  if (te) {
                                      var ne = le.helper.findDayAsObject(J, s, ce.disabledDates);
                                      null !== ne && ne[fe.message] && (a.attr("data-tooltip", ne[fe.message]), a.attr("data-position", ne[fe.position] || F), (ne[fe.inverted] || pe && ne[fe.inverted] === be) && a.attr("data-inverted", ""), ne[fe.variation] && a.attr("data-variation", ne[fe.variation]))
                                  } else null !== (_ = le.helper.findDayAsObject(J, s, ce.eventDates)) && (a.addClass(_[fe.class] || ce.eventClass), _[fe.message] && (a.attr("data-tooltip", _[fe.message]), a.attr("data-position", _[fe.position] || F), (_[fe.inverted] || pe && _[fe.inverted] === be) && a.attr("data-inverted", ""), _[fe.variation] && a.attr("data-variation", _[fe.variation])));
                                  var ie = le.helper.dateEqual(J, c, s),
                                      oe = le.helper.dateEqual(J, l, s);
                                  a.toggleClass(ue.adjacentCell, ee && !_), a.toggleClass(ue.disabledCell, te), a.toggleClass(ue.activeCell, ie && !(ee && te)), p || h || a.toggleClass(ue.todayCell, !ee && oe);
                                  var ae = {
                                      mode: s,
                                      adjacent: ee,
                                      disabled: te,
                                      active: ie,
                                      today: oe
                                  };
                                  de.cell(a, J, ae), le.helper.dateEqual(J, u, s) && le.set.focusDate(J, !1, !1)
                              }
                          if (ce.today) {
                              var re = ve("<tr/>").appendTo(G),
                                  se = ve("<td/>").attr("colspan", "" + S).addClass(ue.today).appendTo(re);
                              se.text(de.today(ce)), se.data(fe.date, l)
                          }
                          le.update.focus(!1, U), ce.inline && le.refreshTooltips()
                      }
                  }
              },
              update: {
                  focus: function(e, t) {
                      t = t || ge;
                      var s = le.get.mode(),
                          n = le.get.date(),
                          l = le.get.focusDate(),
                          c = le.get.startDate(),
                          u = le.get.endDate(),
                          d = (e ? l : null) || n || (f ? null : l);
                      t.find("td").each(function() {
                          var e = ve(this),
                              t = e.data(fe.date);
                          if (t) {
                              var n = e.hasClass(ue.disabledCell),
                                  i = e.hasClass(ue.activeCell),
                                  o = e.hasClass(ue.adjacentCell),
                                  a = le.helper.dateEqual(t, l, s),
                                  r = !!d && (!!c && le.helper.isDateInRange(t, s, c, d) || !!u && le.helper.isDateInRange(t, s, d, u));
                              e.toggleClass(ue.focusCell, a && (!f || g) && (!o || ce.selectAdjacentDays && o) && !n), le.helper.isTodayButton(e) || e.toggleClass(ue.rangeCell, r && !i && !n)
                          }
                      })
                  }
              },
              refresh: function() {
                  le.create.calendar()
              },
              refreshTooltips: function() {
                  var o = ve(S).width();
                  ge.find("td[data-position]").each(function() {
                      var e = ve(this),
                          t = S.getComputedStyle(e[0], ":after").width.replace(/[^0-9\.]/g, ""),
                          n = e.attr("data-position"),
                          i = o - e.width() - (parseInt(t, 10) || 250) > e.offset().left ? "right" : "left"; - 1 === n.indexOf(i) && e.attr("data-position", n.replace(/(left|right)/, i))
                  })
              },
              bind: {
                  events: function() {
                      le.debug("Binding events"), ge.on("mousedown" + i, le.event.mousedown), ge.on("touchstart" + i, le.event.mousedown), ge.on("mouseup" + i, le.event.mouseup), ge.on("touchend" + i, le.event.mouseup), ge.on("mouseover" + i, le.event.mouseover), c.length ? (c.on("input" + i, le.event.inputChange), c.on("focus" + i, le.event.inputFocus), c.on("blur" + i, le.event.inputBlur), c.on("keydown" + i, le.event.keydown)) : ge.on("keydown" + i, le.event.keydown)
                  }
              },
              unbind: {
                  events: function() {
                      le.debug("Unbinding events"), ge.off(i), c.length && c.off(i)
                  }
              },
              event: {
                  mouseover: function(e) {
                      var t = ve(e.target).data(fe.date),
                          n = 1 === e.buttons;
                      t && le.set.focusDate(t, !1, !0, n)
                  },
                  mousedown: function(e) {
                      c.length && e.preventDefault(), g = 0 <= e.type.indexOf("touch");
                      var t = ve(e.target).data(fe.date);
                      t && le.set.focusDate(t, !1, !0, !0)
                  },
                  mouseup: function(e) {
                      le.focus(), e.preventDefault(), e.stopPropagation(), g = !1;
                      var t = ve(e.target);
                      if (!t.hasClass("disabled")) {
                          var n = t.parent();
                          (n.data(fe.date) || n.data(fe.focusDate) || n.data(fe.mode)) && (t = n);
                          var i = t.data(fe.date),
                              o = t.data(fe.focusDate),
                              a = t.data(fe.mode);
                          if (i && !1 !== ce.onSelect.call(d, i, le.get.mode())) {
                              var r = t.hasClass(ue.today);
                              le.selectDate(i, r)
                          } else o ? le.set.focusDate(o) : a && le.set.mode(a)
                      }
                  },
                  keydown: function(e) {
                      var t = e.which;
                      if (27 !== t && 9 !== t || le.popup("hide"), le.popup("is visible"))
                          if (37 === t || 38 === t || 39 === t || 40 === t) {
                              var n = "day" === (d = le.get.mode()) ? 7 : "hour" === d ? 4 : "minute" === d ? me.column : 3,
                                  i = 37 === t ? -1 : 38 === t ? -n : 39 == t ? 1 : n;
                              i *= "minute" === d ? ce.minTimeGap : 1;
                              var o = le.get.focusDate() || le.get.date() || new Date,
                                  a = o.getFullYear() + ("year" === d ? i : 0),
                                  r = o.getMonth() + ("month" === d ? i : 0),
                                  s = o.getDate() + ("day" === d ? i : 0),
                                  l = o.getHours() + ("hour" === d ? i : 0),
                                  c = o.getMinutes() + ("minute" === d ? i : 0),
                                  u = new Date(a, r, s, l, c);
                              "time" === ce.type && (u = le.helper.mergeDateTime(o, u)), le.helper.isDateInRange(u, d) && le.set.focusDate(u)
                          } else if (13 === t) {
                          var d = le.get.mode(),
                              f = le.get.focusDate();
                          f && !ce.isDisabled(f, d) && !le.helper.isDisabled(f, d) && le.helper.isEnabled(f, d) && le.selectDate(f), e.preventDefault(), e.stopPropagation()
                      }
                      38 !== t && 40 !== t || (e.preventDefault(), le.popup("show"))
                  },
                  inputChange: function() {
                      var e = c.val(),
                          t = n.date(e, ce);
                      le.set.date(t, !1)
                  },
                  inputFocus: function() {
                      ge.addClass(ue.active)
                  },
                  inputBlur: function() {
                      if (ge.removeClass(ue.active), ce.formatInput) {
                          var e = le.get.date(),
                              t = de.datetime(e, ce);
                          c.val(t)
                      }
                      a && (le.trigger.change(), a = !1)
                  },
                  class: {
                      mutation: function(e) {
                          e.forEach(function(e) {
                              "class" === e.attributeName && le.check.disabled()
                          })
                      }
                  }
              },
              observeChanges: function() {
                  "MutationObserver" in S && (e = new MutationObserver(le.event.class.mutation), le.debug("Setting up mutation observer", e), le.observe.class())
              },
              disconnect: {
                  classObserver: function() {
                      c.length && e && e.disconnect()
                  }
              },
              observe: {
                  class: function() {
                      c.length && e && e.observe(l[0], {
                          attributes: !0
                      })
                  }
              },
              is: {
                  disabled: function() {
                      return l.hasClass(ue.disabled)
                  }
              },
              check: {
                  disabled: function() {
                      c.attr("tabindex", le.is.disabled() ? -1 : 0)
                  }
              },
              get: {
                  weekOfYear: function(e, t, n) {
                      var i, o, a;
                      return i = Date.UTC(e, t, n + 3) / 864e5, o = Math.floor(i / 7), a = new Date(6048e5 * o).getUTCFullYear(), o - Math.floor(Date.UTC(a, 0, 7) / 6048e5) + 1
                  },
                  date: function() {
                      return le.helper.sanitiseDate(l.data(fe.date)) || null
                  },
                  inputDate: function() {
                      return c.val()
                  },
                  focusDate: function() {
                      return l.data(fe.focusDate) || null
                  },
                  startDate: function() {
                      var e = le.get.calendarModule(ce.startCalendar);
                      return (e ? e.get.date() : l.data(fe.startDate)) || null
                  },
                  endDate: function() {
                      var e = le.get.calendarModule(ce.endCalendar);
                      return (e ? e.get.date() : l.data(fe.endDate)) || null
                  },
                  minDate: function() {
                      return l.data(fe.minDate) || null
                  },
                  maxDate: function() {
                      return l.data(fe.maxDate) || null
                  },
                  monthOffset: function() {
                      return l.data(fe.monthOffset) || 0
                  },
                  mode: function() {
                      var e = l.data(fe.mode) || ce.startMode;
                      return le.get.validatedMode(e)
                  },
                  validatedMode: function(e) {
                      var t = le.get.validModes();
                      return 0 <= ve.inArray(e, t) ? e : "time" === ce.type ? "hour" : "month" === ce.type ? "month" : "year" === ce.type ? "year" : "day"
                  },
                  type: function() {
                      return l.data(fe.type) || ce.type
                  },
                  validModes: function() {
                      var e = [];
                      return "time" !== ce.type && (ce.disableYear && "year" !== ce.type || e.push("year"), (ce.disableMonth || "year" === ce.type) && "month" !== ce.type || e.push("month"), 0 <= ce.type.indexOf("date") && e.push("day")), 0 <= ce.type.indexOf("time") && (e.push("hour"), ce.disableMinute || e.push("minute")), e
                  },
                  isTouch: function() {
                      try {
                          return D.createEvent("TouchEvent"), !0
                      } catch (e) {
                          return !1
                      }
                  },
                  calendarModule: function(e) {
                      return e ? (e instanceof ve || (e = ve(e).first()), e.data(o)) : null
                  }
              },
              set: {
                  date: function(e, t, n) {
                      t = !1 !== t, n = !1 !== n, e = le.helper.sanitiseDate(e), e = le.helper.dateInRange(e);
                      var i = le.get.mode(),
                          o = de.datetime(e, ce);
                      if (n && !1 === ce.onBeforeChange.call(d, e, o, i)) return !1;
                      if (le.set.focusDate(e), ce.isDisabled(e, i)) return !1;
                      var a = le.get.endDate();
                      a && e && a < e && le.set.endDate(be), le.set.dataKeyValue(fe.date, e), t && c.length && c.val(o), n && ce.onChange.call(d, e, o, i)
                  },
                  startDate: function(e, t) {
                      e = le.helper.sanitiseDate(e);
                      var n = le.get.calendarModule(ce.startCalendar);
                      n && n.set.date(e), le.set.dataKeyValue(fe.startDate, e, t)
                  },
                  endDate: function(e, t) {
                      e = le.helper.sanitiseDate(e);
                      var n = le.get.calendarModule(ce.endCalendar);
                      n && n.set.date(e), le.set.dataKeyValue(fe.endDate, e, t)
                  },
                  focusDate: function(e, t, n, i) {
                      e = le.helper.sanitiseDate(e), e = le.helper.dateInRange(e);
                      var o = "day" === le.get.mode(),
                          a = le.get.focusDate();
                      if (o && e && a) {
                          var r = 12 * (e.getFullYear() - a.getFullYear()) + e.getMonth() - a.getMonth();
                          if (r) {
                              var s = le.get.monthOffset() - r;
                              le.set.monthOffset(s, !1)
                          }
                      }
                      var l = le.set.dataKeyValue(fe.focusDate, e, !!e && t);
                      n = !1 !== n && l && !1 === t || p != i, p = i, n && le.update.focus(i)
                  },
                  minDate: function(e) {
                      e = le.helper.sanitiseDate(e), null !== ce.maxDate && ce.maxDate <= e ? le.verbose("Unable to set minDate variable bigger that maxDate variable", e, ce.maxDate) : (le.setting("minDate", e), le.set.dataKeyValue(fe.minDate, e))
                  },
                  maxDate: function(e) {
                      e = le.helper.sanitiseDate(e), null !== ce.minDate && ce.minDate >= e ? le.verbose("Unable to set maxDate variable lower that minDate variable", e, ce.minDate) : (le.setting("maxDate", e), le.set.dataKeyValue(fe.maxDate, e))
                  },
                  monthOffset: function(e, t) {
                      var n = Math.max(ce.multiMonth, 1);
                      e = Math.max(1 - n, Math.min(0, e)), le.set.dataKeyValue(fe.monthOffset, e, t)
                  },
                  mode: function(e, t) {
                      le.set.dataKeyValue(fe.mode, e, t)
                  },
                  dataKeyValue: function(e, t, n) {
                      var i = l.data(e),
                          o = i === t || i <= t && t <= i;
                      return t ? l.data(e, t) : l.removeData(e), (n = !1 !== n && !o) && le.refresh(), !o
                  }
              },
              selectDate: function(e, t) {
                  le.verbose("New date selection", e);
                  var n = le.get.mode();
                  if (t || "minute" === n || ce.disableMinute && "hour" === n || "date" === ce.type && "day" === n || "month" === ce.type && "month" === n || "year" === ce.type && "year" === n) {
                      if (!(!1 === le.set.date(e)) && (a = !0, ce.closable)) {
                          le.popup("hide");
                          var i = le.get.calendarModule(ce.endCalendar);
                          i && ("focus" !== i.setting("on") && i.popup("show"), i.focus())
                      }
                  } else {
                      var o = "year" === n ? ce.disableMonth ? "day" : "month" : "month" === n ? "day" : "day" === n ? "hour" : "minute";
                      le.set.mode(o), "hour" === n || "day" === n && le.get.date() ? le.set.date(e, !0, !1) : le.set.focusDate(e)
                  }
              },
              changeDate: function(e) {
                  le.set.date(e)
              },
              clear: function() {
                  le.set.date(be)
              },
              popup: function() {
                  return u.popup.apply(u, arguments)
              },
              focus: function() {
                  c.length ? c.focus() : ge.focus()
              },
              blur: function() {
                  c.length ? c.blur() : ge.blur()
              },
              helper: {
                  isDisabled: function(n, i) {
                      return ("day" === i || "month" === i || "year" === i) && ("day" === i && -1 !== ce.disabledDaysOfWeek.indexOf(n.getDay()) || ce.disabledDates.some(function(e) {
                          if ("string" == typeof e && (e = le.helper.sanitiseDate(e)), e instanceof Date) return le.helper.dateEqual(n, e, i);
                          if (null !== e && "object" == typeof e)
                              if (e[fe.year]) {
                                  if ("number" == typeof e[fe.year]) return n.getFullYear() == e[fe.year];
                                  if (Array.isArray(e[fe.year])) return -1 < e[fe.year].indexOf(n.getFullYear())
                              } else if (e[fe.month]) {
                              if ("number" == typeof e[fe.month]) return n.getMonth() == e[fe.month];
                              if (Array.isArray(e[fe.month])) return -1 < e[fe.month].indexOf(n.getMonth());
                              if (e[fe.month] instanceof Date) {
                                  var t = le.helper.sanitiseDate(e[fe.month]);
                                  return n.getMonth() == t.getMonth() && n.getFullYear() == t.getFullYear()
                              }
                          } else if (e[fe.date] && "day" === i) {
                              if (e[fe.date] instanceof Date) return le.helper.dateEqual(n, le.helper.sanitiseDate(e[fe.date]), i);
                              if (Array.isArray(e[fe.date])) return e[fe.date].some(function(e) {
                                  return le.helper.dateEqual(n, e, i)
                              })
                          }
                      }))
                  },
                  isEnabled: function(t, n) {
                      return "day" !== n || (0 === ce.enabledDates.length || ce.enabledDates.some(function(e) {
                          return "string" == typeof e && (e = le.helper.sanitiseDate(e)), e instanceof Date ? le.helper.dateEqual(t, e, n) : null !== e && "object" == typeof e && e[fe.date] ? le.helper.dateEqual(t, le.helper.sanitiseDate(e[fe.date]), n) : void 0
                      }))
                  },
                  findDayAsObject: function(t, n, e) {
                      if ("day" === n || "month" === n || "year" === n)
                          for (var i, o = 0; o < e.length; o++) {
                              if ("string" == typeof(i = e[o]) && (i = le.helper.sanitiseDate(i)), i instanceof Date && le.helper.dateEqual(t, i, n)) {
                                  var a = {};
                                  return a[fe.date] = i, a
                              }
                              if (null !== i && "object" == typeof i)
                                  if (i[fe.year]) {
                                      if ("number" == typeof i[fe.year] && t.getFullYear() == i[fe.year]) return i;
                                      if (Array.isArray(i[fe.year]) && -1 < i[fe.year].indexOf(t.getFullYear())) return i
                                  } else if (i[fe.month]) {
                                  if ("number" == typeof i[fe.month] && t.getMonth() == i[fe.month]) return i;
                                  if (Array.isArray(i[fe.month])) {
                                      if (-1 < i[fe.month].indexOf(t.getMonth())) return i
                                  } else if (i[fe.month] instanceof Date) {
                                      var r = le.helper.sanitiseDate(i[fe.month]);
                                      if (t.getMonth() == r.getMonth() && t.getFullYear() == r.getFullYear()) return i
                                  }
                              } else if (i[fe.date] && "day" === n) {
                                  if (i[fe.date] instanceof Date && le.helper.dateEqual(t, le.helper.sanitiseDate(i[fe.date]), n)) return i;
                                  if (Array.isArray(i[fe.date]) && i[fe.date].some(function(e) {
                                          return le.helper.dateEqual(t, e, n)
                                      })) return i
                              }
                          }
                      return null
                  },
                  sanitiseDate: function(e) {
                      return e instanceof Date || (e = n.date("" + e, ce)), !e || isNaN(e.getTime()) ? null : e
                  },
                  dateDiff: function(e, t, n) {
                      n = n || "day";
                      var i = "time" === ce.type,
                          o = "year" === n,
                          a = o || "month" === n,
                          r = "minute" === n,
                          s = r || "hour" === n;
                      return e = new Date(i ? 2e3 : e.getFullYear(), i ? 0 : o ? 0 : e.getMonth(), i ? 1 : a ? 1 : e.getDate(), s ? e.getHours() : 0, r ? ce.minTimeGap * Math.floor(e.getMinutes() / ce.minTimeGap) : 0), (t = new Date(i ? 2e3 : t.getFullYear(), i ? 0 : o ? 0 : t.getMonth(), i ? 1 : a ? 1 : t.getDate(), s ? t.getHours() : 0, r ? ce.minTimeGap * Math.floor(t.getMinutes() / ce.minTimeGap) : 0)).getTime() - e.getTime()
                  },
                  dateEqual: function(e, t, n) {
                      return !!e && !!t && 0 === le.helper.dateDiff(e, t, n)
                  },
                  isDateInRange: function(e, t, n, i) {
                      if (!n && !i) {
                          var o = le.get.startDate();
                          n = o && ce.minDate ? new Date(Math.max(o, ce.minDate)) : o || ce.minDate, i = ce.maxDate
                      }
                      return n = n && new Date(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), ce.minTimeGap * Math.ceil(n.getMinutes() / ce.minTimeGap)), !(!e || n && 0 < le.helper.dateDiff(e, n, t) || i && 0 < le.helper.dateDiff(i, e, t))
                  },
                  dateInRange: function(e, t, n) {
                      if (!t && !n) {
                          var i = le.get.startDate();
                          t = i && ce.minDate ? new Date(Math.max(i, ce.minDate)) : i || ce.minDate, n = ce.maxDate
                      }
                      t = t && new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), ce.minTimeGap * Math.ceil(t.getMinutes() / ce.minTimeGap));
                      var o = "time" === ce.type;
                      return e ? t && 0 < le.helper.dateDiff(e, t, "minute") ? o ? le.helper.mergeDateTime(e, t) : t : n && 0 < le.helper.dateDiff(n, e, "minute") ? o ? le.helper.mergeDateTime(e, n) : n : e : e
                  },
                  mergeDateTime: function(e, t) {
                      return e && t ? new Date(e.getFullYear(), e.getMonth(), e.getDate(), t.getHours(), t.getMinutes()) : t
                  },
                  isTodayButton: function(e) {
                      return e.text() === ce.text.today
                  }
              },
              setting: function(e, t) {
                  if (le.debug("Changing setting", e, t), ve.isPlainObject(e)) ve.extend(!0, ce, e);
                  else {
                      if (t === be) return ce[e];
                      ve.isPlainObject(ce[e]) ? ve.extend(!0, ce[e], t) : ce[e] = t
                  }
              },
              internal: function(e, t) {
                  if (ve.isPlainObject(e)) ve.extend(!0, le, e);
                  else {
                      if (t === be) return le[e];
                      le[e] = t
                  }
              },
              debug: function() {
                  !ce.silent && ce.debug && (ce.performance ? le.performance.log(arguments) : (le.debug = Function.prototype.bind.call(console.info, console, ce.name + ":"), le.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !ce.silent && ce.verbose && ce.debug && (ce.performance ? le.performance.log(arguments) : (le.verbose = Function.prototype.bind.call(console.info, console, ce.name + ":"), le.verbose.apply(console, arguments)))
              },
              error: function() {
                  ce.silent || (le.error = Function.prototype.bind.call(console.error, console, ce.name + ":"), le.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      ce.performance && (n = (t = (new Date).getTime()) - (y || t), y = t, x.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: d,
                          "Execution Time": n
                      })), clearTimeout(le.performance.timer), le.performance.timer = setTimeout(le.performance.display, 500)
                  },
                  display: function() {
                      var e = ce.name + ":",
                          n = 0;
                      y = !1, clearTimeout(le.performance.timer), ve.each(x, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", b && (e += " '" + b + "'"), (console.group !== be || console.table !== be) && 0 < x.length && (console.groupCollapsed(e), console.table ? console.table(x) : ve.each(x, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), x = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = m;
                  return e = e || k, t = d || t, "string" == typeof i && r !== be && (i = i.split(/[\. ]/), o = i.length - 1, ve.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (ve.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== be) return a = r[n], !1;
                          if (!ve.isPlainObject(r[t]) || e == o) return r[t] !== be ? a = r[t] : le.error(s.method, i), !1;
                          r = r[t]
                      }
                  })), ve.isFunction(a) ? n = a.apply(t, e) : a !== be && (n = a), Array.isArray(v) ? v.push(n) : v !== be ? v = [v, n] : n !== be && (v = n), a
              }
          }, w ? (m === be && le.initialize(), le.invoke(C)) : (m !== be && m.invoke("destroy"), le.initialize())
      }), v !== be ? v : this
  }, ve.fn.calendar.settings = {
      name: "Calendar",
      namespace: "calendar",
      silent: !1,
      debug: !1,
      verbose: !1,
      performance: !1,
      type: "datetime",
      firstDayOfWeek: 0,
      constantHeight: !0,
      today: !1,
      closable: !0,
      monthFirst: !0,
      touchReadonly: !0,
      inline: !1,
      on: null,
      initialDate: null,
      startMode: !1,
      minDate: null,
      maxDate: null,
      ampm: !0,
      disableYear: !1,
      disableMonth: !1,
      disableMinute: !1,
      formatInput: !0,
      startCalendar: null,
      endCalendar: null,
      multiMonth: 1,
      minTimeGap: 5,
      showWeekNumbers: null,
      disabledDates: [],
      disabledDaysOfWeek: [],
      enabledDates: [],
      eventDates: [],
      centuryBreak: 60,
      currentCentury: 2e3,
      selectAdjacentDays: !1,
      popupOptions: {
          position: "bottom left",
          lastResort: "bottom left",
          prefer: "opposite",
          hideOnScroll: !1
      },
      text: {
          days: ["S", "M", "T", "W", "T", "F", "S"],
          months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          today: "Today",
          now: "Now",
          am: "AM",
          pm: "PM",
          weekNo: "Week"
      },
      formatter: {
          header: function(e, t, n) {
              return "year" === t ? n.formatter.yearHeader(e, n) : "month" === t ? n.formatter.monthHeader(e, n) : "day" === t ? n.formatter.dayHeader(e, n) : "hour" === t ? n.formatter.hourHeader(e, n) : n.formatter.minuteHeader(e, n)
          },
          yearHeader: function(e, t) {
              var n = 10 * Math.ceil(e.getFullYear() / 10);
              return n - 9 + " - " + (2 + n)
          },
          monthHeader: function(e, t) {
              return e.getFullYear()
          },
          dayHeader: function(e, t) {
              return t.text.months[e.getMonth()] + " " + e.getFullYear()
          },
          hourHeader: function(e, t) {
              return t.formatter.date(e, t)
          },
          minuteHeader: function(e, t) {
              return t.formatter.date(e, t)
          },
          dayColumnHeader: function(e, t) {
              return t.text.days[e]
          },
          datetime: function(e, t) {
              if (!e) return "";
              var n = "time" === t.type ? "" : t.formatter.date(e, t),
                  i = t.type.indexOf("time") < 0 ? "" : t.formatter.time(e, t, !1);
              return n + ("datetime" === t.type ? " " : "") + i
          },
          date: function(e, t) {
              if (!e) return "";
              var n = e.getDate(),
                  i = t.text.months[e.getMonth()],
                  o = e.getFullYear();
              return "year" === t.type ? o : "month" === t.type ? i + " " + o : (t.monthFirst ? i + " " + n : n + " " + i) + ", " + o
          },
          time: function(e, t, n) {
              if (!e) return "";
              var i = e.getHours(),
                  o = e.getMinutes(),
                  a = "";
              return t.ampm && (a = " " + (i < 12 ? t.text.am : t.text.pm), i = 0 === i ? 12 : 12 < i ? i - 12 : i), i + ":" + (o < 10 ? "0" : "") + o + a
          },
          today: function(e) {
              return "date" === e.type ? e.text.today : e.text.now
          },
          cell: function(e, t, n) {}
      },
      parser: {
          date: function(e, t) {
              if (e instanceof Date) return e;
              if (!e) return null;
              if (0 === (e = String(e).trim()).length) return null;
              e.match(/^[0-9]{4}[\/\-\.][0-9]{1,2}[\/\-\.][0-9]{1,2}$/) && (e = e.replace(/[\/\-\.]/g, "/") + " 00:00:00"), e = t.monthFirst || !e.match(/^[0-9]{1,2}[\/\-\.]/) ? e : e.replace(/[\/\-\.]/g, "/").replace(/([0-9]+)\/([0-9]+)/, "$2/$1");
              var n, i, o, a = new Date(e);
              if (!(null !== e.match(/^[0-9]+$/)) && !isNaN(a.getDate())) return a;
              e = e.toLowerCase();
              var r, s, l, c = -1,
                  u = -1,
                  d = -1,
                  f = -1,
                  m = -1,
                  g = be,
                  p = "time" === t.type,
                  h = t.type.indexOf("time") < 0,
                  v = e.split(t.regExp.dateWords),
                  b = e.split(t.regExp.dateNumbers);
              if (!h)
                  for (g = 0 <= ve.inArray(t.text.am.toLowerCase(), v) || !(0 <= ve.inArray(t.text.pm.toLowerCase(), v)) && be, n = 0; n < b.length; n++)
                      if (0 <= (s = b[n]).indexOf(":")) {
                          if (u < 0 || c < 0)
                              for (l = s.split(":"), o = 0; o < Math.min(2, l.length); o++) i = parseInt(l[o]), isNaN(i) && (i = 0), 0 === o ? u = i % 24 : c = i % 60;
                          b.splice(n, 1)
                      } if (!p) {
                  for (n = 0; n < v.length; n++)
                      if (!((r = v[n]).length <= 0)) {
                          for (i = 0; i < t.text.months.length; i++)
                              if (t.text.months[i].substring(0, r.length).toLowerCase() === r) {
                                  f = i + 1;
                                  break
                              } if (0 <= f) break
                      } for (n = 0; n < b.length; n++)
                      if (i = parseInt(b[n]), !isNaN(i) && i >= t.centuryBreak && n === b.length - 1) {
                          i <= 99 && (i += t.currentCentury - 100), m = i, b.splice(n, 1);
                          break
                      } if (f < 0)
                      for (n = 0; n < b.length; n++)
                          if (o = 1 < n || t.monthFirst ? n : 1 === n ? 0 : 1, i = parseInt(b[o]), !isNaN(i) && 1 <= i && i <= 12) {
                              f = i, b.splice(o, 1);
                              break
                          } for (n = 0; n < b.length; n++)
                      if (i = parseInt(b[n]), !isNaN(i) && 1 <= i && i <= 31) {
                          d = i, b.splice(n, 1);
                          break
                      } if (m < 0)
                      for (n = b.length - 1; 0 <= n; n--)
                          if (i = parseInt(b[n]), !isNaN(i)) {
                              i <= 99 && (i += t.currentCentury), m = i, b.splice(n, 1);
                              break
                          }
              }
              if (!h) {
                  if (u < 0)
                      for (n = 0; n < b.length; n++)
                          if (i = parseInt(b[n]), !isNaN(i) && 0 <= i && i <= 23) {
                              u = i, b.splice(n, 1);
                              break
                          } if (c < 0)
                      for (n = 0; n < b.length; n++)
                          if (i = parseInt(b[n]), !isNaN(i) && 0 <= i && i <= 59) {
                              c = i, b.splice(n, 1);
                              break
                          }
              }
              if (c < 0 && u < 0 && d < 0 && f < 0 && m < 0) return null;
              c < 0 && (c = 0), u < 0 && (u = 0), d < 0 && (d = 1), f < 0 && (f = 1), m < 0 && (m = (new Date).getFullYear()), g !== be && (g ? 12 === u && (u = 0) : u < 12 && (u += 12));
              var y = new Date(m, f - 1, d, u, c);
              return y.getMonth() === f - 1 && y.getFullYear() === m || (y = new Date(m, f, 0, u, c)), isNaN(y.getTime()) ? null : y
          }
      },
      onBeforeChange: function(e, t, n) {
          return !0
      },
      onChange: function(e, t, n) {},
      onShow: function() {},
      onVisible: function() {},
      onHide: function() {},
      onHidden: function() {},
      onSelect: function(e, t) {},
      isDisabled: function(e, t) {
          return !1
      },
      selector: {
          popup: ".ui.popup",
          input: "input",
          activator: "input",
          append: ".inline.field,.inline.fields"
      },
      regExp: {
          dateWords: /[^A-Za-z\u00C0-\u024F]+/g,
          dateNumbers: /[^\d:]+/g
      },
      error: {
          popup: "UI Popup, a required component is not included in this page",
          method: "The method you called is not defined."
      },
      className: {
          calendar: "calendar",
          active: "active",
          popup: "ui popup",
          grid: "ui equal width grid",
          column: "column",
          table: "ui celled center aligned unstackable table",
          inverted: "inverted",
          prev: "prev link",
          next: "next link",
          prevIcon: "chevron left icon",
          nextIcon: "chevron right icon",
          link: "link",
          cell: "link",
          disabledCell: "disabled",
          weekCell: "disabled",
          adjacentCell: "adjacent",
          activeCell: "active",
          rangeCell: "range",
          focusCell: "focus",
          todayCell: "today",
          today: "today link",
          disabled: "disabled"
      },
      metadata: {
          date: "date",
          focusDate: "focusDate",
          startDate: "startDate",
          endDate: "endDate",
          minDate: "minDate",
          maxDate: "maxDate",
          mode: "mode",
          type: "type",
          monthOffset: "monthOffset",
          message: "message",
          class: "class",
          inverted: "inverted",
          variation: "variation",
          position: "position",
          month: "month",
          year: "year"
      },
      eventClass: "blue"
  }
}(jQuery, window, document),
function(S, D, A, E) {
  "use strict";
  S.isFunction = S.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, D = void 0 !== D && D.Math == Math ? D : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), S.fn.checkbox = function(u) {
      var d, e = S(this),
          f = e.selector || "",
          x = (new Date).getTime(),
          C = [],
          w = u,
          k = "string" == typeof w,
          T = [].slice.call(arguments, 1);
      return e.each(function() {
          var e, m, g = S.extend(!0, {}, S.fn.checkbox.settings, u),
              t = g.className,
              n = g.namespace,
              p = g.selector,
              s = g.error,
              i = "." + n,
              o = "module-" + n,
              h = S(this),
              a = S(this).children(p.label),
              v = S(this).children(p.input),
              b = v[0],
              r = !1,
              y = !1,
              l = h.data(o),
              c = this;
          m = {
              initialize: function() {
                  m.verbose("Initializing checkbox", g), m.create.label(), m.bind.events(), m.set.tabbable(), m.hide.input(), m.observeChanges(), m.instantiate(), m.setup()
              },
              instantiate: function() {
                  m.verbose("Storing instance of module", m), l = m, h.data(o, m)
              },
              destroy: function() {
                  m.verbose("Destroying module"), m.unbind.events(), m.show.input(), h.removeData(o)
              },
              fix: {
                  reference: function() {
                      h.is(p.input) && (m.debug("Behavior called on <input> adjusting invoked element"), h = h.closest(p.checkbox), m.refresh())
                  }
              },
              setup: function() {
                  m.set.initialLoad(), m.is.indeterminate() ? (m.debug("Initial value is indeterminate"), m.indeterminate()) : m.is.checked() ? (m.debug("Initial value is checked"), m.check()) : (m.debug("Initial value is unchecked"), m.uncheck()), m.remove.initialLoad()
              },
              refresh: function() {
                  a = h.children(p.label), v = h.children(p.input), b = v[0]
              },
              hide: {
                  input: function() {
                      m.verbose("Modifying <input> z-index to be unselectable"), v.addClass(t.hidden)
                  }
              },
              show: {
                  input: function() {
                      m.verbose("Modifying <input> z-index to be selectable"), v.removeClass(t.hidden)
                  }
              },
              observeChanges: function() {
                  "MutationObserver" in D && ((e = new MutationObserver(function(e) {
                      m.debug("DOM tree modified, updating selector cache"), m.refresh()
                  })).observe(c, {
                      childList: !0,
                      subtree: !0
                  }), m.debug("Setting up mutation observer", e))
              },
              attachEvents: function(e, t) {
                  var n = S(e);
                  t = S.isFunction(m[t]) ? m[t] : m.toggle, 0 < n.length ? (m.debug("Attaching checkbox events to element", e, t), n.on("click" + i, t)) : m.error(s.notFound)
              },
              preventDefaultOnInputTarget: function() {
                  "undefined" != typeof event && null !== event && S(event.target).is(p.input) && (m.verbose("Preventing default check action after manual check action"), event.preventDefault())
              },
              event: {
                  change: function(e) {
                      m.should.ignoreCallbacks() || g.onChange.call(b)
                  },
                  click: function(e) {
                      var t = S(e.target);
                      t.is(p.input) ? m.verbose("Using default check action on initialized checkbox") : t.is(p.link) ? m.debug("Clicking link inside checkbox, skipping toggle") : (m.toggle(), v.focus(), e.preventDefault())
                  },
                  keydown: function(e) {
                      var t = e.which,
                          n = 13,
                          i = 32,
                          o = 27,
                          a = 37,
                          r = 38,
                          s = 39,
                          l = 40,
                          c = m.get.radios(),
                          u = c.index(h),
                          d = c.length,
                          f = !1;
                      if (t == a || t == r ? f = (0 === u ? d : u) - 1 : t != s && t != l || (f = u === d - 1 ? 0 : u + 1), !m.should.ignoreCallbacks() && !1 !== f) {
                          if (!1 === g.beforeUnchecked.apply(b)) return m.verbose("Option not allowed to be unchecked, cancelling key navigation"), !1;
                          if (!1 === g.beforeChecked.apply(S(c[f]).children(p.input)[0])) return m.verbose("Next option should not allow check, cancelling key navigation"), !1
                      }
                      y = t == o ? (m.verbose("Escape key pressed blurring field"), v.blur(), !0) : !(e.ctrlKey || !(t == i || t == n && g.enableEnterKey)) && (m.verbose("Enter/space key pressed, toggling checkbox"), m.toggle(), !0)
                  },
                  keyup: function(e) {
                      y && e.preventDefault()
                  }
              },
              check: function() {
                  m.should.allowCheck() && (m.debug("Checking checkbox", v), m.set.checked(), m.should.ignoreCallbacks() || (g.onChecked.call(b), m.trigger.change()), m.preventDefaultOnInputTarget())
              },
              uncheck: function() {
                  m.should.allowUncheck() && (m.debug("Unchecking checkbox"), m.set.unchecked(), m.should.ignoreCallbacks() || (g.onUnchecked.call(b), m.trigger.change()), m.preventDefaultOnInputTarget())
              },
              indeterminate: function() {
                  m.should.allowIndeterminate() ? m.debug("Checkbox is already indeterminate") : (m.debug("Making checkbox indeterminate"), m.set.indeterminate(), m.should.ignoreCallbacks() || (g.onIndeterminate.call(b), m.trigger.change()))
              },
              determinate: function() {
                  m.should.allowDeterminate() ? m.debug("Checkbox is already determinate") : (m.debug("Making checkbox determinate"), m.set.determinate(), m.should.ignoreCallbacks() || (g.onDeterminate.call(b), m.trigger.change()))
              },
              enable: function() {
                  m.is.enabled() ? m.debug("Checkbox is already enabled") : (m.debug("Enabling checkbox"), m.set.enabled(), m.should.ignoreCallbacks() || (g.onEnable.call(b), g.onEnabled.call(b), m.trigger.change()))
              },
              disable: function() {
                  m.is.disabled() ? m.debug("Checkbox is already disabled") : (m.debug("Disabling checkbox"), m.set.disabled(), m.should.ignoreCallbacks() || (g.onDisable.call(b), g.onDisabled.call(b), m.trigger.change()))
              },
              get: {
                  radios: function() {
                      var e = m.get.name();
                      return S('input[name="' + e + '"]').closest(p.checkbox)
                  },
                  otherRadios: function() {
                      return m.get.radios().not(h)
                  },
                  name: function() {
                      return v.attr("name")
                  }
              },
              is: {
                  initialLoad: function() {
                      return r
                  },
                  radio: function() {
                      return v.hasClass(t.radio) || "radio" == v.attr("type")
                  },
                  indeterminate: function() {
                      return v.prop("indeterminate") !== E && v.prop("indeterminate")
                  },
                  checked: function() {
                      return v.prop("checked") !== E && v.prop("checked")
                  },
                  disabled: function() {
                      return v.prop("disabled") !== E && v.prop("disabled")
                  },
                  enabled: function() {
                      return !m.is.disabled()
                  },
                  determinate: function() {
                      return !m.is.indeterminate()
                  },
                  unchecked: function() {
                      return !m.is.checked()
                  }
              },
              should: {
                  allowCheck: function() {
                      return m.is.determinate() && m.is.checked() && !m.is.initialLoad() ? (m.debug("Should not allow check, checkbox is already checked"), !1) : !(!m.should.ignoreCallbacks() && !1 === g.beforeChecked.apply(b)) || (m.debug("Should not allow check, beforeChecked cancelled"), !1)
                  },
                  allowUncheck: function() {
                      return m.is.determinate() && m.is.unchecked() && !m.is.initialLoad() ? (m.debug("Should not allow uncheck, checkbox is already unchecked"), !1) : !(!m.should.ignoreCallbacks() && !1 === g.beforeUnchecked.apply(b)) || (m.debug("Should not allow uncheck, beforeUnchecked cancelled"), !1)
                  },
                  allowIndeterminate: function() {
                      return m.is.indeterminate() && !m.is.initialLoad() ? (m.debug("Should not allow indeterminate, checkbox is already indeterminate"), !1) : !(!m.should.ignoreCallbacks() && !1 === g.beforeIndeterminate.apply(b)) || (m.debug("Should not allow indeterminate, beforeIndeterminate cancelled"), !1)
                  },
                  allowDeterminate: function() {
                      return m.is.determinate() && !m.is.initialLoad() ? (m.debug("Should not allow determinate, checkbox is already determinate"), !1) : !(!m.should.ignoreCallbacks() && !1 === g.beforeDeterminate.apply(b)) || (m.debug("Should not allow determinate, beforeDeterminate cancelled"), !1)
                  },
                  ignoreCallbacks: function() {
                      return r && !g.fireOnInit
                  }
              },
              can: {
                  change: function() {
                      return !(h.hasClass(t.disabled) || h.hasClass(t.readOnly) || v.prop("disabled") || v.prop("readonly"))
                  },
                  uncheck: function() {
                      return "boolean" == typeof g.uncheckable ? g.uncheckable : !m.is.radio()
                  }
              },
              set: {
                  initialLoad: function() {
                      r = !0
                  },
                  checked: function() {
                      m.verbose("Setting class to checked"), h.removeClass(t.indeterminate).addClass(t.checked), m.is.radio() && m.uncheckOthers(), m.is.indeterminate() || !m.is.checked() ? (m.verbose("Setting state to checked", b), v.prop("indeterminate", !1).prop("checked", !0)) : m.debug("Input is already checked, skipping input property change")
                  },
                  unchecked: function() {
                      m.verbose("Removing checked class"), h.removeClass(t.indeterminate).removeClass(t.checked), m.is.indeterminate() || !m.is.unchecked() ? (m.debug("Setting state to unchecked"), v.prop("indeterminate", !1).prop("checked", !1)) : m.debug("Input is already unchecked")
                  },
                  indeterminate: function() {
                      m.verbose("Setting class to indeterminate"), h.addClass(t.indeterminate), m.is.indeterminate() ? m.debug("Input is already indeterminate, skipping input property change") : (m.debug("Setting state to indeterminate"), v.prop("indeterminate", !0))
                  },
                  determinate: function() {
                      m.verbose("Removing indeterminate class"), h.removeClass(t.indeterminate), m.is.determinate() ? m.debug("Input is already determinate, skipping input property change") : (m.debug("Setting state to determinate"), v.prop("indeterminate", !1))
                  },
                  disabled: function() {
                      m.verbose("Setting class to disabled"), h.addClass(t.disabled), m.is.disabled() ? m.debug("Input is already disabled, skipping input property change") : (m.debug("Setting state to disabled"), v.prop("disabled", "disabled"))
                  },
                  enabled: function() {
                      m.verbose("Removing disabled class"), h.removeClass(t.disabled), m.is.enabled() ? m.debug("Input is already enabled, skipping input property change") : (m.debug("Setting state to enabled"), v.prop("disabled", !1))
                  },
                  tabbable: function() {
                      m.verbose("Adding tabindex to checkbox"), v.attr("tabindex") === E && v.attr("tabindex", 0)
                  }
              },
              remove: {
                  initialLoad: function() {
                      r = !1
                  }
              },
              trigger: {
                  change: function() {
                      var e = v[0];
                      if (e) {
                          var t = A.createEvent("HTMLEvents");
                          m.verbose("Triggering native change event"), t.initEvent("change", !0, !1), e.dispatchEvent(t)
                      }
                  }
              },
              create: {
                  label: function() {
                      0 < v.prevAll(p.label).length ? (v.prev(p.label).detach().insertAfter(v), m.debug("Moving existing label", a)) : m.has.label() || (a = S("<label>").insertAfter(v), m.debug("Creating label", a))
                  }
              },
              has: {
                  label: function() {
                      return 0 < a.length
                  }
              },
              bind: {
                  events: function() {
                      m.verbose("Attaching checkbox events"), h.on("click" + i, m.event.click).on("change" + i, m.event.change).on("keydown" + i, p.input, m.event.keydown).on("keyup" + i, p.input, m.event.keyup)
                  }
              },
              unbind: {
                  events: function() {
                      m.debug("Removing events"), h.off(i)
                  }
              },
              uncheckOthers: function() {
                  var e = m.get.otherRadios();
                  m.debug("Unchecking other radios", e), e.removeClass(t.checked)
              },
              toggle: function() {
                  m.can.change() ? m.is.indeterminate() || m.is.unchecked() ? (m.debug("Currently unchecked"), m.check()) : m.is.checked() && m.can.uncheck() && (m.debug("Currently checked"), m.uncheck()) : m.is.radio() || m.debug("Checkbox is read-only or disabled, ignoring toggle")
              },
              setting: function(e, t) {
                  if (m.debug("Changing setting", e, t), S.isPlainObject(e)) S.extend(!0, g, e);
                  else {
                      if (t === E) return g[e];
                      S.isPlainObject(g[e]) ? S.extend(!0, g[e], t) : g[e] = t
                  }
              },
              internal: function(e, t) {
                  if (S.isPlainObject(e)) S.extend(!0, m, e);
                  else {
                      if (t === E) return m[e];
                      m[e] = t
                  }
              },
              debug: function() {
                  !g.silent && g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !g.silent && g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)))
              },
              error: function() {
                  g.silent || (m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      g.performance && (n = (t = (new Date).getTime()) - (x || t), x = t, C.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: c,
                          "Execution Time": n
                      })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500)
                  },
                  display: function() {
                      var e = g.name + ":",
                          n = 0;
                      x = !1, clearTimeout(m.performance.timer), S.each(C, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", f && (e += " '" + f + "'"), (console.group !== E || console.table !== E) && 0 < C.length && (console.groupCollapsed(e), console.table ? console.table(C) : S.each(C, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), C = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = l;
                  return e = e || T, t = c || t, "string" == typeof i && r !== E && (i = i.split(/[\. ]/), o = i.length - 1, S.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (S.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== E) return a = r[n], !1;
                          if (!S.isPlainObject(r[t]) || e == o) return r[t] !== E ? a = r[t] : m.error(s.method, i), !1;
                          r = r[t]
                      }
                  })), S.isFunction(a) ? n = a.apply(t, e) : a !== E && (n = a), Array.isArray(d) ? d.push(n) : d !== E ? d = [d, n] : n !== E && (d = n), a
              }
          }, k ? (l === E && m.initialize(), m.invoke(w)) : (l !== E && l.invoke("destroy"), m.initialize())
      }), d !== E ? d : this
  }, S.fn.checkbox.settings = {
      name: "Checkbox",
      namespace: "checkbox",
      silent: !1,
      debug: !1,
      verbose: !0,
      performance: !0,
      uncheckable: "auto",
      fireOnInit: !1,
      enableEnterKey: !0,
      onChange: function() {},
      beforeChecked: function() {},
      beforeUnchecked: function() {},
      beforeDeterminate: function() {},
      beforeIndeterminate: function() {},
      onChecked: function() {},
      onUnchecked: function() {},
      onDeterminate: function() {},
      onIndeterminate: function() {},
      onEnable: function() {},
      onDisable: function() {},
      onEnabled: function() {},
      onDisabled: function() {},
      className: {
          checked: "checked",
          indeterminate: "indeterminate",
          disabled: "disabled",
          hidden: "hidden",
          radio: "radio",
          readOnly: "read-only"
      },
      error: {
          method: "The method you called is not defined"
      },
      selector: {
          checkbox: ".ui.checkbox",
          label: "label, .box",
          input: 'input[type="checkbox"], input[type="radio"]',
          link: "a[href]"
      }
  }
}(jQuery, window, document),
function(k, e, T, S) {
  "use strict";
  k.isFunction = k.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), k.fn.dimmer = function(p) {
      var h, v = k(this),
          b = (new Date).getTime(),
          y = [],
          x = p,
          C = "string" == typeof x,
          w = [].slice.call(arguments, 1);
      return v.each(function() {
          var o, t, s, a = k.isPlainObject(p) ? k.extend(!0, {}, k.fn.dimmer.settings, p) : k.extend({}, k.fn.dimmer.settings),
              n = a.selector,
              e = a.namespace,
              i = a.className,
              l = a.error,
              r = "." + e,
              c = "module-" + e,
              u = v.selector || "",
              d = "ontouchstart" in T.documentElement ? "touchstart" : "click",
              f = k(this),
              m = this,
              g = f.data(c);
          (s = {
              preinitialize: function() {
                  o = s.is.dimmer() ? (t = f.parent(), f) : (t = f, s.has.dimmer() ? a.dimmerName ? t.find(n.dimmer).filter("." + a.dimmerName) : t.find(n.dimmer) : s.create())
              },
              initialize: function() {
                  s.debug("Initializing dimmer", a), s.bind.events(), s.set.dimmable(), s.instantiate()
              },
              instantiate: function() {
                  s.verbose("Storing instance of module", s), g = s, f.data(c, g)
              },
              destroy: function() {
                  s.verbose("Destroying previous module", o), s.unbind.events(), s.remove.variation(), t.off(r)
              },
              bind: {
                  events: function() {
                      "hover" == a.on ? t.on("mouseenter" + r, s.show).on("mouseleave" + r, s.hide) : "click" == a.on && t.on(d + r, s.toggle), s.is.page() && (s.debug("Setting as a page dimmer", t), s.set.pageDimmer()), s.is.closable() && (s.verbose("Adding dimmer close event", o), t.on(d + r, n.dimmer, s.event.click))
                  }
              },
              unbind: {
                  events: function() {
                      f.removeData(c), t.off(r)
                  }
              },
              event: {
                  click: function(e) {
                      s.verbose("Determining if event occurred on dimmer", e), 0 !== o.find(e.target).length && !k(e.target).is(n.content) || (s.hide(), e.stopImmediatePropagation())
                  }
              },
              addContent: function(e) {
                  var t = k(e);
                  s.debug("Add content to dimmer", t), t.parent()[0] !== o[0] && t.detach().appendTo(o)
              },
              create: function() {
                  var e = k(a.template.dimmer(a));
                  return a.dimmerName && (s.debug("Creating named dimmer", a.dimmerName), e.addClass(a.dimmerName)), e.appendTo(t), e
              },
              show: function(e) {
                  e = k.isFunction(e) ? e : function() {}, s.debug("Showing dimmer", o, a), s.set.variation(), s.is.dimmed() && !s.is.animating() || !s.is.enabled() ? s.debug("Dimmer is already shown or disabled") : (s.animate.show(e), a.onShow.call(m), a.onChange.call(m))
              },
              hide: function(e) {
                  e = k.isFunction(e) ? e : function() {}, s.is.dimmed() || s.is.animating() ? (s.debug("Hiding dimmer", o), s.animate.hide(e), a.onHide.call(m), a.onChange.call(m)) : s.debug("Dimmer is not visible")
              },
              toggle: function() {
                  s.verbose("Toggling dimmer visibility", o), s.is.dimmed() ? s.is.closable() && s.hide() : s.show()
              },
              animate: {
                  show: function(e) {
                      e = k.isFunction(e) ? e : function() {}, a.useCSS && k.fn.transition !== S && o.transition("is supported") ? (a.useFlex ? (s.debug("Using flex dimmer"), s.remove.legacy()) : (s.debug("Using legacy non-flex dimmer"), s.set.legacy()), "auto" !== a.opacity && s.set.opacity(), o.transition({
                          displayType: a.useFlex ? "flex" : "block",
                          animation: (a.transition.showMethod || a.transition) + " in",
                          queue: !1,
                          duration: s.get.duration(),
                          useFailSafe: !0,
                          onStart: function() {
                              s.set.dimmed()
                          },
                          onComplete: function() {
                              s.set.active(), e()
                          }
                      })) : (s.verbose("Showing dimmer animation with javascript"), s.set.dimmed(), "auto" == a.opacity && (a.opacity = .8), o.stop().css({
                          opacity: 0,
                          width: "100%",
                          height: "100%"
                      }).fadeTo(s.get.duration(), a.opacity, function() {
                          o.removeAttr("style"), s.set.active(), e()
                      }))
                  },
                  hide: function(e) {
                      e = k.isFunction(e) ? e : function() {}, a.useCSS && k.fn.transition !== S && o.transition("is supported") ? (s.verbose("Hiding dimmer with css"), o.transition({
                          displayType: a.useFlex ? "flex" : "block",
                          animation: (a.transition.hideMethod || a.transition) + " out",
                          queue: !1,
                          duration: s.get.duration(),
                          useFailSafe: !0,
                          onComplete: function() {
                              s.remove.dimmed(), s.remove.variation(), s.remove.active(), e()
                          }
                      })) : (s.verbose("Hiding dimmer with javascript"), o.stop().fadeOut(s.get.duration(), function() {
                          s.remove.dimmed(), s.remove.active(), o.removeAttr("style"), e()
                      }))
                  }
              },
              get: {
                  dimmer: function() {
                      return o
                  },
                  duration: function() {
                      return s.is.active() ? a.transition.hideDuration || a.duration.hide || a.duration : a.transition.showDuration || a.duration.show || a.duration
                  }
              },
              has: {
                  dimmer: function() {
                      return a.dimmerName ? 0 < f.find(n.dimmer).filter("." + a.dimmerName).length : 0 < f.find(n.dimmer).length
                  }
              },
              is: {
                  active: function() {
                      return o.hasClass(i.active)
                  },
                  animating: function() {
                      return o.is(":animated") || o.hasClass(i.animating)
                  },
                  closable: function() {
                      return "auto" == a.closable ? "hover" != a.on : a.closable
                  },
                  dimmer: function() {
                      return f.hasClass(i.dimmer)
                  },
                  dimmable: function() {
                      return f.hasClass(i.dimmable)
                  },
                  dimmed: function() {
                      return t.hasClass(i.dimmed)
                  },
                  disabled: function() {
                      return t.hasClass(i.disabled)
                  },
                  enabled: function() {
                      return !s.is.disabled()
                  },
                  page: function() {
                      return t.is("body")
                  },
                  pageDimmer: function() {
                      return o.hasClass(i.pageDimmer)
                  }
              },
              can: {
                  show: function() {
                      return !o.hasClass(i.disabled)
                  }
              },
              set: {
                  opacity: function(e) {
                      var t = o.css("background-color"),
                          n = t.split(","),
                          i = n && 3 <= n.length;
                      e = 0 === a.opacity ? 0 : a.opacity || e, t = i ? (n[2] = n[2].replace(")", ""), n[3] = e + ")", n.join(",")) : "rgba(0, 0, 0, " + e + ")", s.debug("Setting opacity to", e), o.css("background-color", t)
                  },
                  legacy: function() {
                      o.addClass(i.legacy)
                  },
                  active: function() {
                      o.addClass(i.active)
                  },
                  dimmable: function() {
                      t.addClass(i.dimmable)
                  },
                  dimmed: function() {
                      t.addClass(i.dimmed)
                  },
                  pageDimmer: function() {
                      o.addClass(i.pageDimmer)
                  },
                  disabled: function() {
                      o.addClass(i.disabled)
                  },
                  variation: function(e) {
                      (e = e || a.variation) && o.addClass(e)
                  }
              },
              remove: {
                  active: function() {
                      o.removeClass(i.active)
                  },
                  legacy: function() {
                      o.removeClass(i.legacy)
                  },
                  dimmed: function() {
                      t.removeClass(i.dimmed)
                  },
                  disabled: function() {
                      o.removeClass(i.disabled)
                  },
                  variation: function(e) {
                      (e = e || a.variation) && o.removeClass(e)
                  }
              },
              setting: function(e, t) {
                  if (s.debug("Changing setting", e, t), k.isPlainObject(e)) k.extend(!0, a, e);
                  else {
                      if (t === S) return a[e];
                      k.isPlainObject(a[e]) ? k.extend(!0, a[e], t) : a[e] = t
                  }
              },
              internal: function(e, t) {
                  if (k.isPlainObject(e)) k.extend(!0, s, e);
                  else {
                      if (t === S) return s[e];
                      s[e] = t
                  }
              },
              debug: function() {
                  !a.silent && a.debug && (a.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, a.name + ":"), s.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !a.silent && a.verbose && a.debug && (a.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, a.name + ":"), s.verbose.apply(console, arguments)))
              },
              error: function() {
                  a.silent || (s.error = Function.prototype.bind.call(console.error, console, a.name + ":"), s.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      a.performance && (n = (t = (new Date).getTime()) - (b || t), b = t, y.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: m,
                          "Execution Time": n
                      })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500)
                  },
                  display: function() {
                      var e = a.name + ":",
                          n = 0;
                      b = !1, clearTimeout(s.performance.timer), k.each(y, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", u && (e += " '" + u + "'"), 1 < v.length && (e += " (" + v.length + ")"), (console.group !== S || console.table !== S) && 0 < y.length && (console.groupCollapsed(e), console.table ? console.table(y) : k.each(y, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), y = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = g;
                  return e = e || w, t = m || t, "string" == typeof i && r !== S && (i = i.split(/[\. ]/), o = i.length - 1, k.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (k.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== S) return a = r[n], !1;
                          if (!k.isPlainObject(r[t]) || e == o) return r[t] !== S ? a = r[t] : s.error(l.method, i), !1;
                          r = r[t]
                      }
                  })), k.isFunction(a) ? n = a.apply(t, e) : a !== S && (n = a), Array.isArray(h) ? h.push(n) : h !== S ? h = [h, n] : n !== S && (h = n), a
              }
          }).preinitialize(), C ? (g === S && s.initialize(), s.invoke(x)) : (g !== S && g.invoke("destroy"), s.initialize())
      }), h !== S ? h : this
  }, k.fn.dimmer.settings = {
      name: "Dimmer",
      namespace: "dimmer",
      silent: !1,
      debug: !1,
      verbose: !1,
      performance: !0,
      useFlex: !0,
      dimmerName: !1,
      variation: !1,
      closable: "auto",
      useCSS: !0,
      transition: "fade",
      on: !1,
      opacity: "auto",
      duration: {
          show: 500,
          hide: 500
      },
      displayLoader: !1,
      loaderText: !1,
      loaderVariation: "",
      onChange: function() {},
      onShow: function() {},
      onHide: function() {},
      error: {
          method: "The method you called is not defined."
      },
      className: {
          active: "active",
          animating: "animating",
          dimmable: "dimmable",
          dimmed: "dimmed",
          dimmer: "dimmer",
          disabled: "disabled",
          hide: "hide",
          legacy: "legacy",
          pageDimmer: "page",
          show: "show",
          loader: "ui loader"
      },
      selector: {
          dimmer: "> .ui.dimmer",
          content: ".ui.dimmer > .content, .ui.dimmer > .content > .center"
      },
      template: {
          dimmer: function(e) {
              var t, n = k("<div/>").addClass("ui dimmer");
              return e.displayLoader && (t = k("<div/>").addClass(e.className.loader).addClass(e.loaderVariation), e.loaderText && (t.text(e.loaderText), t.addClass("text")), n.append(t)), n
          }
      }
  }
}(jQuery, window, document),
function(te, ne, ie, oe) {
  "use strict";
  te.isFunction = te.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, ne = void 0 !== ne && ne.Math == Math ? ne : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), te.fn.dropdown = function(B) {
      var W, Y = te(this),
          Q = te(ie),
          X = Y.selector || "",
          K = "ontouchstart" in ie.documentElement,
          $ = K ? "touchstart" : "click",
          G = (new Date).getTime(),
          J = [],
          Z = B,
          _ = "string" == typeof Z,
          ee = [].slice.call(arguments, 1);
      return Y.each(function(n) {
          var d, e, t, i, o, a, r, s, l, p, g = te.isPlainObject(B) ? te.extend(!0, {}, te.fn.dropdown.settings, B) : te.extend({}, te.fn.dropdown.settings),
              h = g.className,
              f = g.message,
              c = g.fields,
              v = g.keys,
              b = g.metadata,
              u = g.namespace,
              m = g.regExp,
              y = g.selector,
              x = g.error,
              C = g.templates,
              w = "." + u,
              k = "module-" + u,
              T = te(this),
              S = te(g.context),
              D = T.find(y.text),
              A = T.find(y.search),
              E = T.find(y.sizer),
              F = T.find(y.input),
              P = T.find(y.icon),
              O = T.find(y.clearIcon),
              R = 0 < T.prev().find(y.text).length ? T.prev().find(y.text) : T.prev(),
              M = T.children(y.menu),
              I = M.find(y.item),
              j = g.hideDividers ? I.parent().children(y.divider) : te(),
              L = !1,
              V = !1,
              q = !1,
              z = !1,
              N = this,
              H = !1,
              U = T.data(k);
          p = {
              initialize: function() {
                  p.debug("Initializing dropdown", g), p.is.alreadySetup() ? p.setup.reference() : (g.ignoreDiacritics && !String.prototype.normalize && (g.ignoreDiacritics = !1, p.error(x.noNormalize, N)), p.setup.layout(), g.values && (p.set.initialLoad(), p.change.values(g.values), p.remove.initialLoad()), p.refreshData(), p.save.defaults(), p.restore.selected(), p.create.id(), p.bind.events(), p.observeChanges(), p.instantiate())
              },
              instantiate: function() {
                  p.verbose("Storing instance of dropdown", p), U = p, T.data(k, p)
              },
              destroy: function() {
                  p.verbose("Destroying previous dropdown", T), p.remove.tabbable(), p.remove.active(), M.transition("stop all"), M.removeClass(h.visible).addClass(h.hidden), T.off(w).removeData(k), M.off(w), Q.off(o), p.disconnect.menuObserver(), p.disconnect.selectObserver(), p.disconnect.classObserver()
              },
              observeChanges: function() {
                  "MutationObserver" in ne && (r = new MutationObserver(p.event.select.mutation), s = new MutationObserver(p.event.menu.mutation), l = new MutationObserver(p.event.class.mutation), p.debug("Setting up mutation observer", r, s, l), p.observe.select(), p.observe.menu(), p.observe.class())
              },
              disconnect: {
                  menuObserver: function() {
                      s && s.disconnect()
                  },
                  selectObserver: function() {
                      r && r.disconnect()
                  },
                  classObserver: function() {
                      l && l.disconnect()
                  }
              },
              observe: {
                  select: function() {
                      p.has.input() && r && r.observe(T[0], {
                          childList: !0,
                          subtree: !0
                      })
                  },
                  menu: function() {
                      p.has.menu() && s && s.observe(M[0], {
                          childList: !0,
                          subtree: !0
                      })
                  },
                  class: function() {
                      p.has.search() && l && l.observe(T[0], {
                          attributes: !0
                      })
                  }
              },
              create: {
                  id: function() {
                      a = (Math.random().toString(16) + "000000000").substr(2, 8), o = "." + a, p.verbose("Creating unique id for element", a)
                  },
                  userChoice: function(e) {
                      var n, i, o;
                      return !!(e = e || p.get.userValues()) && (e = Array.isArray(e) ? e : [e], te.each(e, function(e, t) {
                          !1 === p.get.item(t) && (o = g.templates.addition(p.add.variables(f.addResult, t)), i = te("<div />").html(o).attr("data-" + b.value, t).attr("data-" + b.text, t).addClass(h.addition).addClass(h.item), g.hideAdditions && i.addClass(h.hidden), n = n === oe ? i : n.add(i), p.verbose("Creating user choices for value", t, i))
                      }), n)
                  },
                  userLabels: function(e) {
                      var t = p.get.userValues();
                      t && (p.debug("Adding user labels", t), te.each(t, function(e, t) {
                          p.verbose("Adding custom user value"), p.add.label(t, t)
                      }))
                  },
                  menu: function() {
                      M = te("<div />").addClass(h.menu).appendTo(T)
                  },
                  sizer: function() {
                      E = te("<span />").addClass(h.sizer).insertAfter(A)
                  }
              },
              search: function(e) {
                  e = e !== oe ? e : p.get.query(), p.verbose("Searching for query", e), !1 === g.fireOnInit && p.is.initialLoad() ? p.verbose("Skipping callback on initial load", g.onSearch) : p.has.minCharacters(e) && !1 !== g.onSearch.call(N, e) ? p.filter(e) : p.hide(null, !0)
              },
              select: {
                  firstUnfiltered: function() {
                      p.verbose("Selecting first non-filtered element"), p.remove.selectedItem(), I.not(y.unselectable).not(y.addition + y.hidden).eq(0).addClass(h.selected)
                  },
                  nextAvailable: function(e) {
                      var t = (e = e.eq(0)).nextAll(y.item).not(y.unselectable).eq(0),
                          n = e.prevAll(y.item).not(y.unselectable).eq(0);
                      0 < t.length ? (p.verbose("Moving selection to", t), t.addClass(h.selected)) : (p.verbose("Moving selection to", n), n.addClass(h.selected))
                  }
              },
              setup: {
                  api: function() {
                      var e = {
                          debug: g.debug,
                          urlData: {
                              value: p.get.value(),
                              query: p.get.query()
                          },
                          on: !1
                      };
                      p.verbose("First request, initializing API"), T.api(e)
                  },
                  layout: function() {
                      T.is("select") && (p.setup.select(), p.setup.returnedObject()), p.has.menu() || p.create.menu(), p.is.clearable() && !p.has.clearItem() && (p.verbose("Adding clear icon"), O = te("<i />").addClass("remove icon").insertBefore(D)), p.is.search() && !p.has.search() && (p.verbose("Adding search input"), A = te("<input />").addClass(h.search).prop("autocomplete", p.is.chrome() ? "fomantic-search" : "off").insertBefore(D)), p.is.multiple() && p.is.searchSelection() && !p.has.sizer() && p.create.sizer(), g.allowTab && p.set.tabbable()
                  },
                  select: function() {
                      var e = p.get.selectValues();
                      p.debug("Dropdown initialized on a select", e), T.is("select") && (F = T), 0 < F.parent(y.dropdown).length ? (p.debug("UI dropdown already exists. Creating dropdown menu only"), T = F.closest(y.dropdown), p.has.menu() || p.create.menu(), M = T.children(y.menu), p.setup.menu(e)) : (p.debug("Creating entire dropdown from select"), T = te("<div />").attr("class", F.attr("class")).addClass(h.selection).addClass(h.dropdown).html(C.dropdown(e, c, g.preserveHTML, g.className)).insertBefore(F), F.hasClass(h.multiple) && !1 === F.prop("multiple") && (p.error(x.missingMultiple), F.prop("multiple", !0)), F.is("[multiple]") && p.set.multiple(), F.prop("disabled") && (p.debug("Disabling dropdown"), T.addClass(h.disabled)), F.removeAttr("required").removeAttr("class").detach().prependTo(T)), p.refresh()
                  },
                  menu: function(e) {
                      M.html(C.menu(e, c, g.preserveHTML, g.className)), I = M.find(y.item), j = g.hideDividers ? I.parent().children(y.divider) : te()
                  },
                  reference: function() {
                      p.debug("Dropdown behavior was called on select, replacing with closest dropdown"), T = T.parent(y.dropdown), U = T.data(k), N = T.get(0), p.refresh(), p.setup.returnedObject()
                  },
                  returnedObject: function() {
                      var e = Y.slice(0, n),
                          t = Y.slice(n + 1);
                      Y = e.add(T).add(t)
                  }
              },
              refresh: function() {
                  p.refreshSelectors(), p.refreshData()
              },
              refreshItems: function() {
                  I = M.find(y.item), j = g.hideDividers ? I.parent().children(y.divider) : te()
              },
              refreshSelectors: function() {
                  p.verbose("Refreshing selector cache"), D = T.find(y.text), A = T.find(y.search), F = T.find(y.input), P = T.find(y.icon), R = 0 < T.prev().find(y.text).length ? T.prev().find(y.text) : T.prev(), M = T.children(y.menu), I = M.find(y.item), j = g.hideDividers ? I.parent().children(y.divider) : te()
              },
              refreshData: function() {
                  p.verbose("Refreshing cached metadata"), I.removeData(b.text).removeData(b.value)
              },
              clearData: function() {
                  p.verbose("Clearing metadata"), I.removeData(b.text).removeData(b.value), T.removeData(b.defaultText).removeData(b.defaultValue).removeData(b.placeholderText)
              },
              clearItems: function() {
                  M.empty(), p.refreshItems()
              },
              toggle: function() {
                  p.verbose("Toggling menu visibility"), p.is.active() ? p.hide() : p.show()
              },
              show: function(e, t) {
                  if (e = te.isFunction(e) ? e : function() {}, (H || z) && p.is.remote() && p.is.noApiCache() && p.clearItems(), !p.can.show() && p.is.remote() && (p.debug("No API results retrieved, searching before show"), p.queryRemote(p.get.query(), p.show, [e, t])), p.can.show() && !p.is.active()) {
                      if (p.debug("Showing dropdown"), !p.has.message() || p.has.maxSelections() || p.has.allResultsFiltered() || p.remove.message(), p.is.allFiltered()) return !0;
                      !1 !== g.onShow.call(N) && p.animate.show(function() {
                          p.can.click() && p.bind.intent(), p.has.search() && !t && p.focusSearch(), p.set.visible(), e.call(N)
                      })
                  }
              },
              hide: function(e, t) {
                  e = te.isFunction(e) ? e : function() {}, p.is.active() && !p.is.animatingOutward() ? (p.debug("Hiding dropdown"), !1 !== g.onHide.call(N) && p.animate.hide(function() {
                      p.remove.visible(), p.is.focusedOnSearch() && !0 !== t && A.blur(), e.call(N)
                  })) : p.can.click() && p.unbind.intent(), H = z = !1
              },
              hideOthers: function() {
                  p.verbose("Finding other dropdowns to hide"), Y.not(T).has(y.menu + "." + h.visible).dropdown("hide")
              },
              hideMenu: function() {
                  p.verbose("Hiding menu  instantaneously"), p.remove.active(), p.remove.visible(), M.transition("hide")
              },
              hideSubMenus: function() {
                  var e = M.children(y.item).find(y.menu);
                  p.verbose("Hiding sub menus", e), e.transition("hide")
              },
              bind: {
                  events: function() {
                      p.bind.keyboardEvents(), p.bind.inputEvents(), p.bind.mouseEvents()
                  },
                  keyboardEvents: function() {
                      p.verbose("Binding keyboard events"), T.on("keydown" + w, p.event.keydown), p.has.search() && T.on(p.get.inputEvent() + w, y.search, p.event.input), p.is.multiple() && Q.on("keydown" + o, p.event.document.keydown)
                  },
                  inputEvents: function() {
                      p.verbose("Binding input change events"), T.on("change" + w, y.input, p.event.change)
                  },
                  mouseEvents: function() {
                      p.verbose("Binding mouse events"), p.is.multiple() && T.on($ + w, y.label, p.event.label.click).on($ + w, y.remove, p.event.remove.click), p.is.searchSelection() ? (T.on("mousedown" + w, p.event.mousedown).on("mouseup" + w, p.event.mouseup).on("mousedown" + w, y.menu, p.event.menu.mousedown).on("mouseup" + w, y.menu, p.event.menu.mouseup).on($ + w, y.icon, p.event.icon.click).on($ + w, y.clearIcon, p.event.clearIcon.click).on("focus" + w, y.search, p.event.search.focus).on($ + w, y.search, p.event.search.focus).on("blur" + w, y.search, p.event.search.blur).on($ + w, y.text, p.event.text.focus), p.is.multiple() && T.on($ + w, p.event.click).on($ + w, p.event.search.focus)) : ("click" == g.on ? T.on($ + w, y.icon, p.event.icon.click).on($ + w, p.event.test.toggle) : "hover" == g.on ? T.on("mouseenter" + w, p.delay.show).on("mouseleave" + w, p.delay.hide) : T.on(g.on + w, p.toggle), T.on("mousedown" + w, p.event.mousedown).on("mouseup" + w, p.event.mouseup).on("focus" + w, p.event.focus).on($ + w, y.clearIcon, p.event.clearIcon.click), p.has.menuSearch() ? T.on("blur" + w, y.search, p.event.search.blur) : T.on("blur" + w, p.event.blur)), M.on((K ? "touchstart" : "mouseenter") + w, y.item, p.event.item.mouseenter).on("mouseleave" + w, y.item, p.event.item.mouseleave).on("click" + w, y.item, p.event.item.click)
                  },
                  intent: function() {
                      p.verbose("Binding hide intent event to document"), K && Q.on("touchstart" + o, p.event.test.touch).on("touchmove" + o, p.event.test.touch), Q.on($ + o, p.event.test.hide)
                  }
              },
              unbind: {
                  intent: function() {
                      p.verbose("Removing hide intent event from document"), K && Q.off("touchstart" + o).off("touchmove" + o), Q.off($ + o)
                  }
              },
              filter: function(e) {
                  function t() {
                      p.is.multiple() && p.filterActive(), (e || !e && 0 == p.get.activeItem().length) && p.select.firstUnfiltered(), p.has.allResultsFiltered() ? g.onNoResults.call(N, n) ? g.allowAdditions ? g.hideAdditions && (p.verbose("User addition with no menu, setting empty style"), p.set.empty(), p.hideMenu()) : (p.verbose("All items filtered, showing message", n), p.add.message(f.noResults)) : (p.verbose("All items filtered, hiding dropdown", n), p.hideMenu()) : (p.remove.empty(), p.remove.message()), g.allowAdditions && p.add.userSuggestion(p.escape.htmlEntities(e)), p.is.searchSelection() && p.can.show() && p.is.focusedOnSearch() && p.show()
                  }
                  var n = e !== oe ? e : p.get.query();
                  g.useLabels && p.has.maxSelections() || (g.apiSettings ? p.can.useAPI() ? p.queryRemote(n, function() {
                      g.filterRemoteData && p.filterItems(n);
                      var e = F.val();
                      Array.isArray(e) || (e = e && "" !== e ? e.split(g.delimiter) : []), p.is.multiple() && te.each(e, function(e, t) {
                          I.filter('[data-value="' + t + '"]').addClass(h.filtered)
                      }), p.focusSearch(!0), t()
                  }) : p.error(x.noAPI) : (p.filterItems(n), t()))
              },
              queryRemote: function(e, o, a) {
                  Array.isArray(a) || (a = [a]);
                  var t = {
                      errorDuration: !1,
                      cache: "local",
                      throttle: g.throttle,
                      urlData: {
                          query: e
                      },
                      onError: function() {
                          p.add.message(f.serverError), H = z = !1, o.apply(null, a)
                      },
                      onFailure: function() {
                          p.add.message(f.serverError), H = z = !1, o.apply(null, a)
                      },
                      onSuccess: function(e) {
                          var t = e[c.remoteValues];
                          Array.isArray(t) || (t = []), p.remove.message();
                          var n = {};
                          if (n[c.values] = t, p.setup.menu(n), 0 !== t.length || g.allowAdditions) {
                              var i = p.is.multiple() ? p.get.values() : p.get.value();
                              "" !== i && (p.verbose("Value(s) present after click icon, select value(s) in items"), p.set.selected(i, null, null, !0))
                          } else p.add.message(f.noResults);
                          H = z = !1, o.apply(null, a)
                      }
                  };
                  T.api("get request") || p.setup.api(), t = te.extend(!0, {}, t, g.apiSettings), T.api("setting", t).api("query")
              },
              filterItems: function(e) {
                  var i = p.remove.diacritics(e !== oe ? e : p.get.query()),
                      o = null,
                      t = p.escape.string(i),
                      n = (g.ignoreSearchCase ? "i" : "") + "gm",
                      a = new RegExp("^" + t, n);
                  p.has.query() && (o = [], p.verbose("Searching for matching values", i), I.each(function() {
                      var e, t, n = te(this);
                      if (n.hasClass(h.unfilterable)) return o.push(this), !0;
                      if ("both" === g.match || "text" === g.match) {
                          if (-1 !== (e = p.remove.diacritics(String(p.get.choiceText(n, !1)))).search(a)) return o.push(this), !0;
                          if ("exact" === g.fullTextSearch && p.exactSearch(i, e)) return o.push(this), !0;
                          if (!0 === g.fullTextSearch && p.fuzzySearch(i, e)) return o.push(this), !0
                      }
                      if ("both" === g.match || "value" === g.match) {
                          if (-1 !== (t = p.remove.diacritics(String(p.get.choiceValue(n, e)))).search(a)) return o.push(this), !0;
                          if ("exact" === g.fullTextSearch && p.exactSearch(i, t)) return o.push(this), !0;
                          if (!0 === g.fullTextSearch && p.fuzzySearch(i, t)) return o.push(this), !0
                      }
                  })), p.debug("Showing only matched items", i), p.remove.filteredItem(), o && I.not(o).addClass(h.filtered), p.has.query() ? !0 === g.hideDividers ? j.addClass(h.hidden) : "empty" === g.hideDividers && j.removeClass(h.hidden).filter(function() {
                      var e = te(this).nextUntil(y.item);
                      return 0 === (e.length ? e : te(this)).nextUntil(y.divider).filter(y.item + ":not(." + h.filtered + ")").length
                  }).addClass(h.hidden) : j.removeClass(h.hidden)
              },
              fuzzySearch: function(e, t) {
                  var n = t.length,
                      i = e.length;
                  if (e = g.ignoreSearchCase ? e.toLowerCase() : e, t = g.ignoreSearchCase ? t.toLowerCase() : t, n < i) return !1;
                  if (i === n) return e === t;
                  e: for (var o = 0, a = 0; o < i; o++) {
                      for (var r = e.charCodeAt(o); a < n;)
                          if (t.charCodeAt(a++) === r) continue e;
                      return !1
                  }
                  return !0
              },
              exactSearch: function(e, t) {
                  return e = g.ignoreSearchCase ? e.toLowerCase() : e, -1 < (t = g.ignoreSearchCase ? t.toLowerCase() : t).indexOf(e)
              },
              filterActive: function() {
                  g.useLabels && I.filter("." + h.active).addClass(h.filtered)
              },
              focusSearch: function(e) {
                  p.has.search() && !p.is.focusedOnSearch() && (e ? (T.off("focus" + w, y.search), A.focus(), T.on("focus" + w, y.search, p.event.search.focus)) : A.focus())
              },
              blurSearch: function() {
                  p.has.search() && A.blur()
              },
              forceSelection: function() {
                  var e = I.not(h.filtered).filter("." + h.selected).eq(0),
                      t = I.not(h.filtered).filter("." + h.active).eq(0),
                      n = 0 < e.length ? e : t,
                      i = 0 < n.length;
                  g.allowAdditions || i && !p.is.multiple() ? (p.debug("Forcing partial selection to selected item", n), p.event.item.click.call(n, {}, !0)) : p.remove.searchTerm()
              },
              change: {
                  values: function(e) {
                      g.allowAdditions || p.clear(), p.debug("Creating dropdown with specified values", e);
                      var t = {};
                      t[c.values] = e, p.setup.menu(t), te.each(e, function(e, t) {
                          if (1 == t.selected && (p.debug("Setting initial selection to", t[c.value]), p.set.selected(t[c.value]), !p.is.multiple())) return !1
                      }), p.has.selectInput() && (p.disconnect.selectObserver(), F.html(""), F.append("<option disabled selected value></option>"), te.each(e, function(e, t) {
                          var n = g.templates.deQuote(t[c.value]),
                              i = g.templates.escape(t[c.name] || "", g.preserveHTML);
                          F.append('<option value="' + n + '">' + i + "</option>")
                      }), p.observe.select())
                  }
              },
              event: {
                  change: function() {
                      q || (p.debug("Input changed, updating selection"), p.set.selected())
                  },
                  focus: function() {
                      g.showOnFocus && !L && p.is.hidden() && !t && (H = !0, p.show())
                  },
                  blur: function(e) {
                      t = ie.activeElement === this, L || t || (p.remove.activeLabel(), p.hide())
                  },
                  mousedown: function() {
                      p.is.searchSelection() ? i = !0 : L = !0
                  },
                  mouseup: function() {
                      p.is.searchSelection() ? i = !1 : L = !1
                  },
                  click: function(e) {
                      te(e.target).is(T) && (p.is.focusedOnSearch() ? p.show() : p.focusSearch())
                  },
                  search: {
                      focus: function(e) {
                          L = !0, p.is.multiple() && p.remove.activeLabel(), H || p.is.active() || !(g.showOnFocus || "focus" !== e.type && "focusin" !== e.type) || (H = !0, p.search())
                      },
                      blur: function(e) {
                          t = ie.activeElement === this, p.is.searchSelection() && !i && (V || t || (g.forceSelection ? p.forceSelection() : g.allowAdditions || p.remove.searchTerm(), p.hide())), i = !1
                      }
                  },
                  clearIcon: {
                      click: function(e) {
                          p.clear(), p.is.searchSelection() && p.remove.searchTerm(), p.hide(), e.stopPropagation()
                      }
                  },
                  icon: {
                      click: function(e) {
                          z = !0, p.has.search() ? p.is.active() ? p.blurSearch() : g.showOnFocus ? p.focusSearch() : p.toggle() : p.toggle(), e.stopPropagation()
                      }
                  },
                  text: {
                      focus: function(e) {
                          L = !0, p.focusSearch()
                      }
                  },
                  input: function(e) {
                      (p.is.multiple() || p.is.searchSelection()) && p.set.filtered(), clearTimeout(p.timer), p.timer = setTimeout(p.search, g.delay.search)
                  },
                  label: {
                      click: function(e) {
                          var t = te(this),
                              n = T.find(y.label),
                              i = n.filter("." + h.active),
                              o = t.nextAll("." + h.active),
                              a = t.prevAll("." + h.active),
                              r = 0 < o.length ? t.nextUntil(o).add(i).add(t) : t.prevUntil(a).add(i).add(t);
                          e.shiftKey ? (i.removeClass(h.active), r.addClass(h.active)) : e.ctrlKey ? t.toggleClass(h.active) : (i.removeClass(h.active), t.addClass(h.active)), g.onLabelSelect.apply(this, n.filter("." + h.active)), e.stopPropagation()
                      }
                  },
                  remove: {
                      click: function(e) {
                          var t = te(this).parent();
                          t.hasClass(h.active) ? p.remove.activeLabels() : p.remove.activeLabels(t), e.stopPropagation()
                      }
                  },
                  test: {
                      toggle: function(e) {
                          var t = p.is.multiple() ? p.show : p.toggle;
                          p.is.bubbledLabelClick(e) || p.is.bubbledIconClick(e) || (p.is.multiple() && (!p.is.multiple() || p.is.active()) || (H = !0), p.determine.eventOnElement(e, t) && e.preventDefault())
                      },
                      touch: function(e) {
                          p.determine.eventOnElement(e, function() {
                              "touchstart" == e.type ? p.timer = setTimeout(function() {
                                  p.hide()
                              }, g.delay.touch) : "touchmove" == e.type && clearTimeout(p.timer)
                          }), e.stopPropagation()
                      },
                      hide: function(e) {
                          p.determine.eventInModule(e, p.hide) && N.id && te(e.target).attr("for") === N.id && e.preventDefault()
                      }
                  },
                  class: {
                      mutation: function(e) {
                          e.forEach(function(e) {
                              "class" === e.attributeName && p.check.disabled()
                          })
                      }
                  },
                  select: {
                      mutation: function(e) {
                          p.debug("<select> modified, recreating menu"), p.is.selectMutation(e) && (p.disconnect.selectObserver(), p.refresh(), p.setup.select(), p.set.selected(), p.observe.select())
                      }
                  },
                  menu: {
                      mutation: function(e) {
                          var t = e[0],
                              n = t.addedNodes ? te(t.addedNodes[0]) : te(!1),
                              i = t.removedNodes ? te(t.removedNodes[0]) : te(!1),
                              o = n.add(i),
                              a = o.is(y.addition) || 0 < o.closest(y.addition).length,
                              r = o.is(y.message) || 0 < o.closest(y.message).length;
                          a || r ? (p.debug("Updating item selector cache"), p.refreshItems()) : (p.debug("Menu modified, updating selector cache"), p.refresh())
                      },
                      mousedown: function() {
                          V = !0
                      },
                      mouseup: function() {
                          V = !1
                      }
                  },
                  item: {
                      mouseenter: function(e) {
                          var t = te(e.target),
                              n = te(this),
                              i = n.children(y.menu),
                              o = n.siblings(y.item).children(y.menu),
                              a = 0 < i.length;
                          0 < i.find(t).length || !a || (clearTimeout(p.itemTimer), p.itemTimer = setTimeout(function() {
                              p.verbose("Showing sub-menu", i), te.each(o, function() {
                                  p.animate.hide(!1, te(this))
                              }), p.animate.show(!1, i)
                          }, g.delay.show), e.preventDefault())
                      },
                      mouseleave: function(e) {
                          var t = te(this).children(y.menu);
                          0 < t.length && (clearTimeout(p.itemTimer), p.itemTimer = setTimeout(function() {
                              p.verbose("Hiding sub-menu", t), p.animate.hide(!1, t)
                          }, g.delay.hide))
                      },
                      click: function(e, t) {
                          var n = te(this),
                              i = te(e ? e.target : ""),
                              o = n.find(y.menu),
                              a = p.get.choiceText(n),
                              r = p.get.choiceValue(n, a),
                              s = 0 < o.length,
                              l = 0 < o.find(i).length;
                          "input" !== ie.activeElement.tagName.toLowerCase() && te(ie.activeElement).blur(), l || s && !g.allowCategorySelection || (p.is.searchSelection() && (g.allowAdditions && p.remove.userAddition(), p.remove.searchTerm(), p.is.focusedOnSearch() || 1 == t || p.focusSearch(!0)), g.useLabels || (p.remove.filteredItem(), p.set.scrollPosition(n)), p.determine.selectAction.call(this, a, r))
                      }
                  },
                  document: {
                      keydown: function(e) {
                          var t = e.which;
                          if (p.is.inObject(t, v)) {
                              var n = T.find(y.label),
                                  i = n.filter("." + h.active),
                                  o = (i.data(b.value), n.index(i)),
                                  a = n.length,
                                  r = 0 < i.length,
                                  s = 1 < i.length,
                                  l = 0 === o,
                                  c = o + 1 == a,
                                  u = p.is.searchSelection(),
                                  d = p.is.focusedOnSearch(),
                                  f = p.is.focused(),
                                  m = d && 0 === p.get.caretPosition(!1),
                                  g = m && 0 !== p.get.caretPosition(!0);
                              if (u && !r && !d) return;
                              t == v.leftArrow ? !f && !m || r ? r && (e.shiftKey ? p.verbose("Adding previous label to selection") : (p.verbose("Selecting previous label"), n.removeClass(h.active)), l && !s ? i.addClass(h.active) : i.prev(y.siblingLabel).addClass(h.active).end(), e.preventDefault()) : (p.verbose("Selecting previous label"), n.last().addClass(h.active)) : t == v.rightArrow ? (f && !r && n.first().addClass(h.active), r && (e.shiftKey ? p.verbose("Adding next label to selection") : (p.verbose("Selecting next label"), n.removeClass(h.active)), c ? u ? d ? n.removeClass(h.active) : p.focusSearch() : s ? i.next(y.siblingLabel).addClass(h.active) : i.addClass(h.active) : i.next(y.siblingLabel).addClass(h.active), e.preventDefault())) : t == v.deleteKey || t == v.backspace ? r ? (p.verbose("Removing active labels"), c && u && !d && p.focusSearch(), i.last().next(y.siblingLabel).addClass(h.active), p.remove.activeLabels(i), e.preventDefault()) : !m || g || r || t != v.backspace || (p.verbose("Removing last label on input backspace"), i = n.last().addClass(h.active), p.remove.activeLabels(i)) : i.removeClass(h.active)
                          }
                      }
                  },
                  keydown: function(e) {
                      var t = e.which;
                      if (p.is.inObject(t, v)) {
                          var n, i = I.not(y.unselectable).filter("." + h.selected).eq(0),
                              o = M.children("." + h.active).eq(0),
                              a = 0 < i.length ? i : o,
                              r = 0 < a.length ? a.siblings(":not(." + h.filtered + ")").addBack() : M.children(":not(." + h.filtered + ")"),
                              s = a.children(y.menu),
                              l = a.closest(y.menu),
                              c = l.hasClass(h.visible) || l.hasClass(h.animating) || 0 < l.parent(y.menu).length,
                              u = 0 < s.length,
                              d = 0 < a.length,
                              f = 0 < a.not(y.unselectable).length,
                              m = t == v.delimiter && g.allowAdditions && p.is.multiple();
                          if (g.allowAdditions && g.hideAdditions && (t == v.enter || m) && f && (p.verbose("Selecting item from keyboard shortcut", a), p.event.item.click.call(a, e), p.is.searchSelection() && p.remove.searchTerm(), p.is.multiple() && e.preventDefault()), p.is.visible()) {
                              if (t != v.enter && !m || (t == v.enter && d && u && !g.allowCategorySelection ? (p.verbose("Pressed enter on unselectable category, opening sub menu"), t = v.rightArrow) : f && (p.verbose("Selecting item from keyboard shortcut", a), p.event.item.click.call(a, e), p.is.searchSelection() && (p.remove.searchTerm(), p.is.multiple() && A.focus())), e.preventDefault()), d && (t == v.leftArrow && l[0] !== M[0] && (p.verbose("Left key pressed, closing sub-menu"), p.animate.hide(!1, l), a.removeClass(h.selected), l.closest(y.item).addClass(h.selected), e.preventDefault()), t == v.rightArrow && u && (p.verbose("Right key pressed, opening sub-menu"), p.animate.show(!1, s), a.removeClass(h.selected), s.find(y.item).eq(0).addClass(h.selected), e.preventDefault())), t == v.upArrow) {
                                  if (n = d && c ? a.prevAll(y.item + ":not(" + y.unselectable + ")").eq(0) : I.eq(0), r.index(n) < 0) return p.verbose("Up key pressed but reached top of current menu"), void e.preventDefault();
                                  p.verbose("Up key pressed, changing active item"), a.removeClass(h.selected), n.addClass(h.selected), p.set.scrollPosition(n), g.selectOnKeydown && p.is.single() && p.set.selectedItem(n), e.preventDefault()
                              }
                              if (t == v.downArrow) {
                                  if (0 === (n = d && c ? n = a.nextAll(y.item + ":not(" + y.unselectable + ")").eq(0) : I.eq(0)).length) return p.verbose("Down key pressed but reached bottom of current menu"), void e.preventDefault();
                                  p.verbose("Down key pressed, changing active item"), I.removeClass(h.selected), n.addClass(h.selected), p.set.scrollPosition(n), g.selectOnKeydown && p.is.single() && p.set.selectedItem(n), e.preventDefault()
                              }
                              t == v.pageUp && (p.scrollPage("up"), e.preventDefault()), t == v.pageDown && (p.scrollPage("down"), e.preventDefault()), t == v.escape && (p.verbose("Escape key pressed, closing dropdown"), p.hide())
                          } else m && e.preventDefault(), t != v.downArrow || p.is.visible() || (p.verbose("Down key pressed, showing dropdown"), p.show(), e.preventDefault())
                      } else p.has.search() || p.set.selectedLetter(String.fromCharCode(t))
                  }
              },
              trigger: {
                  change: function() {
                      var e = F[0];
                      if (e) {
                          var t = ie.createEvent("HTMLEvents");
                          p.verbose("Triggering native change event"), t.initEvent("change", !0, !1), e.dispatchEvent(t)
                      }
                  }
              },
              determine: {
                  selectAction: function(e, t) {
                      d = !0, p.verbose("Determining action", g.action), te.isFunction(p.action[g.action]) ? (p.verbose("Triggering preset action", g.action, e, t), p.action[g.action].call(N, e, t, this)) : te.isFunction(g.action) ? (p.verbose("Triggering user action", g.action, e, t), g.action.call(N, e, t, this)) : p.error(x.action, g.action), d = !1
                  },
                  eventInModule: function(e, t) {
                      var n = te(e.target),
                          i = 0 < n.closest(ie.documentElement).length,
                          o = 0 < n.closest(T).length;
                      return t = te.isFunction(t) ? t : function() {}, i && !o ? (p.verbose("Triggering event", t), t(), !0) : (p.verbose("Event occurred in dropdown, canceling callback"), !1)
                  },
                  eventOnElement: function(e, t) {
                      var n = te(e.target),
                          i = n.closest(y.siblingLabel),
                          o = ie.body.contains(e.target),
                          a = 0 === T.find(i).length || !(p.is.multiple() && g.useLabels),
                          r = 0 === n.closest(M).length;
                      return t = te.isFunction(t) ? t : function() {}, o && a && r ? (p.verbose("Triggering event", t), t(), !0) : (p.verbose("Event occurred in dropdown menu, canceling callback"), !1)
                  }
              },
              action: {
                  nothing: function() {},
                  activate: function(e, t, n) {
                      t = t !== oe ? t : e, p.can.activate(te(n)) && (p.set.selected(t, te(n)), p.is.multiple() || p.hideAndClear())
                  },
                  select: function(e, t, n) {
                      t = t !== oe ? t : e, p.can.activate(te(n)) && (p.set.value(t, e, te(n)), p.is.multiple() || p.hideAndClear())
                  },
                  combo: function(e, t, n) {
                      t = t !== oe ? t : e, p.set.selected(t, te(n)), p.hideAndClear()
                  },
                  hide: function(e, t, n) {
                      p.set.value(t, e, te(n)), p.hideAndClear()
                  }
              },
              get: {
                  id: function() {
                      return a
                  },
                  defaultText: function() {
                      return T.data(b.defaultText)
                  },
                  defaultValue: function() {
                      return T.data(b.defaultValue)
                  },
                  placeholderText: function() {
                      return "auto" != g.placeholder && "string" == typeof g.placeholder ? g.placeholder : T.data(b.placeholderText) || ""
                  },
                  text: function() {
                      return g.preserveHTML ? D.html() : D.text()
                  },
                  query: function() {
                      return String(A.val()).trim()
                  },
                  searchWidth: function(e) {
                      return e = e !== oe ? e : A.val(), E.text(e), Math.ceil(E.width() + 1)
                  },
                  selectionCount: function() {
                      var e = p.get.values();
                      return p.is.multiple() ? Array.isArray(e) ? e.length : 0 : "" !== p.get.value() ? 1 : 0
                  },
                  transition: function(e) {
                      return "auto" === g.transition ? p.is.upward(e) ? "slide up" : "slide down" : g.transition
                  },
                  userValues: function() {
                      var e = p.get.values();
                      return !!e && (e = Array.isArray(e) ? e : [e], te.grep(e, function(e) {
                          return !1 === p.get.item(e)
                      }))
                  },
                  uniqueArray: function(n) {
                      return te.grep(n, function(e, t) {
                          return te.inArray(e, n) === t
                      })
                  },
                  caretPosition: function(e) {
                      var t, n, i = A.get(0);
                      return e && "selectionEnd" in i ? i.selectionEnd : !e && "selectionStart" in i ? i.selectionStart : ie.selection ? (i.focus(), n = (t = ie.selection.createRange()).text.length, e ? n : (t.moveStart("character", -i.value.length), t.text.length - n)) : void 0
                  },
                  value: function() {
                      var e = 0 < F.length ? F.val() : T.data(b.value),
                          t = Array.isArray(e) && 1 === e.length && "" === e[0];
                      return e === oe || t ? "" : e
                  },
                  values: function(e) {
                      var t = p.get.value();
                      return "" === t ? "" : !p.has.selectInput() && p.is.multiple() ? "string" == typeof t ? (e ? t : p.escape.htmlEntities(t)).split(g.delimiter) : "" : t
                  },
                  remoteValues: function() {
                      var e = p.get.values(),
                          i = !1;
                      return e && ("string" == typeof e && (e = [e]), te.each(e, function(e, t) {
                          var n = p.read.remoteData(t);
                          p.verbose("Restoring value from session data", n, t), n && ((i = i || {})[t] = n)
                      })), i
                  },
                  choiceText: function(e, t) {
                      if (t = t !== oe ? t : g.preserveHTML, e) return 0 < e.find(y.menu).length && (p.verbose("Retrieving text of element with sub-menu"), (e = e.clone()).find(y.menu).remove(), e.find(y.menuIcon).remove()), e.data(b.text) !== oe ? e.data(b.text) : t ? e.html() && e.html().trim() : e.text() && e.text().trim()
                  },
                  choiceValue: function(e, t) {
                      return t = t || p.get.choiceText(e), !!e && (e.data(b.value) !== oe ? String(e.data(b.value)) : "string" == typeof t ? String(g.ignoreSearchCase ? t.toLowerCase() : t).trim() : String(t))
                  },
                  inputEvent: function() {
                      var e = A[0];
                      return !!e && (e.oninput !== oe ? "input" : e.onpropertychange !== oe ? "propertychange" : "keyup")
                  },
                  selectValues: function() {
                      var r = {},
                          s = [],
                          l = [];
                      return T.find("option").each(function() {
                          var e = te(this),
                              t = e.html(),
                              n = e.attr("disabled"),
                              i = e.attr("value") !== oe ? e.attr("value") : t,
                              o = e.data(b.text) !== oe ? e.data(b.text) : t,
                              a = e.parent("optgroup");
                          "auto" === g.placeholder && "" === i ? r.placeholder = t : (a.length === s.length && a[0] === s[0] || (l.push({
                              type: "header",
                              divider: g.headerDivider,
                              name: a.attr("label") || ""
                          }), s = a), l.push({
                              name: t,
                              value: i,
                              text: o,
                              disabled: n
                          }))
                      }), g.placeholder && "auto" !== g.placeholder && (p.debug("Setting placeholder value to", g.placeholder), r.placeholder = g.placeholder), g.sortSelect ? (!0 === g.sortSelect ? l.sort(function(e, t) {
                          return e.name.localeCompare(t.name)
                      }) : "natural" === g.sortSelect ? l.sort(function(e, t) {
                          return e.name.toLowerCase().localeCompare(t.name.toLowerCase())
                      }) : te.isFunction(g.sortSelect) && l.sort(g.sortSelect), r[c.values] = l, p.debug("Retrieved and sorted values from select", r)) : (r[c.values] = l, p.debug("Retrieved values from select", r)), r
                  },
                  activeItem: function() {
                      return I.filter("." + h.active)
                  },
                  selectedItem: function() {
                      var e = I.not(y.unselectable).filter("." + h.selected);
                      return 0 < e.length ? e : I.eq(0)
                  },
                  itemWithAdditions: function(e) {
                      var t = p.get.item(e),
                          n = p.create.userChoice(e);
                      return n && 0 < n.length && (t = 0 < t.length ? t.add(n) : n), t
                  },
                  item: function(i, o) {
                      var e, a, r = !1;
                      return i = i !== oe ? i : p.get.values() !== oe ? p.get.values() : p.get.text(), e = (a = p.is.multiple() && Array.isArray(i)) ? 0 < i.length : i !== oe && null !== i, o = "" === i || !1 === i || !0 === i || (o || !1), e && I.each(function() {
                          var e = te(this),
                              t = p.get.choiceText(e),
                              n = p.get.choiceValue(e, t);
                          if (null !== n && n !== oe)
                              if (a) - 1 !== te.inArray(p.escape.htmlEntities(String(n)), i.map(function(e) {
                                  return String(e)
                              })) && (r = r ? r.add(e) : e);
                              else if (o) {
                              if (p.verbose("Ambiguous dropdown value using strict type check", e, i), n === i) return r = e, !0
                          } else if (g.ignoreCase && (n = n.toLowerCase(), i = i.toLowerCase()), p.escape.htmlEntities(String(n)) === p.escape.htmlEntities(String(i))) return p.verbose("Found select item by value", n, i), r = e, !0
                      }), r
                  },
                  displayType: function() {
                      return T.hasClass("column") ? "flex" : g.displayType
                  }
              },
              check: {
                  maxSelections: function(e) {
                      return !g.maxSelections || ((e = e !== oe ? e : p.get.selectionCount()) >= g.maxSelections ? (p.debug("Maximum selection count reached"), g.useLabels && (I.addClass(h.filtered), p.add.message(f.maxSelections)), !0) : (p.verbose("No longer at maximum selection count"), p.remove.message(), p.remove.filteredItem(), p.is.searchSelection() && p.filterItems(), !1))
                  },
                  disabled: function() {
                      A.attr("tabindex", p.is.disabled() ? -1 : 0)
                  }
              },
              restore: {
                  defaults: function(e) {
                      p.clear(e), p.restore.defaultText(), p.restore.defaultValue()
                  },
                  defaultText: function() {
                      var e = p.get.defaultText();
                      e === p.get.placeholderText ? (p.debug("Restoring default placeholder text", e), p.set.placeholderText(e)) : (p.debug("Restoring default text", e), p.set.text(e))
                  },
                  placeholderText: function() {
                      p.set.placeholderText()
                  },
                  defaultValue: function() {
                      var e = p.get.defaultValue();
                      e !== oe && (p.debug("Restoring default value", e), "" !== e ? (p.set.value(e), p.set.selected()) : (p.remove.activeItem(), p.remove.selectedItem()))
                  },
                  labels: function() {
                      g.allowAdditions && (g.useLabels || (p.error(x.labels), g.useLabels = !0), p.debug("Restoring selected values"), p.create.userLabels()), p.check.maxSelections()
                  },
                  selected: function() {
                      p.restore.values(), p.is.multiple() ? (p.debug("Restoring previously selected values and labels"), p.restore.labels()) : p.debug("Restoring previously selected values")
                  },
                  values: function() {
                      p.set.initialLoad(), g.apiSettings && g.saveRemoteData && p.get.remoteValues() ? p.restore.remoteValues() : p.set.selected();
                      var e = p.get.value();
                      !e || "" === e || Array.isArray(e) && 0 === e.length ? F.addClass(h.noselection) : F.removeClass(h.noselection), p.remove.initialLoad()
                  },
                  remoteValues: function() {
                      var e = p.get.remoteValues();
                      p.debug("Recreating selected from session data", e), e && (p.is.single() ? te.each(e, function(e, t) {
                          p.set.text(t)
                      }) : te.each(e, function(e, t) {
                          p.add.label(e, t)
                      }))
                  }
              },
              read: {
                  remoteData: function(e) {
                      var t;
                      if (ne.Storage !== oe) return (t = sessionStorage.getItem(e)) !== oe && t;
                      p.error(x.noStorage)
                  }
              },
              save: {
                  defaults: function() {
                      p.save.defaultText(), p.save.placeholderText(), p.save.defaultValue()
                  },
                  defaultValue: function() {
                      var e = p.get.value();
                      p.verbose("Saving default value as", e), T.data(b.defaultValue, e)
                  },
                  defaultText: function() {
                      var e = p.get.text();
                      p.verbose("Saving default text as", e), T.data(b.defaultText, e)
                  },
                  placeholderText: function() {
                      var e;
                      !1 !== g.placeholder && D.hasClass(h.placeholder) && (e = p.get.text(), p.verbose("Saving placeholder text as", e), T.data(b.placeholderText, e))
                  },
                  remoteData: function(e, t) {
                      ne.Storage !== oe ? (p.verbose("Saving remote data to session storage", t, e), sessionStorage.setItem(t, e)) : p.error(x.noStorage)
                  }
              },
              clear: function(e) {
                  p.is.multiple() && g.useLabels ? p.remove.labels(T.find(y.label), e) : (p.remove.activeItem(), p.remove.selectedItem(), p.remove.filteredItem()), p.set.placeholderText(), p.clearValue(e)
              },
              clearValue: function(e) {
                  p.set.value("", null, null, e)
              },
              scrollPage: function(e, t) {
                  var n, i, o = t || p.get.selectedItem(),
                      a = o.closest(y.menu),
                      r = a.outerHeight(),
                      s = a.scrollTop(),
                      l = I.eq(0).outerHeight(),
                      c = Math.floor(r / l),
                      u = (a.prop("scrollHeight"), "up" == e ? s - l * c : s + l * c),
                      d = I.not(y.unselectable);
                  i = "up" == e ? d.index(o) - c : d.index(o) + c, 0 < (n = ("up" == e ? 0 <= i : i < d.length) ? d.eq(i) : "up" == e ? d.first() : d.last()).length && (p.debug("Scrolling page", e, n), o.removeClass(h.selected), n.addClass(h.selected), g.selectOnKeydown && p.is.single() && p.set.selectedItem(n), a.scrollTop(u))
              },
              set: {
                  filtered: function() {
                      var e = p.is.multiple(),
                          t = p.is.searchSelection(),
                          n = e && t,
                          i = t ? p.get.query() : "",
                          o = "string" == typeof i && 0 < i.length,
                          a = p.get.searchWidth(),
                          r = "" !== i;
                      e && o && (p.verbose("Adjusting input width", a, g.glyphWidth), A.css("width", a)), o || n && r ? (p.verbose("Hiding placeholder text"), D.addClass(h.filtered)) : e && (!n || r) || (p.verbose("Showing placeholder text"), D.removeClass(h.filtered))
                  },
                  empty: function() {
                      T.addClass(h.empty)
                  },
                  loading: function() {
                      T.addClass(h.loading)
                  },
                  placeholderText: function(e) {
                      e = e || p.get.placeholderText(), p.debug("Setting placeholder text", e), p.set.text(e), D.addClass(h.placeholder)
                  },
                  tabbable: function() {
                      p.is.searchSelection() ? (p.debug("Added tabindex to searchable dropdown"), A.val(""), p.check.disabled(), M.attr("tabindex", -1)) : (p.debug("Added tabindex to dropdown"), T.attr("tabindex") === oe && (T.attr("tabindex", 0), M.attr("tabindex", -1)))
                  },
                  initialLoad: function() {
                      p.verbose("Setting initial load"), e = !0
                  },
                  activeItem: function(e) {
                      g.allowAdditions && 0 < e.filter(y.addition).length ? e.addClass(h.filtered) : e.addClass(h.active)
                  },
                  partialSearch: function(e) {
                      var t = p.get.query().length;
                      A.val(e.substr(0, t))
                  },
                  scrollPosition: function(e, t) {
                      var n, i, o, a, r, s;
                      n = (e = e || p.get.selectedItem()).closest(y.menu), i = e && 0 < e.length, t = t !== oe && t, 0 === p.get.activeItem().length && (t = !1), e && 0 < n.length && i && (e.position().top, n.addClass(h.loading), o = (a = n.scrollTop()) - n.offset().top + e.offset().top, t || (s = a + n.height() < o + 5, r = o - 5 < a), p.debug("Scrolling to active item", o), (t || r || s) && n.scrollTop(o), n.removeClass(h.loading))
                  },
                  text: function(e) {
                      "combo" === g.action ? (p.debug("Changing combo button text", e, R), g.preserveHTML ? R.html(e) : R.text(e)) : "activate" === g.action && (e !== p.get.placeholderText() && D.removeClass(h.placeholder), p.debug("Changing text", e, D), D.removeClass(h.filtered), g.preserveHTML ? D.html(e) : D.text(e))
                  },
                  selectedItem: function(e) {
                      var t = p.get.choiceValue(e),
                          n = p.get.choiceText(e, !1),
                          i = p.get.choiceText(e, !0);
                      p.debug("Setting user selection to item", e), p.remove.activeItem(), p.set.partialSearch(n), p.set.activeItem(e), p.set.selected(t, e), p.set.text(i)
                  },
                  selectedLetter: function(e) {
                      var t, n = I.filter("." + h.selected),
                          i = 0 < n.length && p.has.firstLetter(n, e),
                          o = !1;
                      i && (t = n.nextAll(I).eq(0), p.has.firstLetter(t, e) && (o = t)), o || I.each(function() {
                          if (p.has.firstLetter(te(this), e)) return o = te(this), !1
                      }), o && (p.verbose("Scrolling to next value with letter", e), p.set.scrollPosition(o), n.removeClass(h.selected), o.addClass(h.selected), g.selectOnKeydown && p.is.single() && p.set.selectedItem(o))
                  },
                  direction: function(e) {
                      "auto" == g.direction ? (e ? p.is.upward(e) && p.remove.upward(e) : p.remove.upward(), p.can.openDownward(e) ? p.remove.upward(e) : p.set.upward(e), p.is.leftward(e) || p.can.openRightward(e) || p.set.leftward(e)) : "upward" == g.direction && p.set.upward(e)
                  },
                  upward: function(e) {
                      (e || T).addClass(h.upward)
                  },
                  leftward: function(e) {
                      (e || M).addClass(h.leftward)
                  },
                  value: function(e, t, n, i) {
                      e === oe || "" === e || Array.isArray(e) && 0 === e.length ? F.addClass(h.noselection) : F.removeClass(h.noselection);
                      var o = p.escape.value(e),
                          a = 0 < F.length,
                          r = p.get.values(),
                          s = e !== oe ? String(e) : e;
                      if (a) {
                          if (!g.allowReselection && s == r && (p.verbose("Skipping value update already same value", e, r), !p.is.initialLoad())) return;
                          p.is.single() && p.has.selectInput() && p.can.extendSelect() && (p.debug("Adding user option", e), p.add.optionValue(e)), p.debug("Updating input value", o, r), q = !0, F.val(o), !1 === g.fireOnInit && p.is.initialLoad() ? p.debug("Input native change event ignored on initial load") : !0 !== i && p.trigger.change(), q = !1
                      } else p.verbose("Storing value in metadata", o, F), o !== r && T.data(b.value, s);
                      !1 === g.fireOnInit && p.is.initialLoad() ? p.verbose("No callback on initial load", g.onChange) : !0 !== i && g.onChange.call(N, e, t, n)
                  },
                  active: function() {
                      T.addClass(h.active)
                  },
                  multiple: function() {
                      T.addClass(h.multiple)
                  },
                  visible: function() {
                      T.addClass(h.visible)
                  },
                  exactly: function(e, t) {
                      p.debug("Setting selected to exact values"), p.clear(), p.set.selected(e, t)
                  },
                  selected: function(e, s, l, c) {
                      var u = p.is.multiple();
                      (s = g.allowAdditions ? s || p.get.itemWithAdditions(e) : s || p.get.item(e)) && (p.debug("Setting selected menu item to", s), p.is.multiple() && p.remove.searchWidth(), p.is.single() ? (p.remove.activeItem(), p.remove.selectedItem()) : g.useLabels && p.remove.selectedItem(), s.each(function() {
                          var e = te(this),
                              t = p.get.choiceText(e),
                              n = p.get.choiceValue(e, t),
                              i = e.hasClass(h.filtered),
                              o = e.hasClass(h.active),
                              a = e.hasClass(h.addition),
                              r = u && 1 == s.length;
                          u ? !o || a ? (g.apiSettings && g.saveRemoteData && p.save.remoteData(t, n), g.useLabels ? (p.add.label(n, t, r), p.add.value(n, t, e), p.set.activeItem(e), p.filterActive(), p.select.nextAvailable(s)) : (p.add.value(n, t, e), p.set.text(p.add.variables(f.count)), p.set.activeItem(e))) : i || !g.useLabels && !d || (p.debug("Selected active value, removing label"), p.remove.selected(n)) : (g.apiSettings && g.saveRemoteData && p.save.remoteData(t, n), c || p.set.text(t), p.set.value(n, t, e, l), e.addClass(h.active).addClass(h.selected))
                      }), c || p.remove.searchTerm())
                  }
              },
              add: {
                  label: function(e, t, n) {
                      var i, o = p.is.searchSelection() ? A : D,
                          a = p.escape.value(e);
                      g.ignoreCase && (a = a.toLowerCase()), i = te("<a />").addClass(h.label).attr("data-" + b.value, a).html(C.label(a, t, g.preserveHTML, g.className)), i = g.onLabelCreate.call(i, a, t), p.has.label(e) ? p.debug("User selection already exists, skipping", a) : (g.label.variation && i.addClass(g.label.variation), !0 === n ? (p.debug("Animating in label", i), i.addClass(h.hidden).insertBefore(o).transition({
                          animation: g.label.transition,
                          debug: g.debug,
                          verbose: g.verbose,
                          duration: g.label.duration
                      })) : (p.debug("Adding selection label", i), i.insertBefore(o)))
                  },
                  message: function(e) {
                      var t = M.children(y.message),
                          n = g.templates.message(p.add.variables(e));
                      0 < t.length ? t.html(n) : t = te("<div/>").html(n).addClass(h.message).appendTo(M)
                  },
                  optionValue: function(e) {
                      var t = p.escape.value(e);
                      0 < F.find('option[value="' + p.escape.string(t) + '"]').length || (p.disconnect.selectObserver(), p.is.single() && (p.verbose("Removing previous user addition"), F.find("option." + h.addition).remove()), te("<option/>").prop("value", t).addClass(h.addition).html(e).appendTo(F), p.verbose("Adding user addition as an <option>", e), p.observe.select())
                  },
                  userSuggestion: function(e) {
                      var t, n = M.children(y.addition),
                          i = p.get.item(e),
                          o = i && i.not(y.addition).length,
                          a = 0 < n.length;
                      g.useLabels && p.has.maxSelections() || ("" === e || o ? n.remove() : (a ? (n.data(b.value, e).data(b.text, e).attr("data-" + b.value, e).attr("data-" + b.text, e).removeClass(h.filtered), g.hideAdditions || (t = g.templates.addition(p.add.variables(f.addResult, e)), n.html(t)), p.verbose("Replacing user suggestion with new value", n)) : ((n = p.create.userChoice(e)).prependTo(M), p.verbose("Adding item choice to menu corresponding with user choice addition", n)), g.hideAdditions && !p.is.allFiltered() || n.addClass(h.selected).siblings().removeClass(h.selected), p.refreshItems()))
                  },
                  variables: function(e, t) {
                      var n, i, o = -1 !== e.search("{count}"),
                          a = -1 !== e.search("{maxCount}"),
                          r = -1 !== e.search("{term}");
                      return p.verbose("Adding templated variables to message", e), o && (n = p.get.selectionCount(), e = e.replace("{count}", n)), a && (n = p.get.selectionCount(), e = e.replace("{maxCount}", g.maxSelections)), r && (i = t || p.get.query(), e = e.replace("{term}", i)), e
                  },
                  value: function(e, t, n) {
                      var i, o = p.get.values(!0);
                      p.has.value(e) ? p.debug("Value already selected") : "" !== e ? (i = Array.isArray(o) ? (i = o.concat([e]), p.get.uniqueArray(i)) : [e], p.has.selectInput() ? p.can.extendSelect() && (p.debug("Adding value to select", e, i, F), p.add.optionValue(e)) : (i = i.join(g.delimiter), p.debug("Setting hidden input to delimited value", i, F)), !1 === g.fireOnInit && p.is.initialLoad() ? p.verbose("Skipping onadd callback on initial load", g.onAdd) : g.onAdd.call(N, e, t, n), p.set.value(i, t, n), p.check.maxSelections()) : p.debug("Cannot select blank values from multiselect")
                  }
              },
              remove: {
                  active: function() {
                      T.removeClass(h.active)
                  },
                  activeLabel: function() {
                      T.find(y.label).removeClass(h.active)
                  },
                  empty: function() {
                      T.removeClass(h.empty)
                  },
                  loading: function() {
                      T.removeClass(h.loading)
                  },
                  initialLoad: function() {
                      e = !1
                  },
                  upward: function(e) {
                      (e || T).removeClass(h.upward)
                  },
                  leftward: function(e) {
                      (e || M).removeClass(h.leftward)
                  },
                  visible: function() {
                      T.removeClass(h.visible)
                  },
                  activeItem: function() {
                      I.removeClass(h.active)
                  },
                  filteredItem: function() {
                      g.useLabels && p.has.maxSelections() || (g.useLabels && p.is.multiple() ? I.not("." + h.active).removeClass(h.filtered) : I.removeClass(h.filtered), g.hideDividers && j.removeClass(h.hidden), p.remove.empty())
                  },
                  optionValue: function(e) {
                      var t = p.escape.value(e),
                          n = F.find('option[value="' + p.escape.string(t) + '"]');
                      0 < n.length && n.hasClass(h.addition) && (r && (r.disconnect(), p.verbose("Temporarily disconnecting mutation observer")), n.remove(), p.verbose("Removing user addition as an <option>", t), r && r.observe(F[0], {
                          childList: !0,
                          subtree: !0
                      }))
                  },
                  message: function() {
                      M.children(y.message).remove()
                  },
                  searchWidth: function() {
                      A.css("width", "")
                  },
                  searchTerm: function() {
                      p.verbose("Cleared search term"), A.val(""), p.set.filtered()
                  },
                  userAddition: function() {
                      I.filter(y.addition).remove()
                  },
                  selected: function(e, t, i) {
                      if (!(t = g.allowAdditions ? t || p.get.itemWithAdditions(e) : t || p.get.item(e))) return !1;
                      t.each(function() {
                          var e = te(this),
                              t = p.get.choiceText(e),
                              n = p.get.choiceValue(e, t);
                          p.is.multiple() ? g.useLabels ? (p.remove.value(n, t, e, i), p.remove.label(n)) : (p.remove.value(n, t, e, i), 0 === p.get.selectionCount() ? p.set.placeholderText() : p.set.text(p.add.variables(f.count))) : p.remove.value(n, t, e, i), e.removeClass(h.filtered).removeClass(h.active), g.useLabels && e.removeClass(h.selected)
                      })
                  },
                  selectedItem: function() {
                      I.removeClass(h.selected)
                  },
                  value: function(e, t, n, i) {
                      var o, a = p.get.values();
                      e = p.escape.htmlEntities(e), p.has.selectInput() ? (p.verbose("Input is <select> removing selected option", e), o = p.remove.arrayValue(e, a), p.remove.optionValue(e)) : (p.verbose("Removing from delimited values", e), o = (o = p.remove.arrayValue(e, a)).join(g.delimiter)), !1 === g.fireOnInit && p.is.initialLoad() ? p.verbose("No callback on initial load", g.onRemove) : g.onRemove.call(N, e, t, n), p.set.value(o, t, n, i), p.check.maxSelections()
                  },
                  arrayValue: function(t, e) {
                      return Array.isArray(e) || (e = [e]), e = te.grep(e, function(e) {
                          return t != e
                      }), p.verbose("Removed value from delimited string", t, e), e
                  },
                  label: function(e, t) {
                      var n = p.escape.value(e),
                          i = T.find(y.label).filter("[data-" + b.value + '="' + p.escape.string(g.ignoreCase ? n.toLowerCase() : n) + '"]');
                      p.verbose("Removing label", i), i.remove()
                  },
                  activeLabels: function(e) {
                      e = e || T.find(y.label).filter("." + h.active), p.verbose("Removing active label selections", e), p.remove.labels(e)
                  },
                  labels: function(e, o) {
                      e = e || T.find(y.label), p.verbose("Removing labels", e), e.each(function() {
                          var e = te(this),
                              t = e.data(b.value),
                              n = t !== oe ? String(t) : t,
                              i = p.is.userValue(n);
                          !1 !== g.onLabelRemove.call(e, t) ? (p.remove.message(), i ? (p.remove.value(n, n, p.get.item(n), o), p.remove.label(n)) : p.remove.selected(n, !1, o)) : p.debug("Label remove callback cancelled removal")
                      })
                  },
                  tabbable: function() {
                      p.is.searchSelection() ? (p.debug("Searchable dropdown initialized"), A.removeAttr("tabindex")) : (p.debug("Simple selection dropdown initialized"), T.removeAttr("tabindex")), M.removeAttr("tabindex")
                  },
                  diacritics: function(e) {
                      return g.ignoreDiacritics ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e
                  }
              },
              has: {
                  menuSearch: function() {
                      return p.has.search() && 0 < A.closest(M).length
                  },
                  clearItem: function() {
                      return 0 < O.length
                  },
                  search: function() {
                      return 0 < A.length
                  },
                  sizer: function() {
                      return 0 < E.length
                  },
                  selectInput: function() {
                      return F.is("select")
                  },
                  minCharacters: function(e) {
                      return g.minCharacters && !z ? (e = e !== oe ? String(e) : String(p.get.query())).length >= g.minCharacters : !(z = !1)
                  },
                  firstLetter: function(e, t) {
                      var n;
                      return !(!e || 0 === e.length || "string" != typeof t) && (n = p.get.choiceText(e, !1), (t = t.toLowerCase()) == String(n).charAt(0).toLowerCase())
                  },
                  input: function() {
                      return 0 < F.length
                  },
                  items: function() {
                      return 0 < I.length
                  },
                  menu: function() {
                      return 0 < M.length
                  },
                  subMenu: function(e) {
                      return 0 < (e || M).find(y.menu).length
                  },
                  message: function() {
                      return 0 !== M.children(y.message).length
                  },
                  label: function(e) {
                      var t = p.escape.value(e),
                          n = T.find(y.label);
                      return g.ignoreCase && (t = t.toLowerCase()), 0 < n.filter("[data-" + b.value + '="' + p.escape.string(t) + '"]').length
                  },
                  maxSelections: function() {
                      return g.maxSelections && p.get.selectionCount() >= g.maxSelections
                  },
                  allResultsFiltered: function() {
                      var e = I.not(y.addition);
                      return e.filter(y.unselectable).length === e.length
                  },
                  userSuggestion: function() {
                      return 0 < M.children(y.addition).length
                  },
                  query: function() {
                      return "" !== p.get.query()
                  },
                  value: function(e) {
                      return g.ignoreCase ? p.has.valueIgnoringCase(e) : p.has.valueMatchingCase(e)
                  },
                  valueMatchingCase: function(e) {
                      var t = p.get.values(!0);
                      return !!(Array.isArray(t) ? t && -1 !== te.inArray(e, t) : t == e)
                  },
                  valueIgnoringCase: function(n) {
                      var e = p.get.values(!0),
                          i = !1;
                      return Array.isArray(e) || (e = [e]), te.each(e, function(e, t) {
                          if (String(n).toLowerCase() == String(t).toLowerCase()) return !(i = !0)
                      }), i
                  }
              },
              is: {
                  active: function() {
                      return T.hasClass(h.active)
                  },
                  animatingInward: function() {
                      return M.transition("is inward")
                  },
                  animatingOutward: function() {
                      return M.transition("is outward")
                  },
                  bubbledLabelClick: function(e) {
                      return te(e.target).is("select, input") && 0 < T.closest("label").length
                  },
                  bubbledIconClick: function(e) {
                      return 0 < te(e.target).closest(P).length
                  },
                  chrome: function() {
                      return !(!ne.chrome || !ne.chrome.webstore && !ne.chrome.runtime)
                  },
                  alreadySetup: function() {
                      return T.is("select") && T.parent(y.dropdown).data(k) !== oe && 0 === T.prev().length
                  },
                  animating: function(e) {
                      return e ? e.transition && e.transition("is animating") : M.transition && M.transition("is animating")
                  },
                  leftward: function(e) {
                      return (e || M).hasClass(h.leftward)
                  },
                  clearable: function() {
                      return T.hasClass(h.clearable) || g.clearable
                  },
                  disabled: function() {
                      return T.hasClass(h.disabled)
                  },
                  focused: function() {
                      return ie.activeElement === T[0]
                  },
                  focusedOnSearch: function() {
                      return ie.activeElement === A[0]
                  },
                  allFiltered: function() {
                      return (p.is.multiple() || p.has.search()) && !(0 == g.hideAdditions && p.has.userSuggestion()) && !p.has.message() && p.has.allResultsFiltered()
                  },
                  hidden: function(e) {
                      return !p.is.visible(e)
                  },
                  initialLoad: function() {
                      return e
                  },
                  inObject: function(n, e) {
                      var i = !1;
                      return te.each(e, function(e, t) {
                          if (t == n) return i = !0
                      }), i
                  },
                  multiple: function() {
                      return T.hasClass(h.multiple)
                  },
                  remote: function() {
                      return g.apiSettings && p.can.useAPI()
                  },
                  noApiCache: function() {
                      return g.apiSettings && !g.apiSettings.cache
                  },
                  single: function() {
                      return !p.is.multiple()
                  },
                  selectMutation: function(e) {
                      var n = !1;
                      return te.each(e, function(e, t) {
                          if (te(t.target).is("select") || te(t.addedNodes).is("select")) return !(n = !0)
                      }), n
                  },
                  search: function() {
                      return T.hasClass(h.search)
                  },
                  searchSelection: function() {
                      return p.has.search() && 1 === A.parent(y.dropdown).length
                  },
                  selection: function() {
                      return T.hasClass(h.selection)
                  },
                  userValue: function(e) {
                      return -1 !== te.inArray(e, p.get.userValues())
                  },
                  upward: function(e) {
                      return (e || T).hasClass(h.upward)
                  },
                  visible: function(e) {
                      return e ? e.hasClass(h.visible) : M.hasClass(h.visible)
                  },
                  verticallyScrollableContext: function() {
                      var e = S.get(0) !== ne && S.css("overflow-y");
                      return "auto" == e || "scroll" == e
                  },
                  horizontallyScrollableContext: function() {
                      var e = S.get(0) !== ne && S.css("overflow-X");
                      return "auto" == e || "scroll" == e
                  }
              },
              can: {
                  activate: function(e) {
                      return !!g.useLabels || (!p.has.maxSelections() || !(!p.has.maxSelections() || !e.hasClass(h.active)))
                  },
                  openDownward: function(e) {
                      var t, n, i = e || M,
                          o = !0;
                      return i.addClass(h.loading), n = {
                          context: {
                              offset: S.get(0) === ne ? {
                                  top: 0,
                                  left: 0
                              } : S.offset(),
                              scrollTop: S.scrollTop(),
                              height: S.outerHeight()
                          },
                          menu: {
                              offset: i.offset(),
                              height: i.outerHeight()
                          }
                      }, p.is.verticallyScrollableContext() && (n.menu.offset.top += n.context.scrollTop), p.has.subMenu(i) && (n.menu.height += i.find(y.menu).first().outerHeight()), o = (t = {
                          above: n.context.scrollTop <= n.menu.offset.top - n.context.offset.top - n.menu.height,
                          below: n.context.scrollTop + n.context.height >= n.menu.offset.top - n.context.offset.top + n.menu.height
                      }).below ? (p.verbose("Dropdown can fit in context downward", t), !0) : t.below || t.above ? (p.verbose("Dropdown cannot fit below, opening upward", t), !1) : (p.verbose("Dropdown cannot fit in either direction, favoring downward", t), !0), i.removeClass(h.loading), o
                  },
                  openRightward: function(e) {
                      var t, n, i = e || M,
                          o = !0;
                      return i.addClass(h.loading), n = {
                          context: {
                              offset: S.get(0) === ne ? {
                                  top: 0,
                                  left: 0
                              } : S.offset(),
                              scrollLeft: S.scrollLeft(),
                              width: S.outerWidth()
                          },
                          menu: {
                              offset: i.offset(),
                              width: i.outerWidth()
                          }
                      }, p.is.horizontallyScrollableContext() && (n.menu.offset.left += n.context.scrollLeft), (t = n.menu.offset.left - n.context.offset.left + n.menu.width >= n.context.scrollLeft + n.context.width) && (p.verbose("Dropdown cannot fit in context rightward", t), o = !1), i.removeClass(h.loading), o
                  },
                  click: function() {
                      return K || "click" == g.on
                  },
                  extendSelect: function() {
                      return g.allowAdditions || g.apiSettings
                  },
                  show: function() {
                      return !p.is.disabled() && (p.has.items() || p.has.message())
                  },
                  useAPI: function() {
                      return te.fn.api !== oe
                  }
              },
              animate: {
                  show: function(e, t) {
                      var n, i = t || M,
                          o = t ? function() {} : function() {
                              p.hideSubMenus(), p.hideOthers(), p.set.active()
                          };
                      e = te.isFunction(e) ? e : function() {}, p.verbose("Doing menu show animation", i), p.set.direction(t), n = g.transition.showMethod || p.get.transition(t), p.is.selection() && p.set.scrollPosition(p.get.selectedItem(), !0), (p.is.hidden(i) || p.is.animating(i)) && ("none" === n ? (o(), i.transition({
                          displayType: p.get.displayType()
                      }).transition("show"), e.call(N)) : te.fn.transition !== oe && T.transition("is supported") ? i.transition({
                          animation: n + " in",
                          debug: g.debug,
                          verbose: g.verbose,
                          duration: g.transition.showDuration || g.duration,
                          queue: !0,
                          onStart: o,
                          displayType: p.get.displayType(),
                          onComplete: function() {
                              e.call(N)
                          }
                      }) : p.error(x.noTransition, n))
                  },
                  hide: function(e, t) {
                      var n = t || M,
                          i = t ? function() {} : function() {
                              p.can.click() && p.unbind.intent(), p.remove.active()
                          },
                          o = g.transition.hideMethod || p.get.transition(t);
                      e = te.isFunction(e) ? e : function() {}, (p.is.visible(n) || p.is.animating(n)) && (p.verbose("Doing menu hide animation", n), "none" === o ? (i(), n.transition({
                          displayType: p.get.displayType()
                      }).transition("hide"), e.call(N)) : te.fn.transition !== oe && T.transition("is supported") ? n.transition({
                          animation: o + " out",
                          duration: g.transition.hideDuration || g.duration,
                          debug: g.debug,
                          verbose: g.verbose,
                          queue: !1,
                          onStart: i,
                          displayType: p.get.displayType(),
                          onComplete: function() {
                              e.call(N)
                          }
                      }) : p.error(x.transition))
                  }
              },
              hideAndClear: function() {
                  p.remove.searchTerm(), p.has.maxSelections() || (p.has.search() ? p.hide(function() {
                      p.remove.filteredItem()
                  }) : p.hide())
              },
              delay: {
                  show: function() {
                      p.verbose("Delaying show event to ensure user intent"), clearTimeout(p.timer), p.timer = setTimeout(p.show, g.delay.show)
                  },
                  hide: function() {
                      p.verbose("Delaying hide event to ensure user intent"), clearTimeout(p.timer), p.timer = setTimeout(p.hide, g.delay.hide)
                  }
              },
              escape: {
                  value: function(e) {
                      var t = Array.isArray(e),
                          n = "string" == typeof e,
                          i = !n && !t,
                          o = n && -1 !== e.search(m.quote),
                          a = [];
                      return i || !o ? e : (p.debug("Encoding quote values for use in select", e), t ? (te.each(e, function(e, t) {
                          a.push(t.replace(m.quote, "&quot;"))
                      }), a) : e.replace(m.quote, "&quot;"))
                  },
                  string: function(e) {
                      return (e = String(e)).replace(m.escape, "\\$&")
                  },
                  htmlEntities: function(e) {
                      var t = {
                          "<": "&lt;",
                          ">": "&gt;",
                          '"': "&quot;",
                          "'": "&#x27;",
                          "`": "&#x60;"
                      };
                      return /[&<>"'`]/.test(e) ? (e = e.replace(/&(?![a-z0-9#]{1,6};)/, "&amp;")).replace(/[<>"'`]/g, function(e) {
                          return t[e]
                      }) : e
                  }
              },
              setting: function(e, t) {
                  if (p.debug("Changing setting", e, t), te.isPlainObject(e)) te.extend(!0, g, e);
                  else {
                      if (t === oe) return g[e];
                      te.isPlainObject(g[e]) ? te.extend(!0, g[e], t) : g[e] = t
                  }
              },
              internal: function(e, t) {
                  if (te.isPlainObject(e)) te.extend(!0, p, e);
                  else {
                      if (t === oe) return p[e];
                      p[e] = t
                  }
              },
              debug: function() {
                  !g.silent && g.debug && (g.performance ? p.performance.log(arguments) : (p.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), p.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !g.silent && g.verbose && g.debug && (g.performance ? p.performance.log(arguments) : (p.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), p.verbose.apply(console, arguments)))
              },
              error: function() {
                  g.silent || (p.error = Function.prototype.bind.call(console.error, console, g.name + ":"), p.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      g.performance && (n = (t = (new Date).getTime()) - (G || t), G = t, J.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: N,
                          "Execution Time": n
                      })), clearTimeout(p.performance.timer), p.performance.timer = setTimeout(p.performance.display, 500)
                  },
                  display: function() {
                      var e = g.name + ":",
                          n = 0;
                      G = !1, clearTimeout(p.performance.timer), te.each(J, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", X && (e += " '" + X + "'"), (console.group !== oe || console.table !== oe) && 0 < J.length && (console.groupCollapsed(e), console.table ? console.table(J) : te.each(J, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), J = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = U;
                  return e = e || ee, t = N || t, "string" == typeof i && r !== oe && (i = i.split(/[\. ]/), o = i.length - 1, te.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (te.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== oe) return a = r[n], !1;
                          if (!te.isPlainObject(r[t]) || e == o) return r[t] !== oe ? a = r[t] : p.error(x.method, i), !1;
                          r = r[t]
                      }
                  })), te.isFunction(a) ? n = a.apply(t, e) : a !== oe && (n = a), Array.isArray(W) ? W.push(n) : W !== oe ? W = [W, n] : n !== oe && (W = n), a
              }
          }, _ ? (U === oe && p.initialize(), p.invoke(Z)) : (U !== oe && U.invoke("destroy"), p.initialize())
      }), W !== oe ? W : Y
  }, te.fn.dropdown.settings = {
      silent: !1,
      debug: !1,
      verbose: !1,
      performance: !0,
      on: "click",
      action: "activate",
      values: !1,
      clearable: !1,
      apiSettings: !1,
      selectOnKeydown: !0,
      minCharacters: 0,
      filterRemoteData: !1,
      saveRemoteData: !0,
      throttle: 200,
      context: ne,
      direction: "auto",
      keepOnScreen: !0,
      match: "both",
      fullTextSearch: !1,
      ignoreDiacritics: !1,
      hideDividers: !1,
      placeholder: "auto",
      preserveHTML: !0,
      sortSelect: !1,
      forceSelection: !0,
      allowAdditions: !1,
      ignoreCase: !1,
      ignoreSearchCase: !0,
      hideAdditions: !0,
      maxSelections: !1,
      useLabels: !0,
      delimiter: ",",
      showOnFocus: !0,
      allowReselection: !1,
      allowTab: !0,
      allowCategorySelection: !1,
      fireOnInit: !1,
      transition: "auto",
      duration: 200,
      displayType: !1,
      glyphWidth: 1.037,
      headerDivider: !0,
      label: {
          transition: "scale",
          duration: 200,
          variation: !1
      },
      delay: {
          hide: 300,
          show: 200,
          search: 20,
          touch: 50
      },
      onChange: function(e, t, n) {},
      onAdd: function(e, t, n) {},
      onRemove: function(e, t, n) {},
      onSearch: function(e) {},
      onLabelSelect: function(e) {},
      onLabelCreate: function(e, t) {
          return te(this)
      },
      onLabelRemove: function(e) {
          return !0
      },
      onNoResults: function(e) {
          return !0
      },
      onShow: function() {},
      onHide: function() {},
      name: "Dropdown",
      namespace: "dropdown",
      message: {
          addResult: "Add <b>{term}</b>",
          count: "{count} selected",
          maxSelections: "Max {maxCount} selections",
          noResults: "No results found.",
          serverError: "There was an error contacting the server"
      },
      error: {
          action: "You called a dropdown action that was not defined",
          alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown",
          labels: "Allowing user additions currently requires the use of labels.",
          missingMultiple: "<select> requires multiple property to be set to correctly preserve multiple values",
          method: "The method you called is not defined.",
          noAPI: "The API module is required to load resources remotely",
          noStorage: "Saving remote data requires session storage",
          noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",
          noNormalize: '"ignoreDiacritics" setting will be ignored. Browser does not support String().normalize(). You may consider including <https://cdn.jsdelivr.net/npm/unorm@1.4.1/lib/unorm.min.js> as a polyfill.'
      },
      regExp: {
          escape: /[-[\]{}()*+?.,\\^$|#\s:=@]/g,
          quote: /"/g
      },
      metadata: {
          defaultText: "defaultText",
          defaultValue: "defaultValue",
          placeholderText: "placeholder",
          text: "text",
          value: "value"
      },
      fields: {
          remoteValues: "results",
          values: "values",
          disabled: "disabled",
          name: "name",
          description: "description",
          descriptionVertical: "descriptionVertical",
          value: "value",
          text: "text",
          type: "type",
          image: "image",
          imageClass: "imageClass",
          icon: "icon",
          iconClass: "iconClass",
          class: "class",
          divider: "divider"
      },
      keys: {
          backspace: 8,
          delimiter: 188,
          deleteKey: 46,
          enter: 13,
          escape: 27,
          pageUp: 33,
          pageDown: 34,
          leftArrow: 37,
          upArrow: 38,
          rightArrow: 39,
          downArrow: 40
      },
      selector: {
          addition: ".addition",
          divider: ".divider, .header",
          dropdown: ".ui.dropdown",
          hidden: ".hidden",
          icon: "> .dropdown.icon",
          input: '> input[type="hidden"], > select',
          item: ".item",
          label: "> .label",
          remove: "> .label > .delete.icon",
          siblingLabel: ".label",
          menu: ".menu",
          message: ".message",
          menuIcon: ".dropdown.icon",
          search: "input.search, .menu > .search > input, .menu input.search",
          sizer: "> span.sizer",
          text: "> .text:not(.icon)",
          unselectable: ".disabled, .filtered",
          clearIcon: "> .remove.icon"
      },
      className: {
          active: "active",
          addition: "addition",
          animating: "animating",
          description: "description",
          descriptionVertical: "vertical",
          disabled: "disabled",
          empty: "empty",
          dropdown: "ui dropdown",
          filtered: "filtered",
          hidden: "hidden transition",
          icon: "icon",
          image: "image",
          item: "item",
          label: "ui label",
          loading: "loading",
          menu: "menu",
          message: "message",
          multiple: "multiple",
          placeholder: "default",
          sizer: "sizer",
          search: "search",
          selected: "selected",
          selection: "selection",
          text: "text",
          upward: "upward",
          leftward: "left",
          visible: "visible",
          clearable: "clearable",
          noselection: "noselection",
          delete: "delete",
          header: "header",
          divider: "divider",
          groupIcon: "",
          unfilterable: "unfilterable"
      }
  }, te.fn.dropdown.settings.templates = {
      deQuote: function(e, t) {
          return String(e).replace(/"/g, t ? "&quot;" : "")
      },
      escape: function(e, t) {
          if (t) return e;
          var n = {
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#x27;",
              "`": "&#x60;"
          };
          return /[&<>"'`]/.test(e) ? (e = e.replace(/&(?![a-z0-9#]{1,6};)/, "&amp;")).replace(/[<>"'`]/g, function(e) {
              return n[e]
          }) : e
      },
      dropdown: function(e, t, n, i) {
          var o = e.placeholder || !1,
              a = "",
              r = te.fn.dropdown.settings.templates.escape;
          return a += '<i class="dropdown icon"></i>', a += o ? '<div class="default text">' + r(o, n) + "</div>" : '<div class="text"></div>', a += '<div class="' + i.menu + '">', a += te.fn.dropdown.settings.templates.menu(e, t, n, i), a += "</div>"
      },
      menu: function(e, u, d, f) {
          var t = e[u.values] || [],
              m = "",
              g = te.fn.dropdown.settings.templates.escape,
              p = te.fn.dropdown.settings.templates.deQuote;
          return te.each(t, function(e, t) {
              var n = t[u.type] ? t[u.type] : "item",
                  i = -1 !== n.indexOf("menu");
              if ("item" === n || i) {
                  var o = t[u.text] ? ' data-text="' + p(t[u.text], !0) + '"' : "",
                      a = t[u.disabled] ? f.disabled + " " : "",
                      r = t[u.descriptionVertical] ? f.descriptionVertical + " " : "",
                      s = "" != g(t[u.description] || "", d);
                  m += '<div class="' + a + r + (t[u.class] ? p(t[u.class]) : f.item) + '" data-value="' + p(t[u.value], !0) + '"' + o + ">", i && (m += '<i class="' + (-1 !== n.indexOf("left") ? "left" : "") + ' dropdown icon"></i>'), t[u.image] && (m += '<img class="' + (t[u.imageClass] ? p(t[u.imageClass]) : f.image) + '" src="' + p(t[u.image]) + '">'), t[u.icon] && (m += '<i class="' + p(t[u.icon]) + " " + (t[u.iconClass] ? p(t[u.iconClass]) : f.icon) + '"></i>'), s && (m += '<span class="' + f.description + '">' + g(t[u.description] || "", d) + "</span>", m += i ? "" : '<span class="' + f.text + '">'), i && (m += '<span class="' + f.text + '">'), m += g(t[u.name] || "", d), i ? (m += "</span>", m += '<div class="' + n + '">', m += te.fn.dropdown.settings.templates.menu(t, u, d, f), m += "</div>") : s && (m += "</span>"), m += "</div>"
              } else if ("header" === n) {
                  var l = g(t[u.name] || "", d),
                      c = t[u.icon] ? p(t[u.icon]) : f.groupIcon;
                  "" === l && "" === c || (m += '<div class="' + (t[u.class] ? p(t[u.class]) : f.header) + '">', "" !== c && (m += '<i class="' + c + " " + (t[u.iconClass] ? p(t[u.iconClass]) : f.icon) + '"></i>'), m += l, m += "</div>"), t[u.divider] && (m += '<div class="' + f.divider + '"></div>')
              }
          }), m
      },
      label: function(e, t, n, i) {
          return (0, te.fn.dropdown.settings.templates.escape)(t, n) + '<i class="' + i.delete + ' icon"></i>'
      },
      message: function(e) {
          return e
      },
      addition: function(e) {
          return e
      }
  }
}(jQuery, window, document),
function(T, e, t, S) {
  "use strict";
  T.isFunction = T.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), T.fn.embed = function(p) {
      var h, v = T(this),
          b = v.selector || "",
          y = (new Date).getTime(),
          x = [],
          C = p,
          w = "string" == typeof C,
          k = [].slice.call(arguments, 1);
      return v.each(function() {
          var s, i = T.isPlainObject(p) ? T.extend(!0, {}, T.fn.embed.settings, p) : T.extend({}, T.fn.embed.settings),
              e = i.selector,
              t = i.className,
              o = i.sources,
              l = i.error,
              a = i.metadata,
              n = i.namespace,
              r = i.templates,
              c = "." + n,
              u = "module-" + n,
              d = T(this),
              f = (d.find(e.placeholder), d.find(e.icon), d.find(e.embed)),
              m = this,
              g = d.data(u);
          s = {
              initialize: function() {
                  s.debug("Initializing embed"), s.determine.autoplay(), s.create(), s.bind.events(), s.instantiate()
              },
              instantiate: function() {
                  s.verbose("Storing instance of module", s), g = s, d.data(u, s)
              },
              destroy: function() {
                  s.verbose("Destroying previous instance of embed"), s.reset(), d.removeData(u).off(c)
              },
              refresh: function() {
                  s.verbose("Refreshing selector cache"), d.find(e.placeholder), d.find(e.icon), f = d.find(e.embed)
              },
              bind: {
                  events: function() {
                      s.has.placeholder() && (s.debug("Adding placeholder events"), d.on("click" + c, e.placeholder, s.createAndShow).on("click" + c, e.icon, s.createAndShow))
                  }
              },
              create: function() {
                  s.get.placeholder() ? s.createPlaceholder() : s.createAndShow()
              },
              createPlaceholder: function(e) {
                  var t = s.get.icon(),
                      n = s.get.url();
                  s.generate.embed(n);
                  e = e || s.get.placeholder(), d.html(r.placeholder(e, t)), s.debug("Creating placeholder for embed", e, t)
              },
              createEmbed: function(e) {
                  s.refresh(), e = e || s.get.url(), f = T("<div/>").addClass(t.embed).html(s.generate.embed(e)).appendTo(d), i.onCreate.call(m, e), s.debug("Creating embed object", f)
              },
              changeEmbed: function(e) {
                  f.html(s.generate.embed(e))
              },
              createAndShow: function() {
                  s.createEmbed(), s.show()
              },
              change: function(e, t, n) {
                  s.debug("Changing video to ", e, t, n), d.data(a.source, e).data(a.id, t), n ? d.data(a.url, n) : d.removeData(a.url), s.has.embed() ? s.changeEmbed() : s.create()
              },
              reset: function() {
                  s.debug("Clearing embed and showing placeholder"), s.remove.data(), s.remove.active(), s.remove.embed(), s.showPlaceholder(), i.onReset.call(m)
              },
              show: function() {
                  s.debug("Showing embed"), s.set.active(), i.onDisplay.call(m)
              },
              hide: function() {
                  s.debug("Hiding embed"), s.showPlaceholder()
              },
              showPlaceholder: function() {
                  s.debug("Showing placeholder image"), s.remove.active(), i.onPlaceholderDisplay.call(m)
              },
              get: {
                  id: function() {
                      return i.id || d.data(a.id)
                  },
                  placeholder: function() {
                      return i.placeholder || d.data(a.placeholder)
                  },
                  icon: function() {
                      return i.icon ? i.icon : d.data(a.icon) !== S ? d.data(a.icon) : s.determine.icon()
                  },
                  source: function(e) {
                      return i.source ? i.source : d.data(a.source) !== S ? d.data(a.source) : s.determine.source()
                  },
                  type: function() {
                      var e = s.get.source();
                      return o[e] !== S && o[e].type
                  },
                  url: function() {
                      return i.url ? i.url : d.data(a.url) !== S ? d.data(a.url) : s.determine.url()
                  }
              },
              determine: {
                  autoplay: function() {
                      s.should.autoplay() && (i.autoplay = !0)
                  },
                  source: function(n) {
                      var i = !1;
                      return (n = n || s.get.url()) && T.each(o, function(e, t) {
                          if (-1 !== n.search(t.domain)) return i = e, !1
                      }), i
                  },
                  icon: function() {
                      var e = s.get.source();
                      return o[e] !== S && o[e].icon
                  },
                  url: function() {
                      var e, t = i.id || d.data(a.id),
                          n = i.source || d.data(a.source);
                      return (e = o[n] !== S && o[n].url.replace("{id}", t)) && d.data(a.url, e), e
                  }
              },
              set: {
                  active: function() {
                      d.addClass(t.active)
                  }
              },
              remove: {
                  data: function() {
                      d.removeData(a.id).removeData(a.icon).removeData(a.placeholder).removeData(a.source).removeData(a.url)
                  },
                  active: function() {
                      d.removeClass(t.active)
                  },
                  embed: function() {
                      f.empty()
                  }
              },
              encode: {
                  parameters: function(e) {
                      var t, n = [];
                      for (t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                      return n.join("&amp;")
                  }
              },
              generate: {
                  embed: function(e) {
                      s.debug("Generating embed html");
                      var t, n, i = s.get.source();
                      return (e = s.get.url(e)) ? (n = s.generate.parameters(i), t = r.iframe(e, n)) : s.error(l.noURL, d), t
                  },
                  parameters: function(e, t) {
                      var n = o[e] && o[e].parameters !== S ? o[e].parameters(i) : {};
                      return (t = t || i.parameters) && (n = T.extend({}, n, t)), n = i.onEmbed(n), s.encode.parameters(n)
                  }
              },
              has: {
                  embed: function() {
                      return 0 < f.length
                  },
                  placeholder: function() {
                      return i.placeholder || d.data(a.placeholder)
                  }
              },
              should: {
                  autoplay: function() {
                      return "auto" === i.autoplay ? i.placeholder || d.data(a.placeholder) !== S : i.autoplay
                  }
              },
              is: {
                  video: function() {
                      return "video" == s.get.type()
                  }
              },
              setting: function(e, t) {
                  if (s.debug("Changing setting", e, t), T.isPlainObject(e)) T.extend(!0, i, e);
                  else {
                      if (t === S) return i[e];
                      T.isPlainObject(i[e]) ? T.extend(!0, i[e], t) : i[e] = t
                  }
              },
              internal: function(e, t) {
                  if (T.isPlainObject(e)) T.extend(!0, s, e);
                  else {
                      if (t === S) return s[e];
                      s[e] = t
                  }
              },
              debug: function() {
                  !i.silent && i.debug && (i.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, i.name + ":"), s.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !i.silent && i.verbose && i.debug && (i.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, i.name + ":"), s.verbose.apply(console, arguments)))
              },
              error: function() {
                  i.silent || (s.error = Function.prototype.bind.call(console.error, console, i.name + ":"), s.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      i.performance && (n = (t = (new Date).getTime()) - (y || t), y = t, x.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: m,
                          "Execution Time": n
                      })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500)
                  },
                  display: function() {
                      var e = i.name + ":",
                          n = 0;
                      y = !1, clearTimeout(s.performance.timer), T.each(x, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", b && (e += " '" + b + "'"), 1 < v.length && (e += " (" + v.length + ")"), (console.group !== S || console.table !== S) && 0 < x.length && (console.groupCollapsed(e), console.table ? console.table(x) : T.each(x, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), x = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = g;
                  return e = e || k, t = m || t, "string" == typeof i && r !== S && (i = i.split(/[\. ]/), o = i.length - 1, T.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (T.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== S) return a = r[n], !1;
                          if (!T.isPlainObject(r[t]) || e == o) return r[t] !== S ? a = r[t] : s.error(l.method, i), !1;
                          r = r[t]
                      }
                  })), T.isFunction(a) ? n = a.apply(t, e) : a !== S && (n = a), Array.isArray(h) ? h.push(n) : h !== S ? h = [h, n] : n !== S && (h = n), a
              }
          }, w ? (g === S && s.initialize(), s.invoke(C)) : (g !== S && g.invoke("destroy"), s.initialize())
      }), h !== S ? h : this
  }, T.fn.embed.settings = {
      name: "Embed",
      namespace: "embed",
      silent: !1,
      debug: !1,
      verbose: !1,
      performance: !0,
      icon: !1,
      source: !1,
      url: !1,
      id: !1,
      autoplay: "auto",
      color: "#444444",
      hd: !0,
      brandedUI: !1,
      parameters: !1,
      onDisplay: function() {},
      onPlaceholderDisplay: function() {},
      onReset: function() {},
      onCreate: function(e) {},
      onEmbed: function(e) {
          return e
      },
      metadata: {
          id: "id",
          icon: "icon",
          placeholder: "placeholder",
          source: "source",
          url: "url"
      },
      error: {
          noURL: "No URL specified",
          method: "The method you called is not defined"
      },
      className: {
          active: "active",
          embed: "embed"
      },
      selector: {
          embed: ".embed",
          placeholder: ".placeholder",
          icon: ".icon"
      },
      sources: {
          youtube: {
              name: "youtube",
              type: "video",
              icon: "video play",
              domain: "youtube.com",
              url: "//www.youtube.com/embed/{id}",
              parameters: function(e) {
                  return {
                      autohide: !e.brandedUI,
                      autoplay: e.autoplay,
                      color: e.color || S,
                      hq: e.hd,
                      jsapi: e.api,
                      modestbranding: !e.brandedUI
                  }
              }
          },
          vimeo: {
              name: "vimeo",
              type: "video",
              icon: "video play",
              domain: "vimeo.com",
              url: "//player.vimeo.com/video/{id}",
              parameters: function(e) {
                  return {
                      api: e.api,
                      autoplay: e.autoplay,
                      byline: e.brandedUI,
                      color: e.color || S,
                      portrait: e.brandedUI,
                      title: e.brandedUI
                  }
              }
          }
      },
      templates: {
          iframe: function(e, t) {
              var n = e;
              return t && (n += "?" + t), '<iframe src="' + n + '" width="100%" height="100%" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
          },
          placeholder: function(e, t) {
              var n = "";
              return t && (n += '<i class="' + t + ' icon"></i>'), e && (n += '<img class="placeholder" src="' + e + '">'), n
          }
      },
      api: !1,
      onPause: function() {},
      onPlay: function() {},
      onStop: function() {}
  }
}(jQuery, window, document),
function(z, N, H, U) {
  "use strict";
  z.isFunction = z.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, N = void 0 !== N && N.Math == Math ? N : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), z.fn.modal = function(A) {
      var E, e = z(this),
          F = z(N),
          P = z(H),
          O = z("body"),
          R = e.selector || "",
          M = (new Date).getTime(),
          I = [],
          j = A,
          L = "string" == typeof j,
          V = [].slice.call(arguments, 1),
          q = N.requestAnimationFrame || N.mozRequestAnimationFrame || N.webkitRequestAnimationFrame || N.msRequestAnimationFrame || function(e) {
              setTimeout(e, 0)
          };
      return e.each(function() {
          var o, a, e, i, n, r, s, t, l, c, u, d = z.isPlainObject(A) ? z.extend(!0, {}, z.fn.modal.settings, A) : z.extend({}, z.fn.modal.settings),
              f = d.selector,
              m = d.className,
              g = d.namespace,
              p = d.fields,
              h = d.error,
              v = "." + g,
              b = "module-" + g,
              y = z(this),
              x = z(d.context),
              C = y.find(f.close),
              w = this,
              k = y.hasClass("modal") ? y.data(b) : U,
              T = !1,
              S = "",
              D = "";
          u = {
              initialize: function() {
                  if (y.hasClass("modal") || (u.create.modal(), z.isFunction(d.onHidden) || (d.onHidden = function() {
                          u.destroy(), y.remove()
                      })), y.addClass(d.class), "" !== d.title && y.find(f.title).html(u.helpers.escape(d.title, d.preserveHTML)).addClass(d.classTitle), "" !== d.content && y.find(f.content).html(u.helpers.escape(d.content, d.preserveHTML)).addClass(d.classContent), u.has.configActions()) {
                      var a = y.find(f.actions).addClass(d.classActions);
                      0 === a.length ? a = z("<div/>", {
                          class: m.actions + " " + (d.classActions || "")
                      }).appendTo(y) : a.empty(), d.actions.forEach(function(e) {
                          var t = e[p.icon] ? '<i class="' + u.helpers.deQuote(e[p.icon]) + ' icon"></i>' : "",
                              n = u.helpers.escape(e[p.text] || "", d.preserveHTML),
                              i = u.helpers.deQuote(e[p.class] || ""),
                              o = e[p.click] && z.isFunction(e[p.click]) ? e[p.click] : function() {};
                          a.append(z("<button/>", {
                              html: t + n,
                              class: m.button + " " + i,
                              click: function() {
                                  !1 !== o.call(w, y) && u.hide()
                              }
                          }))
                      })
                  }
                  u.cache = {}, u.verbose("Initializing dimmer", x), u.create.id(), u.create.dimmer(), d.allowMultiple && u.create.innerDimmer(), d.centered || y.addClass("top aligned"), u.refreshModals(), u.bind.events(), d.observeChanges && u.observeChanges(), u.instantiate(), d.autoShow && u.show()
              },
              instantiate: function() {
                  u.verbose("Storing instance of modal"), k = u, y.data(b, k)
              },
              create: {
                  modal: function() {
                      y = z("<div/>", {
                          class: m.modal
                      }), d.closeIcon && (C = z("<i/>", {
                          class: m.close
                      }), y.append(C)), "" !== d.title && z("<div/>", {
                          class: m.title
                      }).appendTo(y), "" !== d.content && z("<div/>", {
                          class: m.content
                      }).appendTo(y), u.has.configActions() && z("<div/>", {
                          class: m.actions
                      }).appendTo(y), x.append(y)
                  },
                  dimmer: function() {
                      var e = {
                              debug: d.debug,
                              dimmerName: "modals"
                          },
                          t = z.extend(!0, e, d.dimmerSettings);
                      z.fn.dimmer !== U ? (u.debug("Creating dimmer"), i = x.dimmer(t), d.detachable ? (u.verbose("Modal is detachable, moving content into dimmer"), i.dimmer("add content", y)) : u.set.undetached(), n = i.dimmer("get dimmer")) : u.error(h.dimmer)
                  },
                  id: function() {
                      l = (Math.random().toString(16) + "000000000").substr(2, 8), t = "." + l, u.verbose("Creating unique id for element", l)
                  },
                  innerDimmer: function() {
                      0 == y.find(f.dimmer).length && y.prepend('<div class="ui inverted dimmer"></div>')
                  }
              },
              destroy: function() {
                  c && c.disconnect(), u.verbose("Destroying previous modal"), y.removeData(b).off(v), F.off(t), n.off(t), C.off(v), x.dimmer("destroy")
              },
              observeChanges: function() {
                  "MutationObserver" in N && ((c = new MutationObserver(function(e) {
                      u.debug("DOM tree modified, refreshing"), u.refresh()
                  })).observe(w, {
                      childList: !0,
                      subtree: !0
                  }), u.debug("Setting up mutation observer", c))
              },
              refresh: function() {
                  u.remove.scrolling(), u.cacheSizes(), u.can.useFlex() || u.set.modalOffset(), u.set.screenHeight(), u.set.type()
              },
              refreshModals: function() {
                  a = y.siblings(f.modal), o = a.add(y)
              },
              attachEvents: function(e, t) {
                  var n = z(e);
                  t = z.isFunction(u[t]) ? u[t] : u.toggle, 0 < n.length ? (u.debug("Attaching modal events to element", e, t), n.off(v).on("click" + v, t)) : u.error(h.notFound, e)
              },
              bind: {
                  events: function() {
                      u.verbose("Attaching events"), y.on("click" + v, f.close, u.event.close).on("click" + v, f.approve, u.event.approve).on("click" + v, f.deny, u.event.deny), F.on("resize" + t, u.event.resize)
                  },
                  scrollLock: function() {
                      i.get(0).addEventListener("touchmove", u.event.preventScroll, {
                          passive: !1
                      })
                  }
              },
              unbind: {
                  scrollLock: function() {
                      i.get(0).removeEventListener("touchmove", u.event.preventScroll, {
                          passive: !1
                      })
                  }
              },
              get: {
                  id: function() {
                      return (Math.random().toString(16) + "000000000").substr(2, 8)
                  },
                  element: function() {
                      return y
                  },
                  settings: function() {
                      return d
                  }
              },
              event: {
                  approve: function() {
                      T || !1 === d.onApprove.call(w, z(this)) ? u.verbose("Approve callback returned false cancelling hide") : (T = !0, u.hide(function() {
                          T = !1
                      }))
                  },
                  preventScroll: function(e) {
                      -1 !== e.target.className.indexOf("dimmer") && e.preventDefault()
                  },
                  deny: function() {
                      T || !1 === d.onDeny.call(w, z(this)) ? u.verbose("Deny callback returned false cancelling hide") : (T = !0, u.hide(function() {
                          T = !1
                      }))
                  },
                  close: function() {
                      u.hide()
                  },
                  mousedown: function(e) {
                      var t = z(e.target),
                          n = u.is.rtl();
                      (r = 0 < t.closest(f.modal).length) && u.verbose("Mouse down event registered inside the modal"), (s = u.is.scrolling() && (!n && z(N).outerWidth() - d.scrollbarWidth <= e.clientX || n && d.scrollbarWidth >= e.clientX)) && u.verbose("Mouse down event registered inside the scrollbar")
                  },
                  mouseup: function(e) {
                      if (d.closable)
                          if (r) u.debug("Dimmer clicked but mouse down was initially registered inside the modal");
                          else if (s) u.debug("Dimmer clicked but mouse down was initially registered inside the scrollbar");
                      else {
                          var t = 0 < z(e.target).closest(f.modal).length,
                              n = z.contains(H.documentElement, e.target);
                          if (!t && n && u.is.active() && y.hasClass(m.front)) {
                              if (u.debug("Dimmer clicked, hiding all modals"), d.allowMultiple) {
                                  if (!u.hideAll()) return
                              } else if (!u.hide()) return;
                              u.remove.clickaway()
                          }
                      } else u.verbose("Dimmer clicked but closable setting is disabled")
                  },
                  debounce: function(e, t) {
                      clearTimeout(u.timer), u.timer = setTimeout(e, t)
                  },
                  keyboard: function(e) {
                      27 == e.which && (d.closable ? (u.debug("Escape key pressed hiding modal"), y.hasClass(m.front) && u.hide()) : u.debug("Escape key pressed, but closable is set to false"), e.preventDefault())
                  },
                  resize: function() {
                      i.dimmer("is active") && (u.is.animating() || u.is.active()) && q(u.refresh)
                  }
              },
              toggle: function() {
                  u.is.active() || u.is.animating() ? u.hide() : u.show()
              },
              show: function(e) {
                  e = z.isFunction(e) ? e : function() {}, u.refreshModals(), u.set.dimmerSettings(), u.set.dimmerStyles(), u.showModal(e)
              },
              hide: function(e) {
                  return e = z.isFunction(e) ? e : function() {}, u.refreshModals(), u.hideModal(e)
              },
              showModal: function(e) {
                  e = z.isFunction(e) ? e : function() {}, u.is.animating() || !u.is.active() ? (u.showDimmer(), u.cacheSizes(), u.set.bodyMargin(), u.can.useFlex() ? u.remove.legacy() : (u.set.legacy(), u.set.modalOffset(), u.debug("Using non-flex legacy modal positioning.")), u.set.screenHeight(), u.set.type(), u.set.clickaway(), !d.allowMultiple && u.others.active() ? u.hideOthers(u.showModal) : (T = !1, d.allowMultiple && (u.others.active() && a.filter("." + m.active).find(f.dimmer).addClass("active"), d.detachable && y.detach().appendTo(n)), d.onShow.call(w), d.transition && z.fn.transition !== U && y.transition("is supported") ? (u.debug("Showing modal with css animations"), y.transition({
                      debug: d.debug,
                      animation: (d.transition.showMethod || d.transition) + " in",
                      queue: d.queue,
                      duration: d.transition.showDuration || d.duration,
                      useFailSafe: !0,
                      onComplete: function() {
                          d.onVisible.apply(w), d.keyboardShortcuts && u.add.keyboardShortcuts(), u.save.focus(), u.set.active(), d.autofocus && u.set.autofocus(), e()
                      }
                  })) : u.error(h.noTransition))) : u.debug("Modal is already visible")
              },
              hideModal: function(e, t, n) {
                  var i = a.filter("." + m.active).last();
                  if (e = z.isFunction(e) ? e : function() {}, u.debug("Hiding modal"), !1 === d.onHide.call(w, z(this))) return u.verbose("Hide callback returned false cancelling hide"), T = !1;
                  (u.is.animating() || u.is.active()) && (d.transition && z.fn.transition !== U && y.transition("is supported") ? (u.remove.active(), y.transition({
                      debug: d.debug,
                      animation: (d.transition.hideMethod || d.transition) + " out",
                      queue: d.queue,
                      duration: d.transition.hideDuration || d.duration,
                      useFailSafe: !0,
                      onStart: function() {
                          u.others.active() || u.others.animating() || t || u.hideDimmer(), d.keyboardShortcuts && !u.others.active() && u.remove.keyboardShortcuts()
                      },
                      onComplete: function() {
                          u.unbind.scrollLock(), d.allowMultiple && (i.addClass(m.front), y.removeClass(m.front), n ? o.find(f.dimmer).removeClass("active") : i.find(f.dimmer).removeClass("active")), z.isFunction(d.onHidden) && d.onHidden.call(w), u.remove.dimmerStyles(), u.restore.focus(), e()
                      }
                  })) : u.error(h.noTransition))
              },
              showDimmer: function() {
                  i.dimmer("is animating") || !i.dimmer("is active") ? (u.save.bodyMargin(), u.debug("Showing dimmer"), i.dimmer("show")) : u.debug("Dimmer already visible")
              },
              hideDimmer: function() {
                  i.dimmer("is animating") || i.dimmer("is active") ? (u.unbind.scrollLock(), i.dimmer("hide", function() {
                      u.restore.bodyMargin(), u.remove.clickaway(), u.remove.screenHeight()
                  })) : u.debug("Dimmer is not visible cannot hide")
              },
              hideAll: function(n) {
                  var e = o.filter("." + m.active + ", ." + m.animating);
                  if (n = z.isFunction(n) ? n : function() {}, 0 < e.length) {
                      u.debug("Hiding all visible modals");
                      var i = !0;
                      return z(e.get().reverse()).each(function(e, t) {
                          i = i && z(t).modal("hide modal", n, !1, !0)
                      }), i && u.hideDimmer(), i
                  }
              },
              hideOthers: function(e) {
                  var t = a.filter("." + m.active + ", ." + m.animating);
                  e = z.isFunction(e) ? e : function() {}, 0 < t.length && (u.debug("Hiding other modals", a), t.modal("hide modal", e, !0))
              },
              others: {
                  active: function() {
                      return 0 < a.filter("." + m.active).length
                  },
                  animating: function() {
                      return 0 < a.filter("." + m.animating).length
                  }
              },
              add: {
                  keyboardShortcuts: function() {
                      u.verbose("Adding keyboard shortcuts"), P.on("keyup" + v, u.event.keyboard)
                  }
              },
              save: {
                  focus: function() {
                      0 < z(H.activeElement).closest(y).length || (e = z(H.activeElement).blur())
                  },
                  bodyMargin: function() {
                      S = O.css("margin-" + (u.can.leftBodyScrollbar() ? "left" : "right"));
                      var e = parseInt(S.replace(/[^\d.]/g, "")),
                          t = N.innerWidth - H.documentElement.clientWidth;
                      D = e + t
                  }
              },
              restore: {
                  focus: function() {
                      e && 0 < e.length && d.restoreFocus && e.focus()
                  },
                  bodyMargin: function() {
                      var n = u.can.leftBodyScrollbar() ? "left" : "right";
                      O.css("margin-" + n, S), O.find(f.bodyFixed.replace("right", n)).each(function() {
                          var e = z(this),
                              t = "fixed" === e.css("position") ? "padding-" + n : n;
                          e.css(t, "")
                      })
                  }
              },
              remove: {
                  active: function() {
                      y.removeClass(m.active)
                  },
                  legacy: function() {
                      y.removeClass(m.legacy)
                  },
                  clickaway: function() {
                      d.detachable || y.off("mousedown" + t), n.off("mousedown" + t), n.off("mouseup" + t)
                  },
                  dimmerStyles: function() {
                      n.removeClass(m.inverted), i.removeClass(m.blurring)
                  },
                  bodyStyle: function() {
                      "" === O.attr("style") && (u.verbose("Removing style attribute"), O.removeAttr("style"))
                  },
                  screenHeight: function() {
                      u.debug("Removing page height"), O.css("height", "")
                  },
                  keyboardShortcuts: function() {
                      u.verbose("Removing keyboard shortcuts"), P.off("keyup" + v)
                  },
                  scrolling: function() {
                      i.removeClass(m.scrolling), y.removeClass(m.scrolling)
                  }
              },
              cacheSizes: function() {
                  y.addClass(m.loading);
                  var e = y.prop("scrollHeight"),
                      t = y.outerWidth(),
                      n = y.outerHeight();
                  u.cache.pageHeight !== U && 0 === n || (z.extend(u.cache, {
                      pageHeight: z(H).outerHeight(),
                      width: t,
                      height: n + d.offset,
                      scrollHeight: e + d.offset,
                      contextHeight: "body" == d.context ? z(N).height() : i.height()
                  }), u.cache.topOffset = -u.cache.height / 2), y.removeClass(m.loading), u.debug("Caching modal and container sizes", u.cache)
              },
              helpers: {
                  deQuote: function(e) {
                      return String(e).replace(/"/g, "")
                  },
                  escape: function(e, t) {
                      if (t) return e;
                      var n = {
                          "<": "&lt;",
                          ">": "&gt;",
                          '"': "&quot;",
                          "'": "&#x27;",
                          "`": "&#x60;"
                      };
                      return /[&<>"'`]/.test(e) ? (e = e.replace(/&(?![a-z0-9#]{1,6};)/, "&amp;")).replace(/[<>"'`]/g, function(e) {
                          return n[e]
                      }) : e
                  }
              },
              can: {
                  leftBodyScrollbar: function() {
                      return u.cache.leftBodyScrollbar === U && (u.cache.leftBodyScrollbar = u.is.rtl() && (u.is.iframe && !u.is.firefox() || u.is.safari() || u.is.edge() || u.is.ie())), u.cache.leftBodyScrollbar
                  },
                  useFlex: function() {
                      return "auto" === d.useFlex ? d.detachable && !u.is.ie() : (d.useFlex && u.is.ie() ? u.debug("useFlex true is not supported in IE") : d.useFlex && !d.detachable && u.debug("useFlex true in combination with detachable false is not supported"), d.useFlex)
                  },
                  fit: function() {
                      var e = u.cache.contextHeight,
                          t = u.cache.contextHeight / 2,
                          n = u.cache.topOffset,
                          i = u.cache.scrollHeight,
                          o = u.cache.height,
                          a = d.padding;
                      return o < i ? t + n + i + a < e : o + 2 * a < e
                  }
              },
              has: {
                  configActions: function() {
                      return Array.isArray(d.actions) && 0 < d.actions.length
                  }
              },
              is: {
                  active: function() {
                      return y.hasClass(m.active)
                  },
                  ie: function() {
                      if (u.cache.isIE === U) {
                          var e = !N.ActiveXObject && "ActiveXObject" in N,
                              t = "ActiveXObject" in N;
                          u.cache.isIE = e || t
                      }
                      return u.cache.isIE
                  },
                  animating: function() {
                      return y.transition("is supported") ? y.transition("is animating") : y.is(":visible")
                  },
                  scrolling: function() {
                      return i.hasClass(m.scrolling)
                  },
                  modernBrowser: function() {
                      return !(N.ActiveXObject || "ActiveXObject" in N)
                  },
                  rtl: function() {
                      return u.cache.isRTL === U && (u.cache.isRTL = "rtl" === O.attr("dir") || "rtl" === O.css("direction")), u.cache.isRTL
                  },
                  safari: function() {
                      return u.cache.isSafari === U && (u.cache.isSafari = /constructor/i.test(N.HTMLElement) || !!N.ApplePaySession), u.cache.isSafari
                  },
                  edge: function() {
                      return u.cache.isEdge === U && (u.cache.isEdge = !!N.setImmediate && !u.is.ie()), u.cache.isEdge
                  },
                  firefox: function() {
                      return u.cache.isFirefox === U && (u.cache.isFirefox = !!N.InstallTrigger), u.cache.isFirefox
                  },
                  iframe: function() {
                      return !(self === top)
                  }
              },
              set: {
                  autofocus: function() {
                      var e = y.find("[tabindex], :input").filter(":visible").filter(function() {
                              return 0 === z(this).closest(".disabled").length
                          }),
                          t = e.filter("[autofocus]"),
                          n = 0 < t.length ? t.first() : e.first();
                      0 < n.length && n.focus()
                  },
                  bodyMargin: function() {
                      var n = u.can.leftBodyScrollbar() ? "left" : "right";
                      (d.detachable || u.can.fit()) && O.css("margin-" + n, D + "px"), O.find(f.bodyFixed.replace("right", n)).each(function() {
                          var e = z(this),
                              t = "fixed" === e.css("position") ? "padding-" + n : n;
                          e.css(t, "calc(" + e.css(t) + " + " + D + "px)")
                      })
                  },
                  clickaway: function() {
                      d.detachable || y.on("mousedown" + t, u.event.mousedown), n.on("mousedown" + t, u.event.mousedown), n.on("mouseup" + t, u.event.mouseup)
                  },
                  dimmerSettings: function() {
                      if (z.fn.dimmer !== U) {
                          var e = {
                                  debug: d.debug,
                                  dimmerName: "modals",
                                  closable: "auto",
                                  useFlex: u.can.useFlex(),
                                  duration: {
                                      show: d.transition.showDuration || d.duration,
                                      hide: d.transition.hideDuration || d.duration
                                  }
                              },
                              t = z.extend(!0, e, d.dimmerSettings);
                          d.inverted && (t.variation = t.variation !== U ? t.variation + " inverted" : "inverted"), x.dimmer("setting", t)
                      } else u.error(h.dimmer)
                  },
                  dimmerStyles: function() {
                      d.inverted ? n.addClass(m.inverted) : n.removeClass(m.inverted), d.blurring ? i.addClass(m.blurring) : i.removeClass(m.blurring)
                  },
                  modalOffset: function() {
                      if (d.detachable) y.css({
                          marginTop: !y.hasClass("aligned") && u.can.fit() ? -u.cache.height / 2 : d.padding / 2,
                          marginLeft: -u.cache.width / 2
                      });
                      else {
                          var e = u.can.fit();
                          y.css({
                              top: !y.hasClass("aligned") && e ? z(H).scrollTop() + (u.cache.contextHeight - u.cache.height) / 2 : !e || y.hasClass("top") ? z(H).scrollTop() + d.padding : z(H).scrollTop() + (u.cache.contextHeight - u.cache.height - d.padding),
                              marginLeft: -u.cache.width / 2
                          })
                      }
                      u.verbose("Setting modal offset for legacy mode")
                  },
                  screenHeight: function() {
                      u.can.fit() ? O.css("height", "") : y.hasClass("bottom") || (u.debug("Modal is taller than page content, resizing page height"), O.css("height", u.cache.height + 2 * d.padding))
                  },
                  active: function() {
                      y.addClass(m.active + " " + m.front), a.filter("." + m.active).removeClass(m.front)
                  },
                  scrolling: function() {
                      i.addClass(m.scrolling), y.addClass(m.scrolling), u.unbind.scrollLock()
                  },
                  legacy: function() {
                      y.addClass(m.legacy)
                  },
                  type: function() {
                      u.can.fit() ? (u.verbose("Modal fits on screen"), u.others.active() || u.others.animating() || (u.remove.scrolling(), u.bind.scrollLock())) : y.hasClass("bottom") ? u.verbose("Bottom aligned modal not fitting on screen is unsupported for scrolling") : (u.verbose("Modal cannot fit on screen setting to scrolling"), u.set.scrolling())
                  },
                  undetached: function() {
                      i.addClass(m.undetached)
                  }
              },
              setting: function(e, t) {
                  if (u.debug("Changing setting", e, t), z.isPlainObject(e)) z.extend(!0, d, e);
                  else {
                      if (t === U) return d[e];
                      z.isPlainObject(d[e]) ? z.extend(!0, d[e], t) : d[e] = t
                  }
              },
              internal: function(e, t) {
                  if (z.isPlainObject(e)) z.extend(!0, u, e);
                  else {
                      if (t === U) return u[e];
                      u[e] = t
                  }
              },
              debug: function() {
                  !d.silent && d.debug && (d.performance ? u.performance.log(arguments) : (u.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), u.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !d.silent && d.verbose && d.debug && (d.performance ? u.performance.log(arguments) : (u.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), u.verbose.apply(console, arguments)))
              },
              error: function() {
                  d.silent || (u.error = Function.prototype.bind.call(console.error, console, d.name + ":"), u.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      d.performance && (n = (t = (new Date).getTime()) - (M || t), M = t, I.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: w,
                          "Execution Time": n
                      })), clearTimeout(u.performance.timer), u.performance.timer = setTimeout(u.performance.display, 500)
                  },
                  display: function() {
                      var e = d.name + ":",
                          n = 0;
                      M = !1, clearTimeout(u.performance.timer), z.each(I, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", R && (e += " '" + R + "'"), (console.group !== U || console.table !== U) && 0 < I.length && (console.groupCollapsed(e), console.table ? console.table(I) : z.each(I, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), I = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = k;
                  return e = e || V, t = w || t, "string" == typeof i && r !== U && (i = i.split(/[\. ]/), o = i.length - 1, z.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (z.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== U) return a = r[n], !1;
                          if (!z.isPlainObject(r[t]) || e == o) return r[t] !== U && (a = r[t]), !1;
                          r = r[t]
                      }
                  })), z.isFunction(a) ? n = a.apply(t, e) : a !== U && (n = a), Array.isArray(E) ? E.push(n) : E !== U ? E = [E, n] : n !== U && (E = n), a
              }
          }, L ? (k === U && (z.isFunction(d.templates[j]) && (d.autoShow = !0, d.className.modal = d.className.template, d = z.extend(!0, {}, d, d.templates[j].apply(u, V)), m = d.className, g = d.namespace, p = d.fields, h = d.error), u.initialize()), z.isFunction(d.templates[j]) || u.invoke(j)) : (k !== U && k.invoke("destroy"), u.initialize(), E = y)
      }), E !== U ? E : this
  }, z.fn.modal.settings = {
      name: "Modal",
      namespace: "modal",
      useFlex: "auto",
      offset: 0,
      silent: !1,
      debug: !1,
      verbose: !1,
      performance: !0,
      observeChanges: !1,
      allowMultiple: !1,
      detachable: !0,
      closable: !0,
      autofocus: !0,
      restoreFocus: !0,
      autoShow: !1,
      inverted: !1,
      blurring: !1,
      centered: !0,
      dimmerSettings: {
          closable: !1,
          useCSS: !0
      },
      keyboardShortcuts: !0,
      context: "body",
      queue: !1,
      duration: 500,
      transition: "scale",
      padding: 50,
      scrollbarWidth: 10,
      title: "",
      content: "",
      class: "",
      classTitle: "",
      classContent: "",
      classActions: "",
      closeIcon: !1,
      actions: !1,
      preserveHTML: !0,
      fields: {
          class: "class",
          text: "text",
          icon: "icon",
          click: "click"
      },
      onShow: function() {},
      onVisible: function() {},
      onHide: function() {
          return !0
      },
      onHidden: !1,
      onApprove: function() {
          return !0
      },
      onDeny: function() {
          return !0
      },
      selector: {
          title: "> .header",
          content: "> .content",
          actions: "> .actions",
          close: "> .close",
          approve: ".actions .positive, .actions .approve, .actions .ok",
          deny: ".actions .negative, .actions .deny, .actions .cancel",
          modal: ".ui.modal",
          dimmer: "> .ui.dimmer",
          bodyFixed: "> .ui.fixed.menu, > .ui.right.toast-container, > .ui.right.sidebar, > .ui.fixed.nag, > .ui.fixed.nag > .close",
          prompt: ".ui.input > input"
      },
      error: {
          dimmer: "UI Dimmer, a required component is not included in this page",
          method: "The method you called is not defined.",
          notFound: "The element you specified could not be found"
      },
      className: {
          active: "active",
          animating: "animating",
          blurring: "blurring",
          inverted: "inverted",
          legacy: "legacy",
          loading: "loading",
          scrolling: "scrolling",
          undetached: "undetached",
          front: "front",
          close: "close icon",
          button: "ui button",
          modal: "ui modal",
          title: "header",
          content: "content",
          actions: "actions",
          template: "ui tiny modal",
          ok: "positive",
          cancel: "negative",
          prompt: "ui fluid input"
      },
      text: {
          ok: "Ok",
          cancel: "Cancel"
      }
  }, z.fn.modal.settings.templates = {
      getArguments: function(e) {
          var t = [].slice.call(e);
          return z.isPlainObject(t[0]) ? z.extend({
              handler: function() {},
              content: "",
              title: ""
          }, t[0]) : (z.isFunction(t[t.length - 1]) || t.push(function() {}), {
              handler: t.pop(),
              content: t.pop() || "",
              title: t.pop() || ""
          })
      },
      alert: function() {
          var e = this.get.settings(),
              t = e.templates.getArguments(arguments);
          return {
              title: t.title,
              content: t.content,
              actions: [{
                  text: e.text.ok,
                  class: e.className.ok,
                  click: t.handler
              }]
          }
      },
      confirm: function() {
          var e = this.get.settings(),
              t = e.templates.getArguments(arguments);
          return {
              title: t.title,
              content: t.content,
              actions: [{
                  text: e.text.ok,
                  class: e.className.ok,
                  click: function() {
                      t.handler(!0)
                  }
              }, {
                  text: e.text.cancel,
                  class: e.className.cancel,
                  click: function() {
                      t.handler(!1)
                  }
              }]
          }
      },
      prompt: function() {
          var n = this,
              e = this.get.settings(),
              i = e.templates.getArguments(arguments);
          return 0 === z(z.parseHTML(i.content)).filter(".ui.input").length && (i.content += '<p><div class="' + e.className.prompt + '"><input placeholder="' + this.helpers.deQuote(i.placeholder || "") + '" type="text" value="' + this.helpers.deQuote(i.defaultValue || "") + '"></div></p>'), {
              title: i.title,
              content: i.content,
              actions: [{
                  text: e.text.ok,
                  class: e.className.ok,
                  click: function() {
                      var e = n.get.settings(),
                          t = n.get.element().find(e.selector.prompt)[0];
                      i.handler(z(t).val())
                  }
              }, {
                  text: e.text.cancel,
                  class: e.className.cancel,
                  click: function() {
                      i.handler(null)
                  }
              }]
          }
      }
  }
}(jQuery, window, document),
function(x, C, w, k) {
  "use strict";
  x.isFunction = x.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, C = void 0 !== C && C.Math == Math ? C : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), x.fn.nag = function(f) {
      var m, e = x(this),
          g = e.selector || "",
          p = (new Date).getTime(),
          h = [],
          v = f,
          b = "string" == typeof v,
          y = [].slice.call(arguments, 1);
      return e.each(function() {
          var i, s, o = x.isPlainObject(f) ? x.extend(!0, {}, x.fn.nag.settings, f) : x.extend({}, x.fn.nag.settings),
              e = o.selector,
              l = o.error,
              t = o.namespace,
              n = "." + t,
              a = t + "-module",
              r = x(this),
              c = o.context ? x(o.context) : x("body"),
              u = this,
              d = r.data(a);
          s = {
              initialize: function() {
                  s.verbose("Initializing element"), i = s.get.storage(), r.on("click" + n, e.close, s.dismiss).data(a, s), o.detachable && r.parent()[0] !== c[0] && r.detach().prependTo(c), 0 < o.displayTime && setTimeout(s.hide, o.displayTime), s.show()
              },
              destroy: function() {
                  s.verbose("Destroying instance"), r.removeData(a).off(n)
              },
              show: function() {
                  if (s.should.show() && !r.is(":visible")) {
                      if (!1 === o.onShow.call(u)) return s.debug("onShow callback returned false, cancelling nag animation"), !1;
                      s.debug("Showing nag", o.animation.show), "fade" === o.animation.show ? r.fadeIn(o.duration, o.easing, o.onVisible) : r.slideDown(o.duration, o.easing, o.onVisible)
                  }
              },
              hide: function() {
                  if (!1 === o.onHide.call(u)) return s.debug("onHide callback returned false, cancelling nag animation"), !1;
                  s.debug("Hiding nag", o.animation.hide), "fade" === o.animation.hide ? r.fadeOut(o.duration, o.easing, o.onHidden) : r.slideUp(o.duration, o.easing, o.onHidden)
              },
              dismiss: function(e) {
                  !1 !== s.hide() && o.storageMethod && (s.debug("Dismissing nag", o.storageMethod, o.key, o.value, o.expires), s.storage.set(o.key, o.value)), e.stopImmediatePropagation(), e.preventDefault()
              },
              should: {
                  show: function() {
                      return o.persist ? (s.debug("Persistent nag is set, can show nag"), !0) : s.storage.get(o.key) != o.value.toString() ? (s.debug("Stored value is not set, can show nag", s.storage.get(o.key)), !0) : (s.debug("Stored value is set, cannot show nag", s.storage.get(o.key)), !1)
                  }
              },
              get: {
                  expirationDate: function(e) {
                      if ("number" == typeof e && (e = new Date(Date.now() + 864e5 * e)), e instanceof Date && e.getTime()) return e.toUTCString();
                      s.error(l.expiresFormat)
                  },
                  storage: function() {
                      return "localstorage" === o.storageMethod && C.localStorage !== k ? (s.debug("Using local storage"), C.localStorage) : "sessionstorage" === o.storageMethod && C.sessionStorage !== k ? (s.debug("Using session storage"), C.sessionStorage) : "cookie" in w ? (s.debug("Using cookie"), {
                          setItem: function(e, t, n) {
                              e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape), t = encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
                              var i = "";
                              for (var o in n) n.hasOwnProperty(o) && (i += "; " + o, "string" == typeof n[o] && (i += "=" + n[o].split(";")[0]));
                              w.cookie = e + "=" + t + i
                          },
                          getItem: function(e) {
                              for (var t = w.cookie.split("; "), n = 0, i = t.length; n < i; n++) {
                                  var o = t[n].split("=");
                                  if (e === o[0].replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)) return o[1] || ""
                              }
                          },
                          removeItem: function(e, t) {
                              i.setItem(e, "", t)
                          }
                      }) : void s.error(l.noStorage)
                  },
                  storageOptions: function() {
                      var e = {};
                      return o.expires && (e.expires = s.get.expirationDate(o.expires)), o.domain && (e.domain = o.domain), o.path && (e.path = o.path), o.secure && (e.secure = o.secure), o.samesite && (e.samesite = o.samesite), e
                  }
              },
              clear: function() {
                  s.storage.remove(o.key)
              },
              storage: {
                  set: function(e, t) {
                      var n = s.get.storageOptions();
                      i === C.localStorage && n.expires && (s.debug("Storing expiration value in localStorage", e, n.expires), i.setItem(e + o.expirationKey, n.expires)), s.debug("Value stored", e, t);
                      try {
                          i.setItem(e, t, n)
                      } catch (e) {
                          s.error(l.setItem, e)
                      }
                  },
                  get: function(e) {
                      var t;
                      if (t = i.getItem(e), i === C.localStorage) {
                          var n = i.getItem(e + o.expirationKey);
                          null !== n && n !== k && new Date(n) < new Date && (s.debug("Value in localStorage has expired. Deleting key", e), s.storage.remove(e), t = null)
                      }
                      return "undefined" != t && "null" != t && t !== k && null !== t || (t = k), t
                  },
                  remove: function(e) {
                      var t = s.get.storageOptions();
                      t.expires = s.get.expirationDate(-1), i === C.localStorage && i.removeItem(e + o.expirationKey), i.removeItem(e, t)
                  }
              },
              setting: function(e, t) {
                  if (s.debug("Changing setting", e, t), x.isPlainObject(e)) x.extend(!0, o, e);
                  else {
                      if (t === k) return o[e];
                      x.isPlainObject(o[e]) ? x.extend(!0, o[e], t) : o[e] = t
                  }
              },
              internal: function(e, t) {
                  if (x.isPlainObject(e)) x.extend(!0, s, e);
                  else {
                      if (t === k) return s[e];
                      s[e] = t
                  }
              },
              debug: function() {
                  !o.silent && o.debug && (o.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, o.name + ":"), s.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !o.silent && o.verbose && o.debug && (o.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, o.name + ":"), s.verbose.apply(console, arguments)))
              },
              error: function() {
                  o.silent || (s.error = Function.prototype.bind.call(console.error, console, o.name + ":"), s.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      o.performance && (n = (t = (new Date).getTime()) - (p || t), p = t, h.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: u,
                          "Execution Time": n
                      })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500)
                  },
                  display: function() {
                      var e = o.name + ":",
                          n = 0;
                      p = !1, clearTimeout(s.performance.timer), x.each(h, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", g && (e += " '" + g + "'"), (console.group !== k || console.table !== k) && 0 < h.length && (console.groupCollapsed(e), console.table ? console.table(h) : x.each(h, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), h = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = d;
                  return e = e || y, t = u || t, "string" == typeof i && r !== k && (i = i.split(/[\. ]/), o = i.length - 1, x.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (x.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== k) return a = r[n], !1;
                          if (!x.isPlainObject(r[t]) || e == o) return r[t] !== k ? a = r[t] : s.error(l.method, i), !1;
                          r = r[t]
                      }
                  })), x.isFunction(a) ? n = a.apply(t, e) : a !== k && (n = a), Array.isArray(m) ? m.push(n) : m !== k ? m = [m, n] : n !== k && (m = n), a
              }
          }, b ? (d === k && s.initialize(), s.invoke(v)) : (d !== k && d.invoke("destroy"), s.initialize())
      }), m !== k ? m : this
  }, x.fn.nag.settings = {
      name: "Nag",
      silent: !1,
      debug: !1,
      verbose: !1,
      performance: !0,
      namespace: "Nag",
      persist: !1,
      displayTime: 0,
      animation: {
          show: "slide",
          hide: "slide"
      },
      context: !1,
      detachable: !1,
      expires: 30,
      domain: !1,
      path: "/",
      secure: !1,
      samesite: !1,
      storageMethod: "cookie",
      key: "nag",
      value: "dismiss",
      expirationKey: "ExpirationDate",
      error: {
          noStorage: "Unsupported storage method",
          method: "The method you called is not defined.",
          setItem: "Unexpected error while setting value",
          expiresFormat: '"expires" must be a number of days or a Date Object'
      },
      className: {
          bottom: "bottom",
          fixed: "fixed"
      },
      selector: {
          close: "> .close.icon"
      },
      duration: 500,
      easing: "easeOutQuad",
      onShow: function() {},
      onVisible: function() {},
      onHide: function() {},
      onHidden: function() {}
  }, x.extend(x.easing, {
      easeOutQuad: function(e, t, n, i, o) {
          return -i * (t /= o) * (t - 2) + n
      }
  })
}(jQuery, window, document),
function(L, V, q, z) {
  "use strict";
  L.isFunction = L.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, V = void 0 !== V && V.Math == Math ? V : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), L.fn.popup = function(T) {
      var S, e = L(this),
          D = L(q),
          A = L(V),
          E = L("body"),
          F = e.selector || "",
          P = "ontouchstart" in q.documentElement ? "touchstart" : "click",
          O = (new Date).getTime(),
          R = [],
          M = T,
          I = "string" == typeof M,
          j = [].slice.call(arguments, 1);
      return e.each(function() {
          var u, d, e, t, n, f, m = L.isPlainObject(T) ? L.extend(!0, {}, L.fn.popup.settings, T) : L.extend({}, L.fn.popup.settings),
              o = m.selector,
              g = m.className,
              p = m.error,
              h = m.metadata,
              i = m.namespace,
              a = "." + m.namespace,
              r = "module-" + i,
              v = L(this),
              s = L(m.context),
              l = L(m.scrollContext),
              b = L(m.boundary),
              y = m.target ? L(m.target) : v,
              x = 0,
              c = !1,
              C = !1,
              w = this,
              k = v.data(r);
          f = {
              initialize: function() {
                  f.debug("Initializing", v), f.createID(), f.bind.events(), !f.exists() && m.preserve && f.create(), m.observeChanges && f.observeChanges(), f.instantiate()
              },
              instantiate: function() {
                  f.verbose("Storing instance", f), k = f, v.data(r, k)
              },
              observeChanges: function() {
                  "MutationObserver" in V && ((e = new MutationObserver(f.event.documentChanged)).observe(q, {
                      childList: !0,
                      subtree: !0
                  }), f.debug("Setting up mutation observer", e))
              },
              refresh: function() {
                  m.popup ? u = L(m.popup).eq(0) : m.inline && (u = y.nextAll(o.popup).eq(0), m.popup = u), m.popup ? (u.addClass(g.loading), d = f.get.offsetParent(), u.removeClass(g.loading), m.movePopup && f.has.popup() && f.get.offsetParent(u)[0] !== d[0] && (f.debug("Moving popup to the same offset parent as target"), u.detach().appendTo(d))) : d = m.inline ? f.get.offsetParent(y) : f.has.popup() ? f.get.offsetParent(u) : E, d.is("html") && d[0] !== E[0] && (f.debug("Setting page as offset parent"), d = E), f.get.variation() && f.set.variation()
              },
              reposition: function() {
                  f.refresh(), f.set.position()
              },
              destroy: function() {
                  f.debug("Destroying previous module"), e && e.disconnect(), u && !m.preserve && f.removePopup(), clearTimeout(f.hideTimer), clearTimeout(f.showTimer), f.unbind.close(), f.unbind.events(), v.removeData(r)
              },
              event: {
                  start: function(e) {
                      var t = L.isPlainObject(m.delay) ? m.delay.show : m.delay;
                      clearTimeout(f.hideTimer), (!C || C && m.addTouchEvents) && (f.showTimer = setTimeout(f.show, t))
                  },
                  end: function() {
                      var e = L.isPlainObject(m.delay) ? m.delay.hide : m.delay;
                      clearTimeout(f.showTimer), f.hideTimer = setTimeout(f.hide, e)
                  },
                  touchstart: function(e) {
                      C = !0, m.addTouchEvents && f.show()
                  },
                  resize: function() {
                      f.is.visible() && f.set.position()
                  },
                  documentChanged: function(e) {
                      [].forEach.call(e, function(e) {
                          e.removedNodes && [].forEach.call(e.removedNodes, function(e) {
                              (e == w || 0 < L(e).find(w).length) && (f.debug("Element removed from DOM, tearing down events"), f.destroy())
                          })
                      })
                  },
                  hideGracefully: function(e) {
                      var t = L(e.target),
                          n = L.contains(q.documentElement, e.target),
                          i = 0 < t.closest(o.popup).length;
                      e && !i && n ? (f.debug("Click occurred outside popup hiding popup"), f.hide()) : f.debug("Click was inside popup, keeping popup open")
                  }
              },
              create: function() {
                  var e = f.get.html(),
                      t = f.get.title(),
                      n = f.get.content();
                  e || n || t ? (f.debug("Creating pop-up html"), e = e || m.templates.popup({
                      title: t,
                      content: n
                  }), u = L("<div/>").addClass(g.popup).data(h.activator, v).html(e), m.inline ? (f.verbose("Inserting popup element inline", u), u.insertAfter(v)) : (f.verbose("Appending popup element to body", u), u.appendTo(s)), f.refresh(), f.set.variation(), m.hoverable && f.bind.popup(), m.onCreate.call(u, w)) : m.popup ? (L(m.popup).data(h.activator, v), f.verbose("Used popup specified in settings"), f.refresh(), m.hoverable && f.bind.popup()) : 0 !== y.next(o.popup).length ? (f.verbose("Pre-existing popup found"), m.inline = !0, m.popup = y.next(o.popup).data(h.activator, v), f.refresh(), m.hoverable && f.bind.popup()) : f.debug("No content specified skipping display", w)
              },
              createID: function() {
                  n = (Math.random().toString(16) + "000000000").substr(2, 8), t = "." + n, f.verbose("Creating unique id for element", n)
              },
              toggle: function() {
                  f.debug("Toggling pop-up"), f.is.hidden() ? (f.debug("Popup is hidden, showing pop-up"), f.unbind.close(), f.show()) : (f.debug("Popup is visible, hiding pop-up"), f.hide())
              },
              show: function(e) {
                  if (e = e || function() {}, f.debug("Showing pop-up", m.transition), f.is.hidden() && (!f.is.active() || !f.is.dropdown())) {
                      if (f.exists() || f.create(), !1 === m.onShow.call(u, w)) return void f.debug("onShow callback returned false, cancelling popup animation");
                      m.preserve || m.popup || f.refresh(), u && f.set.position() && (f.save.conditions(), m.exclusive && f.hideAll(), f.animate.show(e))
                  }
              },
              hide: function(e) {
                  if (e = e || function() {}, f.is.visible() || f.is.animating()) {
                      if (!1 === m.onHide.call(u, w)) return void f.debug("onHide callback returned false, cancelling popup animation");
                      f.remove.visible(), f.unbind.close(), f.restore.conditions(), f.animate.hide(e)
                  }
              },
              hideAll: function() {
                  L(o.popup).filter("." + g.popupVisible).each(function() {
                      L(this).data(h.activator).popup("hide")
                  })
              },
              exists: function() {
                  return !!u && (m.inline || m.popup ? f.has.popup() : 1 <= u.closest(s).length)
              },
              removePopup: function() {
                  f.has.popup() && !m.popup && (f.debug("Removing popup", u), u.remove(), u = z, m.onRemove.call(u, w))
              },
              save: {
                  conditions: function() {
                      f.cache = {
                          title: v.attr("title")
                      }, f.cache.title && v.removeAttr("title"), f.verbose("Saving original attributes", f.cache.title)
                  }
              },
              restore: {
                  conditions: function() {
                      return f.cache && f.cache.title && (v.attr("title", f.cache.title), f.verbose("Restoring original attributes", f.cache.title)), !0
                  }
              },
              supports: {
                  svg: function() {
                      return "undefined" != typeof SVGGraphicsElement
                  }
              },
              animate: {
                  show: function(e) {
                      e = L.isFunction(e) ? e : function() {}, m.transition && L.fn.transition !== z && v.transition("is supported") ? (f.set.visible(), u.transition({
                          animation: (m.transition.showMethod || m.transition) + " in",
                          queue: !1,
                          debug: m.debug,
                          verbose: m.verbose,
                          duration: m.transition.showDuration || m.duration,
                          onComplete: function() {
                              f.bind.close(), e.call(u, w), m.onVisible.call(u, w)
                          }
                      })) : f.error(p.noTransition)
                  },
                  hide: function(e) {
                      e = L.isFunction(e) ? e : function() {}, f.debug("Hiding pop-up"), m.transition && L.fn.transition !== z && v.transition("is supported") ? u.transition({
                          animation: (m.transition.hideMethod || m.transition) + " out",
                          queue: !1,
                          duration: m.transition.hideDuration || m.duration,
                          debug: m.debug,
                          verbose: m.verbose,
                          onComplete: function() {
                              f.reset(), e.call(u, w), m.onHidden.call(u, w)
                          }
                      }) : f.error(p.noTransition)
                  }
              },
              change: {
                  content: function(e) {
                      u.html(e)
                  }
              },
              get: {
                  html: function() {
                      return v.removeData(h.html), v.data(h.html) || m.html
                  },
                  title: function() {
                      return v.removeData(h.title), v.data(h.title) || m.title
                  },
                  content: function() {
                      return v.removeData(h.content), v.data(h.content) || m.content || v.attr("title")
                  },
                  variation: function() {
                      return v.removeData(h.variation), v.data(h.variation) || m.variation
                  },
                  popup: function() {
                      return u
                  },
                  popupOffset: function() {
                      return u.offset()
                  },
                  calculations: function() {
                      var e, t = f.get.offsetParent(u),
                          n = y[0],
                          i = b[0] == V,
                          o = y.offset(),
                          a = m.inline || m.popup && m.movePopup ? y.offsetParent().offset() : {
                              top: 0,
                              left: 0
                          },
                          r = i ? {
                              top: 0,
                              left: 0
                          } : b.offset(),
                          s = {},
                          l = i ? {
                              top: A.scrollTop(),
                              left: A.scrollLeft()
                          } : {
                              top: 0,
                              left: 0
                          };
                      if (s = {
                              target: {
                                  element: y[0],
                                  width: y.outerWidth(),
                                  height: y.outerHeight(),
                                  top: o.top - a.top,
                                  left: o.left - a.left,
                                  margin: {}
                              },
                              popup: {
                                  width: u.outerWidth(),
                                  height: u.outerHeight()
                              },
                              parent: {
                                  width: d.outerWidth(),
                                  height: d.outerHeight()
                              },
                              screen: {
                                  top: r.top,
                                  left: r.left,
                                  scroll: {
                                      top: l.top,
                                      left: l.left
                                  },
                                  width: b.width(),
                                  height: b.height()
                              }
                          }, t.get(0) !== d.get(0)) {
                          var c = t.offset();
                          s.target.top -= c.top, s.target.left -= c.left, s.parent.width = t.outerWidth(), s.parent.height = t.outerHeight()
                      }
                      return m.setFluidWidth && f.is.fluid() && (s.container = {
                          width: u.parent().outerWidth()
                      }, s.popup.width = s.container.width), s.target.margin.top = m.inline ? parseInt(V.getComputedStyle(n).getPropertyValue("margin-top"), 10) : 0, s.target.margin.left = m.inline ? f.is.rtl() ? parseInt(V.getComputedStyle(n).getPropertyValue("margin-right"), 10) : parseInt(V.getComputedStyle(n).getPropertyValue("margin-left"), 10) : 0, e = s.screen, s.boundary = {
                          top: e.top + e.scroll.top,
                          bottom: e.top + e.scroll.top + e.height,
                          left: e.left + e.scroll.left,
                          right: e.left + e.scroll.left + e.width
                      }, s
                  },
                  id: function() {
                      return n
                  },
                  startEvent: function() {
                      return "hover" == m.on ? "mouseenter" : "focus" == m.on && "focus"
                  },
                  scrollEvent: function() {
                      return "scroll"
                  },
                  endEvent: function() {
                      return "hover" == m.on ? "mouseleave" : "focus" == m.on && "blur"
                  },
                  distanceFromBoundary: function(e, t) {
                      var n, i, o = {};
                      return n = (t = t || f.get.calculations()).popup, i = t.boundary, e && (o = {
                          top: e.top - i.top,
                          left: e.left - i.left,
                          right: i.right - (e.left + n.width),
                          bottom: i.bottom - (e.top + n.height)
                      }, f.verbose("Distance from boundaries determined", e, o)), o
                  },
                  offsetParent: function(e) {
                      var t = (e !== z ? e[0] : y[0]).parentNode,
                          n = L(t);
                      if (t)
                          for (var i = "none" === n.css("transform"), o = "static" === n.css("position"), a = n.is("body"); t && !a && o && i;) t = t.parentNode, i = "none" === (n = L(t)).css("transform"), o = "static" === n.css("position"), a = n.is("body");
                      return n && 0 < n.length ? n : L()
                  },
                  positions: function() {
                      return {
                          "top left": !1,
                          "top center": !1,
                          "top right": !1,
                          "bottom left": !1,
                          "bottom center": !1,
                          "bottom right": !1,
                          "left center": !1,
                          "right center": !1
                      }
                  },
                  nextPosition: function(e) {
                      var t = e.split(" "),
                          n = t[0],
                          i = t[1],
                          o = "top" == n || "bottom" == n,
                          a = !1,
                          r = !1,
                          s = !1;
                      return c || (f.verbose("All available positions available"), c = f.get.positions()), f.debug("Recording last position tried", e), c[e] = !0, "opposite" === m.prefer && (s = (s = [{
                          top: "bottom",
                          bottom: "top",
                          left: "right",
                          right: "left"
                      } [n], i]).join(" "), a = !0 === c[s], f.debug("Trying opposite strategy", s)), "adjacent" === m.prefer && o && (s = (s = [n, {
                          left: "center",
                          center: "right",
                          right: "left"
                      } [i]]).join(" "), r = !0 === c[s], f.debug("Trying adjacent strategy", s)), (r || a) && (f.debug("Using backup position", s), s = {
                          "top left": "top center",
                          "top center": "top right",
                          "top right": "right center",
                          "right center": "bottom right",
                          "bottom right": "bottom center",
                          "bottom center": "bottom left",
                          "bottom left": "left center",
                          "left center": "top left"
                      } [e]), s
                  }
              },
              set: {
                  position: function(e, t) {
                      if (0 !== y.length && 0 !== u.length) {
                          var n, i, o, a, r, s, l, c;
                          if (t = t || f.get.calculations(), e = e || v.data(h.position) || m.position, n = v.data(h.offset) || m.offset, i = m.distanceAway, o = t.target, a = t.popup, r = t.parent, f.should.centerArrow(t) && (f.verbose("Adjusting offset to center arrow on small target element"), "top left" != e && "bottom left" != e || (n += o.width / 2, n -= m.arrowPixelsFromEdge), "top right" != e && "bottom right" != e || (n -= o.width / 2, n += m.arrowPixelsFromEdge)), 0 === o.width && 0 === o.height && !f.is.svg(o.element)) return f.debug("Popup target is hidden, no action taken"), !1;
                          switch (m.inline && (f.debug("Adding margin to calculation", o.margin), "left center" == e || "right center" == e ? (n += o.margin.top, i += -o.margin.left) : "top left" == e || "top center" == e || "top right" == e ? (n += o.margin.left, i -= o.margin.top) : (n += o.margin.left, i += o.margin.top)), f.debug("Determining popup position from calculations", e, t), f.is.rtl() && (e = e.replace(/left|right/g, function(e) {
                                  return "left" == e ? "right" : "left"
                              }), f.debug("RTL: Popup position updated", e)), x == m.maxSearchDepth && "string" == typeof m.lastResort && (e = m.lastResort), e) {
                              case "top left":
                                  s = {
                                      top: "auto",
                                      bottom: r.height - o.top + i,
                                      left: o.left + n,
                                      right: "auto"
                                  };
                                  break;
                              case "top center":
                                  s = {
                                      bottom: r.height - o.top + i,
                                      left: o.left + o.width / 2 - a.width / 2 + n,
                                      top: "auto",
                                      right: "auto"
                                  };
                                  break;
                              case "top right":
                                  s = {
                                      bottom: r.height - o.top + i,
                                      right: r.width - o.left - o.width - n,
                                      top: "auto",
                                      left: "auto"
                                  };
                                  break;
                              case "left center":
                                  s = {
                                      top: o.top + o.height / 2 - a.height / 2 + n,
                                      right: r.width - o.left + i,
                                      left: "auto",
                                      bottom: "auto"
                                  };
                                  break;
                              case "right center":
                                  s = {
                                      top: o.top + o.height / 2 - a.height / 2 + n,
                                      left: o.left + o.width + i,
                                      bottom: "auto",
                                      right: "auto"
                                  };
                                  break;
                              case "bottom left":
                                  s = {
                                      top: o.top + o.height + i,
                                      left: o.left + n,
                                      bottom: "auto",
                                      right: "auto"
                                  };
                                  break;
                              case "bottom center":
                                  s = {
                                      top: o.top + o.height + i,
                                      left: o.left + o.width / 2 - a.width / 2 + n,
                                      bottom: "auto",
                                      right: "auto"
                                  };
                                  break;
                              case "bottom right":
                                  s = {
                                      top: o.top + o.height + i,
                                      right: r.width - o.left - o.width - n,
                                      left: "auto",
                                      bottom: "auto"
                                  }
                          }
                          if (s === z && f.error(p.invalidPosition, e), f.debug("Calculated popup positioning values", s), u.css(s).removeClass(g.position).addClass(e).addClass(g.loading), l = f.get.popupOffset(), c = f.get.distanceFromBoundary(l, t), !m.forcePosition && f.is.offstage(c, e)) {
                              if (f.debug("Position is outside viewport", e), x < m.maxSearchDepth) return x++, e = f.get.nextPosition(e), f.debug("Trying new position", e), !!u && f.set.position(e, t);
                              if (!m.lastResort) return f.debug("Popup could not find a position to display", u), f.error(p.cannotPlace, w), f.remove.attempts(), f.remove.loading(), f.reset(), m.onUnplaceable.call(u, w), !1;
                              f.debug("No position found, showing with last position")
                          }
                          return f.debug("Position is on stage", e), f.remove.attempts(), f.remove.loading(), m.setFluidWidth && f.is.fluid() && f.set.fluidWidth(t), !0
                      }
                      f.error(p.notFound)
                  },
                  fluidWidth: function(e) {
                      e = e || f.get.calculations(), f.debug("Automatically setting element width to parent width", e.parent.width), u.css("width", e.container.width)
                  },
                  variation: function(e) {
                      (e = e || f.get.variation()) && f.has.popup() && (f.verbose("Adding variation to popup", e), u.addClass(e))
                  },
                  visible: function() {
                      v.addClass(g.visible)
                  }
              },
              remove: {
                  loading: function() {
                      u.removeClass(g.loading)
                  },
                  variation: function(e) {
                      (e = e || f.get.variation()) && (f.verbose("Removing variation", e), u.removeClass(e))
                  },
                  visible: function() {
                      v.removeClass(g.visible)
                  },
                  attempts: function() {
                      f.verbose("Resetting all searched positions"), x = 0, c = !1
                  }
              },
              bind: {
                  events: function() {
                      f.debug("Binding popup events to module"), "click" == m.on && v.on(P + a, f.toggle), "hover" == m.on && v.on("touchstart" + a, f.event.touchstart), f.get.startEvent() && v.on(f.get.startEvent() + a, f.event.start).on(f.get.endEvent() + a, f.event.end), m.target && f.debug("Target set to element", y), A.on("resize" + t, f.event.resize)
                  },
                  popup: function() {
                      f.verbose("Allowing hover events on popup to prevent closing"), u && f.has.popup() && u.on("mouseenter" + a, f.event.start).on("mouseleave" + a, f.event.end)
                  },
                  close: function() {
                      (!0 === m.hideOnScroll || "auto" == m.hideOnScroll && "click" != m.on) && f.bind.closeOnScroll(), f.is.closable() ? f.bind.clickaway() : "hover" == m.on && C && f.bind.touchClose()
                  },
                  closeOnScroll: function() {
                      f.verbose("Binding scroll close event to document"), l.one(f.get.scrollEvent() + t, f.event.hideGracefully)
                  },
                  touchClose: function() {
                      f.verbose("Binding popup touchclose event to document"), D.on("touchstart" + t, function(e) {
                          f.verbose("Touched away from popup"), f.event.hideGracefully.call(w, e)
                      })
                  },
                  clickaway: function() {
                      f.verbose("Binding popup close event to document"), D.on(P + t, function(e) {
                          f.verbose("Clicked away from popup"), f.event.hideGracefully.call(w, e)
                      })
                  }
              },
              unbind: {
                  events: function() {
                      A.off(t), v.off(a)
                  },
                  close: function() {
                      D.off(t), l.off(t)
                  }
              },
              has: {
                  popup: function() {
                      return u && 0 < u.length
                  }
              },
              should: {
                  centerArrow: function(e) {
                      return !f.is.basic() && e.target.width <= 2 * m.arrowPixelsFromEdge
                  }
              },
              is: {
                  closable: function() {
                      return "auto" == m.closable ? "hover" != m.on : m.closable
                  },
                  offstage: function(e, n) {
                      var i = [];
                      return L.each(e, function(e, t) {
                          t < -m.jitter && (f.debug("Position exceeds allowable distance from edge", e, t, n), i.push(e))
                      }), 0 < i.length
                  },
                  svg: function(e) {
                      return f.supports.svg() && e instanceof SVGGraphicsElement
                  },
                  basic: function() {
                      return v.hasClass(g.basic)
                  },
                  active: function() {
                      return v.hasClass(g.active)
                  },
                  animating: function() {
                      return u !== z && u.hasClass(g.animating)
                  },
                  fluid: function() {
                      return u !== z && u.hasClass(g.fluid)
                  },
                  visible: function() {
                      return u !== z && u.hasClass(g.popupVisible)
                  },
                  dropdown: function() {
                      return v.hasClass(g.dropdown)
                  },
                  hidden: function() {
                      return !f.is.visible()
                  },
                  rtl: function() {
                      return "rtl" === v.attr("dir") || "rtl" === v.css("direction")
                  }
              },
              reset: function() {
                  f.remove.visible(), m.preserve ? L.fn.transition !== z && u.transition("remove transition") : f.removePopup()
              },
              setting: function(e, t) {
                  if (L.isPlainObject(e)) L.extend(!0, m, e);
                  else {
                      if (t === z) return m[e];
                      m[e] = t
                  }
              },
              internal: function(e, t) {
                  if (L.isPlainObject(e)) L.extend(!0, f, e);
                  else {
                      if (t === z) return f[e];
                      f[e] = t
                  }
              },
              debug: function() {
                  !m.silent && m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !m.silent && m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)))
              },
              error: function() {
                  m.silent || (f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      m.performance && (n = (t = (new Date).getTime()) - (O || t), O = t, R.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: w,
                          "Execution Time": n
                      })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
                  },
                  display: function() {
                      var e = m.name + ":",
                          n = 0;
                      O = !1, clearTimeout(f.performance.timer), L.each(R, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", F && (e += " '" + F + "'"), (console.group !== z || console.table !== z) && 0 < R.length && (console.groupCollapsed(e), console.table ? console.table(R) : L.each(R, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), R = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = k;
                  return e = e || j, t = w || t, "string" == typeof i && r !== z && (i = i.split(/[\. ]/), o = i.length - 1, L.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (L.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== z) return a = r[n], !1;
                          if (!L.isPlainObject(r[t]) || e == o) return r[t] !== z && (a = r[t]), !1;
                          r = r[t]
                      }
                  })), L.isFunction(a) ? n = a.apply(t, e) : a !== z && (n = a), Array.isArray(S) ? S.push(n) : S !== z ? S = [S, n] : n !== z && (S = n), a
              }
          }, I ? (k === z && f.initialize(), f.invoke(M)) : (k !== z && k.invoke("destroy"), f.initialize())
      }), S !== z ? S : this
  }, L.fn.popup.settings = {
      name: "Popup",
      silent: !1,
      debug: !1,
      verbose: !1,
      performance: !0,
      namespace: "popup",
      observeChanges: !0,
      onCreate: function() {},
      onRemove: function() {},
      onShow: function() {},
      onVisible: function() {},
      onHide: function() {},
      onUnplaceable: function() {},
      onHidden: function() {},
      on: "hover",
      boundary: V,
      addTouchEvents: !0,
      position: "top left",
      forcePosition: !1,
      variation: "",
      movePopup: !0,
      target: !1,
      popup: !1,
      inline: !1,
      preserve: !1,
      hoverable: !1,
      content: !1,
      html: !1,
      title: !1,
      closable: !0,
      hideOnScroll: "auto",
      exclusive: !1,
      context: "body",
      scrollContext: V,
      prefer: "opposite",
      lastResort: !1,
      arrowPixelsFromEdge: 20,
      delay: {
          show: 50,
          hide: 70
      },
      setFluidWidth: !0,
      duration: 200,
      transition: "scale",
      distanceAway: 0,
      jitter: 2,
      offset: 0,
      maxSearchDepth: 15,
      error: {
          invalidPosition: "The position you specified is not a valid position",
          cannotPlace: "Popup does not fit within the boundaries of the viewport",
          method: "The method you called is not defined.",
          noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",
          notFound: "The target or popup you specified does not exist on the page"
      },
      metadata: {
          activator: "activator",
          content: "content",
          html: "html",
          offset: "offset",
          position: "position",
          title: "title",
          variation: "variation"
      },
      className: {
          active: "active",
          basic: "basic",
          animating: "animating",
          dropdown: "dropdown",
          fluid: "fluid",
          loading: "loading",
          popup: "ui popup",
          position: "top left center bottom right",
          visible: "visible",
          popupVisible: "visible"
      },
      selector: {
          popup: ".ui.popup"
      },
      templates: {
          escape: function(e) {
              var t = {
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&#x27;",
                  "`": "&#x60;"
              };
              return /[&<>"'`]/.test(e) ? (e = e.replace(/&(?![a-z0-9#]{1,6};)/, "&amp;")).replace(/[<>"'`]/g, function(e) {
                  return t[e]
              }) : e
          },
          popup: function(e) {
              var t = "",
                  n = L.fn.popup.settings.templates.escape;
              return typeof e !== z && (typeof e.title !== z && e.title && (e.title = n(e.title), t += '<div class="header">' + e.title + "</div>"), typeof e.content !== z && e.content && (e.content = n(e.content), t += '<div class="content">' + e.content + "</div>")), t
          }
      }
  }
}(jQuery, window, document),
function(T, e, S, D) {
  "use strict";
  T.isFunction = T.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), T.fn.progress = function(h) {
      var v, e = T(this),
          b = e.selector || "",
          y = (new Date).getTime(),
          x = [],
          C = h,
          w = "string" == typeof C,
          k = [].slice.call(arguments, 1);
      return e.each(function() {
          var c, s = T.isPlainObject(h) ? T.extend(!0, {}, T.fn.progress.settings, h) : T.extend({}, T.fn.progress.settings),
              n = s.className,
              t = s.metadata,
              e = s.namespace,
              i = s.selector,
              l = s.error,
              o = "." + e,
              a = "module-" + e,
              u = T(this),
              d = T(this).find(i.bar),
              r = T(this).find(i.progress),
              f = T(this).find(i.label),
              m = this,
              g = u.data(a),
              p = !1;
          c = {
              helper: {
                  sum: function(e) {
                      return Array.isArray(e) ? e.reduce(function(e, t) {
                          return e + Number(t)
                      }, 0) : 0
                  },
                  derivePrecision: function(e, t) {
                      for (var n = 0, i = 1, o = e / t; n < 10 && !(1 < (o *= i));) i = Math.pow(10, n++);
                      return i
                  },
                  forceArray: function(e) {
                      return Array.isArray(e) ? e : isNaN(e) ? "string" == typeof e ? e.split(",") : [] : [e]
                  }
              },
              initialize: function() {
                  c.set.duration(), c.set.transitionEvent(), c.debug(m), c.read.metadata(), c.read.settings(), c.instantiate()
              },
              instantiate: function() {
                  c.verbose("Storing instance of progress", c), g = c, u.data(a, c)
              },
              destroy: function() {
                  c.verbose("Destroying previous progress for", u), clearInterval(g.interval), c.remove.state(), u.removeData(a), g = D
              },
              reset: function() {
                  c.remove.nextValue(), c.update.progress(0)
              },
              complete: function(e) {
                  (c.percent === D || c.percent < 100) && (c.remove.progressPoll(), !0 !== e && c.set.percent(100))
              },
              read: {
                  metadata: function() {
                      var e = {
                          percent: c.helper.forceArray(u.data(t.percent)),
                          total: u.data(t.total),
                          value: c.helper.forceArray(u.data(t.value))
                      };
                      e.total !== D && (c.debug("Total value set from metadata", e.total), c.set.total(e.total)), 0 < e.value.length && (c.debug("Current value set from metadata", e.value), c.set.value(e.value), c.set.progress(e.value)), 0 < e.percent.length && (c.debug("Current percent value set from metadata", e.percent), c.set.percent(e.percent))
                  },
                  settings: function() {
                      !1 !== s.total && (c.debug("Current total set in settings", s.total), c.set.total(s.total)), !1 !== s.value && (c.debug("Current value set in settings", s.value), c.set.value(s.value), c.set.progress(c.value)), !1 !== s.percent && (c.debug("Current percent set in settings", s.percent), c.set.percent(s.percent))
                  }
              },
              bind: {
                  transitionEnd: function(t) {
                      var e = c.get.transitionEnd();
                      d.one(e + o, function(e) {
                          clearTimeout(c.failSafeTimer), t.call(this, e)
                      }), c.failSafeTimer = setTimeout(function() {
                          d.triggerHandler(e)
                      }, s.duration + s.failSafeDelay), c.verbose("Adding fail safe timer", c.timer)
                  }
              },
              increment: function(e) {
                  var t, n;
                  e = c.has.total() ? (t = c.get.value(), e || 1) : (t = c.get.percent(), e || c.get.randomValue()), n = t + e, c.debug("Incrementing percentage by", t, n, e), n = c.get.normalizedValue(n), c.set.progress(n)
              },
              decrement: function(e) {
                  var t, n;
                  c.get.total() ? (n = (t = c.get.value()) - (e = e || 1), c.debug("Decrementing value by", e, t)) : (n = (t = c.get.percent()) - (e = e || c.get.randomValue()), c.debug("Decrementing percentage by", e, t)), n = c.get.normalizedValue(n), c.set.progress(n)
              },
              has: {
                  progressPoll: function() {
                      return c.progressPoll
                  },
                  total: function() {
                      return !1 !== c.get.total()
                  }
              },
              get: {
                  text: function(e, t) {
                      var n = t || 0,
                          i = c.get.value(n),
                          o = c.get.total(),
                          a = p ? c.get.displayPercent(n) : c.get.percent(n),
                          r = !1 !== o ? Math.max(0, o - i) : 100 - a;
                      return e = (e = e || "").replace("{value}", i).replace("{total}", o || 0).replace("{left}", r).replace("{percent}", a).replace("{bar}", s.text.bars[n] || ""), c.verbose("Adding variables to progress bar text", e), e
                  },
                  normalizedValue: function(e) {
                      if (e < 0) return c.debug("Value cannot decrement below 0"), 0;
                      if (c.has.total()) {
                          if (e > c.total) return c.debug("Value cannot increment above total", c.total), c.total
                      } else if (100 < e) return c.debug("Value cannot increment above 100 percent"), 100;
                      return e
                  },
                  updateInterval: function() {
                      return "auto" == s.updateInterval ? s.duration : s.updateInterval
                  },
                  randomValue: function() {
                      return c.debug("Generating random increment percentage"), Math.floor(Math.random() * s.random.max + s.random.min)
                  },
                  numericValue: function(e) {
                      return "string" == typeof e ? "" !== e.replace(/[^\d.]/g, "") && +e.replace(/[^\d.]/g, "") : e
                  },
                  transitionEnd: function() {
                      var e, t = S.createElement("element"),
                          n = {
                              transition: "transitionend",
                              OTransition: "oTransitionEnd",
                              MozTransition: "transitionend",
                              WebkitTransition: "webkitTransitionEnd"
                          };
                      for (e in n)
                          if (t.style[e] !== D) return n[e]
                  },
                  displayPercent: function(e) {
                      var t = T(d[e]),
                          n = t.width(),
                          i = u.width(),
                          o = parseInt(t.css("min-width"), 10) < n ? n / i * 100 : c.percent;
                      return 0 < s.precision ? Math.round(o * (10 * s.precision)) / (10 * s.precision) : Math.round(o)
                  },
                  percent: function(e) {
                      return c.percent && c.percent[e || 0] || 0
                  },
                  value: function(e) {
                      return c.nextValue || c.value && c.value[e || 0] || 0
                  },
                  total: function() {
                      return c.total !== D && c.total
                  }
              },
              create: {
                  progressPoll: function() {
                      c.progressPoll = setTimeout(function() {
                          c.update.toNextValue(), c.remove.progressPoll()
                      }, c.get.updateInterval())
                  }
              },
              is: {
                  complete: function() {
                      return c.is.success() || c.is.warning() || c.is.error()
                  },
                  success: function() {
                      return u.hasClass(n.success)
                  },
                  warning: function() {
                      return u.hasClass(n.warning)
                  },
                  error: function() {
                      return u.hasClass(n.error)
                  },
                  active: function() {
                      return u.hasClass(n.active)
                  },
                  visible: function() {
                      return u.is(":visible")
                  }
              },
              remove: {
                  progressPoll: function() {
                      c.verbose("Removing progress poll timer"), c.progressPoll && (clearTimeout(c.progressPoll), delete c.progressPoll)
                  },
                  nextValue: function() {
                      c.verbose("Removing progress value stored for next update"), delete c.nextValue
                  },
                  state: function() {
                      c.verbose("Removing stored state"), delete c.total, delete c.percent, delete c.value
                  },
                  active: function() {
                      c.verbose("Removing active state"), u.removeClass(n.active)
                  },
                  success: function() {
                      c.verbose("Removing success state"), u.removeClass(n.success)
                  },
                  warning: function() {
                      c.verbose("Removing warning state"), u.removeClass(n.warning)
                  },
                  error: function() {
                      c.verbose("Removing error state"), u.removeClass(n.error)
                  }
              },
              set: {
                  barWidth: function(e) {
                      c.debug("set bar width with ", e), e = c.helper.forceArray(e);
                      var o = -1,
                          a = -1,
                          r = c.helper.sum(e),
                          s = d.length,
                          l = 1 < s,
                          t = e.map(function(e, t) {
                              var n = t === s - 1 && 0 === r,
                                  i = T(d[t]);
                              return 0 === e && l && !n ? i.css("display", "none") : (l && n && i.css("background", "transparent"), -1 == o && (o = t), a = t, i.css({
                                  display: "block",
                                  width: e + "%"
                              })), parseFloat(e)
                          });
                      e.forEach(function(e, t) {
                          T(d[t]).css({
                              borderTopLeftRadius: t == o ? "" : 0,
                              borderBottomLeftRadius: t == o ? "" : 0,
                              borderTopRightRadius: t == a ? "" : 0,
                              borderBottomRightRadius: t == a ? "" : 0
                          })
                      }), u.attr("data-percent", t)
                  },
                  duration: function(e) {
                      e = "number" == typeof(e = e || s.duration) ? e + "ms" : e, c.verbose("Setting progress bar transition duration", e), d.css({
                          "transition-duration": e
                      })
                  },
                  percent: function(e) {
                      e = c.helper.forceArray(e).map(function(e) {
                          return e = "string" == typeof e ? +e.replace("%", "") : e, s.limitValues ? Math.max(0, Math.min(100, e)) : e
                      });
                      var t = c.has.total(),
                          n = c.helper.sum(e),
                          i = 1 < e.length && t,
                          o = c.helper.sum(c.helper.forceArray(c.value));
                      if (i && o > c.total) c.error(l.sumExceedsTotal, o, c.total);
                      else if (!i && 100 < n) c.error(l.tooHigh, n);
                      else if (n < 0) c.error(l.tooLow, n);
                      else {
                          var a = 0 < s.precision ? s.precision : i ? c.helper.derivePrecision(Math.min.apply(null, c.value), c.total) : 0,
                              r = e.map(function(e) {
                                  return 0 < a ? Math.round(e * (10 * a)) / (10 * a) : Math.round(e)
                              });
                          c.percent = r, t && (c.value = e.map(function(e) {
                              return 0 < a ? Math.round(e / 100 * c.total * (10 * a)) / (10 * a) : Math.round(e / 100 * c.total * 10) / 10
                          })), c.set.barWidth(e), c.set.labelInterval()
                      }
                      s.onChange.call(m, e, c.value, c.total)
                  },
                  labelInterval: function() {
                      clearInterval(c.interval), c.bind.transitionEnd(function() {
                          c.verbose("Bar finished animating, removing continuous label updates"), clearInterval(c.interval), p = !1, c.set.labels()
                      }), p = !0, c.interval = setInterval(function() {
                          T.contains(S.documentElement, m) || (clearInterval(c.interval), p = !1), c.set.labels()
                      }, s.framerate)
                  },
                  labels: function() {
                      c.verbose("Setting both bar progress and outer label text"), c.set.barLabel(), c.set.state()
                  },
                  label: function(e) {
                      (e = e || "") && (e = c.get.text(e), c.verbose("Setting label to text", e), f.text(e))
                  },
                  state: function(e) {
                      100 === (e = e !== D ? e : c.helper.sum(c.percent)) ? s.autoSuccess && 1 === d.length && !(c.is.warning() || c.is.error() || c.is.success()) ? (c.set.success(), c.debug("Automatically triggering success at 100%")) : (c.verbose("Reached 100% removing active state"), c.remove.active(), c.remove.progressPoll()) : 0 < e ? (c.verbose("Adjusting active progress bar label", e), c.set.active()) : (c.remove.active(), c.set.label(s.text.active))
                  },
                  barLabel: function(i) {
                      r.map(function(e, t) {
                          var n = T(t);
                          i !== D ? n.text(c.get.text(i, e)) : "ratio" == s.label && c.has.total() ? (c.verbose("Adding ratio to bar label"), n.text(c.get.text(s.text.ratio, e))) : "percent" == s.label && (c.verbose("Adding percentage to bar label"), n.text(c.get.text(s.text.percent, e)))
                      })
                  },
                  active: function(e) {
                      e = e || s.text.active, c.debug("Setting active state"), s.showActivity && !c.is.active() && u.addClass(n.active), c.remove.warning(), c.remove.error(), c.remove.success(), (e = s.onLabelUpdate("active", e, c.value, c.total)) && c.set.label(e), c.bind.transitionEnd(function() {
                          s.onActive.call(m, c.value, c.total)
                      })
                  },
                  success: function(e, t) {
                      e = e || s.text.success || s.text.active, c.debug("Setting success state"), u.addClass(n.success), c.remove.active(), c.remove.warning(), c.remove.error(), c.complete(t), e = s.text.success ? s.onLabelUpdate("success", e, c.value, c.total) : s.onLabelUpdate("active", e, c.value, c.total), c.set.label(e), c.bind.transitionEnd(function() {
                          s.onSuccess.call(m, c.total)
                      })
                  },
                  warning: function(e, t) {
                      e = e || s.text.warning, c.debug("Setting warning state"), u.addClass(n.warning), c.remove.active(), c.remove.success(), c.remove.error(), c.complete(t), (e = s.onLabelUpdate("warning", e, c.value, c.total)) && c.set.label(e), c.bind.transitionEnd(function() {
                          s.onWarning.call(m, c.value, c.total)
                      })
                  },
                  error: function(e, t) {
                      e = e || s.text.error, c.debug("Setting error state"), u.addClass(n.error), c.remove.active(), c.remove.success(), c.remove.warning(), c.complete(t), (e = s.onLabelUpdate("error", e, c.value, c.total)) && c.set.label(e), c.bind.transitionEnd(function() {
                          s.onError.call(m, c.value, c.total)
                      })
                  },
                  transitionEvent: function() {
                      c.get.transitionEnd()
                  },
                  total: function(e) {
                      c.total = e
                  },
                  value: function(e) {
                      c.value = c.helper.forceArray(e)
                  },
                  progress: function(e) {
                      c.has.progressPoll() ? (c.debug("Updated within interval, setting next update to use new value", e), c.set.nextValue(e)) : (c.debug("First update in progress update interval, immediately updating", e), c.update.progress(e), c.create.progressPoll())
                  },
                  nextValue: function(e) {
                      c.nextValue = e
                  }
              },
              update: {
                  toNextValue: function() {
                      var e = c.nextValue;
                      e && (c.debug("Update interval complete using last updated value", e), c.update.progress(e), c.remove.nextValue())
                  },
                  progress: function(e) {
                      var n = c.has.total();
                      n && c.set.value(e);
                      var t = c.helper.forceArray(e).map(function(e) {
                          var t;
                          return !1 === (e = c.get.numericValue(e)) && c.error(l.nonNumeric, e), e = c.get.normalizedValue(e), n ? (t = 0 < c.total ? e / c.total * 100 : 100, c.debug("Calculating percent complete from total", t)) : (t = e, c.debug("Setting value to exact percentage value", t)), t
                      });
                      c.set.percent(t)
                  }
              },
              setting: function(e, t) {
                  if (c.debug("Changing setting", e, t), T.isPlainObject(e)) T.extend(!0, s, e);
                  else {
                      if (t === D) return s[e];
                      T.isPlainObject(s[e]) ? T.extend(!0, s[e], t) : s[e] = t
                  }
              },
              internal: function(e, t) {
                  if (T.isPlainObject(e)) T.extend(!0, c, e);
                  else {
                      if (t === D) return c[e];
                      c[e] = t
                  }
              },
              debug: function() {
                  !s.silent && s.debug && (s.performance ? c.performance.log(arguments) : (c.debug = Function.prototype.bind.call(console.info, console, s.name + ":"), c.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !s.silent && s.verbose && s.debug && (s.performance ? c.performance.log(arguments) : (c.verbose = Function.prototype.bind.call(console.info, console, s.name + ":"), c.verbose.apply(console, arguments)))
              },
              error: function() {
                  s.silent || (c.error = Function.prototype.bind.call(console.error, console, s.name + ":"), c.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      s.performance && (n = (t = (new Date).getTime()) - (y || t), y = t, x.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: m,
                          "Execution Time": n
                      })), clearTimeout(c.performance.timer), c.performance.timer = setTimeout(c.performance.display, 500)
                  },
                  display: function() {
                      var e = s.name + ":",
                          n = 0;
                      y = !1, clearTimeout(c.performance.timer), T.each(x, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", b && (e += " '" + b + "'"), (console.group !== D || console.table !== D) && 0 < x.length && (console.groupCollapsed(e), console.table ? console.table(x) : T.each(x, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), x = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = g;
                  return e = e || k, t = m || t, "string" == typeof i && r !== D && (i = i.split(/[\. ]/), o = i.length - 1, T.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (T.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== D) return a = r[n], !1;
                          if (!T.isPlainObject(r[t]) || e == o) return r[t] !== D ? a = r[t] : c.error(l.method, i), !1;
                          r = r[t]
                      }
                  })), T.isFunction(a) ? n = a.apply(t, e) : a !== D && (n = a), Array.isArray(v) ? v.push(n) : v !== D ? v = [v, n] : n !== D && (v = n), a
              }
          }, w ? (g === D && c.initialize(), c.invoke(C)) : (g !== D && g.invoke("destroy"), c.initialize())
      }), v !== D ? v : this
  }, T.fn.progress.settings = {
      name: "Progress",
      namespace: "progress",
      silent: !1,
      debug: !1,
      verbose: !1,
      performance: !0,
      random: {
          min: 2,
          max: 5
      },
      duration: 300,
      updateInterval: "auto",
      autoSuccess: !0,
      showActivity: !0,
      limitValues: !0,
      label: "percent",
      precision: 0,
      framerate: 1e3 / 30,
      percent: !1,
      total: !1,
      value: !1,
      failSafeDelay: 100,
      onLabelUpdate: function(e, t, n, i) {
          return t
      },
      onChange: function(e, t, n) {},
      onSuccess: function(e) {},
      onActive: function(e, t) {},
      onError: function(e, t) {},
      onWarning: function(e, t) {},
      error: {
          method: "The method you called is not defined.",
          nonNumeric: "Progress value is non numeric",
          tooHigh: "Value specified is above 100%",
          tooLow: "Value specified is below 0%",
          sumExceedsTotal: "Sum of multple values exceed total"
      },
      regExp: {
          variable: /\{\$*[A-z0-9]+\}/g
      },
      metadata: {
          percent: "percent",
          total: "total",
          value: "value"
      },
      selector: {
          bar: "> .bar",
          label: "> .label",
          progress: ".bar > .progress"
      },
      text: {
          active: !1,
          error: !1,
          success: !1,
          warning: !1,
          percent: "{percent}%",
          ratio: "{value} of {total}",
          bars: [""]
      },
      className: {
          active: "active",
          error: "error",
          success: "success",
          warning: "warning"
      }
  }
}(jQuery, window, document),
function(U, t, B, W) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), U.fn.slider = function(O) {
      var R, e = U(this),
          M = U(t),
          I = e.selector || "",
          j = (new Date).getTime(),
          L = [],
          V = O,
          q = "string" == typeof V,
          z = [].slice.call(arguments, 1),
          N = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
          H = 0;
      return e.each(function() {
          var m, s, l, e, g, r, t, c, p, h, v, u, n, d, f, b, y, x = U.isPlainObject(O) ? U.extend(!0, {}, U.fn.slider.settings, O) : U.extend({}, U.fn.slider.settings),
              i = x.className,
              o = x.metadata,
              a = x.namespace,
              C = x.error,
              w = x.keys,
              k = x.interpretLabel,
              T = !1,
              S = "." + a,
              D = "module-" + a,
              A = U(this),
              E = this,
              F = A.data(D),
              P = 1;
          y = {
              initialize: function() {
                  y.debug("Initializing slider", x), b = !0, t = H += 1, n = y.setup.testOutTouch(), y.setup.layout(), y.setup.labels(), y.is.disabled() || y.bind.events(), y.read.metadata(), y.read.settings(), b = !1, y.instantiate()
              },
              instantiate: function() {
                  y.verbose("Storing instance of slider", y), F = y, A.data(D, y)
              },
              destroy: function() {
                  y.verbose("Destroying previous slider for", A), clearInterval(F.interval), y.unbind.events(), y.unbind.slidingEvents(), A.removeData(D), F = W
              },
              setup: {
                  layout: function() {
                      A.attr("tabindex") === W && A.attr("tabindex", 0), 0 == A.find(".inner").length && A.append("<div class='inner'><div class='track'></div><div class='track-fill'></div><div class='thumb'></div></div>"), u = y.get.precision(), s = A.find(".thumb:not(.second)"), m = s, y.is.range() && (0 == A.find(".thumb.second").length && A.find(".inner").append("<div class='thumb second'></div>"), l = A.find(".thumb.second")), e = A.find(".track"), g = A.find(".track-fill"), v = s.width() / 2
                  },
                  labels: function() {
                      y.is.labeled() && (0 != (r = A.find(".labels:not(.auto)")).length ? y.setup.customLabel() : y.setup.autoLabel(), x.showLabelTicks && A.addClass(i.ticked))
                  },
                  testOutTouch: function() {
                      try {
                          return B.createEvent("TouchEvent"), !0
                      } catch (e) {
                          return !1
                      }
                  },
                  customLabel: function() {
                      var n, e = r.find(".label"),
                          i = e.length,
                          o = y.get.min(),
                          a = y.get.max();
                      e.each(function(e) {
                          var t = U(this).attr("data-value");
                          n = t ? ((t = a < t ? a : t < o ? o : t) - o) / (a - o) : (e + 1) / (i + 1), y.update.labelPosition(n, U(this))
                      })
                  },
                  autoLabel: function() {
                      0 != (r = A.find(".labels")).length ? r.empty() : r = A.append('<ul class="auto labels"></ul>').find(".labels");
                      for (var e = 0, t = y.get.numLabels(); e <= t; e++) {
                          var n = y.get.label(e),
                              i = "" !== n ? e % y.get.gapRatio() ? U('<li class="halftick label"></li>') : U('<li class="label">' + n + "</li>") : null,
                              o = e / t;
                          i && (y.update.labelPosition(o, i), r.append(i))
                      }
                  }
              },
              bind: {
                  events: function() {
                      y.bind.globalKeyboardEvents(), y.bind.keyboardEvents(), y.bind.mouseEvents(), y.is.touch() && y.bind.touchEvents(), x.autoAdjustLabels && y.bind.windowEvents()
                  },
                  keyboardEvents: function() {
                      y.verbose("Binding keyboard events"), A.on("keydown" + S, y.event.keydown)
                  },
                  globalKeyboardEvents: function() {
                      U(B).on("keydown" + S + t, y.event.activateFocus)
                  },
                  mouseEvents: function() {
                      y.verbose("Binding mouse events"), A.find(".track, .thumb, .inner").on("mousedown" + S, function(e) {
                          e.stopImmediatePropagation(), e.preventDefault(), y.event.down(e)
                      }), A.on("mousedown" + S, y.event.down), A.on("mouseenter" + S, function(e) {
                          T = !0
                      }), A.on("mouseleave" + S, function(e) {
                          T = !1
                      })
                  },
                  touchEvents: function() {
                      y.verbose("Binding touch events"), A.find(".track, .thumb, .inner").on("touchstart" + S, function(e) {
                          e.stopImmediatePropagation(), e.preventDefault(), y.event.down(e)
                      }), A.on("touchstart" + S, y.event.down)
                  },
                  slidingEvents: function() {
                      y.verbose("Binding page wide events while handle is being draged"), y.is.touch() ? (U(B).on("touchmove" + S, y.event.move), U(B).on("touchend" + S, y.event.up)) : (U(B).on("mousemove" + S, y.event.move), U(B).on("mouseup" + S, y.event.up))
                  },
                  windowEvents: function() {
                      M.on("resize" + S, y.event.resize)
                  }
              },
              unbind: {
                  events: function() {
                      A.find(".track, .thumb, .inner").off("mousedown" + S), A.find(".track, .thumb, .inner").off("touchstart" + S), A.off("mousedown" + S), A.off("mouseenter" + S), A.off("mouseleave" + S), A.off("touchstart" + S), A.off("keydown" + S), A.off("focusout" + S), U(B).off("keydown" + S + t, y.event.activateFocus), M.off("resize" + S)
                  },
                  slidingEvents: function() {
                      y.is.touch() ? (U(B).off("touchmove" + S), U(B).off("touchend" + S)) : (U(B).off("mousemove" + S), U(B).off("mouseup" + S))
                  }
              },
              event: {
                  down: function(e) {
                      if (e.preventDefault(), y.is.range()) {
                          var t = y.determine.eventPos(e),
                              n = y.determine.pos(t);
                          m = x.preventCrossover && y.is.range() && y.thumbVal === y.secondThumbVal ? (f = n, W) : y.determine.closestThumb(n), d === W && (d = y.get.currentThumbValue())
                      } else d === W && (d = y.get.value());
                      y.is.disabled() || y.bind.slidingEvents()
                  },
                  move: function(e) {
                      e.preventDefault();
                      var t = y.determine.valueFromEvent(e);
                      if (m === W) {
                          var n = y.determine.eventPos(e),
                              i = y.determine.pos(n);
                          m = i < f ? s : l
                      }
                      if (0 == y.get.step() || y.is.smooth()) {
                          var o = y.thumbVal,
                              a = y.secondThumbVal,
                              r = y.determine.smoothValueFromEvent(e);
                          m.hasClass("second") ? (x.preventCrossover && y.is.range() && (t = Math.max(o, t), r = Math.max(o, r)), a = t) : (x.preventCrossover && y.is.range() && (t = Math.min(a, t), r = Math.min(a, r)), o = t), t = Math.abs(o - (a || 0)), y.update.position(r), x.onMove.call(E, t, o, a)
                      } else y.update.value(t, function(e, t, n) {
                          x.onMove.call(E, e, t, n)
                      })
                  },
                  up: function(e) {
                      e.preventDefault();
                      var t = y.determine.valueFromEvent(e);
                      y.set.value(t), y.unbind.slidingEvents(), d !== W && (d = W)
                  },
                  keydown: function(e, t) {
                      if (x.preventCrossover && y.is.range() && y.thumbVal === y.secondThumbVal && (m = W), y.is.focused() && U(B).trigger(e), t || y.is.focused()) {
                          var n = y.determine.keyMovement(e);
                          if (0 != n) switch (e.preventDefault(), n) {
                              case 1:
                                  y.takeStep();
                                  break;
                              case 2:
                                  y.takeStep(y.get.multiplier());
                                  break;
                              case -1:
                                  y.backStep();
                                  break;
                              case -2:
                                  y.backStep(y.get.multiplier())
                          }
                      }
                  },
                  activateFocus: function(e) {
                      !y.is.focused() && y.is.hover() && 0 != y.determine.keyMovement(e) && (e.preventDefault(), y.event.keydown(e, !0), A.focus())
                  },
                  resize: function(e) {
                      P != y.get.gapRatio() && (y.setup.labels(), P = y.get.gapRatio())
                  }
              },
              resync: function() {
                  y.verbose("Resyncing thumb position based on value"), y.is.range() && y.update.position(y.secondThumbVal, l), y.update.position(y.thumbVal, s), y.setup.labels()
              },
              takeStep: function(e) {
                  e = e != W ? e : 1;
                  var t = y.get.step(),
                      n = y.get.currentThumbValue();
                  if (y.verbose("Taking a step"), 0 < t) y.set.value(n + t * e);
                  else if (0 == t) {
                      var i = y.get.precision(),
                          o = n + e / i;
                      y.set.value(Math.round(o * i) / i)
                  }
              },
              backStep: function(e) {
                  e = e != W ? e : 1;
                  var t = y.get.step(),
                      n = y.get.currentThumbValue();
                  if (y.verbose("Going back a step"), 0 < t) y.set.value(n - t * e);
                  else if (0 == t) {
                      var i = y.get.precision(),
                          o = n - e / i;
                      y.set.value(Math.round(o * i) / i)
                  }
              },
              is: {
                  range: function() {
                      return A.hasClass(x.className.range)
                  },
                  hover: function() {
                      return T
                  },
                  focused: function() {
                      return A.is(":focus")
                  },
                  disabled: function() {
                      return A.hasClass(x.className.disabled)
                  },
                  labeled: function() {
                      return A.hasClass(x.className.labeled)
                  },
                  reversed: function() {
                      return A.hasClass(x.className.reversed)
                  },
                  vertical: function() {
                      return A.hasClass(x.className.vertical)
                  },
                  smooth: function() {
                      return x.smooth || A.hasClass(x.className.smooth)
                  },
                  touch: function() {
                      return n
                  }
              },
              get: {
                  trackOffset: function() {
                      return y.is.vertical() ? e.offset().top : e.offset().left
                  },
                  trackLength: function() {
                      return y.is.vertical() ? e.height() : e.width()
                  },
                  trackLeft: function() {
                      return y.is.vertical() ? e.position().top : e.position().left
                  },
                  trackStartPos: function() {
                      return y.is.reversed() ? y.get.trackLeft() + y.get.trackLength() : y.get.trackLeft()
                  },
                  trackEndPos: function() {
                      return y.is.reversed() ? y.get.trackLeft() : y.get.trackLeft() + y.get.trackLength()
                  },
                  trackStartMargin: function() {
                      return (y.is.vertical() ? y.is.reversed() ? A.css("padding-bottom") : A.css("padding-top") : y.is.reversed() ? A.css("padding-right") : A.css("padding-left")) || "0px"
                  },
                  trackEndMargin: function() {
                      return (y.is.vertical() ? y.is.reversed() ? A.css("padding-top") : A.css("padding-bottom") : y.is.reversed() ? A.css("padding-left") : A.css("padding-right")) || "0px"
                  },
                  precision: function() {
                      var e, t = y.get.step();
                      if (0 != t) {
                          var n = String(t).split(".");
                          e = 2 == n.length ? n[1].length : 0
                      } else e = x.decimalPlaces;
                      var i = Math.pow(10, e);
                      return y.debug("Precision determined", i), i
                  },
                  min: function() {
                      return x.min
                  },
                  max: function() {
                      var e = y.get.step(),
                          t = y.get.min(),
                          n = 0 === e ? 0 : Math.floor((x.max - t) / e);
                      return 0 == (0 === e ? 0 : (x.max - t) % e) ? x.max : t + n * e
                  },
                  step: function() {
                      return x.step
                  },
                  numLabels: function() {
                      var e = Math.round((y.get.max() - y.get.min()) / (0 === y.get.step() ? 1 : y.get.step()));
                      return y.debug("Determined that there should be " + e + " labels"), e
                  },
                  labelType: function() {
                      return x.labelType
                  },
                  label: function(e) {
                      if (k) return k(e);
                      switch (x.labelType) {
                          case x.labelTypes.number:
                              return Math.round((e * (0 === y.get.step() ? 1 : y.get.step()) + y.get.min()) * u) / u;
                          case x.labelTypes.letter:
                              return N[e % 26];
                          default:
                              return e
                      }
                  },
                  value: function() {
                      return c
                  },
                  currentThumbValue: function() {
                      return m !== W && m.hasClass("second") ? y.secondThumbVal : y.thumbVal
                  },
                  thumbValue: function(e) {
                      switch (e) {
                          case "second":
                              if (y.is.range()) return y.secondThumbVal;
                              y.error(C.notrange);
                              break;
                          case "first":
                          default:
                              return y.thumbVal
                      }
                  },
                  multiplier: function() {
                      return x.pageMultiplier
                  },
                  thumbPosition: function(e) {
                      switch (e) {
                          case "second":
                              if (y.is.range()) return h;
                              y.error(C.notrange);
                              break;
                          case "first":
                          default:
                              return p
                      }
                  },
                  gapRatio: function() {
                      var e = 1;
                      if (x.autoAdjustLabels) {
                          var t = y.get.numLabels(),
                              n = y.get.trackLength(),
                              i = 1;
                          if (0 < n)
                              for (; n / t * i < x.labelDistance;) t % i || (e = i), i += 1
                      }
                      return e
                  }
              },
              determine: {
                  pos: function(e) {
                      return y.is.reversed() ? y.get.trackStartPos() - e + y.get.trackOffset() : e - y.get.trackOffset() - y.get.trackStartPos()
                  },
                  closestThumb: function(e) {
                      var t = parseFloat(y.determine.thumbPos(s)),
                          n = Math.abs(e - t),
                          i = parseFloat(y.determine.thumbPos(l)),
                          o = Math.abs(e - i);
                      return n === o && y.get.thumbValue() === y.get.min() ? l : n <= o ? s : l
                  },
                  closestThumbPos: function(e) {
                      var t = parseFloat(y.determine.thumbPos(s)),
                          n = Math.abs(e - t),
                          i = parseFloat(y.determine.thumbPos(l));
                      return n <= Math.abs(e - i) ? t : i
                  },
                  thumbPos: function(e) {
                      return y.is.vertical() ? y.is.reversed() ? e.css("bottom") : e.css("top") : y.is.reversed() ? e.css("right") : e.css("left")
                  },
                  positionFromValue: function(e) {
                      var t = y.get.min(),
                          n = y.get.max(),
                          i = (e = n < e ? n : e < t ? t : e, y.get.trackLength()),
                          o = (e - t) / (n - t),
                          a = Math.round(o * i);
                      return y.verbose("Determined position: " + a + " from value: " + e), a
                  },
                  positionFromRatio: function(e) {
                      var t = y.get.trackLength(),
                          n = y.get.step(),
                          i = Math.round(e * t);
                      return 0 == n ? i : Math.round(i / n) * n
                  },
                  valueFromEvent: function(e) {
                      var t = y.determine.eventPos(e),
                          n = y.determine.pos(t);
                      return t < y.get.trackOffset() ? y.is.reversed() ? y.get.max() : y.get.min() : t > y.get.trackOffset() + y.get.trackLength() ? y.is.reversed() ? y.get.min() : y.get.max() : y.determine.value(n)
                  },
                  smoothValueFromEvent: function(e) {
                      var t, n = y.get.min(),
                          i = y.get.max(),
                          o = y.get.trackLength(),
                          a = y.determine.eventPos(e) - y.get.trackOffset();
                      return t = (a = a < 0 ? 0 : o < a ? o : a) / o, y.is.reversed() && (t = 1 - t), t * (i - n) + n
                  },
                  eventPos: function(e) {
                      if (y.is.touch()) {
                          var t = e.changedTouches ? e : e.originalEvent,
                              n = t.changedTouches[0] ? t.changedTouches : t.touches,
                              i = n[0].pageY,
                              o = n[0].pageX;
                          return y.is.vertical() ? i : o
                      }
                      var a = e.pageY || e.originalEvent.pageY,
                          r = e.pageX || e.originalEvent.pageX;
                      return y.is.vertical() ? a : r
                  },
                  value: function(e) {
                      var t = y.is.reversed() ? y.get.trackEndPos() : y.get.trackStartPos(),
                          n = (e - t) / ((y.is.reversed() ? y.get.trackStartPos() : y.get.trackEndPos()) - t),
                          i = y.get.max() - y.get.min(),
                          o = y.get.step(),
                          a = n * i,
                          r = 0 == o ? a : Math.round(a / o) * o;
                      return y.verbose("Determined value based upon position: " + e + " as: " + a), a != r && y.verbose("Rounding value to closest step: " + r), y.verbose("Cutting off additional decimal places"), Math.round((r + y.get.min()) * u) / u
                  },
                  keyMovement: function(e) {
                      var t = e.which,
                          n = y.is.vertical() ? y.is.reversed() ? w.downArrow : w.upArrow : w.downArrow,
                          i = y.is.vertical() ? y.is.reversed() ? w.upArrow : w.downArrow : w.upArrow,
                          o = y.is.vertical() ? w.leftArrow : y.is.reversed() ? w.rightArrow : w.leftArrow,
                          a = y.is.vertical() ? w.rightArrow : y.is.reversed() ? w.leftArrow : w.rightArrow;
                      return t == n || t == o ? -1 : t == i || t == a ? 1 : t == w.pageDown ? -2 : t == w.pageUp ? 2 : 0
                  }
              },
              handleNewValuePosition: function(e) {
                  var t = y.get.min(),
                      n = y.get.max();
                  return e <= t ? e = t : n <= e && (e = n), y.determine.positionFromValue(e)
              },
              set: {
                  value: function(i, o) {
                      o = !1 !== o;
                      var a = d === W;
                      d = d === W ? y.get.value() : d, y.update.value(i, function(e, t, n) {
                          b && !x.fireOnInit || !o || (i !== d && x.onChange.call(E, e, t, n), x.onMove.call(E, e, t, n)), a && (d = W)
                      })
                  },
                  rangeValue: function(e, t, n) {
                      if (n = !1 !== n, y.is.range()) {
                          var i = y.get.min(),
                              o = y.get.max(),
                              a = d === W;
                          d = d === W ? y.get.value() : d, e <= i ? e = i : o <= e && (e = o), t <= i ? t = i : o <= t && (t = o), y.thumbVal = e, y.secondThumbVal = t, c = Math.abs(y.thumbVal - y.secondThumbVal), y.update.position(y.thumbVal, s), y.update.position(y.secondThumbVal, l), b && !x.fireOnInit || !n || (c !== d && x.onChange.call(E, c, y.thumbVal, y.secondThumbVal), x.onMove.call(E, c, y.thumbVal, y.secondThumbVal)), a && (d = W)
                      } else y.error(C.notrange)
                  },
                  position: function(e, t) {
                      var n = y.determine.value(e);
                      switch (t) {
                          case "second":
                              y.secondThumbVal = n, y.update.position(n, l);
                              break;
                          default:
                              y.thumbVal = n, y.update.position(n, s)
                      }
                      c = Math.abs(y.thumbVal - (y.secondThumbVal || 0)), y.set.value(c)
                  }
              },
              update: {
                  value: function(e, t) {
                      var n = y.get.min(),
                          i = y.get.max();
                      e <= n ? e = n : i <= e && (e = i), y.is.range() ? (m === W && (m = e <= y.get.currentThumbValue() ? s : l), m.hasClass("second") ? (x.preventCrossover && y.is.range() && (e = Math.max(y.thumbVal, e)), y.secondThumbVal = e) : (x.preventCrossover && y.is.range() && (e = Math.min(y.secondThumbVal, e)), y.thumbVal = e), c = Math.abs(y.thumbVal - y.secondThumbVal)) : (c = e, y.thumbVal = c), y.update.position(e), y.debug("Setting slider value to " + c), "function" == typeof t && t(c, y.thumbVal, y.secondThumbVal)
                  },
                  position: function(e, t) {
                      var n = y.handleNewValuePosition(e),
                          i = t != W ? t : m,
                          o = y.thumbVal || y.get.min(),
                          a = y.secondThumbVal || y.get.min();
                      y.is.range() && i.hasClass("second") ? (h = n, a = e) : (p = n, o = e);
                      var r, s, l = y.get.min(),
                          c = y.get.max(),
                          u = 100 * (e - l) / (c - l),
                          d = 100 * (Math.min(o, a) - l) / (c - l),
                          f = 100 * (1 - (Math.max(o, a) - l) / (c - l));
                      r = y.is.vertical() ? y.is.reversed() ? (s = {
                          bottom: "calc(" + u + "% - " + v + "px)",
                          top: "auto"
                      }, {
                          bottom: d + "%",
                          top: f + "%"
                      }) : (s = {
                          top: "calc(" + u + "% - " + v + "px)",
                          bottom: "auto"
                      }, {
                          top: d + "%",
                          bottom: f + "%"
                      }) : y.is.reversed() ? (s = {
                          right: "calc(" + u + "% - " + v + "px)",
                          left: "auto"
                      }, {
                          right: d + "%",
                          left: f + "%"
                      }) : (s = {
                          left: "calc(" + u + "% - " + v + "px)",
                          right: "auto"
                      }, {
                          left: d + "%",
                          right: f + "%"
                      }), i.css(s), g.css(r), y.debug("Setting slider position to " + n)
                  },
                  labelPosition: function(e, t) {
                      var n = y.get.trackStartMargin(),
                          i = y.get.trackEndMargin(),
                          o = y.is.vertical() ? y.is.reversed() ? "bottom" : "top" : y.is.reversed() ? "right" : "left",
                          a = y.is.reversed() && !y.is.vertical() ? " - " : " + ",
                          r = "(100% - " + n + " - " + i + ") * " + e;
                      t.css(o, "calc(" + r + a + n + ")")
                  }
              },
              goto: {
                  max: function() {
                      y.set.value(y.get.max())
                  },
                  min: function() {
                      y.set.value(y.get.min())
                  }
              },
              read: {
                  metadata: function() {
                      var e = {
                          thumbVal: A.data(o.thumbVal),
                          secondThumbVal: A.data(o.secondThumbVal)
                      };
                      e.thumbVal && (y.is.range() && e.secondThumbVal ? (y.debug("Current value set from metadata", e.thumbVal, e.secondThumbVal), y.set.rangeValue(e.thumbVal, e.secondThumbVal)) : (y.debug("Current value set from metadata", e.thumbVal), y.set.value(e.thumbVal)))
                  },
                  settings: function() {
                      !1 !== x.start && (y.is.range() ? (y.debug("Start position set from settings", x.start, x.end), y.set.rangeValue(x.start, x.end)) : (y.debug("Start position set from settings", x.start), y.set.value(x.start)))
                  }
              },
              setting: function(e, t) {
                  if (y.debug("Changing setting", e, t), U.isPlainObject(e)) U.extend(!0, x, e);
                  else {
                      if (t === W) return x[e];
                      U.isPlainObject(x[e]) ? U.extend(!0, x[e], t) : x[e] = t
                  }
              },
              internal: function(e, t) {
                  if (U.isPlainObject(e)) U.extend(!0, y, e);
                  else {
                      if (t === W) return y[e];
                      y[e] = t
                  }
              },
              debug: function() {
                  !x.silent && x.debug && (x.performance ? y.performance.log(arguments) : (y.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), y.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !x.silent && x.verbose && x.debug && (x.performance ? y.performance.log(arguments) : (y.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), y.verbose.apply(console, arguments)))
              },
              error: function() {
                  x.silent || (y.error = Function.prototype.bind.call(console.error, console, x.name + ":"), y.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      x.performance && (n = (t = (new Date).getTime()) - (j || t), j = t, L.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: E,
                          "Execution Time": n
                      })), clearTimeout(y.performance.timer), y.performance.timer = setTimeout(y.performance.display, 500)
                  },
                  display: function() {
                      var e = x.name + ":",
                          n = 0;
                      j = !1, clearTimeout(y.performance.timer), U.each(L, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", I && (e += " '" + I + "'"), (console.group !== W || console.table !== W) && 0 < L.length && (console.groupCollapsed(e), console.table ? console.table(L) : U.each(L, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), L = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = F;
                  return e = e || z, t = E || t, "string" == typeof i && r !== W && (i = i.split(/[\. ]/), o = i.length - 1, U.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (U.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== W) return a = r[n], !1;
                          if (!U.isPlainObject(r[t]) || e == o) return r[t] !== W ? a = r[t] : y.error(C.method, i), !1;
                          r = r[t]
                      }
                  })), U.isFunction(a) ? n = a.apply(t, e) : a !== W && (n = a), U.isArray(R) ? R.push(n) : R !== W ? R = [R, n] : n !== W && (R = n), a
              }
          }, q ? (F === W && y.initialize(), y.invoke(V)) : (F !== W && F.invoke("destroy"), y.initialize())
      }), R !== W ? R : this
  }, U.fn.slider.settings = {
      silent: !1,
      debug: !1,
      verbose: !1,
      performance: !0,
      name: "Slider",
      namespace: "slider",
      error: {
          method: "The method you called is not defined.",
          notrange: "This slider is not a range slider"
      },
      metadata: {
          thumbVal: "thumbVal",
          secondThumbVal: "secondThumbVal"
      },
      min: 0,
      max: 20,
      step: 1,
      start: 0,
      end: 20,
      labelType: "number",
      showLabelTicks: !1,
      smooth: !1,
      autoAdjustLabels: !0,
      labelDistance: 100,
      preventCrossover: !0,
      fireOnInit: !1,
      interpretLabel: !1,
      decimalPlaces: 2,
      pageMultiplier: 2,
      selector: {},
      className: {
          reversed: "reversed",
          disabled: "disabled",
          labeled: "labeled",
          ticked: "ticked",
          vertical: "vertical",
          range: "range",
          smooth: "smooth"
      },
      keys: {
          pageUp: 33,
          pageDown: 34,
          leftArrow: 37,
          upArrow: 38,
          rightArrow: 39,
          downArrow: 40
      },
      labelTypes: {
          number: "number",
          letter: "letter"
      },
      onChange: function(e, t, n) {},
      onMove: function(e, t, n) {}
  }
}(jQuery, window, document),
function(k, e, t, T) {
  "use strict";
  k.isFunction = k.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), k.fn.rating = function(g) {
      var p, h = k(this),
          v = h.selector || "",
          b = (new Date).getTime(),
          y = [],
          x = g,
          C = "string" == typeof x,
          w = [].slice.call(arguments, 1);
      return h.each(function() {
          var e, a, r = k.isPlainObject(g) ? k.extend(!0, {}, k.fn.rating.settings, g) : k.extend({}, k.fn.rating.settings),
              t = r.namespace,
              s = r.className,
              n = r.metadata,
              i = r.selector,
              l = r.cssVars,
              o = "." + t,
              c = "module-" + t,
              u = this,
              d = k(this).data(c),
              f = k(this),
              m = f.find(i.icon);
          a = {
              initialize: function() {
                  a.verbose("Initializing rating module", r), 0 === m.length && a.setup.layout(), r.interactive && !a.is.disabled() ? a.enable() : a.disable(), a.set.initialLoad(), a.set.rating(a.get.initialRating()), a.remove.initialLoad(), a.instantiate()
              },
              instantiate: function() {
                  a.verbose("Instantiating module", r), d = a, f.data(c, a)
              },
              destroy: function() {
                  a.verbose("Destroying previous instance", d), a.remove.events(), f.removeData(c)
              },
              refresh: function() {
                  m = f.find(i.icon)
              },
              setup: {
                  layout: function() {
                      var e = a.get.maxRating(),
                          t = a.get.icon(),
                          n = k.fn.rating.settings.templates.icon(e, t);
                      a.debug("Generating icon html dynamically"), f.html(n), a.refresh()
                  }
              },
              event: {
                  mouseenter: function() {
                      var e = k(this);
                      e.nextAll().removeClass(s.selected), f.addClass(s.selected), e.addClass(s.selected).prevAll().addClass(s.selected)
                  },
                  mouseleave: function() {
                      f.removeClass(s.selected), m.removeClass(s.selected)
                  },
                  click: function() {
                      var e = k(this),
                          t = a.get.rating(),
                          n = m.index(e) + 1;
                      ("auto" == r.clearable ? 1 === m.length : r.clearable) && t == n ? a.clearRating() : a.set.rating(n)
                  }
              },
              clearRating: function() {
                  a.debug("Clearing current rating"), a.set.rating(0)
              },
              bind: {
                  events: function() {
                      a.verbose("Binding events"), f.on("mouseenter" + o, i.icon, a.event.mouseenter).on("mouseleave" + o, i.icon, a.event.mouseleave).on("click" + o, i.icon, a.event.click)
                  }
              },
              remove: {
                  events: function() {
                      a.verbose("Removing events"), f.off(o)
                  },
                  initialLoad: function() {
                      e = !1
                  }
              },
              enable: function() {
                  a.debug("Setting rating to interactive mode"), a.bind.events(), f.removeClass(s.disabled)
              },
              disable: function() {
                  a.debug("Setting rating to read-only mode"), a.remove.events(), f.addClass(s.disabled)
              },
              is: {
                  initialLoad: function() {
                      return e
                  },
                  disabled: function() {
                      return f.hasClass(s.disabled)
                  }
              },
              get: {
                  icon: function() {
                      var e = f.data(n.icon);
                      return e && f.removeData(n.icon), e || r.icon
                  },
                  initialRating: function() {
                      return f.data(n.rating) !== T ? (f.removeData(n.rating), f.data(n.rating)) : r.initialRating
                  },
                  maxRating: function() {
                      return f.data(n.maxRating) !== T ? (f.removeData(n.maxRating), f.data(n.maxRating)) : r.maxRating
                  },
                  rating: function() {
                      var e = m.filter("." + s.active).length;
                      return a.verbose("Current rating retrieved", e), e
                  }
              },
              set: {
                  rating: function(e) {
                      var t = Math.floor(0 <= e - 1 ? e - 1 : 0),
                          n = m.eq(t),
                          i = e <= 1 ? n : n.next(),
                          o = e % 1 * 100;
                      f.removeClass(s.selected), m.removeClass(s.selected).removeClass(s.active).removeClass(s.partiallyActive), 0 < e && (a.verbose("Setting current rating to", e), n.prevAll().addBack().addClass(s.active), n.next() && e % 1 != 0 && (i.addClass(s.partiallyActive).addClass(s.active), i.css(l.filledCustomPropName, o + "%"), "transparent" === i.css("backgroundColor") && i.removeClass(s.partiallyActive).removeClass(s.active))), a.is.initialLoad() || r.onRate.call(u, e)
                  },
                  initialLoad: function() {
                      e = !0
                  }
              },
              setting: function(e, t) {
                  if (a.debug("Changing setting", e, t), k.isPlainObject(e)) k.extend(!0, r, e);
                  else {
                      if (t === T) return r[e];
                      k.isPlainObject(r[e]) ? k.extend(!0, r[e], t) : r[e] = t
                  }
              },
              internal: function(e, t) {
                  if (k.isPlainObject(e)) k.extend(!0, a, e);
                  else {
                      if (t === T) return a[e];
                      a[e] = t
                  }
              },
              debug: function() {
                  !r.silent && r.debug && (r.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, r.name + ":"), a.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !r.silent && r.verbose && r.debug && (r.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, r.name + ":"), a.verbose.apply(console, arguments)))
              },
              error: function() {
                  r.silent || (a.error = Function.prototype.bind.call(console.error, console, r.name + ":"), a.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      r.performance && (n = (t = (new Date).getTime()) - (b || t), b = t, y.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: u,
                          "Execution Time": n
                      })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500)
                  },
                  display: function() {
                      var e = r.name + ":",
                          n = 0;
                      b = !1, clearTimeout(a.performance.timer), k.each(y, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", v && (e += " '" + v + "'"), 1 < h.length && (e += " (" + h.length + ")"), (console.group !== T || console.table !== T) && 0 < y.length && (console.groupCollapsed(e), console.table ? console.table(y) : k.each(y, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), y = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = d;
                  return e = e || w, t = u || t, "string" == typeof i && r !== T && (i = i.split(/[\. ]/), o = i.length - 1, k.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (k.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== T) return a = r[n], !1;
                          if (!k.isPlainObject(r[t]) || e == o) return r[t] !== T && (a = r[t]), !1;
                          r = r[t]
                      }
                  })), k.isFunction(a) ? n = a.apply(t, e) : a !== T && (n = a), Array.isArray(p) ? p.push(n) : p !== T ? p = [p, n] : n !== T && (p = n), a
              }
          }, C ? (d === T && a.initialize(), a.invoke(x)) : (d !== T && d.invoke("destroy"), a.initialize())
      }), p !== T ? p : this
  }, k.fn.rating.settings = {
      name: "Rating",
      namespace: "rating",
      icon: "star",
      silent: !1,
      debug: !1,
      verbose: !1,
      performance: !0,
      initialRating: 0,
      interactive: !0,
      maxRating: 4,
      clearable: "auto",
      fireOnInit: !1,
      onRate: function(e) {},
      error: {
          method: "The method you called is not defined",
          noMaximum: "No maximum rating specified. Cannot generate HTML automatically"
      },
      metadata: {
          rating: "rating",
          maxRating: "maxRating",
          icon: "icon"
      },
      className: {
          active: "active",
          disabled: "disabled",
          selected: "selected",
          loading: "loading",
          partiallyActive: "partial"
      },
      cssVars: {
          filledCustomPropName: "--full"
      },
      selector: {
          icon: ".icon"
      },
      templates: {
          icon: function(e, t) {
              for (var n = 1, i = ""; n <= e;) i += '<i class="' + t + ' icon"></i>', n++;
              return i
          }
      }
  }
}(jQuery, window, document),
function(F, P, O, R) {
  "use strict";
  F.isFunction = F.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, P = void 0 !== P && P.Math == Math ? P : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), F.fn.search = function(c) {
      var C, w = F(this),
          k = w.selector || "",
          T = (new Date).getTime(),
          S = [],
          D = c,
          A = "string" == typeof D,
          E = [].slice.call(arguments, 1);
      return F(this).each(function() {
          var f, u = F.isPlainObject(c) ? F.extend(!0, {}, F.fn.search.settings, c) : F.extend({}, F.fn.search.settings),
              m = u.className,
              d = u.metadata,
              i = u.regExp,
              a = u.fields,
              g = u.selector,
              p = u.error,
              e = u.namespace,
              o = "." + e,
              t = e + "-module",
              h = F(this),
              v = h.find(g.prompt),
              n = h.find(g.searchButton),
              r = h.find(g.results),
              s = h.find(g.result),
              b = (h.find(g.category), this),
              l = h.data(t),
              y = !1,
              x = !1;
          f = {
              initialize: function() {
                  f.verbose("Initializing module"), f.get.settings(), f.determine.searchFields(), f.bind.events(), f.set.type(), f.create.results(), f.instantiate()
              },
              instantiate: function() {
                  f.verbose("Storing instance of module", f), l = f, h.data(t, f)
              },
              destroy: function() {
                  f.verbose("Destroying instance"), h.off(o).removeData(t)
              },
              refresh: function() {
                  f.debug("Refreshing selector cache"), v = h.find(g.prompt), n = h.find(g.searchButton), h.find(g.category), r = h.find(g.results), s = h.find(g.result)
              },
              refreshResults: function() {
                  r = h.find(g.results), s = h.find(g.result)
              },
              bind: {
                  events: function() {
                      f.verbose("Binding events to search"), u.automatic && (h.on(f.get.inputEvent() + o, g.prompt, f.event.input), v.attr("autocomplete", f.is.chrome() ? "fomantic-search" : "off")), h.on("focus" + o, g.prompt, f.event.focus).on("blur" + o, g.prompt, f.event.blur).on("keydown" + o, g.prompt, f.handleKeyboard).on("click" + o, g.searchButton, f.query).on("mousedown" + o, g.results, f.event.result.mousedown).on("mouseup" + o, g.results, f.event.result.mouseup).on("click" + o, g.result, f.event.result.click)
                  }
              },
              determine: {
                  searchFields: function() {
                      c && c.searchFields !== R && (u.searchFields = c.searchFields)
                  }
              },
              event: {
                  input: function() {
                      u.searchDelay ? (clearTimeout(f.timer), f.timer = setTimeout(function() {
                          f.is.focused() && f.query()
                      }, u.searchDelay)) : f.query()
                  },
                  focus: function() {
                      f.set.focus(), u.searchOnFocus && f.has.minimumCharacters() && f.query(function() {
                          f.can.show() && f.showResults()
                      })
                  },
                  blur: function(e) {
                      function t() {
                          f.cancel.query(), f.remove.focus(), f.timer = setTimeout(f.hideResults, u.hideDelay)
                      }
                      var n = O.activeElement === this;
                      n || (x = !1, f.resultsClicked ? (f.debug("Determining if user action caused search to close"), h.one("click.close" + o, g.results, function(e) {
                          f.is.inMessage(e) || y ? v.focus() : (y = !1, f.is.animating() || f.is.hidden() || t())
                      })) : (f.debug("Input blurred without user action, closing results"), t()))
                  },
                  result: {
                      mousedown: function() {
                          f.resultsClicked = !0
                      },
                      mouseup: function() {
                          f.resultsClicked = !1
                      },
                      click: function(e) {
                          f.debug("Search result selected");
                          var t = F(this),
                              n = t.find(g.title).eq(0),
                              i = t.is("a[href]") ? t : t.find("a[href]").eq(0),
                              o = i.attr("href") || !1,
                              a = i.attr("target") || !1,
                              r = 0 < n.length && n.text(),
                              s = f.get.results(),
                              l = t.data(d.result) || f.get.result(r, s),
                              c = f.get.value();
                          if (F.isFunction(u.onSelect) && !1 === u.onSelect.call(b, l, s)) return f.debug("Custom onSelect callback cancelled default select action"), void(y = !0);
                          f.hideResults(), r && f.get.value() === c && f.set.value(r), o && (e.preventDefault(), f.verbose("Opening search link found in result", i), "_blank" == a || e.ctrlKey ? P.open(o) : P.location.href = o)
                      }
                  }
              },
              ensureVisible: function(e) {
                  var t, n, i, o;
                  0 !== e.length && (n = (t = e.position().top) + e.outerHeight(!0), i = r.scrollTop(), o = r.height(), t < 0 ? r.scrollTop(i + t) : o < n && r.scrollTop(i + (n - o)))
              },
              handleKeyboard: function(e) {
                  var t, n = h.find(g.result),
                      i = h.find(g.category),
                      o = n.filter("." + m.active),
                      a = n.index(o),
                      r = n.length,
                      s = 0 < o.length,
                      l = e.which,
                      c = 13,
                      u = 38,
                      d = 40;
                  if (l == 27 && (f.verbose("Escape key pressed, blurring search field"), f.hideResults(), x = !0), f.is.visible())
                      if (l == c) {
                          if (f.verbose("Enter key pressed, selecting active result"), 0 < n.filter("." + m.active).length) return f.event.result.click.call(n.filter("." + m.active), e), e.preventDefault(), !1
                      } else l == u && s ? (f.verbose("Up key pressed, changing active result"), t = a - 1 < 0 ? a : a - 1, i.removeClass(m.active), n.removeClass(m.active).eq(t).addClass(m.active).closest(i).addClass(m.active), f.ensureVisible(n.eq(t)), e.preventDefault()) : l == d && (f.verbose("Down key pressed, changing active result"), t = r <= a + 1 ? a : a + 1, i.removeClass(m.active), n.removeClass(m.active).eq(t).addClass(m.active).closest(i).addClass(m.active), f.ensureVisible(n.eq(t)), e.preventDefault());
                  else l == c && (f.verbose("Enter key pressed, executing query"), f.query(), f.set.buttonPressed(), v.one("keyup", f.remove.buttonFocus))
              },
              setup: {
                  api: function(t, n) {
                      var e = {
                          debug: u.debug,
                          on: !1,
                          cache: u.cache,
                          action: "search",
                          urlData: {
                              query: t
                          },
                          onSuccess: function(e) {
                              f.parse.response.call(b, e, t), n()
                          },
                          onFailure: function() {
                              f.displayMessage(p.serverError), n()
                          },
                          onAbort: function(e) {},
                          onError: f.error
                      };
                      F.extend(!0, e, u.apiSettings), f.verbose("Setting up API request", e), h.api(e)
                  }
              },
              can: {
                  useAPI: function() {
                      return F.fn.api !== R
                  },
                  show: function() {
                      return f.is.focused() && !f.is.visible() && !f.is.empty()
                  },
                  transition: function() {
                      return u.transition && F.fn.transition !== R && h.transition("is supported")
                  }
              },
              is: {
                  animating: function() {
                      return r.hasClass(m.animating)
                  },
                  chrome: function() {
                      return !(!P.chrome || !P.chrome.webstore && !P.chrome.runtime)
                  },
                  hidden: function() {
                      return r.hasClass(m.hidden)
                  },
                  inMessage: function(e) {
                      if (e.target) {
                          var t = F(e.target);
                          return F.contains(O.documentElement, e.target) && 0 < t.closest(g.message).length
                      }
                  },
                  empty: function() {
                      return "" === r.html()
                  },
                  visible: function() {
                      return 0 < r.filter(":visible").length
                  },
                  focused: function() {
                      return 0 < v.filter(":focus").length
                  }
              },
              get: {
                  settings: function() {
                      F.isPlainObject(c) && c.searchFullText && (u.fullTextSearch = c.searchFullText, f.error(u.error.oldSearchSyntax, b)), u.ignoreDiacritics && !String.prototype.normalize && (u.ignoreDiacritics = !1, f.error(p.noNormalize, b))
                  },
                  inputEvent: function() {
                      var e = v[0];
                      return e !== R && e.oninput !== R ? "input" : e !== R && e.onpropertychange !== R ? "propertychange" : "keyup"
                  },
                  value: function() {
                      return v.val()
                  },
                  results: function() {
                      return h.data(d.results)
                  },
                  result: function(n, e) {
                      var i = !1;
                      return n = n !== R ? n : f.get.value(), e = e !== R ? e : f.get.results(), "category" === u.type ? (f.debug("Finding result that matches", n), F.each(e, function(e, t) {
                          if (Array.isArray(t.results) && (i = f.search.object(n, t.results)[0])) return !1
                      })) : (f.debug("Finding result in results object", n), i = f.search.object(n, e)[0]), i || !1
                  }
              },
              select: {
                  firstResult: function() {
                      f.verbose("Selecting first result"), s.first().addClass(m.active)
                  }
              },
              set: {
                  focus: function() {
                      h.addClass(m.focus)
                  },
                  loading: function() {
                      h.addClass(m.loading)
                  },
                  value: function(e) {
                      f.verbose("Setting search input value", e), v.val(e)
                  },
                  type: function(e) {
                      e = e || u.type, "category" == u.type && h.addClass(u.type)
                  },
                  buttonPressed: function() {
                      n.addClass(m.pressed)
                  }
              },
              remove: {
                  loading: function() {
                      h.removeClass(m.loading)
                  },
                  focus: function() {
                      h.removeClass(m.focus)
                  },
                  buttonPressed: function() {
                      n.removeClass(m.pressed)
                  },
                  diacritics: function(e) {
                      return u.ignoreDiacritics ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e
                  }
              },
              query: function(e) {
                  e = F.isFunction(e) ? e : function() {};
                  var t = f.get.value(),
                      n = f.read.cache(t);
                  e = e || function() {}, f.has.minimumCharacters() ? (n ? (f.debug("Reading result from cache", t), f.save.results(n.results), f.addResults(n.html), f.inject.id(n.results), e()) : (f.debug("Querying for", t), F.isPlainObject(u.source) || Array.isArray(u.source) ? (f.search.local(t), e()) : f.can.useAPI() ? f.search.remote(t, e) : (f.error(p.source), e())), u.onSearchQuery.call(b, t)) : f.hideResults()
              },
              search: {
                  local: function(e) {
                      var t, n = f.search.object(e, u.source);
                      f.set.loading(), f.save.results(n), f.debug("Returned full local search results", n), 0 < u.maxResults && (f.debug("Using specified max results", n), n = n.slice(0, u.maxResults)), "category" == u.type && (n = f.create.categoryResults(n)), t = f.generateResults({
                          results: n
                      }), f.remove.loading(), f.addResults(t), f.inject.id(n), f.write.cache(e, {
                          html: t,
                          results: n
                      })
                  },
                  remote: function(e, t) {
                      t = F.isFunction(t) ? t : function() {}, h.api("is loading") && h.api("abort"), f.setup.api(e, t), h.api("query")
                  },
                  object: function(o, t, e) {
                      o = f.remove.diacritics(String(o));

                      function a(e, t) {
                          var n = -1 == F.inArray(t, r),
                              i = -1 == F.inArray(t, l),
                              o = -1 == F.inArray(t, s);
                          n && i && o && e.push(t)
                      }
                      var r = [],
                          s = [],
                          l = [],
                          n = o.replace(i.escape, "\\$&"),
                          c = new RegExp(i.beginsWith + n, "i");
                      return t = t || u.source, e = e !== R ? e : u.searchFields, Array.isArray(e) || (e = [e]), t === R || !1 === t ? (f.error(p.source), []) : (F.each(e, function(e, i) {
                          F.each(t, function(e, t) {
                              var n;
                              "string" != typeof t[i] && "number" != typeof t[i] || (-1 !== (n = "string" == typeof t[i] ? f.remove.diacritics(t[i]) : t[i].toString()).search(c) ? a(r, t) : "exact" === u.fullTextSearch && f.exactSearch(o, n) ? a(s, t) : 1 == u.fullTextSearch && f.fuzzySearch(o, n) && a(l, t))
                          })
                      }), F.merge(s, l), F.merge(r, s), r)
                  }
              },
              exactSearch: function(e, t) {
                  return e = e.toLowerCase(), -1 < (t = t.toLowerCase()).indexOf(e)
              },
              fuzzySearch: function(e, t) {
                  var n = t.length,
                      i = e.length;
                  if ("string" != typeof e) return !1;
                  if (e = e.toLowerCase(), t = t.toLowerCase(), n < i) return !1;
                  if (i === n) return e === t;
                  e: for (var o = 0, a = 0; o < i; o++) {
                      for (var r = e.charCodeAt(o); a < n;)
                          if (t.charCodeAt(a++) === r) continue e;
                      return !1
                  }
                  return !0
              },
              parse: {
                  response: function(e, t) {
                      if (Array.isArray(e)) {
                          var n = {};
                          n[a.results] = e, e = n
                      }
                      var i = f.generateResults(e);
                      f.verbose("Parsing server response", e), e !== R && t !== R && e[a.results] !== R && (f.addResults(i), f.inject.id(e[a.results]), f.write.cache(t, {
                          html: i,
                          results: e[a.results]
                      }), f.save.results(e[a.results]))
                  }
              },
              cancel: {
                  query: function() {
                      f.can.useAPI() && h.api("abort")
                  }
              },
              has: {
                  minimumCharacters: function() {
                      return f.get.value().length >= u.minCharacters
                  },
                  results: function() {
                      return 0 !== r.length && "" != r.html()
                  }
              },
              clear: {
                  cache: function(e) {
                      var t = h.data(d.cache);
                      e ? e && t && t[e] && (f.debug("Removing value from cache", e), delete t[e], h.data(d.cache, t)) : (f.debug("Clearing cache", e), h.removeData(d.cache))
                  }
              },
              read: {
                  cache: function(e) {
                      var t = h.data(d.cache);
                      return !!u.cache && (f.verbose("Checking cache for generated html for query", e), "object" == typeof t && t[e] !== R && t[e])
                  }
              },
              create: {
                  categoryResults: function(e) {
                      var n = {};
                      return F.each(e, function(e, t) {
                          t.category && (n[t.category] === R ? (f.verbose("Creating new category of results", t.category), n[t.category] = {
                              name: t.category,
                              results: [t]
                          }) : n[t.category].results.push(t))
                      }), n
                  },
                  id: function(e, t) {
                      var n, i = e + 1;
                      return t !== R ? (n = String.fromCharCode(97 + t) + i, f.verbose("Creating category result id", n)) : (n = i, f.verbose("Creating result id", n)), n
                  },
                  results: function() {
                      0 === r.length && (r = F("<div />").addClass(m.results).appendTo(h))
                  }
              },
              inject: {
                  result: function(e, t, n) {
                      f.verbose("Injecting result into results");
                      var i = n !== R ? r.children().eq(n).children(g.results).first().children(g.result).eq(t) : r.children(g.result).eq(t);
                      f.verbose("Injecting results metadata", i), i.data(d.result, e)
                  },
                  id: function(e) {
                      f.debug("Injecting unique ids into results");
                      var n = 0,
                          i = 0;
                      return "category" === u.type ? F.each(e, function(e, t) {
                          0 < t.results.length && (i = 0, F.each(t.results, function(e, t) {
                              t.id === R && (t.id = f.create.id(i, n)), f.inject.result(t, i, n), i++
                          }), n++)
                      }) : F.each(e, function(e, t) {
                          t.id === R && (t.id = f.create.id(i)), f.inject.result(t, i), i++
                      }), e
                  }
              },
              save: {
                  results: function(e) {
                      f.verbose("Saving current search results to metadata", e), h.data(d.results, e)
                  }
              },
              write: {
                  cache: function(e, t) {
                      var n = h.data(d.cache) !== R ? h.data(d.cache) : {};
                      u.cache && (f.verbose("Writing generated html to cache", e, t), n[e] = t, h.data(d.cache, n))
                  }
              },
              addResults: function(e) {
                  if (F.isFunction(u.onResultsAdd) && !1 === u.onResultsAdd.call(r, e)) return f.debug("onResultsAdd callback cancelled default action"), !1;
                  e ? (r.html(e), f.refreshResults(), u.selectFirstResult && f.select.firstResult(), f.showResults()) : f.hideResults(function() {
                      r.empty()
                  })
              },
              showResults: function(e) {
                  e = F.isFunction(e) ? e : function() {}, x || !f.is.visible() && f.has.results() && (f.can.transition() ? (f.debug("Showing results with css animations"), r.transition({
                      animation: u.transition + " in",
                      debug: u.debug,
                      verbose: u.verbose,
                      duration: u.duration,
                      onShow: function() {
                          var e = h.find(g.result).eq(0);
                          f.ensureVisible(e)
                      },
                      onComplete: function() {
                          e()
                      },
                      queue: !0
                  })) : (f.debug("Showing results with javascript"), r.stop().fadeIn(u.duration, u.easing)), u.onResultsOpen.call(r))
              },
              hideResults: function(e) {
                  e = F.isFunction(e) ? e : function() {}, f.is.visible() && (f.can.transition() ? (f.debug("Hiding results with css animations"), r.transition({
                      animation: u.transition + " out",
                      debug: u.debug,
                      verbose: u.verbose,
                      duration: u.duration,
                      onComplete: function() {
                          e()
                      },
                      queue: !0
                  })) : (f.debug("Hiding results with javascript"), r.stop().fadeOut(u.duration, u.easing)), u.onResultsClose.call(r))
              },
              generateResults: function(e) {
                  f.debug("Generating html from response", e);
                  var t = u.templates[u.type],
                      n = F.isPlainObject(e[a.results]) && !F.isEmptyObject(e[a.results]),
                      i = Array.isArray(e[a.results]) && 0 < e[a.results].length,
                      o = "";
                  return n || i ? (0 < u.maxResults && (n ? "standard" == u.type && f.error(p.maxResults) : e[a.results] = e[a.results].slice(0, u.maxResults)), F.isFunction(t) ? o = t(e, a, u.preserveHTML) : f.error(p.noTemplate, !1)) : u.showNoResults && (o = f.displayMessage(p.noResults, "empty", p.noResultsHeader)), u.onResults.call(b, e), o
              },
              displayMessage: function(e, t, n) {
                  return t = t || "standard", f.debug("Displaying message", e, t, n), f.addResults(u.templates.message(e, t, n)), u.templates.message(e, t, n)
              },
              setting: function(e, t) {
                  if (F.isPlainObject(e)) F.extend(!0, u, e);
                  else {
                      if (t === R) return u[e];
                      u[e] = t
                  }
              },
              internal: function(e, t) {
                  if (F.isPlainObject(e)) F.extend(!0, f, e);
                  else {
                      if (t === R) return f[e];
                      f[e] = t
                  }
              },
              debug: function() {
                  !u.silent && u.debug && (u.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), f.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !u.silent && u.verbose && u.debug && (u.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), f.verbose.apply(console, arguments)))
              },
              error: function() {
                  u.silent || (f.error = Function.prototype.bind.call(console.error, console, u.name + ":"), f.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      u.performance && (n = (t = (new Date).getTime()) - (T || t), T = t, S.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: b,
                          "Execution Time": n
                      })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
                  },
                  display: function() {
                      var e = u.name + ":",
                          n = 0;
                      T = !1, clearTimeout(f.performance.timer), F.each(S, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", k && (e += " '" + k + "'"), 1 < w.length && (e += " (" + w.length + ")"), (console.group !== R || console.table !== R) && 0 < S.length && (console.groupCollapsed(e), console.table ? console.table(S) : F.each(S, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), S = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = l;
                  return e = e || E, t = b || t, "string" == typeof i && r !== R && (i = i.split(/[\. ]/), o = i.length - 1, F.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (F.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== R) return a = r[n], !1;
                          if (!F.isPlainObject(r[t]) || e == o) return r[t] !== R && (a = r[t]), !1;
                          r = r[t]
                      }
                  })), F.isFunction(a) ? n = a.apply(t, e) : a !== R && (n = a), Array.isArray(C) ? C.push(n) : C !== R ? C = [C, n] : n !== R && (C = n), a
              }
          }, A ? (l === R && f.initialize(), f.invoke(D)) : (l !== R && l.invoke("destroy"), f.initialize())
      }), C !== R ? C : this
  }, F.fn.search.settings = {
      name: "Search",
      namespace: "search",
      silent: !1,
      debug: !1,
      verbose: !1,
      performance: !0,
      type: "standard",
      minCharacters: 1,
      selectFirstResult: !1,
      apiSettings: !1,
      source: !1,
      searchOnFocus: !0,
      searchFields: ["id", "title", "description"],
      displayField: "",
      fullTextSearch: "exact",
      ignoreDiacritics: !1,
      automatic: !0,
      hideDelay: 0,
      searchDelay: 200,
      maxResults: 7,
      cache: !0,
      showNoResults: !0,
      preserveHTML: !0,
      transition: "scale",
      duration: 200,
      easing: "easeOutExpo",
      onSelect: !1,
      onResultsAdd: !1,
      onSearchQuery: function(e) {},
      onResults: function(e) {},
      onResultsOpen: function() {},
      onResultsClose: function() {},
      className: {
          animating: "animating",
          active: "active",
          empty: "empty",
          focus: "focus",
          hidden: "hidden",
          loading: "loading",
          results: "results",
          pressed: "down"
      },
      error: {
          source: "Cannot search. No source used, and Semantic API module was not included",
          noResultsHeader: "No Results",
          noResults: "Your search returned no results",
          logging: "Error in debug logging, exiting.",
          noEndpoint: "No search endpoint was specified",
          noTemplate: "A valid template name was not specified.",
          oldSearchSyntax: "searchFullText setting has been renamed fullTextSearch for consistency, please adjust your settings.",
          serverError: "There was an issue querying the server.",
          maxResults: "Results must be an array to use maxResults setting",
          method: "The method you called is not defined.",
          noNormalize: '"ignoreDiacritics" setting will be ignored. Browser does not support String().normalize(). You may consider including <https://cdn.jsdelivr.net/npm/unorm@1.4.1/lib/unorm.min.js> as a polyfill.'
      },
      metadata: {
          cache: "cache",
          results: "results",
          result: "result"
      },
      regExp: {
          escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
          beginsWith: "(?:s|^)"
      },
      fields: {
          categories: "results",
          categoryName: "name",
          categoryResults: "results",
          description: "description",
          image: "image",
          price: "price",
          results: "results",
          title: "title",
          url: "url",
          action: "action",
          actionText: "text",
          actionURL: "url"
      },
      selector: {
          prompt: ".prompt",
          searchButton: ".search.button",
          results: ".results",
          message: ".results > .message",
          category: ".category",
          result: ".result",
          title: ".title, .name"
      },
      templates: {
          escape: function(e, t) {
              if (t) return e;
              var n = {
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&#x27;",
                  "`": "&#x60;"
              };
              return /[&<>"'`]/.test(e) ? (e = e.replace(/&(?![a-z0-9#]{1,6};)/, "&amp;")).replace(/[<>"'`]/g, function(e) {
                  return n[e]
              }) : e
          },
          message: function(e, t, n) {
              var i = "";
              return e !== R && t !== R && (i += '<div class="message ' + t + '">', n && (i += '<div class="header">' + n + "</div>"), i += ' <div class="description">' + e + "</div>", i += "</div>"), i
          },
          category: function(e, n, i) {
              var o = "",
                  a = F.fn.search.settings.templates.escape;
              return e[n.categoryResults] !== R && (F.each(e[n.categoryResults], function(e, t) {
                  t[n.results] !== R && 0 < t.results.length && (o += '<div class="category">', t[n.categoryName] !== R && (o += '<div class="name">' + a(t[n.categoryName], i) + "</div>"), o += '<div class="results">', F.each(t.results, function(e, t) {
                      t[n.url] ? o += '<a class="result" href="' + t[n.url].replace(/"/g, "") + '">' : o += '<a class="result">', t[n.image] !== R && (o += '<div class="image"> <img src="' + t[n.image].replace(/"/g, "") + '"></div>'), o += '<div class="content">', t[n.price] !== R && (o += '<div class="price">' + a(t[n.price], i) + "</div>"), t[n.title] !== R && (o += '<div class="title">' + a(t[n.title], i) + "</div>"), t[n.description] !== R && (o += '<div class="description">' + a(t[n.description], i) + "</div>"), o += "</div>", o += "</a>"
                  }), o += "</div>", o += "</div>")
              }), e[n.action] && (!1 === n.actionURL ? o += '<div class="action">' + a(e[n.action][n.actionText], i) + "</div>" : o += '<a href="' + e[n.action][n.actionURL].replace(/"/g, "") + '" class="action">' + a(e[n.action][n.actionText], i) + "</a>"), o)
          },
          standard: function(e, n, i) {
              var o = "",
                  a = F.fn.search.settings.templates.escape;
              return e[n.results] !== R && (F.each(e[n.results], function(e, t) {
                  t[n.url] ? o += '<a class="result" href="' + t[n.url].replace(/"/g, "") + '">' : o += '<a class="result">', t[n.image] !== R && (o += '<div class="image"> <img src="' + t[n.image].replace(/"/g, "") + '"></div>'), o += '<div class="content">', t[n.price] !== R && (o += '<div class="price">' + a(t[n.price], i) + "</div>"), t[n.title] !== R && (o += '<div class="title">' + a(t[n.title], i) + "</div>"), t[n.description] !== R && (o += '<div class="description">' + a(t[n.description], i) + "</div>"), o += "</div>", o += "</a>"
              }), e[n.action] && (!1 === n.actionURL ? o += '<div class="action">' + a(e[n.action][n.actionText], i) + "</div>" : o += '<a href="' + e[n.action][n.actionURL].replace(/"/g, "") + '" class="action">' + a(e[n.action][n.actionText], i) + "</a>"), o)
          }
      }
  }
}(jQuery, window, document),
function(A, e, E, F) {
  "use strict";
  A.isFunction = A.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), A.fn.shape = function(b) {
      var y, x = A(this),
          C = (new Date).getTime(),
          w = [],
          k = b,
          T = "string" == typeof k,
          S = [].slice.call(arguments, 1),
          D = e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || e.msRequestAnimationFrame || function(e) {
              setTimeout(e, 0)
          };
      return x.each(function() {
          var i, o, r, t = x.selector || "",
              s = A.isPlainObject(b) ? A.extend(!0, {}, A.fn.shape.settings, b) : A.extend({}, A.fn.shape.settings),
              e = s.namespace,
              l = s.selector,
              n = s.error,
              c = s.className,
              a = "." + e,
              u = "module-" + e,
              d = A(this),
              f = d.find(">" + l.sides),
              m = f.find(">" + l.side),
              g = !1,
              p = this,
              h = d.data(u);
          if (r = {
                  initialize: function() {
                      r.verbose("Initializing module for", p), r.set.defaultSide(), r.instantiate()
                  },
                  instantiate: function() {
                      r.verbose("Storing instance of module", r), h = r, d.data(u, h)
                  },
                  destroy: function() {
                      r.verbose("Destroying previous module for", p), d.removeData(u).off(a)
                  },
                  refresh: function() {
                      r.verbose("Refreshing selector cache for", p), d = A(p), f = A(this).find(l.sides), m = A(this).find(l.side)
                  },
                  repaint: function() {
                      r.verbose("Forcing repaint event");
                      (f[0] || E.createElement("div")).offsetWidth
                  },
                  animate: function(e, t) {
                      r.verbose("Animating box with properties", e), t = t || function(e) {
                          r.verbose("Executing animation callback"), e !== F && e.stopPropagation(), r.reset(), r.set.active()
                      }, s.beforeChange.call(o[0]), r.get.transitionEvent() ? (r.verbose("Starting CSS animation"), d.addClass(c.animating), f.css(e).one(r.get.transitionEvent(), t), r.set.duration(s.duration), D(function() {
                          d.addClass(c.animating), i.addClass(c.hidden)
                      })) : t()
                  },
                  queue: function(e) {
                      r.debug("Queueing animation of", e), f.one(r.get.transitionEvent(), function() {
                          r.debug("Executing queued animation"), setTimeout(function() {
                              d.shape(e)
                          }, 0)
                      })
                  },
                  reset: function() {
                      r.verbose("Animating states reset"), d.removeClass(c.animating).attr("style", "").removeAttr("style"), f.attr("style", "").removeAttr("style"), m.attr("style", "").removeAttr("style").removeClass(c.hidden), o.removeClass(c.animating).attr("style", "").removeAttr("style")
                  },
                  is: {
                      complete: function() {
                          return m.filter("." + c.active)[0] == o[0]
                      },
                      animating: function() {
                          return d.hasClass(c.animating)
                      },
                      hidden: function() {
                          return 0 < d.closest(":hidden").length
                      }
                  },
                  set: {
                      defaultSide: function() {
                          i = m.filter("." + s.className.active), o = 0 < i.next(l.side).length ? i.next(l.side) : m.first(), g = !1, r.verbose("Active side set to", i), r.verbose("Next side set to", o)
                      },
                      duration: function(e) {
                          e = "number" == typeof(e = e || s.duration) ? e + "ms" : e, r.verbose("Setting animation duration", e), !s.duration && 0 !== s.duration || f.add(m).css({
                              "-webkit-transition-duration": e,
                              "-moz-transition-duration": e,
                              "-ms-transition-duration": e,
                              "-o-transition-duration": e,
                              "transition-duration": e
                          })
                      },
                      currentStageSize: function() {
                          var e = m.filter("." + s.className.active),
                              t = e.outerWidth(!0),
                              n = e.outerHeight(!0);
                          d.css({
                              width: t,
                              height: n
                          })
                      },
                      stageSize: function() {
                          var e = d.clone().addClass(c.loading),
                              t = e.find(">" + l.sides + ">" + l.side),
                              n = t.filter("." + s.className.active),
                              i = g ? t.eq(g) : 0 < n.next(l.side).length ? n.next(l.side) : t.first(),
                              o = "next" === s.width ? i.outerWidth(!0) : "initial" === s.width ? d.width() : s.width,
                              a = "next" === s.height ? i.outerHeight(!0) : "initial" === s.height ? d.height() : s.height;
                          n.removeClass(c.active), i.addClass(c.active), e.insertAfter(d), e.remove(), "auto" !== s.width && (d.css("width", o + s.jitter), r.verbose("Specifying width during animation", o)), "auto" !== s.height && (d.css("height", a + s.jitter), r.verbose("Specifying height during animation", a))
                      },
                      nextSide: function(e) {
                          g = e, o = m.filter(e), g = m.index(o), 0 === o.length && (r.set.defaultSide(), r.error(n.side)), r.verbose("Next side manually set to", o)
                      },
                      active: function() {
                          r.verbose("Setting new side to active", o), m.removeClass(c.active), o.addClass(c.active), s.onChange.call(o[0]), r.set.defaultSide()
                      }
                  },
                  flip: {
                      to: function(e, t) {
                          if (r.is.hidden()) r.debug("Module not visible", o);
                          else if (!r.is.complete() || r.is.animating() || s.allowRepeats) {
                              var n = r.get.transform[e]();
                              r.is.animating() ? r.queue("flip " + e) : (r.debug("Flipping " + e, o), r.set.stageSize(), r.stage[t](), r.animate(n))
                          } else r.debug("Side already visible", o)
                      },
                      up: function() {
                          r.flip.to("up", "above")
                      },
                      down: function() {
                          r.flip.to("down", "below")
                      },
                      left: function() {
                          r.flip.to("left", "left")
                      },
                      right: function() {
                          r.flip.to("right", "right")
                      },
                      over: function() {
                          r.flip.to("over", "behind")
                      },
                      back: function() {
                          r.flip.to("back", "behind")
                      }
                  },
                  get: {
                      transform: {
                          up: function() {
                              var e = i.outerHeight(!0) / 2;
                              return {
                                  transform: "translateY(" + (o.outerHeight(!0) - e) + "px) translateZ(-" + e + "px) rotateX(-90deg)"
                              }
                          },
                          down: function() {
                              var e = i.outerHeight(!0) / 2;
                              return {
                                  transform: "translateY(-" + e + "px) translateZ(-" + e + "px) rotateX(90deg)"
                              }
                          },
                          left: function() {
                              var e = i.outerWidth(!0) / 2;
                              return {
                                  transform: "translateX(" + (o.outerWidth(!0) - e) + "px) translateZ(-" + e + "px) rotateY(90deg)"
                              }
                          },
                          right: function() {
                              var e = i.outerWidth(!0) / 2;
                              return {
                                  transform: "translateX(-" + e + "px) translateZ(-" + e + "px) rotateY(-90deg)"
                              }
                          },
                          over: function() {
                              return {
                                  transform: "translateX(" + -(i.outerWidth(!0) - o.outerWidth(!0)) / 2 + "px) rotateY(180deg)"
                              }
                          },
                          back: function() {
                              return {
                                  transform: "translateX(" + -(i.outerWidth(!0) - o.outerWidth(!0)) / 2 + "px) rotateY(-180deg)"
                              }
                          }
                      },
                      transitionEvent: function() {
                          var e, t = E.createElement("element"),
                              n = {
                                  transition: "transitionend",
                                  OTransition: "oTransitionEnd",
                                  MozTransition: "transitionend",
                                  WebkitTransition: "webkitTransitionEnd"
                              };
                          for (e in n)
                              if (t.style[e] !== F) return n[e]
                      },
                      nextSide: function() {
                          return 0 < i.next(l.side).length ? i.next(l.side) : m.first()
                      }
                  },
                  stage: {
                      above: function() {
                          var e = {
                              origin: (i.outerHeight(!0) - o.outerHeight(!0)) / 2,
                              depth: {
                                  active: o.outerHeight(!0) / 2,
                                  next: i.outerHeight(!0) / 2
                              }
                          };
                          r.verbose("Setting the initial animation position as above", o, e), i.css({
                              transform: "rotateX(0deg)"
                          }), o.addClass(c.animating).css({
                              top: e.origin + "px",
                              transform: "rotateX(90deg) translateZ(" + e.depth.next + "px) translateY(-" + e.depth.active + "px)"
                          })
                      },
                      below: function() {
                          var e = {
                              origin: (i.outerHeight(!0) - o.outerHeight(!0)) / 2,
                              depth: {
                                  active: o.outerHeight(!0) / 2,
                                  next: i.outerHeight(!0) / 2
                              }
                          };
                          r.verbose("Setting the initial animation position as below", o, e), i.css({
                              transform: "rotateX(0deg)"
                          }), o.addClass(c.animating).css({
                              top: e.origin + "px",
                              transform: "rotateX(-90deg) translateZ(" + e.depth.next + "px) translateY(" + e.depth.active + "px)"
                          })
                      },
                      left: function() {
                          var e = i.outerWidth(!0),
                              t = o.outerWidth(!0),
                              n = {
                                  origin: (e - t) / 2,
                                  depth: {
                                      active: t / 2,
                                      next: e / 2
                                  }
                              };
                          r.verbose("Setting the initial animation position as left", o, n), i.css({
                              transform: "rotateY(0deg)"
                          }), o.addClass(c.animating).css({
                              left: n.origin + "px",
                              transform: "rotateY(-90deg) translateZ(" + n.depth.next + "px) translateX(-" + n.depth.active + "px)"
                          })
                      },
                      right: function() {
                          var e = i.outerWidth(!0),
                              t = o.outerWidth(!0),
                              n = {
                                  origin: (e - t) / 2,
                                  depth: {
                                      active: t / 2,
                                      next: e / 2
                                  }
                              };
                          r.verbose("Setting the initial animation position as right", o, n), i.css({
                              transform: "rotateY(0deg)"
                          }), o.addClass(c.animating).css({
                              left: n.origin + "px",
                              transform: "rotateY(90deg) translateZ(" + n.depth.next + "px) translateX(" + n.depth.active + "px)"
                          })
                      },
                      behind: function() {
                          var e = i.outerWidth(!0),
                              t = o.outerWidth(!0),
                              n = {
                                  origin: (e - t) / 2,
                                  depth: {
                                      active: t / 2,
                                      next: e / 2
                                  }
                              };
                          r.verbose("Setting the initial animation position as behind", o, n), i.css({
                              transform: "rotateY(0deg)"
                          }), o.addClass(c.animating).css({
                              left: n.origin + "px",
                              transform: "rotateY(-180deg)"
                          })
                      }
                  },
                  setting: function(e, t) {
                      if (r.debug("Changing setting", e, t), A.isPlainObject(e)) A.extend(!0, s, e);
                      else {
                          if (t === F) return s[e];
                          A.isPlainObject(s[e]) ? A.extend(!0, s[e], t) : s[e] = t
                      }
                  },
                  internal: function(e, t) {
                      if (A.isPlainObject(e)) A.extend(!0, r, e);
                      else {
                          if (t === F) return r[e];
                          r[e] = t
                      }
                  },
                  debug: function() {
                      !s.silent && s.debug && (s.performance ? r.performance.log(arguments) : (r.debug = Function.prototype.bind.call(console.info, console, s.name + ":"), r.debug.apply(console, arguments)))
                  },
                  verbose: function() {
                      !s.silent && s.verbose && s.debug && (s.performance ? r.performance.log(arguments) : (r.verbose = Function.prototype.bind.call(console.info, console, s.name + ":"), r.verbose.apply(console, arguments)))
                  },
                  error: function() {
                      s.silent || (r.error = Function.prototype.bind.call(console.error, console, s.name + ":"), r.error.apply(console, arguments))
                  },
                  performance: {
                      log: function(e) {
                          var t, n;
                          s.performance && (n = (t = (new Date).getTime()) - (C || t), C = t, w.push({
                              Name: e[0],
                              Arguments: [].slice.call(e, 1) || "",
                              Element: p,
                              "Execution Time": n
                          })), clearTimeout(r.performance.timer), r.performance.timer = setTimeout(r.performance.display, 500)
                      },
                      display: function() {
                          var e = s.name + ":",
                              n = 0;
                          C = !1, clearTimeout(r.performance.timer), A.each(w, function(e, t) {
                              n += t["Execution Time"]
                          }), e += " " + n + "ms", t && (e += " '" + t + "'"), 1 < x.length && (e += " (" + x.length + ")"), (console.group !== F || console.table !== F) && 0 < w.length && (console.groupCollapsed(e), console.table ? console.table(w) : A.each(w, function(e, t) {
                              console.log(t.Name + ": " + t["Execution Time"] + "ms")
                          }), console.groupEnd()), w = []
                      }
                  },
                  invoke: function(i, e, t) {
                      var o, a, n, r = h;
                      return e = e || S, t = p || t, "string" == typeof i && r !== F && (i = i.split(/[\. ]/), o = i.length - 1, A.each(i, function(e, t) {
                          var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                          if (A.isPlainObject(r[n]) && e != o) r = r[n];
                          else {
                              if (r[n] !== F) return a = r[n], !1;
                              if (!A.isPlainObject(r[t]) || e == o) return r[t] !== F && (a = r[t]), !1;
                              r = r[t]
                          }
                      })), A.isFunction(a) ? n = a.apply(t, e) : a !== F && (n = a), Array.isArray(y) ? y.push(n) : y !== F ? y = [y, n] : n !== F && (y = n), a
                  }
              }, T) {
              h === F && r.initialize();
              var v = d.find("input");
              0 < v.length ? (v.blur(), setTimeout(function() {
                  r.invoke(k)
              }, 150)) : r.invoke(k)
          } else h !== F && h.invoke("destroy"), r.initialize()
      }), y !== F ? y : this
  }, A.fn.shape.settings = {
      name: "Shape",
      silent: !1,
      debug: !1,
      verbose: !1,
      jitter: 0,
      performance: !0,
      namespace: "shape",
      width: "initial",
      height: "initial",
      beforeChange: function() {},
      onChange: function() {},
      allowRepeats: !1,
      duration: !1,
      error: {
          side: "You tried to switch to a side that does not exist.",
          method: "The method you called is not defined"
      },
      className: {
          animating: "animating",
          hidden: "hidden",
          loading: "loading",
          active: "active"
      },
      selector: {
          sides: ".sides",
          side: ".side"
      }
  }
}(jQuery, window, document),
function(M, I, j, L) {
  "use strict";
  M.isFunction = M.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, I = void 0 !== I && I.Math == Math ? I : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), M.fn.sidebar = function(x) {
      var C, e = M(this),
          w = M(I),
          k = M(j),
          T = M("html"),
          S = M("head"),
          D = e.selector || "",
          A = (new Date).getTime(),
          E = [],
          F = x,
          P = "string" == typeof F,
          O = [].slice.call(arguments, 1),
          R = I.requestAnimationFrame || I.mozRequestAnimationFrame || I.webkitRequestAnimationFrame || I.msRequestAnimationFrame || function(e) {
              setTimeout(e, 0)
          };
      return e.each(function() {
          var r, s, e, t, l, c, u = M.isPlainObject(x) ? M.extend(!0, {}, M.fn.sidebar.settings, x) : M.extend({}, M.fn.sidebar.settings),
              n = u.selector,
              a = u.className,
              i = u.namespace,
              o = u.regExp,
              d = u.error,
              f = "." + i,
              m = "module-" + i,
              g = M(this),
              p = M(u.context),
              h = g.children(n.sidebar),
              v = (p.children(n.fixed), p.children(n.pusher)),
              b = this,
              y = g.data(m);
          c = {
              initialize: function() {
                  c.debug("Initializing sidebar", x), c.create.id(), l = c.get.transitionEvent(), u.delaySetup ? R(c.setup.layout) : c.setup.layout(), R(function() {
                      c.setup.cache()
                  }), c.instantiate()
              },
              instantiate: function() {
                  c.verbose("Storing instance of module", c), y = c, g.data(m, c)
              },
              create: {
                  id: function() {
                      e = (Math.random().toString(16) + "000000000").substr(2, 8), s = "." + e, c.verbose("Creating unique id for element", e)
                  }
              },
              destroy: function() {
                  c.verbose("Destroying previous module for", g), g.off(f).removeData(m), c.is.ios() && c.remove.ios(), p.off(s), w.off(s), k.off(s)
              },
              event: {
                  clickaway: function(e) {
                      if (u.closable) {
                          var t = 0 < v.find(e.target).length || v.is(e.target),
                              n = p.is(e.target);
                          t && (c.verbose("User clicked on dimmed page"), c.hide()), n && (c.verbose("User clicked on dimmable context (scaled out page)"), c.hide())
                      }
                  },
                  touch: function(e) {},
                  containScroll: function(e) {
                      b.scrollTop <= 0 && (b.scrollTop = 1), b.scrollTop + b.offsetHeight >= b.scrollHeight && (b.scrollTop = b.scrollHeight - b.offsetHeight - 1)
                  },
                  scroll: function(e) {
                      0 === M(e.target).closest(n.sidebar).length && e.preventDefault()
                  }
              },
              bind: {
                  clickaway: function() {
                      c.verbose("Adding clickaway events to context", p), p.on("click" + s, c.event.clickaway).on("touchend" + s, c.event.clickaway)
                  },
                  scrollLock: function() {
                      u.scrollLock && (c.debug("Disabling page scroll"), w.on("DOMMouseScroll" + s, c.event.scroll)), c.verbose("Adding events to contain sidebar scroll"), k.on("touchmove" + s, c.event.touch), g.on("scroll" + f, c.event.containScroll)
                  }
              },
              unbind: {
                  clickaway: function() {
                      c.verbose("Removing clickaway events from context", p), p.off(s)
                  },
                  scrollLock: function() {
                      c.verbose("Removing scroll lock from page"), k.off(s), w.off(s), g.off("scroll" + f)
                  }
              },
              add: {
                  inlineCSS: function() {
                      var e, t = c.cache.width || g.outerWidth(),
                          n = c.cache.height || g.outerHeight(),
                          i = c.is.rtl(),
                          o = c.get.direction(),
                          a = {
                              left: t,
                              right: -t,
                              top: n,
                              bottom: -n
                          };
                      i && (c.verbose("RTL detected, flipping widths"), a.left = -t, a.right = t), e = "<style>", "left" === o || "right" === o ? (c.debug("Adding CSS rules for animation distance", t), e += " .ui.visible." + o + ".sidebar ~ .fixed, .ui.visible." + o + ".sidebar ~ .pusher {   -webkit-transform: translate3d(" + a[o] + "px, 0, 0);           transform: translate3d(" + a[o] + "px, 0, 0); }") : "top" !== o && "bottom" != o || (e += " .ui.visible." + o + ".sidebar ~ .fixed, .ui.visible." + o + ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " + a[o] + "px, 0);           transform: translate3d(0, " + a[o] + "px, 0); }"), c.is.ie() && ("left" === o || "right" === o ? (c.debug("Adding CSS rules for animation distance", t), e += " body.pushable > .ui.visible." + o + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" + a[o] + "px, 0, 0);           transform: translate3d(" + a[o] + "px, 0, 0); }") : "top" !== o && "bottom" != o || (e += " body.pushable > .ui.visible." + o + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " + a[o] + "px, 0);           transform: translate3d(0, " + a[o] + "px, 0); }"), e += " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, 0, 0);           transform: translate3d(0, 0, 0); }"), r = M(e += "</style>").appendTo(S), c.debug("Adding sizing css to head", r)
                  }
              },
              refresh: function() {
                  c.verbose("Refreshing selector cache"), p = M(u.context), h = p.children(n.sidebar), v = p.children(n.pusher), p.children(n.fixed), c.clear.cache()
              },
              refreshSidebars: function() {
                  c.verbose("Refreshing other sidebars"), h = p.children(n.sidebar)
              },
              repaint: function() {
                  c.verbose("Forcing repaint event"), b.style.display = "none";
                  b.offsetHeight;
                  b.scrollTop = b.scrollTop, b.style.display = ""
              },
              setup: {
                  cache: function() {
                      c.cache = {
                          width: g.outerWidth(),
                          height: g.outerHeight()
                      }
                  },
                  layout: function() {
                      0 === p.children(n.pusher).length && (c.debug("Adding wrapper element for sidebar"), c.error(d.pusher), v = M('<div class="pusher" />'), p.children().not(n.omitted).not(h).wrapAll(v), c.refresh()), 0 !== g.nextAll(n.pusher).length && g.nextAll(n.pusher)[0] === v[0] || (c.debug("Moved sidebar to correct parent element"), c.error(d.movedSidebar, b), g.detach().prependTo(p), c.refresh()), c.clear.cache(), c.set.pushable(), c.set.direction()
                  }
              },
              attachEvents: function(e, t) {
                  var n = M(e);
                  t = M.isFunction(c[t]) ? c[t] : c.toggle, 0 < n.length ? (c.debug("Attaching sidebar events to element", e, t), n.on("click" + f, t)) : c.error(d.notFound, e)
              },
              show: function(e) {
                  if (e = M.isFunction(e) ? e : function() {}, c.is.hidden()) {
                      if (c.refreshSidebars(), u.overlay && (c.error(d.overlay), u.transition = "overlay"), c.refresh(), c.othersActive())
                          if (c.debug("Other sidebars currently visible"), u.exclusive) {
                              if ("overlay" != u.transition) return void c.hideOthers(c.show);
                              c.hideOthers()
                          } else u.transition = "overlay";
                      c.pushPage(function() {
                          e.call(b), u.onShow.call(b)
                      }), u.onChange.call(b), u.onVisible.call(b)
                  } else c.debug("Sidebar is already visible")
              },
              hide: function(e) {
                  e = M.isFunction(e) ? e : function() {}, (c.is.visible() || c.is.animating()) && (c.debug("Hiding sidebar", e), c.refreshSidebars(), c.pullPage(function() {
                      e.call(b), u.onHidden.call(b)
                  }), u.onChange.call(b), u.onHide.call(b))
              },
              othersAnimating: function() {
                  return 0 < h.not(g).filter("." + a.animating).length
              },
              othersVisible: function() {
                  return 0 < h.not(g).filter("." + a.visible).length
              },
              othersActive: function() {
                  return c.othersVisible() || c.othersAnimating()
              },
              hideOthers: function(e) {
                  var t = h.not(g).filter("." + a.visible),
                      n = t.length,
                      i = 0;
                  e = e || function() {}, t.sidebar("hide", function() {
                      ++i == n && e()
                  })
              },
              toggle: function() {
                  c.verbose("Determining toggled direction"), c.is.hidden() ? c.show() : c.hide()
              },
              pushPage: function(t) {
                  var e, n, i, o = c.get.transition(),
                      a = "overlay" === o || c.othersActive() ? g : v;
                  t = M.isFunction(t) ? t : function() {}, "scale down" == u.transition && c.scrollToTop(), c.set.transition(o), c.repaint(), e = function() {
                      c.bind.clickaway(), c.add.inlineCSS(), c.set.animating(), c.set.visible()
                  }, n = function() {
                      c.set.dimmed()
                  }, i = function(e) {
                      e.target == a[0] && (a.off(l + s, i), c.remove.animating(), c.bind.scrollLock(), t.call(b))
                  }, a.off(l + s), a.on(l + s, i), R(e), u.dimPage && !c.othersVisible() && R(n)
              },
              pullPage: function(t) {
                  var e, n, i = c.get.transition(),
                      o = "overlay" == i || c.othersActive() ? g : v;
                  t = M.isFunction(t) ? t : function() {}, c.verbose("Removing context push state", c.get.direction()), c.unbind.clickaway(), c.unbind.scrollLock(), e = function() {
                      c.set.transition(i), c.set.animating(), c.remove.visible(), u.dimPage && !c.othersVisible() && v.removeClass(a.dimmed)
                  }, n = function(e) {
                      e.target == o[0] && (o.off(l + s, n), c.remove.animating(), c.remove.transition(), c.remove.inlineCSS(), ("scale down" == i || u.returnScroll && c.is.mobile()) && c.scrollBack(), t.call(b))
                  }, o.off(l + s), o.on(l + s, n), R(e)
              },
              scrollToTop: function() {
                  c.verbose("Scrolling to top of page to avoid animation issues"), t = M(I).scrollTop(), g.scrollTop(0), I.scrollTo(0, 0)
              },
              scrollBack: function() {
                  c.verbose("Scrolling back to original page position"), I.scrollTo(0, t)
              },
              clear: {
                  cache: function() {
                      c.verbose("Clearing cached dimensions"), c.cache = {}
                  }
              },
              set: {
                  ios: function() {
                      T.addClass(a.ios)
                  },
                  pushed: function() {
                      p.addClass(a.pushed)
                  },
                  pushable: function() {
                      p.addClass(a.pushable)
                  },
                  dimmed: function() {
                      v.addClass(a.dimmed)
                  },
                  active: function() {
                      g.addClass(a.active)
                  },
                  animating: function() {
                      g.addClass(a.animating)
                  },
                  transition: function(e) {
                      e = e || c.get.transition(), g.addClass(e)
                  },
                  direction: function(e) {
                      e = e || c.get.direction(), g.addClass(a[e])
                  },
                  visible: function() {
                      g.addClass(a.visible)
                  },
                  overlay: function() {
                      g.addClass(a.overlay)
                  }
              },
              remove: {
                  inlineCSS: function() {
                      c.debug("Removing inline css styles", r), r && 0 < r.length && r.remove()
                  },
                  ios: function() {
                      T.removeClass(a.ios)
                  },
                  pushed: function() {
                      p.removeClass(a.pushed)
                  },
                  pushable: function() {
                      p.removeClass(a.pushable)
                  },
                  active: function() {
                      g.removeClass(a.active)
                  },
                  animating: function() {
                      g.removeClass(a.animating)
                  },
                  transition: function(e) {
                      e = e || c.get.transition(), g.removeClass(e)
                  },
                  direction: function(e) {
                      e = e || c.get.direction(), g.removeClass(a[e])
                  },
                  visible: function() {
                      g.removeClass(a.visible)
                  },
                  overlay: function() {
                      g.removeClass(a.overlay)
                  }
              },
              get: {
                  direction: function() {
                      return g.hasClass(a.top) ? a.top : g.hasClass(a.right) ? a.right : g.hasClass(a.bottom) ? a.bottom : a.left
                  },
                  transition: function() {
                      var e, t = c.get.direction();
                      return e = c.is.mobile() ? "auto" == u.mobileTransition ? u.defaultTransition.mobile[t] : u.mobileTransition : "auto" == u.transition ? u.defaultTransition.computer[t] : u.transition, c.verbose("Determined transition", e), e
                  },
                  transitionEvent: function() {
                      var e, t = j.createElement("element"),
                          n = {
                              transition: "transitionend",
                              OTransition: "oTransitionEnd",
                              MozTransition: "transitionend",
                              WebkitTransition: "webkitTransitionEnd"
                          };
                      for (e in n)
                          if (t.style[e] !== L) return n[e]
                  }
              },
              is: {
                  ie: function() {
                      return !I.ActiveXObject && "ActiveXObject" in I || "ActiveXObject" in I
                  },
                  ios: function() {
                      var e = navigator.userAgent,
                          t = e.match(o.ios),
                          n = e.match(o.mobileChrome);
                      return !(!t || n) && (c.verbose("Browser was found to be iOS", e), !0)
                  },
                  mobile: function() {
                      var e = navigator.userAgent;
                      return e.match(o.mobile) ? (c.verbose("Browser was found to be mobile", e), !0) : (c.verbose("Browser is not mobile, using regular transition", e), !1)
                  },
                  hidden: function() {
                      return !c.is.visible()
                  },
                  visible: function() {
                      return g.hasClass(a.visible)
                  },
                  open: function() {
                      return c.is.visible()
                  },
                  closed: function() {
                      return c.is.hidden()
                  },
                  vertical: function() {
                      return g.hasClass(a.top)
                  },
                  animating: function() {
                      return p.hasClass(a.animating)
                  },
                  rtl: function() {
                      return c.cache.rtl === L && (c.cache.rtl = "rtl" === g.attr("dir") || "rtl" === g.css("direction")), c.cache.rtl
                  }
              },
              setting: function(e, t) {
                  if (c.debug("Changing setting", e, t), M.isPlainObject(e)) M.extend(!0, u, e);
                  else {
                      if (t === L) return u[e];
                      M.isPlainObject(u[e]) ? M.extend(!0, u[e], t) : u[e] = t
                  }
              },
              internal: function(e, t) {
                  if (M.isPlainObject(e)) M.extend(!0, c, e);
                  else {
                      if (t === L) return c[e];
                      c[e] = t
                  }
              },
              debug: function() {
                  !u.silent && u.debug && (u.performance ? c.performance.log(arguments) : (c.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), c.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !u.silent && u.verbose && u.debug && (u.performance ? c.performance.log(arguments) : (c.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), c.verbose.apply(console, arguments)))
              },
              error: function() {
                  u.silent || (c.error = Function.prototype.bind.call(console.error, console, u.name + ":"), c.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      u.performance && (n = (t = (new Date).getTime()) - (A || t), A = t, E.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: b,
                          "Execution Time": n
                      })), clearTimeout(c.performance.timer), c.performance.timer = setTimeout(c.performance.display, 500)
                  },
                  display: function() {
                      var e = u.name + ":",
                          n = 0;
                      A = !1, clearTimeout(c.performance.timer), M.each(E, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", D && (e += " '" + D + "'"), (console.group !== L || console.table !== L) && 0 < E.length && (console.groupCollapsed(e), console.table ? console.table(E) : M.each(E, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), E = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = y;
                  return e = e || O, t = b || t, "string" == typeof i && r !== L && (i = i.split(/[\. ]/), o = i.length - 1, M.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (M.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== L) return a = r[n], !1;
                          if (!M.isPlainObject(r[t]) || e == o) return r[t] !== L ? a = r[t] : c.error(d.method, i), !1;
                          r = r[t]
                      }
                  })), M.isFunction(a) ? n = a.apply(t, e) : a !== L && (n = a), Array.isArray(C) ? C.push(n) : C !== L ? C = [C, n] : n !== L && (C = n), a
              }
          }, P ? (y === L && c.initialize(), c.invoke(F)) : (y !== L && c.invoke("destroy"), c.initialize())
      }), C !== L ? C : this
  }, M.fn.sidebar.settings = {
      name: "Sidebar",
      namespace: "sidebar",
      silent: !1,
      debug: !1,
      verbose: !1,
      performance: !0,
      transition: "auto",
      mobileTransition: "auto",
      defaultTransition: {
          computer: {
              left: "uncover",
              right: "uncover",
              top: "overlay",
              bottom: "overlay"
          },
          mobile: {
              left: "uncover",
              right: "uncover",
              top: "overlay",
              bottom: "overlay"
          }
      },
      context: "body",
      exclusive: !1,
      closable: !0,
      dimPage: !0,
      scrollLock: !1,
      returnScroll: !1,
      delaySetup: !1,
      duration: 500,
      onChange: function() {},
      onShow: function() {},
      onHide: function() {},
      onHidden: function() {},
      onVisible: function() {},
      className: {
          active: "active",
          animating: "animating",
          dimmed: "dimmed",
          ios: "ios",
          pushable: "pushable",
          pushed: "pushed",
          right: "right",
          top: "top",
          left: "left",
          bottom: "bottom",
          visible: "visible"
      },
      selector: {
          fixed: ".fixed",
          omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",
          pusher: ".pusher",
          sidebar: ".ui.sidebar"
      },
      regExp: {
          ios: /(iPad|iPhone|iPod)/g,
          mobileChrome: /(CriOS)/g,
          mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
      },
      error: {
          method: "The method you called is not defined.",
          pusher: "Had to add pusher element. For optimal performance make sure body content is inside a pusher element",
          movedSidebar: "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",
          overlay: "The overlay setting is no longer supported, use animation: overlay",
          notFound: "There were no elements that matched the specified selector"
      }
  }
}(jQuery, window, document),
function(S, D, A, E) {
  "use strict";
  S.isFunction = S.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, D = void 0 !== D && D.Math == Math ? D : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), S.fn.sticky = function(v) {
      var b, e = S(this),
          y = e.selector || "",
          x = (new Date).getTime(),
          C = [],
          w = v,
          k = "string" == typeof w,
          T = [].slice.call(arguments, 1);
      return e.each(function() {
          var t, i, e, n, d, f = S.isPlainObject(v) ? S.extend(!0, {}, S.fn.sticky.settings, v) : S.extend({}, S.fn.sticky.settings),
              o = f.className,
              a = f.namespace,
              r = f.error,
              s = "." + a,
              l = "module-" + a,
              c = S(this),
              u = S(D),
              m = S(f.scrollContext),
              g = c.data(l),
              p = D.requestAnimationFrame || D.mozRequestAnimationFrame || D.webkitRequestAnimationFrame || D.msRequestAnimationFrame || function(e) {
                  setTimeout(e, 0)
              },
              h = this;
          d = {
              initialize: function() {
                  d.determineContainer(), d.determineContext(), d.verbose("Initializing sticky", f, t), d.save.positions(), d.checkErrors(), d.bind.events(), f.observeChanges && d.observeChanges(), d.instantiate()
              },
              instantiate: function() {
                  d.verbose("Storing instance of module", d), g = d, c.data(l, d)
              },
              destroy: function() {
                  d.verbose("Destroying previous instance"), d.reset(), e && e.disconnect(), n && n.disconnect(), u.off("load" + s, d.event.load).off("resize" + s, d.event.resize), m.off("scrollchange" + s, d.event.scrollchange), c.removeData(l)
              },
              observeChanges: function() {
                  "MutationObserver" in D && (e = new MutationObserver(d.event.documentChanged), n = new MutationObserver(d.event.changed), e.observe(A, {
                      childList: !0,
                      subtree: !0
                  }), n.observe(h, {
                      childList: !0,
                      subtree: !0
                  }), n.observe(i[0], {
                      childList: !0,
                      subtree: !0
                  }), d.debug("Setting up mutation observer", n))
              },
              determineContainer: function() {
                  t = f.container ? S(f.container) : c.offsetParent()
              },
              determineContext: function() {
                  0 !== (i = f.context ? S(f.context) : t).length || d.error(r.invalidContext, f.context, c)
              },
              checkErrors: function() {
                  if (d.is.hidden() && d.error(r.visible, c), d.cache.element.height > d.cache.context.height) return d.reset(), void d.error(r.elementSize, c)
              },
              bind: {
                  events: function() {
                      u.on("load" + s, d.event.load).on("resize" + s, d.event.resize), m.off("scroll" + s).on("scroll" + s, d.event.scroll).on("scrollchange" + s, d.event.scrollchange)
                  }
              },
              event: {
                  changed: function(e) {
                      clearTimeout(d.timer), d.timer = setTimeout(function() {
                          d.verbose("DOM tree modified, updating sticky menu", e), d.refresh()
                      }, 100)
                  },
                  documentChanged: function(e) {
                      [].forEach.call(e, function(e) {
                          e.removedNodes && [].forEach.call(e.removedNodes, function(e) {
                              (e == h || 0 < S(e).find(h).length) && (d.debug("Element removed from DOM, tearing down events"), d.destroy())
                          })
                      })
                  },
                  load: function() {
                      d.verbose("Page contents finished loading"), p(d.refresh)
                  },
                  resize: function() {
                      d.verbose("Window resized"), p(d.refresh)
                  },
                  scroll: function() {
                      p(function() {
                          m.triggerHandler("scrollchange" + s, m.scrollTop())
                      })
                  },
                  scrollchange: function(e, t) {
                      d.stick(t), f.onScroll.call(h)
                  }
              },
              refresh: function(e) {
                  d.reset(), f.context || d.determineContext(), e && d.determineContainer(), d.save.positions(), d.stick(), f.onReposition.call(h)
              },
              supports: {
                  sticky: function() {
                      var e = S("<div/>");
                      return e.addClass(o.supported), e.css("position").match("sticky")
                  }
              },
              save: {
                  lastScroll: function(e) {
                      d.lastScroll = e
                  },
                  elementScroll: function(e) {
                      d.elementScroll = e
                  },
                  positions: function() {
                      var e = {
                              height: m.height()
                          },
                          t = {
                              margin: {
                                  top: parseInt(c.css("margin-top"), 10),
                                  bottom: parseInt(c.css("margin-bottom"), 10)
                              },
                              offset: c.offset(),
                              width: c.outerWidth(),
                              height: c.outerHeight()
                          },
                          n = {
                              offset: i.offset(),
                              height: i.outerHeight()
                          };
                      d.is.standardScroll() || (d.debug("Non-standard scroll. Removing scroll offset from element offset"), e.top = m.scrollTop(), e.left = m.scrollLeft(), t.offset.top += e.top, n.offset.top += e.top, t.offset.left += e.left, n.offset.left += e.left), d.cache = {
                          fits: t.height + f.offset <= e.height,
                          sameHeight: t.height == n.height,
                          scrollContext: {
                              height: e.height
                          },
                          element: {
                              margin: t.margin,
                              top: t.offset.top - t.margin.top,
                              left: t.offset.left,
                              width: t.width,
                              height: t.height,
                              bottom: t.offset.top + t.height
                          },
                          context: {
                              top: n.offset.top,
                              height: n.height,
                              bottom: n.offset.top + n.height
                          }
                      }, d.set.containerSize(), d.stick(), d.debug("Caching element positions", d.cache)
                  }
              },
              get: {
                  direction: function(e) {
                      var t = "down";
                      return e = e || m.scrollTop(), d.lastScroll !== E && (d.lastScroll < e ? t = "down" : d.lastScroll > e && (t = "up")), t
                  },
                  scrollChange: function(e) {
                      return e = e || m.scrollTop(), d.lastScroll ? e - d.lastScroll : 0
                  },
                  currentElementScroll: function() {
                      return d.elementScroll ? d.elementScroll : d.is.top() ? Math.abs(parseInt(c.css("top"), 10)) || 0 : Math.abs(parseInt(c.css("bottom"), 10)) || 0
                  },
                  elementScroll: function(e) {
                      e = e || m.scrollTop();
                      var t = d.cache.element,
                          n = d.cache.scrollContext,
                          i = d.get.scrollChange(e),
                          o = t.height - n.height + f.offset,
                          a = d.get.currentElementScroll(),
                          r = a + i;
                      return a = d.cache.fits || r < 0 ? 0 : o < r ? o : r
                  }
              },
              remove: {
                  lastScroll: function() {
                      delete d.lastScroll
                  },
                  elementScroll: function(e) {
                      delete d.elementScroll
                  },
                  minimumSize: function() {
                      t.css("min-height", "")
                  },
                  offset: function() {
                      c.css("margin-top", "")
                  }
              },
              set: {
                  offset: function() {
                      d.verbose("Setting offset on element", f.offset), c.css("margin-top", f.offset)
                  },
                  containerSize: function() {
                      var e = t.get(0).tagName;
                      "HTML" === e || "body" == e ? d.determineContainer() : Math.abs(t.outerHeight() - d.cache.context.height) > f.jitter && (d.debug("Context has padding, specifying exact height for container", d.cache.context.height), t.css({
                          height: d.cache.context.height
                      }))
                  },
                  minimumSize: function() {
                      var e = d.cache.element;
                      t.css("min-height", e.height)
                  },
                  scroll: function(e) {
                      d.debug("Setting scroll on element", e), d.elementScroll != e && (d.is.top() && c.css("bottom", "").css("top", -e), d.is.bottom() && c.css("top", "").css("bottom", e))
                  },
                  size: function() {
                      0 !== d.cache.element.height && 0 !== d.cache.element.width && (h.style.setProperty("width", d.cache.element.width + "px", "important"), h.style.setProperty("height", d.cache.element.height + "px", "important"))
                  }
              },
              is: {
                  standardScroll: function() {
                      return m[0] == D
                  },
                  top: function() {
                      return c.hasClass(o.top)
                  },
                  bottom: function() {
                      return c.hasClass(o.bottom)
                  },
                  initialPosition: function() {
                      return !d.is.fixed() && !d.is.bound()
                  },
                  hidden: function() {
                      return !c.is(":visible")
                  },
                  bound: function() {
                      return c.hasClass(o.bound)
                  },
                  fixed: function() {
                      return c.hasClass(o.fixed)
                  }
              },
              stick: function(e) {
                  var t = e || m.scrollTop(),
                      n = d.cache,
                      i = n.fits,
                      o = n.sameHeight,
                      a = n.element,
                      r = n.scrollContext,
                      s = n.context,
                      l = d.is.bottom() && f.pushing ? f.bottomOffset : f.offset,
                      c = (e = {
                          top: t + l,
                          bottom: t + l + r.height
                      }, i ? 0 : d.get.elementScroll(e.top)),
                      u = !i;
                  0 === a.height || o || (d.is.initialPosition() ? e.top >= s.bottom ? (d.debug("Initial element position is bottom of container"), d.bindBottom()) : e.top > a.top && (a.height + e.top - c >= s.bottom ? (d.debug("Initial element position is bottom of container"), d.bindBottom()) : (d.debug("Initial element position is fixed"), d.fixTop())) : d.is.fixed() ? d.is.top() ? e.top <= a.top ? (d.debug("Fixed element reached top of container"), d.setInitialPosition()) : a.height + e.top - c >= s.bottom ? (d.debug("Fixed element reached bottom of container"), d.bindBottom()) : u && (d.set.scroll(c), d.save.lastScroll(e.top), d.save.elementScroll(c)) : d.is.bottom() && (e.bottom - a.height <= a.top ? (d.debug("Bottom fixed rail has reached top of container"), d.setInitialPosition()) : e.bottom >= s.bottom ? (d.debug("Bottom fixed rail has reached bottom of container"), d.bindBottom()) : u && (d.set.scroll(c), d.save.lastScroll(e.top), d.save.elementScroll(c))) : d.is.bottom() && (e.top <= a.top ? (d.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"), d.setInitialPosition()) : f.pushing ? d.is.bound() && e.bottom <= s.bottom && (d.debug("Fixing bottom attached element to bottom of browser."), d.fixBottom()) : d.is.bound() && e.top <= s.bottom - a.height && (d.debug("Fixing bottom attached element to top of browser."), d.fixTop())))
              },
              bindTop: function() {
                  d.debug("Binding element to top of parent container"), d.remove.offset(), c.css({
                      left: "",
                      top: "",
                      marginBottom: ""
                  }).removeClass(o.fixed).removeClass(o.bottom).addClass(o.bound).addClass(o.top), f.onTop.call(h), f.onUnstick.call(h)
              },
              bindBottom: function() {
                  d.debug("Binding element to bottom of parent container"), d.remove.offset(), c.css({
                      left: "",
                      top: ""
                  }).removeClass(o.fixed).removeClass(o.top).addClass(o.bound).addClass(o.bottom), f.onBottom.call(h), f.onUnstick.call(h)
              },
              setInitialPosition: function() {
                  d.debug("Returning to initial position"), d.unfix(), d.unbind()
              },
              fixTop: function() {
                  d.debug("Fixing element to top of page"), f.setSize && d.set.size(), d.set.minimumSize(), d.set.offset(), c.css({
                      left: d.cache.element.left,
                      bottom: "",
                      marginBottom: ""
                  }).removeClass(o.bound).removeClass(o.bottom).addClass(o.fixed).addClass(o.top), f.onStick.call(h)
              },
              fixBottom: function() {
                  d.debug("Sticking element to bottom of page"), f.setSize && d.set.size(), d.set.minimumSize(), d.set.offset(), c.css({
                      left: d.cache.element.left,
                      bottom: "",
                      marginBottom: ""
                  }).removeClass(o.bound).removeClass(o.top).addClass(o.fixed).addClass(o.bottom), f.onStick.call(h)
              },
              unbind: function() {
                  d.is.bound() && (d.debug("Removing container bound position on element"), d.remove.offset(), c.removeClass(o.bound).removeClass(o.top).removeClass(o.bottom))
              },
              unfix: function() {
                  d.is.fixed() && (d.debug("Removing fixed position on element"), d.remove.minimumSize(), d.remove.offset(), c.removeClass(o.fixed).removeClass(o.top).removeClass(o.bottom), f.onUnstick.call(h))
              },
              reset: function() {
                  d.debug("Resetting elements position"), d.unbind(), d.unfix(), d.resetCSS(), d.remove.offset(), d.remove.lastScroll()
              },
              resetCSS: function() {
                  c.css({
                      width: "",
                      height: ""
                  }), t.css({
                      height: ""
                  })
              },
              setting: function(e, t) {
                  if (S.isPlainObject(e)) S.extend(!0, f, e);
                  else {
                      if (t === E) return f[e];
                      f[e] = t
                  }
              },
              internal: function(e, t) {
                  if (S.isPlainObject(e)) S.extend(!0, d, e);
                  else {
                      if (t === E) return d[e];
                      d[e] = t
                  }
              },
              debug: function() {
                  !f.silent && f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !f.silent && f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments)))
              },
              error: function() {
                  f.silent || (d.error = Function.prototype.bind.call(console.error, console, f.name + ":"), d.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      f.performance && (n = (t = (new Date).getTime()) - (x || t), x = t, C.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: h,
                          "Execution Time": n
                      })), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 0)
                  },
                  display: function() {
                      var e = f.name + ":",
                          n = 0;
                      x = !1, clearTimeout(d.performance.timer), S.each(C, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", y && (e += " '" + y + "'"), (console.group !== E || console.table !== E) && 0 < C.length && (console.groupCollapsed(e), console.table ? console.table(C) : S.each(C, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), C = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = g;
                  return e = e || T, t = h || t, "string" == typeof i && r !== E && (i = i.split(/[\. ]/), o = i.length - 1, S.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (S.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== E) return a = r[n], !1;
                          if (!S.isPlainObject(r[t]) || e == o) return r[t] !== E && (a = r[t]), !1;
                          r = r[t]
                      }
                  })), S.isFunction(a) ? n = a.apply(t, e) : a !== E && (n = a), Array.isArray(b) ? b.push(n) : b !== E ? b = [b, n] : n !== E && (b = n), a
              }
          }, k ? (g === E && d.initialize(), d.invoke(w)) : (g !== E && g.invoke("destroy"), d.initialize())
      }), b !== E ? b : this
  }, S.fn.sticky.settings = {
      name: "Sticky",
      namespace: "sticky",
      silent: !1,
      debug: !1,
      verbose: !0,
      performance: !0,
      pushing: !1,
      context: !1,
      container: !1,
      scrollContext: D,
      offset: 0,
      bottomOffset: 0,
      jitter: 5,
      setSize: !0,
      observeChanges: !1,
      onReposition: function() {},
      onScroll: function() {},
      onStick: function() {},
      onUnstick: function() {},
      onTop: function() {},
      onBottom: function() {},
      error: {
          container: "Sticky element must be inside a relative container",
          visible: "Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",
          method: "The method you called is not defined.",
          invalidContext: "Context specified does not exist",
          elementSize: "Sticky element is larger than its container, cannot create sticky."
      },
      className: {
          bound: "bound",
          fixed: "fixed",
          supported: "native",
          top: "top",
          bottom: "bottom"
      }
  }
}(jQuery, window, document),
function(P, O, R, M) {
  "use strict";
  P.isWindow = P.isWindow || function(e) {
      return null != e && e === e.window
  }, P.isFunction = P.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, O = void 0 !== O && O.Math == Math ? O : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), P.fn.tab = function(c) {
      var u, d = P.isFunction(this) ? P(O) : P(this),
          f = d.selector || "",
          m = (new Date).getTime(),
          g = [],
          D = c,
          A = "string" == typeof D,
          E = [].slice.call(arguments, 1),
          F = !1;
      return d.each(function() {
          var p, a, h, v, b, y, x = P.isPlainObject(c) ? P.extend(!0, {}, P.fn.tab.settings, c) : P.extend({}, P.fn.tab.settings),
              C = x.className,
              w = x.metadata,
              t = x.selector,
              k = x.error,
              n = x.regExp,
              e = "." + x.namespace,
              i = "module-" + x.namespace,
              T = P(this),
              o = {},
              S = !0,
              r = 0,
              s = this,
              l = T.data(i);
          b = {
              initialize: function() {
                  b.debug("Initializing tab menu item", T), b.fix.callbacks(), b.determineTabs(), b.debug("Determining tabs", x.context, a), x.auto && b.set.auto(), b.bind.events(), x.history && !F && (b.initializeHistory(), F = !0), x.autoTabActivation && l === M && null == b.determine.activeTab() && (b.debug("No active tab detected, setting first tab active", b.get.initialPath()), b.changeTab(!0 === x.autoTabActivation ? b.get.initialPath() : x.autoTabActivation)), b.instantiate()
              },
              instantiate: function() {
                  b.verbose("Storing instance of module", b), l = b, T.data(i, b)
              },
              destroy: function() {
                  b.debug("Destroying tabs", T), T.removeData(i).off(e)
              },
              bind: {
                  events: function() {
                      P.isWindow(s) || (b.debug("Attaching tab activation events to element", T), T.on("click" + e, b.event.click))
                  }
              },
              determineTabs: function() {
                  var e;
                  "parent" === x.context ? (0 < T.closest(t.ui).length ? (e = T.closest(t.ui), b.verbose("Using closest UI element as parent", e)) : e = T, p = e.parent(), b.verbose("Determined parent element for creating context", p)) : x.context ? (p = P(x.context), b.verbose("Using selector for tab context", x.context, p)) : p = P("body"), x.childrenOnly ? (a = p.children(t.tabs), b.debug("Searching tab context children for tabs", p, a)) : (a = p.find(t.tabs), b.debug("Searching tab context for tabs", p, a))
              },
              fix: {
                  callbacks: function() {
                      P.isPlainObject(c) && (c.onTabLoad || c.onTabInit) && (c.onTabLoad && (c.onLoad = c.onTabLoad, delete c.onTabLoad, b.error(k.legacyLoad, c.onLoad)), c.onTabInit && (c.onFirstLoad = c.onTabInit, delete c.onTabInit, b.error(k.legacyInit, c.onFirstLoad)), x = P.extend(!0, {}, P.fn.tab.settings, c))
                  }
              },
              initializeHistory: function() {
                  if (b.debug("Initializing page state"), P.address === M) return b.error(k.state), !1;
                  if ("state" == x.historyType) {
                      if (b.debug("Using HTML5 to manage state"), !1 === x.path) return b.error(k.path), !1;
                      P.address.history(!0).state(x.path)
                  }
                  P.address.bind("change", b.event.history.change)
              },
              event: {
                  click: function(e) {
                      var t = P(this).data(w.tab);
                      t !== M ? (x.history ? (b.verbose("Updating page state", e), P.address.value(t)) : (b.verbose("Changing tab", e), b.changeTab(t)), e.preventDefault()) : b.debug("No tab specified")
                  },
                  history: {
                      change: function(e) {
                          var t = e.pathNames.join("/") || b.get.initialPath(),
                              n = x.templates.determineTitle(t) || !1;
                          b.performance.display(), b.debug("History change event", t, e), y = e, t !== M && b.changeTab(t), n && P.address.title(n)
                      }
                  }
              },
              refresh: function() {
                  h && (b.debug("Refreshing tab", h), b.changeTab(h))
              },
              cache: {
                  read: function(e) {
                      return e !== M && o[e]
                  },
                  add: function(e, t) {
                      e = e || h, b.debug("Adding cached content for", e), o[e] = t
                  },
                  remove: function(e) {
                      e = e || h, b.debug("Removing cached content for", e), delete o[e]
                  }
              },
              escape: {
                  string: function(e) {
                      return (e = String(e)).replace(n.escape, "\\$&")
                  }
              },
              set: {
                  auto: function() {
                      var e = "string" == typeof x.path ? x.path.replace(/\/$/, "") + "/{$tab}" : "/{$tab}";
                      b.verbose("Setting up automatic tab retrieval from server", e), P.isPlainObject(x.apiSettings) ? x.apiSettings.url = e : x.apiSettings = {
                          url: e
                      }
                  },
                  loading: function(e) {
                      var t = b.get.tabElement(e);
                      t.hasClass(C.loading) || (b.verbose("Setting loading state for", t), t.addClass(C.loading).siblings(a).removeClass(C.active + " " + C.loading), 0 < t.length && x.onRequest.call(t[0], e))
                  },
                  state: function(e) {
                      P.address.value(e)
                  }
              },
              changeTab: function(d) {
                  var f = O.history && O.history.pushState && x.ignoreFirstLoad && S,
                      m = x.auto || P.isPlainObject(x.apiSettings),
                      g = m && !f ? b.utilities.pathToArray(d) : b.get.defaultPathArray(d);
                  d = b.utilities.arrayToPath(g), P.each(g, function(e, t) {
                      var n, i, o, a, r = g.slice(0, e + 1),
                          s = b.utilities.arrayToPath(r),
                          l = b.is.tab(s),
                          c = e + 1 == g.length,
                          u = b.get.tabElement(s);
                      if (b.verbose("Looking for tab", t), l) {
                          if (b.verbose("Tab was found", t), h = s, v = b.utilities.filterArray(g, r), c ? a = !0 : (i = g.slice(0, e + 2), o = b.utilities.arrayToPath(i), (a = !b.is.tab(o)) && b.verbose("Tab parameters found", i)), a && m) return f ? (b.debug("Ignoring remote content on first tab load", s), S = !1, b.cache.add(d, u.html()), b.activate.all(s), x.onFirstLoad.call(u[0], s, v, y), x.onLoad.call(u[0], s, v, y)) : (b.activate.navigation(s), b.fetch.content(s, d)), !1;
                          b.debug("Opened local tab", s), b.activate.all(s), b.cache.read(s) || (b.cache.add(s, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(u[0], s, v, y)), x.onLoad.call(u[0], s, v, y)
                      } else {
                          if (-1 != d.search("/") || "" === d) return b.error(k.missingTab, T, p, s), !1;
                          if (d = b.escape.string(d), s = (n = P("#" + d + ', a[name="' + d + '"]')).closest("[data-tab]").data(w.tab), u = b.get.tabElement(s), n && 0 < n.length && s) return b.debug("Anchor link used, opening parent tab", u, n), u.hasClass(C.active) || setTimeout(function() {
                              b.scrollTo(n)
                          }, 0), b.activate.all(s), b.cache.read(s) || (b.cache.add(s, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(u[0], s, v, y)), x.onLoad.call(u[0], s, v, y), !1
                      }
                  })
              },
              scrollTo: function(e) {
                  var t = !!(e && 0 < e.length) && e.offset().top;
                  !1 !== t && (b.debug("Forcing scroll to an in-page link in a hidden tab", t, e), P(R).scrollTop(t))
              },
              update: {
                  content: function(e, t, n) {
                      var i = b.get.tabElement(e),
                          o = i[0];
                      n = n !== M ? n : x.evaluateScripts, "string" == typeof x.cacheType && "dom" == x.cacheType.toLowerCase() && "string" != typeof t ? i.empty().append(P(t).clone(!0)) : n ? (b.debug("Updating HTML and evaluating inline scripts", e, t), i.html(t)) : (b.debug("Updating HTML", e, t), o.innerHTML = t)
                  }
              },
              fetch: {
                  content: function(t, n) {
                      var e, i, o = b.get.tabElement(t),
                          a = {
                              dataType: "html",
                              encodeParameters: !1,
                              on: "now",
                              cache: x.alwaysRefresh,
                              headers: {
                                  "X-Remote": !0
                              },
                              onSuccess: function(e) {
                                  "response" == x.cacheType && b.cache.add(n, e), b.update.content(t, e), t == h ? (b.debug("Content loaded", t), b.activate.tab(t)) : b.debug("Content loaded in background", t), x.onFirstLoad.call(o[0], t, v, y), x.onLoad.call(o[0], t, v, y), x.loadOnce ? b.cache.add(n, !0) : "string" == typeof x.cacheType && "dom" == x.cacheType.toLowerCase() && 0 < o.children().length ? setTimeout(function() {
                                      var e = o.children().clone(!0);
                                      e = e.not("script"), b.cache.add(n, e)
                                  }, 0) : b.cache.add(n, o.html())
                              },
                              urlData: {
                                  tab: n
                              }
                          },
                          r = o.api("get request") || !1,
                          s = r && "pending" === r.state();
                      n = n || t, i = b.cache.read(n), x.cache && i ? (b.activate.tab(t), b.debug("Adding cached content", n), x.loadOnce || ("once" == x.evaluateScripts ? b.update.content(t, i, !1) : b.update.content(t, i)), x.onLoad.call(o[0], t, v, y)) : s ? (b.set.loading(t), b.debug("Content is already loading", n)) : P.api !== M ? (e = P.extend(!0, {}, x.apiSettings, a), b.debug("Retrieving remote content", n, e), b.set.loading(t), o.api(e)) : b.error(k.api)
                  }
              },
              activate: {
                  all: function(e) {
                      b.activate.tab(e), b.activate.navigation(e)
                  },
                  tab: function(e) {
                      var t = b.get.tabElement(e),
                          n = "siblings" == x.deactivate ? t.siblings(a) : a.not(t),
                          i = t.hasClass(C.active);
                      b.verbose("Showing tab content for", t), i || (t.addClass(C.active), n.removeClass(C.active + " " + C.loading), 0 < t.length && x.onVisible.call(t[0], e))
                  },
                  navigation: function(e) {
                      var t = b.get.navElement(e),
                          n = "siblings" == x.deactivate ? t.siblings(d) : d.not(t),
                          i = t.hasClass(C.active);
                      b.verbose("Activating tab navigation for", t, e), i || (t.addClass(C.active), n.removeClass(C.active + " " + C.loading))
                  }
              },
              deactivate: {
                  all: function() {
                      b.deactivate.navigation(), b.deactivate.tabs()
                  },
                  navigation: function() {
                      d.removeClass(C.active)
                  },
                  tabs: function() {
                      a.removeClass(C.active + " " + C.loading)
                  }
              },
              is: {
                  tab: function(e) {
                      return e !== M && 0 < b.get.tabElement(e).length
                  }
              },
              get: {
                  initialPath: function() {
                      return d.eq(0).data(w.tab) || a.eq(0).data(w.tab)
                  },
                  path: function() {
                      return P.address.value()
                  },
                  defaultPathArray: function(e) {
                      return b.utilities.pathToArray(b.get.defaultPath(e))
                  },
                  defaultPath: function(e) {
                      var t = d.filter("[data-" + w.tab + '^="' + b.escape.string(e) + '/"]').eq(0).data(w.tab) || !1;
                      if (t) {
                          if (b.debug("Found default tab", t), r < x.maxDepth) return r++, b.get.defaultPath(t);
                          b.error(k.recursion)
                      } else b.debug("No default tabs found for", e, a);
                      return r = 0, e
                  },
                  navElement: function(e) {
                      return e = e || h, d.filter("[data-" + w.tab + '="' + b.escape.string(e) + '"]')
                  },
                  tabElement: function(e) {
                      var t, n, i, o;
                      return e = e || h, i = b.utilities.pathToArray(e), o = b.utilities.last(i), t = a.filter("[data-" + w.tab + '="' + b.escape.string(e) + '"]'), n = a.filter("[data-" + w.tab + '="' + b.escape.string(o) + '"]'), 0 < t.length ? t : n
                  },
                  tab: function() {
                      return h
                  }
              },
              determine: {
                  activeTab: function() {
                      var i = null;
                      return a.each(function(e, t) {
                          if (P(t).hasClass(C.active)) {
                              var n = P(this).data(w.tab);
                              d.filter("[data-" + w.tab + '="' + b.escape.string(n) + '"]').hasClass(C.active) && (i = n)
                          }
                      }), i
                  }
              },
              utilities: {
                  filterArray: function(e, t) {
                      return P.grep(e, function(e) {
                          return -1 == P.inArray(e, t)
                      })
                  },
                  last: function(e) {
                      return !!Array.isArray(e) && e[e.length - 1]
                  },
                  pathToArray: function(e) {
                      return e === M && (e = h), "string" == typeof e ? e.split("/") : [e]
                  },
                  arrayToPath: function(e) {
                      return !!Array.isArray(e) && e.join("/")
                  }
              },
              setting: function(e, t) {
                  if (b.debug("Changing setting", e, t), P.isPlainObject(e)) P.extend(!0, x, e);
                  else {
                      if (t === M) return x[e];
                      P.isPlainObject(x[e]) ? P.extend(!0, x[e], t) : x[e] = t
                  }
              },
              internal: function(e, t) {
                  if (P.isPlainObject(e)) P.extend(!0, b, e);
                  else {
                      if (t === M) return b[e];
                      b[e] = t
                  }
              },
              debug: function() {
                  !x.silent && x.debug && (x.performance ? b.performance.log(arguments) : (b.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), b.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !x.silent && x.verbose && x.debug && (x.performance ? b.performance.log(arguments) : (b.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), b.verbose.apply(console, arguments)))
              },
              error: function() {
                  x.silent || (b.error = Function.prototype.bind.call(console.error, console, x.name + ":"), b.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      x.performance && (n = (t = (new Date).getTime()) - (m || t), m = t, g.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: s,
                          "Execution Time": n
                      })), clearTimeout(b.performance.timer), b.performance.timer = setTimeout(b.performance.display, 500)
                  },
                  display: function() {
                      var e = x.name + ":",
                          n = 0;
                      m = !1, clearTimeout(b.performance.timer), P.each(g, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", f && (e += " '" + f + "'"), (console.group !== M || console.table !== M) && 0 < g.length && (console.groupCollapsed(e), console.table ? console.table(g) : P.each(g, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), g = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = l;
                  return e = e || E, t = s || t, "string" == typeof i && r !== M && (i = i.split(/[\. ]/), o = i.length - 1, P.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (P.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== M) return a = r[n], !1;
                          if (!P.isPlainObject(r[t]) || e == o) return r[t] !== M ? a = r[t] : b.error(k.method, i), !1;
                          r = r[t]
                      }
                  })), P.isFunction(a) ? n = a.apply(t, e) : a !== M && (n = a), Array.isArray(u) ? u.push(n) : u !== M ? u = [u, n] : n !== M && (u = n), a
              }
          }, A ? (l === M && b.initialize(), b.invoke(D)) : (l !== M && l.invoke("destroy"), b.initialize())
      }), u !== M ? u : this
  }, P.tab = function() {
      P(O).tab.apply(this, arguments)
  }, P.fn.tab.settings = {
      name: "Tab",
      namespace: "tab",
      silent: !1,
      debug: !1,
      verbose: !1,
      performance: !0,
      auto: !1,
      history: !1,
      historyType: "hash",
      path: !1,
      context: !1,
      childrenOnly: !1,
      maxDepth: 25,
      deactivate: "siblings",
      alwaysRefresh: !1,
      cache: !0,
      loadOnce: !1,
      cacheType: "response",
      ignoreFirstLoad: !1,
      apiSettings: !1,
      evaluateScripts: "once",
      autoTabActivation: !0,
      onFirstLoad: function(e, t, n) {},
      onLoad: function(e, t, n) {},
      onVisible: function(e, t, n) {},
      onRequest: function(e, t, n) {},
      templates: {
          determineTitle: function(e) {}
      },
      error: {
          api: "You attempted to load content without API module",
          method: "The method you called is not defined",
          missingTab: "Activated tab cannot be found. Tabs are case-sensitive.",
          noContent: "The tab you specified is missing a content url.",
          path: "History enabled, but no path was specified",
          recursion: "Max recursive depth reached",
          legacyInit: "onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",
          legacyLoad: "onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",
          state: "History requires Asual's Address library <https://github.com/asual/jquery-address>"
      },
      regExp: {
          escape: /[-[\]{}()*+?.,\\^$|#\s:=@]/g
      },
      metadata: {
          tab: "tab",
          loaded: "loaded",
          promise: "promise"
      },
      className: {
          loading: "loading",
          active: "active"
      },
      selector: {
          tabs: ".ui.tab",
          ui: ".ui"
      }
  }
}(jQuery, window, document),
function(F, e, t, P) {
  "use strict";
  F.isFunction = F.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), F.fn.toast = function(C) {
      var w, e = F(this),
          k = e.selector || "",
          T = (new Date).getTime(),
          S = [],
          D = C,
          A = "string" == typeof D,
          E = [].slice.call(arguments, 1);
      return e.each(function() {
          var i, o, a, r, s, l, c, u, d = F.isPlainObject(C) ? F.extend(!0, {}, F.fn.toast.settings, C) : F.extend({}, F.fn.toast.settings),
              f = d.className,
              m = d.selector,
              g = d.error,
              e = d.namespace,
              p = d.fields,
              t = "." + e,
              n = e + "-module",
              h = F(this),
              v = d.context ? F(d.context) : F("body"),
              b = h.hasClass("toast") || h.hasClass("message") || h.hasClass("card"),
              y = this,
              x = b ? h.data(n) : P;
          u = {
              initialize: function() {
                  u.verbose("Initializing element"), u.has.container() || u.create.container(), (b || "" !== d.message || "" !== d.title || "" !== u.get.iconClass() || d.showImage || u.has.configActions()) && ("string" == typeof d.showProgress && -1 !== [f.top, f.bottom].indexOf(d.showProgress) || (d.showProgress = !1), u.create.toast(), d.closeOnClick && (d.closeIcon || 0 < F(o).find(m.input).length || u.has.configActions()) && (d.closeOnClick = !1), d.closeOnClick || i.addClass(f.unclickable), u.bind.events()), u.instantiate(), i && u.show()
              },
              instantiate: function() {
                  u.verbose("Storing instance of toast"), x = u, h.data(n, x)
              },
              destroy: function() {
                  i && (u.debug("Removing toast", i), u.unbind.events(), i.remove(), l = o = i = P, d.onRemove.call(i, y), c = s = r = P), h.removeData(n)
              },
              show: function(e) {
                  e = e || function() {}, u.debug("Showing toast"), !1 !== d.onShow.call(i, y) ? u.animate.show(e) : u.debug("onShow callback returned false, cancelling toast animation")
              },
              close: function(e) {
                  e = e || function() {}, u.remove.visible(), u.unbind.events(), u.animate.close(e)
              },
              create: {
                  container: function() {
                      u.verbose("Creating container"), v.append(F("<div/>", {
                          class: d.position + " " + f.container + " " + (d.horizontal ? f.horizontal : "")
                      }))
                  },
                  toast: function() {
                      i = F("<div/>", {
                          class: f.box
                      });
                      var e = u.get.iconClass();
                      if (b) o = d.cloneModule ? h.clone().removeAttr("id") : h, c = o.find("> i" + u.helpers.toClass(f.close)), d.closeIcon = 0 < c.length, "" !== e && o.find(m.icon).attr("class", e + " " + f.icon), d.showImage && o.find(m.image).attr("src", d.showImage), "" !== d.title && o.find(m.title).html(u.helpers.escape(d.title, d.preserveHTML)), "" !== d.message && o.find(m.message).html(u.helpers.escape(d.message, d.preserveHTML));
                      else {
                          u.verbose("Creating toast"), o = F("<div/>");
                          var t = F("<div/>", {
                              class: f.content
                          });
                          "" !== e && o.append(F("<i/>", {
                              class: e + " " + f.icon
                          })), d.showImage && o.append(F("<img>", {
                              class: f.image + " " + d.classImage,
                              src: d.showImage
                          })), "" !== d.title && t.append(F("<div/>", {
                              class: f.title,
                              text: d.title
                          })), t.append(F("<div/>", {
                              class: f.message,
                              html: u.helpers.escape(d.message, d.preserveHTML)
                          })), o.addClass(d.class + " " + f.toast).append(t), o.css("opacity", d.opacity), d.closeIcon && ((c = F("<i/>", {
                              class: f.close + " " + ("string" == typeof d.closeIcon ? d.closeIcon : "")
                          })).hasClass(f.left) ? o.prepend(c) : o.append(c))
                      }
                      if (o.hasClass(f.compact) && (d.compact = !0), o.hasClass("card") && (d.compact = !1), a = o.find(".actions"), u.has.configActions() && (0 === a.length && (a = F("<div/>", {
                              class: f.actions + " " + (d.classActions || "")
                          }).appendTo(o)), o.hasClass("card") && !a.hasClass(f.attached) && (a.addClass(f.extraContent), a.hasClass(f.vertical) && (a.removeClass(f.vertical), u.error(g.verticalCard))), d.actions.forEach(function(e) {
                              var t = e[p.icon] ? '<i class="' + u.helpers.deQuote(e[p.icon]) + ' icon"></i>' : "",
                                  n = u.helpers.escape(e[p.text] || "", d.preserveHTML),
                                  i = u.helpers.deQuote(e[p.class] || ""),
                                  o = e[p.click] && F.isFunction(e[p.click]) ? e[p.click] : function() {};
                              a.append(F("<button/>", {
                                  html: t + n,
                                  class: f.button + " " + i,
                                  click: function() {
                                      !1 !== o.call(y, h) && u.close()
                                  }
                              }))
                          })), a && a.hasClass(f.vertical) && o.addClass(f.vertical), 0 < a.length && !a.hasClass(f.attached) && (!a || a.hasClass(f.basic) && !a.hasClass(f.left) || o.addClass(f.actions)), "auto" === d.displayTime && (d.displayTime = Math.max(d.minDisplayTime, o.text().split(" ").length / d.wordsPerMinute * 6e4)), i.append(o), 0 < a.length && a.hasClass(f.attached) && (a.addClass(f.buttons), a.detach(), o.addClass(f.attached), a.hasClass(f.vertical) ? (o.wrap(F("<div/>", {
                              class: f.vertical + " " + f.attached + " " + (d.compact ? f.compact : "")
                          })), a.hasClass(f.left) ? o.addClass(f.left).parent().addClass(f.left).prepend(a) : o.parent().append(a)) : a.hasClass(f.top) ? (i.prepend(a), o.addClass(f.bottom)) : (i.append(a), o.addClass(f.top))), h !== o && (y = (h = o)[0]), 0 < d.displayTime) {
                          var n = f.progressing + " " + (d.pauseOnHover ? f.pausable : "");
                          d.showProgress && (r = F("<div/>", {
                              class: f.progress + " " + (d.classProgress || d.class),
                              "data-percent": ""
                          }), d.classProgress || (o.hasClass("toast") && !o.hasClass(f.inverted) ? r.addClass(f.inverted) : r.removeClass(f.inverted)), s = F("<div/>", {
                              class: "bar " + (d.progressUp ? "up " : "down ") + n
                          }), r.addClass(d.showProgress).append(s), r.hasClass(f.top) ? i.prepend(r) : i.append(r), s.css("animation-duration", d.displayTime / 1e3 + "s")), (l = F("<span/>", {
                              class: "wait " + n
                          })).css("animation-duration", d.displayTime / 1e3 + "s"), l.appendTo(o)
                      }
                      d.compact && (i.addClass(f.compact), o.addClass(f.compact), r && r.addClass(f.compact)), d.newestOnTop ? i.prependTo(u.get.container()) : i.appendTo(u.get.container())
                  }
              },
              bind: {
                  events: function() {
                      u.debug("Binding events to toast"), (d.closeOnClick || d.closeIcon) && (d.closeIcon ? c : o).on("click" + t, u.event.click), l && l.on("animationend" + t, u.close), i.on("click" + t, m.approve, u.event.approve).on("click" + t, m.deny, u.event.deny)
                  }
              },
              unbind: {
                  events: function() {
                      u.debug("Unbinding events to toast"), (d.closeOnClick || d.closeIcon) && (d.closeIcon ? c : o).off("click" + t), l && l.off("animationend" + t), i.off("click" + t)
                  }
              },
              animate: {
                  show: function(e) {
                      e = F.isFunction(e) ? e : function() {}, d.transition && u.can.useElement("transition") && h.transition("is supported") && (u.set.visible(), i.transition({
                          animation: d.transition.showMethod + " in",
                          queue: !1,
                          debug: d.debug,
                          verbose: d.verbose,
                          duration: d.transition.showDuration,
                          onComplete: function() {
                              e.call(i, y), d.onVisible.call(i, y)
                          }
                      }))
                  },
                  close: function(e) {
                      e = F.isFunction(e) ? e : function() {}, u.debug("Closing toast"), !1 !== d.onHide.call(i, y) ? d.transition && F.fn.transition !== P && h.transition("is supported") ? i.transition({
                          animation: d.transition.hideMethod + " out",
                          queue: !1,
                          duration: d.transition.hideDuration,
                          debug: d.debug,
                          verbose: d.verbose,
                          interval: 50,
                          onBeforeHide: function(e) {
                              e = F.isFunction(e) ? e : function() {}, "" !== d.transition.closeEasing ? i && (i.css("opacity", 0), i.wrap("<div/>").parent().hide(d.transition.closeDuration, d.transition.closeEasing, function() {
                                  i && (i.parent().remove(), e.call(i))
                              })) : e.call(i)
                          },
                          onComplete: function() {
                              e.call(i, y), d.onHidden.call(i, y), u.destroy()
                          }
                      }) : u.error(g.noTransition) : u.debug("onHide callback returned false, cancelling toast animation")
                  },
                  pause: function() {
                      l.css("animationPlayState", "paused"), s && s.css("animationPlayState", "paused")
                  },
                  continue: function() {
                      l.css("animationPlayState", "running"), s && s.css("animationPlayState", "running")
                  }
              },
              has: {
                  container: function() {
                      return u.verbose("Determining if there is already a container"), 0 < v.find(u.helpers.toClass(d.position) + m.container + (d.horizontal ? u.helpers.toClass(f.horizontal) : "")).length
                  },
                  toast: function() {
                      return !!u.get.toast()
                  },
                  toasts: function() {
                      return 0 < u.get.toasts().length
                  },
                  configActions: function() {
                      return Array.isArray(d.actions) && 0 < d.actions.length
                  }
              },
              get: {
                  container: function() {
                      return v.find(u.helpers.toClass(d.position) + m.container)[0]
                  },
                  toastBox: function() {
                      return i || null
                  },
                  toast: function() {
                      return o || null
                  },
                  toasts: function() {
                      return F(u.get.container()).find(m.box)
                  },
                  iconClass: function() {
                      return "string" == typeof d.showIcon ? d.showIcon : d.showIcon && d.icons[d.class] ? d.icons[d.class] : ""
                  },
                  remainingTime: function() {
                      return l ? l.css("opacity") * d.displayTime : 0
                  }
              },
              set: {
                  visible: function() {
                      o.addClass(f.visible)
                  }
              },
              remove: {
                  visible: function() {
                      o.removeClass(f.visible)
                  }
              },
              event: {
                  click: function(e) {
                      0 === F(e.target).closest("a").length && (d.onClick.call(i, y), u.close())
                  },
                  approve: function() {
                      !1 !== d.onApprove.call(y, h) ? u.close() : u.verbose("Approve callback returned false cancelling close")
                  },
                  deny: function() {
                      !1 !== d.onDeny.call(y, h) ? u.close() : u.verbose("Deny callback returned false cancelling close")
                  }
              },
              helpers: {
                  toClass: function(e) {
                      var t = e.split(" "),
                          n = "";
                      return t.forEach(function(e) {
                          n += "." + e
                      }), n
                  },
                  deQuote: function(e) {
                      return String(e).replace(/"/g, "")
                  },
                  escape: function(e, t) {
                      if (t) return e;
                      var n = {
                          "<": "&lt;",
                          ">": "&gt;",
                          '"': "&quot;",
                          "'": "&#x27;",
                          "`": "&#x60;"
                      };
                      return /[&<>"'`]/.test(e) ? (e = e.replace(/&(?![a-z0-9#]{1,6};)/, "&amp;")).replace(/[<>"'`]/g, function(e) {
                          return n[e]
                      }) : e
                  }
              },
              can: {
                  useElement: function(e) {
                      return F.fn[e] !== P || (u.error(g.noElement.replace("{element}", e)), !1)
                  }
              },
              setting: function(e, t) {
                  if (u.debug("Changing setting", e, t), F.isPlainObject(e)) F.extend(!0, d, e);
                  else {
                      if (t === P) return d[e];
                      F.isPlainObject(d[e]) ? F.extend(!0, d[e], t) : d[e] = t
                  }
              },
              internal: function(e, t) {
                  if (F.isPlainObject(e)) F.extend(!0, u, e);
                  else {
                      if (t === P) return u[e];
                      u[e] = t
                  }
              },
              debug: function() {
                  !d.silent && d.debug && (d.performance ? u.performance.log(arguments) : (u.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), u.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !d.silent && d.verbose && d.debug && (d.performance ? u.performance.log(arguments) : (u.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), u.verbose.apply(console, arguments)))
              },
              error: function() {
                  d.silent || (u.error = Function.prototype.bind.call(console.error, console, d.name + ":"), u.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      d.performance && (n = (t = (new Date).getTime()) - (T || t), T = t, S.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: y,
                          "Execution Time": n
                      })), clearTimeout(u.performance.timer), u.performance.timer = setTimeout(u.performance.display, 500)
                  },
                  display: function() {
                      var e = d.name + ":",
                          n = 0;
                      T = !1, clearTimeout(u.performance.timer), F.each(S, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", k && (e += " '" + k + "'"), (console.group !== P || console.table !== P) && 0 < S.length && (console.groupCollapsed(e), console.table ? console.table(S) : F.each(S, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), S = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = x;
                  return e = e || E, t = y || t, "string" == typeof i && r !== P && (i = i.split(/[\. ]/), o = i.length - 1, F.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (F.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== P) return a = r[n], !1;
                          if (!F.isPlainObject(r[t]) || e == o) return r[t] !== P ? a = r[t] : u.error(g.method, i), !1;
                          r = r[t]
                      }
                  })), F.isFunction(a) ? n = a.apply(t, e) : a !== P && (n = a), Array.isArray(w) ? w.push(n) : w !== P ? w = [w, n] : n !== P && (w = n), a
              }
          }, A ? (x === P && u.initialize(), u.invoke(D)) : (x !== P && x.invoke("destroy"), u.initialize(), w = h)
      }), w !== P ? w : this
  }, F.fn.toast.settings = {
      name: "Toast",
      namespace: "toast",
      silent: !1,
      debug: !1,
      verbose: !1,
      performance: !0,
      context: "body",
      position: "top right",
      horizontal: !1,
      class: "neutral",
      classProgress: !1,
      classActions: !1,
      classImage: "mini",
      title: "",
      message: "",
      displayTime: 3e3,
      minDisplayTime: 1e3,
      wordsPerMinute: 120,
      showIcon: !1,
      newestOnTop: !1,
      showProgress: !1,
      pauseOnHover: !0,
      progressUp: !1,
      opacity: 1,
      compact: !0,
      closeIcon: !1,
      closeOnClick: !0,
      cloneModule: !0,
      actions: !1,
      preserveHTML: !0,
      showImage: !1,
      transition: {
          showMethod: "scale",
          showDuration: 500,
          hideMethod: "scale",
          hideDuration: 500,
          closeEasing: "easeOutCubic",
          closeDuration: 500
      },
      error: {
          method: "The method you called is not defined.",
          noElement: "This module requires ui {element}",
          verticalCard: "Vertical but not attached actions are not supported for card layout"
      },
      className: {
          container: "ui toast-container",
          box: "floating toast-box",
          progress: "ui attached active progress",
          toast: "ui toast",
          icon: "centered icon",
          visible: "visible",
          content: "content",
          title: "ui header",
          message: "message",
          actions: "actions",
          extraContent: "extra content",
          button: "ui button",
          buttons: "ui buttons",
          close: "close icon",
          image: "ui image",
          vertical: "vertical",
          horizontal: "horizontal",
          attached: "attached",
          inverted: "inverted",
          compact: "compact",
          pausable: "pausable",
          progressing: "progressing",
          top: "top",
          bottom: "bottom",
          left: "left",
          basic: "basic",
          unclickable: "unclickable"
      },
      icons: {
          info: "info",
          success: "checkmark",
          warning: "warning",
          error: "times"
      },
      selector: {
          container: ".ui.toast-container",
          box: ".toast-box",
          toast: ".ui.toast",
          title: ".header",
          message: ".message:not(.ui)",
          image: "> img.image, > .image > img",
          icon: "> i.icon",
          input: 'input:not([type="hidden"]), textarea, select, button, .ui.button, ui.dropdown',
          approve: ".actions .positive, .actions .approve, .actions .ok",
          deny: ".actions .negative, .actions .deny, .actions .cancel"
      },
      fields: {
          class: "class",
          text: "text",
          icon: "icon",
          click: "click"
      },
      onShow: function() {},
      onVisible: function() {},
      onClick: function() {},
      onHide: function() {},
      onHidden: function() {},
      onRemove: function() {},
      onApprove: function() {},
      onDeny: function() {}
  }, F.extend(F.easing, {
      easeOutBounce: function(e, t, n, i, o) {
          return (t /= o) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
      },
      easeOutCubic: function(e) {
          return --e * e * e + 1
      }
  })
}(jQuery, window, document),
function(C, e, w, k) {
  "use strict";
  C.isFunction = C.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), C.fn.transition = function() {
      var c, r = C(this),
          g = r.selector || "",
          p = (new Date).getTime(),
          h = [],
          v = arguments,
          b = v[0],
          y = [].slice.call(arguments, 1),
          x = "string" == typeof b;
      return r.each(function(i) {
          var u, s, t, d, n, o, e, a, f, m = C(this),
              l = this;
          (f = {
              initialize: function() {
                  u = f.get.settings.apply(l, v), d = u.className, t = u.error, n = u.metadata, a = "." + u.namespace, e = "module-" + u.namespace, s = m.data(e) || f, o = f.get.animationEndEvent(), !1 === (x = x && f.invoke(b)) && (f.verbose("Converted arguments into settings object", u), u.interval ? f.delay(u.animate) : f.animate(), f.instantiate())
              },
              instantiate: function() {
                  f.verbose("Storing instance of module", f), s = f, m.data(e, s)
              },
              destroy: function() {
                  f.verbose("Destroying previous module for", l), m.removeData(e)
              },
              refresh: function() {
                  f.verbose("Refreshing display type on next animation"), delete f.displayType
              },
              forceRepaint: function() {
                  f.verbose("Forcing element repaint");
                  var e = m.parent(),
                      t = m.next();
                  0 === t.length ? m.detach().appendTo(e) : m.detach().insertBefore(t)
              },
              repaint: function() {
                  f.verbose("Repainting element");
                  l.offsetWidth
              },
              delay: function(e) {
                  var t, n = f.get.animationDirection();
                  n = n || (f.can.transition() ? f.get.direction() : "static"), e = e !== k ? e : u.interval, t = "auto" == u.reverse && n == d.outward || 1 == u.reverse ? (r.length - i) * u.interval : i * u.interval, f.debug("Delaying animation by", t), setTimeout(f.animate, t)
              },
              animate: function(e) {
                  if (u = e || u, !f.is.supported()) return f.error(t.support), !1;
                  if (f.debug("Preparing animation", u.animation), f.is.animating()) {
                      if (u.queue) return !u.allowRepeats && f.has.direction() && f.is.occurring() && !0 !== f.queuing ? f.debug("Animation is currently occurring, preventing queueing same animation", u.animation) : f.queue(u.animation), !1;
                      if (!u.allowRepeats && f.is.occurring()) return f.debug("Animation is already occurring, will not execute repeated animation", u.animation), !1;
                      f.debug("New animation started, completing previous early", u.animation), s.complete()
                  }
                  f.can.animate() ? f.set.animating(u.animation) : f.error(t.noAnimation, u.animation, l)
              },
              reset: function() {
                  f.debug("Resetting animation to beginning conditions"), f.remove.animationCallbacks(), f.restore.conditions(), f.remove.animating()
              },
              queue: function(e) {
                  f.debug("Queueing animation of", e), f.queuing = !0, m.one(o + ".queue" + a, function() {
                      f.queuing = !1, f.repaint(), f.animate.apply(this, u)
                  })
              },
              complete: function(e) {
                  e && e.target === l && e.stopPropagation(), f.debug("Animation complete", u.animation), f.remove.completeCallback(), f.remove.failSafe(), f.is.looping() || (f.is.outward() ? (f.verbose("Animation is outward, hiding element"), f.restore.conditions(), f.hide()) : f.is.inward() ? (f.verbose("Animation is outward, showing element"), f.restore.conditions(), f.show()) : (f.verbose("Static animation completed"), f.restore.conditions(), u.onComplete.call(l)))
              },
              force: {
                  visible: function() {
                      var e = m.attr("style"),
                          t = f.get.userStyle(e),
                          n = f.get.displayType(),
                          i = t + "display: " + n + " !important;",
                          o = m[0].style.display;
                      return !n || "none" === o && u.skipInlineHidden || m[0].tagName.match(/(script|link|style)/i) ? (f.remove.transition(), !1) : (f.verbose("Overriding default display to show element", n), m.attr("style", i), !0)
                  },
                  hidden: function() {
                      var e = m.attr("style"),
                          t = m.css("display"),
                          n = e === k || "" === e;
                      "none" === t || f.is.hidden() ? n && m.removeAttr("style") : (f.verbose("Overriding default display to hide element"), m.css("display", "none"))
                  }
              },
              has: {
                  direction: function(e) {
                      var n = !1;
                      return "string" == typeof(e = e || u.animation) && (e = e.split(" "), C.each(e, function(e, t) {
                          t !== d.inward && t !== d.outward || (n = !0)
                      })), n
                  },
                  inlineDisplay: function() {
                      var e = m.attr("style") || "";
                      return Array.isArray(e.match(/display.*?;/, ""))
                  }
              },
              set: {
                  animating: function(e) {
                      f.remove.completeCallback(), e = e || u.animation;
                      var t = f.get.animationClass(e);
                      f.save.animation(t), f.force.visible() && (f.remove.hidden(), f.remove.direction(), f.start.animation(t))
                  },
                  duration: function(e, t) {
                      !(t = "number" == typeof(t = t || u.duration) ? t + "ms" : t) && 0 !== t || (f.verbose("Setting animation duration", t), m.css({
                          "animation-duration": t
                      }))
                  },
                  direction: function(e) {
                      (e = e || f.get.direction()) == d.inward ? f.set.inward() : f.set.outward()
                  },
                  looping: function() {
                      f.debug("Transition set to loop"), m.addClass(d.looping)
                  },
                  hidden: function() {
                      m.addClass(d.transition).addClass(d.hidden)
                  },
                  inward: function() {
                      f.debug("Setting direction to inward"), m.removeClass(d.outward).addClass(d.inward)
                  },
                  outward: function() {
                      f.debug("Setting direction to outward"), m.removeClass(d.inward).addClass(d.outward)
                  },
                  visible: function() {
                      m.addClass(d.transition).addClass(d.visible)
                  }
              },
              start: {
                  animation: function(e) {
                      e = e || f.get.animationClass(), f.debug("Starting tween", e), m.addClass(e).one(o + ".complete" + a, f.complete), u.useFailSafe && f.add.failSafe(), f.set.duration(u.duration), u.onStart.call(l)
                  }
              },
              save: {
                  animation: function(e) {
                      f.cache || (f.cache = {}), f.cache.animation = e
                  },
                  displayType: function(e) {
                      "none" !== e && m.data(n.displayType, e)
                  },
                  transitionExists: function(e, t) {
                      C.fn.transition.exists[e] = t, f.verbose("Saving existence of transition", e, t)
                  }
              },
              restore: {
                  conditions: function() {
                      var e = f.get.currentAnimation();
                      e && (m.removeClass(e), f.verbose("Removing animation class", f.cache)), f.remove.duration()
                  }
              },
              add: {
                  failSafe: function() {
                      var e = f.get.duration();
                      f.timer = setTimeout(function() {
                          m.triggerHandler(o)
                      }, e + u.failSafeDelay), f.verbose("Adding fail safe timer", f.timer)
                  }
              },
              remove: {
                  animating: function() {
                      m.removeClass(d.animating)
                  },
                  animationCallbacks: function() {
                      f.remove.queueCallback(), f.remove.completeCallback()
                  },
                  queueCallback: function() {
                      m.off(".queue" + a)
                  },
                  completeCallback: function() {
                      m.off(".complete" + a)
                  },
                  display: function() {
                      m.css("display", "")
                  },
                  direction: function() {
                      m.removeClass(d.inward).removeClass(d.outward)
                  },
                  duration: function() {
                      m.css("animation-duration", "")
                  },
                  failSafe: function() {
                      f.verbose("Removing fail safe timer", f.timer), f.timer && clearTimeout(f.timer)
                  },
                  hidden: function() {
                      m.removeClass(d.hidden)
                  },
                  visible: function() {
                      m.removeClass(d.visible)
                  },
                  looping: function() {
                      f.debug("Transitions are no longer looping"), f.is.looping() && (f.reset(), m.removeClass(d.looping))
                  },
                  transition: function() {
                      m.removeClass(d.transition).removeClass(d.visible).removeClass(d.hidden)
                  }
              },
              get: {
                  settings: function(e, t, n) {
                      return "object" == typeof e ? C.extend(!0, {}, C.fn.transition.settings, e) : "function" == typeof n ? C.extend({}, C.fn.transition.settings, {
                          animation: e,
                          onComplete: n,
                          duration: t
                      }) : "string" == typeof t || "number" == typeof t ? C.extend({}, C.fn.transition.settings, {
                          animation: e,
                          duration: t
                      }) : "object" == typeof t ? C.extend({}, C.fn.transition.settings, t, {
                          animation: e
                      }) : "function" == typeof t ? C.extend({}, C.fn.transition.settings, {
                          animation: e,
                          onComplete: t
                      }) : C.extend({}, C.fn.transition.settings, {
                          animation: e
                      })
                  },
                  animationClass: function(e) {
                      var t = e || u.animation,
                          n = f.can.transition() && !f.has.direction() ? f.get.direction() + " " : "";
                      return d.animating + " " + d.transition + " " + n + t
                  },
                  currentAnimation: function() {
                      return !(!f.cache || f.cache.animation === k) && f.cache.animation
                  },
                  currentDirection: function() {
                      return f.is.inward() ? d.inward : d.outward
                  },
                  direction: function() {
                      return f.is.hidden() || !f.is.visible() ? d.inward : d.outward
                  },
                  animationDirection: function(e) {
                      var n;
                      return "string" == typeof(e = e || u.animation) && (e = e.split(" "), C.each(e, function(e, t) {
                          t === d.inward ? n = d.inward : t === d.outward && (n = d.outward)
                      })), n || !1
                  },
                  duration: function(e) {
                      return !1 === (e = e || u.duration) && (e = m.css("animation-duration") || 0), "string" == typeof e ? -1 < e.indexOf("ms") ? parseFloat(e) : 1e3 * parseFloat(e) : e
                  },
                  displayType: function(e) {
                      if (e = e === k || e, u.displayType) return u.displayType;
                      if (e && m.data(n.displayType) === k) {
                          var t = m.css("display");
                          "" === t || "none" === t ? f.can.transition(!0) : f.save.displayType(t)
                      }
                      return m.data(n.displayType)
                  },
                  userStyle: function(e) {
                      return (e = e || m.attr("style") || "").replace(/display.*?;/, "")
                  },
                  transitionExists: function(e) {
                      return C.fn.transition.exists[e]
                  },
                  animationStartEvent: function() {
                      var e, t = w.createElement("div"),
                          n = {
                              animation: "animationstart",
                              OAnimation: "oAnimationStart",
                              MozAnimation: "mozAnimationStart",
                              WebkitAnimation: "webkitAnimationStart"
                          };
                      for (e in n)
                          if (t.style[e] !== k) return n[e];
                      return !1
                  },
                  animationEndEvent: function() {
                      var e, t = w.createElement("div"),
                          n = {
                              animation: "animationend",
                              OAnimation: "oAnimationEnd",
                              MozAnimation: "mozAnimationEnd",
                              WebkitAnimation: "webkitAnimationEnd"
                          };
                      for (e in n)
                          if (t.style[e] !== k) return n[e];
                      return !1
                  }
              },
              can: {
                  transition: function(e) {
                      var t, n, i, o, a, r, s = u.animation,
                          l = f.get.transitionExists(s),
                          c = f.get.displayType(!1);
                      if (l === k || e) {
                          if (f.verbose("Determining whether animation exists"), t = m.attr("class"), n = m.prop("tagName"), o = (i = C("<" + n + " />").addClass(t).insertAfter(m)).addClass(s).removeClass(d.inward).removeClass(d.outward).addClass(d.animating).addClass(d.transition).css("animationName"), a = i.addClass(d.inward).css("animationName"), c || (c = i.attr("class", t).removeAttr("style").removeClass(d.hidden).removeClass(d.visible).show().css("display"), f.verbose("Determining final display state", c), f.save.displayType(c)), i.remove(), o != a) f.debug("Direction exists for animation", s), r = !0;
                          else {
                              if ("none" == o || !o) return void f.debug("No animation defined in css", s);
                              f.debug("Static animation found", s, c), r = !1
                          }
                          f.save.transitionExists(s, r)
                      }
                      return l !== k ? l : r
                  },
                  animate: function() {
                      return f.can.transition() !== k
                  }
              },
              is: {
                  animating: function() {
                      return m.hasClass(d.animating)
                  },
                  inward: function() {
                      return m.hasClass(d.inward)
                  },
                  outward: function() {
                      return m.hasClass(d.outward)
                  },
                  looping: function() {
                      return m.hasClass(d.looping)
                  },
                  occurring: function(e) {
                      return e = "." + (e = e || u.animation).replace(" ", "."), 0 < m.filter(e).length
                  },
                  visible: function() {
                      return m.is(":visible")
                  },
                  hidden: function() {
                      return "hidden" === m.css("visibility")
                  },
                  supported: function() {
                      return !1 !== o
                  }
              },
              hide: function() {
                  f.verbose("Hiding element"), f.is.animating() && f.reset(), l.blur(), f.remove.display(), f.remove.visible(), C.isFunction(u.onBeforeHide) ? u.onBeforeHide.call(l, function() {
                      f.hideNow()
                  }) : f.hideNow()
              },
              hideNow: function() {
                  f.set.hidden(), f.force.hidden(), u.onHide.call(l), u.onComplete.call(l)
              },
              show: function(e) {
                  f.verbose("Showing element", e), f.force.visible() && (f.remove.hidden(), f.set.visible(), u.onShow.call(l), u.onComplete.call(l))
              },
              toggle: function() {
                  f.is.visible() ? f.hide() : f.show()
              },
              stop: function() {
                  f.debug("Stopping current animation"), m.triggerHandler(o)
              },
              stopAll: function() {
                  f.debug("Stopping all animation"), f.remove.queueCallback(), m.triggerHandler(o)
              },
              clear: {
                  queue: function() {
                      f.debug("Clearing animation queue"), f.remove.queueCallback()
                  }
              },
              enable: function() {
                  f.verbose("Starting animation"), m.removeClass(d.disabled)
              },
              disable: function() {
                  f.debug("Stopping animation"), m.addClass(d.disabled)
              },
              setting: function(e, t) {
                  if (f.debug("Changing setting", e, t), C.isPlainObject(e)) C.extend(!0, u, e);
                  else {
                      if (t === k) return u[e];
                      C.isPlainObject(u[e]) ? C.extend(!0, u[e], t) : u[e] = t
                  }
              },
              internal: function(e, t) {
                  if (C.isPlainObject(e)) C.extend(!0, f, e);
                  else {
                      if (t === k) return f[e];
                      f[e] = t
                  }
              },
              debug: function() {
                  !u.silent && u.debug && (u.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, u.name + ":"), f.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !u.silent && u.verbose && u.debug && (u.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, u.name + ":"), f.verbose.apply(console, arguments)))
              },
              error: function() {
                  u.silent || (f.error = Function.prototype.bind.call(console.error, console, u.name + ":"), f.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      u.performance && (n = (t = (new Date).getTime()) - (p || t), p = t, h.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: l,
                          "Execution Time": n
                      })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
                  },
                  display: function() {
                      var e = u.name + ":",
                          n = 0;
                      p = !1, clearTimeout(f.performance.timer), C.each(h, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", g && (e += " '" + g + "'"), 1 < r.length && (e += " (" + r.length + ")"), (console.group !== k || console.table !== k) && 0 < h.length && (console.groupCollapsed(e), console.table ? console.table(h) : C.each(h, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), h = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = s;
                  return e = e || y, t = l || t, "string" == typeof i && r !== k && (i = i.split(/[\. ]/), o = i.length - 1, C.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (C.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== k) return a = r[n], !1;
                          if (!C.isPlainObject(r[t]) || e == o) return r[t] !== k && (a = r[t]), !1;
                          r = r[t]
                      }
                  })), C.isFunction(a) ? n = a.apply(t, e) : a !== k && (n = a), Array.isArray(c) ? c.push(n) : c !== k ? c = [c, n] : n !== k && (c = n), a !== k && a
              }
          }).initialize()
      }), c !== k ? c : this
  }, C.fn.transition.exists = {}, C.fn.transition.settings = {
      name: "Transition",
      silent: !1,
      debug: !1,
      verbose: !1,
      performance: !0,
      namespace: "transition",
      interval: 0,
      reverse: "auto",
      onStart: function() {},
      onComplete: function() {},
      onShow: function() {},
      onHide: function() {},
      useFailSafe: !0,
      failSafeDelay: 100,
      allowRepeats: !1,
      displayType: !1,
      animation: "fade",
      duration: !1,
      queue: !0,
      skipInlineHidden: !1,
      metadata: {
          displayType: "display"
      },
      className: {
          animating: "animating",
          disabled: "disabled",
          hidden: "hidden",
          inward: "in",
          loading: "loading",
          looping: "looping",
          outward: "out",
          transition: "transition",
          visible: "visible"
      },
      error: {
          noAnimation: "Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",
          repeated: "That animation is already occurring, cancelling repeated animation",
          method: "The method you called is not defined",
          support: "This browser does not support CSS animations"
      }
  }
}(jQuery, window, document),
function(E, F, e, P) {
  "use strict";
  E.isWindow = E.isWindow || function(e) {
      return null != e && e === e.window
  }, F = void 0 !== F && F.Math == Math ? F : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), E.api = E.fn.api = function(x) {
      var C, e = E.isFunction(this) ? E(F) : E(this),
          w = e.selector || "",
          k = (new Date).getTime(),
          T = [],
          S = x,
          D = "string" == typeof S,
          A = [].slice.call(arguments, 1);
      return e.each(function() {
          var a, r, n, e, s, l, c = E.isPlainObject(x) ? E.extend(!0, {}, E.fn.api.settings, x) : E.extend({}, E.fn.api.settings),
              t = c.namespace,
              i = c.metadata,
              o = c.selector,
              u = c.error,
              d = c.className,
              f = "." + t,
              m = "module-" + t,
              g = E(this),
              p = g.closest(o.form),
              h = c.stateContext ? E(c.stateContext) : g,
              v = this,
              b = h[0],
              y = g.data(m);
          l = {
              initialize: function() {
                  D || l.bind.events(), l.instantiate()
              },
              instantiate: function() {
                  l.verbose("Storing instance of module", l), y = l, g.data(m, y)
              },
              destroy: function() {
                  l.verbose("Destroying previous module for", v), g.removeData(m).off(f)
              },
              bind: {
                  events: function() {
                      var e = l.get.event();
                      e ? (l.verbose("Attaching API events to element", e), g.on(e + f, l.event.trigger)) : "now" == c.on && (l.debug("Querying API endpoint immediately"), l.query())
                  }
              },
              decode: {
                  json: function(e) {
                      if (e !== P && "string" == typeof e) try {
                          e = JSON.parse(e)
                      } catch (e) {}
                      return e
                  }
              },
              read: {
                  cachedResponse: function(e) {
                      var t;
                      if (F.Storage !== P) return t = sessionStorage.getItem(e), l.debug("Using cached response", e, t), t = l.decode.json(t);
                      l.error(u.noStorage)
                  }
              },
              write: {
                  cachedResponse: function(e, t) {
                      t && "" === t ? l.debug("Response empty, not caching", t) : F.Storage !== P ? (E.isPlainObject(t) && (t = JSON.stringify(t)), sessionStorage.setItem(e, t), l.verbose("Storing cached response for url", e, t)) : l.error(u.noStorage)
                  }
              },
              query: function() {
                  if (l.is.disabled()) l.debug("Element is disabled API request aborted");
                  else {
                      if (l.is.loading()) {
                          if (!c.interruptRequests) return void l.debug("Cancelling request, previous request is still pending");
                          l.debug("Interrupting previous request"), l.abort()
                      }
                      if (c.defaultData && E.extend(!0, c.urlData, l.get.defaultData()), c.serializeForm && (c.data = l.add.formData(c.data)), !1 === (r = l.get.settings())) return l.cancelled = !0, void l.error(u.beforeSend);
                      if (l.cancelled = !1, (n = l.get.templatedURL()) || l.is.mocked()) {
                          if ((n = l.add.urlData(n)) || l.is.mocked()) {
                              if (r.url = c.base + n, a = E.extend(!0, {}, c, {
                                      type: c.method || c.type,
                                      data: e,
                                      url: c.base + n,
                                      beforeSend: c.beforeXHR,
                                      success: function() {},
                                      failure: function() {},
                                      complete: function() {}
                                  }), l.debug("Querying URL", a.url), l.verbose("Using AJAX settings", a), "local" === c.cache && l.read.cachedResponse(n)) return l.debug("Response returned from local cache"), l.request = l.create.request(), void l.request.resolveWith(b, [l.read.cachedResponse(n)]);
                              c.throttle ? c.throttleFirstRequest || l.timer ? (l.debug("Throttling request", c.throttle), clearTimeout(l.timer), l.timer = setTimeout(function() {
                                  l.timer && delete l.timer, l.debug("Sending throttled request", e, a.method), l.send.request()
                              }, c.throttle)) : (l.debug("Sending request", e, a.method), l.send.request(), l.timer = setTimeout(function() {}, c.throttle)) : (l.debug("Sending request", e, a.method), l.send.request())
                          }
                      } else l.error(u.missingURL)
                  }
              },
              should: {
                  removeError: function() {
                      return !0 === c.hideError || "auto" === c.hideError && !l.is.form()
                  }
              },
              is: {
                  disabled: function() {
                      return 0 < g.filter(o.disabled).length
                  },
                  expectingJSON: function() {
                      return "json" === c.dataType || "jsonp" === c.dataType
                  },
                  form: function() {
                      return g.is("form") || h.is("form")
                  },
                  mocked: function() {
                      return c.mockResponse || c.mockResponseAsync || c.response || c.responseAsync
                  },
                  input: function() {
                      return g.is("input")
                  },
                  loading: function() {
                      return !!l.request && "pending" == l.request.state()
                  },
                  abortedRequest: function(e) {
                      return e && e.readyState !== P && 0 === e.readyState ? (l.verbose("XHR request determined to be aborted"), !0) : (l.verbose("XHR request was not aborted"), !1)
                  },
                  validResponse: function(e) {
                      return l.is.expectingJSON() && E.isFunction(c.successTest) ? (l.debug("Checking JSON returned success", c.successTest, e), c.successTest(e) ? (l.debug("Response passed success test", e), !0) : (l.debug("Response failed success test", e), !1)) : (l.verbose("Response is not JSON, skipping validation", c.successTest, e), !0)
                  }
              },
              was: {
                  cancelled: function() {
                      return l.cancelled || !1
                  },
                  succesful: function() {
                      return l.verbose('This behavior will be deleted due to typo. Use "was successful" instead.'), l.was.successful()
                  },
                  successful: function() {
                      return l.request && "resolved" == l.request.state()
                  },
                  failure: function() {
                      return l.request && "rejected" == l.request.state()
                  },
                  complete: function() {
                      return l.request && ("resolved" == l.request.state() || "rejected" == l.request.state())
                  }
              },
              add: {
                  urlData: function(o, a) {
                      var e, t;
                      return o && (e = o.match(c.regExp.required), t = o.match(c.regExp.optional), a = a || c.urlData, e && (l.debug("Looking for required URL variables", e), E.each(e, function(e, t) {
                          var n = -1 !== t.indexOf("$") ? t.substr(2, t.length - 3) : t.substr(1, t.length - 2),
                              i = E.isPlainObject(a) && a[n] !== P ? a[n] : g.data(n) !== P ? g.data(n) : h.data(n) !== P ? h.data(n) : a[n];
                          if (i === P) return l.error(u.requiredParameter, n, o), o = !1;
                          l.verbose("Found required variable", n, i), i = c.encodeParameters ? l.get.urlEncodedValue(i) : i, o = o.replace(t, i)
                      })), t && (l.debug("Looking for optional URL variables", e), E.each(t, function(e, t) {
                          var n = -1 !== t.indexOf("$") ? t.substr(3, t.length - 4) : t.substr(2, t.length - 3),
                              i = E.isPlainObject(a) && a[n] !== P ? a[n] : g.data(n) !== P ? g.data(n) : h.data(n) !== P ? h.data(n) : a[n];
                          o = i !== P ? (l.verbose("Optional variable Found", n, i), o.replace(t, i)) : (l.verbose("Optional variable not found", n), -1 !== o.indexOf("/" + t) ? o.replace("/" + t, "") : o.replace(t, ""))
                      }))), o
                  },
                  formData: function(e) {
                      var t = E.fn.serializeObject !== P,
                          n = t ? p.serializeObject() : p.serialize();
                      return e = e || c.data, e = E.isPlainObject(e) ? t ? (l.debug("Extending existing data with form data", e, n), E.extend(!0, {}, e, n)) : (l.error(u.missingSerialize), l.debug("Cant extend data. Replacing data with form data", e, n), n) : (l.debug("Adding form data", n), n)
                  }
              },
              send: {
                  request: function() {
                      l.set.loading(), l.request = l.create.request(), l.is.mocked() ? l.mockedXHR = l.create.mockedXHR() : l.xhr = l.create.xhr(), c.onRequest.call(b, l.request, l.xhr)
                  }
              },
              event: {
                  trigger: function(e) {
                      l.query(), "submit" != e.type && "click" != e.type || e.preventDefault()
                  },
                  xhr: {
                      always: function() {},
                      done: function(e, t, n) {
                          var i = this,
                              o = (new Date).getTime() - s,
                              a = c.loadingDuration - o,
                              r = !!E.isFunction(c.onResponse) && (l.is.expectingJSON() && !c.rawResponse ? c.onResponse.call(i, E.extend(!0, {}, e)) : c.onResponse.call(i, e));
                          a = 0 < a ? a : 0, r && (l.debug("Modified API response in onResponse callback", c.onResponse, r, e), e = r), 0 < a && l.debug("Response completed early delaying state change by", a), setTimeout(function() {
                              l.is.validResponse(e) ? l.request.resolveWith(i, [e, n]) : l.request.rejectWith(i, [n, "invalid"])
                          }, a)
                      },
                      fail: function(e, t, n) {
                          var i = this,
                              o = (new Date).getTime() - s,
                              a = c.loadingDuration - o;
                          0 < (a = 0 < a ? a : 0) && l.debug("Response completed early delaying state change by", a), setTimeout(function() {
                              l.is.abortedRequest(e) ? l.request.rejectWith(i, [e, "aborted", n]) : l.request.rejectWith(i, [e, "error", t, n])
                          }, a)
                      }
                  },
                  request: {
                      done: function(e, t) {
                          l.debug("Successful API Response", e), "local" === c.cache && n && (l.write.cachedResponse(n, e), l.debug("Saving server response locally", l.cache)), c.onSuccess.call(b, e, g, t)
                      },
                      complete: function(e, t) {
                          var n, i;
                          l.was.successful() ? (i = e, n = t) : (n = e, i = l.get.responseFromXHR(n)), l.remove.loading(), c.onComplete.call(b, i, g, n)
                      },
                      fail: function(e, t, n) {
                          var i = l.get.responseFromXHR(e),
                              o = l.get.errorFromRequest(i, t, n);
                          if ("aborted" == t) return l.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)", t, n), c.onAbort.call(b, t, g, e), !0;
                          "invalid" == t ? l.debug("JSON did not pass success test. A server-side error has most likely occurred", i) : "error" == t && e !== P && (l.debug("XHR produced a server error", t, n), (e.status < 200 || 300 <= e.status) && n !== P && "" !== n && l.error(u.statusMessage + n, a.url), c.onError.call(b, o, g, e)), c.errorDuration && "aborted" !== t && (l.debug("Adding error state"), l.set.error(), l.should.removeError() && setTimeout(l.remove.error, c.errorDuration)), l.debug("API Request failed", o, e), c.onFailure.call(b, i, g, e)
                      }
                  }
              },
              create: {
                  request: function() {
                      return E.Deferred().always(l.event.request.complete).done(l.event.request.done).fail(l.event.request.fail)
                  },
                  mockedXHR: function() {
                      var e, t, n, i = c.mockResponse || c.response,
                          o = c.mockResponseAsync || c.responseAsync;
                      return n = E.Deferred().always(l.event.xhr.complete).done(l.event.xhr.done).fail(l.event.xhr.fail), i ? (t = E.isFunction(i) ? (l.debug("Using specified synchronous callback", i), i.call(b, r)) : (l.debug("Using settings specified response", i), i), n.resolveWith(b, [t, !1, {
                          responseText: t
                      }])) : E.isFunction(o) && (e = function(e) {
                          l.debug("Async callback returned response", e), e ? n.resolveWith(b, [e, !1, {
                              responseText: e
                          }]) : n.rejectWith(b, [{
                              responseText: e
                          }, !1, !1])
                      }, l.debug("Using specified async response callback", o), o.call(b, r, e)), n
                  },
                  xhr: function() {
                      var e;
                      return e = E.ajax(a).always(l.event.xhr.always).done(l.event.xhr.done).fail(l.event.xhr.fail), l.verbose("Created server request", e, a), e
                  }
              },
              set: {
                  error: function() {
                      l.verbose("Adding error state to element", h), h.addClass(d.error)
                  },
                  loading: function() {
                      l.verbose("Adding loading state to element", h), h.addClass(d.loading), s = (new Date).getTime()
                  }
              },
              remove: {
                  error: function() {
                      l.verbose("Removing error state from element", h), h.removeClass(d.error)
                  },
                  loading: function() {
                      l.verbose("Removing loading state from element", h), h.removeClass(d.loading)
                  }
              },
              get: {
                  responseFromXHR: function(e) {
                      return !!E.isPlainObject(e) && (l.is.expectingJSON() ? l.decode.json(e.responseText) : e.responseText)
                  },
                  errorFromRequest: function(e, t, n) {
                      return E.isPlainObject(e) && e.error !== P ? e.error : c.error[t] !== P ? c.error[t] : n
                  },
                  request: function() {
                      return l.request || !1
                  },
                  xhr: function() {
                      return l.xhr || !1
                  },
                  settings: function() {
                      var e;
                      return (e = c.beforeSend.call(g, c)) && (e.success !== P && (l.debug("Legacy success callback detected", e), l.error(u.legacyParameters, e.success), e.onSuccess = e.success), e.failure !== P && (l.debug("Legacy failure callback detected", e), l.error(u.legacyParameters, e.failure), e.onFailure = e.failure), e.complete !== P && (l.debug("Legacy complete callback detected", e), l.error(u.legacyParameters, e.complete), e.onComplete = e.complete)), e === P && l.error(u.noReturnedValue), !1 === e ? e : e !== P ? E.extend(!0, {}, e) : E.extend(!0, {}, c)
                  },
                  urlEncodedValue: function(e) {
                      var t = F.decodeURIComponent(e),
                          n = F.encodeURIComponent(e);
                      return t !== e ? (l.debug("URL value is already encoded, avoiding double encoding", e), e) : (l.verbose("Encoding value using encodeURIComponent", e, n), n)
                  },
                  defaultData: function() {
                      var e = {};
                      return E.isWindow(v) || (l.is.input() ? e.value = g.val() : l.is.form() || (e.text = g.text())), e
                  },
                  event: function() {
                      return E.isWindow(v) || "now" == c.on ? (l.debug("API called without element, no events attached"), !1) : "auto" == c.on ? g.is("input") ? v.oninput !== P ? "input" : v.onpropertychange !== P ? "propertychange" : "keyup" : g.is("form") ? "submit" : "click" : c.on
                  },
                  templatedURL: function(e) {
                      if (e = e || g.data(i.action) || c.action || !1, n = g.data(i.url) || c.url || !1) return l.debug("Using specified url", n), n;
                      if (e) {
                          if (l.debug("Looking up url for action", e, c.api), c.api[e] === P && !l.is.mocked()) return void l.error(u.missingAction, c.action, c.api);
                          n = c.api[e]
                      } else l.is.form() && (n = g.attr("action") || h.attr("action") || !1, l.debug("No url or action specified, defaulting to form action", n));
                      return n
                  }
              },
              abort: function() {
                  var e = l.get.xhr();
                  e && "resolved" !== e.state() && (l.debug("Cancelling API request"), e.abort())
              },
              reset: function() {
                  l.remove.error(), l.remove.loading()
              },
              setting: function(e, t) {
                  if (l.debug("Changing setting", e, t), E.isPlainObject(e)) E.extend(!0, c, e);
                  else {
                      if (t === P) return c[e];
                      E.isPlainObject(c[e]) ? E.extend(!0, c[e], t) : c[e] = t
                  }
              },
              internal: function(e, t) {
                  if (E.isPlainObject(e)) E.extend(!0, l, e);
                  else {
                      if (t === P) return l[e];
                      l[e] = t
                  }
              },
              debug: function() {
                  !c.silent && c.debug && (c.performance ? l.performance.log(arguments) : (l.debug = Function.prototype.bind.call(console.info, console, c.name + ":"), l.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !c.silent && c.verbose && c.debug && (c.performance ? l.performance.log(arguments) : (l.verbose = Function.prototype.bind.call(console.info, console, c.name + ":"), l.verbose.apply(console, arguments)))
              },
              error: function() {
                  c.silent || (l.error = Function.prototype.bind.call(console.error, console, c.name + ":"), l.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      c.performance && (n = (t = (new Date).getTime()) - (k || t), k = t, T.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          "Execution Time": n
                      })), clearTimeout(l.performance.timer), l.performance.timer = setTimeout(l.performance.display, 500)
                  },
                  display: function() {
                      var e = c.name + ":",
                          n = 0;
                      k = !1, clearTimeout(l.performance.timer), E.each(T, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", w && (e += " '" + w + "'"), (console.group !== P || console.table !== P) && 0 < T.length && (console.groupCollapsed(e), console.table ? console.table(T) : E.each(T, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), T = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = y;
                  return e = e || A, t = v || t, "string" == typeof i && r !== P && (i = i.split(/[\. ]/), o = i.length - 1, E.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (E.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== P) return a = r[n], !1;
                          if (!E.isPlainObject(r[t]) || e == o) return r[t] !== P ? a = r[t] : l.error(u.method, i), !1;
                          r = r[t]
                      }
                  })), E.isFunction(a) ? n = a.apply(t, e) : a !== P && (n = a), Array.isArray(C) ? C.push(n) : C !== P ? C = [C, n] : n !== P && (C = n), a
              }
          }, D ? (y === P && l.initialize(), l.invoke(S)) : (y !== P && y.invoke("destroy"), l.initialize())
      }), C !== P ? C : this
  }, E.api.settings = {
      name: "API",
      namespace: "api",
      debug: !1,
      verbose: !1,
      performance: !0,
      api: {},
      cache: !0,
      interruptRequests: !0,
      on: "auto",
      stateContext: !1,
      loadingDuration: 0,
      hideError: "auto",
      errorDuration: 2e3,
      encodeParameters: !0,
      action: !1,
      url: !1,
      base: "",
      urlData: {},
      defaultData: !0,
      serializeForm: !1,
      throttle: 0,
      throttleFirstRequest: !0,
      method: "get",
      data: {},
      dataType: "json",
      mockResponse: !1,
      mockResponseAsync: !1,
      response: !1,
      responseAsync: !1,
      rawResponse: !1,
      beforeSend: function(e) {
          return e
      },
      beforeXHR: function(e) {},
      onRequest: function(e, t) {},
      onResponse: !1,
      onSuccess: function(e, t) {},
      onComplete: function(e, t) {},
      onFailure: function(e, t) {},
      onError: function(e, t) {},
      onAbort: function(e, t) {},
      successTest: !1,
      error: {
          beforeSend: "The before send function has aborted the request",
          error: "There was an error with your request",
          exitConditions: "API Request Aborted. Exit conditions met",
          JSONParse: "JSON could not be parsed during error handling",
          legacyParameters: "You are using legacy API success callback names",
          method: "The method you called is not defined",
          missingAction: "API action used but no url was defined",
          missingSerialize: "jquery-serialize-object is required to add form data to an existing data object",
          missingURL: "No URL specified for api event",
          noReturnedValue: "The beforeSend callback must return a settings object, beforeSend ignored.",
          noStorage: "Caching responses locally requires session storage",
          parseError: "There was an error parsing your request",
          requiredParameter: "Missing a required URL parameter: ",
          statusMessage: "Server gave an error: ",
          timeout: "Your request timed out"
      },
      regExp: {
          required: /\{\$*[A-z0-9]+\}/g,
          optional: /\{\/\$*[A-z0-9]+\}/g
      },
      className: {
          loading: "loading",
          error: "error"
      },
      selector: {
          disabled: ".disabled",
          form: "form"
      },
      metadata: {
          action: "action",
          url: "url"
      }
  }
}(jQuery, window, document),
function(w, e, t, k) {
  "use strict";
  w.isFunction = w.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, e = void 0 !== e && e.Math == Math ? e : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), w.fn.state = function(m) {
      var g, p = w(this),
          h = p.selector || "",
          v = (new Date).getTime(),
          b = [],
          y = m,
          x = "string" == typeof y,
          C = [].slice.call(arguments, 1);
      return p.each(function() {
          var s, o = w.isPlainObject(m) ? w.extend(!0, {}, w.fn.state.settings, m) : w.extend({}, w.fn.state.settings),
              l = o.error,
              n = o.metadata,
              t = o.className,
              e = o.namespace,
              i = o.states,
              a = o.text,
              r = "." + e,
              c = e + "-module",
              u = w(this),
              d = this,
              f = u.data(c);
          s = {
              initialize: function() {
                  s.verbose("Initializing module"), o.automatic && s.add.defaults(), o.context && "" !== h ? w(o.context).on(h, "mouseenter" + r, s.change.text).on(h, "mouseleave" + r, s.reset.text).on(h, "click" + r, s.toggle.state) : u.on("mouseenter" + r, s.change.text).on("mouseleave" + r, s.reset.text).on("click" + r, s.toggle.state), s.instantiate()
              },
              instantiate: function() {
                  s.verbose("Storing instance of module", s), f = s, u.data(c, s)
              },
              destroy: function() {
                  s.verbose("Destroying previous module", f), u.off(r).removeData(c)
              },
              refresh: function() {
                  s.verbose("Refreshing selector cache"), u = w(d)
              },
              add: {
                  defaults: function() {
                      var n = m && w.isPlainObject(m.states) ? m.states : {};
                      w.each(o.defaults, function(e, t) {
                          s.is[e] !== k && s.is[e]() && (s.verbose("Adding default states", e, d), w.extend(o.states, t, n))
                      })
                  }
              },
              is: {
                  active: function() {
                      return u.hasClass(t.active)
                  },
                  loading: function() {
                      return u.hasClass(t.loading)
                  },
                  inactive: function() {
                      return !u.hasClass(t.active)
                  },
                  state: function(e) {
                      return t[e] !== k && u.hasClass(t[e])
                  },
                  enabled: function() {
                      return !u.is(o.filter.active)
                  },
                  disabled: function() {
                      return u.is(o.filter.active)
                  },
                  textEnabled: function() {
                      return !u.is(o.filter.text)
                  },
                  button: function() {
                      return u.is(".button:not(a, .submit)")
                  },
                  input: function() {
                      return u.is("input")
                  },
                  progress: function() {
                      return u.is(".ui.progress")
                  }
              },
              allow: function(e) {
                  s.debug("Now allowing state", e), i[e] = !0
              },
              disallow: function(e) {
                  s.debug("No longer allowing", e), i[e] = !1
              },
              allows: function(e) {
                  return i[e] || !1
              },
              enable: function() {
                  u.removeClass(t.disabled)
              },
              disable: function() {
                  u.addClass(t.disabled)
              },
              setState: function(e) {
                  s.allows(e) && u.addClass(t[e])
              },
              removeState: function(e) {
                  s.allows(e) && u.removeClass(t[e])
              },
              toggle: {
                  state: function() {
                      var e;
                      if (s.allows("active") && s.is.enabled()) {
                          if (s.refresh(), w.fn.api !== k)
                              if (e = u.api("get request"), u.api("was cancelled")) s.debug("API Request cancelled by beforesend"), o.activateTest = function() {
                                  return !1
                              }, o.deactivateTest = function() {
                                  return !1
                              };
                              else if (e) return void s.listenTo(e);
                          s.change.state()
                      }
                  }
              },
              listenTo: function(e) {
                  s.debug("API request detected, waiting for state signal", e), e && (a.loading && s.update.text(a.loading), w.when(e).then(function() {
                      "resolved" == e.state() ? (s.debug("API request succeeded"), o.activateTest = function() {
                          return !0
                      }, o.deactivateTest = function() {
                          return !0
                      }) : (s.debug("API request failed"), o.activateTest = function() {
                          return !1
                      }, o.deactivateTest = function() {
                          return !1
                      }), s.change.state()
                  }))
              },
              change: {
                  state: function() {
                      s.debug("Determining state change direction"), s.is.inactive() ? s.activate() : s.deactivate(), o.sync && s.sync(), o.onChange.call(d)
                  },
                  text: function() {
                      s.is.textEnabled() && (s.is.disabled() ? (s.verbose("Changing text to disabled text", a.hover), s.update.text(a.disabled)) : s.is.active() ? a.hover ? (s.verbose("Changing text to hover text", a.hover), s.update.text(a.hover)) : a.deactivate && (s.verbose("Changing text to deactivating text", a.deactivate), s.update.text(a.deactivate)) : a.hover ? (s.verbose("Changing text to hover text", a.hover), s.update.text(a.hover)) : a.activate && (s.verbose("Changing text to activating text", a.activate), s.update.text(a.activate)))
                  }
              },
              activate: function() {
                  o.activateTest.call(d) && (s.debug("Setting state to active"), u.addClass(t.active), s.update.text(a.active), o.onActivate.call(d))
              },
              deactivate: function() {
                  o.deactivateTest.call(d) && (s.debug("Setting state to inactive"), u.removeClass(t.active), s.update.text(a.inactive), o.onDeactivate.call(d))
              },
              sync: function() {
                  s.verbose("Syncing other buttons to current state"), s.is.active() ? p.not(u).state("activate") : p.not(u).state("deactivate")
              },
              get: {
                  text: function() {
                      return o.selector.text ? u.find(o.selector.text).text() : u.html()
                  },
                  textFor: function(e) {
                      return a[e] || !1
                  }
              },
              flash: {
                  text: function(e, t, n) {
                      var i = s.get.text();
                      s.debug("Flashing text message", e, t), e = e || o.text.flash, t = t || o.flashDuration, n = n || function() {}, s.update.text(e), setTimeout(function() {
                          s.update.text(i), n.call(d)
                      }, t)
                  }
              },
              reset: {
                  text: function() {
                      var e = a.active || u.data(n.storedText),
                          t = a.inactive || u.data(n.storedText);
                      s.is.textEnabled() && (s.is.active() && e ? (s.verbose("Resetting active text", e), s.update.text(e)) : t && (s.verbose("Resetting inactive text", e), s.update.text(t)))
                  }
              },
              update: {
                  text: function(e) {
                      var t = s.get.text();
                      e && e !== t ? (s.debug("Updating text", e), o.selector.text ? u.data(n.storedText, e).find(o.selector.text).text(e) : u.data(n.storedText, e).html(e)) : s.debug("Text is already set, ignoring update", e)
                  }
              },
              setting: function(e, t) {
                  if (s.debug("Changing setting", e, t), w.isPlainObject(e)) w.extend(!0, o, e);
                  else {
                      if (t === k) return o[e];
                      w.isPlainObject(o[e]) ? w.extend(!0, o[e], t) : o[e] = t
                  }
              },
              internal: function(e, t) {
                  if (w.isPlainObject(e)) w.extend(!0, s, e);
                  else {
                      if (t === k) return s[e];
                      s[e] = t
                  }
              },
              debug: function() {
                  !o.silent && o.debug && (o.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, o.name + ":"), s.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !o.silent && o.verbose && o.debug && (o.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, o.name + ":"), s.verbose.apply(console, arguments)))
              },
              error: function() {
                  o.silent || (s.error = Function.prototype.bind.call(console.error, console, o.name + ":"), s.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      o.performance && (n = (t = (new Date).getTime()) - (v || t), v = t, b.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: d,
                          "Execution Time": n
                      })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500)
                  },
                  display: function() {
                      var e = o.name + ":",
                          n = 0;
                      v = !1, clearTimeout(s.performance.timer), w.each(b, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", h && (e += " '" + h + "'"), (console.group !== k || console.table !== k) && 0 < b.length && (console.groupCollapsed(e), console.table ? console.table(b) : w.each(b, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), b = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = f;
                  return e = e || C, t = d || t, "string" == typeof i && r !== k && (i = i.split(/[\. ]/), o = i.length - 1, w.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (w.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== k) return a = r[n], !1;
                          if (!w.isPlainObject(r[t]) || e == o) return r[t] !== k ? a = r[t] : s.error(l.method, i), !1;
                          r = r[t]
                      }
                  })), w.isFunction(a) ? n = a.apply(t, e) : a !== k && (n = a), Array.isArray(g) ? g.push(n) : g !== k ? g = [g, n] : n !== k && (g = n), a
              }
          }, x ? (f === k && s.initialize(), s.invoke(y)) : (f !== k && f.invoke("destroy"), s.initialize())
      }), g !== k ? g : this
  }, w.fn.state.settings = {
      name: "State",
      debug: !1,
      verbose: !1,
      namespace: "state",
      performance: !0,
      onActivate: function() {},
      onDeactivate: function() {},
      onChange: function() {},
      activateTest: function() {
          return !0
      },
      deactivateTest: function() {
          return !0
      },
      automatic: !0,
      sync: !1,
      flashDuration: 1e3,
      filter: {
          text: ".loading, .disabled",
          active: ".disabled"
      },
      context: !1,
      error: {
          beforeSend: "The before send function has cancelled state change",
          method: "The method you called is not defined."
      },
      metadata: {
          promise: "promise",
          storedText: "stored-text"
      },
      className: {
          active: "active",
          disabled: "disabled",
          error: "error",
          loading: "loading",
          success: "success",
          warning: "warning"
      },
      selector: {
          text: !1
      },
      defaults: {
          input: {
              disabled: !0,
              loading: !0,
              active: !0
          },
          button: {
              disabled: !0,
              loading: !0,
              active: !0
          },
          progress: {
              active: !0,
              success: !0,
              warning: !0,
              error: !0
          }
      },
      states: {
          active: !0,
          disabled: !0,
          error: !0,
          loading: !0,
          success: !0,
          warning: !0
      },
      text: {
          disabled: !1,
          flash: !1,
          hover: !1,
          active: !1,
          inactive: !1,
          activate: !1,
          deactivate: !1
      }
  }
}(jQuery, window, document),
function(E, F, P, O) {
  "use strict";
  E.isFunction = E.isFunction || function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType
  }, F = void 0 !== F && F.Math == Math ? F : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), E.fn.visibility = function(b) {
      var y, e = E(this),
          x = e.selector || "",
          C = (new Date).getTime(),
          w = [],
          k = b,
          T = "string" == typeof k,
          S = [].slice.call(arguments, 1),
          D = e.length,
          A = 0;
      return e.each(function() {
          var e, t, n, s, o = E.isPlainObject(b) ? E.extend(!0, {}, E.fn.visibility.settings, b) : E.extend({}, E.fn.visibility.settings),
              i = o.className,
              a = o.namespace,
              l = o.error,
              r = o.metadata,
              c = "." + a,
              u = "module-" + a,
              d = E(F),
              f = E(this),
              m = E(o.context),
              g = f.data(u),
              p = F.requestAnimationFrame || F.mozRequestAnimationFrame || F.webkitRequestAnimationFrame || F.msRequestAnimationFrame || function(e) {
                  setTimeout(e, 0)
              },
              h = this,
              v = !1;
          s = {
              initialize: function() {
                  s.debug("Initializing", o), s.setup.cache(), s.should.trackChanges() && ("image" == o.type && s.setup.image(), "fixed" == o.type && s.setup.fixed(), o.observeChanges && s.observeChanges(), s.bind.events()), s.save.position(), s.is.visible() || s.error(l.visible, f), o.initialCheck && s.checkVisibility(), s.instantiate()
              },
              instantiate: function() {
                  s.debug("Storing instance", s), f.data(u, s), g = s
              },
              destroy: function() {
                  s.verbose("Destroying previous module"), n && n.disconnect(), t && t.disconnect(), d.off("load" + c, s.event.load).off("resize" + c, s.event.resize), m.off("scroll" + c, s.event.scroll).off("scrollchange" + c, s.event.scrollchange), "fixed" == o.type && (s.resetFixed(), s.remove.placeholder()), f.off(c).removeData(u)
              },
              observeChanges: function() {
                  "MutationObserver" in F && (t = new MutationObserver(s.event.contextChanged), n = new MutationObserver(s.event.changed), t.observe(P, {
                      childList: !0,
                      subtree: !0
                  }), n.observe(h, {
                      childList: !0,
                      subtree: !0
                  }), s.debug("Setting up mutation observer", n))
              },
              bind: {
                  events: function() {
                      s.verbose("Binding visibility events to scroll and resize"), o.refreshOnLoad && d.on("load" + c, s.event.load), d.on("resize" + c, s.event.resize), m.off("scroll" + c).on("scroll" + c, s.event.scroll).on("scrollchange" + c, s.event.scrollchange)
                  }
              },
              event: {
                  changed: function(e) {
                      s.verbose("DOM tree modified, updating visibility calculations"), s.timer = setTimeout(function() {
                          s.verbose("DOM tree modified, updating sticky menu"), s.refresh()
                      }, 100)
                  },
                  contextChanged: function(e) {
                      [].forEach.call(e, function(e) {
                          e.removedNodes && [].forEach.call(e.removedNodes, function(e) {
                              (e == h || 0 < E(e).find(h).length) && (s.debug("Element removed from DOM, tearing down events"), s.destroy())
                          })
                      })
                  },
                  resize: function() {
                      s.debug("Window resized"), o.refreshOnResize && p(s.refresh)
                  },
                  load: function() {
                      s.debug("Page finished loading"), p(s.refresh)
                  },
                  scroll: function() {
                      o.throttle ? (clearTimeout(s.timer), s.timer = setTimeout(function() {
                          m.triggerHandler("scrollchange" + c, [m.scrollTop()])
                      }, o.throttle)) : p(function() {
                          m.triggerHandler("scrollchange" + c, [m.scrollTop()])
                      })
                  },
                  scrollchange: function(e, t) {
                      s.checkVisibility(t)
                  }
              },
              precache: function(e, t) {
                  e instanceof Array || (e = [e]);
                  for (var n = e.length, i = 0, o = [], a = P.createElement("img"), r = function() {
                          ++i >= e.length && E.isFunction(t) && t()
                      }; n--;)(a = P.createElement("img")).onload = r, a.onerror = r, a.src = e[n], o.push(a)
              },
              enableCallbacks: function() {
                  s.debug("Allowing callbacks to occur"), v = !1
              },
              disableCallbacks: function() {
                  s.debug("Disabling all callbacks temporarily"), v = !0
              },
              should: {
                  trackChanges: function() {
                      return T ? (s.debug("One time query, no need to bind events"), !1) : (s.debug("Callbacks being attached"), !0)
                  }
              },
              setup: {
                  cache: function() {
                      s.cache = {
                          occurred: {},
                          screen: {},
                          element: {}
                      }
                  },
                  image: function() {
                      var e = f.data(r.src);
                      e && (s.verbose("Lazy loading image", e), o.once = !0, o.observeChanges = !1, o.onOnScreen = function() {
                          s.debug("Image on screen", h), s.precache(e, function() {
                              s.set.image(e, function() {
                                  ++A == D && o.onAllLoaded.call(this), o.onLoad.call(this)
                              })
                          })
                      })
                  },
                  fixed: function() {
                      s.debug("Setting up fixed"), o.once = !1, o.observeChanges = !1, o.initialCheck = !0, o.refreshOnLoad = !0, b.transition || (o.transition = !1), s.create.placeholder(), s.debug("Added placeholder", e), o.onTopPassed = function() {
                          s.debug("Element passed, adding fixed position", f), s.show.placeholder(), s.set.fixed(), o.transition && E.fn.transition !== O && f.transition(o.transition, o.duration)
                      }, o.onTopPassedReverse = function() {
                          s.debug("Element returned to position, removing fixed", f), s.hide.placeholder(), s.remove.fixed()
                      }
                  }
              },
              create: {
                  placeholder: function() {
                      s.verbose("Creating fixed position placeholder"), e = f.clone(!1).css("display", "none").addClass(i.placeholder).insertAfter(f)
                  }
              },
              show: {
                  placeholder: function() {
                      s.verbose("Showing placeholder"), e.css("display", "block").css("visibility", "hidden")
                  }
              },
              hide: {
                  placeholder: function() {
                      s.verbose("Hiding placeholder"), e.css("display", "none").css("visibility", "")
                  }
              },
              set: {
                  fixed: function() {
                      s.verbose("Setting element to fixed position"), f.addClass(i.fixed).css({
                          position: "fixed",
                          top: o.offset + "px",
                          left: "auto",
                          zIndex: o.zIndex
                      }), o.onFixed.call(h)
                  },
                  image: function(e, t) {
                      if (f.attr("src", e), o.transition)
                          if (E.fn.transition !== O) {
                              if (f.hasClass(i.visible)) return void s.debug("Transition already occurred on this image, skipping animation");
                              f.transition(o.transition, o.duration, t)
                          } else f.fadeIn(o.duration, t);
                      else f.show()
                  }
              },
              is: {
                  onScreen: function() {
                      return s.get.elementCalculations().onScreen
                  },
                  offScreen: function() {
                      return s.get.elementCalculations().offScreen
                  },
                  visible: function() {
                      return !(!s.cache || !s.cache.element) && !(0 === s.cache.element.width && 0 === s.cache.element.offset.top)
                  },
                  verticallyScrollableContext: function() {
                      var e = m.get(0) !== F && m.css("overflow-y");
                      return "auto" == e || "scroll" == e
                  },
                  horizontallyScrollableContext: function() {
                      var e = m.get(0) !== F && m.css("overflow-x");
                      return "auto" == e || "scroll" == e
                  }
              },
              refresh: function() {
                  s.debug("Refreshing constants (width/height)"), "fixed" == o.type && s.resetFixed(), s.reset(), s.save.position(), o.checkOnRefresh && s.checkVisibility(), o.onRefresh.call(h)
              },
              resetFixed: function() {
                  s.remove.fixed(), s.remove.occurred()
              },
              reset: function() {
                  s.verbose("Resetting all cached values"), E.isPlainObject(s.cache) && (s.cache.screen = {}, s.cache.element = {})
              },
              checkVisibility: function(e) {
                  s.verbose("Checking visibility of element", s.cache.element), !v && s.is.visible() && (s.save.scroll(e), s.save.calculations(), s.passed(), s.passingReverse(), s.topVisibleReverse(), s.bottomVisibleReverse(), s.topPassedReverse(), s.bottomPassedReverse(), s.onScreen(), s.offScreen(), s.passing(), s.topVisible(), s.bottomVisible(), s.topPassed(), s.bottomPassed(), o.onUpdate && o.onUpdate.call(h, s.get.elementCalculations()))
              },
              passed: function(e, t) {
                  var n = s.get.elementCalculations();
                  if (e && t) o.onPassed[e] = t;
                  else {
                      if (e !== O) return s.get.pixelsPassed(e) > n.pixelsPassed;
                      n.passing && E.each(o.onPassed, function(e, t) {
                          n.bottomVisible || n.pixelsPassed > s.get.pixelsPassed(e) ? s.execute(t, e) : o.once || s.remove.occurred(t)
                      })
                  }
              },
              onScreen: function(e) {
                  var t = s.get.elementCalculations(),
                      n = e || o.onOnScreen;
                  if (e && (s.debug("Adding callback for onScreen", e), o.onOnScreen = e), t.onScreen ? s.execute(n, "onScreen") : o.once || s.remove.occurred("onScreen"), e !== O) return t.onOnScreen
              },
              offScreen: function(e) {
                  var t = s.get.elementCalculations(),
                      n = e || o.onOffScreen;
                  if (e && (s.debug("Adding callback for offScreen", e), o.onOffScreen = e), t.offScreen ? s.execute(n, "offScreen") : o.once || s.remove.occurred("offScreen"), e !== O) return t.onOffScreen
              },
              passing: function(e) {
                  var t = s.get.elementCalculations(),
                      n = e || o.onPassing;
                  if (e && (s.debug("Adding callback for passing", e), o.onPassing = e), t.passing ? s.execute(n, "passing") : o.once || s.remove.occurred("passing"), e !== O) return t.passing
              },
              topVisible: function(e) {
                  var t = s.get.elementCalculations(),
                      n = e || o.onTopVisible,
                      i = "topVisible";
                  if (e && (s.debug("Adding callback for top visible", e), o.onTopVisible = e), t.topVisible ? s.execute(n, i) : o.once || s.remove.occurred(i), e === O) return t.topVisible
              },
              bottomVisible: function(e) {
                  var t = s.get.elementCalculations(),
                      n = e || o.onBottomVisible,
                      i = "bottomVisible";
                  if (e && (s.debug("Adding callback for bottom visible", e), o.onBottomVisible = e), t.bottomVisible ? s.execute(n, i) : o.once || s.remove.occurred(i), e === O) return t.bottomVisible
              },
              topPassed: function(e) {
                  var t = s.get.elementCalculations(),
                      n = e || o.onTopPassed;
                  if (e && (s.debug("Adding callback for top passed", e), o.onTopPassed = e), t.topPassed ? s.execute(n, "topPassed") : o.once || s.remove.occurred("topPassed"), e === O) return t.topPassed
              },
              bottomPassed: function(e) {
                  var t = s.get.elementCalculations(),
                      n = e || o.onBottomPassed,
                      i = "bottomPassed";
                  if (e && (s.debug("Adding callback for bottom passed", e), o.onBottomPassed = e), t.bottomPassed ? s.execute(n, i) : o.once || s.remove.occurred(i), e === O) return t.bottomPassed
              },
              passingReverse: function(e) {
                  var t = s.get.elementCalculations(),
                      n = e || o.onPassingReverse,
                      i = "passingReverse";
                  if (e && (s.debug("Adding callback for passing reverse", e), o.onPassingReverse = e), t.passing ? o.once || s.remove.occurred(i) : s.get.occurred("passing") && s.execute(n, i), e !== O) return !t.passing
              },
              topVisibleReverse: function(e) {
                  var t = s.get.elementCalculations(),
                      n = e || o.onTopVisibleReverse,
                      i = "topVisibleReverse";
                  if (e && (s.debug("Adding callback for top visible reverse", e), o.onTopVisibleReverse = e), t.topVisible ? o.once || s.remove.occurred(i) : s.get.occurred("topVisible") && s.execute(n, i), e === O) return !t.topVisible
              },
              bottomVisibleReverse: function(e) {
                  var t = s.get.elementCalculations(),
                      n = e || o.onBottomVisibleReverse,
                      i = "bottomVisibleReverse";
                  if (e && (s.debug("Adding callback for bottom visible reverse", e), o.onBottomVisibleReverse = e), t.bottomVisible ? o.once || s.remove.occurred(i) : s.get.occurred("bottomVisible") && s.execute(n, i), e === O) return !t.bottomVisible
              },
              topPassedReverse: function(e) {
                  var t = s.get.elementCalculations(),
                      n = e || o.onTopPassedReverse,
                      i = "topPassedReverse";
                  if (e && (s.debug("Adding callback for top passed reverse", e), o.onTopPassedReverse = e), t.topPassed ? o.once || s.remove.occurred(i) : s.get.occurred("topPassed") && s.execute(n, i), e === O) return !t.onTopPassed
              },
              bottomPassedReverse: function(e) {
                  var t = s.get.elementCalculations(),
                      n = e || o.onBottomPassedReverse,
                      i = "bottomPassedReverse";
                  if (e && (s.debug("Adding callback for bottom passed reverse", e), o.onBottomPassedReverse = e), t.bottomPassed ? o.once || s.remove.occurred(i) : s.get.occurred("bottomPassed") && s.execute(n, i), e === O) return !t.bottomPassed
              },
              execute: function(e, t) {
                  var n = s.get.elementCalculations(),
                      i = s.get.screenCalculations();
                  (e = e || !1) && (o.continuous ? (s.debug("Callback being called continuously", t, n), e.call(h, n, i)) : s.get.occurred(t) || (s.debug("Conditions met", t, n), e.call(h, n, i))), s.save.occurred(t)
              },
              remove: {
                  fixed: function() {
                      s.debug("Removing fixed position"), f.removeClass(i.fixed).css({
                          position: "",
                          top: "",
                          left: "",
                          zIndex: ""
                      }), o.onUnfixed.call(h)
                  },
                  placeholder: function() {
                      s.debug("Removing placeholder content"), e && e.remove()
                  },
                  occurred: function(e) {
                      if (e) {
                          var t = s.cache.occurred;
                          t[e] !== O && !0 === t[e] && (s.debug("Callback can now be called again", e), s.cache.occurred[e] = !1)
                      } else s.cache.occurred = {}
                  }
              },
              save: {
                  calculations: function() {
                      s.verbose("Saving all calculations necessary to determine positioning"), s.save.direction(), s.save.screenCalculations(), s.save.elementCalculations()
                  },
                  occurred: function(e) {
                      e && (s.cache.occurred[e] !== O && !0 === s.cache.occurred[e] || (s.verbose("Saving callback occurred", e), s.cache.occurred[e] = !0))
                  },
                  scroll: function(e) {
                      e = e + o.offset || m.scrollTop() + o.offset, s.cache.scroll = e
                  },
                  direction: function() {
                      var e, t = s.get.scroll(),
                          n = s.get.lastScroll();
                      return e = n < t && n ? "down" : t < n && n ? "up" : "static", s.cache.direction = e, s.cache.direction
                  },
                  elementPosition: function() {
                      var e = s.cache.element,
                          t = s.get.screenSize();
                      return s.verbose("Saving element position"), e.fits = e.height < t.height, e.offset = f.offset(), e.width = f.outerWidth(), e.height = f.outerHeight(), s.is.verticallyScrollableContext() && (e.offset.top += m.scrollTop() - m.offset().top), s.is.horizontallyScrollableContext() && (e.offset.left += m.scrollLeft() - m.offset().left), s.cache.element = e
                  },
                  elementCalculations: function() {
                      var e = s.get.screenCalculations(),
                          t = s.get.elementPosition();
                      return o.includeMargin ? (t.margin = {}, t.margin.top = parseInt(f.css("margin-top"), 10), t.margin.bottom = parseInt(f.css("margin-bottom"), 10), t.top = t.offset.top - t.margin.top, t.bottom = t.offset.top + t.height + t.margin.bottom) : (t.top = t.offset.top, t.bottom = t.offset.top + t.height), t.topPassed = e.top >= t.top, t.bottomPassed = e.top >= t.bottom, t.topVisible = e.bottom >= t.top && !t.topPassed, t.bottomVisible = e.bottom >= t.bottom && !t.bottomPassed, t.pixelsPassed = 0, t.percentagePassed = 0, t.onScreen = (t.topVisible || t.passing) && !t.bottomPassed, t.passing = t.topPassed && !t.bottomPassed, t.offScreen = !t.onScreen, t.passing && (t.pixelsPassed = e.top - t.top, t.percentagePassed = (e.top - t.top) / t.height), s.cache.element = t, s.verbose("Updated element calculations", t), t
                  },
                  screenCalculations: function() {
                      var e = s.get.scroll();
                      return s.save.direction(), s.cache.screen.top = e, s.cache.screen.bottom = e + s.cache.screen.height, s.cache.screen
                  },
                  screenSize: function() {
                      s.verbose("Saving window position"), s.cache.screen = {
                          height: m.height()
                      }
                  },
                  position: function() {
                      s.save.screenSize(), s.save.elementPosition()
                  }
              },
              get: {
                  pixelsPassed: function(e) {
                      var t = s.get.elementCalculations();
                      return -1 < e.search("%") ? t.height * (parseInt(e, 10) / 100) : parseInt(e, 10)
                  },
                  occurred: function(e) {
                      return s.cache.occurred !== O && s.cache.occurred[e] || !1
                  },
                  direction: function() {
                      return s.cache.direction === O && s.save.direction(), s.cache.direction
                  },
                  elementPosition: function() {
                      return s.cache.element === O && s.save.elementPosition(), s.cache.element
                  },
                  elementCalculations: function() {
                      return s.cache.element === O && s.save.elementCalculations(), s.cache.element
                  },
                  screenCalculations: function() {
                      return s.cache.screen === O && s.save.screenCalculations(), s.cache.screen
                  },
                  screenSize: function() {
                      return s.cache.screen === O && s.save.screenSize(), s.cache.screen
                  },
                  scroll: function() {
                      return s.cache.scroll === O && s.save.scroll(), s.cache.scroll
                  },
                  lastScroll: function() {
                      return s.cache.screen === O ? (s.debug("First scroll event, no last scroll could be found"), !1) : s.cache.screen.top
                  }
              },
              setting: function(e, t) {
                  if (E.isPlainObject(e)) E.extend(!0, o, e);
                  else {
                      if (t === O) return o[e];
                      o[e] = t
                  }
              },
              internal: function(e, t) {
                  if (E.isPlainObject(e)) E.extend(!0, s, e);
                  else {
                      if (t === O) return s[e];
                      s[e] = t
                  }
              },
              debug: function() {
                  !o.silent && o.debug && (o.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, o.name + ":"), s.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !o.silent && o.verbose && o.debug && (o.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, o.name + ":"), s.verbose.apply(console, arguments)))
              },
              error: function() {
                  o.silent || (s.error = Function.prototype.bind.call(console.error, console, o.name + ":"), s.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, n;
                      o.performance && (n = (t = (new Date).getTime()) - (C || t), C = t, w.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: h,
                          "Execution Time": n
                      })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500)
                  },
                  display: function() {
                      var e = o.name + ":",
                          n = 0;
                      C = !1, clearTimeout(s.performance.timer), E.each(w, function(e, t) {
                          n += t["Execution Time"]
                      }), e += " " + n + "ms", x && (e += " '" + x + "'"), (console.group !== O || console.table !== O) && 0 < w.length && (console.groupCollapsed(e), console.table ? console.table(w) : E.each(w, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }), console.groupEnd()), w = []
                  }
              },
              invoke: function(i, e, t) {
                  var o, a, n, r = g;
                  return e = e || S, t = h || t, "string" == typeof i && r !== O && (i = i.split(/[\. ]/), o = i.length - 1, E.each(i, function(e, t) {
                      var n = e != o ? t + i[e + 1].charAt(0).toUpperCase() + i[e + 1].slice(1) : i;
                      if (E.isPlainObject(r[n]) && e != o) r = r[n];
                      else {
                          if (r[n] !== O) return a = r[n], !1;
                          if (!E.isPlainObject(r[t]) || e == o) return r[t] !== O ? a = r[t] : s.error(l.method, i), !1;
                          r = r[t]
                      }
                  })), E.isFunction(a) ? n = a.apply(t, e) : a !== O && (n = a), Array.isArray(y) ? y.push(n) : y !== O ? y = [y, n] : n !== O && (y = n), a
              }
          }, T ? (g === O && s.initialize(), g.save.scroll(), g.save.calculations(), s.invoke(k)) : (g !== O && g.invoke("destroy"), s.initialize())
      }), y !== O ? y : this
  }, E.fn.visibility.settings = {
      name: "Visibility",
      namespace: "visibility",
      debug: !1,
      verbose: !1,
      performance: !0,
      observeChanges: !0,
      initialCheck: !0,
      refreshOnLoad: !0,
      refreshOnResize: !0,
      checkOnRefresh: !0,
      once: !0,
      continuous: !1,
      offset: 0,
      includeMargin: !1,
      context: F,
      throttle: !1,
      type: !1,
      zIndex: "10",
      transition: "fade in",
      duration: 1e3,
      onPassed: {},
      onOnScreen: !1,
      onOffScreen: !1,
      onPassing: !1,
      onTopVisible: !1,
      onBottomVisible: !1,
      onTopPassed: !1,
      onBottomPassed: !1,
      onPassingReverse: !1,
      onTopVisibleReverse: !1,
      onBottomVisibleReverse: !1,
      onTopPassedReverse: !1,
      onBottomPassedReverse: !1,
      onLoad: function() {},
      onAllLoaded: function() {},
      onFixed: function() {},
      onUnfixed: function() {},
      onUpdate: !1,
      onRefresh: function() {},
      metadata: {
          src: "src"
      },
      className: {
          fixed: "fixed",
          placeholder: "constraint",
          visible: "visible"
      },
      error: {
          method: "The method you called is not defined.",
          visible: "Element is hidden, you must call refresh after element becomes visible"
      }
  }
}(jQuery, window, document);
/*
* This combined file was created by the DataTables downloader builder:
*   https://datatables.net/download
*
* To rebuild or modify this file with the latest versions of the included
* software please visit:
*   https://datatables.net/download/#se/dt-1.10.23/rg-1.1.2
*
* Included libraries:
*  DataTables 1.10.23, RowGroup 1.1.2
*/

/*!
 Copyright 2008-2020 SpryMedia Ltd.

This source file is free software, available under the following license:
 MIT license - http://datatables.net/license

This source file is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

For details please refer to: http://www.datatables.net
DataTables 1.10.23
©2008-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(k, y, z) {
  k instanceof String && (k = String(k));
  for (var q = k.length, G = 0; G < q; G++) {
      var O = k[G];
      if (y.call(z, O, G, k)) return {
          i: G,
          v: O
      }
  }
  return {
      i: -1,
      v: void 0
  }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(k, y, z) {
  if (k == Array.prototype || k == Object.prototype) return k;
  k[y] = z.value;
  return k
};
$jscomp.getGlobal = function(k) {
  k = ["object" == typeof globalThis && globalThis, k, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var y = 0; y < k.length; ++y) {
      var z = k[y];
      if (z && z.Math == Math) return z
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(k, y) {
  var z = $jscomp.propertyToPolyfillSymbol[y];
  if (null == z) return k[y];
  z = k[z];
  return void 0 !== z ? z : k[y]
};
$jscomp.polyfill = function(k, y, z, q) {
  y && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(k, y, z, q) : $jscomp.polyfillUnisolated(k, y, z, q))
};
$jscomp.polyfillUnisolated = function(k, y, z, q) {
  z = $jscomp.global;
  k = k.split(".");
  for (q = 0; q < k.length - 1; q++) {
      var G = k[q];
      if (!(G in z)) return;
      z = z[G]
  }
  k = k[k.length - 1];
  q = z[k];
  y = y(q);
  y != q && null != y && $jscomp.defineProperty(z, k, {
      configurable: !0,
      writable: !0,
      value: y
  })
};
$jscomp.polyfillIsolated = function(k, y, z, q) {
  var G = k.split(".");
  k = 1 === G.length;
  q = G[0];
  q = !k && q in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var O = 0; O < G.length - 1; O++) {
      var ma = G[O];
      if (!(ma in q)) return;
      q = q[ma]
  }
  G = G[G.length - 1];
  z = $jscomp.IS_SYMBOL_NATIVE && "es6" === z ? q[G] : null;
  y = y(z);
  null != y && (k ? $jscomp.defineProperty($jscomp.polyfills, G, {
      configurable: !0,
      writable: !0,
      value: y
  }) : y !== z && ($jscomp.propertyToPolyfillSymbol[G] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(G) : $jscomp.POLYFILL_PREFIX + G,
      G = $jscomp.propertyToPolyfillSymbol[G], $jscomp.defineProperty(q, G, {
          configurable: !0,
          writable: !0,
          value: y
      })))
};
$jscomp.polyfill("Array.prototype.find", function(k) {
  return k ? k : function(y, z) {
      return $jscomp.findInternal(this, y, z).v
  }
}, "es6", "es3");
(function(k) {
  "function" === typeof define && define.amd ? define(["jquery"], function(y) {
      return k(y, window, document)
  }) : "object" === typeof exports ? module.exports = function(y, z) {
      y || (y = window);
      z || (z = "undefined" !== typeof window ? require("jquery") : require("jquery")(y));
      return k(z, y, y.document)
  } : k(jQuery, window, document)
})(function(k, y, z, q) {
  function G(a) {
      var b, c, d = {};
      k.each(a, function(e, f) {
          (b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ") && (c = e.replace(b[0], b[2].toLowerCase()),
              d[c] = e, "o" === b[1] && G(a[e]))
      });
      a._hungarianMap = d
  }

  function O(a, b, c) {
      a._hungarianMap || G(a);
      var d;
      k.each(b, function(e, f) {
          d = a._hungarianMap[e];
          d === q || !c && b[d] !== q || ("o" === d.charAt(0) ? (b[d] || (b[d] = {}), k.extend(!0, b[d], b[e]), O(a[d], b[d], c)) : b[d] = b[e])
      })
  }

  function ma(a) {
      var b = u.defaults.oLanguage,
          c = b.sDecimal;
      c && Va(c);
      if (a) {
          var d = a.sZeroRecords;
          !a.sEmptyTable && d && "No data available in table" === b.sEmptyTable && V(a, a, "sZeroRecords", "sEmptyTable");
          !a.sLoadingRecords && d && "Loading..." === b.sLoadingRecords && V(a, a,
              "sZeroRecords", "sLoadingRecords");
          a.sInfoThousands && (a.sThousands = a.sInfoThousands);
          (a = a.sDecimal) && c !== a && Va(a)
      }
  }

  function yb(a) {
      R(a, "ordering", "bSort");
      R(a, "orderMulti", "bSortMulti");
      R(a, "orderClasses", "bSortClasses");
      R(a, "orderCellsTop", "bSortCellsTop");
      R(a, "order", "aaSorting");
      R(a, "orderFixed", "aaSortingFixed");
      R(a, "paging", "bPaginate");
      R(a, "pagingType", "sPaginationType");
      R(a, "pageLength", "iDisplayLength");
      R(a, "searching", "bFilter");
      "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" :
          "");
      "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
      if (a = a.aoSearchCols)
          for (var b = 0, c = a.length; b < c; b++) a[b] && O(u.models.oSearch, a[b])
  }

  function zb(a) {
      R(a, "orderable", "bSortable");
      R(a, "orderData", "aDataSort");
      R(a, "orderSequence", "asSorting");
      R(a, "orderDataType", "sortDataType");
      var b = a.aDataSort;
      "number" !== typeof b || Array.isArray(b) || (a.aDataSort = [b])
  }

  function Ab(a) {
      if (!u.__browser) {
          var b = {};
          u.__browser = b;
          var c = k("<div/>").css({
                  position: "fixed",
                  top: 0,
                  left: -1 * k(y).scrollLeft(),
                  height: 1,
                  width: 1,
                  overflow: "hidden"
              }).append(k("<div/>").css({
                  position: "absolute",
                  top: 1,
                  left: 1,
                  width: 100,
                  overflow: "scroll"
              }).append(k("<div/>").css({
                  width: "100%",
                  height: 10
              }))).appendTo("body"),
              d = c.children(),
              e = d.children();
          b.barWidth = d[0].offsetWidth - d[0].clientWidth;
          b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
          b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
          b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
          c.remove()
      }
      k.extend(a.oBrowser, u.__browser);
      a.oScroll.iBarWidth = u.__browser.barWidth
  }

  function Bb(a, b, c, d, e, f) {
      var g = !1;
      if (c !== q) {
          var h = c;
          g = !0
      }
      for (; d !== e;) a.hasOwnProperty(d) && (h = g ? b(h, a[d], d, a) : a[d], g = !0, d += f);
      return h
  }

  function Wa(a, b) {
      var c = u.defaults.column,
          d = a.aoColumns.length;
      c = k.extend({}, u.models.oColumn, c, {
          nTh: b ? b : z.createElement("th"),
          sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
          aDataSort: c.aDataSort ? c.aDataSort : [d],
          mData: c.mData ? c.mData : d,
          idx: d
      });
      a.aoColumns.push(c);
      c = a.aoPreSearchCols;
      c[d] = k.extend({}, u.models.oSearch, c[d]);
      Da(a, d, k(b).data())
  }

  function Da(a, b, c) {
      b = a.aoColumns[b];
      var d = a.oClasses,
          e = k(b.nTh);
      if (!b.sWidthOrig) {
          b.sWidthOrig = e.attr("width") || null;
          var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
          f && (b.sWidthOrig = f[1])
      }
      c !== q && null !== c && (zb(c), O(u.defaults.column, c, !0), c.mDataProp === q || c.mData || (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), c.sClass && e.addClass(c.sClass), k.extend(b, c), V(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== q && (b.aDataSort = [c.iDataSort]), V(b, c, "aDataSort"));
      var g = b.mData,
          h = ia(g),
          l = b.mRender ? ia(b.mRender) : null;
      c = function(n) {
          return "string" === typeof n && -1 !== n.indexOf("@")
      };
      b._bAttrSrc = k.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
      b._setter = null;
      b.fnGetData = function(n, m, p) {
          var t = h(n, m, q, p);
          return l && m ? l(t, m, n, p) : t
      };
      b.fnSetData = function(n, m, p) {
          return da(g)(n, m, p)
      };
      "number" !== typeof g && (a._rowReadObject = !0);
      a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
      a = -1 !== k.inArray("asc", b.asSorting);
      c = -1 !== k.inArray("desc", b.asSorting);
      b.bSortable && (a || c) ? a && !c ?
          (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI) : (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "")
  }

  function ra(a) {
      if (!1 !== a.oFeatures.bAutoWidth) {
          var b = a.aoColumns;
          Xa(a);
          for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth
      }
      b = a.oScroll;
      "" === b.sY && "" === b.sX || Ea(a);
      I(a, null, "column-sizing", [a])
  }

  function sa(a, b) {
      a = Fa(a, "bVisible");
      return "number" === typeof a[b] ? a[b] : null
  }

  function ta(a, b) {
      a = Fa(a, "bVisible");
      b = k.inArray(b, a);
      return -1 !== b ? b : null
  }

  function na(a) {
      var b = 0;
      k.each(a.aoColumns, function(c, d) {
          d.bVisible && "none" !== k(d.nTh).css("display") && b++
      });
      return b
  }

  function Fa(a, b) {
      var c = [];
      k.map(a.aoColumns, function(d, e) {
          d[b] && c.push(e)
      });
      return c
  }

  function Ya(a) {
      var b = a.aoColumns,
          c = a.aoData,
          d = u.ext.type.detect,
          e, f, g;
      var h = 0;
      for (e = b.length; h < e; h++) {
          var l = b[h];
          var n = [];
          if (!l.sType && l._sManualType) l.sType = l._sManualType;
          else if (!l.sType) {
              var m =
                  0;
              for (f = d.length; m < f; m++) {
                  var p = 0;
                  for (g = c.length; p < g; p++) {
                      n[p] === q && (n[p] = S(a, p, h, "type"));
                      var t = d[m](n[p], a);
                      if (!t && m !== d.length - 1) break;
                      if ("html" === t) break
                  }
                  if (t) {
                      l.sType = t;
                      break
                  }
              }
              l.sType || (l.sType = "string")
          }
      }
  }

  function Cb(a, b, c, d) {
      var e, f, g, h = a.aoColumns;
      if (b)
          for (e = b.length - 1; 0 <= e; e--) {
              var l = b[e];
              var n = l.targets !== q ? l.targets : l.aTargets;
              Array.isArray(n) || (n = [n]);
              var m = 0;
              for (f = n.length; m < f; m++)
                  if ("number" === typeof n[m] && 0 <= n[m]) {
                      for (; h.length <= n[m];) Wa(a);
                      d(n[m], l)
                  } else if ("number" === typeof n[m] &&
                  0 > n[m]) d(h.length + n[m], l);
              else if ("string" === typeof n[m]) {
                  var p = 0;
                  for (g = h.length; p < g; p++)("_all" == n[m] || k(h[p].nTh).hasClass(n[m])) && d(p, l)
              }
          }
      if (c)
          for (e = 0, a = c.length; e < a; e++) d(e, c[e])
  }

  function ea(a, b, c, d) {
      var e = a.aoData.length,
          f = k.extend(!0, {}, u.models.oRow, {
              src: c ? "dom" : "data",
              idx: e
          });
      f._aData = b;
      a.aoData.push(f);
      for (var g = a.aoColumns, h = 0, l = g.length; h < l; h++) g[h].sType = null;
      a.aiDisplayMaster.push(e);
      b = a.rowIdFn(b);
      b !== q && (a.aIds[b] = f);
      !c && a.oFeatures.bDeferRender || Za(a, e, c, d);
      return e
  }

  function Ga(a,
      b) {
      var c;
      b instanceof k || (b = k(b));
      return b.map(function(d, e) {
          c = $a(a, e);
          return ea(a, c.data, e, c.cells)
      })
  }

  function S(a, b, c, d) {
      var e = a.iDraw,
          f = a.aoColumns[c],
          g = a.aoData[b]._aData,
          h = f.sDefaultContent,
          l = f.fnGetData(g, d, {
              settings: a,
              row: b,
              col: c
          });
      if (l === q) return a.iDrawError != e && null === h && (aa(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), h;
      if ((l === g || null === l) && null !== h && d !== q) l = h;
      else if ("function" === typeof l) return l.call(g);
      return null === l && "display" == d ? "" : l
  }

  function Db(a, b, c, d) {
      a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
          settings: a,
          row: b,
          col: c
      })
  }

  function ab(a) {
      return k.map(a.match(/(\\.|[^\.])+/g) || [""], function(b) {
          return b.replace(/\\\./g, ".")
      })
  }

  function ia(a) {
      if (k.isPlainObject(a)) {
          var b = {};
          k.each(a, function(d, e) {
              e && (b[d] = ia(e))
          });
          return function(d, e, f, g) {
              var h = b[e] || b._;
              return h !== q ? h(d, e, f, g) : d
          }
      }
      if (null === a) return function(d) {
          return d
      };
      if ("function" === typeof a) return function(d, e, f, g) {
          return a(d, e, f, g)
      };
      if ("string" !==
          typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function(d, e) {
          return d[a]
      };
      var c = function(d, e, f) {
          if ("" !== f) {
              var g = ab(f);
              for (var h = 0, l = g.length; h < l; h++) {
                  f = g[h].match(ua);
                  var n = g[h].match(oa);
                  if (f) {
                      g[h] = g[h].replace(ua, "");
                      "" !== g[h] && (d = d[g[h]]);
                      n = [];
                      g.splice(0, h + 1);
                      g = g.join(".");
                      if (Array.isArray(d))
                          for (h = 0, l = d.length; h < l; h++) n.push(c(d[h], e, g));
                      d = f[0].substring(1, f[0].length - 1);
                      d = "" === d ? n : n.join(d);
                      break
                  } else if (n) {
                      g[h] = g[h].replace(oa, "");
                      d = d[g[h]]();
                      continue
                  }
                  if (null ===
                      d || d[g[h]] === q) return q;
                  d = d[g[h]]
              }
          }
          return d
      };
      return function(d, e) {
          return c(d, e, a)
      }
  }

  function da(a) {
      if (k.isPlainObject(a)) return da(a._);
      if (null === a) return function() {};
      if ("function" === typeof a) return function(c, d, e) {
          a(c, "set", d, e)
      };
      if ("string" !== typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function(c, d) {
          c[a] = d
      };
      var b = function(c, d, e) {
          e = ab(e);
          var f = e[e.length - 1];
          for (var g, h, l = 0, n = e.length - 1; l < n; l++) {
              if ("__proto__" === e[l] || "constructor" === e[l]) throw Error("Cannot set prototype values");
              g = e[l].match(ua);
              h = e[l].match(oa);
              if (g) {
                  e[l] = e[l].replace(ua, "");
                  c[e[l]] = [];
                  f = e.slice();
                  f.splice(0, l + 1);
                  g = f.join(".");
                  if (Array.isArray(d))
                      for (h = 0, n = d.length; h < n; h++) f = {}, b(f, d[h], g), c[e[l]].push(f);
                  else c[e[l]] = d;
                  return
              }
              h && (e[l] = e[l].replace(oa, ""), c = c[e[l]](d));
              if (null === c[e[l]] || c[e[l]] === q) c[e[l]] = {};
              c = c[e[l]]
          }
          if (f.match(oa)) c[f.replace(oa, "")](d);
          else c[f.replace(ua, "")] = d
      };
      return function(c, d) {
          return b(c, d, a)
      }
  }

  function bb(a) {
      return T(a.aoData, "_aData")
  }

  function Ha(a) {
      a.aoData.length = 0;
      a.aiDisplayMaster.length =
          0;
      a.aiDisplay.length = 0;
      a.aIds = {}
  }

  function Ia(a, b, c) {
      for (var d = -1, e = 0, f = a.length; e < f; e++) a[e] == b ? d = e : a[e] > b && a[e]--; - 1 != d && c === q && a.splice(d, 1)
  }

  function va(a, b, c, d) {
      var e = a.aoData[b],
          f, g = function(l, n) {
              for (; l.childNodes.length;) l.removeChild(l.firstChild);
              l.innerHTML = S(a, b, n, "display")
          };
      if ("dom" !== c && (c && "auto" !== c || "dom" !== e.src)) {
          var h = e.anCells;
          if (h)
              if (d !== q) g(h[d], d);
              else
                  for (c = 0, f = h.length; c < f; c++) g(h[c], c)
      } else e._aData = $a(a, e, d, d === q ? q : e._aData).data;
      e._aSortData = null;
      e._aFilterData = null;
      g =
          a.aoColumns;
      if (d !== q) g[d].sType = null;
      else {
          c = 0;
          for (f = g.length; c < f; c++) g[c].sType = null;
          cb(a, e)
      }
  }

  function $a(a, b, c, d) {
      var e = [],
          f = b.firstChild,
          g, h = 0,
          l, n = a.aoColumns,
          m = a._rowReadObject;
      d = d !== q ? d : m ? {} : [];
      var p = function(x, r) {
              if ("string" === typeof x) {
                  var A = x.indexOf("@"); - 1 !== A && (A = x.substring(A + 1), da(x)(d, r.getAttribute(A)))
              }
          },
          t = function(x) {
              if (c === q || c === h) g = n[h], l = x.innerHTML.trim(), g && g._bAttrSrc ? (da(g.mData._)(d, l), p(g.mData.sort, x), p(g.mData.type, x), p(g.mData.filter, x)) : m ? (g._setter || (g._setter = da(g.mData)),
                  g._setter(d, l)) : d[h] = l;
              h++
          };
      if (f)
          for (; f;) {
              var v = f.nodeName.toUpperCase();
              if ("TD" == v || "TH" == v) t(f), e.push(f);
              f = f.nextSibling
          } else
              for (e = b.anCells, f = 0, v = e.length; f < v; f++) t(e[f]);
      (b = b.firstChild ? b : b.nTr) && (b = b.getAttribute("id")) && da(a.rowId)(d, b);
      return {
          data: d,
          cells: e
      }
  }

  function Za(a, b, c, d) {
      var e = a.aoData[b],
          f = e._aData,
          g = [],
          h, l;
      if (null === e.nTr) {
          var n = c || z.createElement("tr");
          e.nTr = n;
          e.anCells = g;
          n._DT_RowIndex = b;
          cb(a, e);
          var m = 0;
          for (h = a.aoColumns.length; m < h; m++) {
              var p = a.aoColumns[m];
              e = (l = c ? !1 : !0) ? z.createElement(p.sCellType) :
                  d[m];
              e._DT_CellIndex = {
                  row: b,
                  column: m
              };
              g.push(e);
              if (l || !(!p.mRender && p.mData === m || k.isPlainObject(p.mData) && p.mData._ === m + ".display")) e.innerHTML = S(a, b, m, "display");
              p.sClass && (e.className += " " + p.sClass);
              p.bVisible && !c ? n.appendChild(e) : !p.bVisible && c && e.parentNode.removeChild(e);
              p.fnCreatedCell && p.fnCreatedCell.call(a.oInstance, e, S(a, b, m), f, b, m)
          }
          I(a, "aoRowCreatedCallback", null, [n, f, b, g])
      }
  }

  function cb(a, b) {
      var c = b.nTr,
          d = b._aData;
      if (c) {
          if (a = a.rowIdFn(d)) c.id = a;
          d.DT_RowClass && (a = d.DT_RowClass.split(" "),
              b.__rowc = b.__rowc ? Ja(b.__rowc.concat(a)) : a, k(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
          d.DT_RowAttr && k(c).attr(d.DT_RowAttr);
          d.DT_RowData && k(c).data(d.DT_RowData)
      }
  }

  function Eb(a) {
      var b, c, d = a.nTHead,
          e = a.nTFoot,
          f = 0 === k("th, td", d).length,
          g = a.oClasses,
          h = a.aoColumns;
      f && (c = k("<tr/>").appendTo(d));
      var l = 0;
      for (b = h.length; l < b; l++) {
          var n = h[l];
          var m = k(n.nTh).addClass(n.sClass);
          f && m.appendTo(c);
          a.oFeatures.bSort && (m.addClass(n.sSortingClass), !1 !== n.bSortable && (m.attr("tabindex", a.iTabIndex).attr("aria-controls",
              a.sTableId), db(a, n.nTh, l)));
          n.sTitle != m[0].innerHTML && m.html(n.sTitle);
          eb(a, "header")(a, m, n, g)
      }
      f && wa(a.aoHeader, d);
      k(d).children("tr").attr("role", "row");
      k(d).children("tr").children("th, td").addClass(g.sHeaderTH);
      k(e).children("tr").children("th, td").addClass(g.sFooterTH);
      if (null !== e)
          for (a = a.aoFooter[0], l = 0, b = a.length; l < b; l++) n = h[l], n.nTf = a[l].cell, n.sClass && k(n.nTf).addClass(n.sClass)
  }

  function xa(a, b, c) {
      var d, e, f = [],
          g = [],
          h = a.aoColumns.length;
      if (b) {
          c === q && (c = !1);
          var l = 0;
          for (d = b.length; l < d; l++) {
              f[l] =
                  b[l].slice();
              f[l].nTr = b[l].nTr;
              for (e = h - 1; 0 <= e; e--) a.aoColumns[e].bVisible || c || f[l].splice(e, 1);
              g.push([])
          }
          l = 0;
          for (d = f.length; l < d; l++) {
              if (a = f[l].nTr)
                  for (; e = a.firstChild;) a.removeChild(e);
              e = 0;
              for (b = f[l].length; e < b; e++) {
                  var n = h = 1;
                  if (g[l][e] === q) {
                      a.appendChild(f[l][e].cell);
                      for (g[l][e] = 1; f[l + h] !== q && f[l][e].cell == f[l + h][e].cell;) g[l + h][e] = 1, h++;
                      for (; f[l][e + n] !== q && f[l][e].cell == f[l][e + n].cell;) {
                          for (c = 0; c < h; c++) g[l + c][e + n] = 1;
                          n++
                      }
                      k(f[l][e].cell).attr("rowspan", h).attr("colspan", n)
                  }
              }
          }
      }
  }

  function fa(a) {
      var b =
          I(a, "aoPreDrawCallback", "preDraw", [a]);
      if (-1 !== k.inArray(!1, b)) U(a, !1);
      else {
          b = [];
          var c = 0,
              d = a.asStripeClasses,
              e = d.length,
              f = a.oLanguage,
              g = a.iInitDisplayStart,
              h = "ssp" == P(a),
              l = a.aiDisplay;
          a.bDrawing = !0;
          g !== q && -1 !== g && (a._iDisplayStart = h ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
          g = a._iDisplayStart;
          var n = a.fnDisplayEnd();
          if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, U(a, !1);
          else if (!h) a.iDraw++;
          else if (!a.bDestroying && !Fb(a)) return;
          if (0 !== l.length)
              for (f = h ? a.aoData.length : n, h = h ? 0 : g; h < f; h++) {
                  var m =
                      l[h],
                      p = a.aoData[m];
                  null === p.nTr && Za(a, m);
                  var t = p.nTr;
                  if (0 !== e) {
                      var v = d[c % e];
                      p._sRowStripe != v && (k(t).removeClass(p._sRowStripe).addClass(v), p._sRowStripe = v)
                  }
                  I(a, "aoRowCallback", null, [t, p._aData, c, h, m]);
                  b.push(t);
                  c++
              } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == P(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = k("<tr/>", {
                  "class": e ? d[0] : ""
              }).append(k("<td />", {
                  valign: "top",
                  colSpan: na(a),
                  "class": a.oClasses.sRowEmpty
              }).html(c))[0];
          I(a, "aoHeaderCallback", "header", [k(a.nTHead).children("tr")[0],
              bb(a), g, n, l
          ]);
          I(a, "aoFooterCallback", "footer", [k(a.nTFoot).children("tr")[0], bb(a), g, n, l]);
          d = k(a.nTBody);
          d.children().detach();
          d.append(k(b));
          I(a, "aoDrawCallback", "draw", [a]);
          a.bSorted = !1;
          a.bFiltered = !1;
          a.bDrawing = !1
      }
  }

  function ja(a, b) {
      var c = a.oFeatures,
          d = c.bFilter;
      c.bSort && Gb(a);
      d ? ya(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
      !0 !== b && (a._iDisplayStart = 0);
      a._drawHold = b;
      fa(a);
      a._drawHold = !1
  }

  function Hb(a) {
      var b = a.oClasses,
          c = k(a.nTable);
      c = k("<div/>").insertBefore(c);
      var d = a.oFeatures,
          e = k("<div/>", {
              id: a.sTableId + "_wrapper",
              "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
          });
      a.nHolding = c[0];
      a.nTableWrapper = e[0];
      a.nTableReinsertBefore = a.nTable.nextSibling;
      for (var f = a.sDom.split(""), g, h, l, n, m, p, t = 0; t < f.length; t++) {
          g = null;
          h = f[t];
          if ("<" == h) {
              l = k("<div/>")[0];
              n = f[t + 1];
              if ("'" == n || '"' == n) {
                  m = "";
                  for (p = 2; f[t + p] != n;) m += f[t + p], p++;
                  "H" == m ? m = b.sJUIHeader : "F" == m && (m = b.sJUIFooter); - 1 != m.indexOf(".") ? (n = m.split("."), l.id = n[0].substr(1, n[0].length - 1), l.className = n[1]) : "#" == m.charAt(0) ? l.id = m.substr(1,
                      m.length - 1) : l.className = m;
                  t += p
              }
              e.append(l);
              e = k(l)
          } else if (">" == h) e = e.parent();
          else if ("l" == h && d.bPaginate && d.bLengthChange) g = Ib(a);
          else if ("f" == h && d.bFilter) g = Jb(a);
          else if ("r" == h && d.bProcessing) g = Kb(a);
          else if ("t" == h) g = Lb(a);
          else if ("i" == h && d.bInfo) g = Mb(a);
          else if ("p" == h && d.bPaginate) g = Nb(a);
          else if (0 !== u.ext.feature.length)
              for (l = u.ext.feature, p = 0, n = l.length; p < n; p++)
                  if (h == l[p].cFeature) {
                      g = l[p].fnInit(a);
                      break
                  } g && (l = a.aanFeatures, l[h] || (l[h] = []), l[h].push(g), e.append(g))
      }
      c.replaceWith(e);
      a.nHolding =
          null
  }

  function wa(a, b) {
      b = k(b).children("tr");
      var c, d, e;
      a.splice(0, a.length);
      var f = 0;
      for (e = b.length; f < e; f++) a.push([]);
      f = 0;
      for (e = b.length; f < e; f++) {
          var g = b[f];
          for (c = g.firstChild; c;) {
              if ("TD" == c.nodeName.toUpperCase() || "TH" == c.nodeName.toUpperCase()) {
                  var h = 1 * c.getAttribute("colspan");
                  var l = 1 * c.getAttribute("rowspan");
                  h = h && 0 !== h && 1 !== h ? h : 1;
                  l = l && 0 !== l && 1 !== l ? l : 1;
                  var n = 0;
                  for (d = a[f]; d[n];) n++;
                  var m = n;
                  var p = 1 === h ? !0 : !1;
                  for (d = 0; d < h; d++)
                      for (n = 0; n < l; n++) a[f + n][m + d] = {
                          cell: c,
                          unique: p
                      }, a[f + n].nTr = g
              }
              c = c.nextSibling
          }
      }
  }

  function Ka(a, b, c) {
      var d = [];
      c || (c = a.aoHeader, b && (c = [], wa(c, b)));
      b = 0;
      for (var e = c.length; b < e; b++)
          for (var f = 0, g = c[b].length; f < g; f++) !c[b][f].unique || d[f] && a.bSortCellsTop || (d[f] = c[b][f].cell);
      return d
  }

  function La(a, b, c) {
      I(a, "aoServerParams", "serverParams", [b]);
      if (b && Array.isArray(b)) {
          var d = {},
              e = /(.*?)\[\]$/;
          k.each(b, function(m, p) {
              (m = p.name.match(e)) ? (m = m[0], d[m] || (d[m] = []), d[m].push(p.value)) : d[p.name] = p.value
          });
          b = d
      }
      var f = a.ajax,
          g = a.oInstance,
          h = function(m) {
              I(a, null, "xhr", [a, m, a.jqXHR]);
              c(m)
          };
      if (k.isPlainObject(f) &&
          f.data) {
          var l = f.data;
          var n = "function" === typeof l ? l(b, a) : l;
          b = "function" === typeof l && n ? n : k.extend(!0, b, n);
          delete f.data
      }
      n = {
          data: b,
          success: function(m) {
              var p = m.error || m.sError;
              p && aa(a, 0, p);
              a.json = m;
              h(m)
          },
          dataType: "json",
          cache: !1,
          type: a.sServerMethod,
          error: function(m, p, t) {
              t = I(a, null, "xhr", [a, null, a.jqXHR]); - 1 === k.inArray(!0, t) && ("parsererror" == p ? aa(a, 0, "Invalid JSON response", 1) : 4 === m.readyState && aa(a, 0, "Ajax error", 7));
              U(a, !1)
          }
      };
      a.oAjaxData = b;
      I(a, null, "preXhr", [a, b]);
      a.fnServerData ? a.fnServerData.call(g,
          a.sAjaxSource, k.map(b, function(m, p) {
              return {
                  name: p,
                  value: m
              }
          }), h, a) : a.sAjaxSource || "string" === typeof f ? a.jqXHR = k.ajax(k.extend(n, {
          url: f || a.sAjaxSource
      })) : "function" === typeof f ? a.jqXHR = f.call(g, b, h, a) : (a.jqXHR = k.ajax(k.extend(n, f)), f.data = l)
  }

  function Fb(a) {
      return a.bAjaxDataGet ? (a.iDraw++, U(a, !0), La(a, Ob(a), function(b) {
          Pb(a, b)
      }), !1) : !0
  }

  function Ob(a) {
      var b = a.aoColumns,
          c = b.length,
          d = a.oFeatures,
          e = a.oPreviousSearch,
          f = a.aoPreSearchCols,
          g = [],
          h = pa(a);
      var l = a._iDisplayStart;
      var n = !1 !== d.bPaginate ? a._iDisplayLength :
          -1;
      var m = function(x, r) {
          g.push({
              name: x,
              value: r
          })
      };
      m("sEcho", a.iDraw);
      m("iColumns", c);
      m("sColumns", T(b, "sName").join(","));
      m("iDisplayStart", l);
      m("iDisplayLength", n);
      var p = {
          draw: a.iDraw,
          columns: [],
          order: [],
          start: l,
          length: n,
          search: {
              value: e.sSearch,
              regex: e.bRegex
          }
      };
      for (l = 0; l < c; l++) {
          var t = b[l];
          var v = f[l];
          n = "function" == typeof t.mData ? "function" : t.mData;
          p.columns.push({
              data: n,
              name: t.sName,
              searchable: t.bSearchable,
              orderable: t.bSortable,
              search: {
                  value: v.sSearch,
                  regex: v.bRegex
              }
          });
          m("mDataProp_" + l, n);
          d.bFilter &&
              (m("sSearch_" + l, v.sSearch), m("bRegex_" + l, v.bRegex), m("bSearchable_" + l, t.bSearchable));
          d.bSort && m("bSortable_" + l, t.bSortable)
      }
      d.bFilter && (m("sSearch", e.sSearch), m("bRegex", e.bRegex));
      d.bSort && (k.each(h, function(x, r) {
          p.order.push({
              column: r.col,
              dir: r.dir
          });
          m("iSortCol_" + x, r.col);
          m("sSortDir_" + x, r.dir)
      }), m("iSortingCols", h.length));
      b = u.ext.legacy.ajax;
      return null === b ? a.sAjaxSource ? g : p : b ? g : p
  }

  function Pb(a, b) {
      var c = function(g, h) {
              return b[g] !== q ? b[g] : b[h]
          },
          d = Ma(a, b),
          e = c("sEcho", "draw"),
          f = c("iTotalRecords",
              "recordsTotal");
      c = c("iTotalDisplayRecords", "recordsFiltered");
      if (e !== q) {
          if (1 * e < a.iDraw) return;
          a.iDraw = 1 * e
      }
      Ha(a);
      a._iRecordsTotal = parseInt(f, 10);
      a._iRecordsDisplay = parseInt(c, 10);
      e = 0;
      for (f = d.length; e < f; e++) ea(a, d[e]);
      a.aiDisplay = a.aiDisplayMaster.slice();
      a.bAjaxDataGet = !1;
      fa(a);
      a._bInitComplete || Na(a, b);
      a.bAjaxDataGet = !0;
      U(a, !1)
  }

  function Ma(a, b) {
      a = k.isPlainObject(a.ajax) && a.ajax.dataSrc !== q ? a.ajax.dataSrc : a.sAjaxDataProp;
      return "data" === a ? b.aaData || b[a] : "" !== a ? ia(a)(b) : b
  }

  function Jb(a) {
      var b = a.oClasses,
          c = a.sTableId,
          d = a.oLanguage,
          e = a.oPreviousSearch,
          f = a.aanFeatures,
          g = '<input type="search" class="' + b.sFilterInput + '"/>',
          h = d.sSearch;
      h = h.match(/_INPUT_/) ? h.replace("_INPUT_", g) : h + g;
      b = k("<div/>", {
          id: f.f ? null : c + "_filter",
          "class": b.sFilter
      }).append(k("<label/>").append(h));
      var l = function() {
          var m = this.value ? this.value : "";
          m != e.sSearch && (ya(a, {
              sSearch: m,
              bRegex: e.bRegex,
              bSmart: e.bSmart,
              bCaseInsensitive: e.bCaseInsensitive
          }), a._iDisplayStart = 0, fa(a))
      };
      f = null !== a.searchDelay ? a.searchDelay : "ssp" === P(a) ? 400 : 0;
      var n =
          k("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", f ? fb(l, f) : l).on("mouseup", function(m) {
              setTimeout(function() {
                  l.call(n[0])
              }, 10)
          }).on("keypress.DT", function(m) {
              if (13 == m.keyCode) return !1
          }).attr("aria-controls", c);
      k(a.nTable).on("search.dt.DT", function(m, p) {
          if (a === p) try {
              n[0] !== z.activeElement && n.val(e.sSearch)
          } catch (t) {}
      });
      return b[0]
  }

  function ya(a, b, c) {
      var d = a.oPreviousSearch,
          e = a.aoPreSearchCols,
          f = function(h) {
              d.sSearch = h.sSearch;
              d.bRegex =
                  h.bRegex;
              d.bSmart = h.bSmart;
              d.bCaseInsensitive = h.bCaseInsensitive
          },
          g = function(h) {
              return h.bEscapeRegex !== q ? !h.bEscapeRegex : h.bRegex
          };
      Ya(a);
      if ("ssp" != P(a)) {
          Qb(a, b.sSearch, c, g(b), b.bSmart, b.bCaseInsensitive);
          f(b);
          for (b = 0; b < e.length; b++) Rb(a, e[b].sSearch, b, g(e[b]), e[b].bSmart, e[b].bCaseInsensitive);
          Sb(a)
      } else f(b);
      a.bFiltered = !0;
      I(a, null, "search", [a])
  }

  function Sb(a) {
      for (var b = u.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f < g; f++) {
          for (var h = [], l = 0, n = c.length; l < n; l++) e = c[l], d = a.aoData[e], b[f](a, d._aFilterData,
              e, d._aData, l) && h.push(e);
          c.length = 0;
          k.merge(c, h)
      }
  }

  function Rb(a, b, c, d, e, f) {
      if ("" !== b) {
          var g = [],
              h = a.aiDisplay;
          d = gb(b, d, e, f);
          for (e = 0; e < h.length; e++) b = a.aoData[h[e]]._aFilterData[c], d.test(b) && g.push(h[e]);
          a.aiDisplay = g
      }
  }

  function Qb(a, b, c, d, e, f) {
      e = gb(b, d, e, f);
      var g = a.oPreviousSearch.sSearch,
          h = a.aiDisplayMaster;
      f = [];
      0 !== u.ext.search.length && (c = !0);
      var l = Tb(a);
      if (0 >= b.length) a.aiDisplay = h.slice();
      else {
          if (l || c || d || g.length > b.length || 0 !== b.indexOf(g) || a.bSorted) a.aiDisplay = h.slice();
          b = a.aiDisplay;
          for (c =
              0; c < b.length; c++) e.test(a.aoData[b[c]]._sFilterRow) && f.push(b[c]);
          a.aiDisplay = f
      }
  }

  function gb(a, b, c, d) {
      a = b ? a : hb(a);
      c && (a = "^(?=.*?" + k.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function(e) {
          if ('"' === e.charAt(0)) {
              var f = e.match(/^"(.*)"$/);
              e = f ? f[1] : e
          }
          return e.replace('"', "")
      }).join(")(?=.*?") + ").*$");
      return new RegExp(a, d ? "i" : "")
  }

  function Tb(a) {
      var b = a.aoColumns,
          c, d, e = u.ext.type.search;
      var f = !1;
      var g = 0;
      for (c = a.aoData.length; g < c; g++) {
          var h = a.aoData[g];
          if (!h._aFilterData) {
              var l = [];
              var n = 0;
              for (d = b.length; n < d; n++) {
                  f =
                      b[n];
                  if (f.bSearchable) {
                      var m = S(a, g, n, "filter");
                      e[f.sType] && (m = e[f.sType](m));
                      null === m && (m = "");
                      "string" !== typeof m && m.toString && (m = m.toString())
                  } else m = "";
                  m.indexOf && -1 !== m.indexOf("&") && (Oa.innerHTML = m, m = rc ? Oa.textContent : Oa.innerText);
                  m.replace && (m = m.replace(/[\r\n\u2028]/g, ""));
                  l.push(m)
              }
              h._aFilterData = l;
              h._sFilterRow = l.join("  ");
              f = !0
          }
      }
      return f
  }

  function Ub(a) {
      return {
          search: a.sSearch,
          smart: a.bSmart,
          regex: a.bRegex,
          caseInsensitive: a.bCaseInsensitive
      }
  }

  function Vb(a) {
      return {
          sSearch: a.search,
          bSmart: a.smart,
          bRegex: a.regex,
          bCaseInsensitive: a.caseInsensitive
      }
  }

  function Mb(a) {
      var b = a.sTableId,
          c = a.aanFeatures.i,
          d = k("<div/>", {
              "class": a.oClasses.sInfo,
              id: c ? null : b + "_info"
          });
      c || (a.aoDrawCallback.push({
          fn: Wb,
          sName: "information"
      }), d.attr("role", "status").attr("aria-live", "polite"), k(a.nTable).attr("aria-describedby", b + "_info"));
      return d[0]
  }

  function Wb(a) {
      var b = a.aanFeatures.i;
      if (0 !== b.length) {
          var c = a.oLanguage,
              d = a._iDisplayStart + 1,
              e = a.fnDisplayEnd(),
              f = a.fnRecordsTotal(),
              g = a.fnRecordsDisplay(),
              h = g ? c.sInfo : c.sInfoEmpty;
          g !== f && (h += " " + c.sInfoFiltered);
          h += c.sInfoPostFix;
          h = Xb(a, h);
          c = c.fnInfoCallback;
          null !== c && (h = c.call(a.oInstance, a, d, e, f, g, h));
          k(b).html(h)
      }
  }

  function Xb(a, b) {
      var c = a.fnFormatNumber,
          d = a._iDisplayStart + 1,
          e = a._iDisplayLength,
          f = a.fnRecordsDisplay(),
          g = -1 === e;
      return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f /
          e)))
  }

  function za(a) {
      var b = a.iInitDisplayStart,
          c = a.aoColumns;
      var d = a.oFeatures;
      var e = a.bDeferLoading;
      if (a.bInitialised) {
          Hb(a);
          Eb(a);
          xa(a, a.aoHeader);
          xa(a, a.aoFooter);
          U(a, !0);
          d.bAutoWidth && Xa(a);
          var f = 0;
          for (d = c.length; f < d; f++) {
              var g = c[f];
              g.sWidth && (g.nTh.style.width = K(g.sWidth))
          }
          I(a, null, "preInit", [a]);
          ja(a);
          c = P(a);
          if ("ssp" != c || e) "ajax" == c ? La(a, [], function(h) {
              var l = Ma(a, h);
              for (f = 0; f < l.length; f++) ea(a, l[f]);
              a.iInitDisplayStart = b;
              ja(a);
              U(a, !1);
              Na(a, h)
          }, a) : (U(a, !1), Na(a))
      } else setTimeout(function() {
              za(a)
          },
          200)
  }

  function Na(a, b) {
      a._bInitComplete = !0;
      (b || a.oInit.aaData) && ra(a);
      I(a, null, "plugin-init", [a, b]);
      I(a, "aoInitComplete", "init", [a, b])
  }

  function ib(a, b) {
      b = parseInt(b, 10);
      a._iDisplayLength = b;
      jb(a);
      I(a, null, "length", [a, b])
  }

  function Ib(a) {
      var b = a.oClasses,
          c = a.sTableId,
          d = a.aLengthMenu,
          e = Array.isArray(d[0]),
          f = e ? d[0] : d;
      d = e ? d[1] : d;
      e = k("<select/>", {
          name: c + "_length",
          "aria-controls": c,
          "class": b.sLengthSelect
      });
      for (var g = 0, h = f.length; g < h; g++) e[0][g] = new Option("number" === typeof d[g] ? a.fnFormatNumber(d[g]) : d[g],
          f[g]);
      var l = k("<div><label/></div>").addClass(b.sLength);
      a.aanFeatures.l || (l[0].id = c + "_length");
      l.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
      k("select", l).val(a._iDisplayLength).on("change.DT", function(n) {
          ib(a, k(this).val());
          fa(a)
      });
      k(a.nTable).on("length.dt.DT", function(n, m, p) {
          a === m && k("select", l).val(p)
      });
      return l[0]
  }

  function Nb(a) {
      var b = a.sPaginationType,
          c = u.ext.pager[b],
          d = "function" === typeof c,
          e = function(g) {
              fa(g)
          };
      b = k("<div/>").addClass(a.oClasses.sPaging + b)[0];
      var f = a.aanFeatures;
      d || c.fnInit(a, b, e);
      f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
          fn: function(g) {
              if (d) {
                  var h = g._iDisplayStart,
                      l = g._iDisplayLength,
                      n = g.fnRecordsDisplay(),
                      m = -1 === l;
                  h = m ? 0 : Math.ceil(h / l);
                  l = m ? 1 : Math.ceil(n / l);
                  n = c(h, l);
                  var p;
                  m = 0;
                  for (p = f.p.length; m < p; m++) eb(g, "pageButton")(g, f.p[m], m, n, h, l)
              } else c.fnUpdate(g, e)
          },
          sName: "pagination"
      }));
      return b
  }

  function kb(a, b, c) {
      var d = a._iDisplayStart,
          e = a._iDisplayLength,
          f = a.fnRecordsDisplay();
      0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f &&
          (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : aa(a, 0, "Unknown paging action: " + b, 5);
      b = a._iDisplayStart !== d;
      a._iDisplayStart = d;
      b && (I(a, null, "page", [a]), c && fa(a));
      return b
  }

  function Kb(a) {
      return k("<div/>", {
          id: a.aanFeatures.r ? null : a.sTableId + "_processing",
          "class": a.oClasses.sProcessing
      }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
  }

  function U(a, b) {
      a.oFeatures.bProcessing && k(a.aanFeatures.r).css("display", b ? "block" : "none");
      I(a, null, "processing", [a, b])
  }

  function Lb(a) {
      var b = k(a.nTable);
      b.attr("role", "grid");
      var c = a.oScroll;
      if ("" === c.sX && "" === c.sY) return a.nTable;
      var d = c.sX,
          e = c.sY,
          f = a.oClasses,
          g = b.children("caption"),
          h = g.length ? g[0]._captionSide : null,
          l = k(b[0].cloneNode(!1)),
          n = k(b[0].cloneNode(!1)),
          m = b.children("tfoot");
      m.length || (m = null);
      l = k("<div/>", {
          "class": f.sScrollWrapper
      }).append(k("<div/>", {
          "class": f.sScrollHead
      }).css({
          overflow: "hidden",
          position: "relative",
          border: 0,
          width: d ? d ? K(d) : null : "100%"
      }).append(k("<div/>", {
          "class": f.sScrollHeadInner
      }).css({
          "box-sizing": "content-box",
          width: c.sXInner || "100%"
      }).append(l.removeAttr("id").css("margin-left", 0).append("top" === h ? g : null).append(b.children("thead"))))).append(k("<div/>", {
          "class": f.sScrollBody
      }).css({
          position: "relative",
          overflow: "auto",
          width: d ? K(d) : null
      }).append(b));
      m && l.append(k("<div/>", {
          "class": f.sScrollFoot
      }).css({
          overflow: "hidden",
          border: 0,
          width: d ? d ? K(d) : null : "100%"
      }).append(k("<div/>", {
          "class": f.sScrollFootInner
      }).append(n.removeAttr("id").css("margin-left",
          0).append("bottom" === h ? g : null).append(b.children("tfoot")))));
      b = l.children();
      var p = b[0];
      f = b[1];
      var t = m ? b[2] : null;
      if (d) k(f).on("scroll.DT", function(v) {
          v = this.scrollLeft;
          p.scrollLeft = v;
          m && (t.scrollLeft = v)
      });
      k(f).css("max-height", e);
      c.bCollapse || k(f).css("height", e);
      a.nScrollHead = p;
      a.nScrollBody = f;
      a.nScrollFoot = t;
      a.aoDrawCallback.push({
          fn: Ea,
          sName: "scrolling"
      });
      return l[0]
  }

  function Ea(a) {
      var b = a.oScroll,
          c = b.sX,
          d = b.sXInner,
          e = b.sY;
      b = b.iBarWidth;
      var f = k(a.nScrollHead),
          g = f[0].style,
          h = f.children("div"),
          l =
          h[0].style,
          n = h.children("table");
      h = a.nScrollBody;
      var m = k(h),
          p = h.style,
          t = k(a.nScrollFoot).children("div"),
          v = t.children("table"),
          x = k(a.nTHead),
          r = k(a.nTable),
          A = r[0],
          E = A.style,
          H = a.nTFoot ? k(a.nTFoot) : null,
          W = a.oBrowser,
          M = W.bScrollOversize,
          C = T(a.aoColumns, "nTh"),
          B = [],
          ba = [],
          X = [],
          lb = [],
          Aa, Yb = function(F) {
              F = F.style;
              F.paddingTop = "0";
              F.paddingBottom = "0";
              F.borderTopWidth = "0";
              F.borderBottomWidth = "0";
              F.height = 0
          };
      var ha = h.scrollHeight > h.clientHeight;
      if (a.scrollBarVis !== ha && a.scrollBarVis !== q) a.scrollBarVis = ha, ra(a);
      else {
          a.scrollBarVis = ha;
          r.children("thead, tfoot").remove();
          if (H) {
              var ka = H.clone().prependTo(r);
              var la = H.find("tr");
              ka = ka.find("tr")
          }
          var mb = x.clone().prependTo(r);
          x = x.find("tr");
          ha = mb.find("tr");
          mb.find("th, td").removeAttr("tabindex");
          c || (p.width = "100%", f[0].style.width = "100%");
          k.each(Ka(a, mb), function(F, Y) {
              Aa = sa(a, F);
              Y.style.width = a.aoColumns[Aa].sWidth
          });
          H && Z(function(F) {
              F.style.width = ""
          }, ka);
          f = r.outerWidth();
          "" === c ? (E.width = "100%", M && (r.find("tbody").height() > h.offsetHeight || "scroll" == m.css("overflow-y")) &&
              (E.width = K(r.outerWidth() - b)), f = r.outerWidth()) : "" !== d && (E.width = K(d), f = r.outerWidth());
          Z(Yb, ha);
          Z(function(F) {
              X.push(F.innerHTML);
              B.push(K(k(F).css("width")))
          }, ha);
          Z(function(F, Y) {
              -1 !== k.inArray(F, C) && (F.style.width = B[Y])
          }, x);
          k(ha).height(0);
          H && (Z(Yb, ka), Z(function(F) {
              lb.push(F.innerHTML);
              ba.push(K(k(F).css("width")))
          }, ka), Z(function(F, Y) {
              F.style.width = ba[Y]
          }, la), k(ka).height(0));
          Z(function(F, Y) {
              F.innerHTML = '<div class="dataTables_sizing">' + X[Y] + "</div>";
              F.childNodes[0].style.height = "0";
              F.childNodes[0].style.overflow =
                  "hidden";
              F.style.width = B[Y]
          }, ha);
          H && Z(function(F, Y) {
              F.innerHTML = '<div class="dataTables_sizing">' + lb[Y] + "</div>";
              F.childNodes[0].style.height = "0";
              F.childNodes[0].style.overflow = "hidden";
              F.style.width = ba[Y]
          }, ka);
          r.outerWidth() < f ? (la = h.scrollHeight > h.offsetHeight || "scroll" == m.css("overflow-y") ? f + b : f, M && (h.scrollHeight > h.offsetHeight || "scroll" == m.css("overflow-y")) && (E.width = K(la - b)), "" !== c && "" === d || aa(a, 1, "Possible column misalignment", 6)) : la = "100%";
          p.width = K(la);
          g.width = K(la);
          H && (a.nScrollFoot.style.width =
              K(la));
          !e && M && (p.height = K(A.offsetHeight + b));
          c = r.outerWidth();
          n[0].style.width = K(c);
          l.width = K(c);
          d = r.height() > h.clientHeight || "scroll" == m.css("overflow-y");
          e = "padding" + (W.bScrollbarLeft ? "Left" : "Right");
          l[e] = d ? b + "px" : "0px";
          H && (v[0].style.width = K(c), t[0].style.width = K(c), t[0].style[e] = d ? b + "px" : "0px");
          r.children("colgroup").insertBefore(r.children("thead"));
          m.trigger("scroll");
          !a.bSorted && !a.bFiltered || a._drawHold || (h.scrollTop = 0)
      }
  }

  function Z(a, b, c) {
      for (var d = 0, e = 0, f = b.length, g, h; e < f;) {
          g = b[e].firstChild;
          for (h = c ? c[e].firstChild : null; g;) 1 === g.nodeType && (c ? a(g, h, d) : a(g, d), d++), g = g.nextSibling, h = c ? h.nextSibling : null;
          e++
      }
  }

  function Xa(a) {
      var b = a.nTable,
          c = a.aoColumns,
          d = a.oScroll,
          e = d.sY,
          f = d.sX,
          g = d.sXInner,
          h = c.length,
          l = Fa(a, "bVisible"),
          n = k("th", a.nTHead),
          m = b.getAttribute("width"),
          p = b.parentNode,
          t = !1,
          v, x = a.oBrowser;
      d = x.bScrollOversize;
      (v = b.style.width) && -1 !== v.indexOf("%") && (m = v);
      for (v = 0; v < l.length; v++) {
          var r = c[l[v]];
          null !== r.sWidth && (r.sWidth = Zb(r.sWidthOrig, p), t = !0)
      }
      if (d || !t && !f && !e && h == na(a) && h == n.length)
          for (v =
              0; v < h; v++) l = sa(a, v), null !== l && (c[l].sWidth = K(n.eq(v).width()));
      else {
          h = k(b).clone().css("visibility", "hidden").removeAttr("id");
          h.find("tbody tr").remove();
          var A = k("<tr/>").appendTo(h.find("tbody"));
          h.find("thead, tfoot").remove();
          h.append(k(a.nTHead).clone()).append(k(a.nTFoot).clone());
          h.find("tfoot th, tfoot td").css("width", "");
          n = Ka(a, h.find("thead")[0]);
          for (v = 0; v < l.length; v++) r = c[l[v]], n[v].style.width = null !== r.sWidthOrig && "" !== r.sWidthOrig ? K(r.sWidthOrig) : "", r.sWidthOrig && f && k(n[v]).append(k("<div/>").css({
              width: r.sWidthOrig,
              margin: 0,
              padding: 0,
              border: 0,
              height: 1
          }));
          if (a.aoData.length)
              for (v = 0; v < l.length; v++) t = l[v], r = c[t], k($b(a, t)).clone(!1).append(r.sContentPadding).appendTo(A);
          k("[name]", h).removeAttr("name");
          r = k("<div/>").css(f || e ? {
              position: "absolute",
              top: 0,
              left: 0,
              height: 1,
              right: 0,
              overflow: "hidden"
          } : {}).append(h).appendTo(p);
          f && g ? h.width(g) : f ? (h.css("width", "auto"), h.removeAttr("width"), h.width() < p.clientWidth && m && h.width(p.clientWidth)) : e ? h.width(p.clientWidth) : m && h.width(m);
          for (v = e = 0; v < l.length; v++) p = k(n[v]), g = p.outerWidth() -
              p.width(), p = x.bBounding ? Math.ceil(n[v].getBoundingClientRect().width) : p.outerWidth(), e += p, c[l[v]].sWidth = K(p - g);
          b.style.width = K(e);
          r.remove()
      }
      m && (b.style.width = K(m));
      !m && !f || a._reszEvt || (b = function() {
          k(y).on("resize.DT-" + a.sInstance, fb(function() {
              ra(a)
          }))
      }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0)
  }

  function Zb(a, b) {
      if (!a) return 0;
      a = k("<div/>").css("width", K(a)).appendTo(b || z.body);
      b = a[0].offsetWidth;
      a.remove();
      return b
  }

  function $b(a, b) {
      var c = ac(a, b);
      if (0 > c) return null;
      var d = a.aoData[c];
      return d.nTr ? d.anCells[b] :
          k("<td/>").html(S(a, c, b, "display"))[0]
  }

  function ac(a, b) {
      for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++) c = S(a, f, b, "display") + "", c = c.replace(sc, ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = f);
      return e
  }

  function K(a) {
      return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a
  }

  function pa(a) {
      var b = [],
          c = a.aoColumns;
      var d = a.aaSortingFixed;
      var e = k.isPlainObject(d);
      var f = [];
      var g = function(m) {
          m.length && !Array.isArray(m[0]) ? f.push(m) : k.merge(f, m)
      };
      Array.isArray(d) && g(d);
      e && d.pre && g(d.pre);
      g(a.aaSorting);
      e && d.post && g(d.post);
      for (a = 0; a < f.length; a++) {
          var h = f[a][0];
          g = c[h].aDataSort;
          d = 0;
          for (e = g.length; d < e; d++) {
              var l = g[d];
              var n = c[l].sType || "string";
              f[a]._idx === q && (f[a]._idx = k.inArray(f[a][1], c[l].asSorting));
              b.push({
                  src: h,
                  col: l,
                  dir: f[a][1],
                  index: f[a]._idx,
                  type: n,
                  formatter: u.ext.type.order[n + "-pre"]
              })
          }
      }
      return b
  }

  function Gb(a) {
      var b, c = [],
          d = u.ext.type.order,
          e = a.aoData,
          f = 0,
          g = a.aiDisplayMaster;
      Ya(a);
      var h = pa(a);
      var l = 0;
      for (b = h.length; l < b; l++) {
          var n = h[l];
          n.formatter && f++;
          bc(a,
              n.col)
      }
      if ("ssp" != P(a) && 0 !== h.length) {
          l = 0;
          for (b = g.length; l < b; l++) c[g[l]] = l;
          f === h.length ? g.sort(function(m, p) {
              var t, v = h.length,
                  x = e[m]._aSortData,
                  r = e[p]._aSortData;
              for (t = 0; t < v; t++) {
                  var A = h[t];
                  var E = x[A.col];
                  var H = r[A.col];
                  E = E < H ? -1 : E > H ? 1 : 0;
                  if (0 !== E) return "asc" === A.dir ? E : -E
              }
              E = c[m];
              H = c[p];
              return E < H ? -1 : E > H ? 1 : 0
          }) : g.sort(function(m, p) {
              var t, v = h.length,
                  x = e[m]._aSortData,
                  r = e[p]._aSortData;
              for (t = 0; t < v; t++) {
                  var A = h[t];
                  var E = x[A.col];
                  var H = r[A.col];
                  A = d[A.type + "-" + A.dir] || d["string-" + A.dir];
                  E = A(E, H);
                  if (0 !== E) return E
              }
              E =
                  c[m];
              H = c[p];
              return E < H ? -1 : E > H ? 1 : 0
          })
      }
      a.bSorted = !0
  }

  function cc(a) {
      var b = a.aoColumns,
          c = pa(a);
      a = a.oLanguage.oAria;
      for (var d = 0, e = b.length; d < e; d++) {
          var f = b[d];
          var g = f.asSorting;
          var h = f.sTitle.replace(/<.*?>/g, "");
          var l = f.nTh;
          l.removeAttribute("aria-sort");
          f.bSortable && (0 < c.length && c[0].col == d ? (l.setAttribute("aria-sort", "asc" == c[0].dir ? "ascending" : "descending"), f = g[c[0].index + 1] || g[0]) : f = g[0], h += "asc" === f ? a.sSortAscending : a.sSortDescending);
          l.setAttribute("aria-label", h)
      }
  }

  function nb(a, b, c, d) {
      var e = a.aaSorting,
          f = a.aoColumns[b].asSorting,
          g = function(h, l) {
              var n = h._idx;
              n === q && (n = k.inArray(h[1], f));
              return n + 1 < f.length ? n + 1 : l ? null : 0
          };
      "number" === typeof e[0] && (e = a.aaSorting = [e]);
      c && a.oFeatures.bSortMulti ? (c = k.inArray(b, T(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0);
      ja(a);
      "function" == typeof d && d(a)
  }

  function db(a, b, c, d) {
      var e = a.aoColumns[c];
      ob(b, {}, function(f) {
          !1 !== e.bSortable && (a.oFeatures.bProcessing ? (U(a, !0), setTimeout(function() {
              nb(a, c, f.shiftKey, d);
              "ssp" !== P(a) && U(a, !1)
          }, 0)) : nb(a, c, f.shiftKey, d))
      })
  }

  function Pa(a) {
      var b = a.aLastSort,
          c = a.oClasses.sSortColumn,
          d = pa(a),
          e = a.oFeatures,
          f;
      if (e.bSort && e.bSortClasses) {
          e = 0;
          for (f = b.length; e < f; e++) {
              var g = b[e].src;
              k(T(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3))
          }
          e = 0;
          for (f = d.length; e < f; e++) g = d[e].src, k(T(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3))
      }
      a.aLastSort =
          d
  }

  function bc(a, b) {
      var c = a.aoColumns[b],
          d = u.ext.order[c.sSortDataType],
          e;
      d && (e = d.call(a.oInstance, a, b, ta(a, b)));
      for (var f, g = u.ext.type.order[c.sType + "-pre"], h = 0, l = a.aoData.length; h < l; h++)
          if (c = a.aoData[h], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[h] : S(a, h, b, "sort"), c._aSortData[b] = g ? g(f) : f
  }

  function Qa(a) {
      if (a.oFeatures.bStateSave && !a.bDestroying) {
          var b = {
              time: +new Date,
              start: a._iDisplayStart,
              length: a._iDisplayLength,
              order: k.extend(!0, [], a.aaSorting),
              search: Ub(a.oPreviousSearch),
              columns: k.map(a.aoColumns,
                  function(c, d) {
                      return {
                          visible: c.bVisible,
                          search: Ub(a.aoPreSearchCols[d])
                      }
                  })
          };
          I(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
          a.oSavedState = b;
          a.fnStateSaveCallback.call(a.oInstance, a, b)
      }
  }

  function dc(a, b, c) {
      var d, e, f = a.aoColumns;
      b = function(h) {
          if (h && h.time) {
              var l = I(a, "aoStateLoadParams", "stateLoadParams", [a, h]);
              if (-1 === k.inArray(!1, l) && (l = a.iStateDuration, !(0 < l && h.time < +new Date - 1E3 * l || h.columns && f.length !== h.columns.length))) {
                  a.oLoadedState = k.extend(!0, {}, h);
                  h.start !== q && (a._iDisplayStart = h.start, a.iInitDisplayStart =
                      h.start);
                  h.length !== q && (a._iDisplayLength = h.length);
                  h.order !== q && (a.aaSorting = [], k.each(h.order, function(n, m) {
                      a.aaSorting.push(m[0] >= f.length ? [0, m[1]] : m)
                  }));
                  h.search !== q && k.extend(a.oPreviousSearch, Vb(h.search));
                  if (h.columns)
                      for (d = 0, e = h.columns.length; d < e; d++) l = h.columns[d], l.visible !== q && (f[d].bVisible = l.visible), l.search !== q && k.extend(a.aoPreSearchCols[d], Vb(l.search));
                  I(a, "aoStateLoaded", "stateLoaded", [a, h])
              }
          }
          c()
      };
      if (a.oFeatures.bStateSave) {
          var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
          g !==
              q && b(g)
      } else c()
  }

  function Ra(a) {
      var b = u.settings;
      a = k.inArray(a, T(b, "nTable"));
      return -1 !== a ? b[a] : null
  }

  function aa(a, b, c, d) {
      c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
      d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
      if (b) y.console && console.log && console.log(c);
      else if (b = u.ext, b = b.sErrMode || b.errMode, a && I(a, null, "error", [a, d, c]), "alert" == b) alert(c);
      else {
          if ("throw" == b) throw Error(c);
          "function" == typeof b && b(a, d, c)
      }
  }

  function V(a, b, c, d) {
      Array.isArray(c) ?
          k.each(c, function(e, f) {
              Array.isArray(f) ? V(a, b, f[0], f[1]) : V(a, b, f)
          }) : (d === q && (d = c), b[c] !== q && (a[d] = b[c]))
  }

  function pb(a, b, c) {
      var d;
      for (d in b)
          if (b.hasOwnProperty(d)) {
              var e = b[d];
              k.isPlainObject(e) ? (k.isPlainObject(a[d]) || (a[d] = {}), k.extend(!0, a[d], e)) : c && "data" !== d && "aaData" !== d && Array.isArray(e) ? a[d] = e.slice() : a[d] = e
          } return a
  }

  function ob(a, b, c) {
      k(a).on("click.DT", b, function(d) {
          k(a).trigger("blur");
          c(d)
      }).on("keypress.DT", b, function(d) {
          13 === d.which && (d.preventDefault(), c(d))
      }).on("selectstart.DT", function() {
          return !1
      })
  }

  function Q(a, b, c, d) {
      c && a[b].push({
          fn: c,
          sName: d
      })
  }

  function I(a, b, c, d) {
      var e = [];
      b && (e = k.map(a[b].slice().reverse(), function(f, g) {
          return f.fn.apply(a.oInstance, d)
      }));
      null !== c && (b = k.Event(c + ".dt"), k(a.nTable).trigger(b, d), e.push(b.result));
      return e
  }

  function jb(a) {
      var b = a._iDisplayStart,
          c = a.fnDisplayEnd(),
          d = a._iDisplayLength;
      b >= c && (b = c - d);
      b -= b % d;
      if (-1 === d || 0 > b) b = 0;
      a._iDisplayStart = b
  }

  function eb(a, b) {
      a = a.renderer;
      var c = u.ext.renderer[b];
      return k.isPlainObject(a) && a[b] ? c[a[b]] || c._ : "string" === typeof a ? c[a] ||
          c._ : c._
  }

  function P(a) {
      return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
  }

  function Ba(a, b) {
      var c = ec.numbers_length,
          d = Math.floor(c / 2);
      b <= c ? a = qa(0, b) : a <= d ? (a = qa(0, c - 2), a.push("ellipsis"), a.push(b - 1)) : (a >= b - 1 - d ? a = qa(b - (c - 2), b) : (a = qa(a - d + 2, a + d - 1), a.push("ellipsis"), a.push(b - 1)), a.splice(0, 0, "ellipsis"), a.splice(0, 0, 0));
      a.DT_el = "span";
      return a
  }

  function Va(a) {
      k.each({
          num: function(b) {
              return Sa(b, a)
          },
          "num-fmt": function(b) {
              return Sa(b, a, qb)
          },
          "html-num": function(b) {
              return Sa(b, a, Ta)
          },
          "html-num-fmt": function(b) {
              return Sa(b,
                  a, Ta, qb)
          }
      }, function(b, c) {
          L.type.order[b + a + "-pre"] = c;
          b.match(/^html\-/) && (L.type.search[b + a] = L.type.search.html)
      })
  }

  function fc(a) {
      return function() {
          var b = [Ra(this[u.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
          return u.ext.internal[a].apply(this, b)
      }
  }
  var u = function(a) {
          this.$ = function(f, g) {
              return this.api(!0).$(f, g)
          };
          this._ = function(f, g) {
              return this.api(!0).rows(f, g).data()
          };
          this.api = function(f) {
              return f ? new D(Ra(this[L.iApiIndex])) : new D(this)
          };
          this.fnAddData = function(f, g) {
              var h = this.api(!0);
              f = Array.isArray(f) && (Array.isArray(f[0]) || k.isPlainObject(f[0])) ? h.rows.add(f) : h.row.add(f);
              (g === q || g) && h.draw();
              return f.flatten().toArray()
          };
          this.fnAdjustColumnSizing = function(f) {
              var g = this.api(!0).columns.adjust(),
                  h = g.settings()[0],
                  l = h.oScroll;
              f === q || f ? g.draw(!1) : ("" !== l.sX || "" !== l.sY) && Ea(h)
          };
          this.fnClearTable = function(f) {
              var g = this.api(!0).clear();
              (f === q || f) && g.draw()
          };
          this.fnClose = function(f) {
              this.api(!0).row(f).child.hide()
          };
          this.fnDeleteRow = function(f, g, h) {
              var l = this.api(!0);
              f = l.rows(f);
              var n =
                  f.settings()[0],
                  m = n.aoData[f[0][0]];
              f.remove();
              g && g.call(this, n, m);
              (h === q || h) && l.draw();
              return m
          };
          this.fnDestroy = function(f) {
              this.api(!0).destroy(f)
          };
          this.fnDraw = function(f) {
              this.api(!0).draw(f)
          };
          this.fnFilter = function(f, g, h, l, n, m) {
              n = this.api(!0);
              null === g || g === q ? n.search(f, h, l, m) : n.column(g).search(f, h, l, m);
              n.draw()
          };
          this.fnGetData = function(f, g) {
              var h = this.api(!0);
              if (f !== q) {
                  var l = f.nodeName ? f.nodeName.toLowerCase() : "";
                  return g !== q || "td" == l || "th" == l ? h.cell(f, g).data() : h.row(f).data() || null
              }
              return h.data().toArray()
          };
          this.fnGetNodes = function(f) {
              var g = this.api(!0);
              return f !== q ? g.row(f).node() : g.rows().nodes().flatten().toArray()
          };
          this.fnGetPosition = function(f) {
              var g = this.api(!0),
                  h = f.nodeName.toUpperCase();
              return "TR" == h ? g.row(f).index() : "TD" == h || "TH" == h ? (f = g.cell(f).index(), [f.row, f.columnVisible, f.column]) : null
          };
          this.fnIsOpen = function(f) {
              return this.api(!0).row(f).child.isShown()
          };
          this.fnOpen = function(f, g, h) {
              return this.api(!0).row(f).child(g, h).show().child()[0]
          };
          this.fnPageChange = function(f, g) {
              f = this.api(!0).page(f);
              (g === q || g) && f.draw(!1)
          };
          this.fnSetColumnVis = function(f, g, h) {
              f = this.api(!0).column(f).visible(g);
              (h === q || h) && f.columns.adjust().draw()
          };
          this.fnSettings = function() {
              return Ra(this[L.iApiIndex])
          };
          this.fnSort = function(f) {
              this.api(!0).order(f).draw()
          };
          this.fnSortListener = function(f, g, h) {
              this.api(!0).order.listener(f, g, h)
          };
          this.fnUpdate = function(f, g, h, l, n) {
              var m = this.api(!0);
              h === q || null === h ? m.row(g).data(f) : m.cell(g, h).data(f);
              (n === q || n) && m.columns.adjust();
              (l === q || l) && m.draw();
              return 0
          };
          this.fnVersionCheck =
              L.fnVersionCheck;
          var b = this,
              c = a === q,
              d = this.length;
          c && (a = {});
          this.oApi = this.internal = L.internal;
          for (var e in u.ext.internal) e && (this[e] = fc(e));
          this.each(function() {
              var f = {},
                  g = 1 < d ? pb(f, a, !0) : a,
                  h = 0,
                  l;
              f = this.getAttribute("id");
              var n = !1,
                  m = u.defaults,
                  p = k(this);
              if ("table" != this.nodeName.toLowerCase()) aa(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
              else {
                  yb(m);
                  zb(m.column);
                  O(m, m, !0);
                  O(m.column, m.column, !0);
                  O(m, k.extend(g, p.data()), !0);
                  var t = u.settings;
                  h = 0;
                  for (l = t.length; h < l; h++) {
                      var v = t[h];
                      if (v.nTable == this || v.nTHead && v.nTHead.parentNode == this || v.nTFoot && v.nTFoot.parentNode == this) {
                          var x = g.bRetrieve !== q ? g.bRetrieve : m.bRetrieve;
                          if (c || x) return v.oInstance;
                          if (g.bDestroy !== q ? g.bDestroy : m.bDestroy) {
                              v.oInstance.fnDestroy();
                              break
                          } else {
                              aa(v, 0, "Cannot reinitialise DataTable", 3);
                              return
                          }
                      }
                      if (v.sTableId == this.id) {
                          t.splice(h, 1);
                          break
                      }
                  }
                  if (null === f || "" === f) this.id = f = "DataTables_Table_" + u.ext._unique++;
                  var r = k.extend(!0, {}, u.models.oSettings, {
                      sDestroyWidth: p[0].style.width,
                      sInstance: f,
                      sTableId: f
                  });
                  r.nTable =
                      this;
                  r.oApi = b.internal;
                  r.oInit = g;
                  t.push(r);
                  r.oInstance = 1 === b.length ? b : p.dataTable();
                  yb(g);
                  ma(g.oLanguage);
                  g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = Array.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
                  g = pb(k.extend(!0, {}, m), g);
                  V(r.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                  V(r, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed",
                      "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                      ["oSearch", "oPreviousSearch"],
                      ["aoSearchCols", "aoPreSearchCols"],
                      ["iDisplayLength", "_iDisplayLength"]
                  ]);
                  V(r.oScroll, g, [
                      ["sScrollX", "sX"],
                      ["sScrollXInner", "sXInner"],
                      ["sScrollY", "sY"],
                      ["bScrollCollapse", "bCollapse"]
                  ]);
                  V(r.oLanguage, g, "fnInfoCallback");
                  Q(r, "aoDrawCallback", g.fnDrawCallback,
                      "user");
                  Q(r, "aoServerParams", g.fnServerParams, "user");
                  Q(r, "aoStateSaveParams", g.fnStateSaveParams, "user");
                  Q(r, "aoStateLoadParams", g.fnStateLoadParams, "user");
                  Q(r, "aoStateLoaded", g.fnStateLoaded, "user");
                  Q(r, "aoRowCallback", g.fnRowCallback, "user");
                  Q(r, "aoRowCreatedCallback", g.fnCreatedRow, "user");
                  Q(r, "aoHeaderCallback", g.fnHeaderCallback, "user");
                  Q(r, "aoFooterCallback", g.fnFooterCallback, "user");
                  Q(r, "aoInitComplete", g.fnInitComplete, "user");
                  Q(r, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
                  r.rowIdFn =
                      ia(g.rowId);
                  Ab(r);
                  var A = r.oClasses;
                  k.extend(A, u.ext.classes, g.oClasses);
                  p.addClass(A.sTable);
                  r.iInitDisplayStart === q && (r.iInitDisplayStart = g.iDisplayStart, r._iDisplayStart = g.iDisplayStart);
                  null !== g.iDeferLoading && (r.bDeferLoading = !0, f = Array.isArray(g.iDeferLoading), r._iRecordsDisplay = f ? g.iDeferLoading[0] : g.iDeferLoading, r._iRecordsTotal = f ? g.iDeferLoading[1] : g.iDeferLoading);
                  var E = r.oLanguage;
                  k.extend(!0, E, g.oLanguage);
                  E.sUrl && (k.ajax({
                      dataType: "json",
                      url: E.sUrl,
                      success: function(C) {
                          ma(C);
                          O(m.oLanguage,
                              C);
                          k.extend(!0, E, C);
                          za(r)
                      },
                      error: function() {
                          za(r)
                      }
                  }), n = !0);
                  null === g.asStripeClasses && (r.asStripeClasses = [A.sStripeOdd, A.sStripeEven]);
                  f = r.asStripeClasses;
                  var H = p.children("tbody").find("tr").eq(0); - 1 !== k.inArray(!0, k.map(f, function(C, B) {
                      return H.hasClass(C)
                  })) && (k("tbody tr", this).removeClass(f.join(" ")), r.asDestroyStripes = f.slice());
                  f = [];
                  t = this.getElementsByTagName("thead");
                  0 !== t.length && (wa(r.aoHeader, t[0]), f = Ka(r));
                  if (null === g.aoColumns)
                      for (t = [], h = 0, l = f.length; h < l; h++) t.push(null);
                  else t = g.aoColumns;
                  h = 0;
                  for (l = t.length; h < l; h++) Wa(r, f ? f[h] : null);
                  Cb(r, g.aoColumnDefs, t, function(C, B) {
                      Da(r, C, B)
                  });
                  if (H.length) {
                      var W = function(C, B) {
                          return null !== C.getAttribute("data-" + B) ? B : null
                      };
                      k(H[0]).children("th, td").each(function(C, B) {
                          var ba = r.aoColumns[C];
                          if (ba.mData === C) {
                              var X = W(B, "sort") || W(B, "order");
                              B = W(B, "filter") || W(B, "search");
                              if (null !== X || null !== B) ba.mData = {
                                  _: C + ".display",
                                  sort: null !== X ? C + ".@data-" + X : q,
                                  type: null !== X ? C + ".@data-" + X : q,
                                  filter: null !== B ? C + ".@data-" + B : q
                              }, Da(r, C)
                          }
                      })
                  }
                  var M = r.oFeatures;
                  f = function() {
                      if (g.aaSorting ===
                          q) {
                          var C = r.aaSorting;
                          h = 0;
                          for (l = C.length; h < l; h++) C[h][1] = r.aoColumns[h].asSorting[0]
                      }
                      Pa(r);
                      M.bSort && Q(r, "aoDrawCallback", function() {
                          if (r.bSorted) {
                              var ba = pa(r),
                                  X = {};
                              k.each(ba, function(lb, Aa) {
                                  X[Aa.src] = Aa.dir
                              });
                              I(r, null, "order", [r, ba, X]);
                              cc(r)
                          }
                      });
                      Q(r, "aoDrawCallback", function() {
                          (r.bSorted || "ssp" === P(r) || M.bDeferRender) && Pa(r)
                      }, "sc");
                      C = p.children("caption").each(function() {
                          this._captionSide = k(this).css("caption-side")
                      });
                      var B = p.children("thead");
                      0 === B.length && (B = k("<thead/>").appendTo(p));
                      r.nTHead = B[0];
                      B = p.children("tbody");
                      0 === B.length && (B = k("<tbody/>").appendTo(p));
                      r.nTBody = B[0];
                      B = p.children("tfoot");
                      0 === B.length && 0 < C.length && ("" !== r.oScroll.sX || "" !== r.oScroll.sY) && (B = k("<tfoot/>").appendTo(p));
                      0 === B.length || 0 === B.children().length ? p.addClass(A.sNoFooter) : 0 < B.length && (r.nTFoot = B[0], wa(r.aoFooter, r.nTFoot));
                      if (g.aaData)
                          for (h = 0; h < g.aaData.length; h++) ea(r, g.aaData[h]);
                      else(r.bDeferLoading || "dom" == P(r)) && Ga(r, k(r.nTBody).children("tr"));
                      r.aiDisplay = r.aiDisplayMaster.slice();
                      r.bInitialised = !0;
                      !1 ===
                          n && za(r)
                  };
                  g.bStateSave ? (M.bStateSave = !0, Q(r, "aoDrawCallback", Qa, "state_save"), dc(r, g, f)) : f()
              }
          });
          b = null;
          return this
      },
      L, w, J, rb = {},
      gc = /[\r\n\u2028]/g,
      Ta = /<.*?>/g,
      tc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
      uc = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,
      qb = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
      ca = function(a) {
          return a && !0 !== a && "-" !== a ? !1 : !0
      },
      hc = function(a) {
          var b = parseInt(a, 10);
          return !isNaN(b) && isFinite(a) ? b : null
      },
      ic = function(a, b) {
          rb[b] ||
              (rb[b] = new RegExp(hb(b), "g"));
          return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(rb[b], ".") : a
      },
      sb = function(a, b, c) {
          var d = "string" === typeof a;
          if (ca(a)) return !0;
          b && d && (a = ic(a, b));
          c && d && (a = a.replace(qb, ""));
          return !isNaN(parseFloat(a)) && isFinite(a)
      },
      jc = function(a, b, c) {
          return ca(a) ? !0 : ca(a) || "string" === typeof a ? sb(a.replace(Ta, ""), b, c) ? !0 : null : null
      },
      T = function(a, b, c) {
          var d = [],
              e = 0,
              f = a.length;
          if (c !== q)
              for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
          else
              for (; e < f; e++) a[e] && d.push(a[e][b]);
          return d
      },
      Ca = function(a, b, c, d) {
          var e = [],
              f = 0,
              g = b.length;
          if (d !== q)
              for (; f < g; f++) a[b[f]][c] && e.push(a[b[f]][c][d]);
          else
              for (; f < g; f++) e.push(a[b[f]][c]);
          return e
      },
      qa = function(a, b) {
          var c = [];
          if (b === q) {
              b = 0;
              var d = a
          } else d = b, b = a;
          for (a = b; a < d; a++) c.push(a);
          return c
      },
      kc = function(a) {
          for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
          return b
      },
      Ja = function(a) {
          a: {
              if (!(2 > a.length)) {
                  var b = a.slice().sort();
                  for (var c = b[0], d = 1, e = b.length; d < e; d++) {
                      if (b[d] === c) {
                          b = !1;
                          break a
                      }
                      c = b[d]
                  }
              }
              b = !0
          }
          if (b) return a.slice();b = [];e = a.length;
          var f,
              g = 0;d = 0;a: for (; d < e; d++) {
              c = a[d];
              for (f = 0; f < g; f++)
                  if (b[f] === c) continue a;
              b.push(c);
              g++
          }
          return b
      },
      lc = function(a, b) {
          if (Array.isArray(b))
              for (var c = 0; c < b.length; c++) lc(a, b[c]);
          else a.push(b);
          return a
      };
  Array.isArray || (Array.isArray = function(a) {
      return "[object Array]" === Object.prototype.toString.call(a)
  });
  String.prototype.trim || (String.prototype.trim = function() {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
  });
  u.util = {
      throttle: function(a, b) {
          var c = b !== q ? b : 200,
              d, e;
          return function() {
              var f = this,
                  g = +new Date,
                  h = arguments;
              d && g < d + c ? (clearTimeout(e), e = setTimeout(function() {
                  d = q;
                  a.apply(f, h)
              }, c)) : (d = g, a.apply(f, h))
          }
      },
      escapeRegex: function(a) {
          return a.replace(uc, "\\$1")
      }
  };
  var R = function(a, b, c) {
          a[b] !== q && (a[c] = a[b])
      },
      ua = /\[.*?\]$/,
      oa = /\(\)$/,
      hb = u.util.escapeRegex,
      Oa = k("<div>")[0],
      rc = Oa.textContent !== q,
      sc = /<.*?>/g,
      fb = u.util.throttle,
      mc = [],
      N = Array.prototype,
      vc = function(a) {
          var b, c = u.settings,
              d = k.map(c, function(f, g) {
                  return f.nTable
              });
          if (a) {
              if (a.nTable && a.oApi) return [a];
              if (a.nodeName && "table" === a.nodeName.toLowerCase()) {
                  var e =
                      k.inArray(a, d);
                  return -1 !== e ? [c[e]] : null
              }
              if (a && "function" === typeof a.settings) return a.settings().toArray();
              "string" === typeof a ? b = k(a) : a instanceof k && (b = a)
          } else return [];
          if (b) return b.map(function(f) {
              e = k.inArray(this, d);
              return -1 !== e ? c[e] : null
          }).toArray()
      };
  var D = function(a, b) {
      if (!(this instanceof D)) return new D(a, b);
      var c = [],
          d = function(g) {
              (g = vc(g)) && c.push.apply(c, g)
          };
      if (Array.isArray(a))
          for (var e = 0, f = a.length; e < f; e++) d(a[e]);
      else d(a);
      this.context = Ja(c);
      b && k.merge(this, b);
      this.selector = {
          rows: null,
          cols: null,
          opts: null
      };
      D.extend(this, this, mc)
  };
  u.Api = D;
  k.extend(D.prototype, {
      any: function() {
          return 0 !== this.count()
      },
      concat: N.concat,
      context: [],
      count: function() {
          return this.flatten().length
      },
      each: function(a) {
          for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this);
          return this
      },
      eq: function(a) {
          var b = this.context;
          return b.length > a ? new D(b[a], this[a]) : null
      },
      filter: function(a) {
          var b = [];
          if (N.filter) b = N.filter.call(this, a, this);
          else
              for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
          return new D(this.context, b)
      },
      flatten: function() {
          var a = [];
          return new D(this.context, a.concat.apply(a, this.toArray()))
      },
      join: N.join,
      indexOf: N.indexOf || function(a, b) {
          b = b || 0;
          for (var c = this.length; b < c; b++)
              if (this[b] === a) return b;
          return -1
      },
      iterator: function(a, b, c, d) {
          var e = [],
              f, g, h = this.context,
              l, n = this.selector;
          "string" === typeof a && (d = c, c = b, b = a, a = !1);
          var m = 0;
          for (f = h.length; m < f; m++) {
              var p = new D(h[m]);
              if ("table" === b) {
                  var t = c.call(p, h[m], m);
                  t !== q && e.push(t)
              } else if ("columns" === b || "rows" === b) t = c.call(p, h[m],
                  this[m], m), t !== q && e.push(t);
              else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
                  var v = this[m];
                  "column-rows" === b && (l = Ua(h[m], n.opts));
                  var x = 0;
                  for (g = v.length; x < g; x++) t = v[x], t = "cell" === b ? c.call(p, h[m], t.row, t.column, m, x) : c.call(p, h[m], t, m, x, l), t !== q && e.push(t)
              }
          }
          return e.length || d ? (a = new D(h, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = n.rows, b.cols = n.cols, b.opts = n.opts, a) : this
      },
      lastIndexOf: N.lastIndexOf || function(a, b) {
          return this.indexOf.apply(this.toArray.reverse(), arguments)
      },
      length: 0,
      map: function(a) {
          var b = [];
          if (N.map) b = N.map.call(this, a, this);
          else
              for (var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
          return new D(this.context, b)
      },
      pluck: function(a) {
          return this.map(function(b) {
              return b[a]
          })
      },
      pop: N.pop,
      push: N.push,
      reduce: N.reduce || function(a, b) {
          return Bb(this, a, b, 0, this.length, 1)
      },
      reduceRight: N.reduceRight || function(a, b) {
          return Bb(this, a, b, this.length - 1, -1, -1)
      },
      reverse: N.reverse,
      selector: null,
      shift: N.shift,
      slice: function() {
          return new D(this.context, this)
      },
      sort: N.sort,
      splice: N.splice,
      toArray: function() {
          return N.slice.call(this)
      },
      to$: function() {
          return k(this)
      },
      toJQuery: function() {
          return k(this)
      },
      unique: function() {
          return new D(this.context, Ja(this))
      },
      unshift: N.unshift
  });
  D.extend = function(a, b, c) {
      if (c.length && b && (b instanceof D || b.__dt_wrapper)) {
          var d, e = function(h, l, n) {
              return function() {
                  var m = l.apply(h, arguments);
                  D.extend(m, m, n.methodExt);
                  return m
              }
          };
          var f = 0;
          for (d = c.length; f < d; f++) {
              var g = c[f];
              b[g.name] = "function" === g.type ? e(a, g.val, g) : "object" === g.type ? {} : g.val;
              b[g.name].__dt_wrapper = !0;
              D.extend(a, b[g.name], g.propExt)
          }
      }
  };
  D.register = w = function(a, b) {
      if (Array.isArray(a))
          for (var c = 0, d = a.length; c < d; c++) D.register(a[c], b);
      else {
          d = a.split(".");
          var e = mc,
              f;
          a = 0;
          for (c = d.length; a < c; a++) {
              var g = (f = -1 !== d[a].indexOf("()")) ? d[a].replace("()", "") : d[a];
              a: {
                  var h = 0;
                  for (var l = e.length; h < l; h++)
                      if (e[h].name === g) {
                          h = e[h];
                          break a
                      } h = null
              }
              h || (h = {
                  name: g,
                  val: {},
                  methodExt: [],
                  propExt: [],
                  type: "object"
              }, e.push(h));
              a === c - 1 ? (h.val = b, h.type = "function" === typeof b ? "function" : k.isPlainObject(b) ? "object" : "other") : e = f ?
                  h.methodExt : h.propExt
          }
      }
  };
  D.registerPlural = J = function(a, b, c) {
      D.register(a, c);
      D.register(b, function() {
          var d = c.apply(this, arguments);
          return d === this ? this : d instanceof D ? d.length ? Array.isArray(d[0]) ? new D(d.context, d[0]) : d[0] : q : d
      })
  };
  var nc = function(a, b) {
      if (Array.isArray(a)) return k.map(a, function(d) {
          return nc(d, b)
      });
      if ("number" === typeof a) return [b[a]];
      var c = k.map(b, function(d, e) {
          return d.nTable
      });
      return k(c).filter(a).map(function(d) {
          d = k.inArray(this, c);
          return b[d]
      }).toArray()
  };
  w("tables()", function(a) {
      return a !==
          q && null !== a ? new D(nc(a, this.context)) : this
  });
  w("table()", function(a) {
      a = this.tables(a);
      var b = a.context;
      return b.length ? new D(b[0]) : a
  });
  J("tables().nodes()", "table().node()", function() {
      return this.iterator("table", function(a) {
          return a.nTable
      }, 1)
  });
  J("tables().body()", "table().body()", function() {
      return this.iterator("table", function(a) {
          return a.nTBody
      }, 1)
  });
  J("tables().header()", "table().header()", function() {
      return this.iterator("table", function(a) {
          return a.nTHead
      }, 1)
  });
  J("tables().footer()", "table().footer()",
      function() {
          return this.iterator("table", function(a) {
              return a.nTFoot
          }, 1)
      });
  J("tables().containers()", "table().container()", function() {
      return this.iterator("table", function(a) {
          return a.nTableWrapper
      }, 1)
  });
  w("draw()", function(a) {
      return this.iterator("table", function(b) {
          "page" === a ? fa(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), ja(b, !1 === a))
      })
  });
  w("page()", function(a) {
      return a === q ? this.page.info().page : this.iterator("table", function(b) {
          kb(b, a)
      })
  });
  w("page.info()", function(a) {
      if (0 === this.context.length) return q;
      a = this.context[0];
      var b = a._iDisplayStart,
          c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
          d = a.fnRecordsDisplay(),
          e = -1 === c;
      return {
          page: e ? 0 : Math.floor(b / c),
          pages: e ? 1 : Math.ceil(d / c),
          start: b,
          end: a.fnDisplayEnd(),
          length: c,
          recordsTotal: a.fnRecordsTotal(),
          recordsDisplay: d,
          serverSide: "ssp" === P(a)
      }
  });
  w("page.len()", function(a) {
      return a === q ? 0 !== this.context.length ? this.context[0]._iDisplayLength : q : this.iterator("table", function(b) {
          ib(b, a)
      })
  });
  var oc = function(a, b, c) {
      if (c) {
          var d = new D(a);
          d.one("draw", function() {
              c(d.ajax.json())
          })
      }
      if ("ssp" ==
          P(a)) ja(a, b);
      else {
          U(a, !0);
          var e = a.jqXHR;
          e && 4 !== e.readyState && e.abort();
          La(a, [], function(f) {
              Ha(a);
              f = Ma(a, f);
              for (var g = 0, h = f.length; g < h; g++) ea(a, f[g]);
              ja(a, b);
              U(a, !1)
          })
      }
  };
  w("ajax.json()", function() {
      var a = this.context;
      if (0 < a.length) return a[0].json
  });
  w("ajax.params()", function() {
      var a = this.context;
      if (0 < a.length) return a[0].oAjaxData
  });
  w("ajax.reload()", function(a, b) {
      return this.iterator("table", function(c) {
          oc(c, !1 === b, a)
      })
  });
  w("ajax.url()", function(a) {
      var b = this.context;
      if (a === q) {
          if (0 === b.length) return q;
          b = b[0];
          return b.ajax ? k.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
      }
      return this.iterator("table", function(c) {
          k.isPlainObject(c.ajax) ? c.ajax.url = a : c.ajax = a
      })
  });
  w("ajax.url().load()", function(a, b) {
      return this.iterator("table", function(c) {
          oc(c, !1 === b, a)
      })
  });
  var tb = function(a, b, c, d, e) {
          var f = [],
              g, h, l;
          var n = typeof b;
          b && "string" !== n && "function" !== n && b.length !== q || (b = [b]);
          n = 0;
          for (h = b.length; n < h; n++) {
              var m = b[n] && b[n].split && !b[n].match(/[\[\(:]/) ? b[n].split(",") : [b[n]];
              var p = 0;
              for (l = m.length; p < l; p++)(g =
                  c("string" === typeof m[p] ? m[p].trim() : m[p])) && g.length && (f = f.concat(g))
          }
          a = L.selector[a];
          if (a.length)
              for (n = 0, h = a.length; n < h; n++) f = a[n](d, e, f);
          return Ja(f)
      },
      ub = function(a) {
          a || (a = {});
          a.filter && a.search === q && (a.search = a.filter);
          return k.extend({
              search: "none",
              order: "current",
              page: "all"
          }, a)
      },
      vb = function(a) {
          for (var b = 0, c = a.length; b < c; b++)
              if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
          a.length = 0;
          return a
      },
      Ua = function(a, b) {
          var c = [],
              d = a.aiDisplay;
          var e = a.aiDisplayMaster;
          var f = b.search;
          var g = b.order;
          b = b.page;
          if ("ssp" == P(a)) return "removed" === f ? [] : qa(0, e.length);
          if ("current" == b)
              for (g = a._iDisplayStart, a = a.fnDisplayEnd(); g < a; g++) c.push(d[g]);
          else if ("current" == g || "applied" == g)
              if ("none" == f) c = e.slice();
              else if ("applied" == f) c = d.slice();
          else {
              if ("removed" == f) {
                  var h = {};
                  g = 0;
                  for (a = d.length; g < a; g++) h[d[g]] = null;
                  c = k.map(e, function(l) {
                      return h.hasOwnProperty(l) ? null : l
                  })
              }
          } else if ("index" == g || "original" == g)
              for (g = 0, a = a.aoData.length; g < a; g++) "none" == f ? c.push(g) : (e = k.inArray(g, d), (-1 ===
                  e && "removed" == f || 0 <= e && "applied" == f) && c.push(g));
          return c
      },
      wc = function(a, b, c) {
          var d;
          return tb("row", b, function(e) {
              var f = hc(e),
                  g = a.aoData;
              if (null !== f && !c) return [f];
              d || (d = Ua(a, c));
              if (null !== f && -1 !== k.inArray(f, d)) return [f];
              if (null === e || e === q || "" === e) return d;
              if ("function" === typeof e) return k.map(d, function(l) {
                  var n = g[l];
                  return e(l, n._aData, n.nTr) ? l : null
              });
              if (e.nodeName) {
                  f = e._DT_RowIndex;
                  var h = e._DT_CellIndex;
                  if (f !== q) return g[f] && g[f].nTr === e ? [f] : [];
                  if (h) return g[h.row] && g[h.row].nTr === e.parentNode ? [h.row] : [];
                  f = k(e).closest("*[data-dt-row]");
                  return f.length ? [f.data("dt-row")] : []
              }
              if ("string" === typeof e && "#" === e.charAt(0) && (f = a.aIds[e.replace(/^#/, "")], f !== q)) return [f.idx];
              f = kc(Ca(a.aoData, d, "nTr"));
              return k(f).filter(e).map(function() {
                  return this._DT_RowIndex
              }).toArray()
          }, a, c)
      };
  w("rows()", function(a, b) {
      a === q ? a = "" : k.isPlainObject(a) && (b = a, a = "");
      b = ub(b);
      var c = this.iterator("table", function(d) {
          return wc(d, a, b)
      }, 1);
      c.selector.rows = a;
      c.selector.opts = b;
      return c
  });
  w("rows().nodes()", function() {
      return this.iterator("row",
          function(a, b) {
              return a.aoData[b].nTr || q
          }, 1)
  });
  w("rows().data()", function() {
      return this.iterator(!0, "rows", function(a, b) {
          return Ca(a.aoData, b, "_aData")
      }, 1)
  });
  J("rows().cache()", "row().cache()", function(a) {
      return this.iterator("row", function(b, c) {
          b = b.aoData[c];
          return "search" === a ? b._aFilterData : b._aSortData
      }, 1)
  });
  J("rows().invalidate()", "row().invalidate()", function(a) {
      return this.iterator("row", function(b, c) {
          va(b, c, a)
      })
  });
  J("rows().indexes()", "row().index()", function() {
      return this.iterator("row", function(a,
          b) {
          return b
      }, 1)
  });
  J("rows().ids()", "row().id()", function(a) {
      for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
          for (var f = 0, g = this[d].length; f < g; f++) {
              var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
              b.push((!0 === a ? "#" : "") + h)
          }
      return new D(c, b)
  });
  J("rows().remove()", "row().remove()", function() {
      var a = this;
      this.iterator("row", function(b, c, d) {
          var e = b.aoData,
              f = e[c],
              g, h;
          e.splice(c, 1);
          var l = 0;
          for (g = e.length; l < g; l++) {
              var n = e[l];
              var m = n.anCells;
              null !== n.nTr && (n.nTr._DT_RowIndex = l);
              if (null !== m)
                  for (n = 0, h = m.length; n <
                      h; n++) m[n]._DT_CellIndex.row = l
          }
          Ia(b.aiDisplayMaster, c);
          Ia(b.aiDisplay, c);
          Ia(a[d], c, !1);
          0 < b._iRecordsDisplay && b._iRecordsDisplay--;
          jb(b);
          c = b.rowIdFn(f._aData);
          c !== q && delete b.aIds[c]
      });
      this.iterator("table", function(b) {
          for (var c = 0, d = b.aoData.length; c < d; c++) b.aoData[c].idx = c
      });
      return this
  });
  w("rows.add()", function(a) {
      var b = this.iterator("table", function(d) {
              var e, f = [];
              var g = 0;
              for (e = a.length; g < e; g++) {
                  var h = a[g];
                  h.nodeName && "TR" === h.nodeName.toUpperCase() ? f.push(Ga(d, h)[0]) : f.push(ea(d, h))
              }
              return f
          }, 1),
          c = this.rows(-1);
      c.pop();
      k.merge(c, b);
      return c
  });
  w("row()", function(a, b) {
      return vb(this.rows(a, b))
  });
  w("row().data()", function(a) {
      var b = this.context;
      if (a === q) return b.length && this.length ? b[0].aoData[this[0]]._aData : q;
      var c = b[0].aoData[this[0]];
      c._aData = a;
      Array.isArray(a) && c.nTr && c.nTr.id && da(b[0].rowId)(a, c.nTr.id);
      va(b[0], this[0], "data");
      return this
  });
  w("row().node()", function() {
      var a = this.context;
      return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null
  });
  w("row.add()", function(a) {
      a instanceof
      k && a.length && (a = a[0]);
      var b = this.iterator("table", function(c) {
          return a.nodeName && "TR" === a.nodeName.toUpperCase() ? Ga(c, a)[0] : ea(c, a)
      });
      return this.row(b[0])
  });
  var xc = function(a, b, c, d) {
          var e = [],
              f = function(g, h) {
                  if (Array.isArray(g) || g instanceof k)
                      for (var l = 0, n = g.length; l < n; l++) f(g[l], h);
                  else g.nodeName && "tr" === g.nodeName.toLowerCase() ? e.push(g) : (l = k("<tr><td></td></tr>").addClass(h), k("td", l).addClass(h).html(g)[0].colSpan = na(a), e.push(l[0]))
              };
          f(c, d);
          b._details && b._details.detach();
          b._details = k(e);
          b._detailsShow &&
              b._details.insertAfter(b.nTr)
      },
      wb = function(a, b) {
          var c = a.context;
          c.length && (a = c[0].aoData[b !== q ? b : a[0]]) && a._details && (a._details.remove(), a._detailsShow = q, a._details = q)
      },
      pc = function(a, b) {
          var c = a.context;
          c.length && a.length && (a = c[0].aoData[a[0]], a._details && ((a._detailsShow = b) ? a._details.insertAfter(a.nTr) : a._details.detach(), yc(c[0])))
      },
      yc = function(a) {
          var b = new D(a),
              c = a.aoData;
          b.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
          0 < T(c, "_details").length && (b.on("draw.dt.DT_details",
              function(d, e) {
                  a === e && b.rows({
                      page: "current"
                  }).eq(0).each(function(f) {
                      f = c[f];
                      f._detailsShow && f._details.insertAfter(f.nTr)
                  })
              }), b.on("column-visibility.dt.DT_details", function(d, e, f, g) {
              if (a === e)
                  for (e = na(e), f = 0, g = c.length; f < g; f++) d = c[f], d._details && d._details.children("td[colspan]").attr("colspan", e)
          }), b.on("destroy.dt.DT_details", function(d, e) {
              if (a === e)
                  for (d = 0, e = c.length; d < e; d++) c[d]._details && wb(b, d)
          }))
      };
  w("row().child()", function(a, b) {
      var c = this.context;
      if (a === q) return c.length && this.length ? c[0].aoData[this[0]]._details :
          q;
      !0 === a ? this.child.show() : !1 === a ? wb(this) : c.length && this.length && xc(c[0], c[0].aoData[this[0]], a, b);
      return this
  });
  w(["row().child.show()", "row().child().show()"], function(a) {
      pc(this, !0);
      return this
  });
  w(["row().child.hide()", "row().child().hide()"], function() {
      pc(this, !1);
      return this
  });
  w(["row().child.remove()", "row().child().remove()"], function() {
      wb(this);
      return this
  });
  w("row().child.isShown()", function() {
      var a = this.context;
      return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1
  });
  var zc =
      /^([^:]+):(name|visIdx|visible)$/,
      qc = function(a, b, c, d, e) {
          c = [];
          d = 0;
          for (var f = e.length; d < f; d++) c.push(S(a, e[d], b));
          return c
      },
      Ac = function(a, b, c) {
          var d = a.aoColumns,
              e = T(d, "sName"),
              f = T(d, "nTh");
          return tb("column", b, function(g) {
              var h = hc(g);
              if ("" === g) return qa(d.length);
              if (null !== h) return [0 <= h ? h : d.length + h];
              if ("function" === typeof g) {
                  var l = Ua(a, c);
                  return k.map(d, function(p, t) {
                      return g(t, qc(a, t, 0, 0, l), f[t]) ? t : null
                  })
              }
              var n = "string" === typeof g ? g.match(zc) : "";
              if (n) switch (n[2]) {
                  case "visIdx":
                  case "visible":
                      h = parseInt(n[1],
                          10);
                      if (0 > h) {
                          var m = k.map(d, function(p, t) {
                              return p.bVisible ? t : null
                          });
                          return [m[m.length + h]]
                      }
                      return [sa(a, h)];
                  case "name":
                      return k.map(e, function(p, t) {
                          return p === n[1] ? t : null
                      });
                  default:
                      return []
              }
              if (g.nodeName && g._DT_CellIndex) return [g._DT_CellIndex.column];
              h = k(f).filter(g).map(function() {
                  return k.inArray(this, f)
              }).toArray();
              if (h.length || !g.nodeName) return h;
              h = k(g).closest("*[data-dt-column]");
              return h.length ? [h.data("dt-column")] : []
          }, a, c)
      };
  w("columns()", function(a, b) {
      a === q ? a = "" : k.isPlainObject(a) && (b = a,
          a = "");
      b = ub(b);
      var c = this.iterator("table", function(d) {
          return Ac(d, a, b)
      }, 1);
      c.selector.cols = a;
      c.selector.opts = b;
      return c
  });
  J("columns().header()", "column().header()", function(a, b) {
      return this.iterator("column", function(c, d) {
          return c.aoColumns[d].nTh
      }, 1)
  });
  J("columns().footer()", "column().footer()", function(a, b) {
      return this.iterator("column", function(c, d) {
          return c.aoColumns[d].nTf
      }, 1)
  });
  J("columns().data()", "column().data()", function() {
      return this.iterator("column-rows", qc, 1)
  });
  J("columns().dataSrc()",
      "column().dataSrc()",
      function() {
          return this.iterator("column", function(a, b) {
              return a.aoColumns[b].mData
          }, 1)
      });
  J("columns().cache()", "column().cache()", function(a) {
      return this.iterator("column-rows", function(b, c, d, e, f) {
          return Ca(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c)
      }, 1)
  });
  J("columns().nodes()", "column().nodes()", function() {
      return this.iterator("column-rows", function(a, b, c, d, e) {
          return Ca(a.aoData, e, "anCells", b)
      }, 1)
  });
  J("columns().visible()", "column().visible()", function(a, b) {
      var c =
          this,
          d = this.iterator("column", function(e, f) {
              if (a === q) return e.aoColumns[f].bVisible;
              var g = e.aoColumns,
                  h = g[f],
                  l = e.aoData,
                  n;
              if (a !== q && h.bVisible !== a) {
                  if (a) {
                      var m = k.inArray(!0, T(g, "bVisible"), f + 1);
                      g = 0;
                      for (n = l.length; g < n; g++) {
                          var p = l[g].nTr;
                          e = l[g].anCells;
                          p && p.insertBefore(e[f], e[m] || null)
                      }
                  } else k(T(e.aoData, "anCells", f)).detach();
                  h.bVisible = a
              }
          });
      a !== q && this.iterator("table", function(e) {
          xa(e, e.aoHeader);
          xa(e, e.aoFooter);
          e.aiDisplay.length || k(e.nTBody).find("td[colspan]").attr("colspan", na(e));
          Qa(e);
          c.iterator("column",
              function(f, g) {
                  I(f, null, "column-visibility", [f, g, a, b])
              });
          (b === q || b) && c.columns.adjust()
      });
      return d
  });
  J("columns().indexes()", "column().index()", function(a) {
      return this.iterator("column", function(b, c) {
          return "visible" === a ? ta(b, c) : c
      }, 1)
  });
  w("columns.adjust()", function() {
      return this.iterator("table", function(a) {
          ra(a)
      }, 1)
  });
  w("column.index()", function(a, b) {
      if (0 !== this.context.length) {
          var c = this.context[0];
          if ("fromVisible" === a || "toData" === a) return sa(c, b);
          if ("fromData" === a || "toVisible" === a) return ta(c, b)
      }
  });
  w("column()", function(a, b) {
      return vb(this.columns(a, b))
  });
  var Bc = function(a, b, c) {
      var d = a.aoData,
          e = Ua(a, c),
          f = kc(Ca(d, e, "anCells")),
          g = k(lc([], f)),
          h, l = a.aoColumns.length,
          n, m, p, t, v, x;
      return tb("cell", b, function(r) {
          var A = "function" === typeof r;
          if (null === r || r === q || A) {
              n = [];
              m = 0;
              for (p = e.length; m < p; m++)
                  for (h = e[m], t = 0; t < l; t++) v = {
                      row: h,
                      column: t
                  }, A ? (x = d[h], r(v, S(a, h, t), x.anCells ? x.anCells[t] : null) && n.push(v)) : n.push(v);
              return n
          }
          if (k.isPlainObject(r)) return r.column !== q && r.row !== q && -1 !== k.inArray(r.row, e) ? [r] : [];
          A = g.filter(r).map(function(E, H) {
              return {
                  row: H._DT_CellIndex.row,
                  column: H._DT_CellIndex.column
              }
          }).toArray();
          if (A.length || !r.nodeName) return A;
          x = k(r).closest("*[data-dt-row]");
          return x.length ? [{
              row: x.data("dt-row"),
              column: x.data("dt-column")
          }] : []
      }, a, c)
  };
  w("cells()", function(a, b, c) {
      k.isPlainObject(a) && (a.row === q ? (c = a, a = null) : (c = b, b = null));
      k.isPlainObject(b) && (c = b, b = null);
      if (null === b || b === q) return this.iterator("table", function(m) {
          return Bc(m, a, ub(c))
      });
      var d = c ? {
              page: c.page,
              order: c.order,
              search: c.search
          } : {},
          e = this.columns(b, d),
          f = this.rows(a, d),
          g, h, l, n;
      d = this.iterator("table", function(m, p) {
          m = [];
          g = 0;
          for (h = f[p].length; g < h; g++)
              for (l = 0, n = e[p].length; l < n; l++) m.push({
                  row: f[p][g],
                  column: e[p][l]
              });
          return m
      }, 1);
      d = c && c.selected ? this.cells(d, c) : d;
      k.extend(d.selector, {
          cols: b,
          rows: a,
          opts: c
      });
      return d
  });
  J("cells().nodes()", "cell().node()", function() {
      return this.iterator("cell", function(a, b, c) {
          return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : q
      }, 1)
  });
  w("cells().data()", function() {
      return this.iterator("cell", function(a,
          b, c) {
          return S(a, b, c)
      }, 1)
  });
  J("cells().cache()", "cell().cache()", function(a) {
      a = "search" === a ? "_aFilterData" : "_aSortData";
      return this.iterator("cell", function(b, c, d) {
          return b.aoData[c][a][d]
      }, 1)
  });
  J("cells().render()", "cell().render()", function(a) {
      return this.iterator("cell", function(b, c, d) {
          return S(b, c, d, a)
      }, 1)
  });
  J("cells().indexes()", "cell().index()", function() {
      return this.iterator("cell", function(a, b, c) {
          return {
              row: b,
              column: c,
              columnVisible: ta(a, c)
          }
      }, 1)
  });
  J("cells().invalidate()", "cell().invalidate()",
      function(a) {
          return this.iterator("cell", function(b, c, d) {
              va(b, c, a, d)
          })
      });
  w("cell()", function(a, b, c) {
      return vb(this.cells(a, b, c))
  });
  w("cell().data()", function(a) {
      var b = this.context,
          c = this[0];
      if (a === q) return b.length && c.length ? S(b[0], c[0].row, c[0].column) : q;
      Db(b[0], c[0].row, c[0].column, a);
      va(b[0], c[0].row, "data", c[0].column);
      return this
  });
  w("order()", function(a, b) {
      var c = this.context;
      if (a === q) return 0 !== c.length ? c[0].aaSorting : q;
      "number" === typeof a ? a = [
          [a, b]
      ] : a.length && !Array.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
      return this.iterator("table", function(d) {
          d.aaSorting = a.slice()
      })
  });
  w("order.listener()", function(a, b, c) {
      return this.iterator("table", function(d) {
          db(d, a, b, c)
      })
  });
  w("order.fixed()", function(a) {
      if (!a) {
          var b = this.context;
          b = b.length ? b[0].aaSortingFixed : q;
          return Array.isArray(b) ? {
              pre: b
          } : b
      }
      return this.iterator("table", function(c) {
          c.aaSortingFixed = k.extend(!0, {}, a)
      })
  });
  w(["columns().order()", "column().order()"], function(a) {
      var b = this;
      return this.iterator("table", function(c, d) {
          var e = [];
          k.each(b[d], function(f,
              g) {
              e.push([g, a])
          });
          c.aaSorting = e
      })
  });
  w("search()", function(a, b, c, d) {
      var e = this.context;
      return a === q ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : q : this.iterator("table", function(f) {
          f.oFeatures.bFilter && ya(f, k.extend({}, f.oPreviousSearch, {
              sSearch: a + "",
              bRegex: null === b ? !1 : b,
              bSmart: null === c ? !0 : c,
              bCaseInsensitive: null === d ? !0 : d
          }), 1)
      })
  });
  J("columns().search()", "column().search()", function(a, b, c, d) {
      return this.iterator("column", function(e, f) {
          var g = e.aoPreSearchCols;
          if (a === q) return g[f].sSearch;
          e.oFeatures.bFilter &&
              (k.extend(g[f], {
                  sSearch: a + "",
                  bRegex: null === b ? !1 : b,
                  bSmart: null === c ? !0 : c,
                  bCaseInsensitive: null === d ? !0 : d
              }), ya(e, e.oPreviousSearch, 1))
      })
  });
  w("state()", function() {
      return this.context.length ? this.context[0].oSavedState : null
  });
  w("state.clear()", function() {
      return this.iterator("table", function(a) {
          a.fnStateSaveCallback.call(a.oInstance, a, {})
      })
  });
  w("state.loaded()", function() {
      return this.context.length ? this.context[0].oLoadedState : null
  });
  w("state.save()", function() {
      return this.iterator("table", function(a) {
          Qa(a)
      })
  });
  u.versionCheck = u.fnVersionCheck = function(a) {
      var b = u.version.split(".");
      a = a.split(".");
      for (var c, d, e = 0, f = a.length; e < f; e++)
          if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
      return !0
  };
  u.isDataTable = u.fnIsDataTable = function(a) {
      var b = k(a).get(0),
          c = !1;
      if (a instanceof u.Api) return !0;
      k.each(u.settings, function(d, e) {
          d = e.nScrollHead ? k("table", e.nScrollHead)[0] : null;
          var f = e.nScrollFoot ? k("table", e.nScrollFoot)[0] : null;
          if (e.nTable === b || d === b || f === b) c = !0
      });
      return c
  };
  u.tables = u.fnTables = function(a) {
      var b = !1;
      k.isPlainObject(a) && (b = a.api, a = a.visible);
      var c = k.map(u.settings, function(d) {
          if (!a || a && k(d.nTable).is(":visible")) return d.nTable
      });
      return b ? new D(c) : c
  };
  u.camelToHungarian = O;
  w("$()", function(a, b) {
      b = this.rows(b).nodes();
      b = k(b);
      return k([].concat(b.filter(a).toArray(), b.find(a).toArray()))
  });
  k.each(["on", "one", "off"], function(a, b) {
      w(b + "()", function() {
          var c = Array.prototype.slice.call(arguments);
          c[0] = k.map(c[0].split(/\s/), function(e) {
              return e.match(/\.dt\b/) ? e : e + ".dt"
          }).join(" ");
          var d = k(this.tables().nodes());
          d[b].apply(d, c);
          return this
      })
  });
  w("clear()", function() {
      return this.iterator("table", function(a) {
          Ha(a)
      })
  });
  w("settings()", function() {
      return new D(this.context, this.context)
  });
  w("init()", function() {
      var a = this.context;
      return a.length ? a[0].oInit : null
  });
  w("data()", function() {
      return this.iterator("table", function(a) {
          return T(a.aoData, "_aData")
      }).flatten()
  });
  w("destroy()", function(a) {
      a = a || !1;
      return this.iterator("table", function(b) {
          var c = b.nTableWrapper.parentNode,
              d = b.oClasses,
              e = b.nTable,
              f = b.nTBody,
              g = b.nTHead,
              h = b.nTFoot,
              l = k(e);
          f = k(f);
          var n = k(b.nTableWrapper),
              m = k.map(b.aoData, function(t) {
                  return t.nTr
              }),
              p;
          b.bDestroying = !0;
          I(b, "aoDestroyCallback", "destroy", [b]);
          a || (new D(b)).columns().visible(!0);
          n.off(".DT").find(":not(tbody *)").off(".DT");
          k(y).off(".DT-" + b.sInstance);
          e != g.parentNode && (l.children("thead").detach(), l.append(g));
          h && e != h.parentNode && (l.children("tfoot").detach(), l.append(h));
          b.aaSorting = [];
          b.aaSortingFixed = [];
          Pa(b);
          k(m).removeClass(b.asStripeClasses.join(" "));
          k("th, td", g).removeClass(d.sSortable +
              " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
          f.children().detach();
          f.append(m);
          g = a ? "remove" : "detach";
          l[g]();
          n[g]();
          !a && c && (c.insertBefore(e, b.nTableReinsertBefore), l.css("width", b.sDestroyWidth).removeClass(d.sTable), (p = b.asDestroyStripes.length) && f.children().each(function(t) {
              k(this).addClass(b.asDestroyStripes[t % p])
          }));
          c = k.inArray(b, u.settings); - 1 !== c && u.settings.splice(c, 1)
      })
  });
  k.each(["column", "row", "cell"], function(a, b) {
      w(b + "s().every()", function(c) {
          var d = this.selector.opts,
              e =
              this;
          return this.iterator(b, function(f, g, h, l, n) {
              c.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : q), g, h, l, n)
          })
      })
  });
  w("i18n()", function(a, b, c) {
      var d = this.context[0];
      a = ia(a)(d.oLanguage);
      a === q && (a = b);
      c !== q && k.isPlainObject(a) && (a = a[c] !== q ? a[c] : a._);
      return a.replace("%d", c)
  });
  u.version = "1.10.23";
  u.settings = [];
  u.models = {};
  u.models.oSearch = {
      bCaseInsensitive: !0,
      sSearch: "",
      bRegex: !1,
      bSmart: !0
  };
  u.models.oRow = {
      nTr: null,
      anCells: null,
      _aData: [],
      _aSortData: null,
      _aFilterData: null,
      _sFilterRow: null,
      _sRowStripe: "",
      src: null,
      idx: -1
  };
  u.models.oColumn = {
      idx: null,
      aDataSort: null,
      asSorting: null,
      bSearchable: null,
      bSortable: null,
      bVisible: null,
      _sManualType: null,
      _bAttrSrc: !1,
      fnCreatedCell: null,
      fnGetData: null,
      fnSetData: null,
      mData: null,
      mRender: null,
      nTh: null,
      nTf: null,
      sClass: null,
      sContentPadding: null,
      sDefaultContent: null,
      sName: null,
      sSortDataType: "std",
      sSortingClass: null,
      sSortingClassJUI: null,
      sTitle: null,
      sType: null,
      sWidth: null,
      sWidthOrig: null
  };
  u.defaults = {
      aaData: null,
      aaSorting: [
          [0, "asc"]
      ],
      aaSortingFixed: [],
      ajax: null,
      aLengthMenu: [10,
          25, 50, 100
      ],
      aoColumns: null,
      aoColumnDefs: null,
      aoSearchCols: [],
      asStripeClasses: null,
      bAutoWidth: !0,
      bDeferRender: !1,
      bDestroy: !1,
      bFilter: !0,
      bInfo: !0,
      bLengthChange: !0,
      bPaginate: !0,
      bProcessing: !1,
      bRetrieve: !1,
      bScrollCollapse: !1,
      bServerSide: !1,
      bSort: !0,
      bSortMulti: !0,
      bSortCellsTop: !1,
      bSortClasses: !0,
      bStateSave: !1,
      fnCreatedRow: null,
      fnDrawCallback: null,
      fnFooterCallback: null,
      fnFormatNumber: function(a) {
          return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
      },
      fnHeaderCallback: null,
      fnInfoCallback: null,
      fnInitComplete: null,
      fnPreDrawCallback: null,
      fnRowCallback: null,
      fnServerData: null,
      fnServerParams: null,
      fnStateLoadCallback: function(a) {
          try {
              return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname))
          } catch (b) {
              return {}
          }
      },
      fnStateLoadParams: null,
      fnStateLoaded: null,
      fnStateSaveCallback: function(a, b) {
          try {
              (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b))
          } catch (c) {}
      },
      fnStateSaveParams: null,
      iStateDuration: 7200,
      iDeferLoading: null,
      iDisplayLength: 10,
      iDisplayStart: 0,
      iTabIndex: 0,
      oClasses: {},
      oLanguage: {
          oAria: {
              sSortAscending: ": activate to sort column ascending",
              sSortDescending: ": activate to sort column descending"
          },
          oPaginate: {
              sFirst: "First",
              sLast: "Last",
              sNext: "Next",
              sPrevious: "Previous"
          },
          sEmptyTable: "No data available in table",
          sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
          sInfoEmpty: "Showing 0 to 0 of 0 entries",
          sInfoFiltered: "(filtered from _MAX_ total entries)",
          sInfoPostFix: "",
          sDecimal: "",
          sThousands: ",",
          sLengthMenu: "Show _MENU_ entries",
          sLoadingRecords: "Loading...",
          sProcessing: "Processing...",
          sSearch: "Search:",
          sSearchPlaceholder: "",
          sUrl: "",
          sZeroRecords: "No matching records found"
      },
      oSearch: k.extend({}, u.models.oSearch),
      sAjaxDataProp: "data",
      sAjaxSource: null,
      sDom: "lfrtip",
      searchDelay: null,
      sPaginationType: "simple_numbers",
      sScrollX: "",
      sScrollXInner: "",
      sScrollY: "",
      sServerMethod: "GET",
      renderer: null,
      rowId: "DT_RowId"
  };
  G(u.defaults);
  u.defaults.column = {
      aDataSort: null,
      iDataSort: -1,
      asSorting: ["asc", "desc"],
      bSearchable: !0,
      bSortable: !0,
      bVisible: !0,
      fnCreatedCell: null,
      mData: null,
      mRender: null,
      sCellType: "td",
      sClass: "",
      sContentPadding: "",
      sDefaultContent: null,
      sName: "",
      sSortDataType: "std",
      sTitle: null,
      sType: null,
      sWidth: null
  };
  G(u.defaults.column);
  u.models.oSettings = {
      oFeatures: {
          bAutoWidth: null,
          bDeferRender: null,
          bFilter: null,
          bInfo: null,
          bLengthChange: null,
          bPaginate: null,
          bProcessing: null,
          bServerSide: null,
          bSort: null,
          bSortMulti: null,
          bSortClasses: null,
          bStateSave: null
      },
      oScroll: {
          bCollapse: null,
          iBarWidth: 0,
          sX: null,
          sXInner: null,
          sY: null
      },
      oLanguage: {
          fnInfoCallback: null
      },
      oBrowser: {
          bScrollOversize: !1,
          bScrollbarLeft: !1,
          bBounding: !1,
          barWidth: 0
      },
      ajax: null,
      aanFeatures: [],
      aoData: [],
      aiDisplay: [],
      aiDisplayMaster: [],
      aIds: {},
      aoColumns: [],
      aoHeader: [],
      aoFooter: [],
      oPreviousSearch: {},
      aoPreSearchCols: [],
      aaSorting: null,
      aaSortingFixed: [],
      asStripeClasses: null,
      asDestroyStripes: [],
      sDestroyWidth: 0,
      aoRowCallback: [],
      aoHeaderCallback: [],
      aoFooterCallback: [],
      aoDrawCallback: [],
      aoRowCreatedCallback: [],
      aoPreDrawCallback: [],
      aoInitComplete: [],
      aoStateSaveParams: [],
      aoStateLoadParams: [],
      aoStateLoaded: [],
      sTableId: "",
      nTable: null,
      nTHead: null,
      nTFoot: null,
      nTBody: null,
      nTableWrapper: null,
      bDeferLoading: !1,
      bInitialised: !1,
      aoOpenRows: [],
      sDom: null,
      searchDelay: null,
      sPaginationType: "two_button",
      iStateDuration: 0,
      aoStateSave: [],
      aoStateLoad: [],
      oSavedState: null,
      oLoadedState: null,
      sAjaxSource: null,
      sAjaxDataProp: null,
      bAjaxDataGet: !0,
      jqXHR: null,
      json: q,
      oAjaxData: q,
      fnServerData: null,
      aoServerParams: [],
      sServerMethod: null,
      fnFormatNumber: null,
      aLengthMenu: null,
      iDraw: 0,
      bDrawing: !1,
      iDrawError: -1,
      _iDisplayLength: 10,
      _iDisplayStart: 0,
      _iRecordsTotal: 0,
      _iRecordsDisplay: 0,
      oClasses: {},
      bFiltered: !1,
      bSorted: !1,
      bSortCellsTop: null,
      oInit: null,
      aoDestroyCallback: [],
      fnRecordsTotal: function() {
          return "ssp" == P(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
      },
      fnRecordsDisplay: function() {
          return "ssp" == P(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
      },
      fnDisplayEnd: function() {
          var a = this._iDisplayLength,
              b = this._iDisplayStart,
              c = b + a,
              d = this.aiDisplay.length,
              e = this.oFeatures,
              f = e.bPaginate;
          return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c
      },
      oInstance: null,
      sInstance: null,
      iTabIndex: 0,
      nScrollHead: null,
      nScrollFoot: null,
      aLastSort: [],
      oPlugins: {},
      rowIdFn: null,
      rowId: null
  };
  u.ext = L = {
      buttons: {},
      classes: {},
      builder: "se/dt-1.10.23/rg-1.1.2",
      errMode: "alert",
      feature: [],
      search: [],
      selector: {
          cell: [],
          column: [],
          row: []
      },
      internal: {},
      legacy: {
          ajax: null
      },
      pager: {},
      renderer: {
          pageButton: {},
          header: {}
      },
      order: {},
      type: {
          detect: [],
          search: {},
          order: {}
      },
      _unique: 0,
      fnVersionCheck: u.fnVersionCheck,
      iApiIndex: 0,
      oJUIClasses: {},
      sVersion: u.version
  };
  k.extend(L, {
      afnFiltering: L.search,
      aTypes: L.type.detect,
      ofnSearch: L.type.search,
      oSort: L.type.order,
      afnSortData: L.order,
      aoFeatures: L.feature,
      oApi: L.internal,
      oStdClasses: L.classes,
      oPagination: L.pager
  });
  k.extend(u.ext.classes, {
      sTable: "dataTable",
      sNoFooter: "no-footer",
      sPageButton: "paginate_button",
      sPageButtonActive: "current",
      sPageButtonDisabled: "disabled",
      sStripeOdd: "odd",
      sStripeEven: "even",
      sRowEmpty: "dataTables_empty",
      sWrapper: "dataTables_wrapper",
      sFilter: "dataTables_filter",
      sInfo: "dataTables_info",
      sPaging: "dataTables_paginate paging_",
      sLength: "dataTables_length",
      sProcessing: "dataTables_processing",
      sSortAsc: "sorting_asc",
      sSortDesc: "sorting_desc",
      sSortable: "sorting",
      sSortableAsc: "sorting_asc_disabled",
      sSortableDesc: "sorting_desc_disabled",
      sSortableNone: "sorting_disabled",
      sSortColumn: "sorting_",
      sFilterInput: "",
      sLengthSelect: "",
      sScrollWrapper: "dataTables_scroll",
      sScrollHead: "dataTables_scrollHead",
      sScrollHeadInner: "dataTables_scrollHeadInner",
      sScrollBody: "dataTables_scrollBody",
      sScrollFoot: "dataTables_scrollFoot",
      sScrollFootInner: "dataTables_scrollFootInner",
      sHeaderTH: "",
      sFooterTH: "",
      sSortJUIAsc: "",
      sSortJUIDesc: "",
      sSortJUI: "",
      sSortJUIAscAllowed: "",
      sSortJUIDescAllowed: "",
      sSortJUIWrapper: "",
      sSortIcon: "",
      sJUIHeader: "",
      sJUIFooter: ""
  });
  var ec = u.ext.pager;
  k.extend(ec, {
      simple: function(a, b) {
          return ["previous", "next"]
      },
      full: function(a, b) {
          return ["first", "previous", "next", "last"]
      },
      numbers: function(a, b) {
          return [Ba(a, b)]
      },
      simple_numbers: function(a, b) {
          return ["previous", Ba(a, b), "next"]
      },
      full_numbers: function(a, b) {
          return ["first", "previous", Ba(a, b), "next", "last"]
      },
      first_last_numbers: function(a, b) {
          return ["first", Ba(a, b), "last"]
      },
      _numbers: Ba,
      numbers_length: 7
  });
  k.extend(!0, u.ext.renderer, {
      pageButton: {
          _: function(a, b, c, d, e, f) {
              var g = a.oClasses,
                  h = a.oLanguage.oPaginate,
                  l = a.oLanguage.oAria.paginate || {},
                  n, m, p = 0,
                  t = function(x, r) {
                      var A, E = g.sPageButtonDisabled,
                          H = function(B) {
                              kb(a, B.data.action, !0)
                          };
                      var W = 0;
                      for (A = r.length; W < A; W++) {
                          var M = r[W];
                          if (Array.isArray(M)) {
                              var C = k("<" + (M.DT_el || "div") + "/>").appendTo(x);
                              t(C, M)
                          } else {
                              n = null;
                              m = M;
                              C = a.iTabIndex;
                              switch (M) {
                                  case "ellipsis":
                                      x.append('<span class="ellipsis">&#x2026;</span>');
                                      break;
                                  case "first":
                                      n = h.sFirst;
                                      0 === e && (C = -1, m += " " + E);
                                      break;
                                  case "previous":
                                      n = h.sPrevious;
                                      0 === e && (C = -1, m += " " + E);
                                      break;
                                  case "next":
                                      n = h.sNext;
                                      if (0 === f || e === f - 1) C = -1, m += " " + E;
                                      break;
                                  case "last":
                                      n = h.sLast;
                                      if (0 === f || e === f - 1) C = -1, m += " " + E;
                                      break;
                                  default:
                                      n = a.fnFormatNumber(M + 1), m = e === M ? g.sPageButtonActive : ""
                              }
                              null !== n && (C = k("<a>", {
                                  "class": g.sPageButton + " " + m,
                                  "aria-controls": a.sTableId,
                                  "aria-label": l[M],
                                  "data-dt-idx": p,
                                  tabindex: C,
                                  id: 0 === c && "string" === typeof M ? a.sTableId + "_" + M : null
                              }).html(n).appendTo(x), ob(C, {
                                  action: M
                              }, H), p++)
                          }
                      }
                  };
              try {
                  var v = k(b).find(z.activeElement).data("dt-idx")
              } catch (x) {}
              t(k(b).empty(), d);
              v !== q && k(b).find("[data-dt-idx=" + v + "]").trigger("focus")
          }
      }
  });
  k.extend(u.ext.type.detect, [function(a, b) {
      b = b.oLanguage.sDecimal;
      return sb(a, b) ? "num" + b : null
  }, function(a, b) {
      if (a && !(a instanceof Date) && !tc.test(a)) return null;
      b = Date.parse(a);
      return null !== b && !isNaN(b) || ca(a) ? "date" : null
  }, function(a,
      b) {
      b = b.oLanguage.sDecimal;
      return sb(a, b, !0) ? "num-fmt" + b : null
  }, function(a, b) {
      b = b.oLanguage.sDecimal;
      return jc(a, b) ? "html-num" + b : null
  }, function(a, b) {
      b = b.oLanguage.sDecimal;
      return jc(a, b, !0) ? "html-num-fmt" + b : null
  }, function(a, b) {
      return ca(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null
  }]);
  k.extend(u.ext.type.search, {
      html: function(a) {
          return ca(a) ? a : "string" === typeof a ? a.replace(gc, " ").replace(Ta, "") : ""
      },
      string: function(a) {
          return ca(a) ? a : "string" === typeof a ? a.replace(gc, " ") : a
      }
  });
  var Sa = function(a,
      b, c, d) {
      if (0 !== a && (!a || "-" === a)) return -Infinity;
      b && (a = ic(a, b));
      a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
      return 1 * a
  };
  k.extend(L.type.order, {
      "date-pre": function(a) {
          a = Date.parse(a);
          return isNaN(a) ? -Infinity : a
      },
      "html-pre": function(a) {
          return ca(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
      },
      "string-pre": function(a) {
          return ca(a) ? "" : "string" === typeof a ? a.toLowerCase() : a.toString ? a.toString() : ""
      },
      "string-asc": function(a, b) {
          return a < b ? -1 : a > b ? 1 : 0
      },
      "string-desc": function(a, b) {
          return a <
              b ? 1 : a > b ? -1 : 0
      }
  });
  Va("");
  k.extend(!0, u.ext.renderer, {
      header: {
          _: function(a, b, c, d) {
              k(a.nTable).on("order.dt.DT", function(e, f, g, h) {
                  a === f && (e = c.idx, b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass("asc" == h[e] ? d.sSortAsc : "desc" == h[e] ? d.sSortDesc : c.sSortingClass))
              })
          },
          jqueryui: function(a, b, c, d) {
              k("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(k("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
              k(a.nTable).on("order.dt.DT", function(e, f, g, h) {
                  a === f &&
                      (e = c.idx, b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == h[e] ? d.sSortAsc : "desc" == h[e] ? d.sSortDesc : c.sSortingClass), b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass("asc" == h[e] ? d.sSortJUIAsc : "desc" == h[e] ? d.sSortJUIDesc : c.sSortingClassJUI))
              })
          }
      }
  });
  var xb = function(a) {
      return "string" === typeof a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a
  };
  u.render = {
      number: function(a, b, c, d, e) {
          return {
              display: function(f) {
                  if ("number" !== typeof f && "string" !== typeof f) return f;
                  var g = 0 > f ? "-" : "",
                      h = parseFloat(f);
                  if (isNaN(h)) return xb(f);
                  h = h.toFixed(c);
                  f = Math.abs(h);
                  h = parseInt(f, 10);
                  f = c ? b + (f - h).toFixed(c).substring(2) : "";
                  return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "")
              }
          }
      },
      text: function() {
          return {
              display: xb,
              filter: xb
          }
      }
  };
  k.extend(u.ext.internal, {
      _fnExternApiFunc: fc,
      _fnBuildAjax: La,
      _fnAjaxUpdate: Fb,
      _fnAjaxParameters: Ob,
      _fnAjaxUpdateDraw: Pb,
      _fnAjaxDataSrc: Ma,
      _fnAddColumn: Wa,
      _fnColumnOptions: Da,
      _fnAdjustColumnSizing: ra,
      _fnVisibleToColumnIndex: sa,
      _fnColumnIndexToVisible: ta,
      _fnVisbleColumns: na,
      _fnGetColumns: Fa,
      _fnColumnTypes: Ya,
      _fnApplyColumnDefs: Cb,
      _fnHungarianMap: G,
      _fnCamelToHungarian: O,
      _fnLanguageCompat: ma,
      _fnBrowserDetect: Ab,
      _fnAddData: ea,
      _fnAddTr: Ga,
      _fnNodeToDataIndex: function(a, b) {
          return b._DT_RowIndex !== q ? b._DT_RowIndex : null
      },
      _fnNodeToColumnIndex: function(a, b, c) {
          return k.inArray(c, a.aoData[b].anCells)
      },
      _fnGetCellData: S,
      _fnSetCellData: Db,
      _fnSplitObjNotation: ab,
      _fnGetObjectDataFn: ia,
      _fnSetObjectDataFn: da,
      _fnGetDataMaster: bb,
      _fnClearTable: Ha,
      _fnDeleteIndex: Ia,
      _fnInvalidate: va,
      _fnGetRowElements: $a,
      _fnCreateTr: Za,
      _fnBuildHead: Eb,
      _fnDrawHead: xa,
      _fnDraw: fa,
      _fnReDraw: ja,
      _fnAddOptionsHtml: Hb,
      _fnDetectHeader: wa,
      _fnGetUniqueThs: Ka,
      _fnFeatureHtmlFilter: Jb,
      _fnFilterComplete: ya,
      _fnFilterCustom: Sb,
      _fnFilterColumn: Rb,
      _fnFilter: Qb,
      _fnFilterCreateSearch: gb,
      _fnEscapeRegex: hb,
      _fnFilterData: Tb,
      _fnFeatureHtmlInfo: Mb,
      _fnUpdateInfo: Wb,
      _fnInfoMacros: Xb,
      _fnInitialise: za,
      _fnInitComplete: Na,
      _fnLengthChange: ib,
      _fnFeatureHtmlLength: Ib,
      _fnFeatureHtmlPaginate: Nb,
      _fnPageChange: kb,
      _fnFeatureHtmlProcessing: Kb,
      _fnProcessingDisplay: U,
      _fnFeatureHtmlTable: Lb,
      _fnScrollDraw: Ea,
      _fnApplyToChildren: Z,
      _fnCalculateColumnWidths: Xa,
      _fnThrottle: fb,
      _fnConvertToWidth: Zb,
      _fnGetWidestNode: $b,
      _fnGetMaxLenString: ac,
      _fnStringToCss: K,
      _fnSortFlatten: pa,
      _fnSort: Gb,
      _fnSortAria: cc,
      _fnSortListener: nb,
      _fnSortAttachListener: db,
      _fnSortingClasses: Pa,
      _fnSortData: bc,
      _fnSaveState: Qa,
      _fnLoadState: dc,
      _fnSettingsFromNode: Ra,
      _fnLog: aa,
      _fnMap: V,
      _fnBindAction: ob,
      _fnCallbackReg: Q,
      _fnCallbackFire: I,
      _fnLengthOverflow: jb,
      _fnRenderer: eb,
      _fnDataSource: P,
      _fnRowAttributes: cb,
      _fnExtend: pb,
      _fnCalculateEnd: function() {}
  });
  k.fn.dataTable = u;
  u.$ = k;
  k.fn.dataTableSettings = u.settings;
  k.fn.dataTableExt = u.ext;
  k.fn.DataTable = function(a) {
      return k(this).dataTable(a).api()
  };
  k.each(u, function(a, b) {
      k.fn.DataTable[a] = b
  });
  return k.fn.dataTable
});


/*!
DataTables Bootstrap 3 integration
©2011-2015 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(a, b, c) {
  a instanceof String && (a = String(a));
  for (var e = a.length, d = 0; d < e; d++) {
      var f = a[d];
      if (b.call(c, f, d, a)) return {
          i: d,
          v: f
      }
  }
  return {
      i: -1,
      v: void 0
  }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  if (a == Array.prototype || a == Object.prototype) return a;
  a[b] = c.value;
  return a
};
$jscomp.getGlobal = function(a) {
  a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(a, b) {
  var c = $jscomp.propertyToPolyfillSymbol[b];
  if (null == c) return a[b];
  c = a[c];
  return void 0 !== c ? c : a[b]
};
$jscomp.polyfill = function(a, b, c, e) {
  b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, e) : $jscomp.polyfillUnisolated(a, b, c, e))
};
$jscomp.polyfillUnisolated = function(a, b, c, e) {
  c = $jscomp.global;
  a = a.split(".");
  for (e = 0; e < a.length - 1; e++) {
      var d = a[e];
      if (!(d in c)) return;
      c = c[d]
  }
  a = a[a.length - 1];
  e = c[a];
  b = b(e);
  b != e && null != b && $jscomp.defineProperty(c, a, {
      configurable: !0,
      writable: !0,
      value: b
  })
};
$jscomp.polyfillIsolated = function(a, b, c, e) {
  var d = a.split(".");
  a = 1 === d.length;
  e = d[0];
  e = !a && e in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var f = 0; f < d.length - 1; f++) {
      var l = d[f];
      if (!(l in e)) return;
      e = e[l]
  }
  d = d[d.length - 1];
  c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? e[d] : null;
  b = b(c);
  null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, d, {
      configurable: !0,
      writable: !0,
      value: b
  }) : b !== c && ($jscomp.propertyToPolyfillSymbol[d] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(d) : $jscomp.POLYFILL_PREFIX + d, d =
      $jscomp.propertyToPolyfillSymbol[d], $jscomp.defineProperty(e, d, {
          configurable: !0,
          writable: !0,
          value: b
      })))
};
$jscomp.polyfill("Array.prototype.find", function(a) {
  return a ? a : function(b, c) {
      return $jscomp.findInternal(this, b, c).v
  }
}, "es6", "es3");
(function(a) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function(b) {
      return a(b, window, document)
  }) : "object" === typeof exports ? module.exports = function(b, c) {
      b || (b = window);
      c && c.fn.dataTable || (c = require("datatables.net")(b, c).$);
      return a(c, b, b.document)
  } : a(jQuery, window, document)
})(function(a, b, c, e) {
  var d = a.fn.dataTable;
  a.extend(!0, d.defaults, {
      dom: "<'ui stackable grid'<'row'<'eight wide column'l><'right aligned eight wide column'f>><'row dt-table'<'sixteen wide column'tr>><'row'<'seven wide column'i><'right aligned nine wide column'p>>>",
      renderer: "semanticUI"
  });
  a.extend(d.ext.classes, {
      sWrapper: "dataTables_wrapper dt-semanticUI",
      sFilter: "dataTables_filter ui input",
      sProcessing: "dataTables_processing ui segment",
      sPageButton: "paginate_button item"
  });
  d.ext.renderer.pageButton.semanticUI = function(f, l, B, C, m, u) {
      var v = new d.Api(f),
          D = f.oClasses,
          n = f.oLanguage.oPaginate,
          E = f.oLanguage.oAria.paginate || {},
          h, k, w = 0,
          z = function(q, x) {
              var y, F = function(p) {
                  p.preventDefault();
                  a(p.currentTarget).hasClass("disabled") || v.page() == p.data.action || v.page(p.data.action).draw("page")
              };
              var r = 0;
              for (y = x.length; r < y; r++) {
                  var g = x[r];
                  if (Array.isArray(g)) z(q, g);
                  else {
                      k = h = "";
                      switch (g) {
                          case "ellipsis":
                              h = "&#x2026;";
                              k = "disabled";
                              break;
                          case "first":
                              h = n.sFirst;
                              k = g + (0 < m ? "" : " disabled");
                              break;
                          case "previous":
                              h = n.sPrevious;
                              k = g + (0 < m ? "" : " disabled");
                              break;
                          case "next":
                              h = n.sNext;
                              k = g + (m < u - 1 ? "" : " disabled");
                              break;
                          case "last":
                              h = n.sLast;
                              k = g + (m < u - 1 ? "" : " disabled");
                              break;
                          default:
                              h = g + 1, k = m === g ? "active" : ""
                      }
                      var t = -1 === k.indexOf("disabled") ? "a" : "div";
                      h && (t = a("<" + t + ">", {
                          "class": D.sPageButton + " " + k,
                          id: 0 === B && "string" ===
                              typeof g ? f.sTableId + "_" + g : null,
                          href: "#",
                          "aria-controls": f.sTableId,
                          "aria-label": E[g],
                          "data-dt-idx": w,
                          tabindex: f.iTabIndex
                      }).html(h).appendTo(q), f.oApi._fnBindAction(t, {
                          action: g
                      }, F), w++)
                  }
              }
          };
      try {
          var A = a(l).find(c.activeElement).data("dt-idx")
      } catch (q) {}
      z(a(l).empty().html('<div class="ui stackable pagination menu"/>').children(), C);
      A !== e && a(l).find("[data-dt-idx=" + A + "]").trigger("focus")
  };
  a(c).on("init.dt", function(f, l) {
      "dt" === f.namespace && (f = new a.fn.dataTable.Api(l), a.fn.dropdown && a("div.dataTables_length select",
          f.table().container()).dropdown(), a("div.dataTables_filter.ui.input", f.table().container()).removeClass("input").addClass("form"), a("div.dataTables_filter input", f.table().container()).wrap('<span class="ui input" />'))
  });
  return d
});


/*!
 Copyright 2017-2020 SpryMedia Ltd.

This source file is free software, available under the following license:
 MIT license - http://datatables.net/license/mit

This source file is distributed in the hope that it will be useful, but
WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

For details please refer to: http://www.datatables.net
RowGroup 1.1.2
©2017-2020 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(a, c, d) {
  a instanceof String && (a = String(a));
  for (var f = a.length, e = 0; e < f; e++) {
      var g = a[e];
      if (c.call(d, g, e, a)) return {
          i: e,
          v: g
      }
  }
  return {
      i: -1,
      v: void 0
  }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, c, d) {
  a != Array.prototype && a != Object.prototype && (a[c] = d.value)
};
$jscomp.getGlobal = function(a) {
  a = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, a];
  for (var c = 0; c < a.length; ++c) {
      var d = a[c];
      if (d && d.Math == Math) return d
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(a, c, d, f) {
  if (c) {
      d = $jscomp.global;
      a = a.split(".");
      for (f = 0; f < a.length - 1; f++) {
          var e = a[f];
          e in d || (d[e] = {});
          d = d[e]
      }
      a = a[a.length - 1];
      f = d[a];
      c = c(f);
      c != f && null != c && $jscomp.defineProperty(d, a, {
          configurable: !0,
          writable: !0,
          value: c
      })
  }
};
$jscomp.polyfill("Array.prototype.find", function(a) {
  return a ? a : function(a, d) {
      return $jscomp.findInternal(this, a, d).v
  }
}, "es6", "es3");
(function(a) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function(c) {
      return a(c, window, document)
  }) : "object" === typeof exports ? module.exports = function(c, d) {
      c || (c = window);
      d && d.fn.dataTable || (d = require("datatables.net")(c, d).$);
      return a(d, c, c.document)
  } : a(jQuery, window, document)
})(function(a, c, d, f) {
  var e = a.fn.dataTable,
      g = function(b, h) {
          if (!e.versionCheck || !e.versionCheck("1.10.8")) throw "RowGroup requires DataTables 1.10.8 or newer";
          this.c = a.extend(!0, {}, e.defaults.rowGroup,
              g.defaults, h);
          this.s = {
              dt: new e.Api(b)
          };
          this.dom = {};
          b = this.s.dt.settings()[0];
          if (h = b.rowGroup) return h;
          b.rowGroup = this;
          this._constructor()
      };
  a.extend(g.prototype, {
      dataSrc: function(b) {
          if (b === f) return this.c.dataSrc;
          var h = this.s.dt;
          this.c.dataSrc = b;
          a(h.table().node()).triggerHandler("rowgroup-datasrc.dt", [h, b]);
          return this
      },
      disable: function() {
          this.c.enable = !1;
          return this
      },
      enable: function(b) {
          if (!1 === b) return this.disable();
          this.c.enable = !0;
          return this
      },
      enabled: function() {
          return this.c.enable
      },
      _constructor: function() {
          var b =
              this,
              a = this.s.dt,
              d = a.settings()[0];
          a.on("draw.dtrg", function(a, h) {
              b.c.enable && d === h && b._draw()
          });
          a.on("column-visibility.dt.dtrg responsive-resize.dt.dtrg", function() {
              b._adjustColspan()
          });
          a.on("destroy", function() {
              a.off(".dtrg")
          })
      },
      _adjustColspan: function() {
          a("tr." + this.c.className, this.s.dt.table().body()).find("td:visible").attr("colspan", this._colspan())
      },
      _colspan: function() {
          return this.s.dt.columns().visible().reduce(function(b, a) {
              return b + a
          }, 0)
      },
      _draw: function() {
          var b = this._group(0, this.s.dt.rows({
              page: "current"
          }).indexes());
          this._groupDisplay(0, b)
      },
      _group: function(b, d) {
          for (var h = a.isArray(this.c.dataSrc) ? this.c.dataSrc : [this.c.dataSrc], c = e.ext.oApi._fnGetObjectDataFn(h[b]), g = this.s.dt, l, n, m = [], k = 0, p = d.length; k < p; k++) {
              var q = d[k];
              l = g.row(q).data();
              l = c(l);
              if (null === l || l === f) l = this.c.emptyDataGroup;
              if (n === f || l !== n) m.push({
                  dataPoint: l,
                  rows: []
              }), n = l;
              m[m.length - 1].rows.push(q)
          }
          if (h[b + 1] !== f)
              for (k = 0, p = m.length; k < p; k++) m[k].children = this._group(b + 1, m[k].rows);
          return m
      },
      _groupDisplay: function(b, a) {
          for (var d = this.s.dt, c, h = 0, e =
                  a.length; h < e; h++) {
              var f = a[h],
                  g = f.dataPoint,
                  k = f.rows;
              this.c.startRender && (c = this.c.startRender.call(this, d.rows(k), g, b), (c = this._rowWrap(c, this.c.startClassName, b)) && c.insertBefore(d.row(k[0]).node()));
              this.c.endRender && (c = this.c.endRender.call(this, d.rows(k), g, b), (c = this._rowWrap(c, this.c.endClassName, b)) && c.insertAfter(d.row(k[k.length - 1]).node()));
              f.children && this._groupDisplay(b + 1, f.children)
          }
      },
      _rowWrap: function(b, d, c) {
          if (null === b || "" === b) b = this.c.emptyDataGroup;
          return b === f || null === b ? null : ("object" ===
              typeof b && b.nodeName && "tr" === b.nodeName.toLowerCase() ? a(b) : b instanceof a && b.length && "tr" === b[0].nodeName.toLowerCase() ? b : a("<tr/>").append(a("<td/>").attr("colspan", this._colspan()).append(b))).addClass(this.c.className).addClass(d).addClass("dtrg-level-" + c)
      }
  });
  g.defaults = {
      className: "dtrg-group",
      dataSrc: 0,
      emptyDataGroup: "No group",
      enable: !0,
      endClassName: "dtrg-end",
      endRender: null,
      startClassName: "dtrg-start",
      startRender: function(b, a) {
          return a
      }
  };
  g.version = "1.1.2";
  a.fn.dataTable.RowGroup = g;
  a.fn.DataTable.RowGroup =
      g;
  e.Api.register("rowGroup()", function() {
      return this
  });
  e.Api.register("rowGroup().disable()", function() {
      return this.iterator("table", function(a) {
          a.rowGroup && a.rowGroup.enable(!1)
      })
  });
  e.Api.register("rowGroup().enable()", function(a) {
      return this.iterator("table", function(b) {
          b.rowGroup && b.rowGroup.enable(a === f ? !0 : a)
      })
  });
  e.Api.register("rowGroup().enabled()", function() {
      var a = this.context;
      return a.length && a[0].rowGroup ? a[0].rowGroup.enabled() : !1
  });
  e.Api.register("rowGroup().dataSrc()", function(a) {
      return a ===
          f ? this.context[0].rowGroup.dataSrc() : this.iterator("table", function(b) {
              b.rowGroup && b.rowGroup.dataSrc(a)
          })
  });
  a(d).on("preInit.dt.dtrg", function(b, d, c) {
      "dt" === b.namespace && (b = d.oInit.rowGroup, c = e.defaults.rowGroup, b || c) && (c = a.extend({}, c, b), !1 !== b && new g(d, c))
  });
  return g
});


/*!
Semanic UI styling wrapper for RowGroup
©2018 SpryMedia Ltd - datatables.net/license
*/
(function(c) {
  "function" === typeof define && define.amd ? define(["jquery", "datatables.net-se", "datatables.net-rowgroup"], function(a) {
      return c(a, window, document)
  }) : "object" === typeof exports ? module.exports = function(a, b) {
      a || (a = window);
      b && b.fn.dataTable || (b = require("datatables.net-se")(a, b).$);
      b.fn.dataTable.RowGroup || require("datatables.net-rowgroup")(a, b);
      return c(b, a, a.document)
  } : c(jQuery, window, document)
})(function(c, a, b, d) {
  return c.fn.dataTable
});


! function(e) {
  "undefined" != typeof exports ? e(exports) : (window.hljs = e({}), "function" == typeof define && define.amd && define("hljs", [], function() {
      return window.hljs
  }))
}(function(e) {
  function n(e) {
      return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
  }

  function t(e) {
      return e.nodeName.toLowerCase()
  }

  function r(e, n) {
      var t = e && e.exec(n);
      return t && 0 == t.index
  }

  function a(e) {
      return /no-?highlight|plain|text/.test(e)
  }

  function i(e) {
      var n, t, r, i = e.className + " ";
      if (i += e.parentNode ? e.parentNode.className : "", t = /\blang(?:uage)?-([\w-]+)\b/.exec(i)) return E(t[1]) ? t[1] : "no-highlight";
      for (i = i.split(/\s+/), n = 0, r = i.length; r > n; n++)
          if (E(i[n]) || a(i[n])) return i[n]
  }

  function o(e, n) {
      var t, r = {};
      for (t in e) r[t] = e[t];
      if (n)
          for (t in n) r[t] = n[t];
      return r
  }

  function u(e) {
      var n = [];
      return function r(e, a) {
          for (var i = e.firstChild; i; i = i.nextSibling) 3 == i.nodeType ? a += i.nodeValue.length : 1 == i.nodeType && (n.push({
              event: "start",
              offset: a,
              node: i
          }), a = r(i, a), t(i).match(/br|hr|img|input/) || n.push({
              event: "stop",
              offset: a,
              node: i
          }));
          return a
      }(e, 0), n
  }

  function c(e, r, a) {
      function i() {
          return e.length && r.length ? e[0].offset != r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" == r[0].event ? e : r : e.length ? e : r
      }

      function o(e) {
          function r(e) {
              return " " + e.nodeName + '="' + n(e.value) + '"'
          }
          f += "<" + t(e) + Array.prototype.map.call(e.attributes, r).join("") + ">"
      }

      function u(e) {
          f += "</" + t(e) + ">"
      }

      function c(e) {
          ("start" == e.event ? o : u)(e.node)
      }
      for (var s = 0, f = "", l = []; e.length || r.length;) {
          var g = i();
          if (f += n(a.substr(s, g[0].offset - s)), s = g[0].offset, g == e) {
              l.reverse().forEach(u);
              do c(g.splice(0, 1)[0]), g = i(); while (g == e && g.length && g[0].offset == s);
              l.reverse().forEach(o)
          } else "start" == g[0].event ? l.push(g[0].node) : l.pop(), c(g.splice(0, 1)[0])
      }
      return f + n(a.substr(s))
  }

  function s(e) {
      function n(e) {
          return e && e.source || e
      }

      function t(t, r) {
          return new RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : ""))
      }

      function r(a, i) {
          if (!a.compiled) {
              if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
                  var u = {},
                      c = function(n, t) {
                          e.cI && (t = t.toLowerCase()), t.split(" ").forEach(function(e) {
                              var t = e.split("|");
                              u[t[0]] = [n, t[1] ? Number(t[1]) : 1]
                          })
                      };
                  "string" == typeof a.k ? c("keyword", a.k) : Object.keys(a.k).forEach(function(e) {
                      c(e, a.k[e])
                  }), a.k = u
              }
              a.lR = t(a.l || /\b\w+\b/, !0), i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = t(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)), a.tE = n(a.e) || "", a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)), a.i && (a.iR = t(a.i)), void 0 === a.r && (a.r = 1), a.c || (a.c = []);
              var s = [];
              a.c.forEach(function(e) {
                  e.v ? e.v.forEach(function(n) {
                      s.push(o(e, n))
                  }) : s.push("self" == e ? a : e)
              }), a.c = s, a.c.forEach(function(e) {
                  r(e, a)
              }), a.starts && r(a.starts, i);
              var f = a.c.map(function(e) {
                  return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
              }).concat([a.tE, a.i]).map(n).filter(Boolean);
              a.t = f.length ? t(f.join("|"), !0) : {
                  exec: function() {
                      return null
                  }
              }
          }
      }
      r(e)
  }

  function f(e, t, a, i) {
      function o(e, n) {
          for (var t = 0; t < n.c.length; t++)
              if (r(n.c[t].bR, e)) return n.c[t]
      }

      function u(e, n) {
          if (r(e.eR, n)) {
              for (; e.endsParent && e.parent;) e = e.parent;
              return e
          }
          return e.eW ? u(e.parent, n) : void 0
      }

      function c(e, n) {
          return !a && r(n.iR, e)
      }

      function g(e, n) {
          var t = N.cI ? n[0].toLowerCase() : n[0];
          return e.k.hasOwnProperty(t) && e.k[t]
      }

      function h(e, n, t, r) {
          var a = r ? "" : w.classPrefix,
              i = '<span class="' + a,
              o = t ? "" : "</span>";
          return i += e + '">', i + n + o
      }

      function p() {
          if (!L.k) return n(B);
          var e = "",
              t = 0;
          L.lR.lastIndex = 0;
          for (var r = L.lR.exec(B); r;) {
              e += n(B.substr(t, r.index - t));
              var a = g(L, r);
              a ? (y += a[1], e += h(a[0], n(r[0]))) : e += n(r[0]), t = L.lR.lastIndex, r = L.lR.exec(B)
          }
          return e + n(B.substr(t))
      }

      function d() {
          if (L.sL && !x[L.sL]) return n(B);
          var e = L.sL ? f(L.sL, B, !0, M[L.sL]) : l(B);
          return L.r > 0 && (y += e.r), "continuous" == L.subLanguageMode && (M[L.sL] = e.top), h(e.language, e.value, !1, !0)
      }

      function b() {
          return void 0 !== L.sL ? d() : p()
      }

      function v(e, t) {
          var r = e.cN ? h(e.cN, "", !0) : "";
          e.rB ? (k += r, B = "") : e.eB ? (k += n(t) + r, B = "") : (k += r, B = t), L = Object.create(e, {
              parent: {
                  value: L
              }
          })
      }

      function m(e, t) {
          if (B += e, void 0 === t) return k += b(), 0;
          var r = o(t, L);
          if (r) return k += b(), v(r, t), r.rB ? 0 : t.length;
          var a = u(L, t);
          if (a) {
              var i = L;
              i.rE || i.eE || (B += t), k += b();
              do L.cN && (k += "</span>"), y += L.r, L = L.parent; while (L != a.parent);
              return i.eE && (k += n(t)), B = "", a.starts && v(a.starts, ""), i.rE ? 0 : t.length
          }
          if (c(t, L)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (L.cN || "<unnamed>") + '"');
          return B += t, t.length || 1
      }
      var N = E(e);
      if (!N) throw new Error('Unknown language: "' + e + '"');
      s(N);
      var R, L = i || N,
          M = {},
          k = "";
      for (R = L; R != N; R = R.parent) R.cN && (k = h(R.cN, "", !0) + k);
      var B = "",
          y = 0;
      try {
          for (var C, j, I = 0;;) {
              if (L.t.lastIndex = I, C = L.t.exec(t), !C) break;
              j = m(t.substr(I, C.index - I), C[0]), I = C.index + j
          }
          for (m(t.substr(I)), R = L; R.parent; R = R.parent) R.cN && (k += "</span>");
          return {
              r: y,
              value: k,
              language: e,
              top: L
          }
      } catch (O) {
          if (-1 != O.message.indexOf("Illegal")) return {
              r: 0,
              value: n(t)
          };
          throw O
      }
  }

  function l(e, t) {
      t = t || w.languages || Object.keys(x);
      var r = {
              r: 0,
              value: n(e)
          },
          a = r;
      return t.forEach(function(n) {
          if (E(n)) {
              var t = f(n, e, !1);
              t.language = n, t.r > a.r && (a = t), t.r > r.r && (a = r, r = t)
          }
      }), a.language && (r.second_best = a), r
  }

  function g(e) {
      return w.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function(e, n) {
          return n.replace(/\t/g, w.tabReplace)
      })), w.useBR && (e = e.replace(/\n/g, "<br>")), e
  }

  function h(e, n, t) {
      var r = n ? R[n] : t,
          a = [e.trim()];
      return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(r) && a.push(r), a.join(" ").trim()
  }

  function p(e) {
      var n = i(e);
      if (!a(n)) {
          var t;
          w.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e;
          var r = t.textContent,
              o = n ? f(n, r, !0) : l(r),
              s = u(t);
          if (s.length) {
              var p = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
              p.innerHTML = o.value, o.value = c(s, u(p), r)
          }
          o.value = g(o.value), e.innerHTML = o.value, e.className = h(e.className, n, o.language), e.result = {
              language: o.language,
              re: o.r
          }, o.second_best && (e.second_best = {
              language: o.second_best.language,
              re: o.second_best.r
          })
      }
  }

  function d(e) {
      w = o(w, e)
  }

  function b() {
      if (!b.called) {
          b.called = !0;
          var e = document.querySelectorAll("pre code");
          Array.prototype.forEach.call(e, p)
      }
  }

  function v() {
      addEventListener("DOMContentLoaded", b, !1), addEventListener("load", b, !1)
  }

  function m(n, t) {
      var r = x[n] = t(e);
      r.aliases && r.aliases.forEach(function(e) {
          R[e] = n
      })
  }

  function N() {
      return Object.keys(x)
  }

  function E(e) {
      return x[e] || x[R[e]]
  }
  var w = {
          classPrefix: "hljs-",
          tabReplace: null,
          useBR: !1,
          languages: void 0
      },
      x = {},
      R = {};
  return e.highlight = f, e.highlightAuto = l, e.fixMarkup = g, e.highlightBlock = p, e.configure = d, e.initHighlighting = b, e.initHighlightingOnLoad = v, e.registerLanguage = m, e.listLanguages = N, e.getLanguage = E, e.inherit = o, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
      b: "\\\\[\\s\\S]",
      r: 0
  }, e.ASM = {
      cN: "string",
      b: "'",
      e: "'",
      i: "\\n",
      c: [e.BE]
  }, e.QSM = {
      cN: "string",
      b: '"',
      e: '"',
      i: "\\n",
      c: [e.BE]
  }, e.PWM = {
      b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
  }, e.C = function(n, t, r) {
      var a = e.inherit({
          cN: "comment",
          b: n,
          e: t,
          c: []
      }, r || {});
      return a.c.push(e.PWM), a.c.push({
          cN: "doctag",
          bK: "TODO FIXME NOTE BUG XXX",
          r: 0
      }), a
  }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {
      cN: "number",
      b: e.NR,
      r: 0
  }, e.CNM = {
      cN: "number",
      b: e.CNR,
      r: 0
  }, e.BNM = {
      cN: "number",
      b: e.BNR,
      r: 0
  }, e.CSSNM = {
      cN: "number",
      b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      r: 0
  }, e.RM = {
      cN: "regexp",
      b: /\//,
      e: /\/[gimuy]*/,
      i: /\n/,
      c: [e.BE, {
          b: /\[/,
          e: /\]/,
          r: 0,
          c: [e.BE]
      }]
  }, e.TM = {
      cN: "title",
      b: e.IR,
      r: 0
  }, e.UTM = {
      cN: "title",
      b: e.UIR,
      r: 0
  }, e
});
hljs.registerLanguage("scss", function(e) {
  var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
      i = {
          cN: "variable",
          b: "(\\$" + t + ")\\b"
      },
      r = {
          cN: "function",
          b: t + "\\(",
          rB: !0,
          eE: !0,
          e: "\\("
      },
      o = {
          cN: "hexcolor",
          b: "#[0-9A-Fa-f]+"
      };
  ({
      cN: "attribute",
      b: "[A-Z\\_\\.\\-]+",
      e: ":",
      eE: !0,
      i: "[^\\s]",
      starts: {
          cN: "value",
          eW: !0,
          eE: !0,
          c: [r, o, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
              cN: "important",
              b: "!important"
          }]
      }
  });
  return {
      cI: !0,
      i: "[=/|']",
      c: [e.CLCM, e.CBCM, r, {
          cN: "id",
          b: "\\#[A-Za-z0-9_-]+",
          r: 0
      }, {
          cN: "class",
          b: "\\.[A-Za-z0-9_-]+",
          r: 0
      }, {
          cN: "attr_selector",
          b: "\\[",
          e: "\\]",
          i: "$"
      }, {
          cN: "tag",
          b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
          r: 0
      }, {
          cN: "pseudo",
          b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
      }, {
          cN: "pseudo",
          b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
      }, i, {
          cN: "attribute",
          b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
          i: "[^\\s]"
      }, {
          cN: "value",
          b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
      }, {
          cN: "value",
          b: ":",
          e: ";",
          c: [r, i, o, e.CSSNM, e.QSM, e.ASM, {
              cN: "important",
              b: "!important"
          }]
      }, {
          cN: "at_rule",
          b: "@",
          e: "[{;]",
          k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
          c: [r, i, e.QSM, e.ASM, o, e.CSSNM, {
              cN: "preprocessor",
              b: "\\s[A-Za-z0-9_.-]+",
              r: 0
          }]
      }]
  }
});
hljs.registerLanguage("javascript", function(e) {
  return {
      aliases: ["js"],
      k: {
          keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await",
          literal: "true false null undefined NaN Infinity",
          built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
      },
      c: [{
          cN: "pi",
          r: 10,
          b: /^\s*['"]use (strict|asm)['"]/
      }, e.ASM, e.QSM, {
          cN: "string",
          b: "`",
          e: "`",
          c: [e.BE, {
              cN: "subst",
              b: "\\$\\{",
              e: "\\}"
          }]
      }, e.CLCM, e.CBCM, {
          cN: "number",
          v: [{
              b: "\\b(0[bB][01]+)"
          }, {
              b: "\\b(0[oO][0-7]+)"
          }, {
              b: e.CNR
          }],
          r: 0
      }, {
          b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
          k: "return throw case",
          c: [e.CLCM, e.CBCM, e.RM, {
              b: /</,
              e: />\s*[);\]]/,
              r: 0,
              sL: "xml"
          }],
          r: 0
      }, {
          cN: "function",
          bK: "function",
          e: /\{/,
          eE: !0,
          c: [e.inherit(e.TM, {
              b: /[A-Za-z$_][0-9A-Za-z$_]*/
          }), {
              cN: "params",
              b: /\(/,
              e: /\)/,
              eB: !0,
              eE: !0,
              c: [e.CLCM, e.CBCM],
              i: /["'\(]/
          }],
          i: /\[|%/
      }, {
          b: /\$[(.]/
      }, {
          b: "\\." + e.IR,
          r: 0
      }, {
          bK: "import",
          e: "[;$]",
          k: "import from as",
          c: [e.ASM, e.QSM]
      }, {
          cN: "class",
          bK: "class",
          e: /[{;=]/,
          eE: !0,
          i: /[:"\[\]]/,
          c: [{
              bK: "extends"
          }, e.UTM]
      }]
  }
});
hljs.registerLanguage("http", function(t) {
  return {
      aliases: ["https"],
      i: "\\S",
      c: [{
          cN: "status",
          b: "^HTTP/[0-9\\.]+",
          e: "$",
          c: [{
              cN: "number",
              b: "\\b\\d{3}\\b"
          }]
      }, {
          cN: "request",
          b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
          rB: !0,
          e: "$",
          c: [{
              cN: "string",
              b: " ",
              e: " ",
              eB: !0,
              eE: !0
          }]
      }, {
          cN: "attribute",
          b: "^\\w",
          e: ": ",
          eE: !0,
          i: "\\n|\\s|=",
          starts: {
              cN: "string",
              e: "$"
          }
      }, {
          b: "\\n\\n",
          starts: {
              sL: "",
              eW: !0
          }
      }]
  }
});
hljs.registerLanguage("less", function(e) {
  var r = "[\\w-]+",
      t = "(" + r + "|@{" + r + "})",
      a = [],
      c = [],
      n = function(e) {
          return {
              cN: "string",
              b: "~?" + e + ".*?" + e
          }
      },
      i = function(e, r, t) {
          return {
              cN: e,
              b: r,
              r: t
          }
      },
      s = function(r, t, a) {
          return e.inherit({
              cN: r,
              b: t + "\\(",
              e: "\\(",
              rB: !0,
              eE: !0,
              r: 0
          }, a)
      },
      b = {
          b: "\\(",
          e: "\\)",
          c: c,
          r: 0
      };
  c.push(e.CLCM, e.CBCM, n("'"), n('"'), e.CSSNM, i("hexcolor", "#[0-9A-Fa-f]+\\b"), s("function", "(url|data-uri)", {
      starts: {
          cN: "string",
          e: "[\\)\\n]",
          eE: !0
      }
  }), s("function", r), b, i("variable", "@@?" + r, 10), i("variable", "@{" + r + "}"), i("built_in", "~?`[^`]*?`"), {
      cN: "attribute",
      b: r + "\\s*:",
      e: ":",
      rB: !0,
      eE: !0
  });
  var o = c.concat({
          b: "{",
          e: "}",
          c: a
      }),
      u = {
          bK: "when",
          eW: !0,
          c: [{
              bK: "and not"
          }].concat(c)
      },
      C = {
          cN: "attribute",
          b: t,
          e: ":",
          eE: !0,
          c: [e.CLCM, e.CBCM],
          i: /\S/,
          starts: {
              e: "[;}]",
              rE: !0,
              c: c,
              i: "[<=$]"
          }
      },
      l = {
          cN: "at_rule",
          b: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
          starts: {
              e: "[;{}]",
              rE: !0,
              c: c,
              r: 0
          }
      },
      d = {
          cN: "variable",
          v: [{
              b: "@" + r + "\\s*:",
              r: 15
          }, {
              b: "@" + r
          }],
          starts: {
              e: "[;}]",
              rE: !0,
              c: o
          }
      },
      p = {
          v: [{
              b: "[\\.#:&\\[]",
              e: "[;{}]"
          }, {
              b: t + "[^;]*{",
              e: "{"
          }],
          rB: !0,
          rE: !0,
          i: "[<='$\"]",
          c: [e.CLCM, e.CBCM, u, i("keyword", "all\\b"), i("variable", "@{" + r + "}"), i("tag", t + "%?", 0), i("id", "#" + t), i("class", "\\." + t, 0), i("keyword", "&", 0), s("pseudo", ":not"), s("keyword", ":extend"), i("pseudo", "::?" + t), {
              cN: "attr_selector",
              b: "\\[",
              e: "\\]"
          }, {
              b: "\\(",
              e: "\\)",
              c: o
          }, {
              b: "!important"
          }]
      };
  return a.push(e.CLCM, e.CBCM, l, d, p, C), {
      cI: !0,
      i: "[=>'/<($\"]",
      c: a
  }
});
hljs.registerLanguage("css", function(e) {
  var c = "[a-zA-Z-][a-zA-Z0-9_-]*",
      a = {
          cN: "function",
          b: c + "\\(",
          rB: !0,
          eE: !0,
          e: "\\("
      },
      r = {
          cN: "rule",
          b: /[A-Z\_\.\-]+\s*:/,
          rB: !0,
          e: ";",
          eW: !0,
          c: [{
              cN: "attribute",
              b: /\S/,
              e: ":",
              eE: !0,
              starts: {
                  cN: "value",
                  eW: !0,
                  eE: !0,
                  c: [a, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                      cN: "hexcolor",
                      b: "#[0-9A-Fa-f]+"
                  }, {
                      cN: "important",
                      b: "!important"
                  }]
              }
          }]
      };
  return {
      cI: !0,
      i: /[=\/|'\$]/,
      c: [e.CBCM, r, {
          cN: "id",
          b: /\#[A-Za-z0-9_-]+/
      }, {
          cN: "class",
          b: /\.[A-Za-z0-9_-]+/
      }, {
          cN: "attr_selector",
          b: /\[/,
          e: /\]/,
          i: "$"
      }, {
          cN: "pseudo",
          b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/
      }, {
          cN: "at_rule",
          b: "@(font-face|page)",
          l: "[a-z-]+",
          k: "font-face page"
      }, {
          cN: "at_rule",
          b: "@",
          e: "[{;]",
          c: [{
              cN: "keyword",
              b: /\S+/
          }, {
              b: /\s/,
              eW: !0,
              eE: !0,
              r: 0,
              c: [a, e.ASM, e.QSM, e.CSSNM]
          }]
      }, {
          cN: "tag",
          b: c,
          r: 0
      }, {
          cN: "rules",
          b: "{",
          e: "}",
          i: /\S/,
          c: [e.CBCM, r]
      }]
  }
});
hljs.registerLanguage("markdown", function(e) {
  return {
      aliases: ["md", "mkdown", "mkd"],
      c: [{
          cN: "header",
          v: [{
              b: "^#{1,6}",
              e: "$"
          }, {
              b: "^.+?\\n[=-]{2,}$"
          }]
      }, {
          b: "<",
          e: ">",
          sL: "xml",
          r: 0
      }, {
          cN: "bullet",
          b: "^([*+-]|(\\d+\\.))\\s+"
      }, {
          cN: "strong",
          b: "[*_]{2}.+?[*_]{2}"
      }, {
          cN: "emphasis",
          v: [{
              b: "\\*.+?\\*"
          }, {
              b: "_.+?_",
              r: 0
          }]
      }, {
          cN: "blockquote",
          b: "^>\\s+",
          e: "$"
      }, {
          cN: "code",
          v: [{
              b: "`.+?`"
          }, {
              b: "^( {4}|	)",
              e: "$",
              r: 0
          }]
      }, {
          cN: "horizontal_rule",
          b: "^[-\\*]{3,}",
          e: "$"
      }, {
          b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
          rB: !0,
          c: [{
              cN: "link_label",
              b: "\\[",
              e: "\\]",
              eB: !0,
              rE: !0,
              r: 0
          }, {
              cN: "link_url",
              b: "\\]\\(",
              e: "\\)",
              eB: !0,
              eE: !0
          }, {
              cN: "link_reference",
              b: "\\]\\[",
              e: "\\]",
              eB: !0,
              eE: !0
          }],
          r: 10
      }, {
          b: "^\\[.+\\]:",
          rB: !0,
          c: [{
              cN: "link_reference",
              b: "\\[",
              e: "\\]:",
              eB: !0,
              eE: !0,
              starts: {
                  cN: "link_url",
                  e: "$"
              }
          }]
      }]
  }
});
hljs.registerLanguage("nginx", function(e) {
  var r = {
          cN: "variable",
          v: [{
              b: /\$\d+/
          }, {
              b: /\$\{/,
              e: /}/
          }, {
              b: "[\\$\\@]" + e.UIR
          }]
      },
      b = {
          eW: !0,
          l: "[a-z/_]+",
          k: {
              built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
          },
          r: 0,
          i: "=>",
          c: [e.HCM, {
              cN: "string",
              c: [e.BE, r],
              v: [{
                  b: /"/,
                  e: /"/
              }, {
                  b: /'/,
                  e: /'/
              }]
          }, {
              cN: "url",
              b: "([a-z]+):/",
              e: "\\s",
              eW: !0,
              eE: !0,
              c: [r]
          }, {
              cN: "regexp",
              c: [e.BE, r],
              v: [{
                  b: "\\s\\^",
                  e: "\\s|{|;",
                  rE: !0
              }, {
                  b: "~\\*?\\s+",
                  e: "\\s|{|;",
                  rE: !0
              }, {
                  b: "\\*(\\.[a-z\\-]+)+"
              }, {
                  b: "([a-z\\-]+\\.)+\\*"
              }]
          }, {
              cN: "number",
              b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
          }, {
              cN: "number",
              b: "\\b\\d+[kKmMgGdshdwy]*\\b",
              r: 0
          }, r]
      };
  return {
      aliases: ["nginxconf"],
      c: [e.HCM, {
          b: e.UIR + "\\s",
          e: ";|{",
          rB: !0,
          c: [{
              cN: "title",
              b: e.UIR,
              starts: b
          }],
          r: 0
      }],
      i: "[^\\s\\}]"
  }
});
hljs.registerLanguage("xml", function(t) {
  var e = "[A-Za-z0-9\\._:-]+",
      s = {
          b: /<\?(php)?(?!\w)/,
          e: /\?>/,
          sL: "php",
          subLanguageMode: "continuous"
      },
      c = {
          eW: !0,
          i: /</,
          r: 0,
          c: [s, {
              cN: "attribute",
              b: e,
              r: 0
          }, {
              b: "=",
              r: 0,
              c: [{
                  cN: "value",
                  c: [s],
                  v: [{
                      b: /"/,
                      e: /"/
                  }, {
                      b: /'/,
                      e: /'/
                  }, {
                      b: /[^\s\/>]+/
                  }]
              }]
          }]
      };
  return {
      aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
      cI: !0,
      c: [{
          cN: "doctype",
          b: "<!DOCTYPE",
          e: ">",
          r: 10,
          c: [{
              b: "\\[",
              e: "\\]"
          }]
      }, t.C("<!--", "-->", {
          r: 10
      }), {
          cN: "cdata",
          b: "<\\!\\[CDATA\\[",
          e: "\\]\\]>",
          r: 10
      }, {
          cN: "tag",
          b: "<style(?=\\s|>|$)",
          e: ">",
          k: {
              title: "style"
          },
          c: [c],
          starts: {
              e: "</style>",
              rE: !0,
              sL: "css"
          }
      }, {
          cN: "tag",
          b: "<script(?=\\s|>|$)",
          e: ">",
          k: {
              title: "script"
          },
          c: [c],
          starts: {
              e: "</script>",
              rE: !0,
              sL: ""
          }
      }, s, {
          cN: "pi",
          b: /<\?\w+/,
          e: /\?>/,
          r: 10
      }, {
          cN: "tag",
          b: "</?",
          e: "/?>",
          c: [{
              cN: "title",
              b: /[^ \/><\n\t]+/,
              r: 0
          }, c]
      }]
  }
});
hljs.registerLanguage("json", function(e) {
  var t = {
          literal: "true false null"
      },
      i = [e.QSM, e.CNM],
      l = {
          cN: "value",
          e: ",",
          eW: !0,
          eE: !0,
          c: i,
          k: t
      },
      c = {
          b: "{",
          e: "}",
          c: [{
              cN: "attribute",
              b: '\\s*"',
              e: '"\\s*:\\s*',
              eB: !0,
              eE: !0,
              c: [e.BE],
              i: "\\n",
              starts: l
          }],
          i: "\\S"
      },
      n = {
          b: "\\[",
          e: "\\]",
          c: [e.inherit(l, {
              cN: null
          })],
          i: "\\S"
      };
  return i.splice(i.length, 0, c, n), {
      c: i,
      k: t,
      i: "\\S"
  }
});
hljs.registerLanguage("bash", function(e) {
  var t = {
          cN: "variable",
          v: [{
              b: /\$[\w\d#@][\w\d_]*/
          }, {
              b: /\$\{(.*?)}/
          }]
      },
      s = {
          cN: "string",
          b: /"/,
          e: /"/,
          c: [e.BE, t, {
              cN: "variable",
              b: /\$\(/,
              e: /\)/,
              c: [e.BE]
          }]
      },
      a = {
          cN: "string",
          b: /'/,
          e: /'/
      };
  return {
      aliases: ["sh", "zsh"],
      l: /-?[a-z\.]+/,
      k: {
          keyword: "if then else elif fi for while in do done case esac function",
          literal: "true false",
          built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
          operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
      },
      c: [{
          cN: "shebang",
          b: /^#![^\n]+sh\s*$/,
          r: 10
      }, {
          cN: "function",
          b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
          rB: !0,
          c: [e.inherit(e.TM, {
              b: /\w[\w\d_]*/
          })],
          r: 0
      }, e.HCM, e.NM, s, a, t]
  }
});
hljs.registerLanguage("diff", function(e) {
  return {
      aliases: ["patch"],
      c: [{
          cN: "chunk",
          r: 10,
          v: [{
              b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
          }, {
              b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
          }, {
              b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
          }]
      }, {
          cN: "header",
          v: [{
              b: /Index: /,
              e: /$/
          }, {
              b: /=====/,
              e: /=====$/
          }, {
              b: /^\-\-\-/,
              e: /$/
          }, {
              b: /^\*{3} /,
              e: /$/
          }, {
              b: /^\+\+\+/,
              e: /$/
          }, {
              b: /\*{5}/,
              e: /\*{5}$/
          }]
      }, {
          cN: "addition",
          b: "^\\+",
          e: "$"
      }, {
          cN: "deletion",
          b: "^\\-",
          e: "$"
      }, {
          cN: "change",
          b: "^\\!",
          e: "$"
      }]
  }
});