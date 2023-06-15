! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).CodeMirror = t() }(this, function() { "use strict"; var e = navigator.userAgent,
		t = navigator.platform,
		r = /gecko\/\d/i.test(e),
		n = /MSIE \d/.test(e),
		i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
		o = /Edge\/(\d+)/.exec(e),
		l = n || i || o,
		a = l && (n ? document.documentMode || 6 : +(o || i)[1]),
		s = !o && /WebKit\//.test(e),
		u = s && /Qt\/\d+\.\d+/.test(e),
		c = !o && /Chrome\//.test(e),
		f = /Opera\//.test(e),
		d = /Apple Computer/.test(navigator.vendor),
		h = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
		p = /PhantomJS/.test(e),
		g = d && (/Mobile\/\w+/.test(e) || navigator.maxTouchPoints > 2),
		m = /Android/.test(e),
		v = g || m || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
		y = g || /Mac/.test(t),
		b = /\bCrOS\b/.test(e),
		x = /win/i.test(t),
		w = f && e.match(/Version\/(\d*\.\d*)/);
	w && (w = Number(w[1])), w && w >= 15 && (f = !1, s = !0); var C = y && (u || f && (null == w || w < 12.11)),
		k = r || l && a >= 9;

	function S(e) { return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*") } var L, M = function(e, t) { var r = e.className,
			n = S(t).exec(r); if(n) { var i = r.slice(n.index + n[0].length);
			e.className = r.slice(0, n.index) + (i ? n[1] + i : "") } };

	function T(e) { for(var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild); return e }

	function N(e, t) { return T(e).appendChild(t) }

	function A(e, t, r, n) { var i = document.createElement(e); if(r && (i.className = r), n && (i.style.cssText = n), "string" == typeof t) i.appendChild(document.createTextNode(t));
		else if(t)
			for(var o = 0; o < t.length; ++o) i.appendChild(t[o]); return i }

	function O(e, t, r, n) { var i = A(e, t, r, n); return i.setAttribute("role", "presentation"), i }

	function D(e, t) { if(3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);
		do { if(11 == t.nodeType && (t = t.host), t == e) return !0 } while(t = t.parentNode) }

	function W() { var e; try { e = document.activeElement } catch (t) { e = document.body || null } for(; e && e.shadowRoot && e.shadowRoot.activeElement;) e = e.shadowRoot.activeElement; return e }

	function E(e, t) { var r = e.className;
		S(t).test(r) || (e.className += (r ? " " : "") + t) }

	function H(e, t) { for(var r = e.split(" "), n = 0; n < r.length; n++) r[n] && !S(r[n]).test(t) && (t += " " + r[n]); return t } L = document.createRange ? function(e, t, r, n) { var i = document.createRange(); return i.setEnd(n || e, r), i.setStart(e, t), i } : function(e, t, r) { var n = document.body.createTextRange(); try { n.moveToElementText(e.parentNode) } catch (e) { return n } return n.collapse(!0), n.moveEnd("character", r), n.moveStart("character", t), n }; var F = function(e) { e.select() };

	function P(e) { var t = Array.prototype.slice.call(arguments, 1); return function() { return e.apply(null, t) } }

	function z(e, t, r) { for(var n in t || (t = {}), e) !e.hasOwnProperty(n) || !1 === r && t.hasOwnProperty(n) || (t[n] = e[n]); return t }

	function I(e, t, r, n, i) { null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length); for(var o = n || 0, l = i || 0;;) { var a = e.indexOf("\t", o); if(a < 0 || a >= t) return l + (t - o);
			l += a - o, l += r - l % r, o = a + 1 } } g ? F = function(e) { e.selectionStart = 0, e.selectionEnd = e.value.length } : l && (F = function(e) { try { e.select() } catch (e) {} }); var R = function() { this.id = null, this.f = null, this.time = 0, this.handler = P(this.onTimeout, this) };

	function _(e, t) { for(var r = 0; r < e.length; ++r)
			if(e[r] == t) return r; return -1 } R.prototype.onTimeout = function(e) { e.id = 0, e.time <= +new Date ? e.f() : setTimeout(e.handler, e.time - +new Date) }, R.prototype.set = function(e, t) { this.f = t; var r = +new Date + e;
		(!this.id || r < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e), this.time = r) }; var B = 50,
		j = { toString: function() { return "CodeMirror.Pass" } },
		V = { scroll: !1 },
		G = { origin: "*mouse" },
		U = { origin: "+move" };

	function K(e, t, r) { for(var n = 0, i = 0;;) { var o = e.indexOf("\t", n); - 1 == o && (o = e.length); var l = o - n; if(o == e.length || i + l >= t) return n + Math.min(l, t - i); if(i += o - n, n = o + 1, (i += r - i % r) >= t) return n } } var q = [""];

	function $(e) { for(; q.length <= e;) q.push(X(q) + " "); return q[e] }

	function X(e) { return e[e.length - 1] }

	function Y(e, t) { for(var r = [], n = 0; n < e.length; n++) r[n] = t(e[n], n); return r }

	function Z() {}

	function Q(e, t) { var r; return Object.create ? r = Object.create(e) : (Z.prototype = e, r = new Z), t && z(t, r), r } var J = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

	function ee(e) { return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || J.test(e)) }

	function te(e, t) { return t ? !!(t.source.indexOf("\\w") > -1 && ee(e)) || t.test(e) : ee(e) }

	function re(e) { for(var t in e)
			if(e.hasOwnProperty(t) && e[t]) return !1; return !0 } var ne = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

	function ie(e) { return e.charCodeAt(0) >= 768 && ne.test(e) }

	function oe(e, t, r) { for(;
			(r < 0 ? t > 0 : t < e.length) && ie(e.charAt(t));) t += r; return t }

	function le(e, t, r) { for(var n = t > r ? -1 : 1;;) { if(t == r) return t; var i = (t + r) / 2,
				o = n < 0 ? Math.ceil(i) : Math.floor(i); if(o == t) return e(o) ? t : r;
			e(o) ? r = o : t = o + n } } var ae = null;

	function se(e, t, r) { var n;
		ae = null; for(var i = 0; i < e.length; ++i) { var o = e[i]; if(o.from < t && o.to > t) return i;
			o.to == t && (o.from != o.to && "before" == r ? n = i : ae = i), o.from == t && (o.from != o.to && "before" != r ? n = i : ae = i) } return null != n ? n : ae } var ue = function() { var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
			t = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111"; var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
			n = /[stwN]/,
			i = /[LRr]/,
			o = /[Lb1n]/,
			l = /[1n]/;

		function a(e, t, r) { this.level = e, this.from = t, this.to = r } return function(s, u) { var c = "ltr" == u ? "L" : "R"; if(0 == s.length || "ltr" == u && !r.test(s)) return !1; for(var f, d = s.length, h = [], p = 0; p < d; ++p) h.push((f = s.charCodeAt(p)) <= 247 ? e.charAt(f) : 1424 <= f && f <= 1524 ? "R" : 1536 <= f && f <= 1785 ? t.charAt(f - 1536) : 1774 <= f && f <= 2220 ? "r" : 8192 <= f && f <= 8203 ? "w" : 8204 == f ? "b" : "L"); for(var g = 0, m = c; g < d; ++g) { var v = h[g]; "m" == v ? h[g] = m : m = v } for(var y = 0, b = c; y < d; ++y) { var x = h[y]; "1" == x && "r" == b ? h[y] = "n" : i.test(x) && (b = x, "r" == x && (h[y] = "R")) } for(var w = 1, C = h[0]; w < d - 1; ++w) { var k = h[w]; "+" == k && "1" == C && "1" == h[w + 1] ? h[w] = "1" : "," != k || C != h[w + 1] || "1" != C && "n" != C || (h[w] = C), C = k } for(var S = 0; S < d; ++S) { var L = h[S]; if("," == L) h[S] = "N";
				else if("%" == L) { var M = void 0; for(M = S + 1; M < d && "%" == h[M]; ++M); for(var T = S && "!" == h[S - 1] || M < d && "1" == h[M] ? "1" : "N", N = S; N < M; ++N) h[N] = T;
					S = M - 1 } } for(var A = 0, O = c; A < d; ++A) { var D = h[A]; "L" == O && "1" == D ? h[A] = "L" : i.test(D) && (O = D) } for(var W = 0; W < d; ++W)
				if(n.test(h[W])) { var E = void 0; for(E = W + 1; E < d && n.test(h[E]); ++E); for(var H = "L" == (W ? h[W - 1] : c), F = H == ("L" == (E < d ? h[E] : c)) ? H ? "L" : "R" : c, P = W; P < E; ++P) h[P] = F;
					W = E - 1 } for(var z, I = [], R = 0; R < d;)
				if(o.test(h[R])) { var _ = R; for(++R; R < d && o.test(h[R]); ++R);
					I.push(new a(0, _, R)) } else { var B = R,
						j = I.length,
						V = "rtl" == u ? 1 : 0; for(++R; R < d && "L" != h[R]; ++R); for(var G = B; G < R;)
						if(l.test(h[G])) { B < G && (I.splice(j, 0, new a(1, B, G)), j += V); var U = G; for(++G; G < R && l.test(h[G]); ++G);
							I.splice(j, 0, new a(2, U, G)), j += V, B = G } else ++G;
					B < R && I.splice(j, 0, new a(1, B, R)) } return "ltr" == u && (1 == I[0].level && (z = s.match(/^\s+/)) && (I[0].from = z[0].length, I.unshift(new a(0, 0, z[0].length))), 1 == X(I).level && (z = s.match(/\s+$/)) && (X(I).to -= z[0].length, I.push(new a(0, d - z[0].length, d)))), "rtl" == u ? I.reverse() : I } }();

	function ce(e, t) { var r = e.order; return null == r && (r = e.order = ue(e.text, t)), r } var fe = [],
		de = function(e, t, r) { if(e.addEventListener) e.addEventListener(t, r, !1);
			else if(e.attachEvent) e.attachEvent("on" + t, r);
			else { var n = e._handlers || (e._handlers = {});
				n[t] = (n[t] || fe).concat(r) } };

	function he(e, t) { return e._handlers && e._handlers[t] || fe }

	function pe(e, t, r) { if(e.removeEventListener) e.removeEventListener(t, r, !1);
		else if(e.detachEvent) e.detachEvent("on" + t, r);
		else { var n = e._handlers,
				i = n && n[t]; if(i) { var o = _(i, r);
				o > -1 && (n[t] = i.slice(0, o).concat(i.slice(o + 1))) } } }

	function ge(e, t) { var r = he(e, t); if(r.length)
			for(var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i) r[i].apply(null, n) }

	function me(e, t, r) { return "string" == typeof t && (t = { type: t, preventDefault: function() { this.defaultPrevented = !0 } }), ge(e, r || t.type, e, t), Ce(t) || t.codemirrorIgnore }

	function ve(e) { var t = e._handlers && e._handlers.cursorActivity; if(t)
			for(var r = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), n = 0; n < t.length; ++n) - 1 == _(r, t[n]) && r.push(t[n]) }

	function ye(e, t) { return he(e, t).length > 0 }

	function be(e) { e.prototype.on = function(e, t) { de(this, e, t) }, e.prototype.off = function(e, t) { pe(this, e, t) } }

	function xe(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1 }

	function we(e) { e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0 }

	function Ce(e) { return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue }

	function ke(e) { xe(e), we(e) }

	function Se(e) { return e.target || e.srcElement }

	function Le(e) { var t = e.which; return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), y && e.ctrlKey && 1 == t && (t = 3), t } var Me, Te, Ne = function() { if(l && a < 9) return !1; var e = A("div"); return "draggable" in e || "dragDrop" in e }();

	function Ae(e) { if(null == Me) { var t = A("span", "​");
			N(e, A("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Me = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(l && a < 8)) } var r = Me ? A("span", "​") : A("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px"); return r.setAttribute("cm-text", ""), r }

	function Oe(e) { if(null != Te) return Te; var t = N(e, document.createTextNode("AخA")),
			r = L(t, 0, 1).getBoundingClientRect(),
			n = L(t, 1, 2).getBoundingClientRect(); return T(e), !(!r || r.left == r.right) && (Te = n.right - r.right < 3) } var De, We = 3 != "\n\nb".split(/\n/).length ? function(e) { for(var t = 0, r = [], n = e.length; t <= n;) { var i = e.indexOf("\n", t); - 1 == i && (i = e.length); var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
					l = o.indexOf("\r"); - 1 != l ? (r.push(o.slice(0, l)), t += l + 1) : (r.push(o), t = i + 1) } return r } : function(e) { return e.split(/\r\n?|\n/) },
		Ee = window.getSelection ? function(e) { try { return e.selectionStart != e.selectionEnd } catch (e) { return !1 } } : function(e) { var t; try { t = e.ownerDocument.selection.createRange() } catch (e) {} return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t) },
		He = "oncopy" in (De = A("div")) || (De.setAttribute("oncopy", "return;"), "function" == typeof De.oncopy),
		Fe = null; var Pe = {},
		ze = {};

	function Ie(e) { if("string" == typeof e && ze.hasOwnProperty(e)) e = ze[e];
		else if(e && "string" == typeof e.name && ze.hasOwnProperty(e.name)) { var t = ze[e.name]; "string" == typeof t && (t = { name: t }), (e = Q(t, e)).name = t.name } else { if("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Ie("application/xml"); if("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Ie("application/json") } return "string" == typeof e ? { name: e } : e || { name: "null" } }

	function Re(e, t) { t = Ie(t); var r = Pe[t.name]; if(!r) return Re(e, "text/plain"); var n = r(e, t); if(_e.hasOwnProperty(t.name)) { var i = _e[t.name]; for(var o in i) i.hasOwnProperty(o) && (n.hasOwnProperty(o) && (n["_" + o] = n[o]), n[o] = i[o]) } if(n.name = t.name, t.helperType && (n.helperType = t.helperType), t.modeProps)
			for(var l in t.modeProps) n[l] = t.modeProps[l]; return n } var _e = {};

	function Be(e, t) { z(t, _e.hasOwnProperty(e) ? _e[e] : _e[e] = {}) }

	function je(e, t) { if(!0 === t) return t; if(e.copyState) return e.copyState(t); var r = {}; for(var n in t) { var i = t[n];
			i instanceof Array && (i = i.concat([])), r[n] = i } return r }

	function Ve(e, t) { for(var r; e.innerMode && (r = e.innerMode(t)) && r.mode != e;) t = r.state, e = r.mode; return r || { mode: e, state: t } }

	function Ge(e, t, r) { return !e.startState || e.startState(t, r) } var Ue = function(e, t, r) { this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = r };

	function Ke(e, t) { if((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document."); for(var r = e; !r.lines;)
			for(var n = 0;; ++n) { var i = r.children[n],
					o = i.chunkSize(); if(t < o) { r = i; break } t -= o }
		return r.lines[t] }

	function qe(e, t, r) { var n = [],
			i = t.line; return e.iter(t.line, r.line + 1, function(e) { var o = e.text;
			i == r.line && (o = o.slice(0, r.ch)), i == t.line && (o = o.slice(t.ch)), n.push(o), ++i }), n }

	function $e(e, t, r) { var n = []; return e.iter(t, r, function(e) { n.push(e.text) }), n }

	function Xe(e, t) { var r = t - e.height; if(r)
			for(var n = e; n; n = n.parent) n.height += r }

	function Ye(e) { if(null == e.parent) return null; for(var t = e.parent, r = _(t.lines, e), n = t.parent; n; t = n, n = n.parent)
			for(var i = 0; n.children[i] != t; ++i) r += n.children[i].chunkSize(); return r + t.first }

	function Ze(e, t) { var r = e.first;
		e: do { for(var n = 0; n < e.children.length; ++n) { var i = e.children[n],
					o = i.height; if(t < o) { e = i; continue e } t -= o, r += i.chunkSize() } return r } while(!e.lines); for(var l = 0; l < e.lines.length; ++l) { var a = e.lines[l].height; if(t < a) break;
			t -= a } return r + l }

	function Qe(e, t) { return t >= e.first && t < e.first + e.size }

	function Je(e, t) { return String(e.lineNumberFormatter(t + e.firstLineNumber)) }

	function et(e, t, r) { if(void 0 === r && (r = null), !(this instanceof et)) return new et(e, t, r);
		this.line = e, this.ch = t, this.sticky = r }

	function tt(e, t) { return e.line - t.line || e.ch - t.ch }

	function rt(e, t) { return e.sticky == t.sticky && 0 == tt(e, t) }

	function nt(e) { return et(e.line, e.ch) }

	function it(e, t) { return tt(e, t) < 0 ? t : e }

	function ot(e, t) { return tt(e, t) < 0 ? e : t }

	function lt(e, t) { return Math.max(e.first, Math.min(t, e.first + e.size - 1)) }

	function at(e, t) { if(t.line < e.first) return et(e.first, 0); var r = e.first + e.size - 1; return t.line > r ? et(r, Ke(e, r).text.length) : function(e, t) { var r = e.ch; return null == r || r > t ? et(e.line, t) : r < 0 ? et(e.line, 0) : e }(t, Ke(e, t.line).text.length) }

	function st(e, t) { for(var r = [], n = 0; n < t.length; n++) r[n] = at(e, t[n]); return r } Ue.prototype.eol = function() { return this.pos >= this.string.length }, Ue.prototype.sol = function() { return this.pos == this.lineStart }, Ue.prototype.peek = function() { return this.string.charAt(this.pos) || void 0 }, Ue.prototype.next = function() { if(this.pos < this.string.length) return this.string.charAt(this.pos++) }, Ue.prototype.eat = function(e) { var t = this.string.charAt(this.pos); if("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t }, Ue.prototype.eatWhile = function(e) { for(var t = this.pos; this.eat(e);); return this.pos > t }, Ue.prototype.eatSpace = function() { for(var e = this.pos;
			/[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos; return this.pos > e }, Ue.prototype.skipToEnd = function() { this.pos = this.string.length }, Ue.prototype.skipTo = function(e) { var t = this.string.indexOf(e, this.pos); if(t > -1) return this.pos = t, !0 }, Ue.prototype.backUp = function(e) { this.pos -= e }, Ue.prototype.column = function() { return this.lastColumnPos < this.start && (this.lastColumnValue = I(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? I(this.string, this.lineStart, this.tabSize) : 0) }, Ue.prototype.indentation = function() { return I(this.string, null, this.tabSize) - (this.lineStart ? I(this.string, this.lineStart, this.tabSize) : 0) }, Ue.prototype.match = function(e, t, r) { if("string" != typeof e) { var n = this.string.slice(this.pos).match(e); return n && n.index > 0 ? null : (n && !1 !== t && (this.pos += n[0].length), n) } var i = function(e) { return r ? e.toLowerCase() : e }; if(i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0 }, Ue.prototype.current = function() { return this.string.slice(this.start, this.pos) }, Ue.prototype.hideFirstChars = function(e, t) { this.lineStart += e; try { return t() } finally { this.lineStart -= e } }, Ue.prototype.lookAhead = function(e) { var t = this.lineOracle; return t && t.lookAhead(e) }, Ue.prototype.baseToken = function() { var e = this.lineOracle; return e && e.baseToken(this.pos) }; var ut = function(e, t) { this.state = e, this.lookAhead = t },
		ct = function(e, t, r, n) { this.state = t, this.doc = e, this.line = r, this.maxLookAhead = n || 0, this.baseTokens = null, this.baseTokenPos = 1 };

	function ft(e, t, r, n) { var i = [e.state.modeGen],
			o = {};
		xt(e, t.text, e.doc.mode, r, function(e, t) { return i.push(e, t) }, o, n); for(var l = r.state, a = function(n) { r.baseTokens = i; var a = e.state.overlays[n],
					s = 1,
					u = 0;
				r.state = !0, xt(e, t.text, a.mode, r, function(e, t) { for(var r = s; u < e;) { var n = i[s];
						n > e && i.splice(s, 1, e, i[s + 1], n), s += 2, u = Math.min(e, n) } if(t)
						if(a.opaque) i.splice(r, s - r, e, "overlay " + t), s = r + 2;
						else
							for(; r < s; r += 2) { var o = i[r + 1];
								i[r + 1] = (o ? o + " " : "") + "overlay " + t } }, o), r.state = l, r.baseTokens = null, r.baseTokenPos = 1 }, s = 0; s < e.state.overlays.length; ++s) a(s); return { styles: i, classes: o.bgClass || o.textClass ? o : null } }

	function dt(e, t, r) { if(!t.styles || t.styles[0] != e.state.modeGen) { var n = ht(e, Ye(t)),
				i = t.text.length > e.options.maxHighlightLength && je(e.doc.mode, n.state),
				o = ft(e, t, n);
			i && (n.state = i), t.stateAfter = n.save(!i), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), r === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier)) } return t.styles }

	function ht(e, t, r) { var n = e.doc,
			i = e.display; if(!n.mode.startState) return new ct(n, !0, t); var o = function(e, t, r) { for(var n, i, o = e.doc, l = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), a = t; a > l; --a) { if(a <= o.first) return o.first; var s = Ke(o, a - 1),
						u = s.stateAfter; if(u && (!r || a + (u instanceof ut ? u.lookAhead : 0) <= o.modeFrontier)) return a; var c = I(s.text, null, e.options.tabSize);
					(null == i || n > c) && (i = a - 1, n = c) } return i }(e, t, r),
			l = o > n.first && Ke(n, o - 1).stateAfter,
			a = l ? ct.fromSaved(n, l, o) : new ct(n, Ge(n.mode), o); return n.iter(o, t, function(r) { pt(e, r.text, a); var n = a.line;
			r.stateAfter = n == t - 1 || n % 5 == 0 || n >= i.viewFrom && n < i.viewTo ? a.save() : null, a.nextLine() }), r && (n.modeFrontier = a.line), a }

	function pt(e, t, r, n) { var i = e.doc.mode,
			o = new Ue(t, e.options.tabSize, r); for(o.start = o.pos = n || 0, "" == t && gt(i, r.state); !o.eol();) mt(i, o, r.state), o.start = o.pos }

	function gt(e, t) { if(e.blankLine) return e.blankLine(t); if(e.innerMode) { var r = Ve(e, t); return r.mode.blankLine ? r.mode.blankLine(r.state) : void 0 } }

	function mt(e, t, r, n) { for(var i = 0; i < 10; i++) { n && (n[0] = Ve(e, r).mode); var o = e.token(t, r); if(t.pos > t.start) return o } throw new Error("Mode " + e.name + " failed to advance stream.") } ct.prototype.lookAhead = function(e) { var t = this.doc.getLine(this.line + e); return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t }, ct.prototype.baseToken = function(e) { if(!this.baseTokens) return null; for(; this.baseTokens[this.baseTokenPos] <= e;) this.baseTokenPos += 2; var t = this.baseTokens[this.baseTokenPos + 1]; return { type: t && t.replace(/( |^)overlay .*/, ""), size: this.baseTokens[this.baseTokenPos] - e } }, ct.prototype.nextLine = function() { this.line++, this.maxLookAhead > 0 && this.maxLookAhead-- }, ct.fromSaved = function(e, t, r) { return t instanceof ut ? new ct(e, je(e.mode, t.state), r, t.lookAhead) : new ct(e, je(e.mode, t), r) }, ct.prototype.save = function(e) { var t = !1 !== e ? je(this.doc.mode, this.state) : this.state; return this.maxLookAhead > 0 ? new ut(t, this.maxLookAhead) : t }; var vt = function(e, t, r) { this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = r };

	function yt(e, t, r, n) { var i, o, l = e.doc,
			a = l.mode,
			s = Ke(l, (t = at(l, t)).line),
			u = ht(e, t.line, r),
			c = new Ue(s.text, e.options.tabSize, u); for(n && (o = []);
			(n || c.pos < t.ch) && !c.eol();) c.start = c.pos, i = mt(a, c, u.state), n && o.push(new vt(c, i, je(l.mode, u.state))); return n ? o : new vt(c, i, u.state) }

	function bt(e, t) { if(e)
			for(;;) { var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/); if(!r) break;
				e = e.slice(0, r.index) + e.slice(r.index + r[0].length); var n = r[1] ? "bgClass" : "textClass";
				null == t[n] ? t[n] = r[2] : new RegExp("(?:^|\\s)" + r[2] + "(?:$|\\s)").test(t[n]) || (t[n] += " " + r[2]) }
		return e }

	function xt(e, t, r, n, i, o, l) { var a = r.flattenSpans;
		null == a && (a = e.options.flattenSpans); var s, u = 0,
			c = null,
			f = new Ue(t, e.options.tabSize, n),
			d = e.options.addModeClass && [null]; for("" == t && bt(gt(r, n.state), o); !f.eol();) { if(f.pos > e.options.maxHighlightLength ? (a = !1, l && pt(e, t, n, f.pos), f.pos = t.length, s = null) : s = bt(mt(r, f, n.state, d), o), d) { var h = d[0].name;
				h && (s = "m-" + (s ? h + " " + s : h)) } if(!a || c != s) { for(; u < f.start;) i(u = Math.min(f.start, u + 5e3), c);
				c = s } f.start = f.pos } for(; u < f.pos;) { var p = Math.min(f.pos, u + 5e3);
			i(p, c), u = p } } var wt = !1,
		Ct = !1;

	function kt(e, t, r) { this.marker = e, this.from = t, this.to = r }

	function St(e, t) { if(e)
			for(var r = 0; r < e.length; ++r) { var n = e[r]; if(n.marker == t) return n } }

	function Lt(e, t) { for(var r, n = 0; n < e.length; ++n) e[n] != t && (r || (r = [])).push(e[n]); return r }

	function Mt(e, t) { if(t.full) return null; var r = Qe(e, t.from.line) && Ke(e, t.from.line).markedSpans,
			n = Qe(e, t.to.line) && Ke(e, t.to.line).markedSpans; if(!r && !n) return null; var i = t.from.ch,
			o = t.to.ch,
			l = 0 == tt(t.from, t.to),
			a = function(e, t, r) { var n; if(e)
					for(var i = 0; i < e.length; ++i) { var o = e[i],
							l = o.marker; if(null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t) || o.from == t && "bookmark" == l.type && (!r || !o.marker.insertLeft)) { var a = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
							(n || (n = [])).push(new kt(l, o.from, a ? null : o.to)) } }
				return n }(r, i, l),
			s = function(e, t, r) { var n; if(e)
					for(var i = 0; i < e.length; ++i) { var o = e[i],
							l = o.marker; if(null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t) || o.from == t && "bookmark" == l.type && (!r || o.marker.insertLeft)) { var a = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
							(n || (n = [])).push(new kt(l, a ? null : o.from - t, null == o.to ? null : o.to - t)) } }
				return n }(n, o, l),
			u = 1 == t.text.length,
			c = X(t.text).length + (u ? i : 0); if(a)
			for(var f = 0; f < a.length; ++f) { var d = a[f]; if(null == d.to) { var h = St(s, d.marker);
					h ? u && (d.to = null == h.to ? null : h.to + c) : d.to = i } }
		if(s)
			for(var p = 0; p < s.length; ++p) { var g = s[p]; if(null != g.to && (g.to += c), null == g.from) St(a, g.marker) || (g.from = c, u && (a || (a = [])).push(g));
				else g.from += c, u && (a || (a = [])).push(g) } a && (a = Tt(a)), s && s != a && (s = Tt(s)); var m = [a]; if(!u) { var v, y = t.text.length - 2; if(y > 0 && a)
				for(var b = 0; b < a.length; ++b) null == a[b].to && (v || (v = [])).push(new kt(a[b].marker, null, null)); for(var x = 0; x < y; ++x) m.push(v);
			m.push(s) } return m }

	function Tt(e) { for(var t = 0; t < e.length; ++t) { var r = e[t];
			null != r.from && r.from == r.to && !1 !== r.marker.clearWhenEmpty && e.splice(t--, 1) } return e.length ? e : null }

	function Nt(e) { var t = e.markedSpans; if(t) { for(var r = 0; r < t.length; ++r) t[r].marker.detachLine(e);
			e.markedSpans = null } }

	function At(e, t) { if(t) { for(var r = 0; r < t.length; ++r) t[r].marker.attachLine(e);
			e.markedSpans = t } }

	function Ot(e) { return e.inclusiveLeft ? -1 : 0 }

	function Dt(e) { return e.inclusiveRight ? 1 : 0 }

	function Wt(e, t) { var r = e.lines.length - t.lines.length; if(0 != r) return r; var n = e.find(),
			i = t.find(),
			o = tt(n.from, i.from) || Ot(e) - Ot(t); if(o) return -o; var l = tt(n.to, i.to) || Dt(e) - Dt(t); return l || t.id - e.id }

	function Et(e, t) { var r, n = Ct && e.markedSpans; if(n)
			for(var i = void 0, o = 0; o < n.length; ++o)(i = n[o]).marker.collapsed && null == (t ? i.from : i.to) && (!r || Wt(r, i.marker) < 0) && (r = i.marker); return r }

	function Ht(e) { return Et(e, !0) }

	function Ft(e) { return Et(e, !1) }

	function Pt(e, t) { var r, n = Ct && e.markedSpans; if(n)
			for(var i = 0; i < n.length; ++i) { var o = n[i];
				o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!r || Wt(r, o.marker) < 0) && (r = o.marker) }
		return r }

	function zt(e, t, r, n, i) { var o = Ke(e, t),
			l = Ct && o.markedSpans; if(l)
			for(var a = 0; a < l.length; ++a) { var s = l[a]; if(s.marker.collapsed) { var u = s.marker.find(0),
						c = tt(u.from, r) || Ot(s.marker) - Ot(i),
						f = tt(u.to, n) || Dt(s.marker) - Dt(i); if(!(c >= 0 && f <= 0 || c <= 0 && f >= 0) && (c <= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? tt(u.to, r) >= 0 : tt(u.to, r) > 0) || c >= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? tt(u.from, n) <= 0 : tt(u.from, n) < 0))) return !0 } } }

	function It(e) { for(var t; t = Ht(e);) e = t.find(-1, !0).line; return e }

	function Rt(e, t) { var r = Ke(e, t),
			n = It(r); return r == n ? t : Ye(n) }

	function _t(e, t) { if(t > e.lastLine()) return t; var r, n = Ke(e, t); if(!Bt(e, n)) return t; for(; r = Ft(n);) n = r.find(1, !0).line; return Ye(n) + 1 }

	function Bt(e, t) { var r = Ct && t.markedSpans; if(r)
			for(var n = void 0, i = 0; i < r.length; ++i)
				if((n = r[i]).marker.collapsed) { if(null == n.from) return !0; if(!n.marker.widgetNode && 0 == n.from && n.marker.inclusiveLeft && jt(e, t, n)) return !0 } }

	function jt(e, t, r) { if(null == r.to) { var n = r.marker.find(1, !0); return jt(e, n.line, St(n.line.markedSpans, r.marker)) } if(r.marker.inclusiveRight && r.to == t.text.length) return !0; for(var i = void 0, o = 0; o < t.markedSpans.length; ++o)
			if((i = t.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == r.to && (null == i.to || i.to != r.from) && (i.marker.inclusiveLeft || r.marker.inclusiveRight) && jt(e, t, i)) return !0 }

	function Vt(e) { for(var t = 0, r = (e = It(e)).parent, n = 0; n < r.lines.length; ++n) { var i = r.lines[n]; if(i == e) break;
			t += i.height } for(var o = r.parent; o; o = (r = o).parent)
			for(var l = 0; l < o.children.length; ++l) { var a = o.children[l]; if(a == r) break;
				t += a.height }
		return t }

	function Gt(e) { if(0 == e.height) return 0; for(var t, r = e.text.length, n = e; t = Ht(n);) { var i = t.find(0, !0);
			n = i.from.line, r += i.from.ch - i.to.ch } for(n = e; t = Ft(n);) { var o = t.find(0, !0);
			r -= n.text.length - o.from.ch, r += (n = o.to.line).text.length - o.to.ch } return r }

	function Ut(e) { var t = e.display,
			r = e.doc;
		t.maxLine = Ke(r, r.first), t.maxLineLength = Gt(t.maxLine), t.maxLineChanged = !0, r.iter(function(e) { var r = Gt(e);
			r > t.maxLineLength && (t.maxLineLength = r, t.maxLine = e) }) } var Kt = function(e, t, r) { this.text = e, At(this, t), this.height = r ? r(this) : 1 };

	function qt(e) { e.parent = null, Nt(e) } Kt.prototype.lineNo = function() { return Ye(this) }, be(Kt); var $t = {},
		Xt = {};

	function Yt(e, t) { if(!e || /^\s*$/.test(e)) return null; var r = t.addModeClass ? Xt : $t; return r[e] || (r[e] = e.replace(/\S+/g, "cm-$&")) }

	function Zt(e, t) { var r = O("span", null, null, s ? "padding-right: .1px" : null),
			n = { pre: O("pre", [r], "CodeMirror-line"), content: r, col: 0, pos: 0, cm: e, trailingSpace: !1, splitSpaces: e.getOption("lineWrapping") };
		t.measure = {}; for(var i = 0; i <= (t.rest ? t.rest.length : 0); i++) { var o = i ? t.rest[i - 1] : t.line,
				l = void 0;
			n.pos = 0, n.addToken = Jt, Oe(e.display.measure) && (l = ce(o, e.doc.direction)) && (n.addToken = er(n.addToken, l)), n.map = [], rr(o, n, dt(e, o, t != e.display.externalMeasured && Ye(o))), o.styleClasses && (o.styleClasses.bgClass && (n.bgClass = H(o.styleClasses.bgClass, n.bgClass || "")), o.styleClasses.textClass && (n.textClass = H(o.styleClasses.textClass, n.textClass || ""))), 0 == n.map.length && n.map.push(0, 0, n.content.appendChild(Ae(e.display.measure))), 0 == i ? (t.measure.map = n.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(n.map), (t.measure.caches || (t.measure.caches = [])).push({})) } if(s) { var a = n.content.lastChild;
			(/\bcm-tab\b/.test(a.className) || a.querySelector && a.querySelector(".cm-tab")) && (n.content.className = "cm-tab-wrap-hack") } return ge(e, "renderLine", e, t.line, n.pre), n.pre.className && (n.textClass = H(n.pre.className, n.textClass || "")), n }

	function Qt(e) { var t = A("span", "•", "cm-invalidchar"); return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t }

	function Jt(e, t, r, n, i, o, s) { if(t) { var u, c = e.splitSpaces ? function(e, t) { if(e.length > 1 && !/  /.test(e)) return e; for(var r = t, n = "", i = 0; i < e.length; i++) { var o = e.charAt(i); " " != o || !r || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "), n += o, r = " " == o } return n }(t, e.trailingSpace) : t,
				f = e.cm.state.specialChars,
				d = !1; if(f.test(t)) { u = document.createDocumentFragment(); for(var h = 0;;) { f.lastIndex = h; var p = f.exec(t),
						g = p ? p.index - h : t.length - h; if(g) { var m = document.createTextNode(c.slice(h, h + g));
						l && a < 9 ? u.appendChild(A("span", [m])) : u.appendChild(m), e.map.push(e.pos, e.pos + g, m), e.col += g, e.pos += g } if(!p) break;
					h += g + 1; var v = void 0; if("\t" == p[0]) { var y = e.cm.options.tabSize,
							b = y - e.col % y;
						(v = u.appendChild(A("span", $(b), "cm-tab"))).setAttribute("role", "presentation"), v.setAttribute("cm-text", "\t"), e.col += b } else "\r" == p[0] || "\n" == p[0] ? ((v = u.appendChild(A("span", "\r" == p[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", p[0]), e.col += 1) : ((v = e.cm.options.specialCharPlaceholder(p[0])).setAttribute("cm-text", p[0]), l && a < 9 ? u.appendChild(A("span", [v])) : u.appendChild(v), e.col += 1);
					e.map.push(e.pos, e.pos + 1, v), e.pos++ } } else e.col += t.length, u = document.createTextNode(c), e.map.push(e.pos, e.pos + t.length, u), l && a < 9 && (d = !0), e.pos += t.length; if(e.trailingSpace = 32 == c.charCodeAt(t.length - 1), r || n || i || d || o || s) { var x = r || "";
				n && (x += n), i && (x += i); var w = A("span", [u], x, o); if(s)
					for(var C in s) s.hasOwnProperty(C) && "style" != C && "class" != C && w.setAttribute(C, s[C]); return e.content.appendChild(w) } e.content.appendChild(u) } }

	function er(e, t) { return function(r, n, i, o, l, a, s) { i = i ? i + " cm-force-border" : "cm-force-border"; for(var u = r.pos, c = u + n.length;;) { for(var f = void 0, d = 0; d < t.length && !((f = t[d]).to > u && f.from <= u); d++); if(f.to >= c) return e(r, n, i, o, l, a, s);
				e(r, n.slice(0, f.to - u), i, o, null, a, s), o = null, n = n.slice(f.to - u), u = f.to } } }

	function tr(e, t, r, n) { var i = !n && r.widgetNode;
		i && e.map.push(e.pos, e.pos + t, i), !n && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", r.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1 }

	function rr(e, t, r) { var n = e.markedSpans,
			i = e.text,
			o = 0; if(n)
			for(var l, a, s, u, c, f, d, h = i.length, p = 0, g = 1, m = "", v = 0;;) { if(v == p) { s = u = c = a = "", d = null, f = null, v = 1 / 0; for(var y = [], b = void 0, x = 0; x < n.length; ++x) { var w = n[x],
							C = w.marker; if("bookmark" == C.type && w.from == p && C.widgetNode) y.push(C);
						else if(w.from <= p && (null == w.to || w.to > p || C.collapsed && w.to == p && w.from == p)) { if(null != w.to && w.to != p && v > w.to && (v = w.to, u = ""), C.className && (s += " " + C.className), C.css && (a = (a ? a + ";" : "") + C.css), C.startStyle && w.from == p && (c += " " + C.startStyle), C.endStyle && w.to == v && (b || (b = [])).push(C.endStyle, w.to), C.title && ((d || (d = {})).title = C.title), C.attributes)
								for(var k in C.attributes)(d || (d = {}))[k] = C.attributes[k];
							C.collapsed && (!f || Wt(f.marker, C) < 0) && (f = w) } else w.from > p && v > w.from && (v = w.from) } if(b)
						for(var S = 0; S < b.length; S += 2) b[S + 1] == v && (u += " " + b[S]); if(!f || f.from == p)
						for(var L = 0; L < y.length; ++L) tr(t, 0, y[L]); if(f && (f.from || 0) == p) { if(tr(t, (null == f.to ? h + 1 : f.to) - p, f.marker, null == f.from), null == f.to) return;
						f.to == p && (f = !1) } } if(p >= h) break; for(var M = Math.min(h, v);;) { if(m) { var T = p + m.length; if(!f) { var N = T > M ? m.slice(0, M - p) : m;
							t.addToken(t, N, l ? l + s : s, c, p + N.length == v ? u : "", a, d) } if(T >= M) { m = m.slice(M - p), p = M; break } p = T, c = "" } m = i.slice(o, o = r[g++]), l = Yt(r[g++], t.cm.options) } } else
				for(var A = 1; A < r.length; A += 2) t.addToken(t, i.slice(o, o = r[A]), Yt(r[A + 1], t.cm.options)) }

	function nr(e, t, r) { this.line = t, this.rest = function(e) { for(var t, r; t = Ft(e);) e = t.find(1, !0).line, (r || (r = [])).push(e); return r }(t), this.size = this.rest ? Ye(X(this.rest)) - r + 1 : 1, this.node = this.text = null, this.hidden = Bt(e, t) }

	function ir(e, t, r) { for(var n, i = [], o = t; o < r; o = n) { var l = new nr(e.doc, Ke(e.doc, o), o);
			n = o + l.size, i.push(l) } return i } var or = null; var lr = null;

	function ar(e, t) { var r = he(e, t); if(r.length) { var n, i = Array.prototype.slice.call(arguments, 2);
			or ? n = or.delayedCallbacks : lr ? n = lr : (n = lr = [], setTimeout(sr, 0)); for(var o = function(e) { n.push(function() { return r[e].apply(null, i) }) }, l = 0; l < r.length; ++l) o(l) } }

	function sr() { var e = lr;
		lr = null; for(var t = 0; t < e.length; ++t) e[t]() }

	function ur(e, t, r, n) { for(var i = 0; i < t.changes.length; i++) { var o = t.changes[i]; "text" == o ? dr(e, t) : "gutter" == o ? pr(e, t, r, n) : "class" == o ? hr(e, t) : "widget" == o && gr(e, t, n) } t.changes = null }

	function cr(e) { return e.node == e.text && (e.node = A("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), l && a < 8 && (e.node.style.zIndex = 2)), e.node }

	function fr(e, t) { var r = e.display.externalMeasured; return r && r.line == t.line ? (e.display.externalMeasured = null, t.measure = r.measure, r.built) : Zt(e, t) }

	function dr(e, t) { var r = t.text.className,
			n = fr(e, t);
		t.text == t.node && (t.node = n.pre), t.text.parentNode.replaceChild(n.pre, t.text), t.text = n.pre, n.bgClass != t.bgClass || n.textClass != t.textClass ? (t.bgClass = n.bgClass, t.textClass = n.textClass, hr(e, t)) : r && (t.text.className = r) }

	function hr(e, t) {! function(e, t) { var r = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass; if(r && (r += " CodeMirror-linebackground"), t.background) r ? t.background.className = r : (t.background.parentNode.removeChild(t.background), t.background = null);
			else if(r) { var n = cr(t);
				t.background = n.insertBefore(A("div", null, r), n.firstChild), e.display.input.setUneditable(t.background) } }(e, t), t.line.wrapClass ? cr(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = ""); var r = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
		t.text.className = r || "" }

	function pr(e, t, r, n) { if(t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) { var i = cr(t);
			t.gutterBackground = A("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px; width: " + n.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text) } var o = t.line.gutterMarkers; if(e.options.lineNumbers || o) { var l = cr(t),
				a = t.gutter = A("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px"); if(a.setAttribute("aria-hidden", "true"), e.display.input.setUneditable(a), l.insertBefore(a, t.text), t.line.gutterClass && (a.className += " " + t.line.gutterClass), !e.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (t.lineNumber = a.appendChild(A("div", Je(e.options, r), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o)
				for(var s = 0; s < e.display.gutterSpecs.length; ++s) { var u = e.display.gutterSpecs[s].className,
						c = o.hasOwnProperty(u) && o[u];
					c && a.appendChild(A("div", [c], "CodeMirror-gutter-elt", "left: " + n.gutterLeft[u] + "px; width: " + n.gutterWidth[u] + "px")) } } }

	function gr(e, t, r) { t.alignable && (t.alignable = null); for(var n = S("CodeMirror-linewidget"), i = t.node.firstChild, o = void 0; i; i = o) o = i.nextSibling, n.test(i.className) && t.node.removeChild(i);
		vr(e, t, r) }

	function mr(e, t, r, n) { var i = fr(e, t); return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), hr(e, t), pr(e, t, r, n), vr(e, t, n), t.node }

	function vr(e, t, r) { if(yr(e, t.line, t, r, !0), t.rest)
			for(var n = 0; n < t.rest.length; n++) yr(e, t.rest[n], t, r, !1) }

	function yr(e, t, r, n, i) { if(t.widgets)
			for(var o = cr(r), l = 0, a = t.widgets; l < a.length; ++l) { var s = a[l],
					u = A("div", [s.node], "CodeMirror-linewidget" + (s.className ? " " + s.className : ""));
				s.handleMouseEvents || u.setAttribute("cm-ignore-events", "true"), br(s, u, r, n), e.display.input.setUneditable(u), i && s.above ? o.insertBefore(u, r.gutter || r.text) : o.appendChild(u), ar(s, "redraw") } }

	function br(e, t, r, n) { if(e.noHScroll) {
			(r.alignable || (r.alignable = [])).push(t); var i = n.wrapperWidth;
			t.style.left = n.fixedPos + "px", e.coverGutter || (i -= n.gutterTotalWidth, t.style.paddingLeft = n.gutterTotalWidth + "px"), t.style.width = i + "px" } e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px")) }

	function xr(e) { if(null != e.height) return e.height; var t = e.doc.cm; if(!t) return 0; if(!D(document.body, e.node)) { var r = "position: relative;";
			e.coverGutter && (r += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (r += "width: " + t.display.wrapper.clientWidth + "px;"), N(t.display.measure, A("div", [e.node], null, r)) } return e.height = e.node.parentNode.offsetHeight }

	function wr(e, t) { for(var r = Se(t); r != e.wrapper; r = r.parentNode)
			if(!r || 1 == r.nodeType && "true" == r.getAttribute("cm-ignore-events") || r.parentNode == e.sizer && r != e.mover) return !0 }

	function Cr(e) { return e.lineSpace.offsetTop }

	function kr(e) { return e.mover.offsetHeight - e.lineSpace.offsetHeight }

	function Sr(e) { if(e.cachedPaddingH) return e.cachedPaddingH; var t = N(e.measure, A("pre", "x", "CodeMirror-line-like")),
			r = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
			n = { left: parseInt(r.paddingLeft), right: parseInt(r.paddingRight) }; return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n), n }

	function Lr(e) { return B - e.display.nativeBarWidth }

	function Mr(e) { return e.display.scroller.clientWidth - Lr(e) - e.display.barWidth }

	function Tr(e) { return e.display.scroller.clientHeight - Lr(e) - e.display.barHeight }

	function Nr(e, t, r) { if(e.line == t) return { map: e.measure.map, cache: e.measure.cache }; if(e.rest) { for(var n = 0; n < e.rest.length; n++)
				if(e.rest[n] == t) return { map: e.measure.maps[n], cache: e.measure.caches[n] }; for(var i = 0; i < e.rest.length; i++)
				if(Ye(e.rest[i]) > r) return { map: e.measure.maps[i], cache: e.measure.caches[i], before: !0 } } }

	function Ar(e, t, r, n) { return Wr(e, Dr(e, t), r, n) }

	function Or(e, t) { if(t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[sn(e, t)]; var r = e.display.externalMeasured; return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0 }

	function Dr(e, t) { var r = Ye(t),
			n = Or(e, r);
		n && !n.text ? n = null : n && n.changes && (ur(e, n, r, rn(e)), e.curOp.forceUpdate = !0), n || (n = function(e, t) { var r = Ye(t = It(t)),
				n = e.display.externalMeasured = new nr(e.doc, t, r);
			n.lineN = r; var i = n.built = Zt(e, n); return n.text = i.pre, N(e.display.lineMeasure, i.pre), n }(e, t)); var i = Nr(n, t, r); return { line: t, view: n, rect: null, map: i.map, cache: i.cache, before: i.before, hasHeights: !1 } }

	function Wr(e, t, r, n, i) { t.before && (r = -1); var o, s = r + (n || ""); return t.cache.hasOwnProperty(s) ? o = t.cache[s] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (! function(e, t, r) { var n = e.options.lineWrapping,
				i = n && Mr(e); if(!t.measure.heights || n && t.measure.width != i) { var o = t.measure.heights = []; if(n) { t.measure.width = i; for(var l = t.text.firstChild.getClientRects(), a = 0; a < l.length - 1; a++) { var s = l[a],
							u = l[a + 1];
						Math.abs(s.bottom - u.bottom) > 2 && o.push((s.bottom + u.top) / 2 - r.top) } } o.push(r.bottom - r.top) } }(e, t.view, t.rect), t.hasHeights = !0), (o = function(e, t, r, n) { var i, o = Fr(t.map, r, n),
				s = o.node,
				u = o.start,
				c = o.end,
				f = o.collapse; if(3 == s.nodeType) { for(var d = 0; d < 4; d++) { for(; u && ie(t.line.text.charAt(o.coverStart + u));) --u; for(; o.coverStart + c < o.coverEnd && ie(t.line.text.charAt(o.coverStart + c));) ++c; if((i = l && a < 9 && 0 == u && c == o.coverEnd - o.coverStart ? s.parentNode.getBoundingClientRect() : Pr(L(s, u, c).getClientRects(), n)).left || i.right || 0 == u) break;
					c = u, u -= 1, f = "right" } l && a < 11 && (i = function(e, t) { if(!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || ! function(e) { if(null != Fe) return Fe; var t = N(e, A("span", "x")),
								r = t.getBoundingClientRect(),
								n = L(t, 0, 1).getBoundingClientRect(); return Fe = Math.abs(r.left - n.left) > 1 }(e)) return t; var r = screen.logicalXDPI / screen.deviceXDPI,
						n = screen.logicalYDPI / screen.deviceYDPI; return { left: t.left * r, right: t.right * r, top: t.top * n, bottom: t.bottom * n } }(e.display.measure, i)) } else { var h;
				u > 0 && (f = n = "right"), i = e.options.lineWrapping && (h = s.getClientRects()).length > 1 ? h["right" == n ? h.length - 1 : 0] : s.getBoundingClientRect() } if(l && a < 9 && !u && (!i || !i.left && !i.right)) { var p = s.parentNode.getClientRects()[0];
				i = p ? { left: p.left, right: p.left + tn(e.display), top: p.top, bottom: p.bottom } : Hr } for(var g = i.top - t.rect.top, m = i.bottom - t.rect.top, v = (g + m) / 2, y = t.view.measure.heights, b = 0; b < y.length - 1 && !(v < y[b]); b++); var x = b ? y[b - 1] : 0,
				w = y[b],
				C = { left: ("right" == f ? i.right : i.left) - t.rect.left, right: ("left" == f ? i.left : i.right) - t.rect.left, top: x, bottom: w };
			i.left || i.right || (C.bogus = !0);
			e.options.singleCursorHeightPerLine || (C.rtop = g, C.rbottom = m); return C }(e, t, r, n)).bogus || (t.cache[s] = o)), { left: o.left, right: o.right, top: i ? o.rtop : o.top, bottom: i ? o.rbottom : o.bottom } } var Er, Hr = { left: 0, right: 0, top: 0, bottom: 0 };

	function Fr(e, t, r) { for(var n, i, o, l, a, s, u = 0; u < e.length; u += 3)
			if(a = e[u], s = e[u + 1], t < a ? (i = 0, o = 1, l = "left") : t < s ? o = (i = t - a) + 1 : (u == e.length - 3 || t == s && e[u + 3] > t) && (i = (o = s - a) - 1, t >= s && (l = "right")), null != i) { if(n = e[u + 2], a == s && r == (n.insertLeft ? "left" : "right") && (l = r), "left" == r && 0 == i)
					for(; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft;) n = e[2 + (u -= 3)], l = "left"; if("right" == r && i == s - a)
					for(; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;) n = e[(u += 3) + 2], l = "right"; break } return { node: n, start: i, end: o, collapse: l, coverStart: a, coverEnd: s } }

	function Pr(e, t) { var r = Hr; if("left" == t)
			for(var n = 0; n < e.length && (r = e[n]).left == r.right; n++);
		else
			for(var i = e.length - 1; i >= 0 && (r = e[i]).left == r.right; i--); return r }

	function zr(e) { if(e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
			for(var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {} }

	function Ir(e) { e.display.externalMeasure = null, T(e.display.lineMeasure); for(var t = 0; t < e.display.view.length; t++) zr(e.display.view[t]) }

	function Rr(e) { Ir(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null }

	function _r() { return c && m ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft }

	function Br() { return c && m ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop }

	function jr(e) { var t = It(e).widgets,
			r = 0; if(t)
			for(var n = 0; n < t.length; ++n) t[n].above && (r += xr(t[n])); return r }

	function Vr(e, t, r, n, i) { if(!i) { var o = jr(t);
			r.top += o, r.bottom += o } if("line" == n) return r;
		n || (n = "local"); var l = Vt(t); if("local" == n ? l += Cr(e.display) : l -= e.display.viewOffset, "page" == n || "window" == n) { var a = e.display.lineSpace.getBoundingClientRect();
			l += a.top + ("window" == n ? 0 : Br()); var s = a.left + ("window" == n ? 0 : _r());
			r.left += s, r.right += s } return r.top += l, r.bottom += l, r }

	function Gr(e, t, r) { if("div" == r) return t; var n = t.left,
			i = t.top; if("page" == r) n -= _r(), i -= Br();
		else if("local" == r || !r) { var o = e.display.sizer.getBoundingClientRect();
			n += o.left, i += o.top } var l = e.display.lineSpace.getBoundingClientRect(); return { left: n - l.left, top: i - l.top } }

	function Ur(e, t, r, n, i) { return n || (n = Ke(e.doc, t.line)), Vr(e, n, Ar(e, n, t.ch, i), r) }

	function Kr(e, t, r, n, i, o) {
		function l(t, l) { var a = Wr(e, i, t, l ? "right" : "left", o); return l ? a.left = a.right : a.right = a.left, Vr(e, n, a, r) } n = n || Ke(e.doc, t.line), i || (i = Dr(e, n)); var a = ce(n, e.doc.direction),
			s = t.ch,
			u = t.sticky; if(s >= n.text.length ? (s = n.text.length, u = "before") : s <= 0 && (s = 0, u = "after"), !a) return l("before" == u ? s - 1 : s, "before" == u);

		function c(e, t, r) { var n = 1 == a[t].level; return l(r ? e - 1 : e, n != r) } var f = se(a, s, u),
			d = ae,
			h = c(s, f, "before" == u); return null != d && (h.other = c(s, d, "before" != u)), h }

	function qr(e, t) { var r = 0;
		t = at(e.doc, t), e.options.lineWrapping || (r = tn(e.display) * t.ch); var n = Ke(e.doc, t.line),
			i = Vt(n) + Cr(e.display); return { left: r, right: r, top: i, bottom: i + n.height } }

	function $r(e, t, r, n, i) { var o = et(e, t, r); return o.xRel = i, n && (o.outside = n), o }

	function Xr(e, t, r) { var n = e.doc; if((r += e.display.viewOffset) < 0) return $r(n.first, 0, null, -1, -1); var i = Ze(n, r),
			o = n.first + n.size - 1; if(i > o) return $r(n.first + n.size - 1, Ke(n, o).text.length, null, 1, 1);
		t < 0 && (t = 0); for(var l = Ke(n, i);;) { var a = Jr(e, l, i, t, r),
				s = Pt(l, a.ch + (a.xRel > 0 || a.outside > 0 ? 1 : 0)); if(!s) return a; var u = s.find(1); if(u.line == i) return u;
			l = Ke(n, i = u.line) } }

	function Yr(e, t, r, n) { n -= jr(t); var i = t.text.length,
			o = le(function(t) { return Wr(e, r, t - 1).bottom <= n }, i, 0); return { begin: o, end: i = le(function(t) { return Wr(e, r, t).top > n }, o, i) } }

	function Zr(e, t, r, n) { return r || (r = Dr(e, t)), Yr(e, t, r, Vr(e, t, Wr(e, r, n), "line").top) }

	function Qr(e, t, r, n) { return !(e.bottom <= r) && (e.top > r || (n ? e.left : e.right) > t) }

	function Jr(e, t, r, n, i) { i -= Vt(t); var o = Dr(e, t),
			l = jr(t),
			a = 0,
			s = t.text.length,
			u = !0,
			c = ce(t, e.doc.direction); if(c) { var f = (e.options.lineWrapping ? function(e, t, r, n, i, o, l) { var a = Yr(e, t, n, l),
					s = a.begin,
					u = a.end; /\s/.test(t.text.charAt(u - 1)) && u--; for(var c = null, f = null, d = 0; d < i.length; d++) { var h = i[d]; if(!(h.from >= u || h.to <= s)) { var p = 1 != h.level,
							g = Wr(e, n, p ? Math.min(u, h.to) - 1 : Math.max(s, h.from)).right,
							m = g < o ? o - g + 1e9 : g - o;
						(!c || f > m) && (c = h, f = m) } } c || (c = i[i.length - 1]);
				c.from < s && (c = { from: s, to: c.to, level: c.level });
				c.to > u && (c = { from: c.from, to: u, level: c.level }); return c } : function(e, t, r, n, i, o, l) { var a = le(function(a) { var s = i[a],
							u = 1 != s.level; return Qr(Kr(e, et(r, u ? s.to : s.from, u ? "before" : "after"), "line", t, n), o, l, !0) }, 0, i.length - 1),
					s = i[a]; if(a > 0) { var u = 1 != s.level,
						c = Kr(e, et(r, u ? s.from : s.to, u ? "after" : "before"), "line", t, n);
					Qr(c, o, l, !0) && c.top > l && (s = i[a - 1]) } return s })(e, t, r, o, c, n, i);
			a = (u = 1 != f.level) ? f.from : f.to - 1, s = u ? f.to : f.from - 1 } var d, h, p = null,
			g = null,
			m = le(function(t) { var r = Wr(e, o, t); return r.top += l, r.bottom += l, !!Qr(r, n, i, !1) && (r.top <= i && r.left <= n && (p = t, g = r), !0) }, a, s),
			v = !1; if(g) { var y = n - g.left < g.right - n,
				b = y == u;
			m = p + (b ? 0 : 1), h = b ? "after" : "before", d = y ? g.left : g.right } else { u || m != s && m != a || m++, h = 0 == m ? "after" : m == t.text.length ? "before" : Wr(e, o, m - (u ? 1 : 0)).bottom + l <= i == u ? "after" : "before"; var x = Kr(e, et(r, m, h), "line", t, o);
			d = x.left, v = i < x.top ? -1 : i >= x.bottom ? 1 : 0 } return $r(r, m = oe(t.text, m, 1), h, v, n - d) }

	function en(e) { if(null != e.cachedTextHeight) return e.cachedTextHeight; if(null == Er) { Er = A("pre", null, "CodeMirror-line-like"); for(var t = 0; t < 49; ++t) Er.appendChild(document.createTextNode("x")), Er.appendChild(A("br"));
			Er.appendChild(document.createTextNode("x")) } N(e.measure, Er); var r = Er.offsetHeight / 50; return r > 3 && (e.cachedTextHeight = r), T(e.measure), r || 1 }

	function tn(e) { if(null != e.cachedCharWidth) return e.cachedCharWidth; var t = A("span", "xxxxxxxxxx"),
			r = A("pre", [t], "CodeMirror-line-like");
		N(e.measure, r); var n = t.getBoundingClientRect(),
			i = (n.right - n.left) / 10; return i > 2 && (e.cachedCharWidth = i), i || 10 }

	function rn(e) { for(var t = e.display, r = {}, n = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, l = 0; o; o = o.nextSibling, ++l) { var a = e.display.gutterSpecs[l].className;
			r[a] = o.offsetLeft + o.clientLeft + i, n[a] = o.clientWidth } return { fixedPos: nn(t), gutterTotalWidth: t.gutters.offsetWidth, gutterLeft: r, gutterWidth: n, wrapperWidth: t.wrapper.clientWidth } }

	function nn(e) { return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left }

	function on(e) { var t = en(e.display),
			r = e.options.lineWrapping,
			n = r && Math.max(5, e.display.scroller.clientWidth / tn(e.display) - 3); return function(i) { if(Bt(e.doc, i)) return 0; var o = 0; if(i.widgets)
				for(var l = 0; l < i.widgets.length; l++) i.widgets[l].height && (o += i.widgets[l].height); return r ? o + (Math.ceil(i.text.length / n) || 1) * t : o + t } }

	function ln(e) { var t = e.doc,
			r = on(e);
		t.iter(function(e) { var t = r(e);
			t != e.height && Xe(e, t) }) }

	function an(e, t, r, n) { var i = e.display; if(!r && "true" == Se(t).getAttribute("cm-not-content")) return null; var o, l, a = i.lineSpace.getBoundingClientRect(); try { o = t.clientX - a.left, l = t.clientY - a.top } catch (e) { return null } var s, u = Xr(e, o, l); if(n && u.xRel > 0 && (s = Ke(e.doc, u.line).text).length == u.ch) { var c = I(s, s.length, e.options.tabSize) - s.length;
			u = et(u.line, Math.max(0, Math.round((o - Sr(e.display).left) / tn(e.display)) - c)) } return u }

	function sn(e, t) { if(t >= e.display.viewTo) return null; if((t -= e.display.viewFrom) < 0) return null; for(var r = e.display.view, n = 0; n < r.length; n++)
			if((t -= r[n].size) < 0) return n }

	function un(e, t, r, n) { null == t && (t = e.doc.first), null == r && (r = e.doc.first + e.doc.size), n || (n = 0); var i = e.display; if(n && r < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Ct && Rt(e.doc, t) < i.viewTo && fn(e);
		else if(r <= i.viewFrom) Ct && _t(e.doc, r + n) > i.viewFrom ? fn(e) : (i.viewFrom += n, i.viewTo += n);
		else if(t <= i.viewFrom && r >= i.viewTo) fn(e);
		else if(t <= i.viewFrom) { var o = dn(e, r, r + n, 1);
			o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += n) : fn(e) } else if(r >= i.viewTo) { var l = dn(e, t, t, -1);
			l ? (i.view = i.view.slice(0, l.index), i.viewTo = l.lineN) : fn(e) } else { var a = dn(e, t, t, -1),
				s = dn(e, r, r + n, 1);
			a && s ? (i.view = i.view.slice(0, a.index).concat(ir(e, a.lineN, s.lineN)).concat(i.view.slice(s.index)), i.viewTo += n) : fn(e) } var u = i.externalMeasured;
		u && (r < u.lineN ? u.lineN += n : t < u.lineN + u.size && (i.externalMeasured = null)) }

	function cn(e, t, r) { e.curOp.viewChanged = !0; var n = e.display,
			i = e.display.externalMeasured; if(i && t >= i.lineN && t < i.lineN + i.size && (n.externalMeasured = null), !(t < n.viewFrom || t >= n.viewTo)) { var o = n.view[sn(e, t)]; if(null != o.node) { var l = o.changes || (o.changes = []); - 1 == _(l, r) && l.push(r) } } }

	function fn(e) { e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0 }

	function dn(e, t, r, n) { var i, o = sn(e, t),
			l = e.display.view; if(!Ct || r == e.doc.first + e.doc.size) return { index: o, lineN: r }; for(var a = e.display.viewFrom, s = 0; s < o; s++) a += l[s].size; if(a != t) { if(n > 0) { if(o == l.length - 1) return null;
				i = a + l[o].size - t, o++ } else i = a - t;
			t += i, r += i } for(; Rt(e.doc, r) != r;) { if(o == (n < 0 ? 0 : l.length - 1)) return null;
			r += n * l[o - (n < 0 ? 1 : 0)].size, o += n } return { index: o, lineN: r } }

	function hn(e) { for(var t = e.display.view, r = 0, n = 0; n < t.length; n++) { var i = t[n];
			i.hidden || i.node && !i.changes || ++r } return r }

	function pn(e) { e.display.input.showSelection(e.display.input.prepareSelection()) }

	function gn(e, t) { void 0 === t && (t = !0); var r = e.doc,
			n = {},
			i = n.cursors = document.createDocumentFragment(),
			o = n.selection = document.createDocumentFragment(),
			l = e.options.$customCursor;
		l && (t = !0); for(var a = 0; a < r.sel.ranges.length; a++)
			if(t || a != r.sel.primIndex) { var s = r.sel.ranges[a]; if(!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) { var u = s.empty(); if(l) { var c = l(e, s);
						c && mn(e, c, i) } else(u || e.options.showCursorWhenSelecting) && mn(e, s.head, i);
					u || yn(e, s, o) } } return n }

	function mn(e, t, r) { var n = Kr(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
			i = r.appendChild(A("div", " ", "CodeMirror-cursor")); if(i.style.left = n.left + "px", i.style.top = n.top + "px", i.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px", /\bcm-fat-cursor\b/.test(e.getWrapperElement().className)) { var o = Ur(e, t, "div", null, null),
				l = o.right - o.left;
			i.style.width = (l > 0 ? l : e.defaultCharWidth()) + "px" } if(n.other) { var a = r.appendChild(A("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
			a.style.display = "", a.style.left = n.other.left + "px", a.style.top = n.other.top + "px", a.style.height = .85 * (n.other.bottom - n.other.top) + "px" } }

	function vn(e, t) { return e.top - t.top || e.left - t.left }

	function yn(e, t, r) { var n = e.display,
			i = e.doc,
			o = document.createDocumentFragment(),
			l = Sr(e.display),
			a = l.left,
			s = Math.max(n.sizerWidth, Mr(e) - n.sizer.offsetLeft) - l.right,
			u = "ltr" == i.direction;

		function c(e, t, r, n) { t < 0 && (t = 0), t = Math.round(t), n = Math.round(n), o.appendChild(A("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == r ? s - e : r) + "px;\n                             height: " + (n - t) + "px")) }

		function f(t, r, n) { var o, l, f = Ke(i, t),
				d = f.text.length;

			function h(r, n) { return Ur(e, et(t, r), "div", f, n) }

			function p(t, r, n) { var i = Zr(e, f, null, t),
					o = "ltr" == r == ("after" == n) ? "left" : "right"; return h("after" == n ? i.begin : i.end - (/\s/.test(f.text.charAt(i.end - 1)) ? 2 : 1), o)[o] } var g = ce(f, i.direction); return function(e, t, r, n) { if(!e) return n(t, r, "ltr", 0); for(var i = !1, o = 0; o < e.length; ++o) { var l = e[o];
					(l.from < r && l.to > t || t == r && l.to == t) && (n(Math.max(l.from, t), Math.min(l.to, r), 1 == l.level ? "rtl" : "ltr", o), i = !0) } i || n(t, r, "ltr") }(g, r || 0, null == n ? d : n, function(e, t, i, f) { var m = "ltr" == i,
					v = h(e, m ? "left" : "right"),
					y = h(t - 1, m ? "right" : "left"),
					b = null == r && 0 == e,
					x = null == n && t == d,
					w = 0 == f,
					C = !g || f == g.length - 1; if(y.top - v.top <= 3) { var k = (u ? x : b) && C,
						S = (u ? b : x) && w ? a : (m ? v : y).left,
						L = k ? s : (m ? y : v).right;
					c(S, v.top, L - S, v.bottom) } else { var M, T, N, A;
					m ? (M = u && b && w ? a : v.left, T = u ? s : p(e, i, "before"), N = u ? a : p(t, i, "after"), A = u && x && C ? s : y.right) : (M = u ? p(e, i, "before") : a, T = !u && b && w ? s : v.right, N = !u && x && C ? a : y.left, A = u ? p(t, i, "after") : s), c(M, v.top, T - M, v.bottom), v.bottom < y.top && c(a, v.bottom, null, y.top), c(N, y.top, A - N, y.bottom) }(!o || vn(v, o) < 0) && (o = v), vn(y, o) < 0 && (o = y), (!l || vn(v, l) < 0) && (l = v), vn(y, l) < 0 && (l = y) }), { start: o, end: l } } var d = t.from(),
			h = t.to(); if(d.line == h.line) f(d.line, d.ch, h.ch);
		else { var p = Ke(i, d.line),
				g = Ke(i, h.line),
				m = It(p) == It(g),
				v = f(d.line, d.ch, m ? p.text.length + 1 : null).end,
				y = f(h.line, m ? 0 : null, h.ch).start;
			m && (v.top < y.top - 2 ? (c(v.right, v.top, null, v.bottom), c(a, y.top, y.left, y.bottom)) : c(v.right, v.top, y.left - v.right, v.bottom)), v.bottom < y.top && c(a, v.bottom, null, y.top) } r.appendChild(o) }

	function bn(e) { if(e.state.focused) { var t = e.display;
			clearInterval(t.blinker); var r = !0;
			t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function() { e.hasFocus() || kn(e), t.cursorDiv.style.visibility = (r = !r) ? "" : "hidden" }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden") } }

	function xn(e) { e.hasFocus() || (e.display.input.focus(), e.state.focused || Cn(e)) }

	function wn(e) { e.state.delayingBlurEvent = !0, setTimeout(function() { e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, e.state.focused && kn(e)) }, 100) }

	function Cn(e, t) { e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (ge(e, "focus", e, t), e.state.focused = !0, E(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), s && setTimeout(function() { return e.display.input.reset(!0) }, 20)), e.display.input.receivedFocus()), bn(e)) }

	function kn(e, t) { e.state.delayingBlurEvent || (e.state.focused && (ge(e, "blur", e, t), e.state.focused = !1, M(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() { e.state.focused || (e.display.shift = !1) }, 150)) }

	function Sn(e) { for(var t = e.display, r = t.lineDiv.offsetTop, n = Math.max(0, t.scroller.getBoundingClientRect().top), i = t.lineDiv.getBoundingClientRect().top, o = 0, s = 0; s < t.view.length; s++) { var u = t.view[s],
				c = e.options.lineWrapping,
				f = void 0,
				d = 0; if(!u.hidden) { if(i += u.line.height, l && a < 8) { var h = u.node.offsetTop + u.node.offsetHeight;
					f = h - r, r = h } else { var p = u.node.getBoundingClientRect();
					f = p.bottom - p.top, !c && u.text.firstChild && (d = u.text.firstChild.getBoundingClientRect().right - p.left - 1) } var g = u.line.height - f; if((g > .005 || g < -.005) && (i < n && (o -= g), Xe(u.line, f), Ln(u.line), u.rest))
					for(var m = 0; m < u.rest.length; m++) Ln(u.rest[m]); if(d > e.display.sizerWidth) { var v = Math.ceil(d / tn(e.display));
					v > e.display.maxLineLength && (e.display.maxLineLength = v, e.display.maxLine = u.line, e.display.maxLineChanged = !0) } } } Math.abs(o) > 2 && (t.scroller.scrollTop += o) }

	function Ln(e) { if(e.widgets)
			for(var t = 0; t < e.widgets.length; ++t) { var r = e.widgets[t],
					n = r.node.parentNode;
				n && (r.height = n.offsetHeight) } }

	function Mn(e, t, r) { var n = r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
		n = Math.floor(n - Cr(e)); var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight,
			o = Ze(t, n),
			l = Ze(t, i); if(r && r.ensure) { var a = r.ensure.from.line,
				s = r.ensure.to.line;
			a < o ? (o = a, l = Ze(t, Vt(Ke(t, a)) + e.wrapper.clientHeight)) : Math.min(s, t.lastLine()) >= l && (o = Ze(t, Vt(Ke(t, s)) - e.wrapper.clientHeight), l = s) } return { from: o, to: Math.max(l, o + 1) } }

	function Tn(e, t) { var r = e.display,
			n = en(e.display);
		t.top < 0 && (t.top = 0); var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : r.scroller.scrollTop,
			o = Tr(e),
			l = {};
		t.bottom - t.top > o && (t.bottom = t.top + o); var a = e.doc.height + kr(r),
			s = t.top < n,
			u = t.bottom > a - n; if(t.top < i) l.scrollTop = s ? 0 : t.top;
		else if(t.bottom > i + o) { var c = Math.min(t.top, (u ? a : t.bottom) - o);
			c != i && (l.scrollTop = c) } var f = e.options.fixedGutter ? 0 : r.gutters.offsetWidth,
			d = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : r.scroller.scrollLeft - f,
			h = Mr(e) - r.gutters.offsetWidth,
			p = t.right - t.left > h; return p && (t.right = t.left + h), t.left < 10 ? l.scrollLeft = 0 : t.left < d ? l.scrollLeft = Math.max(0, t.left + f - (p ? 0 : 10)) : t.right > h + d - 3 && (l.scrollLeft = t.right + (p ? 0 : 10) - h), l }

	function Nn(e, t) { null != t && (Dn(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t) }

	function An(e) { Dn(e); var t = e.getCursor();
		e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin } }

	function On(e, t, r) { null == t && null == r || Dn(e), null != t && (e.curOp.scrollLeft = t), null != r && (e.curOp.scrollTop = r) }

	function Dn(e) { var t = e.curOp.scrollToPos;
		t && (e.curOp.scrollToPos = null, Wn(e, qr(e, t.from), qr(e, t.to), t.margin)) }

	function Wn(e, t, r, n) { var i = Tn(e, { left: Math.min(t.left, r.left), top: Math.min(t.top, r.top) - n, right: Math.max(t.right, r.right), bottom: Math.max(t.bottom, r.bottom) + n });
		On(e, i.scrollLeft, i.scrollTop) }

	function En(e, t) { Math.abs(e.doc.scrollTop - t) < 2 || (r || oi(e, { top: t }), Hn(e, t, !0), r && oi(e), ei(e, 100)) }

	function Hn(e, t, r) { t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t)), (e.display.scroller.scrollTop != t || r) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t)) }

	function Fn(e, t, r, n) { t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)), (r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !n || (e.doc.scrollLeft = t, si(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t)) }

	function Pn(e) { var t = e.display,
			r = t.gutters.offsetWidth,
			n = Math.round(e.doc.height + kr(e.display)); return { clientHeight: t.scroller.clientHeight, viewHeight: t.wrapper.clientHeight, scrollWidth: t.scroller.scrollWidth, clientWidth: t.scroller.clientWidth, viewWidth: t.wrapper.clientWidth, barLeft: e.options.fixedGutter ? r : 0, docHeight: n, scrollHeight: n + Lr(e) + t.barHeight, nativeBarWidth: t.nativeBarWidth, gutterWidth: r } } var zn = function(e, t, r) { this.cm = r; var n = this.vert = A("div", [A("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
			i = this.horiz = A("div", [A("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
		n.tabIndex = i.tabIndex = -1, e(n), e(i), de(n, "scroll", function() { n.clientHeight && t(n.scrollTop, "vertical") }), de(i, "scroll", function() { i.clientWidth && t(i.scrollLeft, "horizontal") }), this.checkedZeroWidth = !1, l && a < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px") };
	zn.prototype.update = function(e) { var t = e.scrollWidth > e.clientWidth + 1,
			r = e.scrollHeight > e.clientHeight + 1,
			n = e.nativeBarWidth; if(r) { this.vert.style.display = "block", this.vert.style.bottom = t ? n + "px" : "0"; var i = e.viewHeight - (t ? n : 0);
			this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px" } else this.vert.scrollTop = 0, this.vert.style.display = "", this.vert.firstChild.style.height = "0"; if(t) { this.horiz.style.display = "block", this.horiz.style.right = r ? n + "px" : "0", this.horiz.style.left = e.barLeft + "px"; var o = e.viewWidth - e.barLeft - (r ? n : 0);
			this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px" } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0"; return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == n && this.zeroWidthHack(), this.checkedZeroWidth = !0), { right: r ? n : 0, bottom: t ? n : 0 } }, zn.prototype.setScrollLeft = function(e) { this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz") }, zn.prototype.setScrollTop = function(e) { this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert") }, zn.prototype.zeroWidthHack = function() { var e = y && !h ? "12px" : "18px";
		this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new R, this.disableVert = new R }, zn.prototype.enableZeroWidthBar = function(e, t, r) { e.style.pointerEvents = "auto", t.set(1e3, function n() { var i = e.getBoundingClientRect();
			("vert" == r ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e ? e.style.pointerEvents = "none" : t.set(1e3, n) }) }, zn.prototype.clear = function() { var e = this.horiz.parentNode;
		e.removeChild(this.horiz), e.removeChild(this.vert) }; var In = function() {};

	function Rn(e, t) { t || (t = Pn(e)); var r = e.display.barWidth,
			n = e.display.barHeight;
		_n(e, t); for(var i = 0; i < 4 && r != e.display.barWidth || n != e.display.barHeight; i++) r != e.display.barWidth && e.options.lineWrapping && Sn(e), _n(e, Pn(e)), r = e.display.barWidth, n = e.display.barHeight }

	function _n(e, t) { var r = e.display,
			n = r.scrollbars.update(t);
		r.sizer.style.paddingRight = (r.barWidth = n.right) + "px", r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px", r.heightForcer.style.borderBottom = n.bottom + "px solid transparent", n.right && n.bottom ? (r.scrollbarFiller.style.display = "block", r.scrollbarFiller.style.height = n.bottom + "px", r.scrollbarFiller.style.width = n.right + "px") : r.scrollbarFiller.style.display = "", n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (r.gutterFiller.style.display = "block", r.gutterFiller.style.height = n.bottom + "px", r.gutterFiller.style.width = t.gutterWidth + "px") : r.gutterFiller.style.display = "" } In.prototype.update = function() { return { bottom: 0, right: 0 } }, In.prototype.setScrollLeft = function() {}, In.prototype.setScrollTop = function() {}, In.prototype.clear = function() {}; var Bn = { native: zn, null: In };

	function jn(e) { e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && M(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new Bn[e.options.scrollbarStyle](function(t) { e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), de(t, "mousedown", function() { e.state.focused && setTimeout(function() { return e.display.input.focus() }, 0) }), t.setAttribute("cm-not-content", "true") }, function(t, r) { "horizontal" == r ? Fn(e, t) : En(e, t) }, e), e.display.scrollbars.addClass && E(e.display.wrapper, e.display.scrollbars.addClass) } var Vn = 0;

	function Gn(e) { var t;
		e.curOp = { cm: e, viewChanged: !1, startHeight: e.doc.height, forceUpdate: !1, updateInput: 0, typing: !1, changeObjs: null, cursorActivityHandlers: null, cursorActivityCalled: 0, selectionChanged: !1, updateMaxLine: !1, scrollLeft: null, scrollTop: null, scrollToPos: null, focus: !1, id: ++Vn, markArrays: null }, t = e.curOp, or ? or.ops.push(t) : t.ownsGroup = or = { ops: [t], delayedCallbacks: [] } }

	function Un(e) { var t = e.curOp;
		t && function(e, t) { var r = e.ownsGroup; if(r) try {! function(e) { var t = e.delayedCallbacks,
						r = 0;
					do { for(; r < t.length; r++) t[r].call(null); for(var n = 0; n < e.ops.length; n++) { var i = e.ops[n]; if(i.cursorActivityHandlers)
								for(; i.cursorActivityCalled < i.cursorActivityHandlers.length;) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm) } } while(r < t.length) }(r) } finally { or = null, t(r) } }(t, function(e) { for(var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;! function(e) { for(var t = e.ops, r = 0; r < t.length; r++) Kn(t[r]); for(var n = 0; n < t.length; n++)(i = t[n]).updatedDisplay = i.mustUpdate && ni(i.cm, i.update); var i; for(var o = 0; o < t.length; o++) qn(t[o]); for(var l = 0; l < t.length; l++) $n(t[l]); for(var a = 0; a < t.length; a++) Xn(t[a]) }(e) }) }

	function Kn(e) { var t = e.cm,
			r = t.display;! function(e) { var t = e.display;!t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Lr(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Lr(e) + "px", t.scrollbarsClipped = !0) }(t), e.updateMaxLine && Ut(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < r.viewFrom || e.scrollToPos.to.line >= r.viewTo) || r.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new ri(t, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate) }

	function qn(e) { var t = e.cm,
			r = t.display;
		e.updatedDisplay && Sn(t), e.barMeasure = Pn(t), r.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Ar(t, r.maxLine, r.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(r.scroller.clientWidth, r.sizer.offsetLeft + e.adjustWidthTo + Lr(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + e.adjustWidthTo - Mr(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = r.input.prepareSelection()) }

	function $n(e) { var t = e.cm;
		null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Fn(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1); var r = e.focus && e.focus == W();
		e.preparedSelection && t.display.input.showSelection(e.preparedSelection, r), (e.updatedDisplay || e.startHeight != t.doc.height) && Rn(t, e.barMeasure), e.updatedDisplay && ai(t, e.barMeasure), e.selectionChanged && bn(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), r && xn(e.cm) }

	function Xn(e) { var t = e.cm,
			r = t.display,
			n = t.doc;
		(e.updatedDisplay && ii(t, e.update), null == r.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (r.wheelStartX = r.wheelStartY = null), null != e.scrollTop && Hn(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && Fn(t, e.scrollLeft, !0, !0), e.scrollToPos) && function(e, t) { if(!me(e, "scrollCursorIntoView")) { var r = e.display,
					n = r.sizer.getBoundingClientRect(),
					i = null; if(t.top + n.top < 0 ? i = !0 : t.bottom + n.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !p) { var o = A("div", "​", null, "position: absolute;\n                         top: " + (t.top - r.viewOffset - Cr(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Lr(e) + r.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
					e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o) } } }(t, function(e, t, r, n) { var i;
			null == n && (n = 0), e.options.lineWrapping || t != r || (r = "before" == t.sticky ? et(t.line, t.ch + 1, "before") : t, t = t.ch ? et(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t); for(var o = 0; o < 5; o++) { var l = !1,
					a = Kr(e, t),
					s = r && r != t ? Kr(e, r) : a,
					u = Tn(e, i = { left: Math.min(a.left, s.left), top: Math.min(a.top, s.top) - n, right: Math.max(a.left, s.left), bottom: Math.max(a.bottom, s.bottom) + n }),
					c = e.doc.scrollTop,
					f = e.doc.scrollLeft; if(null != u.scrollTop && (En(e, u.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (l = !0)), null != u.scrollLeft && (Fn(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - f) > 1 && (l = !0)), !l) break } return i }(t, at(n, e.scrollToPos.from), at(n, e.scrollToPos.to), e.scrollToPos.margin)); var i = e.maybeHiddenMarkers,
			o = e.maybeUnhiddenMarkers; if(i)
			for(var l = 0; l < i.length; ++l) i[l].lines.length || ge(i[l], "hide"); if(o)
			for(var a = 0; a < o.length; ++a) o[a].lines.length && ge(o[a], "unhide");
		r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop), e.changeObjs && ge(t, "changes", t, e.changeObjs), e.update && e.update.finish() }

	function Yn(e, t) { if(e.curOp) return t();
		Gn(e); try { return t() } finally { Un(e) } }

	function Zn(e, t) { return function() { if(e.curOp) return t.apply(e, arguments);
			Gn(e); try { return t.apply(e, arguments) } finally { Un(e) } } }

	function Qn(e) { return function() { if(this.curOp) return e.apply(this, arguments);
			Gn(this); try { return e.apply(this, arguments) } finally { Un(this) } } }

	function Jn(e) { return function() { var t = this.cm; if(!t || t.curOp) return e.apply(this, arguments);
			Gn(t); try { return e.apply(this, arguments) } finally { Un(t) } } }

	function ei(e, t) { e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, P(ti, e)) }

	function ti(e) { var t = e.doc; if(!(t.highlightFrontier >= e.display.viewTo)) { var r = +new Date + e.options.workTime,
				n = ht(e, t.highlightFrontier),
				i = [];
			t.iter(n.line, Math.min(t.first + t.size, e.display.viewTo + 500), function(o) { if(n.line >= e.display.viewFrom) { var l = o.styles,
						a = o.text.length > e.options.maxHighlightLength ? je(t.mode, n.state) : null,
						s = ft(e, o, n, !0);
					a && (n.state = a), o.styles = s.styles; var u = o.styleClasses,
						c = s.classes;
					c ? o.styleClasses = c : u && (o.styleClasses = null); for(var f = !l || l.length != o.styles.length || u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass), d = 0; !f && d < l.length; ++d) f = l[d] != o.styles[d];
					f && i.push(n.line), o.stateAfter = n.save(), n.nextLine() } else o.text.length <= e.options.maxHighlightLength && pt(e, o.text, n), o.stateAfter = n.line % 5 == 0 ? n.save() : null, n.nextLine(); if(+new Date > r) return ei(e, e.options.workDelay), !0 }), t.highlightFrontier = n.line, t.modeFrontier = Math.max(t.modeFrontier, n.line), i.length && Yn(e, function() { for(var t = 0; t < i.length; t++) cn(e, i[t], "text") }) } } var ri = function(e, t, r) { var n = e.display;
		this.viewport = t, this.visible = Mn(n, e.doc, t), this.editorIsHidden = !n.wrapper.offsetWidth, this.wrapperHeight = n.wrapper.clientHeight, this.wrapperWidth = n.wrapper.clientWidth, this.oldDisplayWidth = Mr(e), this.force = r, this.dims = rn(e), this.events = [] };

	function ni(e, t) { var r = e.display,
			n = e.doc; if(t.editorIsHidden) return fn(e), !1; if(!t.force && t.visible.from >= r.viewFrom && t.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == hn(e)) return !1;
		ui(e) && (fn(e), t.dims = rn(e)); var i = n.first + n.size,
			o = Math.max(t.visible.from - e.options.viewportMargin, n.first),
			l = Math.min(i, t.visible.to + e.options.viewportMargin);
		r.viewFrom < o && o - r.viewFrom < 20 && (o = Math.max(n.first, r.viewFrom)), r.viewTo > l && r.viewTo - l < 20 && (l = Math.min(i, r.viewTo)), Ct && (o = Rt(e.doc, o), l = _t(e.doc, l)); var a = o != r.viewFrom || l != r.viewTo || r.lastWrapHeight != t.wrapperHeight || r.lastWrapWidth != t.wrapperWidth;! function(e, t, r) { var n = e.display;
			0 == n.view.length || t >= n.viewTo || r <= n.viewFrom ? (n.view = ir(e, t, r), n.viewFrom = t) : (n.viewFrom > t ? n.view = ir(e, t, n.viewFrom).concat(n.view) : n.viewFrom < t && (n.view = n.view.slice(sn(e, t))), n.viewFrom = t, n.viewTo < r ? n.view = n.view.concat(ir(e, n.viewTo, r)) : n.viewTo > r && (n.view = n.view.slice(0, sn(e, r)))), n.viewTo = r }(e, o, l), r.viewOffset = Vt(Ke(e.doc, r.viewFrom)), e.display.mover.style.top = r.viewOffset + "px"; var u = hn(e); if(!a && 0 == u && !t.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)) return !1; var c = function(e) { if(e.hasFocus()) return null; var t = W(); if(!t || !D(e.display.lineDiv, t)) return null; var r = { activeElt: t }; if(window.getSelection) { var n = window.getSelection();
				n.anchorNode && n.extend && D(e.display.lineDiv, n.anchorNode) && (r.anchorNode = n.anchorNode, r.anchorOffset = n.anchorOffset, r.focusNode = n.focusNode, r.focusOffset = n.focusOffset) } return r }(e); return u > 4 && (r.lineDiv.style.display = "none"),
			function(e, t, r) { var n = e.display,
					i = e.options.lineNumbers,
					o = n.lineDiv,
					l = o.firstChild;

				function a(t) { var r = t.nextSibling; return s && y && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), r } for(var u = n.view, c = n.viewFrom, f = 0; f < u.length; f++) { var d = u[f]; if(d.hidden);
					else if(d.node && d.node.parentNode == o) { for(; l != d.node;) l = a(l); var h = i && null != t && t <= c && d.lineNumber;
						d.changes && (_(d.changes, "gutter") > -1 && (h = !1), ur(e, d, c, r)), h && (T(d.lineNumber), d.lineNumber.appendChild(document.createTextNode(Je(e.options, c)))), l = d.node.nextSibling } else { var p = mr(e, d, c, r);
						o.insertBefore(p, l) } c += d.size } for(; l;) l = a(l) }(e, r.updateLineNumbers, t.dims), u > 4 && (r.lineDiv.style.display = ""), r.renderedView = r.view,
			function(e) { if(e && e.activeElt && e.activeElt != W() && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && D(document.body, e.anchorNode) && D(document.body, e.focusNode))) { var t = window.getSelection(),
						r = document.createRange();
					r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(!1), t.removeAllRanges(), t.addRange(r), t.extend(e.focusNode, e.focusOffset) } }(c), T(r.cursorDiv), T(r.selectionDiv), r.gutters.style.height = r.sizer.style.minHeight = 0, a && (r.lastWrapHeight = t.wrapperHeight, r.lastWrapWidth = t.wrapperWidth, ei(e, 400)), r.updateLineNumbers = null, !0 }

	function ii(e, t) { for(var r = t.viewport, n = !0;; n = !1) { if(n && e.options.lineWrapping && t.oldDisplayWidth != Mr(e)) n && (t.visible = Mn(e.display, e.doc, r));
			else if(r && null != r.top && (r = { top: Math.min(e.doc.height + kr(e.display) - Tr(e), r.top) }), t.visible = Mn(e.display, e.doc, r), t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo) break; if(!ni(e, t)) break;
			Sn(e); var i = Pn(e);
			pn(e), Rn(e, i), ai(e, i), t.force = !1 } t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo) }

	function oi(e, t) { var r = new ri(e, t); if(ni(e, r)) { Sn(e), ii(e, r); var n = Pn(e);
			pn(e), Rn(e, n), ai(e, n), r.finish() } }

	function li(e) { var t = e.gutters.offsetWidth;
		e.sizer.style.marginLeft = t + "px", ar(e, "gutterChanged", e) }

	function ai(e, t) { e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Lr(e) + "px" }

	function si(e) { var t = e.display,
			r = t.view; if(t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) { for(var n = nn(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = n + "px", l = 0; l < r.length; l++)
				if(!r[l].hidden) { e.options.fixedGutter && (r[l].gutter && (r[l].gutter.style.left = o), r[l].gutterBackground && (r[l].gutterBackground.style.left = o)); var a = r[l].alignable; if(a)
						for(var s = 0; s < a.length; s++) a[s].style.left = o } e.options.fixedGutter && (t.gutters.style.left = n + i + "px") } }

	function ui(e) { if(!e.options.lineNumbers) return !1; var t = e.doc,
			r = Je(e.options, t.first + t.size - 1),
			n = e.display; if(r.length != n.lineNumChars) { var i = n.measure.appendChild(A("div", [A("div", r)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
				o = i.firstChild.offsetWidth,
				l = i.offsetWidth - o; return n.lineGutter.style.width = "", n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - l) + 1, n.lineNumWidth = n.lineNumInnerWidth + l, n.lineNumChars = n.lineNumInnerWidth ? r.length : -1, n.lineGutter.style.width = n.lineNumWidth + "px", li(e.display), !0 } return !1 }

	function ci(e, t) { for(var r = [], n = !1, i = 0; i < e.length; i++) { var o = e[i],
				l = null; if("string" != typeof o && (l = o.style, o = o.className), "CodeMirror-linenumbers" == o) { if(!t) continue;
				n = !0 } r.push({ className: o, style: l }) } return t && !n && r.push({ className: "CodeMirror-linenumbers", style: null }), r }

	function fi(e) { var t = e.gutters,
			r = e.gutterSpecs;
		T(t), e.lineGutter = null; for(var n = 0; n < r.length; ++n) { var i = r[n],
				o = i.className,
				l = i.style,
				a = t.appendChild(A("div", null, "CodeMirror-gutter " + o));
			l && (a.style.cssText = l), "CodeMirror-linenumbers" == o && (e.lineGutter = a, a.style.width = (e.lineNumWidth || 1) + "px") } t.style.display = r.length ? "" : "none", li(e) }

	function di(e) { fi(e.display), un(e), si(e) } ri.prototype.signal = function(e, t) { ye(e, t) && this.events.push(arguments) }, ri.prototype.finish = function() { for(var e = 0; e < this.events.length; e++) ge.apply(null, this.events[e]) }; var hi = 0,
		pi = null;

	function gi(e) { var t = e.wheelDeltaX,
			r = e.wheelDeltaY; return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == r && e.detail && e.axis == e.VERTICAL_AXIS ? r = e.detail : null == r && (r = e.wheelDelta), { x: t, y: r } }

	function mi(e) { var t = gi(e); return t.x *= pi, t.y *= pi, t }

	function vi(e, t) { var n = gi(t),
			i = n.x,
			o = n.y,
			l = pi;
		0 === t.deltaMode && (i = t.deltaX, o = t.deltaY, l = 1); var a = e.display,
			u = a.scroller,
			c = u.scrollWidth > u.clientWidth,
			d = u.scrollHeight > u.clientHeight; if(i && c || o && d) { if(o && y && s) e: for(var h = t.target, p = a.view; h != u; h = h.parentNode)
				for(var g = 0; g < p.length; g++)
					if(p[g].node == h) { e.display.currentWheelTarget = h; break e } if(i && !r && !f && null != l) return o && d && En(e, Math.max(0, u.scrollTop + o * l)), Fn(e, Math.max(0, u.scrollLeft + i * l)), (!o || o && d) && xe(t), void(a.wheelStartX = null); if(o && null != l) { var m = o * l,
					v = e.doc.scrollTop,
					b = v + a.wrapper.clientHeight;
				m < 0 ? v = Math.max(0, v + m - 50) : b = Math.min(e.doc.height, b + m + 50), oi(e, { top: v, bottom: b }) } hi < 20 && 0 !== t.deltaMode && (null == a.wheelStartX ? (a.wheelStartX = u.scrollLeft, a.wheelStartY = u.scrollTop, a.wheelDX = i, a.wheelDY = o, setTimeout(function() { if(null != a.wheelStartX) { var e = u.scrollLeft - a.wheelStartX,
						t = u.scrollTop - a.wheelStartY,
						r = t && a.wheelDY && t / a.wheelDY || e && a.wheelDX && e / a.wheelDX;
					a.wheelStartX = a.wheelStartY = null, r && (pi = (pi * hi + r) / (hi + 1), ++hi) } }, 200)) : (a.wheelDX += i, a.wheelDY += o)) } } l ? pi = -.53 : r ? pi = 15 : c ? pi = -.7 : d && (pi = -1 / 3); var yi = function(e, t) { this.ranges = e, this.primIndex = t };
	yi.prototype.primary = function() { return this.ranges[this.primIndex] }, yi.prototype.equals = function(e) { if(e == this) return !0; if(e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1; for(var t = 0; t < this.ranges.length; t++) { var r = this.ranges[t],
				n = e.ranges[t]; if(!rt(r.anchor, n.anchor) || !rt(r.head, n.head)) return !1 } return !0 }, yi.prototype.deepCopy = function() { for(var e = [], t = 0; t < this.ranges.length; t++) e[t] = new bi(nt(this.ranges[t].anchor), nt(this.ranges[t].head)); return new yi(e, this.primIndex) }, yi.prototype.somethingSelected = function() { for(var e = 0; e < this.ranges.length; e++)
			if(!this.ranges[e].empty()) return !0; return !1 }, yi.prototype.contains = function(e, t) { t || (t = e); for(var r = 0; r < this.ranges.length; r++) { var n = this.ranges[r]; if(tt(t, n.from()) >= 0 && tt(e, n.to()) <= 0) return r } return -1 }; var bi = function(e, t) { this.anchor = e, this.head = t };

	function xi(e, t, r) { var n = e && e.options.selectionsMayTouch,
			i = t[r];
		t.sort(function(e, t) { return tt(e.from(), t.from()) }), r = _(t, i); for(var o = 1; o < t.length; o++) { var l = t[o],
				a = t[o - 1],
				s = tt(a.to(), l.from()); if(n && !l.empty() ? s > 0 : s >= 0) { var u = ot(a.from(), l.from()),
					c = it(a.to(), l.to()),
					f = a.empty() ? l.from() == l.head : a.from() == a.head;
				o <= r && --r, t.splice(--o, 2, new bi(f ? c : u, f ? u : c)) } } return new yi(t, r) }

	function wi(e, t) { return new yi([new bi(e, t || e)], 0) }

	function Ci(e) { return e.text ? et(e.from.line + e.text.length - 1, X(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to }

	function ki(e, t) { if(tt(e, t.from) < 0) return e; if(tt(e, t.to) <= 0) return Ci(t); var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
			n = e.ch; return e.line == t.to.line && (n += Ci(t).ch - t.to.ch), et(r, n) }

	function Si(e, t) { for(var r = [], n = 0; n < e.sel.ranges.length; n++) { var i = e.sel.ranges[n];
			r.push(new bi(ki(i.anchor, t), ki(i.head, t))) } return xi(e.cm, r, e.sel.primIndex) }

	function Li(e, t, r) { return e.line == t.line ? et(r.line, e.ch - t.ch + r.ch) : et(r.line + (e.line - t.line), e.ch) }

	function Mi(e) { e.doc.mode = Re(e.options, e.doc.modeOption), Ti(e) }

	function Ti(e) { e.doc.iter(function(e) { e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null) }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, ei(e, 100), e.state.modeGen++, e.curOp && un(e) }

	function Ni(e, t) { return 0 == t.from.ch && 0 == t.to.ch && "" == X(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore) }

	function Ai(e, t, r, n) {
		function i(e) { return r ? r[e] : null }

		function o(e, r, i) {! function(e, t, r, n) { e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), Nt(e), At(e, r); var i = n ? n(e) : 1;
				i != e.height && Xe(e, i) }(e, r, i, n), ar(e, "change", e, t) }

		function l(e, t) { for(var r = [], o = e; o < t; ++o) r.push(new Kt(u[o], i(o), n)); return r } var a = t.from,
			s = t.to,
			u = t.text,
			c = Ke(e, a.line),
			f = Ke(e, s.line),
			d = X(u),
			h = i(u.length - 1),
			p = s.line - a.line; if(t.full) e.insert(0, l(0, u.length)), e.remove(u.length, e.size - u.length);
		else if(Ni(e, t)) { var g = l(0, u.length - 1);
			o(f, f.text, h), p && e.remove(a.line, p), g.length && e.insert(a.line, g) } else if(c == f)
			if(1 == u.length) o(c, c.text.slice(0, a.ch) + d + c.text.slice(s.ch), h);
			else { var m = l(1, u.length - 1);
				m.push(new Kt(d + c.text.slice(s.ch), h, n)), o(c, c.text.slice(0, a.ch) + u[0], i(0)), e.insert(a.line + 1, m) } else if(1 == u.length) o(c, c.text.slice(0, a.ch) + u[0] + f.text.slice(s.ch), i(0)), e.remove(a.line + 1, p);
		else { o(c, c.text.slice(0, a.ch) + u[0], i(0)), o(f, d + f.text.slice(s.ch), h); var v = l(1, u.length - 1);
			p > 1 && e.remove(a.line + 1, p - 1), e.insert(a.line + 1, v) } ar(e, "change", e, t) }

	function Oi(e, t, r) {! function e(n, i, o) { if(n.linked)
				for(var l = 0; l < n.linked.length; ++l) { var a = n.linked[l]; if(a.doc != i) { var s = o && a.sharedHist;
						r && !s || (t(a.doc, s), e(a.doc, n, s)) } } }(e, null, !0) }

	function Di(e, t) { if(t.cm) throw new Error("This document is already in use.");
		e.doc = t, t.cm = e, ln(e), Mi(e), Wi(e), e.options.direction = t.direction, e.options.lineWrapping || Ut(e), e.options.mode = t.modeOption, un(e) }

	function Wi(e) {
		("rtl" == e.doc.direction ? E : M)(e.display.lineDiv, "CodeMirror-rtl") }

	function Ei(e) { this.done = [], this.undone = [], this.undoDepth = e ? e.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e ? e.maxGeneration : 1 }

	function Hi(e, t) { var r = { from: nt(t.from), to: Ci(t), text: qe(e, t.from, t.to) }; return Ri(e, r, t.from.line, t.to.line + 1), Oi(e, function(e) { return Ri(e, r, t.from.line, t.to.line + 1) }, !0), r }

	function Fi(e) { for(; e.length;) { if(!X(e).ranges) break;
			e.pop() } }

	function Pi(e, t, r, n) { var i = e.history;
		i.undone.length = 0; var o, l, a = +new Date; if((i.lastOp == n || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && i.lastModTime > a - (e.cm ? e.cm.options.historyEventDelay : 500) || "*" == t.origin.charAt(0))) && (o = function(e, t) { return t ? (Fi(e.done), X(e.done)) : e.done.length && !X(e.done).ranges ? X(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), X(e.done)) : void 0 }(i, i.lastOp == n))) l = X(o.changes), 0 == tt(t.from, t.to) && 0 == tt(t.from, l.to) ? l.to = Ci(t) : o.changes.push(Hi(e, t));
		else { var s = X(i.done); for(s && s.ranges || Ii(e.sel, i.done), o = { changes: [Hi(e, t)], generation: i.generation }, i.done.push(o); i.done.length > i.undoDepth;) i.done.shift(), i.done[0].ranges || i.done.shift() } i.done.push(r), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = a, i.lastOp = i.lastSelOp = n, i.lastOrigin = i.lastSelOrigin = t.origin, l || ge(e, "historyAdded") }

	function zi(e, t, r, n) { var i = e.history,
			o = n && n.origin;
		r == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || function(e, t, r, n) { var i = t.charAt(0); return "*" == i || "+" == i && r.ranges.length == n.ranges.length && r.somethingSelected() == n.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500) }(e, o, X(i.done), t)) ? i.done[i.done.length - 1] = t : Ii(t, i.done), i.lastSelTime = +new Date, i.lastSelOrigin = o, i.lastSelOp = r, n && !1 !== n.clearRedo && Fi(i.undone) }

	function Ii(e, t) { var r = X(t);
		r && r.ranges && r.equals(e) || t.push(e) }

	function Ri(e, t, r, n) { var i = t["spans_" + e.id],
			o = 0;
		e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), function(r) { r.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = r.markedSpans), ++o }) }

	function _i(e) { if(!e) return null; for(var t, r = 0; r < e.length; ++r) e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r)) : t && t.push(e[r]); return t ? t.length ? t : null : e }

	function Bi(e, t) { var r = function(e, t) { var r = t["spans_" + e.id]; if(!r) return null; for(var n = [], i = 0; i < t.text.length; ++i) n.push(_i(r[i])); return n }(e, t),
			n = Mt(e, t); if(!r) return n; if(!n) return r; for(var i = 0; i < r.length; ++i) { var o = r[i],
				l = n[i]; if(o && l) e: for(var a = 0; a < l.length; ++a) { for(var s = l[a], u = 0; u < o.length; ++u)
					if(o[u].marker == s.marker) continue e;
				o.push(s) } else l && (r[i] = l) } return r }

	function ji(e, t, r) { for(var n = [], i = 0; i < e.length; ++i) { var o = e[i]; if(o.ranges) n.push(r ? yi.prototype.deepCopy.call(o) : o);
			else { var l = o.changes,
					a = [];
				n.push({ changes: a }); for(var s = 0; s < l.length; ++s) { var u = l[s],
						c = void 0; if(a.push({ from: u.from, to: u.to, text: u.text }), t)
						for(var f in u)(c = f.match(/^spans_(\d+)$/)) && _(t, Number(c[1])) > -1 && (X(a)[f] = u[f], delete u[f]) } } } return n }

	function Vi(e, t, r, n) { if(n) { var i = e.anchor; if(r) { var o = tt(t, i) < 0;
				o != tt(r, i) < 0 ? (i = t, t = r) : o != tt(t, r) < 0 && (t = r) } return new bi(i, t) } return new bi(r || t, t) }

	function Gi(e, t, r, n, i) { null == i && (i = e.cm && (e.cm.display.shift || e.extend)), Xi(e, new yi([Vi(e.sel.primary(), t, r, i)], 0), n) }

	function Ui(e, t, r) { for(var n = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) n[o] = Vi(e.sel.ranges[o], t[o], null, i);
		Xi(e, xi(e.cm, n, e.sel.primIndex), r) }

	function Ki(e, t, r, n) { var i = e.sel.ranges.slice(0);
		i[t] = r, Xi(e, xi(e.cm, i, e.sel.primIndex), n) }

	function qi(e, t, r, n) { Xi(e, wi(t, r), n) }

	function $i(e, t, r) { var n = e.history.done,
			i = X(n);
		i && i.ranges ? (n[n.length - 1] = t, Yi(e, t, r)) : Xi(e, t, r) }

	function Xi(e, t, r) { Yi(e, t, r), zi(e, e.sel, e.cm ? e.cm.curOp.id : NaN, r) }

	function Yi(e, t, r) {
		(ye(e, "beforeSelectionChange") || e.cm && ye(e.cm, "beforeSelectionChange")) && (t = function(e, t, r) { var n = { ranges: t.ranges, update: function(t) { this.ranges = []; for(var r = 0; r < t.length; r++) this.ranges[r] = new bi(at(e, t[r].anchor), at(e, t[r].head)) }, origin: r && r.origin }; return ge(e, "beforeSelectionChange", e, n), e.cm && ge(e.cm, "beforeSelectionChange", e.cm, n), n.ranges != t.ranges ? xi(e.cm, n.ranges, n.ranges.length - 1) : t }(e, t, r)), Zi(e, Ji(e, t, r && r.bias || (tt(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1), !0)), r && !1 === r.scroll || !e.cm || "nocursor" == e.cm.getOption("readOnly") || An(e.cm) }

	function Zi(e, t) { t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, ve(e.cm)), ar(e, "cursorActivity", e)) }

	function Qi(e) { Zi(e, Ji(e, e.sel, null, !1)) }

	function Ji(e, t, r, n) { for(var i, o = 0; o < t.ranges.length; o++) { var l = t.ranges[o],
				a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
				s = to(e, l.anchor, a && a.anchor, r, n),
				u = to(e, l.head, a && a.head, r, n);
			(i || s != l.anchor || u != l.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new bi(s, u)) } return i ? xi(e.cm, i, t.primIndex) : t }

	function eo(e, t, r, n, i) { var o = Ke(e, t.line); if(o.markedSpans)
			for(var l = 0; l < o.markedSpans.length; ++l) { var a = o.markedSpans[l],
					s = a.marker,
					u = "selectLeft" in s ? !s.selectLeft : s.inclusiveLeft,
					c = "selectRight" in s ? !s.selectRight : s.inclusiveRight; if((null == a.from || (u ? a.from <= t.ch : a.from < t.ch)) && (null == a.to || (c ? a.to >= t.ch : a.to > t.ch))) { if(i && (ge(s, "beforeCursorEnter"), s.explicitlyCleared)) { if(o.markedSpans) {--l; continue } break } if(!s.atomic) continue; if(r) { var f = s.find(n < 0 ? 1 : -1),
							d = void 0; if((n < 0 ? c : u) && (f = ro(e, f, -n, f && f.line == t.line ? o : null)), f && f.line == t.line && (d = tt(f, r)) && (n < 0 ? d < 0 : d > 0)) return eo(e, f, t, n, i) } var h = s.find(n < 0 ? -1 : 1); return (n < 0 ? u : c) && (h = ro(e, h, n, h.line == t.line ? o : null)), h ? eo(e, h, t, n, i) : null } }
		return t }

	function to(e, t, r, n, i) { var o = n || 1,
			l = eo(e, t, r, o, i) || !i && eo(e, t, r, o, !0) || eo(e, t, r, -o, i) || !i && eo(e, t, r, -o, !0); return l || (e.cantEdit = !0, et(e.first, 0)) }

	function ro(e, t, r, n) { return r < 0 && 0 == t.ch ? t.line > e.first ? at(e, et(t.line - 1)) : null : r > 0 && t.ch == (n || Ke(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? et(t.line + 1, 0) : null : new et(t.line, t.ch + r) }

	function no(e) { e.setSelection(et(e.firstLine(), 0), et(e.lastLine()), V) }

	function io(e, t, r) { var n = { canceled: !1, from: t.from, to: t.to, text: t.text, origin: t.origin, cancel: function() { return n.canceled = !0 } }; return r && (n.update = function(t, r, i, o) { t && (n.from = at(e, t)), r && (n.to = at(e, r)), i && (n.text = i), void 0 !== o && (n.origin = o) }), ge(e, "beforeChange", e, n), e.cm && ge(e.cm, "beforeChange", e.cm, n), n.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : { from: n.from, to: n.to, text: n.text, origin: n.origin } }

	function oo(e, t, r) { if(e.cm) { if(!e.cm.curOp) return Zn(e.cm, oo)(e, t, r); if(e.cm.state.suppressEdits) return } if(!(ye(e, "beforeChange") || e.cm && ye(e.cm, "beforeChange")) || (t = io(e, t, !0))) { var n = wt && !r && function(e, t, r) { var n = null; if(e.iter(t.line, r.line + 1, function(e) { if(e.markedSpans)
							for(var t = 0; t < e.markedSpans.length; ++t) { var r = e.markedSpans[t].marker;!r.readOnly || n && -1 != _(n, r) || (n || (n = [])).push(r) } }), !n) return null; for(var i = [{ from: t, to: r }], o = 0; o < n.length; ++o)
					for(var l = n[o], a = l.find(0), s = 0; s < i.length; ++s) { var u = i[s]; if(!(tt(u.to, a.from) < 0 || tt(u.from, a.to) > 0)) { var c = [s, 1],
								f = tt(u.from, a.from),
								d = tt(u.to, a.to);
							(f < 0 || !l.inclusiveLeft && !f) && c.push({ from: u.from, to: a.from }), (d > 0 || !l.inclusiveRight && !d) && c.push({ from: a.to, to: u.to }), i.splice.apply(i, c), s += c.length - 3 } }
				return i }(e, t.from, t.to); if(n)
				for(var i = n.length - 1; i >= 0; --i) lo(e, { from: n[i].from, to: n[i].to, text: i ? [""] : t.text, origin: t.origin });
			else lo(e, t) } }

	function lo(e, t) { if(1 != t.text.length || "" != t.text[0] || 0 != tt(t.from, t.to)) { var r = Si(e, t);
			Pi(e, t, r, e.cm ? e.cm.curOp.id : NaN), uo(e, t, r, Mt(e, t)); var n = [];
			Oi(e, function(e, r) { r || -1 != _(n, e.history) || (po(e.history, t), n.push(e.history)), uo(e, t, null, Mt(e, t)) }) } }

	function ao(e, t, r) { var n = e.cm && e.cm.state.suppressEdits; if(!n || r) { for(var i, o = e.history, l = e.sel, a = "undo" == t ? o.done : o.undone, s = "undo" == t ? o.undone : o.done, u = 0; u < a.length && (i = a[u], r ? !i.ranges || i.equals(e.sel) : i.ranges); u++); if(u != a.length) { for(o.lastOrigin = o.lastSelOrigin = null;;) { if(!(i = a.pop()).ranges) { if(n) return void a.push(i); break } if(Ii(i, s), r && !i.equals(e.sel)) return void Xi(e, i, { clearRedo: !1 });
					l = i } var c = [];
				Ii(l, s), s.push({ changes: c, generation: o.generation }), o.generation = i.generation || ++o.maxGeneration; for(var f = ye(e, "beforeChange") || e.cm && ye(e.cm, "beforeChange"), d = function(r) { var n = i.changes[r]; if(n.origin = t, f && !io(e, n, !1)) return a.length = 0, {};
						c.push(Hi(e, n)); var o = r ? Si(e, n) : X(a);
						uo(e, n, o, Bi(e, n)), !r && e.cm && e.cm.scrollIntoView({ from: n.from, to: Ci(n) }); var l = [];
						Oi(e, function(e, t) { t || -1 != _(l, e.history) || (po(e.history, n), l.push(e.history)), uo(e, n, null, Bi(e, n)) }) }, h = i.changes.length - 1; h >= 0; --h) { var p = d(h); if(p) return p.v } } } }

	function so(e, t) { if(0 != t && (e.first += t, e.sel = new yi(Y(e.sel.ranges, function(e) { return new bi(et(e.anchor.line + t, e.anchor.ch), et(e.head.line + t, e.head.ch)) }), e.sel.primIndex), e.cm)) { un(e.cm, e.first, e.first - t, t); for(var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++) cn(e.cm, n, "gutter") } }

	function uo(e, t, r, n) { if(e.cm && !e.cm.curOp) return Zn(e.cm, uo)(e, t, r, n); if(t.to.line < e.first) so(e, t.text.length - 1 - (t.to.line - t.from.line));
		else if(!(t.from.line > e.lastLine())) { if(t.from.line < e.first) { var i = t.text.length - 1 - (e.first - t.from.line);
				so(e, i), t = { from: et(e.first, 0), to: et(t.to.line + i, t.to.ch), text: [X(t.text)], origin: t.origin } } var o = e.lastLine();
			t.to.line > o && (t = { from: t.from, to: et(o, Ke(e, o).text.length), text: [t.text[0]], origin: t.origin }), t.removed = qe(e, t.from, t.to), r || (r = Si(e, t)), e.cm ? function(e, t, r) { var n = e.doc,
					i = e.display,
					o = t.from,
					l = t.to,
					a = !1,
					s = o.line;
				e.options.lineWrapping || (s = Ye(It(Ke(n, o.line))), n.iter(s, l.line + 1, function(e) { if(e == i.maxLine) return a = !0, !0 }));
				n.sel.contains(t.from, t.to) > -1 && ve(e);
				Ai(n, t, r, on(e)), e.options.lineWrapping || (n.iter(s, o.line + t.text.length, function(e) { var t = Gt(e);
					t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, a = !1) }), a && (e.curOp.updateMaxLine = !0));
				(function(e, t) { if(e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) { for(var r = e.first, n = t - 1; n > r; n--) { var i = Ke(e, n).stateAfter; if(i && (!(i instanceof ut) || n + i.lookAhead < t)) { r = n + 1; break } } e.highlightFrontier = Math.min(e.highlightFrontier, r) } })(n, o.line), ei(e, 400); var u = t.text.length - (l.line - o.line) - 1;
				t.full ? un(e) : o.line != l.line || 1 != t.text.length || Ni(e.doc, t) ? un(e, o.line, l.line + 1, u) : cn(e, o.line, "text"); var c = ye(e, "changes"),
					f = ye(e, "change"); if(f || c) { var d = { from: o, to: l, text: t.text, removed: t.removed, origin: t.origin };
					f && ar(e, "change", e, d), c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(d) } e.display.selForContextMenu = null }(e.cm, t, n) : Ai(e, t, n), Yi(e, r, V), e.cantEdit && to(e, et(e.firstLine(), 0)) && (e.cantEdit = !1) } }

	function co(e, t, r, n, i) { var o;
		n || (n = r), tt(n, r) < 0 && (r = (o = [n, r])[0], n = o[1]), "string" == typeof t && (t = e.splitLines(t)), oo(e, { from: r, to: n, text: t, origin: i }) }

	function fo(e, t, r, n) { r < e.line ? e.line += n : t < e.line && (e.line = t, e.ch = 0) }

	function ho(e, t, r, n) { for(var i = 0; i < e.length; ++i) { var o = e[i],
				l = !0; if(o.ranges) { o.copied || ((o = e[i] = o.deepCopy()).copied = !0); for(var a = 0; a < o.ranges.length; a++) fo(o.ranges[a].anchor, t, r, n), fo(o.ranges[a].head, t, r, n) } else { for(var s = 0; s < o.changes.length; ++s) { var u = o.changes[s]; if(r < u.from.line) u.from = et(u.from.line + n, u.from.ch), u.to = et(u.to.line + n, u.to.ch);
					else if(t <= u.to.line) { l = !1; break } } l || (e.splice(0, i + 1), i = 0) } } }

	function po(e, t) { var r = t.from.line,
			n = t.to.line,
			i = t.text.length - (n - r) - 1;
		ho(e.done, r, n, i), ho(e.undone, r, n, i) }

	function go(e, t, r, n) { var i = t,
			o = t; return "number" == typeof t ? o = Ke(e, lt(e, t)) : i = Ye(t), null == i ? null : (n(o, i) && e.cm && cn(e.cm, i, r), o) }

	function mo(e) { this.lines = e, this.parent = null; for(var t = 0, r = 0; r < e.length; ++r) e[r].parent = this, t += e[r].height;
		this.height = t }

	function vo(e) { this.children = e; for(var t = 0, r = 0, n = 0; n < e.length; ++n) { var i = e[n];
			t += i.chunkSize(), r += i.height, i.parent = this } this.size = t, this.height = r, this.parent = null } bi.prototype.from = function() { return ot(this.anchor, this.head) }, bi.prototype.to = function() { return it(this.anchor, this.head) }, bi.prototype.empty = function() { return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch }, mo.prototype = { chunkSize: function() { return this.lines.length }, removeInner: function(e, t) { for(var r = e, n = e + t; r < n; ++r) { var i = this.lines[r];
				this.height -= i.height, qt(i), ar(i, "delete") } this.lines.splice(e, t) }, collapse: function(e) { e.push.apply(e, this.lines) }, insertInner: function(e, t, r) { this.height += r, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e)); for(var n = 0; n < t.length; ++n) t[n].parent = this }, iterN: function(e, t, r) { for(var n = e + t; e < n; ++e)
				if(r(this.lines[e])) return !0 } }, vo.prototype = { chunkSize: function() { return this.size }, removeInner: function(e, t) { this.size -= t; for(var r = 0; r < this.children.length; ++r) { var n = this.children[r],
					i = n.chunkSize(); if(e < i) { var o = Math.min(t, i - e),
						l = n.height; if(n.removeInner(e, o), this.height -= l - n.height, i == o && (this.children.splice(r--, 1), n.parent = null), 0 == (t -= o)) break;
					e = 0 } else e -= i } if(this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof mo))) { var a = [];
				this.collapse(a), this.children = [new mo(a)], this.children[0].parent = this } }, collapse: function(e) { for(var t = 0; t < this.children.length; ++t) this.children[t].collapse(e) }, insertInner: function(e, t, r) { this.size += t.length, this.height += r; for(var n = 0; n < this.children.length; ++n) { var i = this.children[n],
					o = i.chunkSize(); if(e <= o) { if(i.insertInner(e, t, r), i.lines && i.lines.length > 50) { for(var l = i.lines.length % 25 + 25, a = l; a < i.lines.length;) { var s = new mo(i.lines.slice(a, a += 25));
							i.height -= s.height, this.children.splice(++n, 0, s), s.parent = this } i.lines = i.lines.slice(0, l), this.maybeSpill() } break } e -= o } }, maybeSpill: function() { if(!(this.children.length <= 10)) { var e = this;
				do { var t = new vo(e.children.splice(e.children.length - 5, 5)); if(e.parent) { e.size -= t.size, e.height -= t.height; var r = _(e.parent.children, e);
						e.parent.children.splice(r + 1, 0, t) } else { var n = new vo(e.children);
						n.parent = e, e.children = [n, t], e = n } t.parent = e.parent } while(e.children.length > 10);
				e.parent.maybeSpill() } }, iterN: function(e, t, r) { for(var n = 0; n < this.children.length; ++n) { var i = this.children[n],
					o = i.chunkSize(); if(e < o) { var l = Math.min(t, o - e); if(i.iterN(e, l, r)) return !0; if(0 == (t -= l)) break;
					e = 0 } else e -= o } } }; var yo = function(e, t, r) { if(r)
			for(var n in r) r.hasOwnProperty(n) && (this[n] = r[n]);
		this.doc = e, this.node = t };

	function bo(e, t, r) { Vt(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Nn(e, r) } yo.prototype.clear = function() { var e = this.doc.cm,
			t = this.line.widgets,
			r = this.line,
			n = Ye(r); if(null != n && t) { for(var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
			t.length || (r.widgets = null); var o = xr(this);
			Xe(r, Math.max(0, r.height - o)), e && (Yn(e, function() { bo(e, r, -o), cn(e, n, "widget") }), ar(e, "lineWidgetCleared", e, this, n)) } }, yo.prototype.changed = function() { var e = this,
			t = this.height,
			r = this.doc.cm,
			n = this.line;
		this.height = null; var i = xr(this) - t;
		i && (Bt(this.doc, n) || Xe(n, n.height + i), r && Yn(r, function() { r.curOp.forceUpdate = !0, bo(r, n, i), ar(r, "lineWidgetChanged", r, e, Ye(n)) })) }, be(yo); var xo = 0,
		wo = function(e, t) { this.lines = [], this.type = t, this.doc = e, this.id = ++xo };

	function Co(e, t, r, n, i) { if(n && n.shared) return function(e, t, r, n, i) {
			(n = z(n)).shared = !1; var o = [Co(e, t, r, n, i)],
				l = o[0],
				a = n.widgetNode; return Oi(e, function(e) { a && (n.widgetNode = a.cloneNode(!0)), o.push(Co(e, at(e, t), at(e, r), n, i)); for(var s = 0; s < e.linked.length; ++s)
					if(e.linked[s].isParent) return;
				l = X(o) }), new ko(o, l) }(e, t, r, n, i); if(e.cm && !e.cm.curOp) return Zn(e.cm, Co)(e, t, r, n, i); var o = new wo(e, i),
			l = tt(t, r); if(n && z(n, o, !1), l > 0 || 0 == l && !1 !== o.clearWhenEmpty) return o; if(o.replacedWith && (o.collapsed = !0, o.widgetNode = O("span", [o.replacedWith], "CodeMirror-widget"), n.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), n.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) { if(zt(e, t.line, t, r, o) || t.line != r.line && zt(e, r.line, t, r, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
			Ct = !0 } o.addToHistory && Pi(e, { from: t, to: r, origin: "markText" }, e.sel, NaN); var a, s = t.line,
			u = e.cm; if(e.iter(s, r.line + 1, function(n) { u && o.collapsed && !u.options.lineWrapping && It(n) == u.display.maxLine && (a = !0), o.collapsed && s != t.line && Xe(n, 0),
					function(e, t, r) { var n = r && window.WeakSet && (r.markedSpans || (r.markedSpans = new WeakSet));
						n && e.markedSpans && n.has(e.markedSpans) ? e.markedSpans.push(t) : (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], n && n.add(e.markedSpans)), t.marker.attachLine(e) }(n, new kt(o, s == t.line ? t.ch : null, s == r.line ? r.ch : null), e.cm && e.cm.curOp), ++s }), o.collapsed && e.iter(t.line, r.line + 1, function(t) { Bt(e, t) && Xe(t, 0) }), o.clearOnEnter && de(o, "beforeCursorEnter", function() { return o.clear() }), o.readOnly && (wt = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++xo, o.atomic = !0), u) { if(a && (u.curOp.updateMaxLine = !0), o.collapsed) un(u, t.line, r.line + 1);
			else if(o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
				for(var c = t.line; c <= r.line; c++) cn(u, c, "text");
			o.atomic && Qi(u.doc), ar(u, "markerAdded", u, o) } return o } wo.prototype.clear = function() { if(!this.explicitlyCleared) { var e = this.doc.cm,
				t = e && !e.curOp; if(t && Gn(e), ye(this, "clear")) { var r = this.find();
				r && ar(this, "clear", r.from, r.to) } for(var n = null, i = null, o = 0; o < this.lines.length; ++o) { var l = this.lines[o],
					a = St(l.markedSpans, this);
				e && !this.collapsed ? cn(e, Ye(l), "text") : e && (null != a.to && (i = Ye(l)), null != a.from && (n = Ye(l))), l.markedSpans = Lt(l.markedSpans, a), null == a.from && this.collapsed && !Bt(this.doc, l) && e && Xe(l, en(e.display)) } if(e && this.collapsed && !e.options.lineWrapping)
				for(var s = 0; s < this.lines.length; ++s) { var u = It(this.lines[s]),
						c = Gt(u);
					c > e.display.maxLineLength && (e.display.maxLine = u, e.display.maxLineLength = c, e.display.maxLineChanged = !0) } null != n && e && this.collapsed && un(e, n, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && Qi(e.doc)), e && ar(e, "markerCleared", e, this, n, i), t && Un(e), this.parent && this.parent.clear() } }, wo.prototype.find = function(e, t) { var r, n;
		null == e && "bookmark" == this.type && (e = 1); for(var i = 0; i < this.lines.length; ++i) { var o = this.lines[i],
				l = St(o.markedSpans, this); if(null != l.from && (r = et(t ? o : Ye(o), l.from), -1 == e)) return r; if(null != l.to && (n = et(t ? o : Ye(o), l.to), 1 == e)) return n } return r && { from: r, to: n } }, wo.prototype.changed = function() { var e = this,
			t = this.find(-1, !0),
			r = this,
			n = this.doc.cm;
		t && n && Yn(n, function() { var i = t.line,
				o = Ye(t.line),
				l = Or(n, o); if(l && (zr(l), n.curOp.selectionChanged = n.curOp.forceUpdate = !0), n.curOp.updateMaxLine = !0, !Bt(r.doc, i) && null != r.height) { var a = r.height;
				r.height = null; var s = xr(r) - a;
				s && Xe(i, i.height + s) } ar(n, "markerChanged", n, e) }) }, wo.prototype.attachLine = function(e) { if(!this.lines.length && this.doc.cm) { var t = this.doc.cm.curOp;
			t.maybeHiddenMarkers && -1 != _(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this) } this.lines.push(e) }, wo.prototype.detachLine = function(e) { if(this.lines.splice(_(this.lines, e), 1), !this.lines.length && this.doc.cm) { var t = this.doc.cm.curOp;
			(t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this) } }, be(wo); var ko = function(e, t) { this.markers = e, this.primary = t; for(var r = 0; r < e.length; ++r) e[r].parent = this };

	function So(e) { return e.findMarks(et(e.first, 0), e.clipPos(et(e.lastLine())), function(e) { return e.parent }) }

	function Lo(e) { for(var t = function(t) { var r = e[t],
					n = [r.primary.doc];
				Oi(r.primary.doc, function(e) { return n.push(e) }); for(var i = 0; i < r.markers.length; i++) { var o = r.markers[i]; - 1 == _(n, o.doc) && (o.parent = null, r.markers.splice(i--, 1)) } }, r = 0; r < e.length; r++) t(r) } ko.prototype.clear = function() { if(!this.explicitlyCleared) { this.explicitlyCleared = !0; for(var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
			ar(this, "clear") } }, ko.prototype.find = function(e, t) { return this.primary.find(e, t) }, be(ko); var Mo = 0,
		To = function(e, t, r, n, i) { if(!(this instanceof To)) return new To(e, t, r, n, i);
			null == r && (r = 0), vo.call(this, [new mo([new Kt("", null)])]), this.first = r, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = r; var o = et(r, 0);
			this.sel = wi(o), this.history = new Ei(null), this.id = ++Mo, this.modeOption = t, this.lineSep = n, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), Ai(this, { from: o, to: o, text: e }), Xi(this, wi(o), V) };
	To.prototype = Q(vo.prototype, { constructor: To, iter: function(e, t, r) { r ? this.iterN(e - this.first, t - e, r) : this.iterN(this.first, this.first + this.size, e) }, insert: function(e, t) { for(var r = 0, n = 0; n < t.length; ++n) r += t[n].height;
			this.insertInner(e - this.first, t, r) }, remove: function(e, t) { this.removeInner(e - this.first, t) }, getValue: function(e) { var t = $e(this, this.first, this.first + this.size); return !1 === e ? t : t.join(e || this.lineSeparator()) }, setValue: Jn(function(e) { var t = et(this.first, 0),
				r = this.first + this.size - 1;
			oo(this, { from: t, to: et(r, Ke(this, r).text.length), text: this.splitLines(e), origin: "setValue", full: !0 }, !0), this.cm && On(this.cm, 0, 0), Xi(this, wi(t), V) }), replaceRange: function(e, t, r, n) { co(this, e, t = at(this, t), r = r ? at(this, r) : t, n) }, getRange: function(e, t, r) { var n = qe(this, at(this, e), at(this, t)); return !1 === r ? n : "" === r ? n.join("") : n.join(r || this.lineSeparator()) }, getLine: function(e) { var t = this.getLineHandle(e); return t && t.text }, getLineHandle: function(e) { if(Qe(this, e)) return Ke(this, e) }, getLineNumber: function(e) { return Ye(e) }, getLineHandleVisualStart: function(e) { return "number" == typeof e && (e = Ke(this, e)), It(e) }, lineCount: function() { return this.size }, firstLine: function() { return this.first }, lastLine: function() { return this.first + this.size - 1 }, clipPos: function(e) { return at(this, e) }, getCursor: function(e) { var t = this.sel.primary(); return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from() }, listSelections: function() { return this.sel.ranges }, somethingSelected: function() { return this.sel.somethingSelected() }, setCursor: Jn(function(e, t, r) { qi(this, at(this, "number" == typeof e ? et(e, t || 0) : e), null, r) }), setSelection: Jn(function(e, t, r) { qi(this, at(this, e), at(this, t || e), r) }), extendSelection: Jn(function(e, t, r) { Gi(this, at(this, e), t && at(this, t), r) }), extendSelections: Jn(function(e, t) { Ui(this, st(this, e), t) }), extendSelectionsBy: Jn(function(e, t) { Ui(this, st(this, Y(this.sel.ranges, e)), t) }), setSelections: Jn(function(e, t, r) { if(e.length) { for(var n = [], i = 0; i < e.length; i++) n[i] = new bi(at(this, e[i].anchor), at(this, e[i].head || e[i].anchor));
				null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Xi(this, xi(this.cm, n, t), r) } }), addSelection: Jn(function(e, t, r) { var n = this.sel.ranges.slice(0);
			n.push(new bi(at(this, e), at(this, t || e))), Xi(this, xi(this.cm, n, n.length - 1), r) }), getSelection: function(e) { for(var t, r = this.sel.ranges, n = 0; n < r.length; n++) { var i = qe(this, r[n].from(), r[n].to());
				t = t ? t.concat(i) : i } return !1 === e ? t : t.join(e || this.lineSeparator()) }, getSelections: function(e) { for(var t = [], r = this.sel.ranges, n = 0; n < r.length; n++) { var i = qe(this, r[n].from(), r[n].to());!1 !== e && (i = i.join(e || this.lineSeparator())), t[n] = i } return t }, replaceSelection: function(e, t, r) { for(var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = e;
			this.replaceSelections(n, t, r || "+input") }, replaceSelections: Jn(function(e, t, r) { for(var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) { var l = i.ranges[o];
				n[o] = { from: l.from(), to: l.to(), text: this.splitLines(e[o]), origin: r } } for(var a = t && "end" != t && function(e, t, r) { for(var n = [], i = et(e.first, 0), o = i, l = 0; l < t.length; l++) { var a = t[l],
							s = Li(a.from, i, o),
							u = Li(Ci(a), i, o); if(i = a.to, o = u, "around" == r) { var c = e.sel.ranges[l],
								f = tt(c.head, c.anchor) < 0;
							n[l] = new bi(f ? u : s, f ? s : u) } else n[l] = new bi(s, s) } return new yi(n, e.sel.primIndex) }(this, n, t), s = n.length - 1; s >= 0; s--) oo(this, n[s]);
			a ? $i(this, a) : this.cm && An(this.cm) }), undo: Jn(function() { ao(this, "undo") }), redo: Jn(function() { ao(this, "redo") }), undoSelection: Jn(function() { ao(this, "undo", !0) }), redoSelection: Jn(function() { ao(this, "redo", !0) }), setExtending: function(e) { this.extend = e }, getExtending: function() { return this.extend }, historySize: function() { for(var e = this.history, t = 0, r = 0, n = 0; n < e.done.length; n++) e.done[n].ranges || ++t; for(var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++r; return { undo: t, redo: r } }, clearHistory: function() { var e = this;
			this.history = new Ei(this.history), Oi(this, function(t) { return t.history = e.history }, !0) }, markClean: function() { this.cleanGeneration = this.changeGeneration(!0) }, changeGeneration: function(e) { return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation }, isClean: function(e) { return this.history.generation == (e || this.cleanGeneration) }, getHistory: function() { return { done: ji(this.history.done), undone: ji(this.history.undone) } }, setHistory: function(e) { var t = this.history = new Ei(this.history);
			t.done = ji(e.done.slice(0), null, !0), t.undone = ji(e.undone.slice(0), null, !0) }, setGutterMarker: Jn(function(e, t, r) { return go(this, e, "gutter", function(e) { var n = e.gutterMarkers || (e.gutterMarkers = {}); return n[t] = r, !r && re(n) && (e.gutterMarkers = null), !0 }) }), clearGutter: Jn(function(e) { var t = this;
			this.iter(function(r) { r.gutterMarkers && r.gutterMarkers[e] && go(t, r, "gutter", function() { return r.gutterMarkers[e] = null, re(r.gutterMarkers) && (r.gutterMarkers = null), !0 }) }) }), lineInfo: function(e) { var t; if("number" == typeof e) { if(!Qe(this, e)) return null; if(t = e, !(e = Ke(this, e))) return null } else if(null == (t = Ye(e))) return null; return { line: t, handle: e, text: e.text, gutterMarkers: e.gutterMarkers, textClass: e.textClass, bgClass: e.bgClass, wrapClass: e.wrapClass, widgets: e.widgets } }, addLineClass: Jn(function(e, t, r) { return go(this, e, "gutter" == t ? "gutter" : "class", function(e) { var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass"; if(e[n]) { if(S(r).test(e[n])) return !1;
					e[n] += " " + r } else e[n] = r; return !0 }) }), removeLineClass: Jn(function(e, t, r) { return go(this, e, "gutter" == t ? "gutter" : "class", function(e) { var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
					i = e[n]; if(!i) return !1; if(null == r) e[n] = null;
				else { var o = i.match(S(r)); if(!o) return !1; var l = o.index + o[0].length;
					e[n] = i.slice(0, o.index) + (o.index && l != i.length ? " " : "") + i.slice(l) || null } return !0 }) }), addLineWidget: Jn(function(e, t, r) { return function(e, t, r, n) { var i = new yo(e, r, n),
					o = e.cm; return o && i.noHScroll && (o.display.alignWidgets = !0), go(e, t, "widget", function(t) { var r = t.widgets || (t.widgets = []); if(null == i.insertAt ? r.push(i) : r.splice(Math.min(r.length, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !Bt(e, t)) { var n = Vt(t) < e.scrollTop;
						Xe(t, t.height + xr(i)), n && Nn(o, i.height), o.curOp.forceUpdate = !0 } return !0 }), o && ar(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : Ye(t)), i }(this, e, t, r) }), removeLineWidget: function(e) { e.clear() }, markText: function(e, t, r) { return Co(this, at(this, e), at(this, t), r, r && r.type || "range") }, setBookmark: function(e, t) { var r = { replacedWith: t && (null == t.nodeType ? t.widget : t), insertLeft: t && t.insertLeft, clearWhenEmpty: !1, shared: t && t.shared, handleMouseEvents: t && t.handleMouseEvents }; return Co(this, e = at(this, e), e, r, "bookmark") }, findMarksAt: function(e) { var t = [],
				r = Ke(this, (e = at(this, e)).line).markedSpans; if(r)
				for(var n = 0; n < r.length; ++n) { var i = r[n];
					(null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker) }
			return t }, findMarks: function(e, t, r) { e = at(this, e), t = at(this, t); var n = [],
				i = e.line; return this.iter(e.line, t.line + 1, function(o) { var l = o.markedSpans; if(l)
					for(var a = 0; a < l.length; a++) { var s = l[a];
						null != s.to && i == e.line && e.ch >= s.to || null == s.from && i != e.line || null != s.from && i == t.line && s.from >= t.ch || r && !r(s.marker) || n.push(s.marker.parent || s.marker) }++i }), n }, getAllMarks: function() { var e = []; return this.iter(function(t) { var r = t.markedSpans; if(r)
					for(var n = 0; n < r.length; ++n) null != r[n].from && e.push(r[n].marker) }), e }, posFromIndex: function(e) { var t, r = this.first,
				n = this.lineSeparator().length; return this.iter(function(i) { var o = i.text.length + n; if(o > e) return t = e, !0;
				e -= o, ++r }), at(this, et(r, t)) }, indexFromPos: function(e) { var t = (e = at(this, e)).ch; if(e.line < this.first || e.ch < 0) return 0; var r = this.lineSeparator().length; return this.iter(this.first, e.line, function(e) { t += e.text.length + r }), t }, copy: function(e) { var t = new To($e(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction); return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t }, linkedDoc: function(e) { e || (e = {}); var t = this.first,
				r = this.first + this.size;
			null != e.from && e.from > t && (t = e.from), null != e.to && e.to < r && (r = e.to); var n = new To($e(this, t, r), e.mode || this.modeOption, t, this.lineSep, this.direction); return e.sharedHist && (n.history = this.history), (this.linked || (this.linked = [])).push({ doc: n, sharedHist: e.sharedHist }), n.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }],
				function(e, t) { for(var r = 0; r < t.length; r++) { var n = t[r],
							i = n.find(),
							o = e.clipPos(i.from),
							l = e.clipPos(i.to); if(tt(o, l)) { var a = Co(e, o, l, n.primary, n.primary.type);
							n.markers.push(a), a.parent = n } } }(n, So(this)), n }, unlinkDoc: function(e) { if(e instanceof kl && (e = e.doc), this.linked)
				for(var t = 0; t < this.linked.length; ++t) { if(this.linked[t].doc == e) { this.linked.splice(t, 1), e.unlinkDoc(this), Lo(So(this)); break } }
			if(e.history == this.history) { var r = [e.id];
				Oi(e, function(e) { return r.push(e.id) }, !0), e.history = new Ei(null), e.history.done = ji(this.history.done, r), e.history.undone = ji(this.history.undone, r) } }, iterLinkedDocs: function(e) { Oi(this, e) }, getMode: function() { return this.mode }, getEditor: function() { return this.cm }, splitLines: function(e) { return this.lineSep ? e.split(this.lineSep) : We(e) }, lineSeparator: function() { return this.lineSep || "\n" }, setDirection: Jn(function(e) { var t;
			("rtl" != e && (e = "ltr"), e != this.direction) && (this.direction = e, this.iter(function(e) { return e.order = null }), this.cm && Yn(t = this.cm, function() { Wi(t), un(t) })) }) }), To.prototype.eachLine = To.prototype.iter; var No = 0;

	function Ao(e) { var t = this; if(Oo(t), !me(t, e) && !wr(t.display, e)) { xe(e), l && (No = +new Date); var r = an(t, e, !0),
				n = e.dataTransfer.files; if(r && !t.isReadOnly())
				if(n && n.length && window.FileReader && window.File)
					for(var i = n.length, o = Array(i), a = 0, s = function() {++a == i && Zn(t, function() { var e = { from: r = at(t.doc, r), to: r, text: t.doc.splitLines(o.filter(function(e) { return null != e }).join(t.doc.lineSeparator())), origin: "paste" };
								oo(t.doc, e), $i(t.doc, wi(at(t.doc, r), at(t.doc, Ci(e)))) })() }, u = function(e, r) { if(t.options.allowDropFileTypes && -1 == _(t.options.allowDropFileTypes, e.type)) s();
							else { var n = new FileReader;
								n.onerror = function() { return s() }, n.onload = function() { var e = n.result; /[\x00-\x08\x0e-\x1f]{2}/.test(e) ? s() : (o[r] = e, s()) }, n.readAsText(e) } }, c = 0; c < n.length; c++) u(n[c], c);
				else { if(t.state.draggingText && t.doc.sel.contains(r) > -1) return t.state.draggingText(e), void setTimeout(function() { return t.display.input.focus() }, 20); try { var f = e.dataTransfer.getData("Text"); if(f) { var d; if(t.state.draggingText && !t.state.draggingText.copy && (d = t.listSelections()), Yi(t.doc, wi(r, r)), d)
								for(var h = 0; h < d.length; ++h) co(t.doc, "", d[h].anchor, d[h].head, "drag");
							t.replaceSelection(f, "around", "paste"), t.display.input.focus() } } catch (e) {} } } }

	function Oo(e) { e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null) }

	function Do(e) { if(document.getElementsByClassName) { for(var t = document.getElementsByClassName("CodeMirror"), r = [], n = 0; n < t.length; n++) { var i = t[n].CodeMirror;
				i && r.push(i) } r.length && r[0].operation(function() { for(var t = 0; t < r.length; t++) e(r[t]) }) } } var Wo = !1;

	function Eo() { var e;
		Wo || (de(window, "resize", function() { null == e && (e = setTimeout(function() { e = null, Do(Ho) }, 100)) }), de(window, "blur", function() { return Do(kn) }), Wo = !0) }

	function Ho(e) { var t = e.display;
		t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize() } for(var Fo = { 3: "Pause", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert", 46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod", 106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 145: "ScrollLock", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'", 224: "Mod", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete", 63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert" }, Po = 0; Po < 10; Po++) Fo[Po + 48] = Fo[Po + 96] = String(Po); for(var zo = 65; zo <= 90; zo++) Fo[zo] = String.fromCharCode(zo); for(var Io = 1; Io <= 12; Io++) Fo[Io + 111] = Fo[Io + 63235] = "F" + Io; var Ro = {};

	function _o(e) { var t, r, n, i, o = e.split(/-(?!$)/);
		e = o[o.length - 1]; for(var l = 0; l < o.length - 1; l++) { var a = o[l]; if(/^(cmd|meta|m)$/i.test(a)) i = !0;
			else if(/^a(lt)?$/i.test(a)) t = !0;
			else if(/^(c|ctrl|control)$/i.test(a)) r = !0;
			else { if(!/^s(hift)?$/i.test(a)) throw new Error("Unrecognized modifier name: " + a);
				n = !0 } } return t && (e = "Alt-" + e), r && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), n && (e = "Shift-" + e), e }

	function Bo(e) { var t = {}; for(var r in e)
			if(e.hasOwnProperty(r)) { var n = e[r]; if(/^(name|fallthrough|(de|at)tach)$/.test(r)) continue; if("..." == n) { delete e[r]; continue } for(var i = Y(r.split(" "), _o), o = 0; o < i.length; o++) { var l = void 0,
						a = void 0;
					o == i.length - 1 ? (a = i.join(" "), l = n) : (a = i.slice(0, o + 1).join(" "), l = "..."); var s = t[a]; if(s) { if(s != l) throw new Error("Inconsistent bindings for " + a) } else t[a] = l } delete e[r] } for(var u in t) e[u] = t[u]; return e }

	function jo(e, t, r, n) { var i = (t = Ko(t)).call ? t.call(e, n) : t[e]; if(!1 === i) return "nothing"; if("..." === i) return "multi"; if(null != i && r(i)) return "handled"; if(t.fallthrough) { if("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return jo(e, t.fallthrough, r, n); for(var o = 0; o < t.fallthrough.length; o++) { var l = jo(e, t.fallthrough[o], r, n); if(l) return l } } }

	function Vo(e) { var t = "string" == typeof e ? e : Fo[e.keyCode]; return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t }

	function Go(e, t, r) { var n = e; return t.altKey && "Alt" != n && (e = "Alt-" + e), (C ? t.metaKey : t.ctrlKey) && "Ctrl" != n && (e = "Ctrl-" + e), (C ? t.ctrlKey : t.metaKey) && "Mod" != n && (e = "Cmd-" + e), !r && t.shiftKey && "Shift" != n && (e = "Shift-" + e), e }

	function Uo(e, t) { if(f && 34 == e.keyCode && e.char) return !1; var r = Fo[e.keyCode]; return null != r && !e.altGraphKey && (3 == e.keyCode && e.code && (r = e.code), Go(r, e, t)) }

	function Ko(e) { return "string" == typeof e ? Ro[e] : e }

	function qo(e, t) { for(var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) { for(var o = t(r[i]); n.length && tt(o.from, X(n).to) <= 0;) { var l = n.pop(); if(tt(l.from, o.from) < 0) { o.from = l.from; break } } n.push(o) } Yn(e, function() { for(var t = n.length - 1; t >= 0; t--) co(e.doc, "", n[t].from, n[t].to, "+delete");
			An(e) }) }

	function $o(e, t, r) { var n = oe(e.text, t + r, r); return n < 0 || n > e.text.length ? null : n }

	function Xo(e, t, r) { var n = $o(e, t.ch, r); return null == n ? null : new et(t.line, n, r < 0 ? "after" : "before") }

	function Yo(e, t, r, n, i) { if(e) { "rtl" == t.doc.direction && (i = -i); var o = ce(r, t.doc.direction); if(o) { var l, a = i < 0 ? X(o) : o[0],
					s = i < 0 == (1 == a.level) ? "after" : "before"; if(a.level > 0 || "rtl" == t.doc.direction) { var u = Dr(t, r);
					l = i < 0 ? r.text.length - 1 : 0; var c = Wr(t, u, l).top;
					l = le(function(e) { return Wr(t, u, e).top == c }, i < 0 == (1 == a.level) ? a.from : a.to - 1, l), "before" == s && (l = $o(r, l, 1)) } else l = i < 0 ? a.to : a.from; return new et(n, l, s) } } return new et(n, i < 0 ? r.text.length : 0, i < 0 ? "before" : "after") } Ro.basic = { Left: "goCharLeft", Right: "goCharRight", Up: "goLineUp", Down: "goLineDown", End: "goLineEnd", Home: "goLineStartSmart", PageUp: "goPageUp", PageDown: "goPageDown", Delete: "delCharAfter", Backspace: "delCharBefore", "Shift-Backspace": "delCharBefore", Tab: "defaultTab", "Shift-Tab": "indentAuto", Enter: "newlineAndIndent", Insert: "toggleOverwrite", Esc: "singleSelection" }, Ro.pcDefault = { "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo", "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown", "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd", "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find", "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll", "Ctrl-[": "indentLess", "Ctrl-]": "indentMore", "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection", fallthrough: "basic" }, Ro.emacsy = { "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd", "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars", "Ctrl-O": "openLine" }, Ro.macDefault = { "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo", "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft", "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore", "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find", "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll", "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight", "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd", fallthrough: ["basic", "emacsy"] }, Ro.default = y ? Ro.macDefault : Ro.pcDefault; var Zo = { selectAll: no, singleSelection: function(e) { return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), V) }, killLine: function(e) { return qo(e, function(t) { if(t.empty()) { var r = Ke(e.doc, t.head.line).text.length; return t.head.ch == r && t.head.line < e.lastLine() ? { from: t.head, to: et(t.head.line + 1, 0) } : { from: t.head, to: et(t.head.line, r) } } return { from: t.from(), to: t.to() } }) }, deleteLine: function(e) { return qo(e, function(t) { return { from: et(t.from().line, 0), to: at(e.doc, et(t.to().line + 1, 0)) } }) }, delLineLeft: function(e) { return qo(e, function(e) { return { from: et(e.from().line, 0), to: e.from() } }) }, delWrappedLineLeft: function(e) { return qo(e, function(t) { var r = e.charCoords(t.head, "div").top + 5; return { from: e.coordsChar({ left: 0, top: r }, "div"), to: t.from() } }) }, delWrappedLineRight: function(e) { return qo(e, function(t) { var r = e.charCoords(t.head, "div").top + 5,
					n = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: r }, "div"); return { from: t.from(), to: n } }) }, undo: function(e) { return e.undo() }, redo: function(e) { return e.redo() }, undoSelection: function(e) { return e.undoSelection() }, redoSelection: function(e) { return e.redoSelection() }, goDocStart: function(e) { return e.extendSelection(et(e.firstLine(), 0)) }, goDocEnd: function(e) { return e.extendSelection(et(e.lastLine())) }, goLineStart: function(e) { return e.extendSelectionsBy(function(t) { return Qo(e, t.head.line) }, { origin: "+move", bias: 1 }) }, goLineStartSmart: function(e) { return e.extendSelectionsBy(function(t) { return Jo(e, t.head) }, { origin: "+move", bias: 1 }) }, goLineEnd: function(e) { return e.extendSelectionsBy(function(t) { return function(e, t) { var r = Ke(e.doc, t),
						n = function(e) { for(var t; t = Ft(e);) e = t.find(1, !0).line; return e }(r);
					n != r && (t = Ye(n)); return Yo(!0, e, r, t, -1) }(e, t.head.line) }, { origin: "+move", bias: -1 }) }, goLineRight: function(e) { return e.extendSelectionsBy(function(t) { var r = e.cursorCoords(t.head, "div").top + 5; return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: r }, "div") }, U) }, goLineLeft: function(e) { return e.extendSelectionsBy(function(t) { var r = e.cursorCoords(t.head, "div").top + 5; return e.coordsChar({ left: 0, top: r }, "div") }, U) }, goLineLeftSmart: function(e) { return e.extendSelectionsBy(function(t) { var r = e.cursorCoords(t.head, "div").top + 5,
					n = e.coordsChar({ left: 0, top: r }, "div"); return n.ch < e.getLine(n.line).search(/\S/) ? Jo(e, t.head) : n }, U) }, goLineUp: function(e) { return e.moveV(-1, "line") }, goLineDown: function(e) { return e.moveV(1, "line") }, goPageUp: function(e) { return e.moveV(-1, "page") }, goPageDown: function(e) { return e.moveV(1, "page") }, goCharLeft: function(e) { return e.moveH(-1, "char") }, goCharRight: function(e) { return e.moveH(1, "char") }, goColumnLeft: function(e) { return e.moveH(-1, "column") }, goColumnRight: function(e) { return e.moveH(1, "column") }, goWordLeft: function(e) { return e.moveH(-1, "word") }, goGroupRight: function(e) { return e.moveH(1, "group") }, goGroupLeft: function(e) { return e.moveH(-1, "group") }, goWordRight: function(e) { return e.moveH(1, "word") }, delCharBefore: function(e) { return e.deleteH(-1, "codepoint") }, delCharAfter: function(e) { return e.deleteH(1, "char") }, delWordBefore: function(e) { return e.deleteH(-1, "word") }, delWordAfter: function(e) { return e.deleteH(1, "word") }, delGroupBefore: function(e) { return e.deleteH(-1, "group") }, delGroupAfter: function(e) { return e.deleteH(1, "group") }, indentAuto: function(e) { return e.indentSelection("smart") }, indentMore: function(e) { return e.indentSelection("add") }, indentLess: function(e) { return e.indentSelection("subtract") }, insertTab: function(e) { return e.replaceSelection("\t") }, insertSoftTab: function(e) { for(var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0; i < r.length; i++) { var o = r[i].from(),
					l = I(e.getLine(o.line), o.ch, n);
				t.push($(n - l % n)) } e.replaceSelections(t) }, defaultTab: function(e) { e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab") }, transposeChars: function(e) { return Yn(e, function() { for(var t = e.listSelections(), r = [], n = 0; n < t.length; n++)
					if(t[n].empty()) { var i = t[n].head,
							o = Ke(e.doc, i.line).text; if(o)
							if(i.ch == o.length && (i = new et(i.line, i.ch - 1)), i.ch > 0) i = new et(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), et(i.line, i.ch - 2), i, "+transpose");
							else if(i.line > e.doc.first) { var l = Ke(e.doc, i.line - 1).text;
							l && (i = new et(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + l.charAt(l.length - 1), et(i.line - 1, l.length - 1), i, "+transpose")) } r.push(new bi(i, i)) } e.setSelections(r) }) }, newlineAndIndent: function(e) { return Yn(e, function() { for(var t = e.listSelections(), r = t.length - 1; r >= 0; r--) e.replaceRange(e.doc.lineSeparator(), t[r].anchor, t[r].head, "+input");
				t = e.listSelections(); for(var n = 0; n < t.length; n++) e.indentLine(t[n].from().line, null, !0);
				An(e) }) }, openLine: function(e) { return e.replaceSelection("\n", "start") }, toggleOverwrite: function(e) { return e.toggleOverwrite() } };

	function Qo(e, t) { var r = Ke(e.doc, t),
			n = It(r); return n != r && (t = Ye(n)), Yo(!0, e, n, t, 1) }

	function Jo(e, t) { var r = Qo(e, t.line),
			n = Ke(e.doc, r.line),
			i = ce(n, e.doc.direction); if(!i || 0 == i[0].level) { var o = Math.max(r.ch, n.text.search(/\S/)),
				l = t.line == r.line && t.ch <= o && t.ch; return et(r.line, l ? 0 : o, r.sticky) } return r }

	function el(e, t, r) { if("string" == typeof t && !(t = Zo[t])) return !1;
		e.display.input.ensurePolled(); var n = e.display.shift,
			i = !1; try { e.isReadOnly() && (e.state.suppressEdits = !0), r && (e.display.shift = !1), i = t(e) != j } finally { e.display.shift = n, e.state.suppressEdits = !1 } return i } var tl = new R;

	function rl(e, t, r, n) { var i = e.state.keySeq; if(i) { if(Vo(t)) return "handled"; if(/\'$/.test(t) ? e.state.keySeq = null : tl.set(50, function() { e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset()) }), nl(e, i + " " + t, r, n)) return !0 } return nl(e, t, r, n) }

	function nl(e, t, r, n) { var i = function(e, t, r) { for(var n = 0; n < e.state.keyMaps.length; n++) { var i = jo(t, e.state.keyMaps[n], r, e); if(i) return i } return e.options.extraKeys && jo(t, e.options.extraKeys, r, e) || jo(t, e.options.keyMap, r, e) }(e, t, n); return "multi" == i && (e.state.keySeq = t), "handled" == i && ar(e, "keyHandled", e, t, r), "handled" != i && "multi" != i || (xe(r), bn(e)), !!i }

	function il(e, t) { var r = Uo(t, !0); return !!r && (t.shiftKey && !e.state.keySeq ? rl(e, "Shift-" + r, t, function(t) { return el(e, t, !0) }) || rl(e, r, t, function(t) { if("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return el(e, t) }) : rl(e, r, t, function(t) { return el(e, t) })) } var ol = null;

	function ll(e) { var t = this; if(!(e.target && e.target != t.display.input.getField() || (t.curOp.focus = W(), me(t, e)))) { l && a < 11 && 27 == e.keyCode && (e.returnValue = !1); var n = e.keyCode;
			t.display.shift = 16 == n || e.shiftKey; var i = il(t, e);
			f && (ol = i ? n : null, !i && 88 == n && !He && (y ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), r && !y && !i && 46 == n && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), 18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || function(e) { var t = e.display.lineDiv;

				function r(e) { 18 != e.keyCode && e.altKey || (M(t, "CodeMirror-crosshair"), pe(document, "keyup", r), pe(document, "mouseover", r)) } E(t, "CodeMirror-crosshair"), de(document, "keyup", r), de(document, "mouseover", r) }(t) } }

	function al(e) { 16 == e.keyCode && (this.doc.sel.shift = !1), me(this, e) }

	function sl(e) { var t = this; if(!(e.target && e.target != t.display.input.getField() || wr(t.display, e) || me(t, e) || e.ctrlKey && !e.altKey || y && e.metaKey)) { var r = e.keyCode,
				n = e.charCode; if(f && r == ol) return ol = null, void xe(e); if(!f || e.which && !(e.which < 10) || !il(t, e)) { var i = String.fromCharCode(null == n ? r : n); "\b" != i && (function(e, t, r) { return rl(e, "'" + r + "'", t, function(t) { return el(e, t, !0) }) }(t, e, i) || t.display.input.onKeyPress(e)) } } } var ul, cl, fl = function(e, t, r) { this.time = e, this.pos = t, this.button = r };

	function dl(e) { var t = this,
			r = t.display; if(!(me(t, e) || r.activeTouch && r.input.supportsTouch()))
			if(r.input.ensurePolled(), r.shift = e.shiftKey, wr(r, e)) s || (r.scroller.draggable = !1, setTimeout(function() { return r.scroller.draggable = !0 }, 100));
			else if(!gl(t, e)) { var n = an(t, e),
				i = Le(e),
				o = n ? function(e, t) { var r = +new Date; return cl && cl.compare(r, e, t) ? (ul = cl = null, "triple") : ul && ul.compare(r, e, t) ? (cl = new fl(r, e, t), ul = null, "double") : (ul = new fl(r, e, t), cl = null, "single") }(n, i) : "single";
			window.focus(), 1 == i && t.state.selectingText && t.state.selectingText(e), n && function(e, t, r, n, i) { var o = "Click"; "double" == n ? o = "Double" + o : "triple" == n && (o = "Triple" + o); return rl(e, Go(o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o, i), i, function(t) { if("string" == typeof t && (t = Zo[t]), !t) return !1; var n = !1; try { e.isReadOnly() && (e.state.suppressEdits = !0), n = t(e, r) != j } finally { e.state.suppressEdits = !1 } return n }) }(t, i, n, o, e) || (1 == i ? n ? function(e, t, r, n) { l ? setTimeout(P(xn, e), 0) : e.curOp.focus = W(); var i, o = function(e, t, r) { var n = e.getOption("configureMouse"),
							i = n ? n(e, t, r) : {}; if(null == i.unit) { var o = b ? r.shiftKey && r.metaKey : r.altKey;
							i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line" }(null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || r.shiftKey);
						null == i.addNew && (i.addNew = y ? r.metaKey : r.ctrlKey);
						null == i.moveOnDrag && (i.moveOnDrag = !(y ? r.altKey : r.ctrlKey)); return i }(e, r, n),
					u = e.doc.sel;
				e.options.dragDrop && Ne && !e.isReadOnly() && "single" == r && (i = u.contains(t)) > -1 && (tt((i = u.ranges[i]).from(), t) < 0 || t.xRel > 0) && (tt(i.to(), t) > 0 || t.xRel < 0) ? function(e, t, r, n) { var i = e.display,
						o = !1,
						u = Zn(e, function(t) { s && (i.scroller.draggable = !1), e.state.draggingText = !1, e.state.delayingBlurEvent && (e.hasFocus() ? e.state.delayingBlurEvent = !1 : wn(e)), pe(i.wrapper.ownerDocument, "mouseup", u), pe(i.wrapper.ownerDocument, "mousemove", c), pe(i.scroller, "dragstart", f), pe(i.scroller, "drop", u), o || (xe(t), n.addNew || Gi(e.doc, r, null, null, n.extend), s && !d || l && 9 == a ? setTimeout(function() { i.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), i.input.focus() }, 20) : i.input.focus()) }),
						c = function(e) { o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10 },
						f = function() { return o = !0 };
					s && (i.scroller.draggable = !0);
					e.state.draggingText = u, u.copy = !n.moveOnDrag, de(i.wrapper.ownerDocument, "mouseup", u), de(i.wrapper.ownerDocument, "mousemove", c), de(i.scroller, "dragstart", f), de(i.scroller, "drop", u), e.state.delayingBlurEvent = !0, setTimeout(function() { return i.input.focus() }, 20), i.scroller.dragDrop && i.scroller.dragDrop() }(e, n, t, o) : function(e, t, r, n) { l && wn(e); var i = e.display,
						o = e.doc;
					xe(t); var a, s, u = o.sel,
						c = u.ranges;
					n.addNew && !n.extend ? (s = o.sel.contains(r), a = s > -1 ? c[s] : new bi(r, r)) : (a = o.sel.primary(), s = o.sel.primIndex); if("rectangle" == n.unit) n.addNew || (a = new bi(r, r)), r = an(e, t, !0, !0), s = -1;
					else { var f = hl(e, r, n.unit);
						a = n.extend ? Vi(a, f.anchor, f.head, n.extend) : f } n.addNew ? -1 == s ? (s = c.length, Xi(o, xi(e, c.concat([a]), s), { scroll: !1, origin: "*mouse" })) : c.length > 1 && c[s].empty() && "char" == n.unit && !n.extend ? (Xi(o, xi(e, c.slice(0, s).concat(c.slice(s + 1)), 0), { scroll: !1, origin: "*mouse" }), u = o.sel) : Ki(o, s, a, G) : (s = 0, Xi(o, new yi([a], 0), G), u = o.sel); var d = r;

					function h(t) { if(0 != tt(d, t))
							if(d = t, "rectangle" == n.unit) { for(var i = [], l = e.options.tabSize, c = I(Ke(o, r.line).text, r.ch, l), f = I(Ke(o, t.line).text, t.ch, l), h = Math.min(c, f), p = Math.max(c, f), g = Math.min(r.line, t.line), m = Math.min(e.lastLine(), Math.max(r.line, t.line)); g <= m; g++) { var v = Ke(o, g).text,
										y = K(v, h, l);
									h == p ? i.push(new bi(et(g, y), et(g, y))) : v.length > y && i.push(new bi(et(g, y), et(g, K(v, p, l)))) } i.length || i.push(new bi(r, r)), Xi(o, xi(e, u.ranges.slice(0, s).concat(i), s), { origin: "*mouse", scroll: !1 }), e.scrollIntoView(t) } else { var b, x = a,
									w = hl(e, t, n.unit),
									C = x.anchor;
								tt(w.anchor, C) > 0 ? (b = w.head, C = ot(x.from(), w.anchor)) : (b = w.anchor, C = it(x.to(), w.head)); var k = u.ranges.slice(0);
								k[s] = function(e, t) { var r = t.anchor,
										n = t.head,
										i = Ke(e.doc, r.line); if(0 == tt(r, n) && r.sticky == n.sticky) return t; var o = ce(i); if(!o) return t; var l = se(o, r.ch, r.sticky),
										a = o[l]; if(a.from != r.ch && a.to != r.ch) return t; var s, u = l + (a.from == r.ch == (1 != a.level) ? 0 : 1); if(0 == u || u == o.length) return t; if(n.line != r.line) s = (n.line - r.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0;
									else { var c = se(o, n.ch, n.sticky),
											f = c - l || (n.ch - r.ch) * (1 == a.level ? -1 : 1);
										s = c == u - 1 || c == u ? f < 0 : f > 0 } var d = o[u + (s ? -1 : 0)],
										h = s == (1 == d.level),
										p = h ? d.from : d.to,
										g = h ? "after" : "before"; return r.ch == p && r.sticky == g ? t : new bi(new et(r.line, p, g), n) }(e, new bi(at(o, C), b)), Xi(o, xi(e, k, s), G) } } var p = i.wrapper.getBoundingClientRect(),
						g = 0;

					function m(t) { e.state.selectingText = !1, g = 1 / 0, t && (xe(t), i.input.focus()), pe(i.wrapper.ownerDocument, "mousemove", v), pe(i.wrapper.ownerDocument, "mouseup", y), o.history.lastSelOrigin = null } var v = Zn(e, function(t) { 0 !== t.buttons && Le(t) ? function t(r) { var l = ++g; var a = an(e, r, !0, "rectangle" == n.unit); if(!a) return; if(0 != tt(a, d)) { e.curOp.focus = W(), h(a); var s = Mn(i, o);
									(a.line >= s.to || a.line < s.from) && setTimeout(Zn(e, function() { g == l && t(r) }), 150) } else { var u = r.clientY < p.top ? -20 : r.clientY > p.bottom ? 20 : 0;
									u && setTimeout(Zn(e, function() { g == l && (i.scroller.scrollTop += u, t(r)) }), 50) } }(t) : m(t) }),
						y = Zn(e, m);
					e.state.selectingText = y, de(i.wrapper.ownerDocument, "mousemove", v), de(i.wrapper.ownerDocument, "mouseup", y) }(e, n, t, o) }(t, n, o, e) : Se(e) == r.scroller && xe(e) : 2 == i ? (n && Gi(t.doc, n), setTimeout(function() { return r.input.focus() }, 20)) : 3 == i && (k ? t.display.input.onContextMenu(e) : wn(t))) } }

	function hl(e, t, r) { if("char" == r) return new bi(t, t); if("word" == r) return e.findWordAt(t); if("line" == r) return new bi(et(t.line, 0), at(e.doc, et(t.line + 1, 0))); var n = r(e, t); return new bi(n.from, n.to) }

	function pl(e, t, r, n) { var i, o; if(t.touches) i = t.touches[0].clientX, o = t.touches[0].clientY;
		else try { i = t.clientX, o = t.clientY } catch (e) { return !1 }
		if(i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
		n && xe(t); var l = e.display,
			a = l.lineDiv.getBoundingClientRect(); if(o > a.bottom || !ye(e, r)) return Ce(t);
		o -= a.top - l.viewOffset; for(var s = 0; s < e.display.gutterSpecs.length; ++s) { var u = l.gutters.childNodes[s]; if(u && u.getBoundingClientRect().right >= i) return ge(e, r, e, Ze(e.doc, o), e.display.gutterSpecs[s].className, t), Ce(t) } }

	function gl(e, t) { return pl(e, t, "gutterClick", !0) }

	function ml(e, t) { wr(e.display, t) || function(e, t) { if(!ye(e, "gutterContextMenu")) return !1; return pl(e, t, "gutterContextMenu", !1) }(e, t) || me(e, t, "contextmenu") || k || e.display.input.onContextMenu(t) }

	function vl(e) { e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), Rr(e) } fl.prototype.compare = function(e, t, r) { return this.time + 400 > e && 0 == tt(t, this.pos) && r == this.button }; var yl = { toString: function() { return "CodeMirror.Init" } },
		bl = {},
		xl = {};

	function wl(e, t, r) { if(!t != !(r && r != yl)) { var n = e.display.dragFunctions,
				i = t ? de : pe;
			i(e.display.scroller, "dragstart", n.start), i(e.display.scroller, "dragenter", n.enter), i(e.display.scroller, "dragover", n.over), i(e.display.scroller, "dragleave", n.leave), i(e.display.scroller, "drop", n.drop) } }

	function Cl(e) { e.options.lineWrapping ? (E(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (M(e.display.wrapper, "CodeMirror-wrap"), Ut(e)), ln(e), un(e), Rr(e), setTimeout(function() { return Rn(e) }, 100) }

	function kl(e, t) { var n = this; if(!(this instanceof kl)) return new kl(e, t);
		this.options = t = t ? z(t) : {}, z(bl, t, !1); var i = t.value; "string" == typeof i ? i = new To(i, t.mode, null, t.lineSeparator, t.direction) : t.mode && (i.modeOption = t.mode), this.doc = i; var o = new kl.inputStyles[t.inputStyle](this),
			u = this.display = new function(e, t, n, i) { var o = this;
				this.input = n, o.scrollbarFiller = A("div", null, "CodeMirror-scrollbar-filler"), o.scrollbarFiller.setAttribute("cm-not-content", "true"), o.gutterFiller = A("div", null, "CodeMirror-gutter-filler"), o.gutterFiller.setAttribute("cm-not-content", "true"), o.lineDiv = O("div", null, "CodeMirror-code"), o.selectionDiv = A("div", null, null, "position: relative; z-index: 1"), o.cursorDiv = A("div", null, "CodeMirror-cursors"), o.measure = A("div", null, "CodeMirror-measure"), o.lineMeasure = A("div", null, "CodeMirror-measure"), o.lineSpace = O("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none"); var u = O("div", [o.lineSpace], "CodeMirror-lines");
				o.mover = A("div", [u], null, "position: relative"), o.sizer = A("div", [o.mover], "CodeMirror-sizer"), o.sizerWidth = null, o.heightForcer = A("div", null, null, "position: absolute; height: " + B + "px; width: 1px;"), o.gutters = A("div", null, "CodeMirror-gutters"), o.lineGutter = null, o.scroller = A("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"), o.scroller.setAttribute("tabIndex", "-1"), o.wrapper = A("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"), o.wrapper.setAttribute("translate", "no"), l && a < 8 && (o.gutters.style.zIndex = -1, o.scroller.style.paddingRight = 0), s || r && v || (o.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)), o.viewFrom = o.viewTo = t.first, o.reportedViewFrom = o.reportedViewTo = t.first, o.view = [], o.renderedView = null, o.externalMeasured = null, o.viewOffset = 0, o.lastWrapHeight = o.lastWrapWidth = 0, o.updateLineNumbers = null, o.nativeBarWidth = o.barHeight = o.barWidth = 0, o.scrollbarsClipped = !1, o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null, o.alignWidgets = !1, o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null, o.maxLine = null, o.maxLineLength = 0, o.maxLineChanged = !1, o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null, o.shift = !1, o.selForContextMenu = null, o.activeTouch = null, o.gutterSpecs = ci(i.gutters, i.lineNumbers), fi(o), n.init(o) }(e, i, o, t); for(var c in u.wrapper.CodeMirror = this, vl(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), jn(this), this.state = { keyMaps: [], overlays: [], modeGen: 0, overwrite: !1, delayingBlurEvent: !1, focused: !1, suppressEdits: !1, pasteIncoming: -1, cutIncoming: -1, selectingText: !1, draggingText: !1, highlight: new R, keySeq: null, specialChars: null }, t.autofocus && !v && u.input.focus(), l && a < 11 && setTimeout(function() { return n.display.input.reset(!0) }, 20),
				function(e) { var t = e.display;
					de(t.scroller, "mousedown", Zn(e, dl)), de(t.scroller, "dblclick", l && a < 11 ? Zn(e, function(t) { if(!me(e, t)) { var r = an(e, t); if(r && !gl(e, t) && !wr(e.display, t)) { xe(t); var n = e.findWordAt(r);
								Gi(e.doc, n.anchor, n.head) } } }) : function(t) { return me(e, t) || xe(t) });
					de(t.scroller, "contextmenu", function(t) { return ml(e, t) }), de(t.input.getField(), "contextmenu", function(r) { t.scroller.contains(r.target) || ml(e, r) }); var r, n = { end: 0 };

					function i() { t.activeTouch && (r = setTimeout(function() { return t.activeTouch = null }, 1e3), (n = t.activeTouch).end = +new Date) }

					function o(e, t) { if(null == t.left) return !0; var r = t.left - e.left,
							n = t.top - e.top; return r * r + n * n > 400 } de(t.scroller, "touchstart", function(i) { if(!me(e, i) && ! function(e) { if(1 != e.touches.length) return !1; var t = e.touches[0]; return t.radiusX <= 1 && t.radiusY <= 1 }(i) && !gl(e, i)) { t.input.ensurePolled(), clearTimeout(r); var o = +new Date;
							t.activeTouch = { start: o, moved: !1, prev: o - n.end <= 300 ? n : null }, 1 == i.touches.length && (t.activeTouch.left = i.touches[0].pageX, t.activeTouch.top = i.touches[0].pageY) } }), de(t.scroller, "touchmove", function() { t.activeTouch && (t.activeTouch.moved = !0) }), de(t.scroller, "touchend", function(r) { var n = t.activeTouch; if(n && !wr(t, r) && null != n.left && !n.moved && new Date - n.start < 300) { var l, a = e.coordsChar(t.activeTouch, "page");
							l = !n.prev || o(n, n.prev) ? new bi(a, a) : !n.prev.prev || o(n, n.prev.prev) ? e.findWordAt(a) : new bi(et(a.line, 0), at(e.doc, et(a.line + 1, 0))), e.setSelection(l.anchor, l.head), e.focus(), xe(r) } i() }), de(t.scroller, "touchcancel", i), de(t.scroller, "scroll", function() { t.scroller.clientHeight && (En(e, t.scroller.scrollTop), Fn(e, t.scroller.scrollLeft, !0), ge(e, "scroll", e)) }), de(t.scroller, "mousewheel", function(t) { return vi(e, t) }), de(t.scroller, "DOMMouseScroll", function(t) { return vi(e, t) }), de(t.wrapper, "scroll", function() { return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0 }), t.dragFunctions = { enter: function(t) { me(e, t) || ke(t) }, over: function(t) { me(e, t) || (! function(e, t) { var r = an(e, t); if(r) { var n = document.createDocumentFragment();
									mn(e, r, n), e.display.dragCursor || (e.display.dragCursor = A("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), N(e.display.dragCursor, n) } }(e, t), ke(t)) }, start: function(t) { return function(e, t) { if(l && (!e.state.draggingText || +new Date - No < 100)) ke(t);
								else if(!me(e, t) && !wr(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !d)) { var r = A("img", null, null, "position: fixed; left: 0; top: 0;");
									r.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", f && (r.width = r.height = 1, e.display.wrapper.appendChild(r), r._top = r.offsetTop), t.dataTransfer.setDragImage(r, 0, 0), f && r.parentNode.removeChild(r) } }(e, t) }, drop: Zn(e, Ao), leave: function(t) { me(e, t) || Oo(e) } }; var s = t.input.getField();
					de(s, "keyup", function(t) { return al.call(e, t) }), de(s, "keydown", Zn(e, ll)), de(s, "keypress", Zn(e, sl)), de(s, "focus", function(t) { return Cn(e, t) }), de(s, "blur", function(t) { return kn(e, t) }) }(this), Eo(), Gn(this), this.curOp.forceUpdate = !0, Di(this, i), t.autofocus && !v || this.hasFocus() ? setTimeout(function() { n.hasFocus() && !n.state.focused && Cn(n) }, 20) : kn(this), xl) xl.hasOwnProperty(c) && xl[c](this, t[c], yl);
		ui(this), t.finishInit && t.finishInit(this); for(var h = 0; h < Sl.length; ++h) Sl[h](this);
		Un(this), s && t.lineWrapping && "optimizelegibility" == getComputedStyle(u.lineDiv).textRendering && (u.lineDiv.style.textRendering = "auto") } kl.defaults = bl, kl.optionHandlers = xl; var Sl = [];

	function Ll(e, t, r, n) { var i, o = e.doc;
		null == r && (r = "add"), "smart" == r && (o.mode.indent ? i = ht(e, t).state : r = "prev"); var l = e.options.tabSize,
			a = Ke(o, t),
			s = I(a.text, null, l);
		a.stateAfter && (a.stateAfter = null); var u, c = a.text.match(/^\s*/)[0]; if(n || /\S/.test(a.text)) { if("smart" == r && ((u = o.mode.indent(i, a.text.slice(c.length), a.text)) == j || u > 150)) { if(!n) return;
				r = "prev" } } else u = 0, r = "not"; "prev" == r ? u = t > o.first ? I(Ke(o, t - 1).text, null, l) : 0 : "add" == r ? u = s + e.options.indentUnit : "subtract" == r ? u = s - e.options.indentUnit : "number" == typeof r && (u = s + r), u = Math.max(0, u); var f = "",
			d = 0; if(e.options.indentWithTabs)
			for(var h = Math.floor(u / l); h; --h) d += l, f += "\t"; if(d < u && (f += $(u - d)), f != c) return co(o, f, et(t, 0), et(t, c.length), "+input"), a.stateAfter = null, !0; for(var p = 0; p < o.sel.ranges.length; p++) { var g = o.sel.ranges[p]; if(g.head.line == t && g.head.ch < c.length) { var m = et(t, c.length);
				Ki(o, p, new bi(m, m)); break } } } kl.defineInitHook = function(e) { return Sl.push(e) }; var Ml = null;

	function Tl(e) { Ml = e }

	function Nl(e, t, r, n, i) { var o = e.doc;
		e.display.shift = !1, n || (n = o.sel); var l = +new Date - 200,
			a = "paste" == i || e.state.pasteIncoming > l,
			s = We(t),
			u = null; if(a && n.ranges.length > 1)
			if(Ml && Ml.text.join("\n") == t) { if(n.ranges.length % Ml.text.length == 0) { u = []; for(var c = 0; c < Ml.text.length; c++) u.push(o.splitLines(Ml.text[c])) } } else s.length == n.ranges.length && e.options.pasteLinesPerSelection && (u = Y(s, function(e) { return [e] })); for(var f = e.curOp.updateInput, d = n.ranges.length - 1; d >= 0; d--) { var h = n.ranges[d],
				p = h.from(),
				g = h.to();
			h.empty() && (r && r > 0 ? p = et(p.line, p.ch - r) : e.state.overwrite && !a ? g = et(g.line, Math.min(Ke(o, g.line).text.length, g.ch + X(s).length)) : a && Ml && Ml.lineWise && Ml.text.join("\n") == s.join("\n") && (p = g = et(p.line, 0))); var m = { from: p, to: g, text: u ? u[d % u.length] : s, origin: i || (a ? "paste" : e.state.cutIncoming > l ? "cut" : "+input") };
			oo(e.doc, m), ar(e, "inputRead", e, m) } t && !a && Ol(e, t), An(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = f), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1 }

	function Al(e, t) { var r = e.clipboardData && e.clipboardData.getData("Text"); if(r) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || Yn(t, function() { return Nl(t, r, 0, null, "paste") }), !0 }

	function Ol(e, t) { if(e.options.electricChars && e.options.smartIndent)
			for(var r = e.doc.sel, n = r.ranges.length - 1; n >= 0; n--) { var i = r.ranges[n]; if(!(i.head.ch > 100 || n && r.ranges[n - 1].head.line == i.head.line)) { var o = e.getModeAt(i.head),
						l = !1; if(o.electricChars) { for(var a = 0; a < o.electricChars.length; a++)
							if(t.indexOf(o.electricChars.charAt(a)) > -1) { l = Ll(e, i.head.line, "smart"); break } } else o.electricInput && o.electricInput.test(Ke(e.doc, i.head.line).text.slice(0, i.head.ch)) && (l = Ll(e, i.head.line, "smart"));
					l && ar(e, "electricInput", e, i.head.line) } } }

	function Dl(e) { for(var t = [], r = [], n = 0; n < e.doc.sel.ranges.length; n++) { var i = e.doc.sel.ranges[n].head.line,
				o = { anchor: et(i, 0), head: et(i + 1, 0) };
			r.push(o), t.push(e.getRange(o.anchor, o.head)) } return { text: t, ranges: r } }

	function Wl(e, t, r, n) { e.setAttribute("autocorrect", r ? "" : "off"), e.setAttribute("autocapitalize", n ? "" : "off"), e.setAttribute("spellcheck", !!t) }

	function El() { var e = A("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"),
			t = A("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;"); return s ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), g && (e.style.border = "1px solid black"), Wl(e), t }

	function Hl(e, t, r, n, i) { var o = t,
			l = r,
			a = Ke(e, t.line),
			s = i && "rtl" == e.direction ? -r : r;

		function u(o) { var l, u; if("codepoint" == n) { var c = a.text.charCodeAt(t.ch + (r > 0 ? 0 : -1)); if(isNaN(c)) l = null;
				else { var f = r > 0 ? c >= 55296 && c < 56320 : c >= 56320 && c < 57343;
					l = new et(t.line, Math.max(0, Math.min(a.text.length, t.ch + r * (f ? 2 : 1))), -r) } } else l = i ? function(e, t, r, n) { var i = ce(t, e.doc.direction); if(!i) return Xo(t, r, n);
				r.ch >= t.text.length ? (r.ch = t.text.length, r.sticky = "before") : r.ch <= 0 && (r.ch = 0, r.sticky = "after"); var o = se(i, r.ch, r.sticky),
					l = i[o]; if("ltr" == e.doc.direction && l.level % 2 == 0 && (n > 0 ? l.to > r.ch : l.from < r.ch)) return Xo(t, r, n); var a, s = function(e, r) { return $o(t, e instanceof et ? e.ch : e, r) },
					u = function(r) { return e.options.lineWrapping ? (a = a || Dr(e, t), Zr(e, t, a, r)) : { begin: 0, end: t.text.length } },
					c = u("before" == r.sticky ? s(r, -1) : r.ch); if("rtl" == e.doc.direction || 1 == l.level) { var f = 1 == l.level == n < 0,
						d = s(r, f ? 1 : -1); if(null != d && (f ? d <= l.to && d <= c.end : d >= l.from && d >= c.begin)) { var h = f ? "before" : "after"; return new et(r.line, d, h) } } var p = function(e, t, n) { for(var o = function(e, t) { return t ? new et(r.line, s(e, 1), "before") : new et(r.line, e, "after") }; e >= 0 && e < i.length; e += t) { var l = i[e],
								a = t > 0 == (1 != l.level),
								u = a ? n.begin : s(n.end, -1); if(l.from <= u && u < l.to) return o(u, a); if(u = a ? l.from : s(l.to, -1), n.begin <= u && u < n.end) return o(u, a) } },
					g = p(o + n, n, c); if(g) return g; var m = n > 0 ? c.end : s(c.begin, -1); return null == m || n > 0 && m == t.text.length || !(g = p(n > 0 ? 0 : i.length - 1, n, u(m))) ? null : g }(e.cm, a, t, r) : Xo(a, t, r); if(null == l) { if(o || (u = t.line + s) < e.first || u >= e.first + e.size || (t = new et(u, t.ch, t.sticky), !(a = Ke(e, u)))) return !1;
				t = Yo(i, e.cm, a, t.line, s) } else t = l; return !0 } if("char" == n || "codepoint" == n) u();
		else if("column" == n) u(!0);
		else if("word" == n || "group" == n)
			for(var c = null, f = "group" == n, d = e.cm && e.cm.getHelper(t, "wordChars"), h = !0; !(r < 0) || u(!h); h = !1) { var p = a.text.charAt(t.ch) || "\n",
					g = te(p, d) ? "w" : f && "\n" == p ? "n" : !f || /\s/.test(p) ? null : "p"; if(!f || h || g || (g = "s"), c && c != g) { r < 0 && (r = 1, u(), t.sticky = "after"); break } if(g && (c = g), r > 0 && !u(!h)) break }
		var m = to(e, t, o, l, !0); return rt(o, m) && (m.hitSide = !0), m }

	function Fl(e, t, r, n) { var i, o, l = e.doc,
			a = t.left; if("page" == n) { var s = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
				u = Math.max(s - .5 * en(e.display), 3);
			i = (r > 0 ? t.bottom : t.top) + r * u } else "line" == n && (i = r > 0 ? t.bottom + 3 : t.top - 3); for(;
			(o = Xr(e, a, i)).outside;) { if(r < 0 ? i <= 0 : i >= l.height) { o.hitSide = !0; break } i += 5 * r } return o } var Pl = function(e) { this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new R, this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null };

	function zl(e, t) { var r = Or(e, t.line); if(!r || r.hidden) return null; var n = Ke(e.doc, t.line),
			i = Nr(r, n, t.line),
			o = ce(n, e.doc.direction),
			l = "left";
		o && (l = se(o, t.ch) % 2 ? "right" : "left"); var a = Fr(i.map, t.ch, l); return a.offset = "right" == a.collapse ? a.end : a.start, a }

	function Il(e, t) { return t && (e.bad = !0), e }

	function Rl(e, t, r) { var n; if(t == e.display.lineDiv) { if(!(n = e.display.lineDiv.childNodes[r])) return Il(e.clipPos(et(e.display.viewTo - 1)), !0);
			t = null, r = 0 } else
			for(n = t;; n = n.parentNode) { if(!n || n == e.display.lineDiv) return null; if(n.parentNode && n.parentNode == e.display.lineDiv) break }
		for(var i = 0; i < e.display.view.length; i++) { var o = e.display.view[i]; if(o.node == n) return _l(o, t, r) } }

	function _l(e, t, r) { var n = e.text.firstChild,
			i = !1; if(!t || !D(n, t)) return Il(et(Ye(e.line), 0), !0); if(t == n && (i = !0, t = n.childNodes[r], r = 0, !t)) { var o = e.rest ? X(e.rest) : e.line; return Il(et(Ye(o), o.text.length), i) } var l = 3 == t.nodeType ? t : null,
			a = t; for(l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (l = t.firstChild, r && (r = l.nodeValue.length)); a.parentNode != n;) a = a.parentNode; var s = e.measure,
			u = s.maps;

		function c(t, r, n) { for(var i = -1; i < (u ? u.length : 0); i++)
				for(var o = i < 0 ? s.map : u[i], l = 0; l < o.length; l += 3) { var a = o[l + 2]; if(a == t || a == r) { var c = Ye(i < 0 ? e.line : e.rest[i]),
							f = o[l] + n; return (n < 0 || a != t) && (f = o[l + (n ? 1 : 0)]), et(c, f) } } } var f = c(l, a, r); if(f) return Il(f, i); for(var d = a.nextSibling, h = l ? l.nodeValue.length - r : 0; d; d = d.nextSibling) { if(f = c(d, d.firstChild, 0)) return Il(et(f.line, f.ch - h), i);
			h += d.textContent.length } for(var p = a.previousSibling, g = r; p; p = p.previousSibling) { if(f = c(p, p.firstChild, -1)) return Il(et(f.line, f.ch + g), i);
			g += p.textContent.length } } Pl.prototype.init = function(e) { var t = this,
			r = this,
			n = r.cm,
			i = r.div = e.lineDiv;

		function o(e) { for(var t = e.target; t; t = t.parentNode) { if(t == i) return !0; if(/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break } return !1 }

		function l(e) { if(o(e) && !me(n, e)) { if(n.somethingSelected()) Tl({ lineWise: !1, text: n.getSelections() }), "cut" == e.type && n.replaceSelection("", null, "cut");
				else { if(!n.options.lineWiseCopyCut) return; var t = Dl(n);
					Tl({ lineWise: !0, text: t.text }), "cut" == e.type && n.operation(function() { n.setSelections(t.ranges, 0, V), n.replaceSelection("", null, "cut") }) } if(e.clipboardData) { e.clipboardData.clearData(); var l = Ml.text.join("\n"); if(e.clipboardData.setData("Text", l), e.clipboardData.getData("Text") == l) return void e.preventDefault() } var a = El(),
					s = a.firstChild;
				n.display.lineSpace.insertBefore(a, n.display.lineSpace.firstChild), s.value = Ml.text.join("\n"); var u = W();
				F(s), setTimeout(function() { n.display.lineSpace.removeChild(a), u.focus(), u == i && r.showPrimarySelection() }, 50) } } i.contentEditable = !0, Wl(i, n.options.spellcheck, n.options.autocorrect, n.options.autocapitalize), de(i, "paste", function(e) {!o(e) || me(n, e) || Al(e, n) || a <= 11 && setTimeout(Zn(n, function() { return t.updateFromDOM() }), 20) }), de(i, "compositionstart", function(e) { t.composing = { data: e.data, done: !1 } }), de(i, "compositionupdate", function(e) { t.composing || (t.composing = { data: e.data, done: !1 }) }), de(i, "compositionend", function(e) { t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0) }), de(i, "touchstart", function() { return r.forceCompositionEnd() }), de(i, "input", function() { t.composing || t.readFromDOMSoon() }), de(i, "copy", l), de(i, "cut", l) }, Pl.prototype.screenReaderLabelChanged = function(e) { e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label") }, Pl.prototype.prepareSelection = function() { var e = gn(this.cm, !1); return e.focus = W() == this.div, e }, Pl.prototype.showSelection = function(e, t) { e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e)) }, Pl.prototype.getSelection = function() { return this.cm.display.wrapper.ownerDocument.getSelection() }, Pl.prototype.showPrimarySelection = function() { var e = this.getSelection(),
			t = this.cm,
			n = t.doc.sel.primary(),
			i = n.from(),
			o = n.to(); if(t.display.viewTo == t.display.viewFrom || i.line >= t.display.viewTo || o.line < t.display.viewFrom) e.removeAllRanges();
		else { var l = Rl(t, e.anchorNode, e.anchorOffset),
				a = Rl(t, e.focusNode, e.focusOffset); if(!l || l.bad || !a || a.bad || 0 != tt(ot(l, a), i) || 0 != tt(it(l, a), o)) { var s = t.display.view,
					u = i.line >= t.display.viewFrom && zl(t, i) || { node: s[0].measure.map[2], offset: 0 },
					c = o.line < t.display.viewTo && zl(t, o); if(!c) { var f = s[s.length - 1].measure,
						d = f.maps ? f.maps[f.maps.length - 1] : f.map;
					c = { node: d[d.length - 1], offset: d[d.length - 2] - d[d.length - 3] } } if(u && c) { var h, p = e.rangeCount && e.getRangeAt(0); try { h = L(u.node, u.offset, c.offset, c.node) } catch (e) {} h && (!r && t.state.focused ? (e.collapse(u.node, u.offset), h.collapsed || (e.removeAllRanges(), e.addRange(h))) : (e.removeAllRanges(), e.addRange(h)), p && null == e.anchorNode ? e.addRange(p) : r && this.startGracePeriod()), this.rememberSelection() } else e.removeAllRanges() } } }, Pl.prototype.startGracePeriod = function() { var e = this;
		clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() { e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() { return e.cm.curOp.selectionChanged = !0 }) }, 20) }, Pl.prototype.showMultipleSelections = function(e) { N(this.cm.display.cursorDiv, e.cursors), N(this.cm.display.selectionDiv, e.selection) }, Pl.prototype.rememberSelection = function() { var e = this.getSelection();
		this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset }, Pl.prototype.selectionInEditor = function() { var e = this.getSelection(); if(!e.rangeCount) return !1; var t = e.getRangeAt(0).commonAncestorContainer; return D(this.div, t) }, Pl.prototype.focus = function() { "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() && W() == this.div || this.showSelection(this.prepareSelection(), !0), this.div.focus()) }, Pl.prototype.blur = function() { this.div.blur() }, Pl.prototype.getField = function() { return this.div }, Pl.prototype.supportsTouch = function() { return !0 }, Pl.prototype.receivedFocus = function() { var e = this,
			t = this;
		this.selectionInEditor() ? setTimeout(function() { return e.pollSelection() }, 20) : Yn(this.cm, function() { return t.cm.curOp.selectionChanged = !0 }), this.polling.set(this.cm.options.pollInterval, function e() { t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e)) }) }, Pl.prototype.selectionChanged = function() { var e = this.getSelection(); return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset }, Pl.prototype.pollSelection = function() { if(null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) { var e = this.getSelection(),
				t = this.cm; if(m && c && this.cm.display.gutterSpecs.length && function(e) { for(var t = e; t; t = t.parentNode)
						if(/CodeMirror-gutter-wrapper/.test(t.className)) return !0; return !1 }(e.anchorNode)) return this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), void this.focus(); if(!this.composing) { this.rememberSelection(); var r = Rl(t, e.anchorNode, e.anchorOffset),
					n = Rl(t, e.focusNode, e.focusOffset);
				r && n && Yn(t, function() { Xi(t.doc, wi(r, n), V), (r.bad || n.bad) && (t.curOp.selectionChanged = !0) }) } } }, Pl.prototype.pollContent = function() { null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null); var e, t, r, n = this.cm,
			i = n.display,
			o = n.doc.sel.primary(),
			l = o.from(),
			a = o.to(); if(0 == l.ch && l.line > n.firstLine() && (l = et(l.line - 1, Ke(n.doc, l.line - 1).length)), a.ch == Ke(n.doc, a.line).text.length && a.line < n.lastLine() && (a = et(a.line + 1, 0)), l.line < i.viewFrom || a.line > i.viewTo - 1) return !1;
		l.line == i.viewFrom || 0 == (e = sn(n, l.line)) ? (t = Ye(i.view[0].line), r = i.view[0].node) : (t = Ye(i.view[e].line), r = i.view[e - 1].node.nextSibling); var s, u, c = sn(n, a.line); if(c == i.view.length - 1 ? (s = i.viewTo - 1, u = i.lineDiv.lastChild) : (s = Ye(i.view[c + 1].line) - 1, u = i.view[c + 1].node.previousSibling), !r) return !1; for(var f = n.doc.splitLines(function(e, t, r, n, i) { var o = "",
					l = !1,
					a = e.doc.lineSeparator(),
					s = !1;

				function u() { l && (o += a, s && (o += a), l = s = !1) }

				function c(e) { e && (u(), o += e) }

				function f(t) { if(1 == t.nodeType) { var r = t.getAttribute("cm-text"); if(r) return void c(r); var o, d = t.getAttribute("cm-marker"); if(d) { var h = e.findMarks(et(n, 0), et(i + 1, 0), (m = +d, function(e) { return e.id == m })); return void(h.length && (o = h[0].find(0)) && c(qe(e.doc, o.from, o.to).join(a))) } if("false" == t.getAttribute("contenteditable")) return; var p = /^(pre|div|p|li|table|br)$/i.test(t.nodeName); if(!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
						p && u(); for(var g = 0; g < t.childNodes.length; g++) f(t.childNodes[g]); /^(pre|p)$/i.test(t.nodeName) && (s = !0), p && (l = !0) } else 3 == t.nodeType && c(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " ")); var m } for(; f(t), t != r;) t = t.nextSibling, s = !1; return o }(n, r, u, t, s)), d = qe(n.doc, et(t, 0), et(s, Ke(n.doc, s).text.length)); f.length > 1 && d.length > 1;)
			if(X(f) == X(d)) f.pop(), d.pop(), s--;
			else { if(f[0] != d[0]) break;
				f.shift(), d.shift(), t++ } for(var h = 0, p = 0, g = f[0], m = d[0], v = Math.min(g.length, m.length); h < v && g.charCodeAt(h) == m.charCodeAt(h);) ++h; for(var y = X(f), b = X(d), x = Math.min(y.length - (1 == f.length ? h : 0), b.length - (1 == d.length ? h : 0)); p < x && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);) ++p; if(1 == f.length && 1 == d.length && t == l.line)
			for(; h && h > l.ch && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1);) h--, p++;
		f[f.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, ""), f[0] = f[0].slice(h).replace(/\u200b+$/, ""); var w = et(t, h),
			C = et(s, d.length ? X(d).length - p : 0); return f.length > 1 || f[0] || tt(w, C) ? (co(n.doc, f, w, C, "+input"), !0) : void 0 }, Pl.prototype.ensurePolled = function() { this.forceCompositionEnd() }, Pl.prototype.reset = function() { this.forceCompositionEnd() }, Pl.prototype.forceCompositionEnd = function() { this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus()) }, Pl.prototype.readFromDOMSoon = function() { var e = this;
		null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function() { if(e.readDOMTimeout = null, e.composing) { if(!e.composing.done) return;
				e.composing = null } e.updateFromDOM() }, 80)) }, Pl.prototype.updateFromDOM = function() { var e = this;!this.cm.isReadOnly() && this.pollContent() || Yn(this.cm, function() { return un(e.cm) }) }, Pl.prototype.setUneditable = function(e) { e.contentEditable = "false" }, Pl.prototype.onKeyPress = function(e) { 0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || Zn(this.cm, Nl)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0)) }, Pl.prototype.readOnlyChanged = function(e) { this.div.contentEditable = String("nocursor" != e) }, Pl.prototype.onContextMenu = function() {}, Pl.prototype.resetPosition = function() {}, Pl.prototype.needsContentAttribute = !0; var Bl = function(e) { this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new R, this.hasSelection = !1, this.composing = null };
	Bl.prototype.init = function(e) { var t = this,
				r = this,
				n = this.cm;
			this.createField(e); var i = this.textarea;

			function o(e) { if(!me(n, e)) { if(n.somethingSelected()) Tl({ lineWise: !1, text: n.getSelections() });
					else { if(!n.options.lineWiseCopyCut) return; var t = Dl(n);
						Tl({ lineWise: !0, text: t.text }), "cut" == e.type ? n.setSelections(t.ranges, null, V) : (r.prevInput = "", i.value = t.text.join("\n"), F(i)) } "cut" == e.type && (n.state.cutIncoming = +new Date) } } e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), g && (i.style.width = "0px"), de(i, "input", function() { l && a >= 9 && t.hasSelection && (t.hasSelection = null), r.poll() }), de(i, "paste", function(e) { me(n, e) || Al(e, n) || (n.state.pasteIncoming = +new Date, r.fastPoll()) }), de(i, "cut", o), de(i, "copy", o), de(e.scroller, "paste", function(t) { if(!wr(e, t) && !me(n, t)) { if(!i.dispatchEvent) return n.state.pasteIncoming = +new Date, void r.focus(); var o = new Event("paste");
					o.clipboardData = t.clipboardData, i.dispatchEvent(o) } }), de(e.lineSpace, "selectstart", function(t) { wr(e, t) || xe(t) }), de(i, "compositionstart", function() { var e = n.getCursor("from");
				r.composing && r.composing.range.clear(), r.composing = { start: e, range: n.markText(e, n.getCursor("to"), { className: "CodeMirror-composing" }) } }), de(i, "compositionend", function() { r.composing && (r.poll(), r.composing.range.clear(), r.composing = null) }) }, Bl.prototype.createField = function(e) { this.wrapper = El(), this.textarea = this.wrapper.firstChild }, Bl.prototype.screenReaderLabelChanged = function(e) { e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label") }, Bl.prototype.prepareSelection = function() { var e = this.cm,
				t = e.display,
				r = e.doc,
				n = gn(e); if(e.options.moveInputWithCursor) { var i = Kr(e, r.sel.primary().head, "div"),
					o = t.wrapper.getBoundingClientRect(),
					l = t.lineDiv.getBoundingClientRect();
				n.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + l.top - o.top)), n.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + l.left - o.left)) } return n }, Bl.prototype.showSelection = function(e) { var t = this.cm.display;
			N(t.cursorDiv, e.cursors), N(t.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px") }, Bl.prototype.reset = function(e) { if(!this.contextMenuPending && !this.composing) { var t = this.cm; if(t.somethingSelected()) { this.prevInput = ""; var r = t.getSelection();
					this.textarea.value = r, t.state.focused && F(this.textarea), l && a >= 9 && (this.hasSelection = r) } else e || (this.prevInput = this.textarea.value = "", l && a >= 9 && (this.hasSelection = null)) } }, Bl.prototype.getField = function() { return this.textarea }, Bl.prototype.supportsTouch = function() { return !1 }, Bl.prototype.focus = function() { if("nocursor" != this.cm.options.readOnly && (!v || W() != this.textarea)) try { this.textarea.focus() } catch (e) {} }, Bl.prototype.blur = function() { this.textarea.blur() }, Bl.prototype.resetPosition = function() { this.wrapper.style.top = this.wrapper.style.left = 0 }, Bl.prototype.receivedFocus = function() { this.slowPoll() }, Bl.prototype.slowPoll = function() { var e = this;
			this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() { e.poll(), e.cm.state.focused && e.slowPoll() }) }, Bl.prototype.fastPoll = function() { var e = !1,
				t = this;
			t.pollingFast = !0, t.polling.set(20, function r() { t.poll() || e ? (t.pollingFast = !1, t.slowPoll()) : (e = !0, t.polling.set(60, r)) }) }, Bl.prototype.poll = function() { var e = this,
				t = this.cm,
				r = this.textarea,
				n = this.prevInput; if(this.contextMenuPending || !t.state.focused || Ee(r) && !n && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1; var i = r.value; if(i == n && !t.somethingSelected()) return !1; if(l && a >= 9 && this.hasSelection === i || y && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(), !1; if(t.doc.sel == t.display.selForContextMenu) { var o = i.charCodeAt(0); if(8203 != o || n || (n = "​"), 8666 == o) return this.reset(), this.cm.execCommand("undo") } for(var s = 0, u = Math.min(n.length, i.length); s < u && n.charCodeAt(s) == i.charCodeAt(s);) ++s; return Yn(t, function() { Nl(t, i.slice(s), n.length - s, null, e.composing ? "*compose" : null), i.length > 1e3 || i.indexOf("\n") > -1 ? r.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), { className: "CodeMirror-composing" })) }), !0 }, Bl.prototype.ensurePolled = function() { this.pollingFast && this.poll() && (this.pollingFast = !1) }, Bl.prototype.onKeyPress = function() { l && a >= 9 && (this.hasSelection = null), this.fastPoll() }, Bl.prototype.onContextMenu = function(e) { var t = this,
				r = t.cm,
				n = r.display,
				i = t.textarea;
			t.contextMenuPending && t.contextMenuPending(); var o = an(r, e),
				u = n.scroller.scrollTop; if(o && !f) { r.options.resetSelectionOnContextMenu && -1 == r.doc.sel.contains(o) && Zn(r, Xi)(r.doc, wi(o), V); var c, d = i.style.cssText,
					h = t.wrapper.style.cssText,
					p = t.wrapper.offsetParent.getBoundingClientRect(); if(t.wrapper.style.cssText = "position: static", i.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - p.top - 5) + "px; left: " + (e.clientX - p.left - 5) + "px;\n      z-index: 1000; background: " + (l ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", s && (c = window.scrollY), n.input.focus(), s && window.scrollTo(null, c), n.input.reset(), r.somethingSelected() || (i.value = t.prevInput = " "), t.contextMenuPending = v, n.selForContextMenu = r.doc.sel, clearTimeout(n.detectingSelectAll), l && a >= 9 && m(), k) { ke(e); var g = function() { pe(window, "mouseup", g), setTimeout(v, 20) };
					de(window, "mouseup", g) } else setTimeout(v, 50) }

			function m() { if(null != i.selectionStart) { var e = r.somethingSelected(),
						o = "​" + (e ? i.value : "");
					i.value = "⇚", i.value = o, t.prevInput = e ? "" : "​", i.selectionStart = 1, i.selectionEnd = o.length, n.selForContextMenu = r.doc.sel } }

			function v() { if(t.contextMenuPending == v && (t.contextMenuPending = !1, t.wrapper.style.cssText = h, i.style.cssText = d, l && a < 9 && n.scrollbars.setScrollTop(n.scroller.scrollTop = u), null != i.selectionStart)) {
					(!l || l && a < 9) && m(); var e = 0,
						o = function() { n.selForContextMenu == r.doc.sel && 0 == i.selectionStart && i.selectionEnd > 0 && "​" == t.prevInput ? Zn(r, no)(r) : e++ < 10 ? n.detectingSelectAll = setTimeout(o, 500) : (n.selForContextMenu = null, n.input.reset()) };
					n.detectingSelectAll = setTimeout(o, 200) } } }, Bl.prototype.readOnlyChanged = function(e) { e || this.reset(), this.textarea.disabled = "nocursor" == e, this.textarea.readOnly = !!e }, Bl.prototype.setUneditable = function() {}, Bl.prototype.needsContentAttribute = !1,
		function(e) { var t = e.optionHandlers;

			function r(r, n, i, o) { e.defaults[r] = n, i && (t[r] = o ? function(e, t, r) { r != yl && i(e, t, r) } : i) } e.defineOption = r, e.Init = yl, r("value", "", function(e, t) { return e.setValue(t) }, !0), r("mode", null, function(e, t) { e.doc.modeOption = t, Mi(e) }, !0), r("indentUnit", 2, Mi, !0), r("indentWithTabs", !1), r("smartIndent", !0), r("tabSize", 4, function(e) { Ti(e), Rr(e), un(e) }, !0), r("lineSeparator", null, function(e, t) { if(e.doc.lineSep = t, t) { var r = [],
						n = e.doc.first;
					e.doc.iter(function(e) { for(var i = 0;;) { var o = e.text.indexOf(t, i); if(-1 == o) break;
							i = o + t.length, r.push(et(n, o)) } n++ }); for(var i = r.length - 1; i >= 0; i--) co(e.doc, t, r[i], et(r[i].line, r[i].ch + t.length)) } }), r("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function(e, t, r) { e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), r != yl && e.refresh() }), r("specialCharPlaceholder", Qt, function(e) { return e.refresh() }, !0), r("electricChars", !0), r("inputStyle", v ? "contenteditable" : "textarea", function() { throw new Error("inputStyle can not (yet) be changed in a running editor") }, !0), r("spellcheck", !1, function(e, t) { return e.getInputField().spellcheck = t }, !0), r("autocorrect", !1, function(e, t) { return e.getInputField().autocorrect = t }, !0), r("autocapitalize", !1, function(e, t) { return e.getInputField().autocapitalize = t }, !0), r("rtlMoveVisually", !x), r("wholeLineUpdateBefore", !0), r("theme", "default", function(e) { vl(e), di(e) }, !0), r("keyMap", "default", function(e, t, r) { var n = Ko(t),
					i = r != yl && Ko(r);
				i && i.detach && i.detach(e, n), n.attach && n.attach(e, i || null) }), r("extraKeys", null), r("configureMouse", null), r("lineWrapping", !1, Cl, !0), r("gutters", [], function(e, t) { e.display.gutterSpecs = ci(t, e.options.lineNumbers), di(e) }, !0), r("fixedGutter", !0, function(e, t) { e.display.gutters.style.left = t ? nn(e.display) + "px" : "0", e.refresh() }, !0), r("coverGutterNextToScrollbar", !1, function(e) { return Rn(e) }, !0), r("scrollbarStyle", "native", function(e) { jn(e), Rn(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft) }, !0), r("lineNumbers", !1, function(e, t) { e.display.gutterSpecs = ci(e.options.gutters, t), di(e) }, !0), r("firstLineNumber", 1, di, !0), r("lineNumberFormatter", function(e) { return e }, di, !0), r("showCursorWhenSelecting", !1, pn, !0), r("resetSelectionOnContextMenu", !0), r("lineWiseCopyCut", !0), r("pasteLinesPerSelection", !0), r("selectionsMayTouch", !1), r("readOnly", !1, function(e, t) { "nocursor" == t && (kn(e), e.display.input.blur()), e.display.input.readOnlyChanged(t) }), r("screenReaderLabel", null, function(e, t) { t = "" === t ? null : t, e.display.input.screenReaderLabelChanged(t) }), r("disableInput", !1, function(e, t) { t || e.display.input.reset() }, !0), r("dragDrop", !0, wl), r("allowDropFileTypes", null), r("cursorBlinkRate", 530), r("cursorScrollMargin", 0), r("cursorHeight", 1, pn, !0), r("singleCursorHeightPerLine", !0, pn, !0), r("workTime", 100), r("workDelay", 100), r("flattenSpans", !0, Ti, !0), r("addModeClass", !1, Ti, !0), r("pollInterval", 100), r("undoDepth", 200, function(e, t) { return e.doc.history.undoDepth = t }), r("historyEventDelay", 1250), r("viewportMargin", 10, function(e) { return e.refresh() }, !0), r("maxHighlightLength", 1e4, Ti, !0), r("moveInputWithCursor", !0, function(e, t) { t || e.display.input.resetPosition() }), r("tabindex", null, function(e, t) { return e.display.input.getField().tabIndex = t || "" }), r("autofocus", null), r("direction", "ltr", function(e, t) { return e.doc.setDirection(t) }, !0), r("phrases", null) }(kl),
		function(e) { var t = e.optionHandlers,
				r = e.helpers = {};
			e.prototype = { constructor: e, focus: function() { window.focus(), this.display.input.focus() }, setOption: function(e, r) { var n = this.options,
						i = n[e];
					n[e] == r && "mode" != e || (n[e] = r, t.hasOwnProperty(e) && Zn(this, t[e])(this, r, i), ge(this, "optionChange", this, e)) }, getOption: function(e) { return this.options[e] }, getDoc: function() { return this.doc }, addKeyMap: function(e, t) { this.state.keyMaps[t ? "push" : "unshift"](Ko(e)) }, removeKeyMap: function(e) { for(var t = this.state.keyMaps, r = 0; r < t.length; ++r)
						if(t[r] == e || t[r].name == e) return t.splice(r, 1), !0 }, addOverlay: Qn(function(t, r) { var n = t.token ? t : e.getMode(this.options, t); if(n.startState) throw new Error("Overlays may not be stateful.");! function(e, t, r) { for(var n = 0, i = r(t); n < e.length && r(e[n]) <= i;) n++;
						e.splice(n, 0, t) }(this.state.overlays, { mode: n, modeSpec: t, opaque: r && r.opaque, priority: r && r.priority || 0 }, function(e) { return e.priority }), this.state.modeGen++, un(this) }), removeOverlay: Qn(function(e) { for(var t = this.state.overlays, r = 0; r < t.length; ++r) { var n = t[r].modeSpec; if(n == e || "string" == typeof e && n.name == e) return t.splice(r, 1), this.state.modeGen++, void un(this) } }), indentLine: Qn(function(e, t, r) { "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), Qe(this.doc, e) && Ll(this, e, t, r) }), indentSelection: Qn(function(e) { for(var t = this.doc.sel.ranges, r = -1, n = 0; n < t.length; n++) { var i = t[n]; if(i.empty()) i.head.line > r && (Ll(this, i.head.line, e, !0), r = i.head.line, n == this.doc.sel.primIndex && An(this));
						else { var o = i.from(),
								l = i.to(),
								a = Math.max(r, o.line);
							r = Math.min(this.lastLine(), l.line - (l.ch ? 0 : 1)) + 1; for(var s = a; s < r; ++s) Ll(this, s, e); var u = this.doc.sel.ranges;
							0 == o.ch && t.length == u.length && u[n].from().ch > 0 && Ki(this.doc, n, new bi(o, u[n].to()), V) } } }), getTokenAt: function(e, t) { return yt(this, e, t) }, getLineTokens: function(e, t) { return yt(this, et(e), t, !0) }, getTokenTypeAt: function(e) { e = at(this.doc, e); var t, r = dt(this, Ke(this.doc, e.line)),
						n = 0,
						i = (r.length - 1) / 2,
						o = e.ch; if(0 == o) t = r[2];
					else
						for(;;) { var l = n + i >> 1; if((l ? r[2 * l - 1] : 0) >= o) i = l;
							else { if(!(r[2 * l + 1] < o)) { t = r[2 * l + 2]; break } n = l + 1 } }
					var a = t ? t.indexOf("overlay ") : -1; return a < 0 ? t : 0 == a ? null : t.slice(0, a - 1) }, getModeAt: function(t) { var r = this.doc.mode; return r.innerMode ? e.innerMode(r, this.getTokenAt(t).state).mode : r }, getHelper: function(e, t) { return this.getHelpers(e, t)[0] }, getHelpers: function(e, t) { var n = []; if(!r.hasOwnProperty(t)) return n; var i = r[t],
						o = this.getModeAt(e); if("string" == typeof o[t]) i[o[t]] && n.push(i[o[t]]);
					else if(o[t])
						for(var l = 0; l < o[t].length; l++) { var a = i[o[t][l]];
							a && n.push(a) } else o.helperType && i[o.helperType] ? n.push(i[o.helperType]) : i[o.name] && n.push(i[o.name]); for(var s = 0; s < i._global.length; s++) { var u = i._global[s];
						u.pred(o, this) && -1 == _(n, u.val) && n.push(u.val) } return n }, getStateAfter: function(e, t) { var r = this.doc; return ht(this, (e = lt(r, null == e ? r.first + r.size - 1 : e)) + 1, t).state }, cursorCoords: function(e, t) { var r = this.doc.sel.primary(); return Kr(this, null == e ? r.head : "object" == typeof e ? at(this.doc, e) : e ? r.from() : r.to(), t || "page") }, charCoords: function(e, t) { return Ur(this, at(this.doc, e), t || "page") }, coordsChar: function(e, t) { return Xr(this, (e = Gr(this, e, t || "page")).left, e.top) }, lineAtHeight: function(e, t) { return e = Gr(this, { top: e, left: 0 }, t || "page").top, Ze(this.doc, e + this.display.viewOffset) }, heightAtLine: function(e, t, r) { var n, i = !1; if("number" == typeof e) { var o = this.doc.first + this.doc.size - 1;
						e < this.doc.first ? e = this.doc.first : e > o && (e = o, i = !0), n = Ke(this.doc, e) } else n = e; return Vr(this, n, { top: 0, left: 0 }, t || "page", r || i).top + (i ? this.doc.height - Vt(n) : 0) }, defaultTextHeight: function() { return en(this.display) }, defaultCharWidth: function() { return tn(this.display) }, getViewport: function() { return { from: this.display.viewFrom, to: this.display.viewTo } }, addWidget: function(e, t, r, n, i) { var o, l, a, s = this.display,
						u = (e = Kr(this, at(this.doc, e))).bottom,
						c = e.left; if(t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), s.sizer.appendChild(t), "over" == n) u = e.top;
					else if("above" == n || "near" == n) { var f = Math.max(s.wrapper.clientHeight, this.doc.height),
							d = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth);
						("above" == n || e.bottom + t.offsetHeight > f) && e.top > t.offsetHeight ? u = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= f && (u = e.bottom), c + t.offsetWidth > d && (c = d - t.offsetWidth) } t.style.top = u + "px", t.style.left = t.style.right = "", "right" == i ? (c = s.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? c = 0 : "middle" == i && (c = (s.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = c + "px"), r && (o = this, l = { left: c, top: u, right: c + t.offsetWidth, bottom: u + t.offsetHeight }, null != (a = Tn(o, l)).scrollTop && En(o, a.scrollTop), null != a.scrollLeft && Fn(o, a.scrollLeft)) }, triggerOnKeyDown: Qn(ll), triggerOnKeyPress: Qn(sl), triggerOnKeyUp: al, triggerOnMouseDown: Qn(dl), execCommand: function(e) { if(Zo.hasOwnProperty(e)) return Zo[e].call(null, this) }, triggerElectric: Qn(function(e) { Ol(this, e) }), findPosH: function(e, t, r, n) { var i = 1;
					t < 0 && (i = -1, t = -t); for(var o = at(this.doc, e), l = 0; l < t && !(o = Hl(this.doc, o, i, r, n)).hitSide; ++l); return o }, moveH: Qn(function(e, t) { var r = this;
					this.extendSelectionsBy(function(n) { return r.display.shift || r.doc.extend || n.empty() ? Hl(r.doc, n.head, e, t, r.options.rtlMoveVisually) : e < 0 ? n.from() : n.to() }, U) }), deleteH: Qn(function(e, t) { var r = this.doc.sel,
						n = this.doc;
					r.somethingSelected() ? n.replaceSelection("", null, "+delete") : qo(this, function(r) { var i = Hl(n, r.head, e, t, !1); return e < 0 ? { from: i, to: r.head } : { from: r.head, to: i } }) }), findPosV: function(e, t, r, n) { var i = 1,
						o = n;
					t < 0 && (i = -1, t = -t); for(var l = at(this.doc, e), a = 0; a < t; ++a) { var s = Kr(this, l, "div"); if(null == o ? o = s.left : s.left = o, (l = Fl(this, s, i, r)).hitSide) break } return l }, moveV: Qn(function(e, t) { var r = this,
						n = this.doc,
						i = [],
						o = !this.display.shift && !n.extend && n.sel.somethingSelected(); if(n.extendSelectionsBy(function(l) { if(o) return e < 0 ? l.from() : l.to(); var a = Kr(r, l.head, "div");
							null != l.goalColumn && (a.left = l.goalColumn), i.push(a.left); var s = Fl(r, a, e, t); return "page" == t && l == n.sel.primary() && Nn(r, Ur(r, s, "div").top - a.top), s }, U), i.length)
						for(var l = 0; l < n.sel.ranges.length; l++) n.sel.ranges[l].goalColumn = i[l] }), findWordAt: function(e) { var t = Ke(this.doc, e.line).text,
						r = e.ch,
						n = e.ch; if(t) { var i = this.getHelper(e, "wordChars"); "before" != e.sticky && n != t.length || !r ? ++n : --r; for(var o = t.charAt(r), l = te(o, i) ? function(e) { return te(e, i) } : /\s/.test(o) ? function(e) { return /\s/.test(e) } : function(e) { return !/\s/.test(e) && !te(e) }; r > 0 && l(t.charAt(r - 1));) --r; for(; n < t.length && l(t.charAt(n));) ++n } return new bi(et(e.line, r), et(e.line, n)) }, toggleOverwrite: function(e) { null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? E(this.display.cursorDiv, "CodeMirror-overwrite") : M(this.display.cursorDiv, "CodeMirror-overwrite"), ge(this, "overwriteToggle", this, this.state.overwrite)) }, hasFocus: function() { return this.display.input.getField() == W() }, isReadOnly: function() { return !(!this.options.readOnly && !this.doc.cantEdit) }, scrollTo: Qn(function(e, t) { On(this, e, t) }), getScrollInfo: function() { var e = this.display.scroller; return { left: e.scrollLeft, top: e.scrollTop, height: e.scrollHeight - Lr(this) - this.display.barHeight, width: e.scrollWidth - Lr(this) - this.display.barWidth, clientHeight: Tr(this), clientWidth: Mr(this) } }, scrollIntoView: Qn(function(e, t) { null == e ? (e = { from: this.doc.sel.primary().head, to: null }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = { from: et(e, 0), to: null } : null == e.from && (e = { from: e, to: null }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? function(e, t) { Dn(e), e.curOp.scrollToPos = t }(this, e) : Wn(this, e.from, e.to, e.margin) }), setSize: Qn(function(e, t) { var r = this,
						n = function(e) { return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e };
					null != e && (this.display.wrapper.style.width = n(e)), null != t && (this.display.wrapper.style.height = n(t)), this.options.lineWrapping && Ir(this); var i = this.display.viewFrom;
					this.doc.iter(i, this.display.viewTo, function(e) { if(e.widgets)
							for(var t = 0; t < e.widgets.length; t++)
								if(e.widgets[t].noHScroll) { cn(r, i, "widget"); break }++ i }), this.curOp.forceUpdate = !0, ge(this, "refresh", this) }), operation: function(e) { return Yn(this, e) }, startOperation: function() { return Gn(this) }, endOperation: function() { return Un(this) }, refresh: Qn(function() { var e = this.display.cachedTextHeight;
					un(this), this.curOp.forceUpdate = !0, Rr(this), On(this, this.doc.scrollLeft, this.doc.scrollTop), li(this.display), (null == e || Math.abs(e - en(this.display)) > .5 || this.options.lineWrapping) && ln(this), ge(this, "refresh", this) }), swapDoc: Qn(function(e) { var t = this.doc; return t.cm = null, this.state.selectingText && this.state.selectingText(), Di(this, e), Rr(this), this.display.input.reset(), On(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, ar(this, "swapDoc", this, t), t }), phrase: function(e) { var t = this.options.phrases; return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e }, getInputField: function() { return this.display.input.getField() }, getWrapperElement: function() { return this.display.wrapper }, getScrollerElement: function() { return this.display.scroller }, getGutterElement: function() { return this.display.gutters } }, be(e), e.registerHelper = function(t, n, i) { r.hasOwnProperty(t) || (r[t] = e[t] = { _global: [] }), r[t][n] = i }, e.registerGlobalHelper = function(t, n, i, o) { e.registerHelper(t, n, o), r[t]._global.push({ pred: i, val: o }) } }(kl); var jl = "iter insert remove copy getEditor constructor".split(" "); for(var Vl in To.prototype) To.prototype.hasOwnProperty(Vl) && _(jl, Vl) < 0 && (kl.prototype[Vl] = function(e) { return function() { return e.apply(this.doc, arguments) } }(To.prototype[Vl])); return be(To), kl.inputStyles = { textarea: Bl, contenteditable: Pl }, kl.defineMode = function(e) { kl.defaults.mode || "null" == e || (kl.defaults.mode = e),
				function(e, t) { arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Pe[e] = t }.apply(this, arguments) }, kl.defineMIME = function(e, t) { ze[e] = t }, kl.defineMode("null", function() { return { token: function(e) { return e.skipToEnd() } } }), kl.defineMIME("text/plain", "null"), kl.defineExtension = function(e, t) { kl.prototype[e] = t }, kl.defineDocExtension = function(e, t) { To.prototype[e] = t }, kl.fromTextArea = function(e, t) { if((t = t ? z(t) : {}).value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) { var r = W();
				t.autofocus = r == e || null != e.getAttribute("autofocus") && r == document.body }

			function n() { e.value = a.getValue() } var i; if(e.form && (de(e.form, "submit", n), !t.leaveSubmitMethodAlone)) { var o = e.form;
				i = o.submit; try { var l = o.submit = function() { n(), o.submit = i, o.submit(), o.submit = l } } catch (e) {} } t.finishInit = function(r) { r.save = n, r.getTextArea = function() { return e }, r.toTextArea = function() { r.toTextArea = isNaN, n(), e.parentNode.removeChild(r.getWrapperElement()), e.style.display = "", e.form && (pe(e.form, "submit", n), t.leaveSubmitMethodAlone || "function" != typeof e.form.submit || (e.form.submit = i)) } }, e.style.display = "none"; var a = kl(function(t) { return e.parentNode.insertBefore(t, e.nextSibling) }, t); return a },
		function(e) { e.off = pe, e.on = de, e.wheelEventPixels = mi, e.Doc = To, e.splitLines = We, e.countColumn = I, e.findColumn = K, e.isWordChar = ee, e.Pass = j, e.signal = ge, e.Line = Kt, e.changeEnd = Ci, e.scrollbarModel = Bn, e.Pos = et, e.cmpPos = tt, e.modes = Pe, e.mimeModes = ze, e.resolveMode = Ie, e.getMode = Re, e.modeExtensions = _e, e.extendMode = Be, e.copyState = je, e.startState = Ge, e.innerMode = Ve, e.commands = Zo, e.keyMap = Ro, e.keyName = Uo, e.isModifierKey = Vo, e.lookupKey = jo, e.normalizeKeyMap = Bo, e.StringStream = Ue, e.SharedTextMarker = ko, e.TextMarker = wo, e.LineWidget = yo, e.e_preventDefault = xe, e.e_stopPropagation = we, e.e_stop = ke, e.addClass = E, e.contains = D, e.rmClass = M, e.keyNames = Fo }(kl), kl.version = "5.65.3", kl }),
function(e) { "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror) }(function(e) { "use strict";
	e.defineMode("javascript", function(t, r) { var n, i, o = t.indentUnit,
			l = r.statementIndent,
			a = r.jsonld,
			s = r.json || a,
			u = !1 !== r.trackScope,
			c = r.typescript,
			f = r.wordCharacters || /[\w$\xa1-\uffff]/,
			d = function() {
				function e(e) { return { type: e, style: "keyword" } } var t = e("keyword a"),
					r = e("keyword b"),
					n = e("keyword c"),
					i = e("keyword d"),
					o = e("operator"),
					l = { type: "atom", style: "atom" }; return { if: e("if"), while: t, with: t, else: r, do: r, try: r, finally: r, return: i, break: i, continue: i, new: e("new"), delete: n, void: n, throw: n, debugger: e("debugger"), var: e("var"), const: e("var"), let: e("var"), function: e("function"), catch: e("catch"), for: e("for"), switch: e("switch"), case: e("case"), default: e("default"), in: o, typeof: o, instanceof: o, true: l, false: l, null: l, undefined: l, NaN: l, Infinity: l, this: e("this"), class: e("class"), super: e("atom"), yield: n, export: e("export"), import: e("import"), extends: n, await: n } }(),
			h = /[+\-*&%=<>!?|~^@]/,
			p = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

		function g(e, t, r) { return n = e, i = r, t }

		function m(e, t) { var r, n = e.next(); if('"' == n || "'" == n) return t.tokenize = (r = n, function(e, t) { var n, i = !1; if(a && "@" == e.peek() && e.match(p)) return t.tokenize = m, g("jsonld-keyword", "meta"); for(; null != (n = e.next()) && (n != r || i);) i = !i && "\\" == n; return i || (t.tokenize = m), g("string", "string") }), t.tokenize(e, t); if("." == n && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return g("number", "number"); if("." == n && e.match("..")) return g("spread", "meta"); if(/[\[\]{}\(\),;\:\.]/.test(n)) return g(n); if("=" == n && e.eat(">")) return g("=>", "operator"); if("0" == n && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return g("number", "number"); if(/\d/.test(n)) return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), g("number", "number"); if("/" == n) return e.eat("*") ? (t.tokenize = v, v(e, t)) : e.eat("/") ? (e.skipToEnd(), g("comment", "comment")) : Je(e, t, 1) ? (function(e) { for(var t, r = !1, n = !1; null != (t = e.next());) { if(!r) { if("/" == t && !n) return; "[" == t ? n = !0 : n && "]" == t && (n = !1) } r = !r && "\\" == t } }(e), e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), g("regexp", "string-2")) : (e.eat("="), g("operator", "operator", e.current())); if("`" == n) return t.tokenize = y, y(e, t); if("#" == n && "!" == e.peek()) return e.skipToEnd(), g("meta", "meta"); if("#" == n && e.eatWhile(f)) return g("variable", "property"); if("<" == n && e.match("!--") || "-" == n && e.match("->") && !/\S/.test(e.string.slice(0, e.start))) return e.skipToEnd(), g("comment", "comment"); if(h.test(n)) return ">" == n && t.lexical && ">" == t.lexical.type || (e.eat("=") ? "!" != n && "=" != n || e.eat("=") : /[<>*+\-|&?]/.test(n) && (e.eat(n), ">" == n && e.eat(n))), "?" == n && e.eat(".") ? g(".") : g("operator", "operator", e.current()); if(f.test(n)) { e.eatWhile(f); var i = e.current(); if("." != t.lastType) { if(d.propertyIsEnumerable(i)) { var o = d[i]; return g(o.type, o.style, i) } if("async" == i && e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)) return g("async", "keyword", i) } return g("variable", "variable", i) } }

		function v(e, t) { for(var r, n = !1; r = e.next();) { if("/" == r && n) { t.tokenize = m; break } n = "*" == r } return g("comment", "comment") }

		function y(e, t) { for(var r, n = !1; null != (r = e.next());) { if(!n && ("`" == r || "$" == r && e.eat("{"))) { t.tokenize = m; break } n = !n && "\\" == r } return g("quasi", "string-2", e.current()) } var b = "([{}])";

		function x(e, t) { t.fatArrowAt && (t.fatArrowAt = null); var r = e.string.indexOf("=>", e.start); if(!(r < 0)) { if(c) { var n = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, r));
					n && (r = n.index) } for(var i = 0, o = !1, l = r - 1; l >= 0; --l) { var a = e.string.charAt(l),
						s = b.indexOf(a); if(s >= 0 && s < 3) { if(!i) {++l; break } if(0 == --i) { "(" == a && (o = !0); break } } else if(s >= 3 && s < 6) ++i;
					else if(f.test(a)) o = !0;
					else if(/["'\/`]/.test(a))
						for(;; --l) { if(0 == l) return; if(e.string.charAt(l - 1) == a && "\\" != e.string.charAt(l - 2)) { l--; break } } else if(o && !i) {++l; break } } o && !i && (t.fatArrowAt = l) } } var w = { atom: !0, number: !0, variable: !0, string: !0, regexp: !0, this: !0, import: !0, "jsonld-keyword": !0 };

		function C(e, t, r, n, i, o) { this.indented = e, this.column = t, this.type = r, this.prev = i, this.info = o, null != n && (this.align = n) }

		function k(e, t) { if(!u) return !1; for(var r = e.localVars; r; r = r.next)
				if(r.name == t) return !0; for(var n = e.context; n; n = n.prev)
				for(r = n.vars; r; r = r.next)
					if(r.name == t) return !0 }

		function S(e, t, r, n, i) { var o = e.cc; for(L.state = e, L.stream = i, L.marked = null, L.cc = o, L.style = t, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0);;) { if((o.length ? o.pop() : s ? j : _)(r, n)) { for(; o.length && o[o.length - 1].lex;) o.pop()(); return L.marked ? L.marked : "variable" == r && k(e, n) ? "variable-2" : t } } } var L = { state: null, column: null, marked: null, cc: null };

		function M() { for(var e = arguments.length - 1; e >= 0; e--) L.cc.push(arguments[e]) }

		function T() { return M.apply(null, arguments), !0 }

		function N(e, t) { for(var r = t; r; r = r.next)
				if(r.name == e) return !0; return !1 }

		function A(e) { var t = L.state; if(L.marked = "def", u) { if(t.context)
					if("var" == t.lexical.info && t.context && t.context.block) { var n = function e(t, r) { if(r) { if(r.block) { var n = e(t, r.prev); return n ? n == r.prev ? r : new D(n, r.vars, !0) : null } return N(t, r.vars) ? r : new D(r.prev, new W(t, r.vars), !1) } return null }(e, t.context); if(null != n) return void(t.context = n) } else if(!N(e, t.localVars)) return void(t.localVars = new W(e, t.localVars));
				r.globalVars && !N(e, t.globalVars) && (t.globalVars = new W(e, t.globalVars)) } }

		function O(e) { return "public" == e || "private" == e || "protected" == e || "abstract" == e || "readonly" == e }

		function D(e, t, r) { this.prev = e, this.vars = t, this.block = r }

		function W(e, t) { this.name = e, this.next = t } var E = new W("this", new W("arguments", null));

		function H() { L.state.context = new D(L.state.context, L.state.localVars, !1), L.state.localVars = E }

		function F() { L.state.context = new D(L.state.context, L.state.localVars, !0), L.state.localVars = null }

		function P() { L.state.localVars = L.state.context.vars, L.state.context = L.state.context.prev }

		function z(e, t) { var r = function() { var r = L.state,
					n = r.indented; if("stat" == r.lexical.type) n = r.lexical.indented;
				else
					for(var i = r.lexical; i && ")" == i.type && i.align; i = i.prev) n = i.indented;
				r.lexical = new C(n, L.stream.column(), e, null, r.lexical, t) }; return r.lex = !0, r }

		function I() { var e = L.state;
			e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev) }

		function R(e) { return function t(r) { return r == e ? T() : ";" == e || "}" == r || ")" == r || "]" == r ? M() : T(t) } }

		function _(e, t) { return "var" == e ? T(z("vardef", t), Se, R(";"), I) : "keyword a" == e ? T(z("form"), G, _, I) : "keyword b" == e ? T(z("form"), _, I) : "keyword d" == e ? L.stream.match(/^\s*$/, !1) ? T() : T(z("stat"), K, R(";"), I) : "debugger" == e ? T(R(";")) : "{" == e ? T(z("}"), F, se, I, P) : ";" == e ? T() : "if" == e ? ("else" == L.state.lexical.info && L.state.cc[L.state.cc.length - 1] == I && L.state.cc.pop()(), T(z("form"), G, _, I, Oe)) : "function" == e ? T(He) : "for" == e ? T(z("form"), F, De, _, P, I) : "class" == e || c && "interface" == t ? (L.marked = "keyword", T(z("form", "class" == e ? e : t), Re, I)) : "variable" == e ? c && "declare" == t ? (L.marked = "keyword", T(_)) : c && ("module" == t || "enum" == t || "type" == t) && L.stream.match(/^\s*\w/, !1) ? (L.marked = "keyword", "enum" == t ? T(Ze) : "type" == t ? T(Pe, R("operator"), he, R(";")) : T(z("form"), Le, R("{"), z("}"), se, I, I)) : c && "namespace" == t ? (L.marked = "keyword", T(z("form"), j, _, I)) : c && "abstract" == t ? (L.marked = "keyword", T(_)) : T(z("stat"), te) : "switch" == e ? T(z("form"), G, R("{"), z("}", "switch"), F, se, I, I, P) : "case" == e ? T(j, R(":")) : "default" == e ? T(R(":")) : "catch" == e ? T(z("form"), H, B, _, I, P) : "export" == e ? T(z("stat"), Ve, I) : "import" == e ? T(z("stat"), Ue, I) : "async" == e ? T(_) : "@" == t ? T(j, _) : M(z("stat"), j, R(";"), I) }

		function B(e) { if("(" == e) return T(ze, R(")")) }

		function j(e, t) { return U(e, t, !1) }

		function V(e, t) { return U(e, t, !0) }

		function G(e) { return "(" != e ? M() : T(z(")"), K, R(")"), I) }

		function U(e, t, r) { if(L.state.fatArrowAt == L.stream.start) { var n = r ? Q : Z; if("(" == e) return T(H, z(")"), le(ze, ")"), I, R("=>"), n, P); if("variable" == e) return M(H, Le, R("=>"), n, P) } var i = r ? $ : q; return w.hasOwnProperty(e) ? T(i) : "function" == e ? T(He, i) : "class" == e || c && "interface" == t ? (L.marked = "keyword", T(z("form"), Ie, I)) : "keyword c" == e || "async" == e ? T(r ? V : j) : "(" == e ? T(z(")"), K, R(")"), I, i) : "operator" == e || "spread" == e ? T(r ? V : j) : "[" == e ? T(z("]"), Ye, I, i) : "{" == e ? ae(ne, "}", null, i) : "quasi" == e ? M(X, i) : "new" == e ? T(function(e) { return function(t) { return "." == t ? T(e ? ee : J) : "variable" == t && c ? T(we, e ? $ : q) : M(e ? V : j) } }(r)) : T() }

		function K(e) { return e.match(/[;\}\)\],]/) ? M() : M(j) }

		function q(e, t) { return "," == e ? T(K) : $(e, t, !1) }

		function $(e, t, r) { var n = 0 == r ? q : $,
				i = 0 == r ? j : V; return "=>" == e ? T(H, r ? Q : Z, P) : "operator" == e ? /\+\+|--/.test(t) || c && "!" == t ? T(n) : c && "<" == t && L.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1) ? T(z(">"), le(he, ">"), I, n) : "?" == t ? T(j, R(":"), i) : T(i) : "quasi" == e ? M(X, n) : ";" != e ? "(" == e ? ae(V, ")", "call", n) : "." == e ? T(re, n) : "[" == e ? T(z("]"), K, R("]"), I, n) : c && "as" == t ? (L.marked = "keyword", T(he, n)) : "regexp" == e ? (L.state.lastType = L.marked = "operator", L.stream.backUp(L.stream.pos - L.stream.start - 1), T(i)) : void 0 : void 0 }

		function X(e, t) { return "quasi" != e ? M() : "${" != t.slice(t.length - 2) ? T(X) : T(K, Y) }

		function Y(e) { if("}" == e) return L.marked = "string-2", L.state.tokenize = y, T(X) }

		function Z(e) { return x(L.stream, L.state), M("{" == e ? _ : j) }

		function Q(e) { return x(L.stream, L.state), M("{" == e ? _ : V) }

		function J(e, t) { if("target" == t) return L.marked = "keyword", T(q) }

		function ee(e, t) { if("target" == t) return L.marked = "keyword", T($) }

		function te(e) { return ":" == e ? T(I, _) : M(q, R(";"), I) }

		function re(e) { if("variable" == e) return L.marked = "property", T() }

		function ne(e, t) { if("async" == e) return L.marked = "property", T(ne); if("variable" == e || "keyword" == L.style) { return L.marked = "property", "get" == t || "set" == t ? T(ie) : (c && L.state.fatArrowAt == L.stream.start && (r = L.stream.match(/^\s*:\s*/, !1)) && (L.state.fatArrowAt = L.stream.pos + r[0].length), T(oe)); var r } else { if("number" == e || "string" == e) return L.marked = a ? "property" : L.style + " property", T(oe); if("jsonld-keyword" == e) return T(oe); if(c && O(t)) return L.marked = "keyword", T(ne); if("[" == e) return T(j, ue, R("]"), oe); if("spread" == e) return T(V, oe); if("*" == t) return L.marked = "keyword", T(ne); if(":" == e) return M(oe) } }

		function ie(e) { return "variable" != e ? M(oe) : (L.marked = "property", T(He)) }

		function oe(e) { return ":" == e ? T(V) : "(" == e ? M(He) : void 0 }

		function le(e, t, r) {
			function n(i, o) { if(r ? r.indexOf(i) > -1 : "," == i) { var l = L.state.lexical; return "call" == l.info && (l.pos = (l.pos || 0) + 1), T(function(r, n) { return r == t || n == t ? M() : M(e) }, n) } return i == t || o == t ? T() : r && r.indexOf(";") > -1 ? M(e) : T(R(t)) } return function(r, i) { return r == t || i == t ? T() : M(e, n) } }

		function ae(e, t, r) { for(var n = 3; n < arguments.length; n++) L.cc.push(arguments[n]); return T(z(t, r), le(e, t), I) }

		function se(e) { return "}" == e ? T() : M(_, se) }

		function ue(e, t) { if(c) { if(":" == e) return T(he); if("?" == t) return T(ue) } }

		function ce(e, t) { if(c && (":" == e || "in" == t)) return T(he) }

		function fe(e) { if(c && ":" == e) return L.stream.match(/^\s*\w+\s+is\b/, !1) ? T(j, de, he) : T(he) }

		function de(e, t) { if("is" == t) return L.marked = "keyword", T() }

		function he(e, t) { return "keyof" == t || "typeof" == t || "infer" == t || "readonly" == t ? (L.marked = "keyword", T("typeof" == t ? V : he)) : "variable" == e || "void" == t ? (L.marked = "type", T(xe)) : "|" == t || "&" == t ? T(he) : "string" == e || "number" == e || "atom" == e ? T(xe) : "[" == e ? T(z("]"), le(he, "]", ","), I, xe) : "{" == e ? T(z("}"), ge, I, xe) : "(" == e ? T(le(be, ")"), pe, xe) : "<" == e ? T(le(he, ">"), he) : "quasi" == e ? M(ve, xe) : void 0 }

		function pe(e) { if("=>" == e) return T(he) }

		function ge(e) { return e.match(/[\}\)\]]/) ? T() : "," == e || ";" == e ? T(ge) : M(me, ge) }

		function me(e, t) { return "variable" == e || "keyword" == L.style ? (L.marked = "property", T(me)) : "?" == t || "number" == e || "string" == e ? T(me) : ":" == e ? T(he) : "[" == e ? T(R("variable"), ce, R("]"), me) : "(" == e ? M(Fe, me) : e.match(/[;\}\)\],]/) ? void 0 : T() }

		function ve(e, t) { return "quasi" != e ? M() : "${" != t.slice(t.length - 2) ? T(ve) : T(he, ye) }

		function ye(e) { if("}" == e) return L.marked = "string-2", L.state.tokenize = y, T(ve) }

		function be(e, t) { return "variable" == e && L.stream.match(/^\s*[?:]/, !1) || "?" == t ? T(be) : ":" == e ? T(he) : "spread" == e ? T(be) : M(he) }

		function xe(e, t) { return "<" == t ? T(z(">"), le(he, ">"), I, xe) : "|" == t || "." == e || "&" == t ? T(he) : "[" == e ? T(he, R("]"), xe) : "extends" == t || "implements" == t ? (L.marked = "keyword", T(he)) : "?" == t ? T(he, R(":"), he) : void 0 }

		function we(e, t) { if("<" == t) return T(z(">"), le(he, ">"), I, xe) }

		function Ce() { return M(he, ke) }

		function ke(e, t) { if("=" == t) return T(he) }

		function Se(e, t) { return "enum" == t ? (L.marked = "keyword", T(Ze)) : M(Le, ue, Ne, Ae) }

		function Le(e, t) { return c && O(t) ? (L.marked = "keyword", T(Le)) : "variable" == e ? (A(t), T()) : "spread" == e ? T(Le) : "[" == e ? ae(Te, "]") : "{" == e ? ae(Me, "}") : void 0 }

		function Me(e, t) { return "variable" != e || L.stream.match(/^\s*:/, !1) ? ("variable" == e && (L.marked = "property"), "spread" == e ? T(Le) : "}" == e ? M() : "[" == e ? T(j, R("]"), R(":"), Me) : T(R(":"), Le, Ne)) : (A(t), T(Ne)) }

		function Te() { return M(Le, Ne) }

		function Ne(e, t) { if("=" == t) return T(V) }

		function Ae(e) { if("," == e) return T(Se) }

		function Oe(e, t) { if("keyword b" == e && "else" == t) return T(z("form", "else"), _, I) }

		function De(e, t) { return "await" == t ? T(De) : "(" == e ? T(z(")"), We, I) : void 0 }

		function We(e) { return "var" == e ? T(Se, Ee) : "variable" == e ? T(Ee) : M(Ee) }

		function Ee(e, t) { return ")" == e ? T() : ";" == e ? T(Ee) : "in" == t || "of" == t ? (L.marked = "keyword", T(j, Ee)) : M(j, Ee) }

		function He(e, t) { return "*" == t ? (L.marked = "keyword", T(He)) : "variable" == e ? (A(t), T(He)) : "(" == e ? T(H, z(")"), le(ze, ")"), I, fe, _, P) : c && "<" == t ? T(z(">"), le(Ce, ">"), I, He) : void 0 }

		function Fe(e, t) { return "*" == t ? (L.marked = "keyword", T(Fe)) : "variable" == e ? (A(t), T(Fe)) : "(" == e ? T(H, z(")"), le(ze, ")"), I, fe, P) : c && "<" == t ? T(z(">"), le(Ce, ">"), I, Fe) : void 0 }

		function Pe(e, t) { return "keyword" == e || "variable" == e ? (L.marked = "type", T(Pe)) : "<" == t ? T(z(">"), le(Ce, ">"), I) : void 0 }

		function ze(e, t) { return "@" == t && T(j, ze), "spread" == e ? T(ze) : c && O(t) ? (L.marked = "keyword", T(ze)) : c && "this" == e ? T(ue, Ne) : M(Le, ue, Ne) }

		function Ie(e, t) { return "variable" == e ? Re(e, t) : _e(e, t) }

		function Re(e, t) { if("variable" == e) return A(t), T(_e) }

		function _e(e, t) { return "<" == t ? T(z(">"), le(Ce, ">"), I, _e) : "extends" == t || "implements" == t || c && "," == e ? ("implements" == t && (L.marked = "keyword"), T(c ? he : j, _e)) : "{" == e ? T(z("}"), Be, I) : void 0 }

		function Be(e, t) { return "async" == e || "variable" == e && ("static" == t || "get" == t || "set" == t || c && O(t)) && L.stream.match(/^\s+[\w$\xa1-\uffff]/, !1) ? (L.marked = "keyword", T(Be)) : "variable" == e || "keyword" == L.style ? (L.marked = "property", T(je, Be)) : "number" == e || "string" == e ? T(je, Be) : "[" == e ? T(j, ue, R("]"), je, Be) : "*" == t ? (L.marked = "keyword", T(Be)) : c && "(" == e ? M(Fe, Be) : ";" == e || "," == e ? T(Be) : "}" == e ? T() : "@" == t ? T(j, Be) : void 0 }

		function je(e, t) { if("!" == t) return T(je); if("?" == t) return T(je); if(":" == e) return T(he, Ne); if("=" == t) return T(V); var r = L.state.lexical.prev; return M(r && "interface" == r.info ? Fe : He) }

		function Ve(e, t) { return "*" == t ? (L.marked = "keyword", T(Xe, R(";"))) : "default" == t ? (L.marked = "keyword", T(j, R(";"))) : "{" == e ? T(le(Ge, "}"), Xe, R(";")) : M(_) }

		function Ge(e, t) { return "as" == t ? (L.marked = "keyword", T(R("variable"))) : "variable" == e ? M(V, Ge) : void 0 }

		function Ue(e) { return "string" == e ? T() : "(" == e ? M(j) : "." == e ? M(q) : M(Ke, qe, Xe) }

		function Ke(e, t) { return "{" == e ? ae(Ke, "}") : ("variable" == e && A(t), "*" == t && (L.marked = "keyword"), T($e)) }

		function qe(e) { if("," == e) return T(Ke, qe) }

		function $e(e, t) { if("as" == t) return L.marked = "keyword", T(Ke) }

		function Xe(e, t) { if("from" == t) return L.marked = "keyword", T(j) }

		function Ye(e) { return "]" == e ? T() : M(le(V, "]")) }

		function Ze() { return M(z("form"), Le, R("{"), z("}"), le(Qe, "}"), I, I) }

		function Qe() { return M(Le, Ne) }

		function Je(e, t, r) { return t.tokenize == m && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType) || "quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (r || 0))) } return H.lex = F.lex = !0, P.lex = !0, I.lex = !0, { startState: function(e) { var t = { tokenize: m, lastType: "sof", cc: [], lexical: new C((e || 0) - o, 0, "block", !1), localVars: r.localVars, context: r.localVars && new D(null, null, !1), indented: e || 0 }; return r.globalVars && "object" == typeof r.globalVars && (t.globalVars = r.globalVars), t }, token: function(e, t) { if(e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), t.indented = e.indentation(), x(e, t)), t.tokenize != v && e.eatSpace()) return null; var r = t.tokenize(e, t); return "comment" == n ? r : (t.lastType = "operator" != n || "++" != i && "--" != i ? n : "incdec", S(t, r, n, i, e)) }, indent: function(t, n) { if(t.tokenize == v || t.tokenize == y) return e.Pass; if(t.tokenize != m) return 0; var i, a = n && n.charAt(0),
					s = t.lexical; if(!/^\s*else\b/.test(n))
					for(var u = t.cc.length - 1; u >= 0; --u) { var c = t.cc[u]; if(c == I) s = s.prev;
						else if(c != Oe && c != P) break }
				for(;
					("stat" == s.type || "form" == s.type) && ("}" == a || (i = t.cc[t.cc.length - 1]) && (i == q || i == $) && !/^[,\.=+\-*:?[\(]/.test(n));) s = s.prev;
				l && ")" == s.type && "stat" == s.prev.type && (s = s.prev); var f = s.type,
					d = a == f; return "vardef" == f ? s.indented + ("operator" == t.lastType || "," == t.lastType ? s.info.length + 1 : 0) : "form" == f && "{" == a ? s.indented : "form" == f ? s.indented + o : "stat" == f ? s.indented + (function(e, t) { return "operator" == e.lastType || "," == e.lastType || h.test(t.charAt(0)) || /[,.]/.test(t.charAt(0)) }(t, n) ? l || o : 0) : "switch" != s.info || d || 0 == r.doubleIndentSwitch ? s.align ? s.column + (d ? 0 : 1) : s.indented + (d ? 0 : o) : s.indented + (/^(?:case|default)\b/.test(n) ? o : 2 * o) }, electricInput: /^\s*(?:case .*?:|default:|\{|\})$/, blockCommentStart: s ? null : "/*", blockCommentEnd: s ? null : "*/", blockCommentContinue: s ? null : " * ", lineComment: s ? null : "//", fold: "brace", closeBrackets: "()[]{}''\"\"``", helperType: s ? "json" : "javascript", jsonldMode: a, jsonMode: s, expressionAllowed: Je, skipExpression: function(t) { S(t, "atom", "atom", "true", new e.StringStream("", 2, null)) } } }), e.registerHelper("wordChars", "javascript", /[\w$]/), e.defineMIME("text/javascript", "javascript"), e.defineMIME("text/ecmascript", "javascript"), e.defineMIME("application/javascript", "javascript"), e.defineMIME("application/x-javascript", "javascript"), e.defineMIME("application/ecmascript", "javascript"), e.defineMIME("application/json", { name: "javascript", json: !0 }), e.defineMIME("application/x-json", { name: "javascript", json: !0 }), e.defineMIME("application/manifest+json", { name: "javascript", json: !0 }), e.defineMIME("application/ld+json", { name: "javascript", jsonld: !0 }), e.defineMIME("text/typescript", { name: "javascript", typescript: !0 }), e.defineMIME("application/typescript", { name: "javascript", typescript: !0 }) }),
