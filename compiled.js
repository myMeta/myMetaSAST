if(!window.mymetainjected){window.mymetainjected=true;! function (e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
		if (!e.document) throw new Error("jQueryCustom requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
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
		w = function (e, t) {
			return new w.fn.init(e, t)
		},
		T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	w.fn = w.prototype = {
		jQueryCustom: "3.3.1",
		constructor: w,
		length: 0,
		toArray: function () {
			return o.call(this)
		},
		get: function (e) {
			return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function (e) {
			var t = w.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function (e) {
			return w.each(this, e)
		},
		map: function (e) {
			return this.pushStack(w.map(this, function (t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function () {
			return this.pushStack(o.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor()
		},
		push: s,
		sort: n.sort,
		splice: n.splice
	}, w.extend = w.fn.extend = function () {
		var e, t, n, r, i, o, a = arguments[0] || {},
			s = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
			if (null != (e = arguments[s]))
				for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
		return a
	}, w.extend({
		expando: "jQueryCustom" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (e) {
			throw new Error(e)
		},
		noop: function () {},
		isPlainObject: function (e) {
			var t, n;
			return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
		},
		isEmptyObject: function (e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		globalEval: function (e) {
			m(e)
		},
		each: function (e, t) {
			var n, r = 0;
			if (C(e)) {
				for (n = e.length; r < n; r++)
					if (!1 === t.call(e[r], r, e[r])) break
			} else
				for (r in e)
					if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		trim: function (e) {
			return null == e ? "" : (e + "").replace(T, "")
		},
		makeArray: function (e, t) {
			var n = t || [];
			return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
		},
		inArray: function (e, t, n) {
			return null == t ? -1 : u.call(t, e, n)
		},
		merge: function (e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function (e, t, n) {
			for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]);
			return i
		},
		map: function (e, t, n) {
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
	}), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
		l["[object " + t + "]"] = t.toLowerCase()
	});

	function C(e) {
		var t = !!e && "length" in e && e.length,
			n = x(e);
		return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	var E = function (e) {
		var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
			w = e.document,
			T = 0,
			C = 0,
			E = ae(),
			k = ae(),
			S = ae(),
			D = function (e, t) {
				return e === t && (f = !0), 0
			},
			N = {}.hasOwnProperty,
			A = [],
			j = A.pop,
			q = A.push,
			L = A.push,
			H = A.slice,
			O = function (e, t) {
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
			ee = function (e, t, n) {
				var r = "0x" + t - 65536;
				return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
			},
			te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			ne = function (e, t) {
				return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			re = function () {
				p()
			},
			ie = me(function (e) {
				return !0 === e.disabled && ("form" in e || "label" in e)
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
		} catch (e) {
			L = {
				apply: A.length ? function (e, t) {
					q.apply(e, H.call(t))
				} : function (e, t) {
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
					}
				if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
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
			return function (t) {
				return "input" === t.nodeName.toLowerCase() && t.type === e
			}
		}

		function pe(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function de(e) {
			return function (t) {
				return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
			}
		}

		function he(e) {
			return se(function (t) {
				return t = +t, se(function (n, r) {
					var i, o = e([], n.length, t),
						a = o.length;
					while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}

		function ge(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}
		n = oe.support = {}, o = oe.isXML = function (e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return !!t && "HTML" !== t.nodeName
		}, p = oe.setDocument = function (e) {
			var t, i, a = e ? e.ownerDocument || e : w;
			return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
				return e.className = "i", !e.getAttribute("className")
			}), n.getElementsByTagName = ue(function (e) {
				return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
			}), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
				return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
			}), n.getById ? (r.filter.ID = function (e) {
				var t = e.replace(Z, ee);
				return function (e) {
					return e.getAttribute("id") === t
				}
			}, r.find.ID = function (e, t) {
				if ("undefined" != typeof t.getElementById && g) {
					var n = t.getElementById(e);
					return n ? [n] : []
				}
			}) : (r.filter.ID = function (e) {
				var t = e.replace(Z, ee);
				return function (e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}, r.find.ID = function (e, t) {
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
			}), r.find.TAG = n.getElementsByTagName ? function (e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
			} : function (e, t) {
				var n, r = [],
					i = 0,
					o = t.getElementsByTagName(e);
				if ("*" === e) {
					while (n = o[i++]) 1 === n.nodeType && r.push(n);
					return r
				}
				return o
			}, r.find.CLASS = n.getElementsByClassName && function (e, t) {
				if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
			}, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
				h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
			}), ue(function (e) {
				e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
				var t = d.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
			})), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
				n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
			}), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			} : function (e, t) {
				if (t)
					while (t = t.parentNode)
						if (t === e) return !0;
				return !1
			}, D = t ? function (e, t) {
				if (e === t) return f = !0, 0;
				var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
			} : function (e, t) {
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
		}, oe.matches = function (e, t) {
			return oe(e, null, null, t)
		}, oe.matchesSelector = function (e, t) {
			if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
				var r = m.call(e, t);
				if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
			} catch (e) {}
			return oe(t, d, null, [e]).length > 0
		}, oe.contains = function (e, t) {
			return (e.ownerDocument || e) !== d && p(e), x(e, t)
		}, oe.attr = function (e, t) {
			(e.ownerDocument || e) !== d && p(e);
			var i = r.attrHandle[t.toLowerCase()],
				o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
			return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
		}, oe.escape = function (e) {
			return (e + "").replace(te, ne)
		}, oe.error = function (e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, oe.uniqueSort = function (e) {
			var t, r = [],
				i = 0,
				o = 0;
			if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
				while (t = e[o++]) t === e[o] && (i = r.push(o));
				while (i--) e.splice(r[i], 1)
			}
			return c = null, e
		}, i = oe.getText = function (e) {
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
				ATTR: function (e) {
					return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function (e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
				},
				PSEUDO: function (e) {
					var t, n = !e[6] && e[2];
					return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function (e) {
					var t = e.replace(Z, ee).toLowerCase();
					return "*" === e ? function () {
						return !0
					} : function (e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function (e) {
					var t = E[e + " "];
					return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function (e, t, n) {
					return function (r) {
						var i = oe.attr(r, e);
						return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
					}
				},
				CHILD: function (e, t, n, r, i) {
					var o = "nth" !== e.slice(0, 3),
						a = "last" !== e.slice(-4),
						s = "of-type" === t;
					return 1 === r && 0 === i ? function (e) {
						return !!e.parentNode
					} : function (t, n, u) {
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
				PSEUDO: function (e, t) {
					var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
					return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
						var r, o = i(e, t),
							a = o.length;
						while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
					}) : function (e) {
						return i(e, 0, n)
					}) : i
				}
			},
			pseudos: {
				not: se(function (e) {
					var t = [],
						n = [],
						r = s(e.replace(B, "$1"));
					return r[b] ? se(function (e, t, n, i) {
						var o, a = r(e, null, i, []),
							s = e.length;
						while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
					}) : function (e, i, o) {
						return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
					}
				}),
				has: se(function (e) {
					return function (t) {
						return oe(e, t).length > 0
					}
				}),
				contains: se(function (e) {
					return e = e.replace(Z, ee),
						function (t) {
							return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
						}
				}),
				lang: se(function (e) {
					return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
						function (t) {
							var n;
							do {
								if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
							} while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function (t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function (e) {
					return e === h
				},
				focus: function (e) {
					return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: de(!1),
				disabled: de(!0),
				checked: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function (e) {
					return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
				},
				empty: function (e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function (e) {
					return !r.pseudos.empty(e)
				},
				header: function (e) {
					return Y.test(e.nodeName)
				},
				input: function (e) {
					return G.test(e.nodeName)
				},
				button: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function (e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: he(function () {
					return [0]
				}),
				last: he(function (e, t) {
					return [t - 1]
				}),
				eq: he(function (e, t, n) {
					return [n < 0 ? n + t : n]
				}),
				even: he(function (e, t) {
					for (var n = 0; n < t; n += 2) e.push(n);
					return e
				}),
				odd: he(function (e, t) {
					for (var n = 1; n < t; n += 2) e.push(n);
					return e
				}),
				lt: he(function (e, t, n) {
					for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
					return e
				}),
				gt: he(function (e, t, n) {
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
		ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function (e, t) {
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
			return t.first ? function (t, n, i) {
				while (t = t[r])
					if (1 === t.nodeType || a) return e(t, n, i);
				return !1
			} : function (t, n, u) {
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
			return e.length > 1 ? function (t, n, r) {
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
			return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
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
			for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
					return e === t
				}, s, !0), f = me(function (e) {
					return O(t, e) > -1
				}, s, !0), p = [function (e, n, r) {
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
				}
			return xe(p)
		}

		function Ee(e, t) {
			var n = t.length > 0,
				i = e.length > 0,
				o = function (o, a, s, u, c) {
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
								}
							c && (T = E)
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
		return s = oe.compile = function (e, t) {
			var n, r = [],
				i = [],
				o = S[e + " "];
			if (!o) {
				t || (t = a(e)), n = t.length;
				while (n--)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
				(o = S(e, Ee(i, r))).selector = e
			}
			return o
		}, u = oe.select = function (e, t, n, i) {
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
		}, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
			return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
		}), ue(function (e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || le("type|href|height|width", function (e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), n.attributes && ue(function (e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || le("value", function (e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), ue(function (e) {
			return null == e.getAttribute("disabled")
		}) || le(P, function (e, t, n) {
			var r;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), oe
	}(e);
	w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
	var k = function (e, t, n) {
			var r = [],
				i = void 0 !== n;
			while ((e = e[t]) && 9 !== e.nodeType)
				if (1 === e.nodeType) {
					if (i && w(e).is(n)) break;
					r.push(e)
				}
			return r
		},
		S = function (e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		D = w.expr.match.needsContext;

	function N(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function j(e, t, n) {
		return g(t) ? w.grep(e, function (e, r) {
			return !!t.call(e, r, e) !== n
		}) : t.nodeType ? w.grep(e, function (e) {
			return e === t !== n
		}) : "string" != typeof t ? w.grep(e, function (e) {
			return u.call(t, e) > -1 !== n
		}) : w.filter(t, e, n)
	}
	w.filter = function (e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
			return 1 === e.nodeType
		}))
	}, w.fn.extend({
		find: function (e) {
			var t, n, r = this.length,
				i = this;
			if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
				for (t = 0; t < r; t++)
					if (w.contains(i[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
			return r > 1 ? w.uniqueSort(n) : n
		},
		filter: function (e) {
			return this.pushStack(j(this, e || [], !1))
		},
		not: function (e) {
			return this.pushStack(j(this, e || [], !0))
		},
		is: function (e) {
			return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
		}
	});
	var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(w.fn.init = function (e, t, n) {
		var i, o;
		if (!e) return this;
		if (n = n || q, "string" == typeof e) {
			if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jQueryCustom ? (t || n).find(e) : this.constructor(t).find(e);
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
		has: function (e) {
			var t = w(e, this),
				n = t.length;
			return this.filter(function () {
				for (var e = 0; e < n; e++)
					if (w.contains(this, t[e])) return !0
			})
		},
		closest: function (e, t) {
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
						}
			return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
		},
		index: function (e) {
			return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jQueryCustom ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (e, t) {
			return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	});

	function P(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);
		return e
	}
	w.each({
		parent: function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function (e) {
			return k(e, "parentNode")
		},
		parentsUntil: function (e, t, n) {
			return k(e, "parentNode", n)
		},
		next: function (e) {
			return P(e, "nextSibling")
		},
		prev: function (e) {
			return P(e, "previousSibling")
		},
		nextAll: function (e) {
			return k(e, "nextSibling")
		},
		prevAll: function (e) {
			return k(e, "previousSibling")
		},
		nextUntil: function (e, t, n) {
			return k(e, "nextSibling", n)
		},
		prevUntil: function (e, t, n) {
			return k(e, "previousSibling", n)
		},
		siblings: function (e) {
			return S((e.parentNode || {}).firstChild, e)
		},
		children: function (e) {
			return S(e.firstChild)
		},
		contents: function (e) {
			return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
		}
	}, function (e, t) {
		w.fn[e] = function (n, r) {
			var i = w.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
		}
	});
	var M = /[^\x20\t\r\n\f]+/g;

	function R(e) {
		var t = {};
		return w.each(e.match(M) || [], function (e, n) {
			t[n] = !0
		}), t
	}
	w.Callbacks = function (e) {
		e = "string" == typeof e ? R(e) : w.extend({}, e);
		var t, n, r, i, o = [],
			a = [],
			s = -1,
			u = function () {
				for (i = i || e.once, r = t = !0; a.length; s = -1) {
					n = a.shift();
					while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
				}
				e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
			},
			l = {
				add: function () {
					return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
						w.each(n, function (n, r) {
							g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
						})
					}(arguments), n && !t && u()), this
				},
				remove: function () {
					return w.each(arguments, function (e, t) {
						var n;
						while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
					}), this
				},
				has: function (e) {
					return e ? w.inArray(e, o) > -1 : o.length > 0
				},
				empty: function () {
					return o && (o = []), this
				},
				disable: function () {
					return i = a = [], o = n = "", this
				},
				disabled: function () {
					return !o
				},
				lock: function () {
					return i = a = [], n || t || (o = n = ""), this
				},
				locked: function () {
					return !!i
				},
				fireWith: function (e, n) {
					return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
				},
				fire: function () {
					return l.fireWith(this, arguments), this
				},
				fired: function () {
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
		Deferred: function (t) {
			var n = [
					["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
					["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
				],
				r = "pending",
				i = {
					state: function () {
						return r
					},
					always: function () {
						return o.done(arguments).fail(arguments), this
					},
					"catch": function (e) {
						return i.then(null, e)
					},
					pipe: function () {
						var e = arguments;
						return w.Deferred(function (t) {
							w.each(n, function (n, r) {
								var i = g(e[r[4]]) && e[r[4]];
								o[r[1]](function () {
									var e = i && i.apply(this, arguments);
									e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					then: function (t, r, i) {
						var o = 0;

						function a(t, n, r, i) {
							return function () {
								var s = this,
									u = arguments,
									l = function () {
										var e, l;
										if (!(t < o)) {
											if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
											l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
										}
									},
									c = i ? l : function () {
										try {
											l()
										} catch (e) {
											w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
										}
									};
								t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
							}
						}
						return w.Deferred(function (e) {
							n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
						}).promise()
					},
					promise: function (e) {
						return null != e ? w.extend(e, i) : i
					}
				},
				o = {};
			return w.each(n, function (e, t) {
				var a = t[2],
					s = t[5];
				i[t[1]] = a.add, s && a.add(function () {
					r = s
				}, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
					return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
				}, o[t[0] + "With"] = a.fireWith
			}), i.promise(o), t && t.call(o, o), o
		},
		when: function (e) {
			var t = arguments.length,
				n = t,
				r = Array(n),
				i = o.call(arguments),
				a = w.Deferred(),
				s = function (e) {
					return function (n) {
						r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
					}
				};
			if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
			while (n--) $(i[n], s(n), a.reject);
			return a.promise()
		}
	});
	var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	w.Deferred.exceptionHook = function (t, n) {
		e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQueryCustom.Deferred exception: " + t.message, t.stack, n)
	}, w.readyException = function (t) {
		e.setTimeout(function () {
			throw t
		})
	};
	var F = w.Deferred();
	w.fn.ready = function (e) {
		return F.then(e)["catch"](function (e) {
			w.readyException(e)
		}), this
	}, w.extend({
		isReady: !1,
		readyWait: 1,
		ready: function (e) {
			(!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
		}
	}), w.ready.then = F.then;

	function _() {
		r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
	}
	"complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
	var z = function (e, t, n, r, i, o, a) {
			var s = 0,
				u = e.length,
				l = null == n;
			if ("object" === x(n)) {
				i = !0;
				for (s in n) z(e, t, s, n[s], !0, o, a)
			} else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
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
	var Y = function (e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	};

	function Q() {
		this.expando = w.expando + Q.uid++
	}
	Q.uid = 1, Q.prototype = {
		cache: function (e) {
			var t = e[this.expando];
			return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function (e, t, n) {
			var r, i = this.cache(e);
			if ("string" == typeof t) i[G(t)] = n;
			else
				for (r in t) i[G(r)] = t[r];
			return i
		},
		get: function (e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
		},
		access: function (e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function (e, t) {
			var n, r = e[this.expando];
			if (void 0 !== r) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
					while (n--) delete r[t[n]]
				}(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function (e) {
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
			if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
				try {
					n = te(n)
				} catch (e) {}
				K.set(e, t, n)
			} else n = void 0;
		return n
	}
	w.extend({
		hasData: function (e) {
			return K.hasData(e) || J.hasData(e)
		},
		data: function (e, t, n) {
			return K.access(e, t, n)
		},
		removeData: function (e, t) {
			K.remove(e, t)
		},
		_data: function (e, t, n) {
			return J.access(e, t, n)
		},
		_removeData: function (e, t) {
			J.remove(e, t)
		}
	}), w.fn.extend({
		data: function (e, t) {
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
			return "object" == typeof e ? this.each(function () {
				K.set(this, e)
			}) : z(this, function (t) {
				var n;
				if (o && void 0 === t) {
					if (void 0 !== (n = K.get(o, e))) return n;
					if (void 0 !== (n = ne(o, e))) return n
				} else this.each(function () {
					K.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function (e) {
			return this.each(function () {
				K.remove(this, e)
			})
		}
	}), w.extend({
		queue: function (e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
		},
		dequeue: function (e, t) {
			t = t || "fx";
			var n = w.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = w._queueHooks(e, t),
				a = function () {
					w.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function (e, t) {
			var n = t + "queueHooks";
			return J.get(e, n) || J.access(e, n, {
				empty: w.Callbacks("once memory").add(function () {
					J.remove(e, [t + "queue", n])
				})
			})
		}
	}), w.fn.extend({
		queue: function (e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
				var n = w.queue(this, e, t);
				w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
			})
		},
		dequeue: function (e) {
			return this.each(function () {
				w.dequeue(this, e)
			})
		},
		clearQueue: function (e) {
			return this.queue(e || "fx", [])
		},
		promise: function (e, t) {
			var n, r = 1,
				i = w.Deferred(),
				o = this,
				a = this.length,
				s = function () {
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
		ae = function (e, t) {
			return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
		},
		se = function (e, t, n, r) {
			var i, o, a = {};
			for (o in t) a[o] = e.style[o], e.style[o] = t[o];
			i = n.apply(e, r || []);
			for (o in t) e.style[o] = a[o];
			return i
		};

	function ue(e, t, n, r) {
		var i, o, a = 20,
			s = r ? function () {
				return r.cur()
			} : function () {
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
		show: function () {
			return fe(this, !0)
		},
		hide: function () {
			return fe(this)
		},
		toggle: function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
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
	}! function () {
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
		return 1 === o && (a = i, (i = function (e) {
			return w().off(e), a.apply(this, arguments)
		}).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
			w.event.add(this, t, i, r, n)
		})
	}
	w.event = {
		global: {},
		add: function (e, t, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
			if (y) {
				n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
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
		remove: function (e, t, n, r, i) {
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
		dispatch: function (e) {
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
		handlers: function (e, t) {
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
					}
			return l = this, u < t.length && s.push({
				elem: l,
				handlers: t.slice(u)
			}), s
		},
		addProp: function (e, t) {
			Object.defineProperty(w.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: g(t) ? function () {
					if (this.originalEvent) return t(this.originalEvent)
				} : function () {
					if (this.originalEvent) return this.originalEvent[e]
				},
				set: function (t) {
					Object.defineProperty(this, e, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function (e) {
			return e[w.expando] ? e : new w.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== Se() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					if (this === Se() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
				},
				_default: function (e) {
					return N(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, w.removeEvent = function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, w.Event = function (e, t) {
		if (!(this instanceof w.Event)) return new w.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
	}, w.Event.prototype = {
		constructor: w.Event,
		isDefaultPrevented: ke,
		isPropagationStopped: ke,
		isImmediatePropagationStopped: ke,
		isSimulated: !1,
		preventDefault: function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function () {
			var e = this.originalEvent;
			this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function () {
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
		which: function (e) {
			var t = e.button;
			return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, w.event.addProp), w.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (e, t) {
		w.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function (e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), w.fn.extend({
		on: function (e, t, n, r) {
			return De(this, e, t, n, r)
		},
		one: function (e, t, n, r) {
			return De(this, e, t, n, r, 1)
		},
		off: function (e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
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
		if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
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
		htmlPrefilter: function (e) {
			return e.replace(Ne, "<$1></$2>")
		},
		clone: function (e, t, n) {
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
		cleanData: function (e) {
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
		detach: function (e) {
			return Ie(this, e, !0)
		},
		remove: function (e) {
			return Ie(this, e)
		},
		text: function (e) {
			return z(this, function (e) {
				return void 0 === e ? w.text(this) : this.empty().each(function () {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function () {
			return Re(this, arguments, function (e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
			})
		},
		prepend: function () {
			return Re(this, arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Le(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function () {
			return Re(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function () {
			return Re(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function () {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
			return this
		},
		clone: function (e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function () {
				return w.clone(this, e, t)
			})
		},
		html: function (e) {
			return z(this, function (e) {
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
		replaceWith: function () {
			var e = [];
			return Re(this, arguments, function (t) {
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
	}, function (e, t) {
		w.fn[e] = function (e) {
			for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
			return this.pushStack(r)
		}
	});
	var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
		$e = function (t) {
			var n = t.ownerDocument.defaultView;
			return n && n.opener || (n = e), n.getComputedStyle(t)
		},
		Be = new RegExp(oe.join("|"), "i");
	! function () {
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
			boxSizingReliable: function () {
				return t(), o
			},
			pixelBoxStyles: function () {
				return t(), s
			},
			pixelPosition: function () {
				return t(), i
			},
			reliableMarginLeft: function () {
				return t(), u
			},
			scrollboxSize: function () {
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
			get: function () {
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
				get: function (e, t) {
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
		style: function (e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, a, s = G(t),
					u = Xe.test(t),
					l = e.style;
				if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
				"string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
			}
		},
		css: function (e, t, n, r) {
			var i, o, a, s = G(t);
			return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
		}
	}), w.each(["height", "width"], function (e, t) {
		w.cssHooks[t] = {
			get: function (e, n, r) {
				if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
					return et(e, t, r)
				})
			},
			set: function (e, n, r) {
				var i, o = $e(e),
					a = "border-box" === w.css(e, "boxSizing", !1, o),
					s = r && Ze(e, t, r, a, o);
				return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
			}
		}
	}), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
		if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
			marginLeft: 0
		}, function () {
			return e.getBoundingClientRect().left
		})) + "px"
	}), w.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (e, t) {
		w.cssHooks[e + t] = {
			expand: function (n) {
				for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, "margin" !== e && (w.cssHooks[e + t].set = Ke)
	}), w.fn.extend({
		css: function (e, t) {
			return z(this, function (e, t, n) {
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
		init: function (e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
		},
		cur: function () {
			var e = tt.propHooks[this.prop];
			return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
		},
		run: function (e) {
			var t, n = tt.propHooks[this.prop];
			return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
		}
	}, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
		_default: {
			get: function (e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function (e) {
				w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, w.easing = {
		linear: function (e) {
			return e
		},
		swing: function (e) {
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
		return e.setTimeout(function () {
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
		n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
			a.unqueued || s()
		}), a.unqueued++, p.always(function () {
			p.always(function () {
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
			}
		if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
			f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
				h.display = l
			}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
				h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
			})), u = !1;
			for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
				display: l
			}), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
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
			s = w.Deferred().always(function () {
				delete u.elem
			}),
			u = function () {
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
				createTween: function (t, n) {
					var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r
				},
				stop: function (t) {
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
				"*": [function (e, t) {
					var n = this.createTween(e, t);
					return ue(n.elem, e, ie.exec(t), n), n
				}]
			},
			tweener: function (e, t) {
				g(e) ? (t = e, e = ["*"]) : e = e.match(M);
				for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
			},
			prefilters: [ct],
			prefilter: function (e, t) {
				t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
			}
		}), w.speed = function (e, t, n) {
			var r = e && "object" == typeof e ? w.extend({}, e) : {
				complete: n || !n && t || g(e) && e,
				duration: e,
				easing: n && t || t && !g(t) && t
			};
			return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
				g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
			}, r
		}, w.fn.extend({
			fadeTo: function (e, t, n, r) {
				return this.filter(ae).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function (e, t, n, r) {
				var i = w.isEmptyObject(e),
					o = w.speed(t, n, r),
					a = function () {
						var t = pt(this, w.extend({}, e), o);
						(i || J.get(this, "finish")) && t.stop(!0)
					};
				return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function (e, t, n) {
				var r = function (e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
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
			finish: function (e) {
				return !1 !== e && (e = e || "fx"), this.each(function () {
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
		}), w.each(["toggle", "show", "hide"], function (e, t) {
			var n = w.fn[t];
			w.fn[t] = function (e, r, i) {
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
		}, function (e, t) {
			w.fn[e] = function (e, n, r) {
				return this.animate(t, e, n, r)
			}
		}), w.timers = [], w.fx.tick = function () {
			var e, t = 0,
				n = w.timers;
			for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
			n.length || w.fx.stop(), nt = void 0
		}, w.fx.timer = function (e) {
			w.timers.push(e), w.fx.start()
		}, w.fx.interval = 13, w.fx.start = function () {
			rt || (rt = !0, at())
		}, w.fx.stop = function () {
			rt = null
		}, w.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, w.fn.delay = function (t, n) {
			return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
				var i = e.setTimeout(n, t);
				r.stop = function () {
					e.clearTimeout(i)
				}
			})
		},
		function () {
			var e = r.createElement("input"),
				t = r.createElement("select").appendChild(r.createElement("option"));
			e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
		}();
	var dt, ht = w.expr.attrHandle;
	w.fn.extend({
		attr: function (e, t) {
			return z(this, w.attr, e, t, arguments.length > 1)
		},
		removeAttr: function (e) {
			return this.each(function () {
				w.removeAttr(this, e)
			})
		}
	}), w.extend({
		attr: function (e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
		},
		attrHooks: {
			type: {
				set: function (e, t) {
					if (!h.radioValue && "radio" === t && N(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function (e, t) {
			var n, r = 0,
				i = t && t.match(M);
			if (i && 1 === e.nodeType)
				while (n = i[r++]) e.removeAttribute(n)
		}
	}), dt = {
		set: function (e, t, n) {
			return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
		var n = ht[t] || w.find.attr;
		ht[t] = function (e, t, r) {
			var i, o, a = t.toLowerCase();
			return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
		}
	});
	var gt = /^(?:input|select|textarea|button)$/i,
		yt = /^(?:a|area)$/i;
	w.fn.extend({
		prop: function (e, t) {
			return z(this, w.prop, e, t, arguments.length > 1)
		},
		removeProp: function (e) {
			return this.each(function () {
				delete this[w.propFix[e] || e]
			})
		}
	}), w.extend({
		prop: function (e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function (e) {
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
		get: function (e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function (e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
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
		addClass: function (e) {
			var t, n, r, i, o, a, s, u = 0;
			if (g(e)) return this.each(function (t) {
				w(this).addClass(e.call(this, t, mt(this)))
			});
			if ((t = xt(e)).length)
				while (n = this[u++])
					if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
						a = 0;
						while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
						i !== (s = vt(r)) && n.setAttribute("class", s)
					}
			return this
		},
		removeClass: function (e) {
			var t, n, r, i, o, a, s, u = 0;
			if (g(e)) return this.each(function (t) {
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
					}
			return this
		},
		toggleClass: function (e, t) {
			var n = typeof e,
				r = "string" === n || Array.isArray(e);
			return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
				w(this).toggleClass(e.call(this, n, mt(this), t), t)
			}) : this.each(function () {
				var t, i, o, a;
				if (r) {
					i = 0, o = w(this), a = xt(e);
					while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
				} else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
			})
		},
		hasClass: function (e) {
			var t, n, r = 0;
			t = " " + e + " ";
			while (n = this[r++])
				if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
			return !1
		}
	});
	var bt = /\r/g;
	w.fn.extend({
		val: function (e) {
			var t, n, r, i = this[0]; {
				if (arguments.length) return r = g(e), this.each(function (n) {
					var i;
					1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
						return null == e ? "" : e + ""
					})), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
				});
				if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n
			}
		}
	}), w.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = w.find.attr(e, "value");
					return null != t ? t : vt(w.text(e))
				}
			},
			select: {
				get: function (e) {
					var t, n, r, i = e.options,
						o = e.selectedIndex,
						a = "select-one" === e.type,
						s = a ? null : [],
						u = a ? o + 1 : i.length;
					for (r = o < 0 ? u : a ? o : 0; r < u; r++)
						if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
							if (t = w(n).val(), a) return t;
							s.push(t)
						}
					return s
				},
				set: function (e, t) {
					var n, r, i = e.options,
						o = w.makeArray(t),
						a = i.length;
					while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), w.each(["radio", "checkbox"], function () {
		w.valHooks[this] = {
			set: function (e, t) {
				if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
			}
		}, h.checkOn || (w.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), h.focusin = "onfocusin" in e;
	var wt = /^(?:focusinfocus|focusoutblur)$/,
		Tt = function (e) {
			e.stopPropagation()
		};
	w.extend(w.event, {
		trigger: function (t, n, i, o) {
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
		simulate: function (e, t, n) {
			var r = w.extend(new w.Event, n, {
				type: e,
				isSimulated: !0
			});
			w.event.trigger(r, null, t)
		}
	}), w.fn.extend({
		trigger: function (e, t) {
			return this.each(function () {
				w.event.trigger(e, t, this)
			})
		},
		triggerHandler: function (e, t) {
			var n = this[0];
			if (n) return w.event.trigger(e, t, n, !0)
		}
	}), h.focusin || w.each({
		focus: "focusin",
		blur: "focusout"
	}, function (e, t) {
		var n = function (e) {
			w.event.simulate(t, e.target, w.event.fix(e))
		};
		w.event.special[t] = {
			setup: function () {
				var r = this.ownerDocument || this,
					i = J.access(r, t);
				i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
			},
			teardown: function () {
				var r = this.ownerDocument || this,
					i = J.access(r, t) - 1;
				i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
			}
		}
	});
	var Ct = e.location,
		Et = Date.now(),
		kt = /\?/;
	w.parseXML = function (t) {
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
		if (Array.isArray(t)) w.each(t, function (t, i) {
			n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== x(t)) r(e, t);
		else
			for (i in t) jt(e + "[" + i + "]", t[i], n, r)
	}
	w.param = function (e, t) {
		var n, r = [],
			i = function (e, t) {
				var n = g(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (Array.isArray(e) || e.jQueryCustom && !w.isPlainObject(e)) w.each(e, function () {
			i(this.name, this.value)
		});
		else
			for (n in e) jt(n, e[n], t, i);
		return r.join("&")
	}, w.fn.extend({
		serialize: function () {
			return w.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var e = w.prop(this, "elements");
				return e ? w.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
			}).map(function (e, t) {
				var n = w(this).val();
				return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
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
		return function (t, n) {
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
			return i[s] = !0, w.each(e[s] || [], function (e, s) {
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
				}
		if (u[0] in n) o = u[0];
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
					}
			if (!0 !== a)
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
		ajaxSetup: function (e, t) {
			return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
		},
		ajaxPrefilter: Ft(It),
		ajaxTransport: Ft(Wt),
		ajax: function (t, n) {
			"object" == typeof t && (n = t, t = void 0), n = n || {};
			var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
				g = h.context || h,
				y = h.context && (g.nodeType || g.jQueryCustom) ? w(g) : w.event,
				v = w.Deferred(),
				m = w.Callbacks("once memory"),
				x = h.statusCode || {},
				b = {},
				T = {},
				C = "canceled",
				E = {
					readyState: 0,
					getResponseHeader: function (e) {
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
					getAllResponseHeaders: function () {
						return c ? a : null
					},
					setRequestHeader: function (e, t) {
						return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
					},
					overrideMimeType: function (e) {
						return null == c && (h.mimeType = e), this
					},
					statusCode: function (e) {
						var t;
						if (e)
							if (c) E.always(e[E.status]);
							else
								for (t in e) x[t] = [x[t], e[t]];
						return this
					},
					abort: function (e) {
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
				h.async && h.timeout > 0 && (u = e.setTimeout(function () {
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
		getJSON: function (e, t, n) {
			return w.get(e, t, n, "json")
		},
		getScript: function (e, t) {
			return w.get(e, void 0, t, "script")
		}
	}), w.each(["get", "post"], function (e, t) {
		w[t] = function (e, n, r, i) {
			return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
				url: e,
				type: t,
				dataType: i,
				data: n,
				success: r
			}, w.isPlainObject(e) && e))
		}
	}), w._evalUrl = function (e) {
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
		wrapAll: function (e) {
			var t;
			return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
				var e = this;
				while (e.firstElementChild) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function (e) {
			return g(e) ? this.each(function (t) {
				w(this).wrapInner(e.call(this, t))
			}) : this.each(function () {
				var t = w(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function (e) {
			var t = g(e);
			return this.each(function (n) {
				w(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function (e) {
			return this.parent(e).not("body").each(function () {
				w(this).replaceWith(this.childNodes)
			}), this
		}
	}), w.expr.pseudos.hidden = function (e) {
		return !w.expr.pseudos.visible(e)
	}, w.expr.pseudos.visible = function (e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, w.ajaxSettings.xhr = function () {
		try {
			return new e.XMLHttpRequest
		} catch (e) {}
	};
	var Vt = {
			0: 200,
			1223: 204
		},
		Gt = w.ajaxSettings.xhr();
	h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
		var n, r;
		if (h.cors || Gt && !t.crossDomain) return {
			send: function (i, o) {
				var a, s = t.xhr();
				if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for (a in t.xhrFields) s[a] = t.xhrFields[a];
				t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
				for (a in i) s.setRequestHeader(a, i[a]);
				n = function (e) {
					return function () {
						n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
							binary: s.response
						} : {
							text: s.responseText
						}, s.getAllResponseHeaders()))
					}
				}, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
					4 === s.readyState && e.setTimeout(function () {
						n && r()
					})
				}, n = n("abort");
				try {
					s.send(t.hasContent && t.data || null)
				} catch (e) {
					if (n) throw e
				}
			},
			abort: function () {
				n && n()
			}
		}
	}), w.ajaxPrefilter(function (e) {
		e.crossDomain && (e.contents.script = !1)
	}), w.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function (e) {
				return w.globalEval(e), e
			}
		}
	}), w.ajaxPrefilter("script", function (e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), w.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var t, n;
			return {
				send: function (i, o) {
					t = w("<script>").prop({
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function (e) {
						t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
					}), r.head.appendChild(t[0])
				},
				abort: function () {
					n && n()
				}
			}
		}
	});
	var Yt = [],
		Qt = /(=)\?(?=&|$)|\?\?/;
	w.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var e = Yt.pop() || w.expando + "_" + Et++;
			return this[e] = !0, e
		}
	}), w.ajaxPrefilter("json jsonp", function (t, n, r) {
		var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
		if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
			return a || w.error(i + " was not called"), a[0]
		}, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
			a = arguments
		}, r.always(function () {
			void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
		}), "script"
	}), h.createHTMLDocument = function () {
		var e = r.implementation.createHTMLDocument("").body;
		return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
	}(), w.parseHTML = function (e, t, n) {
		if ("string" != typeof e) return [];
		"boolean" == typeof t && (n = t, t = !1);
		var i, o, a;
		return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
	}, w.fn.load = function (e, t, n) {
		var r, i, o, a = this,
			s = e.indexOf(" ");
		return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
			url: e,
			type: i || "GET",
			dataType: "html",
			data: t
		}).done(function (e) {
			o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
		}).always(n && function (e, t) {
			a.each(function () {
				n.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		w.fn[t] = function (e) {
			return this.on(t, e)
		}
	}), w.expr.pseudos.animated = function (e) {
		return w.grep(w.timers, function (t) {
			return e === t.elem
		}).length
	}, w.offset = {
		setOffset: function (e, t, n) {
			var r, i, o, a, s, u, l, c = w.css(e, "position"),
				f = w(e),
				p = {};
			"static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
		}
	}, w.fn.extend({
		offset: function (e) {
			if (arguments.length) return void 0 === e ? this : this.each(function (t) {
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
		position: function () {
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
		offsetParent: function () {
			return this.map(function () {
				var e = this.offsetParent;
				while (e && "static" === w.css(e, "position")) e = e.offsetParent;
				return e || be
			})
		}
	}), w.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (e, t) {
		var n = "pageYOffset" === t;
		w.fn[e] = function (r) {
			return z(this, function (e, r, i) {
				var o;
				if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
				o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
			}, e, r, arguments.length)
		}
	}), w.each(["top", "left"], function (e, t) {
		w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
			if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
		})
	}), w.each({
		Height: "height",
		Width: "width"
	}, function (e, t) {
		w.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function (n, r) {
			w.fn[r] = function (i, o) {
				var a = arguments.length && (n || "boolean" != typeof i),
					s = n || (!0 === i || !0 === o ? "margin" : "border");
				return z(this, function (t, n, i) {
					var o;
					return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
				}, t, a ? i : void 0, a)
			}
		})
	}), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
		w.fn[t] = function (e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), w.fn.extend({
		hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), w.fn.extend({
		bind: function (e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function (e, t) {
			return this.off(e, null, t)
		},
		delegate: function (e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function (e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	}), w.proxy = function (e, t) {
		var n, r, i;
		if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function () {
			return e.apply(t || this, r.concat(o.call(arguments)))
		}, i.guid = e.guid = e.guid || w.guid++, i
	}, w.holdReady = function (e) {
		e ? w.readyWait++ : w.ready(!0)
	}, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
		var t = w.type(e);
		return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, "function" == typeof define && define.amd && define("jQueryCustom", [], function () {
		return w
	});
	var Jt = e.jQueryCustom,
		Kt = e.$;
	return w.noConflict = function (t) {
		return e.$ === w && (e.$ = Kt), t && e.jQueryCustom === w && (e.jQueryCustom = Jt), w
	}, t || (e.jQueryCustom = e.$ = w), w
});
jQueryCustom.noConflict();
(function (t) {
	"function" == typeof define && define.amd ? define(["jQueryCustom"], t) : t(jQueryCustom)
})(function (t) {
	function e(t) {
		for (var e = t.css("visibility");
			"inherit" === e;) t = t.parent(), e = t.css("visibility");
		return "hidden" !== e
	}

	function i(t) {
		for (var e, i; t.length && t[0] !== document;) {
			if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
			t = t.parent()
		}
		return 0
	}

	function s() {
		this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: !1,
			showMonthAfterYear: !1,
			yearSuffix: ""
		}, this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: !1,
			hideIfNoPrevNext: !1,
			navigationAsDateFormat: !1,
			gotoCurrent: !1,
			changeMonth: !1,
			changeYear: !1,
			yearRange: "c-10:c+10",
			showOtherMonths: !1,
			selectOtherMonths: !1,
			showWeek: !1,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: !0,
			showButtonPanel: !1,
			autoSize: !1,
			disabled: !1
		}, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
	}

	function n(e) {
		var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return e.on("mouseout", i, function () {
			t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
		}).on("mouseover", i, o)
	}

	function o() {
		t.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
	}

	function a(e, i) {
		t.extend(e, i);
		for (var s in i) null == i[s] && (e[s] = i[s]);
		return e
	}

	function r(t) {
		return function () {
			var e = this.element.val();
			t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
		}
	}
	t.ui = t.ui || {}, t.ui.version = "1.12.1";
	var h = 0,
		l = Array.prototype.slice;
	t.cleanData = function (e) {
			return function (i) {
				var s, n, o;
				for (o = 0; null != (n = i[o]); o++) try {
					s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove")
				} catch (a) {}
				e(i)
			}
		}(t.cleanData), t.widget = function (e, i, s) {
			var n, o, a, r = {},
				h = e.split(".")[0];
			e = e.split(".")[1];
			var l = h + "-" + e;
			return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][l.toLowerCase()] = function (e) {
				return !!t.data(e, l)
			}, t[h] = t[h] || {}, n = t[h][e], o = t[h][e] = function (t, e) {
				return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e)
			}, t.extend(o, n, {
				version: s.version,
				_proto: t.extend({}, s),
				_childConstructors: []
			}), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, function (e, s) {
				return t.isFunction(s) ? (r[e] = function () {
					function t() {
						return i.prototype[e].apply(this, arguments)
					}

					function n(t) {
						return i.prototype[e].apply(this, t)
					}
					return function () {
						var e, i = this._super,
							o = this._superApply;
						return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
					}
				}(), void 0) : (r[e] = s, void 0)
			}), o.prototype = t.widget.extend(a, {
				widgetEventPrefix: n ? a.widgetEventPrefix || e : e
			}, r, {
				constructor: o,
				namespace: h,
				widgetName: e,
				widgetFullName: l
			}), n ? (t.each(n._childConstructors, function (e, i) {
				var s = i.prototype;
				t.widget(s.namespace + "." + s.widgetName, o, i._proto)
			}), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
		}, t.widget.extend = function (e) {
			for (var i, s, n = l.call(arguments, 1), o = 0, a = n.length; a > o; o++)
				for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
			return e
		}, t.widget.bridge = function (e, i) {
			var s = i.prototype.widgetFullName || e;
			t.fn[e] = function (n) {
				var o = "string" == typeof n,
					a = l.call(arguments, 1),
					r = this;
				return o ? this.length || "instance" !== n ? this.each(function () {
					var i, o = t.data(this, s);
					return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jQueryCustom ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + n + "'")
				}) : r = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function () {
					var e = t.data(this, s);
					e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this))
				})), r
			}
		}, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
			widgetName: "widget",
			widgetEventPrefix: "",
			defaultElement: "<div>",
			options: {
				classes: {},
				disabled: !1,
				create: null
			},
			_createWidget: function (e, i) {
				i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
					remove: function (t) {
						t.target === i && this.destroy()
					}
				}), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
			},
			_getCreateOptions: function () {
				return {}
			},
			_getCreateEventData: t.noop,
			_create: t.noop,
			_init: t.noop,
			destroy: function () {
				var e = this;
				this._destroy(), t.each(this.classesElementLookup, function (t, i) {
					e._removeClass(i, t)
				}), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
			},
			_destroy: t.noop,
			widget: function () {
				return this.element
			},
			option: function (e, i) {
				var s, n, o, a = e;
				if (0 === arguments.length) return t.widget.extend({}, this.options);
				if ("string" == typeof e)
					if (a = {}, s = e.split("."), e = s.shift(), s.length) {
						for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
						if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
						n[e] = i
					} else {
						if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
						a[e] = i
					}
				return this._setOptions(a), this
			},
			_setOptions: function (t) {
				var e;
				for (e in t) this._setOption(e, t[e]);
				return this
			},
			_setOption: function (t, e) {
				return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
			},
			_setOptionClasses: function (e) {
				var i, s, n;
				for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
					element: s,
					keys: i,
					classes: e,
					add: !0
				})))
			},
			_setOptionDisabled: function (t) {
				this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
			},
			enable: function () {
				return this._setOptions({
					disabled: !1
				})
			},
			disable: function () {
				return this._setOptions({
					disabled: !0
				})
			},
			_classes: function (e) {
				function i(i, o) {
					var a, r;
					for (r = 0; i.length > r; r++) a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]])
				}
				var s = [],
					n = this;
				return e = t.extend({
					element: this.element,
					classes: this.options.classes || {}
				}, e), this._on(e.element, {
					remove: "_untrackClassesElement"
				}), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
			},
			_untrackClassesElement: function (e) {
				var i = this;
				t.each(i.classesElementLookup, function (s, n) {
					-1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
				})
			},
			_removeClass: function (t, e, i) {
				return this._toggleClass(t, e, i, !1)
			},
			_addClass: function (t, e, i) {
				return this._toggleClass(t, e, i, !0)
			},
			_toggleClass: function (t, e, i, s) {
				s = "boolean" == typeof s ? s : i;
				var n = "string" == typeof t || null === t,
					o = {
						extra: n ? e : i,
						keys: n ? t : e,
						element: n ? this.element : t,
						add: s
					};
				return o.element.toggleClass(this._classes(o), s), this
			},
			_on: function (e, i, s) {
				var n, o = this;
				"boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, a) {
					function r() {
						return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
					}
					"string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
					var h = s.match(/^([\w:-]*)\s*(.*)$/),
						l = h[1] + o.eventNamespace,
						c = h[2];
					c ? n.on(l, c, r) : i.on(l, r)
				})
			},
			_off: function (e, i) {
				i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
			},
			_delay: function (t, e) {
				function i() {
					return ("string" == typeof t ? s[t] : t).apply(s, arguments)
				}
				var s = this;
				return setTimeout(i, e || 0)
			},
			_hoverable: function (e) {
				this.hoverable = this.hoverable.add(e), this._on(e, {
					mouseenter: function (e) {
						this._addClass(t(e.currentTarget), null, "ui-state-hover")
					},
					mouseleave: function (e) {
						this._removeClass(t(e.currentTarget), null, "ui-state-hover")
					}
				})
			},
			_focusable: function (e) {
				this.focusable = this.focusable.add(e), this._on(e, {
					focusin: function (e) {
						this._addClass(t(e.currentTarget), null, "ui-state-focus")
					},
					focusout: function (e) {
						this._removeClass(t(e.currentTarget), null, "ui-state-focus")
					}
				})
			},
			_trigger: function (e, i, s) {
				var n, o, a = this.options[e];
				if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
					for (n in o) n in i || (i[n] = o[n]);
				return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
			}
		}, t.each({
			show: "fadeIn",
			hide: "fadeOut"
		}, function (e, i) {
			t.Widget.prototype["_" + e] = function (s, n, o) {
				"string" == typeof n && (n = {
					effect: n
				});
				var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
				n = n || {}, "number" == typeof n && (n = {
					duration: n
				}), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
					t(this)[e](), o && o.call(s[0]), i()
				})
			}
		}), t.widget,
		function () {
			function e(t, e, i) {
				return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
			}

			function i(e, i) {
				return parseInt(t.css(e, i), 10) || 0
			}

			function s(e) {
				var i = e[0];
				return 9 === i.nodeType ? {
					width: e.width(),
					height: e.height(),
					offset: {
						top: 0,
						left: 0
					}
				} : t.isWindow(i) ? {
					width: e.width(),
					height: e.height(),
					offset: {
						top: e.scrollTop(),
						left: e.scrollLeft()
					}
				} : i.preventDefault ? {
					width: 0,
					height: 0,
					offset: {
						top: i.pageY,
						left: i.pageX
					}
				} : {
					width: e.outerWidth(),
					height: e.outerHeight(),
					offset: e.offset()
				}
			}
			var n, o = Math.max,
				a = Math.abs,
				r = /left|center|right/,
				h = /top|center|bottom/,
				l = /[\+\-]\d+(\.[\d]+)?%?/,
				c = /^\w+/,
				u = /%$/,
				d = t.fn.position;
			t.position = {
				scrollbarWidth: function () {
					if (void 0 !== n) return n;
					var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
						o = s.children()[0];
					return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i
				},
				getScrollInfo: function (e) {
					var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
						s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
						n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
						o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
					return {
						width: o ? t.position.scrollbarWidth() : 0,
						height: n ? t.position.scrollbarWidth() : 0
					}
				},
				getWithinInfo: function (e) {
					var i = t(e || window),
						s = t.isWindow(i[0]),
						n = !!i[0] && 9 === i[0].nodeType,
						o = !s && !n;
					return {
						element: i,
						isWindow: s,
						isDocument: n,
						offset: o ? t(e).offset() : {
							left: 0,
							top: 0
						},
						scrollLeft: i.scrollLeft(),
						scrollTop: i.scrollTop(),
						width: i.outerWidth(),
						height: i.outerHeight()
					}
				}
			}, t.fn.position = function (n) {
				if (!n || !n.of) return d.apply(this, arguments);
				n = t.extend({}, n);
				var u, p, f, g, m, _, v = t(n.of),
					b = t.position.getWithinInfo(n.within),
					y = t.position.getScrollInfo(b),
					w = (n.collision || "flip").split(" "),
					k = {};
				return _ = s(v), v[0].preventDefault && (n.at = "left top"), p = _.width, f = _.height, g = _.offset, m = t.extend({}, g), t.each(["my", "at"], function () {
					var t, e, i = (n[this] || "").split(" ");
					1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = h.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), k[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
				}), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2), "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2), u = e(k.at, p, f), m.left += u[0], m.top += u[1], this.each(function () {
					var s, r, h = t(this),
						l = h.outerWidth(),
						c = h.outerHeight(),
						d = i(this, "marginLeft"),
						_ = i(this, "marginTop"),
						x = l + d + i(this, "marginRight") + y.width,
						C = c + _ + i(this, "marginBottom") + y.height,
						D = t.extend({}, m),
						I = e(k.my, h.outerWidth(), h.outerHeight());
					"right" === n.my[0] ? D.left -= l : "center" === n.my[0] && (D.left -= l / 2), "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2), D.left += I[0], D.top += I[1], s = {
						marginLeft: d,
						marginTop: _
					}, t.each(["left", "top"], function (e, i) {
						t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
							targetWidth: p,
							targetHeight: f,
							elemWidth: l,
							elemHeight: c,
							collisionPosition: s,
							collisionWidth: x,
							collisionHeight: C,
							offset: [u[0] + I[0], u[1] + I[1]],
							my: n.my,
							at: n.at,
							within: b,
							elem: h
						})
					}), n.using && (r = function (t) {
						var e = g.left - D.left,
							i = e + p - l,
							s = g.top - D.top,
							r = s + f - c,
							u = {
								target: {
									element: v,
									left: g.left,
									top: g.top,
									width: p,
									height: f
								},
								element: {
									element: h,
									left: D.left,
									top: D.top,
									width: l,
									height: c
								},
								horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
								vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
							};
						l > p && p > a(e + i) && (u.horizontal = "center"), c > f && f > a(s + r) && (u.vertical = "middle"), u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical", n.using.call(this, t, u)
					}), h.offset(t.extend(D, {
						using: r
					}))
				})
			}, t.ui.position = {
				fit: {
					left: function (t, e) {
						var i, s = e.within,
							n = s.isWindow ? s.scrollLeft : s.offset.left,
							a = s.width,
							r = t.left - e.collisionPosition.marginLeft,
							h = n - r,
							l = r + e.collisionWidth - a - n;
						e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
					},
					top: function (t, e) {
						var i, s = e.within,
							n = s.isWindow ? s.scrollTop : s.offset.top,
							a = e.within.height,
							r = t.top - e.collisionPosition.marginTop,
							h = n - r,
							l = r + e.collisionHeight - a - n;
						e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
					}
				},
				flip: {
					left: function (t, e) {
						var i, s, n = e.within,
							o = n.offset.left + n.scrollLeft,
							r = n.width,
							h = n.isWindow ? n.scrollLeft : n.offset.left,
							l = t.left - e.collisionPosition.marginLeft,
							c = l - h,
							u = l + e.collisionWidth - r - h,
							d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
							p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
							f = -2 * e.offset[0];
						0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o, (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > a(s)) && (t.left += d + p + f))
					},
					top: function (t, e) {
						var i, s, n = e.within,
							o = n.offset.top + n.scrollTop,
							r = n.height,
							h = n.isWindow ? n.scrollTop : n.offset.top,
							l = t.top - e.collisionPosition.marginTop,
							c = l - h,
							u = l + e.collisionHeight - r - h,
							d = "top" === e.my[1],
							p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
							f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
							g = -2 * e.offset[1];
						0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o, (0 > s || a(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - h, (i > 0 || u > a(i)) && (t.top += p + f + g))
					}
				},
				flipfit: {
					left: function () {
						t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
					},
					top: function () {
						t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
					}
				}
			}
		}(), t.ui.position, t.extend(t.expr[":"], {
			data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
				return function (i) {
					return !!t.data(i, e)
				}
			}) : function (e, i, s) {
				return !!t.data(e, s[3])
			}
		}), t.fn.extend({
			disableSelection: function () {
				var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
				return function () {
					return this.on(t + ".ui-disableSelection", function (t) {
						t.preventDefault()
					})
				}
			}(),
			enableSelection: function () {
				return this.off(".ui-disableSelection")
			}
		});
	var c = "ui-effects-",
		u = "ui-effects-style",
		d = "ui-effects-animated",
		p = t;
	t.effects = {
			effect: {}
		},
		function (t, e) {
			function i(t, e, i) {
				var s = u[e.type] || {};
				return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
			}

			function s(i) {
				var s = l(),
					n = s._rgba = [];
				return i = i.toLowerCase(), f(h, function (t, o) {
					var a, r = o.re.exec(i),
						h = r && o.parse(r),
						l = o.space || "rgba";
					return h ? (a = s[l](h), s[c[l].cache] = a[c[l].cache], n = s._rgba = a._rgba, !1) : e
				}), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i]
			}

			function n(t, e, i) {
				return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
			}
			var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
				r = /^([\-+])=\s*(\d+\.?\d*)/,
				h = [{
					re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					parse: function (t) {
						return [t[1], t[2], t[3], t[4]]
					}
				}, {
					re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					parse: function (t) {
						return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
					}
				}, {
					re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
					parse: function (t) {
						return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
					}
				}, {
					re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
					parse: function (t) {
						return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
					}
				}, {
					re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					space: "hsla",
					parse: function (t) {
						return [t[1], t[2] / 100, t[3] / 100, t[4]]
					}
				}],
				l = t.Color = function (e, i, s, n) {
					return new t.Color.fn.parse(e, i, s, n)
				},
				c = {
					rgba: {
						props: {
							red: {
								idx: 0,
								type: "byte"
							},
							green: {
								idx: 1,
								type: "byte"
							},
							blue: {
								idx: 2,
								type: "byte"
							}
						}
					},
					hsla: {
						props: {
							hue: {
								idx: 0,
								type: "degrees"
							},
							saturation: {
								idx: 1,
								type: "percent"
							},
							lightness: {
								idx: 2,
								type: "percent"
							}
						}
					}
				},
				u = {
					"byte": {
						floor: !0,
						max: 255
					},
					percent: {
						max: 1
					},
					degrees: {
						mod: 360,
						floor: !0
					}
				},
				d = l.support = {},
				p = t("<p>")[0],
				f = t.each;
			p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) {
				e.cache = "_" + t, e.props.alpha = {
					idx: 3,
					type: "percent",
					def: 1
				}
			}), l.fn = t.extend(l.prototype, {
				parse: function (n, a, r, h) {
					if (n === e) return this._rgba = [null, null, null, null], this;
					(n.jQueryCustom || n.nodeType) && (n = t(n).css(a), a = e);
					var u = this,
						d = t.type(n),
						p = this._rgba = [];
					return a !== e && (n = [n, a, r, h], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
						p[e.idx] = i(n[e.idx], e)
					}), this) : "object" === d ? (n instanceof l ? f(c, function (t, e) {
						n[e.cache] && (u[e.cache] = n[e.cache].slice())
					}) : f(c, function (e, s) {
						var o = s.cache;
						f(s.props, function (t, e) {
							if (!u[o] && s.to) {
								if ("alpha" === t || null == n[t]) return;
								u[o] = s.to(u._rgba)
							}
							u[o][e.idx] = i(n[t], e, !0)
						}), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])))
					}), this) : e
				},
				is: function (t) {
					var i = l(t),
						s = !0,
						n = this;
					return f(c, function (t, o) {
						var a, r = i[o.cache];
						return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function (t, i) {
							return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e
						})), s
					}), s
				},
				_space: function () {
					var t = [],
						e = this;
					return f(c, function (i, s) {
						e[s.cache] && t.push(i)
					}), t.pop()
				},
				transition: function (t, e) {
					var s = l(t),
						n = s._space(),
						o = c[n],
						a = 0 === this.alpha() ? l("transparent") : this,
						r = a[o.cache] || o.to(a._rgba),
						h = r.slice();
					return s = s[o.cache], f(o.props, function (t, n) {
						var o = n.idx,
							a = r[o],
							l = s[o],
							c = u[n.type] || {};
						null !== l && (null === a ? h[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), h[o] = i((l - a) * e + a, n)))
					}), this[n](h)
				},
				blend: function (e) {
					if (1 === this._rgba[3]) return this;
					var i = this._rgba.slice(),
						s = i.pop(),
						n = l(e)._rgba;
					return l(t.map(i, function (t, e) {
						return (1 - s) * n[e] + s * t
					}))
				},
				toRgbaString: function () {
					var e = "rgba(",
						i = t.map(this._rgba, function (t, e) {
							return null == t ? e > 2 ? 1 : 0 : t
						});
					return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
				},
				toHslaString: function () {
					var e = "hsla(",
						i = t.map(this.hsla(), function (t, e) {
							return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
						});
					return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
				},
				toHexString: function (e) {
					var i = this._rgba.slice(),
						s = i.pop();
					return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) {
						return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
					}).join("")
				},
				toString: function () {
					return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
				}
			}), l.fn.parse.prototype = l.fn, c.hsla.to = function (t) {
				if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
				var e, i, s = t[0] / 255,
					n = t[1] / 255,
					o = t[2] / 255,
					a = t[3],
					r = Math.max(s, n, o),
					h = Math.min(s, n, o),
					l = r - h,
					c = r + h,
					u = .5 * c;
				return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
			}, c.hsla.from = function (t) {
				if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
				var e = t[0] / 360,
					i = t[1],
					s = t[2],
					o = t[3],
					a = .5 >= s ? s * (1 + i) : s + i - s * i,
					r = 2 * s - a;
				return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
			}, f(c, function (s, n) {
				var o = n.props,
					a = n.cache,
					h = n.to,
					c = n.from;
				l.fn[s] = function (s) {
					if (h && !this[a] && (this[a] = h(this._rgba)), s === e) return this[a].slice();
					var n, r = t.type(s),
						u = "array" === r || "object" === r ? s : arguments,
						d = this[a].slice();
					return f(o, function (t, e) {
						var s = u["object" === r ? t : e.idx];
						null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
					}), c ? (n = l(c(d)), n[a] = d, n) : l(d)
				}, f(o, function (e, i) {
					l.fn[e] || (l.fn[e] = function (n) {
						var o, a = t.type(n),
							h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
							l = this[h](),
							c = l[i.idx];
						return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
					})
				})
			}), l.hook = function (e) {
				var i = e.split(" ");
				f(i, function (e, i) {
					t.cssHooks[i] = {
						set: function (e, n) {
							var o, a, r = "";
							if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
								if (n = l(o || n), !d.rgba && 1 !== n._rgba[3]) {
									for (a = "backgroundColor" === i ? e.parentNode : e;
										("" === r || "transparent" === r) && a && a.style;) try {
										r = t.css(a, "backgroundColor"), a = a.parentNode
									} catch (h) {}
									n = n.blend(r && "transparent" !== r ? r : "_default")
								}
								n = n.toRgbaString()
							}
							try {
								e.style[i] = n
							} catch (h) {}
						}
					}, t.fx.step[i] = function (e) {
						e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
					}
				})
			}, l.hook(a), t.cssHooks.borderColor = {
				expand: function (t) {
					var e = {};
					return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
						e["border" + s + "Color"] = t
					}), e
				}
			}, o = t.Color.names = {
				aqua: "#00ffff",
				black: "#000000",
				blue: "#0000ff",
				fuchsia: "#ff00ff",
				gray: "#808080",
				green: "#008000",
				lime: "#00ff00",
				maroon: "#800000",
				navy: "#000080",
				olive: "#808000",
				purple: "#800080",
				red: "#ff0000",
				silver: "#c0c0c0",
				teal: "#008080",
				white: "#ffffff",
				yellow: "#ffff00",
				transparent: [null, null, null, 0],
				_default: "#ffffff"
			}
		}(p),
		function () {
			function e(e) {
				var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
					o = {};
				if (n && n.length && n[0] && n[n[0]])
					for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
				else
					for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
				return o
			}

			function i(e, i) {
				var s, o, a = {};
				for (s in i) o = i[s], e[s] !== o && (n[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (a[s] = o));
				return a
			}
			var s = ["add", "remove", "toggle"],
				n = {
					border: 1,
					borderBottom: 1,
					borderColor: 1,
					borderLeft: 1,
					borderRight: 1,
					borderTop: 1,
					borderWidth: 1,
					margin: 1,
					padding: 1
				};
			t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
				t.fx.step[i] = function (t) {
					("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end), t.setAttr = !0)
				}
			}), t.fn.addBack || (t.fn.addBack = function (t) {
				return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
			}), t.effects.animateClass = function (n, o, a, r) {
				var h = t.speed(o, a, r);
				return this.queue(function () {
					var o, a = t(this),
						r = a.attr("class") || "",
						l = h.children ? a.find("*").addBack() : a;
					l = l.map(function () {
						var i = t(this);
						return {
							el: i,
							start: e(this)
						}
					}), o = function () {
						t.each(s, function (t, e) {
							n[e] && a[e + "Class"](n[e])
						})
					}, o(), l = l.map(function () {
						return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
					}), a.attr("class", r), l = l.map(function () {
						var e = this,
							i = t.Deferred(),
							s = t.extend({}, h, {
								queue: !1,
								complete: function () {
									i.resolve(e)
								}
							});
						return this.el.animate(this.diff, s), i.promise()
					}), t.when.apply(t, l.get()).done(function () {
						o(), t.each(arguments, function () {
							var e = this.el;
							t.each(this.diff, function (t) {
								e.css(t, "")
							})
						}), h.complete.call(a[0])
					})
				})
			}, t.fn.extend({
				addClass: function (e) {
					return function (i, s, n, o) {
						return s ? t.effects.animateClass.call(this, {
							add: i
						}, s, n, o) : e.apply(this, arguments)
					}
				}(t.fn.addClass),
				removeClass: function (e) {
					return function (i, s, n, o) {
						return arguments.length > 1 ? t.effects.animateClass.call(this, {
							remove: i
						}, s, n, o) : e.apply(this, arguments)
					}
				}(t.fn.removeClass),
				toggleClass: function (e) {
					return function (i, s, n, o, a) {
						return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
							add: i
						} : {
							remove: i
						}, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
							toggle: i
						}, s, n, o)
					}
				}(t.fn.toggleClass),
				switchClass: function (e, i, s, n, o) {
					return t.effects.animateClass.call(this, {
						add: i,
						remove: e
					}, s, n, o)
				}
			})
		}(),
		function () {
			function e(e, i, s, n) {
				return t.isPlainObject(e) && (i = e, e = e.effect), e = {
					effect: e
				}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
			}

			function i(e) {
				return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
			}

			function s(t, e) {
				var i = e.outerWidth(),
					s = e.outerHeight(),
					n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
					o = n.exec(t) || ["", 0, i, s, 0];
				return {
					top: parseFloat(o[1]) || 0,
					right: "auto" === o[2] ? i : parseFloat(o[2]),
					bottom: "auto" === o[3] ? s : parseFloat(o[3]),
					left: parseFloat(o[4]) || 0
				}
			}
			t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function (e) {
				return function (i) {
					return !!t(i).data(d) || e(i)
				}
			}(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, {
				save: function (t, e) {
					for (var i = 0, s = e.length; s > i; i++) null !== e[i] && t.data(c + e[i], t[0].style[e[i]])
				},
				restore: function (t, e) {
					for (var i, s = 0, n = e.length; n > s; s++) null !== e[s] && (i = t.data(c + e[s]), t.css(e[s], i))
				},
				setMode: function (t, e) {
					return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
				},
				createWrapper: function (e) {
					if (e.parent().is(".ui-effects-wrapper")) return e.parent();
					var i = {
							width: e.outerWidth(!0),
							height: e.outerHeight(!0),
							"float": e.css("float")
						},
						s = t("<div></div>").addClass("ui-effects-wrapper").css({
							fontSize: "100%",
							background: "transparent",
							border: "none",
							margin: 0,
							padding: 0
						}),
						n = {
							width: e.width(),
							height: e.height()
						},
						o = document.activeElement;
					try {
						o.id
					} catch (a) {
						o = document.body
					}
					return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({
						position: "relative"
					}), e.css({
						position: "relative"
					})) : (t.extend(i, {
						position: e.css("position"),
						zIndex: e.css("z-index")
					}), t.each(["top", "left", "bottom", "right"], function (t, s) {
						i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
					}), e.css({
						position: "relative",
						top: 0,
						left: 0,
						right: "auto",
						bottom: "auto"
					})), e.css(n), s.css(i).show()
				},
				removeWrapper: function (e) {
					var i = document.activeElement;
					return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
				}
			}), t.extend(t.effects, {
				version: "1.12.1",
				define: function (e, i, s) {
					return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s
				},
				scaledDimensions: function (t, e, i) {
					if (0 === e) return {
						height: 0,
						width: 0,
						outerHeight: 0,
						outerWidth: 0
					};
					var s = "horizontal" !== i ? (e || 100) / 100 : 1,
						n = "vertical" !== i ? (e || 100) / 100 : 1;
					return {
						height: t.height() * n,
						width: t.width() * s,
						outerHeight: t.outerHeight() * n,
						outerWidth: t.outerWidth() * s
					}
				},
				clipToBox: function (t) {
					return {
						width: t.clip.right - t.clip.left,
						height: t.clip.bottom - t.clip.top,
						left: t.clip.left,
						top: t.clip.top
					}
				},
				unshift: function (t, e, i) {
					var s = t.queue();
					e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
				},
				saveStyle: function (t) {
					t.data(u, t[0].style.cssText)
				},
				restoreStyle: function (t) {
					t[0].style.cssText = t.data(u) || "", t.removeData(u)
				},
				mode: function (t, e) {
					var i = t.is(":hidden");
					return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
				},
				getBaseline: function (t, e) {
					var i, s;
					switch (t[0]) {
						case "top":
							i = 0;
							break;
						case "middle":
							i = .5;
							break;
						case "bottom":
							i = 1;
							break;
						default:
							i = t[0] / e.height
					}
					switch (t[1]) {
						case "left":
							s = 0;
							break;
						case "center":
							s = .5;
							break;
						case "right":
							s = 1;
							break;
						default:
							s = t[1] / e.width
					}
					return {
						x: s,
						y: i
					}
				},
				createPlaceholder: function (e) {
					var i, s = e.css("position"),
						n = e.position();
					return e.css({
						marginTop: e.css("marginTop"),
						marginBottom: e.css("marginBottom"),
						marginLeft: e.css("marginLeft"),
						marginRight: e.css("marginRight")
					}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
						display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
						visibility: "hidden",
						marginTop: e.css("marginTop"),
						marginBottom: e.css("marginBottom"),
						marginLeft: e.css("marginLeft"),
						marginRight: e.css("marginRight"),
						"float": e.css("float")
					}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(c + "placeholder", i)), e.css({
						position: s,
						left: n.left,
						top: n.top
					}), i
				},
				removePlaceholder: function (t) {
					var e = c + "placeholder",
						i = t.data(e);
					i && (i.remove(), t.removeData(e))
				},
				cleanUp: function (e) {
					t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
				},
				setTransition: function (e, i, s, n) {
					return n = n || {}, t.each(i, function (t, i) {
						var o = e.cssUnit(i);
						o[0] > 0 && (n[i] = o[0] * s + o[1])
					}), n
				}
			}), t.fn.extend({
				effect: function () {
					function i(e) {
						function i() {
							r.removeData(d), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), a()
						}

						function a() {
							t.isFunction(h) && h.call(r[0]), t.isFunction(e) && e()
						}
						var r = t(this);
						s.mode = c.shift(), t.uiBackCompat === !1 || o ? "none" === s.mode ? (r[l](), a()) : n.call(r[0], s, i) : (r.is(":hidden") ? "hide" === l : "show" === l) ? (r[l](), a()) : n.call(r[0], s, a)
					}
					var s = e.apply(this, arguments),
						n = t.effects.effect[s.effect],
						o = n.mode,
						a = s.queue,
						r = a || "fx",
						h = s.complete,
						l = s.mode,
						c = [],
						u = function (e) {
							var i = t(this),
								s = t.effects.mode(i, l) || o;
							i.data(d, !0), c.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e()
						};
					return t.fx.off || !n ? l ? this[l](s.duration, h) : this.each(function () {
						h && h.call(this)
					}) : a === !1 ? this.each(u).each(i) : this.queue(r, u).queue(r, i)
				},
				show: function (t) {
					return function (s) {
						if (i(s)) return t.apply(this, arguments);
						var n = e.apply(this, arguments);
						return n.mode = "show", this.effect.call(this, n)
					}
				}(t.fn.show),
				hide: function (t) {
					return function (s) {
						if (i(s)) return t.apply(this, arguments);
						var n = e.apply(this, arguments);
						return n.mode = "hide", this.effect.call(this, n)
					}
				}(t.fn.hide),
				toggle: function (t) {
					return function (s) {
						if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
						var n = e.apply(this, arguments);
						return n.mode = "toggle", this.effect.call(this, n)
					}
				}(t.fn.toggle),
				cssUnit: function (e) {
					var i = this.css(e),
						s = [];
					return t.each(["em", "px", "%", "pt"], function (t, e) {
						i.indexOf(e) > 0 && (s = [parseFloat(i), e])
					}), s
				},
				cssClip: function (t) {
					return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this)
				},
				transfer: function (e, i) {
					var s = t(this),
						n = t(e.to),
						o = "fixed" === n.css("position"),
						a = t("body"),
						r = o ? a.scrollTop() : 0,
						h = o ? a.scrollLeft() : 0,
						l = n.offset(),
						c = {
							top: l.top - r,
							left: l.left - h,
							height: n.innerHeight(),
							width: n.innerWidth()
						},
						u = s.offset(),
						d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
							top: u.top - r,
							left: u.left - h,
							height: s.innerHeight(),
							width: s.innerWidth(),
							position: o ? "fixed" : "absolute"
						}).animate(c, e.duration, e.easing, function () {
							d.remove(), t.isFunction(i) && i()
						})
				}
			}), t.fx.step.clip = function (e) {
				e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
					top: e.pos * (e.end.top - e.start.top) + e.start.top,
					right: e.pos * (e.end.right - e.start.right) + e.start.right,
					bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
					left: e.pos * (e.end.left - e.start.left) + e.start.left
				})
			}
		}(),
		function () {
			var e = {};
			t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
				e[i] = function (e) {
					return Math.pow(e, t + 2)
				}
			}), t.extend(e, {
				Sine: function (t) {
					return 1 - Math.cos(t * Math.PI / 2)
				},
				Circ: function (t) {
					return 1 - Math.sqrt(1 - t * t)
				},
				Elastic: function (t) {
					return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
				},
				Back: function (t) {
					return t * t * (3 * t - 2)
				},
				Bounce: function (t) {
					for (var e, i = 4;
						((e = Math.pow(2, --i)) - 1) / 11 > t;);
					return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
				}
			}), t.each(e, function (e, i) {
				t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
					return 1 - i(1 - t)
				}, t.easing["easeInOut" + e] = function (t) {
					return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
				}
			})
		}();
	var f = t.effects;
	t.effects.define("blind", "hide", function (e, i) {
		var s = {
				up: ["bottom", "top"],
				vertical: ["bottom", "top"],
				down: ["top", "bottom"],
				left: ["right", "left"],
				horizontal: ["right", "left"],
				right: ["left", "right"]
			},
			n = t(this),
			o = e.direction || "up",
			a = n.cssClip(),
			r = {
				clip: t.extend({}, a)
			},
			h = t.effects.createPlaceholder(n);
		r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), h && h.css(t.effects.clipToBox(r)), r.clip = a), h && h.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: i
		})
	}), t.effects.define("bounce", function (e, i) {
		var s, n, o, a = t(this),
			r = e.mode,
			h = "hide" === r,
			l = "show" === r,
			c = e.direction || "up",
			u = e.distance,
			d = e.times || 5,
			p = 2 * d + (l || h ? 1 : 0),
			f = e.duration / p,
			g = e.easing,
			m = "up" === c || "down" === c ? "top" : "left",
			_ = "up" === c || "left" === c,
			v = 0,
			b = a.queue().length;
		for (t.effects.createPlaceholder(a), o = a.css(m), u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3), l && (n = {
				opacity: 1
			}, n[m] = o, a.css("opacity", 0).css(m, _ ? 2 * -u : 2 * u).animate(n, f, g)), h && (u /= Math.pow(2, d - 1)), n = {}, n[m] = o; d > v; v++) s = {}, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g).animate(n, f, g), u = h ? 2 * u : u / 2;
		h && (s = {
			opacity: 0
		}, s[m] = (_ ? "-=" : "+=") + u, a.animate(s, f, g)), a.queue(i), t.effects.unshift(a, b, p + 1)
	}), t.effects.define("clip", "hide", function (e, i) {
		var s, n = {},
			o = t(this),
			a = e.direction || "vertical",
			r = "both" === a,
			h = r || "horizontal" === a,
			l = r || "vertical" === a;
		s = o.cssClip(), n.clip = {
			top: l ? (s.bottom - s.top) / 2 : s.top,
			right: h ? (s.right - s.left) / 2 : s.right,
			bottom: l ? (s.bottom - s.top) / 2 : s.bottom,
			left: h ? (s.right - s.left) / 2 : s.left
		}, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: i
		})
	}), t.effects.define("drop", "hide", function (e, i) {
		var s, n = t(this),
			o = e.mode,
			a = "show" === o,
			r = e.direction || "left",
			h = "up" === r || "down" === r ? "top" : "left",
			l = "up" === r || "left" === r ? "-=" : "+=",
			c = "+=" === l ? "-=" : "+=",
			u = {
				opacity: 0
			};
		t.effects.createPlaceholder(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, u[h] = l + s, a && (n.css(u), u[h] = c + s, u.opacity = 1), n.animate(u, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: i
		})
	}), t.effects.define("explode", "hide", function (e, i) {
		function s() {
			b.push(this), b.length === u * d && n()
		}

		function n() {
			p.css({
				visibility: "visible"
			}), t(b).remove(), i()
		}
		var o, a, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
			d = u,
			p = t(this),
			f = e.mode,
			g = "show" === f,
			m = p.show().css("visibility", "hidden").offset(),
			_ = Math.ceil(p.outerWidth() / d),
			v = Math.ceil(p.outerHeight() / u),
			b = [];
		for (o = 0; u > o; o++)
			for (h = m.top + o * v, c = o - (u - 1) / 2, a = 0; d > a; a++) r = m.left + a * _, l = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
				position: "absolute",
				visibility: "visible",
				left: -a * _,
				top: -o * v
			}).parent().addClass("ui-effects-explode").css({
				position: "absolute",
				overflow: "hidden",
				width: _,
				height: v,
				left: r + (g ? l * _ : 0),
				top: h + (g ? c * v : 0),
				opacity: g ? 0 : 1
			}).animate({
				left: r + (g ? 0 : l * _),
				top: h + (g ? 0 : c * v),
				opacity: g ? 1 : 0
			}, e.duration || 500, e.easing, s)
	}), t.effects.define("fade", "toggle", function (e, i) {
		var s = "show" === e.mode;
		t(this).css("opacity", s ? 0 : 1).animate({
			opacity: s ? 1 : 0
		}, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: i
		})
	}), t.effects.define("fold", "hide", function (e, i) {
		var s = t(this),
			n = e.mode,
			o = "show" === n,
			a = "hide" === n,
			r = e.size || 15,
			h = /([0-9]+)%/.exec(r),
			l = !!e.horizFirst,
			c = l ? ["right", "bottom"] : ["bottom", "right"],
			u = e.duration / 2,
			d = t.effects.createPlaceholder(s),
			p = s.cssClip(),
			f = {
				clip: t.extend({}, p)
			},
			g = {
				clip: t.extend({}, p)
			},
			m = [p[c[0]], p[c[1]]],
			_ = s.queue().length;
		h && (r = parseInt(h[1], 10) / 100 * m[a ? 0 : 1]), f.clip[c[0]] = r, g.clip[c[0]] = r, g.clip[c[1]] = 0, o && (s.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), s.queue(function (i) {
			d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i()
		}).animate(f, u, e.easing).animate(g, u, e.easing).queue(i), t.effects.unshift(s, _, 4)
	}), t.effects.define("highlight", "show", function (e, i) {
		var s = t(this),
			n = {
				backgroundColor: s.css("backgroundColor")
			};
		"hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({
			backgroundImage: "none",
			backgroundColor: e.color || "#ffff99"
		}).animate(n, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: i
		})
	}), t.effects.define("size", function (e, i) {
		var s, n, o, a = t(this),
			r = ["fontSize"],
			h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
			l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
			c = e.mode,
			u = "effect" !== c,
			d = e.scale || "both",
			p = e.origin || ["middle", "center"],
			f = a.css("position"),
			g = a.position(),
			m = t.effects.scaledDimensions(a),
			_ = e.from || m,
			v = e.to || t.effects.scaledDimensions(a, 0);
		t.effects.createPlaceholder(a), "show" === c && (o = _, _ = v, v = o), n = {
			from: {
				y: _.height / m.height,
				x: _.width / m.width
			},
			to: {
				y: v.height / m.height,
				x: v.width / m.width
			}
		}, ("box" === d || "both" === d) && (n.from.y !== n.to.y && (_ = t.effects.setTransition(a, h, n.from.y, _), v = t.effects.setTransition(a, h, n.to.y, v)), n.from.x !== n.to.x && (_ = t.effects.setTransition(a, l, n.from.x, _), v = t.effects.setTransition(a, l, n.to.x, v))), ("content" === d || "both" === d) && n.from.y !== n.to.y && (_ = t.effects.setTransition(a, r, n.from.y, _), v = t.effects.setTransition(a, r, n.to.y, v)), p && (s = t.effects.getBaseline(p, m), _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left, v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left), a.css(_), ("content" === d || "both" === d) && (h = h.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function () {
			var i = t(this),
				s = t.effects.scaledDimensions(i),
				o = {
					height: s.height * n.from.y,
					width: s.width * n.from.x,
					outerHeight: s.outerHeight * n.from.y,
					outerWidth: s.outerWidth * n.from.x
				},
				a = {
					height: s.height * n.to.y,
					width: s.width * n.to.x,
					outerHeight: s.height * n.to.y,
					outerWidth: s.width * n.to.x
				};
			n.from.y !== n.to.y && (o = t.effects.setTransition(i, h, n.from.y, o), a = t.effects.setTransition(i, h, n.to.y, a)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, l, n.from.x, o), a = t.effects.setTransition(i, l, n.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function () {
				u && t.effects.restoreStyle(i)
			})
		})), a.animate(v, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				var e = a.offset();
				0 === v.opacity && a.css("opacity", _.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i()
			}
		})
	}), t.effects.define("scale", function (e, i) {
		var s = t(this),
			n = e.mode,
			o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
			a = t.extend(!0, {
				from: t.effects.scaledDimensions(s),
				to: t.effects.scaledDimensions(s, o, e.direction || "both"),
				origin: e.origin || ["middle", "center"]
			}, e);
		e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i)
	}), t.effects.define("puff", "hide", function (e, i) {
		var s = t.extend(!0, {}, e, {
			fade: !0,
			percent: parseInt(e.percent, 10) || 150
		});
		t.effects.effect.scale.call(this, s, i)
	}), t.effects.define("pulsate", "show", function (e, i) {
		var s = t(this),
			n = e.mode,
			o = "show" === n,
			a = "hide" === n,
			r = o || a,
			h = 2 * (e.times || 5) + (r ? 1 : 0),
			l = e.duration / h,
			c = 0,
			u = 1,
			d = s.queue().length;
		for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), c = 1); h > u; u++) s.animate({
			opacity: c
		}, l, e.easing), c = 1 - c;
		s.animate({
			opacity: c
		}, l, e.easing), s.queue(i), t.effects.unshift(s, d, h + 1)
	}), t.effects.define("shake", function (e, i) {
		var s = 1,
			n = t(this),
			o = e.direction || "left",
			a = e.distance || 20,
			r = e.times || 3,
			h = 2 * r + 1,
			l = Math.round(e.duration / h),
			c = "up" === o || "down" === o ? "top" : "left",
			u = "up" === o || "left" === o,
			d = {},
			p = {},
			f = {},
			g = n.queue().length;
		for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, n.animate(d, l, e.easing); r > s; s++) n.animate(p, l, e.easing).animate(f, l, e.easing);
		n.animate(p, l, e.easing).animate(d, l / 2, e.easing).queue(i), t.effects.unshift(n, g, h + 1)
	}), t.effects.define("slide", "show", function (e, i) {
		var s, n, o = t(this),
			a = {
				up: ["bottom", "top"],
				down: ["top", "bottom"],
				left: ["right", "left"],
				right: ["left", "right"]
			},
			r = e.mode,
			h = e.direction || "left",
			l = "up" === h || "down" === h ? "top" : "left",
			c = "up" === h || "left" === h,
			u = e.distance || o["top" === l ? "outerHeight" : "outerWidth"](!0),
			d = {};
		t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[l], d[l] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[a[h][1]] = d.clip[a[h][0]], "show" === r && (o.cssClip(d.clip), o.css(l, d[l]), d.clip = s, d[l] = n), o.animate(d, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: i
		})
	});
	var f;
	t.uiBackCompat !== !1 && (f = t.effects.define("transfer", function (e, i) {
		t(this).transfer(e, i)
	})), t.ui.focusable = function (i, s) {
		var n, o, a, r, h, l = i.nodeName.toLowerCase();
		return "area" === l ? (n = i.parentNode, o = n.name, i.href && o && "map" === n.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !i.disabled, r && (h = t(i).closest("fieldset")[0], h && (r = !h.disabled))) : r = "a" === l ? i.href || s : s, r && t(i).is(":visible") && e(t(i)))
	}, t.extend(t.expr[":"], {
		focusable: function (e) {
			return t.ui.focusable(e, null != t.attr(e, "tabindex"))
		}
	}), t.ui.focusable, t.fn.form = function () {
		return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
	}, t.ui.formResetMixin = {
		_formResetHandler: function () {
			var e = t(this);
			setTimeout(function () {
				var i = e.data("ui-form-reset-instances");
				t.each(i, function () {
					this.refresh()
				})
			})
		},
		_bindFormResetHandler: function () {
			if (this.form = this.element.form(), this.form.length) {
				var t = this.form.data("ui-form-reset-instances") || [];
				t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
			}
		},
		_unbindFormResetHandler: function () {
			if (this.form.length) {
				var e = this.form.data("ui-form-reset-instances");
				e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
			}
		}
	}, "1.7" === t.fn.jQueryCustom.substring(0, 3) && (t.each(["Width", "Height"], function (e, i) {
		function s(e, i, s, o) {
			return t.each(n, function () {
				i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
			}), i
		}
		var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
			o = i.toLowerCase(),
			a = {
				innerWidth: t.fn.innerWidth,
				innerHeight: t.fn.innerHeight,
				outerWidth: t.fn.outerWidth,
				outerHeight: t.fn.outerHeight
			};
		t.fn["inner" + i] = function (e) {
			return void 0 === e ? a["inner" + i].call(this) : this.each(function () {
				t(this).css(o, s(this, e) + "px")
			})
		}, t.fn["outer" + i] = function (e, n) {
			return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function () {
				t(this).css(o, s(this, e, !0, n) + "px")
			})
		}
	}), t.fn.addBack = function (t) {
		return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
	}), t.ui.keyCode = {
		BACKSPACE: 8,
		COMMA: 188,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SPACE: 32,
		TAB: 9,
		UP: 38
	}, t.ui.escapeSelector = function () {
		var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
		return function (e) {
			return e.replace(t, "\\$1")
		}
	}(), t.fn.labels = function () {
		var e, i, s, n, o;
		return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), s = this.attr("id"), s && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n))
	}, t.fn.scrollParent = function (e) {
		var i = this.css("position"),
			s = "absolute" === i,
			n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
			o = this.parents().filter(function () {
				var e = t(this);
				return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
			}).eq(0);
		return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
	}, t.extend(t.expr[":"], {
		tabbable: function (e) {
			var i = t.attr(e, "tabindex"),
				s = null != i;
			return (!s || i >= 0) && t.ui.focusable(e, s)
		}
	}), t.fn.extend({
		uniqueId: function () {
			var t = 0;
			return function () {
				return this.each(function () {
					this.id || (this.id = "ui-id-" + ++t)
				})
			}
		}(),
		removeUniqueId: function () {
			return this.each(function () {
				/^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
			})
		}
	}), t.widget("ui.accordion", {
		version: "1.12.1",
		options: {
			active: 0,
			animate: {},
			classes: {
				"ui-accordion-header": "ui-corner-top",
				"ui-accordion-header-collapsed": "ui-corner-all",
				"ui-accordion-content": "ui-corner-bottom"
			},
			collapsible: !1,
			event: "click",
			header: "> li > :first-child, > :not(li):even",
			heightStyle: "auto",
			icons: {
				activeHeader: "ui-icon-triangle-1-s",
				header: "ui-icon-triangle-1-e"
			},
			activate: null,
			beforeActivate: null
		},
		hideProps: {
			borderTopWidth: "hide",
			borderBottomWidth: "hide",
			paddingTop: "hide",
			paddingBottom: "hide",
			height: "hide"
		},
		showProps: {
			borderTopWidth: "show",
			borderBottomWidth: "show",
			paddingTop: "show",
			paddingBottom: "show",
			height: "show"
		},
		_create: function () {
			var e = this.options;
			this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
		},
		_getCreateEventData: function () {
			return {
				header: this.active,
				panel: this.active.length ? this.active.next() : t()
			}
		},
		_createIcons: function () {
			var e, i, s = this.options.icons;
			s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
		},
		_destroyIcons: function () {
			this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
		},
		_destroy: function () {
			var t;
			this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
		},
		_setOption: function (t, e) {
			return "active" === t ? (this._activate(e), void 0) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void 0)
		},
		_setOptionDisabled: function (t) {
			this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
		},
		_keydown: function (e) {
			if (!e.altKey && !e.ctrlKey) {
				var i = t.ui.keyCode,
					s = this.headers.length,
					n = this.headers.index(e.target),
					o = !1;
				switch (e.keyCode) {
					case i.RIGHT:
					case i.DOWN:
						o = this.headers[(n + 1) % s];
						break;
					case i.LEFT:
					case i.UP:
						o = this.headers[(n - 1 + s) % s];
						break;
					case i.SPACE:
					case i.ENTER:
						this._eventHandler(e);
						break;
					case i.HOME:
						o = this.headers[0];
						break;
					case i.END:
						o = this.headers[s - 1]
				}
				o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
			}
		},
		_panelKeyDown: function (e) {
			e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
		},
		refresh: function () {
			var e = this.options;
			this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
		},
		_processPanels: function () {
			var t = this.headers,
				e = this.panels;
			this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
		},
		_refresh: function () {
			var e, i = this.options,
				s = i.heightStyle,
				n = this.element.parent();
			this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
				var e = t(this),
					i = e.uniqueId().attr("id"),
					s = e.next(),
					n = s.uniqueId().attr("id");
				e.attr("aria-controls", n), s.attr("aria-labelledby", i)
			}).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
				"aria-selected": "false",
				"aria-expanded": "false",
				tabIndex: -1
			}).next().attr({
				"aria-hidden": "true"
			}).hide(), this.active.length ? this.active.attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			}).next().attr({
				"aria-hidden": "false"
			}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function () {
				var i = t(this),
					s = i.css("position");
				"absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
			}), this.headers.each(function () {
				e -= t(this).outerHeight(!0)
			}), this.headers.next().each(function () {
				t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
			}).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function () {
				var i = t(this).is(":visible");
				i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
			}).height(e))
		},
		_activate: function (e) {
			var i = this._findActive(e)[0];
			i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: t.noop
			}))
		},
		_findActive: function (e) {
			return "number" == typeof e ? this.headers.eq(e) : t()
		},
		_setupEvents: function (e) {
			var i = {
				keydown: "_keydown"
			};
			e && t.each(e.split(" "), function (t, e) {
				i[e] = "_eventHandler"
			}), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
				keydown: "_panelKeyDown"
			}), this._hoverable(this.headers), this._focusable(this.headers)
		},
		_eventHandler: function (e) {
			var i, s, n = this.options,
				o = this.active,
				a = t(e.currentTarget),
				r = a[0] === o[0],
				h = r && n.collapsible,
				l = h ? t() : a.next(),
				c = o.next(),
				u = {
					oldHeader: o,
					oldPanel: c,
					newHeader: h ? t() : a,
					newPanel: l
				};
			e.preventDefault(), r && !n.collapsible || this._trigger("beforeActivate", e, u) === !1 || (n.active = h ? !1 : this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
		},
		_toggle: function (e) {
			var i = e.newPanel,
				s = this.prevShow.length ? this.prevShow : e.oldPanel;
			this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
				"aria-hidden": "true"
			}), s.prev().attr({
				"aria-selected": "false",
				"aria-expanded": "false"
			}), i.length && s.length ? s.prev().attr({
				tabIndex: -1,
				"aria-expanded": "false"
			}) : i.length && this.headers.filter(function () {
				return 0 === parseInt(t(this).attr("tabIndex"), 10)
			}).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			})
		},
		_animate: function (t, e, i) {
			var s, n, o, a = this,
				r = 0,
				h = t.css("box-sizing"),
				l = t.length && (!e.length || t.index() < e.index()),
				c = this.options.animate || {},
				u = l && c.down || c,
				d = function () {
					a._toggleComplete(i)
				};
			return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
				duration: o,
				easing: n,
				step: function (t, e) {
					e.now = Math.round(t)
				}
			}), t.hide().animate(this.showProps, {
				duration: o,
				easing: n,
				complete: d,
				step: function (t, i) {
					i.now = Math.round(t), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0)
				}
			}), void 0) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
		},
		_toggleComplete: function (t) {
			var e = t.oldPanel,
				i = e.prev();
			this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
		}
	}), t.ui.safeActiveElement = function (t) {
		var e;
		try {
			e = t.activeElement
		} catch (i) {
			e = t.body
		}
		return e || (e = t.body), e.nodeName || (e = t.body), e
	}, t.widget("ui.menu", {
		version: "1.12.1",
		defaultElement: "<ul>",
		delay: 300,
		options: {
			icons: {
				submenu: "ui-icon-caret-1-e"
			},
			items: "> *",
			menus: "ul",
			position: {
				my: "left top",
				at: "right top"
			},
			role: "menu",
			blur: null,
			focus: null,
			select: null
		},
		_create: function () {
			this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
				role: this.options.role,
				tabIndex: 0
			}), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
				"mousedown .ui-menu-item": function (t) {
					t.preventDefault()
				},
				"click .ui-menu-item": function (e) {
					var i = t(e.target),
						s = t(t.ui.safeActiveElement(this.document[0]));
					!this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
				},
				"mouseenter .ui-menu-item": function (e) {
					if (!this.previousFilter) {
						var i = t(e.target).closest(".ui-menu-item"),
							s = t(e.currentTarget);
						i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s))
					}
				},
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function (t, e) {
					var i = this.active || this.element.find(this.options.items).eq(0);
					e || this.focus(t, i)
				},
				blur: function (e) {
					this._delay(function () {
						var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
						i && this.collapseAll(e)
					})
				},
				keydown: "_keydown"
			}), this.refresh(), this._on(this.document, {
				click: function (t) {
					this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
				}
			})
		},
		_destroy: function () {
			var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
				i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function () {
				var e = t(this);
				e.data("ui-menu-submenu-caret") && e.remove()
			})
		},
		_keydown: function (e) {
			var i, s, n, o, a = !0;
			switch (e.keyCode) {
				case t.ui.keyCode.PAGE_UP:
					this.previousPage(e);
					break;
				case t.ui.keyCode.PAGE_DOWN:
					this.nextPage(e);
					break;
				case t.ui.keyCode.HOME:
					this._move("first", "first", e);
					break;
				case t.ui.keyCode.END:
					this._move("last", "last", e);
					break;
				case t.ui.keyCode.UP:
					this.previous(e);
					break;
				case t.ui.keyCode.DOWN:
					this.next(e);
					break;
				case t.ui.keyCode.LEFT:
					this.collapse(e);
					break;
				case t.ui.keyCode.RIGHT:
					this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
					break;
				case t.ui.keyCode.ENTER:
				case t.ui.keyCode.SPACE:
					this._activate(e);
					break;
				case t.ui.keyCode.ESCAPE:
					this.collapse(e);
					break;
				default:
					a = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function () {
						delete this.previousFilter
					}, 1e3)) : delete this.previousFilter
			}
			a && e.preventDefault()
		},
		_activate: function (t) {
			this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
		},
		refresh: function () {
			var e, i, s, n, o, a = this,
				r = this.options.icons.submenu,
				h = this.element.find(this.options.menus);
			this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), s = h.filter(":not(.ui-menu)").hide().attr({
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			}).each(function () {
				var e = t(this),
					i = e.prev(),
					s = t("<span>").data("ui-menu-submenu-caret", !0);
				a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"))
			}), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = h.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function () {
				var e = t(this);
				a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content")
			}), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({
				tabIndex: -1,
				role: this._itemRole()
			}), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
		},
		_itemRole: function () {
			return {
				menu: "menuitem",
				listbox: "option"
			}[this.options.role]
		},
		_setOption: function (t, e) {
			if ("icons" === t) {
				var i = this.element.find(".ui-menu-icon");
				this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
			}
			this._super(t, e)
		},
		_setOptionDisabled: function (t) {
			this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
		},
		focus: function (t, e) {
			var i, s, n;
			this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
				this._close()
			}, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
				item: e
			})
		},
		_scrollIntoView: function (e) {
			var i, s, n, o, a, r;
			this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
		},
		blur: function (t, e) {
			e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
				item: this.active
			}), this.active = null)
		},
		_startOpening: function (t) {
			clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
				this._close(), this._open(t)
			}, this.delay))
		},
		_open: function (e) {
			var i = t.extend({ of: this.active
			}, this.options.position);
			clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
		},
		collapseAll: function (e, i) {
			clearTimeout(this.timer), this.timer = this._delay(function () {
				var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
				s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s
			}, this.delay)
		},
		_close: function (t) {
			t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
		},
		_closeOnDocumentClick: function (e) {
			return !t(e.target).closest(".ui-menu").length
		},
		_isDivider: function (t) {
			return !/[^\-\u2014\u2013\s]/.test(t.text())
		},
		collapse: function (t) {
			var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
			e && e.length && (this._close(), this.focus(t, e))
		},
		expand: function (t) {
			var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
			e && e.length && (this._open(e.parent()), this._delay(function () {
				this.focus(t, e)
			}))
		},
		next: function (t) {
			this._move("next", "first", t)
		},
		previous: function (t) {
			this._move("prev", "last", t)
		},
		isFirstItem: function () {
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		isLastItem: function () {
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		_move: function (t, e, i) {
			var s;
			this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
		},
		nextPage: function (e) {
			var i, s, n;
			return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
				return i = t(this), 0 > i.offset().top - s - n
			}), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(e), void 0)
		},
		previousPage: function (e) {
			var i, s, n;
			return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
				return i = t(this), i.offset().top - s + n > 0
			}), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(e), void 0)
		},
		_hasScroll: function () {
			return this.element.outerHeight() < this.element.prop("scrollHeight")
		},
		select: function (e) {
			this.active = this.active || t(e.target).closest(".ui-menu-item");
			var i = {
				item: this.active
			};
			this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
		},
		_filterMenuItems: function (e) {
			var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
				s = RegExp("^" + i, "i");
			return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
				return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
			})
		}
	}), t.widget("ui.autocomplete", {
		version: "1.12.1",
		defaultElement: "<input>",
		options: {
			appendTo: null,
			autoFocus: !1,
			delay: 300,
			minLength: 1,
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			response: null,
			search: null,
			select: null
		},
		requestIndex: 0,
		pending: 0,
		_create: function () {
			var e, i, s, n = this.element[0].nodeName.toLowerCase(),
				o = "textarea" === n,
				a = "input" === n;
			this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
				keydown: function (n) {
					if (this.element.prop("readOnly")) return e = !0, s = !0, i = !0, void 0;
					e = !1, s = !1, i = !1;
					var o = t.ui.keyCode;
					switch (n.keyCode) {
						case o.PAGE_UP:
							e = !0, this._move("previousPage", n);
							break;
						case o.PAGE_DOWN:
							e = !0, this._move("nextPage", n);
							break;
						case o.UP:
							e = !0, this._keyEvent("previous", n);
							break;
						case o.DOWN:
							e = !0, this._keyEvent("next", n);
							break;
						case o.ENTER:
							this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
							break;
						case o.TAB:
							this.menu.active && this.menu.select(n);
							break;
						case o.ESCAPE:
							this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
							break;
						default:
							i = !0, this._searchTimeout(n)
					}
				},
				keypress: function (s) {
					if (e) return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;
					if (!i) {
						var n = t.ui.keyCode;
						switch (s.keyCode) {
							case n.PAGE_UP:
								this._move("previousPage", s);
								break;
							case n.PAGE_DOWN:
								this._move("nextPage", s);
								break;
							case n.UP:
								this._keyEvent("previous", s);
								break;
							case n.DOWN:
								this._keyEvent("next", s)
						}
					}
				},
				input: function (t) {
					return s ? (s = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0)
				},
				focus: function () {
					this.selectedItem = null, this.previous = this._value()
				},
				blur: function (t) {
					return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(t), this._change(t), void 0)
				}
			}), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
				role: null
			}).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
				mousedown: function (e) {
					e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
						delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
					})
				},
				menufocus: function (e, i) {
					var s, n;
					return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
						t(e.target).trigger(e.originalEvent)
					}), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
						item: n
					}) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)), void 0)
				},
				menuselect: function (e, i) {
					var s = i.item.data("ui-autocomplete-item"),
						n = this.previous;
					this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function () {
						this.previous = n, this.selectedItem = s
					})), !1 !== this._trigger("select", e, {
						item: s
					}) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s
				}
			}), this.liveRegion = t("<div>", {
				role: "status",
				"aria-live": "assertive",
				"aria-relevant": "additions"
			}).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
				beforeunload: function () {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_destroy: function () {
			clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
		},
		_setOption: function (t, e) {
			this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
		},
		_isEventTargetInWidget: function (e) {
			var i = this.menu.element[0];
			return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
		},
		_closeOnClickOutside: function (t) {
			this._isEventTargetInWidget(t) || this.close()
		},
		_appendTo: function () {
			var e = this.options.appendTo;
			return e && (e = e.jQueryCustom || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
		},
		_initSource: function () {
			var e, i, s = this;
			t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, s) {
				s(t.ui.autocomplete.filter(e, i.term))
			}) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, n) {
				s.xhr && s.xhr.abort(), s.xhr = t.ajax({
					url: i,
					data: e,
					dataType: "json",
					success: function (t) {
						n(t)
					},
					error: function () {
						n([])
					}
				})
			}) : this.source = this.options.source
		},
		_searchTimeout: function (t) {
			clearTimeout(this.searching), this.searching = this._delay(function () {
				var e = this.term === this._value(),
					i = this.menu.element.is(":visible"),
					s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
				(!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t))
			}, this.options.delay)
		},
		search: function (t, e) {
			return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
		},
		_search: function (t) {
			this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
				term: t
			}, this._response())
		},
		_response: function () {
			var e = ++this.requestIndex;
			return t.proxy(function (t) {
				e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
			}, this)
		},
		__response: function (t) {
			t && (t = this._normalize(t)), this._trigger("response", null, {
				content: t
			}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
		},
		close: function (t) {
			this.cancelSearch = !0, this._close(t)
		},
		_close: function (t) {
			this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
		},
		_change: function (t) {
			this.previous !== this._value() && this._trigger("change", t, {
				item: this.selectedItem
			})
		},
		_normalize: function (e) {
			return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
				return "string" == typeof e ? {
					label: e,
					value: e
				} : t.extend({}, e, {
					label: e.label || e.value,
					value: e.value || e.label
				})
			})
		},
		_suggest: function (e) {
			var i = this.menu.element.empty();
			this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element
			}, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
				mousedown: "_closeOnClickOutside"
			})
		},
		_resizeMenu: function () {
			var t = this.menu.element;
			t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
		},
		_renderMenu: function (e, i) {
			var s = this;
			t.each(i, function (t, i) {
				s._renderItemData(e, i)
			})
		},
		_renderItemData: function (t, e) {
			return this._renderItem(t, e).data("ui-autocomplete-item", e)
		},
		_renderItem: function (e, i) {
			return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
		},
		_move: function (t, e) {
			return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0)
		},
		widget: function () {
			return this.menu.element
		},
		_value: function () {
			return this.valueMethod.apply(this.element, arguments)
		},
		_keyEvent: function (t, e) {
			(!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
		},
		_isContentEditable: function (t) {
			if (!t.length) return !1;
			var e = t.prop("contentEditable");
			return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
		}
	}), t.extend(t.ui.autocomplete, {
		escapeRegex: function (t) {
			return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
		},
		filter: function (e, i) {
			var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
			return t.grep(e, function (t) {
				return s.test(t.label || t.value || t)
			})
		}
	}), t.widget("ui.autocomplete", t.ui.autocomplete, {
		options: {
			messages: {
				noResults: "No search results.",
				results: function (t) {
					return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
				}
			}
		},
		__response: function (e) {
			var i;
			this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
		}
	}), t.ui.autocomplete;
	var g = /ui-corner-([a-z]){2,6}/g;
	t.widget("ui.controlgroup", {
		version: "1.12.1",
		defaultElement: "<div>",
		options: {
			direction: "horizontal",
			disabled: null,
			onlyVisible: !0,
			items: {
				button: "input[type=button], input[type=submit], input[type=reset], button, a",
				controlgroupLabel: ".ui-controlgroup-label",
				checkboxradio: "input[type='checkbox'], input[type='radio']",
				selectmenu: "select",
				spinner: ".ui-spinner-input"
			}
		},
		_create: function () {
			this._enhance()
		},
		_enhance: function () {
			this.element.attr("role", "toolbar"), this.refresh()
		},
		_destroy: function () {
			this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
		},
		_initWidgets: function () {
			var e = this,
				i = [];
			t.each(this.options.items, function (s, n) {
				var o, a = {};
				return n ? "controlgroupLabel" === s ? (o = e.element.find(n), o.each(function () {
					var e = t(this);
					e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
				}), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), i = i.concat(o.get()), void 0) : (t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {
					classes: {}
				}, e.element.find(n).each(function () {
					var n = t(this),
						o = n[s]("instance"),
						r = t.widget.extend({}, a);
					if ("button" !== s || !n.parent(".ui-spinner").length) {
						o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r);
						var h = n[s]("widget");
						t.data(h[0], "ui-controlgroup-data", o ? o : n[s]("instance")), i.push(h[0])
					}
				})), void 0) : void 0
			}), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
		},
		_callChildMethod: function (e) {
			this.childWidgets.each(function () {
				var i = t(this),
					s = i.data("ui-controlgroup-data");
				s && s[e] && s[e]()
			})
		},
		_updateCornerClass: function (t, e) {
			var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
				s = this._buildSimpleOptions(e, "label").classes.label;
			this._removeClass(t, null, i), this._addClass(t, null, s)
		},
		_buildSimpleOptions: function (t, e) {
			var i = "vertical" === this.options.direction,
				s = {
					classes: {}
				};
			return s.classes[e] = {
				middle: "",
				first: "ui-corner-" + (i ? "top" : "left"),
				last: "ui-corner-" + (i ? "bottom" : "right"),
				only: "ui-corner-all"
			}[t], s
		},
		_spinnerOptions: function (t) {
			var e = this._buildSimpleOptions(t, "ui-spinner");
			return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
		},
		_buttonOptions: function (t) {
			return this._buildSimpleOptions(t, "ui-button")
		},
		_checkboxradioOptions: function (t) {
			return this._buildSimpleOptions(t, "ui-checkboxradio-label")
		},
		_selectmenuOptions: function (t) {
			var e = "vertical" === this.options.direction;
			return {
				width: e ? "auto" : !1,
				classes: {
					middle: {
						"ui-selectmenu-button-open": "",
						"ui-selectmenu-button-closed": ""
					},
					first: {
						"ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
						"ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
					},
					last: {
						"ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
						"ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
					},
					only: {
						"ui-selectmenu-button-open": "ui-corner-top",
						"ui-selectmenu-button-closed": "ui-corner-all"
					}
				}[t]
			}
		},
		_resolveClassesValues: function (e, i) {
			var s = {};
			return t.each(e, function (n) {
				var o = i.options.classes[n] || "";
				o = t.trim(o.replace(g, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ")
			}), s
		},
		_setOption: function (t, e) {
			return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? (this._callChildMethod(e ? "disable" : "enable"), void 0) : (this.refresh(), void 0)
		},
		refresh: function () {
			var e, i = this;
			this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function (t, s) {
				var n = e[s]().data("ui-controlgroup-data");
				if (n && i["_" + n.widgetName + "Options"]) {
					var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
					o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o)
				} else i._updateCornerClass(e[s](), s)
			}), this._callChildMethod("refresh"))
		}
	}), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
		version: "1.12.1",
		options: {
			disabled: null,
			label: null,
			icon: !0,
			classes: {
				"ui-checkboxradio-label": "ui-corner-all",
				"ui-checkboxradio-icon": "ui-corner-all"
			}
		},
		_getCreateOptions: function () {
			var e, i, s = this,
				n = this._super() || {};
			return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
				s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
			}), this.originalLabel && (n.label = this.originalLabel), e = this.element[0].disabled, null != e && (n.disabled = e), n
		},
		_create: function () {
			var t = this.element[0].checked;
			this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
				change: "_toggleClasses",
				focus: function () {
					this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
				},
				blur: function () {
					this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
				}
			})
		},
		_readType: function () {
			var e = this.element[0].nodeName.toLowerCase();
			this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
		},
		_enhance: function () {
			this._updateIcon(this.element[0].checked)
		},
		widget: function () {
			return this.label
		},
		_getRadioGroup: function () {
			var e, i = this.element[0].name,
				s = "input[name='" + t.ui.escapeSelector(i) + "']";
			return i ? (e = this.form.length ? t(this.form[0].elements).filter(s) : t(s).filter(function () {
				return 0 === t(this).form().length
			}), e.not(this.element)) : t([])
		},
		_toggleClasses: function () {
			var e = this.element[0].checked;
			this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function () {
				var e = t(this).checkboxradio("instance");
				e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
			})
		},
		_destroy: function () {
			this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
		},
		_setOption: function (t, e) {
			return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), this.element[0].disabled = e, void 0) : (this.refresh(), void 0)) : void 0
		},
		_updateIcon: function (e) {
			var i = "ui-icon ui-icon-background ";
			this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
		},
		_updateLabel: function () {
			var t = this.label.contents().not(this.element[0]);
			this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
		},
		refresh: function () {
			var t = this.element[0].checked,
				e = this.element[0].disabled;
			this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
				disabled: e
			})
		}
	}]), t.ui.checkboxradio, t.widget("ui.button", {
		version: "1.12.1",
		defaultElement: "<button>",
		options: {
			classes: {
				"ui-button": "ui-corner-all"
			},
			disabled: null,
			icon: null,
			iconPosition: "beginning",
			label: null,
			showLabel: !0
		},
		_getCreateOptions: function () {
			var t, e = this._super() || {};
			return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
		},
		_create: function () {
			!this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
				keyup: function (e) {
					e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
				}
			})
		},
		_enhance: function () {
			this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
		},
		_updateTooltip: function () {
			this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
		},
		_updateIcon: function (e, i) {
			var s = "iconPosition" !== e,
				n = s ? this.options.iconPosition : i,
				o = "top" === n || "bottom" === n;
			this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n))
		},
		_destroy: function () {
			this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
		},
		_attachIconSpace: function (t) {
			this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
		},
		_attachIcon: function (t) {
			this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
		},
		_setOptions: function (t) {
			var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
				i = void 0 === t.icon ? this.options.icon : t.icon;
			e || i || (t.showLabel = !0), this._super(t)
		},
		_setOption: function (t, e) {
			"icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
		},
		refresh: function () {
			var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
			t !== this.options.disabled && this._setOptions({
				disabled: t
			}), this._updateTooltip()
		}
	}), t.uiBackCompat !== !1 && (t.widget("ui.button", t.ui.button, {
		options: {
			text: !0,
			icons: {
				primary: null,
				secondary: null
			}
		},
		_create: function () {
			this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
		},
		_setOption: function (t, e) {
			return "text" === t ? (this._super("showLabel", e), void 0) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments), void 0)
		}
	}), t.fn.button = function (e) {
		return function () {
			return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
				icon: !1
			}) : this.checkboxradio.apply(this, arguments))
		}
	}(t.fn.button), t.fn.buttonset = function () {
		return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
			button: arguments[0].items
		}), this.controlgroup.apply(this, arguments))
	}), t.ui.button, t.extend(t.ui, {
		datepicker: {
			version: "1.12.1"
		}
	});
	var m;
	t.extend(s.prototype, {
		markerClassName: "hasDatepicker",
		maxRows: 4,
		_widgetDatepicker: function () {
			return this.dpDiv
		},
		setDefaults: function (t) {
			return a(this._defaults, t || {}), this
		},
		_attachDatepicker: function (e, i) {
			var s, n, o;
			s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
		},
		_newInst: function (e, i) {
			var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
			return {
				id: s,
				input: e,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: i,
				dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
			}
		},
		_connectDatepicker: function (e, i) {
			var s = t(e);
			i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
		},
		_attachments: function (e, i) {
			var s, n, o, a = this._get(i, "appendText"),
				r = this._get(i, "isRTL");
			i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
				src: o,
				alt: n,
				title: n
			}) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
				src: o,
				alt: n,
				title: n
			}) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function () {
				return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
			}))
		},
		_autoSize: function (t) {
			if (this._get(t, "autoSize") && !t.inline) {
				var e, i, s, n, o = new Date(2009, 11, 20),
					a = this._get(t, "dateFormat");
				a.match(/[DM]/) && (e = function (t) {
					for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);
					return s
				}, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
			}
		},
		_inlineDatepicker: function (e, i) {
			var s = t(e);
			s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
		},
		_dialogDatepicker: function (e, i, s, n, o) {
			var r, h, l, c, u, d = this._dialogInst;
			return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + c, l / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
		},
		_destroyDatepicker: function (e) {
			var i, s = t(e),
				n = t.data(e, "datepicker");
			s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), m === n && (m = null))
		},
		_enableDatepicker: function (e) {
			var i, s, n = t(e),
				o = t.data(e, "datepicker");
			n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function () {
				this.disabled = !1
			}).end().filter("img").css({
				opacity: "1.0",
				cursor: ""
			})) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
				return t === e ? null : t
			}))
		},
		_disableDatepicker: function (e) {
			var i, s, n = t(e),
				o = t.data(e, "datepicker");
			n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function () {
				this.disabled = !0
			}).end().filter("img").css({
				opacity: "0.5",
				cursor: "default"
			})) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
				return t === e ? null : t
			}), this._disabledInputs[this._disabledInputs.length] = e)
		},
		_isDisabledDatepicker: function (t) {
			if (!t) return !1;
			for (var e = 0; this._disabledInputs.length > e; e++)
				if (this._disabledInputs[e] === t) return !0;
			return !1
		},
		_getInst: function (e) {
			try {
				return t.data(e, "datepicker")
			} catch (i) {
				throw "Missing instance data for this datepicker"
			}
		},
		_optionDatepicker: function (e, i, s) {
			var n, o, r, h, l = this._getInst(e);
			return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), a(l.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, r)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l)), void 0)
		},
		_changeDatepicker: function (t, e, i) {
			this._optionDatepicker(t, e, i)
		},
		_refreshDatepicker: function (t) {
			var e = this._getInst(t);
			e && this._updateDatepicker(e)
		},
		_setDateDatepicker: function (t, e) {
			var i = this._getInst(t);
			i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
		},
		_getDateDatepicker: function (t, e) {
			var i = this._getInst(t);
			return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
		},
		_doKeyDown: function (e) {
			var i, s, n, o = t.datepicker._getInst(e.target),
				a = !0,
				r = o.dpDiv.is(".ui-datepicker-rtl");
			if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
				case 9:
					t.datepicker._hideDatepicker(), a = !1;
					break;
				case 13:
					return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
				case 27:
					t.datepicker._hideDatepicker();
					break;
				case 33:
					t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
					break;
				case 34:
					t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
					break;
				case 35:
					(e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
					break;
				case 36:
					(e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
					break;
				case 37:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
					break;
				case 38:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
					break;
				case 39:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
					break;
				case 40:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
					break;
				default:
					a = !1
			} else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
			a && (e.preventDefault(), e.stopPropagation())
		},
		_doKeyPress: function (e) {
			var i, s, n = t.datepicker._getInst(e.target);
			return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
		},
		_doKeyUp: function (e) {
			var i, s = t.datepicker._getInst(e.target);
			if (s.input.val() !== s.lastVal) try {
				i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
			} catch (n) {}
			return !0
		},
		_showDatepicker: function (e) {
			if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
				var s, n, o, r, h, l, c;
				s = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(s, "beforeShow"), o = n ? n.apply(e, [e, s]) : {}, o !== !1 && (a(s.settings, o), s.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(s), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function () {
					return r |= "fixed" === t(this).css("position"), !r
				}), h = {
					left: t.datepicker._pos[0],
					top: t.datepicker._pos[1]
				}, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({
					position: "absolute",
					display: "block",
					top: "-1000px"
				}), t.datepicker._updateDatepicker(s), h = t.datepicker._checkOffset(s, h, r), s.dpDiv.css({
					position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
					display: "none",
					left: h.left + "px",
					top: h.top + "px"
				}), s.inline || (l = t.datepicker._get(s, "showAnim"), c = t.datepicker._get(s, "duration"), s.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? s.dpDiv.show(l, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[l || "show"](l ? c : null), t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s))
			}
		},
		_updateDatepicker: function (e) {
			this.maxRows = 4, m = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
			var i, s = this._getNumberOfMonths(e),
				n = s[1],
				a = 17,
				r = e.dpDiv.find("." + this._dayOverClass + " a");
			r.length > 0 && o.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
				i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
			}, 0))
		},
		_shouldFocusInput: function (t) {
			return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
		},
		_checkOffset: function (e, i, s) {
			var n = e.dpDiv.outerWidth(),
				o = e.dpDiv.outerHeight(),
				a = e.input ? e.input.outerWidth() : 0,
				r = e.input ? e.input.outerHeight() : 0,
				h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
				l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
			return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + o > l && l > o ? Math.abs(o + r) : 0), i
		},
		_findPos: function (e) {
			for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
			return i = t(e).offset(), [i.left, i.top]
		},
		_hideDatepicker: function (e) {
			var i, s, n, o, a = this._curInst;
			!a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function () {
				t.datepicker._tidyDialog(a)
			}, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
				position: "absolute",
				left: "0",
				top: "-100px"
			}), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
		},
		_tidyDialog: function (t) {
			t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
		},
		_checkExternalClick: function (e) {
			if (t.datepicker._curInst) {
				var i = t(e.target),
					s = t.datepicker._getInst(i[0]);
				(i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
			}
		},
		_adjustDate: function (e, i, s) {
			var n = t(e),
				o = this._getInst(n[0]);
			this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
		},
		_gotoToday: function (e) {
			var i, s = t(e),
				n = this._getInst(s[0]);
			this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
		},
		_selectMonthYear: function (e, i, s) {
			var n = t(e),
				o = this._getInst(n[0]);
			o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
		},
		_selectDay: function (e, i, s, n) {
			var o, a = t(e);
			t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
		},
		_clearDate: function (e) {
			var i = t(e);
			this._selectDate(i, "")
		},
		_selectDate: function (e, i) {
			var s, n = t(e),
				o = this._getInst(n[0]);
			i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
		},
		_updateAlternate: function (e) {
			var i, s, n, o = this._get(e, "altField");
			o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n))
		},
		noWeekends: function (t) {
			var e = t.getDay();
			return [e > 0 && 6 > e, ""]
		},
		iso8601Week: function (t) {
			var e, i = new Date(t.getTime());
			return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
		},
		parseDate: function (e, i, s) {
			if (null == e || null == i) throw "Invalid arguments";
			if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
			var n, o, a, r, h = 0,
				l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
				c = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
				u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
				d = (s ? s.dayNames : null) || this._defaults.dayNames,
				p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
				f = (s ? s.monthNames : null) || this._defaults.monthNames,
				g = -1,
				m = -1,
				_ = -1,
				v = -1,
				b = !1,
				y = function (t) {
					var i = e.length > n + 1 && e.charAt(n + 1) === t;
					return i && n++, i
				},
				w = function (t) {
					var e = y(t),
						s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
						n = "y" === t ? s : 1,
						o = RegExp("^\\d{" + n + "," + s + "}"),
						a = i.substring(h).match(o);
					if (!a) throw "Missing number at position " + h;
					return h += a[0].length, parseInt(a[0], 10)
				},
				k = function (e, s, n) {
					var o = -1,
						a = t.map(y(e) ? n : s, function (t, e) {
							return [
								[e, t]
							]
						}).sort(function (t, e) {
							return -(t[1].length - e[1].length)
						});
					if (t.each(a, function (t, e) {
							var s = e[1];
							return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], h += s.length, !1) : void 0
						}), -1 !== o) return o + 1;
					throw "Unknown name at position " + h
				},
				x = function () {
					if (i.charAt(h) !== e.charAt(n)) throw "Unexpected literal at position " + h;
					h++
				};
			for (n = 0; e.length > n; n++)
				if (b) "'" !== e.charAt(n) || y("'") ? x() : b = !1;
				else switch (e.charAt(n)) {
					case "d":
						_ = w("d");
						break;
					case "D":
						k("D", u, d);
						break;
					case "o":
						v = w("o");
						break;
					case "m":
						m = w("m");
						break;
					case "M":
						m = k("M", p, f);
						break;
					case "y":
						g = w("y");
						break;
					case "@":
						r = new Date(w("@")), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
						break;
					case "!":
						r = new Date((w("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();
						break;
					case "'":
						y("'") ? x() : b = !0;
						break;
					default:
						x()
				}
			if (i.length > h && (a = i.substr(h), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
			if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= g ? 0 : -100)), v > -1)
				for (m = 1, _ = v;;) {
					if (o = this._getDaysInMonth(g, m - 1), o >= _) break;
					m++, _ -= o
				}
			if (r = this._daylightSavingAdjust(new Date(g, m - 1, _)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _) throw "Invalid date";
			return r
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
		formatDate: function (t, e, i) {
			if (!e) return "";
			var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
				o = (i ? i.dayNames : null) || this._defaults.dayNames,
				a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
				r = (i ? i.monthNames : null) || this._defaults.monthNames,
				h = function (e) {
					var i = t.length > s + 1 && t.charAt(s + 1) === e;
					return i && s++, i
				},
				l = function (t, e, i) {
					var s = "" + e;
					if (h(t))
						for (; i > s.length;) s = "0" + s;
					return s
				},
				c = function (t, e, i, s) {
					return h(t) ? s[e] : i[e]
				},
				u = "",
				d = !1;
			if (e)
				for (s = 0; t.length > s; s++)
					if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
					else switch (t.charAt(s)) {
						case "d":
							u += l("d", e.getDate(), 2);
							break;
						case "D":
							u += c("D", e.getDay(), n, o);
							break;
						case "o":
							u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
							break;
						case "m":
							u += l("m", e.getMonth() + 1, 2);
							break;
						case "M":
							u += c("M", e.getMonth(), a, r);
							break;
						case "y":
							u += h("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
							break;
						case "@":
							u += e.getTime();
							break;
						case "!":
							u += 1e4 * e.getTime() + this._ticksTo1970;
							break;
						case "'":
							h("'") ? u += "'" : d = !0;
							break;
						default:
							u += t.charAt(s)
					}
			return u
		},
		_possibleChars: function (t) {
			var e, i = "",
				s = !1,
				n = function (i) {
					var s = t.length > e + 1 && t.charAt(e + 1) === i;
					return s && e++, s
				};
			for (e = 0; t.length > e; e++)
				if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
				else switch (t.charAt(e)) {
					case "d":
					case "m":
					case "y":
					case "@":
						i += "0123456789";
						break;
					case "D":
					case "M":
						return null;
					case "'":
						n("'") ? i += "'" : s = !0;
						break;
					default:
						i += t.charAt(e)
				}
			return i
		},
		_get: function (t, e) {
			return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
		},
		_setDateFromField: function (t, e) {
			if (t.input.val() !== t.lastVal) {
				var i = this._get(t, "dateFormat"),
					s = t.lastVal = t.input ? t.input.val() : null,
					n = this._getDefaultDate(t),
					o = n,
					a = this._getFormatConfig(t);
				try {
					o = this.parseDate(i, s, a) || n
				} catch (r) {
					s = e ? "" : s
				}
				t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
			}
		},
		_getDefaultDate: function (t) {
			return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
		},
		_determineDate: function (e, i, s) {
			var n = function (t) {
					var e = new Date;
					return e.setDate(e.getDate() + t), e
				},
				o = function (i) {
					try {
						return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
					} catch (s) {}
					for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
						switch (l[2] || "d") {
							case "d":
							case "D":
								r += parseInt(l[1], 10);
								break;
							case "w":
							case "W":
								r += 7 * parseInt(l[1], 10);
								break;
							case "m":
							case "M":
								a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
								break;
							case "y":
							case "Y":
								o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a))
						}
						l = h.exec(i)
					}
					return new Date(o, a, r)
				},
				a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
			return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
		},
		_daylightSavingAdjust: function (t) {
			return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
		},
		_setDate: function (t, e, i) {
			var s = !e,
				n = t.selectedMonth,
				o = t.selectedYear,
				a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
			t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
		},
		_getDate: function (t) {
			var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
			return e
		},
		_attachHandlers: function (e) {
			var i = this._get(e, "stepMonths"),
				s = "#" + e.id.replace(/\\\\/g, "\\");
			e.dpDiv.find("[data-handler]").map(function () {
				var e = {
					prev: function () {
						t.datepicker._adjustDate(s, -i, "M")
					},
					next: function () {
						t.datepicker._adjustDate(s, +i, "M")
					},
					hide: function () {
						t.datepicker._hideDatepicker()
					},
					today: function () {
						t.datepicker._gotoToday(s)
					},
					selectDay: function () {
						return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
					},
					selectMonth: function () {
						return t.datepicker._selectMonthYear(s, this, "M"), !1
					},
					selectYear: function () {
						return t.datepicker._selectMonthYear(s, this, "Y"), !1
					}
				};
				t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
			})
		},
		_generateHTML: function (t) {
			var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, _, v, b, y, w, k, x, C, D, I, T, P, M, S, H, z, O, A, N, W, E, F, L, R = new Date,
				B = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
				Y = this._get(t, "isRTL"),
				j = this._get(t, "showButtonPanel"),
				q = this._get(t, "hideIfNoPrevNext"),
				K = this._get(t, "navigationAsDateFormat"),
				U = this._getNumberOfMonths(t),
				V = this._get(t, "showCurrentAtPos"),
				$ = this._get(t, "stepMonths"),
				X = 1 !== U[0] || 1 !== U[1],
				G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
				Q = this._getMinMaxDate(t, "min"),
				J = this._getMinMaxDate(t, "max"),
				Z = t.drawMonth - V,
				te = t.drawYear;
			if (0 > Z && (Z += 12, te--), J)
				for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--);
			for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - $, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + $, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : B, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
				for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
					if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), I = " ui-corner-all", T = "", X) {
						if (T += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
							case 0:
								T += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left");
								break;
							case U[1] - 1:
								T += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right");
								break;
							default:
								T += " ui-datepicker-group-middle", I = ""
						}
						T += "'>"
					}
					for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, te, Q, J, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) M = (w + c) % 7, P += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[M] + "'>" + p[M] + "</span></th>";
					for (T += P + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), H = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, z = Math.ceil((H + S) / 7), O = X ? this.maxRows > z ? this.maxRows : z : z, this.maxRows = O, A = this._daylightSavingAdjust(new Date(te, Z, 1 - H)), N = 0; O > N; N++) {
						for (T += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", w = 0; 7 > w; w++) E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""], F = A.getMonth() !== Z, L = F && !v || !E[0] || Q && Q > A || J && A > J, W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + E[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !E[2] ? "" : " title='" + E[2].replace(/'/g, "'") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (F && !_ ? " " : L ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === B.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
						T += W + "</tr>"
					}
					Z++, Z > 11 && (Z = 0, te++), T += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += T
				}
				y += x
			}
			return y += l, t._keyEvent = !1, y
		},
		_generateMonthYearHeader: function (t, e, i, s, n, o, a, r) {
			var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
				_ = this._get(t, "changeYear"),
				v = this._get(t, "showMonthAfterYear"),
				b = "<div class='ui-datepicker-title'>",
				y = "";
			if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
			else {
				for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
				y += "</select>"
			}
			if (v || (b += y + (!o && m && _ ? "" : " ")), !t.yearshtml)
				if (t.yearshtml = "", o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>";
				else {
					for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (t) {
							var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
							return isNaN(e) ? d : e
						}, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
					t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
				}
			return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : " ") + y), b += "</div>"
		},
		_adjustInstDate: function (t, e, i) {
			var s = t.selectedYear + ("Y" === i ? e : 0),
				n = t.selectedMonth + ("M" === i ? e : 0),
				o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
				a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
			t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
		},
		_restrictMinMax: function (t, e) {
			var i = this._getMinMaxDate(t, "min"),
				s = this._getMinMaxDate(t, "max"),
				n = i && i > e ? i : e;
			return s && n > s ? s : n
		},
		_notifyChange: function (t) {
			var e = this._get(t, "onChangeMonthYear");
			e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
		},
		_getNumberOfMonths: function (t) {
			var e = this._get(t, "numberOfMonths");
			return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
		},
		_getMinMaxDate: function (t, e) {
			return this._determineDate(t, this._get(t, e + "Date"), null)
		},
		_getDaysInMonth: function (t, e) {
			return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
		},
		_getFirstDayOfMonth: function (t, e) {
			return new Date(t, e, 1).getDay()
		},
		_canAdjustMonth: function (t, e, i, s) {
			var n = this._getNumberOfMonths(t),
				o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
			return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
		},
		_isInRange: function (t, e) {
			var i, s, n = this._getMinMaxDate(t, "min"),
				o = this._getMinMaxDate(t, "max"),
				a = null,
				r = null,
				h = this._get(t, "yearRange");
			return h && (i = h.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
		},
		_getFormatConfig: function (t) {
			var e = this._get(t, "shortYearCutoff");
			return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
				shortYearCutoff: e,
				dayNamesShort: this._get(t, "dayNamesShort"),
				dayNames: this._get(t, "dayNames"),
				monthNamesShort: this._get(t, "monthNamesShort"),
				monthNames: this._get(t, "monthNames")
			}
		},
		_formatDate: function (t, e, i, s) {
			e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
			var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
			return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
		}
	}), t.fn.datepicker = function (e) {
		if (!this.length) return this;
		t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
		var i = Array.prototype.slice.call(arguments, 1);
		return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
			"string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
		}) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
	}, t.datepicker = new s, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
	var _ = !1;
	t(document).on("mouseup", function () {
		_ = !1
	}), t.widget("ui.mouse", {
		version: "1.12.1",
		options: {
			cancel: "input, textarea, button, select, option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function () {
			var e = this;
			this.element.on("mousedown." + this.widgetName, function (t) {
				return e._mouseDown(t)
			}).on("click." + this.widgetName, function (i) {
				return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
			}), this.started = !1
		},
		_mouseDestroy: function () {
			this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function (e) {
			if (!_) {
				this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
				var i = this,
					s = 1 === e.which,
					n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
				return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
					i.mouseDelayMet = !0
				}, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
					return i._mouseMove(t)
				}, this._mouseUpDelegate = function (t) {
					return i._mouseUp(t)
				}, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), _ = !0, !0)) : !0
			}
		},
		_mouseMove: function (e) {
			if (this._mouseMoved) {
				if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
				if (!e.which)
					if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
					else if (!this.ignoreMissingWhich) return this._mouseUp(e)
			}
			return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
		},
		_mouseUp: function (e) {
			this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, _ = !1, e.preventDefault()
		},
		_mouseDistanceMet: function (t) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function () {
			return this.mouseDelayMet
		},
		_mouseStart: function () {},
		_mouseDrag: function () {},
		_mouseStop: function () {},
		_mouseCapture: function () {
			return !0
		}
	}), t.ui.plugin = {
		add: function (e, i, s) {
			var n, o = t.ui[e].prototype;
			for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
		},
		call: function (t, e, i, s) {
			var n, o = t.plugins[e];
			if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
				for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
		}
	}, t.ui.safeBlur = function (e) {
		e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
	}, t.widget("ui.draggable", t.ui.mouse, {
		version: "1.12.1",
		widgetEventPrefix: "drag",
		options: {
			addClasses: !0,
			appendTo: "parent",
			axis: !1,
			connectToSortable: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			iframeFix: !1,
			opacity: !1,
			refreshPositions: !1,
			revert: !1,
			revertDuration: 500,
			scope: "default",
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: !1,
			snapMode: "both",
			snapTolerance: 20,
			stack: !1,
			zIndex: !1,
			drag: null,
			start: null,
			stop: null
		},
		_create: function () {
			"original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
		},
		_setOption: function (t, e) {
			this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
		},
		_destroy: function () {
			return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this._removeHandleClassName(), this._mouseDestroy(), void 0)
		},
		_mouseCapture: function (e) {
			var i = this.options;
			return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blurActiveElement(e), this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
		},
		_blockFrames: function (e) {
			this.iframeBlocks = this.document.find(e).map(function () {
				var e = t(this);
				return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
			})
		},
		_unblockFrames: function () {
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_blurActiveElement: function (e) {
			var i = t.ui.safeActiveElement(this.document[0]),
				s = t(e.target);
			s.closest(i).length || t.ui.safeBlur(i)
		},
		_mouseStart: function (e) {
			var i = this.options;
			return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
				return "fixed" === t(this).css("position")
			}).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
		},
		_refreshOffsets: function (t) {
			this.offset = {
				top: this.positionAbs.top - this.margins.top,
				left: this.positionAbs.left - this.margins.left,
				scroll: !1,
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}, this.offset.click = {
				left: t.pageX - this.offset.left,
				top: t.pageY - this.offset.top
			}
		},
		_mouseDrag: function (e, i) {
			if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
				var s = this._uiHash();
				if (this._trigger("drag", e, s) === !1) return this._mouseUp(new t.Event("mouseup", e)), !1;
				this.position = s.position
			}
			return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
		},
		_mouseStop: function (e) {
			var i = this,
				s = !1;
			return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
				i._trigger("stop", e) !== !1 && i._clear()
			}) : this._trigger("stop", e) !== !1 && this._clear(), !1
		},
		_mouseUp: function (e) {
			return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
		},
		cancel: function () {
			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
				target: this.element[0]
			})) : this._clear(), this
		},
		_getHandle: function (e) {
			return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
		},
		_setHandleClassName: function () {
			this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
		},
		_removeHandleClassName: function () {
			this._removeClass(this.handleElement, "ui-draggable-handle")
		},
		_createHelper: function (e) {
			var i = this.options,
				s = t.isFunction(i.helper),
				n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
			return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
		},
		_setPositionRelative: function () {
			/^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
		},
		_adjustOffsetFromHelper: function (e) {
			"string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
				left: +e[0],
				top: +e[1] || 0
			}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_isRootNode: function (t) {
			return /(html|body)/i.test(t.tagName) || t === this.document[0]
		},
		_getParentOffset: function () {
			var e = this.offsetParent.offset(),
				i = this.document[0];
			return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
				top: 0,
				left: 0
			}), {
				top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function () {
			if ("relative" !== this.cssPosition) return {
				top: 0,
				left: 0
			};
			var t = this.element.position(),
				e = this._isRootNode(this.scrollParent[0]);
			return {
				top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
				left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
			}
		},
		_cacheMargins: function () {
			this.margins = {
				left: parseInt(this.element.css("marginLeft"), 10) || 0,
				top: parseInt(this.element.css("marginTop"), 10) || 0,
				right: parseInt(this.element.css("marginRight"), 10) || 0,
				bottom: parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions: function () {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function () {
			var e, i, s, n = this.options,
				o = this.document[0];
			return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
		},
		_convertPositionTo: function (t, e) {
			e || (e = this.position);
			var i = "absolute" === t ? 1 : -1,
				s = this._isRootNode(this.scrollParent[0]);
			return {
				top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
				left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
			}
		},
		_generatePosition: function (t, e) {
			var i, s, n, o, a = this.options,
				r = this._isRootNode(this.scrollParent[0]),
				h = t.pageX,
				l = t.pageY;
			return r && this.offset.scroll || (this.offset.scroll = {
				top: this.scrollParent.scrollTop(),
				left: this.scrollParent.scrollLeft()
			}), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), {
				top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
				left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
			}
		},
		_clear: function () {
			this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
		},
		_trigger: function (e, i, s) {
			return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s)
		},
		plugins: {},
		_uiHash: function () {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	}), t.ui.plugin.add("draggable", "connectToSortable", {
		start: function (e, i, s) {
			var n = t.extend({}, i, {
				item: s.element
			});
			s.sortables = [], t(s.options.connectToSortable).each(function () {
				var i = t(this).sortable("instance");
				i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
			})
		},
		stop: function (e, i, s) {
			var n = t.extend({}, i, {
				item: s.element
			});
			s.cancelHelperRemoval = !1, t.each(s.sortables, function () {
				var t = this;
				t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
					position: t.placeholder.css("position"),
					top: t.placeholder.css("top"),
					left: t.placeholder.css("left")
				}, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
			})
		},
		drag: function (e, i, s) {
			t.each(s.sortables, function () {
				var n = !1,
					o = this;
				o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function () {
					return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n
				})), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function () {
					return i.helper[0]
				}, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function () {
					this.refreshPositions()
				}), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function () {
					this.refreshPositions()
				}))
			})
		}
	}), t.ui.plugin.add("draggable", "cursor", {
		start: function (e, i, s) {
			var n = t("body"),
				o = s.options;
			n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor)
		},
		stop: function (e, i, s) {
			var n = s.options;
			n._cursor && t("body").css("cursor", n._cursor)
		}
	}), t.ui.plugin.add("draggable", "opacity", {
		start: function (e, i, s) {
			var n = t(i.helper),
				o = s.options;
			n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
		},
		stop: function (e, i, s) {
			var n = s.options;
			n._opacity && t(i.helper).css("opacity", n._opacity)
		}
	}), t.ui.plugin.add("draggable", "scroll", {
		start: function (t, e, i) {
			i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
		},
		drag: function (e, i, s) {
			var n = s.options,
				o = !1,
				a = s.scrollParentNotHidden[0],
				r = s.document[0];
			a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
		}
	}), t.ui.plugin.add("draggable", "snap", {
		start: function (e, i, s) {
			var n = s.options;
			s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
				var e = t(this),
					i = e.offset();
				this !== s.element[0] && s.snapElements.push({
					item: this,
					width: e.outerWidth(),
					height: e.outerHeight(),
					top: i.top,
					left: i.left
				})
			})
		},
		drag: function (e, i, s) {
			var n, o, a, r, h, l, c, u, d, p, f = s.options,
				g = f.snapTolerance,
				m = i.offset.left,
				_ = m + s.helperProportions.width,
				v = i.offset.top,
				b = v + s.helperProportions.height;
			for (d = s.snapElements.length - 1; d >= 0; d--) h = s.snapElements[d].left - s.margins.left, l = h + s.snapElements[d].width, c = s.snapElements[d].top - s.margins.top, u = c + s.snapElements[d].height, h - g > _ || m > l + g || c - g > b || v > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
				snapItem: s.snapElements[d].item
			})), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(c - b), o = g >= Math.abs(u - v), a = g >= Math.abs(h - _), r = g >= Math.abs(l - m), n && (i.position.top = s._convertPositionTo("relative", {
				top: c - s.helperProportions.height,
				left: 0
			}).top), o && (i.position.top = s._convertPositionTo("relative", {
				top: u,
				left: 0
			}).top), a && (i.position.left = s._convertPositionTo("relative", {
				top: 0,
				left: h - s.helperProportions.width
			}).left), r && (i.position.left = s._convertPositionTo("relative", {
				top: 0,
				left: l
			}).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = g >= Math.abs(c - v), o = g >= Math.abs(u - b), a = g >= Math.abs(h - m), r = g >= Math.abs(l - _), n && (i.position.top = s._convertPositionTo("relative", {
				top: c,
				left: 0
			}).top), o && (i.position.top = s._convertPositionTo("relative", {
				top: u - s.helperProportions.height,
				left: 0
			}).top), a && (i.position.left = s._convertPositionTo("relative", {
				top: 0,
				left: h
			}).left), r && (i.position.left = s._convertPositionTo("relative", {
				top: 0,
				left: l - s.helperProportions.width
			}).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
				snapItem: s.snapElements[d].item
			})), s.snapElements[d].snapping = n || o || a || r || p)
		}
	}), t.ui.plugin.add("draggable", "stack", {
		start: function (e, i, s) {
			var n, o = s.options,
				a = t.makeArray(t(o.stack)).sort(function (e, i) {
					return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
				});
			a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function (e) {
				t(this).css("zIndex", n + e)
			}), this.css("zIndex", n + a.length))
		}
	}), t.ui.plugin.add("draggable", "zIndex", {
		start: function (e, i, s) {
			var n = t(i.helper),
				o = s.options;
			n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
		},
		stop: function (e, i, s) {
			var n = s.options;
			n._zIndex && t(i.helper).css("zIndex", n._zIndex)
		}
	}), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
		version: "1.12.1",
		widgetEventPrefix: "resize",
		options: {
			alsoResize: !1,
			animate: !1,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: !1,
			autoHide: !1,
			classes: {
				"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
			},
			containment: !1,
			ghost: !1,
			grid: !1,
			handles: "e,s,se",
			helper: !1,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 90,
			resize: null,
			start: null,
			stop: null
		},
		_num: function (t) {
			return parseFloat(t) || 0
		},
		_isNumber: function (t) {
			return !isNaN(parseFloat(t))
		},
		_hasScroll: function (e, i) {
			if ("hidden" === t(e).css("overflow")) return !1;
			var s = i && "left" === i ? "scrollLeft" : "scrollTop",
				n = !1;
			return e[s] > 0 ? !0 : (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
		},
		_create: function () {
			var e, i = this.options,
				s = this;
			this._addClass("ui-resizable"), t.extend(this, {
				_aspectRatio: !!i.aspectRatio,
				aspectRatio: i.aspectRatio,
				originalElement: this.element,
				_proportionallyResizeElements: [],
				_helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
			}), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
				position: this.element.css("position"),
				width: this.element.outerWidth(),
				height: this.element.outerHeight(),
				top: this.element.css("top"),
				left: this.element.css("left")
			})), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
				marginTop: this.originalElement.css("marginTop"),
				marginRight: this.originalElement.css("marginRight"),
				marginBottom: this.originalElement.css("marginBottom"),
				marginLeft: this.originalElement.css("marginLeft")
			}, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
				position: "static",
				zoom: 1,
				display: "block"
			})), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function () {
				i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show())
			}).on("mouseleave", function () {
				i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide())
			}), this._mouseInit()
		},
		_destroy: function () {
			this._mouseDestroy();
			var e, i = function (e) {
				t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
			};
			return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
				position: e.css("position"),
				width: e.outerWidth(),
				height: e.outerHeight(),
				top: e.css("top"),
				left: e.css("left")
			}).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
		},
		_setOption: function (t, e) {
			switch (this._super(t, e), t) {
				case "handles":
					this._removeHandles(), this._setupHandles();
					break;
				default:
			}
		},
		_setupHandles: function () {
			var e, i, s, n, o, a = this.options,
				r = this;
			if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
					n: ".ui-resizable-n",
					e: ".ui-resizable-e",
					s: ".ui-resizable-s",
					w: ".ui-resizable-w",
					se: ".ui-resizable-se",
					sw: ".ui-resizable-sw",
					ne: ".ui-resizable-ne",
					nw: ".ui-resizable-nw"
				} : "e,s,se"), this._handles = t(), this.handles.constructor === String)
				for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++) e = t.trim(s[i]), n = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({
					zIndex: a.zIndex
				}), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
			this._renderAxis = function (e) {
				var i, s, n, o;
				e = e || this.element;
				for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jQueryCustom || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
					mousedown: r._mouseDown
				})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
			}, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
				r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se")
			}), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
		},
		_removeHandles: function () {
			this._handles.remove()
		},
		_mouseCapture: function (e) {
			var i, s, n = !1;
			for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
			return !this.options.disabled && n
		},
		_mouseStart: function (e) {
			var i, s, n, o = this.options,
				a = this.element;
			return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
				left: i,
				top: s
			}, this.size = this._helper ? {
				width: this.helper.width(),
				height: this.helper.height()
			} : {
				width: a.width(),
				height: a.height()
			}, this.originalSize = this._helper ? {
				width: a.outerWidth(),
				height: a.outerHeight()
			} : {
				width: a.width(),
				height: a.height()
			}, this.sizeDiff = {
				width: a.outerWidth() - a.width(),
				height: a.outerHeight() - a.height()
			}, this.originalPosition = {
				left: i,
				top: s
			}, this.originalMousePosition = {
				left: e.pageX,
				top: e.pageY
			}, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
		},
		_mouseDrag: function (e) {
			var i, s, n = this.originalMousePosition,
				o = this.axis,
				a = e.pageX - n.left || 0,
				r = e.pageY - n.top || 0,
				h = this._change[o];
			return this._updatePrevProperties(), h ? (i = h.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1
		},
		_mouseStop: function (e) {
			this.resizing = !1;
			var i, s, n, o, a, r, h, l = this.options,
				c = this;
			return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, a = {
				width: c.helper.width() - o,
				height: c.helper.height() - n
			}, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, h = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(a, {
				top: h,
				left: r
			})), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
		},
		_updatePrevProperties: function () {
			this.prevPosition = {
				top: this.position.top,
				left: this.position.left
			}, this.prevSize = {
				width: this.size.width,
				height: this.size.height
			}
		},
		_applyChanges: function () {
			var t = {};
			return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
		},
		_updateVirtualBoundaries: function (t) {
			var e, i, s, n, o, a = this.options;
			o = {
				minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
				maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
				minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
				maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
			}, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), this._vBoundaries = o
		},
		_updateCache: function (t) {
			this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
		},
		_updateRatio: function (t) {
			var e = this.position,
				i = this.size,
				s = this.axis;
			return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
		},
		_respectSize: function (t) {
			var e = this._vBoundaries,
				i = this.axis,
				s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
				n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
				o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
				a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
				r = this.originalPosition.left + this.originalSize.width,
				h = this.originalPosition.top + this.originalSize.height,
				l = /sw|nw|w/.test(i),
				c = /nw|ne|n/.test(i);
			return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && c && (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
		},
		_getPaddingPlusBorderDimensions: function (t) {
			for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
			return {
				height: i[0] + i[2],
				width: i[1] + i[3]
			}
		},
		_proportionallyResize: function () {
			if (this._proportionallyResizeElements.length)
				for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
					height: i.height() - this.outerDimensions.height || 0,
					width: i.width() - this.outerDimensions.width || 0
				})
		},
		_renderProxy: function () {
			var e = this.element,
				i = this.options;
			this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
				width: this.element.outerWidth(),
				height: this.element.outerHeight(),
				position: "absolute",
				left: this.elementOffset.left + "px",
				top: this.elementOffset.top + "px",
				zIndex: ++i.zIndex
			}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
		},
		_change: {
			e: function (t, e) {
				return {
					width: this.originalSize.width + e
				}
			},
			w: function (t, e) {
				var i = this.originalSize,
					s = this.originalPosition;
				return {
					left: s.left + e,
					width: i.width - e
				}
			},
			n: function (t, e, i) {
				var s = this.originalSize,
					n = this.originalPosition;
				return {
					top: n.top + i,
					height: s.height - i
				}
			},
			s: function (t, e, i) {
				return {
					height: this.originalSize.height + i
				}
			},
			se: function (e, i, s) {
				return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
			},
			sw: function (e, i, s) {
				return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
			},
			ne: function (e, i, s) {
				return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
			},
			nw: function (e, i, s) {
				return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
			}
		},
		_propagate: function (e, i) {
			t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
		},
		plugins: {},
		ui: function () {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			}
		}
	}), t.ui.plugin.add("resizable", "animate", {
		stop: function (e) {
			var i = t(this).resizable("instance"),
				s = i.options,
				n = i._proportionallyResizeElements,
				o = n.length && /textarea/i.test(n[0].nodeName),
				a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
				r = o ? 0 : i.sizeDiff.width,
				h = {
					width: i.size.width - r,
					height: i.size.height - a
				},
				l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
				c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
			i.element.animate(t.extend(h, c && l ? {
				top: c,
				left: l
			} : {}), {
				duration: s.animateDuration,
				easing: s.animateEasing,
				step: function () {
					var s = {
						width: parseFloat(i.element.css("width")),
						height: parseFloat(i.element.css("height")),
						top: parseFloat(i.element.css("top")),
						left: parseFloat(i.element.css("left"))
					};
					n && n.length && t(n[0]).css({
						width: s.width,
						height: s.height
					}), i._updateCache(s), i._propagate("resize", e)
				}
			})
		}
	}), t.ui.plugin.add("resizable", "containment", {
		start: function () {
			var e, i, s, n, o, a, r, h = t(this).resizable("instance"),
				l = h.options,
				c = h.element,
				u = l.containment,
				d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
			d && (h.containerElement = t(d), /document/.test(u) || u === document ? (h.containerOffset = {
				left: 0,
				top: 0
			}, h.containerPosition = {
				left: 0,
				top: 0
			}, h.parentData = {
				element: t(document),
				left: 0,
				top: 0,
				width: t(document).width(),
				height: t(document).height() || document.body.parentNode.scrollHeight
			}) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, s) {
				i[t] = h._num(e.css("padding" + s))
			}), h.containerOffset = e.offset(), h.containerPosition = e.position(), h.containerSize = {
				height: e.innerHeight() - i[3],
				width: e.innerWidth() - i[1]
			}, s = h.containerOffset, n = h.containerSize.height, o = h.containerSize.width, a = h._hasScroll(d, "left") ? d.scrollWidth : o, r = h._hasScroll(d) ? d.scrollHeight : n, h.parentData = {
				element: d,
				left: s.left,
				top: s.top,
				width: a,
				height: r
			}))
		},
		resize: function (e) {
			var i, s, n, o, a = t(this).resizable("instance"),
				r = a.options,
				h = a.containerOffset,
				l = a.position,
				c = a._aspectRatio || e.shiftKey,
				u = {
					top: 0,
					left: 0
				},
				d = a.containerElement,
				p = !0;
			d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (a._helper ? h.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - h.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? h.left : 0), l.top < (a._helper ? h.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - h.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? h.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - h.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - h.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
		},
		stop: function () {
			var e = t(this).resizable("instance"),
				i = e.options,
				s = e.containerOffset,
				n = e.containerPosition,
				o = e.containerElement,
				a = t(e.helper),
				r = a.offset(),
				h = a.outerWidth() - e.sizeDiff.width,
				l = a.outerHeight() - e.sizeDiff.height;
			e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
				left: r.left - n.left - s.left,
				width: h,
				height: l
			}), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
				left: r.left - n.left - s.left,
				width: h,
				height: l
			})
		}
	}), t.ui.plugin.add("resizable", "alsoResize", {
		start: function () {
			var e = t(this).resizable("instance"),
				i = e.options;
			t(i.alsoResize).each(function () {
				var e = t(this);
				e.data("ui-resizable-alsoresize", {
					width: parseFloat(e.width()),
					height: parseFloat(e.height()),
					left: parseFloat(e.css("left")),
					top: parseFloat(e.css("top"))
				})
			})
		},
		resize: function (e, i) {
			var s = t(this).resizable("instance"),
				n = s.options,
				o = s.originalSize,
				a = s.originalPosition,
				r = {
					height: s.size.height - o.height || 0,
					width: s.size.width - o.width || 0,
					top: s.position.top - a.top || 0,
					left: s.position.left - a.left || 0
				};
			t(n.alsoResize).each(function () {
				var e = t(this),
					s = t(this).data("ui-resizable-alsoresize"),
					n = {},
					o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
				t.each(o, function (t, e) {
					var i = (s[e] || 0) + (r[e] || 0);
					i && i >= 0 && (n[e] = i || null)
				}), e.css(n)
			})
		},
		stop: function () {
			t(this).removeData("ui-resizable-alsoresize")
		}
	}), t.ui.plugin.add("resizable", "ghost", {
		start: function () {
			var e = t(this).resizable("instance"),
				i = e.size;
			e.ghost = e.originalElement.clone(), e.ghost.css({
				opacity: .25,
				display: "block",
				position: "relative",
				height: i.height,
				width: i.width,
				margin: 0,
				left: 0,
				top: 0
			}), e._addClass(e.ghost, "ui-resizable-ghost"), t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
		},
		resize: function () {
			var e = t(this).resizable("instance");
			e.ghost && e.ghost.css({
				position: "relative",
				height: e.size.height,
				width: e.size.width
			})
		},
		stop: function () {
			var e = t(this).resizable("instance");
			e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
		}
	}), t.ui.plugin.add("resizable", "grid", {
		resize: function () {
			var e, i = t(this).resizable("instance"),
				s = i.options,
				n = i.size,
				o = i.originalSize,
				a = i.originalPosition,
				r = i.axis,
				h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
				l = h[0] || 1,
				c = h[1] || 1,
				u = Math.round((n.width - o.width) / l) * l,
				d = Math.round((n.height - o.height) / c) * c,
				p = o.width + u,
				f = o.height + d,
				g = s.maxWidth && p > s.maxWidth,
				m = s.maxHeight && f > s.maxHeight,
				_ = s.minWidth && s.minWidth > p,
				v = s.minHeight && s.minHeight > f;
			s.grid = h, _ && (p += l), v && (f += c), g && (p -= l), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - l) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - l > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = l - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
		}
	}), t.ui.resizable, t.widget("ui.dialog", {
		version: "1.12.1",
		options: {
			appendTo: "body",
			autoOpen: !0,
			buttons: [],
			classes: {
				"ui-dialog": "ui-corner-all",
				"ui-dialog-titlebar": "ui-corner-all"
			},
			closeOnEscape: !0,
			closeText: "Close",
			draggable: !0,
			hide: null,
			height: "auto",
			maxHeight: null,
			maxWidth: null,
			minHeight: 150,
			minWidth: 150,
			modal: !1,
			position: {
				my: "center",
				at: "center",
				of: window,
				collision: "fit",
				using: function (e) {
					var i = t(this).css(e).offset().top;
					0 > i && t(this).css("top", e.top - i)
				}
			},
			resizable: !0,
			show: null,
			title: null,
			width: 300,
			beforeClose: null,
			close: null,
			drag: null,
			dragStart: null,
			dragStop: null,
			focus: null,
			open: null,
			resize: null,
			resizeStart: null,
			resizeStop: null
		},
		sizeRelatedOptions: {
			buttons: !0,
			height: !0,
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0,
			width: !0
		},
		resizableRelatedOptions: {
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0
		},
		_create: function () {
			this.originalCss = {
				display: this.element[0].style.display,
				width: this.element[0].style.width,
				minHeight: this.element[0].style.minHeight,
				maxHeight: this.element[0].style.maxHeight,
				height: this.element[0].style.height
			}, this.originalPosition = {
				parent: this.element.parent(),
				index: this.element.parent().children().index(this.element)
			}, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
		},
		_init: function () {
			this.options.autoOpen && this.open()
		},
		_appendTo: function () {
			var e = this.options.appendTo;
			return e && (e.jQueryCustom || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
		},
		_destroy: function () {
			var t, e = this.originalPosition;
			this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
		},
		widget: function () {
			return this.uiDialog
		},
		disable: t.noop,
		enable: t.noop,
		close: function (e) {
			var i = this;
			this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
				i._trigger("close", e)
			}))
		},
		isOpen: function () {
			return this._isOpen
		},
		moveToTop: function () {
			this._moveToTop()
		},
		_moveToTop: function (e, i) {
			var s = !1,
				n = this.uiDialog.siblings(".ui-front:visible").map(function () {
					return +t(this).css("z-index")
				}).get(),
				o = Math.max.apply(null, n);
			return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s
		},
		open: function () {
			var e = this;
			return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
				e._focusTabbable(), e._trigger("focus")
			}), this._makeFocusTarget(), this._trigger("open"), void 0)
		},
		_focusTabbable: function () {
			var t = this._focusedElement;
			t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
		},
		_keepFocus: function (e) {
			function i() {
				var e = t.ui.safeActiveElement(this.document[0]),
					i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
				i || this._focusTabbable()
			}
			e.preventDefault(), i.call(this), this._delay(i)
		},
		_createWrapper: function () {
			this.uiDialog = t("<div>").hide().attr({
				tabIndex: -1,
				role: "dialog"
			}).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
				keydown: function (e) {
					if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), this.close(e), void 0;
					if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
						var i = this.uiDialog.find(":tabbable"),
							s = i.filter(":first"),
							n = i.filter(":last");
						e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function () {
							n.trigger("focus")
						}), e.preventDefault()) : (this._delay(function () {
							s.trigger("focus")
						}), e.preventDefault())
					}
				},
				mousedown: function (t) {
					this._moveToTop(t) && this._focusTabbable()
				}
			}), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
				"aria-describedby": this.element.uniqueId().attr("id")
			})
		},
		_createTitlebar: function () {
			var e;
			this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
				mousedown: function (e) {
					t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
				}
			}), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
				label: t("<a>").text(this.options.closeText).html(),
				icon: "ui-icon-closethick",
				showLabel: !1
			}).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
				click: function (t) {
					t.preventDefault(), this.close(t)
				}
			}), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
				"aria-labelledby": e.attr("id")
			})
		},
		_title: function (t) {
			this.options.title ? t.text(this.options.title) : t.html(" ")
		},
		_createButtonPane: function () {
			this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
		},
		_createButtons: function () {
			var e = this,
				i = this.options.buttons;
			return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"), void 0) : (t.each(i, function (i, s) {
				var n, o;
				s = t.isFunction(s) ? {
					click: s,
					text: i
				} : s, s = t.extend({
					type: "button"
				}, s), n = s.click, o = {
					icon: s.icon,
					iconPosition: s.iconPosition,
					showLabel: s.showLabel,
					icons: s.icons,
					text: s.text
				}, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function () {
					n.apply(e.element[0], arguments)
				})
			}), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
		},
		_makeDraggable: function () {
			function e(t) {
				return {
					position: t.position,
					offset: t.offset
				}
			}
			var i = this,
				s = this.options;
			this.uiDialog.draggable({
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function (s, n) {
					i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
				},
				drag: function (t, s) {
					i._trigger("drag", t, e(s))
				},
				stop: function (n, o) {
					var a = o.offset.left - i.document.scrollLeft(),
						r = o.offset.top - i.document.scrollTop();
					s.position = {
						my: "left top",
						at: "left" + (a >= 0 ? "+" : "") + a + " " + "top" + (r >= 0 ? "+" : "") + r,
						of: i.window
					}, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o))
				}
			})
		},
		_makeResizable: function () {
			function e(t) {
				return {
					originalPosition: t.originalPosition,
					originalSize: t.originalSize,
					position: t.position,
					size: t.size
				}
			}
			var i = this,
				s = this.options,
				n = s.resizable,
				o = this.uiDialog.css("position"),
				a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
			this.uiDialog.resizable({
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: this.element,
				maxWidth: s.maxWidth,
				maxHeight: s.maxHeight,
				minWidth: s.minWidth,
				minHeight: this._minHeight(),
				handles: a,
				start: function (s, n) {
					i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
				},
				resize: function (t, s) {
					i._trigger("resize", t, e(s))
				},
				stop: function (n, o) {
					var a = i.uiDialog.offset(),
						r = a.left - i.document.scrollLeft(),
						h = a.top - i.document.scrollTop();
					s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
						my: "left top",
						at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h,
						of: i.window
					}, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o))
				}
			}).css("position", o)
		},
		_trackFocus: function () {
			this._on(this.widget(), {
				focusin: function (e) {
					this._makeFocusTarget(), this._focusedElement = t(e.target)
				}
			})
		},
		_makeFocusTarget: function () {
			this._untrackInstance(), this._trackingInstances().unshift(this)
		},
		_untrackInstance: function () {
			var e = this._trackingInstances(),
				i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
		},
		_trackingInstances: function () {
			var t = this.document.data("ui-dialog-instances");
			return t || (t = [], this.document.data("ui-dialog-instances", t)), t
		},
		_minHeight: function () {
			var t = this.options;
			return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
		},
		_position: function () {
			var t = this.uiDialog.is(":visible");
			t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
		},
		_setOptions: function (e) {
			var i = this,
				s = !1,
				n = {};
			t.each(e, function (t, e) {
				i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e)
			}), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
		},
		_setOption: function (e, i) {
			var s, n, o = this.uiDialog;
			"disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
				label: t("<a>").text("" + this.options.closeText).html()
			}), "draggable" === e && (s = o.is(":data(ui-draggable)"), s && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (n = o.is(":data(ui-resizable)"), n && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || i === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
		},
		_size: function () {
			var t, e, i, s = this.options;
			this.element.show().css({
				width: "auto",
				minHeight: 0,
				maxHeight: "none",
				height: 0
			}), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
				height: "auto",
				width: s.width
			}).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
				minHeight: e,
				maxHeight: i,
				height: "auto"
			}) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
		},
		_blockFrames: function () {
			this.iframeBlocks = this.document.find("iframe").map(function () {
				var e = t(this);
				return t("<div>").css({
					position: "absolute",
					width: e.outerWidth(),
					height: e.outerHeight()
				}).appendTo(e.parent()).offset(e.offset())[0]
			})
		},
		_unblockFrames: function () {
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_allowInteraction: function (e) {
			return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
		},
		_createOverlay: function () {
			if (this.options.modal) {
				var e = !0;
				this._delay(function () {
					e = !1
				}), this.document.data("ui-dialog-overlays") || this._on(this.document, {
					focusin: function (t) {
						e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
					}
				}), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
					mousedown: "_keepFocus"
				}), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
			}
		},
		_destroyOverlay: function () {
			if (this.options.modal && this.overlay) {
				var t = this.document.data("ui-dialog-overlays") - 1;
				t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
			}
		}
	}), t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
		options: {
			dialogClass: ""
		},
		_createWrapper: function () {
			this._super(), this.uiDialog.addClass(this.options.dialogClass)
		},
		_setOption: function (t, e) {
			"dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
		}
	}), t.ui.dialog, t.widget("ui.droppable", {
		version: "1.12.1",
		widgetEventPrefix: "drop",
		options: {
			accept: "*",
			addClasses: !0,
			greedy: !1,
			scope: "default",
			tolerance: "intersect",
			activate: null,
			deactivate: null,
			drop: null,
			out: null,
			over: null
		},
		_create: function () {
			var e, i = this.options,
				s = i.accept;
			this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function (t) {
				return t.is(s)
			}, this.proportions = function () {
				return arguments.length ? (e = arguments[0], void 0) : e ? e : e = {
					width: this.element[0].offsetWidth,
					height: this.element[0].offsetHeight
				}
			}, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
		},
		_addToManager: function (e) {
			t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
		},
		_splice: function (t) {
			for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
		},
		_destroy: function () {
			var e = t.ui.ddmanager.droppables[this.options.scope];
			this._splice(e)
		},
		_setOption: function (e, i) {
			if ("accept" === e) this.accept = t.isFunction(i) ? i : function (t) {
				return t.is(i)
			};
			else if ("scope" === e) {
				var s = t.ui.ddmanager.droppables[this.options.scope];
				this._splice(s), this._addToManager(i)
			}
			this._super(e, i)
		},
		_activate: function (e) {
			var i = t.ui.ddmanager.current;
			this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
		},
		_deactivate: function (e) {
			var i = t.ui.ddmanager.current;
			this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
		},
		_over: function (e) {
			var i = t.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
		},
		_out: function (e) {
			var i = t.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
		},
		_drop: function (e, i) {
			var s = i || t.ui.ddmanager.current,
				n = !1;
			return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
				var i = t(this).droppable("instance");
				return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && v(s, t.extend(i, {
					offset: i.element.offset()
				}), i.options.tolerance, e) ? (n = !0, !1) : void 0
			}), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1
		},
		ui: function (t) {
			return {
				draggable: t.currentItem || t.element,
				helper: t.helper,
				position: t.position,
				offset: t.positionAbs
			}
		},
		_addHoverClass: function () {
			this._addClass("ui-droppable-hover")
		},
		_removeHoverClass: function () {
			this._removeClass("ui-droppable-hover")
		},
		_addActiveClass: function () {
			this._addClass("ui-droppable-active")
		},
		_removeActiveClass: function () {
			this._removeClass("ui-droppable-active")
		}
	});
	var v = t.ui.intersect = function () {
		function t(t, e, i) {
			return t >= e && e + i > t
		}
		return function (e, i, s, n) {
			if (!i.offset) return !1;
			var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
				a = (e.positionAbs || e.position.absolute).top + e.margins.top,
				r = o + e.helperProportions.width,
				h = a + e.helperProportions.height,
				l = i.offset.left,
				c = i.offset.top,
				u = l + i.proportions().width,
				d = c + i.proportions().height;
			switch (s) {
				case "fit":
					return o >= l && u >= r && a >= c && d >= h;
				case "intersect":
					return o + e.helperProportions.width / 2 > l && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && d > h - e.helperProportions.height / 2;
				case "pointer":
					return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);
				case "touch":
					return (a >= c && d >= a || h >= c && d >= h || c > a && h > d) && (o >= l && u >= o || r >= l && u >= r || l > o && r > u);
				default:
					return !1
			}
		}
	}();
	t.ui.ddmanager = {
		current: null,
		droppables: {
			"default": []
		},
		prepareOffsets: function (e, i) {
			var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [],
				a = i ? i.type : null,
				r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
			t: for (s = 0; o.length > s; s++)
				if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
					for (n = 0; r.length > n; n++)
						if (r[n] === o[s].element[0]) {
							o[s].proportions().height = 0;
							continue t
						}
					o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
						width: o[s].element[0].offsetWidth,
						height: o[s].element[0].offsetHeight
					}))
				}
		},
		drop: function (e, i) {
			var s = !1;
			return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
				this.options && (!this.options.disabled && this.visible && v(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
			}), s
		},
		dragStart: function (e, i) {
			e.element.parentsUntil("body").on("scroll.droppable", function () {
				e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
			})
		},
		drag: function (e, i) {
			e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
				if (!this.options.disabled && !this.greedyChild && this.visible) {
					var s, n, o, a = v(e, this, this.options.tolerance, i),
						r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
					r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function () {
						return t(this).droppable("instance").options.scope === n
					}), o.length && (s = t(o[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
				}
			})
		},
		dragStop: function (e, i) {
			e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
		}
	}, t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, {
		options: {
			hoverClass: !1,
			activeClass: !1
		},
		_addActiveClass: function () {
			this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
		},
		_removeActiveClass: function () {
			this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
		},
		_addHoverClass: function () {
			this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
		},
		_removeHoverClass: function () {
			this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
		}
	}), t.ui.droppable, t.widget("ui.progressbar", {
		version: "1.12.1",
		options: {
			classes: {
				"ui-progressbar": "ui-corner-all",
				"ui-progressbar-value": "ui-corner-left",
				"ui-progressbar-complete": "ui-corner-right"
			},
			max: 100,
			value: 0,
			change: null,
			complete: null
		},
		min: 0,
		_create: function () {
			this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
				role: "progressbar",
				"aria-valuemin": this.min
			}), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
		},
		_destroy: function () {
			this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
		},
		value: function (t) {
			return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), void 0)
		},
		_constrainedValue: function (t) {
			return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
		},
		_setOptions: function (t) {
			var e = t.value;
			delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
		},
		_setOption: function (t, e) {
			"max" === t && (e = Math.max(this.min, e)), this._super(t, e)
		},
		_setOptionDisabled: function (t) {
			this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
		},
		_percentage: function () {
			return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
		},
		_refreshValue: function () {
			var e = this.options.value,
				i = this._percentage();
			this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
				"aria-valuemax": this.options.max,
				"aria-valuenow": e
			}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
		}
	}), t.widget("ui.selectable", t.ui.mouse, {
		version: "1.12.1",
		options: {
			appendTo: "body",
			autoRefresh: !0,
			distance: 0,
			filter: "*",
			tolerance: "touch",
			selected: null,
			selecting: null,
			start: null,
			stop: null,
			unselected: null,
			unselecting: null
		},
		_create: function () {
			var e = this;
			this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
				e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function () {
					var i = t(this),
						s = i.offset(),
						n = {
							left: s.left - e.elementPos.left,
							top: s.top - e.elementPos.top
						};
					t.data(this, "selectable-item", {
						element: this,
						$element: i,
						left: n.left,
						top: n.top,
						right: n.left + i.outerWidth(),
						bottom: n.top + i.outerHeight(),
						startselected: !1,
						selected: i.hasClass("ui-selected"),
						selecting: i.hasClass("ui-selecting"),
						unselecting: i.hasClass("ui-unselecting")
					})
				})
			}, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
		},
		_destroy: function () {
			this.selectees.removeData("selectable-item"), this._mouseDestroy()
		},
		_mouseStart: function (e) {
			var i = this,
				s = this.options;
			this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
				left: e.pageX,
				top: e.pageY,
				width: 0,
				height: 0
			}), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
				var s = t.data(this, "selectable-item");
				s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
					unselecting: s.element
				}))
			}), t(e.target).parents().addBack().each(function () {
				var s, n = t.data(this, "selectable-item");
				return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
					selecting: n.element
				}) : i._trigger("unselecting", e, {
					unselecting: n.element
				}), !1) : void 0
			}))
		},
		_mouseDrag: function (e) {
			if (this.dragged = !0, !this.options.disabled) {
				var i, s = this,
					n = this.options,
					o = this.opos[0],
					a = this.opos[1],
					r = e.pageX,
					h = e.pageY;
				return o > r && (i = r, r = o, o = i), a > h && (i = h, h = a, a = i), this.helper.css({
					left: o,
					top: a,
					width: r - o,
					height: h - a
				}), this.selectees.each(function () {
					var i = t.data(this, "selectable-item"),
						l = !1,
						c = {};
					i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? l = !(c.left > r || o > c.right || c.top > h || a > c.bottom) : "fit" === n.tolerance && (l = c.left > o && r > c.right && c.top > a && h > c.bottom), l ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
						selecting: i.element
					}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
						unselecting: i.element
					}))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
						unselecting: i.element
					})))))
				}), !1
			}
		},
		_mouseStop: function (e) {
			var i = this;
			return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
				var s = t.data(this, "selectable-item");
				i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
					unselected: s.element
				})
			}), t(".ui-selecting", this.element[0]).each(function () {
				var s = t.data(this, "selectable-item");
				i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
					selected: s.element
				})
			}), this._trigger("stop", e), this.helper.remove(), !1
		}
	}), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
		version: "1.12.1",
		defaultElement: "<select>",
		options: {
			appendTo: null,
			classes: {
				"ui-selectmenu-button-open": "ui-corner-top",
				"ui-selectmenu-button-closed": "ui-corner-all"
			},
			disabled: null,
			icons: {
				button: "ui-icon-triangle-1-s"
			},
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			width: !1,
			change: null,
			close: null,
			focus: null,
			open: null,
			select: null
		},
		_create: function () {
			var e = this.element.uniqueId().attr("id");
			this.ids = {
				element: e,
				button: e + "-button",
				menu: e + "-menu"
			}, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
		},
		_drawButton: function () {
			var e, i = this,
				s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
			this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
				click: function (t) {
					this.button.focus(), t.preventDefault()
				}
			}), this.element.hide(), this.button = t("<span>", {
				tabindex: this.options.disabled ? -1 : 0,
				id: this.ids.button,
				role: "combobox",
				"aria-expanded": "false",
				"aria-autocomplete": "list",
				"aria-owns": this.ids.menu,
				"aria-haspopup": "true",
				title: this.element.attr("title")
			}).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
				i._rendered || i._refreshMenu()
			})
		},
		_drawMenu: function () {
			var e = this;
			this.menu = t("<ul>", {
				"aria-hidden": "true",
				"aria-labelledby": this.ids.button,
				id: this.ids.menu
			}), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
				classes: {
					"ui-menu": "ui-corner-bottom"
				},
				role: "listbox",
				select: function (t, i) {
					t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
				},
				focus: function (t, i) {
					var s = i.item.data("ui-selectmenu-item");
					null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
						item: s
					}), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
				}
			}).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
				return !1
			}, this.menuInstance._isDivider = function () {
				return !1
			}
		},
		refresh: function () {
			this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
		},
		_refreshMenu: function () {
			var t, e = this.element.find("option");
			this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
		},
		open: function (t) {
			this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
		},
		_position: function () {
			this.menuWrap.position(t.extend({ of: this.button
			}, this.options.position))
		},
		close: function (t) {
			this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
		},
		widget: function () {
			return this.button
		},
		menuWidget: function () {
			return this.menu
		},
		_renderButtonItem: function (e) {
			var i = t("<span>");
			return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
		},
		_renderMenu: function (e, i) {
			var s = this,
				n = "";
			t.each(i, function (i, o) {
				var a;
				o.optgroup !== n && (a = t("<li>", {
					text: o.optgroup
				}), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), n = o.optgroup), s._renderItemData(e, o)
			})
		},
		_renderItemData: function (t, e) {
			return this._renderItem(t, e).data("ui-selectmenu-item", e)
		},
		_renderItem: function (e, i) {
			var s = t("<li>"),
				n = t("<div>", {
					title: i.element.attr("title")
				});
			return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e)
		},
		_setText: function (t, e) {
			e ? t.text(e) : t.html(" ")
		},
		_move: function (t, e) {
			var i, s, n = ".ui-menu-item";
			this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0), s.length && this.menuInstance.focus(e, s)
		},
		_getSelectedItem: function () {
			return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
		},
		_toggle: function (t) {
			this[this.isOpen ? "close" : "open"](t)
		},
		_setSelection: function () {
			var t;
			this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
		},
		_documentClick: {
			mousedown: function (e) {
				this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
			}
		},
		_buttonEvents: {
			mousedown: function () {
				var t;
				window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
			},
			click: function (t) {
				this._setSelection(), this._toggle(t)
			},
			keydown: function (e) {
				var i = !0;
				switch (e.keyCode) {
					case t.ui.keyCode.TAB:
					case t.ui.keyCode.ESCAPE:
						this.close(e), i = !1;
						break;
					case t.ui.keyCode.ENTER:
						this.isOpen && this._selectFocusedItem(e);
						break;
					case t.ui.keyCode.UP:
						e.altKey ? this._toggle(e) : this._move("prev", e);
						break;
					case t.ui.keyCode.DOWN:
						e.altKey ? this._toggle(e) : this._move("next", e);
						break;
					case t.ui.keyCode.SPACE:
						this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
						break;
					case t.ui.keyCode.LEFT:
						this._move("prev", e);
						break;
					case t.ui.keyCode.RIGHT:
						this._move("next", e);
						break;
					case t.ui.keyCode.HOME:
					case t.ui.keyCode.PAGE_UP:
						this._move("first", e);
						break;
					case t.ui.keyCode.END:
					case t.ui.keyCode.PAGE_DOWN:
						this._move("last", e);
						break;
					default:
						this.menu.trigger(e), i = !1
				}
				i && e.preventDefault()
			}
		},
		_selectFocusedItem: function (t) {
			var e = this.menuItems.eq(this.focusIndex).parent("li");
			e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
		},
		_select: function (t, e) {
			var i = this.element[0].selectedIndex;
			this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
				item: t
			}), t.index !== i && this._trigger("change", e, {
				item: t
			}), this.close(e)
		},
		_setAria: function (t) {
			var e = this.menuItems.eq(t.index).attr("id");
			this.button.attr({
				"aria-labelledby": e,
				"aria-activedescendant": e
			}), this.menu.attr("aria-activedescendant", e)
		},
		_setOption: function (t, e) {
			if ("icons" === t) {
				var i = this.button.find("span.ui-icon");
				this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
			}
			this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
		},
		_setOptionDisabled: function (t) {
			this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
		},
		_appendTo: function () {
			var e = this.options.appendTo;
			return e && (e = e.jQueryCustom || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
		},
		_toggleAttr: function () {
			this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
		},
		_resizeButton: function () {
			var t = this.options.width;
			return t === !1 ? (this.button.css("width", ""), void 0) : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t), void 0)
		},
		_resizeMenu: function () {
			this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
		},
		_getCreateOptions: function () {
			var t = this._super();
			return t.disabled = this.element.prop("disabled"), t
		},
		_parseOptions: function (e) {
			var i = this,
				s = [];
			e.each(function (e, n) {
				s.push(i._parseOption(t(n), e))
			}), this.items = s
		},
		_parseOption: function (t, e) {
			var i = t.parent("optgroup");
			return {
				element: t,
				index: e,
				value: t.val(),
				label: t.text(),
				optgroup: i.attr("label") || "",
				disabled: i.prop("disabled") || t.prop("disabled")
			}
		},
		_destroy: function () {
			this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
		}
	}]), t.widget("ui.slider", t.ui.mouse, {
		version: "1.12.1",
		widgetEventPrefix: "slide",
		options: {
			animate: !1,
			classes: {
				"ui-slider": "ui-corner-all",
				"ui-slider-handle": "ui-corner-all",
				"ui-slider-range": "ui-corner-all ui-widget-header"
			},
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: !1,
			step: 1,
			value: 0,
			values: null,
			change: null,
			slide: null,
			start: null,
			stop: null
		},
		numPages: 5,
		_create: function () {
			this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
		},
		_refresh: function () {
			this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
		},
		_createHandles: function () {
			var e, i, s = this.options,
				n = this.element.find(".ui-slider-handle"),
				o = "<span tabindex='0'></span>",
				a = [];
			for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) a.push(o);
			this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e) {
				t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
			})
		},
		_createRange: function () {
			var e = this.options;
			e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
				left: "",
				bottom: ""
			})) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
		},
		_setupEvents: function () {
			this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
		},
		_destroy: function () {
			this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
		},
		_mouseCapture: function (e) {
			var i, s, n, o, a, r, h, l, c = this,
				u = this.options;
			return u.disabled ? !1 : (this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			}, this.elementOffset = this.element.offset(), i = {
				x: e.pageX,
				y: e.pageY
			}, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
				var i = Math.abs(s - c.values(e));
				(n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e)
			}), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), h = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
				left: 0,
				top: 0
			} : {
				left: e.pageX - h.left - o.width() / 2,
				top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
			}, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
		},
		_mouseStart: function () {
			return !0
		},
		_mouseDrag: function (t) {
			var e = {
					x: t.pageX,
					y: t.pageY
				},
				i = this._normValueFromMouse(e);
			return this._slide(t, this._handleIndex, i), !1
		},
		_mouseStop: function (t) {
			return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
		},
		_detectOrientation: function () {
			this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
		},
		_normValueFromMouse: function (t) {
			var e, i, s, n, o;
			return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
		},
		_uiHash: function (t, e, i) {
			var s = {
				handle: this.handles[t],
				handleIndex: t,
				value: void 0 !== e ? e : this.value()
			};
			return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
		},
		_hasMultipleValues: function () {
			return this.options.values && this.options.values.length
		},
		_start: function (t, e) {
			return this._trigger("start", t, this._uiHash(e))
		},
		_slide: function (t, e, i) {
			var s, n, o = this.value(),
				a = this.values();
			this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
		},
		_stop: function (t, e) {
			this._trigger("stop", t, this._uiHash(e))
		},
		_change: function (t, e) {
			this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
		},
		value: function (t) {
			return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value()
		},
		values: function (e, i) {
			var s, n, o;
			if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;
			if (!arguments.length) return this._values();
			if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
			for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
			this._refreshValue()
		},
		_setOption: function (e, i) {
			var s, n = 0;
			switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
				case "orientation":
					this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
					break;
				case "value":
					this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
					break;
				case "values":
					for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
					this._animateOff = !1;
					break;
				case "step":
				case "min":
				case "max":
					this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
					break;
				case "range":
					this._animateOff = !0, this._refresh(), this._animateOff = !1
			}
		},
		_setOptionDisabled: function (t) {
			this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
		},
		_value: function () {
			var t = this.options.value;
			return t = this._trimAlignValue(t)
		},
		_values: function (t) {
			var e, i, s;
			if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
			if (this._hasMultipleValues()) {
				for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
				return i
			}
			return []
		},
		_trimAlignValue: function (t) {
			if (this._valueMin() >= t) return this._valueMin();
			if (t >= this._valueMax()) return this._valueMax();
			var e = this.options.step > 0 ? this.options.step : 1,
				i = (t - this._valueMin()) % e,
				s = t - i;
			return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
		},
		_calculateNewMax: function () {
			var t = this.options.max,
				e = this._valueMin(),
				i = this.options.step,
				s = Math.round((t - e) / i) * i;
			t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
		},
		_precision: function () {
			var t = this._precisionOf(this.options.step);
			return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
		},
		_precisionOf: function (t) {
			var e = "" + t,
				i = e.indexOf(".");
			return -1 === i ? 0 : e.length - i - 1
		},
		_valueMin: function () {
			return this.options.min
		},
		_valueMax: function () {
			return this.max
		},
		_refreshRange: function (t) {
			"vertical" === t && this.range.css({
				width: "",
				left: ""
			}), "horizontal" === t && this.range.css({
				height: "",
				bottom: ""
			})
		},
		_refreshValue: function () {
			var e, i, s, n, o, a = this.options.range,
				r = this.options,
				h = this,
				l = this._animateOff ? !1 : r.animate,
				c = {};
			this._hasMultipleValues() ? this.handles.each(function (s) {
				i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), c["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
					left: i + "%"
				}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
					width: i - e + "%"
				}, {
					queue: !1,
					duration: r.animate
				})) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
					bottom: i + "%"
				}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
					height: i - e + "%"
				}, {
					queue: !1,
					duration: r.animate
				}))), e = i
			}) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				width: i + "%"
			}, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				width: 100 - i + "%"
			}, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				height: i + "%"
			}, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				height: 100 - i + "%"
			}, r.animate))
		},
		_handleEvents: {
			keydown: function (e) {
				var i, s, n, o, a = t(e.target).data("ui-slider-handle-index");
				switch (e.keyCode) {
					case t.ui.keyCode.HOME:
					case t.ui.keyCode.END:
					case t.ui.keyCode.PAGE_UP:
					case t.ui.keyCode.PAGE_DOWN:
					case t.ui.keyCode.UP:
					case t.ui.keyCode.RIGHT:
					case t.ui.keyCode.DOWN:
					case t.ui.keyCode.LEFT:
						if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return
				}
				switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {
					case t.ui.keyCode.HOME:
						n = this._valueMin();
						break;
					case t.ui.keyCode.END:
						n = this._valueMax();
						break;
					case t.ui.keyCode.PAGE_UP:
						n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
						break;
					case t.ui.keyCode.PAGE_DOWN:
						n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
						break;
					case t.ui.keyCode.UP:
					case t.ui.keyCode.RIGHT:
						if (s === this._valueMax()) return;
						n = this._trimAlignValue(s + o);
						break;
					case t.ui.keyCode.DOWN:
					case t.ui.keyCode.LEFT:
						if (s === this._valueMin()) return;
						n = this._trimAlignValue(s - o)
				}
				this._slide(e, a, n)
			},
			keyup: function (e) {
				var i = t(e.target).data("ui-slider-handle-index");
				this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
			}
		}
	}), t.widget("ui.sortable", t.ui.mouse, {
		version: "1.12.1",
		widgetEventPrefix: "sort",
		ready: !1,
		options: {
			appendTo: "parent",
			axis: !1,
			connectWith: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			dropOnEmpty: !0,
			forcePlaceholderSize: !1,
			forceHelperSize: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			items: "> *",
			opacity: !1,
			placeholder: !1,
			revert: !1,
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1e3,
			activate: null,
			beforeStop: null,
			change: null,
			deactivate: null,
			out: null,
			over: null,
			receive: null,
			remove: null,
			sort: null,
			start: null,
			stop: null,
			update: null
		},
		_isOverAxis: function (t, e, i) {
			return t >= e && e + i > t
		},
		_isFloating: function (t) {
			return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
		},
		_create: function () {
			this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
		},
		_setOption: function (t, e) {
			this._super(t, e), "handle" === t && this._setHandleClassName()
		},
		_setHandleClassName: function () {
			var e = this;
			this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function () {
				e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
			})
		},
		_destroy: function () {
			this._mouseDestroy();
			for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
			return this
		},
		_mouseCapture: function (e, i) {
			var s = null,
				n = !1,
				o = this;
			return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
				return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0
			}), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () {
				this === e.target && (n = !0)
			}), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
		},
		_mouseStart: function (e, i, s) {
			var n, o, a = this.options;
			if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
					top: this.offset.top - this.margins.top,
					left: this.offset.left - this.margins.left
				}, t.extend(this.offset, {
					click: {
						left: e.pageX - this.offset.left,
						top: e.pageY - this.offset.top
					},
					parent: this._getParentOffset(),
					relative: this._getRelativeOffset()
				}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
					prev: this.currentItem.prev()[0],
					parent: this.currentItem.parent()[0]
				}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
				for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
			return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
		},
		_mouseDrag: function (e) {
			var i, s, n, o, a = this.options,
				r = !1;
			for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
				if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
					if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
					this._rearrange(e, s), this._trigger("change", e, this._uiHash());
					break
				}
			return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
		},
		_mouseStop: function (e, i) {
			if (e) {
				if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
					var s = this,
						n = this.placeholder.offset(),
						o = this.options.axis,
						a = {};
					o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
						s._clear(e)
					})
				} else this._clear(e, i);
				return !1
			}
		},
		cancel: function () {
			if (this.dragging) {
				this._mouseUp(new t.Event("mouseup", {
					target: null
				})), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
				for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
			}
			return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
				helper: null,
				dragging: !1,
				reverting: !1,
				_noFinalSort: null
			}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
		},
		serialize: function (e) {
			var i = this._getItemsAsjQueryCustom(e && e.connected),
				s = [];
			return e = e || {}, t(i).each(function () {
				var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
				i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
			}), !s.length && e.key && s.push(e.key + "="), s.join("&")
		},
		toArray: function (e) {
			var i = this._getItemsAsjQueryCustom(e && e.connected),
				s = [];
			return e = e || {}, i.each(function () {
				s.push(t(e.item || this).attr(e.attribute || "id") || "")
			}), s
		},
		_intersectsWith: function (t) {
			var e = this.positionAbs.left,
				i = e + this.helperProportions.width,
				s = this.positionAbs.top,
				n = s + this.helperProportions.height,
				o = t.left,
				a = o + t.width,
				r = t.top,
				h = r + t.height,
				l = this.offset.click.top,
				c = this.offset.click.left,
				u = "x" === this.options.axis || s + l > r && h > s + l,
				d = "y" === this.options.axis || e + c > o && a > e + c,
				p = u && d;
			return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
		},
		_intersectsWithPointer: function (t) {
			var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
				n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
				o = s && n;
			return o ? (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) : !1
		},
		_intersectsWithSides: function (t) {
			var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
				i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
				s = this._getDragVerticalDirection(),
				n = this._getDragHorizontalDirection();
			return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
		},
		_getDragVerticalDirection: function () {
			var t = this.positionAbs.top - this.lastPositionAbs.top;
			return 0 !== t && (t > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection: function () {
			var t = this.positionAbs.left - this.lastPositionAbs.left;
			return 0 !== t && (t > 0 ? "right" : "left")
		},
		refresh: function (t) {
			return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
		},
		_connectWith: function () {
			var t = this.options;
			return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
		},
		_getItemsAsjQueryCustom: function (e) {
			function i() {
				r.push(this)
			}
			var s, n, o, a, r = [],
				h = [],
				l = this._connectWith();
			if (l && e)
				for (s = l.length - 1; s >= 0; s--)
					for (o = t(l[s], this.document[0]), n = o.length - 1; n >= 0; n--) a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
			for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
					options: this.options,
					item: this.currentItem
				}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
			return t(r)
		},
		_removeCurrentsFromItems: function () {
			var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = t.grep(this.items, function (t) {
				for (var i = 0; e.length > i; i++)
					if (e[i] === t.item[0]) return !1;
				return !0
			})
		},
		_refreshItems: function (e) {
			this.items = [], this.containers = [this];
			var i, s, n, o, a, r, h, l, c = this.items,
				u = [
					[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
						item: this.currentItem
					}) : t(this.options.items, this.element), this]
				],
				d = this._connectWith();
			if (d && this.ready)
				for (i = d.length - 1; i >= 0; i--)
					for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
						item: this.currentItem
					}) : t(o.options.items, o.element), o]), this.containers.push(o));
			for (i = u.length - 1; i >= 0; i--)
				for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({
					item: h,
					instance: a,
					width: 0,
					height: 0,
					left: 0,
					top: 0
				})
		},
		refreshPositions: function (e) {
			this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
			var i, s, n, o;
			for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
			if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
			else
				for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
			return this
		},
		_createPlaceholder: function (e) {
			e = e || this;
			var i, s = e.options;
			s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
				element: function () {
					var s = e.currentItem[0].nodeName.toLowerCase(),
						n = t("<" + s + ">", e.document[0]);
					return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
				},
				update: function (t, n) {
					(!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
				}
			}), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
		},
		_createTrPlaceholder: function (e, i) {
			var s = this;
			e.children().each(function () {
				t("<td> </td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
			})
		},
		_contactContainers: function (e) {
			var i, s, n, o, a, r, h, l, c, u, d = null,
				p = null;
			for (i = this.containers.length - 1; i >= 0; i--)
				if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
					if (this._intersectsWith(this.containers[i].containerCache)) {
						if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
						d = this.containers[i], p = i
					} else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
			if (d)
				if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
				else {
					for (n = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[a], l = !1, e[u] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(e[u] - h) && (n = Math.abs(e[u] - h), o = this.items[s], this.direction = l ? "up" : "down"));
					if (!o && !this.options.dropOnEmpty) return;
					if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
					o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
				}
		},
		_createHelper: function (e) {
			var i = this.options,
				s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
			return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
				width: this.currentItem[0].style.width,
				height: this.currentItem[0].style.height,
				position: this.currentItem.css("position"),
				top: this.currentItem.css("top"),
				left: this.currentItem.css("left")
			}), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
		},
		_adjustOffsetFromHelper: function (e) {
			"string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
				left: +e[0],
				top: +e[1] || 0
			}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_getParentOffset: function () {
			this.offsetParent = this.helper.offsetParent();
			var e = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
				top: 0,
				left: 0
			}), {
				top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function () {
			if ("relative" === this.cssPosition) {
				var t = this.currentItem.position();
				return {
					top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function () {
			this.margins = {
				left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top: parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions: function () {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function () {
			var e, i, s, n = this.options;
			"parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
		},
		_convertPositionTo: function (e, i) {
			i || (i = this.position);
			var s = "absolute" === e ? 1 : -1,
				n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				o = /(html|body)/i.test(n[0].tagName);
			return {
				top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
				left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
			}
		},
		_generatePosition: function (e) {
			var i, s, n = this.options,
				o = e.pageX,
				a = e.pageY,
				r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				h = /(html|body)/i.test(r[0].tagName);
			return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
				top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
				left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
			}
		},
		_rearrange: function (t, e, i, s) {
			i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
			var n = this.counter;
			this._delay(function () {
				n === this.counter && this.refreshPositions(!s)
			})
		},
		_clear: function (t, e) {
			function i(t, e, i) {
				return function (s) {
					i._trigger(t, s, e._uiHash(e))
				}
			}
			this.reverting = !1;
			var s, n = [];
			if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
				for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
				this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
			} else this.currentItem.show();
			for (this.fromOutside && !e && n.push(function (t) {
					this._trigger("receive", t, this._uiHash(this.fromOutside))
				}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) {
					this._trigger("update", t, this._uiHash())
				}), this !== this.currentContainer && (e || (n.push(function (t) {
					this._trigger("remove", t, this._uiHash())
				}), n.push(function (t) {
					return function (e) {
						t._trigger("receive", e, this._uiHash(this))
					}
				}.call(this, this.currentContainer)), n.push(function (t) {
					return function (e) {
						t._trigger("update", e, this._uiHash(this))
					}
				}.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
			if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
				for (s = 0; n.length > s; s++) n[s].call(this, t);
				this._trigger("stop", t, this._uiHash())
			}
			return this.fromOutside = !1, !this.cancelHelperRemoval
		},
		_trigger: function () {
			t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
		},
		_uiHash: function (e) {
			var i = e || this;
			return {
				helper: i.helper,
				placeholder: i.placeholder || t([]),
				position: i.position,
				originalPosition: i.originalPosition,
				offset: i.positionAbs,
				item: i.currentItem,
				sender: e ? e.element : null
			}
		}
	}), t.widget("ui.spinner", {
		version: "1.12.1",
		defaultElement: "<input>",
		widgetEventPrefix: "spin",
		options: {
			classes: {
				"ui-spinner": "ui-corner-all",
				"ui-spinner-down": "ui-corner-br",
				"ui-spinner-up": "ui-corner-tr"
			},
			culture: null,
			icons: {
				down: "ui-icon-triangle-1-s",
				up: "ui-icon-triangle-1-n"
			},
			incremental: !0,
			max: null,
			min: null,
			numberFormat: null,
			page: 10,
			step: 1,
			change: null,
			spin: null,
			start: null,
			stop: null
		},
		_create: function () {
			this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
				beforeunload: function () {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_getCreateOptions: function () {
			var e = this._super(),
				i = this.element;
			return t.each(["min", "max", "step"], function (t, s) {
				var n = i.attr(s);
				null != n && n.length && (e[s] = n)
			}), e
		},
		_events: {
			keydown: function (t) {
				this._start(t) && this._keydown(t) && t.preventDefault()
			},
			keyup: "_stop",
			focus: function () {
				this.previous = this.element.val()
			},
			blur: function (t) {
				return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
			},
			mousewheel: function (t, e) {
				if (e) {
					if (!this.spinning && !this._start(t)) return !1;
					this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
						this.spinning && this._stop(t)
					}, 100), t.preventDefault()
				}
			},
			"mousedown .ui-spinner-button": function (e) {
				function i() {
					var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
					e || (this.element.trigger("focus"), this.previous = s, this._delay(function () {
						this.previous = s
					}))
				}
				var s;
				s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
					delete this.cancelBlur, i.call(this)
				}), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
			},
			"mouseup .ui-spinner-button": "_stop",
			"mouseenter .ui-spinner-button": function (e) {
				return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
			},
			"mouseleave .ui-spinner-button": "_stop"
		},
		_enhance: function () {
			this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
		},
		_draw: function () {
			this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
				classes: {
					"ui-button": ""
				}
			}), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
				icon: this.options.icons.up,
				showLabel: !1
			}), this.buttons.last().button({
				icon: this.options.icons.down,
				showLabel: !1
			}), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
		},
		_keydown: function (e) {
			var i = this.options,
				s = t.ui.keyCode;
			switch (e.keyCode) {
				case s.UP:
					return this._repeat(null, 1, e), !0;
				case s.DOWN:
					return this._repeat(null, -1, e), !0;
				case s.PAGE_UP:
					return this._repeat(null, i.page, e), !0;
				case s.PAGE_DOWN:
					return this._repeat(null, -i.page, e), !0
			}
			return !1
		},
		_start: function (t) {
			return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
		},
		_repeat: function (t, e, i) {
			t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
				this._repeat(40, e, i)
			}, t), this._spin(e * this.options.step, i)
		},
		_spin: function (t, e) {
			var i = this.value() || 0;
			this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
				value: i
			}) === !1 || (this._value(i), this.counter++)
		},
		_increment: function (e) {
			var i = this.options.incremental;
			return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
		},
		_precision: function () {
			var t = this._precisionOf(this.options.step);
			return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
		},
		_precisionOf: function (t) {
			var e = "" + t,
				i = e.indexOf(".");
			return -1 === i ? 0 : e.length - i - 1
		},
		_adjustValue: function (t) {
			var e, i, s = this.options;
			return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
		},
		_stop: function (t) {
			this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
		},
		_setOption: function (t, e) {
			var i, s, n;
			return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, this.element.val(this._format(i)), void 0) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e), void 0)
		},
		_setOptionDisabled: function (t) {
			this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
		},
		_setOptions: r(function (t) {
			this._super(t)
		}),
		_parse: function (t) {
			return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
		},
		_format: function (t) {
			return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
		},
		_refresh: function () {
			this.element.attr({
				"aria-valuemin": this.options.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._parse(this.element.val())
			})
		},
		isValid: function () {
			var t = this.value();
			return null === t ? !1 : t === this._adjustValue(t)
		},
		_value: function (t, e) {
			var i;
			"" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
		},
		_destroy: function () {
			this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
		},
		stepUp: r(function (t) {
			this._stepUp(t)
		}),
		_stepUp: function (t) {
			this._start() && (this._spin((t || 1) * this.options.step), this._stop())
		},
		stepDown: r(function (t) {
			this._stepDown(t)
		}),
		_stepDown: function (t) {
			this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
		},
		pageUp: r(function (t) {
			this._stepUp((t || 1) * this.options.page)
		}),
		pageDown: r(function (t) {
			this._stepDown((t || 1) * this.options.page)
		}),
		value: function (t) {
			return arguments.length ? (r(this._value).call(this, t), void 0) : this._parse(this.element.val())
		},
		widget: function () {
			return this.uiSpinner
		}
	}), t.uiBackCompat !== !1 && t.widget("ui.spinner", t.ui.spinner, {
		_enhance: function () {
			this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
		},
		_uiSpinnerHtml: function () {
			return "<span>"
		},
		_buttonHtml: function () {
			return "<a></a><a></a>"
		}
	}), t.ui.spinner, t.widget("ui.tabs", {
		version: "1.12.1",
		delay: 300,
		options: {
			active: null,
			classes: {
				"ui-tabs": "ui-corner-all",
				"ui-tabs-nav": "ui-corner-all",
				"ui-tabs-panel": "ui-corner-bottom",
				"ui-tabs-tab": "ui-corner-top"
			},
			collapsible: !1,
			event: "click",
			heightStyle: "content",
			hide: null,
			show: null,
			activate: null,
			beforeActivate: null,
			beforeLoad: null,
			load: null
		},
		_isLocal: function () {
			var t = /#.*$/;
			return function (e) {
				var i, s;
				i = e.href.replace(t, ""), s = location.href.replace(t, "");
				try {
					i = decodeURIComponent(i)
				} catch (n) {}
				try {
					s = decodeURIComponent(s)
				} catch (n) {}
				return e.hash.length > 1 && i === s
			}
		}(),
		_create: function () {
			var e = this,
				i = this.options;
			this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
				return e.tabs.index(t)
			}))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
		},
		_initialActive: function () {
			var e = this.options.active,
				i = this.options.collapsible,
				s = location.hash.substring(1);
			return null === e && (s && this.tabs.each(function (i, n) {
				return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0
			}), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e
		},
		_getCreateEventData: function () {
			return {
				tab: this.active,
				panel: this.active.length ? this._getPanelForTab(this.active) : t()
			}
		},
		_tabKeydown: function (e) {
			var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
				s = this.tabs.index(i),
				n = !0;
			if (!this._handlePageNav(e)) {
				switch (e.keyCode) {
					case t.ui.keyCode.RIGHT:
					case t.ui.keyCode.DOWN:
						s++;
						break;
					case t.ui.keyCode.UP:
					case t.ui.keyCode.LEFT:
						n = !1, s--;
						break;
					case t.ui.keyCode.END:
						s = this.anchors.length - 1;
						break;
					case t.ui.keyCode.HOME:
						s = 0;
						break;
					case t.ui.keyCode.SPACE:
						return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;
					case t.ui.keyCode.ENTER:
						return e.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;
					default:
						return
				}
				e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () {
					this.option("active", s)
				}, this.delay))
			}
		},
		_panelKeydown: function (e) {
			this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
		},
		_handlePageNav: function (e) {
			return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
		},
		_findNextTab: function (e, i) {
			function s() {
				return e > n && (e = 0), 0 > e && (e = n), e
			}
			for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
			return e
		},
		_focusNextTab: function (t, e) {
			return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
		},
		_setOption: function (t, e) {
			return "active" === t ? (this._activate(e), void 0) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0)
		},
		_sanitizeSelector: function (t) {
			return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
		},
		refresh: function () {
			var e = this.options,
				i = this.tablist.children(":has(a[href])");
			e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
				return i.index(t)
			}), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
		},
		_refresh: function () {
			this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
				"aria-selected": "false",
				"aria-expanded": "false",
				tabIndex: -1
			}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
				"aria-hidden": "true"
			}), this.active.length ? (this.active.attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			}), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
				"aria-hidden": "false"
			})) : this.tabs.eq(0).attr("tabIndex", 0)
		},
		_processTabs: function () {
			var e = this,
				i = this.tabs,
				s = this.anchors,
				n = this.panels;
			this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (e) {
				t(this).is(".ui-state-disabled") && e.preventDefault()
			}).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
				t(this).closest("li").is(".ui-state-disabled") && this.blur()
			}), this.tabs = this.tablist.find("> li:has(a[href])").attr({
				role: "tab",
				tabIndex: -1
			}), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
				return t("a", this)[0]
			}).attr({
				role: "presentation",
				tabIndex: -1
			}), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function (i, s) {
				var n, o, a, r = t(s).uniqueId().attr("id"),
					h = t(s).closest("li"),
					l = h.attr("aria-controls");
				e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = h.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), l && h.data("ui-tabs-aria-controls", l), h.attr({
					"aria-controls": a,
					"aria-labelledby": r
				}), o.attr("aria-labelledby", r)
			}), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
		},
		_getList: function () {
			return this.tablist || this.element.find("ol, ul").eq(0)
		},
		_createPanel: function (e) {
			return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
		},
		_setOptionDisabled: function (e) {
			var i, s, n;
			for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), e === !0 || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
			this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0)
		},
		_setupEvents: function (e) {
			var i = {};
			e && t.each(e.split(" "), function (t, e) {
				i[e] = "_eventHandler"
			}), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
				click: function (t) {
					t.preventDefault()
				}
			}), this._on(this.anchors, i), this._on(this.tabs, {
				keydown: "_tabKeydown"
			}), this._on(this.panels, {
				keydown: "_panelKeydown"
			}), this._focusable(this.tabs), this._hoverable(this.tabs)
		},
		_setupHeightStyle: function (e) {
			var i, s = this.element.parent();
			"fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
				var e = t(this),
					s = e.css("position");
				"absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
			}), this.element.children().not(this.panels).each(function () {
				i -= t(this).outerHeight(!0)
			}), this.panels.each(function () {
				t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
			}).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
				i = Math.max(i, t(this).height("").height())
			}).height(i))
		},
		_eventHandler: function (e) {
			var i = this.options,
				s = this.active,
				n = t(e.currentTarget),
				o = n.closest("li"),
				a = o[0] === s[0],
				r = a && i.collapsible,
				h = r ? t() : this._getPanelForTab(o),
				l = s.length ? this._getPanelForTab(s) : t(),
				c = {
					oldTab: s,
					oldPanel: l,
					newTab: r ? t() : o,
					newPanel: h
				};
			e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQueryCustom UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
		},
		_toggle: function (e, i) {
			function s() {
				o.running = !1, o._trigger("activate", e, i)
			}

			function n() {
				o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s())
			}
			var o = this,
				a = i.newPanel,
				r = i.oldPanel;
			this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
				o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n()
			}) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
				"aria-selected": "false",
				"aria-expanded": "false"
			}), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
				return 0 === t(this).attr("tabIndex")
			}).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			})
		},
		_activate: function (e) {
			var i, s = this._findActive(e);
			s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: t.noop
			}))
		},
		_findActive: function (e) {
			return e === !1 ? t() : this.tabs.eq(e)
		},
		_getIndex: function (e) {
			return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
		},
		_destroy: function () {
			this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
				t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
			}), this.tabs.each(function () {
				var e = t(this),
					i = e.data("ui-tabs-aria-controls");
				i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
			}), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
		},
		enable: function (e) {
			var i = this.options.disabled;
			i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) {
				return t !== e ? t : null
			}) : t.map(this.tabs, function (t, i) {
				return i !== e ? i : null
			})), this._setOptionDisabled(i))
		},
		disable: function (e) {
			var i = this.options.disabled;
			if (i !== !0) {
				if (void 0 === e) i = !0;
				else {
					if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
					i = t.isArray(i) ? t.merge([e], i).sort() : [e]
				}
				this._setOptionDisabled(i)
			}
		},
		load: function (e, i) {
			e = this._getIndex(e);
			var s = this,
				n = this.tabs.eq(e),
				o = n.find(".ui-tabs-anchor"),
				a = this._getPanelForTab(n),
				r = {
					tab: n,
					panel: a
				},
				h = function (t, e) {
					"abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
				};
			this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (t, e, n) {
				setTimeout(function () {
					a.html(t), s._trigger("load", i, r), h(n, e)
				}, 1)
			}).fail(function (t, e) {
				setTimeout(function () {
					h(t, e)
				}, 1)
			})))
		},
		_ajaxSettings: function (e, i, s) {
			var n = this;
			return {
				url: e.attr("href").replace(/#.*$/, ""),
				beforeSend: function (e, o) {
					return n._trigger("beforeLoad", i, t.extend({
						jqXHR: e,
						ajaxSettings: o
					}, s))
				}
			}
		},
		_getPanelForTab: function (e) {
			var i = t(e).attr("aria-controls");
			return this.element.find(this._sanitizeSelector("#" + i))
		}
	}), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, {
		_processTabs: function () {
			this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
		}
	}), t.ui.tabs, t.widget("ui.tooltip", {
		version: "1.12.1",
		options: {
			classes: {
				"ui-tooltip": "ui-corner-all ui-widget-shadow"
			},
			content: function () {
				var e = t(this).attr("title") || "";
				return t("<a>").text(e).html()
			},
			hide: !0,
			items: "[title]:not([disabled])",
			position: {
				my: "left top+15",
				at: "left bottom",
				collision: "flipfit flip"
			},
			show: !0,
			track: !1,
			close: null,
			open: null
		},
		_addDescribedBy: function (e, i) {
			var s = (e.attr("aria-describedby") || "").split(/\s+/);
			s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
		},
		_removeDescribedBy: function (e) {
			var i = e.data("ui-tooltip-id"),
				s = (e.attr("aria-describedby") || "").split(/\s+/),
				n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
		},
		_create: function () {
			this._on({
				mouseover: "open",
				focusin: "open"
			}), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
				role: "log",
				"aria-live": "assertive",
				"aria-relevant": "additions"
			}).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
		},
		_setOption: function (e, i) {
			var s = this;
			this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
				s._updateContent(e.element)
			})
		},
		_setOptionDisabled: function (t) {
			this[t ? "_disable" : "_enable"]()
		},
		_disable: function () {
			var e = this;
			t.each(this.tooltips, function (i, s) {
				var n = t.Event("blur");
				n.target = n.currentTarget = s.element[0], e.close(n, !0)
			}), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
				var e = t(this);
				return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
			}))
		},
		_enable: function () {
			this.disabledTitles.each(function () {
				var e = t(this);
				e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
			}), this.disabledTitles = t([])
		},
		open: function (e) {
			var i = this,
				s = t(e ? e.target : this.element).closest(this.options.items);
			s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () {
				var e, s = t(this);
				s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
					element: this,
					title: s.attr("title")
				}, s.attr("title", ""))
			}), this._registerCloseHandlers(e, s), this._updateContent(s, e))
		},
		_updateContent: function (t, e) {
			var i, s = this.options.content,
				n = this,
				o = e ? e.type : null;
			return "string" == typeof s || s.nodeType || s.jQueryCustom ? this._open(e, t, s) : (i = s.call(t[0], function (i) {
				n._delay(function () {
					t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
				})
			}), i && this._open(e, t, i), void 0)
		},
		_open: function (e, i, s) {
			function n(t) {
				l.of = t, a.is(":hidden") || a.position(l)
			}
			var o, a, r, h, l = t.extend({}, this.options.position);
			if (s) {
				if (o = this._find(i)) return o.tooltip.find(".ui-tooltip-content").html(s), void 0;
				i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), h = t("<div>").html(a.find(".ui-tooltip-content").html()), h.removeAttr("name").find("[name]").removeAttr("name"), h.removeAttr("id").find("[id]").removeAttr("id"), h.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
					mousemove: n
				}), n(e)) : a.position(t.extend({ of: i
				}, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
					a.is(":visible") && (n(l.of), clearInterval(r))
				}, t.fx.interval)), this._trigger("open", e, {
					tooltip: a
				})
			}
		},
		_registerCloseHandlers: function (e, i) {
			var s = {
				keyup: function (e) {
					if (e.keyCode === t.ui.keyCode.ESCAPE) {
						var s = t.Event(e);
						s.currentTarget = i[0], this.close(s, !0)
					}
				}
			};
			i[0] !== this.element[0] && (s.remove = function () {
				this._removeTooltip(this._find(i).tooltip)
			}), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s)
		},
		close: function (e) {
			var i, s = this,
				n = t(e ? e.currentTarget : this.element),
				o = this._find(n);
			return o ? (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
				s._removeTooltip(t(this))
			}), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
				t(i.element).attr("title", i.title), delete s.parents[e]
			}), o.closing = !0, this._trigger("close", e, {
				tooltip: i
			}), o.hiding || (o.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0)
		},
		_tooltip: function (e) {
			var i = t("<div>").attr("role", "tooltip"),
				s = t("<div>").appendTo(i),
				n = i.uniqueId().attr("id");
			return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = {
				element: e,
				tooltip: i
			}
		},
		_find: function (t) {
			var e = t.data("ui-tooltip-id");
			return e ? this.tooltips[e] : null
		},
		_removeTooltip: function (t) {
			t.remove(), delete this.tooltips[t.attr("id")]
		},
		_appendTo: function (t) {
			var e = t.closest(".ui-front, dialog");
			return e.length || (e = this.document[0].body), e
		},
		_destroy: function () {
			var e = this;
			t.each(this.tooltips, function (i, s) {
				var n = t.Event("blur"),
					o = s.element;
				n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
			}), this.liveRegion.remove()
		}
	}), t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, {
		options: {
			tooltipClass: null
		},
		_tooltip: function () {
			var t = this._superApply(arguments);
			return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
		}
	}), t.ui.tooltip
});
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function(jQueryCustom) {

  jQueryCustom.fn.extend({
    slimScroll: function(options) {

      var defaults = {

        // width in pixels of the visible scroll area
        width : 'auto',

        // height in pixels of the visible scroll area
        height : '250px',

        // width in pixels of the scrollbar and rail
        size : '7px',

        // scrollbar color, accepts any hex/color value
        color: '#000',

        // scrollbar position - left/right
        position : 'right',

        // distance in pixels between the side edge and the scrollbar
        distance : '1px',

        // default scroll position on load - top / bottom / jQueryCustom('selector')
        start : 'top',

        // sets scrollbar opacity
        opacity : .4,

        // enables always-on mode for the scrollbar
        alwaysVisible : false,

        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut : false,

        // sets visibility of the rail
        railVisible : false,

        // sets rail color
        railColor : '#333',

        // sets rail opacity
        railOpacity : .2,

        // whether  we should use jQueryCustom UI Draggable to enable bar dragging
        railDraggable : true,

        // defautlt CSS class of the slimscroll rail
        railClass : 'slimScrollRail',

        // defautlt CSS class of the slimscroll bar
        barClass : 'slimScrollBar',

        // defautlt CSS class of the slimscroll wrapper
        wrapperClass : 'slimScrollDiv',

        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll : false,

        // scroll amount applied to each mouse wheel step
        wheelStep : 20,

        // scroll amount applied when user is using gestures
        touchScrollStep : 200,

        // sets border radius
        borderRadius: '7px',

        // sets border radius of the rail
        railBorderRadius : '7px'
      };

      var o = jQueryCustom.extend(defaults, options);

      // do it for every element that matches selector
      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
        barHeight, percentScroll, lastScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false;

        // used in event handlers and for better minification
        var me = jQueryCustom(this);

        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass))
        {
            // start from last bar position
            var offset = me.scrollTop();

            // find bar and rail
            bar = me.siblings('.' + o.barClass);
            rail = me.siblings('.' + o.railClass);

            getBarHeight();

            // check if we should scroll existing instance
            if (jQueryCustom.isPlainObject(options))
            {
              // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
              if ( 'height' in options && options.height == 'auto' ) {
                me.parent().css('height', 'auto');
                me.css('height', 'auto');
                var height = me.parent().parent().height();
                me.parent().css('height', height);
                me.css('height', height);
              } else if ('height' in options) {
                var h = options.height;
                me.parent().css('height', h);
                me.css('height', h);
              }

              if ('scrollTo' in options)
              {
                // jump to a static point
                offset = parseInt(o.scrollTo);
              }
              else if ('scrollBy' in options)
              {
                // jump by value pixels
                offset += parseInt(o.scrollBy);
              }
              else if ('destroy' in options)
              {
                // remove slimscroll elements
                bar.remove();
                rail.remove();
                me.unwrap();
                return;
              }

              // scroll content by the given offset
              scrollContent(offset, false, true);
            }

            return;
        }
        else if (jQueryCustom.isPlainObject(options))
        {
            if ('destroy' in options)
            {
            	return;
            }
        }

        // optionally set height to the parent's height
        o.height = (o.height == 'auto') ? me.parent().height() : o.height;

        // wrap content
        var wrapper = jQueryCustom(divS)
          .addClass(o.wrapperClass)
          .css({
            position: 'relative',
            overflow: 'hidden',
            width: o.width,
            height: o.height
          });

        // update style for the div
        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height
        });

        // create scrollbar rail
        var rail = jQueryCustom(divS)
          .addClass(o.railClass)
          .css({
            width: o.size,
            height: '100%',
            position: 'absolute',
            top: 0,
            display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
            'border-radius': o.railBorderRadius,
            background: o.railColor,
            opacity: o.railOpacity,
            zIndex: 90
          });

        // create scrollbar
        var bar = jQueryCustom(divS)
          .addClass(o.barClass)
          .css({
            background: o.color,
            width: o.size,
            position: 'absolute',
            top: 0,
            opacity: o.opacity,
            display: o.alwaysVisible ? 'block' : 'none',
            'border-radius' : o.borderRadius,
            BorderRadius: o.borderRadius,
            MozBorderRadius: o.borderRadius,
            WebkitBorderRadius: o.borderRadius,
            zIndex: 99
          });

        // set position
        var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
        rail.css(posCss);
        bar.css(posCss);

        // wrap it
        me.wrap(wrapper);

        // append to parent div
        me.parent().append(bar);
        me.parent().append(rail);

        // make it draggable and no longer dependent on the jQueryCustomUI
        if (o.railDraggable){
          bar.bind("mousedown", function(e) {
            var jQueryCustomdoc = jQueryCustom(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;

            jQueryCustomdoc.bind("mousemove.slimscroll", function(e){
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false);// scroll content
            });

            jQueryCustomdoc.bind("mouseup.slimscroll", function(e) {
              isDragg = false;hideBar();
              jQueryCustomdoc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function(e){
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        }

        // on rail over
        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
        });

        // on bar over
        bar.hover(function(){
          isOverBar = true;
        }, function(){
          isOverBar = false;
        });

        // show on parent mouseover
        me.hover(function(){
          isOverPanel = true;
          showBar();
          hideBar();
        }, function(){
          isOverPanel = false;
          hideBar();
        });

        // support for mobile
        me.bind('touchstart', function(e,b){
          if (e.originalEvent.touches.length)
          {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        me.bind('touchmove', function(e){
          // prevent scrolling the page if necessary
          if(!releaseScroll)
          {
  		      e.originalEvent.preventDefault();
		      }
          if (e.originalEvent.touches.length)
          {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
            // scroll content
            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom')
        {
          // scroll content to bottom
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (o.start !== 'top')
        {
          // assume jQueryCustom selector
          scrollContent(jQueryCustom(o.start).position().top, null, true);

          // make sure bar stays hidden
          if (!o.alwaysVisible) { bar.hide(); }
        }

        // attach scroll events
        attachWheel(this);

        function _onWheel(e)
        {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          var target = e.target || e.srcTarget || e.srcElement;
          if (jQueryCustom(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          }

          // stop window scroll
          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel)
          {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

            // move bar, make sure it doesn't go out
            delta = Math.min(Math.max(delta, 0), maxTop);

            // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

            // scroll the scrollbar
            bar.css({ top: delta + 'px' });
          }

          // calculate actual scroll amount
          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({ top: offsetTop + 'px' });
            me.animate(
              { scrollTop: delta + 'px' },
              750
            );
          }
          if (!isJump){
            me.scrollTop(delta);
          }

          // scroll content
          me.scrollTop(delta);

          // fire scrolling event
          me.trigger('slimscrolling', ~~delta);

          // ensure bar is visible
          showBar();

          // trigger hide when scroll is stopped
          hideBar();
        }

        function attachWheel(target)
        {
          if (window.addEventListener)
          {
            target.addEventListener('DOMMouseScroll', _onWheel, false );
            target.addEventListener('mousewheel', _onWheel, false );
          }
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

        function getBarHeight()
        {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
          bar.css({ height: barHeight + 'px' });

          // hide scrollbar if content is not long enough
          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({ display: display });
        }

        function showBar()
        {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide);

          // when bar reached top or bottom
          if (percentScroll == ~~percentScroll)
          {
            //release wheel
            releaseScroll = o.allowPageScroll;

            // publish approporiate event
            if (lastScroll != percentScroll)
            {
                var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                me.trigger('slimscroll', msg);
            }
          }
          else
          {
            releaseScroll = false;
          }
          lastScroll = percentScroll;

          // show only when required
          if(barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (o.railVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          // only hide when options allow it
          if (!o.alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
              {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

      });

      // maintain chainability
      return this;
    }
  });

  jQueryCustom.fn.extend({
    slimscroll: jQueryCustom.fn.slimScroll
  });

})(jQueryCustom);
(function (jQueryCustom, win, undefined) {
	var removeListener = function(listener) {
		if (window.intervals_hint[listener]) {
			win.clearInterval(window.intervals_hint[listener]);
			window.intervals_hint[listener] = null;
		}
	};

	jQueryCustom.fn.action = function(index_hint,open,isChild, $scope, newHint) {

		var hint, tooltip;

		if($scope){
			if(newHint){
				hint=newHint;
				tooltip=newHint.selector;
			}
		} else {
			hint=hints[index_hint];
			tooltip=hints[index_hint]["selector"];
		}

		if (!open) {
			if($scope){
				jQueryCustom("#tooltip_preview").remove();
				jQueryCustom(document).off('keydown');
				removeListener(index_hint);
			} else {
				//jQueryCustom(".tooltip_hint_"+index_hint).remove();
				removeListener(index_hint);
			}
			jQueryCustom(".my_meta_modal").remove();
		}

		else {
			if(jQueryCustom(tooltip+":visible()").length){
				var found = $scope ? jQueryCustom("#tooltip_preview").length : jQueryCustom('.tooltip_hint_'+index_hint).length;

				var top,left = 0;

				if(hint.top) {
					top = jQueryCustom(hint.selector).offset().top - jQueryCustom(document).scrollTop();
					top = top + (parseInt(hint.top.replace("px","")));

					
				} else {
					top = jQueryCustom(hint.selector).offset().top - jQueryCustom(document).scrollTop();
					top = top + (parseInt(hint.bottom.replace("px","")));
					top = top + (parseInt(jQueryCustom(hint.selector).css("height").replace("px","")));
				}


				if(hint.left) {
					left = jQueryCustom(hint.selector).offset().left;
					left = left + (parseInt(hint.left.replace("px","")));
				} else {
					left = jQueryCustom(hint.selector).offset().left;
					left = left + (parseInt(hint.right.replace("px","")));
					left = left + (parseInt(jQueryCustom(hint.selector).css("width").replace("px","")));
				}

				var translateX = 0;
				var translateY = 0;

				if(hint.arrow=="up"){
					top = top + 19;
					top = top + 58;
					translateY=-100;
					if(!hint.left){
						translateX=-100;
					}
				}
				if(hint.arrow=="down"){
					top = top - 19;
					top = top - 58;
					if(!hint.left){
						translateX=-100;
					}
				}
				if(hint.arrow=="left"){
					top = top -15;
					left = left + 19;
					if(hint.bottom){
						top = top -29;
					}
				}
				if(hint.arrow=="right"){
					top = top -15;
					left = left - 19;
					translateX=-100;
					if(hint.bottom){
						top = top -29;
					}
				}


				if(!found) {
					//LISTENER PER FRECCE
					if($scope){
						jQueryCustom(document).on('keydown', function(e) {
							if(!jQueryCustom("text-angular").hasClass("focussed")){
								if(newHint.left){
									if(e.keyCode==37){
										e.preventDefault();
										newHint.left = (parseInt(newHint.left.replace("px",""))-1)+"px";
										$scope.$apply();
									} else if(e.keyCode==39){
										e.preventDefault();
										newHint.left = (parseInt(newHint.left.replace("px",""))+1)+"px";
										$scope.$apply();
									}
								} else {
									if(e.keyCode==37){
										e.preventDefault();
										newHint.right = (parseInt(newHint.right.replace("px",""))-1)+"px";
										$scope.$apply();
									} else if(e.keyCode==39){
										e.preventDefault();
										newHint.right = (parseInt(newHint.right.replace("px",""))+1)+"px";
										$scope.$apply();
									}		
								}
			
								if(newHint.top){
									if(e.keyCode==38){
										e.preventDefault();
										newHint.top = (parseInt(newHint.top.replace("px",""))-1)+"px";
										$scope.$apply();
									} else if(e.keyCode==40){
										e.preventDefault();
										newHint.top = (parseInt(newHint.top.replace("px",""))+1)+"px";
										$scope.$apply();
									}
								} else {
									if(e.keyCode==38){ 
										e.preventDefault();
										newHint.bottom = (parseInt(newHint.bottom.replace("px",""))-1)+"px";
										$scope.$apply();
									} else if(e.keyCode==40){
										e.preventDefault();
										newHint.bottom = (parseInt(newHint.bottom.replace("px",""))+1)+"px";
										$scope.$apply();
									}		
								}
							}
						});
					}

					var arrows='';
					if(hint.arrow) {
						if(hint.arrow=="info") {
							if(!$scope){
								arrows+=" info";
							} else {
								arrows+="info";
							}
						} else {
							arrows+=hint.arrow;
							arrows+=" ";
							if(!$scope){
								arrows+="";
								if(hint.arrow=="right"||hint.arrow=="left"){
									if(hint.arrow=="right"){
										arrows+="Left";
									} else {
										arrows+="Right";
									}
								} else {
									arrows+=hint.arrow.charAt(0).toUpperCase();
									arrows+=hint.arrow.slice(1);
								}
							}
							
							
						}
					}

					var span = $scope ?
						'<div id="tooltip_preview" class="'+arrows+' noclick tooltip tolltip_hint opened ':
						'<div counter class="'+arrows+' noclick tooltip tooltip_hint_'+index_hint+' tolltip_hint ';
					
					if(hint.flipped){
						span+='flipped';
					}
					span+='" ';	

					span+= 'style="top:'+top+'px;';
					span+= 'left:'+left+'px;';
					if(hint.delay){
						span+= 'animation-delay:'+hint.delay+';';
					}
					
					var arrow_src = "https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/arrow_with_pin_sx.svg";
					if(hint.arrow=="right") {
						arrow_src = "https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/arrow_with_pin_dx.svg";
					} else if(hint.arrow=="down"){
						arrow_src = "https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/arrow_with_pin_down.svg";
					} else if(hint.arrow=="up"){
						arrow_src = "https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/arrow_with_pin_up.svg";
					} 

					span+= 'transform:translate('+translateX+'%,'+translateY+'%);">';
					
					span+= '<div counter='+(index_hint+1)+' class="noclick question question_'+index_hint+'">';

					var icon_src = '<img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/question_new_white.svg">';
					if(hint.type=="password"){
						icon_src = '<img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/eye.svg">';
					} else if(hint.type=="disabled"){
						icon_src = '<img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/disabled_2.svg">';
					}
					span+= icon_src;
					span+= '</div>';


					/*span+= '<div class="tooltip_container" ';
					if(hint.width){
						span+= 'style="width:'+hint.width+'px;"';
					}
					var my_text = actual_language == 'default' ? hint.text : hint['text_'+actual_language];
					span+= '><span style="display:none!important" class="tooltip_close tool_click"><img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/close_white.svg"></span>';
					span+='<div id="tooltip_text">'+ my_text +'</div>';

					span+='</div>';
					span+='</div>';*/

					/*if(!$scope){
						span+= '<div counter='+(index_hint+1)+' class="noclick question question_'+index_hint+'" ';
						span+= 'style="top:'+top+'px;';
						span+= 'left:'+left+'px;"</div>';
						span+= '<img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/question.svg">';
						span+= '</div>';
					}*/

					
					jQueryCustom("body").append(span);
					
					if(hint.color) {
						jQueryCustom(".tooltip_hint_"+index_hint+" .tooltip_container" + ", #tooltip_preview .tooltip_container").css("background-color",hint.color);
						//jQueryCustom(".tooltip_hint_"+index_hint + " #arrows_container, #tooltip_preview #arrows_container").css("background-color",hint.color);
						jQueryCustom(".tooltip_hint_"+index_hint + " button, #tooltip_preview button").css("color",hint.color);
						jQueryCustom(".question_"+index_hint).css("background-color",hint.color);
						/*SVGInject(document.querySelector(".tooltip_hint_"+index_hint+" .svg_arrow>img")).then(response => {
							jQueryCustom(".tooltip_hint_"+index_hint+" .svg_arrow .cls-1,.tooltip .svg_arrow .st0").css("fill",hint.color);
						});*/
					}

					if(hint.right && hint.arrow=="down"){
						jQueryCustom(".tooltip_hint_"+index_hint).css("left",left - jQueryCustom(".tooltip_hint_"+index_hint).width() -50 +"px");
					}

					if(hint.modal){
						
						var modal_delay = 0;
						if(hint.delay) {
							modal_delay = parseInt(hint.delay.replace("ms", ""));
						}

						setTimeout(function(){
							var modal_up = "<div id='my_meta_modal_up' class='my_meta_modal hint hint_"+index_hint+"' ";
							modal_up+= 'style="height:';
							modal_up+= jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop();
							modal_up+='px;"></div>';

							var modal_down = "<div id='my_meta_modal_down' class='my_meta_modal hint hint_"+index_hint+"' ";
							modal_down+= 'style="height:';
							var bottom_height = jQueryCustom(window).innerHeight() - jQueryCustom(tooltip).innerHeight() - jQueryCustom(tooltip).offset().top + Math.abs(jQueryCustom(document).scrollTop());
							modal_down+= bottom_height;
							modal_down+='px;"></div>';

							var modal_left = "<div id='my_meta_modal_left' class='my_meta_modal hint hint_"+index_hint+"' ";
							modal_left+= 'style="height:';
							modal_left+= jQueryCustom(tooltip).innerHeight();
							modal_left+='px;';
							modal_left+= 'top:';
							modal_left+= jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop();
							modal_left+='px;';
							modal_left+= 'width:';
							jQueryCustom("body").hasClass("myMetaConsole") ? modal_left+= jQueryCustom(tooltip).offset().left-350 : modal_left+= jQueryCustom(tooltip).offset().left;
							modal_left+='px;';
							modal_left+='"></div>';

							var modal_right = "<div id='my_meta_modal_right' class='my_meta_modal hint hint_"+index_hint+"' ";
							modal_right+= 'style="height:';
							modal_right+= jQueryCustom(tooltip).innerHeight();
							modal_right+='px;';
							modal_right+= 'top:';
							modal_right+= jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop();
							modal_right+='px;';
							modal_right+= 'width:';
							modal_right+= jQueryCustom(window).innerWidth() - (jQueryCustom(tooltip).offset().left + jQueryCustom(tooltip).innerWidth());
							modal_right+='px;';
							modal_right+='"></div>';
							jQueryCustom("body").append(modal_up);
							jQueryCustom("body").append(modal_down);
							jQueryCustom("body").append(modal_left);
							jQueryCustom("body").append(modal_right);
						}, modal_delay);
						
					}

					if(!$scope){

						if(hint.type=="password"){
							jQueryCustom(".question_"+index_hint).unbind('click').bind('click', function () {
								if(jQueryCustom(hint.selector).attr("type")!="password"){
									jQueryCustom(hint.selector).attr("type","password");
								} else {
									jQueryCustom(hint.selector).attr("type","text");
								}
							});
						} else if(hint.type=="disabled"){
							jQueryCustom(hint.selector).attr("disabled",true);
						}


						

						//EVENTI CLICK DA GESTIRE!
						/*jQueryCustom(".question_"+index_hint).unbind('click').bind('click', function () {
							

							if(jQueryCustom(".tooltip_hint_"+index_hint).hasClass("clicked")){
								jQueryCustom(".tooltip_hint_"+index_hint).removeClass("clicked");
								jQueryCustom(".tooltip_hint_"+index_hint).removeClass("opened");
							} else {
								jQueryCustom(".tooltip_hint_"+index_hint).addClass("opened");
								jQueryCustom(".tooltip_hint_"+index_hint).addClass("clicked");
							}
							
							if(hint.color && hint.highlight) {
								jQueryCustom(tooltip).attr("style","border-color:"+hint.color+"!important");
							}
						});

						jQueryCustom(".tooltip_hint_"+index_hint+" .tooltip_close ").unbind('click').bind('click', function () {
							if(hint.highlight) {
								jQueryCustom(tooltip).removeClass("hint_showing").removeAttr("style");
							}
							//jQueryCustom(tooltip).removeClass("hint_showing").removeAttr("style");
							jQueryCustom(".tooltip_hint_"+index_hint).removeClass("clicked");
							jQueryCustom(".tooltip_hint_"+index_hint).removeClass("opened");
						});

						jQueryCustom(".question_"+index_hint).unbind('mouseenter').bind('mouseenter', function () {
							jQueryCustom(".tooltip_hint_"+index_hint).addClass("opened");
						});

						jQueryCustom(".question_"+index_hint).unbind('mouseleave').bind('mouseleave', function () {
							if(!jQueryCustom(".tooltip_hint_"+index_hint).hasClass("clicked")){
								jQueryCustom(".tooltip_hint_"+index_hint).removeClass("opened");
							}
						});*/
					}

					
				} else {
					if($scope){
						jQueryCustom("#tooltip_preview").css("top",top+"px");
						jQueryCustom("#tooltip_preview").css("left",left+"px");
						jQueryCustom("#tooltip_preview").css("transform",'translate('+translateX+'%,'+translateY+'%)');
					} else {
						var patch_left = left;
						if(hint.right && hint.arrow=="down"){
							patch_left = left - jQueryCustom(".tooltip_hint_"+index_hint).width() -50;
						}
						jQueryCustom(".tooltip_hint_"+index_hint).css("top",top+"px");
						jQueryCustom(".tooltip_hint_"+index_hint).css("left",patch_left+"px");
						jQueryCustom(".tooltip_hint_"+index_hint).css("transform",'translate('+translateX+'%,'+translateY+'%)');

						/*jQueryCustom(".question_"+index_hint).css("top",top+"px");
						jQueryCustom(".question_"+index_hint).css("left",patch_left+"px");*/
					}

					if(hint.modal){
						jQueryCustom("#my_meta_modal_up").css("height",jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop()+"px");
						
						jQueryCustom("#my_meta_modal_down").css("height",jQueryCustom(window).innerHeight() - jQueryCustom(tooltip).innerHeight() - jQueryCustom(tooltip).offset().top + Math.abs(jQueryCustom(document).scrollTop()) -6+"px");

						jQueryCustom("#my_meta_modal_left").css("height",jQueryCustom(tooltip).innerHeight()+6+"px");
						jQueryCustom("#my_meta_modal_left").css("top",jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop());
						jQueryCustom("#my_meta_modal_left").css("width",jQueryCustom("body").hasClass("myMetaConsole") ? jQueryCustom(tooltip).offset().left-350 : jQueryCustom(tooltip).offset().left);

						jQueryCustom("#my_meta_modal_right").css("height",jQueryCustom(tooltip).innerHeight()+6+"px");
						jQueryCustom("#my_meta_modal_right").css("top",jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop());
						jQueryCustom("#my_meta_modal_right").css("width",jQueryCustom(window).innerWidth() - (jQueryCustom(tooltip).offset().left + jQueryCustom(tooltip).innerWidth()) - 6);
					}

					if(hint.color) {
						if($scope && document.querySelector(".tooltip .svg_arrow>img")){
							jQueryCustom(".tooltip_hint_"+index_hint + " .tooltip_container, #tooltip_preview .tooltip_container").css("background-color",hint.color);
							jQueryCustom(".tooltip_hint_"+index_hint + " button, #tooltip_preview button").css("color",hint.color);
							SVGInject(document.querySelector(".tooltip .svg_arrow>img")).then(response => {
								jQueryCustom(".tooltip .svg_arrow .cls-1,.tooltip .svg_arrow .st0").css("fill",hint.color);
							});
						}
					}
				}
			}  else {
				if($scope){
					jQueryCustom("#tooltip_preview").remove();
				} else {
					jQueryCustom(".tooltip_hint_"+index_hint).remove();
				}
				jQueryCustom(".question_"+index_hint).remove();
			}

			if(!isChild) {
				if(!window.intervals_hint[index_hint]){
					window.intervals_hint[index_hint] = win.setInterval(function () {
						jQueryCustom().action(index_hint,true,true,$scope,newHint);
					}, 500);
				}
			}
		}
	}
}(window.jQueryCustom, window));


(function (jQueryCustom, win, undefined) {
	var removeListener = function(listener) {
		if (window.intervals_hint[listener]) {
			win.clearInterval(window.intervals_hint[listener]);
			window.intervals_hint[listener] = null;
		}
    };
    
	jQueryCustom.fn.classes = function(index_hint,open,isChild) {     
        var selector = window.hints[index_hint]["selector"];
        var delay = window.hints[index_hint]["polling"] ? hints[index_hint]["polling"] : 2500;
        var mymeta_class = window.hints[index_hint]["class"] ? hints[index_hint]["class"] : "mymeta_not_found";
        var who = window.hints[index_hint]["who"] ? hints[index_hint]["who"] : "body";

		if (!open) {
			jQueryCustom(who).removeClass(mymeta_class);
			removeListener(index_hint+"_"+index_step);
		}

		else {
			if(jQueryCustom(selector).length){
                    jQueryCustom(who).addClass(mymeta_class);
            } else {
                jQueryCustom(who).removeClass(mymeta_class);
            }

			if(!isChild) {
				if(!window.intervals_hint[index_hint]){
					window.intervals_hint[index_hint] = win.setInterval(function () {
						jQueryCustom().classes(index_hint,true,true);
					}, delay);
				}
			}
		}
	}
}(window.jQueryCustom, window));

(function (jQueryCustom, win, undefined) {
	var removeListener = function(listener) {
		if (window.intervals_event[listener]) {
			win.clearInterval(window.intervals_event[listener]);
			window.intervals_event[listener] = null;
		}
	};

	var nextStep = function(index_route,index_step) {
		jQueryCustom().tooltips(index_route,index_step,false);
		jQueryCustom().highlights(index_route,index_step,false);
		jQueryCustom().events(index_route,index_step,false);
		jQueryCustom(".my_meta_selected").removeClass("my_meta_selected");
		jQueryCustom("#sticker").addClass("ok");
		jQueryCustom("#detached_sticker").addClass("ok");

		if(index_step<routes[index_route]["steps"].length-1) {
			set_globals(1,index_route,index_step+1);
			jQueryCustom().guide(index_route,index_step+1);
		}
		else {
			jQueryCustom('#route_title').html(routes[index_route]["title"]);
			//jQueryCustom('#popUpEnd').show();
			set_globals(0,-1,-1);
			jQueryCustom("#sticker").remove();
			jQueryCustom("#detached_sticker").remove();
			//if(index_route!=2){
			if(!routes[index_route].hide_popup_complete)
				jQueryCustom('#popUpEnd').show();
				
				// If in documentation mode, reset it
				if(typeof(disableDocumentationMode) == 'function')
					disableDocumentationMode(true);

			//}
		}
	};

	var validated = function(event,required,required_settings) {
		var result = false;
		if(!required) {
			result = true;
		} else {
			if(!required_settings) {
				result = jQueryCustom(event).val() ? true : false;
			} else {
				if(jQueryCustom(event).val()) {
					result = true;
				}
				if(required_settings.type=='normal'){
					result = jQueryCustom(event).val() ? true : false;
				} else if(required_settings.type=='alphanumeric') {
					//per ora...nulla da fare
				} else if(required_settings.type=='text') {
					//controllo se è un text
					if(jQueryCustom(event).val().match(/\d/)) {
						result = false;
					}

				} else if(required_settings.type=='number') {
					//controllo se è un numero e se è nel range
					if(required_settings.min_number) {
						if(parseInt(jQueryCustom(event).val())<parseInt(required_settings.min_number)) {
							result = false;
						}
					}
					if(required_settings.max_number) {
						if(parseInt(jQueryCustom(event).val())>parseInt(required_settings.max_number)) {
							result = false;
						}
					}
					if(isNaN(jQueryCustom(event).val())){
						result = false;
					}
				} else if(required_settings.type=='email') {
					if(!jQueryCustom(event).val().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
						result = false;
					}
				}
				//controllo min_char e max_char
				if(required_settings.min_char) {
					if(jQueryCustom(event).val().length<required_settings.min_char) {
						result = false;
					}
				}
				if(required_settings.max_char) {
					if(jQueryCustom(event).val().length>required_settings.max_char) {
						result = false;
					}
				}
			}
			//avoid
			if(required_settings) {
				if(typeof(required_settings.avoid_placeholder)!='undefined') {
					if(jQueryCustom(event).val()==required_settings.avoid_placeholder) {
						result = false;
					}
				}
			}
		}
		return result;
	};

	jQueryCustom.fn.events = function(index_route,index_step,open,isChild) {

		var step=routes[index_route]["steps"][index_step];
		var event=routes[index_route]["steps"][index_step]["event"]["selector"];

		if (!open) {
			jQueryCustom(event).off();
			removeListener(index_route+"_"+index_step);
			jQueryCustom(".my_meta_selected").off();
			jQueryCustom(".my_meta_selected").removeClass("my_meta_selected");
		}

		else {
			if(jQueryCustom(event).length){
				if(step.event.type=="change" && step.event.required) {
					if(validated(event,step.event.required,step.event.required_settings)) {
						jQueryCustom(".tooltip button.goToNextStep").removeClass("disabled");
					} else {
						jQueryCustom(".tooltip button.goToNextStep").addClass("disabled");
					}
				}
				if(jQueryCustom(event+".my_meta_selected").length != jQueryCustom(event).length){
					jQueryCustom(event).addClass("my_meta_selected");
					jQueryCustom(event).addClass("event_found");
					jQueryCustom(document).off();
					if(!step.event.ignore) {
						jQueryCustom(document).click(function(e) {
							if((jQueryCustom(e.target).css("cursor")=="pointer"&&!jQueryCustom(e.target).parents().hasClass("tool_click"))&&
								(jQueryCustom(e.target).css("cursor")=="pointer"&&!jQueryCustom(e.target).hasClass("tool_click"))) {
								if(!jQueryCustom(e.target).hasClass("highlight")){
									unexpected_click();
								}
							}
						});
					}

					jQueryCustom(event).off();

					if(step.event.type=="click") {
						jQueryCustom(event).addClass("tool_click");
						if(event.indexOf(".tooltip_")!=-1){
							jQueryCustom(event).removeClass("noclick");
							jQueryCustom(event).css("cursor","pointer");
						}
						jQueryCustom(event).click(function(e) {
							if(!jQueryCustom(e.target).hasClass("noclick"))
							{
								nextStep(index_route,index_step);
								if(step.event.scroll) {
									jQueryCustom().scroll(index_route,index_step,true);
								}
							}
						});
						if(jQueryCustom("body").hasClass("documentation_mode") && typeof(takeScreenshot)!='undefined') {
							setTimeout(function(){
								takeScreenshot();
							}, 1500);
						}
					}
					else if(step.event.type=="change") {
						if(step.event.autofocus){
							jQueryCustom(event).focus();
						}
						jQueryCustom(event).change(function(e) {
							if(validated(event,step.event.required,step.event.required_settings)) {
								
								if(jQueryCustom("body").hasClass("documentation_mode") && typeof(takeScreenshot)!='undefined') {
									takeScreenshot();
									setTimeout(function(){
										nextStep(index_route,index_step);
									}, 2000);
								} else {
									nextStep(index_route,index_step);
								}
								
							}
						});
					}
					else if(step.event.type=="drop") {
						jQueryCustom("html").on("drop", function(event) {
							nextStep(index_route,index_step);
							if(step.event.scroll) {
								jQueryCustom().scroll(index_route,index_step,true);
							}
						});
					} else if(step.event.type=="automatic") {
						var delay = 0;
						if(step.event.extra_delay){
							delay = 250;
						}
						setTimeout(function(){
							if(!step.event.gotoroute) {
								step.event.gotoroute = index_route;
							}
							if(!step.event.conditional_jump_gotoroute) {
								step.event.conditional_jump_gotoroute = index_route;
							}
							if(!step.event.conditional_jump) {
								jQueryCustom().tooltips(index_route,index_step,false);
								jQueryCustom().highlights(index_route,index_step,false);
								jQueryCustom().events(index_route,index_step,false);
								jQueryCustom("#sticker").addClass("ok");
								jQueryCustom("#detached_sticker").addClass("ok");
								jQueryCustom("#unexpected_click").addClass("ok")
								goToStep(step.event.gotoroute,step.event.gotostep,true);
							} else {
								if(jQueryCustom(step.event.conditional_jump_selector).length) {
									jQueryCustom().tooltips(index_route,index_step,false);
									jQueryCustom().highlights(index_route,index_step,false);
									jQueryCustom().events(index_route,index_step,false);
									jQueryCustom("#sticker").addClass("ok");
									jQueryCustom("#detached_sticker").addClass("ok");
									jQueryCustom("#unexpected_click").addClass("ok")
									goToStep(step.event.conditional_jump_gotoroute,step.event.conditional_jump_gotostep,true);
	
								} else {
									jQueryCustom().tooltips(index_route,index_step,false);
									jQueryCustom().highlights(index_route,index_step,false);
									jQueryCustom().events(index_route,index_step,false);
									jQueryCustom("#sticker").addClass("ok");
									jQueryCustom("#detached_sticker").addClass("ok");
									jQueryCustom("#unexpected_click").addClass("ok")
									goToStep(step.event.gotoroute,step.event.gotostep,true);
								}
							}
						}, delay);
						
					} else if(step.event.type=="autocomplete") {
						if(!step.event.gotoroute) {
							step.event.gotoroute = index_route;
						}

						if(!step.event.gotostep) {
							step.event.gotostep = index_step+1;
						}

						//jQueryCustom(step.event.input_selector).val(step.event.input_value);
						var sortBySelect = jQueryCustom(step.event.input_selector)[0];
						if(jQueryCustom(step.event.input_selector).is(":checkbox")){
							if(step.event.input_value == "true"){
								sortBySelect.checked = true;
							} else {
								sortBySelect.checked = false;
							}
						} else {
							sortBySelect.value = step.event.input_value;
						}
						sortBySelect.dispatchEvent(new Event("change"));
						if(step.event.autofocus){
							jQueryCustom(event).focus();
						}

						jQueryCustom().tooltips(index_route,index_step,false);
						jQueryCustom().highlights(index_route,index_step,false);
						jQueryCustom().events(index_route,index_step,false);
						jQueryCustom("#sticker").addClass("ok");
						jQueryCustom("#detached_sticker").addClass("ok");
						jQueryCustom("#unexpected_click").addClass("ok")
						goToStep(step.event.gotoroute,step.event.gotostep,true);
						
					} else if(step.event.type=="autourl") {
						if(!step.event.gotoroute) {
							step.event.gotoroute = index_route;
						}
						if(!step.event.gotostep) {
							step.event.gotostep = index_step + 1; 
						}
						jQueryCustom().tooltips(index_route,index_step,false);
						jQueryCustom().highlights(index_route,index_step,false);
						jQueryCustom().events(index_route,index_step,false);
						jQueryCustom("#sticker").addClass("ok");
						jQueryCustom("#detached_sticker").addClass("ok");
						jQueryCustom("#unexpected_click").addClass("ok")
						goToStep(step.event.gotoroute,step.event.gotostep,true);

						if(step.event.openerreload) {
							if(detectIE()) {
								window.opener.location.href = window.opener.location.href + '&mmtrick=true';
							} else {
								window.opener.location.reload();
							}
						}
						if(step.event.selfclose) {
							window.close();
						} else {
							window.location.href = window.location .origin + step.event.url;
						}
					/*} else if(step.event.type="testworkday"){
						jQueryCustom(".cke_wysiwyg_div").focus();
						jQueryCustom(".cke_wysiwyg_div p").html(step.event.input_value);
						jQueryCustom(".cke_wysiwyg_div").blur();
						nextStep(index_route,index_step);*/
					} else if(step.event.type="html"){
						if(!step.event.gotoroute) {
							step.event.gotoroute = index_route;
						}

						if(!step.event.gotostep) {
							step.event.gotostep = index_step+1;
						}

						if(step.event.focusinout){
							jQueryCustom(step.event.focusinout).focus();
						}

						var formatted_input = format_input_value(step.event.input_value);
						
						if(step.event.isinput){
							
							//jQueryCustom(step.event.input_selector).val(formatted_input);
							var sortBySelect = jQueryCustom(step.event.input_selector)[0];


							if(jQueryCustom(step.event.input_selector).is(":checkbox")){
								if(formatted_input == "true"){
									sortBySelect.checked = true;
								} else {
									sortBySelect.checked = false;
								}
							} else {
								sortBySelect.value = formatted_input;
								jQueryCustom(step.event.input_selector).attr("value",formatted_input);
							}
							
							sortBySelect.dispatchEvent(new Event("change",{ bubbles: true }));
							sortBySelect.dispatchEvent(new Event("input",{ bubbles: true }));
							
						} else {
							jQueryCustom(step.event.input_selector).html(formatted_input);
						}
						

						if(step.event.focusinout){
							jQueryCustom(step.event.focusinout).blur();
						}

						jQueryCustom().tooltips(index_route,index_step,false);
						jQueryCustom().highlights(index_route,index_step,false);
						jQueryCustom().events(index_route,index_step,false);
						jQueryCustom("#sticker").addClass("ok");
						jQueryCustom("#detached_sticker").addClass("ok");
						jQueryCustom("#unexpected_click").addClass("ok")
						goToStep(step.event.gotoroute,step.event.gotostep,true);6
					}
				}
			}

			if(!isChild) {
				if(!window.intervals_event[index_route+"_"+index_step]){
					window.intervals_event[index_route+"_"+index_step] = win.setInterval(function () {
						jQueryCustom().events(index_route,index_step,true,true);
					}, window.MMgeneralPolling);
				}
			}
		}
	}
}(window.jQueryCustom, window));
(function (jQueryCustom, win, undefined) {
	jQueryCustom.fn.guide = function(route,step) {
		counter(route,step);
		jQueryCustom().tooltips(route,step,true);
		jQueryCustom().highlights(route,step,true);
		jQueryCustom().events(route,step,true);
		
		if(window.isPlateau) {
			const activeWindow = window.findMyMetaActiveWindow(window.mymeta_config.activeWindowLevel /* = 1 */);
			if(activeWindow == window) {
				var fn = function(win) {
					if(win == null) return;
					try {
						const frames = (win.document || win.contentDocument).querySelectorAll("iframe");
						for(var i = 0; i < frames.length; i++) {
							try {
								frames[i].contentWindow.counter(route,step);
								frames[i].contentWindow.jQueryCustom().tooltips(route,step,true);
								frames[i].contentWindow.jQueryCustom().highlights(route,step,true);
								frames[i].contentWindow.jQueryCustom().events(route,step,true);
								fn(frames[i].contentWindow);
							} catch(err) { }
						}
					} catch(err) { }
				}
				fn(window);
			} else {
				try {
					activeWindow.init_cookies();
				} catch(err) { }
			}
		}
	}
}(window.jQueryCustom, window));

(function (jQueryCustom, win, undefined) {
	var removeListener = function(listener) {
		if (window.intervals_highlight[listener]) {
			win.clearInterval(window.intervals_highlight[listener]);
			window.intervals_highlight[listener] = null;
		}
	};

	jQueryCustom.fn.highlights = function(index_route,index_step,open,isChild) {
		var highlight=routes[index_route]["steps"][index_step]["highlight"]["selector"];
		var highlightClass = mymeta_config.highlight_class;
		if(typeof(highlightClass)!="string") {
			highlightClass = "highlight";
		}
		if (!open) {
			jQueryCustom(highlight).removeClass(highlightClass);
			removeListener(index_route+"_"+index_step);
		}

		else {
			if(jQueryCustom(highlight).length){
				if(true){
					/*CREO HIGHLIGHT*/
					jQueryCustom(highlight).addClass(highlightClass);
					jQueryCustom(highlight).toggleClass("red-border");

					if(jQueryCustom(highlight).is(":visible")){
						jQueryCustom(".tooltip_"+index_route+"_"+index_step).show();
					} else {
						jQueryCustom(".tooltip_"+index_route+"_"+index_step).hide();
					}
				}
			}

			if(!isChild) {
				if(!window.intervals_highlight[index_route+"_"+index_step]){
					window.intervals_highlight[index_route+"_"+index_step] = win.setInterval(function () {
						jQueryCustom().highlights(index_route,index_step,true,true);
					}, window.MMgeneralPolling);
				}
			}
		}
	}
}(window.jQueryCustom, window));

(function (jQueryCustom, win, undefined) {
	var removeListener = function(listener) {
		if (window.intervals_hint[listener]) {
			win.clearInterval(window.intervals_hint[listener]);
			window.intervals_hint[listener] = null;
		}
	};

	jQueryCustom.fn.hint = function(index_hint,open,isChild, $scope, newHint) {

		var hint, tooltip;

		if($scope){
			if(newHint){
				hint=newHint;
				tooltip=newHint.selector;
			}
		} else {
			hint=hints[index_hint];
			tooltip=hints[index_hint]["selector"];
		}

		if (!open) {
			if($scope){
				jQueryCustom("#tooltip_preview").remove();
				jQueryCustom(document).off('keydown');
				removeListener(index_hint);
			} else {
				//jQueryCustom(".tooltip_hint_"+index_hint).remove();
				removeListener(index_hint);
			}
			jQueryCustom(".my_meta_modal").remove();
		}

		else {
			if(jQueryCustom(tooltip+":visible()").length){
				var found = $scope ? jQueryCustom("#tooltip_preview").length : jQueryCustom('.tooltip_hint_'+index_hint).length;

				var top,left = 0;

				if(hint.top) {
					top = jQueryCustom(hint.selector).offset().top - jQueryCustom(document).scrollTop();
					top = top + (parseInt(hint.top.replace("px","")));

					
				} else {
					top = jQueryCustom(hint.selector).offset().top - jQueryCustom(document).scrollTop();
					top = top + (parseInt(hint.bottom.replace("px","")));
					top = top + (parseInt(jQueryCustom(hint.selector).css("height").replace("px","")));
				}


				if(hint.left) {
					left = jQueryCustom(hint.selector).offset().left;
					left = left + (parseInt(hint.left.replace("px","")));
				} else {
					left = jQueryCustom(hint.selector).offset().left;
					left = left + (parseInt(hint.right.replace("px","")));
					left = left + (parseInt(jQueryCustom(hint.selector).css("width").replace("px","")));
				}

				var translateX = 0;
				var translateY = 0;

				if(hint.arrow=="up"){
					top = top + 19;
					top = top + 58;
					translateY=-100;
					if(!hint.left){
						translateX=-100;
					}
				}
				if(hint.arrow=="down"){
					top = top - 19;
					top = top - 58;
					if(!hint.left){
						translateX=-100;
					}
				}
				if(hint.arrow=="left"){
					top = top -15;
					left = left + 19;
					if(hint.bottom){
						top = top -29;
					}
				}
				if(hint.arrow=="right"){
					top = top -15;
					left = left - 19;
					translateX=-100;
					if(hint.bottom){
						top = top -29;
					}
				}


				if(!found) {
					//LISTENER PER FRECCE
					if($scope){
						jQueryCustom(document).on('keydown', function(e) {
							if(!jQueryCustom("text-angular").hasClass("focussed")){
								if(newHint.left){
									if(e.keyCode==37){
										e.preventDefault();
										newHint.left = (parseInt(newHint.left.replace("px",""))-1)+"px";
										$scope.$apply();
									} else if(e.keyCode==39){
										e.preventDefault();
										newHint.left = (parseInt(newHint.left.replace("px",""))+1)+"px";
										$scope.$apply();
									}
								} else {
									if(e.keyCode==37){
										e.preventDefault();
										newHint.right = (parseInt(newHint.right.replace("px",""))-1)+"px";
										$scope.$apply();
									} else if(e.keyCode==39){
										e.preventDefault();
										newHint.right = (parseInt(newHint.right.replace("px",""))+1)+"px";
										$scope.$apply();
									}		
								}
			
								if(newHint.top){
									if(e.keyCode==38){
										e.preventDefault();
										newHint.top = (parseInt(newHint.top.replace("px",""))-1)+"px";
										$scope.$apply();
									} else if(e.keyCode==40){
										e.preventDefault();
										newHint.top = (parseInt(newHint.top.replace("px",""))+1)+"px";
										$scope.$apply();
									}
								} else {
									if(e.keyCode==38){ 
										e.preventDefault();
										newHint.bottom = (parseInt(newHint.bottom.replace("px",""))-1)+"px";
										$scope.$apply();
									} else if(e.keyCode==40){
										e.preventDefault();
										newHint.bottom = (parseInt(newHint.bottom.replace("px",""))+1)+"px";
										$scope.$apply();
									}		
								}
							}
						});
					}

					var arrows='';
					if(hint.arrow) {
						if(hint.arrow=="info") {
							if(!$scope){
								arrows+=" info";
							} else {
								arrows+="info";
							}
						} else {
							arrows+=hint.arrow;
							arrows+=" ";
							if(!$scope){
								arrows+="";
								if(hint.arrow=="right"||hint.arrow=="left"){
									if(hint.arrow=="right"){
										arrows+="Left";
									} else {
										arrows+="Right";
									}
								} else {
									arrows+=hint.arrow.charAt(0).toUpperCase();
									arrows+=hint.arrow.slice(1);
								}
							}
							
							
						}
					}

					var span = $scope ?
						'<div id="tooltip_preview" class="'+arrows+' noclick tooltip tolltip_hint opened ':
						'<div counter class="'+arrows+' noclick tooltip tooltip_hint_'+index_hint+' tolltip_hint ';
					
					if(hint.flipped){
						span+='flipped';
					}
					span+='" ';	

					span+= 'style="top:'+top+'px;';
					span+= 'left:'+left+'px;';
					if(hint.delay){
						span+= 'animation-delay:'+hint.delay+';';
					}
					
					var arrow_src = "https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/arrow_with_pin_sx.svg";
					if(hint.arrow=="right") {
						arrow_src = "https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/arrow_with_pin_dx.svg";
					} else if(hint.arrow=="down"){
						arrow_src = "https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/arrow_with_pin_down.svg";
					} else if(hint.arrow=="up"){
						arrow_src = "https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/arrow_with_pin_up.svg";
					} 

					span+= 'transform:translate('+translateX+'%,'+translateY+'%);">';
					
					span+= '<div counter='+(index_hint+1)+' class="noclick question question_'+index_hint+'">';
					span+= '<img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/question_new_white.svg">';
					span+= '</div>';


					span+= '<div class="tooltip_container" ';
					if(hint.width){
						span+= 'style="width:'+hint.width+'px;"';
					}
					var my_text = actual_language == 'default' ? hint.text : hint['text_'+actual_language];
					span+= '><span style="display:none!important" class="tooltip_close tool_click"><img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/close_white.svg"></span>';
					span+='<div id="tooltip_text">'+ my_text +'</div>';

					span+='</div>';
					span+='</div>';

					/*if(!$scope){
						span+= '<div counter='+(index_hint+1)+' class="noclick question question_'+index_hint+'" ';
						span+= 'style="top:'+top+'px;';
						span+= 'left:'+left+'px;"</div>';
						span+= '<img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/question.svg">';
						span+= '</div>';
					}*/

					
					jQueryCustom("body").append(span);
					
					if(hint.color) {
						jQueryCustom(".tooltip_hint_"+index_hint+" .tooltip_container" + ", #tooltip_preview .tooltip_container").css("background-color",hint.color);
						//jQueryCustom(".tooltip_hint_"+index_hint + " #arrows_container, #tooltip_preview #arrows_container").css("background-color",hint.color);
						jQueryCustom(".tooltip_hint_"+index_hint + " button, #tooltip_preview button").css("color",hint.color);
						jQueryCustom(".question_"+index_hint).css("background-color",hint.color);
						/*SVGInject(document.querySelector(".tooltip_hint_"+index_hint+" .svg_arrow>img")).then(response => {
							jQueryCustom(".tooltip_hint_"+index_hint+" .svg_arrow .cls-1,.tooltip .svg_arrow .st0").css("fill",hint.color);
						});*/
					}

					if(hint.right && hint.arrow=="down"){
						jQueryCustom(".tooltip_hint_"+index_hint).css("left",left - jQueryCustom(".tooltip_hint_"+index_hint).width() -50 +"px");
					}

					if(hint.modal){
						
						var modal_delay = 0;
						if(hint.delay) {
							modal_delay = parseInt(hint.delay.replace("ms", ""));
						}

						setTimeout(function(){
							var modal_up = "<div id='my_meta_modal_up' class='my_meta_modal hint hint_"+index_hint+"' ";
							modal_up+= 'style="height:';
							modal_up+= jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop();
							modal_up+='px;"></div>';

							var modal_down = "<div id='my_meta_modal_down' class='my_meta_modal hint hint_"+index_hint+"' ";
							modal_down+= 'style="height:';
							var bottom_height = jQueryCustom(window).innerHeight() - jQueryCustom(tooltip).innerHeight() - jQueryCustom(tooltip).offset().top + Math.abs(jQueryCustom(document).scrollTop());
							modal_down+= bottom_height;
							modal_down+='px;"></div>';

							var modal_left = "<div id='my_meta_modal_left' class='my_meta_modal hint hint_"+index_hint+"' ";
							modal_left+= 'style="height:';
							modal_left+= jQueryCustom(tooltip).innerHeight();
							modal_left+='px;';
							modal_left+= 'top:';
							modal_left+= jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop();
							modal_left+='px;';
							modal_left+= 'width:';
							jQueryCustom("body").hasClass("myMetaConsole") ? modal_left+= jQueryCustom(tooltip).offset().left-350 : modal_left+= jQueryCustom(tooltip).offset().left;
							modal_left+='px;';
							modal_left+='"></div>';

							var modal_right = "<div id='my_meta_modal_right' class='my_meta_modal hint hint_"+index_hint+"' ";
							modal_right+= 'style="height:';
							modal_right+= jQueryCustom(tooltip).innerHeight();
							modal_right+='px;';
							modal_right+= 'top:';
							modal_right+= jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop();
							modal_right+='px;';
							modal_right+= 'width:';
							modal_right+= jQueryCustom(window).innerWidth() - (jQueryCustom(tooltip).offset().left + jQueryCustom(tooltip).innerWidth());
							modal_right+='px;';
							modal_right+='"></div>';
							jQueryCustom("body").append(modal_up);
							jQueryCustom("body").append(modal_down);
							jQueryCustom("body").append(modal_left);
							jQueryCustom("body").append(modal_right);
						}, modal_delay);
						
					}

					if(!$scope){
						jQueryCustom(".question_"+index_hint).unbind('click').bind('click', function () {
							

							if(jQueryCustom(".tooltip_hint_"+index_hint).hasClass("clicked")){
								jQueryCustom(".tooltip_hint_"+index_hint).removeClass("clicked");
								jQueryCustom(".tooltip_hint_"+index_hint).removeClass("opened");
							} else {
								jQueryCustom(".tooltip_hint_"+index_hint).addClass("opened");
								jQueryCustom(".tooltip_hint_"+index_hint).addClass("clicked");
							}
							
							if(hint.color && hint.highlight) {
								jQueryCustom(tooltip).attr("style","border-color:"+hint.color+"!important");
							}
						});

						jQueryCustom(".tooltip_hint_"+index_hint+" .tooltip_close ").unbind('click').bind('click', function () {
							if(hint.highlight) {
								jQueryCustom(tooltip).removeClass("hint_showing").removeAttr("style");
							}
							//jQueryCustom(tooltip).removeClass("hint_showing").removeAttr("style");
							jQueryCustom(".tooltip_hint_"+index_hint).removeClass("clicked");
							jQueryCustom(".tooltip_hint_"+index_hint).removeClass("opened");
						});

						jQueryCustom(".question_"+index_hint).unbind('mouseenter').bind('mouseenter', function () {
							jQueryCustom(".tooltip_hint_"+index_hint).addClass("opened");
						});

						jQueryCustom(".question_"+index_hint).unbind('mouseleave').bind('mouseleave', function () {
							if(!jQueryCustom(".tooltip_hint_"+index_hint).hasClass("clicked")){
								jQueryCustom(".tooltip_hint_"+index_hint).removeClass("opened");
							}
						});
					}

					
				} else {
					if($scope){
						jQueryCustom("#tooltip_preview").css("top",top+"px");
						jQueryCustom("#tooltip_preview").css("left",left+"px");
						jQueryCustom("#tooltip_preview").css("transform",'translate('+translateX+'%,'+translateY+'%)');
					} else {
						var patch_left = left;
						if(hint.right && hint.arrow=="down"){
							patch_left = left - jQueryCustom(".tooltip_hint_"+index_hint).width() -50;
						}
						jQueryCustom(".tooltip_hint_"+index_hint).css("top",top+"px");
						jQueryCustom(".tooltip_hint_"+index_hint).css("left",patch_left+"px");
						jQueryCustom(".tooltip_hint_"+index_hint).css("transform",'translate('+translateX+'%,'+translateY+'%)');

						/*jQueryCustom(".question_"+index_hint).css("top",top+"px");
						jQueryCustom(".question_"+index_hint).css("left",patch_left+"px");*/
					}

					if(hint.modal){
						jQueryCustom("#my_meta_modal_up").css("height",jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop()+"px");
						
						jQueryCustom("#my_meta_modal_down").css("height",jQueryCustom(window).innerHeight() - jQueryCustom(tooltip).innerHeight() - jQueryCustom(tooltip).offset().top + Math.abs(jQueryCustom(document).scrollTop()) -6+"px");

						jQueryCustom("#my_meta_modal_left").css("height",jQueryCustom(tooltip).innerHeight()+6+"px");
						jQueryCustom("#my_meta_modal_left").css("top",jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop());
						jQueryCustom("#my_meta_modal_left").css("width",jQueryCustom("body").hasClass("myMetaConsole") ? jQueryCustom(tooltip).offset().left-350 : jQueryCustom(tooltip).offset().left);

						jQueryCustom("#my_meta_modal_right").css("height",jQueryCustom(tooltip).innerHeight()+6+"px");
						jQueryCustom("#my_meta_modal_right").css("top",jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop());
						jQueryCustom("#my_meta_modal_right").css("width",jQueryCustom(window).innerWidth() - (jQueryCustom(tooltip).offset().left + jQueryCustom(tooltip).innerWidth()) - 6);
					}

					if(hint.color) {
						if($scope && document.querySelector(".tooltip .svg_arrow>img")){
							jQueryCustom(".tooltip_hint_"+index_hint + " .tooltip_container, #tooltip_preview .tooltip_container").css("background-color",hint.color);
							jQueryCustom(".tooltip_hint_"+index_hint + " button, #tooltip_preview button").css("color",hint.color);
							SVGInject(document.querySelector(".tooltip .svg_arrow>img")).then(response => {
								jQueryCustom(".tooltip .svg_arrow .cls-1,.tooltip .svg_arrow .st0").css("fill",hint.color);
							});
						}
					}
				}
			}  else {
				if($scope){
					jQueryCustom("#tooltip_preview").remove();
				} else {
					jQueryCustom(".tooltip_hint_"+index_hint).remove();
				}
				jQueryCustom(".question_"+index_hint).remove();
			}

			if(!isChild) {
				if(!window.intervals_hint[index_hint]){
					window.intervals_hint[index_hint] = win.setInterval(function () {
						jQueryCustom().hint(index_hint,true,true,$scope,newHint);
					}, window.MMgeneralPolling);
				}
			}
		}
	}
}(window.jQueryCustom, window));


jQueryCustom.extend(
    jQueryCustom.expr[':'], { 
        screen: function (el) {
            var $e = jQueryCustom(el),
            $w = jQueryCustom(window),
            top = $e.offset().top,
            height = $e.outerHeight(true),
            windowTop = $w.scrollTop(),
            windowScroll = windowTop - height,
            windowHeight = windowTop + height + $w.height();
            return (top > windowScroll && top < windowHeight);
        }
    }
);

jQueryCustom.extend(
    jQueryCustom.expr[':'], { 
        mcontains: function (obj, index, meta, stack) { 
            var theList = meta[3].slice(1,-1).split("','");
            var contents = (obj.textContent || obj.innerText || jQueryCustom(obj).text() || '')
            for (var x=0;x<theList.length;x++) {
                if (contents.indexOf(theList[x]) >= 0) {
                    return true;
                }
            }
            return false;
        }
    }
);
jQueryCustom.extend(
    jQueryCustom.expr[':'], { 
        mfilled: function (el) {
            var $e = jQueryCustom(el);
            try {
                if($e[0].value.length){
                    return true;
                } else {
                    return false;
                }
            } catch(e) {
                return false;
            }
        }
    }
);

jQueryCustom.extend(
    jQueryCustom.expr[':'], { 
        mvalid: function (el) {
            var $e = jQueryCustom(el);
            try {
                return $e[0].checkValidity();
            } catch(e) {
                return false;
            }
        }
    }
);

(function (jQueryCustom, win, undefined) {
	var intervals = {};
	var removeListener = function(listener) {
		if (intervals[listener]) {
			win.clearInterval(intervals[listener]);
			intervals[listener] = null;
		}
	};

	jQueryCustom.fn.preview = function(index_route,index_step,open,isChild) {

		var preview=routes[index_route]["steps"][index_step]["highlight"]["selector"];

		if (!open) {
			jQueryCustom(preview).removeClass("preview");
		}

		else {
			jQueryCustom(preview).addClass("preview");
		}
  	}
}(window.jQueryCustom, window));

(function (jQueryCustom, win, undefined) {
	var removeListener = function(listener) {
		if (window.intervals_tooltip[listener]) {
			win.clearInterval(window.intervals_tooltip[listener]);
			window.intervals_tooltip[listener] = null;
		}
	};

	jQueryCustom.fn.tooltips = function(index_route,index_step,open,isChild, $scope, newStep) {

		var step, tooltip;

		if($scope){
			if(newStep){
				step=newStep;
				tooltip=newStep.tooltip.selector;
			}
		} else {
			step=routes[index_route]["steps"][index_step];
			tooltip=routes[index_route]["steps"][index_step]["tooltip"]["selector"];
		}

		if (!open) {
			jQueryCustom("body").removeAttr("mymeta-route");
			jQueryCustom("body").removeAttr("mymeta-step"); //BRICIOLE
			jQueryCustom("body").removeClass("myMetaHideSticker");
			jQueryCustom("body").removeClass("myMetaIgnore");
			jQueryCustom("#sticker,#detached_sticker").removeClass("reduced");
			if($scope){
				jQueryCustom("#tooltip_preview").remove();
				jQueryCustom(".myMetaConsoleBorder").removeClass("myMetaConsoleBorder");
				jQueryCustom(document).off('keydown');
				removeListener(index_route+"_"+index_step);
			} else {
				jQueryCustom(".tooltip_"+index_route+"_"+index_step).remove();
				jQueryCustom(tooltip).addClass("mymeta_was_here");
				removeListener(index_route+"_"+index_step);
			}
			jQueryCustom(".my_meta_modal").remove();
		}

		else {
			if(jQueryCustom(tooltip+":visible()").length){
				var found = $scope ? jQueryCustom("#tooltip_preview").length : jQueryCustom('.tooltip_'+index_route+"_"+index_step).length;

				var top,left = 0;

				if(step.tooltip.top) {
					top = jQueryCustom(step.tooltip.selector).offset().top - jQueryCustom(document).scrollTop();
					top = top + (parseInt(step.tooltip.top.replace("px","")));

					
				} else {
					top = jQueryCustom(step.tooltip.selector).offset().top - jQueryCustom(document).scrollTop();
					top = top + (parseInt(step.tooltip.bottom.replace("px","")));
					top = top + (parseInt(jQueryCustom(step.tooltip.selector).css("height").replace("px","")));
				}


				if(step.tooltip.left) {
					left = jQueryCustom(step.tooltip.selector).offset().left;
					left = left + (parseInt(step.tooltip.left.replace("px","")));
				} else {
					left = jQueryCustom(step.tooltip.selector).offset().left;
					left = left + (parseInt(step.tooltip.right.replace("px","")));
					left = left + (parseInt(jQueryCustom(step.tooltip.selector).css("width").replace("px","")));
				}

				var translateX = 0;
				var translateY = 0;

				if(step.tooltip.arrow=="up"){
					top = top + 19;
					top = top + 58;
					translateY=-100;
					if(!step.tooltip.left){
						translateX=-100;
					}
				}
				if(step.tooltip.arrow=="down"){
					top = top - 19;
					top = top - 58;
					if(!step.tooltip.left){
						translateX=-100;
					}
				}
				if(step.tooltip.arrow=="left"){
					top = top -15;
					left = left + 19;
					if(step.tooltip.bottom){
						top = top -29;
					}
				}
				if(step.tooltip.arrow=="right"){
					top = top -15;
					left = left - 19;
					translateX=-100;
					if(step.tooltip.bottom){
						top = top -29;
					}
				}


				if(!found) {

					//LISTENER PER FRECCE
					if($scope){
						jQueryCustom(document).on('keydown', function(e) {
							if(!jQueryCustom("text-angular").hasClass("focussed")){
								if(newStep.tooltip.left){
									if(e.keyCode==37){
										e.preventDefault();
										newStep.tooltip.left = (parseInt(newStep.tooltip.left.replace("px",""))-1)+"px";
										$scope.$apply();
									} else if(e.keyCode==39){
										e.preventDefault();
										newStep.tooltip.left = (parseInt(newStep.tooltip.left.replace("px",""))+1)+"px";
										$scope.$apply();
									}
								} else {
									if(e.keyCode==37){
										e.preventDefault();
										newStep.tooltip.right = (parseInt(newStep.tooltip.right.replace("px",""))-1)+"px";
										$scope.$apply();
									} else if(e.keyCode==39){
										e.preventDefault();
										newStep.tooltip.right = (parseInt(newStep.tooltip.right.replace("px",""))+1)+"px";
										$scope.$apply();
									}		
								}
			
								if(newStep.tooltip.top){
									if(e.keyCode==38){
										e.preventDefault();
										newStep.tooltip.top = (parseInt(newStep.tooltip.top.replace("px",""))-1)+"px";
										$scope.$apply();
									} else if(e.keyCode==40){
										e.preventDefault();
										newStep.tooltip.top = (parseInt(newStep.tooltip.top.replace("px",""))+1)+"px";
										$scope.$apply();
									}
								} else {
									if(e.keyCode==38){ 
										e.preventDefault();
										newStep.tooltip.bottom = (parseInt(newStep.tooltip.bottom.replace("px",""))-1)+"px";
										$scope.$apply();
									} else if(e.keyCode==40){
										e.preventDefault();
										newStep.tooltip.bottom = (parseInt(newStep.tooltip.bottom.replace("px",""))+1)+"px";
										$scope.$apply();
									}		
								}
							}
						});
					}

					var arrows='';
					if(step.tooltip.arrow) {
						if(step.tooltip.arrow=="info") {
							if(!$scope){
								arrows+="animated fadeIn info";
							} else {
								arrows+="info";
							}
						} else {
							arrows+=step.tooltip.arrow;
							arrows+=" ";
							if(!$scope){
								arrows+="animated fadeIn";
								if(step.tooltip.arrow=="right"||step.tooltip.arrow=="left"){
									if(step.tooltip.arrow=="right"){
										arrows+="Left";
									} else {
										arrows+="Right";
									}
								} else {
									arrows+=step.tooltip.arrow.charAt(0).toUpperCase();
									arrows+=step.tooltip.arrow.slice(1);
								}
							}
							
							
						}
					}

					var span = $scope ?
						'<div id="tooltip_preview" class="'+arrows+' noclick tooltip ':
						'<div counter='+(index_step+1)+' class="'+arrows+' noclick tooltip tooltip_'+index_route+"_"+index_step+' ';
					
					if(step.tooltip.flipped){
						span+='flipped';
					}
					span+='" ';	

					span+= 'style="top:'+top+'px;';
					span+= 'left:'+left+'px;';
					if(step.tooltip.delay){
						span+= 'animation-delay:'+step.tooltip.delay+';';
					}
					
					var arrow_src = "https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/arrow_with_pin_sx.svg";
					if(step.tooltip.arrow=="right") {
						arrow_src = "https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/arrow_with_pin_dx.svg";
					} else if(step.tooltip.arrow=="down"){
						arrow_src = "https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/arrow_with_pin_down.svg";
					} else if(step.tooltip.arrow=="up"){
						arrow_src = "https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/arrow_with_pin_up.svg";
					} 

					span+= 'transform:translate('+translateX+'%,'+translateY+'%);">';
					span+= '<div class="svg_arrow" counter="'+(index_step+1)+'"><img src="'+arrow_src+'"></div>';
					span+= '<div class="tooltip_container" ';
					if(step.tooltip.width){
						span+= 'style="width:'+step.tooltip.width+'px;"';
					}
					var my_text = actual_language == 'default' ? step.tooltip.text : step.tooltip['text_'+actual_language];
					span+= '><span class="tooltip_close tool_click"><img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/close_white.svg"></span>';
					span+='<div id="tooltip_text">'+ my_text +'</div>';

					span+='</div><div id="arrows_container">';
					span+= '<span title="Indietro" id="tooltip_back" class="tool_click"><img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/caret-left-solid.svg" /></span>';
					span+= '<span title="Avanti" id="tooltip_forward" class="tool_click"><img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/caret-right-solid.svg" /></span>';
					span+='</div>';

					if(step.tooltip.alternative_append){
						jQueryCustom(step.tooltip.alternative_append_selector).append(span);
					} else {
						jQueryCustom("body").append(span);
					}
					
					if(step.tooltip.color) {
						jQueryCustom(".tooltip_"+index_route+"_"+index_step + " .tooltip_container, #tooltip_preview .tooltip_container").css("background-color",step.tooltip.color);
						jQueryCustom(".tooltip_"+index_route+"_"+index_step + " #arrows_container, #tooltip_preview #arrows_container").css("background-color",step.tooltip.color);
						jQueryCustom(".tooltip_"+index_route+"_"+index_step + " button, #tooltip_preview button").css("color",step.tooltip.color);
						SVGInject(document.querySelector(".tooltip .svg_arrow>img")).then(response => {
							jQueryCustom(".tooltip .svg_arrow .cls-1,.tooltip .svg_arrow .st0").css("fill",step.tooltip.color);
						});
					}

					if(step.tooltip.right && step.tooltip.arrow=="down"){
						jQueryCustom(".tooltip_"+index_route+"_"+index_step).css("left",left - jQueryCustom(".tooltip_"+index_route+"_"+index_step).width() -50 +"px");
					}
					
					jQueryCustom("#arrows_container").addClass("disabled");

					jQueryCustom(".tooltip button.goToNextStep").addClass("gotostep");
					jQueryCustom(".tooltip button.goToNextStep").attr("gotostep",index_route+","+(parseInt(index_step)+1));

					var should_render_back_arrow = should_render_arrow(index_route, index_step, false);
					var should_render_forward_arrow = should_render_arrow(index_route, index_step, true);
					
					if(should_render_back_arrow || should_render_forward_arrow)
						jQueryCustom("#arrows_container").removeClass("disabled");
					
					jQueryCustom("#tooltip_back").unbind("click");
					jQueryCustom("#tooltip_back").addClass("disabled");
					if(index_step > 0 && should_render_back_arrow) {
						var back = function(e) {
							goToStep(index_route, get_arrow_goToStep(index_route, index_step, false));
						};
						jQueryCustom("#tooltip_back").removeClass("disabled");
						jQueryCustom("#tooltip_back").click(back);
					}
					
					jQueryCustom("#tooltip_forward").unbind("click");
					jQueryCustom("#tooltip_forward").addClass("disabled");
					if(index_step < routes[index_route]["steps"].length-1 && should_render_forward_arrow) {
						var forward = function(e) {
							goToStep(index_route, get_arrow_goToStep(index_route, index_step, true));
						};
							
						jQueryCustom("#tooltip_forward").removeClass("disabled");
						jQueryCustom("#tooltip_forward").click(forward);
					}
					
					jQueryCustom(".tooltip_close").click(function(e) {
						jQueryCustom(document).off();
						jQueryCustom(".event_found").removeClass("event_found");
						jQueryCustom().tooltips(index_route,index_step,false);
						jQueryCustom().highlights(index_route,index_step,false);
						jQueryCustom().events(index_route,index_step,false);
						set_globals(0,-1,-1);
						jQueryCustom("#sticker").remove();
						jQueryCustom("#detached_sticker").remove();

						// If in documentation mode, reset it
						if(typeof(disableDocumentationMode) == 'function')
							disableDocumentationMode();
					});
					
					if(step.tooltip.modal){
						
						
						var modal_delay = 0;
						if(step.tooltip.delay) {
							modal_delay = parseInt(step.tooltip.delay.replace("ms", ""));
						}

						setTimeout(function(){
							var modal_up = "<div id='my_meta_modal_up' class='my_meta_modal' ";
							modal_up+= 'style="height:';
							modal_up+= jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop();
							modal_up+='px;"></div>';

							var modal_down = "<div id='my_meta_modal_down' class='my_meta_modal' ";
							modal_down+= 'style="height:';
							var bottom_height = jQueryCustom(window).innerHeight() - jQueryCustom(tooltip).innerHeight() - jQueryCustom(tooltip).offset().top + Math.abs(jQueryCustom(document).scrollTop());
							modal_down+= bottom_height;
							modal_down+='px;"></div>';

							var modal_left = "<div id='my_meta_modal_left' class='my_meta_modal' ";
							modal_left+= 'style="height:';
							modal_left+= jQueryCustom(tooltip).innerHeight();
							modal_left+='px;';
							modal_left+= 'top:';
							modal_left+= jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop();
							modal_left+='px;';
							modal_left+= 'width:';
							jQueryCustom("body").hasClass("myMetaConsole") ? modal_left+= jQueryCustom(tooltip).offset().left-350 : modal_left+= jQueryCustom(tooltip).offset().left;
							modal_left+='px;';
							modal_left+='"></div>';

							var modal_right = "<div id='my_meta_modal_right' class='my_meta_modal' ";
							modal_right+= 'style="height:';
							modal_right+= jQueryCustom(tooltip).innerHeight();
							modal_right+='px;';
							modal_right+= 'top:';
							modal_right+= jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop();
							modal_right+='px;';
							modal_right+= 'width:';
							modal_right+= jQueryCustom(window).innerWidth() - (jQueryCustom(tooltip).offset().left + jQueryCustom(tooltip).innerWidth());
							modal_right+='px;';
							modal_right+='"></div>';
							jQueryCustom("body").append(modal_up);
							jQueryCustom("body").append(modal_down);
							jQueryCustom("body").append(modal_left);
							jQueryCustom("body").append(modal_right);
						}, modal_delay);
						
					}

					if(!$scope){
						jQueryCustom(".tooltip button.gotostep").unbind('click').bind('click', function () {
							if(jQueryCustom(this).attr("gotostep")){
								goToStep(jQueryCustom(this).attr("gotostep").split(",")[0],jQueryCustom(this).attr("gotostep").split(",")[1]);
							}
						});
						
						if(step.tooltip.autoscroll) {
							var offset = 0;
							var target = "body";
							var delay = 0;
							if(step.tooltip.autoscroll_delay){
								delay = parseInt(step.tooltip.autoscroll_delay);
							}
							if(step.tooltip.autoscroll_target){
								target = step.tooltip.autoscroll_target;
							}
							if(step.tooltip.autoscroll_offset){
								offset = parseInt(step.tooltip.autoscroll_offset);
							}

							if(!step.tooltip.autoscroll_horizontal){
								setTimeout(function(){
									jQueryCustom('html,'+target).animate({
										scrollTop: jQueryCustom(tooltip).offset().top+offset-150
									}, 900);
								}, delay);
							} else {
								setTimeout(function(){
									jQueryCustom('html,'+target).animate({
										scrollLeft: jQueryCustom(tooltip).offset().left+offset-150
									}, 900);
								}, delay);
							}							
						}
					}

					
				} else {
					if($scope){
						jQueryCustom("#tooltip_preview").css("top",top+"px");
						jQueryCustom("#tooltip_preview").css("left",left+"px");
						jQueryCustom("#tooltip_preview").css("transform",'translate('+translateX+'%,'+translateY+'%)');
					} else {
						var patch_left = left;
						if(step.tooltip.right && step.tooltip.arrow=="down"){
							patch_left = left - jQueryCustom(".tooltip_"+index_route+"_"+index_step).width() -50;
						}
						if(step.tooltip.autoscroll_horizontal){
							patch_left = left - jQueryCustom(document).scrollLeft();
						}
						jQueryCustom(".tooltip_"+index_route+"_"+index_step).css("top",top+"px");
						jQueryCustom(".tooltip_"+index_route+"_"+index_step).css("left",patch_left+"px");
						jQueryCustom(".tooltip_"+index_route+"_"+index_step).css("transform",'translate('+translateX+'%,'+translateY+'%)');
					}

					if(step.tooltip.modal){
						jQueryCustom("#my_meta_modal_up").css("height",jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop()+"px");
						
						jQueryCustom("#my_meta_modal_down").css("height",jQueryCustom(window).innerHeight() - jQueryCustom(tooltip).innerHeight() - jQueryCustom(tooltip).offset().top + Math.abs(jQueryCustom(document).scrollTop()) -6+"px");

						jQueryCustom("#my_meta_modal_left").css("height",jQueryCustom(tooltip).innerHeight()+6+"px");
						jQueryCustom("#my_meta_modal_left").css("top",jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop());
						jQueryCustom("#my_meta_modal_left").css("width",jQueryCustom("body").hasClass("myMetaConsole") ? jQueryCustom(tooltip).offset().left-350 : jQueryCustom(tooltip).offset().left);

						jQueryCustom("#my_meta_modal_right").css("height",jQueryCustom(tooltip).innerHeight()+6+"px");
						jQueryCustom("#my_meta_modal_right").css("top",jQueryCustom(tooltip).offset().top - jQueryCustom(document).scrollTop());
						jQueryCustom("#my_meta_modal_right").css("width",jQueryCustom(window).innerWidth() - (jQueryCustom(tooltip).offset().left + jQueryCustom(tooltip).innerWidth()) - 6);
					}

					if(step.tooltip.color) {
						if($scope && document.querySelector(".tooltip .svg_arrow>img")){
							jQueryCustom(".tooltip_"+index_route+"_"+index_step + " .tooltip_container, #tooltip_preview .tooltip_container").css("background-color",step.tooltip.color);
							jQueryCustom(".tooltip_"+index_route+"_"+index_step + " #arrows_container, #tooltip_preview #arrows_container").css("background-color",step.tooltip.color);
							jQueryCustom(".tooltip_"+index_route+"_"+index_step + " button, #tooltip_preview button").css("color",step.tooltip.color);
							SVGInject(document.querySelector(".tooltip .svg_arrow>img")).then(response => {
								jQueryCustom(".tooltip .svg_arrow .cls-1,.tooltip .svg_arrow .st0").css("fill",step.tooltip.color);
							});
						}
					}
				}
			}  else {
				if($scope){
					jQueryCustom("#tooltip_preview").remove();
				} else {
					jQueryCustom(".tooltip_"+index_route+"_"+index_step).remove();
				}
			}

			if($scope){
				if(newStep) {
					jQueryCustom(newStep.highlight.selector).addClass("myMetaConsoleBorder");
				}
			}

			if(!isChild) {
				jQueryCustom("body").attr("mymeta-route",routes[index_route].label);
				jQueryCustom("body").attr("mymeta-step",routes[index_route].steps[index_step].label);
				if(routes[index_route].steps[index_step].reduce_tooltip) {
					jQueryCustom("#sticker,#detached_sticker").addClass("reduced");
				}
				if(routes[index_route].hide_sticker) {
					jQueryCustom("body").addClass("myMetaHideSticker");
				}

				if(routes[index_route].steps[index_step].event.ignore){
					jQueryCustom("body").addClass("myMetaIgnore");
				}

				if(!window.intervals_tooltip[index_route+"_"+index_step]){
					window.intervals_tooltip[index_route+"_"+index_step] = win.setInterval(function () {
						jQueryCustom().tooltips(index_route,index_step,true,true,$scope,newStep);
					}, window.MMgeneralPolling);
				}
			}
		}
	}
}(window.jQueryCustom, window));
(function (jQueryCustom, win, undefined) {
	var removeListener = function(listener) {
		if (window.intervals_trigger[listener]) {
			win.clearInterval(window.intervals_trigger[listener]);
			window.intervals_trigger[listener] = null;
		}
	};

	jQueryCustom.fn.triggers = function(index_trigger,open,isChild) {
		var selector=triggers[index_trigger]["selector"];
		if (!open) {
			//CHIUDO TRIGGER
			removeListener(index_trigger);
		}

		else {
			if(jQueryCustom(selector).length){
				if(!jQueryCustom("body[mymeta-route]").length){
					//INNESCO TRIGGER
					var index_route = from_label_to_index_route(triggers[index_trigger]['gotoroute']);
					var index_step = from_label_to_index_step(triggers[index_trigger]['gotostep'], index_route);

					if(triggers[index_trigger]['type']=='normal') {
						set_globals(1,index_route,index_step);
						jQueryCustom().guide(index_route,index_step);
					} else if(triggers[index_trigger]['type']=='click') {
						jQueryCustom(selector).click(function() {
							set_globals(1,index_route,index_step);
							jQueryCustom().guide(index_route,index_step);
							jQueryCustom(selector).off();
						});
					} else if(triggers[index_trigger]['type']=='focusin') {
						jQueryCustom(selector).focusin(function() {
							set_globals(1,index_route,index_step);
							jQueryCustom().guide(index_route,index_step);
							jQueryCustom(selector).off();
						});
					}  else if(triggers[index_trigger]['type']=='focusout') {
						jQueryCustom(selector).focusout(function() {
							set_globals(1,index_route,index_step);
							jQueryCustom().guide(index_route,index_step);
							jQueryCustom(selector).off();
						});
					} else if(triggers[index_trigger]['type']=='timer') {
						setTimeout(function(){
							set_globals(1,index_route,index_step);
							jQueryCustom().guide(index_route,index_step);
						}, parseInt(triggers[index_trigger]['delay']));
					}

					jQueryCustom().triggers(index_trigger,false);
				}
			}

			if(!isChild) {
				if(!window.intervals_trigger[index_trigger]){
					window.intervals_trigger[index_trigger] = win.setInterval(function () {
						jQueryCustom().triggers(index_trigger,true,true);
					}, window.MMgeneralPolling);
				}
			}
		}
	}
}(window.jQueryCustom, window));

window.actual_language = "default";
window.mymeta_project = "mymeta-console";
window.mymeta_base_url = "https://europe-west1-" + window.mymeta_project + ".cloudfunctions.net";
window.mymeta_storage_url = "https://" + window.mymeta_project + ".appspot.com.storage.googleapis.com";
//window.mymeta_base_url = "http://localhost:5001/mymeta-console/europe-west1";

var videos=
[
	/*{
		"title":	"How to Create a Group",
		"subtitle": "Tutorial",
		"vimeo":	"https://player.vimeo.com/video/307080119",
		"thumb": 	"https://s3.eu-central-1.amazonaws.com/it.allos.mymeta/global/assets/thumb1.png"
	}*/
];
window.mymeta_MD5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }

    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = lX & 0x80000000;
        lY8 = lY & 0x80000000;
        lX4 = lX & 0x40000000;
        lY4 = lY & 0x40000000;
        lResult = (lX & 0x3fffffff) + (lY & 0x3fffffff);
        if (lX4 & lY4) {
            return lResult ^ 0x80000000 ^ lX8 ^ lY8;
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return lResult ^ 0xc0000000 ^ lX8 ^ lY8;
            } else {
                return lResult ^ 0x40000000 ^ lX8 ^ lY8;
            }
        } else {
            return lResult ^ lX8 ^ lY8;
        }
    }

    function F(x, y, z) {
        return (x & y) | (~x & z);
    }

    function G(x, y, z) {
        return (x & z) | (y & ~z);
    }

    function H(x, y, z) {
        return x ^ y ^ z;
    }

    function I(x, y, z) {
        return y ^ (x | ~z);
    }

    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));

        return AddUnsigned(RotateLeft(a, s), b);
    }

    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));

        return AddUnsigned(RotateLeft(a, s), b);
    }

    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));

        return AddUnsigned(RotateLeft(a, s), b);
    }

    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));

        return AddUnsigned(RotateLeft(a, s), b);
    }

    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 =
            (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] =
                lWordArray[lWordCount] |
                (string.charCodeAt(lByteCount) << lBytePosition);
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }

    function WordToHex(lValue) {
        var WordToHexValue = "",
            WordToHexValue_temp = "",
            lByte,
            lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue =
                WordToHexValue +
                WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
                utftext += String.fromCharCode((c >> 6) | 192);

                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);

                utftext += String.fromCharCode(((c >> 6) & 63) | 128);

                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    string = string.toLowerCase();
    string = string
        .replace("https://", "")
        .replace("http://", "")
        .replace(/\./g, "_");
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7,
        S12 = 12,
        S13 = 17,
        S14 = 22;
    var S21 = 5,
        S22 = 9,
        S23 = 14,
        S24 = 20;
    var S31 = 4,
        S32 = 11,
        S33 = 16,
        S34 = 23;
    var S41 = 6,
        S42 = 10,
        S43 = 15,
        S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xefcdab89;
    c = 0x98badcfe;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xd76aa478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xe8c7b756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070db);
        b = FF(b, c, d, a, x[k + 3], S14, 0xc1bdceee);
        a = FF(a, b, c, d, x[k + 4], S11, 0xf57c0faf);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787c62a);
        c = FF(c, d, a, b, x[k + 6], S13, 0xa8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xfd469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098d8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8b44f7af);
        c = FF(c, d, a, b, x[k + 10], S13, 0xffff5bb1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895cd7be);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6b901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xfd987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xa679438e);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49b40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xf61e2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xc040b340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265e5a51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xe9b6c7aa);
        a = GG(a, b, c, d, x[k + 5], S21, 0xd62f105d);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xd8a1e681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xe7d3fbc8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21e1cde6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xc33707d6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xf4d50d87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455a14ed);
        a = GG(a, b, c, d, x[k + 13], S21, 0xa9e3e905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xfcefa3f8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676f02d9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8d2a4c8a);
        a = HH(a, b, c, d, x[k + 5], S31, 0xfffa3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771f681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6d9d6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xfde5380c);
        a = HH(a, b, c, d, x[k + 1], S31, 0xa4beea44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4bdecfa9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xf6bb4b60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xbebfbc70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289b7ec6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xeaa127fa);
        c = HH(c, d, a, b, x[k + 3], S33, 0xd4ef3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881d05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xd9d4d039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xe6db99e5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1fa27cf8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xc4ac5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xf4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432aff97);
        c = II(c, d, a, b, x[k + 14], S43, 0xab9423a7);
        b = II(b, c, d, a, x[k + 5], S44, 0xfc93a039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655b59c3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8f0ccc92);
        c = II(c, d, a, b, x[k + 10], S43, 0xffeff47d);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845dd1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6fa87e4f);
        d = II(d, a, b, c, x[k + 15], S42, 0xfe2ce6e0);
        c = II(c, d, a, b, x[k + 6], S43, 0xa3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4e0811a1);
        a = II(a, b, c, d, x[k + 4], S41, 0xf7537e82);
        d = II(d, a, b, c, x[k + 11], S42, 0xbd3af235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2ad7d2bb);
        b = II(b, c, d, a, x[k + 9], S44, 0xeb86d391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};

(function (factory) {
	var registeredInModuleLoader;
	/*if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}*/
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));

/* https://raw.githubusercontent.com/lupomontero/psl/master/dist/psl.js */

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.psl = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    module.exports=[
    "ac",
    "com.ac",
    "edu.ac",
    "gov.ac",
    "net.ac",
    "mil.ac",
    "org.ac",
    "ad",
    "nom.ad",
    "ae",
    "co.ae",
    "net.ae",
    "org.ae",
    "sch.ae",
    "ac.ae",
    "gov.ae",
    "mil.ae",
    "aero",
    "accident-investigation.aero",
    "accident-prevention.aero",
    "aerobatic.aero",
    "aeroclub.aero",
    "aerodrome.aero",
    "agents.aero",
    "aircraft.aero",
    "airline.aero",
    "airport.aero",
    "air-surveillance.aero",
    "airtraffic.aero",
    "air-traffic-control.aero",
    "ambulance.aero",
    "amusement.aero",
    "association.aero",
    "author.aero",
    "ballooning.aero",
    "broker.aero",
    "caa.aero",
    "cargo.aero",
    "catering.aero",
    "certification.aero",
    "championship.aero",
    "charter.aero",
    "civilaviation.aero",
    "club.aero",
    "conference.aero",
    "consultant.aero",
    "consulting.aero",
    "control.aero",
    "council.aero",
    "crew.aero",
    "design.aero",
    "dgca.aero",
    "educator.aero",
    "emergency.aero",
    "engine.aero",
    "engineer.aero",
    "entertainment.aero",
    "equipment.aero",
    "exchange.aero",
    "express.aero",
    "federation.aero",
    "flight.aero",
    "freight.aero",
    "fuel.aero",
    "gliding.aero",
    "government.aero",
    "groundhandling.aero",
    "group.aero",
    "hanggliding.aero",
    "homebuilt.aero",
    "insurance.aero",
    "journal.aero",
    "journalist.aero",
    "leasing.aero",
    "logistics.aero",
    "magazine.aero",
    "maintenance.aero",
    "media.aero",
    "microlight.aero",
    "modelling.aero",
    "navigation.aero",
    "parachuting.aero",
    "paragliding.aero",
    "passenger-association.aero",
    "pilot.aero",
    "press.aero",
    "production.aero",
    "recreation.aero",
    "repbody.aero",
    "res.aero",
    "research.aero",
    "rotorcraft.aero",
    "safety.aero",
    "scientist.aero",
    "services.aero",
    "show.aero",
    "skydiving.aero",
    "software.aero",
    "student.aero",
    "trader.aero",
    "trading.aero",
    "trainer.aero",
    "union.aero",
    "workinggroup.aero",
    "works.aero",
    "af",
    "gov.af",
    "com.af",
    "org.af",
    "net.af",
    "edu.af",
    "ag",
    "com.ag",
    "org.ag",
    "net.ag",
    "co.ag",
    "nom.ag",
    "ai",
    "off.ai",
    "com.ai",
    "net.ai",
    "org.ai",
    "al",
    "com.al",
    "edu.al",
    "gov.al",
    "mil.al",
    "net.al",
    "org.al",
    "am",
    "co.am",
    "com.am",
    "commune.am",
    "net.am",
    "org.am",
    "ao",
    "ed.ao",
    "gv.ao",
    "og.ao",
    "co.ao",
    "pb.ao",
    "it.ao",
    "aq",
    "ar",
    "com.ar",
    "edu.ar",
    "gob.ar",
    "gov.ar",
    "int.ar",
    "mil.ar",
    "musica.ar",
    "net.ar",
    "org.ar",
    "tur.ar",
    "arpa",
    "e164.arpa",
    "in-addr.arpa",
    "ip6.arpa",
    "iris.arpa",
    "uri.arpa",
    "urn.arpa",
    "as",
    "gov.as",
    "asia",
    "at",
    "ac.at",
    "co.at",
    "gv.at",
    "or.at",
    "au",
    "com.au",
    "net.au",
    "org.au",
    "edu.au",
    "gov.au",
    "asn.au",
    "id.au",
    "info.au",
    "conf.au",
    "oz.au",
    "act.au",
    "nsw.au",
    "nt.au",
    "qld.au",
    "sa.au",
    "tas.au",
    "vic.au",
    "wa.au",
    "act.edu.au",
    "catholic.edu.au",
    "nsw.edu.au",
    "nt.edu.au",
    "qld.edu.au",
    "sa.edu.au",
    "tas.edu.au",
    "vic.edu.au",
    "wa.edu.au",
    "qld.gov.au",
    "sa.gov.au",
    "tas.gov.au",
    "vic.gov.au",
    "wa.gov.au",
    "education.tas.edu.au",
    "schools.nsw.edu.au",
    "aw",
    "com.aw",
    "ax",
    "az",
    "com.az",
    "net.az",
    "int.az",
    "gov.az",
    "org.az",
    "edu.az",
    "info.az",
    "pp.az",
    "mil.az",
    "name.az",
    "pro.az",
    "biz.az",
    "ba",
    "com.ba",
    "edu.ba",
    "gov.ba",
    "mil.ba",
    "net.ba",
    "org.ba",
    "bb",
    "biz.bb",
    "co.bb",
    "com.bb",
    "edu.bb",
    "gov.bb",
    "info.bb",
    "net.bb",
    "org.bb",
    "store.bb",
    "tv.bb",
    "*.bd",
    "be",
    "ac.be",
    "bf",
    "gov.bf",
    "bg",
    "a.bg",
    "b.bg",
    "c.bg",
    "d.bg",
    "e.bg",
    "f.bg",
    "g.bg",
    "h.bg",
    "i.bg",
    "j.bg",
    "k.bg",
    "l.bg",
    "m.bg",
    "n.bg",
    "o.bg",
    "p.bg",
    "q.bg",
    "r.bg",
    "s.bg",
    "t.bg",
    "u.bg",
    "v.bg",
    "w.bg",
    "x.bg",
    "y.bg",
    "z.bg",
    "0.bg",
    "1.bg",
    "2.bg",
    "3.bg",
    "4.bg",
    "5.bg",
    "6.bg",
    "7.bg",
    "8.bg",
    "9.bg",
    "bh",
    "com.bh",
    "edu.bh",
    "net.bh",
    "org.bh",
    "gov.bh",
    "bi",
    "co.bi",
    "com.bi",
    "edu.bi",
    "or.bi",
    "org.bi",
    "biz",
    "bj",
    "asso.bj",
    "barreau.bj",
    "gouv.bj",
    "bm",
    "com.bm",
    "edu.bm",
    "gov.bm",
    "net.bm",
    "org.bm",
    "bn",
    "com.bn",
    "edu.bn",
    "gov.bn",
    "net.bn",
    "org.bn",
    "bo",
    "com.bo",
    "edu.bo",
    "gob.bo",
    "int.bo",
    "org.bo",
    "net.bo",
    "mil.bo",
    "tv.bo",
    "web.bo",
    "academia.bo",
    "agro.bo",
    "arte.bo",
    "blog.bo",
    "bolivia.bo",
    "ciencia.bo",
    "cooperativa.bo",
    "democracia.bo",
    "deporte.bo",
    "ecologia.bo",
    "economia.bo",
    "empresa.bo",
    "indigena.bo",
    "industria.bo",
    "info.bo",
    "medicina.bo",
    "movimiento.bo",
    "musica.bo",
    "natural.bo",
    "nombre.bo",
    "noticias.bo",
    "patria.bo",
    "politica.bo",
    "profesional.bo",
    "plurinacional.bo",
    "pueblo.bo",
    "revista.bo",
    "salud.bo",
    "tecnologia.bo",
    "tksat.bo",
    "transporte.bo",
    "wiki.bo",
    "br",
    "9guacu.br",
    "abc.br",
    "adm.br",
    "adv.br",
    "agr.br",
    "aju.br",
    "am.br",
    "anani.br",
    "aparecida.br",
    "arq.br",
    "art.br",
    "ato.br",
    "b.br",
    "barueri.br",
    "belem.br",
    "bhz.br",
    "bio.br",
    "blog.br",
    "bmd.br",
    "boavista.br",
    "bsb.br",
    "campinagrande.br",
    "campinas.br",
    "caxias.br",
    "cim.br",
    "cng.br",
    "cnt.br",
    "com.br",
    "contagem.br",
    "coop.br",
    "cri.br",
    "cuiaba.br",
    "curitiba.br",
    "def.br",
    "ecn.br",
    "eco.br",
    "edu.br",
    "emp.br",
    "eng.br",
    "esp.br",
    "etc.br",
    "eti.br",
    "far.br",
    "feira.br",
    "flog.br",
    "floripa.br",
    "fm.br",
    "fnd.br",
    "fortal.br",
    "fot.br",
    "foz.br",
    "fst.br",
    "g12.br",
    "ggf.br",
    "goiania.br",
    "gov.br",
    "ac.gov.br",
    "al.gov.br",
    "am.gov.br",
    "ap.gov.br",
    "ba.gov.br",
    "ce.gov.br",
    "df.gov.br",
    "es.gov.br",
    "go.gov.br",
    "ma.gov.br",
    "mg.gov.br",
    "ms.gov.br",
    "mt.gov.br",
    "pa.gov.br",
    "pb.gov.br",
    "pe.gov.br",
    "pi.gov.br",
    "pr.gov.br",
    "rj.gov.br",
    "rn.gov.br",
    "ro.gov.br",
    "rr.gov.br",
    "rs.gov.br",
    "sc.gov.br",
    "se.gov.br",
    "sp.gov.br",
    "to.gov.br",
    "gru.br",
    "imb.br",
    "ind.br",
    "inf.br",
    "jab.br",
    "jampa.br",
    "jdf.br",
    "joinville.br",
    "jor.br",
    "jus.br",
    "leg.br",
    "lel.br",
    "londrina.br",
    "macapa.br",
    "maceio.br",
    "manaus.br",
    "maringa.br",
    "mat.br",
    "med.br",
    "mil.br",
    "morena.br",
    "mp.br",
    "mus.br",
    "natal.br",
    "net.br",
    "niteroi.br",
    "*.nom.br",
    "not.br",
    "ntr.br",
    "odo.br",
    "ong.br",
    "org.br",
    "osasco.br",
    "palmas.br",
    "poa.br",
    "ppg.br",
    "pro.br",
    "psc.br",
    "psi.br",
    "pvh.br",
    "qsl.br",
    "radio.br",
    "rec.br",
    "recife.br",
    "ribeirao.br",
    "rio.br",
    "riobranco.br",
    "riopreto.br",
    "salvador.br",
    "sampa.br",
    "santamaria.br",
    "santoandre.br",
    "saobernardo.br",
    "saogonca.br",
    "sjc.br",
    "slg.br",
    "slz.br",
    "sorocaba.br",
    "srv.br",
    "taxi.br",
    "tc.br",
    "teo.br",
    "the.br",
    "tmp.br",
    "trd.br",
    "tur.br",
    "tv.br",
    "udi.br",
    "vet.br",
    "vix.br",
    "vlog.br",
    "wiki.br",
    "zlg.br",
    "bs",
    "com.bs",
    "net.bs",
    "org.bs",
    "edu.bs",
    "gov.bs",
    "bt",
    "com.bt",
    "edu.bt",
    "gov.bt",
    "net.bt",
    "org.bt",
    "bv",
    "bw",
    "co.bw",
    "org.bw",
    "by",
    "gov.by",
    "mil.by",
    "com.by",
    "of.by",
    "bz",
    "com.bz",
    "net.bz",
    "org.bz",
    "edu.bz",
    "gov.bz",
    "ca",
    "ab.ca",
    "bc.ca",
    "mb.ca",
    "nb.ca",
    "nf.ca",
    "nl.ca",
    "ns.ca",
    "nt.ca",
    "nu.ca",
    "on.ca",
    "pe.ca",
    "qc.ca",
    "sk.ca",
    "yk.ca",
    "gc.ca",
    "cat",
    "cc",
    "cd",
    "gov.cd",
    "cf",
    "cg",
    "ch",
    "ci",
    "org.ci",
    "or.ci",
    "com.ci",
    "co.ci",
    "edu.ci",
    "ed.ci",
    "ac.ci",
    "net.ci",
    "go.ci",
    "asso.ci",
    "aéroport.ci",
    "int.ci",
    "presse.ci",
    "md.ci",
    "gouv.ci",
    "*.ck",
    "!www.ck",
    "cl",
    "aprendemas.cl",
    "co.cl",
    "gob.cl",
    "gov.cl",
    "mil.cl",
    "cm",
    "co.cm",
    "com.cm",
    "gov.cm",
    "net.cm",
    "cn",
    "ac.cn",
    "com.cn",
    "edu.cn",
    "gov.cn",
    "net.cn",
    "org.cn",
    "mil.cn",
    "公司.cn",
    "网络.cn",
    "網絡.cn",
    "ah.cn",
    "bj.cn",
    "cq.cn",
    "fj.cn",
    "gd.cn",
    "gs.cn",
    "gz.cn",
    "gx.cn",
    "ha.cn",
    "hb.cn",
    "he.cn",
    "hi.cn",
    "hl.cn",
    "hn.cn",
    "jl.cn",
    "js.cn",
    "jx.cn",
    "ln.cn",
    "nm.cn",
    "nx.cn",
    "qh.cn",
    "sc.cn",
    "sd.cn",
    "sh.cn",
    "sn.cn",
    "sx.cn",
    "tj.cn",
    "xj.cn",
    "xz.cn",
    "yn.cn",
    "zj.cn",
    "hk.cn",
    "mo.cn",
    "tw.cn",
    "co",
    "arts.co",
    "com.co",
    "edu.co",
    "firm.co",
    "gov.co",
    "info.co",
    "int.co",
    "mil.co",
    "net.co",
    "nom.co",
    "org.co",
    "rec.co",
    "web.co",
    "com",
    "coop",
    "cr",
    "ac.cr",
    "co.cr",
    "ed.cr",
    "fi.cr",
    "go.cr",
    "or.cr",
    "sa.cr",
    "cu",
    "com.cu",
    "edu.cu",
    "org.cu",
    "net.cu",
    "gov.cu",
    "inf.cu",
    "cv",
    "cw",
    "com.cw",
    "edu.cw",
    "net.cw",
    "org.cw",
    "cx",
    "gov.cx",
    "cy",
    "ac.cy",
    "biz.cy",
    "com.cy",
    "ekloges.cy",
    "gov.cy",
    "ltd.cy",
    "name.cy",
    "net.cy",
    "org.cy",
    "parliament.cy",
    "press.cy",
    "pro.cy",
    "tm.cy",
    "cz",
    "de",
    "dj",
    "dk",
    "dm",
    "com.dm",
    "net.dm",
    "org.dm",
    "edu.dm",
    "gov.dm",
    "do",
    "art.do",
    "com.do",
    "edu.do",
    "gob.do",
    "gov.do",
    "mil.do",
    "net.do",
    "org.do",
    "sld.do",
    "web.do",
    "dz",
    "com.dz",
    "org.dz",
    "net.dz",
    "gov.dz",
    "edu.dz",
    "asso.dz",
    "pol.dz",
    "art.dz",
    "ec",
    "com.ec",
    "info.ec",
    "net.ec",
    "fin.ec",
    "k12.ec",
    "med.ec",
    "pro.ec",
    "org.ec",
    "edu.ec",
    "gov.ec",
    "gob.ec",
    "mil.ec",
    "edu",
    "ee",
    "edu.ee",
    "gov.ee",
    "riik.ee",
    "lib.ee",
    "med.ee",
    "com.ee",
    "pri.ee",
    "aip.ee",
    "org.ee",
    "fie.ee",
    "eg",
    "com.eg",
    "edu.eg",
    "eun.eg",
    "gov.eg",
    "mil.eg",
    "name.eg",
    "net.eg",
    "org.eg",
    "sci.eg",
    "*.er",
    "es",
    "com.es",
    "nom.es",
    "org.es",
    "gob.es",
    "edu.es",
    "et",
    "com.et",
    "gov.et",
    "org.et",
    "edu.et",
    "biz.et",
    "name.et",
    "info.et",
    "net.et",
    "eu",
    "fi",
    "aland.fi",
    "fj",
    "ac.fj",
    "biz.fj",
    "com.fj",
    "gov.fj",
    "info.fj",
    "mil.fj",
    "name.fj",
    "net.fj",
    "org.fj",
    "pro.fj",
    "*.fk",
    "fm",
    "fo",
    "fr",
    "asso.fr",
    "com.fr",
    "gouv.fr",
    "nom.fr",
    "prd.fr",
    "tm.fr",
    "aeroport.fr",
    "avocat.fr",
    "avoues.fr",
    "cci.fr",
    "chambagri.fr",
    "chirurgiens-dentistes.fr",
    "experts-comptables.fr",
    "geometre-expert.fr",
    "greta.fr",
    "huissier-justice.fr",
    "medecin.fr",
    "notaires.fr",
    "pharmacien.fr",
    "port.fr",
    "veterinaire.fr",
    "ga",
    "gb",
    "gd",
    "ge",
    "com.ge",
    "edu.ge",
    "gov.ge",
    "org.ge",
    "mil.ge",
    "net.ge",
    "pvt.ge",
    "gf",
    "gg",
    "co.gg",
    "net.gg",
    "org.gg",
    "gh",
    "com.gh",
    "edu.gh",
    "gov.gh",
    "org.gh",
    "mil.gh",
    "gi",
    "com.gi",
    "ltd.gi",
    "gov.gi",
    "mod.gi",
    "edu.gi",
    "org.gi",
    "gl",
    "co.gl",
    "com.gl",
    "edu.gl",
    "net.gl",
    "org.gl",
    "gm",
    "gn",
    "ac.gn",
    "com.gn",
    "edu.gn",
    "gov.gn",
    "org.gn",
    "net.gn",
    "gov",
    "gp",
    "com.gp",
    "net.gp",
    "mobi.gp",
    "edu.gp",
    "org.gp",
    "asso.gp",
    "gq",
    "gr",
    "com.gr",
    "edu.gr",
    "net.gr",
    "org.gr",
    "gov.gr",
    "gs",
    "gt",
    "com.gt",
    "edu.gt",
    "gob.gt",
    "ind.gt",
    "mil.gt",
    "net.gt",
    "org.gt",
    "gu",
    "com.gu",
    "edu.gu",
    "gov.gu",
    "guam.gu",
    "info.gu",
    "net.gu",
    "org.gu",
    "web.gu",
    "gw",
    "gy",
    "co.gy",
    "com.gy",
    "edu.gy",
    "gov.gy",
    "net.gy",
    "org.gy",
    "hk",
    "com.hk",
    "edu.hk",
    "gov.hk",
    "idv.hk",
    "net.hk",
    "org.hk",
    "公司.hk",
    "教育.hk",
    "敎育.hk",
    "政府.hk",
    "個人.hk",
    "个人.hk",
    "箇人.hk",
    "網络.hk",
    "网络.hk",
    "组織.hk",
    "網絡.hk",
    "网絡.hk",
    "组织.hk",
    "組織.hk",
    "組织.hk",
    "hm",
    "hn",
    "com.hn",
    "edu.hn",
    "org.hn",
    "net.hn",
    "mil.hn",
    "gob.hn",
    "hr",
    "iz.hr",
    "from.hr",
    "name.hr",
    "com.hr",
    "ht",
    "com.ht",
    "shop.ht",
    "firm.ht",
    "info.ht",
    "adult.ht",
    "net.ht",
    "pro.ht",
    "org.ht",
    "med.ht",
    "art.ht",
    "coop.ht",
    "pol.ht",
    "asso.ht",
    "edu.ht",
    "rel.ht",
    "gouv.ht",
    "perso.ht",
    "hu",
    "co.hu",
    "info.hu",
    "org.hu",
    "priv.hu",
    "sport.hu",
    "tm.hu",
    "2000.hu",
    "agrar.hu",
    "bolt.hu",
    "casino.hu",
    "city.hu",
    "erotica.hu",
    "erotika.hu",
    "film.hu",
    "forum.hu",
    "games.hu",
    "hotel.hu",
    "ingatlan.hu",
    "jogasz.hu",
    "konyvelo.hu",
    "lakas.hu",
    "media.hu",
    "news.hu",
    "reklam.hu",
    "sex.hu",
    "shop.hu",
    "suli.hu",
    "szex.hu",
    "tozsde.hu",
    "utazas.hu",
    "video.hu",
    "id",
    "ac.id",
    "biz.id",
    "co.id",
    "desa.id",
    "go.id",
    "mil.id",
    "my.id",
    "net.id",
    "or.id",
    "ponpes.id",
    "sch.id",
    "web.id",
    "ie",
    "gov.ie",
    "il",
    "ac.il",
    "co.il",
    "gov.il",
    "idf.il",
    "k12.il",
    "muni.il",
    "net.il",
    "org.il",
    "im",
    "ac.im",
    "co.im",
    "com.im",
    "ltd.co.im",
    "net.im",
    "org.im",
    "plc.co.im",
    "tt.im",
    "tv.im",
    "in",
    "co.in",
    "firm.in",
    "net.in",
    "org.in",
    "gen.in",
    "ind.in",
    "nic.in",
    "ac.in",
    "edu.in",
    "res.in",
    "gov.in",
    "mil.in",
    "info",
    "int",
    "eu.int",
    "io",
    "com.io",
    "iq",
    "gov.iq",
    "edu.iq",
    "mil.iq",
    "com.iq",
    "org.iq",
    "net.iq",
    "ir",
    "ac.ir",
    "co.ir",
    "gov.ir",
    "id.ir",
    "net.ir",
    "org.ir",
    "sch.ir",
    "ایران.ir",
    "ايران.ir",
    "is",
    "net.is",
    "com.is",
    "edu.is",
    "gov.is",
    "org.is",
    "int.is",
    "it",
    "gov.it",
    "edu.it",
    "abr.it",
    "abruzzo.it",
    "aosta-valley.it",
    "aostavalley.it",
    "bas.it",
    "basilicata.it",
    "cal.it",
    "calabria.it",
    "cam.it",
    "campania.it",
    "emilia-romagna.it",
    "emiliaromagna.it",
    "emr.it",
    "friuli-v-giulia.it",
    "friuli-ve-giulia.it",
    "friuli-vegiulia.it",
    "friuli-venezia-giulia.it",
    "friuli-veneziagiulia.it",
    "friuli-vgiulia.it",
    "friuliv-giulia.it",
    "friulive-giulia.it",
    "friulivegiulia.it",
    "friulivenezia-giulia.it",
    "friuliveneziagiulia.it",
    "friulivgiulia.it",
    "fvg.it",
    "laz.it",
    "lazio.it",
    "lig.it",
    "liguria.it",
    "lom.it",
    "lombardia.it",
    "lombardy.it",
    "lucania.it",
    "mar.it",
    "marche.it",
    "mol.it",
    "molise.it",
    "piedmont.it",
    "piemonte.it",
    "pmn.it",
    "pug.it",
    "puglia.it",
    "sar.it",
    "sardegna.it",
    "sardinia.it",
    "sic.it",
    "sicilia.it",
    "sicily.it",
    "taa.it",
    "tos.it",
    "toscana.it",
    "trentin-sud-tirol.it",
    "trentin-süd-tirol.it",
    "trentin-sudtirol.it",
    "trentin-südtirol.it",
    "trentin-sued-tirol.it",
    "trentin-suedtirol.it",
    "trentino-a-adige.it",
    "trentino-aadige.it",
    "trentino-alto-adige.it",
    "trentino-altoadige.it",
    "trentino-s-tirol.it",
    "trentino-stirol.it",
    "trentino-sud-tirol.it",
    "trentino-süd-tirol.it",
    "trentino-sudtirol.it",
    "trentino-südtirol.it",
    "trentino-sued-tirol.it",
    "trentino-suedtirol.it",
    "trentino.it",
    "trentinoa-adige.it",
    "trentinoaadige.it",
    "trentinoalto-adige.it",
    "trentinoaltoadige.it",
    "trentinos-tirol.it",
    "trentinostirol.it",
    "trentinosud-tirol.it",
    "trentinosüd-tirol.it",
    "trentinosudtirol.it",
    "trentinosüdtirol.it",
    "trentinosued-tirol.it",
    "trentinosuedtirol.it",
    "trentinsud-tirol.it",
    "trentinsüd-tirol.it",
    "trentinsudtirol.it",
    "trentinsüdtirol.it",
    "trentinsued-tirol.it",
    "trentinsuedtirol.it",
    "tuscany.it",
    "umb.it",
    "umbria.it",
    "val-d-aosta.it",
    "val-daosta.it",
    "vald-aosta.it",
    "valdaosta.it",
    "valle-aosta.it",
    "valle-d-aosta.it",
    "valle-daosta.it",
    "valleaosta.it",
    "valled-aosta.it",
    "valledaosta.it",
    "vallee-aoste.it",
    "vallée-aoste.it",
    "vallee-d-aoste.it",
    "vallée-d-aoste.it",
    "valleeaoste.it",
    "valléeaoste.it",
    "valleedaoste.it",
    "valléedaoste.it",
    "vao.it",
    "vda.it",
    "ven.it",
    "veneto.it",
    "ag.it",
    "agrigento.it",
    "al.it",
    "alessandria.it",
    "alto-adige.it",
    "altoadige.it",
    "an.it",
    "ancona.it",
    "andria-barletta-trani.it",
    "andria-trani-barletta.it",
    "andriabarlettatrani.it",
    "andriatranibarletta.it",
    "ao.it",
    "aosta.it",
    "aoste.it",
    "ap.it",
    "aq.it",
    "aquila.it",
    "ar.it",
    "arezzo.it",
    "ascoli-piceno.it",
    "ascolipiceno.it",
    "asti.it",
    "at.it",
    "av.it",
    "avellino.it",
    "ba.it",
    "balsan-sudtirol.it",
    "balsan-südtirol.it",
    "balsan-suedtirol.it",
    "balsan.it",
    "bari.it",
    "barletta-trani-andria.it",
    "barlettatraniandria.it",
    "belluno.it",
    "benevento.it",
    "bergamo.it",
    "bg.it",
    "bi.it",
    "biella.it",
    "bl.it",
    "bn.it",
    "bo.it",
    "bologna.it",
    "bolzano-altoadige.it",
    "bolzano.it",
    "bozen-sudtirol.it",
    "bozen-südtirol.it",
    "bozen-suedtirol.it",
    "bozen.it",
    "br.it",
    "brescia.it",
    "brindisi.it",
    "bs.it",
    "bt.it",
    "bulsan-sudtirol.it",
    "bulsan-südtirol.it",
    "bulsan-suedtirol.it",
    "bulsan.it",
    "bz.it",
    "ca.it",
    "cagliari.it",
    "caltanissetta.it",
    "campidano-medio.it",
    "campidanomedio.it",
    "campobasso.it",
    "carbonia-iglesias.it",
    "carboniaiglesias.it",
    "carrara-massa.it",
    "carraramassa.it",
    "caserta.it",
    "catania.it",
    "catanzaro.it",
    "cb.it",
    "ce.it",
    "cesena-forli.it",
    "cesena-forlì.it",
    "cesenaforli.it",
    "cesenaforlì.it",
    "ch.it",
    "chieti.it",
    "ci.it",
    "cl.it",
    "cn.it",
    "co.it",
    "como.it",
    "cosenza.it",
    "cr.it",
    "cremona.it",
    "crotone.it",
    "cs.it",
    "ct.it",
    "cuneo.it",
    "cz.it",
    "dell-ogliastra.it",
    "dellogliastra.it",
    "en.it",
    "enna.it",
    "fc.it",
    "fe.it",
    "fermo.it",
    "ferrara.it",
    "fg.it",
    "fi.it",
    "firenze.it",
    "florence.it",
    "fm.it",
    "foggia.it",
    "forli-cesena.it",
    "forlì-cesena.it",
    "forlicesena.it",
    "forlìcesena.it",
    "fr.it",
    "frosinone.it",
    "ge.it",
    "genoa.it",
    "genova.it",
    "go.it",
    "gorizia.it",
    "gr.it",
    "grosseto.it",
    "iglesias-carbonia.it",
    "iglesiascarbonia.it",
    "im.it",
    "imperia.it",
    "is.it",
    "isernia.it",
    "kr.it",
    "la-spezia.it",
    "laquila.it",
    "laspezia.it",
    "latina.it",
    "lc.it",
    "le.it",
    "lecce.it",
    "lecco.it",
    "li.it",
    "livorno.it",
    "lo.it",
    "lodi.it",
    "lt.it",
    "lu.it",
    "lucca.it",
    "macerata.it",
    "mantova.it",
    "massa-carrara.it",
    "massacarrara.it",
    "matera.it",
    "mb.it",
    "mc.it",
    "me.it",
    "medio-campidano.it",
    "mediocampidano.it",
    "messina.it",
    "mi.it",
    "milan.it",
    "milano.it",
    "mn.it",
    "mo.it",
    "modena.it",
    "monza-brianza.it",
    "monza-e-della-brianza.it",
    "monza.it",
    "monzabrianza.it",
    "monzaebrianza.it",
    "monzaedellabrianza.it",
    "ms.it",
    "mt.it",
    "na.it",
    "naples.it",
    "napoli.it",
    "no.it",
    "novara.it",
    "nu.it",
    "nuoro.it",
    "og.it",
    "ogliastra.it",
    "olbia-tempio.it",
    "olbiatempio.it",
    "or.it",
    "oristano.it",
    "ot.it",
    "pa.it",
    "padova.it",
    "padua.it",
    "palermo.it",
    "parma.it",
    "pavia.it",
    "pc.it",
    "pd.it",
    "pe.it",
    "perugia.it",
    "pesaro-urbino.it",
    "pesarourbino.it",
    "pescara.it",
    "pg.it",
    "pi.it",
    "piacenza.it",
    "pisa.it",
    "pistoia.it",
    "pn.it",
    "po.it",
    "pordenone.it",
    "potenza.it",
    "pr.it",
    "prato.it",
    "pt.it",
    "pu.it",
    "pv.it",
    "pz.it",
    "ra.it",
    "ragusa.it",
    "ravenna.it",
    "rc.it",
    "re.it",
    "reggio-calabria.it",
    "reggio-emilia.it",
    "reggiocalabria.it",
    "reggioemilia.it",
    "rg.it",
    "ri.it",
    "rieti.it",
    "rimini.it",
    "rm.it",
    "rn.it",
    "ro.it",
    "roma.it",
    "rome.it",
    "rovigo.it",
    "sa.it",
    "salerno.it",
    "sassari.it",
    "savona.it",
    "si.it",
    "siena.it",
    "siracusa.it",
    "so.it",
    "sondrio.it",
    "sp.it",
    "sr.it",
    "ss.it",
    "suedtirol.it",
    "südtirol.it",
    "sv.it",
    "ta.it",
    "taranto.it",
    "te.it",
    "tempio-olbia.it",
    "tempioolbia.it",
    "teramo.it",
    "terni.it",
    "tn.it",
    "to.it",
    "torino.it",
    "tp.it",
    "tr.it",
    "trani-andria-barletta.it",
    "trani-barletta-andria.it",
    "traniandriabarletta.it",
    "tranibarlettaandria.it",
    "trapani.it",
    "trento.it",
    "treviso.it",
    "trieste.it",
    "ts.it",
    "turin.it",
    "tv.it",
    "ud.it",
    "udine.it",
    "urbino-pesaro.it",
    "urbinopesaro.it",
    "va.it",
    "varese.it",
    "vb.it",
    "vc.it",
    "ve.it",
    "venezia.it",
    "venice.it",
    "verbania.it",
    "vercelli.it",
    "verona.it",
    "vi.it",
    "vibo-valentia.it",
    "vibovalentia.it",
    "vicenza.it",
    "viterbo.it",
    "vr.it",
    "vs.it",
    "vt.it",
    "vv.it",
    "je",
    "co.je",
    "net.je",
    "org.je",
    "*.jm",
    "jo",
    "com.jo",
    "org.jo",
    "net.jo",
    "edu.jo",
    "sch.jo",
    "gov.jo",
    "mil.jo",
    "name.jo",
    "jobs",
    "jp",
    "ac.jp",
    "ad.jp",
    "co.jp",
    "ed.jp",
    "go.jp",
    "gr.jp",
    "lg.jp",
    "ne.jp",
    "or.jp",
    "aichi.jp",
    "akita.jp",
    "aomori.jp",
    "chiba.jp",
    "ehime.jp",
    "fukui.jp",
    "fukuoka.jp",
    "fukushima.jp",
    "gifu.jp",
    "gunma.jp",
    "hiroshima.jp",
    "hokkaido.jp",
    "hyogo.jp",
    "ibaraki.jp",
    "ishikawa.jp",
    "iwate.jp",
    "kagawa.jp",
    "kagoshima.jp",
    "kanagawa.jp",
    "kochi.jp",
    "kumamoto.jp",
    "kyoto.jp",
    "mie.jp",
    "miyagi.jp",
    "miyazaki.jp",
    "nagano.jp",
    "nagasaki.jp",
    "nara.jp",
    "niigata.jp",
    "oita.jp",
    "okayama.jp",
    "okinawa.jp",
    "osaka.jp",
    "saga.jp",
    "saitama.jp",
    "shiga.jp",
    "shimane.jp",
    "shizuoka.jp",
    "tochigi.jp",
    "tokushima.jp",
    "tokyo.jp",
    "tottori.jp",
    "toyama.jp",
    "wakayama.jp",
    "yamagata.jp",
    "yamaguchi.jp",
    "yamanashi.jp",
    "栃木.jp",
    "愛知.jp",
    "愛媛.jp",
    "兵庫.jp",
    "熊本.jp",
    "茨城.jp",
    "北海道.jp",
    "千葉.jp",
    "和歌山.jp",
    "長崎.jp",
    "長野.jp",
    "新潟.jp",
    "青森.jp",
    "静岡.jp",
    "東京.jp",
    "石川.jp",
    "埼玉.jp",
    "三重.jp",
    "京都.jp",
    "佐賀.jp",
    "大分.jp",
    "大阪.jp",
    "奈良.jp",
    "宮城.jp",
    "宮崎.jp",
    "富山.jp",
    "山口.jp",
    "山形.jp",
    "山梨.jp",
    "岩手.jp",
    "岐阜.jp",
    "岡山.jp",
    "島根.jp",
    "広島.jp",
    "徳島.jp",
    "沖縄.jp",
    "滋賀.jp",
    "神奈川.jp",
    "福井.jp",
    "福岡.jp",
    "福島.jp",
    "秋田.jp",
    "群馬.jp",
    "香川.jp",
    "高知.jp",
    "鳥取.jp",
    "鹿児島.jp",
    "*.kawasaki.jp",
    "*.kitakyushu.jp",
    "*.kobe.jp",
    "*.nagoya.jp",
    "*.sapporo.jp",
    "*.sendai.jp",
    "*.yokohama.jp",
    "!city.kawasaki.jp",
    "!city.kitakyushu.jp",
    "!city.kobe.jp",
    "!city.nagoya.jp",
    "!city.sapporo.jp",
    "!city.sendai.jp",
    "!city.yokohama.jp",
    "aisai.aichi.jp",
    "ama.aichi.jp",
    "anjo.aichi.jp",
    "asuke.aichi.jp",
    "chiryu.aichi.jp",
    "chita.aichi.jp",
    "fuso.aichi.jp",
    "gamagori.aichi.jp",
    "handa.aichi.jp",
    "hazu.aichi.jp",
    "hekinan.aichi.jp",
    "higashiura.aichi.jp",
    "ichinomiya.aichi.jp",
    "inazawa.aichi.jp",
    "inuyama.aichi.jp",
    "isshiki.aichi.jp",
    "iwakura.aichi.jp",
    "kanie.aichi.jp",
    "kariya.aichi.jp",
    "kasugai.aichi.jp",
    "kira.aichi.jp",
    "kiyosu.aichi.jp",
    "komaki.aichi.jp",
    "konan.aichi.jp",
    "kota.aichi.jp",
    "mihama.aichi.jp",
    "miyoshi.aichi.jp",
    "nishio.aichi.jp",
    "nisshin.aichi.jp",
    "obu.aichi.jp",
    "oguchi.aichi.jp",
    "oharu.aichi.jp",
    "okazaki.aichi.jp",
    "owariasahi.aichi.jp",
    "seto.aichi.jp",
    "shikatsu.aichi.jp",
    "shinshiro.aichi.jp",
    "shitara.aichi.jp",
    "tahara.aichi.jp",
    "takahama.aichi.jp",
    "tobishima.aichi.jp",
    "toei.aichi.jp",
    "togo.aichi.jp",
    "tokai.aichi.jp",
    "tokoname.aichi.jp",
    "toyoake.aichi.jp",
    "toyohashi.aichi.jp",
    "toyokawa.aichi.jp",
    "toyone.aichi.jp",
    "toyota.aichi.jp",
    "tsushima.aichi.jp",
    "yatomi.aichi.jp",
    "akita.akita.jp",
    "daisen.akita.jp",
    "fujisato.akita.jp",
    "gojome.akita.jp",
    "hachirogata.akita.jp",
    "happou.akita.jp",
    "higashinaruse.akita.jp",
    "honjo.akita.jp",
    "honjyo.akita.jp",
    "ikawa.akita.jp",
    "kamikoani.akita.jp",
    "kamioka.akita.jp",
    "katagami.akita.jp",
    "kazuno.akita.jp",
    "kitaakita.akita.jp",
    "kosaka.akita.jp",
    "kyowa.akita.jp",
    "misato.akita.jp",
    "mitane.akita.jp",
    "moriyoshi.akita.jp",
    "nikaho.akita.jp",
    "noshiro.akita.jp",
    "odate.akita.jp",
    "oga.akita.jp",
    "ogata.akita.jp",
    "semboku.akita.jp",
    "yokote.akita.jp",
    "yurihonjo.akita.jp",
    "aomori.aomori.jp",
    "gonohe.aomori.jp",
    "hachinohe.aomori.jp",
    "hashikami.aomori.jp",
    "hiranai.aomori.jp",
    "hirosaki.aomori.jp",
    "itayanagi.aomori.jp",
    "kuroishi.aomori.jp",
    "misawa.aomori.jp",
    "mutsu.aomori.jp",
    "nakadomari.aomori.jp",
    "noheji.aomori.jp",
    "oirase.aomori.jp",
    "owani.aomori.jp",
    "rokunohe.aomori.jp",
    "sannohe.aomori.jp",
    "shichinohe.aomori.jp",
    "shingo.aomori.jp",
    "takko.aomori.jp",
    "towada.aomori.jp",
    "tsugaru.aomori.jp",
    "tsuruta.aomori.jp",
    "abiko.chiba.jp",
    "asahi.chiba.jp",
    "chonan.chiba.jp",
    "chosei.chiba.jp",
    "choshi.chiba.jp",
    "chuo.chiba.jp",
    "funabashi.chiba.jp",
    "futtsu.chiba.jp",
    "hanamigawa.chiba.jp",
    "ichihara.chiba.jp",
    "ichikawa.chiba.jp",
    "ichinomiya.chiba.jp",
    "inzai.chiba.jp",
    "isumi.chiba.jp",
    "kamagaya.chiba.jp",
    "kamogawa.chiba.jp",
    "kashiwa.chiba.jp",
    "katori.chiba.jp",
    "katsuura.chiba.jp",
    "kimitsu.chiba.jp",
    "kisarazu.chiba.jp",
    "kozaki.chiba.jp",
    "kujukuri.chiba.jp",
    "kyonan.chiba.jp",
    "matsudo.chiba.jp",
    "midori.chiba.jp",
    "mihama.chiba.jp",
    "minamiboso.chiba.jp",
    "mobara.chiba.jp",
    "mutsuzawa.chiba.jp",
    "nagara.chiba.jp",
    "nagareyama.chiba.jp",
    "narashino.chiba.jp",
    "narita.chiba.jp",
    "noda.chiba.jp",
    "oamishirasato.chiba.jp",
    "omigawa.chiba.jp",
    "onjuku.chiba.jp",
    "otaki.chiba.jp",
    "sakae.chiba.jp",
    "sakura.chiba.jp",
    "shimofusa.chiba.jp",
    "shirako.chiba.jp",
    "shiroi.chiba.jp",
    "shisui.chiba.jp",
    "sodegaura.chiba.jp",
    "sosa.chiba.jp",
    "tako.chiba.jp",
    "tateyama.chiba.jp",
    "togane.chiba.jp",
    "tohnosho.chiba.jp",
    "tomisato.chiba.jp",
    "urayasu.chiba.jp",
    "yachimata.chiba.jp",
    "yachiyo.chiba.jp",
    "yokaichiba.chiba.jp",
    "yokoshibahikari.chiba.jp",
    "yotsukaido.chiba.jp",
    "ainan.ehime.jp",
    "honai.ehime.jp",
    "ikata.ehime.jp",
    "imabari.ehime.jp",
    "iyo.ehime.jp",
    "kamijima.ehime.jp",
    "kihoku.ehime.jp",
    "kumakogen.ehime.jp",
    "masaki.ehime.jp",
    "matsuno.ehime.jp",
    "matsuyama.ehime.jp",
    "namikata.ehime.jp",
    "niihama.ehime.jp",
    "ozu.ehime.jp",
    "saijo.ehime.jp",
    "seiyo.ehime.jp",
    "shikokuchuo.ehime.jp",
    "tobe.ehime.jp",
    "toon.ehime.jp",
    "uchiko.ehime.jp",
    "uwajima.ehime.jp",
    "yawatahama.ehime.jp",
    "echizen.fukui.jp",
    "eiheiji.fukui.jp",
    "fukui.fukui.jp",
    "ikeda.fukui.jp",
    "katsuyama.fukui.jp",
    "mihama.fukui.jp",
    "minamiechizen.fukui.jp",
    "obama.fukui.jp",
    "ohi.fukui.jp",
    "ono.fukui.jp",
    "sabae.fukui.jp",
    "sakai.fukui.jp",
    "takahama.fukui.jp",
    "tsuruga.fukui.jp",
    "wakasa.fukui.jp",
    "ashiya.fukuoka.jp",
    "buzen.fukuoka.jp",
    "chikugo.fukuoka.jp",
    "chikuho.fukuoka.jp",
    "chikujo.fukuoka.jp",
    "chikushino.fukuoka.jp",
    "chikuzen.fukuoka.jp",
    "chuo.fukuoka.jp",
    "dazaifu.fukuoka.jp",
    "fukuchi.fukuoka.jp",
    "hakata.fukuoka.jp",
    "higashi.fukuoka.jp",
    "hirokawa.fukuoka.jp",
    "hisayama.fukuoka.jp",
    "iizuka.fukuoka.jp",
    "inatsuki.fukuoka.jp",
    "kaho.fukuoka.jp",
    "kasuga.fukuoka.jp",
    "kasuya.fukuoka.jp",
    "kawara.fukuoka.jp",
    "keisen.fukuoka.jp",
    "koga.fukuoka.jp",
    "kurate.fukuoka.jp",
    "kurogi.fukuoka.jp",
    "kurume.fukuoka.jp",
    "minami.fukuoka.jp",
    "miyako.fukuoka.jp",
    "miyama.fukuoka.jp",
    "miyawaka.fukuoka.jp",
    "mizumaki.fukuoka.jp",
    "munakata.fukuoka.jp",
    "nakagawa.fukuoka.jp",
    "nakama.fukuoka.jp",
    "nishi.fukuoka.jp",
    "nogata.fukuoka.jp",
    "ogori.fukuoka.jp",
    "okagaki.fukuoka.jp",
    "okawa.fukuoka.jp",
    "oki.fukuoka.jp",
    "omuta.fukuoka.jp",
    "onga.fukuoka.jp",
    "onojo.fukuoka.jp",
    "oto.fukuoka.jp",
    "saigawa.fukuoka.jp",
    "sasaguri.fukuoka.jp",
    "shingu.fukuoka.jp",
    "shinyoshitomi.fukuoka.jp",
    "shonai.fukuoka.jp",
    "soeda.fukuoka.jp",
    "sue.fukuoka.jp",
    "tachiarai.fukuoka.jp",
    "tagawa.fukuoka.jp",
    "takata.fukuoka.jp",
    "toho.fukuoka.jp",
    "toyotsu.fukuoka.jp",
    "tsuiki.fukuoka.jp",
    "ukiha.fukuoka.jp",
    "umi.fukuoka.jp",
    "usui.fukuoka.jp",
    "yamada.fukuoka.jp",
    "yame.fukuoka.jp",
    "yanagawa.fukuoka.jp",
    "yukuhashi.fukuoka.jp",
    "aizubange.fukushima.jp",
    "aizumisato.fukushima.jp",
    "aizuwakamatsu.fukushima.jp",
    "asakawa.fukushima.jp",
    "bandai.fukushima.jp",
    "date.fukushima.jp",
    "fukushima.fukushima.jp",
    "furudono.fukushima.jp",
    "futaba.fukushima.jp",
    "hanawa.fukushima.jp",
    "higashi.fukushima.jp",
    "hirata.fukushima.jp",
    "hirono.fukushima.jp",
    "iitate.fukushima.jp",
    "inawashiro.fukushima.jp",
    "ishikawa.fukushima.jp",
    "iwaki.fukushima.jp",
    "izumizaki.fukushima.jp",
    "kagamiishi.fukushima.jp",
    "kaneyama.fukushima.jp",
    "kawamata.fukushima.jp",
    "kitakata.fukushima.jp",
    "kitashiobara.fukushima.jp",
    "koori.fukushima.jp",
    "koriyama.fukushima.jp",
    "kunimi.fukushima.jp",
    "miharu.fukushima.jp",
    "mishima.fukushima.jp",
    "namie.fukushima.jp",
    "nango.fukushima.jp",
    "nishiaizu.fukushima.jp",
    "nishigo.fukushima.jp",
    "okuma.fukushima.jp",
    "omotego.fukushima.jp",
    "ono.fukushima.jp",
    "otama.fukushima.jp",
    "samegawa.fukushima.jp",
    "shimogo.fukushima.jp",
    "shirakawa.fukushima.jp",
    "showa.fukushima.jp",
    "soma.fukushima.jp",
    "sukagawa.fukushima.jp",
    "taishin.fukushima.jp",
    "tamakawa.fukushima.jp",
    "tanagura.fukushima.jp",
    "tenei.fukushima.jp",
    "yabuki.fukushima.jp",
    "yamato.fukushima.jp",
    "yamatsuri.fukushima.jp",
    "yanaizu.fukushima.jp",
    "yugawa.fukushima.jp",
    "anpachi.gifu.jp",
    "ena.gifu.jp",
    "gifu.gifu.jp",
    "ginan.gifu.jp",
    "godo.gifu.jp",
    "gujo.gifu.jp",
    "hashima.gifu.jp",
    "hichiso.gifu.jp",
    "hida.gifu.jp",
    "higashishirakawa.gifu.jp",
    "ibigawa.gifu.jp",
    "ikeda.gifu.jp",
    "kakamigahara.gifu.jp",
    "kani.gifu.jp",
    "kasahara.gifu.jp",
    "kasamatsu.gifu.jp",
    "kawaue.gifu.jp",
    "kitagata.gifu.jp",
    "mino.gifu.jp",
    "minokamo.gifu.jp",
    "mitake.gifu.jp",
    "mizunami.gifu.jp",
    "motosu.gifu.jp",
    "nakatsugawa.gifu.jp",
    "ogaki.gifu.jp",
    "sakahogi.gifu.jp",
    "seki.gifu.jp",
    "sekigahara.gifu.jp",
    "shirakawa.gifu.jp",
    "tajimi.gifu.jp",
    "takayama.gifu.jp",
    "tarui.gifu.jp",
    "toki.gifu.jp",
    "tomika.gifu.jp",
    "wanouchi.gifu.jp",
    "yamagata.gifu.jp",
    "yaotsu.gifu.jp",
    "yoro.gifu.jp",
    "annaka.gunma.jp",
    "chiyoda.gunma.jp",
    "fujioka.gunma.jp",
    "higashiagatsuma.gunma.jp",
    "isesaki.gunma.jp",
    "itakura.gunma.jp",
    "kanna.gunma.jp",
    "kanra.gunma.jp",
    "katashina.gunma.jp",
    "kawaba.gunma.jp",
    "kiryu.gunma.jp",
    "kusatsu.gunma.jp",
    "maebashi.gunma.jp",
    "meiwa.gunma.jp",
    "midori.gunma.jp",
    "minakami.gunma.jp",
    "naganohara.gunma.jp",
    "nakanojo.gunma.jp",
    "nanmoku.gunma.jp",
    "numata.gunma.jp",
    "oizumi.gunma.jp",
    "ora.gunma.jp",
    "ota.gunma.jp",
    "shibukawa.gunma.jp",
    "shimonita.gunma.jp",
    "shinto.gunma.jp",
    "showa.gunma.jp",
    "takasaki.gunma.jp",
    "takayama.gunma.jp",
    "tamamura.gunma.jp",
    "tatebayashi.gunma.jp",
    "tomioka.gunma.jp",
    "tsukiyono.gunma.jp",
    "tsumagoi.gunma.jp",
    "ueno.gunma.jp",
    "yoshioka.gunma.jp",
    "asaminami.hiroshima.jp",
    "daiwa.hiroshima.jp",
    "etajima.hiroshima.jp",
    "fuchu.hiroshima.jp",
    "fukuyama.hiroshima.jp",
    "hatsukaichi.hiroshima.jp",
    "higashihiroshima.hiroshima.jp",
    "hongo.hiroshima.jp",
    "jinsekikogen.hiroshima.jp",
    "kaita.hiroshima.jp",
    "kui.hiroshima.jp",
    "kumano.hiroshima.jp",
    "kure.hiroshima.jp",
    "mihara.hiroshima.jp",
    "miyoshi.hiroshima.jp",
    "naka.hiroshima.jp",
    "onomichi.hiroshima.jp",
    "osakikamijima.hiroshima.jp",
    "otake.hiroshima.jp",
    "saka.hiroshima.jp",
    "sera.hiroshima.jp",
    "seranishi.hiroshima.jp",
    "shinichi.hiroshima.jp",
    "shobara.hiroshima.jp",
    "takehara.hiroshima.jp",
    "abashiri.hokkaido.jp",
    "abira.hokkaido.jp",
    "aibetsu.hokkaido.jp",
    "akabira.hokkaido.jp",
    "akkeshi.hokkaido.jp",
    "asahikawa.hokkaido.jp",
    "ashibetsu.hokkaido.jp",
    "ashoro.hokkaido.jp",
    "assabu.hokkaido.jp",
    "atsuma.hokkaido.jp",
    "bibai.hokkaido.jp",
    "biei.hokkaido.jp",
    "bifuka.hokkaido.jp",
    "bihoro.hokkaido.jp",
    "biratori.hokkaido.jp",
    "chippubetsu.hokkaido.jp",
    "chitose.hokkaido.jp",
    "date.hokkaido.jp",
    "ebetsu.hokkaido.jp",
    "embetsu.hokkaido.jp",
    "eniwa.hokkaido.jp",
    "erimo.hokkaido.jp",
    "esan.hokkaido.jp",
    "esashi.hokkaido.jp",
    "fukagawa.hokkaido.jp",
    "fukushima.hokkaido.jp",
    "furano.hokkaido.jp",
    "furubira.hokkaido.jp",
    "haboro.hokkaido.jp",
    "hakodate.hokkaido.jp",
    "hamatonbetsu.hokkaido.jp",
    "hidaka.hokkaido.jp",
    "higashikagura.hokkaido.jp",
    "higashikawa.hokkaido.jp",
    "hiroo.hokkaido.jp",
    "hokuryu.hokkaido.jp",
    "hokuto.hokkaido.jp",
    "honbetsu.hokkaido.jp",
    "horokanai.hokkaido.jp",
    "horonobe.hokkaido.jp",
    "ikeda.hokkaido.jp",
    "imakane.hokkaido.jp",
    "ishikari.hokkaido.jp",
    "iwamizawa.hokkaido.jp",
    "iwanai.hokkaido.jp",
    "kamifurano.hokkaido.jp",
    "kamikawa.hokkaido.jp",
    "kamishihoro.hokkaido.jp",
    "kamisunagawa.hokkaido.jp",
    "kamoenai.hokkaido.jp",
    "kayabe.hokkaido.jp",
    "kembuchi.hokkaido.jp",
    "kikonai.hokkaido.jp",
    "kimobetsu.hokkaido.jp",
    "kitahiroshima.hokkaido.jp",
    "kitami.hokkaido.jp",
    "kiyosato.hokkaido.jp",
    "koshimizu.hokkaido.jp",
    "kunneppu.hokkaido.jp",
    "kuriyama.hokkaido.jp",
    "kuromatsunai.hokkaido.jp",
    "kushiro.hokkaido.jp",
    "kutchan.hokkaido.jp",
    "kyowa.hokkaido.jp",
    "mashike.hokkaido.jp",
    "matsumae.hokkaido.jp",
    "mikasa.hokkaido.jp",
    "minamifurano.hokkaido.jp",
    "mombetsu.hokkaido.jp",
    "moseushi.hokkaido.jp",
    "mukawa.hokkaido.jp",
    "muroran.hokkaido.jp",
    "naie.hokkaido.jp",
    "nakagawa.hokkaido.jp",
    "nakasatsunai.hokkaido.jp",
    "nakatombetsu.hokkaido.jp",
    "nanae.hokkaido.jp",
    "nanporo.hokkaido.jp",
    "nayoro.hokkaido.jp",
    "nemuro.hokkaido.jp",
    "niikappu.hokkaido.jp",
    "niki.hokkaido.jp",
    "nishiokoppe.hokkaido.jp",
    "noboribetsu.hokkaido.jp",
    "numata.hokkaido.jp",
    "obihiro.hokkaido.jp",
    "obira.hokkaido.jp",
    "oketo.hokkaido.jp",
    "okoppe.hokkaido.jp",
    "otaru.hokkaido.jp",
    "otobe.hokkaido.jp",
    "otofuke.hokkaido.jp",
    "otoineppu.hokkaido.jp",
    "oumu.hokkaido.jp",
    "ozora.hokkaido.jp",
    "pippu.hokkaido.jp",
    "rankoshi.hokkaido.jp",
    "rebun.hokkaido.jp",
    "rikubetsu.hokkaido.jp",
    "rishiri.hokkaido.jp",
    "rishirifuji.hokkaido.jp",
    "saroma.hokkaido.jp",
    "sarufutsu.hokkaido.jp",
    "shakotan.hokkaido.jp",
    "shari.hokkaido.jp",
    "shibecha.hokkaido.jp",
    "shibetsu.hokkaido.jp",
    "shikabe.hokkaido.jp",
    "shikaoi.hokkaido.jp",
    "shimamaki.hokkaido.jp",
    "shimizu.hokkaido.jp",
    "shimokawa.hokkaido.jp",
    "shinshinotsu.hokkaido.jp",
    "shintoku.hokkaido.jp",
    "shiranuka.hokkaido.jp",
    "shiraoi.hokkaido.jp",
    "shiriuchi.hokkaido.jp",
    "sobetsu.hokkaido.jp",
    "sunagawa.hokkaido.jp",
    "taiki.hokkaido.jp",
    "takasu.hokkaido.jp",
    "takikawa.hokkaido.jp",
    "takinoue.hokkaido.jp",
    "teshikaga.hokkaido.jp",
    "tobetsu.hokkaido.jp",
    "tohma.hokkaido.jp",
    "tomakomai.hokkaido.jp",
    "tomari.hokkaido.jp",
    "toya.hokkaido.jp",
    "toyako.hokkaido.jp",
    "toyotomi.hokkaido.jp",
    "toyoura.hokkaido.jp",
    "tsubetsu.hokkaido.jp",
    "tsukigata.hokkaido.jp",
    "urakawa.hokkaido.jp",
    "urausu.hokkaido.jp",
    "uryu.hokkaido.jp",
    "utashinai.hokkaido.jp",
    "wakkanai.hokkaido.jp",
    "wassamu.hokkaido.jp",
    "yakumo.hokkaido.jp",
    "yoichi.hokkaido.jp",
    "aioi.hyogo.jp",
    "akashi.hyogo.jp",
    "ako.hyogo.jp",
    "amagasaki.hyogo.jp",
    "aogaki.hyogo.jp",
    "asago.hyogo.jp",
    "ashiya.hyogo.jp",
    "awaji.hyogo.jp",
    "fukusaki.hyogo.jp",
    "goshiki.hyogo.jp",
    "harima.hyogo.jp",
    "himeji.hyogo.jp",
    "ichikawa.hyogo.jp",
    "inagawa.hyogo.jp",
    "itami.hyogo.jp",
    "kakogawa.hyogo.jp",
    "kamigori.hyogo.jp",
    "kamikawa.hyogo.jp",
    "kasai.hyogo.jp",
    "kasuga.hyogo.jp",
    "kawanishi.hyogo.jp",
    "miki.hyogo.jp",
    "minamiawaji.hyogo.jp",
    "nishinomiya.hyogo.jp",
    "nishiwaki.hyogo.jp",
    "ono.hyogo.jp",
    "sanda.hyogo.jp",
    "sannan.hyogo.jp",
    "sasayama.hyogo.jp",
    "sayo.hyogo.jp",
    "shingu.hyogo.jp",
    "shinonsen.hyogo.jp",
    "shiso.hyogo.jp",
    "sumoto.hyogo.jp",
    "taishi.hyogo.jp",
    "taka.hyogo.jp",
    "takarazuka.hyogo.jp",
    "takasago.hyogo.jp",
    "takino.hyogo.jp",
    "tamba.hyogo.jp",
    "tatsuno.hyogo.jp",
    "toyooka.hyogo.jp",
    "yabu.hyogo.jp",
    "yashiro.hyogo.jp",
    "yoka.hyogo.jp",
    "yokawa.hyogo.jp",
    "ami.ibaraki.jp",
    "asahi.ibaraki.jp",
    "bando.ibaraki.jp",
    "chikusei.ibaraki.jp",
    "daigo.ibaraki.jp",
    "fujishiro.ibaraki.jp",
    "hitachi.ibaraki.jp",
    "hitachinaka.ibaraki.jp",
    "hitachiomiya.ibaraki.jp",
    "hitachiota.ibaraki.jp",
    "ibaraki.ibaraki.jp",
    "ina.ibaraki.jp",
    "inashiki.ibaraki.jp",
    "itako.ibaraki.jp",
    "iwama.ibaraki.jp",
    "joso.ibaraki.jp",
    "kamisu.ibaraki.jp",
    "kasama.ibaraki.jp",
    "kashima.ibaraki.jp",
    "kasumigaura.ibaraki.jp",
    "koga.ibaraki.jp",
    "miho.ibaraki.jp",
    "mito.ibaraki.jp",
    "moriya.ibaraki.jp",
    "naka.ibaraki.jp",
    "namegata.ibaraki.jp",
    "oarai.ibaraki.jp",
    "ogawa.ibaraki.jp",
    "omitama.ibaraki.jp",
    "ryugasaki.ibaraki.jp",
    "sakai.ibaraki.jp",
    "sakuragawa.ibaraki.jp",
    "shimodate.ibaraki.jp",
    "shimotsuma.ibaraki.jp",
    "shirosato.ibaraki.jp",
    "sowa.ibaraki.jp",
    "suifu.ibaraki.jp",
    "takahagi.ibaraki.jp",
    "tamatsukuri.ibaraki.jp",
    "tokai.ibaraki.jp",
    "tomobe.ibaraki.jp",
    "tone.ibaraki.jp",
    "toride.ibaraki.jp",
    "tsuchiura.ibaraki.jp",
    "tsukuba.ibaraki.jp",
    "uchihara.ibaraki.jp",
    "ushiku.ibaraki.jp",
    "yachiyo.ibaraki.jp",
    "yamagata.ibaraki.jp",
    "yawara.ibaraki.jp",
    "yuki.ibaraki.jp",
    "anamizu.ishikawa.jp",
    "hakui.ishikawa.jp",
    "hakusan.ishikawa.jp",
    "kaga.ishikawa.jp",
    "kahoku.ishikawa.jp",
    "kanazawa.ishikawa.jp",
    "kawakita.ishikawa.jp",
    "komatsu.ishikawa.jp",
    "nakanoto.ishikawa.jp",
    "nanao.ishikawa.jp",
    "nomi.ishikawa.jp",
    "nonoichi.ishikawa.jp",
    "noto.ishikawa.jp",
    "shika.ishikawa.jp",
    "suzu.ishikawa.jp",
    "tsubata.ishikawa.jp",
    "tsurugi.ishikawa.jp",
    "uchinada.ishikawa.jp",
    "wajima.ishikawa.jp",
    "fudai.iwate.jp",
    "fujisawa.iwate.jp",
    "hanamaki.iwate.jp",
    "hiraizumi.iwate.jp",
    "hirono.iwate.jp",
    "ichinohe.iwate.jp",
    "ichinoseki.iwate.jp",
    "iwaizumi.iwate.jp",
    "iwate.iwate.jp",
    "joboji.iwate.jp",
    "kamaishi.iwate.jp",
    "kanegasaki.iwate.jp",
    "karumai.iwate.jp",
    "kawai.iwate.jp",
    "kitakami.iwate.jp",
    "kuji.iwate.jp",
    "kunohe.iwate.jp",
    "kuzumaki.iwate.jp",
    "miyako.iwate.jp",
    "mizusawa.iwate.jp",
    "morioka.iwate.jp",
    "ninohe.iwate.jp",
    "noda.iwate.jp",
    "ofunato.iwate.jp",
    "oshu.iwate.jp",
    "otsuchi.iwate.jp",
    "rikuzentakata.iwate.jp",
    "shiwa.iwate.jp",
    "shizukuishi.iwate.jp",
    "sumita.iwate.jp",
    "tanohata.iwate.jp",
    "tono.iwate.jp",
    "yahaba.iwate.jp",
    "yamada.iwate.jp",
    "ayagawa.kagawa.jp",
    "higashikagawa.kagawa.jp",
    "kanonji.kagawa.jp",
    "kotohira.kagawa.jp",
    "manno.kagawa.jp",
    "marugame.kagawa.jp",
    "mitoyo.kagawa.jp",
    "naoshima.kagawa.jp",
    "sanuki.kagawa.jp",
    "tadotsu.kagawa.jp",
    "takamatsu.kagawa.jp",
    "tonosho.kagawa.jp",
    "uchinomi.kagawa.jp",
    "utazu.kagawa.jp",
    "zentsuji.kagawa.jp",
    "akune.kagoshima.jp",
    "amami.kagoshima.jp",
    "hioki.kagoshima.jp",
    "isa.kagoshima.jp",
    "isen.kagoshima.jp",
    "izumi.kagoshima.jp",
    "kagoshima.kagoshima.jp",
    "kanoya.kagoshima.jp",
    "kawanabe.kagoshima.jp",
    "kinko.kagoshima.jp",
    "kouyama.kagoshima.jp",
    "makurazaki.kagoshima.jp",
    "matsumoto.kagoshima.jp",
    "minamitane.kagoshima.jp",
    "nakatane.kagoshima.jp",
    "nishinoomote.kagoshima.jp",
    "satsumasendai.kagoshima.jp",
    "soo.kagoshima.jp",
    "tarumizu.kagoshima.jp",
    "yusui.kagoshima.jp",
    "aikawa.kanagawa.jp",
    "atsugi.kanagawa.jp",
    "ayase.kanagawa.jp",
    "chigasaki.kanagawa.jp",
    "ebina.kanagawa.jp",
    "fujisawa.kanagawa.jp",
    "hadano.kanagawa.jp",
    "hakone.kanagawa.jp",
    "hiratsuka.kanagawa.jp",
    "isehara.kanagawa.jp",
    "kaisei.kanagawa.jp",
    "kamakura.kanagawa.jp",
    "kiyokawa.kanagawa.jp",
    "matsuda.kanagawa.jp",
    "minamiashigara.kanagawa.jp",
    "miura.kanagawa.jp",
    "nakai.kanagawa.jp",
    "ninomiya.kanagawa.jp",
    "odawara.kanagawa.jp",
    "oi.kanagawa.jp",
    "oiso.kanagawa.jp",
    "sagamihara.kanagawa.jp",
    "samukawa.kanagawa.jp",
    "tsukui.kanagawa.jp",
    "yamakita.kanagawa.jp",
    "yamato.kanagawa.jp",
    "yokosuka.kanagawa.jp",
    "yugawara.kanagawa.jp",
    "zama.kanagawa.jp",
    "zushi.kanagawa.jp",
    "aki.kochi.jp",
    "geisei.kochi.jp",
    "hidaka.kochi.jp",
    "higashitsuno.kochi.jp",
    "ino.kochi.jp",
    "kagami.kochi.jp",
    "kami.kochi.jp",
    "kitagawa.kochi.jp",
    "kochi.kochi.jp",
    "mihara.kochi.jp",
    "motoyama.kochi.jp",
    "muroto.kochi.jp",
    "nahari.kochi.jp",
    "nakamura.kochi.jp",
    "nankoku.kochi.jp",
    "nishitosa.kochi.jp",
    "niyodogawa.kochi.jp",
    "ochi.kochi.jp",
    "okawa.kochi.jp",
    "otoyo.kochi.jp",
    "otsuki.kochi.jp",
    "sakawa.kochi.jp",
    "sukumo.kochi.jp",
    "susaki.kochi.jp",
    "tosa.kochi.jp",
    "tosashimizu.kochi.jp",
    "toyo.kochi.jp",
    "tsuno.kochi.jp",
    "umaji.kochi.jp",
    "yasuda.kochi.jp",
    "yusuhara.kochi.jp",
    "amakusa.kumamoto.jp",
    "arao.kumamoto.jp",
    "aso.kumamoto.jp",
    "choyo.kumamoto.jp",
    "gyokuto.kumamoto.jp",
    "kamiamakusa.kumamoto.jp",
    "kikuchi.kumamoto.jp",
    "kumamoto.kumamoto.jp",
    "mashiki.kumamoto.jp",
    "mifune.kumamoto.jp",
    "minamata.kumamoto.jp",
    "minamioguni.kumamoto.jp",
    "nagasu.kumamoto.jp",
    "nishihara.kumamoto.jp",
    "oguni.kumamoto.jp",
    "ozu.kumamoto.jp",
    "sumoto.kumamoto.jp",
    "takamori.kumamoto.jp",
    "uki.kumamoto.jp",
    "uto.kumamoto.jp",
    "yamaga.kumamoto.jp",
    "yamato.kumamoto.jp",
    "yatsushiro.kumamoto.jp",
    "ayabe.kyoto.jp",
    "fukuchiyama.kyoto.jp",
    "higashiyama.kyoto.jp",
    "ide.kyoto.jp",
    "ine.kyoto.jp",
    "joyo.kyoto.jp",
    "kameoka.kyoto.jp",
    "kamo.kyoto.jp",
    "kita.kyoto.jp",
    "kizu.kyoto.jp",
    "kumiyama.kyoto.jp",
    "kyotamba.kyoto.jp",
    "kyotanabe.kyoto.jp",
    "kyotango.kyoto.jp",
    "maizuru.kyoto.jp",
    "minami.kyoto.jp",
    "minamiyamashiro.kyoto.jp",
    "miyazu.kyoto.jp",
    "muko.kyoto.jp",
    "nagaokakyo.kyoto.jp",
    "nakagyo.kyoto.jp",
    "nantan.kyoto.jp",
    "oyamazaki.kyoto.jp",
    "sakyo.kyoto.jp",
    "seika.kyoto.jp",
    "tanabe.kyoto.jp",
    "uji.kyoto.jp",
    "ujitawara.kyoto.jp",
    "wazuka.kyoto.jp",
    "yamashina.kyoto.jp",
    "yawata.kyoto.jp",
    "asahi.mie.jp",
    "inabe.mie.jp",
    "ise.mie.jp",
    "kameyama.mie.jp",
    "kawagoe.mie.jp",
    "kiho.mie.jp",
    "kisosaki.mie.jp",
    "kiwa.mie.jp",
    "komono.mie.jp",
    "kumano.mie.jp",
    "kuwana.mie.jp",
    "matsusaka.mie.jp",
    "meiwa.mie.jp",
    "mihama.mie.jp",
    "minamiise.mie.jp",
    "misugi.mie.jp",
    "miyama.mie.jp",
    "nabari.mie.jp",
    "shima.mie.jp",
    "suzuka.mie.jp",
    "tado.mie.jp",
    "taiki.mie.jp",
    "taki.mie.jp",
    "tamaki.mie.jp",
    "toba.mie.jp",
    "tsu.mie.jp",
    "udono.mie.jp",
    "ureshino.mie.jp",
    "watarai.mie.jp",
    "yokkaichi.mie.jp",
    "furukawa.miyagi.jp",
    "higashimatsushima.miyagi.jp",
    "ishinomaki.miyagi.jp",
    "iwanuma.miyagi.jp",
    "kakuda.miyagi.jp",
    "kami.miyagi.jp",
    "kawasaki.miyagi.jp",
    "marumori.miyagi.jp",
    "matsushima.miyagi.jp",
    "minamisanriku.miyagi.jp",
    "misato.miyagi.jp",
    "murata.miyagi.jp",
    "natori.miyagi.jp",
    "ogawara.miyagi.jp",
    "ohira.miyagi.jp",
    "onagawa.miyagi.jp",
    "osaki.miyagi.jp",
    "rifu.miyagi.jp",
    "semine.miyagi.jp",
    "shibata.miyagi.jp",
    "shichikashuku.miyagi.jp",
    "shikama.miyagi.jp",
    "shiogama.miyagi.jp",
    "shiroishi.miyagi.jp",
    "tagajo.miyagi.jp",
    "taiwa.miyagi.jp",
    "tome.miyagi.jp",
    "tomiya.miyagi.jp",
    "wakuya.miyagi.jp",
    "watari.miyagi.jp",
    "yamamoto.miyagi.jp",
    "zao.miyagi.jp",
    "aya.miyazaki.jp",
    "ebino.miyazaki.jp",
    "gokase.miyazaki.jp",
    "hyuga.miyazaki.jp",
    "kadogawa.miyazaki.jp",
    "kawaminami.miyazaki.jp",
    "kijo.miyazaki.jp",
    "kitagawa.miyazaki.jp",
    "kitakata.miyazaki.jp",
    "kitaura.miyazaki.jp",
    "kobayashi.miyazaki.jp",
    "kunitomi.miyazaki.jp",
    "kushima.miyazaki.jp",
    "mimata.miyazaki.jp",
    "miyakonojo.miyazaki.jp",
    "miyazaki.miyazaki.jp",
    "morotsuka.miyazaki.jp",
    "nichinan.miyazaki.jp",
    "nishimera.miyazaki.jp",
    "nobeoka.miyazaki.jp",
    "saito.miyazaki.jp",
    "shiiba.miyazaki.jp",
    "shintomi.miyazaki.jp",
    "takaharu.miyazaki.jp",
    "takanabe.miyazaki.jp",
    "takazaki.miyazaki.jp",
    "tsuno.miyazaki.jp",
    "achi.nagano.jp",
    "agematsu.nagano.jp",
    "anan.nagano.jp",
    "aoki.nagano.jp",
    "asahi.nagano.jp",
    "azumino.nagano.jp",
    "chikuhoku.nagano.jp",
    "chikuma.nagano.jp",
    "chino.nagano.jp",
    "fujimi.nagano.jp",
    "hakuba.nagano.jp",
    "hara.nagano.jp",
    "hiraya.nagano.jp",
    "iida.nagano.jp",
    "iijima.nagano.jp",
    "iiyama.nagano.jp",
    "iizuna.nagano.jp",
    "ikeda.nagano.jp",
    "ikusaka.nagano.jp",
    "ina.nagano.jp",
    "karuizawa.nagano.jp",
    "kawakami.nagano.jp",
    "kiso.nagano.jp",
    "kisofukushima.nagano.jp",
    "kitaaiki.nagano.jp",
    "komagane.nagano.jp",
    "komoro.nagano.jp",
    "matsukawa.nagano.jp",
    "matsumoto.nagano.jp",
    "miasa.nagano.jp",
    "minamiaiki.nagano.jp",
    "minamimaki.nagano.jp",
    "minamiminowa.nagano.jp",
    "minowa.nagano.jp",
    "miyada.nagano.jp",
    "miyota.nagano.jp",
    "mochizuki.nagano.jp",
    "nagano.nagano.jp",
    "nagawa.nagano.jp",
    "nagiso.nagano.jp",
    "nakagawa.nagano.jp",
    "nakano.nagano.jp",
    "nozawaonsen.nagano.jp",
    "obuse.nagano.jp",
    "ogawa.nagano.jp",
    "okaya.nagano.jp",
    "omachi.nagano.jp",
    "omi.nagano.jp",
    "ookuwa.nagano.jp",
    "ooshika.nagano.jp",
    "otaki.nagano.jp",
    "otari.nagano.jp",
    "sakae.nagano.jp",
    "sakaki.nagano.jp",
    "saku.nagano.jp",
    "sakuho.nagano.jp",
    "shimosuwa.nagano.jp",
    "shinanomachi.nagano.jp",
    "shiojiri.nagano.jp",
    "suwa.nagano.jp",
    "suzaka.nagano.jp",
    "takagi.nagano.jp",
    "takamori.nagano.jp",
    "takayama.nagano.jp",
    "tateshina.nagano.jp",
    "tatsuno.nagano.jp",
    "togakushi.nagano.jp",
    "togura.nagano.jp",
    "tomi.nagano.jp",
    "ueda.nagano.jp",
    "wada.nagano.jp",
    "yamagata.nagano.jp",
    "yamanouchi.nagano.jp",
    "yasaka.nagano.jp",
    "yasuoka.nagano.jp",
    "chijiwa.nagasaki.jp",
    "futsu.nagasaki.jp",
    "goto.nagasaki.jp",
    "hasami.nagasaki.jp",
    "hirado.nagasaki.jp",
    "iki.nagasaki.jp",
    "isahaya.nagasaki.jp",
    "kawatana.nagasaki.jp",
    "kuchinotsu.nagasaki.jp",
    "matsuura.nagasaki.jp",
    "nagasaki.nagasaki.jp",
    "obama.nagasaki.jp",
    "omura.nagasaki.jp",
    "oseto.nagasaki.jp",
    "saikai.nagasaki.jp",
    "sasebo.nagasaki.jp",
    "seihi.nagasaki.jp",
    "shimabara.nagasaki.jp",
    "shinkamigoto.nagasaki.jp",
    "togitsu.nagasaki.jp",
    "tsushima.nagasaki.jp",
    "unzen.nagasaki.jp",
    "ando.nara.jp",
    "gose.nara.jp",
    "heguri.nara.jp",
    "higashiyoshino.nara.jp",
    "ikaruga.nara.jp",
    "ikoma.nara.jp",
    "kamikitayama.nara.jp",
    "kanmaki.nara.jp",
    "kashiba.nara.jp",
    "kashihara.nara.jp",
    "katsuragi.nara.jp",
    "kawai.nara.jp",
    "kawakami.nara.jp",
    "kawanishi.nara.jp",
    "koryo.nara.jp",
    "kurotaki.nara.jp",
    "mitsue.nara.jp",
    "miyake.nara.jp",
    "nara.nara.jp",
    "nosegawa.nara.jp",
    "oji.nara.jp",
    "ouda.nara.jp",
    "oyodo.nara.jp",
    "sakurai.nara.jp",
    "sango.nara.jp",
    "shimoichi.nara.jp",
    "shimokitayama.nara.jp",
    "shinjo.nara.jp",
    "soni.nara.jp",
    "takatori.nara.jp",
    "tawaramoto.nara.jp",
    "tenkawa.nara.jp",
    "tenri.nara.jp",
    "uda.nara.jp",
    "yamatokoriyama.nara.jp",
    "yamatotakada.nara.jp",
    "yamazoe.nara.jp",
    "yoshino.nara.jp",
    "aga.niigata.jp",
    "agano.niigata.jp",
    "gosen.niigata.jp",
    "itoigawa.niigata.jp",
    "izumozaki.niigata.jp",
    "joetsu.niigata.jp",
    "kamo.niigata.jp",
    "kariwa.niigata.jp",
    "kashiwazaki.niigata.jp",
    "minamiuonuma.niigata.jp",
    "mitsuke.niigata.jp",
    "muika.niigata.jp",
    "murakami.niigata.jp",
    "myoko.niigata.jp",
    "nagaoka.niigata.jp",
    "niigata.niigata.jp",
    "ojiya.niigata.jp",
    "omi.niigata.jp",
    "sado.niigata.jp",
    "sanjo.niigata.jp",
    "seiro.niigata.jp",
    "seirou.niigata.jp",
    "sekikawa.niigata.jp",
    "shibata.niigata.jp",
    "tagami.niigata.jp",
    "tainai.niigata.jp",
    "tochio.niigata.jp",
    "tokamachi.niigata.jp",
    "tsubame.niigata.jp",
    "tsunan.niigata.jp",
    "uonuma.niigata.jp",
    "yahiko.niigata.jp",
    "yoita.niigata.jp",
    "yuzawa.niigata.jp",
    "beppu.oita.jp",
    "bungoono.oita.jp",
    "bungotakada.oita.jp",
    "hasama.oita.jp",
    "hiji.oita.jp",
    "himeshima.oita.jp",
    "hita.oita.jp",
    "kamitsue.oita.jp",
    "kokonoe.oita.jp",
    "kuju.oita.jp",
    "kunisaki.oita.jp",
    "kusu.oita.jp",
    "oita.oita.jp",
    "saiki.oita.jp",
    "taketa.oita.jp",
    "tsukumi.oita.jp",
    "usa.oita.jp",
    "usuki.oita.jp",
    "yufu.oita.jp",
    "akaiwa.okayama.jp",
    "asakuchi.okayama.jp",
    "bizen.okayama.jp",
    "hayashima.okayama.jp",
    "ibara.okayama.jp",
    "kagamino.okayama.jp",
    "kasaoka.okayama.jp",
    "kibichuo.okayama.jp",
    "kumenan.okayama.jp",
    "kurashiki.okayama.jp",
    "maniwa.okayama.jp",
    "misaki.okayama.jp",
    "nagi.okayama.jp",
    "niimi.okayama.jp",
    "nishiawakura.okayama.jp",
    "okayama.okayama.jp",
    "satosho.okayama.jp",
    "setouchi.okayama.jp",
    "shinjo.okayama.jp",
    "shoo.okayama.jp",
    "soja.okayama.jp",
    "takahashi.okayama.jp",
    "tamano.okayama.jp",
    "tsuyama.okayama.jp",
    "wake.okayama.jp",
    "yakage.okayama.jp",
    "aguni.okinawa.jp",
    "ginowan.okinawa.jp",
    "ginoza.okinawa.jp",
    "gushikami.okinawa.jp",
    "haebaru.okinawa.jp",
    "higashi.okinawa.jp",
    "hirara.okinawa.jp",
    "iheya.okinawa.jp",
    "ishigaki.okinawa.jp",
    "ishikawa.okinawa.jp",
    "itoman.okinawa.jp",
    "izena.okinawa.jp",
    "kadena.okinawa.jp",
    "kin.okinawa.jp",
    "kitadaito.okinawa.jp",
    "kitanakagusuku.okinawa.jp",
    "kumejima.okinawa.jp",
    "kunigami.okinawa.jp",
    "minamidaito.okinawa.jp",
    "motobu.okinawa.jp",
    "nago.okinawa.jp",
    "naha.okinawa.jp",
    "nakagusuku.okinawa.jp",
    "nakijin.okinawa.jp",
    "nanjo.okinawa.jp",
    "nishihara.okinawa.jp",
    "ogimi.okinawa.jp",
    "okinawa.okinawa.jp",
    "onna.okinawa.jp",
    "shimoji.okinawa.jp",
    "taketomi.okinawa.jp",
    "tarama.okinawa.jp",
    "tokashiki.okinawa.jp",
    "tomigusuku.okinawa.jp",
    "tonaki.okinawa.jp",
    "urasoe.okinawa.jp",
    "uruma.okinawa.jp",
    "yaese.okinawa.jp",
    "yomitan.okinawa.jp",
    "yonabaru.okinawa.jp",
    "yonaguni.okinawa.jp",
    "zamami.okinawa.jp",
    "abeno.osaka.jp",
    "chihayaakasaka.osaka.jp",
    "chuo.osaka.jp",
    "daito.osaka.jp",
    "fujiidera.osaka.jp",
    "habikino.osaka.jp",
    "hannan.osaka.jp",
    "higashiosaka.osaka.jp",
    "higashisumiyoshi.osaka.jp",
    "higashiyodogawa.osaka.jp",
    "hirakata.osaka.jp",
    "ibaraki.osaka.jp",
    "ikeda.osaka.jp",
    "izumi.osaka.jp",
    "izumiotsu.osaka.jp",
    "izumisano.osaka.jp",
    "kadoma.osaka.jp",
    "kaizuka.osaka.jp",
    "kanan.osaka.jp",
    "kashiwara.osaka.jp",
    "katano.osaka.jp",
    "kawachinagano.osaka.jp",
    "kishiwada.osaka.jp",
    "kita.osaka.jp",
    "kumatori.osaka.jp",
    "matsubara.osaka.jp",
    "minato.osaka.jp",
    "minoh.osaka.jp",
    "misaki.osaka.jp",
    "moriguchi.osaka.jp",
    "neyagawa.osaka.jp",
    "nishi.osaka.jp",
    "nose.osaka.jp",
    "osakasayama.osaka.jp",
    "sakai.osaka.jp",
    "sayama.osaka.jp",
    "sennan.osaka.jp",
    "settsu.osaka.jp",
    "shijonawate.osaka.jp",
    "shimamoto.osaka.jp",
    "suita.osaka.jp",
    "tadaoka.osaka.jp",
    "taishi.osaka.jp",
    "tajiri.osaka.jp",
    "takaishi.osaka.jp",
    "takatsuki.osaka.jp",
    "tondabayashi.osaka.jp",
    "toyonaka.osaka.jp",
    "toyono.osaka.jp",
    "yao.osaka.jp",
    "ariake.saga.jp",
    "arita.saga.jp",
    "fukudomi.saga.jp",
    "genkai.saga.jp",
    "hamatama.saga.jp",
    "hizen.saga.jp",
    "imari.saga.jp",
    "kamimine.saga.jp",
    "kanzaki.saga.jp",
    "karatsu.saga.jp",
    "kashima.saga.jp",
    "kitagata.saga.jp",
    "kitahata.saga.jp",
    "kiyama.saga.jp",
    "kouhoku.saga.jp",
    "kyuragi.saga.jp",
    "nishiarita.saga.jp",
    "ogi.saga.jp",
    "omachi.saga.jp",
    "ouchi.saga.jp",
    "saga.saga.jp",
    "shiroishi.saga.jp",
    "taku.saga.jp",
    "tara.saga.jp",
    "tosu.saga.jp",
    "yoshinogari.saga.jp",
    "arakawa.saitama.jp",
    "asaka.saitama.jp",
    "chichibu.saitama.jp",
    "fujimi.saitama.jp",
    "fujimino.saitama.jp",
    "fukaya.saitama.jp",
    "hanno.saitama.jp",
    "hanyu.saitama.jp",
    "hasuda.saitama.jp",
    "hatogaya.saitama.jp",
    "hatoyama.saitama.jp",
    "hidaka.saitama.jp",
    "higashichichibu.saitama.jp",
    "higashimatsuyama.saitama.jp",
    "honjo.saitama.jp",
    "ina.saitama.jp",
    "iruma.saitama.jp",
    "iwatsuki.saitama.jp",
    "kamiizumi.saitama.jp",
    "kamikawa.saitama.jp",
    "kamisato.saitama.jp",
    "kasukabe.saitama.jp",
    "kawagoe.saitama.jp",
    "kawaguchi.saitama.jp",
    "kawajima.saitama.jp",
    "kazo.saitama.jp",
    "kitamoto.saitama.jp",
    "koshigaya.saitama.jp",
    "kounosu.saitama.jp",
    "kuki.saitama.jp",
    "kumagaya.saitama.jp",
    "matsubushi.saitama.jp",
    "minano.saitama.jp",
    "misato.saitama.jp",
    "miyashiro.saitama.jp",
    "miyoshi.saitama.jp",
    "moroyama.saitama.jp",
    "nagatoro.saitama.jp",
    "namegawa.saitama.jp",
    "niiza.saitama.jp",
    "ogano.saitama.jp",
    "ogawa.saitama.jp",
    "ogose.saitama.jp",
    "okegawa.saitama.jp",
    "omiya.saitama.jp",
    "otaki.saitama.jp",
    "ranzan.saitama.jp",
    "ryokami.saitama.jp",
    "saitama.saitama.jp",
    "sakado.saitama.jp",
    "satte.saitama.jp",
    "sayama.saitama.jp",
    "shiki.saitama.jp",
    "shiraoka.saitama.jp",
    "soka.saitama.jp",
    "sugito.saitama.jp",
    "toda.saitama.jp",
    "tokigawa.saitama.jp",
    "tokorozawa.saitama.jp",
    "tsurugashima.saitama.jp",
    "urawa.saitama.jp",
    "warabi.saitama.jp",
    "yashio.saitama.jp",
    "yokoze.saitama.jp",
    "yono.saitama.jp",
    "yorii.saitama.jp",
    "yoshida.saitama.jp",
    "yoshikawa.saitama.jp",
    "yoshimi.saitama.jp",
    "aisho.shiga.jp",
    "gamo.shiga.jp",
    "higashiomi.shiga.jp",
    "hikone.shiga.jp",
    "koka.shiga.jp",
    "konan.shiga.jp",
    "kosei.shiga.jp",
    "koto.shiga.jp",
    "kusatsu.shiga.jp",
    "maibara.shiga.jp",
    "moriyama.shiga.jp",
    "nagahama.shiga.jp",
    "nishiazai.shiga.jp",
    "notogawa.shiga.jp",
    "omihachiman.shiga.jp",
    "otsu.shiga.jp",
    "ritto.shiga.jp",
    "ryuoh.shiga.jp",
    "takashima.shiga.jp",
    "takatsuki.shiga.jp",
    "torahime.shiga.jp",
    "toyosato.shiga.jp",
    "yasu.shiga.jp",
    "akagi.shimane.jp",
    "ama.shimane.jp",
    "gotsu.shimane.jp",
    "hamada.shimane.jp",
    "higashiizumo.shimane.jp",
    "hikawa.shimane.jp",
    "hikimi.shimane.jp",
    "izumo.shimane.jp",
    "kakinoki.shimane.jp",
    "masuda.shimane.jp",
    "matsue.shimane.jp",
    "misato.shimane.jp",
    "nishinoshima.shimane.jp",
    "ohda.shimane.jp",
    "okinoshima.shimane.jp",
    "okuizumo.shimane.jp",
    "shimane.shimane.jp",
    "tamayu.shimane.jp",
    "tsuwano.shimane.jp",
    "unnan.shimane.jp",
    "yakumo.shimane.jp",
    "yasugi.shimane.jp",
    "yatsuka.shimane.jp",
    "arai.shizuoka.jp",
    "atami.shizuoka.jp",
    "fuji.shizuoka.jp",
    "fujieda.shizuoka.jp",
    "fujikawa.shizuoka.jp",
    "fujinomiya.shizuoka.jp",
    "fukuroi.shizuoka.jp",
    "gotemba.shizuoka.jp",
    "haibara.shizuoka.jp",
    "hamamatsu.shizuoka.jp",
    "higashiizu.shizuoka.jp",
    "ito.shizuoka.jp",
    "iwata.shizuoka.jp",
    "izu.shizuoka.jp",
    "izunokuni.shizuoka.jp",
    "kakegawa.shizuoka.jp",
    "kannami.shizuoka.jp",
    "kawanehon.shizuoka.jp",
    "kawazu.shizuoka.jp",
    "kikugawa.shizuoka.jp",
    "kosai.shizuoka.jp",
    "makinohara.shizuoka.jp",
    "matsuzaki.shizuoka.jp",
    "minamiizu.shizuoka.jp",
    "mishima.shizuoka.jp",
    "morimachi.shizuoka.jp",
    "nishiizu.shizuoka.jp",
    "numazu.shizuoka.jp",
    "omaezaki.shizuoka.jp",
    "shimada.shizuoka.jp",
    "shimizu.shizuoka.jp",
    "shimoda.shizuoka.jp",
    "shizuoka.shizuoka.jp",
    "susono.shizuoka.jp",
    "yaizu.shizuoka.jp",
    "yoshida.shizuoka.jp",
    "ashikaga.tochigi.jp",
    "bato.tochigi.jp",
    "haga.tochigi.jp",
    "ichikai.tochigi.jp",
    "iwafune.tochigi.jp",
    "kaminokawa.tochigi.jp",
    "kanuma.tochigi.jp",
    "karasuyama.tochigi.jp",
    "kuroiso.tochigi.jp",
    "mashiko.tochigi.jp",
    "mibu.tochigi.jp",
    "moka.tochigi.jp",
    "motegi.tochigi.jp",
    "nasu.tochigi.jp",
    "nasushiobara.tochigi.jp",
    "nikko.tochigi.jp",
    "nishikata.tochigi.jp",
    "nogi.tochigi.jp",
    "ohira.tochigi.jp",
    "ohtawara.tochigi.jp",
    "oyama.tochigi.jp",
    "sakura.tochigi.jp",
    "sano.tochigi.jp",
    "shimotsuke.tochigi.jp",
    "shioya.tochigi.jp",
    "takanezawa.tochigi.jp",
    "tochigi.tochigi.jp",
    "tsuga.tochigi.jp",
    "ujiie.tochigi.jp",
    "utsunomiya.tochigi.jp",
    "yaita.tochigi.jp",
    "aizumi.tokushima.jp",
    "anan.tokushima.jp",
    "ichiba.tokushima.jp",
    "itano.tokushima.jp",
    "kainan.tokushima.jp",
    "komatsushima.tokushima.jp",
    "matsushige.tokushima.jp",
    "mima.tokushima.jp",
    "minami.tokushima.jp",
    "miyoshi.tokushima.jp",
    "mugi.tokushima.jp",
    "nakagawa.tokushima.jp",
    "naruto.tokushima.jp",
    "sanagochi.tokushima.jp",
    "shishikui.tokushima.jp",
    "tokushima.tokushima.jp",
    "wajiki.tokushima.jp",
    "adachi.tokyo.jp",
    "akiruno.tokyo.jp",
    "akishima.tokyo.jp",
    "aogashima.tokyo.jp",
    "arakawa.tokyo.jp",
    "bunkyo.tokyo.jp",
    "chiyoda.tokyo.jp",
    "chofu.tokyo.jp",
    "chuo.tokyo.jp",
    "edogawa.tokyo.jp",
    "fuchu.tokyo.jp",
    "fussa.tokyo.jp",
    "hachijo.tokyo.jp",
    "hachioji.tokyo.jp",
    "hamura.tokyo.jp",
    "higashikurume.tokyo.jp",
    "higashimurayama.tokyo.jp",
    "higashiyamato.tokyo.jp",
    "hino.tokyo.jp",
    "hinode.tokyo.jp",
    "hinohara.tokyo.jp",
    "inagi.tokyo.jp",
    "itabashi.tokyo.jp",
    "katsushika.tokyo.jp",
    "kita.tokyo.jp",
    "kiyose.tokyo.jp",
    "kodaira.tokyo.jp",
    "koganei.tokyo.jp",
    "kokubunji.tokyo.jp",
    "komae.tokyo.jp",
    "koto.tokyo.jp",
    "kouzushima.tokyo.jp",
    "kunitachi.tokyo.jp",
    "machida.tokyo.jp",
    "meguro.tokyo.jp",
    "minato.tokyo.jp",
    "mitaka.tokyo.jp",
    "mizuho.tokyo.jp",
    "musashimurayama.tokyo.jp",
    "musashino.tokyo.jp",
    "nakano.tokyo.jp",
    "nerima.tokyo.jp",
    "ogasawara.tokyo.jp",
    "okutama.tokyo.jp",
    "ome.tokyo.jp",
    "oshima.tokyo.jp",
    "ota.tokyo.jp",
    "setagaya.tokyo.jp",
    "shibuya.tokyo.jp",
    "shinagawa.tokyo.jp",
    "shinjuku.tokyo.jp",
    "suginami.tokyo.jp",
    "sumida.tokyo.jp",
    "tachikawa.tokyo.jp",
    "taito.tokyo.jp",
    "tama.tokyo.jp",
    "toshima.tokyo.jp",
    "chizu.tottori.jp",
    "hino.tottori.jp",
    "kawahara.tottori.jp",
    "koge.tottori.jp",
    "kotoura.tottori.jp",
    "misasa.tottori.jp",
    "nanbu.tottori.jp",
    "nichinan.tottori.jp",
    "sakaiminato.tottori.jp",
    "tottori.tottori.jp",
    "wakasa.tottori.jp",
    "yazu.tottori.jp",
    "yonago.tottori.jp",
    "asahi.toyama.jp",
    "fuchu.toyama.jp",
    "fukumitsu.toyama.jp",
    "funahashi.toyama.jp",
    "himi.toyama.jp",
    "imizu.toyama.jp",
    "inami.toyama.jp",
    "johana.toyama.jp",
    "kamiichi.toyama.jp",
    "kurobe.toyama.jp",
    "nakaniikawa.toyama.jp",
    "namerikawa.toyama.jp",
    "nanto.toyama.jp",
    "nyuzen.toyama.jp",
    "oyabe.toyama.jp",
    "taira.toyama.jp",
    "takaoka.toyama.jp",
    "tateyama.toyama.jp",
    "toga.toyama.jp",
    "tonami.toyama.jp",
    "toyama.toyama.jp",
    "unazuki.toyama.jp",
    "uozu.toyama.jp",
    "yamada.toyama.jp",
    "arida.wakayama.jp",
    "aridagawa.wakayama.jp",
    "gobo.wakayama.jp",
    "hashimoto.wakayama.jp",
    "hidaka.wakayama.jp",
    "hirogawa.wakayama.jp",
    "inami.wakayama.jp",
    "iwade.wakayama.jp",
    "kainan.wakayama.jp",
    "kamitonda.wakayama.jp",
    "katsuragi.wakayama.jp",
    "kimino.wakayama.jp",
    "kinokawa.wakayama.jp",
    "kitayama.wakayama.jp",
    "koya.wakayama.jp",
    "koza.wakayama.jp",
    "kozagawa.wakayama.jp",
    "kudoyama.wakayama.jp",
    "kushimoto.wakayama.jp",
    "mihama.wakayama.jp",
    "misato.wakayama.jp",
    "nachikatsuura.wakayama.jp",
    "shingu.wakayama.jp",
    "shirahama.wakayama.jp",
    "taiji.wakayama.jp",
    "tanabe.wakayama.jp",
    "wakayama.wakayama.jp",
    "yuasa.wakayama.jp",
    "yura.wakayama.jp",
    "asahi.yamagata.jp",
    "funagata.yamagata.jp",
    "higashine.yamagata.jp",
    "iide.yamagata.jp",
    "kahoku.yamagata.jp",
    "kaminoyama.yamagata.jp",
    "kaneyama.yamagata.jp",
    "kawanishi.yamagata.jp",
    "mamurogawa.yamagata.jp",
    "mikawa.yamagata.jp",
    "murayama.yamagata.jp",
    "nagai.yamagata.jp",
    "nakayama.yamagata.jp",
    "nanyo.yamagata.jp",
    "nishikawa.yamagata.jp",
    "obanazawa.yamagata.jp",
    "oe.yamagata.jp",
    "oguni.yamagata.jp",
    "ohkura.yamagata.jp",
    "oishida.yamagata.jp",
    "sagae.yamagata.jp",
    "sakata.yamagata.jp",
    "sakegawa.yamagata.jp",
    "shinjo.yamagata.jp",
    "shirataka.yamagata.jp",
    "shonai.yamagata.jp",
    "takahata.yamagata.jp",
    "tendo.yamagata.jp",
    "tozawa.yamagata.jp",
    "tsuruoka.yamagata.jp",
    "yamagata.yamagata.jp",
    "yamanobe.yamagata.jp",
    "yonezawa.yamagata.jp",
    "yuza.yamagata.jp",
    "abu.yamaguchi.jp",
    "hagi.yamaguchi.jp",
    "hikari.yamaguchi.jp",
    "hofu.yamaguchi.jp",
    "iwakuni.yamaguchi.jp",
    "kudamatsu.yamaguchi.jp",
    "mitou.yamaguchi.jp",
    "nagato.yamaguchi.jp",
    "oshima.yamaguchi.jp",
    "shimonoseki.yamaguchi.jp",
    "shunan.yamaguchi.jp",
    "tabuse.yamaguchi.jp",
    "tokuyama.yamaguchi.jp",
    "toyota.yamaguchi.jp",
    "ube.yamaguchi.jp",
    "yuu.yamaguchi.jp",
    "chuo.yamanashi.jp",
    "doshi.yamanashi.jp",
    "fuefuki.yamanashi.jp",
    "fujikawa.yamanashi.jp",
    "fujikawaguchiko.yamanashi.jp",
    "fujiyoshida.yamanashi.jp",
    "hayakawa.yamanashi.jp",
    "hokuto.yamanashi.jp",
    "ichikawamisato.yamanashi.jp",
    "kai.yamanashi.jp",
    "kofu.yamanashi.jp",
    "koshu.yamanashi.jp",
    "kosuge.yamanashi.jp",
    "minami-alps.yamanashi.jp",
    "minobu.yamanashi.jp",
    "nakamichi.yamanashi.jp",
    "nanbu.yamanashi.jp",
    "narusawa.yamanashi.jp",
    "nirasaki.yamanashi.jp",
    "nishikatsura.yamanashi.jp",
    "oshino.yamanashi.jp",
    "otsuki.yamanashi.jp",
    "showa.yamanashi.jp",
    "tabayama.yamanashi.jp",
    "tsuru.yamanashi.jp",
    "uenohara.yamanashi.jp",
    "yamanakako.yamanashi.jp",
    "yamanashi.yamanashi.jp",
    "ke",
    "ac.ke",
    "co.ke",
    "go.ke",
    "info.ke",
    "me.ke",
    "mobi.ke",
    "ne.ke",
    "or.ke",
    "sc.ke",
    "kg",
    "org.kg",
    "net.kg",
    "com.kg",
    "edu.kg",
    "gov.kg",
    "mil.kg",
    "*.kh",
    "ki",
    "edu.ki",
    "biz.ki",
    "net.ki",
    "org.ki",
    "gov.ki",
    "info.ki",
    "com.ki",
    "km",
    "org.km",
    "nom.km",
    "gov.km",
    "prd.km",
    "tm.km",
    "edu.km",
    "mil.km",
    "ass.km",
    "com.km",
    "coop.km",
    "asso.km",
    "presse.km",
    "medecin.km",
    "notaires.km",
    "pharmaciens.km",
    "veterinaire.km",
    "gouv.km",
    "kn",
    "net.kn",
    "org.kn",
    "edu.kn",
    "gov.kn",
    "kp",
    "com.kp",
    "edu.kp",
    "gov.kp",
    "org.kp",
    "rep.kp",
    "tra.kp",
    "kr",
    "ac.kr",
    "co.kr",
    "es.kr",
    "go.kr",
    "hs.kr",
    "kg.kr",
    "mil.kr",
    "ms.kr",
    "ne.kr",
    "or.kr",
    "pe.kr",
    "re.kr",
    "sc.kr",
    "busan.kr",
    "chungbuk.kr",
    "chungnam.kr",
    "daegu.kr",
    "daejeon.kr",
    "gangwon.kr",
    "gwangju.kr",
    "gyeongbuk.kr",
    "gyeonggi.kr",
    "gyeongnam.kr",
    "incheon.kr",
    "jeju.kr",
    "jeonbuk.kr",
    "jeonnam.kr",
    "seoul.kr",
    "ulsan.kr",
    "kw",
    "com.kw",
    "edu.kw",
    "emb.kw",
    "gov.kw",
    "ind.kw",
    "net.kw",
    "org.kw",
    "ky",
    "edu.ky",
    "gov.ky",
    "com.ky",
    "org.ky",
    "net.ky",
    "kz",
    "org.kz",
    "edu.kz",
    "net.kz",
    "gov.kz",
    "mil.kz",
    "com.kz",
    "la",
    "int.la",
    "net.la",
    "info.la",
    "edu.la",
    "gov.la",
    "per.la",
    "com.la",
    "org.la",
    "lb",
    "com.lb",
    "edu.lb",
    "gov.lb",
    "net.lb",
    "org.lb",
    "lc",
    "com.lc",
    "net.lc",
    "co.lc",
    "org.lc",
    "edu.lc",
    "gov.lc",
    "li",
    "lk",
    "gov.lk",
    "sch.lk",
    "net.lk",
    "int.lk",
    "com.lk",
    "org.lk",
    "edu.lk",
    "ngo.lk",
    "soc.lk",
    "web.lk",
    "ltd.lk",
    "assn.lk",
    "grp.lk",
    "hotel.lk",
    "ac.lk",
    "lr",
    "com.lr",
    "edu.lr",
    "gov.lr",
    "org.lr",
    "net.lr",
    "ls",
    "ac.ls",
    "biz.ls",
    "co.ls",
    "edu.ls",
    "gov.ls",
    "info.ls",
    "net.ls",
    "org.ls",
    "sc.ls",
    "lt",
    "gov.lt",
    "lu",
    "lv",
    "com.lv",
    "edu.lv",
    "gov.lv",
    "org.lv",
    "mil.lv",
    "id.lv",
    "net.lv",
    "asn.lv",
    "conf.lv",
    "ly",
    "com.ly",
    "net.ly",
    "gov.ly",
    "plc.ly",
    "edu.ly",
    "sch.ly",
    "med.ly",
    "org.ly",
    "id.ly",
    "ma",
    "co.ma",
    "net.ma",
    "gov.ma",
    "org.ma",
    "ac.ma",
    "press.ma",
    "mc",
    "tm.mc",
    "asso.mc",
    "md",
    "me",
    "co.me",
    "net.me",
    "org.me",
    "edu.me",
    "ac.me",
    "gov.me",
    "its.me",
    "priv.me",
    "mg",
    "org.mg",
    "nom.mg",
    "gov.mg",
    "prd.mg",
    "tm.mg",
    "edu.mg",
    "mil.mg",
    "com.mg",
    "co.mg",
    "mh",
    "mil",
    "mk",
    "com.mk",
    "org.mk",
    "net.mk",
    "edu.mk",
    "gov.mk",
    "inf.mk",
    "name.mk",
    "ml",
    "com.ml",
    "edu.ml",
    "gouv.ml",
    "gov.ml",
    "net.ml",
    "org.ml",
    "presse.ml",
    "*.mm",
    "mn",
    "gov.mn",
    "edu.mn",
    "org.mn",
    "mo",
    "com.mo",
    "net.mo",
    "org.mo",
    "edu.mo",
    "gov.mo",
    "mobi",
    "mp",
    "mq",
    "mr",
    "gov.mr",
    "ms",
    "com.ms",
    "edu.ms",
    "gov.ms",
    "net.ms",
    "org.ms",
    "mt",
    "com.mt",
    "edu.mt",
    "net.mt",
    "org.mt",
    "mu",
    "com.mu",
    "net.mu",
    "org.mu",
    "gov.mu",
    "ac.mu",
    "co.mu",
    "or.mu",
    "museum",
    "academy.museum",
    "agriculture.museum",
    "air.museum",
    "airguard.museum",
    "alabama.museum",
    "alaska.museum",
    "amber.museum",
    "ambulance.museum",
    "american.museum",
    "americana.museum",
    "americanantiques.museum",
    "americanart.museum",
    "amsterdam.museum",
    "and.museum",
    "annefrank.museum",
    "anthro.museum",
    "anthropology.museum",
    "antiques.museum",
    "aquarium.museum",
    "arboretum.museum",
    "archaeological.museum",
    "archaeology.museum",
    "architecture.museum",
    "art.museum",
    "artanddesign.museum",
    "artcenter.museum",
    "artdeco.museum",
    "arteducation.museum",
    "artgallery.museum",
    "arts.museum",
    "artsandcrafts.museum",
    "asmatart.museum",
    "assassination.museum",
    "assisi.museum",
    "association.museum",
    "astronomy.museum",
    "atlanta.museum",
    "austin.museum",
    "australia.museum",
    "automotive.museum",
    "aviation.museum",
    "axis.museum",
    "badajoz.museum",
    "baghdad.museum",
    "bahn.museum",
    "bale.museum",
    "baltimore.museum",
    "barcelona.museum",
    "baseball.museum",
    "basel.museum",
    "baths.museum",
    "bauern.museum",
    "beauxarts.museum",
    "beeldengeluid.museum",
    "bellevue.museum",
    "bergbau.museum",
    "berkeley.museum",
    "berlin.museum",
    "bern.museum",
    "bible.museum",
    "bilbao.museum",
    "bill.museum",
    "birdart.museum",
    "birthplace.museum",
    "bonn.museum",
    "boston.museum",
    "botanical.museum",
    "botanicalgarden.museum",
    "botanicgarden.museum",
    "botany.museum",
    "brandywinevalley.museum",
    "brasil.museum",
    "bristol.museum",
    "british.museum",
    "britishcolumbia.museum",
    "broadcast.museum",
    "brunel.museum",
    "brussel.museum",
    "brussels.museum",
    "bruxelles.museum",
    "building.museum",
    "burghof.museum",
    "bus.museum",
    "bushey.museum",
    "cadaques.museum",
    "california.museum",
    "cambridge.museum",
    "can.museum",
    "canada.museum",
    "capebreton.museum",
    "carrier.museum",
    "cartoonart.museum",
    "casadelamoneda.museum",
    "castle.museum",
    "castres.museum",
    "celtic.museum",
    "center.museum",
    "chattanooga.museum",
    "cheltenham.museum",
    "chesapeakebay.museum",
    "chicago.museum",
    "children.museum",
    "childrens.museum",
    "childrensgarden.museum",
    "chiropractic.museum",
    "chocolate.museum",
    "christiansburg.museum",
    "cincinnati.museum",
    "cinema.museum",
    "circus.museum",
    "civilisation.museum",
    "civilization.museum",
    "civilwar.museum",
    "clinton.museum",
    "clock.museum",
    "coal.museum",
    "coastaldefence.museum",
    "cody.museum",
    "coldwar.museum",
    "collection.museum",
    "colonialwilliamsburg.museum",
    "coloradoplateau.museum",
    "columbia.museum",
    "columbus.museum",
    "communication.museum",
    "communications.museum",
    "community.museum",
    "computer.museum",
    "computerhistory.museum",
    "comunicações.museum",
    "contemporary.museum",
    "contemporaryart.museum",
    "convent.museum",
    "copenhagen.museum",
    "corporation.museum",
    "correios-e-telecomunicações.museum",
    "corvette.museum",
    "costume.museum",
    "countryestate.museum",
    "county.museum",
    "crafts.museum",
    "cranbrook.museum",
    "creation.museum",
    "cultural.museum",
    "culturalcenter.museum",
    "culture.museum",
    "cyber.museum",
    "cymru.museum",
    "dali.museum",
    "dallas.museum",
    "database.museum",
    "ddr.museum",
    "decorativearts.museum",
    "delaware.museum",
    "delmenhorst.museum",
    "denmark.museum",
    "depot.museum",
    "design.museum",
    "detroit.museum",
    "dinosaur.museum",
    "discovery.museum",
    "dolls.museum",
    "donostia.museum",
    "durham.museum",
    "eastafrica.museum",
    "eastcoast.museum",
    "education.museum",
    "educational.museum",
    "egyptian.museum",
    "eisenbahn.museum",
    "elburg.museum",
    "elvendrell.museum",
    "embroidery.museum",
    "encyclopedic.museum",
    "england.museum",
    "entomology.museum",
    "environment.museum",
    "environmentalconservation.museum",
    "epilepsy.museum",
    "essex.museum",
    "estate.museum",
    "ethnology.museum",
    "exeter.museum",
    "exhibition.museum",
    "family.museum",
    "farm.museum",
    "farmequipment.museum",
    "farmers.museum",
    "farmstead.museum",
    "field.museum",
    "figueres.museum",
    "filatelia.museum",
    "film.museum",
    "fineart.museum",
    "finearts.museum",
    "finland.museum",
    "flanders.museum",
    "florida.museum",
    "force.museum",
    "fortmissoula.museum",
    "fortworth.museum",
    "foundation.museum",
    "francaise.museum",
    "frankfurt.museum",
    "franziskaner.museum",
    "freemasonry.museum",
    "freiburg.museum",
    "fribourg.museum",
    "frog.museum",
    "fundacio.museum",
    "furniture.museum",
    "gallery.museum",
    "garden.museum",
    "gateway.museum",
    "geelvinck.museum",
    "gemological.museum",
    "geology.museum",
    "georgia.museum",
    "giessen.museum",
    "glas.museum",
    "glass.museum",
    "gorge.museum",
    "grandrapids.museum",
    "graz.museum",
    "guernsey.museum",
    "halloffame.museum",
    "hamburg.museum",
    "handson.museum",
    "harvestcelebration.museum",
    "hawaii.museum",
    "health.museum",
    "heimatunduhren.museum",
    "hellas.museum",
    "helsinki.museum",
    "hembygdsforbund.museum",
    "heritage.museum",
    "histoire.museum",
    "historical.museum",
    "historicalsociety.museum",
    "historichouses.museum",
    "historisch.museum",
    "historisches.museum",
    "history.museum",
    "historyofscience.museum",
    "horology.museum",
    "house.museum",
    "humanities.museum",
    "illustration.museum",
    "imageandsound.museum",
    "indian.museum",
    "indiana.museum",
    "indianapolis.museum",
    "indianmarket.museum",
    "intelligence.museum",
    "interactive.museum",
    "iraq.museum",
    "iron.museum",
    "isleofman.museum",
    "jamison.museum",
    "jefferson.museum",
    "jerusalem.museum",
    "jewelry.museum",
    "jewish.museum",
    "jewishart.museum",
    "jfk.museum",
    "journalism.museum",
    "judaica.museum",
    "judygarland.museum",
    "juedisches.museum",
    "juif.museum",
    "karate.museum",
    "karikatur.museum",
    "kids.museum",
    "koebenhavn.museum",
    "koeln.museum",
    "kunst.museum",
    "kunstsammlung.museum",
    "kunstunddesign.museum",
    "labor.museum",
    "labour.museum",
    "lajolla.museum",
    "lancashire.museum",
    "landes.museum",
    "lans.museum",
    "läns.museum",
    "larsson.museum",
    "lewismiller.museum",
    "lincoln.museum",
    "linz.museum",
    "living.museum",
    "livinghistory.museum",
    "localhistory.museum",
    "london.museum",
    "losangeles.museum",
    "louvre.museum",
    "loyalist.museum",
    "lucerne.museum",
    "luxembourg.museum",
    "luzern.museum",
    "mad.museum",
    "madrid.museum",
    "mallorca.museum",
    "manchester.museum",
    "mansion.museum",
    "mansions.museum",
    "manx.museum",
    "marburg.museum",
    "maritime.museum",
    "maritimo.museum",
    "maryland.museum",
    "marylhurst.museum",
    "media.museum",
    "medical.museum",
    "medizinhistorisches.museum",
    "meeres.museum",
    "memorial.museum",
    "mesaverde.museum",
    "michigan.museum",
    "midatlantic.museum",
    "military.museum",
    "mill.museum",
    "miners.museum",
    "mining.museum",
    "minnesota.museum",
    "missile.museum",
    "missoula.museum",
    "modern.museum",
    "moma.museum",
    "money.museum",
    "monmouth.museum",
    "monticello.museum",
    "montreal.museum",
    "moscow.museum",
    "motorcycle.museum",
    "muenchen.museum",
    "muenster.museum",
    "mulhouse.museum",
    "muncie.museum",
    "museet.museum",
    "museumcenter.museum",
    "museumvereniging.museum",
    "music.museum",
    "national.museum",
    "nationalfirearms.museum",
    "nationalheritage.museum",
    "nativeamerican.museum",
    "naturalhistory.museum",
    "naturalhistorymuseum.museum",
    "naturalsciences.museum",
    "nature.museum",
    "naturhistorisches.museum",
    "natuurwetenschappen.museum",
    "naumburg.museum",
    "naval.museum",
    "nebraska.museum",
    "neues.museum",
    "newhampshire.museum",
    "newjersey.museum",
    "newmexico.museum",
    "newport.museum",
    "newspaper.museum",
    "newyork.museum",
    "niepce.museum",
    "norfolk.museum",
    "north.museum",
    "nrw.museum",
    "nyc.museum",
    "nyny.museum",
    "oceanographic.museum",
    "oceanographique.museum",
    "omaha.museum",
    "online.museum",
    "ontario.museum",
    "openair.museum",
    "oregon.museum",
    "oregontrail.museum",
    "otago.museum",
    "oxford.museum",
    "pacific.museum",
    "paderborn.museum",
    "palace.museum",
    "paleo.museum",
    "palmsprings.museum",
    "panama.museum",
    "paris.museum",
    "pasadena.museum",
    "pharmacy.museum",
    "philadelphia.museum",
    "philadelphiaarea.museum",
    "philately.museum",
    "phoenix.museum",
    "photography.museum",
    "pilots.museum",
    "pittsburgh.museum",
    "planetarium.museum",
    "plantation.museum",
    "plants.museum",
    "plaza.museum",
    "portal.museum",
    "portland.museum",
    "portlligat.museum",
    "posts-and-telecommunications.museum",
    "preservation.museum",
    "presidio.museum",
    "press.museum",
    "project.museum",
    "public.museum",
    "pubol.museum",
    "quebec.museum",
    "railroad.museum",
    "railway.museum",
    "research.museum",
    "resistance.museum",
    "riodejaneiro.museum",
    "rochester.museum",
    "rockart.museum",
    "roma.museum",
    "russia.museum",
    "saintlouis.museum",
    "salem.museum",
    "salvadordali.museum",
    "salzburg.museum",
    "sandiego.museum",
    "sanfrancisco.museum",
    "santabarbara.museum",
    "santacruz.museum",
    "santafe.museum",
    "saskatchewan.museum",
    "satx.museum",
    "savannahga.museum",
    "schlesisches.museum",
    "schoenbrunn.museum",
    "schokoladen.museum",
    "school.museum",
    "schweiz.museum",
    "science.museum",
    "scienceandhistory.museum",
    "scienceandindustry.museum",
    "sciencecenter.museum",
    "sciencecenters.museum",
    "science-fiction.museum",
    "sciencehistory.museum",
    "sciences.museum",
    "sciencesnaturelles.museum",
    "scotland.museum",
    "seaport.museum",
    "settlement.museum",
    "settlers.museum",
    "shell.museum",
    "sherbrooke.museum",
    "sibenik.museum",
    "silk.museum",
    "ski.museum",
    "skole.museum",
    "society.museum",
    "sologne.museum",
    "soundandvision.museum",
    "southcarolina.museum",
    "southwest.museum",
    "space.museum",
    "spy.museum",
    "square.museum",
    "stadt.museum",
    "stalbans.museum",
    "starnberg.museum",
    "state.museum",
    "stateofdelaware.museum",
    "station.museum",
    "steam.museum",
    "steiermark.museum",
    "stjohn.museum",
    "stockholm.museum",
    "stpetersburg.museum",
    "stuttgart.museum",
    "suisse.museum",
    "surgeonshall.museum",
    "surrey.museum",
    "svizzera.museum",
    "sweden.museum",
    "sydney.museum",
    "tank.museum",
    "tcm.museum",
    "technology.museum",
    "telekommunikation.museum",
    "television.museum",
    "texas.museum",
    "textile.museum",
    "theater.museum",
    "time.museum",
    "timekeeping.museum",
    "topology.museum",
    "torino.museum",
    "touch.museum",
    "town.museum",
    "transport.museum",
    "tree.museum",
    "trolley.museum",
    "trust.museum",
    "trustee.museum",
    "uhren.museum",
    "ulm.museum",
    "undersea.museum",
    "university.museum",
    "usa.museum",
    "usantiques.museum",
    "usarts.museum",
    "uscountryestate.museum",
    "usculture.museum",
    "usdecorativearts.museum",
    "usgarden.museum",
    "ushistory.museum",
    "ushuaia.museum",
    "uslivinghistory.museum",
    "utah.museum",
    "uvic.museum",
    "valley.museum",
    "vantaa.museum",
    "versailles.museum",
    "viking.museum",
    "village.museum",
    "virginia.museum",
    "virtual.museum",
    "virtuel.museum",
    "vlaanderen.museum",
    "volkenkunde.museum",
    "wales.museum",
    "wallonie.museum",
    "war.museum",
    "washingtondc.museum",
    "watchandclock.museum",
    "watch-and-clock.museum",
    "western.museum",
    "westfalen.museum",
    "whaling.museum",
    "wildlife.museum",
    "williamsburg.museum",
    "windmill.museum",
    "workshop.museum",
    "york.museum",
    "yorkshire.museum",
    "yosemite.museum",
    "youth.museum",
    "zoological.museum",
    "zoology.museum",
    "ירושלים.museum",
    "иком.museum",
    "mv",
    "aero.mv",
    "biz.mv",
    "com.mv",
    "coop.mv",
    "edu.mv",
    "gov.mv",
    "info.mv",
    "int.mv",
    "mil.mv",
    "museum.mv",
    "name.mv",
    "net.mv",
    "org.mv",
    "pro.mv",
    "mw",
    "ac.mw",
    "biz.mw",
    "co.mw",
    "com.mw",
    "coop.mw",
    "edu.mw",
    "gov.mw",
    "int.mw",
    "museum.mw",
    "net.mw",
    "org.mw",
    "mx",
    "com.mx",
    "org.mx",
    "gob.mx",
    "edu.mx",
    "net.mx",
    "my",
    "com.my",
    "net.my",
    "org.my",
    "gov.my",
    "edu.my",
    "mil.my",
    "name.my",
    "mz",
    "ac.mz",
    "adv.mz",
    "co.mz",
    "edu.mz",
    "gov.mz",
    "mil.mz",
    "net.mz",
    "org.mz",
    "na",
    "info.na",
    "pro.na",
    "name.na",
    "school.na",
    "or.na",
    "dr.na",
    "us.na",
    "mx.na",
    "ca.na",
    "in.na",
    "cc.na",
    "tv.na",
    "ws.na",
    "mobi.na",
    "co.na",
    "com.na",
    "org.na",
    "name",
    "nc",
    "asso.nc",
    "nom.nc",
    "ne",
    "net",
    "nf",
    "com.nf",
    "net.nf",
    "per.nf",
    "rec.nf",
    "web.nf",
    "arts.nf",
    "firm.nf",
    "info.nf",
    "other.nf",
    "store.nf",
    "ng",
    "com.ng",
    "edu.ng",
    "gov.ng",
    "i.ng",
    "mil.ng",
    "mobi.ng",
    "name.ng",
    "net.ng",
    "org.ng",
    "sch.ng",
    "ni",
    "ac.ni",
    "biz.ni",
    "co.ni",
    "com.ni",
    "edu.ni",
    "gob.ni",
    "in.ni",
    "info.ni",
    "int.ni",
    "mil.ni",
    "net.ni",
    "nom.ni",
    "org.ni",
    "web.ni",
    "nl",
    "no",
    "fhs.no",
    "vgs.no",
    "fylkesbibl.no",
    "folkebibl.no",
    "museum.no",
    "idrett.no",
    "priv.no",
    "mil.no",
    "stat.no",
    "dep.no",
    "kommune.no",
    "herad.no",
    "aa.no",
    "ah.no",
    "bu.no",
    "fm.no",
    "hl.no",
    "hm.no",
    "jan-mayen.no",
    "mr.no",
    "nl.no",
    "nt.no",
    "of.no",
    "ol.no",
    "oslo.no",
    "rl.no",
    "sf.no",
    "st.no",
    "svalbard.no",
    "tm.no",
    "tr.no",
    "va.no",
    "vf.no",
    "gs.aa.no",
    "gs.ah.no",
    "gs.bu.no",
    "gs.fm.no",
    "gs.hl.no",
    "gs.hm.no",
    "gs.jan-mayen.no",
    "gs.mr.no",
    "gs.nl.no",
    "gs.nt.no",
    "gs.of.no",
    "gs.ol.no",
    "gs.oslo.no",
    "gs.rl.no",
    "gs.sf.no",
    "gs.st.no",
    "gs.svalbard.no",
    "gs.tm.no",
    "gs.tr.no",
    "gs.va.no",
    "gs.vf.no",
    "akrehamn.no",
    "åkrehamn.no",
    "algard.no",
    "ålgård.no",
    "arna.no",
    "brumunddal.no",
    "bryne.no",
    "bronnoysund.no",
    "brønnøysund.no",
    "drobak.no",
    "drøbak.no",
    "egersund.no",
    "fetsund.no",
    "floro.no",
    "florø.no",
    "fredrikstad.no",
    "hokksund.no",
    "honefoss.no",
    "hønefoss.no",
    "jessheim.no",
    "jorpeland.no",
    "jørpeland.no",
    "kirkenes.no",
    "kopervik.no",
    "krokstadelva.no",
    "langevag.no",
    "langevåg.no",
    "leirvik.no",
    "mjondalen.no",
    "mjøndalen.no",
    "mo-i-rana.no",
    "mosjoen.no",
    "mosjøen.no",
    "nesoddtangen.no",
    "orkanger.no",
    "osoyro.no",
    "osøyro.no",
    "raholt.no",
    "råholt.no",
    "sandnessjoen.no",
    "sandnessjøen.no",
    "skedsmokorset.no",
    "slattum.no",
    "spjelkavik.no",
    "stathelle.no",
    "stavern.no",
    "stjordalshalsen.no",
    "stjørdalshalsen.no",
    "tananger.no",
    "tranby.no",
    "vossevangen.no",
    "afjord.no",
    "åfjord.no",
    "agdenes.no",
    "al.no",
    "ål.no",
    "alesund.no",
    "ålesund.no",
    "alstahaug.no",
    "alta.no",
    "áltá.no",
    "alaheadju.no",
    "álaheadju.no",
    "alvdal.no",
    "amli.no",
    "åmli.no",
    "amot.no",
    "åmot.no",
    "andebu.no",
    "andoy.no",
    "andøy.no",
    "andasuolo.no",
    "ardal.no",
    "årdal.no",
    "aremark.no",
    "arendal.no",
    "ås.no",
    "aseral.no",
    "åseral.no",
    "asker.no",
    "askim.no",
    "askvoll.no",
    "askoy.no",
    "askøy.no",
    "asnes.no",
    "åsnes.no",
    "audnedaln.no",
    "aukra.no",
    "aure.no",
    "aurland.no",
    "aurskog-holand.no",
    "aurskog-høland.no",
    "austevoll.no",
    "austrheim.no",
    "averoy.no",
    "averøy.no",
    "balestrand.no",
    "ballangen.no",
    "balat.no",
    "bálát.no",
    "balsfjord.no",
    "bahccavuotna.no",
    "báhccavuotna.no",
    "bamble.no",
    "bardu.no",
    "beardu.no",
    "beiarn.no",
    "bajddar.no",
    "bájddar.no",
    "baidar.no",
    "báidár.no",
    "berg.no",
    "bergen.no",
    "berlevag.no",
    "berlevåg.no",
    "bearalvahki.no",
    "bearalváhki.no",
    "bindal.no",
    "birkenes.no",
    "bjarkoy.no",
    "bjarkøy.no",
    "bjerkreim.no",
    "bjugn.no",
    "bodo.no",
    "bodø.no",
    "badaddja.no",
    "bådåddjå.no",
    "budejju.no",
    "bokn.no",
    "bremanger.no",
    "bronnoy.no",
    "brønnøy.no",
    "bygland.no",
    "bykle.no",
    "barum.no",
    "bærum.no",
    "bo.telemark.no",
    "bø.telemark.no",
    "bo.nordland.no",
    "bø.nordland.no",
    "bievat.no",
    "bievát.no",
    "bomlo.no",
    "bømlo.no",
    "batsfjord.no",
    "båtsfjord.no",
    "bahcavuotna.no",
    "báhcavuotna.no",
    "dovre.no",
    "drammen.no",
    "drangedal.no",
    "dyroy.no",
    "dyrøy.no",
    "donna.no",
    "dønna.no",
    "eid.no",
    "eidfjord.no",
    "eidsberg.no",
    "eidskog.no",
    "eidsvoll.no",
    "eigersund.no",
    "elverum.no",
    "enebakk.no",
    "engerdal.no",
    "etne.no",
    "etnedal.no",
    "evenes.no",
    "evenassi.no",
    "evenášši.no",
    "evje-og-hornnes.no",
    "farsund.no",
    "fauske.no",
    "fuossko.no",
    "fuoisku.no",
    "fedje.no",
    "fet.no",
    "finnoy.no",
    "finnøy.no",
    "fitjar.no",
    "fjaler.no",
    "fjell.no",
    "flakstad.no",
    "flatanger.no",
    "flekkefjord.no",
    "flesberg.no",
    "flora.no",
    "fla.no",
    "flå.no",
    "folldal.no",
    "forsand.no",
    "fosnes.no",
    "frei.no",
    "frogn.no",
    "froland.no",
    "frosta.no",
    "frana.no",
    "fræna.no",
    "froya.no",
    "frøya.no",
    "fusa.no",
    "fyresdal.no",
    "forde.no",
    "førde.no",
    "gamvik.no",
    "gangaviika.no",
    "gáŋgaviika.no",
    "gaular.no",
    "gausdal.no",
    "gildeskal.no",
    "gildeskål.no",
    "giske.no",
    "gjemnes.no",
    "gjerdrum.no",
    "gjerstad.no",
    "gjesdal.no",
    "gjovik.no",
    "gjøvik.no",
    "gloppen.no",
    "gol.no",
    "gran.no",
    "grane.no",
    "granvin.no",
    "gratangen.no",
    "grimstad.no",
    "grong.no",
    "kraanghke.no",
    "kråanghke.no",
    "grue.no",
    "gulen.no",
    "hadsel.no",
    "halden.no",
    "halsa.no",
    "hamar.no",
    "hamaroy.no",
    "habmer.no",
    "hábmer.no",
    "hapmir.no",
    "hápmir.no",
    "hammerfest.no",
    "hammarfeasta.no",
    "hámmárfeasta.no",
    "haram.no",
    "hareid.no",
    "harstad.no",
    "hasvik.no",
    "aknoluokta.no",
    "ákŋoluokta.no",
    "hattfjelldal.no",
    "aarborte.no",
    "haugesund.no",
    "hemne.no",
    "hemnes.no",
    "hemsedal.no",
    "heroy.more-og-romsdal.no",
    "herøy.møre-og-romsdal.no",
    "heroy.nordland.no",
    "herøy.nordland.no",
    "hitra.no",
    "hjartdal.no",
    "hjelmeland.no",
    "hobol.no",
    "hobøl.no",
    "hof.no",
    "hol.no",
    "hole.no",
    "holmestrand.no",
    "holtalen.no",
    "holtålen.no",
    "hornindal.no",
    "horten.no",
    "hurdal.no",
    "hurum.no",
    "hvaler.no",
    "hyllestad.no",
    "hagebostad.no",
    "hægebostad.no",
    "hoyanger.no",
    "høyanger.no",
    "hoylandet.no",
    "høylandet.no",
    "ha.no",
    "hå.no",
    "ibestad.no",
    "inderoy.no",
    "inderøy.no",
    "iveland.no",
    "jevnaker.no",
    "jondal.no",
    "jolster.no",
    "jølster.no",
    "karasjok.no",
    "karasjohka.no",
    "kárášjohka.no",
    "karlsoy.no",
    "galsa.no",
    "gálsá.no",
    "karmoy.no",
    "karmøy.no",
    "kautokeino.no",
    "guovdageaidnu.no",
    "klepp.no",
    "klabu.no",
    "klæbu.no",
    "kongsberg.no",
    "kongsvinger.no",
    "kragero.no",
    "kragerø.no",
    "kristiansand.no",
    "kristiansund.no",
    "krodsherad.no",
    "krødsherad.no",
    "kvalsund.no",
    "rahkkeravju.no",
    "ráhkkerávju.no",
    "kvam.no",
    "kvinesdal.no",
    "kvinnherad.no",
    "kviteseid.no",
    "kvitsoy.no",
    "kvitsøy.no",
    "kvafjord.no",
    "kvæfjord.no",
    "giehtavuoatna.no",
    "kvanangen.no",
    "kvænangen.no",
    "navuotna.no",
    "návuotna.no",
    "kafjord.no",
    "kåfjord.no",
    "gaivuotna.no",
    "gáivuotna.no",
    "larvik.no",
    "lavangen.no",
    "lavagis.no",
    "loabat.no",
    "loabát.no",
    "lebesby.no",
    "davvesiida.no",
    "leikanger.no",
    "leirfjord.no",
    "leka.no",
    "leksvik.no",
    "lenvik.no",
    "leangaviika.no",
    "leaŋgaviika.no",
    "lesja.no",
    "levanger.no",
    "lier.no",
    "lierne.no",
    "lillehammer.no",
    "lillesand.no",
    "lindesnes.no",
    "lindas.no",
    "lindås.no",
    "lom.no",
    "loppa.no",
    "lahppi.no",
    "láhppi.no",
    "lund.no",
    "lunner.no",
    "luroy.no",
    "lurøy.no",
    "luster.no",
    "lyngdal.no",
    "lyngen.no",
    "ivgu.no",
    "lardal.no",
    "lerdal.no",
    "lærdal.no",
    "lodingen.no",
    "lødingen.no",
    "lorenskog.no",
    "lørenskog.no",
    "loten.no",
    "løten.no",
    "malvik.no",
    "masoy.no",
    "måsøy.no",
    "muosat.no",
    "muosát.no",
    "mandal.no",
    "marker.no",
    "marnardal.no",
    "masfjorden.no",
    "meland.no",
    "meldal.no",
    "melhus.no",
    "meloy.no",
    "meløy.no",
    "meraker.no",
    "meråker.no",
    "moareke.no",
    "moåreke.no",
    "midsund.no",
    "midtre-gauldal.no",
    "modalen.no",
    "modum.no",
    "molde.no",
    "moskenes.no",
    "moss.no",
    "mosvik.no",
    "malselv.no",
    "målselv.no",
    "malatvuopmi.no",
    "málatvuopmi.no",
    "namdalseid.no",
    "aejrie.no",
    "namsos.no",
    "namsskogan.no",
    "naamesjevuemie.no",
    "nååmesjevuemie.no",
    "laakesvuemie.no",
    "nannestad.no",
    "narvik.no",
    "narviika.no",
    "naustdal.no",
    "nedre-eiker.no",
    "nes.akershus.no",
    "nes.buskerud.no",
    "nesna.no",
    "nesodden.no",
    "nesseby.no",
    "unjarga.no",
    "unjárga.no",
    "nesset.no",
    "nissedal.no",
    "nittedal.no",
    "nord-aurdal.no",
    "nord-fron.no",
    "nord-odal.no",
    "norddal.no",
    "nordkapp.no",
    "davvenjarga.no",
    "davvenjárga.no",
    "nordre-land.no",
    "nordreisa.no",
    "raisa.no",
    "ráisa.no",
    "nore-og-uvdal.no",
    "notodden.no",
    "naroy.no",
    "nærøy.no",
    "notteroy.no",
    "nøtterøy.no",
    "odda.no",
    "oksnes.no",
    "øksnes.no",
    "oppdal.no",
    "oppegard.no",
    "oppegård.no",
    "orkdal.no",
    "orland.no",
    "ørland.no",
    "orskog.no",
    "ørskog.no",
    "orsta.no",
    "ørsta.no",
    "os.hedmark.no",
    "os.hordaland.no",
    "osen.no",
    "osteroy.no",
    "osterøy.no",
    "ostre-toten.no",
    "østre-toten.no",
    "overhalla.no",
    "ovre-eiker.no",
    "øvre-eiker.no",
    "oyer.no",
    "øyer.no",
    "oygarden.no",
    "øygarden.no",
    "oystre-slidre.no",
    "øystre-slidre.no",
    "porsanger.no",
    "porsangu.no",
    "porsáŋgu.no",
    "porsgrunn.no",
    "radoy.no",
    "radøy.no",
    "rakkestad.no",
    "rana.no",
    "ruovat.no",
    "randaberg.no",
    "rauma.no",
    "rendalen.no",
    "rennebu.no",
    "rennesoy.no",
    "rennesøy.no",
    "rindal.no",
    "ringebu.no",
    "ringerike.no",
    "ringsaker.no",
    "rissa.no",
    "risor.no",
    "risør.no",
    "roan.no",
    "rollag.no",
    "rygge.no",
    "ralingen.no",
    "rælingen.no",
    "rodoy.no",
    "rødøy.no",
    "romskog.no",
    "rømskog.no",
    "roros.no",
    "røros.no",
    "rost.no",
    "røst.no",
    "royken.no",
    "røyken.no",
    "royrvik.no",
    "røyrvik.no",
    "rade.no",
    "råde.no",
    "salangen.no",
    "siellak.no",
    "saltdal.no",
    "salat.no",
    "sálát.no",
    "sálat.no",
    "samnanger.no",
    "sande.more-og-romsdal.no",
    "sande.møre-og-romsdal.no",
    "sande.vestfold.no",
    "sandefjord.no",
    "sandnes.no",
    "sandoy.no",
    "sandøy.no",
    "sarpsborg.no",
    "sauda.no",
    "sauherad.no",
    "sel.no",
    "selbu.no",
    "selje.no",
    "seljord.no",
    "sigdal.no",
    "siljan.no",
    "sirdal.no",
    "skaun.no",
    "skedsmo.no",
    "ski.no",
    "skien.no",
    "skiptvet.no",
    "skjervoy.no",
    "skjervøy.no",
    "skierva.no",
    "skiervá.no",
    "skjak.no",
    "skjåk.no",
    "skodje.no",
    "skanland.no",
    "skånland.no",
    "skanit.no",
    "skánit.no",
    "smola.no",
    "smøla.no",
    "snillfjord.no",
    "snasa.no",
    "snåsa.no",
    "snoasa.no",
    "snaase.no",
    "snåase.no",
    "sogndal.no",
    "sokndal.no",
    "sola.no",
    "solund.no",
    "songdalen.no",
    "sortland.no",
    "spydeberg.no",
    "stange.no",
    "stavanger.no",
    "steigen.no",
    "steinkjer.no",
    "stjordal.no",
    "stjørdal.no",
    "stokke.no",
    "stor-elvdal.no",
    "stord.no",
    "stordal.no",
    "storfjord.no",
    "omasvuotna.no",
    "strand.no",
    "stranda.no",
    "stryn.no",
    "sula.no",
    "suldal.no",
    "sund.no",
    "sunndal.no",
    "surnadal.no",
    "sveio.no",
    "svelvik.no",
    "sykkylven.no",
    "sogne.no",
    "søgne.no",
    "somna.no",
    "sømna.no",
    "sondre-land.no",
    "søndre-land.no",
    "sor-aurdal.no",
    "sør-aurdal.no",
    "sor-fron.no",
    "sør-fron.no",
    "sor-odal.no",
    "sør-odal.no",
    "sor-varanger.no",
    "sør-varanger.no",
    "matta-varjjat.no",
    "mátta-várjjat.no",
    "sorfold.no",
    "sørfold.no",
    "sorreisa.no",
    "sørreisa.no",
    "sorum.no",
    "sørum.no",
    "tana.no",
    "deatnu.no",
    "time.no",
    "tingvoll.no",
    "tinn.no",
    "tjeldsund.no",
    "dielddanuorri.no",
    "tjome.no",
    "tjøme.no",
    "tokke.no",
    "tolga.no",
    "torsken.no",
    "tranoy.no",
    "tranøy.no",
    "tromso.no",
    "tromsø.no",
    "tromsa.no",
    "romsa.no",
    "trondheim.no",
    "troandin.no",
    "trysil.no",
    "trana.no",
    "træna.no",
    "trogstad.no",
    "trøgstad.no",
    "tvedestrand.no",
    "tydal.no",
    "tynset.no",
    "tysfjord.no",
    "divtasvuodna.no",
    "divttasvuotna.no",
    "tysnes.no",
    "tysvar.no",
    "tysvær.no",
    "tonsberg.no",
    "tønsberg.no",
    "ullensaker.no",
    "ullensvang.no",
    "ulvik.no",
    "utsira.no",
    "vadso.no",
    "vadsø.no",
    "cahcesuolo.no",
    "čáhcesuolo.no",
    "vaksdal.no",
    "valle.no",
    "vang.no",
    "vanylven.no",
    "vardo.no",
    "vardø.no",
    "varggat.no",
    "várggát.no",
    "vefsn.no",
    "vaapste.no",
    "vega.no",
    "vegarshei.no",
    "vegårshei.no",
    "vennesla.no",
    "verdal.no",
    "verran.no",
    "vestby.no",
    "vestnes.no",
    "vestre-slidre.no",
    "vestre-toten.no",
    "vestvagoy.no",
    "vestvågøy.no",
    "vevelstad.no",
    "vik.no",
    "vikna.no",
    "vindafjord.no",
    "volda.no",
    "voss.no",
    "varoy.no",
    "værøy.no",
    "vagan.no",
    "vågan.no",
    "voagat.no",
    "vagsoy.no",
    "vågsøy.no",
    "vaga.no",
    "vågå.no",
    "valer.ostfold.no",
    "våler.østfold.no",
    "valer.hedmark.no",
    "våler.hedmark.no",
    "*.np",
    "nr",
    "biz.nr",
    "info.nr",
    "gov.nr",
    "edu.nr",
    "org.nr",
    "net.nr",
    "com.nr",
    "nu",
    "nz",
    "ac.nz",
    "co.nz",
    "cri.nz",
    "geek.nz",
    "gen.nz",
    "govt.nz",
    "health.nz",
    "iwi.nz",
    "kiwi.nz",
    "maori.nz",
    "mil.nz",
    "māori.nz",
    "net.nz",
    "org.nz",
    "parliament.nz",
    "school.nz",
    "om",
    "co.om",
    "com.om",
    "edu.om",
    "gov.om",
    "med.om",
    "museum.om",
    "net.om",
    "org.om",
    "pro.om",
    "onion",
    "org",
    "pa",
    "ac.pa",
    "gob.pa",
    "com.pa",
    "org.pa",
    "sld.pa",
    "edu.pa",
    "net.pa",
    "ing.pa",
    "abo.pa",
    "med.pa",
    "nom.pa",
    "pe",
    "edu.pe",
    "gob.pe",
    "nom.pe",
    "mil.pe",
    "org.pe",
    "com.pe",
    "net.pe",
    "pf",
    "com.pf",
    "org.pf",
    "edu.pf",
    "*.pg",
    "ph",
    "com.ph",
    "net.ph",
    "org.ph",
    "gov.ph",
    "edu.ph",
    "ngo.ph",
    "mil.ph",
    "i.ph",
    "pk",
    "com.pk",
    "net.pk",
    "edu.pk",
    "org.pk",
    "fam.pk",
    "biz.pk",
    "web.pk",
    "gov.pk",
    "gob.pk",
    "gok.pk",
    "gon.pk",
    "gop.pk",
    "gos.pk",
    "info.pk",
    "pl",
    "com.pl",
    "net.pl",
    "org.pl",
    "aid.pl",
    "agro.pl",
    "atm.pl",
    "auto.pl",
    "biz.pl",
    "edu.pl",
    "gmina.pl",
    "gsm.pl",
    "info.pl",
    "mail.pl",
    "miasta.pl",
    "media.pl",
    "mil.pl",
    "nieruchomosci.pl",
    "nom.pl",
    "pc.pl",
    "powiat.pl",
    "priv.pl",
    "realestate.pl",
    "rel.pl",
    "sex.pl",
    "shop.pl",
    "sklep.pl",
    "sos.pl",
    "szkola.pl",
    "targi.pl",
    "tm.pl",
    "tourism.pl",
    "travel.pl",
    "turystyka.pl",
    "gov.pl",
    "ap.gov.pl",
    "ic.gov.pl",
    "is.gov.pl",
    "us.gov.pl",
    "kmpsp.gov.pl",
    "kppsp.gov.pl",
    "kwpsp.gov.pl",
    "psp.gov.pl",
    "wskr.gov.pl",
    "kwp.gov.pl",
    "mw.gov.pl",
    "ug.gov.pl",
    "um.gov.pl",
    "umig.gov.pl",
    "ugim.gov.pl",
    "upow.gov.pl",
    "uw.gov.pl",
    "starostwo.gov.pl",
    "pa.gov.pl",
    "po.gov.pl",
    "psse.gov.pl",
    "pup.gov.pl",
    "rzgw.gov.pl",
    "sa.gov.pl",
    "so.gov.pl",
    "sr.gov.pl",
    "wsa.gov.pl",
    "sko.gov.pl",
    "uzs.gov.pl",
    "wiih.gov.pl",
    "winb.gov.pl",
    "pinb.gov.pl",
    "wios.gov.pl",
    "witd.gov.pl",
    "wzmiuw.gov.pl",
    "piw.gov.pl",
    "wiw.gov.pl",
    "griw.gov.pl",
    "wif.gov.pl",
    "oum.gov.pl",
    "sdn.gov.pl",
    "zp.gov.pl",
    "uppo.gov.pl",
    "mup.gov.pl",
    "wuoz.gov.pl",
    "konsulat.gov.pl",
    "oirm.gov.pl",
    "augustow.pl",
    "babia-gora.pl",
    "bedzin.pl",
    "beskidy.pl",
    "bialowieza.pl",
    "bialystok.pl",
    "bielawa.pl",
    "bieszczady.pl",
    "boleslawiec.pl",
    "bydgoszcz.pl",
    "bytom.pl",
    "cieszyn.pl",
    "czeladz.pl",
    "czest.pl",
    "dlugoleka.pl",
    "elblag.pl",
    "elk.pl",
    "glogow.pl",
    "gniezno.pl",
    "gorlice.pl",
    "grajewo.pl",
    "ilawa.pl",
    "jaworzno.pl",
    "jelenia-gora.pl",
    "jgora.pl",
    "kalisz.pl",
    "kazimierz-dolny.pl",
    "karpacz.pl",
    "kartuzy.pl",
    "kaszuby.pl",
    "katowice.pl",
    "kepno.pl",
    "ketrzyn.pl",
    "klodzko.pl",
    "kobierzyce.pl",
    "kolobrzeg.pl",
    "konin.pl",
    "konskowola.pl",
    "kutno.pl",
    "lapy.pl",
    "lebork.pl",
    "legnica.pl",
    "lezajsk.pl",
    "limanowa.pl",
    "lomza.pl",
    "lowicz.pl",
    "lubin.pl",
    "lukow.pl",
    "malbork.pl",
    "malopolska.pl",
    "mazowsze.pl",
    "mazury.pl",
    "mielec.pl",
    "mielno.pl",
    "mragowo.pl",
    "naklo.pl",
    "nowaruda.pl",
    "nysa.pl",
    "olawa.pl",
    "olecko.pl",
    "olkusz.pl",
    "olsztyn.pl",
    "opoczno.pl",
    "opole.pl",
    "ostroda.pl",
    "ostroleka.pl",
    "ostrowiec.pl",
    "ostrowwlkp.pl",
    "pila.pl",
    "pisz.pl",
    "podhale.pl",
    "podlasie.pl",
    "polkowice.pl",
    "pomorze.pl",
    "pomorskie.pl",
    "prochowice.pl",
    "pruszkow.pl",
    "przeworsk.pl",
    "pulawy.pl",
    "radom.pl",
    "rawa-maz.pl",
    "rybnik.pl",
    "rzeszow.pl",
    "sanok.pl",
    "sejny.pl",
    "slask.pl",
    "slupsk.pl",
    "sosnowiec.pl",
    "stalowa-wola.pl",
    "skoczow.pl",
    "starachowice.pl",
    "stargard.pl",
    "suwalki.pl",
    "swidnica.pl",
    "swiebodzin.pl",
    "swinoujscie.pl",
    "szczecin.pl",
    "szczytno.pl",
    "tarnobrzeg.pl",
    "tgory.pl",
    "turek.pl",
    "tychy.pl",
    "ustka.pl",
    "walbrzych.pl",
    "warmia.pl",
    "warszawa.pl",
    "waw.pl",
    "wegrow.pl",
    "wielun.pl",
    "wlocl.pl",
    "wloclawek.pl",
    "wodzislaw.pl",
    "wolomin.pl",
    "wroclaw.pl",
    "zachpomor.pl",
    "zagan.pl",
    "zarow.pl",
    "zgora.pl",
    "zgorzelec.pl",
    "pm",
    "pn",
    "gov.pn",
    "co.pn",
    "org.pn",
    "edu.pn",
    "net.pn",
    "post",
    "pr",
    "com.pr",
    "net.pr",
    "org.pr",
    "gov.pr",
    "edu.pr",
    "isla.pr",
    "pro.pr",
    "biz.pr",
    "info.pr",
    "name.pr",
    "est.pr",
    "prof.pr",
    "ac.pr",
    "pro",
    "aaa.pro",
    "aca.pro",
    "acct.pro",
    "avocat.pro",
    "bar.pro",
    "cpa.pro",
    "eng.pro",
    "jur.pro",
    "law.pro",
    "med.pro",
    "recht.pro",
    "ps",
    "edu.ps",
    "gov.ps",
    "sec.ps",
    "plo.ps",
    "com.ps",
    "org.ps",
    "net.ps",
    "pt",
    "net.pt",
    "gov.pt",
    "org.pt",
    "edu.pt",
    "int.pt",
    "publ.pt",
    "com.pt",
    "nome.pt",
    "pw",
    "co.pw",
    "ne.pw",
    "or.pw",
    "ed.pw",
    "go.pw",
    "belau.pw",
    "py",
    "com.py",
    "coop.py",
    "edu.py",
    "gov.py",
    "mil.py",
    "net.py",
    "org.py",
    "qa",
    "com.qa",
    "edu.qa",
    "gov.qa",
    "mil.qa",
    "name.qa",
    "net.qa",
    "org.qa",
    "sch.qa",
    "re",
    "asso.re",
    "com.re",
    "nom.re",
    "ro",
    "arts.ro",
    "com.ro",
    "firm.ro",
    "info.ro",
    "nom.ro",
    "nt.ro",
    "org.ro",
    "rec.ro",
    "store.ro",
    "tm.ro",
    "www.ro",
    "rs",
    "ac.rs",
    "co.rs",
    "edu.rs",
    "gov.rs",
    "in.rs",
    "org.rs",
    "ru",
    "rw",
    "ac.rw",
    "co.rw",
    "coop.rw",
    "gov.rw",
    "mil.rw",
    "net.rw",
    "org.rw",
    "sa",
    "com.sa",
    "net.sa",
    "org.sa",
    "gov.sa",
    "med.sa",
    "pub.sa",
    "edu.sa",
    "sch.sa",
    "sb",
    "com.sb",
    "edu.sb",
    "gov.sb",
    "net.sb",
    "org.sb",
    "sc",
    "com.sc",
    "gov.sc",
    "net.sc",
    "org.sc",
    "edu.sc",
    "sd",
    "com.sd",
    "net.sd",
    "org.sd",
    "edu.sd",
    "med.sd",
    "tv.sd",
    "gov.sd",
    "info.sd",
    "se",
    "a.se",
    "ac.se",
    "b.se",
    "bd.se",
    "brand.se",
    "c.se",
    "d.se",
    "e.se",
    "f.se",
    "fh.se",
    "fhsk.se",
    "fhv.se",
    "g.se",
    "h.se",
    "i.se",
    "k.se",
    "komforb.se",
    "kommunalforbund.se",
    "komvux.se",
    "l.se",
    "lanbib.se",
    "m.se",
    "n.se",
    "naturbruksgymn.se",
    "o.se",
    "org.se",
    "p.se",
    "parti.se",
    "pp.se",
    "press.se",
    "r.se",
    "s.se",
    "t.se",
    "tm.se",
    "u.se",
    "w.se",
    "x.se",
    "y.se",
    "z.se",
    "sg",
    "com.sg",
    "net.sg",
    "org.sg",
    "gov.sg",
    "edu.sg",
    "per.sg",
    "sh",
    "com.sh",
    "net.sh",
    "gov.sh",
    "org.sh",
    "mil.sh",
    "si",
    "sj",
    "sk",
    "sl",
    "com.sl",
    "net.sl",
    "edu.sl",
    "gov.sl",
    "org.sl",
    "sm",
    "sn",
    "art.sn",
    "com.sn",
    "edu.sn",
    "gouv.sn",
    "org.sn",
    "perso.sn",
    "univ.sn",
    "so",
    "com.so",
    "edu.so",
    "gov.so",
    "me.so",
    "net.so",
    "org.so",
    "sr",
    "ss",
    "biz.ss",
    "com.ss",
    "edu.ss",
    "gov.ss",
    "net.ss",
    "org.ss",
    "st",
    "co.st",
    "com.st",
    "consulado.st",
    "edu.st",
    "embaixada.st",
    "gov.st",
    "mil.st",
    "net.st",
    "org.st",
    "principe.st",
    "saotome.st",
    "store.st",
    "su",
    "sv",
    "com.sv",
    "edu.sv",
    "gob.sv",
    "org.sv",
    "red.sv",
    "sx",
    "gov.sx",
    "sy",
    "edu.sy",
    "gov.sy",
    "net.sy",
    "mil.sy",
    "com.sy",
    "org.sy",
    "sz",
    "co.sz",
    "ac.sz",
    "org.sz",
    "tc",
    "td",
    "tel",
    "tf",
    "tg",
    "th",
    "ac.th",
    "co.th",
    "go.th",
    "in.th",
    "mi.th",
    "net.th",
    "or.th",
    "tj",
    "ac.tj",
    "biz.tj",
    "co.tj",
    "com.tj",
    "edu.tj",
    "go.tj",
    "gov.tj",
    "int.tj",
    "mil.tj",
    "name.tj",
    "net.tj",
    "nic.tj",
    "org.tj",
    "test.tj",
    "web.tj",
    "tk",
    "tl",
    "gov.tl",
    "tm",
    "com.tm",
    "co.tm",
    "org.tm",
    "net.tm",
    "nom.tm",
    "gov.tm",
    "mil.tm",
    "edu.tm",
    "tn",
    "com.tn",
    "ens.tn",
    "fin.tn",
    "gov.tn",
    "ind.tn",
    "intl.tn",
    "nat.tn",
    "net.tn",
    "org.tn",
    "info.tn",
    "perso.tn",
    "tourism.tn",
    "edunet.tn",
    "rnrt.tn",
    "rns.tn",
    "rnu.tn",
    "mincom.tn",
    "agrinet.tn",
    "defense.tn",
    "turen.tn",
    "to",
    "com.to",
    "gov.to",
    "net.to",
    "org.to",
    "edu.to",
    "mil.to",
    "tr",
    "av.tr",
    "bbs.tr",
    "bel.tr",
    "biz.tr",
    "com.tr",
    "dr.tr",
    "edu.tr",
    "gen.tr",
    "gov.tr",
    "info.tr",
    "mil.tr",
    "k12.tr",
    "kep.tr",
    "name.tr",
    "net.tr",
    "org.tr",
    "pol.tr",
    "tel.tr",
    "tsk.tr",
    "tv.tr",
    "web.tr",
    "nc.tr",
    "gov.nc.tr",
    "tt",
    "co.tt",
    "com.tt",
    "org.tt",
    "net.tt",
    "biz.tt",
    "info.tt",
    "pro.tt",
    "int.tt",
    "coop.tt",
    "jobs.tt",
    "mobi.tt",
    "travel.tt",
    "museum.tt",
    "aero.tt",
    "name.tt",
    "gov.tt",
    "edu.tt",
    "tv",
    "tw",
    "edu.tw",
    "gov.tw",
    "mil.tw",
    "com.tw",
    "net.tw",
    "org.tw",
    "idv.tw",
    "game.tw",
    "ebiz.tw",
    "club.tw",
    "網路.tw",
    "組織.tw",
    "商業.tw",
    "tz",
    "ac.tz",
    "co.tz",
    "go.tz",
    "hotel.tz",
    "info.tz",
    "me.tz",
    "mil.tz",
    "mobi.tz",
    "ne.tz",
    "or.tz",
    "sc.tz",
    "tv.tz",
    "ua",
    "com.ua",
    "edu.ua",
    "gov.ua",
    "in.ua",
    "net.ua",
    "org.ua",
    "cherkassy.ua",
    "cherkasy.ua",
    "chernigov.ua",
    "chernihiv.ua",
    "chernivtsi.ua",
    "chernovtsy.ua",
    "ck.ua",
    "cn.ua",
    "cr.ua",
    "crimea.ua",
    "cv.ua",
    "dn.ua",
    "dnepropetrovsk.ua",
    "dnipropetrovsk.ua",
    "dominic.ua",
    "donetsk.ua",
    "dp.ua",
    "if.ua",
    "ivano-frankivsk.ua",
    "kh.ua",
    "kharkiv.ua",
    "kharkov.ua",
    "kherson.ua",
    "khmelnitskiy.ua",
    "khmelnytskyi.ua",
    "kiev.ua",
    "kirovograd.ua",
    "km.ua",
    "kr.ua",
    "krym.ua",
    "ks.ua",
    "kv.ua",
    "kyiv.ua",
    "lg.ua",
    "lt.ua",
    "lugansk.ua",
    "lutsk.ua",
    "lv.ua",
    "lviv.ua",
    "mk.ua",
    "mykolaiv.ua",
    "nikolaev.ua",
    "od.ua",
    "odesa.ua",
    "odessa.ua",
    "pl.ua",
    "poltava.ua",
    "rivne.ua",
    "rovno.ua",
    "rv.ua",
    "sb.ua",
    "sebastopol.ua",
    "sevastopol.ua",
    "sm.ua",
    "sumy.ua",
    "te.ua",
    "ternopil.ua",
    "uz.ua",
    "uzhgorod.ua",
    "vinnica.ua",
    "vinnytsia.ua",
    "vn.ua",
    "volyn.ua",
    "yalta.ua",
    "zaporizhzhe.ua",
    "zaporizhzhia.ua",
    "zhitomir.ua",
    "zhytomyr.ua",
    "zp.ua",
    "zt.ua",
    "ug",
    "co.ug",
    "or.ug",
    "ac.ug",
    "sc.ug",
    "go.ug",
    "ne.ug",
    "com.ug",
    "org.ug",
    "uk",
    "ac.uk",
    "co.uk",
    "gov.uk",
    "ltd.uk",
    "me.uk",
    "net.uk",
    "nhs.uk",
    "org.uk",
    "plc.uk",
    "police.uk",
    "*.sch.uk",
    "us",
    "dni.us",
    "fed.us",
    "isa.us",
    "kids.us",
    "nsn.us",
    "ak.us",
    "al.us",
    "ar.us",
    "as.us",
    "az.us",
    "ca.us",
    "co.us",
    "ct.us",
    "dc.us",
    "de.us",
    "fl.us",
    "ga.us",
    "gu.us",
    "hi.us",
    "ia.us",
    "id.us",
    "il.us",
    "in.us",
    "ks.us",
    "ky.us",
    "la.us",
    "ma.us",
    "md.us",
    "me.us",
    "mi.us",
    "mn.us",
    "mo.us",
    "ms.us",
    "mt.us",
    "nc.us",
    "nd.us",
    "ne.us",
    "nh.us",
    "nj.us",
    "nm.us",
    "nv.us",
    "ny.us",
    "oh.us",
    "ok.us",
    "or.us",
    "pa.us",
    "pr.us",
    "ri.us",
    "sc.us",
    "sd.us",
    "tn.us",
    "tx.us",
    "ut.us",
    "vi.us",
    "vt.us",
    "va.us",
    "wa.us",
    "wi.us",
    "wv.us",
    "wy.us",
    "k12.ak.us",
    "k12.al.us",
    "k12.ar.us",
    "k12.as.us",
    "k12.az.us",
    "k12.ca.us",
    "k12.co.us",
    "k12.ct.us",
    "k12.dc.us",
    "k12.de.us",
    "k12.fl.us",
    "k12.ga.us",
    "k12.gu.us",
    "k12.ia.us",
    "k12.id.us",
    "k12.il.us",
    "k12.in.us",
    "k12.ks.us",
    "k12.ky.us",
    "k12.la.us",
    "k12.ma.us",
    "k12.md.us",
    "k12.me.us",
    "k12.mi.us",
    "k12.mn.us",
    "k12.mo.us",
    "k12.ms.us",
    "k12.mt.us",
    "k12.nc.us",
    "k12.ne.us",
    "k12.nh.us",
    "k12.nj.us",
    "k12.nm.us",
    "k12.nv.us",
    "k12.ny.us",
    "k12.oh.us",
    "k12.ok.us",
    "k12.or.us",
    "k12.pa.us",
    "k12.pr.us",
    "k12.ri.us",
    "k12.sc.us",
    "k12.tn.us",
    "k12.tx.us",
    "k12.ut.us",
    "k12.vi.us",
    "k12.vt.us",
    "k12.va.us",
    "k12.wa.us",
    "k12.wi.us",
    "k12.wy.us",
    "cc.ak.us",
    "cc.al.us",
    "cc.ar.us",
    "cc.as.us",
    "cc.az.us",
    "cc.ca.us",
    "cc.co.us",
    "cc.ct.us",
    "cc.dc.us",
    "cc.de.us",
    "cc.fl.us",
    "cc.ga.us",
    "cc.gu.us",
    "cc.hi.us",
    "cc.ia.us",
    "cc.id.us",
    "cc.il.us",
    "cc.in.us",
    "cc.ks.us",
    "cc.ky.us",
    "cc.la.us",
    "cc.ma.us",
    "cc.md.us",
    "cc.me.us",
    "cc.mi.us",
    "cc.mn.us",
    "cc.mo.us",
    "cc.ms.us",
    "cc.mt.us",
    "cc.nc.us",
    "cc.nd.us",
    "cc.ne.us",
    "cc.nh.us",
    "cc.nj.us",
    "cc.nm.us",
    "cc.nv.us",
    "cc.ny.us",
    "cc.oh.us",
    "cc.ok.us",
    "cc.or.us",
    "cc.pa.us",
    "cc.pr.us",
    "cc.ri.us",
    "cc.sc.us",
    "cc.sd.us",
    "cc.tn.us",
    "cc.tx.us",
    "cc.ut.us",
    "cc.vi.us",
    "cc.vt.us",
    "cc.va.us",
    "cc.wa.us",
    "cc.wi.us",
    "cc.wv.us",
    "cc.wy.us",
    "lib.ak.us",
    "lib.al.us",
    "lib.ar.us",
    "lib.as.us",
    "lib.az.us",
    "lib.ca.us",
    "lib.co.us",
    "lib.ct.us",
    "lib.dc.us",
    "lib.fl.us",
    "lib.ga.us",
    "lib.gu.us",
    "lib.hi.us",
    "lib.ia.us",
    "lib.id.us",
    "lib.il.us",
    "lib.in.us",
    "lib.ks.us",
    "lib.ky.us",
    "lib.la.us",
    "lib.ma.us",
    "lib.md.us",
    "lib.me.us",
    "lib.mi.us",
    "lib.mn.us",
    "lib.mo.us",
    "lib.ms.us",
    "lib.mt.us",
    "lib.nc.us",
    "lib.nd.us",
    "lib.ne.us",
    "lib.nh.us",
    "lib.nj.us",
    "lib.nm.us",
    "lib.nv.us",
    "lib.ny.us",
    "lib.oh.us",
    "lib.ok.us",
    "lib.or.us",
    "lib.pa.us",
    "lib.pr.us",
    "lib.ri.us",
    "lib.sc.us",
    "lib.sd.us",
    "lib.tn.us",
    "lib.tx.us",
    "lib.ut.us",
    "lib.vi.us",
    "lib.vt.us",
    "lib.va.us",
    "lib.wa.us",
    "lib.wi.us",
    "lib.wy.us",
    "pvt.k12.ma.us",
    "chtr.k12.ma.us",
    "paroch.k12.ma.us",
    "ann-arbor.mi.us",
    "cog.mi.us",
    "dst.mi.us",
    "eaton.mi.us",
    "gen.mi.us",
    "mus.mi.us",
    "tec.mi.us",
    "washtenaw.mi.us",
    "uy",
    "com.uy",
    "edu.uy",
    "gub.uy",
    "mil.uy",
    "net.uy",
    "org.uy",
    "uz",
    "co.uz",
    "com.uz",
    "net.uz",
    "org.uz",
    "va",
    "vc",
    "com.vc",
    "net.vc",
    "org.vc",
    "gov.vc",
    "mil.vc",
    "edu.vc",
    "ve",
    "arts.ve",
    "co.ve",
    "com.ve",
    "e12.ve",
    "edu.ve",
    "firm.ve",
    "gob.ve",
    "gov.ve",
    "info.ve",
    "int.ve",
    "mil.ve",
    "net.ve",
    "org.ve",
    "rec.ve",
    "store.ve",
    "tec.ve",
    "web.ve",
    "vg",
    "vi",
    "co.vi",
    "com.vi",
    "k12.vi",
    "net.vi",
    "org.vi",
    "vn",
    "com.vn",
    "net.vn",
    "org.vn",
    "edu.vn",
    "gov.vn",
    "int.vn",
    "ac.vn",
    "biz.vn",
    "info.vn",
    "name.vn",
    "pro.vn",
    "health.vn",
    "vu",
    "com.vu",
    "edu.vu",
    "net.vu",
    "org.vu",
    "wf",
    "ws",
    "com.ws",
    "net.ws",
    "org.ws",
    "gov.ws",
    "edu.ws",
    "yt",
    "امارات",
    "հայ",
    "বাংলা",
    "бг",
    "бел",
    "中国",
    "中國",
    "الجزائر",
    "مصر",
    "ею",
    "ευ",
    "موريتانيا",
    "გე",
    "ελ",
    "香港",
    "公司.香港",
    "教育.香港",
    "政府.香港",
    "個人.香港",
    "網絡.香港",
    "組織.香港",
    "ಭಾರತ",
    "ଭାରତ",
    "ভাৰত",
    "भारतम्",
    "भारोत",
    "ڀارت",
    "ഭാരതം",
    "भारत",
    "بارت",
    "بھارت",
    "భారత్",
    "ભારત",
    "ਭਾਰਤ",
    "ভারত",
    "இந்தியா",
    "ایران",
    "ايران",
    "عراق",
    "الاردن",
    "한국",
    "қаз",
    "ලංකා",
    "இலங்கை",
    "المغرب",
    "мкд",
    "мон",
    "澳門",
    "澳门",
    "مليسيا",
    "عمان",
    "پاکستان",
    "پاكستان",
    "فلسطين",
    "срб",
    "пр.срб",
    "орг.срб",
    "обр.срб",
    "од.срб",
    "упр.срб",
    "ак.срб",
    "рф",
    "قطر",
    "السعودية",
    "السعودیة",
    "السعودیۃ",
    "السعوديه",
    "سودان",
    "新加坡",
    "சிங்கப்பூர்",
    "سورية",
    "سوريا",
    "ไทย",
    "ศึกษา.ไทย",
    "ธุรกิจ.ไทย",
    "รัฐบาล.ไทย",
    "ทหาร.ไทย",
    "เน็ต.ไทย",
    "องค์กร.ไทย",
    "تونس",
    "台灣",
    "台湾",
    "臺灣",
    "укр",
    "اليمن",
    "xxx",
    "*.ye",
    "ac.za",
    "agric.za",
    "alt.za",
    "co.za",
    "edu.za",
    "gov.za",
    "grondar.za",
    "law.za",
    "mil.za",
    "net.za",
    "ngo.za",
    "nic.za",
    "nis.za",
    "nom.za",
    "org.za",
    "school.za",
    "tm.za",
    "web.za",
    "zm",
    "ac.zm",
    "biz.zm",
    "co.zm",
    "com.zm",
    "edu.zm",
    "gov.zm",
    "info.zm",
    "mil.zm",
    "net.zm",
    "org.zm",
    "sch.zm",
    "zw",
    "ac.zw",
    "co.zw",
    "gov.zw",
    "mil.zw",
    "org.zw",
    "aaa",
    "aarp",
    "abarth",
    "abb",
    "abbott",
    "abbvie",
    "abc",
    "able",
    "abogado",
    "abudhabi",
    "academy",
    "accenture",
    "accountant",
    "accountants",
    "aco",
    "actor",
    "adac",
    "ads",
    "adult",
    "aeg",
    "aetna",
    "afamilycompany",
    "afl",
    "africa",
    "agakhan",
    "agency",
    "aig",
    "aigo",
    "airbus",
    "airforce",
    "airtel",
    "akdn",
    "alfaromeo",
    "alibaba",
    "alipay",
    "allfinanz",
    "allstate",
    "ally",
    "alsace",
    "alstom",
    "amazon",
    "americanexpress",
    "americanfamily",
    "amex",
    "amfam",
    "amica",
    "amsterdam",
    "analytics",
    "android",
    "anquan",
    "anz",
    "aol",
    "apartments",
    "app",
    "apple",
    "aquarelle",
    "arab",
    "aramco",
    "archi",
    "army",
    "art",
    "arte",
    "asda",
    "associates",
    "athleta",
    "attorney",
    "auction",
    "audi",
    "audible",
    "audio",
    "auspost",
    "author",
    "auto",
    "autos",
    "avianca",
    "aws",
    "axa",
    "azure",
    "baby",
    "baidu",
    "banamex",
    "bananarepublic",
    "band",
    "bank",
    "bar",
    "barcelona",
    "barclaycard",
    "barclays",
    "barefoot",
    "bargains",
    "baseball",
    "basketball",
    "bauhaus",
    "bayern",
    "bbc",
    "bbt",
    "bbva",
    "bcg",
    "bcn",
    "beats",
    "beauty",
    "beer",
    "bentley",
    "berlin",
    "best",
    "bestbuy",
    "bet",
    "bharti",
    "bible",
    "bid",
    "bike",
    "bing",
    "bingo",
    "bio",
    "black",
    "blackfriday",
    "blockbuster",
    "blog",
    "bloomberg",
    "blue",
    "bms",
    "bmw",
    "bnpparibas",
    "boats",
    "boehringer",
    "bofa",
    "bom",
    "bond",
    "boo",
    "book",
    "booking",
    "bosch",
    "bostik",
    "boston",
    "bot",
    "boutique",
    "box",
    "bradesco",
    "bridgestone",
    "broadway",
    "broker",
    "brother",
    "brussels",
    "budapest",
    "bugatti",
    "build",
    "builders",
    "business",
    "buy",
    "buzz",
    "bzh",
    "cab",
    "cafe",
    "cal",
    "call",
    "calvinklein",
    "cam",
    "camera",
    "camp",
    "cancerresearch",
    "canon",
    "capetown",
    "capital",
    "capitalone",
    "car",
    "caravan",
    "cards",
    "care",
    "career",
    "careers",
    "cars",
    "casa",
    "case",
    "caseih",
    "cash",
    "casino",
    "catering",
    "catholic",
    "cba",
    "cbn",
    "cbre",
    "cbs",
    "ceb",
    "center",
    "ceo",
    "cern",
    "cfa",
    "cfd",
    "chanel",
    "channel",
    "charity",
    "chase",
    "chat",
    "cheap",
    "chintai",
    "christmas",
    "chrome",
    "church",
    "cipriani",
    "circle",
    "cisco",
    "citadel",
    "citi",
    "citic",
    "city",
    "cityeats",
    "claims",
    "cleaning",
    "click",
    "clinic",
    "clinique",
    "clothing",
    "cloud",
    "club",
    "clubmed",
    "coach",
    "codes",
    "coffee",
    "college",
    "cologne",
    "comcast",
    "commbank",
    "community",
    "company",
    "compare",
    "computer",
    "comsec",
    "condos",
    "construction",
    "consulting",
    "contact",
    "contractors",
    "cooking",
    "cookingchannel",
    "cool",
    "corsica",
    "country",
    "coupon",
    "coupons",
    "courses",
    "cpa",
    "credit",
    "creditcard",
    "creditunion",
    "cricket",
    "crown",
    "crs",
    "cruise",
    "cruises",
    "csc",
    "cuisinella",
    "cymru",
    "cyou",
    "dabur",
    "dad",
    "dance",
    "data",
    "date",
    "dating",
    "datsun",
    "day",
    "dclk",
    "dds",
    "deal",
    "dealer",
    "deals",
    "degree",
    "delivery",
    "dell",
    "deloitte",
    "delta",
    "democrat",
    "dental",
    "dentist",
    "desi",
    "design",
    "dev",
    "dhl",
    "diamonds",
    "diet",
    "digital",
    "direct",
    "directory",
    "discount",
    "discover",
    "dish",
    "diy",
    "dnp",
    "docs",
    "doctor",
    "dog",
    "domains",
    "dot",
    "download",
    "drive",
    "dtv",
    "dubai",
    "duck",
    "dunlop",
    "dupont",
    "durban",
    "dvag",
    "dvr",
    "earth",
    "eat",
    "eco",
    "edeka",
    "education",
    "email",
    "emerck",
    "energy",
    "engineer",
    "engineering",
    "enterprises",
    "epson",
    "equipment",
    "ericsson",
    "erni",
    "esq",
    "estate",
    "esurance",
    "etisalat",
    "eurovision",
    "eus",
    "events",
    "exchange",
    "expert",
    "exposed",
    "express",
    "extraspace",
    "fage",
    "fail",
    "fairwinds",
    "faith",
    "family",
    "fan",
    "fans",
    "farm",
    "farmers",
    "fashion",
    "fast",
    "fedex",
    "feedback",
    "ferrari",
    "ferrero",
    "fiat",
    "fidelity",
    "fido",
    "film",
    "final",
    "finance",
    "financial",
    "fire",
    "firestone",
    "firmdale",
    "fish",
    "fishing",
    "fit",
    "fitness",
    "flickr",
    "flights",
    "flir",
    "florist",
    "flowers",
    "fly",
    "foo",
    "food",
    "foodnetwork",
    "football",
    "ford",
    "forex",
    "forsale",
    "forum",
    "foundation",
    "fox",
    "free",
    "fresenius",
    "frl",
    "frogans",
    "frontdoor",
    "frontier",
    "ftr",
    "fujitsu",
    "fujixerox",
    "fun",
    "fund",
    "furniture",
    "futbol",
    "fyi",
    "gal",
    "gallery",
    "gallo",
    "gallup",
    "game",
    "games",
    "gap",
    "garden",
    "gay",
    "gbiz",
    "gdn",
    "gea",
    "gent",
    "genting",
    "george",
    "ggee",
    "gift",
    "gifts",
    "gives",
    "giving",
    "glade",
    "glass",
    "gle",
    "global",
    "globo",
    "gmail",
    "gmbh",
    "gmo",
    "gmx",
    "godaddy",
    "gold",
    "goldpoint",
    "golf",
    "goo",
    "goodyear",
    "goog",
    "google",
    "gop",
    "got",
    "grainger",
    "graphics",
    "gratis",
    "green",
    "gripe",
    "grocery",
    "group",
    "guardian",
    "gucci",
    "guge",
    "guide",
    "guitars",
    "guru",
    "hair",
    "hamburg",
    "hangout",
    "haus",
    "hbo",
    "hdfc",
    "hdfcbank",
    "health",
    "healthcare",
    "help",
    "helsinki",
    "here",
    "hermes",
    "hgtv",
    "hiphop",
    "hisamitsu",
    "hitachi",
    "hiv",
    "hkt",
    "hockey",
    "holdings",
    "holiday",
    "homedepot",
    "homegoods",
    "homes",
    "homesense",
    "honda",
    "horse",
    "hospital",
    "host",
    "hosting",
    "hot",
    "hoteles",
    "hotels",
    "hotmail",
    "house",
    "how",
    "hsbc",
    "hughes",
    "hyatt",
    "hyundai",
    "ibm",
    "icbc",
    "ice",
    "icu",
    "ieee",
    "ifm",
    "ikano",
    "imamat",
    "imdb",
    "immo",
    "immobilien",
    "inc",
    "industries",
    "infiniti",
    "ing",
    "ink",
    "institute",
    "insurance",
    "insure",
    "intel",
    "international",
    "intuit",
    "investments",
    "ipiranga",
    "irish",
    "ismaili",
    "ist",
    "istanbul",
    "itau",
    "itv",
    "iveco",
    "jaguar",
    "java",
    "jcb",
    "jcp",
    "jeep",
    "jetzt",
    "jewelry",
    "jio",
    "jll",
    "jmp",
    "jnj",
    "joburg",
    "jot",
    "joy",
    "jpmorgan",
    "jprs",
    "juegos",
    "juniper",
    "kaufen",
    "kddi",
    "kerryhotels",
    "kerrylogistics",
    "kerryproperties",
    "kfh",
    "kia",
    "kim",
    "kinder",
    "kindle",
    "kitchen",
    "kiwi",
    "koeln",
    "komatsu",
    "kosher",
    "kpmg",
    "kpn",
    "krd",
    "kred",
    "kuokgroup",
    "kyoto",
    "lacaixa",
    "lamborghini",
    "lamer",
    "lancaster",
    "lancia",
    "land",
    "landrover",
    "lanxess",
    "lasalle",
    "lat",
    "latino",
    "latrobe",
    "law",
    "lawyer",
    "lds",
    "lease",
    "leclerc",
    "lefrak",
    "legal",
    "lego",
    "lexus",
    "lgbt",
    "lidl",
    "life",
    "lifeinsurance",
    "lifestyle",
    "lighting",
    "like",
    "lilly",
    "limited",
    "limo",
    "lincoln",
    "linde",
    "link",
    "lipsy",
    "live",
    "living",
    "lixil",
    "llc",
    "llp",
    "loan",
    "loans",
    "locker",
    "locus",
    "loft",
    "lol",
    "london",
    "lotte",
    "lotto",
    "love",
    "lpl",
    "lplfinancial",
    "ltd",
    "ltda",
    "lundbeck",
    "lupin",
    "luxe",
    "luxury",
    "macys",
    "madrid",
    "maif",
    "maison",
    "makeup",
    "man",
    "management",
    "mango",
    "map",
    "market",
    "marketing",
    "markets",
    "marriott",
    "marshalls",
    "maserati",
    "mattel",
    "mba",
    "mckinsey",
    "med",
    "media",
    "meet",
    "melbourne",
    "meme",
    "memorial",
    "men",
    "menu",
    "merckmsd",
    "metlife",
    "miami",
    "microsoft",
    "mini",
    "mint",
    "mit",
    "mitsubishi",
    "mlb",
    "mls",
    "mma",
    "mobile",
    "moda",
    "moe",
    "moi",
    "mom",
    "monash",
    "money",
    "monster",
    "mormon",
    "mortgage",
    "moscow",
    "moto",
    "motorcycles",
    "mov",
    "movie",
    "msd",
    "mtn",
    "mtr",
    "mutual",
    "nab",
    "nadex",
    "nagoya",
    "nationwide",
    "natura",
    "navy",
    "nba",
    "nec",
    "netbank",
    "netflix",
    "network",
    "neustar",
    "new",
    "newholland",
    "news",
    "next",
    "nextdirect",
    "nexus",
    "nfl",
    "ngo",
    "nhk",
    "nico",
    "nike",
    "nikon",
    "ninja",
    "nissan",
    "nissay",
    "nokia",
    "northwesternmutual",
    "norton",
    "now",
    "nowruz",
    "nowtv",
    "nra",
    "nrw",
    "ntt",
    "nyc",
    "obi",
    "observer",
    "off",
    "office",
    "okinawa",
    "olayan",
    "olayangroup",
    "oldnavy",
    "ollo",
    "omega",
    "one",
    "ong",
    "onl",
    "online",
    "onyourside",
    "ooo",
    "open",
    "oracle",
    "orange",
    "organic",
    "origins",
    "osaka",
    "otsuka",
    "ott",
    "ovh",
    "page",
    "panasonic",
    "paris",
    "pars",
    "partners",
    "parts",
    "party",
    "passagens",
    "pay",
    "pccw",
    "pet",
    "pfizer",
    "pharmacy",
    "phd",
    "philips",
    "phone",
    "photo",
    "photography",
    "photos",
    "physio",
    "pics",
    "pictet",
    "pictures",
    "pid",
    "pin",
    "ping",
    "pink",
    "pioneer",
    "pizza",
    "place",
    "play",
    "playstation",
    "plumbing",
    "plus",
    "pnc",
    "pohl",
    "poker",
    "politie",
    "porn",
    "pramerica",
    "praxi",
    "press",
    "prime",
    "prod",
    "productions",
    "prof",
    "progressive",
    "promo",
    "properties",
    "property",
    "protection",
    "pru",
    "prudential",
    "pub",
    "pwc",
    "qpon",
    "quebec",
    "quest",
    "qvc",
    "racing",
    "radio",
    "raid",
    "read",
    "realestate",
    "realtor",
    "realty",
    "recipes",
    "red",
    "redstone",
    "redumbrella",
    "rehab",
    "reise",
    "reisen",
    "reit",
    "reliance",
    "ren",
    "rent",
    "rentals",
    "repair",
    "report",
    "republican",
    "rest",
    "restaurant",
    "review",
    "reviews",
    "rexroth",
    "rich",
    "richardli",
    "ricoh",
    "rightathome",
    "ril",
    "rio",
    "rip",
    "rmit",
    "rocher",
    "rocks",
    "rodeo",
    "rogers",
    "room",
    "rsvp",
    "rugby",
    "ruhr",
    "run",
    "rwe",
    "ryukyu",
    "saarland",
    "safe",
    "safety",
    "sakura",
    "sale",
    "salon",
    "samsclub",
    "samsung",
    "sandvik",
    "sandvikcoromant",
    "sanofi",
    "sap",
    "sarl",
    "sas",
    "save",
    "saxo",
    "sbi",
    "sbs",
    "sca",
    "scb",
    "schaeffler",
    "schmidt",
    "scholarships",
    "school",
    "schule",
    "schwarz",
    "science",
    "scjohnson",
    "scor",
    "scot",
    "search",
    "seat",
    "secure",
    "security",
    "seek",
    "select",
    "sener",
    "services",
    "ses",
    "seven",
    "sew",
    "sex",
    "sexy",
    "sfr",
    "shangrila",
    "sharp",
    "shaw",
    "shell",
    "shia",
    "shiksha",
    "shoes",
    "shop",
    "shopping",
    "shouji",
    "show",
    "showtime",
    "shriram",
    "silk",
    "sina",
    "singles",
    "site",
    "ski",
    "skin",
    "sky",
    "skype",
    "sling",
    "smart",
    "smile",
    "sncf",
    "soccer",
    "social",
    "softbank",
    "software",
    "sohu",
    "solar",
    "solutions",
    "song",
    "sony",
    "soy",
    "spa",
    "space",
    "sport",
    "spot",
    "spreadbetting",
    "srl",
    "stada",
    "staples",
    "star",
    "statebank",
    "statefarm",
    "stc",
    "stcgroup",
    "stockholm",
    "storage",
    "store",
    "stream",
    "studio",
    "study",
    "style",
    "sucks",
    "supplies",
    "supply",
    "support",
    "surf",
    "surgery",
    "suzuki",
    "swatch",
    "swiftcover",
    "swiss",
    "sydney",
    "symantec",
    "systems",
    "tab",
    "taipei",
    "talk",
    "taobao",
    "target",
    "tatamotors",
    "tatar",
    "tattoo",
    "tax",
    "taxi",
    "tci",
    "tdk",
    "team",
    "tech",
    "technology",
    "temasek",
    "tennis",
    "teva",
    "thd",
    "theater",
    "theatre",
    "tiaa",
    "tickets",
    "tienda",
    "tiffany",
    "tips",
    "tires",
    "tirol",
    "tjmaxx",
    "tjx",
    "tkmaxx",
    "tmall",
    "today",
    "tokyo",
    "tools",
    "top",
    "toray",
    "toshiba",
    "total",
    "tours",
    "town",
    "toyota",
    "toys",
    "trade",
    "trading",
    "training",
    "travel",
    "travelchannel",
    "travelers",
    "travelersinsurance",
    "trust",
    "trv",
    "tube",
    "tui",
    "tunes",
    "tushu",
    "tvs",
    "ubank",
    "ubs",
    "unicom",
    "university",
    "uno",
    "uol",
    "ups",
    "vacations",
    "vana",
    "vanguard",
    "vegas",
    "ventures",
    "verisign",
    "versicherung",
    "vet",
    "viajes",
    "video",
    "vig",
    "viking",
    "villas",
    "vin",
    "vip",
    "virgin",
    "visa",
    "vision",
    "viva",
    "vivo",
    "vlaanderen",
    "vodka",
    "volkswagen",
    "volvo",
    "vote",
    "voting",
    "voto",
    "voyage",
    "vuelos",
    "wales",
    "walmart",
    "walter",
    "wang",
    "wanggou",
    "watch",
    "watches",
    "weather",
    "weatherchannel",
    "webcam",
    "weber",
    "website",
    "wed",
    "wedding",
    "weibo",
    "weir",
    "whoswho",
    "wien",
    "wiki",
    "williamhill",
    "win",
    "windows",
    "wine",
    "winners",
    "wme",
    "wolterskluwer",
    "woodside",
    "work",
    "works",
    "world",
    "wow",
    "wtc",
    "wtf",
    "xbox",
    "xerox",
    "xfinity",
    "xihuan",
    "xin",
    "कॉम",
    "セール",
    "佛山",
    "慈善",
    "集团",
    "在线",
    "大众汽车",
    "点看",
    "คอม",
    "八卦",
    "موقع",
    "公益",
    "公司",
    "香格里拉",
    "网站",
    "移动",
    "我爱你",
    "москва",
    "католик",
    "онлайн",
    "сайт",
    "联通",
    "קום",
    "时尚",
    "微博",
    "淡马锡",
    "ファッション",
    "орг",
    "नेट",
    "ストア",
    "アマゾン",
    "삼성",
    "商标",
    "商店",
    "商城",
    "дети",
    "ポイント",
    "新闻",
    "工行",
    "家電",
    "كوم",
    "中文网",
    "中信",
    "娱乐",
    "谷歌",
    "電訊盈科",
    "购物",
    "クラウド",
    "通販",
    "网店",
    "संगठन",
    "餐厅",
    "网络",
    "ком",
    "亚马逊",
    "诺基亚",
    "食品",
    "飞利浦",
    "手表",
    "手机",
    "ارامكو",
    "العليان",
    "اتصالات",
    "بازار",
    "ابوظبي",
    "كاثوليك",
    "همراه",
    "닷컴",
    "政府",
    "شبكة",
    "بيتك",
    "عرب",
    "机构",
    "组织机构",
    "健康",
    "招聘",
    "рус",
    "珠宝",
    "大拿",
    "みんな",
    "グーグル",
    "世界",
    "書籍",
    "网址",
    "닷넷",
    "コム",
    "天主教",
    "游戏",
    "vermögensberater",
    "vermögensberatung",
    "企业",
    "信息",
    "嘉里大酒店",
    "嘉里",
    "广东",
    "政务",
    "xyz",
    "yachts",
    "yahoo",
    "yamaxun",
    "yandex",
    "yodobashi",
    "yoga",
    "yokohama",
    "you",
    "youtube",
    "yun",
    "zappos",
    "zara",
    "zero",
    "zip",
    "zone",
    "zuerich",
    "cc.ua",
    "inf.ua",
    "ltd.ua",
    "adobeaemcloud.com",
    "adobeaemcloud.net",
    "*.dev.adobeaemcloud.com",
    "beep.pl",
    "barsy.ca",
    "*.compute.estate",
    "*.alces.network",
    "altervista.org",
    "alwaysdata.net",
    "cloudfront.net",
    "*.compute.amazonaws.com",
    "*.compute-1.amazonaws.com",
    "*.compute.amazonaws.com.cn",
    "us-east-1.amazonaws.com",
    "cn-north-1.eb.amazonaws.com.cn",
    "cn-northwest-1.eb.amazonaws.com.cn",
    "elasticbeanstalk.com",
    "ap-northeast-1.elasticbeanstalk.com",
    "ap-northeast-2.elasticbeanstalk.com",
    "ap-northeast-3.elasticbeanstalk.com",
    "ap-south-1.elasticbeanstalk.com",
    "ap-southeast-1.elasticbeanstalk.com",
    "ap-southeast-2.elasticbeanstalk.com",
    "ca-central-1.elasticbeanstalk.com",
    "eu-central-1.elasticbeanstalk.com",
    "eu-west-1.elasticbeanstalk.com",
    "eu-west-2.elasticbeanstalk.com",
    "eu-west-3.elasticbeanstalk.com",
    "sa-east-1.elasticbeanstalk.com",
    "us-east-1.elasticbeanstalk.com",
    "us-east-2.elasticbeanstalk.com",
    "us-gov-west-1.elasticbeanstalk.com",
    "us-west-1.elasticbeanstalk.com",
    "us-west-2.elasticbeanstalk.com",
    "*.elb.amazonaws.com",
    "*.elb.amazonaws.com.cn",
    "s3.amazonaws.com",
    "s3-ap-northeast-1.amazonaws.com",
    "s3-ap-northeast-2.amazonaws.com",
    "s3-ap-south-1.amazonaws.com",
    "s3-ap-southeast-1.amazonaws.com",
    "s3-ap-southeast-2.amazonaws.com",
    "s3-ca-central-1.amazonaws.com",
    "s3-eu-central-1.amazonaws.com",
    "s3-eu-west-1.amazonaws.com",
    "s3-eu-west-2.amazonaws.com",
    "s3-eu-west-3.amazonaws.com",
    "s3-external-1.amazonaws.com",
    "s3-fips-us-gov-west-1.amazonaws.com",
    "s3-sa-east-1.amazonaws.com",
    "s3-us-gov-west-1.amazonaws.com",
    "s3-us-east-2.amazonaws.com",
    "s3-us-west-1.amazonaws.com",
    "s3-us-west-2.amazonaws.com",
    "s3.ap-northeast-2.amazonaws.com",
    "s3.ap-south-1.amazonaws.com",
    "s3.cn-north-1.amazonaws.com.cn",
    "s3.ca-central-1.amazonaws.com",
    "s3.eu-central-1.amazonaws.com",
    "s3.eu-west-2.amazonaws.com",
    "s3.eu-west-3.amazonaws.com",
    "s3.us-east-2.amazonaws.com",
    "s3.dualstack.ap-northeast-1.amazonaws.com",
    "s3.dualstack.ap-northeast-2.amazonaws.com",
    "s3.dualstack.ap-south-1.amazonaws.com",
    "s3.dualstack.ap-southeast-1.amazonaws.com",
    "s3.dualstack.ap-southeast-2.amazonaws.com",
    "s3.dualstack.ca-central-1.amazonaws.com",
    "s3.dualstack.eu-central-1.amazonaws.com",
    "s3.dualstack.eu-west-1.amazonaws.com",
    "s3.dualstack.eu-west-2.amazonaws.com",
    "s3.dualstack.eu-west-3.amazonaws.com",
    "s3.dualstack.sa-east-1.amazonaws.com",
    "s3.dualstack.us-east-1.amazonaws.com",
    "s3.dualstack.us-east-2.amazonaws.com",
    "s3-website-us-east-1.amazonaws.com",
    "s3-website-us-west-1.amazonaws.com",
    "s3-website-us-west-2.amazonaws.com",
    "s3-website-ap-northeast-1.amazonaws.com",
    "s3-website-ap-southeast-1.amazonaws.com",
    "s3-website-ap-southeast-2.amazonaws.com",
    "s3-website-eu-west-1.amazonaws.com",
    "s3-website-sa-east-1.amazonaws.com",
    "s3-website.ap-northeast-2.amazonaws.com",
    "s3-website.ap-south-1.amazonaws.com",
    "s3-website.ca-central-1.amazonaws.com",
    "s3-website.eu-central-1.amazonaws.com",
    "s3-website.eu-west-2.amazonaws.com",
    "s3-website.eu-west-3.amazonaws.com",
    "s3-website.us-east-2.amazonaws.com",
    "amsw.nl",
    "t3l3p0rt.net",
    "tele.amune.org",
    "apigee.io",
    "on-aptible.com",
    "user.aseinet.ne.jp",
    "gv.vc",
    "d.gv.vc",
    "user.party.eus",
    "pimienta.org",
    "poivron.org",
    "potager.org",
    "sweetpepper.org",
    "myasustor.com",
    "myfritz.net",
    "*.awdev.ca",
    "*.advisor.ws",
    "b-data.io",
    "backplaneapp.io",
    "balena-devices.com",
    "app.banzaicloud.io",
    "betainabox.com",
    "bnr.la",
    "blackbaudcdn.net",
    "boomla.net",
    "boxfuse.io",
    "square7.ch",
    "bplaced.com",
    "bplaced.de",
    "square7.de",
    "bplaced.net",
    "square7.net",
    "browsersafetymark.io",
    "uk0.bigv.io",
    "dh.bytemark.co.uk",
    "vm.bytemark.co.uk",
    "mycd.eu",
    "carrd.co",
    "crd.co",
    "uwu.ai",
    "ae.org",
    "ar.com",
    "br.com",
    "cn.com",
    "com.de",
    "com.se",
    "de.com",
    "eu.com",
    "gb.com",
    "gb.net",
    "hu.com",
    "hu.net",
    "jp.net",
    "jpn.com",
    "kr.com",
    "mex.com",
    "no.com",
    "qc.com",
    "ru.com",
    "sa.com",
    "se.net",
    "uk.com",
    "uk.net",
    "us.com",
    "uy.com",
    "za.bz",
    "za.com",
    "africa.com",
    "gr.com",
    "in.net",
    "us.org",
    "co.com",
    "c.la",
    "certmgr.org",
    "xenapponazure.com",
    "discourse.group",
    "discourse.team",
    "virtueeldomein.nl",
    "cleverapps.io",
    "*.lcl.dev",
    "*.stg.dev",
    "c66.me",
    "cloud66.ws",
    "cloud66.zone",
    "jdevcloud.com",
    "wpdevcloud.com",
    "cloudaccess.host",
    "freesite.host",
    "cloudaccess.net",
    "cloudcontrolled.com",
    "cloudcontrolapp.com",
    "cloudera.site",
    "trycloudflare.com",
    "workers.dev",
    "wnext.app",
    "co.ca",
    "*.otap.co",
    "co.cz",
    "c.cdn77.org",
    "cdn77-ssl.net",
    "r.cdn77.net",
    "rsc.cdn77.org",
    "ssl.origin.cdn77-secure.org",
    "cloudns.asia",
    "cloudns.biz",
    "cloudns.club",
    "cloudns.cc",
    "cloudns.eu",
    "cloudns.in",
    "cloudns.info",
    "cloudns.org",
    "cloudns.pro",
    "cloudns.pw",
    "cloudns.us",
    "cloudeity.net",
    "cnpy.gdn",
    "co.nl",
    "co.no",
    "webhosting.be",
    "hosting-cluster.nl",
    "ac.ru",
    "edu.ru",
    "gov.ru",
    "int.ru",
    "mil.ru",
    "test.ru",
    "dyn.cosidns.de",
    "dynamisches-dns.de",
    "dnsupdater.de",
    "internet-dns.de",
    "l-o-g-i-n.de",
    "dynamic-dns.info",
    "feste-ip.net",
    "knx-server.net",
    "static-access.net",
    "realm.cz",
    "*.cryptonomic.net",
    "cupcake.is",
    "*.customer-oci.com",
    "*.oci.customer-oci.com",
    "*.ocp.customer-oci.com",
    "*.ocs.customer-oci.com",
    "cyon.link",
    "cyon.site",
    "daplie.me",
    "localhost.daplie.me",
    "dattolocal.com",
    "dattorelay.com",
    "dattoweb.com",
    "mydatto.com",
    "dattolocal.net",
    "mydatto.net",
    "biz.dk",
    "co.dk",
    "firm.dk",
    "reg.dk",
    "store.dk",
    "*.dapps.earth",
    "*.bzz.dapps.earth",
    "builtwithdark.com",
    "edgestack.me",
    "debian.net",
    "dedyn.io",
    "dnshome.de",
    "online.th",
    "shop.th",
    "drayddns.com",
    "dreamhosters.com",
    "mydrobo.com",
    "drud.io",
    "drud.us",
    "duckdns.org",
    "dy.fi",
    "tunk.org",
    "dyndns-at-home.com",
    "dyndns-at-work.com",
    "dyndns-blog.com",
    "dyndns-free.com",
    "dyndns-home.com",
    "dyndns-ip.com",
    "dyndns-mail.com",
    "dyndns-office.com",
    "dyndns-pics.com",
    "dyndns-remote.com",
    "dyndns-server.com",
    "dyndns-web.com",
    "dyndns-wiki.com",
    "dyndns-work.com",
    "dyndns.biz",
    "dyndns.info",
    "dyndns.org",
    "dyndns.tv",
    "at-band-camp.net",
    "ath.cx",
    "barrel-of-knowledge.info",
    "barrell-of-knowledge.info",
    "better-than.tv",
    "blogdns.com",
    "blogdns.net",
    "blogdns.org",
    "blogsite.org",
    "boldlygoingnowhere.org",
    "broke-it.net",
    "buyshouses.net",
    "cechire.com",
    "dnsalias.com",
    "dnsalias.net",
    "dnsalias.org",
    "dnsdojo.com",
    "dnsdojo.net",
    "dnsdojo.org",
    "does-it.net",
    "doesntexist.com",
    "doesntexist.org",
    "dontexist.com",
    "dontexist.net",
    "dontexist.org",
    "doomdns.com",
    "doomdns.org",
    "dvrdns.org",
    "dyn-o-saur.com",
    "dynalias.com",
    "dynalias.net",
    "dynalias.org",
    "dynathome.net",
    "dyndns.ws",
    "endofinternet.net",
    "endofinternet.org",
    "endoftheinternet.org",
    "est-a-la-maison.com",
    "est-a-la-masion.com",
    "est-le-patron.com",
    "est-mon-blogueur.com",
    "for-better.biz",
    "for-more.biz",
    "for-our.info",
    "for-some.biz",
    "for-the.biz",
    "forgot.her.name",
    "forgot.his.name",
    "from-ak.com",
    "from-al.com",
    "from-ar.com",
    "from-az.net",
    "from-ca.com",
    "from-co.net",
    "from-ct.com",
    "from-dc.com",
    "from-de.com",
    "from-fl.com",
    "from-ga.com",
    "from-hi.com",
    "from-ia.com",
    "from-id.com",
    "from-il.com",
    "from-in.com",
    "from-ks.com",
    "from-ky.com",
    "from-la.net",
    "from-ma.com",
    "from-md.com",
    "from-me.org",
    "from-mi.com",
    "from-mn.com",
    "from-mo.com",
    "from-ms.com",
    "from-mt.com",
    "from-nc.com",
    "from-nd.com",
    "from-ne.com",
    "from-nh.com",
    "from-nj.com",
    "from-nm.com",
    "from-nv.com",
    "from-ny.net",
    "from-oh.com",
    "from-ok.com",
    "from-or.com",
    "from-pa.com",
    "from-pr.com",
    "from-ri.com",
    "from-sc.com",
    "from-sd.com",
    "from-tn.com",
    "from-tx.com",
    "from-ut.com",
    "from-va.com",
    "from-vt.com",
    "from-wa.com",
    "from-wi.com",
    "from-wv.com",
    "from-wy.com",
    "ftpaccess.cc",
    "fuettertdasnetz.de",
    "game-host.org",
    "game-server.cc",
    "getmyip.com",
    "gets-it.net",
    "go.dyndns.org",
    "gotdns.com",
    "gotdns.org",
    "groks-the.info",
    "groks-this.info",
    "ham-radio-op.net",
    "here-for-more.info",
    "hobby-site.com",
    "hobby-site.org",
    "home.dyndns.org",
    "homedns.org",
    "homeftp.net",
    "homeftp.org",
    "homeip.net",
    "homelinux.com",
    "homelinux.net",
    "homelinux.org",
    "homeunix.com",
    "homeunix.net",
    "homeunix.org",
    "iamallama.com",
    "in-the-band.net",
    "is-a-anarchist.com",
    "is-a-blogger.com",
    "is-a-bookkeeper.com",
    "is-a-bruinsfan.org",
    "is-a-bulls-fan.com",
    "is-a-candidate.org",
    "is-a-caterer.com",
    "is-a-celticsfan.org",
    "is-a-chef.com",
    "is-a-chef.net",
    "is-a-chef.org",
    "is-a-conservative.com",
    "is-a-cpa.com",
    "is-a-cubicle-slave.com",
    "is-a-democrat.com",
    "is-a-designer.com",
    "is-a-doctor.com",
    "is-a-financialadvisor.com",
    "is-a-geek.com",
    "is-a-geek.net",
    "is-a-geek.org",
    "is-a-green.com",
    "is-a-guru.com",
    "is-a-hard-worker.com",
    "is-a-hunter.com",
    "is-a-knight.org",
    "is-a-landscaper.com",
    "is-a-lawyer.com",
    "is-a-liberal.com",
    "is-a-libertarian.com",
    "is-a-linux-user.org",
    "is-a-llama.com",
    "is-a-musician.com",
    "is-a-nascarfan.com",
    "is-a-nurse.com",
    "is-a-painter.com",
    "is-a-patsfan.org",
    "is-a-personaltrainer.com",
    "is-a-photographer.com",
    "is-a-player.com",
    "is-a-republican.com",
    "is-a-rockstar.com",
    "is-a-socialist.com",
    "is-a-soxfan.org",
    "is-a-student.com",
    "is-a-teacher.com",
    "is-a-techie.com",
    "is-a-therapist.com",
    "is-an-accountant.com",
    "is-an-actor.com",
    "is-an-actress.com",
    "is-an-anarchist.com",
    "is-an-artist.com",
    "is-an-engineer.com",
    "is-an-entertainer.com",
    "is-by.us",
    "is-certified.com",
    "is-found.org",
    "is-gone.com",
    "is-into-anime.com",
    "is-into-cars.com",
    "is-into-cartoons.com",
    "is-into-games.com",
    "is-leet.com",
    "is-lost.org",
    "is-not-certified.com",
    "is-saved.org",
    "is-slick.com",
    "is-uberleet.com",
    "is-very-bad.org",
    "is-very-evil.org",
    "is-very-good.org",
    "is-very-nice.org",
    "is-very-sweet.org",
    "is-with-theband.com",
    "isa-geek.com",
    "isa-geek.net",
    "isa-geek.org",
    "isa-hockeynut.com",
    "issmarterthanyou.com",
    "isteingeek.de",
    "istmein.de",
    "kicks-ass.net",
    "kicks-ass.org",
    "knowsitall.info",
    "land-4-sale.us",
    "lebtimnetz.de",
    "leitungsen.de",
    "likes-pie.com",
    "likescandy.com",
    "merseine.nu",
    "mine.nu",
    "misconfused.org",
    "mypets.ws",
    "myphotos.cc",
    "neat-url.com",
    "office-on-the.net",
    "on-the-web.tv",
    "podzone.net",
    "podzone.org",
    "readmyblog.org",
    "saves-the-whales.com",
    "scrapper-site.net",
    "scrapping.cc",
    "selfip.biz",
    "selfip.com",
    "selfip.info",
    "selfip.net",
    "selfip.org",
    "sells-for-less.com",
    "sells-for-u.com",
    "sells-it.net",
    "sellsyourhome.org",
    "servebbs.com",
    "servebbs.net",
    "servebbs.org",
    "serveftp.net",
    "serveftp.org",
    "servegame.org",
    "shacknet.nu",
    "simple-url.com",
    "space-to-rent.com",
    "stuff-4-sale.org",
    "stuff-4-sale.us",
    "teaches-yoga.com",
    "thruhere.net",
    "traeumtgerade.de",
    "webhop.biz",
    "webhop.info",
    "webhop.net",
    "webhop.org",
    "worse-than.tv",
    "writesthisblog.com",
    "ddnss.de",
    "dyn.ddnss.de",
    "dyndns.ddnss.de",
    "dyndns1.de",
    "dyn-ip24.de",
    "home-webserver.de",
    "dyn.home-webserver.de",
    "myhome-server.de",
    "ddnss.org",
    "definima.net",
    "definima.io",
    "bci.dnstrace.pro",
    "ddnsfree.com",
    "ddnsgeek.com",
    "giize.com",
    "gleeze.com",
    "kozow.com",
    "loseyourip.com",
    "ooguy.com",
    "theworkpc.com",
    "casacam.net",
    "dynu.net",
    "accesscam.org",
    "camdvr.org",
    "freeddns.org",
    "mywire.org",
    "webredirect.org",
    "myddns.rocks",
    "blogsite.xyz",
    "dynv6.net",
    "e4.cz",
    "en-root.fr",
    "mytuleap.com",
    "onred.one",
    "staging.onred.one",
    "enonic.io",
    "customer.enonic.io",
    "eu.org",
    "al.eu.org",
    "asso.eu.org",
    "at.eu.org",
    "au.eu.org",
    "be.eu.org",
    "bg.eu.org",
    "ca.eu.org",
    "cd.eu.org",
    "ch.eu.org",
    "cn.eu.org",
    "cy.eu.org",
    "cz.eu.org",
    "de.eu.org",
    "dk.eu.org",
    "edu.eu.org",
    "ee.eu.org",
    "es.eu.org",
    "fi.eu.org",
    "fr.eu.org",
    "gr.eu.org",
    "hr.eu.org",
    "hu.eu.org",
    "ie.eu.org",
    "il.eu.org",
    "in.eu.org",
    "int.eu.org",
    "is.eu.org",
    "it.eu.org",
    "jp.eu.org",
    "kr.eu.org",
    "lt.eu.org",
    "lu.eu.org",
    "lv.eu.org",
    "mc.eu.org",
    "me.eu.org",
    "mk.eu.org",
    "mt.eu.org",
    "my.eu.org",
    "net.eu.org",
    "ng.eu.org",
    "nl.eu.org",
    "no.eu.org",
    "nz.eu.org",
    "paris.eu.org",
    "pl.eu.org",
    "pt.eu.org",
    "q-a.eu.org",
    "ro.eu.org",
    "ru.eu.org",
    "se.eu.org",
    "si.eu.org",
    "sk.eu.org",
    "tr.eu.org",
    "uk.eu.org",
    "us.eu.org",
    "eu-1.evennode.com",
    "eu-2.evennode.com",
    "eu-3.evennode.com",
    "eu-4.evennode.com",
    "us-1.evennode.com",
    "us-2.evennode.com",
    "us-3.evennode.com",
    "us-4.evennode.com",
    "twmail.cc",
    "twmail.net",
    "twmail.org",
    "mymailer.com.tw",
    "url.tw",
    "apps.fbsbx.com",
    "ru.net",
    "adygeya.ru",
    "bashkiria.ru",
    "bir.ru",
    "cbg.ru",
    "com.ru",
    "dagestan.ru",
    "grozny.ru",
    "kalmykia.ru",
    "kustanai.ru",
    "marine.ru",
    "mordovia.ru",
    "msk.ru",
    "mytis.ru",
    "nalchik.ru",
    "nov.ru",
    "pyatigorsk.ru",
    "spb.ru",
    "vladikavkaz.ru",
    "vladimir.ru",
    "abkhazia.su",
    "adygeya.su",
    "aktyubinsk.su",
    "arkhangelsk.su",
    "armenia.su",
    "ashgabad.su",
    "azerbaijan.su",
    "balashov.su",
    "bashkiria.su",
    "bryansk.su",
    "bukhara.su",
    "chimkent.su",
    "dagestan.su",
    "east-kazakhstan.su",
    "exnet.su",
    "georgia.su",
    "grozny.su",
    "ivanovo.su",
    "jambyl.su",
    "kalmykia.su",
    "kaluga.su",
    "karacol.su",
    "karaganda.su",
    "karelia.su",
    "khakassia.su",
    "krasnodar.su",
    "kurgan.su",
    "kustanai.su",
    "lenug.su",
    "mangyshlak.su",
    "mordovia.su",
    "msk.su",
    "murmansk.su",
    "nalchik.su",
    "navoi.su",
    "north-kazakhstan.su",
    "nov.su",
    "obninsk.su",
    "penza.su",
    "pokrovsk.su",
    "sochi.su",
    "spb.su",
    "tashkent.su",
    "termez.su",
    "togliatti.su",
    "troitsk.su",
    "tselinograd.su",
    "tula.su",
    "tuva.su",
    "vladikavkaz.su",
    "vladimir.su",
    "vologda.su",
    "channelsdvr.net",
    "u.channelsdvr.net",
    "fastly-terrarium.com",
    "fastlylb.net",
    "map.fastlylb.net",
    "freetls.fastly.net",
    "map.fastly.net",
    "a.prod.fastly.net",
    "global.prod.fastly.net",
    "a.ssl.fastly.net",
    "b.ssl.fastly.net",
    "global.ssl.fastly.net",
    "fastpanel.direct",
    "fastvps-server.com",
    "fhapp.xyz",
    "fedorainfracloud.org",
    "fedorapeople.org",
    "cloud.fedoraproject.org",
    "app.os.fedoraproject.org",
    "app.os.stg.fedoraproject.org",
    "mydobiss.com",
    "filegear.me",
    "filegear-au.me",
    "filegear-de.me",
    "filegear-gb.me",
    "filegear-ie.me",
    "filegear-jp.me",
    "filegear-sg.me",
    "firebaseapp.com",
    "flynnhub.com",
    "flynnhosting.net",
    "0e.vc",
    "freebox-os.com",
    "freeboxos.com",
    "fbx-os.fr",
    "fbxos.fr",
    "freebox-os.fr",
    "freeboxos.fr",
    "freedesktop.org",
    "*.futurecms.at",
    "*.ex.futurecms.at",
    "*.in.futurecms.at",
    "futurehosting.at",
    "futuremailing.at",
    "*.ex.ortsinfo.at",
    "*.kunden.ortsinfo.at",
    "*.statics.cloud",
    "service.gov.uk",
    "gehirn.ne.jp",
    "usercontent.jp",
    "gentapps.com",
    "lab.ms",
    "github.io",
    "githubusercontent.com",
    "gitlab.io",
    "glitch.me",
    "lolipop.io",
    "cloudapps.digital",
    "london.cloudapps.digital",
    "homeoffice.gov.uk",
    "ro.im",
    "shop.ro",
    "goip.de",
    "run.app",
    "a.run.app",
    "web.app",
    "*.0emm.com",
    "appspot.com",
    "*.r.appspot.com",
    "blogspot.ae",
    "blogspot.al",
    "blogspot.am",
    "blogspot.ba",
    "blogspot.be",
    "blogspot.bg",
    "blogspot.bj",
    "blogspot.ca",
    "blogspot.cf",
    "blogspot.ch",
    "blogspot.cl",
    "blogspot.co.at",
    "blogspot.co.id",
    "blogspot.co.il",
    "blogspot.co.ke",
    "blogspot.co.nz",
    "blogspot.co.uk",
    "blogspot.co.za",
    "blogspot.com",
    "blogspot.com.ar",
    "blogspot.com.au",
    "blogspot.com.br",
    "blogspot.com.by",
    "blogspot.com.co",
    "blogspot.com.cy",
    "blogspot.com.ee",
    "blogspot.com.eg",
    "blogspot.com.es",
    "blogspot.com.mt",
    "blogspot.com.ng",
    "blogspot.com.tr",
    "blogspot.com.uy",
    "blogspot.cv",
    "blogspot.cz",
    "blogspot.de",
    "blogspot.dk",
    "blogspot.fi",
    "blogspot.fr",
    "blogspot.gr",
    "blogspot.hk",
    "blogspot.hr",
    "blogspot.hu",
    "blogspot.ie",
    "blogspot.in",
    "blogspot.is",
    "blogspot.it",
    "blogspot.jp",
    "blogspot.kr",
    "blogspot.li",
    "blogspot.lt",
    "blogspot.lu",
    "blogspot.md",
    "blogspot.mk",
    "blogspot.mr",
    "blogspot.mx",
    "blogspot.my",
    "blogspot.nl",
    "blogspot.no",
    "blogspot.pe",
    "blogspot.pt",
    "blogspot.qa",
    "blogspot.re",
    "blogspot.ro",
    "blogspot.rs",
    "blogspot.ru",
    "blogspot.se",
    "blogspot.sg",
    "blogspot.si",
    "blogspot.sk",
    "blogspot.sn",
    "blogspot.td",
    "blogspot.tw",
    "blogspot.ug",
    "blogspot.vn",
    "cloudfunctions.net",
    "cloud.goog",
    "codespot.com",
    "googleapis.com",
    "googlecode.com",
    "pagespeedmobilizer.com",
    "publishproxy.com",
    "withgoogle.com",
    "withyoutube.com",
    "awsmppl.com",
    "fin.ci",
    "free.hr",
    "caa.li",
    "ua.rs",
    "conf.se",
    "hs.zone",
    "hs.run",
    "hashbang.sh",
    "hasura.app",
    "hasura-app.io",
    "hepforge.org",
    "herokuapp.com",
    "herokussl.com",
    "myravendb.com",
    "ravendb.community",
    "ravendb.me",
    "development.run",
    "ravendb.run",
    "bpl.biz",
    "orx.biz",
    "ng.city",
    "biz.gl",
    "ng.ink",
    "col.ng",
    "firm.ng",
    "gen.ng",
    "ltd.ng",
    "ngo.ng",
    "ng.school",
    "sch.so",
    "häkkinen.fi",
    "*.moonscale.io",
    "moonscale.net",
    "iki.fi",
    "dyn-berlin.de",
    "in-berlin.de",
    "in-brb.de",
    "in-butter.de",
    "in-dsl.de",
    "in-dsl.net",
    "in-dsl.org",
    "in-vpn.de",
    "in-vpn.net",
    "in-vpn.org",
    "biz.at",
    "info.at",
    "info.cx",
    "ac.leg.br",
    "al.leg.br",
    "am.leg.br",
    "ap.leg.br",
    "ba.leg.br",
    "ce.leg.br",
    "df.leg.br",
    "es.leg.br",
    "go.leg.br",
    "ma.leg.br",
    "mg.leg.br",
    "ms.leg.br",
    "mt.leg.br",
    "pa.leg.br",
    "pb.leg.br",
    "pe.leg.br",
    "pi.leg.br",
    "pr.leg.br",
    "rj.leg.br",
    "rn.leg.br",
    "ro.leg.br",
    "rr.leg.br",
    "rs.leg.br",
    "sc.leg.br",
    "se.leg.br",
    "sp.leg.br",
    "to.leg.br",
    "pixolino.com",
    "ipifony.net",
    "mein-iserv.de",
    "test-iserv.de",
    "iserv.dev",
    "iobb.net",
    "myjino.ru",
    "*.hosting.myjino.ru",
    "*.landing.myjino.ru",
    "*.spectrum.myjino.ru",
    "*.vps.myjino.ru",
    "*.triton.zone",
    "*.cns.joyent.com",
    "js.org",
    "kaas.gg",
    "khplay.nl",
    "keymachine.de",
    "kinghost.net",
    "uni5.net",
    "knightpoint.systems",
    "oya.to",
    "co.krd",
    "edu.krd",
    "git-repos.de",
    "lcube-server.de",
    "svn-repos.de",
    "leadpages.co",
    "lpages.co",
    "lpusercontent.com",
    "lelux.site",
    "co.business",
    "co.education",
    "co.events",
    "co.financial",
    "co.network",
    "co.place",
    "co.technology",
    "app.lmpm.com",
    "linkitools.space",
    "linkyard.cloud",
    "linkyard-cloud.ch",
    "members.linode.com",
    "nodebalancer.linode.com",
    "we.bs",
    "loginline.app",
    "loginline.dev",
    "loginline.io",
    "loginline.services",
    "loginline.site",
    "krasnik.pl",
    "leczna.pl",
    "lubartow.pl",
    "lublin.pl",
    "poniatowa.pl",
    "swidnik.pl",
    "uklugs.org",
    "glug.org.uk",
    "lug.org.uk",
    "lugs.org.uk",
    "barsy.bg",
    "barsy.co.uk",
    "barsyonline.co.uk",
    "barsycenter.com",
    "barsyonline.com",
    "barsy.club",
    "barsy.de",
    "barsy.eu",
    "barsy.in",
    "barsy.info",
    "barsy.io",
    "barsy.me",
    "barsy.menu",
    "barsy.mobi",
    "barsy.net",
    "barsy.online",
    "barsy.org",
    "barsy.pro",
    "barsy.pub",
    "barsy.shop",
    "barsy.site",
    "barsy.support",
    "barsy.uk",
    "*.magentosite.cloud",
    "mayfirst.info",
    "mayfirst.org",
    "hb.cldmail.ru",
    "miniserver.com",
    "memset.net",
    "cloud.metacentrum.cz",
    "custom.metacentrum.cz",
    "flt.cloud.muni.cz",
    "usr.cloud.muni.cz",
    "meteorapp.com",
    "eu.meteorapp.com",
    "co.pl",
    "azurecontainer.io",
    "azurewebsites.net",
    "azure-mobile.net",
    "cloudapp.net",
    "mozilla-iot.org",
    "bmoattachments.org",
    "net.ru",
    "org.ru",
    "pp.ru",
    "ui.nabu.casa",
    "pony.club",
    "of.fashion",
    "on.fashion",
    "of.football",
    "in.london",
    "of.london",
    "for.men",
    "and.mom",
    "for.mom",
    "for.one",
    "for.sale",
    "of.work",
    "to.work",
    "nctu.me",
    "bitballoon.com",
    "netlify.com",
    "4u.com",
    "ngrok.io",
    "nh-serv.co.uk",
    "nfshost.com",
    "dnsking.ch",
    "mypi.co",
    "n4t.co",
    "001www.com",
    "ddnslive.com",
    "myiphost.com",
    "forumz.info",
    "16-b.it",
    "32-b.it",
    "64-b.it",
    "soundcast.me",
    "tcp4.me",
    "dnsup.net",
    "hicam.net",
    "now-dns.net",
    "ownip.net",
    "vpndns.net",
    "dynserv.org",
    "now-dns.org",
    "x443.pw",
    "now-dns.top",
    "ntdll.top",
    "freeddns.us",
    "crafting.xyz",
    "zapto.xyz",
    "nsupdate.info",
    "nerdpol.ovh",
    "blogsyte.com",
    "brasilia.me",
    "cable-modem.org",
    "ciscofreak.com",
    "collegefan.org",
    "couchpotatofries.org",
    "damnserver.com",
    "ddns.me",
    "ditchyourip.com",
    "dnsfor.me",
    "dnsiskinky.com",
    "dvrcam.info",
    "dynns.com",
    "eating-organic.net",
    "fantasyleague.cc",
    "geekgalaxy.com",
    "golffan.us",
    "health-carereform.com",
    "homesecuritymac.com",
    "homesecuritypc.com",
    "hopto.me",
    "ilovecollege.info",
    "loginto.me",
    "mlbfan.org",
    "mmafan.biz",
    "myactivedirectory.com",
    "mydissent.net",
    "myeffect.net",
    "mymediapc.net",
    "mypsx.net",
    "mysecuritycamera.com",
    "mysecuritycamera.net",
    "mysecuritycamera.org",
    "net-freaks.com",
    "nflfan.org",
    "nhlfan.net",
    "no-ip.ca",
    "no-ip.co.uk",
    "no-ip.net",
    "noip.us",
    "onthewifi.com",
    "pgafan.net",
    "point2this.com",
    "pointto.us",
    "privatizehealthinsurance.net",
    "quicksytes.com",
    "read-books.org",
    "securitytactics.com",
    "serveexchange.com",
    "servehumour.com",
    "servep2p.com",
    "servesarcasm.com",
    "stufftoread.com",
    "ufcfan.org",
    "unusualperson.com",
    "workisboring.com",
    "3utilities.com",
    "bounceme.net",
    "ddns.net",
    "ddnsking.com",
    "gotdns.ch",
    "hopto.org",
    "myftp.biz",
    "myftp.org",
    "myvnc.com",
    "no-ip.biz",
    "no-ip.info",
    "no-ip.org",
    "noip.me",
    "redirectme.net",
    "servebeer.com",
    "serveblog.net",
    "servecounterstrike.com",
    "serveftp.com",
    "servegame.com",
    "servehalflife.com",
    "servehttp.com",
    "serveirc.com",
    "serveminecraft.net",
    "servemp3.com",
    "servepics.com",
    "servequake.com",
    "sytes.net",
    "webhop.me",
    "zapto.org",
    "stage.nodeart.io",
    "nodum.co",
    "nodum.io",
    "pcloud.host",
    "nyc.mn",
    "nom.ae",
    "nom.af",
    "nom.ai",
    "nom.al",
    "nym.by",
    "nom.bz",
    "nym.bz",
    "nom.cl",
    "nym.ec",
    "nom.gd",
    "nom.ge",
    "nom.gl",
    "nym.gr",
    "nom.gt",
    "nym.gy",
    "nym.hk",
    "nom.hn",
    "nym.ie",
    "nom.im",
    "nom.ke",
    "nym.kz",
    "nym.la",
    "nym.lc",
    "nom.li",
    "nym.li",
    "nym.lt",
    "nym.lu",
    "nom.lv",
    "nym.me",
    "nom.mk",
    "nym.mn",
    "nym.mx",
    "nom.nu",
    "nym.nz",
    "nym.pe",
    "nym.pt",
    "nom.pw",
    "nom.qa",
    "nym.ro",
    "nom.rs",
    "nom.si",
    "nym.sk",
    "nom.st",
    "nym.su",
    "nym.sx",
    "nom.tj",
    "nym.tw",
    "nom.ug",
    "nom.uy",
    "nom.vc",
    "nom.vg",
    "static.observableusercontent.com",
    "cya.gg",
    "cloudycluster.net",
    "nid.io",
    "opencraft.hosting",
    "operaunite.com",
    "skygearapp.com",
    "outsystemscloud.com",
    "ownprovider.com",
    "own.pm",
    "ox.rs",
    "oy.lc",
    "pgfog.com",
    "pagefrontapp.com",
    "art.pl",
    "gliwice.pl",
    "krakow.pl",
    "poznan.pl",
    "wroc.pl",
    "zakopane.pl",
    "pantheonsite.io",
    "gotpantheon.com",
    "mypep.link",
    "perspecta.cloud",
    "on-web.fr",
    "*.platform.sh",
    "*.platformsh.site",
    "dyn53.io",
    "co.bn",
    "xen.prgmr.com",
    "priv.at",
    "prvcy.page",
    "*.dweb.link",
    "protonet.io",
    "chirurgiens-dentistes-en-france.fr",
    "byen.site",
    "pubtls.org",
    "qualifioapp.com",
    "qbuser.com",
    "instantcloud.cn",
    "ras.ru",
    "qa2.com",
    "qcx.io",
    "*.sys.qcx.io",
    "dev-myqnapcloud.com",
    "alpha-myqnapcloud.com",
    "myqnapcloud.com",
    "*.quipelements.com",
    "vapor.cloud",
    "vaporcloud.io",
    "rackmaze.com",
    "rackmaze.net",
    "*.on-k3s.io",
    "*.on-rancher.cloud",
    "*.on-rio.io",
    "readthedocs.io",
    "rhcloud.com",
    "app.render.com",
    "onrender.com",
    "repl.co",
    "repl.run",
    "resindevice.io",
    "devices.resinstaging.io",
    "hzc.io",
    "wellbeingzone.eu",
    "ptplus.fit",
    "wellbeingzone.co.uk",
    "git-pages.rit.edu",
    "sandcats.io",
    "logoip.de",
    "logoip.com",
    "schokokeks.net",
    "gov.scot",
    "scrysec.com",
    "firewall-gateway.com",
    "firewall-gateway.de",
    "my-gateway.de",
    "my-router.de",
    "spdns.de",
    "spdns.eu",
    "firewall-gateway.net",
    "my-firewall.org",
    "myfirewall.org",
    "spdns.org",
    "senseering.net",
    "biz.ua",
    "co.ua",
    "pp.ua",
    "shiftedit.io",
    "myshopblocks.com",
    "shopitsite.com",
    "mo-siemens.io",
    "1kapp.com",
    "appchizi.com",
    "applinzi.com",
    "sinaapp.com",
    "vipsinaapp.com",
    "siteleaf.net",
    "bounty-full.com",
    "alpha.bounty-full.com",
    "beta.bounty-full.com",
    "stackhero-network.com",
    "static.land",
    "dev.static.land",
    "sites.static.land",
    "apps.lair.io",
    "*.stolos.io",
    "spacekit.io",
    "customer.speedpartner.de",
    "api.stdlib.com",
    "storj.farm",
    "utwente.io",
    "soc.srcf.net",
    "user.srcf.net",
    "temp-dns.com",
    "applicationcloud.io",
    "scapp.io",
    "*.s5y.io",
    "*.sensiosite.cloud",
    "syncloud.it",
    "diskstation.me",
    "dscloud.biz",
    "dscloud.me",
    "dscloud.mobi",
    "dsmynas.com",
    "dsmynas.net",
    "dsmynas.org",
    "familyds.com",
    "familyds.net",
    "familyds.org",
    "i234.me",
    "myds.me",
    "synology.me",
    "vpnplus.to",
    "direct.quickconnect.to",
    "taifun-dns.de",
    "gda.pl",
    "gdansk.pl",
    "gdynia.pl",
    "med.pl",
    "sopot.pl",
    "edugit.org",
    "telebit.app",
    "telebit.io",
    "*.telebit.xyz",
    "gwiddle.co.uk",
    "thingdustdata.com",
    "cust.dev.thingdust.io",
    "cust.disrec.thingdust.io",
    "cust.prod.thingdust.io",
    "cust.testing.thingdust.io",
    "arvo.network",
    "azimuth.network",
    "bloxcms.com",
    "townnews-staging.com",
    "12hp.at",
    "2ix.at",
    "4lima.at",
    "lima-city.at",
    "12hp.ch",
    "2ix.ch",
    "4lima.ch",
    "lima-city.ch",
    "trafficplex.cloud",
    "de.cool",
    "12hp.de",
    "2ix.de",
    "4lima.de",
    "lima-city.de",
    "1337.pictures",
    "clan.rip",
    "lima-city.rocks",
    "webspace.rocks",
    "lima.zone",
    "*.transurl.be",
    "*.transurl.eu",
    "*.transurl.nl",
    "tuxfamily.org",
    "dd-dns.de",
    "diskstation.eu",
    "diskstation.org",
    "dray-dns.de",
    "draydns.de",
    "dyn-vpn.de",
    "dynvpn.de",
    "mein-vigor.de",
    "my-vigor.de",
    "my-wan.de",
    "syno-ds.de",
    "synology-diskstation.de",
    "synology-ds.de",
    "uber.space",
    "*.uberspace.de",
    "hk.com",
    "hk.org",
    "ltd.hk",
    "inc.hk",
    "virtualuser.de",
    "virtual-user.de",
    "urown.cloud",
    "dnsupdate.info",
    "lib.de.us",
    "2038.io",
    "router.management",
    "v-info.info",
    "voorloper.cloud",
    "v.ua",
    "wafflecell.com",
    "*.webhare.dev",
    "wedeploy.io",
    "wedeploy.me",
    "wedeploy.sh",
    "remotewd.com",
    "wmflabs.org",
    "myforum.community",
    "community-pro.de",
    "diskussionsbereich.de",
    "community-pro.net",
    "meinforum.net",
    "half.host",
    "xnbay.com",
    "u2.xnbay.com",
    "u2-local.xnbay.com",
    "cistron.nl",
    "demon.nl",
    "xs4all.space",
    "yandexcloud.net",
    "storage.yandexcloud.net",
    "website.yandexcloud.net",
    "official.academy",
    "yolasite.com",
    "ybo.faith",
    "yombo.me",
    "homelink.one",
    "ybo.party",
    "ybo.review",
    "ybo.science",
    "ybo.trade",
    "nohost.me",
    "noho.st",
    "za.net",
    "za.org",
    "now.sh",
    "bss.design",
    "basicserver.io",
    "virtualserver.io",
    "enterprisecloud.nu"
    ]
    },{}],2:[function(require,module,exports){
    /*eslint no-var:0, prefer-arrow-callback: 0, object-shorthand: 0 */
    'use strict';
    
    
    var Punycode = require('punycode');
    
    
    var internals = {};
    
    
    //
    // Read rules from file.
    //
    internals.rules = require('./data/rules.json').map(function (rule) {
    
      return {
        rule: rule,
        suffix: rule.replace(/^(\*\.|\!)/, ''),
        punySuffix: -1,
        wildcard: rule.charAt(0) === '*',
        exception: rule.charAt(0) === '!'
      };
    });
    
    
    //
    // Check is given string ends with `suffix`.
    //
    internals.endsWith = function (str, suffix) {
    
      return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };
    
    
    //
    // Find rule for a given domain.
    //
    internals.findRule = function (domain) {
    
      var punyDomain = Punycode.toASCII(domain);
      return internals.rules.reduce(function (memo, rule) {
    
        if (rule.punySuffix === -1){
          rule.punySuffix = Punycode.toASCII(rule.suffix);
        }
        if (!internals.endsWith(punyDomain, '.' + rule.punySuffix) && punyDomain !== rule.punySuffix) {
          return memo;
        }
        // This has been commented out as it never seems to run. This is because
        // sub tlds always appear after their parents and we never find a shorter
        // match.
        //if (memo) {
        //  var memoSuffix = Punycode.toASCII(memo.suffix);
        //  if (memoSuffix.length >= punySuffix.length) {
        //    return memo;
        //  }
        //}
        return rule;
      }, null);
    };
    
    
    //
    // Error codes and messages.
    //
    exports.errorCodes = {
      DOMAIN_TOO_SHORT: 'Domain name too short.',
      DOMAIN_TOO_LONG: 'Domain name too long. It should be no more than 255 chars.',
      LABEL_STARTS_WITH_DASH: 'Domain name label can not start with a dash.',
      LABEL_ENDS_WITH_DASH: 'Domain name label can not end with a dash.',
      LABEL_TOO_LONG: 'Domain name label should be at most 63 chars long.',
      LABEL_TOO_SHORT: 'Domain name label should be at least 1 character long.',
      LABEL_INVALID_CHARS: 'Domain name label can only contain alphanumeric characters or dashes.'
    };
    
    
    //
    // Validate domain name and throw if not valid.
    //
    // From wikipedia:
    //
    // Hostnames are composed of series of labels concatenated with dots, as are all
    // domain names. Each label must be between 1 and 63 characters long, and the
    // entire hostname (including the delimiting dots) has a maximum of 255 chars.
    //
    // Allowed chars:
    //
    // * `a-z`
    // * `0-9`
    // * `-` but not as a starting or ending character
    // * `.` as a separator for the textual portions of a domain name
    //
    // * http://en.wikipedia.org/wiki/Domain_name
    // * http://en.wikipedia.org/wiki/Hostname
    //
    internals.validate = function (input) {
    
      // Before we can validate we need to take care of IDNs with unicode chars.
      var ascii = Punycode.toASCII(input);
    
      if (ascii.length < 1) {
        return 'DOMAIN_TOO_SHORT';
      }
      if (ascii.length > 255) {
        return 'DOMAIN_TOO_LONG';
      }
    
      // Check each part's length and allowed chars.
      var labels = ascii.split('.');
      var label;
    
      for (var i = 0; i < labels.length; ++i) {
        label = labels[i];
        if (!label.length) {
          return 'LABEL_TOO_SHORT';
        }
        if (label.length > 63) {
          return 'LABEL_TOO_LONG';
        }
        if (label.charAt(0) === '-') {
          return 'LABEL_STARTS_WITH_DASH';
        }
        if (label.charAt(label.length - 1) === '-') {
          return 'LABEL_ENDS_WITH_DASH';
        }
        if (!/^[a-z0-9\-]+$/.test(label)) {
          return 'LABEL_INVALID_CHARS';
        }
      }
    };
    
    
    //
    // Public API
    //
    
    
    //
    // Parse domain.
    //
    exports.parse = function (input) {
    
      if (typeof input !== 'string') {
        throw new TypeError('Domain name must be a string.');
      }
    
      // Force domain to lowercase.
      var domain = input.slice(0).toLowerCase();
    
      // Handle FQDN.
      // TODO: Simply remove trailing dot?
      if (domain.charAt(domain.length - 1) === '.') {
        domain = domain.slice(0, domain.length - 1);
      }
    
      // Validate and sanitise input.
      var error = internals.validate(domain);
      if (error) {
        return {
          input: input,
          error: {
            message: exports.errorCodes[error],
            code: error
          }
        };
      }
    
      var parsed = {
        input: input,
        tld: null,
        sld: null,
        domain: null,
        subdomain: null,
        listed: false
      };
    
      var domainParts = domain.split('.');
    
      // Non-Internet TLD
      if (domainParts[domainParts.length - 1] === 'local') {
        return parsed;
      }
    
      var handlePunycode = function () {
    
        if (!/xn--/.test(domain)) {
          return parsed;
        }
        if (parsed.domain) {
          parsed.domain = Punycode.toASCII(parsed.domain);
        }
        if (parsed.subdomain) {
          parsed.subdomain = Punycode.toASCII(parsed.subdomain);
        }
        return parsed;
      };
    
      var rule = internals.findRule(domain);
    
      // Unlisted tld.
      if (!rule) {
        if (domainParts.length < 2) {
          return parsed;
        }
        parsed.tld = domainParts.pop();
        parsed.sld = domainParts.pop();
        parsed.domain = [parsed.sld, parsed.tld].join('.');
        if (domainParts.length) {
          parsed.subdomain = domainParts.pop();
        }
        return handlePunycode();
      }
    
      // At this point we know the public suffix is listed.
      parsed.listed = true;
    
      var tldParts = rule.suffix.split('.');
      var privateParts = domainParts.slice(0, domainParts.length - tldParts.length);
    
      if (rule.exception) {
        privateParts.push(tldParts.shift());
      }
    
      parsed.tld = tldParts.join('.');
    
      if (!privateParts.length) {
        return handlePunycode();
      }
    
      if (rule.wildcard) {
        tldParts.unshift(privateParts.pop());
        parsed.tld = tldParts.join('.');
      }
    
      if (!privateParts.length) {
        return handlePunycode();
      }
    
      parsed.sld = privateParts.pop();
      parsed.domain = [parsed.sld,  parsed.tld].join('.');
    
      if (privateParts.length) {
        parsed.subdomain = privateParts.join('.');
      }
    
      return handlePunycode();
    };
    
    
    //
    // Get domain.
    //
    exports.get = function (domain) {
    
      if (!domain) {
        return null;
      }
      return exports.parse(domain).domain || null;
    };
    
    
    //
    // Check whether domain belongs to a known public suffix.
    //
    exports.isValid = function (domain) {
    
      var parsed = exports.parse(domain);
      return Boolean(parsed.domain && parsed.listed);
    };
    
    },{"./data/rules.json":1,"punycode":3}],3:[function(require,module,exports){
    (function (global){
    /*! https://mths.be/punycode v1.4.1 by @mathias */
    ;(function(root) {
    
        /** Detect free variables */
        var freeExports = typeof exports == 'object' && exports &&
            !exports.nodeType && exports;
        var freeModule = typeof module == 'object' && module &&
            !module.nodeType && module;
        var freeGlobal = typeof global == 'object' && global;
        if (
            freeGlobal.global === freeGlobal ||
            freeGlobal.window === freeGlobal ||
            freeGlobal.self === freeGlobal
        ) {
            root = freeGlobal;
        }
    
        /**
         * The `punycode` object.
         * @name punycode
         * @type Object
         */
        var punycode,
    
        /** Highest positive signed 32-bit float value */
        maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1
    
        /** Bootstring parameters */
        base = 36,
        tMin = 1,
        tMax = 26,
        skew = 38,
        damp = 700,
        initialBias = 72,
        initialN = 128, // 0x80
        delimiter = '-', // '\x2D'
    
        /** Regular expressions */
        regexPunycode = /^xn--/,
        regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
        regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators
    
        /** Error messages */
        errors = {
            'overflow': 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input'
        },
    
        /** Convenience shortcuts */
        baseMinusTMin = base - tMin,
        floor = Math.floor,
        stringFromCharCode = String.fromCharCode,
    
        /** Temporary variable */
        key;
    
        /*--------------------------------------------------------------------------*/
    
        /**
         * A generic error utility function.
         * @private
         * @param {String} type The error type.
         * @returns {Error} Throws a `RangeError` with the applicable error message.
         */
        function error(type) {
            throw new RangeError(errors[type]);
        }
    
        /**
         * A generic `Array#map` utility function.
         * @private
         * @param {Array} array The array to iterate over.
         * @param {Function} callback The function that gets called for every array
         * item.
         * @returns {Array} A new array of values returned by the callback function.
         */
        function map(array, fn) {
            var length = array.length;
            var result = [];
            while (length--) {
                result[length] = fn(array[length]);
            }
            return result;
        }
    
        /**
         * A simple `Array#map`-like wrapper to work with domain name strings or email
         * addresses.
         * @private
         * @param {String} domain The domain name or email address.
         * @param {Function} callback The function that gets called for every
         * character.
         * @returns {Array} A new string of characters returned by the callback
         * function.
         */
        function mapDomain(string, fn) {
            var parts = string.split('@');
            var result = '';
            if (parts.length > 1) {
                // In email addresses, only the domain name should be punycoded. Leave
                // the local part (i.e. everything up to `@`) intact.
                result = parts[0] + '@';
                string = parts[1];
            }
            // Avoid `split(regex)` for IE8 compatibility. See #17.
            string = string.replace(regexSeparators, '\x2E');
            var labels = string.split('.');
            var encoded = map(labels, fn).join('.');
            return result + encoded;
        }
    
        /**
         * Creates an array containing the numeric code points of each Unicode
         * character in the string. While JavaScript uses UCS-2 internally,
         * this function will convert a pair of surrogate halves (each of which
         * UCS-2 exposes as separate characters) into a single code point,
         * matching UTF-16.
         * @see `punycode.ucs2.encode`
         * @see <https://mathiasbynens.be/notes/javascript-encoding>
         * @memberOf punycode.ucs2
         * @name decode
         * @param {String} string The Unicode input string (UCS-2).
         * @returns {Array} The new array of code points.
         */
        function ucs2decode(string) {
            var output = [],
                counter = 0,
                length = string.length,
                value,
                extra;
            while (counter < length) {
                value = string.charCodeAt(counter++);
                if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                    // high surrogate, and there is a next character
                    extra = string.charCodeAt(counter++);
                    if ((extra & 0xFC00) == 0xDC00) { // low surrogate
                        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                    } else {
                        // unmatched surrogate; only append this code unit, in case the next
                        // code unit is the high surrogate of a surrogate pair
                        output.push(value);
                        counter--;
                    }
                } else {
                    output.push(value);
                }
            }
            return output;
        }
    
        /**
         * Creates a string based on an array of numeric code points.
         * @see `punycode.ucs2.decode`
         * @memberOf punycode.ucs2
         * @name encode
         * @param {Array} codePoints The array of numeric code points.
         * @returns {String} The new Unicode string (UCS-2).
         */
        function ucs2encode(array) {
            return map(array, function(value) {
                var output = '';
                if (value > 0xFFFF) {
                    value -= 0x10000;
                    output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                    value = 0xDC00 | value & 0x3FF;
                }
                output += stringFromCharCode(value);
                return output;
            }).join('');
        }
    
        /**
         * Converts a basic code point into a digit/integer.
         * @see `digitToBasic()`
         * @private
         * @param {Number} codePoint The basic numeric code point value.
         * @returns {Number} The numeric value of a basic code point (for use in
         * representing integers) in the range `0` to `base - 1`, or `base` if
         * the code point does not represent a value.
         */
        function basicToDigit(codePoint) {
            if (codePoint - 48 < 10) {
                return codePoint - 22;
            }
            if (codePoint - 65 < 26) {
                return codePoint - 65;
            }
            if (codePoint - 97 < 26) {
                return codePoint - 97;
            }
            return base;
        }
    
        /**
         * Converts a digit/integer into a basic code point.
         * @see `basicToDigit()`
         * @private
         * @param {Number} digit The numeric value of a basic code point.
         * @returns {Number} The basic code point whose value (when used for
         * representing integers) is `digit`, which needs to be in the range
         * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
         * used; else, the lowercase form is used. The behavior is undefined
         * if `flag` is non-zero and `digit` has no uppercase form.
         */
        function digitToBasic(digit, flag) {
            //  0..25 map to ASCII a..z or A..Z
            // 26..35 map to ASCII 0..9
            return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
        }
    
        /**
         * Bias adaptation function as per section 3.4 of RFC 3492.
         * https://tools.ietf.org/html/rfc3492#section-3.4
         * @private
         */
        function adapt(delta, numPoints, firstTime) {
            var k = 0;
            delta = firstTime ? floor(delta / damp) : delta >> 1;
            delta += floor(delta / numPoints);
            for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
                delta = floor(delta / baseMinusTMin);
            }
            return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
        }
    
        /**
         * Converts a Punycode string of ASCII-only symbols to a string of Unicode
         * symbols.
         * @memberOf punycode
         * @param {String} input The Punycode string of ASCII-only symbols.
         * @returns {String} The resulting string of Unicode symbols.
         */
        function decode(input) {
            // Don't use UCS-2
            var output = [],
                inputLength = input.length,
                out,
                i = 0,
                n = initialN,
                bias = initialBias,
                basic,
                j,
                index,
                oldi,
                w,
                k,
                digit,
                t,
                /** Cached calculation results */
                baseMinusT;
    
            // Handle the basic code points: let `basic` be the number of input code
            // points before the last delimiter, or `0` if there is none, then copy
            // the first basic code points to the output.
    
            basic = input.lastIndexOf(delimiter);
            if (basic < 0) {
                basic = 0;
            }
    
            for (j = 0; j < basic; ++j) {
                // if it's not a basic code point
                if (input.charCodeAt(j) >= 0x80) {
                    error('not-basic');
                }
                output.push(input.charCodeAt(j));
            }
    
            // Main decoding loop: start just after the last delimiter if any basic code
            // points were copied; start at the beginning otherwise.
    
            for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {
    
                // `index` is the index of the next character to be consumed.
                // Decode a generalized variable-length integer into `delta`,
                // which gets added to `i`. The overflow checking is easier
                // if we increase `i` as we go, then subtract off its starting
                // value at the end to obtain `delta`.
                for (oldi = i, w = 1, k = base; /* no condition */; k += base) {
    
                    if (index >= inputLength) {
                        error('invalid-input');
                    }
    
                    digit = basicToDigit(input.charCodeAt(index++));
    
                    if (digit >= base || digit > floor((maxInt - i) / w)) {
                        error('overflow');
                    }
    
                    i += digit * w;
                    t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
    
                    if (digit < t) {
                        break;
                    }
    
                    baseMinusT = base - t;
                    if (w > floor(maxInt / baseMinusT)) {
                        error('overflow');
                    }
    
                    w *= baseMinusT;
    
                }
    
                out = output.length + 1;
                bias = adapt(i - oldi, out, oldi == 0);
    
                // `i` was supposed to wrap around from `out` to `0`,
                // incrementing `n` each time, so we'll fix that now:
                if (floor(i / out) > maxInt - n) {
                    error('overflow');
                }
    
                n += floor(i / out);
                i %= out;
    
                // Insert `n` at position `i` of the output
                output.splice(i++, 0, n);
    
            }
    
            return ucs2encode(output);
        }
    
        /**
         * Converts a string of Unicode symbols (e.g. a domain name label) to a
         * Punycode string of ASCII-only symbols.
         * @memberOf punycode
         * @param {String} input The string of Unicode symbols.
         * @returns {String} The resulting Punycode string of ASCII-only symbols.
         */
        function encode(input) {
            var n,
                delta,
                handledCPCount,
                basicLength,
                bias,
                j,
                m,
                q,
                k,
                t,
                currentValue,
                output = [],
                /** `inputLength` will hold the number of code points in `input`. */
                inputLength,
                /** Cached calculation results */
                handledCPCountPlusOne,
                baseMinusT,
                qMinusT;
    
            // Convert the input in UCS-2 to Unicode
            input = ucs2decode(input);
    
            // Cache the length
            inputLength = input.length;
    
            // Initialize the state
            n = initialN;
            delta = 0;
            bias = initialBias;
    
            // Handle the basic code points
            for (j = 0; j < inputLength; ++j) {
                currentValue = input[j];
                if (currentValue < 0x80) {
                    output.push(stringFromCharCode(currentValue));
                }
            }
    
            handledCPCount = basicLength = output.length;
    
            // `handledCPCount` is the number of code points that have been handled;
            // `basicLength` is the number of basic code points.
    
            // Finish the basic string - if it is not empty - with a delimiter
            if (basicLength) {
                output.push(delimiter);
            }
    
            // Main encoding loop:
            while (handledCPCount < inputLength) {
    
                // All non-basic code points < n have been handled already. Find the next
                // larger one:
                for (m = maxInt, j = 0; j < inputLength; ++j) {
                    currentValue = input[j];
                    if (currentValue >= n && currentValue < m) {
                        m = currentValue;
                    }
                }
    
                // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
                // but guard against overflow
                handledCPCountPlusOne = handledCPCount + 1;
                if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                    error('overflow');
                }
    
                delta += (m - n) * handledCPCountPlusOne;
                n = m;
    
                for (j = 0; j < inputLength; ++j) {
                    currentValue = input[j];
    
                    if (currentValue < n && ++delta > maxInt) {
                        error('overflow');
                    }
    
                    if (currentValue == n) {
                        // Represent delta as a generalized variable-length integer
                        for (q = delta, k = base; /* no condition */; k += base) {
                            t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
                            if (q < t) {
                                break;
                            }
                            qMinusT = q - t;
                            baseMinusT = base - t;
                            output.push(
                                stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
                            );
                            q = floor(qMinusT / baseMinusT);
                        }
    
                        output.push(stringFromCharCode(digitToBasic(q, 0)));
                        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                        delta = 0;
                        ++handledCPCount;
                    }
                }
    
                ++delta;
                ++n;
    
            }
            return output.join('');
        }
    
        /**
         * Converts a Punycode string representing a domain name or an email address
         * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
         * it doesn't matter if you call it on a string that has already been
         * converted to Unicode.
         * @memberOf punycode
         * @param {String} input The Punycoded domain name or email address to
         * convert to Unicode.
         * @returns {String} The Unicode representation of the given Punycode
         * string.
         */
        function toUnicode(input) {
            return mapDomain(input, function(string) {
                return regexPunycode.test(string)
                    ? decode(string.slice(4).toLowerCase())
                    : string;
            });
        }
    
        /**
         * Converts a Unicode string representing a domain name or an email address to
         * Punycode. Only the non-ASCII parts of the domain name will be converted,
         * i.e. it doesn't matter if you call it with a domain that's already in
         * ASCII.
         * @memberOf punycode
         * @param {String} input The domain name or email address to convert, as a
         * Unicode string.
         * @returns {String} The Punycode representation of the given domain name or
         * email address.
         */
        function toASCII(input) {
            return mapDomain(input, function(string) {
                return regexNonASCII.test(string)
                    ? 'xn--' + encode(string)
                    : string;
            });
        }
    
        /*--------------------------------------------------------------------------*/
    
        /** Define the public API */
        punycode = {
            /**
             * A string representing the current Punycode.js version number.
             * @memberOf punycode
             * @type String
             */
            'version': '1.4.1',
            /**
             * An object of methods to convert from JavaScript's internal character
             * representation (UCS-2) to Unicode code points, and back.
             * @see <https://mathiasbynens.be/notes/javascript-encoding>
             * @memberOf punycode
             * @type Object
             */
            'ucs2': {
                'decode': ucs2decode,
                'encode': ucs2encode
            },
            'decode': decode,
            'encode': encode,
            'toASCII': toASCII,
            'toUnicode': toUnicode
        };
    
        /** Expose `punycode` */
        // Some AMD build optimizers, like r.js, check for specific condition patterns
        // like the following:
        if (
            typeof define == 'function' &&
            typeof define.amd == 'object' &&
            define.amd
        ) {
            define('punycode', function() {
                return punycode;
            });
        } else if (freeExports && freeModule) {
            if (module.exports == freeExports) {
                // in Node.js, io.js, or RingoJS v0.8.0+
                freeModule.exports = punycode;
            } else {
                // in Narwhal or RingoJS v0.7.0-
                for (key in punycode) {
                    punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
                }
            }
        } else {
            // in Rhino or a web browser
            root.punycode = punycode;
        }
    
    }(this));
    
    }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    },{}]},{},[2])(2)
    });
function detectIE() {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}
	return false;
}

var current_video=-1;
var functions_routes=[];

var help_active=0;
var current_route=-1;
var current_step=-1;
var current_hint=-1;
var max_step=-1;

window.intervals_highlight = [];
window.intervals_event = [];
window.intervals_tooltip = [];
window.intervals_trigger = [];
window.intervals_hint = [];

var mymetaorigin = window.location.origin.replace("https://","").replace("http://","");

if(	mymetaorigin.indexOf("sapsf.eu")!=-1 ||
	mymetaorigin.indexOf("sapsf.com")!=-1 ||
	mymetaorigin.indexOf("successfactors.eu")!=-1 ||
	mymetaorigin.indexOf("successfactors.com")!=-1) {
		if(jQueryCustom(".companyIDText").length){
			mymetaorigin = mymetaorigin + "." + jQueryCustom(".companyIDText").text();
		} else {
			try {
				mymetaorigin = mymetaorigin + "." + jQueryCustom("#globalCss").attr("href").split("/")[3];
			} catch (error) {
				console.log("User not logged-> ",error);
			}
		}
}

if(	mymetaorigin.indexOf("workday.com")!=-1) {
	try {
		mymetaorigin = mymetaorigin + "." + jQueryCustom(location).attr('pathname').toLowerCase().split("/")[1];
	} catch (error) {
		console.log("User not logged-> ",error);
	}
}

if(	mymetaorigin.indexOf("saas.hrzucchetti.it")!=-1) {
	try {
		mymetaorigin = mymetaorigin + "." + jQueryCustom(location).attr('pathname').toLowerCase().split("/")[1];
	} catch (error) {
		console.log("User not logged-> ",error);
	}
}

if(mymetaorigin.indexOf(".plateau.com")!=-1||mymetaorigin.indexOf("saas.hrzucchetti.it")!=-1) {
	window.isPlateau = true;
}

if(mymetaorigin.indexOf(".concursolutions.com") != -1) {
	var companyID = "nocompany";
	var concur_init = document.getElementById("__initialState");
	if(concur_init){
		var concur_init_obj = JSON.parse(concur_init.innerText);
		if(concur_init_obj.userProfile){
			companyID = concur_init_obj.userProfile.profile.CompanyUUID;
		} else if(concur_init_obj.employee) {
			companyID = concur_init_obj.employee.companyUUID;
		} else if(concur_init_obj.user) {
			companyID = concur_init_obj.user.companyUUID;
		}  else if(concur_init_obj.userPrefs) {
			companyID = concur_init_obj.userPrefs.companyUUID;
		}
	} else {
		var inners = [];
		var scripts = document.querySelectorAll('script[type="text/javascript"]');
		for(var i = 0; i<scripts.length; i++) {
			inners.push(scripts[i].innerText);
		}
		companyID = inners.filter(function(item){return eval('/companyUUID/').test(item)})[0].split("CNQR.companyUUID = ")[1].split(";")[0].replace(/'/g,"").replace(/"/g,"");
	}
	mymetaorigin = mymetaorigin + "." + companyID;
}

if(!window.my_meta_was_started && window.location.href.indexOf("/loginnothing")==-1) {
	window.my_meta_was_started = true;
	if(typeof(i_am_console)!='undefined') {
		jQueryCustom.get( window.mymeta_base_url + "/api2/domains/"+mymetaorigin, function( username ) {
			if(username[0]) {
				window.mymeta_user = username[0];
				init_from_console();
			} else {
				console.log("myMeta Console - domain not found.");
			}
		});
	} else {
		jQueryCustom.get( window.mymeta_storage_url + "/export/"+window.mymeta_MD5(mymetaorigin)+".json", function( data_routes ) {
			window.routes=data_routes.routes;
			window.mymeta_config=data_routes.config;
			window.z_custom=data_routes.z_custom;
			window.hints = data_routes.hints;
			window.triggers = data_routes.triggers;
			window.other_languages=data_routes.other_languages;
			init();
		});
	
	}
}

window.init_from_console = function () {
	jQueryCustom.get(window.mymeta_base_url + "/api2/users/"+mymeta_user, function( user ) {
		window.routes=user[0].routes;
		window.mymeta_config=user[0].config;
		window.z_custom=user[0].z_custom;
		window.domains=user[0].domains;
		window.other_languages=user[0].other_languages;
		window.mymeta_authorized = user[0].authorized;
		window.mymeta_version = user[0].version;
		window.hints = user[0].hints;
		window.triggers = user[0].triggers;

		if(typeof(config)=="undefined"){
			config = {};
		}

		if(typeof(z_custom)=="undefined"){
			z_custom = "";
		}
		init();
	});
}

/*if(detectIE()){
	if(!window.my_meta_was_started&&window.location.href.indexOf("/calendar")==-1) {
		window.my_meta_was_started = true;
		//jQueryCustom.get( "https://s3.eu-central-1.amazonaws.com/it.allos.mymeta/"+mymeta_user+"/export/routes.json", function( data_routes ) {
		jQueryCustom.get( window.mymeta_base_url + "/api2/users/"+mymeta_user, function( user ) {
			window.routes=user[0].routes;
			//window.routes=data_routes;
			init();
		});
	}
}
else{
	window.onload = function ()
	{
		//jQueryCustom.get( "https://s3.eu-central-1.amazonaws.com/it.allos.mymeta/"+mymeta_user+"/export/routes.json", function( data_routes ) {
		jQueryCustom.get( window.mymeta_base_url + "/api2/users/"+mymeta_user, function( user ) {
			window.routes=user[0].routes;
			window.config=user[0].config;
			window.z_custom=user[0].z_custom;
			//window.routes=data_routes;
			if(typeof(config)=="undefined"){
				config = {};
			}
	
			if(typeof(z_custom)=="undefined"){
				z_custom = "";
			}
			init();
		});
	}
}
*/
window.init = function ()
{
	if(window.isPlateau && window.findMyMetaActiveWindow(window.mymeta_config.activeWindowLevel) != window) {
		jQueryCustom("body").addClass("myMetaHidden");
	}

	if(typeof(window.mymeta_config.generalPolling)=="number"){
		window.MMgeneralPolling = window.mymeta_config.generalPolling+0;
	} else {
		window.MMgeneralPolling = 500;
	}

	init_css();
	init_languages();
	init_videos();
	init_close();
	init_change();
	init_menu();
	init_cookies();
	if(typeof(i_am_console)!='undefined') {
		init_documentation();
	}
	init_triggers();
	init_hints();
}

window.init_triggers = function () {
	if(!jQueryCustom("body[mymeta-route]").length){
		jQueryCustom.each(triggers, function (index_trigger, trigger) {
			var url = trigger.url? trigger.url : "";
			if(window.location.href.indexOf(url)!=-1){
				jQueryCustom().triggers(index_trigger,true);
			}
		});
	}
}

window.init_hints = function () {
	if(1){
		jQueryCustom.each(hints, function (index_hint, hint) {
			var url = hint.url? hint.url : "";
			if(window.location.href.indexOf(url)!=-1){
				if(hint.type=="normal"){
					jQueryCustom().hint(index_hint,true);
				} else if(hint.type=="classes"){
					jQueryCustom().classes(index_hint,true);
				} else {
					jQueryCustom().action(index_hint,true);
				}
			}
		});
	}
}

window.init_css = function () {
	var node = document.createElement('style');
	var highlightClass = mymeta_config.highlight_class;
	if(typeof(highlightClass)!="string") {
		highlightClass = "highlight";
	}
	node.innerHTML = "." + highlightClass + "{border:3px solid transparent!important;transition: border 150ms ease-in;transition: all 500ms ease-in-out!important;}\n";
	node.innerHTML += "." + highlightClass + ".red-border{border:3px solid #4fb8ab!important;}\n";
	node.innerHTML += "." + highlightClass + ":hover{border:3px solid #519899!important;}\n";
	node.innerHTML += "div[class*='tooltip_']:not(.tooltip_container):not(.tooltip_close):not(.tooltip_text) button." + highlightClass + ",#tooltip_preview button." + highlightClass + ",#popUpChange button." + highlightClass + ", #popUpEnd button." + highlightClass + ", #popUpVideo button." + highlightClass + ", #welcome_tooltip button." + highlightClass + " {border:3px solid #4fb8ab!important;}";
	node.innerHTML += "div[class*='tooltip_']:not(.tooltip_container):not(.tooltip_close):not(.tooltip_text) button." + highlightClass + ".red-border,#tooltip_preview button." + highlightClass + ".red-border,#popUpChange button." + highlightClass + ".red-border, #popUpEnd button." + highlightClass + ".red-border, #popUpVideo button." + highlightClass + ".red-border, #welcome_tooltip button." + highlightClass + " {border:3px solid #519899!important;}";
	if(typeof(i_am_console)!='undefined') {
		node.innerHTML += "body.photo_session[mymeta-route]:not(.myMetaConsole).cheese ." + highlightClass + ",body.photo_session[mymeta-route]:not(.myMetaConsole).cheese ." + highlightClass + ".red-border {border:3px solid #4fb8ab!important;transition: none;}";
	};
	node.innerHTML += z_custom;
	document.body.appendChild(node);
}


window.init_languages = function () {
	var index, value, result;
	if(typeof(other_languages)=="array" || typeof(other_languages)=="object"){
		for (index = 0; index < other_languages.length; index++) {
			value = other_languages[index];
			if (value.indexOf(jQueryCustom("html").attr("lang")) != -1) {
				actual_language = other_languages[index];
				break;
			}
		}
	}
}

window.init_menu = function ()
{
	var url = window.location.href;
	var menu='<div id="menu_mymeta" class="tool_click"><div id="menu_button"><div class="pin"></div><div class="m"></div></div><div class="container"></div>';
	//var menu='<div id="menu_mymeta" class="tool_click"><div id="menu_button"><div class="pin"></div><div class="m_v3 svginject"><img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/base_m_green.svg"></div></div><div class="container"></div>';
	jQueryCustom("body").prepend(menu);

	jQueryCustom("#menu_mymeta>.container").append('<div id="notifications"><div title="'+window.getTranslatedText(window.mymeta_config, 'alt_notification')+'" class="tab_button" tab="notifications"><img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/menu_notifications.svg"></div><div class="menu_container" style="position: absolute; overflow: hidden; width: 360px; height: 400px; top: 15px"><div class="menu_scroll" id="notifications_scroll"></div></div></div>');
	jQueryCustom("#menu_mymeta>.container").append('<div id="video"><div title="'+window.getTranslatedText(window.mymeta_config, 'alt_tutorial')+'" class="tab_button" tab="video"><img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/menu_video.svg"></div><div class="menu_container" style="position: absolute; overflow: hidden; width: 360px; height: 400px; top: 15px"><div class="menu_scroll" id="video_scroll"></div></div></div>');
	jQueryCustom("#menu_mymeta>.container").append('<div id="paths" class="tab_open"><div title="'+window.getTranslatedText(window.mymeta_config, 'alt_path')+'" class="tab_button" tab="paths"><img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/menu_paths.svg"></div><div class="menu_container" style="position: absolute; overflow: hidden; width: 360px; height: 400px; top: 15px"><div class="menu_scroll" id="path_scroll"></div></div></div>');

	polling_routes();

	var lista="";
	if(videos.length){
		lista+='<h3>' + window.getTranslatedText(window.mymeta_config, 'alt_tutorial') + '</h3><hr>';
		jQueryCustom.each(videos, function (index_video, video) {
			lista+="<div id='video_"+index_video+"' class='tool_click video'>";
			lista+='<div class="image">';
			lista+='<img src="'+video.thumb+'">';
			lista+='</div>';
			lista+='<div class="text">';
			lista+='<span class="title">'+video.title+"</span>";
			lista+='<span class="subtitle">'+video.subtitle+"</span>";
			lista+='</div>';
			lista+="</div>";
			lista+='<hr>';
		});
		jQueryCustom('#video_scroll').append(lista);
		jQueryCustom.each(videos, function (index_video, video) {
			jQueryCustom("#video_"+index_video).click(function() {
				window.video(video.vimeo,video.title,video.subtitle);
				jQueryCustom("#menu_mymeta").toggleClass("open");
			});
		});
	} else {
		jQueryCustom('#video_scroll').html("<p>"+window.getTranslatedText(window.mymeta_config, 'tutorials_not_avaible')+"</p>");
	}

	setTimeout(function(){
		jQueryCustom("#menu_button").click(function(e) {
			Cookies.set("mymeta_welcome_showed",true,{expires:365, domain: getMyMetaLocationHostName(location.hostname)});
			jQueryCustom("#menu_button").removeClass("blinking");
			jQueryCustom('#welcome_tooltip').remove();
			jQueryCustom("#menu_mymeta").toggleClass("open");
		});

		jQueryCustom(".tab_button").click(function(e) {
			jQueryCustom("#paths,#video,#notifications").removeClass("tab_open");
			jQueryCustom("#"+jQueryCustom(this).attr("tab")).addClass("tab_open");
		});

	}, 450);
	
	jQueryCustom('.menu_scroll').slimScroll({
		width: '360px',
        height: '420px',
        start: 'top',
        color: '#000',
        railVisible: false,
        alwaysVisible: false,
        size: '5px',
        color: '#456275',
        railOpacity: 0,
        wheelStep: 10,
        allowPageScroll: false,
        disableFadeOut: false
    });
	if(Cookies.get("mymeta_welcome_showed")!="true" && Cookies.get("welcome_showed")!="true") {
		var index_welcome;
		index_welcome = from_label_to_index_route("welcome");
		if(typeof(index_welcome)!='undefined'){
			window.route(index_welcome,0,true);
			Cookies.set("mymeta_welcome_showed",true,{expires:365, domain: getMyMetaLocationHostName(location.hostname)});
		} else {
			init_welcome();
		}
	}
}

window.polling_routes = function () {
	var lista="";
	if(routes.length){
		lista+='<h3>'+window.getTranslatedText(window.mymeta_config, 'alt_path')+'</h3><hr>';
		jQueryCustom.each(routes, function (index_route, route) {
			var hide = "";
			route.hide_desktop ? hide += " hide_desktop" : null;
			route.hide_mobile ? hide += " hide_mobile" : null;
			lista+="<div id='route_"+index_route+"' class='tool_click path"+hide+"'>";
			lista+='<span class="title">'+window.getTranslatedText(route, 'title')+"</span>";
			lista+='<span class="subtitle">'+window.getTranslatedText(route, 'subtitle')+'</span>';
			lista+='<span class="play tool_click" id="play' + index_route + '"><img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/play-solid.svg" alt="Avvia" /></span>';
			lista+='<span class="counter">'+route.steps.length+"</span>";
			lista+='<div class="route_expanded" id="route_expanded' + index_route + '">';
			lista+='<div id="route_vertical_container' + index_route + '" class="route_vertical_container"></div>';
			if(route.vimeo_link){
				lista+='<div id="route_video_container' + index_route + '" class="route_video_container"></div>';
			}
			if(route.pdf_link){
				lista+='<div id="route_pdf_container' + index_route + '" class="route_video_container"></div>';
			}
			
			lista+="</div>";
			lista+="</div>";
			lista+='<hr class="'+hide+'">';
		});
		jQueryCustom('#path_scroll').html(lista);

		var opened_menu_index = -1;
		
		jQueryCustom.each(routes, function (index_route, route) {			
			jQueryCustom(routes[index_route]["steps"]).each(function(index_step,step) {
				var round_class = "myMeta_round",
					container_class = "tool_click round_container";
				
				if(index_step === 3) {
					jQueryCustom("#route_vertical_container" + index_route).append("<div class='tool_click round_container' id='round_container" + index_route + "_more'>" + 
							"<div id='expanded_step_name" + index_route + "_more' class='more'></div>" +
							"<div id='expended_step_name"+ index_route+"_more_arrow' class='more_arrow'>" +
							"<img src='https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/chevron-down-solid.svg' />" +
							"</div></div>" +
							"<div id='expanded_step_name" + index_route + "_more_content'></div>" +
							"</div>");
				}

				var content = "<div class='" + container_class + "' id='round_container" + index_route + "_" + index_step + "'>" + 
					"<div class='"+round_class+"' id='expanded_round"+ index_route + "_" + index_step +"' />" +
					"<div class='expanded_step_name_container' id='expanded_step_name_container" + index_route + "_" + index_step + "'>" +
					"<div id='expanded_step_num" + index_route + "_" + index_step + "' class='myMeta_round_num tool_click'>" + (index_step+1) + ". </div>" +
					"<div id='expanded_step_name" + index_route + "_" + index_step + "' class='myMeta_round_title tool_click'>" + window.getTranslatedText(step.tooltip, 'text') + "</div></div>" +
					"</div>";
				if(index_step < 3) {
					if(step.event.type!="automatic"){
						jQueryCustom("#route_vertical_container" + index_route).append(content);
					}
				} else {
					if(step.event.type!="automatic"){
						jQueryCustom("#expanded_step_name" + index_route + "_more_content").append(content);
					}
				}
				
				jQueryCustom("#expanded_step_name_container" + index_route + "_" + index_step).mouseover(function() {
					jQueryCustom().preview(index_route,index_step,true);
				}).mouseout(function() {
					jQueryCustom().preview(index_route,index_step,false);
				}).click(function() {
					if(jQueryCustom(".preview").length){
						window.route(index_route, index_step,true);
					} else {
						window.route(index_route, 0);
					}
					jQueryCustom("#menu_mymeta").toggleClass("open");
				});
			});
			jQueryCustom("#expanded_step_name" + index_route + "_more_content").append(
					"<div class='tool_click round_container' id='round_container" + index_route + "_less'>" + 
					"<div id='expended_step_name"+ index_route+"_less_arrow' class='less_arrow'>" +
					"<img src='https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/chevron-up-solid.svg' />" +
					"</div></div>" +
					"</div>").hide();
			
			jQueryCustom("#round_container" + index_route + "_more,#round_container" + index_route + "_less").click(function(event) {
				if(jQueryCustom("#round_container" + index_route + "_more").is(":visible")) {
					jQueryCustom("#round_container" + index_route + "_more").slideUp(function() {
						jQueryCustom("#expanded_step_name" + index_route + "_more_content").slideDown();
					});
				} else {
					jQueryCustom("#expanded_step_name" + index_route + "_more_content").slideUp(function() {
						jQueryCustom("#round_container" + index_route + "_more").slideDown();
					});
				}
				event.stopImmediatePropagation();
			});
			
			var lista = "";
			if(route.vimeo_link) {
				lista+="<div id='video_route_" + index_route + "' class='tool_click video'>";
				lista+='<div class="image">';
				lista+='<img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/edu.svg">';
				lista+='</div>';
				lista+='<div class="text">';
				lista+='<span class="video_title">'+route.vimeo_title+"</span>";
				lista+='<span class="video_subtitle">'+route.vimeo_subtitle+"</span>";
				lista+='</div>';
				lista+="</div>";
				jQueryCustom('#route_video_container' + index_route).append(lista);
			}
				

			lista = "";
			if(route.pdf_link) {
				lista+="<div id='pdf_route_" + index_route + "' class='tool_click video'>";
				lista+='<div class="image">';
				lista+='<img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/pdf.svg">';
				lista+='</div>';
				lista+='<div class="text">';
				lista+='<span class="video_title">'+route.pdf_title+"</span>";
				lista+='<span class="video_subtitle">'+route.pdf_subtitle+"</span>";
				lista+='</div>';
				lista+="</div>";
				jQueryCustom('#route_pdf_container' + index_route).append(lista);
			}
				
			jQueryCustom("#video_route_"+index_route).click(function() {
				window.video(route.vimeo_link,route.vimeo_title,route.vimeo_subtitle);
				jQueryCustom("#menu_mymeta").toggleClass("open");
			});

			jQueryCustom("#pdf_route_"+index_route).click(function() {
				window.open(route.pdf_link,"_blank");
			});
			
			jQueryCustom("#route_expanded"+index_route).hide();
			jQueryCustom("#route_"+index_route).click(function() {
				if(opened_menu_index === index_route) {
					jQueryCustom("#route_expanded"+index_route).slideUp();
					opened_menu_index = -1;
				} else {
					if(opened_menu_index !== -1) {
						jQueryCustom("#route_expanded"+opened_menu_index).slideUp();
					}
					opened_menu_index = index_route;
					jQueryCustom("#route_expanded"+opened_menu_index).slideDown();
				}
			});
			
			jQueryCustom("#play"+index_route).click(function(evt) {
				window.route(index_route);
				if(opened_menu_index !== -1) {
					jQueryCustom("#route_expanded"+opened_menu_index).slideUp();
				}
				opened_menu_index = -1;
				jQueryCustom("#menu_mymeta").toggleClass("open");
				evt.stopImmediatePropagation();
			});
			
		});
	} else {
		jQueryCustom('#path_scroll').html("<p>"+window.getTranslatedText(window.mymeta_config, 'paths_not_avaible')+"</p>");
	}
	if(typeof(i_am_console)!='undefined'){init_console_my_meta()};
}

window.init_welcome = function ()
{
	jQueryCustom("#menu_button").addClass("blinking");
	var welcome='<div id="welcome_tooltip" class="tooltip right animated fadeInLeft"><div class="tooltip_container">'+window.getTranslatedText(window.mymeta_config, 'welcome_mymeta')+'</div></div>';
	jQueryCustom("body").prepend(welcome);
}


window.goToStep = function(new_route,new_step,avoid_close) {
	if(isNaN(new_route)){
		new_route = from_label_to_index_route(new_route);
	} else {
		new_route = parseInt(new_route);
	}

	if(isNaN(new_step)){
		new_step = from_label_to_index_step(new_step, new_route);
	} else {
		new_step = parseInt(new_step);
	}

	if(new_step<routes[new_route]["steps"].length) {
		var index_route=Cookies.get('mymeta_current_route');
		var index_step=Cookies.get('mymeta_current_step');
		if(!avoid_close){
			jQueryCustom().tooltips(index_route,index_step,false);
			jQueryCustom().highlights(index_route,index_step,false);
			jQueryCustom().events(index_route,index_step,false);
			jQueryCustom("#unexpected_click").addClass("ok");
			jQueryCustom("#sticker").addClass("ok");
			jQueryCustom("#detached_sticker").addClass("ok");
		}
		set_globals(1,new_route,new_step);
		jQueryCustom().guide(new_route,new_step);
	}
	else {
		jQueryCustom().tooltips(new_route,routes[new_route]["steps"].length-1,false);
		jQueryCustom().highlights(new_route,routes[new_route]["steps"].length-1,false);
		jQueryCustom().events(new_route,routes[new_route]["steps"].length-1,false);
		jQueryCustom('#route_title').html(window.getTranslatedText(routes[new_route], 'title'));
		set_globals(0,-1,-1);
		jQueryCustom("#sticker").remove();
		jQueryCustom("#detached_sticker").remove();
		if(!routes[new_route].hide_popup_complete)
			jQueryCustom('#popUpEnd').show();

		// If in documentation mode, reset it
		if(typeof(disableDocumentationMode) == 'function')
			disableDocumentationMode(true);
	}
}

window.from_label_to_index_route = function (label) {
	for(var i=0;i<routes.length;i++){
		if(routes[i].label==label){
			return i;
		}
	}
}

window.from_label_to_index_step = function (label, new_route) {
	for(var i=0;i<routes[new_route].steps.length;i++){
		if(routes[new_route].steps[i].label==label){
			return i;
		}
	}
}

window.init_cookies = function ()
{
	if(Cookies.get('mymeta_help_active')){help_active=parseInt(Cookies.get('mymeta_help_active'))};
	if(Cookies.get('mymeta_current_route')){current_route=parseInt(Cookies.get('mymeta_current_route'))};
	if(Cookies.get('mymeta_current_step')){current_step=parseInt(Cookies.get('mymeta_current_step'))};
	if(Cookies.get('mymeta_max_step')){max_step=parseInt(Cookies.get('mymeta_max_step'))};
	if(Cookies.get('mymeta_documentation_mode') && typeof(enableDocumentationMode) == 'function'){
		enableDocumentationMode();
	};
	if(help_active) {jQueryCustom().guide(current_route,current_step)}
}

window.set_globals = function (active,route,step) {
	help_active=active;
	current_route=route;
	current_step=step;
	Cookies.set('mymeta_help_active',active,{domain: getMyMetaLocationHostName(location.hostname)});
	Cookies.set('mymeta_current_route',route,{domain: getMyMetaLocationHostName(location.hostname)});
	Cookies.set('mymeta_current_step',step,{domain: getMyMetaLocationHostName(location.hostname)});
	
	if(max_step != null && (current_step == -1 || current_step > max_step)) {
		max_step = current_step;
		Cookies.set('mymeta_max_step',max_step,{domain: getMyMetaLocationHostName(location.hostname)});
	}
}

window.init_close = function ()
{
	jQueryCustom("body").prepend('<div id="popUpEnd" class="tooltip info"><div class="tooltip_container"><p>'+window.getTranslatedText(window.mymeta_config, 'my_meta_end_path')+'</p><p id="route_title">TEST</p><button class="popupCloseButtonEnd tool_click">'+window.getTranslatedText(window.mymeta_config, 'my_meta_close')+'</button><div id="close_body"></div></div></div>');
	jQueryCustom('.popupCloseButtonEnd').click(function() {
		jQueryCustom('#popUpEnd').hide();
	});
	jQueryCustom('#popUpEnd').hide();
}

window.init_change = function ()
{
	jQueryCustom("body").prepend('<div id="popUpChange" class="tooltip info"><div class="tooltip_container"><br><p>'+window.getTranslatedText(window.mymeta_config, 'my_meta_follow_path')+'</p><br><p id="route_title_change">TEST</p><br><p>'+window.getTranslatedText(window.mymeta_config, 'my_meta_sure_quit')+'</p><br><div style="text-align:center"><button class="popupChangeButton half tool_click" id="changeLeave">'+window.getTranslatedText(window.mymeta_config, 'my_meta_ok')+'</button><button class="popupChangeButton tool_click half" id="changeStay">'+window.getTranslatedText(window.mymeta_config, 'my_meta_cancel')+'</button></div></div></div>');
	jQueryCustom('#changeStay').click(function() {
		jQueryCustom('#popUpChange').hide();
	});
	jQueryCustom('#popUpChange').hide();
}

window.init_videos = function ()
{
	jQueryCustom("body").prepend('<div id="popUpVideo" style="display:none;"><h2 id="video_title">TITLE</h2><h3 id="video_subtitle">Subtitle</h3><div class="popupCloseButton tool_click"><img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/close.svg"></div><div id="iframe"></div></div>');
	
	jQueryCustom("#popUpVideo").on('mousedown', function(e){
		var dr = jQueryCustom("#popUpVideo").addClass("drag");
		var height = dr.outerHeight();
		var width = dr.outerWidth();
		var ypos = dr.offset().top + height - e.pageY;
		var xpos = dr.offset().left + width - e.pageX;
		jQueryCustom(document.body).on('mousemove', function(e){
			var itop = e.pageY + ypos - height;
			var ileft = e.pageX + xpos - width;
			if(dr.hasClass("drag")){
				dr.offset({top: itop,left: ileft});
			}
		}).on('mouseup', function(e){
			dr.removeClass("drag");
		});
	});
	
	jQueryCustom('.popupCloseButton').click(function() {
	    var iframe=document.getiframe = document.getElementById('iframe');
		var video = new Vimeo.Player(iframe);
		video.pause();
		jQueryCustom('#popUpVideo').hide();
	});

	jQueryCustom(".resources>a").click(function(e) {
	    e.preventDefault();
	});
	jQueryCustom('#popUpVideo').hide();
		jQueryCustom('#popUpVideo').hide();
}

window.unexpected_click = function () {
	jQueryCustom("#sticker").removeClass("ok");	
	jQueryCustom("#detached_sticker").removeClass("ok");	
}

window.create_counter = function (index_route) {
	var template = document.createElement('template');
	template.innerHTML = `
		<div id="sticker" class="ok">
			<div id="first_row">
				<div id="counter_title"></div>
				<div id="buttons_container">
					<span title="Espandi" id="counter_expand" class="tool_click">
						<img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/window-maximize-regular.svg" />
					</span>
				</div>
			</div>
			<div id="step_title">
			
			</div>
			<div id="second_row">
				<div id="bar_container">
					<div id="border_bar_container">
						<div id="completion_bar" percentage="78%"></div>
					</div>
				</div>
				<div id="counter_rounds"></div>
				<div id="counter_stats_container">
					<span title="Indietro" id="counter_back" class="tool_click">
						<img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/caret-left-solid.svg" />
					</span>
					<div id="counter_stats">99/99</div>
					<span title="Avanti" id="counter_forward" class="tool_click">
						<img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/caret-right-solid.svg" />
					</span>
					<span title="Interrompi la guida" id="counter_close" class="tool_click">
						<img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/times-circle-solid.svg" />
					</span>
				</div>
			</div>
			<div id="unexpected_click">
				<p></p>
			</div>
		</div>`;
	var menu = template.innerHTML;
	jQueryCustom("body").prepend(menu);
	
	jQueryCustom("#counter_title").html("");
	jQueryCustom("#counter_title").width("auto");
	jQueryCustom("#counter_title").width(jQueryCustom("#counter_title").width());
	jQueryCustom("#counter_title").html(window.getTranslatedText(routes[index_route], 'title'));
	jQueryCustom("#unexpected_click > p").text(window.getTranslatedText(window.mymeta_config, 'not_following'));

    jQueryCustom("#counter_close").click(function(e) {
    	jQueryCustom(document).off();
    	jQueryCustom(".event_found").removeClass("event_found");
		jQueryCustom().tooltips(current_route,current_step,false);
		jQueryCustom().highlights(current_route,current_step,false);
		jQueryCustom().events(current_route,current_step,false);
		set_globals(0,-1,-1);
		jQueryCustom("#sticker").remove();
		jQueryCustom("#detached_sticker").remove();

		// If in documentation mode, reset it
		if(typeof(disableDocumentationMode) == 'function')
			disableDocumentationMode();

	});
    
    jQueryCustom("#counter_expand").click(function(e) {
    	show_detached(true);
	});
    
	jQueryCustom(routes[index_route]["steps"]).each(function(index_step,step) {
		var round_class = "myMeta_round";
		if(!index_step) {
			round_class+=" now";
		}
		jQueryCustom("#counter_rounds").append("<span class='tool_click "+round_class+"' id='round"+index_step+"'></span>");
		
		jQueryCustom("#round" + index_step).mouseover(function() {
			jQueryCustom().preview(index_route,index_step,true);
		}).mouseout(function() {
			jQueryCustom().preview(index_route,index_step,false);
		});
	});
}

window.create_detached_counter = function(index_route) {
	var template = document.createElement('template');
	template.innerHTML = `
		<div id="detached_sticker" class="ok" style="top: 40%; left: 10%;">
			<div id="detached_first_row">
				<div id="detached_counter_title"></div>
				<div id="detached_buttons_container">
					<span title="Riduci" id="detached_counter_reduce" class="tool_click">
						<img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/window-minimize-solid.svg" />
					</span>
				</div>
			</div>
			<div id="detached_container">
				<div id="detached_route_container"></div>
				<div id="detached_route_video_container"></div>
				<div id="detached_route_pdf_container"></div>
			</div>
			<div id="detached_second_row">
				<div style="flex: 1;">
					<div id="detached_unexpected_click">
					</div>
				</div>
				<div id="detached_counter_stats_container">
					<span title="Indietro" id="detached_counter_back" class="tool_click">
						<img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/caret-left-solid.svg" />
					</span>
					<div id="detached_counter_stats">99/99</div>
					<span title="Avanti" id="detached_counter_forward" class="tool_click">
						<img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/caret-right-solid.svg" />
					</span>
				</div>
			</div>
		</div>`;
	var menu = template.innerHTML;
	jQueryCustom("body").prepend(menu);
	jQueryCustom("#detached_unexpected_click").text(window.getTranslatedText(window.mymeta_config, 'not_following'));
	
	jQueryCustom('#detached_container').slimScroll({
        height: '300px',
        start: 'top',
        color: '#000',
        railVisible: false,
        alwaysVisible: false,
        size: '5px',
        color: '#456275',
        railOpacity: 0,
        wheelStep: 10,
        allowPageScroll: false,
        disableFadeOut: false
    });
	
	if(Cookies.get('mymeta_detached_position_top') && Cookies.get('mymeta_detached_position_left')) {
		var top = parseInt(Cookies.get('mymeta_detached_position_top')),
			left = parseInt(Cookies.get('mymeta_detached_position_left'));
		
		jQueryCustom("#detached_sticker").offset({top: top, left: left});
	}
	
	jQueryCustom("#detached_first_row").on('mousedown', function(e){
		var dr = jQueryCustom("#detached_sticker").addClass("drag");
		var height = dr.outerHeight();
		var width = dr.outerWidth();
		var ypos = dr.offset().top + height - e.pageY;
		var xpos = dr.offset().left + width - e.pageX;
		jQueryCustom(document.body).on('mousemove', function(e){
			var itop = e.pageY + ypos - height;
			var ileft = e.pageX + xpos - width;
			if(dr.hasClass("drag")){
				dr.offset({top: itop,left: ileft});
			}
		}).on('mouseup', function(e){
			dr.removeClass("drag");
			if(dr.is(":visible")) {
				Cookies.set('mymeta_detached_position_top', dr.offset().top,{domain: getMyMetaLocationHostName(location.hostname)});
				Cookies.set('mymeta_detached_position_left', dr.offset().left,{domain: getMyMetaLocationHostName(location.hostname)});
			}
		});
	});
	
    jQueryCustom("#detached_counter_title").html(window.getTranslatedText(routes[index_route], 'title'));

    jQueryCustom("#detached_counter_close").click(function(e) {
    	jQueryCustom(document).off();
    	jQueryCustom(".event_found").removeClass("event_found");
		jQueryCustom().tooltips(current_route,current_step,false);
		jQueryCustom().highlights(current_route,current_step,false);
		jQueryCustom().events(current_route,current_step,false);
		set_globals(0,-1,-1);
		jQueryCustom("#detached_sticker").remove();
		// If in documentation mode, reset it
		if(typeof(disableDocumentationMode) == 'function')
			disableDocumentationMode();
	});
    
    jQueryCustom("#detached_counter_reduce").click(function(e) {
    	show_detached(false);
	});
    
	jQueryCustom(routes[index_route]["steps"]).each(function(index_step,step) {
		var round_class = "myMeta_round",
			container_class = "tool_click round_container";
		if(!index_step) {
			round_class += " now";
			container_class += " now";
		}

		jQueryCustom("#detached_route_container").append("<div class='" + container_class + "' id='round_container" + index_step + "'>" + 
				"<div class='"+round_class+"' id='detached_round"+index_step+"' />" +
				"<div class='detached_step_name_container' id='detached_step_name_container" + index_step + "'>" +
				"<div id='detached_step_num" + index_step + "' class='myMeta_round_num tool_click'>" + (index_step+1) + ". </div>" +
				"<div id='detached_step_name" + index_step + "' class='myMeta_round_title tool_click'>" + window.getTranslatedText(step.tooltip, 'text') + "</div></div></div>");
		
		jQueryCustom("#detached_step_name_container" + index_step).mouseover(function() {
			jQueryCustom().preview(index_route,index_step,true);
		}).mouseout(function() {
			jQueryCustom().preview(index_route,index_step,false);
		});
		
	});

	var lista = "";
	var route=routes[index_route];
	if(route.vimeo_link) {
		lista+="<div id='detached_video_route_" + index_route + "' class='tool_click video'>";
		lista+='<div class="image">';
		lista+='<img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/edu.svg">';
		lista+='</div>';
		lista+='<div class="text">';
		lista+='<span class="video_title">'+route.vimeo_title+"</span>";
		lista+='<span class="video_subtitle">'+route.vimeo_subtitle+"</span>";
		lista+='</div>';
		lista+="</div>";
		jQueryCustom('#detached_route_video_container').append(lista);
	}
		

	lista = "";
	if(route.pdf_link) {
		lista+="<div id='detached_pdf_route_" + index_route + "' class='tool_click video'>";
		lista+='<div class="image">';
		lista+='<img src="https://mymeta-console.appspot.com.storage.googleapis.com/extension/assets/img/pdf.svg">';
		lista+='</div>';
		lista+='<div class="text">';
		lista+='<span class="video_title">'+route.pdf_title+"</span>";
		lista+='<span class="video_subtitle">'+route.pdf_subtitle+"</span>";
		lista+='</div>';
		lista+="</div>";
		jQueryCustom('#detached_route_pdf_container').append(lista);
	}
		
	jQueryCustom("#detached_video_route_"+index_route).click(function() {
		window.video(route.vimeo_link,route.vimeo_title,route.vimeo_subtitle);
	});

	jQueryCustom("#detached_pdf_route_"+index_route).click(function() {
		window.open(route.pdf_link,"_blank");
	});    
};

window.should_render_arrow = function(route, step, is_forward) {
	var tooltip = routes[route].steps[step].tooltip;
	var arrow_type = is_forward ? tooltip.right_arrow_type : tooltip.left_arrow_type;
	switch(parseInt(arrow_type)) {
	case 0:
		return false;
		break;
	case 99:
		return true;
		break;
	case 1:
		var destination_step = get_arrow_goToStep(route, step, is_forward);
		return max_step >= destination_step;
	}
	return false;
}

window.get_arrow_goToStep = function(route, step, is_forward) {
	var tooltip = routes[route].steps[step].tooltip;
	var arrow_gotostep = is_forward ? tooltip.right_arrow_gotostep : tooltip.left_arrow_gotostep;
	if(arrow_gotostep != null)
		return arrow_gotostep;
	return is_forward ? (step+1) : (step-1)
}

window.counter = function (index_route,index_step)
{
	if(!document.getElementById("sticker")) {
		create_counter(index_route);
	}
	if(!document.getElementById("detached_sticker")) {
		create_detached_counter(index_route);
	}
	
	var val = Cookies.get('mymeta_detached_show') != null ? Cookies.get('mymeta_detached_show') : false;
	show_detached(val === "true", true);

	var percentage = (index_step+1)/(routes[index_route].steps.length+1)*100;
	jQueryCustom("#completion_bar").css("width",percentage+"%");
	
	jQueryCustom(routes[index_route]["steps"]).each(function(cicle_step,step) {
		if(cicle_step<index_step) {
			jQueryCustom("#round"+cicle_step).removeClass("now");
			jQueryCustom("#detached_round"+cicle_step).removeClass("now");
			jQueryCustom("#round_container"+cicle_step).removeClass("now");
			jQueryCustom("#round"+cicle_step).addClass("before");
			jQueryCustom("#detached_round"+cicle_step).addClass("before");
		}
		else if (cicle_step==index_step) {
			jQueryCustom("#round"+cicle_step).removeClass("before");
			jQueryCustom("#detached_round"+cicle_step).removeClass("before");
			jQueryCustom("#round_container"+cicle_step).removeClass("before");
			jQueryCustom("#round"+cicle_step).addClass("now");
			jQueryCustom("#detached_round"+cicle_step).addClass("now");
			jQueryCustom("#round_container"+cicle_step).addClass("now");
			try{
				jQueryCustom('#detached_container').slimScroll({ scrollTo : (jQueryCustom("#round_container"+index_step)[0].offsetTop-70)+'px',animate: true });
			} catch(e) {
			}
		} else if(cicle_step > index_step) {
			jQueryCustom("#round"+cicle_step).removeClass("before");
			jQueryCustom("#detached_round"+cicle_step).removeClass("before");
			jQueryCustom("#round_container"+cicle_step).removeClass("before");
			jQueryCustom("#round"+cicle_step).removeClass("now");
			jQueryCustom("#detached_round"+cicle_step).removeClass("now");
			jQueryCustom("#round_container"+cicle_step).removeClass("now");
		}
	});

	jQueryCustom("#counter_stats").html((index_step+1)+'&nbsp;/&nbsp;'+routes[index_route].steps.length);
	jQueryCustom("#detached_counter_stats").html((index_step+1)+'&nbsp;/&nbsp;'+routes[index_route].steps.length);
	
	var is_sticker_visible = jQueryCustom("#sticker").is(":visible");
	if(!is_sticker_visible)
		jQueryCustom("#sticker").show();
	jQueryCustom("#step_title").html("");
	jQueryCustom("#step_title").width("auto");
	jQueryCustom("#step_title").width(jQueryCustom("#step_title").width());

	jQueryCustom("#step_title").html(window.getTranslatedText(routes[index_route]["steps"][index_step].tooltip, 'text'));
	if(!is_sticker_visible)
		jQueryCustom("#sticker").hide();
	
	jQueryCustom("#counter_back").unbind("click");
	jQueryCustom("#counter_back").addClass("disabled");
	jQueryCustom("#detached_counter_back").unbind("click");
	jQueryCustom("#detached_counter_back").addClass("disabled");
	if(index_step > 0 && should_render_arrow(current_route, current_step, false)) {
		var back = function(e) {
			goToStep(current_route, get_arrow_goToStep(current_route, current_step, false));
		};
		jQueryCustom("#counter_back").removeClass("disabled");
		jQueryCustom("#detached_counter_back").removeClass("disabled");
		jQueryCustom("#counter_back").click(back);
		jQueryCustom("#detached_counter_back").click(back);
	}
	
	jQueryCustom("#counter_forward").unbind("click");
	jQueryCustom("#detached_counter_forward").unbind("click");
	jQueryCustom("#counter_forward").addClass("disabled");
	jQueryCustom("#detached_counter_forward").addClass("disabled");
	if(index_step < routes[index_route]["steps"].length-1 && should_render_arrow(current_route, current_step, true)) {
		var forward_function = function(e) {
			goToStep(current_route, get_arrow_goToStep(current_route, current_step, true));
		};
		
		jQueryCustom("#counter_forward").removeClass("disabled");
		jQueryCustom("#detached_counter_forward").removeClass("disabled");
		jQueryCustom("#counter_forward").click(forward_function);
		jQueryCustom("#detached_counter_forward").click(forward_function);
	}
}

window.show_detached = function(show_detached, instant) {
	if(show_detached) {
		if(instant) {
			jQueryCustom("#detached_sticker").show();
			jQueryCustom("#sticker").hide();
		} else {
			jQueryCustom("#detached_sticker").fadeIn();
			jQueryCustom("#sticker").fadeOut();
		}
		Cookies.set('mymeta_detached_show', "true",{domain: getMyMetaLocationHostName(location.hostname)});
	} else {
		if(instant) {
			jQueryCustom("#detached_sticker").hide();
			jQueryCustom("#sticker").show();
		} else {
			jQueryCustom("#detached_sticker").fadeOut();
			jQueryCustom("#sticker").fadeIn();
		}
		Cookies.set('mymeta_detached_show', "false",{domain: getMyMetaLocationHostName(location.hostname)});
	}
}

window.video = function (video,title,subtitle)
{
	if(current_video!=video) {
		jQueryCustom("#iframe").html('<iframe id="iframe_iframe" src="'+video+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		current_video=video;
	}
	var iframe=document.getiframe = document.getElementById('iframe');
	var video = new Vimeo.Player(iframe);
	video.play();
	jQueryCustom("#video_title").html(title);
	if(subtitle) {
		jQueryCustom("#video_subtitle").html(subtitle);
	} else {
		jQueryCustom("#video_subtitle").html("");
	}
	jQueryCustom('#popUpVideo').show();
}

window.try_autorecovery_route = function (index_route) {
	var i_wanna_recovery = false;
	var index_step = 0;

	jQueryCustom(jQueryCustom(routes[index_route].steps).get().reverse()).each(function( index, step ) {
		if(step.event.type=="change"&&step.event.required&&jQueryCustom(step.event.selector).length&&!jQueryCustom(step.event.selector).val().length){
			index_step = routes[index_route].steps.length - 1 -index;
			i_wanna_recovery = true;
		}
	});

	jQueryCustom(jQueryCustom(routes[index_route].steps).get().reverse()).each(function( index, step ) {
		var recoveries_found = 0;
		jQueryCustom(step.recoveries).each(function( index_recovery, recovery ) {
			if(recovery.type=="find_link"){
				if(window.location.href.indexOf(recovery.search)!=-1){
					if(jQueryCustom(step.event.selector).length){
						recoveries_found++;
					}
				}
			} if(recovery.type=="find_not_link"){
				if(window.location.href.indexOf(recovery.search)==-1){
					if(jQueryCustom(step.event.selector).length){
						recoveries_found++;
					}
				}
			} else if(recovery.type=="find_elems"){
				elems_found = jQueryCustom(recovery.selector).length;
				if(recovery.comparison=="equal"){
					if(elems_found == recovery.target){
						if(jQueryCustom(step.event.selector).length){
							recoveries_found++;
						}
					}
				} else if(recovery.comparison=="minor"){
					if(elems_found < recovery.target){
						if(jQueryCustom(step.event.selector).length){
							recoveries_found++;
						}
					}
				} else if(recovery.comparison=="major"){
					if(elems_found > recovery.target){
						if(jQueryCustom(step.event.selector).length){
							recoveries_found++;
						}
					}
				}

			}  else if(recovery.type=="find_text"){
				if(jQueryCustom(recovery.selector).val()){
					if(jQueryCustom(step.event.selector).length){
						recoveries_found++;
					}
				}
			}
		});

		if(typeof(step.recoveries)!="undefined"){
			if(recoveries_found==step.recoveries.length && step.recoveries.length) {
				index_step = routes[index_route].steps.length - 1 -index;
				i_wanna_recovery = true;
			}
		}
	});
	window.route(index_route,index_step,i_wanna_recovery);
}

	

window.route = function (index_route, index_step,recovery)
{
	if(!help_active){
		route_start(index_route, index_step,recovery);
	}
	else {
		jQueryCustom('#changeLeave').click(function() {
			//
			jQueryCustom(document).off();
	    	jQueryCustom(".event_found").removeClass("event_found");
			jQueryCustom().tooltips(current_route,current_step,false);
			jQueryCustom().highlights(current_route,current_step,false);
			jQueryCustom().events(current_route,current_step,false);
			set_globals(0,-1,-1);
			//
			jQueryCustom("#sticker").remove();
			jQueryCustom("#detached_sticker").remove();
			route_start(index_route, index_step,recovery);
			jQueryCustom('#popUpChange').hide();
		});
		jQueryCustom("#route_title_change").html(window.getTranslatedText(routes[current_route], 'title'));
		jQueryCustom('#popUpChange').show();
	}
}

window.route_start = function (index_route, index_step,recovery)
{
	if(index_step == undefined)
		index_step = 0;
	
	set_globals(1,index_route,index_step);

	if(!recovery){
		var homepage_found = false;
		if(window.mymeta_config.mymeta_search_hp) {
			homepage_found = window.location.href.indexOf(window.mymeta_config.mymeta_search_hp)!=-1 ? true : false;
		}
		if(window.location.origin!=window.location.href && window.location.origin+"/"!=window.location.href && !homepage_found) {
			window.location.href=window.location.origin+window.mymeta_config.mymeta_hp;
			if(window.mymeta_config.my_meta_should_reboot && !recovery){
				setTimeout(function(){ window.location.reload(); 
				}, 1300);
			}
		}
		else {
			jQueryCustom().guide(current_route,current_step);
		}
	} else {
		jQueryCustom().guide(current_route,current_step);
	}
}

window.getTranslatedText = function(obj, property) {
	if(obj == null || property == null)
		return "";
	if(actual_language == null || obj[property + "_" + actual_language] == null)
		return obj[property];
	return obj[property + "_" + actual_language];
}

window.getMyMetaLocationHostName = function() {
	return "." + psl.parse(location.hostname).domain;
	/*const hostname = location.hostname;
	const regex = /(.*\.)?(\w+)\.(\w+)/gm;
	const result = hostname.replace(regex, ".$2.$3");
	return result;*/
}

window.format_input_value = function(input) {
	if(input=="!!_empty_!!"){
		return "";
	}
	
	const generalRegex = /<(\w*)\s*(((\w*=\".*?\")\s*)*)\/>/;
	const argRegex = /(\w*)=\"(.*?)\"/gm;
	while ((match = generalRegex.exec(input)) !== null) {
		const command = match[1];
		const args = match[2];
		let argsObj = {};
		while((argMatch = argRegex.exec(args)) !== null) {
			argsObj[argMatch[1]] = argMatch[2];
		}
		const val = window.myMetaFormatterFunctions[command](argsObj);
		input = input.replace(match[0], val);
	}
	return input;
}

window.myMetaFormatterFunctions = {
	date: function(args) {
		const now = new Date();
		const date = new Date(args.year? args.year : now.getFullYear() + parseInt(args.yearRelative),
			args.month? args.month : now.getMonth() + (parseInt(args.monthRelative)),
			args.day? args.day : now.getDate() + parseInt(args.dayRelative));
		let year = (date.getFullYear()).toString();
		let month = (date.getMonth()+1).toString();
		let day = (date.getDate()).toString();
		month = month.length == 1 ? "0" + month : month;
		day = day.length == 1 ? "0" + day : day;

		if(!args.pattern) {
			return day + "/" + month + "/" + year;
		}
		return ("" + args.pattern).replace("dd", day).replace("mm", month).replace("yyyy", year);
	},
	selectorContent: function(args) {
		const elem = jQueryCustom(args.selector);
		if(elem.is("input") || elem.is("select") || elem.is("textarea"))
			return elem.val();
		return elem.text();
	}
}

window.findMyMetaActiveWindow = function(level) {
	if(level == null /*|| !Number.isInteger(level)* || level < 0*/) return window;

	const fn = function(win, level) {
		if(level == 0) return win;
		let activeWindow = null;
		const frames = win.document.querySelectorAll("iframe");
		for(let i = 0; i < frames.length && activeWindow == null; i++) {
			try {
				if(frames[i] == null || frames[i].contentWindow == null || frames[i].contentWindow.document == null)
					continue;
				const recursiveWindow = fn(frames[i].contentWindow, level--);
				if(recursiveWindow != null)
					activeWindow = recursiveWindow;
			} catch(err) {
				err = null;
			}
		}
		return activeWindow;
	}
	return fn(window.top, level);
}

/**
 * SVGInject - Version 1.2.3
 * A tiny, intuitive, robust, caching solution for injecting SVG files inline into the DOM.
 *
 * https://github.com/iconfu/svg-inject
 *
 * Copyright (c) 2018 INCORS, the creators of iconfu.com
 * @license MIT License - https://github.com/iconfu/svg-inject/blob/master/LICENSE
 */

  // constants for better minification
  var _CREATE_ELEMENT_ = 'createElement';
  var _GET_ELEMENTS_BY_TAG_NAME_ = 'getElementsByTagName';
  var _LENGTH_ = 'length';
  var _STYLE_ = 'style';
  var _TITLE_ = 'title';
  var _UNDEFINED_ = 'undefined';
  var _SET_ATTRIBUTE_ = 'setAttribute';
  var _GET_ATTRIBUTE_ = 'getAttribute';

  var NULL = null;

  // constants
  var __SVGINJECT = '__svgInject';
  var ID_SUFFIX = '--inject-';
  var ID_SUFFIX_REGEX = new RegExp(ID_SUFFIX + '\\d+', "g");
  var LOAD_FAIL = 'LOAD_FAIL';
  var SVG_NOT_SUPPORTED = 'SVG_NOT_SUPPORTED';
  var SVG_INVALID = 'SVG_INVALID';
  var ATTRIBUTE_EXCLUSION_NAMES = ['src', 'alt', 'onload', 'onerror'];
  var A_ELEMENT = document[_CREATE_ELEMENT_]('a');
  var IS_SVG_SUPPORTED = typeof SVGRect != _UNDEFINED_;
  var DEFAULT_OPTIONS = {
    useCache: true,
    copyAttributes: true,
    makeIdsUnique: true
  };
  // Map of IRI referenceable tag names to properties that can reference them. This is defined in
  // https://www.w3.org/TR/SVG11/linking.html#processingIRI
  var IRI_TAG_PROPERTIES_MAP = {
    clipPath: ['clip-path'],
    'color-profile': NULL,
    cursor: NULL,
    filter: NULL,
    linearGradient: ['fill', 'stroke'],
    marker: ['marker', 'marker-end', 'marker-mid', 'marker-start'],
    mask: NULL,
    pattern: ['fill', 'stroke'],
    radialGradient: ['fill', 'stroke']
  };
  var INJECTED = 1;
  var FAIL = 2;

  var uniqueIdCounter = 1;
  var xmlSerializer;
  var domParser;


  // creates an SVG document from an SVG string
  function svgStringToSvgDoc(svgStr) {
    domParser = domParser || new DOMParser();
    return domParser.parseFromString(svgStr, 'text/xml');
  }


  // searializes an SVG element to an SVG string
  function svgElemToSvgString(svgElement) {
    xmlSerializer = xmlSerializer || new XMLSerializer();
    return xmlSerializer.serializeToString(svgElement);
  }


  // Returns the absolute url for the specified url
  function getAbsoluteUrl(url) {
    A_ELEMENT.href = url;
    return A_ELEMENT.href;
  }


  // Load svg with an XHR request
  function loadSvg(url, callback, errorCallback) {
    if (url) {
      var req = new XMLHttpRequest();
      req.onreadystatechange = function() {
        if (req.readyState == 4) {
          // readyState is DONE
          var status = req.status;
          if (status == 200) {
            // request status is OK
            callback(req.responseXML, req.responseText.trim());
          } else if (status >= 400) {
            // request status is error (4xx or 5xx)
            errorCallback();
          } else if (status == 0) {
            // request status 0 can indicate a failed cross-domain call
            errorCallback();
          }
        }
      };
      req.open('GET', url, true);
      req.send();
    }
  }


  // Copy attributes from img element to svg element
  function copyAttributes(imgElem, svgElem) {
    var attribute;
    var attributeName;
    var attributeValue;
    var attributes = imgElem.attributes;
    for (var i = 0; i < attributes[_LENGTH_]; i++) {
      attribute = attributes[i];
      attributeName = attribute.name;
      // Only copy attributes not explicitly excluded from copying
      if (ATTRIBUTE_EXCLUSION_NAMES.indexOf(attributeName) == -1) {
        attributeValue = attribute.value;
        // If img attribute is "title", insert a title element into SVG element
        if (attributeName == _TITLE_) {
          var titleElem;
          var firstElementChild = svgElem.firstElementChild;
          if (firstElementChild && firstElementChild.localName.toLowerCase() == _TITLE_) {
            // If the SVG element's first child is a title element, keep it as the title element
            titleElem = firstElementChild;
          } else {
            // If the SVG element's first child element is not a title element, create a new title
            // ele,emt and set it as the first child
            titleElem = document[_CREATE_ELEMENT_ + 'NS']('http://www.w3.org/2000/svg', _TITLE_);
            svgElem.insertBefore(titleElem, firstElementChild);
          }
          // Set new title content
          titleElem.textContent = attributeValue;
        } else {
          // Set img attribute to svg element
          svgElem[_SET_ATTRIBUTE_](attributeName, attributeValue);
        }
      }
    }
  }


  // This function appends a suffix to IDs of referenced elements in the <defs> in order to  to avoid ID collision
  // between multiple injected SVGs. The suffix has the form "--inject-X", where X is a running number which is
  // incremented with each injection. References to the IDs are adjusted accordingly.
  // We assume tha all IDs within the injected SVG are unique, therefore the same suffix can be used for all IDs of one
  // injected SVG.
  // If the onlyReferenced argument is set to true, only those IDs will be made unique that are referenced from within the SVG
  function makeIdsUnique(svgElem, onlyReferenced) {
    var idSuffix = ID_SUFFIX + uniqueIdCounter++;
    // Regular expression for functional notations of an IRI references. This will find occurences in the form
    // url(#anyId) or url("#anyId") (for Internet Explorer) and capture the referenced ID
    var funcIriRegex = /url\("?#([a-zA-Z][\w:.-]*)"?\)/g;
    // Get all elements with an ID. The SVG spec recommends to put referenced elements inside <defs> elements, but
    // this is not a requirement, therefore we have to search for IDs in the whole SVG.
    var idElements = svgElem.querySelectorAll('[id]');
    var idElem;
    // An object containing referenced IDs  as keys is used if only referenced IDs should be uniquified.
    // If this object does not exist, all IDs will be uniquified.
    var referencedIds = onlyReferenced ? [] : NULL;
    var tagName;
    var iriTagNames = {};
    var iriProperties = [];
    var changed = false;
    var i, j;

    if (idElements[_LENGTH_]) {
      // Make all IDs unique by adding the ID suffix and collect all encountered tag names
      // that are IRI referenceable from properities.
      for (i = 0; i < idElements[_LENGTH_]; i++) {
        tagName = idElements[i].localName; // Use non-namespaced tag name
        // Make ID unique if tag name is IRI referenceable
        if (tagName in IRI_TAG_PROPERTIES_MAP) {
          iriTagNames[tagName] = 1;
        }
      }
      // Get all properties that are mapped to the found IRI referenceable tags
      for (tagName in iriTagNames) {
        (IRI_TAG_PROPERTIES_MAP[tagName] || [tagName]).forEach(function (mappedProperty) {
          // Add mapped properties to array of iri referencing properties.
          // Use linear search here because the number of possible entries is very small (maximum 11)
          if (iriProperties.indexOf(mappedProperty) < 0) {
            iriProperties.push(mappedProperty);
          }
        });
      }
      if (iriProperties[_LENGTH_]) {
        // Add "style" to properties, because it may contain references in the form 'style="fill:url(#myFill)"'
        iriProperties.push(_STYLE_);
      }
      // Run through all elements of the SVG and replace IDs in references.
      // To get all descending elements, getElementsByTagName('*') seems to perform faster than querySelectorAll('*').
      // Since svgElem.getElementsByTagName('*') does not return the svg element itself, we have to handle it separately.
      var descElements = svgElem[_GET_ELEMENTS_BY_TAG_NAME_]('*');
      var element = svgElem;
      var propertyName;
      var value;
      var newValue;
      for (i = -1; element != NULL;) {
        if (element.localName == _STYLE_) {
          // If element is a style element, replace IDs in all occurences of "url(#anyId)" in text content
          value = element.textContent;
          newValue = value && value.replace(funcIriRegex, function(match, id) {
            if (referencedIds) {
              referencedIds[id] = 1;
            }
            return 'url(#' + id + idSuffix + ')';
          });
          if (newValue !== value) {
            element.textContent = newValue;
          }
        } else if (element.hasAttributes()) {
          // Run through all property names for which IDs were found
          for (j = 0; j < iriProperties[_LENGTH_]; j++) {
            propertyName = iriProperties[j];
            value = element[_GET_ATTRIBUTE_](propertyName);
            newValue = value && value.replace(funcIriRegex, function(match, id) {
              if (referencedIds) {
                referencedIds[id] = 1;
              }
                return 'url(#' + id + idSuffix + ')';
            });
            if (newValue !== value) {
              element[_SET_ATTRIBUTE_](propertyName, newValue);
            }
          }
          // Replace IDs in xlink:ref and href attributes
          ['xlink:href', 'href'].forEach(function(refAttrName) {
            var iri = element[_GET_ATTRIBUTE_](refAttrName);
            if (/^\s*#/.test(iri)) { // Check if iri is non-null and internal reference
              iri = iri.trim();
              element[_SET_ATTRIBUTE_](refAttrName, iri + idSuffix);
              if (referencedIds) {
                // Add ID to referenced IDs
                referencedIds[iri.substring(1)] = 1;
              }
            }
          });
        }
        element = descElements[++i];
      }
      for (i = 0; i < idElements[_LENGTH_]; i++) {
        idElem = idElements[i];
        // If set of referenced IDs exists, make only referenced IDs unique,
        // otherwise make all IDs unique.
        if (!referencedIds || referencedIds[idElem.id]) {
          // Add suffix to element's ID
          idElem.id += idSuffix;
          changed = true;
        }
      }
    }
    // return true if SVG element has changed
    return changed;
  }


  // For cached SVGs the IDs are made unique by simply replacing the already inserted unique IDs with a
  // higher ID counter. This is much more performant than a call to makeIdsUnique().
  function makeIdsUniqueCached(svgString) {
    return svgString.replace(ID_SUFFIX_REGEX, ID_SUFFIX + uniqueIdCounter++);
  }


  // Inject SVG by replacing the img element with the SVG element in the DOM
  function inject(imgElem, svgElem, absUrl, options) {
    if (svgElem) {
      svgElem[_SET_ATTRIBUTE_]('data-inject-url', absUrl);
      var parentNode = imgElem.parentNode;
      if (parentNode) {
        if (options.copyAttributes) {
          copyAttributes(imgElem, svgElem);
        }
        // Invoke beforeInject hook if set
        var beforeInject = options.beforeInject;
        var injectElem = (beforeInject && beforeInject(imgElem, svgElem)) || svgElem;
        // Replace img element with new element. This is the actual injection.
        parentNode.replaceChild(injectElem, imgElem);
        // Mark img element as injected
        imgElem[__SVGINJECT] = INJECTED;
        removeOnLoadAttribute(imgElem);
        // Invoke afterInject hook if set
        var afterInject = options.afterInject;
        if (afterInject) {
          afterInject(imgElem, injectElem);
        }
      }
    } else {
      svgInvalid(imgElem, options);
    }
  }


  // Merges any number of options objects into a new object
  function mergeOptions() {
    var mergedOptions = {};
    var args = arguments;
    // Iterate over all specified options objects and add all properties to the new options object
    for (var i = 0; i < args[_LENGTH_]; i++) {
      var argument = args[i];
        for (var key in argument) {
          if (argument.hasOwnProperty(key)) {
            mergedOptions[key] = argument[key];
          }
        }
      }
    return mergedOptions;
  }


  // Adds the specified CSS to the document's <head> element
  function addStyleToHead(css) {
    var head = document[_GET_ELEMENTS_BY_TAG_NAME_]('head')[0];
    if (head) {
      var style = document[_CREATE_ELEMENT_](_STYLE_);
      style.type = 'text/css';
      style.appendChild(document.createTextNode(css));
      head.appendChild(style);
    }
  }


  // Builds an SVG element from the specified SVG string
  function buildSvgElement(svgStr, verify) {
    if (verify) {
      var svgDoc;
      try {
        // Parse the SVG string with DOMParser
        svgDoc = svgStringToSvgDoc(svgStr);
      } catch(e) {
        return NULL;
      }
      if (svgDoc[_GET_ELEMENTS_BY_TAG_NAME_]('parsererror')[_LENGTH_]) {
        // DOMParser does not throw an exception, but instead puts parsererror tags in the document
        return NULL;
      }
      return svgDoc.documentElement;
    } else {
      var div = document.createElement('div');
      div.innerHTML = svgStr;
      return div.firstElementChild;
    }
  }


  function removeOnLoadAttribute(imgElem) {
    // Remove the onload attribute. Should only be used to remove the unstyled image flash protection and
    // make the element visible, not for removing the event listener.
    imgElem.removeAttribute('onload');
  }


  function errorMessage(msg) {
    console.error('SVGInject: ' + msg);
  }


  function fail(imgElem, status, options) {
    imgElem[__SVGINJECT] = FAIL;
    if (options.onFail) {
      options.onFail(imgElem, status);
    } else {
      errorMessage(status);
    }
  }


  function svgInvalid(imgElem, options) {
    removeOnLoadAttribute(imgElem);
    fail(imgElem, SVG_INVALID, options);
  }


  function svgNotSupported(imgElem, options) {
    removeOnLoadAttribute(imgElem);
    fail(imgElem, SVG_NOT_SUPPORTED, options);
  }


  function loadFail(imgElem, options) {
    fail(imgElem, LOAD_FAIL, options);
  }


  function removeEventListeners(imgElem) {
    imgElem.onload = NULL;
    imgElem.onerror = NULL;
  }


  function imgNotSet(msg) {
    errorMessage('no img element');
  }


  function createSVGInject(globalName, options) {
    var defaultOptions = mergeOptions(DEFAULT_OPTIONS, options);
    var svgLoadCache = {};

    if (IS_SVG_SUPPORTED) {
      // If the browser supports SVG, add a small stylesheet that hides the <img> elements until
      // injection is finished. This avoids showing the unstyled SVGs before style is applied.
      addStyleToHead('img[onload^="' + globalName + '("]{visibility:hidden;}');
    }


    /**
     * SVGInject
     *
     * Injects the SVG specified in the `src` attribute of the specified `img` element or array of `img`
     * elements. Returns a Promise object which resolves if all passed in `img` elements have either been
     * injected or failed to inject (Only if a global Promise object is available like in all modern browsers
     * or through a polyfill).
     *
     * Options:
     * useCache: If set to `true` the SVG will be cached using the absolute URL. Default value is `true`.
     * copyAttributes: If set to `true` the attributes will be copied from `img` to `svg`. Dfault value
     *     is `true`.
     * makeIdsUnique: If set to `true` the ID of elements in the `<defs>` element that can be references by
     *     property values (for example 'clipPath') are made unique by appending "--inject-X", where X is a
     *     running number which increases with each injection. This is done to avoid duplicate IDs in the DOM.
     * beforeLoad: Hook before SVG is loaded. The `img` element is passed as a parameter. If the hook returns
     *     a string it is used as the URL instead of the `img` element's `src` attribute.
     * afterLoad: Hook after SVG is loaded. The loaded `svg` element and `svg` string are passed as a
     *     parameters. If caching is active this hook will only get called once for injected SVGs with the
     *     same absolute path. Changes to the `svg` element in this hook will be applied to all injected SVGs
     *     with the same absolute path. It's also possible to return an `svg` string or `svg` element which
     *     will then be used for the injection.
     * beforeInject: Hook before SVG is injected. The `img` and `svg` elements are passed as parameters. If
     *     any html element is returned it gets injected instead of applying the default SVG injection.
     * afterInject: Hook after SVG is injected. The `img` and `svg` elements are passed as parameters.
     * onAllFinish: Hook after all `img` elements passed to an SVGInject() call have either been injected or
     *     failed to inject.
     * onFail: Hook after injection fails. The `img` element and a `status` string are passed as an parameter.
     *     The `status` can be either `'SVG_NOT_SUPPORTED'` (the browser does not support SVG),
     *     `'SVG_INVALID'` (the SVG is not in a valid format) or `'LOAD_FAILED'` (loading of the SVG failed).
     *
     * @param {HTMLImageElement} img - an img element or an array of img elements
     * @param {Object} [options] - optional parameter with [options](#options) for this injection.
     */
    function SVGInject(img, options) {
      options = mergeOptions(defaultOptions, options);

      var run = function(resolve) {
        var allFinish = function() {
          var onAllFinish = options.onAllFinish;
          if (onAllFinish) {
            onAllFinish();
          }
          resolve && resolve();
        };

        if (img && typeof img[_LENGTH_] != _UNDEFINED_) {
          // an array like structure of img elements
          var injectIndex = 0;
          var injectCount = img[_LENGTH_];

          if (injectCount == 0) {
            allFinish();
          } else {
            var finish = function() {
              if (++injectIndex == injectCount) {
                allFinish();
              }
            };

            for (var i = 0; i < injectCount; i++) {
              SVGInjectElement(img[i], options, finish);
            }
          }
        } else {
          // only one img element
          SVGInjectElement(img, options, allFinish);
        }
      };

      // return a Promise object if globally available
      return typeof Promise == _UNDEFINED_ ? run() : new Promise(run);
    }


    // Injects a single svg element. Options must be already merged with the default options.
    function SVGInjectElement(imgElem, options, callback) {
      if (imgElem) {
        var svgInjectAttributeValue = imgElem[__SVGINJECT];
        if (!svgInjectAttributeValue) {
          removeEventListeners(imgElem);

          if (!IS_SVG_SUPPORTED) {
            svgNotSupported(imgElem, options);
            callback();
            return;
          }
          // Invoke beforeLoad hook if set. If the beforeLoad returns a value use it as the src for the load
          // URL path. Else use the imgElem's src attribute value.
          var beforeLoad = options.beforeLoad;
          var src = (beforeLoad && beforeLoad(imgElem)) || imgElem[_GET_ATTRIBUTE_]('src');

          if (!src) {
            // If no image src attribute is set do no injection. This can only be reached by using javascript
            // because if no src attribute is set the onload and onerror events do not get called
            if (src === '') {
              loadFail(imgElem, options);
            }
            callback();
            return;
          }

          // set array so later calls can register callbacks
          var onFinishCallbacks = [];
          imgElem[__SVGINJECT] = onFinishCallbacks;

          var onFinish = function() {
            callback();
            onFinishCallbacks.forEach(function(onFinishCallback) {
              onFinishCallback();
            });
          };

          var absUrl = getAbsoluteUrl(src);
          var useCacheOption = options.useCache;
          var makeIdsUniqueOption = options.makeIdsUnique;
          
          var setSvgLoadCacheValue = function(val) {
            if (useCacheOption) {
              svgLoadCache[absUrl].forEach(function(svgLoad) {
                svgLoad(val);
              });
              svgLoadCache[absUrl] = val;
            }
          };

          if (useCacheOption) {
            var svgLoad = svgLoadCache[absUrl];

            var handleLoadValue = function(loadValue) {
              if (loadValue === LOAD_FAIL) {
                loadFail(imgElem, options);
              } else if (loadValue === SVG_INVALID) {
                svgInvalid(imgElem, options);
              } else {
                var hasUniqueIds = loadValue[0];
                var svgString = loadValue[1];
                var uniqueIdsSvgString = loadValue[2];
                var svgElem;

                if (makeIdsUniqueOption) {
                  if (hasUniqueIds === NULL) {
                    // IDs for the SVG string have not been made unique before. This may happen if previous
                    // injection of a cached SVG have been run with the option makedIdsUnique set to false
                    svgElem = buildSvgElement(svgString, false);
                    hasUniqueIds = makeIdsUnique(svgElem, false);

                    loadValue[0] = hasUniqueIds;
                    loadValue[2] = hasUniqueIds && svgElemToSvgString(svgElem);
                  } else if (hasUniqueIds) {
                    // Make IDs unique for already cached SVGs with better performance
                    svgString = makeIdsUniqueCached(uniqueIdsSvgString);
                  }
                }

                svgElem = svgElem || buildSvgElement(svgString, false);

                inject(imgElem, svgElem, absUrl, options);
              }
              onFinish();
            };

            if (typeof svgLoad != _UNDEFINED_) {
              // Value for url exists in cache
              if (svgLoad.isCallbackQueue) {
                // Same url has been cached, but value has not been loaded yet, so add to callbacks
                svgLoad.push(handleLoadValue);
              } else {
                handleLoadValue(svgLoad);
              }
              return;
            } else {
              var svgLoad = [];
              // set property isCallbackQueue to Array to differentiate from array with cached loaded values
              svgLoad.isCallbackQueue = true;
              svgLoadCache[absUrl] = svgLoad;
            }
          }

          // Load the SVG because it is not cached or caching is disabled
          loadSvg(absUrl, function(svgXml, svgString) {
            // Use the XML from the XHR request if it is an instance of Document. Otherwise
            // (for example of IE9), create the svg document from the svg string.
            var svgElem = svgXml instanceof Document ? svgXml.documentElement : buildSvgElement(svgString, true);

            var afterLoad = options.afterLoad;
            if (afterLoad) {
              // Invoke afterLoad hook which may modify the SVG element. After load may also return a new
              // svg element or svg string
              var svgElemOrSvgString = afterLoad(svgElem, svgString) || svgElem;
              if (svgElemOrSvgString) {
                // Update svgElem and svgString because of modifications to the SVG element or SVG string in
                // the afterLoad hook, so the modified SVG is also used for all later cached injections
                var isString = typeof svgElemOrSvgString == 'string';
                svgString = isString ? svgElemOrSvgString : svgElemToSvgString(svgElem);
                svgElem = isString ? buildSvgElement(svgElemOrSvgString, true) : svgElemOrSvgString;
              }
            }

            if (svgElem instanceof SVGElement) {
              var hasUniqueIds = NULL;
              if (makeIdsUniqueOption) {
                hasUniqueIds = makeIdsUnique(svgElem, false);
              }

              if (useCacheOption) {
                var uniqueIdsSvgString = hasUniqueIds && svgElemToSvgString(svgElem);
                // set an array with three entries to the load cache
                setSvgLoadCacheValue([hasUniqueIds, svgString, uniqueIdsSvgString]);
              }

              inject(imgElem, svgElem, absUrl, options);
            } else {
              svgInvalid(imgElem, options);
              setSvgLoadCacheValue(SVG_INVALID);
            }
            onFinish();
          }, function() {
            loadFail(imgElem, options);
            setSvgLoadCacheValue(LOAD_FAIL);
            onFinish();
          });
        } else {
          if (Array.isArray(svgInjectAttributeValue)) {
            // svgInjectAttributeValue is an array. Injection is not complete so register callback
            svgInjectAttributeValue.push(callback);
          } else {
            callback();
          }
        }
      } else {
        imgNotSet();
      }
    }


    /**
     * Sets the default [options](#options) for SVGInject.
     *
     * @param {Object} [options] - default [options](#options) for an injection.
     */
    SVGInject.setOptions = function(options) {
      defaultOptions = mergeOptions(defaultOptions, options);
    };


    // Create a new instance of SVGInject
    SVGInject.create = createSVGInject;


    /**
     * Used in onerror Event of an `<img>` element to handle cases when the loading the original src fails
     * (for example if file is not found or if the browser does not support SVG). This triggers a call to the
     * options onFail hook if available. The optional second parameter will be set as the new src attribute
     * for the img element.
     *
     * @param {HTMLImageElement} img - an img element
     * @param {String} [fallbackSrc] - optional parameter fallback src
     */
    SVGInject.err = function(img, fallbackSrc) {
      if (img) {
        if (img[__SVGINJECT] != FAIL) {
          removeEventListeners(img);

          if (!IS_SVG_SUPPORTED) {
            svgNotSupported(img, defaultOptions);
          } else {
            removeOnLoadAttribute(img);
            loadFail(img, defaultOptions);
          }
          if (fallbackSrc) {
            removeOnLoadAttribute(img);
            img.src = fallbackSrc;
          }
        }
      } else {
        imgNotSet();
      }
    };

    window[globalName] = SVGInject;

    return SVGInject;
  }

  var SVGInjectInstance = createSVGInject('SVGInject');

  if (typeof module == 'object' && typeof module.exports == 'object') {
    module.exports = SVGInjectInstance;
  }
/*! @vimeo/player v2.6.5 | (c) 2018 Vimeo | MIT License | https://github.com/vimeo/player.js */ ! function(e, t) {
    if(typeof(exports)=="undefined"){
        e = window;
    }
    (e.Vimeo = e.Vimeo || {}, e.Vimeo.Player = t())
    //"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define_fake_fake && define.amd ? define(t) : (e.Vimeo = e.Vimeo || {}, e.Vimeo.Player = t())
}(this, function() {
    "use strict";

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var e = "undefined" != typeof global && "[object global]" === {}.toString.call(global);

    function i(e, t) {
        return 0 === e.indexOf(t.toLowerCase()) ? e : "".concat(t.toLowerCase()).concat(e.substr(0, 1).toUpperCase()).concat(e.substr(1))
    }

    function c(e) {
        return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)
    }

    function u() {
        var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.id,
            r = t.url,
            o = n || r;
        if (!o) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
        if (e = o, !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e) return "https://vimeo.com/".concat(o);
        if (c(o)) return o.replace("http:", "https:");
        if (n) throw new TypeError("“".concat(n, "” is not a valid video id."));
        throw new TypeError("“".concat(o, "” is not a vimeo.com url."))
    }
    var t = void 0 !== Array.prototype.indexOf,
        n = "undefined" != typeof window && void 0 !== window.postMessage;
    if (!(e || t && n)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
    var o = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    ! function(e) {
        if (!e.WeakMap) {
            var n = Object.prototype.hasOwnProperty,
                o = function(e, t, n) {
                    Object.defineProperty ? Object.defineProperty(e, t, {
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                };
            e.WeakMap = function() {
                function e() {
                    if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
                    if (o(this, "_id", "_WeakMap" + "_" + t() + "." + t()), 0 < arguments.length) throw new TypeError("WeakMap iterable is not supported")
                }

                function r(e, t) {
                    if (!i(e) || !n.call(e, "_id")) throw new TypeError(t + " method called on incompatible receiver " + typeof e)
                }

                function t() {
                    return Math.random().toString().substring(2)
                }
                return o(e.prototype, "delete", function(e) {
                    if (r(this, "delete"), !i(e)) return !1;
                    var t = e[this._id];
                    return !(!t || t[0] !== e) && (delete e[this._id], !0)
                }), o(e.prototype, "get", function(e) {
                    if (r(this, "get"), i(e)) {
                        var t = e[this._id];
                        return t && t[0] === e ? t[1] : void 0
                    }
                }), o(e.prototype, "has", function(e) {
                    if (r(this, "has"), !i(e)) return !1;
                    var t = e[this._id];
                    return !(!t || t[0] !== e)
                }), o(e.prototype, "set", function(e, t) {
                    if (r(this, "set"), !i(e)) throw new TypeError("Invalid value used as weak map key");
                    var n = e[this._id];
                    return n && n[0] === e ? n[1] = t : o(e, this._id, [e, t]), this
                }), o(e, "_polyfill", !0), e
            }()
        }

        function i(e) {
            return Object(e) === e
        }
    }("undefined" != typeof self ? self : "undefined" != typeof window ? window : o);
    var a, s = (function(e) {
            var t, n, r;
            r = function() {
                var t, a, n, e = Object.prototype.toString,
                    r = "undefined" != typeof setImmediate ? function(e) {
                        return setImmediate(e)
                    } : setTimeout;
                try {
                    Object.defineProperty({}, "x", {}), t = function(e, t, n, r) {
                        return Object.defineProperty(e, t, {
                            value: n,
                            writable: !0,
                            configurable: !1 !== r
                        })
                    }
                } catch (e) {
                    t = function(e, t, n) {
                        return e[t] = n, e
                    }
                }

                function i(e, t) {
                    n.add(e, t), a || (a = r(n.drain))
                }

                function u(e) {
                    var t, n = typeof e;
                    return null == e || "object" != n && "function" != n || (t = e.then), "function" == typeof t && t
                }

                function c() {
                    for (var e = 0; e < this.chain.length; e++) o(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                    this.chain.length = 0
                }

                function o(e, t, n) {
                    var r, o;
                    try {
                        !1 === t ? n.reject(e.msg) : (r = !0 === t ? e.msg : t.call(void 0, e.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (o = u(r)) ? o.call(r, n.resolve, n.reject) : n.resolve(r)
                    } catch (e) {
                        n.reject(e)
                    }
                }

                function s(e) {
                    var t = this;
                    t.triggered || (t.triggered = !0, t.def && (t = t.def), t.msg = e, t.state = 2, 0 < t.chain.length && i(c, t))
                }

                function l(e, n, r, o) {
                    for (var t = 0; t < n.length; t++) ! function(t) {
                        e.resolve(n[t]).then(function(e) {
                            r(t, e)
                        }, o)
                    }(t)
                }

                function f(e) {
                    this.def = e, this.triggered = !1
                }

                function d(e) {
                    this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
                }

                function h(e) {
                    if ("function" != typeof e) throw TypeError("Not a function");
                    if (0 !== this.__NPO__) throw TypeError("Not a promise");
                    this.__NPO__ = 1;
                    var r = new d(this);
                    this.then = function(e, t) {
                        var n = {
                            success: "function" != typeof e || e,
                            failure: "function" == typeof t && t
                        };
                        return n.promise = new this.constructor(function(e, t) {
                            if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
                            n.resolve = e, n.reject = t
                        }), r.chain.push(n), 0 !== r.state && i(c, r), n.promise
                    }, this.catch = function(e) {
                        return this.then(void 0, e)
                    };
                    try {
                        e.call(void 0, function(e) {
                            (function e(n) {
                                var r, o = this;
                                if (!o.triggered) {
                                    o.triggered = !0, o.def && (o = o.def);
                                    try {
                                        (r = u(n)) ? i(function() {
                                            var t = new f(o);
                                            try {
                                                r.call(n, function() {
                                                    e.apply(t, arguments)
                                                }, function() {
                                                    s.apply(t, arguments)
                                                })
                                            } catch (e) {
                                                s.call(t, e)
                                            }
                                        }): (o.msg = n, o.state = 1, 0 < o.chain.length && i(c, o))
                                    } catch (e) {
                                        s.call(new f(o), e)
                                    }
                                }
                            }).call(r, e)
                        }, function(e) {
                            s.call(r, e)
                        })
                    } catch (e) {
                        s.call(r, e)
                    }
                }
                n = function() {
                    var n, r, o;

                    function i(e, t) {
                        this.fn = e, this.self = t, this.next = void 0
                    }
                    return {
                        add: function(e, t) {
                            o = new i(e, t), r ? r.next = o : n = o, r = o, o = void 0
                        },
                        drain: function() {
                            var e = n;
                            for (n = r = a = void 0; e;) e.fn.call(e.self), e = e.next
                        }
                    }
                }();
                var v = t({}, "constructor", h, !1);
                return t(h.prototype = v, "__NPO__", 0, !1), t(h, "resolve", function(n) {
                    return n && "object" == typeof n && 1 === n.__NPO__ ? n : new this(function(e, t) {
                        if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
                        e(n)
                    })
                }), t(h, "reject", function(n) {
                    return new this(function(e, t) {
                        if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
                        t(n)
                    })
                }), t(h, "all", function(t) {
                    var a = this;
                    return "[object Array]" != e.call(t) ? a.reject(TypeError("Not an array")) : 0 === t.length ? a.resolve([]) : new a(function(n, e) {
                        if ("function" != typeof n || "function" != typeof e) throw TypeError("Not a function");
                        var r = t.length,
                            o = Array(r),
                            i = 0;
                        l(a, t, function(e, t) {
                            o[e] = t, ++i === r && n(o)
                        }, e)
                    })
                }), t(h, "race", function(t) {
                    var r = this;
                    return "[object Array]" != e.call(t) ? r.reject(TypeError("Not an array")) : new r(function(n, e) {
                        if ("function" != typeof n || "function" != typeof e) throw TypeError("Not a function");
                        l(r, t, function(e, t) {
                            n(t)
                        }, e)
                    })
                }), h
            }, (n = o)[t = "Promise"] = n[t] || r(), e.exports && (e.exports = n[t])
        }(a = {
            exports: {}
        }, a.exports), a.exports),
        l = new WeakMap;

    function f(e, t, n) {
        var r = l.get(e.element) || {};
        t in r || (r[t] = []), r[t].push(n), l.set(e.element, r)
    }

    function d(e, t) {
        return (l.get(e.element) || {})[t] || []
    }

    function h(e, t, n) {
        var r = l.get(e.element) || {};
        if (!r[t]) return !0;
        if (!n) return r[t] = [], l.set(e.element, r), !0;
        var o = r[t].indexOf(n);
        return -1 !== o && r[t].splice(o, 1), l.set(e.element, r), r[t] && 0 === r[t].length
    }
    var v = ["autopause", "autoplay", "background", "byline", "color", "height", "id", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "title", "transparent", "url", "width"];

    function p(r) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        return v.reduce(function(e, t) {
            var n = r.getAttribute("data-vimeo-".concat(t));
            return (n || "" === n) && (e[t] = "" === n ? 1 : n), e
        }, e)
    }

    function m(e, t) {
        var n = e.html;
        if (!t) throw new TypeError("An element must be provided");
        if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe");
        var r = document.createElement("div");
        return r.innerHTML = n, t.appendChild(r.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe")
    }

    function y(i) {
        var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            u = 2 < arguments.length ? arguments[2] : void 0;
        return new Promise(function(t, n) {
            if (!c(i)) throw new TypeError("“".concat(i, "” is not a vimeo.com url."));
            var e = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(i), "&domain=").concat(window.location.hostname);
            for (var r in a) a.hasOwnProperty(r) && (e += "&".concat(r, "=").concat(encodeURIComponent(a[r])));
            var o = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
            o.open("GET", e, !0), o.onload = function() {
                if (404 !== o.status)
                    if (403 !== o.status) try {
                        var e = JSON.parse(o.responseText);
                        if (403 === e.domain_status_code) return m(e, u), void n(new Error("“".concat(i, "” is not embeddable.")));
                        t(e)
                    } catch (e) {
                        n(e)
                    } else n(new Error("“".concat(i, "” is not embeddable.")));
                    else n(new Error("“".concat(i, "” was not found.")))
            }, o.onerror = function() {
                var e = o.status ? " (".concat(o.status, ")") : "";
                n(new Error("There was an error fetching the embed code from Vimeo".concat(e, ".")))
            }, o.send()
        })
    }

    function w(e) {
        return "string" == typeof e && (e = JSON.parse(e)), e
    }

    function g(e, t, n) {
        if (e.element.contentWindow && e.element.contentWindow.postMessage) {
            var r = {
                method: t
            };
            void 0 !== n && (r.value = n);
            var o = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
            8 <= o && o < 10 && (r = JSON.stringify(r)), e.element.contentWindow.postMessage(r, e.origin)
        }
    }

    function b(n, r) {
        var t, e = [];
        if ((r = w(r)).event) {
            if ("error" === r.event) d(n, r.data.method).forEach(function(e) {
                var t = new Error(r.data.message);
                t.name = r.data.name, e.reject(t), h(n, r.data.method, e)
            });
            e = d(n, "event:".concat(r.event)), t = r.data
        } else if (r.method) {
            var o = function(e, t) {
                var n = d(e, t);
                if (n.length < 1) return !1;
                var r = n.shift();
                return h(e, t, r), r
            }(n, r.method);
            o && (e.push(o), t = r.value)
        }
        e.forEach(function(e) {
            try {
                if ("function" == typeof e) return void e.call(n, t);
                e.resolve(t)
            } catch (e) {}
        })
    }
    var E = new WeakMap,
        k = new WeakMap,
        Player = function() {
            function Player(i) {
                var a = this,
                    r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                if (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, Player), window.jQuery && i instanceof jQuery && (1 < i.length && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), i = i[0]), "undefined" != typeof document && "string" == typeof i && (i = document.getElementById(i)), !(i instanceof window.HTMLElement)) throw new TypeError("You must pass either a valid element or a valid id.");
                if ("IFRAME" !== i.nodeName) {
                    var e = i.querySelector("iframe");
                    e && (i = e)
                }
                if ("IFRAME" === i.nodeName && !c(i.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
                if (E.has(i)) return E.get(i);
                this.element = i, this.origin = "*";
                var t = new s(function(o, t) {
                    var e = function(e) {
                        if (c(e.origin) && a.element.contentWindow === e.source) {
                            "*" === a.origin && (a.origin = e.origin);
                            var t = w(e.data),
                                n = "event" in t && "ready" === t.event,
                                r = "method" in t && "ping" === t.method;
                            if (n || r) return a.element.setAttribute("data-ready", "true"), void o();
                            b(a, t)
                        }
                    };
                    if (window.addEventListener ? window.addEventListener("message", e, !1) : window.attachEvent && window.attachEvent("onmessage", e), "IFRAME" !== a.element.nodeName) {
                        var n = p(i, r);
                        y(u(n), n, i).then(function(e) {
                            var t, n, r, o = m(e, i);
                            return a.element = o, a._originalElement = i, t = i, n = o, r = l.get(t), l.set(n, r), l.delete(t), E.set(a.element, a), e
                        }).catch(function(e) {
                            return t(e)
                        })
                    }
                });
                return k.set(this, t), E.set(this.element, this), "IFRAME" === this.element.nodeName && g(this, "ping"), this
            }
            var e, t, n;
            return e = Player, (t = [{
                key: "callMethod",
                value: function(n) {
                    var r = this,
                        o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    return new s(function(e, t) {
                        return r.ready().then(function() {
                            f(r, n, {
                                resolve: e,
                                reject: t
                            }), g(r, n, o)
                        }).catch(function(e) {
                            t(e)
                        })
                    })
                }
            }, {
                key: "get",
                value: function(n) {
                    var r = this;
                    return new s(function(e, t) {
                        return n = i(n, "get"), r.ready().then(function() {
                            f(r, n, {
                                resolve: e,
                                reject: t
                            }), g(r, n)
                        })
                    })
                }
            }, {
                key: "set",
                value: function(r, e) {
                    var o = this;
                    return s.resolve(e).then(function(n) {
                        if (r = i(r, "set"), null == n) throw new TypeError("There must be a value to set.");
                        return o.ready().then(function() {
                            return new s(function(e, t) {
                                f(o, r, {
                                    resolve: e,
                                    reject: t
                                }), g(o, r, n)
                            })
                        })
                    })
                }
            }, {
                key: "on",
                value: function(e, t) {
                    if (!e) throw new TypeError("You must pass an event name.");
                    if (!t) throw new TypeError("You must pass a callback function.");
                    if ("function" != typeof t) throw new TypeError("The callback must be a function.");
                    0 === d(this, "event:".concat(e)).length && this.callMethod("addEventListener", e).catch(function() {}), f(this, "event:".concat(e), t)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    if (!e) throw new TypeError("You must pass an event name.");
                    if (t && "function" != typeof t) throw new TypeError("The callback must be a function.");
                    h(this, "event:".concat(e), t) && this.callMethod("removeEventListener", e).catch(function(e) {})
                }
            }, {
                key: "loadVideo",
                value: function(e) {
                    return this.callMethod("loadVideo", e)
                }
            }, {
                key: "ready",
                value: function() {
                    var e = k.get(this) || new s(function(e, t) {
                        t(new Error("Unknown player. Probably unloaded."))
                    });
                    return s.resolve(e)
                }
            }, {
                key: "addCuePoint",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.callMethod("addCuePoint", {
                        time: e,
                        data: t
                    })
                }
            }, {
                key: "removeCuePoint",
                value: function(e) {
                    return this.callMethod("removeCuePoint", e)
                }
            }, {
                key: "enableTextTrack",
                value: function(e, t) {
                    if (!e) throw new TypeError("You must pass a language.");
                    return this.callMethod("enableTextTrack", {
                        language: e,
                        kind: t
                    })
                }
            }, {
                key: "disableTextTrack",
                value: function() {
                    return this.callMethod("disableTextTrack")
                }
            }, {
                key: "pause",
                value: function() {
                    return this.callMethod("pause")
                }
            }, {
                key: "play",
                value: function() {
                    return this.callMethod("play")
                }
            }, {
                key: "unload",
                value: function() {
                    return this.callMethod("unload")
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    return new s(function(e) {
                        k.delete(t), E.delete(t.element), t._originalElement && (E.delete(t._originalElement), t._originalElement.removeAttribute("data-vimeo-initialized")), t.element && "IFRAME" === t.element.nodeName && t.element.parentNode && t.element.parentNode.removeChild(t.element), e()
                    })
                }
            }, {
                key: "getAutopause",
                value: function() {
                    return this.get("autopause")
                }
            }, {
                key: "setAutopause",
                value: function(e) {
                    return this.set("autopause", e)
                }
            }, {
                key: "getColor",
                value: function() {
                    return this.get("color")
                }
            }, {
                key: "setColor",
                value: function(e) {
                    return this.set("color", e)
                }
            }, {
                key: "getCuePoints",
                value: function() {
                    return this.get("cuePoints")
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.get("currentTime")
                }
            }, {
                key: "setCurrentTime",
                value: function(e) {
                    return this.set("currentTime", e)
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.get("duration")
                }
            }, {
                key: "getEnded",
                value: function() {
                    return this.get("ended")
                }
            }, {
                key: "getLoop",
                value: function() {
                    return this.get("loop")
                }
            }, {
                key: "setLoop",
                value: function(e) {
                    return this.set("loop", e)
                }
            }, {
                key: "getPaused",
                value: function() {
                    return this.get("paused")
                }
            }, {
                key: "getPlaybackRate",
                value: function() {
                    return this.get("playbackRate")
                }
            }, {
                key: "setPlaybackRate",
                value: function(e) {
                    return this.set("playbackRate", e)
                }
            }, {
                key: "getTextTracks",
                value: function() {
                    return this.get("textTracks")
                }
            }, {
                key: "getVideoEmbedCode",
                value: function() {
                    return this.get("videoEmbedCode")
                }
            }, {
                key: "getVideoId",
                value: function() {
                    return this.get("videoId")
                }
            }, {
                key: "getVideoTitle",
                value: function() {
                    return this.get("videoTitle")
                }
            }, {
                key: "getVideoWidth",
                value: function() {
                    return this.get("videoWidth")
                }
            }, {
                key: "getVideoHeight",
                value: function() {
                    return this.get("videoHeight")
                }
            }, {
                key: "getVideoUrl",
                value: function() {
                    return this.get("videoUrl")
                }
            }, {
                key: "getVolume",
                value: function() {
                    return this.get("volume")
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    return this.set("volume", e)
                }
            }]) && r(e.prototype, t), n && r(e, n), Player
        }();
    return e || (function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document,
            t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
            n = function(e) {
                "console" in window && console.error && console.error("There was an error creating an embed: ".concat(e))
            };
        t.forEach(function(t) {
            try {
                if (null !== t.getAttribute("data-vimeo-defer")) return;
                var e = p(t);
                y(u(e), e, t).then(function(e) {
                    return m(e, t)
                }).catch(n)
            } catch (e) {
                n(e)
            }
        })
    }(), function() {
        var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document;
        if (!window.VimeoPlayerResizeEmbeds_) {
            window.VimeoPlayerResizeEmbeds_ = !0;
            var e = function(e) {
                if (c(e.origin) && e.data && "spacechange" === e.data.event)
                    for (var t = r.querySelectorAll("iframe"), n = 0; n < t.length; n++)
                        if (t[n].contentWindow === e.source) {
                            t[n].parentElement.style.paddingBottom = "".concat(e.data.data[0].bottom, "px");
                            break
                        }
            };
            window.addEventListener ? window.addEventListener("message", e, !1) : window.attachEvent && window.attachEvent("onmessage", e)
        }
    }()), Player
});}