function(e) { "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], e) : e(CodeMirror) }(function(e) { "use strict";

	function t(e, t) { if(!e.hasOwnProperty(t)) throw new Error("Undefined state " + t + " in simple mode") }

	function r(e, t) { if(!e) return /(?:)/; var r = ""; return e instanceof RegExp ? (e.ignoreCase && (r = "i"), e.unicode && (r += "u"), e = e.source) : e = String(e), new RegExp((!1 === t ? "" : "^") + "(?:" + e + ")", r) }

	function n(e, n) {
		(e.next || e.push) && t(n, e.next || e.push), this.regex = r(e.regex), this.token = function(e) { if(!e) return null; if(e.apply) return e; if("string" == typeof e) return e.replace(/\./g, " "); for(var t = [], r = 0; r < e.length; r++) t.push(e[r] && e[r].replace(/\./g, " ")); return t }(e.token), this.data = e }

	function i(e, t) { if(e === t) return !0; if(!e || "object" != typeof e || !t || "object" != typeof t) return !1; var r = 0; for(var n in e)
			if(e.hasOwnProperty(n)) { if(!t.hasOwnProperty(n) || !i(e[n], t[n])) return !1;
				r++ } for(var n in t) t.hasOwnProperty(n) && r--; return 0 == r }

	function o(t, n, o, l) { var a; if(o.persistent)
			for(var s = n.persistentStates; s && !a; s = s.next)(o.spec ? i(o.spec, s.spec) : o.mode == s.mode) && (a = s); var u = a ? a.mode : o.mode || e.getMode(t, o.spec),
			c = a ? a.state : e.startState(u);
		o.persistent && !a && (n.persistentStates = { mode: u, spec: o.spec, state: c, next: n.persistentStates }), n.localState = c, n.local = { mode: u, end: o.end && r(o.end), endScan: o.end && !1 !== o.forceEnd && r(o.end, !1), endToken: l && l.join ? l[l.length - 1] : l } } e.defineSimpleMode = function(t, r) { e.defineMode(t, function(t) { return e.simpleMode(t, r) }) }, e.simpleMode = function(r, i) { t(i, "start"); var l = {},
			a = i.meta || {},
			s = !1; for(var u in i)
			if(u != a && i.hasOwnProperty(u))
				for(var c = l[u] = [], f = i[u], d = 0; d < f.length; d++) { var h = f[d];
					c.push(new n(h, i)), (h.indent || h.dedent) && (s = !0) }
		var p = { startState: function() { return { state: "start", pending: null, local: null, localState: null, indent: s ? [] : null } }, copyState: function(t) { var r = { state: t.state, pending: t.pending, local: t.local, localState: null, indent: t.indent && t.indent.slice(0) };
				t.localState && (r.localState = e.copyState(t.local.mode, t.localState)), t.stack && (r.stack = t.stack.slice(0)); for(var n = t.persistentStates; n; n = n.next) r.persistentStates = { mode: n.mode, spec: n.spec, state: n.state == t.localState ? r.localState : e.copyState(n.mode, n.state), next: r.persistentStates }; return r }, token: function(e, t) { return function(r, n) { if(n.pending) { var i = n.pending.shift(); return 0 == n.pending.length && (n.pending = null), r.pos += i.text.length, i.token } if(n.local) { if(n.local.end && r.match(n.local.end)) { var l = n.local.endToken || null; return n.local = n.localState = null, l } var a, l = n.local.mode.token(r, n.localState); return n.local.endScan && (a = n.local.endScan.exec(r.current())) && (r.pos = r.start + a.index), l } for(var s = e[n.state], u = 0; u < s.length; u++) { var c = s[u],
							f = (!c.data.sol || r.sol()) && r.match(c.regex); if(f) { c.data.next ? n.state = c.data.next : c.data.push ? ((n.stack || (n.stack = [])).push(n.state), n.state = c.data.push) : c.data.pop && n.stack && n.stack.length && (n.state = n.stack.pop()), c.data.mode && o(t, n, c.data.mode, c.token), c.data.indent && n.indent.push(r.indentation() + t.indentUnit), c.data.dedent && n.indent.pop(); var d = c.token; if(d && d.apply && (d = d(f)), f.length > 2 && c.token && "string" != typeof c.token) { for(var h = 2; h < f.length; h++) f[h] && (n.pending || (n.pending = [])).push({ text: f[h], token: c.token[h - 1] }); return r.backUp(f[0].length - (f[1] ? f[1].length : 0)), d[0] } return d && d.join ? d[0] : d } } return r.next(), null } }(l, r), innerMode: function(e) { return e.local && { mode: e.local.mode, state: e.localState } }, indent: function(t, r) { return function(n, i, o) { if(n.local && n.local.mode.indent) return n.local.mode.indent(n.localState, i, o); if(null == n.indent || n.local || r.dontIndentStates && function(e, t) { for(var r = 0; r < t.length; r++)
								if(t[r] === e) return !0 }(n.state, r.dontIndentStates) > -1) return e.Pass; var l = n.indent.length - 1,
						a = t[n.state];
					e: for(;;) { for(var s = 0; s < a.length; s++) { var u = a[s]; if(u.data.dedent && !1 !== u.data.dedentIfLineStart) { var c = u.regex.exec(i); if(c && c[0]) { l--, (u.next || u.push) && (a = t[u.next || u.push]), i = i.slice(c[0].length); continue e } } } break }
					return l < 0 ? 0 : n.indent[l] } }(l, a) }; if(a)
			for(var g in a) a.hasOwnProperty(g) && (p[g] = a[g]); return p } }),
function(e) { "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror"), require("../../addon/mode/simple")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../../addon/mode/simple"], e) : e(CodeMirror) }(function(e) { "use strict";
	e.defineSimpleMode("wast", { start: [{ regex: /[+\-]?(?:nan(?::0x[0-9a-fA-F]+)?|infinity|inf|0x[0-9a-fA-F]+\.?[0-9a-fA-F]*p[+\/-]?\d+|\d+(?:\.\d*)?[eE][+\-]?\d*|\d+\.\d*|0x[0-9a-fA-F]+|\d+)/, token: "number" }, { regex: new RegExp(["align", "block", "br(_if|_table|_on_(cast|data|func|i31|null))?", "call(_indirect|_ref)?", "current_memory", "\\bdata\\b", "catch(_all)?", "delegate", "drop", "elem", "else", "end", "export", "\\bextern\\b", "\\bfunc\\b", "global(\\.(get|set))?", "if", "import", "local(\\.(get|set|tee))?", "loop", "module", "mut", "nop", "offset", "param", "result", "rethrow", "return(_call(_indirect|_ref)?)?", "select", "start", "table(\\.(size|get|set|size|grow|fill|init|copy))?", "then", "throw", "try", "type", "unreachable", "unwind", "i(32|64)\\.(store(8|16)|(load(8|16)_[su]))", "i64\\.(load32_[su]|store32)", "[fi](32|64)\\.(const|load|store)", "f(32|64)\\.(abs|add|ceil|copysign|div|eq|floor|[gl][et]|max|min|mul|nearest|neg?|sqrt|sub|trunc)", "i(32|64)\\.(a[dn]d|c[lt]z|(div|rem)_[su]|eqz?|[gl][te]_[su]|mul|ne|popcnt|rot[lr]|sh(l|r_[su])|sub|x?or)", "i64\\.extend_[su]_i32", "i32\\.wrap_i64", "i(32|64)\\.trunc_f(32|64)_[su]", "f(32|64)\\.convert_i(32|64)_[su]", "f64\\.promote_f32", "f32\\.demote_f64", "f32\\.reinterpret_i32", "i32\\.reinterpret_f32", "f64\\.reinterpret_i64", "i64\\.reinterpret_f64", "memory(\\.((atomic\\.(notify|wait(32|64)))|grow|size))?", "i64.atomic\\.(load32_u|store32|rmw32\\.(a[dn]d|sub|x?or|(cmp)?xchg)_u)", "i(32|64)\\.atomic\\.(load((8|16)_u)?|store(8|16)?|rmw(\\.(a[dn]d|sub|x?or|(cmp)?xchg)|(8|16)\\.(a[dn]d|sub|x?or|(cmp)?xchg)_u))", "v128\\.load(8x8|16x4|32x2)_[su]", "v128\\.load(8|16|32|64)_splat", "v128\\.(load|store)(8|16|32|64)_lane", "v128\\.load(32|64)_zero", "v128.(load|store|const|not|andnot|and|or|xor|bitselect|any_true)", "i(8x16|16x8)\\.(extract_lane_[su]|(add|sub)_sat_[su]|avgr_u)", "i(8x16|16x8|32x4|64x2)\\.(neg|add|sub|abs|shl|shr_[su]|all_true|bitmask|eq|ne|[lg][te]_s)", "(i(8x16|16x8|32x4|64x2)|f(32x4|64x2)).(splat|replace_lane)", "i(8x16|16x8|32x4)\\.(([lg][te]_u)|((min|max)_[su]))", "f(32x4|64x2)\\.(neg|add|sub|abs|nearest|eq|ne|[lg][te]|sqrt|mul|div|min|max|ceil|floor|trunc)", "[fi](32x4|64x2)\\.extract_lane", "i8x16\\.(shuffle|swizzle|popcnt|narrow_i16x8_[su])", "i16x8\\.(narrow_i32x4_[su]|mul|extadd_pairwise_i8x16_[su]|q15mulr_sat_s)", "i16x8\\.(extend|extmul)_(low|high)_i8x16_[su]", "i32x4\\.(mul|dot_i16x8_s|trunc_sat_f64x2_[su]_zero)", "i32x4\\.((extend|extmul)_(low|high)_i16x8_|trunc_sat_f32x4_|extadd_pairwise_i16x8_)[su]", "i64x2\\.(mul|(extend|extmul)_(low|high)_i32x4_[su])", "f32x4\\.(convert_i32x4_[su]|demote_f64x2_zero)", "f64x2\\.(promote_low_f32x4|convert_low_i32x4_[su])", "\\bany\\b", "array\\.len", "(array|struct)(\\.(new_(default_)?with_rtt|get(_[su])?|set))?", "\\beq\\b", "field", "i31\\.(new|get_[su])", "\\bnull\\b", "ref(\\.(([ai]s_(data|func|i31))|cast|eq|func|(is_|as_non_)?null|test))?", "rtt(\\.(canon|sub))?"].join("|")), token: "keyword" }, { regex: /\b((any|data|eq|extern|i31|func)ref|[fi](32|64)|i(8|16))\b/, token: "atom" }, { regex: /\$([a-zA-Z0-9_`\+\-\*\/\\\^~=<>!\?@#$%&|:\.]+)/, token: "variable-2" }, { regex: /"(?:[^"\\\x00-\x1f\x7f]|\\[nt\\'"]|\\[0-9a-fA-F][0-9a-fA-F])*"/, token: "string" }, { regex: /\(;.*?/, token: "comment", next: "comment" }, { regex: /;;.*$/, token: "comment" }, { regex: /\(/, indent: !0 }, { regex: /\)/, dedent: !0 }], comment: [{ regex: /.*?;\)/, token: "comment", next: "start" }, { regex: /.*/, token: "comment" }], meta: { dontIndentStates: ["comment"] } }), e.defineMIME("text/webassembly", "wast") });