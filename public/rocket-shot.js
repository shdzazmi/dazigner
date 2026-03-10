(function () {
    "use strict";
    var De, S, An, DA, en, tn, rn, nn, Mt, Gt, Vt, ce = {}, sn = [], $i = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Oe = Array.isArray;
    function QA(e, A) {
        for (var t in A)
            e[t] = A[t];
        return e
    }
    function Nt(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }
    function ji(e, A, t) {
        var r, n, s, i = {};
        for (s in A)
            s == "key" ? r = A[s] : s == "ref" ? n = A[s] : i[s] = A[s];
        if (arguments.length > 2 && (i.children = arguments.length > 3 ? De.call(arguments, 2) : t),
            typeof e == "function" && e.defaultProps != null)
            for (s in e.defaultProps)
                i[s] === void 0 && (i[s] = e.defaultProps[s]);
        return Re(e, i, r, n, null)
    }
    function Re(e, A, t, r, n) {
        var s = {
            type: e,
            props: A,
            key: t,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __c: null,
            constructor: void 0,
            __v: n ?? ++An,
            __i: -1,
            __u: 0
        };
        return n == null && S.vnode != null && S.vnode(s),
            s
    }
    function WA(e) {
        return e.children
    }
    function Me(e, A) {
        this.props = e,
            this.context = A
    }
    function YA(e, A) {
        if (A == null)
            return e.__ ? YA(e.__, e.__i + 1) : null;
        for (var t; A < e.__k.length; A++)
            if ((t = e.__k[A]) != null && t.__e != null)
                return t.__e;
        return typeof e.type == "function" ? YA(e) : null
    }
    function on(e) {
        var A, t;
        if ((e = e.__) != null && e.__c != null) {
            for (e.__e = e.__c.base = null,
                A = 0; A < e.__k.length; A++)
                if ((t = e.__k[A]) != null && t.__e != null) {
                    e.__e = e.__c.base = t.__e;
                    break
                }
            return on(e)
        }
    }
    function an(e) {
        (!e.__d && (e.__d = !0) && DA.push(e) && !Ge.__r++ || en != S.debounceRendering) && ((en = S.debounceRendering) || tn)(Ge)
    }
    function Ge() {
        for (var e, A, t, r, n, s, i, o = 1; DA.length;)
            DA.length > o && DA.sort(rn),
                e = DA.shift(),
                o = DA.length,
                e.__d && (t = void 0,
                    r = void 0,
                    n = (r = (A = e).__v).__e,
                    s = [],
                    i = [],
                    A.__P && ((t = QA({}, r)).__v = r.__v + 1,
                        S.vnode && S.vnode(t),
                        kt(A.__P, t, r, A.__n, A.__P.namespaceURI, 32 & r.__u ? [n] : null, s, n ?? YA(r), !!(32 & r.__u), i),
                        t.__v = r.__v,
                        t.__.__k[t.__i] = t,
                        gn(s, t, i),
                        r.__e = r.__ = null,
                        t.__e != n && on(t)));
        Ge.__r = 0
    }
    function Bn(e, A, t, r, n, s, i, o, a, B, l) {
        var c, u, g, f, Q, F, w, h = r && r.__k || sn, H = A.length;
        for (a = zi(t, A, h, a, H),
            c = 0; c < H; c++)
            (g = t.__k[c]) != null && (u = g.__i == -1 ? ce : h[g.__i] || ce,
                g.__i = c,
                F = kt(e, g, u, n, s, i, o, a, B, l),
                f = g.__e,
                g.ref && u.ref != g.ref && (u.ref && Xt(u.ref, null, g),
                    l.push(g.ref, g.__c || f, g)),
                Q == null && f != null && (Q = f),
                (w = !!(4 & g.__u)) || u.__k === g.__k ? a = cn(g, a, e, w) : typeof g.type == "function" && F !== void 0 ? a = F : f && (a = f.nextSibling),
                g.__u &= -7);
        return t.__e = Q,
            a
    }
    function zi(e, A, t, r, n) {
        var s, i, o, a, B, l = t.length, c = l, u = 0;
        for (e.__k = new Array(n),
            s = 0; s < n; s++)
            (i = A[s]) != null && typeof i != "boolean" && typeof i != "function" ? (typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? i = e.__k[s] = Re(null, i, null, null, null) : Oe(i) ? i = e.__k[s] = Re(WA, {
                children: i
            }, null, null, null) : i.constructor == null && i.__b > 0 ? i = e.__k[s] = Re(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : e.__k[s] = i,
                a = s + u,
                i.__ = e,
                i.__b = e.__b + 1,
                (B = i.__i = Ao(i, t, a, c)) != -1 && (c--,
                    (o = t[B]) && (o.__u |= 2)),
                o == null || o.__v == null ? (B == -1 && (n > l ? u-- : n < l && u++),
                    typeof i.type != "function" && (i.__u |= 4)) : B != a && (B == a - 1 ? u-- : B == a + 1 ? u++ : (B > a ? u-- : u++,
                        i.__u |= 4))) : e.__k[s] = null;
        if (c)
            for (s = 0; s < l; s++)
                (o = t[s]) != null && (2 & o.__u) == 0 && (o.__e == r && (r = YA(o)),
                    wn(o, o));
        return r
    }
    function cn(e, A, t, r) {
        var n, s;
        if (typeof e.type == "function") {
            for (n = e.__k,
                s = 0; n && s < n.length; s++)
                n[s] && (n[s].__ = e,
                    A = cn(n[s], A, t, r));
            return A
        }
        e.__e != A && (r && (A && e.type && !A.parentNode && (A = YA(e)),
            t.insertBefore(e.__e, A || null)),
            A = e.__e);
        do
            A = A && A.nextSibling;
        while (A != null && A.nodeType == 8);
        return A
    }
    function Ao(e, A, t, r) {
        var n, s, i, o = e.key, a = e.type, B = A[t], l = B != null && (2 & B.__u) == 0;
        if (B === null && o == null || l && o == B.key && a == B.type)
            return t;
        if (r > (l ? 1 : 0)) {
            for (n = t - 1,
                s = t + 1; n >= 0 || s < A.length;)
                if ((B = A[i = n >= 0 ? n-- : s++]) != null && (2 & B.__u) == 0 && o == B.key && a == B.type)
                    return i
        }
        return -1
    }
    function ln(e, A, t) {
        A[0] == "-" ? e.setProperty(A, t ?? "") : e[A] = t == null ? "" : typeof t != "number" || $i.test(A) ? t : t + "px"
    }
    function Ve(e, A, t, r, n) {
        var s, i;
        A: if (A == "style")
            if (typeof t == "string")
                e.style.cssText = t;
            else {
                if (typeof r == "string" && (e.style.cssText = r = ""),
                    r)
                    for (A in r)
                        t && A in t || ln(e.style, A, "");
                if (t)
                    for (A in t)
                        r && t[A] == r[A] || ln(e.style, A, t[A])
            }
        else if (A[0] == "o" && A[1] == "n")
            s = A != (A = A.replace(nn, "$1")),
                i = A.toLowerCase(),
                A = i in e || A == "onFocusOut" || A == "onFocusIn" ? i.slice(2) : A.slice(2),
                e.l || (e.l = {}),
                e.l[A + s] = t,
                t ? r ? t.u = r.u : (t.u = Mt,
                    e.addEventListener(A, s ? Vt : Gt, s)) : e.removeEventListener(A, s ? Vt : Gt, s);
        else {
            if (n == "http://www.w3.org/2000/svg")
                A = A.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (A != "width" && A != "height" && A != "href" && A != "list" && A != "form" && A != "tabIndex" && A != "download" && A != "rowSpan" && A != "colSpan" && A != "role" && A != "popover" && A in e)
                try {
                    e[A] = t ?? "";
                    break A
                } catch { }
            typeof t == "function" || (t == null || t === !1 && A[4] != "-" ? e.removeAttribute(A) : e.setAttribute(A, A == "popover" && t == 1 ? "" : t))
        }
    }
    function un(e) {
        return function (A) {
            if (this.l) {
                var t = this.l[A.type + e];
                if (A.t == null)
                    A.t = Mt++;
                else if (A.t < t.u)
                    return;
                return t(S.event ? S.event(A) : A)
            }
        }
    }
    function kt(e, A, t, r, n, s, i, o, a, B) {
        var l, c, u, g, f, Q, F, w, h, H, E, p, C, y, v, m, O, T = A.type;
        if (A.constructor != null)
            return null;
        128 & t.__u && (a = !!(32 & t.__u),
            s = [o = A.__e = t.__e]),
            (l = S.__b) && l(A);
        A: if (typeof T == "function")
            try {
                if (w = A.props,
                    h = "prototype" in T && T.prototype.render,
                    H = (l = T.contextType) && r[l.__c],
                    E = l ? H ? H.props.value : l.__ : r,
                    t.__c ? F = (c = A.__c = t.__c).__ = c.__E : (h ? A.__c = c = new T(w, E) : (A.__c = c = new Me(w, E),
                        c.constructor = T,
                        c.render = to),
                        H && H.sub(c),
                        c.state || (c.state = {}),
                        c.__n = r,
                        u = c.__d = !0,
                        c.__h = [],
                        c._sb = []),
                    h && c.__s == null && (c.__s = c.state),
                    h && T.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = QA({}, c.__s)),
                        QA(c.__s, T.getDerivedStateFromProps(w, c.__s))),
                    g = c.props,
                    f = c.state,
                    c.__v = A,
                    u)
                    h && T.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(),
                        h && c.componentDidMount != null && c.__h.push(c.componentDidMount);
                else {
                    if (h && T.getDerivedStateFromProps == null && w !== g && c.componentWillReceiveProps != null && c.componentWillReceiveProps(w, E),
                        A.__v == t.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(w, c.__s, E) === !1) {
                        for (A.__v != t.__v && (c.props = w,
                            c.state = c.__s,
                            c.__d = !1),
                            A.__e = t.__e,
                            A.__k = t.__k,
                            A.__k.some(function (k) {
                                k && (k.__ = A)
                            }),
                            p = 0; p < c._sb.length; p++)
                            c.__h.push(c._sb[p]);
                        c._sb = [],
                            c.__h.length && i.push(c);
                        break A
                    }
                    c.componentWillUpdate != null && c.componentWillUpdate(w, c.__s, E),
                        h && c.componentDidUpdate != null && c.__h.push(function () {
                            c.componentDidUpdate(g, f, Q)
                        })
                }
                if (c.context = E,
                    c.props = w,
                    c.__P = e,
                    c.__e = !1,
                    C = S.__r,
                    y = 0,
                    h) {
                    for (c.state = c.__s,
                        c.__d = !1,
                        C && C(A),
                        l = c.render(c.props, c.state, c.context),
                        v = 0; v < c._sb.length; v++)
                        c.__h.push(c._sb[v]);
                    c._sb = []
                } else
                    do
                        c.__d = !1,
                            C && C(A),
                            l = c.render(c.props, c.state, c.context),
                            c.state = c.__s;
                    while (c.__d && ++y < 25);
                c.state = c.__s,
                    c.getChildContext != null && (r = QA(QA({}, r), c.getChildContext())),
                    h && !u && c.getSnapshotBeforeUpdate != null && (Q = c.getSnapshotBeforeUpdate(g, f)),
                    m = l,
                    l != null && l.type === WA && l.key == null && (m = fn(l.props.children)),
                    o = Bn(e, Oe(m) ? m : [m], A, t, r, n, s, i, o, a, B),
                    c.base = A.__e,
                    A.__u &= -161,
                    c.__h.length && i.push(c),
                    F && (c.__E = c.__ = null)
            } catch (k) {
                if (A.__v = null,
                    a || s != null)
                    if (k.then) {
                        for (A.__u |= a ? 160 : 128; o && o.nodeType == 8 && o.nextSibling;)
                            o = o.nextSibling;
                        s[s.indexOf(o)] = null,
                            A.__e = o
                    } else {
                        for (O = s.length; O--;)
                            Nt(s[O]);
                        Pt(A)
                    }
                else
                    A.__e = t.__e,
                        A.__k = t.__k,
                        k.then || Pt(A);
                S.__e(k, A, t)
            }
        else
            s == null && A.__v == t.__v ? (A.__k = t.__k,
                A.__e = t.__e) : o = A.__e = eo(t.__e, A, t, r, n, s, i, a, B);
        return (l = S.diffed) && l(A),
            128 & A.__u ? void 0 : o
    }
    function Pt(e) {
        e && e.__c && (e.__c.__e = !0),
            e && e.__k && e.__k.forEach(Pt)
    }
    function gn(e, A, t) {
        for (var r = 0; r < t.length; r++)
            Xt(t[r], t[++r], t[++r]);
        S.__c && S.__c(A, e),
            e.some(function (n) {
                try {
                    e = n.__h,
                        n.__h = [],
                        e.some(function (s) {
                            s.call(n)
                        })
                } catch (s) {
                    S.__e(s, n.__v)
                }
            })
    }
    function fn(e) {
        return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Oe(e) ? e.map(fn) : QA({}, e)
    }
    function eo(e, A, t, r, n, s, i, o, a) {
        var B, l, c, u, g, f, Q, F = t.props || ce, w = A.props, h = A.type;
        if (h == "svg" ? n = "http://www.w3.org/2000/svg" : h == "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"),
            s != null) {
            for (B = 0; B < s.length; B++)
                if ((g = s[B]) && "setAttribute" in g == !!h && (h ? g.localName == h : g.nodeType == 3)) {
                    e = g,
                        s[B] = null;
                    break
                }
        }
        if (e == null) {
            if (h == null)
                return document.createTextNode(w);
            e = document.createElementNS(n, h, w.is && w),
                o && (S.__m && S.__m(A, s),
                    o = !1),
                s = null
        }
        if (h == null)
            F === w || o && e.data == w || (e.data = w);
        else {
            if (s = s && De.call(e.childNodes),
                !o && s != null)
                for (F = {},
                    B = 0; B < e.attributes.length; B++)
                    F[(g = e.attributes[B]).name] = g.value;
            for (B in F)
                if (g = F[B],
                    B != "children") {
                    if (B == "dangerouslySetInnerHTML")
                        c = g;
                    else if (!(B in w)) {
                        if (B == "value" && "defaultValue" in w || B == "checked" && "defaultChecked" in w)
                            continue;
                        Ve(e, B, null, g, n)
                    }
                }
            for (B in w)
                g = w[B],
                    B == "children" ? u = g : B == "dangerouslySetInnerHTML" ? l = g : B == "value" ? f = g : B == "checked" ? Q = g : o && typeof g != "function" || F[B] === g || Ve(e, B, g, F[B], n);
            if (l)
                o || c && (l.__html == c.__html || l.__html == e.innerHTML) || (e.innerHTML = l.__html),
                    A.__k = [];
            else if (c && (e.innerHTML = ""),
                Bn(A.type == "template" ? e.content : e, Oe(u) ? u : [u], A, t, r, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, s, i, s ? s[0] : t.__k && YA(t, 0), o, a),
                s != null)
                for (B = s.length; B--;)
                    Nt(s[B]);
            o || (B = "value",
                h == "progress" && f == null ? e.removeAttribute("value") : f != null && (f !== e[B] || h == "progress" && !f || h == "option" && f != F[B]) && Ve(e, B, f, F[B], n),
                B = "checked",
                Q != null && Q != e[B] && Ve(e, B, Q, F[B], n))
        }
        return e
    }
    function Xt(e, A, t) {
        try {
            if (typeof e == "function") {
                var r = typeof e.__u == "function";
                r && e.__u(),
                    r && A == null || (e.__u = e(A))
            } else
                e.current = A
        } catch (n) {
            S.__e(n, t)
        }
    }
    function wn(e, A, t) {
        var r, n;
        if (S.unmount && S.unmount(e),
            (r = e.ref) && (r.current && r.current != e.__e || Xt(r, null, A)),
            (r = e.__c) != null) {
            if (r.componentWillUnmount)
                try {
                    r.componentWillUnmount()
                } catch (s) {
                    S.__e(s, A)
                }
            r.base = r.__P = null
        }
        if (r = e.__k)
            for (n = 0; n < r.length; n++)
                r[n] && wn(r[n], A, t || typeof e.type != "function");
        t || Nt(e.__e),
            e.__c = e.__ = e.__e = void 0
    }
    function to(e, A, t) {
        return this.constructor(e, t)
    }
    function ro(e, A, t) {
        var r, n, s, i;
        A == document && (A = document.documentElement),
            S.__ && S.__(e, A),
            n = (r = !1) ? null : A.__k,
            s = [],
            i = [],
            kt(A, e = A.__k = ji(WA, null, [e]), n || ce, ce, A.namespaceURI, n ? null : A.firstChild ? De.call(A.childNodes) : null, s, n ? n.__e : A.firstChild, r, i),
            gn(s, e, i)
    }
    De = sn.slice,
        S = {
            __e: function (e, A, t, r) {
                for (var n, s, i; A = A.__;)
                    if ((n = A.__c) && !n.__)
                        try {
                            if ((s = n.constructor) && s.getDerivedStateFromError != null && (n.setState(s.getDerivedStateFromError(e)),
                                i = n.__d),
                                n.componentDidCatch != null && (n.componentDidCatch(e, r || {}),
                                    i = n.__d),
                                i)
                                return n.__E = n
                        } catch (o) {
                            e = o
                        }
                throw e
            }
        },
        An = 0,
        Me.prototype.setState = function (e, A) {
            var t;
            t = this.__s != null && this.__s != this.state ? this.__s : this.__s = QA({}, this.state),
                typeof e == "function" && (e = e(QA({}, t), this.props)),
                e && QA(t, e),
                e != null && this.__v && (A && this._sb.push(A),
                    an(this))
        }
        ,
        Me.prototype.forceUpdate = function (e) {
            this.__v && (this.__e = !0,
                e && this.__h.push(e),
                an(this))
        }
        ,
        Me.prototype.render = WA,
        DA = [],
        tn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
        rn = function (e, A) {
            return e.__v.__b - A.__v.__b
        }
        ,
        Ge.__r = 0,
        nn = /(PointerCapture)$|Capture$/i,
        Mt = 0,
        Gt = un(!1),
        Vt = un(!0);
    var no = 0;
    function I(e, A, t, r, n, s) {
        A || (A = {});
        var i, o, a = A;
        if ("ref" in a)
            for (o in a = {},
                A)
                o == "ref" ? i = A[o] : a[o] = A[o];
        var B = {
            type: e,
            props: a,
            key: t,
            ref: i,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __c: null,
            constructor: void 0,
            __v: --no,
            __i: -1,
            __u: 0,
            __source: n,
            __self: s
        };
        if (typeof e == "function" && (i = e.defaultProps))
            for (o in i)
                a[o] === void 0 && (a[o] = i[o]);
        return S.vnode && S.vnode(B),
            B
    }
    var le, R, Jt, Qn, ue = 0, hn = [], V = S, Cn = V.__b, Un = V.__r, Fn = V.diffed, dn = V.__c, pn = V.unmount, En = V.__;
    function Wt(e, A) {
        V.__h && V.__h(R, e, ue || A),
            ue = 0;
        var t = R.__H || (R.__H = {
            __: [],
            __h: []
        });
        return e >= t.__.length && t.__.push({}),
            t.__[e]
    }
    function OA(e) {
        return ue = 1,
            so(yn, e)
    }
    function so(e, A, t) {
        var r = Wt(le++, 2);
        if (r.t = e,
            !r.__c && (r.__ = [yn(void 0, A), function (o) {
                var a = r.__N ? r.__N[0] : r.__[0]
                    , B = r.t(a, o);
                a !== B && (r.__N = [B, r.__[1]],
                    r.__c.setState({}))
            }
            ],
                r.__c = R,
                !R.__f)) {
            var n = function (o, a, B) {
                if (!r.__c.__H)
                    return !0;
                var l = r.__c.__H.__.filter(function (u) {
                    return !!u.__c
                });
                if (l.every(function (u) {
                    return !u.__N
                }))
                    return !s || s.call(this, o, a, B);
                var c = r.__c.props !== o;
                return l.forEach(function (u) {
                    if (u.__N) {
                        var g = u.__[0];
                        u.__ = u.__N,
                            u.__N = void 0,
                            g !== u.__[0] && (c = !0)
                    }
                }),
                    s && s.call(this, o, a, B) || c
            };
            R.__f = !0;
            var s = R.shouldComponentUpdate
                , i = R.componentWillUpdate;
            R.componentWillUpdate = function (o, a, B) {
                if (this.__e) {
                    var l = s;
                    s = void 0,
                        n(o, a, B),
                        s = l
                }
                i && i.call(this, o, a, B)
            }
                ,
                R.shouldComponentUpdate = n
        }
        return r.__N || r.__
    }
    function EA(e, A) {
        var t = Wt(le++, 3);
        !V.__s && vn(t.__H, A) && (t.__ = e,
            t.u = A,
            R.__H.__h.push(t))
    }
    function io(e) {
        return ue = 5,
            mn(function () {
                return {
                    current: e
                }
            }, [])
    }
    function mn(e, A) {
        var t = Wt(le++, 7);
        return vn(t.__H, A) && (t.__ = e(),
            t.__H = A,
            t.__h = e),
            t.__
    }
    function Yt(e, A) {
        return ue = 8,
            mn(function () {
                return e
            }, A)
    }
    function oo() {
        for (var e; e = hn.shift();)
            if (e.__P && e.__H)
                try {
                    e.__H.__h.forEach(Ne),
                        e.__H.__h.forEach(Zt),
                        e.__H.__h = []
                } catch (A) {
                    e.__H.__h = [],
                        V.__e(A, e.__v)
                }
    }
    V.__b = function (e) {
        R = null,
            Cn && Cn(e)
    }
        ,
        V.__ = function (e, A) {
            e && A.__k && A.__k.__m && (e.__m = A.__k.__m),
                En && En(e, A)
        }
        ,
        V.__r = function (e) {
            Un && Un(e),
                le = 0;
            var A = (R = e.__c).__H;
            A && (Jt === R ? (A.__h = [],
                R.__h = [],
                A.__.forEach(function (t) {
                    t.__N && (t.__ = t.__N),
                        t.u = t.__N = void 0
                })) : (A.__h.forEach(Ne),
                    A.__h.forEach(Zt),
                    A.__h = [],
                    le = 0)),
                Jt = R
        }
        ,
        V.diffed = function (e) {
            Fn && Fn(e);
            var A = e.__c;
            A && A.__H && (A.__H.__h.length && (hn.push(A) !== 1 && Qn === V.requestAnimationFrame || ((Qn = V.requestAnimationFrame) || ao)(oo)),
                A.__H.__.forEach(function (t) {
                    t.u && (t.__H = t.u),
                        t.u = void 0
                })),
                Jt = R = null
        }
        ,
        V.__c = function (e, A) {
            A.some(function (t) {
                try {
                    t.__h.forEach(Ne),
                        t.__h = t.__h.filter(function (r) {
                            return !r.__ || Zt(r)
                        })
                } catch (r) {
                    A.some(function (n) {
                        n.__h && (n.__h = [])
                    }),
                        A = [],
                        V.__e(r, t.__v)
                }
            }),
                dn && dn(e, A)
        }
        ,
        V.unmount = function (e) {
            pn && pn(e);
            var A, t = e.__c;
            t && t.__H && (t.__H.__.forEach(function (r) {
                try {
                    Ne(r)
                } catch (n) {
                    A = n
                }
            }),
                t.__H = void 0,
                A && V.__e(A, t.__v))
        }
        ;
    var Hn = typeof requestAnimationFrame == "function";
    function ao(e) {
        var A, t = function () {
            clearTimeout(r),
                Hn && cancelAnimationFrame(A),
                setTimeout(e)
        }, r = setTimeout(t, 35);
        Hn && (A = requestAnimationFrame(t))
    }
    function Ne(e) {
        var A = R
            , t = e.__c;
        typeof t == "function" && (e.__c = void 0,
            t()),
            R = A
    }
    function Zt(e) {
        var A = R;
        e.__c = e.__(),
            R = A
    }
    function vn(e, A) {
        return !e || e.length !== A.length || A.some(function (t, r) {
            return t !== e[r]
        })
    }
    function yn(e, A) {
        return typeof A == "function" ? A(e) : A
    }
    const In = {
        overlay: "_overlay_sacx3_1",
        selection: "_selection_sacx3_14"
    };
    function Bo({ onSelectionComplete: e, onCancel: A }) {
        const [t, r] = OA(!1)
            , [n, s] = OA(null)
            , [i, o] = OA(null)
            , a = io(null)
            , [B, l] = OA(0)
            , c = (g, f) => {
                const Q = Math.min(g.x, f.x)
                    , F = Math.min(g.y, f.y)
                    , w = Math.abs(f.x - g.x)
                    , h = Math.abs(f.y - g.y);
                return {
                    x: Q,
                    y: F,
                    width: w,
                    height: h
                }
            }
            ;
        EA(() => {
            const g = () => {
                const f = document.body
                    , Q = document.documentElement
                    , F = Math.max(f.scrollHeight, f.offsetHeight, Q.clientHeight, Q.scrollHeight, Q.offsetHeight);
                l(F)
            }
                ;
            return g(),
                window.addEventListener("resize", g),
                () => window.removeEventListener("resize", g)
        }
            , []),
            EA(() => {
                const g = w => {
                    w.target === a.current && (r(!0),
                        s({
                            x: w.clientX + window.scrollX,
                            y: w.clientY + window.scrollY
                        }),
                        o({
                            x: w.clientX + window.scrollX,
                            y: w.clientY + window.scrollY
                        }))
                }
                    , f = w => {
                        t && n && o({
                            x: w.clientX + window.scrollX,
                            y: w.clientY + window.scrollY
                        })
                    }
                    , Q = () => {
                        if (t && n && i) {
                            const w = c(n, i);
                            w.width > 10 && w.height > 10 && e(w),
                                r(!1),
                                s(null),
                                o(null)
                        }
                    }
                    , F = w => {
                        w.key === "Escape" && A()
                    }
                    ;
                return document.addEventListener("mousedown", g),
                    document.addEventListener("mousemove", f),
                    document.addEventListener("mouseup", Q),
                    document.addEventListener("keydown", F),
                    () => {
                        document.removeEventListener("mousedown", g),
                            document.removeEventListener("mousemove", f),
                            document.removeEventListener("mouseup", Q),
                            document.removeEventListener("keydown", F)
                    }
            }
                , [t, n, i, e, A]);
        const u = () => {
            if (!n || !i)
                return {};
            const g = c(n, i);
            return {
                left: `${g.x}px`,
                top: `${g.y}px`,
                width: `${g.width}px`,
                height: `${g.height}px`
            }
        }
            ;
        return I("div", {
            className: `${In.overlay} rocket-shot-overlay screenshot-overlay`,
            ref: a,
            style: {
                height: B > 0 ? `${B}px` : "100vh"
            },
            children: t && n && i && I("div", {
                className: In.selection,
                style: u()
            })
        })
    }
    const P = {
        toolbar: "_toolbar_1lrbr_1",
        animating: "_animating_1lrbr_14",
        toolbarContent: "_toolbarContent_1lrbr_20",
        toolbarButton: "_toolbarButton_1lrbr_34",
        icon: "_icon_1lrbr_78",
        label: "_label_1lrbr_87",
        separator: "_separator_1lrbr_103",
        processing: "_processing_1lrbr_144",
        progressContent: "_progressContent_1lrbr_148",
        progressSpinner: "_progressSpinner_1lrbr_156",
        spinnerIcon: "_spinnerIcon_1lrbr_165",
        progressInfo: "_progressInfo_1lrbr_178",
        progressMessage: "_progressMessage_1lrbr_185",
        progressBar: "_progressBar_1lrbr_192",
        progressFill: "_progressFill_1lrbr_200",
        cancelButton: "_cancelButton_1lrbr_228"
    };
    function co({ isVisible: e, onCaptureMode: A, onClose: t, isProcessing: r = !1, progressMessage: n = "Processing...", onCancel: s }) {
        const [i, o] = OA(!1)
            , [a, B] = OA(0);
        EA(() => {
            if (e) {
                const u = setTimeout(() => o(!0), 10);
                return () => clearTimeout(u)
            } else
                o(!1)
        }
            , [e]),
            EA(() => {
                if (r) {
                    B(0);
                    const u = setInterval(() => {
                        B(g => g >= 90 ? g : g + Math.random() * 15)
                    }
                        , 200);
                    return () => {
                        clearInterval(u),
                            B(0)
                    }
                } else
                    B(0)
            }
                , [r]);
        const l = u => {
            A(u)
        }
            , c = Yt(u => {
                u.key === "Escape" && (r && s ? s() : t())
            }
                , [t, s, r]);
        return EA(() => {
            if (e)
                return document.addEventListener("keydown", c),
                    () => document.removeEventListener("keydown", c)
        }
            , [e, c]),
            !e || r ? null : I("div", {
                className: `${P.toolbar} ${i ? P.animating : ""} ${r ? P.processing : ""} rocket-shot-overlay`,
                children: I("div", {
                    className: P.toolbarContent,
                    children: r ? I("div", {
                        className: P.progressContent,
                        children: [I("div", {
                            className: P.progressSpinner,
                            children: I("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                className: P.spinnerIcon,
                                children: [I("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "10"
                                }), I("path", {
                                    d: "M8 12l2 2 4-4"
                                })]
                            })
                        }), I("div", {
                            className: P.progressInfo,
                            children: [I("span", {
                                className: P.progressMessage,
                                children: n
                            }), I("div", {
                                className: P.progressBar,
                                children: I("div", {
                                    className: P.progressFill,
                                    style: {
                                        width: `${Math.min(a, 100)}%`
                                    }
                                })
                            })]
                        }), s && I("button", {
                            className: P.cancelButton,
                            onClick: s,
                            title: "Cancel (ESC)",
                            children: I("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [I("line", {
                                    x1: "18",
                                    y1: "6",
                                    x2: "6",
                                    y2: "18"
                                }), I("line", {
                                    x1: "6",
                                    y1: "6",
                                    x2: "18",
                                    y2: "18"
                                })]
                            })
                        })]
                    }) : I(WA, {
                        children: [I("button", {
                            className: P.toolbarButton,
                            onClick: () => l("fullscreen"),
                            title: "Capture Full Screen (⌘⇧3)",
                            children: [I("div", {
                                className: P.icon,
                                children: I("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: [I("rect", {
                                        x: "2",
                                        y: "3",
                                        width: "20",
                                        height: "14",
                                        rx: "2",
                                        ry: "2"
                                    }), I("line", {
                                        x1: "8",
                                        y1: "21",
                                        x2: "16",
                                        y2: "21"
                                    }), I("line", {
                                        x1: "12",
                                        y1: "17",
                                        x2: "12",
                                        y2: "21"
                                    })]
                                })
                            }), I("span", {
                                className: P.label,
                                children: "Full Screen"
                            })]
                        }), I("div", {
                            className: P.separator
                        }), I("button", {
                            className: P.toolbarButton,
                            onClick: () => l("area"),
                            title: "Capture Selected Area (⌘⇧4)",
                            children: [I("div", {
                                className: P.icon,
                                children: I("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: [I("rect", {
                                        x: "9",
                                        y: "9",
                                        width: "13",
                                        height: "13",
                                        rx: "2",
                                        ry: "2"
                                    }), I("path", {
                                        d: "m5 15-3 3m0 0v-8m0 8h8"
                                    })]
                                })
                            }), I("span", {
                                className: P.label,
                                children: "Selected Area"
                            })]
                        })]
                    })
                })
            })
    }
    const q = {
        TOOLBAR_CLOSE: "toolbar-close",
        SCREENSHOT_UPLOAD: "screenshot-upload",
        BACKGROUND_SCREENSHOT: "background-screenshot",
        FULLSCREEN_CAPTURE: "fullscreen-capture",
        SCREENSHOT: "screenshot",
        SCREENSHOT_SILENT: "screenshot-silent",
        SCREENSHOT_FAILED: "screenshot-failed",
        SCREENSHOT_DROPPED: "screenshot-dropped",
        PROGRESS_SHOW: "screenshot-progress-show",
        PROGRESS_UPDATE: "screenshot-progress-update",
        PROGRESS_HIDE: "screenshot-progress-hide"
    }
        , bn = {
            FLUTTER_SCREENSHOT: "FLUTTER_SCREENSHOT",
            FLUTTER_SCREENSHOT_CAPTURED: "FLUTTER_SCREENSHOT_CAPTURED"
        };
    function lo(e, A) {
        if (e.match(/^[a-z]+:\/\//i))
            return e;
        if (e.match(/^\/\//))
            return window.location.protocol + e;
        if (e.match(/^[a-z]+:/i))
            return e;
        const t = document.implementation.createHTMLDocument()
            , r = t.createElement("base")
            , n = t.createElement("a");
        return t.head.appendChild(r),
            t.body.appendChild(n),
            A && (r.href = A),
            n.href = e,
            n.href
    }
    const uo = (() => {
        let e = 0;
        const A = () => `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4);
        return () => (e += 1,
            `u${A()}${e}`)
    }
    )();
    function mA(e) {
        const A = [];
        for (let t = 0, r = e.length; t < r; t++)
            A.push(e[t]);
        return A
    }
    let ZA = null;
    function _n(e = {}) {
        return ZA || (e.includeStyleProperties ? (ZA = e.includeStyleProperties,
            ZA) : (ZA = mA(window.getComputedStyle(document.documentElement)),
                ZA))
    }
    function ke(e, A) {
        const r = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(A);
        return r ? parseFloat(r.replace("px", "")) : 0
    }
    function go(e) {
        const A = ke(e, "border-left-width")
            , t = ke(e, "border-right-width");
        return e.clientWidth + A + t
    }
    function fo(e) {
        const A = ke(e, "border-top-width")
            , t = ke(e, "border-bottom-width");
        return e.clientHeight + A + t
    }
    function Ln(e, A = {}) {
        const t = A.width || go(e)
            , r = A.height || fo(e);
        return {
            width: t,
            height: r
        }
    }
    function wo() {
        let e, A;
        try {
            A = process
        } catch { }
        const t = A && A.env ? A.env.devicePixelRatio : null;
        return t && (e = parseInt(t, 10),
            Number.isNaN(e) && (e = 1)),
            e || window.devicePixelRatio || 1
    }
    const nA = 16384;
    function Qo(e) {
        (e.width > nA || e.height > nA) && (e.width > nA && e.height > nA ? e.width > e.height ? (e.height *= nA / e.width,
            e.width = nA) : (e.width *= nA / e.height,
                e.height = nA) : e.width > nA ? (e.height *= nA / e.width,
                    e.width = nA) : (e.width *= nA / e.height,
                        e.height = nA))
    }
    function Pe(e) {
        return new Promise((A, t) => {
            const r = new Image;
            r.onload = () => {
                r.decode().then(() => {
                    requestAnimationFrame(() => A(r))
                }
                )
            }
                ,
                r.onerror = t,
                r.crossOrigin = "anonymous",
                r.decoding = "async",
                r.src = e
        }
        )
    }
    async function ho(e) {
        return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(A => `data:image/svg+xml;charset=utf-8,${A}`)
    }
    async function Co(e, A, t) {
        const r = "http://www.w3.org/2000/svg"
            , n = document.createElementNS(r, "svg")
            , s = document.createElementNS(r, "foreignObject");
        return n.setAttribute("width", `${A}`),
            n.setAttribute("height", `${t}`),
            n.setAttribute("viewBox", `0 0 ${A} ${t}`),
            s.setAttribute("width", "100%"),
            s.setAttribute("height", "100%"),
            s.setAttribute("x", "0"),
            s.setAttribute("y", "0"),
            s.setAttribute("externalResourcesRequired", "true"),
            n.appendChild(s),
            s.appendChild(e),
            ho(n)
    }
    const AA = (e, A) => {
        if (e instanceof A)
            return !0;
        const t = Object.getPrototypeOf(e);
        return t === null ? !1 : t.constructor.name === A.name || AA(t, A)
    }
        ;
    function Uo(e) {
        const A = e.getPropertyValue("content");
        return `${e.cssText} content: '${A.replace(/'|"/g, "")}';`
    }
    function Fo(e, A) {
        return _n(A).map(t => {
            const r = e.getPropertyValue(t)
                , n = e.getPropertyPriority(t);
            return `${t}: ${r}${n ? " !important" : ""};`
        }
        ).join(" ")
    }
    function po(e, A, t, r) {
        const n = `.${e}:${A}`
            , s = t.cssText ? Uo(t) : Fo(t, r);
        return document.createTextNode(`${n}{${s}}`)
    }
    function Kn(e, A, t, r) {
        const n = window.getComputedStyle(e, t)
            , s = n.getPropertyValue("content");
        if (s === "" || s === "none")
            return;
        const i = uo();
        try {
            A.className = `${A.className} ${i}`
        } catch {
            return
        }
        const o = document.createElement("style");
        o.appendChild(po(i, t, n, r)),
            A.appendChild(o)
    }
    function Eo(e, A, t) {
        Kn(e, A, ":before", t),
            Kn(e, A, ":after", t)
    }
    const Sn = "application/font-woff"
        , xn = "image/jpeg"
        , mo = {
            woff: Sn,
            woff2: Sn,
            ttf: "application/font-truetype",
            eot: "application/vnd.ms-fontobject",
            png: "image/png",
            jpg: xn,
            jpeg: xn,
            gif: "image/gif",
            tiff: "image/tiff",
            svg: "image/svg+xml",
            webp: "image/webp"
        };
    function Ho(e) {
        const A = /\.([^./]*?)$/g.exec(e);
        return A ? A[1] : ""
    }
    function qt(e) {
        const A = Ho(e).toLowerCase();
        return mo[A] || ""
    }
    function vo(e) {
        return e.split(/,/)[1]
    }
    function $t(e) {
        return e.search(/^(data:)/) !== -1
    }
    function yo(e, A) {
        return `data:${A};base64,${e}`
    }
    async function Tn(e, A, t) {
        const r = await fetch(e, A);
        if (r.status === 404)
            throw new Error(`Resource "${r.url}" not found`);
        const n = await r.blob();
        return new Promise((s, i) => {
            const o = new FileReader;
            o.onerror = i,
                o.onloadend = () => {
                    try {
                        s(t({
                            res: r,
                            result: o.result
                        }))
                    } catch (a) {
                        i(a)
                    }
                }
                ,
                o.readAsDataURL(n)
        }
        )
    }
    const jt = {};
    function Io(e, A, t) {
        let r = e.replace(/\?.*/, "");
        return t && (r = e),
            /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")),
            A ? `[${A}]${r}` : r
    }
    async function zt(e, A, t) {
        const r = Io(e, A, t.includeQueryParams);
        if (jt[r] != null)
            return jt[r];
        t.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime());
        let n;
        try {
            const s = await Tn(e, t.fetchRequestInit, ({ res: i, result: o }) => (A || (A = i.headers.get("Content-Type") || ""),
                vo(o)));
            n = yo(s, A)
        } catch (s) {
            // n = t.imagePlaceholder || "";
            // let i = `Failed to fetch resource: ${e}`;
            // s && (i = typeof s == "string" ? s : s.message),
            // i && console.warn(i)
        }
        return jt[r] = n,
            n
    }
    async function bo(e) {
        const A = e.toDataURL();
        return A === "data:," ? e.cloneNode(!1) : Pe(A)
    }
    async function _o(e, A) {
        if (e.currentSrc) {
            const s = document.createElement("canvas")
                , i = s.getContext("2d");
            s.width = e.clientWidth,
                s.height = e.clientHeight,
                i?.drawImage(e, 0, 0, s.width, s.height);
            const o = s.toDataURL();
            return Pe(o)
        }
        const t = e.poster
            , r = qt(t)
            , n = await zt(t, r, A);
        return Pe(n)
    }
    async function Lo(e, A) {
        var t;
        try {
            if (!((t = e?.contentDocument) === null || t === void 0) && t.body)
                return await Xe(e.contentDocument.body, A, !0)
        } catch { }
        return e.cloneNode(!1)
    }
    async function Ko(e, A) {
        return AA(e, HTMLCanvasElement) ? bo(e) : AA(e, HTMLVideoElement) ? _o(e, A) : AA(e, HTMLIFrameElement) ? Lo(e, A) : e.cloneNode(Dn(e))
    }
    const So = e => e.tagName != null && e.tagName.toUpperCase() === "SLOT"
        , Dn = e => e.tagName != null && e.tagName.toUpperCase() === "SVG";
    async function xo(e, A, t) {
        var r, n;
        if (Dn(A))
            return A;
        let s = [];
        return So(e) && e.assignedNodes ? s = mA(e.assignedNodes()) : AA(e, HTMLIFrameElement) && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? s = mA(e.contentDocument.body.childNodes) : s = mA(((n = e.shadowRoot) !== null && n !== void 0 ? n : e).childNodes),
            s.length === 0 || AA(e, HTMLVideoElement) || await s.reduce((i, o) => i.then(() => Xe(o, t)).then(a => {
                a && A.appendChild(a)
            }
            ), Promise.resolve()),
            A
    }
    function To(e, A, t) {
        const r = A.style;
        if (!r)
            return;
        const n = window.getComputedStyle(e);
        n.cssText ? (r.cssText = n.cssText,
            r.transformOrigin = n.transformOrigin) : _n(t).forEach(s => {
                let i = n.getPropertyValue(s);
                s === "font-size" && i.endsWith("px") && (i = `${Math.floor(parseFloat(i.substring(0, i.length - 2))) - .1}px`),
                    AA(e, HTMLIFrameElement) && s === "display" && i === "inline" && (i = "block"),
                    s === "d" && A.getAttribute("d") && (i = `path(${A.getAttribute("d")})`),
                    r.setProperty(s, i, n.getPropertyPriority(s))
            }
            )
    }
    function Do(e, A) {
        AA(e, HTMLTextAreaElement) && (A.innerHTML = e.value),
            AA(e, HTMLInputElement) && A.setAttribute("value", e.value)
    }
    function Oo(e, A) {
        if (AA(e, HTMLSelectElement)) {
            const r = Array.from(A.children).find(n => e.value === n.getAttribute("value"));
            r && r.setAttribute("selected", "")
        }
    }
    function Ro(e, A, t) {
        return AA(A, Element) && (To(e, A, t),
            Eo(e, A, t),
            Do(e, A),
            Oo(e, A)),
            A
    }
    async function Mo(e, A) {
        const t = e.querySelectorAll ? e.querySelectorAll("use") : [];
        if (t.length === 0)
            return e;
        const r = {};
        for (let s = 0; s < t.length; s++) {
            const o = t[s].getAttribute("xlink:href");
            if (o) {
                const a = e.querySelector(o)
                    , B = document.querySelector(o);
                !a && B && !r[o] && (r[o] = await Xe(B, A, !0))
            }
        }
        const n = Object.values(r);
        if (n.length) {
            const s = "http://www.w3.org/1999/xhtml"
                , i = document.createElementNS(s, "svg");
            i.setAttribute("xmlns", s),
                i.style.position = "absolute",
                i.style.width = "0",
                i.style.height = "0",
                i.style.overflow = "hidden",
                i.style.display = "none";
            const o = document.createElementNS(s, "defs");
            i.appendChild(o);
            for (let a = 0; a < n.length; a++)
                o.appendChild(n[a]);
            e.appendChild(i)
        }
        return e
    }
    async function Xe(e, A, t) {
        return !t && A.filter && !A.filter(e) ? null : Promise.resolve(e).then(r => Ko(r, A)).then(r => xo(e, r, A)).then(r => Ro(e, r, A)).then(r => Mo(r, A))
    }
    const On = /url\((['"]?)([^'"]+?)\1\)/g
        , Go = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g
        , Vo = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
    function No(e) {
        const A = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
        return new RegExp(`(url\\(['"]?)(${A})(['"]?\\))`, "g")
    }
    function ko(e) {
        const A = [];
        return e.replace(On, (t, r, n) => (A.push(n),
            t)),
            A.filter(t => !$t(t))
    }
    async function Po(e, A, t, r, n) {
        try {
            const s = t ? lo(A, t) : A
                , i = qt(A);
            let o;
            return n || (o = await zt(s, i, r)),
                e.replace(No(A), `$1${o}$3`)
        } catch { }
        return e
    }
    function Xo(e, { preferredFontFormat: A }) {
        return A ? e.replace(Vo, t => {
            for (; ;) {
                const [r, , n] = Go.exec(t) || [];
                if (!n)
                    return "";
                if (n === A)
                    return `src: ${r};`
            }
        }
        ) : e
    }
    function Rn(e) {
        return e.search(On) !== -1
    }
    async function Mn(e, A, t) {
        if (!Rn(e))
            return e;
        const r = Xo(e, t);
        return ko(r).reduce((s, i) => s.then(o => Po(o, i, A, t)), Promise.resolve(r))
    }
    async function qA(e, A, t) {
        var r;
        const n = (r = A.style) === null || r === void 0 ? void 0 : r.getPropertyValue(e);
        if (n) {
            const s = await Mn(n, null, t);
            return A.style.setProperty(e, s, A.style.getPropertyPriority(e)),
                !0
        }
        return !1
    }
    async function Jo(e, A) {
        await qA("background", e, A) || await qA("background-image", e, A),
            await qA("mask", e, A) || await qA("-webkit-mask", e, A) || await qA("mask-image", e, A) || await qA("-webkit-mask-image", e, A)
    }
    async function Wo(e, A) {
        const t = AA(e, HTMLImageElement);
        if (!(t && !$t(e.src)) && !(AA(e, SVGImageElement) && !$t(e.href.baseVal)))
            return;
        const r = t ? e.src : e.href.baseVal
            , n = await zt(r, qt(r), A);
        await new Promise((s, i) => {
            e.onload = s,
                e.onerror = A.onImageErrorHandler ? (...a) => {
                    try {
                        s(A.onImageErrorHandler(...a))
                    } catch (B) {
                        i(B)
                    }
                }
                    : i;
            const o = e;
            o.decode && (o.decode = s),
                o.loading === "lazy" && (o.loading = "eager"),
                t ? (e.srcset = "",
                    e.src = n) : e.href.baseVal = n
        }
        )
    }
    async function Yo(e, A) {
        const r = mA(e.childNodes).map(n => Gn(n, A));
        await Promise.all(r).then(() => e)
    }
    async function Gn(e, A) {
        AA(e, Element) && (await Jo(e, A),
            await Wo(e, A),
            await Yo(e, A))
    }
    function Zo(e, A) {
        const { style: t } = e;
        A.backgroundColor && (t.backgroundColor = A.backgroundColor),
            A.width && (t.width = `${A.width}px`),
            A.height && (t.height = `${A.height}px`);
        const r = A.style;
        return r != null && Object.keys(r).forEach(n => {
            t[n] = r[n]
        }
        ),
            e
    }
    const Vn = {};
    async function Nn(e) {
        let A = Vn[e];
        if (A != null)
            return A;
        const r = await (await fetch(e)).text();
        return A = {
            url: e,
            cssText: r
        },
            Vn[e] = A,
            A
    }
    async function kn(e, A) {
        let t = e.cssText;
        const r = /url\(["']?([^"')]+)["']?\)/g
            , s = (t.match(/url\([^)]+\)/g) || []).map(async i => {
                let o = i.replace(r, "$1");
                return o.startsWith("https://") || (o = new URL(o, e.url).href),
                    Tn(o, A.fetchRequestInit, ({ result: a }) => (t = t.replace(i, `url(${a})`),
                        [i, a]))
            }
            );
        return Promise.all(s).then(() => t)
    }
    function Pn(e) {
        if (e == null)
            return [];
        const A = []
            , t = /(\/\*[\s\S]*?\*\/)/gi;
        let r = e.replace(t, "");
        const n = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
        for (; ;) {
            const a = n.exec(r);
            if (a === null)
                break;
            A.push(a[0])
        }
        r = r.replace(n, "");
        const s = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi
            , i = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})"
            , o = new RegExp(i, "gi");
        for (; ;) {
            let a = s.exec(r);
            if (a === null) {
                if (a = o.exec(r),
                    a === null)
                    break;
                s.lastIndex = o.lastIndex
            } else
                o.lastIndex = s.lastIndex;
            A.push(a[0])
        }
        return A
    }
    async function qo(e, A) {
        const t = []
            , r = [];
        return e.forEach(n => {
            if ("cssRules" in n)
                try {
                    mA(n.cssRules || []).forEach((s, i) => {
                        if (s.type === CSSRule.IMPORT_RULE) {
                            let o = i + 1;
                            const a = s.href
                                , B = Nn(a).then(l => kn(l, A)).then(l => Pn(l).forEach(c => {
                                    try {
                                        n.insertRule(c, c.startsWith("@import") ? o += 1 : n.cssRules.length)
                                    } catch (u) {
                                        // console.error("Error inserting rule from remote css", {
                                        //     rule: c,
                                        //     error: u
                                        // })
                                    }
                                }
                                )).catch(l => {
                                    // console.error("Error loading remote css", l.toString())
                                }
                                );
                            r.push(B)
                        }
                    }
                    )
                } catch (s) {
                    // const i = e.find(o => o.href == null) || document.styleSheets[0];
                    // n.href != null && r.push(Nn(n.href).then(o => kn(o, A)).then(o => Pn(o).forEach(a => {
                    //     i.insertRule(a, i.cssRules.length)
                    // }
                    // )).catch(o => {
                    //     // console.error("Error loading remote stylesheet", o)
                    // }
                    // )),
                    // console.error("Error inlining remote css file", s)
                }
        }
        ),
            Promise.all(r).then(() => (e.forEach(n => {
                if ("cssRules" in n)
                    try {
                        mA(n.cssRules || []).forEach(s => {
                            t.push(s)
                        }
                        )
                    } catch (s) {
                        // console.error(`Error while reading CSS rules from ${n.href}`, s)
                    }
            }
            ),
                t))
    }
    function $o(e) {
        return e.filter(A => A.type === CSSRule.FONT_FACE_RULE).filter(A => Rn(A.style.getPropertyValue("src")))
    }
    async function jo(e, A) {
        if (e.ownerDocument == null)
            throw new Error("Provided element is not within a Document");
        const t = mA(e.ownerDocument.styleSheets)
            , r = await qo(t, A);
        return $o(r)
    }
    function Xn(e) {
        return e.trim().replace(/["']/g, "")
    }
    function zo(e) {
        const A = new Set;
        function t(r) {
            (r.style.fontFamily || getComputedStyle(r).fontFamily).split(",").forEach(s => {
                A.add(Xn(s))
            }
            ),
                Array.from(r.children).forEach(s => {
                    s instanceof HTMLElement && t(s)
                }
                )
        }
        return t(e),
            A
    }
    async function Aa(e, A) {
        const t = await jo(e, A)
            , r = zo(e);
        return (await Promise.all(t.filter(s => r.has(Xn(s.style.fontFamily))).map(s => {
            const i = s.parentStyleSheet ? s.parentStyleSheet.href : null;
            return Mn(s.cssText, i, A)
        }
        ))).join(`
`)
    }
    async function ea(e, A) {
        const t = A.fontEmbedCSS != null ? A.fontEmbedCSS : A.skipFonts ? null : await Aa(e, A);
        if (t) {
            const r = document.createElement("style")
                , n = document.createTextNode(t);
            r.appendChild(n),
                e.firstChild ? e.insertBefore(r, e.firstChild) : e.appendChild(r)
        }
    }
    async function ta(e, A = {}) {
        const { width: t, height: r } = Ln(e, A)
            , n = await Xe(e, A, !0);
        return await ea(n, A),
            await Gn(n, A),
            Zo(n, A),
            await Co(n, t, r)
    }
    async function ra(e, A = {}) {
        const { width: t, height: r } = Ln(e, A)
            , n = await ta(e, A)
            , s = await Pe(n)
            , i = document.createElement("canvas")
            , o = i.getContext("2d")
            , a = A.pixelRatio || wo()
            , B = A.canvasWidth || t
            , l = A.canvasHeight || r;
        return i.width = B * a,
            i.height = l * a,
            A.skipAutoScale || Qo(i),
            i.style.width = `${B}`,
            i.style.height = `${l}`,
            A.backgroundColor && (o.fillStyle = A.backgroundColor,
                o.fillRect(0, 0, i.width, i.height)),
            o.drawImage(s, 0, 0, i.width, i.height),
            i
    }
    async function Jn(e, A = {}) {
        return (await ra(e, A)).toDataURL()
    }
    var Ar = function (e, A) {
        return Ar = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (t, r) {
            t.__proto__ = r
        }
            || function (t, r) {
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
            }
            ,
            Ar(e, A)
    };
    function cA(e, A) {
        if (typeof A != "function" && A !== null)
            throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
        Ar(e, A);
        function t() {
            this.constructor = e
        }
        e.prototype = A === null ? Object.create(A) : (t.prototype = A.prototype,
            new t)
    }
    var er = function () {
        return er = Object.assign || function (A) {
            for (var t, r = 1, n = arguments.length; r < n; r++) {
                t = arguments[r];
                for (var s in t)
                    Object.prototype.hasOwnProperty.call(t, s) && (A[s] = t[s])
            }
            return A
        }
            ,
            er.apply(this, arguments)
    };
    function z(e, A, t, r) {
        function n(s) {
            return s instanceof t ? s : new t(function (i) {
                i(s)
            }
            )
        }
        return new (t || (t = Promise))(function (s, i) {
            function o(l) {
                try {
                    B(r.next(l))
                } catch (c) {
                    i(c)
                }
            }
            function a(l) {
                try {
                    B(r.throw(l))
                } catch (c) {
                    i(c)
                }
            }
            function B(l) {
                l.done ? s(l.value) : n(l.value).then(o, a)
            }
            B((r = r.apply(e, [])).next())
        }
        )
    }
    function $(e, A) {
        var t = {
            label: 0,
            sent: function () {
                if (s[0] & 1)
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        }, r, n, s, i;
        return i = {
            next: o(0),
            throw: o(1),
            return: o(2)
        },
            typeof Symbol == "function" && (i[Symbol.iterator] = function () {
                return this
            }
            ),
            i;
        function o(B) {
            return function (l) {
                return a([B, l])
            }
        }
        function a(B) {
            if (r)
                throw new TypeError("Generator is already executing.");
            for (; t;)
                try {
                    if (r = 1,
                        n && (s = B[0] & 2 ? n.return : B[0] ? n.throw || ((s = n.return) && s.call(n),
                            0) : n.next) && !(s = s.call(n, B[1])).done)
                        return s;
                    switch (n = 0,
                    s && (B = [B[0] & 2, s.value]),
                    B[0]) {
                        case 0:
                        case 1:
                            s = B;
                            break;
                        case 4:
                            return t.label++,
                            {
                                value: B[1],
                                done: !1
                            };
                        case 5:
                            t.label++,
                                n = B[1],
                                B = [0];
                            continue;
                        case 7:
                            B = t.ops.pop(),
                                t.trys.pop();
                            continue;
                        default:
                            if (s = t.trys,
                                !(s = s.length > 0 && s[s.length - 1]) && (B[0] === 6 || B[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (B[0] === 3 && (!s || B[1] > s[0] && B[1] < s[3])) {
                                t.label = B[1];
                                break
                            }
                            if (B[0] === 6 && t.label < s[1]) {
                                t.label = s[1],
                                    s = B;
                                break
                            }
                            if (s && t.label < s[2]) {
                                t.label = s[2],
                                    t.ops.push(B);
                                break
                            }
                            s[2] && t.ops.pop(),
                                t.trys.pop();
                            continue
                    }
                    B = A.call(e, t)
                } catch (l) {
                    B = [6, l],
                        n = 0
                } finally {
                    r = s = 0
                }
            if (B[0] & 5)
                throw B[1];
            return {
                value: B[0] ? B[1] : void 0,
                done: !0
            }
        }
    }
    function Je(e, A, t) {
        if (arguments.length === 2)
            for (var r = 0, n = A.length, s; r < n; r++)
                (s || !(r in A)) && (s || (s = Array.prototype.slice.call(A, 0, r)),
                    s[r] = A[r]);
        return e.concat(s || A)
    }
    for (var hA = (function () {
        function e(A, t, r, n) {
            this.left = A,
                this.top = t,
                this.width = r,
                this.height = n
        }
        return e.prototype.add = function (A, t, r, n) {
            return new e(this.left + A, this.top + t, this.width + r, this.height + n)
        }
            ,
            e.fromClientRect = function (A, t) {
                return new e(t.left + A.windowBounds.left, t.top + A.windowBounds.top, t.width, t.height)
            }
            ,
            e.fromDOMRectList = function (A, t) {
                var r = Array.from(t).find(function (n) {
                    return n.width !== 0
                });
                return r ? new e(r.left + A.windowBounds.left, r.top + A.windowBounds.top, r.width, r.height) : e.EMPTY
            }
            ,
            e.EMPTY = new e(0, 0, 0, 0),
            e
    }
    )(), We = function (e, A) {
        return hA.fromClientRect(e, A.getBoundingClientRect())
    }, na = function (e) {
        var A = e.body
            , t = e.documentElement;
        if (!A || !t)
            throw new Error("Unable to get document size");
        var r = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth))
            , n = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
        return new hA(0, 0, r, n)
    }, Ye = function (e) {
        for (var A = [], t = 0, r = e.length; t < r;) {
            var n = e.charCodeAt(t++);
            if (n >= 55296 && n <= 56319 && t < r) {
                var s = e.charCodeAt(t++);
                (s & 64512) === 56320 ? A.push(((n & 1023) << 10) + (s & 1023) + 65536) : (A.push(n),
                    t--)
            } else
                A.push(n)
        }
        return A
    }, M = function () {
        for (var e = [], A = 0; A < arguments.length; A++)
            e[A] = arguments[A];
        if (String.fromCodePoint)
            return String.fromCodePoint.apply(String, e);
        var t = e.length;
        if (!t)
            return "";
        for (var r = [], n = -1, s = ""; ++n < t;) {
            var i = e[n];
            i <= 65535 ? r.push(i) : (i -= 65536,
                r.push((i >> 10) + 55296, i % 1024 + 56320)),
                (n + 1 === t || r.length > 16384) && (s += String.fromCharCode.apply(String, r),
                    r.length = 0)
        }
        return s
    }, Wn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", sa = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Ze = 0; Ze < Wn.length; Ze++)
        sa[Wn.charCodeAt(Ze)] = Ze;
    for (var Yn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ge = typeof Uint8Array > "u" ? [] : new Uint8Array(256), qe = 0; qe < Yn.length; qe++)
        ge[Yn.charCodeAt(qe)] = qe;
    for (var ia = function (e) {
        var A = e.length * .75, t = e.length, r, n = 0, s, i, o, a;
        e[e.length - 1] === "=" && (A--,
            e[e.length - 2] === "=" && A--);
        var B = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A)
            , l = Array.isArray(B) ? B : new Uint8Array(B);
        for (r = 0; r < t; r += 4)
            s = ge[e.charCodeAt(r)],
                i = ge[e.charCodeAt(r + 1)],
                o = ge[e.charCodeAt(r + 2)],
                a = ge[e.charCodeAt(r + 3)],
                l[n++] = s << 2 | i >> 4,
                l[n++] = (i & 15) << 4 | o >> 2,
                l[n++] = (o & 3) << 6 | a & 63;
        return B
    }, oa = function (e) {
        for (var A = e.length, t = [], r = 0; r < A; r += 2)
            t.push(e[r + 1] << 8 | e[r]);
        return t
    }, aa = function (e) {
        for (var A = e.length, t = [], r = 0; r < A; r += 4)
            t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
        return t
    }, RA = 5, tr = 11, rr = 2, Ba = tr - RA, Zn = 65536 >> RA, ca = 1 << RA, nr = ca - 1, la = 1024 >> RA, ua = Zn + la, ga = ua, fa = 32, wa = ga + fa, Qa = 65536 >> tr, ha = 1 << Ba, Ca = ha - 1, qn = function (e, A, t) {
        return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t))
    }, Ua = function (e, A, t) {
        return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t))
    }, Fa = function (e, A) {
        var t = ia(e)
            , r = Array.isArray(t) ? aa(t) : new Uint32Array(t)
            , n = Array.isArray(t) ? oa(t) : new Uint16Array(t)
            , s = 24
            , i = qn(n, s / 2, r[4] / 2)
            , o = r[5] === 2 ? qn(n, (s + r[4]) / 2) : Ua(r, Math.ceil((s + r[4]) / 4));
        return new da(r[0], r[1], r[2], r[3], i, o)
    }, da = (function () {
        function e(A, t, r, n, s, i) {
            this.initialValue = A,
                this.errorValue = t,
                this.highStart = r,
                this.highValueIndex = n,
                this.index = s,
                this.data = i
        }
        return e.prototype.get = function (A) {
            var t;
            if (A >= 0) {
                if (A < 55296 || A > 56319 && A <= 65535)
                    return t = this.index[A >> RA],
                        t = (t << rr) + (A & nr),
                        this.data[t];
                if (A <= 65535)
                    return t = this.index[Zn + (A - 55296 >> RA)],
                        t = (t << rr) + (A & nr),
                        this.data[t];
                if (A < this.highStart)
                    return t = wa - Qa + (A >> tr),
                        t = this.index[t],
                        t += A >> RA & Ca,
                        t = this.index[t],
                        t = (t << rr) + (A & nr),
                        this.data[t];
                if (A <= 1114111)
                    return this.data[this.highValueIndex]
            }
            return this.errorValue
        }
            ,
            e
    }
    )(), $n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", pa = typeof Uint8Array > "u" ? [] : new Uint8Array(256), $e = 0; $e < $n.length; $e++)
        pa[$n.charCodeAt($e)] = $e;
    var Ea = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="
        , jn = 50
        , ma = 1
        , zn = 2
        , As = 3
        , Ha = 4
        , va = 5
        , es = 7
        , ts = 8
        , rs = 9
        , HA = 10
        , sr = 11
        , ns = 12
        , ir = 13
        , ya = 14
        , fe = 15
        , or = 16
        , je = 17
        , we = 18
        , Ia = 19
        , ss = 20
        , ar = 21
        , Qe = 22
        , Br = 23
        , $A = 24
        , sA = 25
        , he = 26
        , Ce = 27
        , jA = 28
        , ba = 29
        , MA = 30
        , _a = 31
        , ze = 32
        , At = 33
        , cr = 34
        , lr = 35
        , ur = 36
        , Ue = 37
        , gr = 38
        , et = 39
        , tt = 40
        , fr = 41
        , is = 42
        , La = 43
        , Ka = [9001, 65288]
        , os = "!"
        , b = "×"
        , rt = "÷"
        , wr = Fa(Ea)
        , CA = [MA, ur]
        , Qr = [ma, zn, As, va]
        , as = [HA, ts]
        , Bs = [Ce, he]
        , Sa = Qr.concat(as)
        , cs = [gr, et, tt, cr, lr]
        , xa = [fe, ir]
        , Ta = function (e, A) {
            A === void 0 && (A = "strict");
            var t = []
                , r = []
                , n = [];
            return e.forEach(function (s, i) {
                var o = wr.get(s);
                if (o > jn ? (n.push(!0),
                    o -= jn) : n.push(!1),
                    ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(s) !== -1)
                    return r.push(i),
                        t.push(or);
                if (o === Ha || o === sr) {
                    if (i === 0)
                        return r.push(i),
                            t.push(MA);
                    var a = t[i - 1];
                    return Sa.indexOf(a) === -1 ? (r.push(r[i - 1]),
                        t.push(a)) : (r.push(i),
                            t.push(MA))
                }
                if (r.push(i),
                    o === _a)
                    return t.push(A === "strict" ? ar : Ue);
                if (o === is || o === ba)
                    return t.push(MA);
                if (o === La)
                    return s >= 131072 && s <= 196605 || s >= 196608 && s <= 262141 ? t.push(Ue) : t.push(MA);
                t.push(o)
            }),
                [r, t, n]
        }
        , hr = function (e, A, t, r) {
            var n = r[t];
            if (Array.isArray(e) ? e.indexOf(n) !== -1 : e === n)
                for (var s = t; s <= r.length;) {
                    s++;
                    var i = r[s];
                    if (i === A)
                        return !0;
                    if (i !== HA)
                        break
                }
            if (n === HA)
                for (var s = t; s > 0;) {
                    s--;
                    var o = r[s];
                    if (Array.isArray(e) ? e.indexOf(o) !== -1 : e === o)
                        for (var a = t; a <= r.length;) {
                            a++;
                            var i = r[a];
                            if (i === A)
                                return !0;
                            if (i !== HA)
                                break
                        }
                    if (o !== HA)
                        break
                }
            return !1
        }
        , ls = function (e, A) {
            for (var t = e; t >= 0;) {
                var r = A[t];
                if (r === HA)
                    t--;
                else
                    return r
            }
            return 0
        }
        , Da = function (e, A, t, r, n) {
            if (t[r] === 0)
                return b;
            var s = r - 1;
            if (Array.isArray(n) && n[s] === !0)
                return b;
            var i = s - 1
                , o = s + 1
                , a = A[s]
                , B = i >= 0 ? A[i] : 0
                , l = A[o];
            if (a === zn && l === As)
                return b;
            if (Qr.indexOf(a) !== -1)
                return os;
            if (Qr.indexOf(l) !== -1 || as.indexOf(l) !== -1)
                return b;
            if (ls(s, A) === ts)
                return rt;
            if (wr.get(e[s]) === sr || (a === ze || a === At) && wr.get(e[o]) === sr || a === es || l === es || a === rs || [HA, ir, fe].indexOf(a) === -1 && l === rs || [je, we, Ia, $A, jA].indexOf(l) !== -1 || ls(s, A) === Qe || hr(Br, Qe, s, A) || hr([je, we], ar, s, A) || hr(ns, ns, s, A))
                return b;
            if (a === HA)
                return rt;
            if (a === Br || l === Br)
                return b;
            if (l === or || a === or)
                return rt;
            if ([ir, fe, ar].indexOf(l) !== -1 || a === ya || B === ur && xa.indexOf(a) !== -1 || a === jA && l === ur || l === ss || CA.indexOf(l) !== -1 && a === sA || CA.indexOf(a) !== -1 && l === sA || a === Ce && [Ue, ze, At].indexOf(l) !== -1 || [Ue, ze, At].indexOf(a) !== -1 && l === he || CA.indexOf(a) !== -1 && Bs.indexOf(l) !== -1 || Bs.indexOf(a) !== -1 && CA.indexOf(l) !== -1 || [Ce, he].indexOf(a) !== -1 && (l === sA || [Qe, fe].indexOf(l) !== -1 && A[o + 1] === sA) || [Qe, fe].indexOf(a) !== -1 && l === sA || a === sA && [sA, jA, $A].indexOf(l) !== -1)
                return b;
            if ([sA, jA, $A, je, we].indexOf(l) !== -1)
                for (var c = s; c >= 0;) {
                    var u = A[c];
                    if (u === sA)
                        return b;
                    if ([jA, $A].indexOf(u) !== -1)
                        c--;
                    else
                        break
                }
            if ([Ce, he].indexOf(l) !== -1)
                for (var c = [je, we].indexOf(a) !== -1 ? i : s; c >= 0;) {
                    var u = A[c];
                    if (u === sA)
                        return b;
                    if ([jA, $A].indexOf(u) !== -1)
                        c--;
                    else
                        break
                }
            if (gr === a && [gr, et, cr, lr].indexOf(l) !== -1 || [et, cr].indexOf(a) !== -1 && [et, tt].indexOf(l) !== -1 || [tt, lr].indexOf(a) !== -1 && l === tt || cs.indexOf(a) !== -1 && [ss, he].indexOf(l) !== -1 || cs.indexOf(l) !== -1 && a === Ce || CA.indexOf(a) !== -1 && CA.indexOf(l) !== -1 || a === $A && CA.indexOf(l) !== -1 || CA.concat(sA).indexOf(a) !== -1 && l === Qe && Ka.indexOf(e[o]) === -1 || CA.concat(sA).indexOf(l) !== -1 && a === we)
                return b;
            if (a === fr && l === fr) {
                for (var g = t[s], f = 1; g > 0 && (g--,
                    A[g] === fr);)
                    f++;
                if (f % 2 !== 0)
                    return b
            }
            return a === ze && l === At ? b : rt
        }
        , Oa = function (e, A) {
            A || (A = {
                lineBreak: "normal",
                wordBreak: "normal"
            });
            var t = Ta(e, A.lineBreak)
                , r = t[0]
                , n = t[1]
                , s = t[2];
            (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (n = n.map(function (o) {
                return [sA, MA, is].indexOf(o) !== -1 ? Ue : o
            }));
            var i = A.wordBreak === "keep-all" ? s.map(function (o, a) {
                return o && e[a] >= 19968 && e[a] <= 40959
            }) : void 0;
            return [r, n, i]
        }
        , Ra = (function () {
            function e(A, t, r, n) {
                this.codePoints = A,
                    this.required = t === os,
                    this.start = r,
                    this.end = n
            }
            return e.prototype.slice = function () {
                return M.apply(void 0, this.codePoints.slice(this.start, this.end))
            }
                ,
                e
        }
        )()
        , Ma = function (e, A) {
            var t = Ye(e)
                , r = Oa(t, A)
                , n = r[0]
                , s = r[1]
                , i = r[2]
                , o = t.length
                , a = 0
                , B = 0;
            return {
                next: function () {
                    if (B >= o)
                        return {
                            done: !0,
                            value: null
                        };
                    for (var l = b; B < o && (l = Da(t, s, n, ++B, i)) === b;)
                        ;
                    if (l !== b || B === o) {
                        var c = new Ra(t, l, a, B);
                        return a = B,
                        {
                            value: c,
                            done: !1
                        }
                    }
                    return {
                        done: !0,
                        value: null
                    }
                }
            }
        }
        , Ga = 1
        , Va = 2
        , Fe = 4
        , us = 8
        , nt = 10
        , gs = 47
        , de = 92
        , Na = 9
        , ka = 32
        , st = 34
        , pe = 61
        , Pa = 35
        , Xa = 36
        , Ja = 37
        , it = 39
        , ot = 40
        , Ee = 41
        , Wa = 95
        , eA = 45
        , Ya = 33
        , Za = 60
        , qa = 62
        , $a = 64
        , ja = 91
        , za = 93
        , AB = 61
        , eB = 123
        , at = 63
        , tB = 125
        , fs = 124
        , rB = 126
        , nB = 128
        , ws = 65533
        , Cr = 42
        , GA = 43
        , sB = 44
        , iB = 58
        , oB = 59
        , me = 46
        , aB = 0
        , BB = 8
        , cB = 11
        , lB = 14
        , uB = 31
        , gB = 127
        , uA = -1
        , Qs = 48
        , hs = 97
        , Cs = 101
        , fB = 102
        , wB = 117
        , QB = 122
        , Us = 65
        , Fs = 69
        , ds = 70
        , hB = 85
        , CB = 90
        , j = function (e) {
            return e >= Qs && e <= 57
        }
        , UB = function (e) {
            return e >= 55296 && e <= 57343
        }
        , zA = function (e) {
            return j(e) || e >= Us && e <= ds || e >= hs && e <= fB
        }
        , FB = function (e) {
            return e >= hs && e <= QB
        }
        , dB = function (e) {
            return e >= Us && e <= CB
        }
        , pB = function (e) {
            return FB(e) || dB(e)
        }
        , EB = function (e) {
            return e >= nB
        }
        , Bt = function (e) {
            return e === nt || e === Na || e === ka
        }
        , ct = function (e) {
            return pB(e) || EB(e) || e === Wa
        }
        , ps = function (e) {
            return ct(e) || j(e) || e === eA
        }
        , mB = function (e) {
            return e >= aB && e <= BB || e === cB || e >= lB && e <= uB || e === gB
        }
        , vA = function (e, A) {
            return e !== de ? !1 : A !== nt
        }
        , lt = function (e, A, t) {
            return e === eA ? ct(A) || vA(A, t) : ct(e) ? !0 : !!(e === de && vA(e, A))
        }
        , Ur = function (e, A, t) {
            return e === GA || e === eA ? j(A) ? !0 : A === me && j(t) : j(e === me ? A : e)
        }
        , HB = function (e) {
            var A = 0
                , t = 1;
            (e[A] === GA || e[A] === eA) && (e[A] === eA && (t = -1),
                A++);
            for (var r = []; j(e[A]);)
                r.push(e[A++]);
            var n = r.length ? parseInt(M.apply(void 0, r), 10) : 0;
            e[A] === me && A++;
            for (var s = []; j(e[A]);)
                s.push(e[A++]);
            var i = s.length
                , o = i ? parseInt(M.apply(void 0, s), 10) : 0;
            (e[A] === Fs || e[A] === Cs) && A++;
            var a = 1;
            (e[A] === GA || e[A] === eA) && (e[A] === eA && (a = -1),
                A++);
            for (var B = []; j(e[A]);)
                B.push(e[A++]);
            var l = B.length ? parseInt(M.apply(void 0, B), 10) : 0;
            return t * (n + o * Math.pow(10, -i)) * Math.pow(10, a * l)
        }
        , vB = {
            type: 2
        }
        , yB = {
            type: 3
        }
        , IB = {
            type: 4
        }
        , bB = {
            type: 13
        }
        , _B = {
            type: 8
        }
        , LB = {
            type: 21
        }
        , KB = {
            type: 9
        }
        , SB = {
            type: 10
        }
        , xB = {
            type: 11
        }
        , TB = {
            type: 12
        }
        , DB = {
            type: 14
        }
        , ut = {
            type: 23
        }
        , OB = {
            type: 1
        }
        , RB = {
            type: 25
        }
        , MB = {
            type: 24
        }
        , GB = {
            type: 26
        }
        , VB = {
            type: 27
        }
        , NB = {
            type: 28
        }
        , kB = {
            type: 29
        }
        , PB = {
            type: 31
        }
        , Fr = {
            type: 32
        }
        , Es = (function () {
            function e() {
                this._value = []
            }
            return e.prototype.write = function (A) {
                this._value = this._value.concat(Ye(A))
            }
                ,
                e.prototype.read = function () {
                    for (var A = [], t = this.consumeToken(); t !== Fr;)
                        A.push(t),
                            t = this.consumeToken();
                    return A
                }
                ,
                e.prototype.consumeToken = function () {
                    var A = this.consumeCodePoint();
                    switch (A) {
                        case st:
                            return this.consumeStringToken(st);
                        case Pa:
                            var t = this.peekCodePoint(0)
                                , r = this.peekCodePoint(1)
                                , n = this.peekCodePoint(2);
                            if (ps(t) || vA(r, n)) {
                                var s = lt(t, r, n) ? Va : Ga
                                    , i = this.consumeName();
                                return {
                                    type: 5,
                                    value: i,
                                    flags: s
                                }
                            }
                            break;
                        case Xa:
                            if (this.peekCodePoint(0) === pe)
                                return this.consumeCodePoint(),
                                    bB;
                            break;
                        case it:
                            return this.consumeStringToken(it);
                        case ot:
                            return vB;
                        case Ee:
                            return yB;
                        case Cr:
                            if (this.peekCodePoint(0) === pe)
                                return this.consumeCodePoint(),
                                    DB;
                            break;
                        case GA:
                            if (Ur(A, this.peekCodePoint(0), this.peekCodePoint(1)))
                                return this.reconsumeCodePoint(A),
                                    this.consumeNumericToken();
                            break;
                        case sB:
                            return IB;
                        case eA:
                            var o = A
                                , a = this.peekCodePoint(0)
                                , B = this.peekCodePoint(1);
                            if (Ur(o, a, B))
                                return this.reconsumeCodePoint(A),
                                    this.consumeNumericToken();
                            if (lt(o, a, B))
                                return this.reconsumeCodePoint(A),
                                    this.consumeIdentLikeToken();
                            if (a === eA && B === qa)
                                return this.consumeCodePoint(),
                                    this.consumeCodePoint(),
                                    MB;
                            break;
                        case me:
                            if (Ur(A, this.peekCodePoint(0), this.peekCodePoint(1)))
                                return this.reconsumeCodePoint(A),
                                    this.consumeNumericToken();
                            break;
                        case gs:
                            if (this.peekCodePoint(0) === Cr)
                                for (this.consumeCodePoint(); ;) {
                                    var l = this.consumeCodePoint();
                                    if (l === Cr && (l = this.consumeCodePoint(),
                                        l === gs))
                                        return this.consumeToken();
                                    if (l === uA)
                                        return this.consumeToken()
                                }
                            break;
                        case iB:
                            return GB;
                        case oB:
                            return VB;
                        case Za:
                            if (this.peekCodePoint(0) === Ya && this.peekCodePoint(1) === eA && this.peekCodePoint(2) === eA)
                                return this.consumeCodePoint(),
                                    this.consumeCodePoint(),
                                    RB;
                            break;
                        case $a:
                            var c = this.peekCodePoint(0)
                                , u = this.peekCodePoint(1)
                                , g = this.peekCodePoint(2);
                            if (lt(c, u, g)) {
                                var i = this.consumeName();
                                return {
                                    type: 7,
                                    value: i
                                }
                            }
                            break;
                        case ja:
                            return NB;
                        case de:
                            if (vA(A, this.peekCodePoint(0)))
                                return this.reconsumeCodePoint(A),
                                    this.consumeIdentLikeToken();
                            break;
                        case za:
                            return kB;
                        case AB:
                            if (this.peekCodePoint(0) === pe)
                                return this.consumeCodePoint(),
                                    _B;
                            break;
                        case eB:
                            return xB;
                        case tB:
                            return TB;
                        case wB:
                        case hB:
                            var f = this.peekCodePoint(0)
                                , Q = this.peekCodePoint(1);
                            return f === GA && (zA(Q) || Q === at) && (this.consumeCodePoint(),
                                this.consumeUnicodeRangeToken()),
                                this.reconsumeCodePoint(A),
                                this.consumeIdentLikeToken();
                        case fs:
                            if (this.peekCodePoint(0) === pe)
                                return this.consumeCodePoint(),
                                    KB;
                            if (this.peekCodePoint(0) === fs)
                                return this.consumeCodePoint(),
                                    LB;
                            break;
                        case rB:
                            if (this.peekCodePoint(0) === pe)
                                return this.consumeCodePoint(),
                                    SB;
                            break;
                        case uA:
                            return Fr
                    }
                    return Bt(A) ? (this.consumeWhiteSpace(),
                        PB) : j(A) ? (this.reconsumeCodePoint(A),
                            this.consumeNumericToken()) : ct(A) ? (this.reconsumeCodePoint(A),
                                this.consumeIdentLikeToken()) : {
                        type: 6,
                        value: M(A)
                    }
                }
                ,
                e.prototype.consumeCodePoint = function () {
                    var A = this._value.shift();
                    return typeof A > "u" ? -1 : A
                }
                ,
                e.prototype.reconsumeCodePoint = function (A) {
                    this._value.unshift(A)
                }
                ,
                e.prototype.peekCodePoint = function (A) {
                    return A >= this._value.length ? -1 : this._value[A]
                }
                ,
                e.prototype.consumeUnicodeRangeToken = function () {
                    for (var A = [], t = this.consumeCodePoint(); zA(t) && A.length < 6;)
                        A.push(t),
                            t = this.consumeCodePoint();
                    for (var r = !1; t === at && A.length < 6;)
                        A.push(t),
                            t = this.consumeCodePoint(),
                            r = !0;
                    if (r) {
                        var n = parseInt(M.apply(void 0, A.map(function (a) {
                            return a === at ? Qs : a
                        })), 16)
                            , s = parseInt(M.apply(void 0, A.map(function (a) {
                                return a === at ? ds : a
                            })), 16);
                        return {
                            type: 30,
                            start: n,
                            end: s
                        }
                    }
                    var i = parseInt(M.apply(void 0, A), 16);
                    if (this.peekCodePoint(0) === eA && zA(this.peekCodePoint(1))) {
                        this.consumeCodePoint(),
                            t = this.consumeCodePoint();
                        for (var o = []; zA(t) && o.length < 6;)
                            o.push(t),
                                t = this.consumeCodePoint();
                        var s = parseInt(M.apply(void 0, o), 16);
                        return {
                            type: 30,
                            start: i,
                            end: s
                        }
                    } else
                        return {
                            type: 30,
                            start: i,
                            end: i
                        }
                }
                ,
                e.prototype.consumeIdentLikeToken = function () {
                    var A = this.consumeName();
                    return A.toLowerCase() === "url" && this.peekCodePoint(0) === ot ? (this.consumeCodePoint(),
                        this.consumeUrlToken()) : this.peekCodePoint(0) === ot ? (this.consumeCodePoint(),
                        {
                            type: 19,
                            value: A
                        }) : {
                        type: 20,
                        value: A
                    }
                }
                ,
                e.prototype.consumeUrlToken = function () {
                    var A = [];
                    if (this.consumeWhiteSpace(),
                        this.peekCodePoint(0) === uA)
                        return {
                            type: 22,
                            value: ""
                        };
                    var t = this.peekCodePoint(0);
                    if (t === it || t === st) {
                        var r = this.consumeStringToken(this.consumeCodePoint());
                        return r.type === 0 && (this.consumeWhiteSpace(),
                            this.peekCodePoint(0) === uA || this.peekCodePoint(0) === Ee) ? (this.consumeCodePoint(),
                            {
                                type: 22,
                                value: r.value
                            }) : (this.consumeBadUrlRemnants(),
                                ut)
                    }
                    for (; ;) {
                        var n = this.consumeCodePoint();
                        if (n === uA || n === Ee)
                            return {
                                type: 22,
                                value: M.apply(void 0, A)
                            };
                        if (Bt(n))
                            return this.consumeWhiteSpace(),
                                this.peekCodePoint(0) === uA || this.peekCodePoint(0) === Ee ? (this.consumeCodePoint(),
                                {
                                    type: 22,
                                    value: M.apply(void 0, A)
                                }) : (this.consumeBadUrlRemnants(),
                                    ut);
                        if (n === st || n === it || n === ot || mB(n))
                            return this.consumeBadUrlRemnants(),
                                ut;
                        if (n === de)
                            if (vA(n, this.peekCodePoint(0)))
                                A.push(this.consumeEscapedCodePoint());
                            else
                                return this.consumeBadUrlRemnants(),
                                    ut;
                        else
                            A.push(n)
                    }
                }
                ,
                e.prototype.consumeWhiteSpace = function () {
                    for (; Bt(this.peekCodePoint(0));)
                        this.consumeCodePoint()
                }
                ,
                e.prototype.consumeBadUrlRemnants = function () {
                    for (; ;) {
                        var A = this.consumeCodePoint();
                        if (A === Ee || A === uA)
                            return;
                        vA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
                    }
                }
                ,
                e.prototype.consumeStringSlice = function (A) {
                    for (var t = 5e4, r = ""; A > 0;) {
                        var n = Math.min(t, A);
                        r += M.apply(void 0, this._value.splice(0, n)),
                            A -= n
                    }
                    return this._value.shift(),
                        r
                }
                ,
                e.prototype.consumeStringToken = function (A) {
                    var t = ""
                        , r = 0;
                    do {
                        var n = this._value[r];
                        if (n === uA || n === void 0 || n === A)
                            return t += this.consumeStringSlice(r),
                            {
                                type: 0,
                                value: t
                            };
                        if (n === nt)
                            return this._value.splice(0, r),
                                OB;
                        if (n === de) {
                            var s = this._value[r + 1];
                            s !== uA && s !== void 0 && (s === nt ? (t += this.consumeStringSlice(r),
                                r = -1,
                                this._value.shift()) : vA(n, s) && (t += this.consumeStringSlice(r),
                                    t += M(this.consumeEscapedCodePoint()),
                                    r = -1))
                        }
                        r++
                    } while (!0)
                }
                ,
                e.prototype.consumeNumber = function () {
                    var A = []
                        , t = Fe
                        , r = this.peekCodePoint(0);
                    for ((r === GA || r === eA) && A.push(this.consumeCodePoint()); j(this.peekCodePoint(0));)
                        A.push(this.consumeCodePoint());
                    r = this.peekCodePoint(0);
                    var n = this.peekCodePoint(1);
                    if (r === me && j(n))
                        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()),
                            t = us; j(this.peekCodePoint(0));)
                            A.push(this.consumeCodePoint());
                    r = this.peekCodePoint(0),
                        n = this.peekCodePoint(1);
                    var s = this.peekCodePoint(2);
                    if ((r === Fs || r === Cs) && ((n === GA || n === eA) && j(s) || j(n)))
                        for (A.push(this.consumeCodePoint(), this.consumeCodePoint()),
                            t = us; j(this.peekCodePoint(0));)
                            A.push(this.consumeCodePoint());
                    return [HB(A), t]
                }
                ,
                e.prototype.consumeNumericToken = function () {
                    var A = this.consumeNumber()
                        , t = A[0]
                        , r = A[1]
                        , n = this.peekCodePoint(0)
                        , s = this.peekCodePoint(1)
                        , i = this.peekCodePoint(2);
                    if (lt(n, s, i)) {
                        var o = this.consumeName();
                        return {
                            type: 15,
                            number: t,
                            flags: r,
                            unit: o
                        }
                    }
                    return n === Ja ? (this.consumeCodePoint(),
                    {
                        type: 16,
                        number: t,
                        flags: r
                    }) : {
                        type: 17,
                        number: t,
                        flags: r
                    }
                }
                ,
                e.prototype.consumeEscapedCodePoint = function () {
                    var A = this.consumeCodePoint();
                    if (zA(A)) {
                        for (var t = M(A); zA(this.peekCodePoint(0)) && t.length < 6;)
                            t += M(this.consumeCodePoint());
                        Bt(this.peekCodePoint(0)) && this.consumeCodePoint();
                        var r = parseInt(t, 16);
                        return r === 0 || UB(r) || r > 1114111 ? ws : r
                    }
                    return A === uA ? ws : A
                }
                ,
                e.prototype.consumeName = function () {
                    for (var A = ""; ;) {
                        var t = this.consumeCodePoint();
                        if (ps(t))
                            A += M(t);
                        else if (vA(t, this.peekCodePoint(0)))
                            A += M(this.consumeEscapedCodePoint());
                        else
                            return this.reconsumeCodePoint(t),
                                A
                    }
                }
                ,
                e
        }
        )()
        , ms = (function () {
            function e(A) {
                this._tokens = A
            }
            return e.create = function (A) {
                var t = new Es;
                return t.write(A),
                    new e(t.read())
            }
                ,
                e.parseValue = function (A) {
                    return e.create(A).parseComponentValue()
                }
                ,
                e.parseValues = function (A) {
                    return e.create(A).parseComponentValues()
                }
                ,
                e.prototype.parseComponentValue = function () {
                    for (var A = this.consumeToken(); A.type === 31;)
                        A = this.consumeToken();
                    if (A.type === 32)
                        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
                    this.reconsumeToken(A);
                    var t = this.consumeComponentValue();
                    do
                        A = this.consumeToken();
                    while (A.type === 31);
                    if (A.type === 32)
                        return t;
                    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
                }
                ,
                e.prototype.parseComponentValues = function () {
                    for (var A = []; ;) {
                        var t = this.consumeComponentValue();
                        if (t.type === 32)
                            return A;
                        A.push(t),
                            A.push()
                    }
                }
                ,
                e.prototype.consumeComponentValue = function () {
                    var A = this.consumeToken();
                    switch (A.type) {
                        case 11:
                        case 28:
                        case 2:
                            return this.consumeSimpleBlock(A.type);
                        case 19:
                            return this.consumeFunction(A)
                    }
                    return A
                }
                ,
                e.prototype.consumeSimpleBlock = function (A) {
                    for (var t = {
                        type: A,
                        values: []
                    }, r = this.consumeToken(); ;) {
                        if (r.type === 32 || JB(r, A))
                            return t;
                        this.reconsumeToken(r),
                            t.values.push(this.consumeComponentValue()),
                            r = this.consumeToken()
                    }
                }
                ,
                e.prototype.consumeFunction = function (A) {
                    for (var t = {
                        name: A.value,
                        values: [],
                        type: 18
                    }; ;) {
                        var r = this.consumeToken();
                        if (r.type === 32 || r.type === 3)
                            return t;
                        this.reconsumeToken(r),
                            t.values.push(this.consumeComponentValue())
                    }
                }
                ,
                e.prototype.consumeToken = function () {
                    var A = this._tokens.shift();
                    return typeof A > "u" ? Fr : A
                }
                ,
                e.prototype.reconsumeToken = function (A) {
                    this._tokens.unshift(A)
                }
                ,
                e
        }
        )()
        , He = function (e) {
            return e.type === 15
        }
        , Ae = function (e) {
            return e.type === 17
        }
        , L = function (e) {
            return e.type === 20
        }
        , XB = function (e) {
            return e.type === 0
        }
        , dr = function (e, A) {
            return L(e) && e.value === A
        }
        , Hs = function (e) {
            return e.type !== 31
        }
        , ee = function (e) {
            return e.type !== 31 && e.type !== 4
        }
        , gA = function (e) {
            var A = []
                , t = [];
            return e.forEach(function (r) {
                if (r.type === 4) {
                    if (t.length === 0)
                        throw new Error("Error parsing function args, zero tokens for arg");
                    A.push(t),
                        t = [];
                    return
                }
                r.type !== 31 && t.push(r)
            }),
                t.length && A.push(t),
                A
        }
        , JB = function (e, A) {
            return A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3
        }
        , yA = function (e) {
            return e.type === 17 || e.type === 15
        }
        , N = function (e) {
            return e.type === 16 || yA(e)
        }
        , vs = function (e) {
            return e.length > 1 ? [e[0], e[1]] : [e[0]]
        }
        , W = {
            type: 17,
            number: 0,
            flags: Fe
        }
        , pr = {
            type: 16,
            number: 50,
            flags: Fe
        }
        , IA = {
            type: 16,
            number: 100,
            flags: Fe
        }
        , ve = function (e, A, t) {
            var r = e[0]
                , n = e[1];
            return [x(r, A), x(typeof n < "u" ? n : r, t)]
        }
        , x = function (e, A) {
            if (e.type === 16)
                return e.number / 100 * A;
            if (He(e))
                switch (e.unit) {
                    case "rem":
                    case "em":
                        return 16 * e.number;
                    case "px":
                    default:
                        return e.number
                }
            return e.number
        }
        , ys = "deg"
        , Is = "grad"
        , bs = "rad"
        , _s = "turn"
        , gt = {
            name: "angle",
            parse: function (e, A) {
                if (A.type === 15)
                    switch (A.unit) {
                        case ys:
                            return Math.PI * A.number / 180;
                        case Is:
                            return Math.PI / 200 * A.number;
                        case bs:
                            return A.number;
                        case _s:
                            return Math.PI * 2 * A.number
                    }
                throw new Error("Unsupported angle type")
            }
        }
        , Ls = function (e) {
            return e.type === 15 && (e.unit === ys || e.unit === Is || e.unit === bs || e.unit === _s)
        }
        , Ks = function (e) {
            var A = e.filter(L).map(function (t) {
                return t.value
            }).join(" ");
            switch (A) {
                case "to bottom right":
                case "to right bottom":
                case "left top":
                case "top left":
                    return [W, W];
                case "to top":
                case "bottom":
                    return iA(0);
                case "to bottom left":
                case "to left bottom":
                case "right top":
                case "top right":
                    return [W, IA];
                case "to right":
                case "left":
                    return iA(90);
                case "to top left":
                case "to left top":
                case "right bottom":
                case "bottom right":
                    return [IA, IA];
                case "to bottom":
                case "top":
                    return iA(180);
                case "to top right":
                case "to right top":
                case "left bottom":
                case "bottom left":
                    return [IA, W];
                case "to left":
                case "right":
                    return iA(270)
            }
            return 0
        }
        , iA = function (e) {
            return Math.PI * e / 180
        }
        , bA = {
            name: "color",
            parse: function (e, A) {
                if (A.type === 18) {
                    var t = WB[A.name];
                    if (typeof t > "u")
                        throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
                    return t(e, A.values)
                }
                if (A.type === 5) {
                    if (A.value.length === 3) {
                        var r = A.value.substring(0, 1)
                            , n = A.value.substring(1, 2)
                            , s = A.value.substring(2, 3);
                        return LA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), 1)
                    }
                    if (A.value.length === 4) {
                        var r = A.value.substring(0, 1)
                            , n = A.value.substring(1, 2)
                            , s = A.value.substring(2, 3)
                            , i = A.value.substring(3, 4);
                        return LA(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), parseInt(i + i, 16) / 255)
                    }
                    if (A.value.length === 6) {
                        var r = A.value.substring(0, 2)
                            , n = A.value.substring(2, 4)
                            , s = A.value.substring(4, 6);
                        return LA(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), 1)
                    }
                    if (A.value.length === 8) {
                        var r = A.value.substring(0, 2)
                            , n = A.value.substring(2, 4)
                            , s = A.value.substring(4, 6)
                            , i = A.value.substring(6, 8);
                        return LA(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), parseInt(i, 16) / 255)
                    }
                }
                if (A.type === 20) {
                    var o = UA[A.value.toUpperCase()];
                    if (typeof o < "u")
                        return o
                }
                return UA.TRANSPARENT
            }
        }
        , _A = function (e) {
            return (255 & e) === 0
        }
        , J = function (e) {
            var A = 255 & e
                , t = 255 & e >> 8
                , r = 255 & e >> 16
                , n = 255 & e >> 24;
            return A < 255 ? "rgba(" + n + "," + r + "," + t + "," + A / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")"
        }
        , LA = function (e, A, t, r) {
            return (e << 24 | A << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0
        }
        , Ss = function (e, A) {
            if (e.type === 17)
                return e.number;
            if (e.type === 16) {
                var t = A === 3 ? 1 : 255;
                return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t)
            }
            return 0
        }
        , xs = function (e, A) {
            var t = A.filter(ee);
            if (t.length === 3) {
                var r = t.map(Ss)
                    , n = r[0]
                    , s = r[1]
                    , i = r[2];
                return LA(n, s, i, 1)
            }
            if (t.length === 4) {
                var o = t.map(Ss)
                    , n = o[0]
                    , s = o[1]
                    , i = o[2]
                    , a = o[3];
                return LA(n, s, i, a)
            }
            return 0
        };
    function Er(e, A, t) {
        return t < 0 && (t += 1),
            t >= 1 && (t -= 1),
            t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e
    }
    var Ts = function (e, A) {
        var t = A.filter(ee)
            , r = t[0]
            , n = t[1]
            , s = t[2]
            , i = t[3]
            , o = (r.type === 17 ? iA(r.number) : gt.parse(e, r)) / (Math.PI * 2)
            , a = N(n) ? n.number / 100 : 0
            , B = N(s) ? s.number / 100 : 0
            , l = typeof i < "u" && N(i) ? x(i, 1) : 1;
        if (a === 0)
            return LA(B * 255, B * 255, B * 255, 1);
        var c = B <= .5 ? B * (a + 1) : B + a - B * a
            , u = B * 2 - c
            , g = Er(u, c, o + 1 / 3)
            , f = Er(u, c, o)
            , Q = Er(u, c, o - 1 / 3);
        return LA(g * 255, f * 255, Q * 255, l)
    }
        , WB = {
            hsl: Ts,
            hsla: Ts,
            rgb: xs,
            rgba: xs
        }
        , ye = function (e, A) {
            return bA.parse(e, ms.create(A).parseComponentValue())
        }
        , UA = {
            ALICEBLUE: 4042850303,
            ANTIQUEWHITE: 4209760255,
            AQUA: 16777215,
            AQUAMARINE: 2147472639,
            AZURE: 4043309055,
            BEIGE: 4126530815,
            BISQUE: 4293182719,
            BLACK: 255,
            BLANCHEDALMOND: 4293643775,
            BLUE: 65535,
            BLUEVIOLET: 2318131967,
            BROWN: 2771004159,
            BURLYWOOD: 3736635391,
            CADETBLUE: 1604231423,
            CHARTREUSE: 2147418367,
            CHOCOLATE: 3530104575,
            CORAL: 4286533887,
            CORNFLOWERBLUE: 1687547391,
            CORNSILK: 4294499583,
            CRIMSON: 3692313855,
            CYAN: 16777215,
            DARKBLUE: 35839,
            DARKCYAN: 9145343,
            DARKGOLDENROD: 3095837695,
            DARKGRAY: 2846468607,
            DARKGREEN: 6553855,
            DARKGREY: 2846468607,
            DARKKHAKI: 3182914559,
            DARKMAGENTA: 2332068863,
            DARKOLIVEGREEN: 1433087999,
            DARKORANGE: 4287365375,
            DARKORCHID: 2570243327,
            DARKRED: 2332033279,
            DARKSALMON: 3918953215,
            DARKSEAGREEN: 2411499519,
            DARKSLATEBLUE: 1211993087,
            DARKSLATEGRAY: 793726975,
            DARKSLATEGREY: 793726975,
            DARKTURQUOISE: 13554175,
            DARKVIOLET: 2483082239,
            DEEPPINK: 4279538687,
            DEEPSKYBLUE: 12582911,
            DIMGRAY: 1768516095,
            DIMGREY: 1768516095,
            DODGERBLUE: 512819199,
            FIREBRICK: 2988581631,
            FLORALWHITE: 4294635775,
            FORESTGREEN: 579543807,
            FUCHSIA: 4278255615,
            GAINSBORO: 3705462015,
            GHOSTWHITE: 4177068031,
            GOLD: 4292280575,
            GOLDENROD: 3668254975,
            GRAY: 2155905279,
            GREEN: 8388863,
            GREENYELLOW: 2919182335,
            GREY: 2155905279,
            HONEYDEW: 4043305215,
            HOTPINK: 4285117695,
            INDIANRED: 3445382399,
            INDIGO: 1258324735,
            IVORY: 4294963455,
            KHAKI: 4041641215,
            LAVENDER: 3873897215,
            LAVENDERBLUSH: 4293981695,
            LAWNGREEN: 2096890111,
            LEMONCHIFFON: 4294626815,
            LIGHTBLUE: 2916673279,
            LIGHTCORAL: 4034953471,
            LIGHTCYAN: 3774873599,
            LIGHTGOLDENRODYELLOW: 4210742015,
            LIGHTGRAY: 3553874943,
            LIGHTGREEN: 2431553791,
            LIGHTGREY: 3553874943,
            LIGHTPINK: 4290167295,
            LIGHTSALMON: 4288707327,
            LIGHTSEAGREEN: 548580095,
            LIGHTSKYBLUE: 2278488831,
            LIGHTSLATEGRAY: 2005441023,
            LIGHTSLATEGREY: 2005441023,
            LIGHTSTEELBLUE: 2965692159,
            LIGHTYELLOW: 4294959359,
            LIME: 16711935,
            LIMEGREEN: 852308735,
            LINEN: 4210091775,
            MAGENTA: 4278255615,
            MAROON: 2147483903,
            MEDIUMAQUAMARINE: 1724754687,
            MEDIUMBLUE: 52735,
            MEDIUMORCHID: 3126187007,
            MEDIUMPURPLE: 2473647103,
            MEDIUMSEAGREEN: 1018393087,
            MEDIUMSLATEBLUE: 2070474495,
            MEDIUMSPRINGGREEN: 16423679,
            MEDIUMTURQUOISE: 1221709055,
            MEDIUMVIOLETRED: 3340076543,
            MIDNIGHTBLUE: 421097727,
            MINTCREAM: 4127193855,
            MISTYROSE: 4293190143,
            MOCCASIN: 4293178879,
            NAVAJOWHITE: 4292783615,
            NAVY: 33023,
            OLDLACE: 4260751103,
            OLIVE: 2155872511,
            OLIVEDRAB: 1804477439,
            ORANGE: 4289003775,
            ORANGERED: 4282712319,
            ORCHID: 3664828159,
            PALEGOLDENROD: 4008225535,
            PALEGREEN: 2566625535,
            PALETURQUOISE: 2951671551,
            PALEVIOLETRED: 3681588223,
            PAPAYAWHIP: 4293907967,
            PEACHPUFF: 4292524543,
            PERU: 3448061951,
            PINK: 4290825215,
            PLUM: 3718307327,
            POWDERBLUE: 2967529215,
            PURPLE: 2147516671,
            REBECCAPURPLE: 1714657791,
            RED: 4278190335,
            ROSYBROWN: 3163525119,
            ROYALBLUE: 1097458175,
            SADDLEBROWN: 2336560127,
            SALMON: 4202722047,
            SANDYBROWN: 4104413439,
            SEAGREEN: 780883967,
            SEASHELL: 4294307583,
            SIENNA: 2689740287,
            SILVER: 3233857791,
            SKYBLUE: 2278484991,
            SLATEBLUE: 1784335871,
            SLATEGRAY: 1887473919,
            SLATEGREY: 1887473919,
            SNOW: 4294638335,
            SPRINGGREEN: 16744447,
            STEELBLUE: 1182971135,
            TAN: 3535047935,
            TEAL: 8421631,
            THISTLE: 3636451583,
            TOMATO: 4284696575,
            TRANSPARENT: 0,
            TURQUOISE: 1088475391,
            VIOLET: 4001558271,
            WHEAT: 4125012991,
            WHITE: 4294967295,
            WHITESMOKE: 4126537215,
            YELLOW: 4294902015,
            YELLOWGREEN: 2597139199
        }
        , YB = {
            name: "background-clip",
            initialValue: "border-box",
            prefix: !1,
            type: 1,
            parse: function (e, A) {
                return A.map(function (t) {
                    if (L(t))
                        switch (t.value) {
                            case "padding-box":
                                return 1;
                            case "content-box":
                                return 2
                        }
                    return 0
                })
            }
        }
        , ZB = {
            name: "background-color",
            initialValue: "transparent",
            prefix: !1,
            type: 3,
            format: "color"
        }
        , ft = function (e, A) {
            var t = bA.parse(e, A[0])
                , r = A[1];
            return r && N(r) ? {
                color: t,
                stop: r
            } : {
                color: t,
                stop: null
            }
        }
        , Ds = function (e, A) {
            var t = e[0]
                , r = e[e.length - 1];
            t.stop === null && (t.stop = W),
                r.stop === null && (r.stop = IA);
            for (var n = [], s = 0, i = 0; i < e.length; i++) {
                var o = e[i].stop;
                if (o !== null) {
                    var a = x(o, A);
                    a > s ? n.push(a) : n.push(s),
                        s = a
                } else
                    n.push(null)
            }
            for (var B = null, i = 0; i < n.length; i++) {
                var l = n[i];
                if (l === null)
                    B === null && (B = i);
                else if (B !== null) {
                    for (var c = i - B, u = n[B - 1], g = (l - u) / (c + 1), f = 1; f <= c; f++)
                        n[B + f - 1] = g * f;
                    B = null
                }
            }
            return e.map(function (Q, F) {
                var w = Q.color;
                return {
                    color: w,
                    stop: Math.max(Math.min(1, n[F] / A), 0)
                }
            })
        }
        , qB = function (e, A, t) {
            var r = A / 2
                , n = t / 2
                , s = x(e[0], A) - r
                , i = n - x(e[1], t);
            return (Math.atan2(i, s) + Math.PI * 2) % (Math.PI * 2)
        }
        , $B = function (e, A, t) {
            var r = typeof e == "number" ? e : qB(e, A, t)
                , n = Math.abs(A * Math.sin(r)) + Math.abs(t * Math.cos(r))
                , s = A / 2
                , i = t / 2
                , o = n / 2
                , a = Math.sin(r - Math.PI / 2) * o
                , B = Math.cos(r - Math.PI / 2) * o;
            return [n, s - B, s + B, i - a, i + a]
        }
        , lA = function (e, A) {
            return Math.sqrt(e * e + A * A)
        }
        , Os = function (e, A, t, r, n) {
            var s = [[0, 0], [0, A], [e, 0], [e, A]];
            return s.reduce(function (i, o) {
                var a = o[0]
                    , B = o[1]
                    , l = lA(t - a, r - B);
                return (n ? l < i.optimumDistance : l > i.optimumDistance) ? {
                    optimumCorner: o,
                    optimumDistance: l
                } : i
            }, {
                optimumDistance: n ? 1 / 0 : -1 / 0,
                optimumCorner: null
            }).optimumCorner
        }
        , jB = function (e, A, t, r, n) {
            var s = 0
                , i = 0;
            switch (e.size) {
                case 0:
                    e.shape === 0 ? s = i = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (s = Math.min(Math.abs(A), Math.abs(A - r)),
                        i = Math.min(Math.abs(t), Math.abs(t - n)));
                    break;
                case 2:
                    if (e.shape === 0)
                        s = i = Math.min(lA(A, t), lA(A, t - n), lA(A - r, t), lA(A - r, t - n));
                    else if (e.shape === 1) {
                        var o = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(A), Math.abs(A - r))
                            , a = Os(r, n, A, t, !0)
                            , B = a[0]
                            , l = a[1];
                        s = lA(B - A, (l - t) / o),
                            i = o * s
                    }
                    break;
                case 1:
                    e.shape === 0 ? s = i = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(t), Math.abs(t - n)) : e.shape === 1 && (s = Math.max(Math.abs(A), Math.abs(A - r)),
                        i = Math.max(Math.abs(t), Math.abs(t - n)));
                    break;
                case 3:
                    if (e.shape === 0)
                        s = i = Math.max(lA(A, t), lA(A, t - n), lA(A - r, t), lA(A - r, t - n));
                    else if (e.shape === 1) {
                        var o = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(A), Math.abs(A - r))
                            , c = Os(r, n, A, t, !1)
                            , B = c[0]
                            , l = c[1];
                        s = lA(B - A, (l - t) / o),
                            i = o * s
                    }
                    break
            }
            return Array.isArray(e.size) && (s = x(e.size[0], r),
                i = e.size.length === 2 ? x(e.size[1], n) : s),
                [s, i]
        }
        , zB = function (e, A) {
            var t = iA(180)
                , r = [];
            return gA(A).forEach(function (n, s) {
                if (s === 0) {
                    var i = n[0];
                    if (i.type === 20 && i.value === "to") {
                        t = Ks(n);
                        return
                    } else if (Ls(i)) {
                        t = gt.parse(e, i);
                        return
                    }
                }
                var o = ft(e, n);
                r.push(o)
            }),
            {
                angle: t,
                stops: r,
                type: 1
            }
        }
        , wt = function (e, A) {
            var t = iA(180)
                , r = [];
            return gA(A).forEach(function (n, s) {
                if (s === 0) {
                    var i = n[0];
                    if (i.type === 20 && ["top", "left", "right", "bottom"].indexOf(i.value) !== -1) {
                        t = Ks(n);
                        return
                    } else if (Ls(i)) {
                        t = (gt.parse(e, i) + iA(270)) % iA(360);
                        return
                    }
                }
                var o = ft(e, n);
                r.push(o)
            }),
            {
                angle: t,
                stops: r,
                type: 1
            }
        }
        , Ac = function (e, A) {
            var t = iA(180)
                , r = []
                , n = 1
                , s = 0
                , i = 3
                , o = [];
            return gA(A).forEach(function (a, B) {
                var l = a[0];
                if (B === 0) {
                    if (L(l) && l.value === "linear") {
                        n = 1;
                        return
                    } else if (L(l) && l.value === "radial") {
                        n = 2;
                        return
                    }
                }
                if (l.type === 18) {
                    if (l.name === "from") {
                        var c = bA.parse(e, l.values[0]);
                        r.push({
                            stop: W,
                            color: c
                        })
                    } else if (l.name === "to") {
                        var c = bA.parse(e, l.values[0]);
                        r.push({
                            stop: IA,
                            color: c
                        })
                    } else if (l.name === "color-stop") {
                        var u = l.values.filter(ee);
                        if (u.length === 2) {
                            var c = bA.parse(e, u[1])
                                , g = u[0];
                            Ae(g) && r.push({
                                stop: {
                                    type: 16,
                                    number: g.number * 100,
                                    flags: g.flags
                                },
                                color: c
                            })
                        }
                    }
                }
            }),
                n === 1 ? {
                    angle: (t + iA(180)) % iA(360),
                    stops: r,
                    type: n
                } : {
                    size: i,
                    shape: s,
                    stops: r,
                    position: o,
                    type: n
                }
        }
        , Rs = "closest-side"
        , Ms = "farthest-side"
        , Gs = "closest-corner"
        , Vs = "farthest-corner"
        , Ns = "circle"
        , ks = "ellipse"
        , Ps = "cover"
        , Xs = "contain"
        , ec = function (e, A) {
            var t = 0
                , r = 3
                , n = []
                , s = [];
            return gA(A).forEach(function (i, o) {
                var a = !0;
                if (o === 0) {
                    var B = !1;
                    a = i.reduce(function (c, u) {
                        if (B)
                            if (L(u))
                                switch (u.value) {
                                    case "center":
                                        return s.push(pr),
                                            c;
                                    case "top":
                                    case "left":
                                        return s.push(W),
                                            c;
                                    case "right":
                                    case "bottom":
                                        return s.push(IA),
                                            c
                                }
                            else
                                (N(u) || yA(u)) && s.push(u);
                        else if (L(u))
                            switch (u.value) {
                                case Ns:
                                    return t = 0,
                                        !1;
                                case ks:
                                    return t = 1,
                                        !1;
                                case "at":
                                    return B = !0,
                                        !1;
                                case Rs:
                                    return r = 0,
                                        !1;
                                case Ps:
                                case Ms:
                                    return r = 1,
                                        !1;
                                case Xs:
                                case Gs:
                                    return r = 2,
                                        !1;
                                case Vs:
                                    return r = 3,
                                        !1
                            }
                        else if (yA(u) || N(u))
                            return Array.isArray(r) || (r = []),
                                r.push(u),
                                !1;
                        return c
                    }, a)
                }
                if (a) {
                    var l = ft(e, i);
                    n.push(l)
                }
            }),
            {
                size: r,
                shape: t,
                stops: n,
                position: s,
                type: 2
            }
        }
        , Qt = function (e, A) {
            var t = 0
                , r = 3
                , n = []
                , s = [];
            return gA(A).forEach(function (i, o) {
                var a = !0;
                if (o === 0 ? a = i.reduce(function (l, c) {
                    if (L(c))
                        switch (c.value) {
                            case "center":
                                return s.push(pr),
                                    !1;
                            case "top":
                            case "left":
                                return s.push(W),
                                    !1;
                            case "right":
                            case "bottom":
                                return s.push(IA),
                                    !1
                        }
                    else if (N(c) || yA(c))
                        return s.push(c),
                            !1;
                    return l
                }, a) : o === 1 && (a = i.reduce(function (l, c) {
                    if (L(c))
                        switch (c.value) {
                            case Ns:
                                return t = 0,
                                    !1;
                            case ks:
                                return t = 1,
                                    !1;
                            case Xs:
                            case Rs:
                                return r = 0,
                                    !1;
                            case Ms:
                                return r = 1,
                                    !1;
                            case Gs:
                                return r = 2,
                                    !1;
                            case Ps:
                            case Vs:
                                return r = 3,
                                    !1
                        }
                    else if (yA(c) || N(c))
                        return Array.isArray(r) || (r = []),
                            r.push(c),
                            !1;
                    return l
                }, a)),
                    a) {
                    var B = ft(e, i);
                    n.push(B)
                }
            }),
            {
                size: r,
                shape: t,
                stops: n,
                position: s,
                type: 2
            }
        }
        , tc = function (e) {
            return e.type === 1
        }
        , rc = function (e) {
            return e.type === 2
        }
        , mr = {
            name: "image",
            parse: function (e, A) {
                if (A.type === 22) {
                    var t = {
                        url: A.value,
                        type: 0
                    };
                    return e.cache.addImage(A.value),
                        t
                }
                if (A.type === 18) {
                    var r = Js[A.name];
                    if (typeof r > "u")
                        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
                    return r(e, A.values)
                }
                throw new Error("Unsupported image type " + A.type)
            }
        };
    function nc(e) {
        return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!Js[e.name])
    }
    var Js = {
        "linear-gradient": zB,
        "-moz-linear-gradient": wt,
        "-ms-linear-gradient": wt,
        "-o-linear-gradient": wt,
        "-webkit-linear-gradient": wt,
        "radial-gradient": ec,
        "-moz-radial-gradient": Qt,
        "-ms-radial-gradient": Qt,
        "-o-radial-gradient": Qt,
        "-webkit-radial-gradient": Qt,
        "-webkit-gradient": Ac
    }, sc = {
        name: "background-image",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function (e, A) {
            if (A.length === 0)
                return [];
            var t = A[0];
            return t.type === 20 && t.value === "none" ? [] : A.filter(function (r) {
                return ee(r) && nc(r)
            }).map(function (r) {
                return mr.parse(e, r)
            })
        }
    }, ic = {
        name: "background-origin",
        initialValue: "border-box",
        prefix: !1,
        type: 1,
        parse: function (e, A) {
            return A.map(function (t) {
                if (L(t))
                    switch (t.value) {
                        case "padding-box":
                            return 1;
                        case "content-box":
                            return 2
                    }
                return 0
            })
        }
    }, oc = {
        name: "background-position",
        initialValue: "0% 0%",
        type: 1,
        prefix: !1,
        parse: function (e, A) {
            return gA(A).map(function (t) {
                return t.filter(N)
            }).map(vs)
        }
    }, ac = {
        name: "background-repeat",
        initialValue: "repeat",
        prefix: !1,
        type: 1,
        parse: function (e, A) {
            return gA(A).map(function (t) {
                return t.filter(L).map(function (r) {
                    return r.value
                }).join(" ")
            }).map(Bc)
        }
    }, Bc = function (e) {
        switch (e) {
            case "no-repeat":
                return 1;
            case "repeat-x":
            case "repeat no-repeat":
                return 2;
            case "repeat-y":
            case "no-repeat repeat":
                return 3;
            case "repeat":
            default:
                return 0
        }
    }, te;
    (function (e) {
        e.AUTO = "auto",
            e.CONTAIN = "contain",
            e.COVER = "cover"
    }
    )(te || (te = {}));
    var cc = {
        name: "background-size",
        initialValue: "0",
        prefix: !1,
        type: 1,
        parse: function (e, A) {
            return gA(A).map(function (t) {
                return t.filter(lc)
            })
        }
    }, lc = function (e) {
        return L(e) || N(e)
    }, ht = function (e) {
        return {
            name: "border-" + e + "-color",
            initialValue: "transparent",
            prefix: !1,
            type: 3,
            format: "color"
        }
    }, uc = ht("top"), gc = ht("right"), fc = ht("bottom"), wc = ht("left"), Ct = function (e) {
        return {
            name: "border-radius-" + e,
            initialValue: "0 0",
            prefix: !1,
            type: 1,
            parse: function (A, t) {
                return vs(t.filter(N))
            }
        }
    }, Qc = Ct("top-left"), hc = Ct("top-right"), Cc = Ct("bottom-right"), Uc = Ct("bottom-left"), Ut = function (e) {
        return {
            name: "border-" + e + "-style",
            initialValue: "solid",
            prefix: !1,
            type: 2,
            parse: function (A, t) {
                switch (t) {
                    case "none":
                        return 0;
                    case "dashed":
                        return 2;
                    case "dotted":
                        return 3;
                    case "double":
                        return 4
                }
                return 1
            }
        }
    }, Fc = Ut("top"), dc = Ut("right"), pc = Ut("bottom"), Ec = Ut("left"), Ft = function (e) {
        return {
            name: "border-" + e + "-width",
            initialValue: "0",
            type: 0,
            prefix: !1,
            parse: function (A, t) {
                return He(t) ? t.number : 0
            }
        }
    }, mc = Ft("top"), Hc = Ft("right"), vc = Ft("bottom"), yc = Ft("left"), Ic = {
        name: "color",
        initialValue: "transparent",
        prefix: !1,
        type: 3,
        format: "color"
    }, bc = {
        name: "direction",
        initialValue: "ltr",
        prefix: !1,
        type: 2,
        parse: function (e, A) {
            switch (A) {
                case "rtl":
                    return 1;
                case "ltr":
                default:
                    return 0
            }
        }
    }, _c = {
        name: "display",
        initialValue: "inline-block",
        prefix: !1,
        type: 1,
        parse: function (e, A) {
            return A.filter(L).reduce(function (t, r) {
                return t | Lc(r.value)
            }, 0)
        }
    }, Lc = function (e) {
        switch (e) {
            case "block":
            case "-webkit-box":
                return 2;
            case "inline":
                return 4;
            case "run-in":
                return 8;
            case "flow":
                return 16;
            case "flow-root":
                return 32;
            case "table":
                return 64;
            case "flex":
            case "-webkit-flex":
                return 128;
            case "grid":
            case "-ms-grid":
                return 256;
            case "ruby":
                return 512;
            case "subgrid":
                return 1024;
            case "list-item":
                return 2048;
            case "table-row-group":
                return 4096;
            case "table-header-group":
                return 8192;
            case "table-footer-group":
                return 16384;
            case "table-row":
                return 32768;
            case "table-cell":
                return 65536;
            case "table-column-group":
                return 131072;
            case "table-column":
                return 262144;
            case "table-caption":
                return 524288;
            case "ruby-base":
                return 1048576;
            case "ruby-text":
                return 2097152;
            case "ruby-base-container":
                return 4194304;
            case "ruby-text-container":
                return 8388608;
            case "contents":
                return 16777216;
            case "inline-block":
                return 33554432;
            case "inline-list-item":
                return 67108864;
            case "inline-table":
                return 134217728;
            case "inline-flex":
                return 268435456;
            case "inline-grid":
                return 536870912
        }
        return 0
    }, Kc = {
        name: "float",
        initialValue: "none",
        prefix: !1,
        type: 2,
        parse: function (e, A) {
            switch (A) {
                case "left":
                    return 1;
                case "right":
                    return 2;
                case "inline-start":
                    return 3;
                case "inline-end":
                    return 4
            }
            return 0
        }
    }, Sc = {
        name: "letter-spacing",
        initialValue: "0",
        prefix: !1,
        type: 0,
        parse: function (e, A) {
            return A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0
        }
    }, dt;
    (function (e) {
        e.NORMAL = "normal",
            e.STRICT = "strict"
    }
    )(dt || (dt = {}));
    var xc = {
        name: "line-break",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function (e, A) {
            switch (A) {
                case "strict":
                    return dt.STRICT;
                case "normal":
                default:
                    return dt.NORMAL
            }
        }
    }, Tc = {
        name: "line-height",
        initialValue: "normal",
        prefix: !1,
        type: 4
    }, Ws = function (e, A) {
        return L(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : N(e) ? x(e, A) : A
    }, Dc = {
        name: "list-style-image",
        initialValue: "none",
        type: 0,
        prefix: !1,
        parse: function (e, A) {
            return A.type === 20 && A.value === "none" ? null : mr.parse(e, A)
        }
    }, Oc = {
        name: "list-style-position",
        initialValue: "outside",
        prefix: !1,
        type: 2,
        parse: function (e, A) {
            switch (A) {
                case "inside":
                    return 0;
                case "outside":
                default:
                    return 1
            }
        }
    }, Hr = {
        name: "list-style-type",
        initialValue: "none",
        prefix: !1,
        type: 2,
        parse: function (e, A) {
            switch (A) {
                case "disc":
                    return 0;
                case "circle":
                    return 1;
                case "square":
                    return 2;
                case "decimal":
                    return 3;
                case "cjk-decimal":
                    return 4;
                case "decimal-leading-zero":
                    return 5;
                case "lower-roman":
                    return 6;
                case "upper-roman":
                    return 7;
                case "lower-greek":
                    return 8;
                case "lower-alpha":
                    return 9;
                case "upper-alpha":
                    return 10;
                case "arabic-indic":
                    return 11;
                case "armenian":
                    return 12;
                case "bengali":
                    return 13;
                case "cambodian":
                    return 14;
                case "cjk-earthly-branch":
                    return 15;
                case "cjk-heavenly-stem":
                    return 16;
                case "cjk-ideographic":
                    return 17;
                case "devanagari":
                    return 18;
                case "ethiopic-numeric":
                    return 19;
                case "georgian":
                    return 20;
                case "gujarati":
                    return 21;
                case "gurmukhi":
                    return 22;
                case "hebrew":
                    return 22;
                case "hiragana":
                    return 23;
                case "hiragana-iroha":
                    return 24;
                case "japanese-formal":
                    return 25;
                case "japanese-informal":
                    return 26;
                case "kannada":
                    return 27;
                case "katakana":
                    return 28;
                case "katakana-iroha":
                    return 29;
                case "khmer":
                    return 30;
                case "korean-hangul-formal":
                    return 31;
                case "korean-hanja-formal":
                    return 32;
                case "korean-hanja-informal":
                    return 33;
                case "lao":
                    return 34;
                case "lower-armenian":
                    return 35;
                case "malayalam":
                    return 36;
                case "mongolian":
                    return 37;
                case "myanmar":
                    return 38;
                case "oriya":
                    return 39;
                case "persian":
                    return 40;
                case "simp-chinese-formal":
                    return 41;
                case "simp-chinese-informal":
                    return 42;
                case "tamil":
                    return 43;
                case "telugu":
                    return 44;
                case "thai":
                    return 45;
                case "tibetan":
                    return 46;
                case "trad-chinese-formal":
                    return 47;
                case "trad-chinese-informal":
                    return 48;
                case "upper-armenian":
                    return 49;
                case "disclosure-open":
                    return 50;
                case "disclosure-closed":
                    return 51;
                case "none":
                default:
                    return -1
            }
        }
    }, pt = function (e) {
        return {
            name: "margin-" + e,
            initialValue: "0",
            prefix: !1,
            type: 4
        }
    }, Rc = pt("top"), Mc = pt("right"), Gc = pt("bottom"), Vc = pt("left"), Nc = {
        name: "overflow",
        initialValue: "visible",
        prefix: !1,
        type: 1,
        parse: function (e, A) {
            return A.filter(L).map(function (t) {
                switch (t.value) {
                    case "hidden":
                        return 1;
                    case "scroll":
                        return 2;
                    case "clip":
                        return 3;
                    case "auto":
                        return 4;
                    case "visible":
                    default:
                        return 0
                }
            })
        }
    }, kc = {
        name: "overflow-wrap",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function (e, A) {
            switch (A) {
                case "break-word":
                    return "break-word";
                case "normal":
                default:
                    return "normal"
            }
        }
    }, Et = function (e) {
        return {
            name: "padding-" + e,
            initialValue: "0",
            prefix: !1,
            type: 3,
            format: "length-percentage"
        }
    }, Pc = Et("top"), Xc = Et("right"), Jc = Et("bottom"), Wc = Et("left"), Yc = {
        name: "text-align",
        initialValue: "left",
        prefix: !1,
        type: 2,
        parse: function (e, A) {
            switch (A) {
                case "right":
                    return 2;
                case "center":
                case "justify":
                    return 1;
                case "left":
                default:
                    return 0
            }
        }
    }, Zc = {
        name: "position",
        initialValue: "static",
        prefix: !1,
        type: 2,
        parse: function (e, A) {
            switch (A) {
                case "relative":
                    return 1;
                case "absolute":
                    return 2;
                case "fixed":
                    return 3;
                case "sticky":
                    return 4
            }
            return 0
        }
    }, qc = {
        name: "text-shadow",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function (e, A) {
            return A.length === 1 && dr(A[0], "none") ? [] : gA(A).map(function (t) {
                for (var r = {
                    color: UA.TRANSPARENT,
                    offsetX: W,
                    offsetY: W,
                    blur: W
                }, n = 0, s = 0; s < t.length; s++) {
                    var i = t[s];
                    yA(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : r.blur = i,
                        n++) : r.color = bA.parse(e, i)
                }
                return r
            })
        }
    }, $c = {
        name: "text-transform",
        initialValue: "none",
        prefix: !1,
        type: 2,
        parse: function (e, A) {
            switch (A) {
                case "uppercase":
                    return 2;
                case "lowercase":
                    return 1;
                case "capitalize":
                    return 3
            }
            return 0
        }
    }, jc = {
        name: "transform",
        initialValue: "none",
        prefix: !0,
        type: 0,
        parse: function (e, A) {
            if (A.type === 20 && A.value === "none")
                return null;
            if (A.type === 18) {
                var t = el[A.name];
                if (typeof t > "u")
                    throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
                return t(A.values)
            }
            return null
        }
    }, zc = function (e) {
        var A = e.filter(function (t) {
            return t.type === 17
        }).map(function (t) {
            return t.number
        });
        return A.length === 6 ? A : null
    }, Al = function (e) {
        var A = e.filter(function (a) {
            return a.type === 17
        }).map(function (a) {
            return a.number
        })
            , t = A[0]
            , r = A[1];
        A[2],
            A[3];
        var n = A[4]
            , s = A[5];
        A[6],
            A[7],
            A[8],
            A[9],
            A[10],
            A[11];
        var i = A[12]
            , o = A[13];
        return A[14],
            A[15],
            A.length === 16 ? [t, r, n, s, i, o] : null
    }, el = {
        matrix: zc,
        matrix3d: Al
    }, Ys = {
        type: 16,
        number: 50,
        flags: Fe
    }, tl = [Ys, Ys], rl = {
        name: "transform-origin",
        initialValue: "50% 50%",
        prefix: !0,
        type: 1,
        parse: function (e, A) {
            var t = A.filter(N);
            return t.length !== 2 ? tl : [t[0], t[1]]
        }
    }, nl = {
        name: "visible",
        initialValue: "none",
        prefix: !1,
        type: 2,
        parse: function (e, A) {
            switch (A) {
                case "hidden":
                    return 1;
                case "collapse":
                    return 2;
                case "visible":
                default:
                    return 0
            }
        }
    }, Ie;
    (function (e) {
        e.NORMAL = "normal",
            e.BREAK_ALL = "break-all",
            e.KEEP_ALL = "keep-all"
    }
    )(Ie || (Ie = {}));
    for (var sl = {
        name: "word-break",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function (e, A) {
            switch (A) {
                case "break-all":
                    return Ie.BREAK_ALL;
                case "keep-all":
                    return Ie.KEEP_ALL;
                case "normal":
                default:
                    return Ie.NORMAL
            }
        }
    }, il = {
        name: "z-index",
        initialValue: "auto",
        prefix: !1,
        type: 0,
        parse: function (e, A) {
            if (A.type === 20)
                return {
                    auto: !0,
                    order: 0
                };
            if (Ae(A))
                return {
                    auto: !1,
                    order: A.number
                };
            throw new Error("Invalid z-index number parsed")
        }
    }, Zs = {
        name: "time",
        parse: function (e, A) {
            if (A.type === 15)
                switch (A.unit.toLowerCase()) {
                    case "s":
                        return 1e3 * A.number;
                    case "ms":
                        return A.number
                }
            throw new Error("Unsupported time type")
        }
    }, ol = {
        name: "opacity",
        initialValue: "1",
        type: 0,
        prefix: !1,
        parse: function (e, A) {
            return Ae(A) ? A.number : 1
        }
    }, al = {
        name: "text-decoration-color",
        initialValue: "transparent",
        prefix: !1,
        type: 3,
        format: "color"
    }, Bl = {
        name: "text-decoration-line",
        initialValue: "none",
        prefix: !1,
        type: 1,
        parse: function (e, A) {
            return A.filter(L).map(function (t) {
                switch (t.value) {
                    case "underline":
                        return 1;
                    case "overline":
                        return 2;
                    case "line-through":
                        return 3;
                    case "none":
                        return 4
                }
                return 0
            }).filter(function (t) {
                return t !== 0
            })
        }
    }, cl = {
        name: "font-family",
        initialValue: "",
        prefix: !1,
        type: 1,
        parse: function (e, A) {
            var t = []
                , r = [];
            return A.forEach(function (n) {
                switch (n.type) {
                    case 20:
                    case 0:
                        t.push(n.value);
                        break;
                    case 17:
                        t.push(n.number.toString());
                        break;
                    case 4:
                        r.push(t.join(" ")),
                            t.length = 0;
                        break
                }
            }),
                t.length && r.push(t.join(" ")),
                r.map(function (n) {
                    return n.indexOf(" ") === -1 ? n : "'" + n + "'"
                })
        }
    }, ll = {
        name: "font-size",
        initialValue: "0",
        prefix: !1,
        type: 3,
        format: "length"
    }, ul = {
        name: "font-weight",
        initialValue: "normal",
        type: 0,
        prefix: !1,
        parse: function (e, A) {
            if (Ae(A))
                return A.number;
            if (L(A))
                switch (A.value) {
                    case "bold":
                        return 700;
                    case "normal":
                    default:
                        return 400
                }
            return 400
        }
    }, gl = {
        name: "font-variant",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function (e, A) {
            return A.filter(L).map(function (t) {
                return t.value
            })
        }
    }, fl = {
        name: "font-style",
        initialValue: "normal",
        prefix: !1,
        type: 2,
        parse: function (e, A) {
            switch (A) {
                case "oblique":
                    return "oblique";
                case "italic":
                    return "italic";
                case "normal":
                default:
                    return "normal"
            }
        }
    }, X = function (e, A) {
        return (e & A) !== 0
    }, wl = {
        name: "content",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function (e, A) {
            if (A.length === 0)
                return [];
            var t = A[0];
            return t.type === 20 && t.value === "none" ? [] : A
        }
    }, Ql = {
        name: "counter-increment",
        initialValue: "none",
        prefix: !0,
        type: 1,
        parse: function (e, A) {
            if (A.length === 0)
                return null;
            var t = A[0];
            if (t.type === 20 && t.value === "none")
                return null;
            for (var r = [], n = A.filter(Hs), s = 0; s < n.length; s++) {
                var i = n[s]
                    , o = n[s + 1];
                if (i.type === 20) {
                    var a = o && Ae(o) ? o.number : 1;
                    r.push({
                        counter: i.value,
                        increment: a
                    })
                }
            }
            return r
        }
    }, hl = {
        name: "counter-reset",
        initialValue: "none",
        prefix: !0,
        type: 1,
        parse: function (e, A) {
            if (A.length === 0)
                return [];
            for (var t = [], r = A.filter(Hs), n = 0; n < r.length; n++) {
                var s = r[n]
                    , i = r[n + 1];
                if (L(s) && s.value !== "none") {
                    var o = i && Ae(i) ? i.number : 0;
                    t.push({
                        counter: s.value,
                        reset: o
                    })
                }
            }
            return t
        }
    }, Cl = {
        name: "duration",
        initialValue: "0s",
        prefix: !1,
        type: 1,
        parse: function (e, A) {
            return A.filter(He).map(function (t) {
                return Zs.parse(e, t)
            })
        }
    }, Ul = {
        name: "quotes",
        initialValue: "none",
        prefix: !0,
        type: 1,
        parse: function (e, A) {
            if (A.length === 0)
                return null;
            var t = A[0];
            if (t.type === 20 && t.value === "none")
                return null;
            var r = []
                , n = A.filter(XB);
            if (n.length % 2 !== 0)
                return null;
            for (var s = 0; s < n.length; s += 2) {
                var i = n[s].value
                    , o = n[s + 1].value;
                r.push({
                    open: i,
                    close: o
                })
            }
            return r
        }
    }, qs = function (e, A, t) {
        if (!e)
            return "";
        var r = e[Math.min(A, e.length - 1)];
        return r ? t ? r.open : r.close : ""
    }, Fl = {
        name: "box-shadow",
        initialValue: "none",
        type: 1,
        prefix: !1,
        parse: function (e, A) {
            return A.length === 1 && dr(A[0], "none") ? [] : gA(A).map(function (t) {
                for (var r = {
                    color: 255,
                    offsetX: W,
                    offsetY: W,
                    blur: W,
                    spread: W,
                    inset: !1
                }, n = 0, s = 0; s < t.length; s++) {
                    var i = t[s];
                    dr(i, "inset") ? r.inset = !0 : yA(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : n === 2 ? r.blur = i : r.spread = i,
                        n++) : r.color = bA.parse(e, i)
                }
                return r
            })
        }
    }, dl = {
        name: "paint-order",
        initialValue: "normal",
        prefix: !1,
        type: 1,
        parse: function (e, A) {
            var t = [0, 1, 2]
                , r = [];
            return A.filter(L).forEach(function (n) {
                switch (n.value) {
                    case "stroke":
                        r.push(1);
                        break;
                    case "fill":
                        r.push(0);
                        break;
                    case "markers":
                        r.push(2);
                        break
                }
            }),
                t.forEach(function (n) {
                    r.indexOf(n) === -1 && r.push(n)
                }),
                r
        }
    }, pl = {
        name: "-webkit-text-stroke-color",
        initialValue: "currentcolor",
        prefix: !1,
        type: 3,
        format: "color"
    }, El = {
        name: "-webkit-text-stroke-width",
        initialValue: "0",
        type: 0,
        prefix: !1,
        parse: function (e, A) {
            return He(A) ? A.number : 0
        }
    }, ml = (function () {
        function e(A, t) {
            var r, n;
            this.animationDuration = d(A, Cl, t.animationDuration),
                this.backgroundClip = d(A, YB, t.backgroundClip),
                this.backgroundColor = d(A, ZB, t.backgroundColor),
                this.backgroundImage = d(A, sc, t.backgroundImage),
                this.backgroundOrigin = d(A, ic, t.backgroundOrigin),
                this.backgroundPosition = d(A, oc, t.backgroundPosition),
                this.backgroundRepeat = d(A, ac, t.backgroundRepeat),
                this.backgroundSize = d(A, cc, t.backgroundSize),
                this.borderTopColor = d(A, uc, t.borderTopColor),
                this.borderRightColor = d(A, gc, t.borderRightColor),
                this.borderBottomColor = d(A, fc, t.borderBottomColor),
                this.borderLeftColor = d(A, wc, t.borderLeftColor),
                this.borderTopLeftRadius = d(A, Qc, t.borderTopLeftRadius),
                this.borderTopRightRadius = d(A, hc, t.borderTopRightRadius),
                this.borderBottomRightRadius = d(A, Cc, t.borderBottomRightRadius),
                this.borderBottomLeftRadius = d(A, Uc, t.borderBottomLeftRadius),
                this.borderTopStyle = d(A, Fc, t.borderTopStyle),
                this.borderRightStyle = d(A, dc, t.borderRightStyle),
                this.borderBottomStyle = d(A, pc, t.borderBottomStyle),
                this.borderLeftStyle = d(A, Ec, t.borderLeftStyle),
                this.borderTopWidth = d(A, mc, t.borderTopWidth),
                this.borderRightWidth = d(A, Hc, t.borderRightWidth),
                this.borderBottomWidth = d(A, vc, t.borderBottomWidth),
                this.borderLeftWidth = d(A, yc, t.borderLeftWidth),
                this.boxShadow = d(A, Fl, t.boxShadow),
                this.color = d(A, Ic, t.color),
                this.direction = d(A, bc, t.direction),
                this.display = d(A, _c, t.display),
                this.float = d(A, Kc, t.cssFloat),
                this.fontFamily = d(A, cl, t.fontFamily),
                this.fontSize = d(A, ll, t.fontSize),
                this.fontStyle = d(A, fl, t.fontStyle),
                this.fontVariant = d(A, gl, t.fontVariant),
                this.fontWeight = d(A, ul, t.fontWeight),
                this.letterSpacing = d(A, Sc, t.letterSpacing),
                this.lineBreak = d(A, xc, t.lineBreak),
                this.lineHeight = d(A, Tc, t.lineHeight),
                this.listStyleImage = d(A, Dc, t.listStyleImage),
                this.listStylePosition = d(A, Oc, t.listStylePosition),
                this.listStyleType = d(A, Hr, t.listStyleType),
                this.marginTop = d(A, Rc, t.marginTop),
                this.marginRight = d(A, Mc, t.marginRight),
                this.marginBottom = d(A, Gc, t.marginBottom),
                this.marginLeft = d(A, Vc, t.marginLeft),
                this.opacity = d(A, ol, t.opacity);
            var s = d(A, Nc, t.overflow);
            this.overflowX = s[0],
                this.overflowY = s[s.length > 1 ? 1 : 0],
                this.overflowWrap = d(A, kc, t.overflowWrap),
                this.paddingTop = d(A, Pc, t.paddingTop),
                this.paddingRight = d(A, Xc, t.paddingRight),
                this.paddingBottom = d(A, Jc, t.paddingBottom),
                this.paddingLeft = d(A, Wc, t.paddingLeft),
                this.paintOrder = d(A, dl, t.paintOrder),
                this.position = d(A, Zc, t.position),
                this.textAlign = d(A, Yc, t.textAlign),
                this.textDecorationColor = d(A, al, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color),
                this.textDecorationLine = d(A, Bl, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration),
                this.textShadow = d(A, qc, t.textShadow),
                this.textTransform = d(A, $c, t.textTransform),
                this.transform = d(A, jc, t.transform),
                this.transformOrigin = d(A, rl, t.transformOrigin),
                this.visibility = d(A, nl, t.visibility),
                this.webkitTextStrokeColor = d(A, pl, t.webkitTextStrokeColor),
                this.webkitTextStrokeWidth = d(A, El, t.webkitTextStrokeWidth),
                this.wordBreak = d(A, sl, t.wordBreak),
                this.zIndex = d(A, il, t.zIndex)
        }
        return e.prototype.isVisible = function () {
            return this.display > 0 && this.opacity > 0 && this.visibility === 0
        }
            ,
            e.prototype.isTransparent = function () {
                return _A(this.backgroundColor)
            }
            ,
            e.prototype.isTransformed = function () {
                return this.transform !== null
            }
            ,
            e.prototype.isPositioned = function () {
                return this.position !== 0
            }
            ,
            e.prototype.isPositionedWithZIndex = function () {
                return this.isPositioned() && !this.zIndex.auto
            }
            ,
            e.prototype.isFloating = function () {
                return this.float !== 0
            }
            ,
            e.prototype.isInlineLevel = function () {
                return X(this.display, 4) || X(this.display, 33554432) || X(this.display, 268435456) || X(this.display, 536870912) || X(this.display, 67108864) || X(this.display, 134217728)
            }
            ,
            e
    }
    )(), Hl = (function () {
        function e(A, t) {
            this.content = d(A, wl, t.content),
                this.quotes = d(A, Ul, t.quotes)
        }
        return e
    }
    )(), $s = (function () {
        function e(A, t) {
            this.counterIncrement = d(A, Ql, t.counterIncrement),
                this.counterReset = d(A, hl, t.counterReset)
        }
        return e
    }
    )(), d = function (e, A, t) {
        var r = new Es
            , n = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
        r.write(n);
        var s = new ms(r.read());
        switch (A.type) {
            case 2:
                var i = s.parseComponentValue();
                return A.parse(e, L(i) ? i.value : A.initialValue);
            case 0:
                return A.parse(e, s.parseComponentValue());
            case 1:
                return A.parse(e, s.parseComponentValues());
            case 4:
                return s.parseComponentValue();
            case 3:
                switch (A.format) {
                    case "angle":
                        return gt.parse(e, s.parseComponentValue());
                    case "color":
                        return bA.parse(e, s.parseComponentValue());
                    case "image":
                        return mr.parse(e, s.parseComponentValue());
                    case "length":
                        var o = s.parseComponentValue();
                        return yA(o) ? o : W;
                    case "length-percentage":
                        var a = s.parseComponentValue();
                        return N(a) ? a : W;
                    case "time":
                        return Zs.parse(e, s.parseComponentValue())
                }
                break
        }
    }, vl = "data-html2canvas-debug", yl = function (e) {
        var A = e.getAttribute(vl);
        switch (A) {
            case "all":
                return 1;
            case "clone":
                return 2;
            case "parse":
                return 3;
            case "render":
                return 4;
            default:
                return 0
        }
    }, vr = function (e, A) {
        var t = yl(e);
        return t === 1 || A === t
    }, fA = (function () {
        function e(A, t) {
            if (this.context = A,
                this.textNodes = [],
                this.elements = [],
                this.flags = 0,
                vr(t, 3))
                debugger; this.styles = new ml(A, window.getComputedStyle(t, null)),
                    Gr(t) && (this.styles.animationDuration.some(function (r) {
                        return r > 0
                    }) && (t.style.animationDuration = "0s"),
                        this.styles.transform !== null && (t.style.transform = "none")),
                    this.bounds = We(this.context, t),
                    vr(t, 4) && (this.flags |= 16)
        }
        return e
    }
    )(), Il = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", js = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", be = typeof Uint8Array > "u" ? [] : new Uint8Array(256), mt = 0; mt < js.length; mt++)
        be[js.charCodeAt(mt)] = mt;
    for (var bl = function (e) {
        var A = e.length * .75, t = e.length, r, n = 0, s, i, o, a;
        e[e.length - 1] === "=" && (A--,
            e[e.length - 2] === "=" && A--);
        var B = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A)
            , l = Array.isArray(B) ? B : new Uint8Array(B);
        for (r = 0; r < t; r += 4)
            s = be[e.charCodeAt(r)],
                i = be[e.charCodeAt(r + 1)],
                o = be[e.charCodeAt(r + 2)],
                a = be[e.charCodeAt(r + 3)],
                l[n++] = s << 2 | i >> 4,
                l[n++] = (i & 15) << 4 | o >> 2,
                l[n++] = (o & 3) << 6 | a & 63;
        return B
    }, _l = function (e) {
        for (var A = e.length, t = [], r = 0; r < A; r += 2)
            t.push(e[r + 1] << 8 | e[r]);
        return t
    }, Ll = function (e) {
        for (var A = e.length, t = [], r = 0; r < A; r += 4)
            t.push(e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r]);
        return t
    }, VA = 5, yr = 11, Ir = 2, Kl = yr - VA, zs = 65536 >> VA, Sl = 1 << VA, br = Sl - 1, xl = 1024 >> VA, Tl = zs + xl, Dl = Tl, Ol = 32, Rl = Dl + Ol, Ml = 65536 >> yr, Gl = 1 << Kl, Vl = Gl - 1, Ai = function (e, A, t) {
        return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t))
    }, Nl = function (e, A, t) {
        return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t))
    }, kl = function (e, A) {
        var t = bl(e)
            , r = Array.isArray(t) ? Ll(t) : new Uint32Array(t)
            , n = Array.isArray(t) ? _l(t) : new Uint16Array(t)
            , s = 24
            , i = Ai(n, s / 2, r[4] / 2)
            , o = r[5] === 2 ? Ai(n, (s + r[4]) / 2) : Nl(r, Math.ceil((s + r[4]) / 4));
        return new Pl(r[0], r[1], r[2], r[3], i, o)
    }, Pl = (function () {
        function e(A, t, r, n, s, i) {
            this.initialValue = A,
                this.errorValue = t,
                this.highStart = r,
                this.highValueIndex = n,
                this.index = s,
                this.data = i
        }
        return e.prototype.get = function (A) {
            var t;
            if (A >= 0) {
                if (A < 55296 || A > 56319 && A <= 65535)
                    return t = this.index[A >> VA],
                        t = (t << Ir) + (A & br),
                        this.data[t];
                if (A <= 65535)
                    return t = this.index[zs + (A - 55296 >> VA)],
                        t = (t << Ir) + (A & br),
                        this.data[t];
                if (A < this.highStart)
                    return t = Rl - Ml + (A >> yr),
                        t = this.index[t],
                        t += A >> VA & Vl,
                        t = this.index[t],
                        t = (t << Ir) + (A & br),
                        this.data[t];
                if (A <= 1114111)
                    return this.data[this.highValueIndex]
            }
            return this.errorValue
        }
            ,
            e
    }
    )(), ei = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Xl = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Ht = 0; Ht < ei.length; Ht++)
        Xl[ei.charCodeAt(Ht)] = Ht;
    var Jl = 1, _r = 2, Lr = 3, ti = 4, ri = 5, Wl = 7, ni = 8, Kr = 9, Sr = 10, si = 11, ii = 12, oi = 13, ai = 14, xr = 15, Yl = function (e) {
        for (var A = [], t = 0, r = e.length; t < r;) {
            var n = e.charCodeAt(t++);
            if (n >= 55296 && n <= 56319 && t < r) {
                var s = e.charCodeAt(t++);
                (s & 64512) === 56320 ? A.push(((n & 1023) << 10) + (s & 1023) + 65536) : (A.push(n),
                    t--)
            } else
                A.push(n)
        }
        return A
    }, Zl = function () {
        for (var e = [], A = 0; A < arguments.length; A++)
            e[A] = arguments[A];
        if (String.fromCodePoint)
            return String.fromCodePoint.apply(String, e);
        var t = e.length;
        if (!t)
            return "";
        for (var r = [], n = -1, s = ""; ++n < t;) {
            var i = e[n];
            i <= 65535 ? r.push(i) : (i -= 65536,
                r.push((i >> 10) + 55296, i % 1024 + 56320)),
                (n + 1 === t || r.length > 16384) && (s += String.fromCharCode.apply(String, r),
                    r.length = 0)
        }
        return s
    }, ql = kl(Il), oA = "×", Tr = "÷", $l = function (e) {
        return ql.get(e)
    }, jl = function (e, A, t) {
        var r = t - 2
            , n = A[r]
            , s = A[t - 1]
            , i = A[t];
        if (s === _r && i === Lr)
            return oA;
        if (s === _r || s === Lr || s === ti || i === _r || i === Lr || i === ti)
            return Tr;
        if (s === ni && [ni, Kr, si, ii].indexOf(i) !== -1 || (s === si || s === Kr) && (i === Kr || i === Sr) || (s === ii || s === Sr) && i === Sr || i === oi || i === ri || i === Wl || s === Jl)
            return oA;
        if (s === oi && i === ai) {
            for (; n === ri;)
                n = A[--r];
            if (n === ai)
                return oA
        }
        if (s === xr && i === xr) {
            for (var o = 0; n === xr;)
                o++,
                    n = A[--r];
            if (o % 2 === 0)
                return oA
        }
        return Tr
    }, zl = function (e) {
        var A = Yl(e)
            , t = A.length
            , r = 0
            , n = 0
            , s = A.map($l);
        return {
            next: function () {
                if (r >= t)
                    return {
                        done: !0,
                        value: null
                    };
                for (var i = oA; r < t && (i = jl(A, s, ++r)) === oA;)
                    ;
                if (i !== oA || r === t) {
                    var o = Zl.apply(null, A.slice(n, r));
                    return n = r,
                    {
                        value: o,
                        done: !1
                    }
                }
                return {
                    done: !0,
                    value: null
                }
            }
        }
    }, Au = function (e) {
        for (var A = zl(e), t = [], r; !(r = A.next()).done;)
            r.value && t.push(r.value.slice());
        return t
    }, eu = function (e) {
        var A = 123;
        if (e.createRange) {
            var t = e.createRange();
            if (t.getBoundingClientRect) {
                var r = e.createElement("boundtest");
                r.style.height = A + "px",
                    r.style.display = "block",
                    e.body.appendChild(r),
                    t.selectNode(r);
                var n = t.getBoundingClientRect()
                    , s = Math.round(n.height);
                if (e.body.removeChild(r),
                    s === A)
                    return !0
            }
        }
        return !1
    }, tu = function (e) {
        var A = e.createElement("boundtest");
        A.style.width = "50px",
            A.style.display = "block",
            A.style.fontSize = "12px",
            A.style.letterSpacing = "0px",
            A.style.wordSpacing = "0px",
            e.body.appendChild(A);
        var t = e.createRange();
        A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
        var r = A.firstChild
            , n = Ye(r.data).map(function (a) {
                return M(a)
            })
            , s = 0
            , i = {}
            , o = n.every(function (a, B) {
                t.setStart(r, s),
                    t.setEnd(r, s + a.length);
                var l = t.getBoundingClientRect();
                s += a.length;
                var c = l.x > i.x || l.y > i.y;
                return i = l,
                    B === 0 ? !0 : c
            });
        return e.body.removeChild(A),
            o
    }, ru = function () {
        return typeof new Image().crossOrigin < "u"
    }, nu = function () {
        return typeof new XMLHttpRequest().responseType == "string"
    }, su = function (e) {
        var A = new Image
            , t = e.createElement("canvas")
            , r = t.getContext("2d");
        if (!r)
            return !1;
        A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
        try {
            r.drawImage(A, 0, 0),
                t.toDataURL()
        } catch {
            return !1
        }
        return !0
    }, Bi = function (e) {
        return e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255
    }, iu = function (e) {
        var A = e.createElement("canvas")
            , t = 100;
        A.width = t,
            A.height = t;
        var r = A.getContext("2d");
        if (!r)
            return Promise.reject(!1);
        r.fillStyle = "rgb(0, 255, 0)",
            r.fillRect(0, 0, t, t);
        var n = new Image
            , s = A.toDataURL();
        n.src = s;
        var i = Dr(t, t, 0, 0, n);
        return r.fillStyle = "red",
            r.fillRect(0, 0, t, t),
            ci(i).then(function (o) {
                r.drawImage(o, 0, 0);
                var a = r.getImageData(0, 0, t, t).data;
                r.fillStyle = "red",
                    r.fillRect(0, 0, t, t);
                var B = e.createElement("div");
                return B.style.backgroundImage = "url(" + s + ")",
                    B.style.height = t + "px",
                    Bi(a) ? ci(Dr(t, t, 0, 0, B)) : Promise.reject(!1)
            }).then(function (o) {
                return r.drawImage(o, 0, 0),
                    Bi(r.getImageData(0, 0, t, t).data)
            }).catch(function () {
                return !1
            })
    }, Dr = function (e, A, t, r, n) {
        var s = "http://www.w3.org/2000/svg"
            , i = document.createElementNS(s, "svg")
            , o = document.createElementNS(s, "foreignObject");
        return i.setAttributeNS(null, "width", e.toString()),
            i.setAttributeNS(null, "height", A.toString()),
            o.setAttributeNS(null, "width", "100%"),
            o.setAttributeNS(null, "height", "100%"),
            o.setAttributeNS(null, "x", t.toString()),
            o.setAttributeNS(null, "y", r.toString()),
            o.setAttributeNS(null, "externalResourcesRequired", "true"),
            i.appendChild(o),
            o.appendChild(n),
            i
    }, ci = function (e) {
        return new Promise(function (A, t) {
            var r = new Image;
            r.onload = function () {
                return A(r)
            }
                ,
                r.onerror = t,
                r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e))
        }
        )
    }, Y = {
        get SUPPORT_RANGE_BOUNDS() {
            var e = eu(document);
            return Object.defineProperty(Y, "SUPPORT_RANGE_BOUNDS", {
                value: e
            }),
                e
        },
        get SUPPORT_WORD_BREAKING() {
            var e = Y.SUPPORT_RANGE_BOUNDS && tu(document);
            return Object.defineProperty(Y, "SUPPORT_WORD_BREAKING", {
                value: e
            }),
                e
        },
        get SUPPORT_SVG_DRAWING() {
            var e = su(document);
            return Object.defineProperty(Y, "SUPPORT_SVG_DRAWING", {
                value: e
            }),
                e
        },
        get SUPPORT_FOREIGNOBJECT_DRAWING() {
            var e = typeof Array.from == "function" && typeof window.fetch == "function" ? iu(document) : Promise.resolve(!1);
            return Object.defineProperty(Y, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                value: e
            }),
                e
        },
        get SUPPORT_CORS_IMAGES() {
            var e = ru();
            return Object.defineProperty(Y, "SUPPORT_CORS_IMAGES", {
                value: e
            }),
                e
        },
        get SUPPORT_RESPONSE_TYPE() {
            var e = nu();
            return Object.defineProperty(Y, "SUPPORT_RESPONSE_TYPE", {
                value: e
            }),
                e
        },
        get SUPPORT_CORS_XHR() {
            var e = "withCredentials" in new XMLHttpRequest;
            return Object.defineProperty(Y, "SUPPORT_CORS_XHR", {
                value: e
            }),
                e
        },
        get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
            var e = !!(typeof Intl < "u" && Intl.Segmenter);
            return Object.defineProperty(Y, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
                value: e
            }),
                e
        }
    }, _e = (function () {
        function e(A, t) {
            this.text = A,
                this.bounds = t
        }
        return e
    }
    )(), ou = function (e, A, t, r) {
        var n = cu(A, t)
            , s = []
            , i = 0;
        return n.forEach(function (o) {
            if (t.textDecorationLine.length || o.trim().length > 0)
                if (Y.SUPPORT_RANGE_BOUNDS) {
                    var a = li(r, i, o.length).getClientRects();
                    if (a.length > 1) {
                        var B = Or(o)
                            , l = 0;
                        B.forEach(function (u) {
                            s.push(new _e(u, hA.fromDOMRectList(e, li(r, l + i, u.length).getClientRects()))),
                                l += u.length
                        })
                    } else
                        s.push(new _e(o, hA.fromDOMRectList(e, a)))
                } else {
                    var c = r.splitText(o.length);
                    s.push(new _e(o, au(e, r))),
                        r = c
                }
            else
                Y.SUPPORT_RANGE_BOUNDS || (r = r.splitText(o.length));
            i += o.length
        }),
            s
    }, au = function (e, A) {
        var t = A.ownerDocument;
        if (t) {
            var r = t.createElement("html2canvaswrapper");
            r.appendChild(A.cloneNode(!0));
            var n = A.parentNode;
            if (n) {
                n.replaceChild(r, A);
                var s = We(e, r);
                return r.firstChild && n.replaceChild(r.firstChild, r),
                    s
            }
        }
        return hA.EMPTY
    }, li = function (e, A, t) {
        var r = e.ownerDocument;
        if (!r)
            throw new Error("Node has no owner document");
        var n = r.createRange();
        return n.setStart(e, A),
            n.setEnd(e, A + t),
            n
    }, Or = function (e) {
        if (Y.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            var A = new Intl.Segmenter(void 0, {
                granularity: "grapheme"
            });
            return Array.from(A.segment(e)).map(function (t) {
                return t.segment
            })
        }
        return Au(e)
    }, Bu = function (e, A) {
        if (Y.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            var t = new Intl.Segmenter(void 0, {
                granularity: "word"
            });
            return Array.from(t.segment(e)).map(function (r) {
                return r.segment
            })
        }
        return uu(e, A)
    }, cu = function (e, A) {
        return A.letterSpacing !== 0 ? Or(e) : Bu(e, A)
    }, lu = [32, 160, 4961, 65792, 65793, 4153, 4241], uu = function (e, A) {
        for (var t = Ma(e, {
            lineBreak: A.lineBreak,
            wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
        }), r = [], n, s = function () {
            if (n.value) {
                var i = n.value.slice()
                    , o = Ye(i)
                    , a = "";
                o.forEach(function (B) {
                    lu.indexOf(B) === -1 ? a += M(B) : (a.length && r.push(a),
                        r.push(M(B)),
                        a = "")
                }),
                    a.length && r.push(a)
            }
        }; !(n = t.next()).done;)
            s();
        return r
    }, gu = (function () {
        function e(A, t, r) {
            this.text = fu(t.data, r.textTransform),
                this.textBounds = ou(A, this.text, r, t)
        }
        return e
    }
    )(), fu = function (e, A) {
        switch (A) {
            case 1:
                return e.toLowerCase();
            case 3:
                return e.replace(wu, Qu);
            case 2:
                return e.toUpperCase();
            default:
                return e
        }
    }, wu = /(^|\s|:|-|\(|\))([a-z])/g, Qu = function (e, A, t) {
        return e.length > 0 ? A + t.toUpperCase() : e
    }, ui = (function (e) {
        cA(A, e);
        function A(t, r) {
            var n = e.call(this, t, r) || this;
            return n.src = r.currentSrc || r.src,
                n.intrinsicWidth = r.naturalWidth,
                n.intrinsicHeight = r.naturalHeight,
                n.context.cache.addImage(n.src),
                n
        }
        return A
    }
    )(fA), gi = (function (e) {
        cA(A, e);
        function A(t, r) {
            var n = e.call(this, t, r) || this;
            return n.canvas = r,
                n.intrinsicWidth = r.width,
                n.intrinsicHeight = r.height,
                n
        }
        return A
    }
    )(fA), fi = (function (e) {
        cA(A, e);
        function A(t, r) {
            var n = e.call(this, t, r) || this
                , s = new XMLSerializer
                , i = We(t, r);
            return r.setAttribute("width", i.width + "px"),
                r.setAttribute("height", i.height + "px"),
                n.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(r)),
                n.intrinsicWidth = r.width.baseVal.value,
                n.intrinsicHeight = r.height.baseVal.value,
                n.context.cache.addImage(n.svg),
                n
        }
        return A
    }
    )(fA), wi = (function (e) {
        cA(A, e);
        function A(t, r) {
            var n = e.call(this, t, r) || this;
            return n.value = r.value,
                n
        }
        return A
    }
    )(fA), Rr = (function (e) {
        cA(A, e);
        function A(t, r) {
            var n = e.call(this, t, r) || this;
            return n.start = r.start,
                n.reversed = typeof r.reversed == "boolean" && r.reversed === !0,
                n
        }
        return A
    }
    )(fA), hu = [{
        type: 15,
        flags: 0,
        unit: "px",
        number: 3
    }], Cu = [{
        type: 16,
        flags: 0,
        number: 50
    }], Uu = function (e) {
        return e.width > e.height ? new hA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new hA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e
    }, Fu = function (e) {
        var A = e.type === du ? new Array(e.value.length + 1).join("•") : e.value;
        return A.length === 0 ? e.placeholder || "" : A
    }, vt = "checkbox", yt = "radio", du = "password", Qi = 707406591, Mr = (function (e) {
        cA(A, e);
        function A(t, r) {
            var n = e.call(this, t, r) || this;
            switch (n.type = r.type.toLowerCase(),
            n.checked = r.checked,
            n.value = Fu(r),
            (n.type === vt || n.type === yt) && (n.styles.backgroundColor = 3739148031,
                n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575,
                n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1,
                n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1,
                n.styles.backgroundClip = [0],
                n.styles.backgroundOrigin = [0],
                n.bounds = Uu(n.bounds)),
            n.type) {
                case vt:
                    n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = hu;
                    break;
                case yt:
                    n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = Cu;
                    break
            }
            return n
        }
        return A
    }
    )(fA), hi = (function (e) {
        cA(A, e);
        function A(t, r) {
            var n = e.call(this, t, r) || this
                , s = r.options[r.selectedIndex || 0];
            return n.value = s && s.text || "",
                n
        }
        return A
    }
    )(fA), Ci = (function (e) {
        cA(A, e);
        function A(t, r) {
            var n = e.call(this, t, r) || this;
            return n.value = r.value,
                n
        }
        return A
    }
    )(fA), Ui = (function (e) {
        cA(A, e);
        function A(t, r) {
            var n = e.call(this, t, r) || this;
            n.src = r.src,
                n.width = parseInt(r.width, 10) || 0,
                n.height = parseInt(r.height, 10) || 0,
                n.backgroundColor = n.styles.backgroundColor;
            try {
                if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
                    n.tree = di(t, r.contentWindow.document.documentElement);
                    var s = r.contentWindow.document.documentElement ? ye(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : UA.TRANSPARENT
                        , i = r.contentWindow.document.body ? ye(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : UA.TRANSPARENT;
                    n.backgroundColor = _A(s) ? _A(i) ? n.styles.backgroundColor : i : s
                }
            } catch { }
            return n
        }
        return A
    }
    )(fA), pu = ["OL", "UL", "MENU"], It = function (e, A, t, r) {
        for (var n = A.firstChild, s = void 0; n; n = s)
            if (s = n.nextSibling,
                pi(n) && n.data.trim().length > 0)
                t.textNodes.push(new gu(e, n, t.styles));
            else if (re(n))
                if (Ii(n) && n.assignedNodes)
                    n.assignedNodes().forEach(function (o) {
                        return It(e, o, t, r)
                    });
                else {
                    var i = Fi(e, n);
                    i.styles.isVisible() && (Eu(n, i, r) ? i.flags |= 4 : mu(i.styles) && (i.flags |= 2),
                        pu.indexOf(n.tagName) !== -1 && (i.flags |= 8),
                        t.elements.push(i),
                        n.slot,
                        n.shadowRoot ? It(e, n.shadowRoot, i, r) : !_t(n) && !Ei(n) && !Lt(n) && It(e, n, i, r))
                }
    }, Fi = function (e, A) {
        return Nr(A) ? new ui(e, A) : mi(A) ? new gi(e, A) : Ei(A) ? new fi(e, A) : Hu(A) ? new wi(e, A) : vu(A) ? new Rr(e, A) : yu(A) ? new Mr(e, A) : Lt(A) ? new hi(e, A) : _t(A) ? new Ci(e, A) : vi(A) ? new Ui(e, A) : new fA(e, A)
    }, di = function (e, A) {
        var t = Fi(e, A);
        return t.flags |= 4,
            It(e, A, t, t),
            t
    }, Eu = function (e, A, t) {
        return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || Vr(e) && t.styles.isTransparent()
    }, mu = function (e) {
        return e.isPositioned() || e.isFloating()
    }, pi = function (e) {
        return e.nodeType === Node.TEXT_NODE
    }, re = function (e) {
        return e.nodeType === Node.ELEMENT_NODE
    }, Gr = function (e) {
        return re(e) && typeof e.style < "u" && !bt(e)
    }, bt = function (e) {
        return typeof e.className == "object"
    }, Hu = function (e) {
        return e.tagName === "LI"
    }, vu = function (e) {
        return e.tagName === "OL"
    }, yu = function (e) {
        return e.tagName === "INPUT"
    }, Iu = function (e) {
        return e.tagName === "HTML"
    }, Ei = function (e) {
        return e.tagName === "svg"
    }, Vr = function (e) {
        return e.tagName === "BODY"
    }, mi = function (e) {
        return e.tagName === "CANVAS"
    }, Hi = function (e) {
        return e.tagName === "VIDEO"
    }, Nr = function (e) {
        return e.tagName === "IMG"
    }, vi = function (e) {
        return e.tagName === "IFRAME"
    }, yi = function (e) {
        return e.tagName === "STYLE"
    }, bu = function (e) {
        return e.tagName === "SCRIPT"
    }, _t = function (e) {
        return e.tagName === "TEXTAREA"
    }, Lt = function (e) {
        return e.tagName === "SELECT"
    }, Ii = function (e) {
        return e.tagName === "SLOT"
    }, bi = function (e) {
        return e.tagName.indexOf("-") > 0
    }, _u = (function () {
        function e() {
            this.counters = {}
        }
        return e.prototype.getCounterValue = function (A) {
            var t = this.counters[A];
            return t && t.length ? t[t.length - 1] : 1
        }
            ,
            e.prototype.getCounterValues = function (A) {
                var t = this.counters[A];
                return t || []
            }
            ,
            e.prototype.pop = function (A) {
                var t = this;
                A.forEach(function (r) {
                    return t.counters[r].pop()
                })
            }
            ,
            e.prototype.parse = function (A) {
                var t = this
                    , r = A.counterIncrement
                    , n = A.counterReset
                    , s = !0;
                r !== null && r.forEach(function (o) {
                    var a = t.counters[o.counter];
                    a && o.increment !== 0 && (s = !1,
                        a.length || a.push(1),
                        a[Math.max(0, a.length - 1)] += o.increment)
                });
                var i = [];
                return s && n.forEach(function (o) {
                    var a = t.counters[o.counter];
                    i.push(o.counter),
                        a || (a = t.counters[o.counter] = []),
                        a.push(o.reset)
                }),
                    i
            }
            ,
            e
    }
    )(), _i = {
        integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    }, Li = {
        integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
    }, Lu = {
        integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
    }, Ku = {
        integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
    }, ne = function (e, A, t, r, n, s) {
        return e < A || e > t ? Ke(e, n, s.length > 0) : r.integers.reduce(function (i, o, a) {
            for (; e >= o;)
                e -= o,
                    i += r.values[a];
            return i
        }, "") + s
    }, Ki = function (e, A, t, r) {
        var n = "";
        do
            t || e--,
                n = r(e) + n,
                e /= A;
        while (e * A >= A);
        return n
    }, G = function (e, A, t, r, n) {
        var s = t - A + 1;
        return (e < 0 ? "-" : "") + (Ki(Math.abs(e), s, r, function (i) {
            return M(Math.floor(i % s) + A)
        }) + n)
    }, NA = function (e, A, t) {
        t === void 0 && (t = ". ");
        var r = A.length;
        return Ki(Math.abs(e), r, !1, function (n) {
            return A[Math.floor(n % r)]
        }) + t
    }, se = 1, KA = 2, SA = 4, Le = 8, FA = function (e, A, t, r, n, s) {
        if (e < -9999 || e > 9999)
            return Ke(e, 4, n.length > 0);
        var i = Math.abs(e)
            , o = n;
        if (i === 0)
            return A[0] + o;
        for (var a = 0; i > 0 && a <= 4; a++) {
            var B = i % 10;
            B === 0 && X(s, se) && o !== "" ? o = A[B] + o : B > 1 || B === 1 && a === 0 || B === 1 && a === 1 && X(s, KA) || B === 1 && a === 1 && X(s, SA) && e > 100 || B === 1 && a > 1 && X(s, Le) ? o = A[B] + (a > 0 ? t[a - 1] : "") + o : B === 1 && a > 0 && (o = t[a - 1] + o),
                i = Math.floor(i / 10)
        }
        return (e < 0 ? r : "") + o
    }, Si = "十百千萬", xi = "拾佰仟萬", Ti = "マイナス", kr = "마이너스", Ke = function (e, A, t) {
        var r = t ? ". " : ""
            , n = t ? "、" : ""
            , s = t ? ", " : ""
            , i = t ? " " : "";
        switch (A) {
            case 0:
                return "•" + i;
            case 1:
                return "◦" + i;
            case 2:
                return "◾" + i;
            case 5:
                var o = G(e, 48, 57, !0, r);
                return o.length < 4 ? "0" + o : o;
            case 4:
                return NA(e, "〇一二三四五六七八九", n);
            case 6:
                return ne(e, 1, 3999, _i, 3, r).toLowerCase();
            case 7:
                return ne(e, 1, 3999, _i, 3, r);
            case 8:
                return G(e, 945, 969, !1, r);
            case 9:
                return G(e, 97, 122, !1, r);
            case 10:
                return G(e, 65, 90, !1, r);
            case 11:
                return G(e, 1632, 1641, !0, r);
            case 12:
            case 49:
                return ne(e, 1, 9999, Li, 3, r);
            case 35:
                return ne(e, 1, 9999, Li, 3, r).toLowerCase();
            case 13:
                return G(e, 2534, 2543, !0, r);
            case 14:
            case 30:
                return G(e, 6112, 6121, !0, r);
            case 15:
                return NA(e, "子丑寅卯辰巳午未申酉戌亥", n);
            case 16:
                return NA(e, "甲乙丙丁戊己庚辛壬癸", n);
            case 17:
            case 48:
                return FA(e, "零一二三四五六七八九", Si, "負", n, KA | SA | Le);
            case 47:
                return FA(e, "零壹貳參肆伍陸柒捌玖", xi, "負", n, se | KA | SA | Le);
            case 42:
                return FA(e, "零一二三四五六七八九", Si, "负", n, KA | SA | Le);
            case 41:
                return FA(e, "零壹贰叁肆伍陆柒捌玖", xi, "负", n, se | KA | SA | Le);
            case 26:
                return FA(e, "〇一二三四五六七八九", "十百千万", Ti, n, 0);
            case 25:
                return FA(e, "零壱弐参四伍六七八九", "拾百千万", Ti, n, se | KA | SA);
            case 31:
                return FA(e, "영일이삼사오육칠팔구", "십백천만", kr, s, se | KA | SA);
            case 33:
                return FA(e, "零一二三四五六七八九", "十百千萬", kr, s, 0);
            case 32:
                return FA(e, "零壹貳參四五六七八九", "拾百千", kr, s, se | KA | SA);
            case 18:
                return G(e, 2406, 2415, !0, r);
            case 20:
                return ne(e, 1, 19999, Ku, 3, r);
            case 21:
                return G(e, 2790, 2799, !0, r);
            case 22:
                return G(e, 2662, 2671, !0, r);
            case 22:
                return ne(e, 1, 10999, Lu, 3, r);
            case 23:
                return NA(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
            case 24:
                return NA(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
            case 27:
                return G(e, 3302, 3311, !0, r);
            case 28:
                return NA(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
            case 29:
                return NA(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
            case 34:
                return G(e, 3792, 3801, !0, r);
            case 37:
                return G(e, 6160, 6169, !0, r);
            case 38:
                return G(e, 4160, 4169, !0, r);
            case 39:
                return G(e, 2918, 2927, !0, r);
            case 40:
                return G(e, 1776, 1785, !0, r);
            case 43:
                return G(e, 3046, 3055, !0, r);
            case 44:
                return G(e, 3174, 3183, !0, r);
            case 45:
                return G(e, 3664, 3673, !0, r);
            case 46:
                return G(e, 3872, 3881, !0, r);
            case 3:
            default:
                return G(e, 48, 57, !0, r)
        }
    }, Di = "data-html2canvas-ignore", Oi = (function () {
        function e(A, t, r) {
            if (this.context = A,
                this.options = r,
                this.scrolledElements = [],
                this.referenceElement = t,
                this.counters = new _u,
                this.quoteDepth = 0,
                !t.ownerDocument)
                throw new Error("Cloned element does not have an owner document");
            this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1)
        }
        return e.prototype.toIFrame = function (A, t) {
            var r = this
                , n = Su(A, t);
            if (!n.contentWindow)
                return Promise.reject("Unable to find iframe window");
            var s = A.defaultView.pageXOffset
                , i = A.defaultView.pageYOffset
                , o = n.contentWindow
                , a = o.document
                , B = Du(n).then(function () {
                    return z(r, void 0, void 0, function () {
                        var l, c;
                        return $(this, function (u) {
                            switch (u.label) {
                                case 0:
                                    return this.scrolledElements.forEach(Gu),
                                        o && (o.scrollTo(t.left, t.top),
                                            /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (o.scrollY !== t.top || o.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"),
                                                this.context.windowBounds = this.context.windowBounds.add(o.scrollX - t.left, o.scrollY - t.top, 0, 0))),
                                        l = this.options.onclone,
                                        c = this.clonedReferenceElement,
                                        typeof c > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : a.fonts && a.fonts.ready ? [4, a.fonts.ready] : [3, 2];
                                case 1:
                                    u.sent(),
                                        u.label = 2;
                                case 2:
                                    return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, Tu(a)] : [3, 4];
                                case 3:
                                    u.sent(),
                                        u.label = 4;
                                case 4:
                                    return typeof l == "function" ? [2, Promise.resolve().then(function () {
                                        return l(a, c)
                                    }).then(function () {
                                        return n
                                    })] : [2, n]
                            }
                        })
                    })
                });
            return a.open(),
                a.write(Ru(document.doctype) + "<html></html>"),
                Mu(this.referenceElement.ownerDocument, s, i),
                a.replaceChild(a.adoptNode(this.documentElement), a.documentElement),
                a.close(),
                B
        }
            ,
            e.prototype.createElementClone = function (A) {
                if (vr(A, 2))
                    debugger; if (mi(A))
                    return this.createCanvasClone(A);
                if (Hi(A))
                    return this.createVideoClone(A);
                if (yi(A))
                    return this.createStyleClone(A);
                var t = A.cloneNode(!1);
                return Nr(t) && (Nr(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc,
                    t.srcset = ""),
                    t.loading === "lazy" && (t.loading = "eager")),
                    bi(t) ? this.createCustomElementClone(t) : t
            }
            ,
            e.prototype.createCustomElementClone = function (A) {
                var t = document.createElement("html2canvascustomelement");
                return Pr(A.style, t),
                    t
            }
            ,
            e.prototype.createStyleClone = function (A) {
                try {
                    var t = A.sheet;
                    if (t && t.cssRules) {
                        var r = [].slice.call(t.cssRules, 0).reduce(function (s, i) {
                            return i && typeof i.cssText == "string" ? s + i.cssText : s
                        }, "")
                            , n = A.cloneNode(!1);
                        return n.textContent = r,
                            n
                    }
                } catch (s) {
                    if (this.context.logger.error("Unable to access cssRules property", s),
                        s.name !== "SecurityError")
                        throw s
                }
                return A.cloneNode(!1)
            }
            ,
            e.prototype.createCanvasClone = function (A) {
                var t;
                if (this.options.inlineImages && A.ownerDocument) {
                    var r = A.ownerDocument.createElement("img");
                    try {
                        return r.src = A.toDataURL(),
                            r
                    } catch {
                        this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A)
                    }
                }
                var n = A.cloneNode(!1);
                try {
                    n.width = A.width,
                        n.height = A.height;
                    var s = A.getContext("2d")
                        , i = n.getContext("2d");
                    if (i)
                        if (!this.options.allowTaint && s)
                            i.putImageData(s.getImageData(0, 0, A.width, A.height), 0, 0);
                        else {
                            var o = (t = A.getContext("webgl2")) !== null && t !== void 0 ? t : A.getContext("webgl");
                            if (o) {
                                var a = o.getContextAttributes();
                                a?.preserveDrawingBuffer === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A)
                            }
                            i.drawImage(A, 0, 0)
                        }
                    return n
                } catch {
                    this.context.logger.info("Unable to clone canvas as it is tainted", A)
                }
                return n
            }
            ,
            e.prototype.createVideoClone = function (A) {
                var t = A.ownerDocument.createElement("canvas");
                t.width = A.offsetWidth,
                    t.height = A.offsetHeight;
                var r = t.getContext("2d");
                try {
                    return r && (r.drawImage(A, 0, 0, t.width, t.height),
                        this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)),
                        t
                } catch {
                    this.context.logger.info("Unable to clone video as it is tainted", A)
                }
                var n = A.ownerDocument.createElement("canvas");
                return n.width = A.offsetWidth,
                    n.height = A.offsetHeight,
                    n
            }
            ,
            e.prototype.appendChildNode = function (A, t, r) {
                (!re(t) || !bu(t) && !t.hasAttribute(Di) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !re(t) || !yi(t)) && A.appendChild(this.cloneNode(t, r))
            }
            ,
            e.prototype.cloneChildNodes = function (A, t, r) {
                for (var n = this, s = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; s; s = s.nextSibling)
                    if (re(s) && Ii(s) && typeof s.assignedNodes == "function") {
                        var i = s.assignedNodes();
                        i.length && i.forEach(function (o) {
                            return n.appendChildNode(t, o, r)
                        })
                    } else
                        this.appendChildNode(t, s, r)
            }
            ,
            e.prototype.cloneNode = function (A, t) {
                if (pi(A))
                    return document.createTextNode(A.data);
                if (!A.ownerDocument)
                    return A.cloneNode(!1);
                var r = A.ownerDocument.defaultView;
                if (r && re(A) && (Gr(A) || bt(A))) {
                    var n = this.createElementClone(A);
                    n.style.transitionProperty = "none";
                    var s = r.getComputedStyle(A)
                        , i = r.getComputedStyle(A, ":before")
                        , o = r.getComputedStyle(A, ":after");
                    this.referenceElement === A && Gr(n) && (this.clonedReferenceElement = n),
                        Vr(n) && ku(n);
                    var a = this.counters.parse(new $s(this.context, s))
                        , B = this.resolvePseudoContent(A, n, i, Se.BEFORE);
                    bi(A) && (t = !0),
                        Hi(A) || this.cloneChildNodes(A, n, t),
                        B && n.insertBefore(B, n.firstChild);
                    var l = this.resolvePseudoContent(A, n, o, Se.AFTER);
                    return l && n.appendChild(l),
                        this.counters.pop(a),
                        (s && (this.options.copyStyles || bt(A)) && !vi(A) || t) && Pr(s, n),
                        (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]),
                        (_t(A) || Lt(A)) && (_t(n) || Lt(n)) && (n.value = A.value),
                        n
                }
                return A.cloneNode(!1)
            }
            ,
            e.prototype.resolvePseudoContent = function (A, t, r, n) {
                var s = this;
                if (r) {
                    var i = r.content
                        , o = t.ownerDocument;
                    if (!(!o || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
                        this.counters.parse(new $s(this.context, r));
                        var a = new Hl(this.context, r)
                            , B = o.createElement("html2canvaspseudoelement");
                        Pr(r, B),
                            a.content.forEach(function (c) {
                                if (c.type === 0)
                                    B.appendChild(o.createTextNode(c.value));
                                else if (c.type === 22) {
                                    var u = o.createElement("img");
                                    u.src = c.value,
                                        u.style.opacity = "1",
                                        B.appendChild(u)
                                } else if (c.type === 18) {
                                    if (c.name === "attr") {
                                        var g = c.values.filter(L);
                                        g.length && B.appendChild(o.createTextNode(A.getAttribute(g[0].value) || ""))
                                    } else if (c.name === "counter") {
                                        var f = c.values.filter(ee)
                                            , Q = f[0]
                                            , F = f[1];
                                        if (Q && L(Q)) {
                                            var w = s.counters.getCounterValue(Q.value)
                                                , h = F && L(F) ? Hr.parse(s.context, F.value) : 3;
                                            B.appendChild(o.createTextNode(Ke(w, h, !1)))
                                        }
                                    } else if (c.name === "counters") {
                                        var H = c.values.filter(ee)
                                            , Q = H[0]
                                            , E = H[1]
                                            , F = H[2];
                                        if (Q && L(Q)) {
                                            var p = s.counters.getCounterValues(Q.value)
                                                , C = F && L(F) ? Hr.parse(s.context, F.value) : 3
                                                , y = E && E.type === 0 ? E.value : ""
                                                , v = p.map(function (T) {
                                                    return Ke(T, C, !1)
                                                }).join(y);
                                            B.appendChild(o.createTextNode(v))
                                        }
                                    }
                                } else if (c.type === 20)
                                    switch (c.value) {
                                        case "open-quote":
                                            B.appendChild(o.createTextNode(qs(a.quotes, s.quoteDepth++, !0)));
                                            break;
                                        case "close-quote":
                                            B.appendChild(o.createTextNode(qs(a.quotes, --s.quoteDepth, !1)));
                                            break;
                                        default:
                                            B.appendChild(o.createTextNode(c.value))
                                    }
                            }),
                            B.className = Xr + " " + Jr;
                        var l = n === Se.BEFORE ? " " + Xr : " " + Jr;
                        return bt(t) ? t.className.baseValue += l : t.className += l,
                            B
                    }
                }
            }
            ,
            e.destroy = function (A) {
                return A.parentNode ? (A.parentNode.removeChild(A),
                    !0) : !1
            }
            ,
            e
    }
    )(), Se;
    (function (e) {
        e[e.BEFORE = 0] = "BEFORE",
            e[e.AFTER = 1] = "AFTER"
    }
    )(Se || (Se = {}));
    var Su = function (e, A) {
        var t = e.createElement("iframe");
        return t.className = "html2canvas-container",
            t.style.visibility = "hidden",
            t.style.position = "fixed",
            t.style.left = "-10000px",
            t.style.top = "0px",
            t.style.border = "0",
            t.width = A.width.toString(),
            t.height = A.height.toString(),
            t.scrolling = "no",
            t.setAttribute(Di, "true"),
            e.body.appendChild(t),
            t
    }, xu = function (e) {
        return new Promise(function (A) {
            if (e.complete) {
                A();
                return
            }
            if (!e.src) {
                A();
                return
            }
            e.onload = A,
                e.onerror = A
        }
        )
    }, Tu = function (e) {
        return Promise.all([].slice.call(e.images, 0).map(xu))
    }, Du = function (e) {
        return new Promise(function (A, t) {
            var r = e.contentWindow;
            if (!r)
                return t("No window assigned for iframe");
            var n = r.document;
            r.onload = e.onload = function () {
                r.onload = e.onload = null;
                var s = setInterval(function () {
                    n.body.childNodes.length > 0 && n.readyState === "complete" && (clearInterval(s),
                        A(e))
                }, 50)
            }
        }
        )
    }, Ou = ["all", "d", "content"], Pr = function (e, A) {
        for (var t = e.length - 1; t >= 0; t--) {
            var r = e.item(t);
            Ou.indexOf(r) === -1 && A.style.setProperty(r, e.getPropertyValue(r))
        }
        return A
    }, Ru = function (e) {
        var A = "";
        return e && (A += "<!DOCTYPE ",
            e.name && (A += e.name),
            e.internalSubset && (A += e.internalSubset),
            e.publicId && (A += '"' + e.publicId + '"'),
            e.systemId && (A += '"' + e.systemId + '"'),
            A += ">"),
            A
    }, Mu = function (e, A, t) {
        e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t)
    }, Gu = function (e) {
        var A = e[0]
            , t = e[1]
            , r = e[2];
        A.scrollLeft = t,
            A.scrollTop = r
    }, Vu = ":before", Nu = ":after", Xr = "___html2canvas___pseudoelement_before", Jr = "___html2canvas___pseudoelement_after", Ri = `{
    content: "" !important;
    display: none !important;
}`, ku = function (e) {
            Pu(e, "." + Xr + Vu + Ri + `
         .` + Jr + Nu + Ri)
        }, Pu = function (e, A) {
            var t = e.ownerDocument;
            if (t) {
                var r = t.createElement("style");
                r.textContent = A,
                    e.appendChild(r)
            }
        }, Mi = (function () {
            function e() { }
            return e.getOrigin = function (A) {
                var t = e._link;
                return t ? (t.href = A,
                    t.href = t.href,
                    t.protocol + t.hostname + t.port) : "about:blank"
            }
                ,
                e.isSameOrigin = function (A) {
                    return e.getOrigin(A) === e._origin
                }
                ,
                e.setContext = function (A) {
                    e._link = A.document.createElement("a"),
                        e._origin = e.getOrigin(A.location.href)
                }
                ,
                e._origin = "about:blank",
                e
        }
        )(), Xu = (function () {
            function e(A, t) {
                this.context = A,
                    this._options = t,
                    this._cache = {}
            }
            return e.prototype.addImage = function (A) {
                var t = Promise.resolve();
                return this.has(A) || (Yr(A) || Zu(A)) && (this._cache[A] = this.loadImage(A)).catch(function () { }),
                    t
            }
                ,
                e.prototype.match = function (A) {
                    return this._cache[A]
                }
                ,
                e.prototype.loadImage = function (A) {
                    return z(this, void 0, void 0, function () {
                        var t, r, n, s, i = this;
                        return $(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    return t = Mi.isSameOrigin(A),
                                        r = !Wr(A) && this._options.useCORS === !0 && Y.SUPPORT_CORS_IMAGES && !t,
                                        n = !Wr(A) && !t && !Yr(A) && typeof this._options.proxy == "string" && Y.SUPPORT_CORS_XHR && !r,
                                        !t && this._options.allowTaint === !1 && !Wr(A) && !Yr(A) && !n && !r ? [2] : (s = A,
                                            n ? [4, this.proxy(s)] : [3, 2]);
                                case 1:
                                    s = o.sent(),
                                        o.label = 2;
                                case 2:
                                    return this.context.logger.debug("Added image " + A.substring(0, 256)),
                                        [4, new Promise(function (a, B) {
                                            var l = new Image;
                                            l.onload = function () {
                                                return a(l)
                                            }
                                                ,
                                                l.onerror = B,
                                                (qu(s) || r) && (l.crossOrigin = "anonymous"),
                                                l.src = s,
                                                l.complete === !0 && setTimeout(function () {
                                                    return a(l)
                                                }, 500),
                                                i._options.imageTimeout > 0 && setTimeout(function () {
                                                    return B("Timed out (" + i._options.imageTimeout + "ms) loading image")
                                                }, i._options.imageTimeout)
                                        }
                                        )];
                                case 3:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }
                ,
                e.prototype.has = function (A) {
                    return typeof this._cache[A] < "u"
                }
                ,
                e.prototype.keys = function () {
                    return Promise.resolve(Object.keys(this._cache))
                }
                ,
                e.prototype.proxy = function (A) {
                    var t = this
                        , r = this._options.proxy;
                    if (!r)
                        throw new Error("No proxy defined");
                    var n = A.substring(0, 256);
                    return new Promise(function (s, i) {
                        var o = Y.SUPPORT_RESPONSE_TYPE ? "blob" : "text"
                            , a = new XMLHttpRequest;
                        a.onload = function () {
                            if (a.status === 200)
                                if (o === "text")
                                    s(a.response);
                                else {
                                    var c = new FileReader;
                                    c.addEventListener("load", function () {
                                        return s(c.result)
                                    }, !1),
                                        c.addEventListener("error", function (u) {
                                            return i(u)
                                        }, !1),
                                        c.readAsDataURL(a.response)
                                }
                            else
                                i("Failed to proxy resource " + n + " with status code " + a.status)
                        }
                            ,
                            a.onerror = i;
                        var B = r.indexOf("?") > -1 ? "&" : "?";
                        if (a.open("GET", "" + r + B + "url=" + encodeURIComponent(A) + "&responseType=" + o),
                            o !== "text" && a instanceof XMLHttpRequest && (a.responseType = o),
                            t._options.imageTimeout) {
                            var l = t._options.imageTimeout;
                            a.timeout = l,
                                a.ontimeout = function () {
                                    return i("Timed out (" + l + "ms) proxying " + n)
                                }
                        }
                        a.send()
                    }
                    )
                }
                ,
                e
        }
        )(), Ju = /^data:image\/svg\+xml/i, Wu = /^data:image\/.*;base64,/i, Yu = /^data:image\/.*/i, Zu = function (e) {
            return Y.SUPPORT_SVG_DRAWING || !$u(e)
        }, Wr = function (e) {
            return Yu.test(e)
        }, qu = function (e) {
            return Wu.test(e)
        }, Yr = function (e) {
            return e.substr(0, 4) === "blob"
        }, $u = function (e) {
            return e.substr(-3).toLowerCase() === "svg" || Ju.test(e)
        }, U = (function () {
            function e(A, t) {
                this.type = 0,
                    this.x = A,
                    this.y = t
            }
            return e.prototype.add = function (A, t) {
                return new e(this.x + A, this.y + t)
            }
                ,
                e
        }
        )(), ie = function (e, A, t) {
            return new U(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t)
        }, Kt = (function () {
            function e(A, t, r, n) {
                this.type = 1,
                    this.start = A,
                    this.startControl = t,
                    this.endControl = r,
                    this.end = n
            }
            return e.prototype.subdivide = function (A, t) {
                var r = ie(this.start, this.startControl, A)
                    , n = ie(this.startControl, this.endControl, A)
                    , s = ie(this.endControl, this.end, A)
                    , i = ie(r, n, A)
                    , o = ie(n, s, A)
                    , a = ie(i, o, A);
                return t ? new e(this.start, r, i, a) : new e(a, o, s, this.end)
            }
                ,
                e.prototype.add = function (A, t) {
                    return new e(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t))
                }
                ,
                e.prototype.reverse = function () {
                    return new e(this.end, this.endControl, this.startControl, this.start)
                }
                ,
                e
        }
        )(), aA = function (e) {
            return e.type === 1
        }, ju = (function () {
            function e(A) {
                var t = A.styles
                    , r = A.bounds
                    , n = ve(t.borderTopLeftRadius, r.width, r.height)
                    , s = n[0]
                    , i = n[1]
                    , o = ve(t.borderTopRightRadius, r.width, r.height)
                    , a = o[0]
                    , B = o[1]
                    , l = ve(t.borderBottomRightRadius, r.width, r.height)
                    , c = l[0]
                    , u = l[1]
                    , g = ve(t.borderBottomLeftRadius, r.width, r.height)
                    , f = g[0]
                    , Q = g[1]
                    , F = [];
                F.push((s + a) / r.width),
                    F.push((f + c) / r.width),
                    F.push((i + Q) / r.height),
                    F.push((B + u) / r.height);
                var w = Math.max.apply(Math, F);
                w > 1 && (s /= w,
                    i /= w,
                    a /= w,
                    B /= w,
                    c /= w,
                    u /= w,
                    f /= w,
                    Q /= w);
                var h = r.width - a
                    , H = r.height - u
                    , E = r.width - c
                    , p = r.height - Q
                    , C = t.borderTopWidth
                    , y = t.borderRightWidth
                    , v = t.borderBottomWidth
                    , m = t.borderLeftWidth
                    , O = x(t.paddingTop, A.bounds.width)
                    , T = x(t.paddingRight, A.bounds.width)
                    , k = x(t.paddingBottom, A.bounds.width)
                    , K = x(t.paddingLeft, A.bounds.width);
                this.topLeftBorderDoubleOuterBox = s > 0 || i > 0 ? D(r.left + m / 3, r.top + C / 3, s - m / 3, i - C / 3, _.TOP_LEFT) : new U(r.left + m / 3, r.top + C / 3),
                    this.topRightBorderDoubleOuterBox = s > 0 || i > 0 ? D(r.left + h, r.top + C / 3, a - y / 3, B - C / 3, _.TOP_RIGHT) : new U(r.left + r.width - y / 3, r.top + C / 3),
                    this.bottomRightBorderDoubleOuterBox = c > 0 || u > 0 ? D(r.left + E, r.top + H, c - y / 3, u - v / 3, _.BOTTOM_RIGHT) : new U(r.left + r.width - y / 3, r.top + r.height - v / 3),
                    this.bottomLeftBorderDoubleOuterBox = f > 0 || Q > 0 ? D(r.left + m / 3, r.top + p, f - m / 3, Q - v / 3, _.BOTTOM_LEFT) : new U(r.left + m / 3, r.top + r.height - v / 3),
                    this.topLeftBorderDoubleInnerBox = s > 0 || i > 0 ? D(r.left + m * 2 / 3, r.top + C * 2 / 3, s - m * 2 / 3, i - C * 2 / 3, _.TOP_LEFT) : new U(r.left + m * 2 / 3, r.top + C * 2 / 3),
                    this.topRightBorderDoubleInnerBox = s > 0 || i > 0 ? D(r.left + h, r.top + C * 2 / 3, a - y * 2 / 3, B - C * 2 / 3, _.TOP_RIGHT) : new U(r.left + r.width - y * 2 / 3, r.top + C * 2 / 3),
                    this.bottomRightBorderDoubleInnerBox = c > 0 || u > 0 ? D(r.left + E, r.top + H, c - y * 2 / 3, u - v * 2 / 3, _.BOTTOM_RIGHT) : new U(r.left + r.width - y * 2 / 3, r.top + r.height - v * 2 / 3),
                    this.bottomLeftBorderDoubleInnerBox = f > 0 || Q > 0 ? D(r.left + m * 2 / 3, r.top + p, f - m * 2 / 3, Q - v * 2 / 3, _.BOTTOM_LEFT) : new U(r.left + m * 2 / 3, r.top + r.height - v * 2 / 3),
                    this.topLeftBorderStroke = s > 0 || i > 0 ? D(r.left + m / 2, r.top + C / 2, s - m / 2, i - C / 2, _.TOP_LEFT) : new U(r.left + m / 2, r.top + C / 2),
                    this.topRightBorderStroke = s > 0 || i > 0 ? D(r.left + h, r.top + C / 2, a - y / 2, B - C / 2, _.TOP_RIGHT) : new U(r.left + r.width - y / 2, r.top + C / 2),
                    this.bottomRightBorderStroke = c > 0 || u > 0 ? D(r.left + E, r.top + H, c - y / 2, u - v / 2, _.BOTTOM_RIGHT) : new U(r.left + r.width - y / 2, r.top + r.height - v / 2),
                    this.bottomLeftBorderStroke = f > 0 || Q > 0 ? D(r.left + m / 2, r.top + p, f - m / 2, Q - v / 2, _.BOTTOM_LEFT) : new U(r.left + m / 2, r.top + r.height - v / 2),
                    this.topLeftBorderBox = s > 0 || i > 0 ? D(r.left, r.top, s, i, _.TOP_LEFT) : new U(r.left, r.top),
                    this.topRightBorderBox = a > 0 || B > 0 ? D(r.left + h, r.top, a, B, _.TOP_RIGHT) : new U(r.left + r.width, r.top),
                    this.bottomRightBorderBox = c > 0 || u > 0 ? D(r.left + E, r.top + H, c, u, _.BOTTOM_RIGHT) : new U(r.left + r.width, r.top + r.height),
                    this.bottomLeftBorderBox = f > 0 || Q > 0 ? D(r.left, r.top + p, f, Q, _.BOTTOM_LEFT) : new U(r.left, r.top + r.height),
                    this.topLeftPaddingBox = s > 0 || i > 0 ? D(r.left + m, r.top + C, Math.max(0, s - m), Math.max(0, i - C), _.TOP_LEFT) : new U(r.left + m, r.top + C),
                    this.topRightPaddingBox = a > 0 || B > 0 ? D(r.left + Math.min(h, r.width - y), r.top + C, h > r.width + y ? 0 : Math.max(0, a - y), Math.max(0, B - C), _.TOP_RIGHT) : new U(r.left + r.width - y, r.top + C),
                    this.bottomRightPaddingBox = c > 0 || u > 0 ? D(r.left + Math.min(E, r.width - m), r.top + Math.min(H, r.height - v), Math.max(0, c - y), Math.max(0, u - v), _.BOTTOM_RIGHT) : new U(r.left + r.width - y, r.top + r.height - v),
                    this.bottomLeftPaddingBox = f > 0 || Q > 0 ? D(r.left + m, r.top + Math.min(p, r.height - v), Math.max(0, f - m), Math.max(0, Q - v), _.BOTTOM_LEFT) : new U(r.left + m, r.top + r.height - v),
                    this.topLeftContentBox = s > 0 || i > 0 ? D(r.left + m + K, r.top + C + O, Math.max(0, s - (m + K)), Math.max(0, i - (C + O)), _.TOP_LEFT) : new U(r.left + m + K, r.top + C + O),
                    this.topRightContentBox = a > 0 || B > 0 ? D(r.left + Math.min(h, r.width + m + K), r.top + C + O, h > r.width + m + K ? 0 : a - m + K, B - (C + O), _.TOP_RIGHT) : new U(r.left + r.width - (y + T), r.top + C + O),
                    this.bottomRightContentBox = c > 0 || u > 0 ? D(r.left + Math.min(E, r.width - (m + K)), r.top + Math.min(H, r.height + C + O), Math.max(0, c - (y + T)), u - (v + k), _.BOTTOM_RIGHT) : new U(r.left + r.width - (y + T), r.top + r.height - (v + k)),
                    this.bottomLeftContentBox = f > 0 || Q > 0 ? D(r.left + m + K, r.top + p, Math.max(0, f - (m + K)), Q - (v + k), _.BOTTOM_LEFT) : new U(r.left + m + K, r.top + r.height - (v + k))
            }
            return e
        }
        )(), _;
    (function (e) {
        e[e.TOP_LEFT = 0] = "TOP_LEFT",
            e[e.TOP_RIGHT = 1] = "TOP_RIGHT",
            e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT",
            e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT"
    }
    )(_ || (_ = {}));
    var D = function (e, A, t, r, n) {
        var s = 4 * ((Math.sqrt(2) - 1) / 3)
            , i = t * s
            , o = r * s
            , a = e + t
            , B = A + r;
        switch (n) {
            case _.TOP_LEFT:
                return new Kt(new U(e, B), new U(e, B - o), new U(a - i, A), new U(a, A));
            case _.TOP_RIGHT:
                return new Kt(new U(e, A), new U(e + i, A), new U(a, B - o), new U(a, B));
            case _.BOTTOM_RIGHT:
                return new Kt(new U(a, A), new U(a, A + o), new U(e + i, B), new U(e, B));
            case _.BOTTOM_LEFT:
            default:
                return new Kt(new U(a, B), new U(a - i, B), new U(e, A + o), new U(e, A))
        }
    }
        , St = function (e) {
            return [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox]
        }
        , zu = function (e) {
            return [e.topLeftContentBox, e.topRightContentBox, e.bottomRightContentBox, e.bottomLeftContentBox]
        }
        , xt = function (e) {
            return [e.topLeftPaddingBox, e.topRightPaddingBox, e.bottomRightPaddingBox, e.bottomLeftPaddingBox]
        }
        , Ag = (function () {
            function e(A, t, r) {
                this.offsetX = A,
                    this.offsetY = t,
                    this.matrix = r,
                    this.type = 0,
                    this.target = 6
            }
            return e
        }
        )()
        , Tt = (function () {
            function e(A, t) {
                this.path = A,
                    this.target = t,
                    this.type = 1
            }
            return e
        }
        )()
        , eg = (function () {
            function e(A) {
                this.opacity = A,
                    this.type = 2,
                    this.target = 6
            }
            return e
        }
        )()
        , tg = function (e) {
            return e.type === 0
        }
        , Gi = function (e) {
            return e.type === 1
        }
        , rg = function (e) {
            return e.type === 2
        }
        , Vi = function (e, A) {
            return e.length === A.length ? e.some(function (t, r) {
                return t === A[r]
            }) : !1
        }
        , ng = function (e, A, t, r, n) {
            return e.map(function (s, i) {
                switch (i) {
                    case 0:
                        return s.add(A, t);
                    case 1:
                        return s.add(A + r, t);
                    case 2:
                        return s.add(A + r, t + n);
                    case 3:
                        return s.add(A, t + n)
                }
                return s
            })
        }
        , Ni = (function () {
            function e(A) {
                this.element = A,
                    this.inlineLevel = [],
                    this.nonInlineLevel = [],
                    this.negativeZIndex = [],
                    this.zeroOrAutoZIndexOrTransformedOrOpacity = [],
                    this.positiveZIndex = [],
                    this.nonPositionedFloats = [],
                    this.nonPositionedInlineLevel = []
            }
            return e
        }
        )()
        , ki = (function () {
            function e(A, t) {
                if (this.container = A,
                    this.parent = t,
                    this.effects = [],
                    this.curves = new ju(this.container),
                    this.container.styles.opacity < 1 && this.effects.push(new eg(this.container.styles.opacity)),
                    this.container.styles.transform !== null) {
                    var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number
                        , n = this.container.bounds.top + this.container.styles.transformOrigin[1].number
                        , s = this.container.styles.transform;
                    this.effects.push(new Ag(r, n, s))
                }
                if (this.container.styles.overflowX !== 0) {
                    var i = St(this.curves)
                        , o = xt(this.curves);
                    Vi(i, o) ? this.effects.push(new Tt(i, 6)) : (this.effects.push(new Tt(i, 2)),
                        this.effects.push(new Tt(o, 4)))
                }
            }
            return e.prototype.getEffects = function (A) {
                for (var t = [2, 3].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r;) {
                    var s = r.effects.filter(function (a) {
                        return !Gi(a)
                    });
                    if (t || r.container.styles.position !== 0 || !r.parent) {
                        if (n.unshift.apply(n, s),
                            t = [2, 3].indexOf(r.container.styles.position) === -1,
                            r.container.styles.overflowX !== 0) {
                            var i = St(r.curves)
                                , o = xt(r.curves);
                            Vi(i, o) || n.unshift(new Tt(o, 6))
                        }
                    } else
                        n.unshift.apply(n, s);
                    r = r.parent
                }
                return n.filter(function (a) {
                    return X(a.target, A)
                })
            }
                ,
                e
        }
        )()
        , Zr = function (e, A, t, r) {
            e.container.elements.forEach(function (n) {
                var s = X(n.flags, 4)
                    , i = X(n.flags, 2)
                    , o = new ki(n, e);
                X(n.styles.display, 2048) && r.push(o);
                var a = X(n.flags, 8) ? [] : r;
                if (s || i) {
                    var B = s || n.styles.isPositioned() ? t : A
                        , l = new Ni(o);
                    if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
                        var c = n.styles.zIndex.order;
                        if (c < 0) {
                            var u = 0;
                            B.negativeZIndex.some(function (f, Q) {
                                return c > f.element.container.styles.zIndex.order ? (u = Q,
                                    !1) : u > 0
                            }),
                                B.negativeZIndex.splice(u, 0, l)
                        } else if (c > 0) {
                            var g = 0;
                            B.positiveZIndex.some(function (f, Q) {
                                return c >= f.element.container.styles.zIndex.order ? (g = Q + 1,
                                    !1) : g > 0
                            }),
                                B.positiveZIndex.splice(g, 0, l)
                        } else
                            B.zeroOrAutoZIndexOrTransformedOrOpacity.push(l)
                    } else
                        n.styles.isFloating() ? B.nonPositionedFloats.push(l) : B.nonPositionedInlineLevel.push(l);
                    Zr(o, l, s ? l : t, a)
                } else
                    n.styles.isInlineLevel() ? A.inlineLevel.push(o) : A.nonInlineLevel.push(o),
                        Zr(o, A, t, a);
                X(n.flags, 8) && Pi(n, a)
            })
        }
        , Pi = function (e, A) {
            for (var t = e instanceof Rr ? e.start : 1, r = e instanceof Rr ? e.reversed : !1, n = 0; n < A.length; n++) {
                var s = A[n];
                s.container instanceof wi && typeof s.container.value == "number" && s.container.value !== 0 && (t = s.container.value),
                    s.listValue = Ke(t, s.container.styles.listStyleType, !0),
                    t += r ? -1 : 1
            }
        }
        , sg = function (e) {
            var A = new ki(e, null)
                , t = new Ni(A)
                , r = [];
            return Zr(A, t, t, r),
                Pi(A.container, r),
                t
        }
        , Xi = function (e, A) {
            switch (A) {
                case 0:
                    return BA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
                case 1:
                    return BA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
                case 2:
                    return BA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
                case 3:
                default:
                    return BA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox)
            }
        }
        , ig = function (e, A) {
            switch (A) {
                case 0:
                    return BA(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
                case 1:
                    return BA(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
                case 2:
                    return BA(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
                case 3:
                default:
                    return BA(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox)
            }
        }
        , og = function (e, A) {
            switch (A) {
                case 0:
                    return BA(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
                case 1:
                    return BA(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
                case 2:
                    return BA(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
                case 3:
                default:
                    return BA(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox)
            }
        }
        , ag = function (e, A) {
            switch (A) {
                case 0:
                    return Dt(e.topLeftBorderStroke, e.topRightBorderStroke);
                case 1:
                    return Dt(e.topRightBorderStroke, e.bottomRightBorderStroke);
                case 2:
                    return Dt(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
                case 3:
                default:
                    return Dt(e.bottomLeftBorderStroke, e.topLeftBorderStroke)
            }
        }
        , Dt = function (e, A) {
            var t = [];
            return aA(e) ? t.push(e.subdivide(.5, !1)) : t.push(e),
                aA(A) ? t.push(A.subdivide(.5, !0)) : t.push(A),
                t
        }
        , BA = function (e, A, t, r) {
            var n = [];
            return aA(e) ? n.push(e.subdivide(.5, !1)) : n.push(e),
                aA(t) ? n.push(t.subdivide(.5, !0)) : n.push(t),
                aA(r) ? n.push(r.subdivide(.5, !0).reverse()) : n.push(r),
                aA(A) ? n.push(A.subdivide(.5, !1).reverse()) : n.push(A),
                n
        }
        , Ji = function (e) {
            var A = e.bounds
                , t = e.styles;
            return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth))
        }
        , Ot = function (e) {
            var A = e.styles
                , t = e.bounds
                , r = x(A.paddingLeft, t.width)
                , n = x(A.paddingRight, t.width)
                , s = x(A.paddingTop, t.width)
                , i = x(A.paddingBottom, t.width);
            return t.add(r + A.borderLeftWidth, s + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + n), -(A.borderTopWidth + A.borderBottomWidth + s + i))
        }
        , Bg = function (e, A) {
            return e === 0 ? A.bounds : e === 2 ? Ot(A) : Ji(A)
        }
        , cg = function (e, A) {
            return e === 0 ? A.bounds : e === 2 ? Ot(A) : Ji(A)
        }
        , qr = function (e, A, t) {
            var r = Bg(ae(e.styles.backgroundOrigin, A), e)
                , n = cg(ae(e.styles.backgroundClip, A), e)
                , s = lg(ae(e.styles.backgroundSize, A), t, r)
                , i = s[0]
                , o = s[1]
                , a = ve(ae(e.styles.backgroundPosition, A), r.width - i, r.height - o)
                , B = ug(ae(e.styles.backgroundRepeat, A), a, s, r, n)
                , l = Math.round(r.left + a[0])
                , c = Math.round(r.top + a[1]);
            return [B, l, c, i, o]
        }
        , oe = function (e) {
            return L(e) && e.value === te.AUTO
        }
        , Rt = function (e) {
            return typeof e == "number"
        }
        , lg = function (e, A, t) {
            var r = A[0]
                , n = A[1]
                , s = A[2]
                , i = e[0]
                , o = e[1];
            if (!i)
                return [0, 0];
            if (N(i) && o && N(o))
                return [x(i, t.width), x(o, t.height)];
            var a = Rt(s);
            if (L(i) && (i.value === te.CONTAIN || i.value === te.COVER)) {
                if (Rt(s)) {
                    var B = t.width / t.height;
                    return B < s != (i.value === te.COVER) ? [t.width, t.width / s] : [t.height * s, t.height]
                }
                return [t.width, t.height]
            }
            var l = Rt(r)
                , c = Rt(n)
                , u = l || c;
            if (oe(i) && (!o || oe(o))) {
                if (l && c)
                    return [r, n];
                if (!a && !u)
                    return [t.width, t.height];
                if (u && a) {
                    var g = l ? r : n * s
                        , f = c ? n : r / s;
                    return [g, f]
                }
                var Q = l ? r : t.width
                    , F = c ? n : t.height;
                return [Q, F]
            }
            if (a) {
                var w = 0
                    , h = 0;
                return N(i) ? w = x(i, t.width) : N(o) && (h = x(o, t.height)),
                    oe(i) ? w = h * s : (!o || oe(o)) && (h = w / s),
                    [w, h]
            }
            var H = null
                , E = null;
            if (N(i) ? H = x(i, t.width) : o && N(o) && (E = x(o, t.height)),
                H !== null && (!o || oe(o)) && (E = l && c ? H / r * n : t.height),
                E !== null && oe(i) && (H = l && c ? E / n * r : t.width),
                H !== null && E !== null)
                return [H, E];
            throw new Error("Unable to calculate background-size for element")
        }
        , ae = function (e, A) {
            var t = e[A];
            return typeof t > "u" ? e[0] : t
        }
        , ug = function (e, A, t, r, n) {
            var s = A[0]
                , i = A[1]
                , o = t[0]
                , a = t[1];
            switch (e) {
                case 2:
                    return [new U(Math.round(r.left), Math.round(r.top + i)), new U(Math.round(r.left + r.width), Math.round(r.top + i)), new U(Math.round(r.left + r.width), Math.round(a + r.top + i)), new U(Math.round(r.left), Math.round(a + r.top + i))];
                case 3:
                    return [new U(Math.round(r.left + s), Math.round(r.top)), new U(Math.round(r.left + s + o), Math.round(r.top)), new U(Math.round(r.left + s + o), Math.round(r.height + r.top)), new U(Math.round(r.left + s), Math.round(r.height + r.top))];
                case 1:
                    return [new U(Math.round(r.left + s), Math.round(r.top + i)), new U(Math.round(r.left + s + o), Math.round(r.top + i)), new U(Math.round(r.left + s + o), Math.round(r.top + i + a)), new U(Math.round(r.left + s), Math.round(r.top + i + a))];
                default:
                    return [new U(Math.round(n.left), Math.round(n.top)), new U(Math.round(n.left + n.width), Math.round(n.top)), new U(Math.round(n.left + n.width), Math.round(n.height + n.top)), new U(Math.round(n.left), Math.round(n.height + n.top))]
            }
        }
        , gg = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        , Wi = "Hidden Text"
        , fg = (function () {
            function e(A) {
                this._data = {},
                    this._document = A
            }
            return e.prototype.parseMetrics = function (A, t) {
                var r = this._document.createElement("div")
                    , n = this._document.createElement("img")
                    , s = this._document.createElement("span")
                    , i = this._document.body;
                r.style.visibility = "hidden",
                    r.style.fontFamily = A,
                    r.style.fontSize = t,
                    r.style.margin = "0",
                    r.style.padding = "0",
                    r.style.whiteSpace = "nowrap",
                    i.appendChild(r),
                    n.src = gg,
                    n.width = 1,
                    n.height = 1,
                    n.style.margin = "0",
                    n.style.padding = "0",
                    n.style.verticalAlign = "baseline",
                    s.style.fontFamily = A,
                    s.style.fontSize = t,
                    s.style.margin = "0",
                    s.style.padding = "0",
                    s.appendChild(this._document.createTextNode(Wi)),
                    r.appendChild(s),
                    r.appendChild(n);
                var o = n.offsetTop - s.offsetTop + 2;
                r.removeChild(s),
                    r.appendChild(this._document.createTextNode(Wi)),
                    r.style.lineHeight = "normal",
                    n.style.verticalAlign = "super";
                var a = n.offsetTop - r.offsetTop + 2;
                return i.removeChild(r),
                {
                    baseline: o,
                    middle: a
                }
            }
                ,
                e.prototype.getMetrics = function (A, t) {
                    var r = A + " " + t;
                    return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(A, t)),
                        this._data[r]
                }
                ,
                e
        }
        )()
        , Yi = (function () {
            function e(A, t) {
                this.context = A,
                    this.options = t
            }
            return e
        }
        )()
        , wg = 1e4
        , Qg = (function (e) {
            cA(A, e);
            function A(t, r) {
                var n = e.call(this, t, r) || this;
                return n._activeEffects = [],
                    n.canvas = r.canvas ? r.canvas : document.createElement("canvas"),
                    n.ctx = n.canvas.getContext("2d"),
                    r.canvas || (n.canvas.width = Math.floor(r.width * r.scale),
                        n.canvas.height = Math.floor(r.height * r.scale),
                        n.canvas.style.width = r.width + "px",
                        n.canvas.style.height = r.height + "px"),
                    n.fontMetrics = new fg(document),
                    n.ctx.scale(n.options.scale, n.options.scale),
                    n.ctx.translate(-r.x, -r.y),
                    n.ctx.textBaseline = "bottom",
                    n._activeEffects = [],
                    n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale),
                    n
            }
            return A.prototype.applyEffects = function (t) {
                for (var r = this; this._activeEffects.length;)
                    this.popEffect();
                t.forEach(function (n) {
                    return r.applyEffect(n)
                })
            }
                ,
                A.prototype.applyEffect = function (t) {
                    this.ctx.save(),
                        rg(t) && (this.ctx.globalAlpha = t.opacity),
                        tg(t) && (this.ctx.translate(t.offsetX, t.offsetY),
                            this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]),
                            this.ctx.translate(-t.offsetX, -t.offsetY)),
                        Gi(t) && (this.path(t.path),
                            this.ctx.clip()),
                        this._activeEffects.push(t)
                }
                ,
                A.prototype.popEffect = function () {
                    this._activeEffects.pop(),
                        this.ctx.restore()
                }
                ,
                A.prototype.renderStack = function (t) {
                    return z(this, void 0, void 0, function () {
                        var r;
                        return $(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return r = t.element.container.styles,
                                        r.isVisible() ? [4, this.renderStackContent(t)] : [3, 2];
                                case 1:
                                    n.sent(),
                                        n.label = 2;
                                case 2:
                                    return [2]
                            }
                        })
                    })
                }
                ,
                A.prototype.renderNode = function (t) {
                    return z(this, void 0, void 0, function () {
                        return $(this, function (r) {
                            switch (r.label) {
                                case 0:
                                    if (X(t.container.flags, 16))
                                        debugger; return t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
                                case 1:
                                    return r.sent(),
                                        [4, this.renderNodeContent(t)];
                                case 2:
                                    r.sent(),
                                        r.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }
                ,
                A.prototype.renderTextWithLetterSpacing = function (t, r, n) {
                    var s = this;
                    if (r === 0)
                        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
                    else {
                        var i = Or(t.text);
                        i.reduce(function (o, a) {
                            return s.ctx.fillText(a, o, t.bounds.top + n),
                                o + s.ctx.measureText(a).width
                        }, t.bounds.left)
                    }
                }
                ,
                A.prototype.createFontStyle = function (t) {
                    var r = t.fontVariant.filter(function (i) {
                        return i === "normal" || i === "small-caps"
                    }).join("")
                        , n = dg(t.fontFamily).join(", ")
                        , s = He(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
                    return [[t.fontStyle, r, t.fontWeight, s, n].join(" "), n, s]
                }
                ,
                A.prototype.renderTextNode = function (t, r) {
                    return z(this, void 0, void 0, function () {
                        var n, s, i, o, a, B, l, c, u = this;
                        return $(this, function (g) {
                            return n = this.createFontStyle(r),
                                s = n[0],
                                i = n[1],
                                o = n[2],
                                this.ctx.font = s,
                                this.ctx.direction = r.direction === 1 ? "rtl" : "ltr",
                                this.ctx.textAlign = "left",
                                this.ctx.textBaseline = "alphabetic",
                                a = this.fontMetrics.getMetrics(i, o),
                                B = a.baseline,
                                l = a.middle,
                                c = r.paintOrder,
                                t.textBounds.forEach(function (f) {
                                    c.forEach(function (Q) {
                                        switch (Q) {
                                            case 0:
                                                u.ctx.fillStyle = J(r.color),
                                                    u.renderTextWithLetterSpacing(f, r.letterSpacing, B);
                                                var F = r.textShadow;
                                                F.length && f.text.trim().length && (F.slice(0).reverse().forEach(function (w) {
                                                    u.ctx.shadowColor = J(w.color),
                                                        u.ctx.shadowOffsetX = w.offsetX.number * u.options.scale,
                                                        u.ctx.shadowOffsetY = w.offsetY.number * u.options.scale,
                                                        u.ctx.shadowBlur = w.blur.number,
                                                        u.renderTextWithLetterSpacing(f, r.letterSpacing, B)
                                                }),
                                                    u.ctx.shadowColor = "",
                                                    u.ctx.shadowOffsetX = 0,
                                                    u.ctx.shadowOffsetY = 0,
                                                    u.ctx.shadowBlur = 0),
                                                    r.textDecorationLine.length && (u.ctx.fillStyle = J(r.textDecorationColor || r.color),
                                                        r.textDecorationLine.forEach(function (w) {
                                                            switch (w) {
                                                                case 1:
                                                                    u.ctx.fillRect(f.bounds.left, Math.round(f.bounds.top + B), f.bounds.width, 1);
                                                                    break;
                                                                case 2:
                                                                    u.ctx.fillRect(f.bounds.left, Math.round(f.bounds.top), f.bounds.width, 1);
                                                                    break;
                                                                case 3:
                                                                    u.ctx.fillRect(f.bounds.left, Math.ceil(f.bounds.top + l), f.bounds.width, 1);
                                                                    break
                                                            }
                                                        }));
                                                break;
                                            case 1:
                                                r.webkitTextStrokeWidth && f.text.trim().length && (u.ctx.strokeStyle = J(r.webkitTextStrokeColor),
                                                    u.ctx.lineWidth = r.webkitTextStrokeWidth,
                                                    u.ctx.lineJoin = window.chrome ? "miter" : "round",
                                                    u.ctx.strokeText(f.text, f.bounds.left, f.bounds.top + B)),
                                                    u.ctx.strokeStyle = "",
                                                    u.ctx.lineWidth = 0,
                                                    u.ctx.lineJoin = "miter";
                                                break
                                        }
                                    })
                                }),
                                [2]
                        })
                    })
                }
                ,
                A.prototype.renderReplacedElement = function (t, r, n) {
                    if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
                        var s = Ot(t)
                            , i = xt(r);
                        this.path(i),
                            this.ctx.save(),
                            this.ctx.clip(),
                            this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, s.left, s.top, s.width, s.height),
                            this.ctx.restore()
                    }
                }
                ,
                A.prototype.renderNodeContent = function (t) {
                    return z(this, void 0, void 0, function () {
                        var r, n, s, i, o, a, h, h, B, l, c, u, E, g, f, p, Q, F, w, h, H, E, p;
                        return $(this, function (C) {
                            switch (C.label) {
                                case 0:
                                    this.applyEffects(t.getEffects(4)),
                                        r = t.container,
                                        n = t.curves,
                                        s = r.styles,
                                        i = 0,
                                        o = r.textNodes,
                                        C.label = 1;
                                case 1:
                                    return i < o.length ? (a = o[i],
                                        [4, this.renderTextNode(a, s)]) : [3, 4];
                                case 2:
                                    C.sent(),
                                        C.label = 3;
                                case 3:
                                    return i++,
                                        [3, 1];
                                case 4:
                                    if (!(r instanceof ui))
                                        return [3, 8];
                                    C.label = 5;
                                case 5:
                                    return C.trys.push([5, 7, , 8]),
                                        [4, this.context.cache.match(r.src)];
                                case 6:
                                    return h = C.sent(),
                                        this.renderReplacedElement(r, n, h),
                                        [3, 8];
                                case 7:
                                    return C.sent(),
                                        this.context.logger.error("Error loading image " + r.src),
                                        [3, 8];
                                case 8:
                                    if (r instanceof gi && this.renderReplacedElement(r, n, r.canvas),
                                        !(r instanceof fi))
                                        return [3, 12];
                                    C.label = 9;
                                case 9:
                                    return C.trys.push([9, 11, , 12]),
                                        [4, this.context.cache.match(r.svg)];
                                case 10:
                                    return h = C.sent(),
                                        this.renderReplacedElement(r, n, h),
                                        [3, 12];
                                case 11:
                                    return C.sent(),
                                        this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)),
                                        [3, 12];
                                case 12:
                                    return r instanceof Ui && r.tree ? (B = new A(this.context, {
                                        scale: this.options.scale,
                                        backgroundColor: r.backgroundColor,
                                        x: 0,
                                        y: 0,
                                        width: r.width,
                                        height: r.height
                                    }),
                                        [4, B.render(r.tree)]) : [3, 14];
                                case 13:
                                    l = C.sent(),
                                        r.width && r.height && this.ctx.drawImage(l, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height),
                                        C.label = 14;
                                case 14:
                                    if (r instanceof Mr && (c = Math.min(r.bounds.width, r.bounds.height),
                                        r.type === vt ? r.checked && (this.ctx.save(),
                                            this.path([new U(r.bounds.left + c * .39363, r.bounds.top + c * .79), new U(r.bounds.left + c * .16, r.bounds.top + c * .5549), new U(r.bounds.left + c * .27347, r.bounds.top + c * .44071), new U(r.bounds.left + c * .39694, r.bounds.top + c * .5649), new U(r.bounds.left + c * .72983, r.bounds.top + c * .23), new U(r.bounds.left + c * .84, r.bounds.top + c * .34085), new U(r.bounds.left + c * .39363, r.bounds.top + c * .79)]),
                                            this.ctx.fillStyle = J(Qi),
                                            this.ctx.fill(),
                                            this.ctx.restore()) : r.type === yt && r.checked && (this.ctx.save(),
                                                this.ctx.beginPath(),
                                                this.ctx.arc(r.bounds.left + c / 2, r.bounds.top + c / 2, c / 4, 0, Math.PI * 2, !0),
                                                this.ctx.fillStyle = J(Qi),
                                                this.ctx.fill(),
                                                this.ctx.restore())),
                                        hg(r) && r.value.length) {
                                        switch (u = this.createFontStyle(s),
                                        E = u[0],
                                        g = u[1],
                                        f = this.fontMetrics.getMetrics(E, g).baseline,
                                        this.ctx.font = E,
                                        this.ctx.fillStyle = J(s.color),
                                        this.ctx.textBaseline = "alphabetic",
                                        this.ctx.textAlign = Ug(r.styles.textAlign),
                                        p = Ot(r),
                                        Q = 0,
                                        r.styles.textAlign) {
                                            case 1:
                                                Q += p.width / 2;
                                                break;
                                            case 2:
                                                Q += p.width;
                                                break
                                        }
                                        F = p.add(Q, 0, 0, -p.height / 2 + 1),
                                            this.ctx.save(),
                                            this.path([new U(p.left, p.top), new U(p.left + p.width, p.top), new U(p.left + p.width, p.top + p.height), new U(p.left, p.top + p.height)]),
                                            this.ctx.clip(),
                                            this.renderTextWithLetterSpacing(new _e(r.value, F), s.letterSpacing, f),
                                            this.ctx.restore(),
                                            this.ctx.textBaseline = "alphabetic",
                                            this.ctx.textAlign = "left"
                                    }
                                    if (!X(r.styles.display, 2048))
                                        return [3, 20];
                                    if (r.styles.listStyleImage === null)
                                        return [3, 19];
                                    if (w = r.styles.listStyleImage,
                                        w.type !== 0)
                                        return [3, 18];
                                    h = void 0,
                                        H = w.url,
                                        C.label = 15;
                                case 15:
                                    return C.trys.push([15, 17, , 18]),
                                        [4, this.context.cache.match(H)];
                                case 16:
                                    return h = C.sent(),
                                        this.ctx.drawImage(h, r.bounds.left - (h.width + 10), r.bounds.top),
                                        [3, 18];
                                case 17:
                                    return C.sent(),
                                        this.context.logger.error("Error loading list-style-image " + H),
                                        [3, 18];
                                case 18:
                                    return [3, 20];
                                case 19:
                                    t.listValue && r.styles.listStyleType !== -1 && (E = this.createFontStyle(s)[0],
                                        this.ctx.font = E,
                                        this.ctx.fillStyle = J(s.color),
                                        this.ctx.textBaseline = "middle",
                                        this.ctx.textAlign = "right",
                                        p = new hA(r.bounds.left, r.bounds.top + x(r.styles.paddingTop, r.bounds.width), r.bounds.width, Ws(s.lineHeight, s.fontSize.number) / 2 + 1),
                                        this.renderTextWithLetterSpacing(new _e(t.listValue, p), s.letterSpacing, Ws(s.lineHeight, s.fontSize.number) / 2 + 2),
                                        this.ctx.textBaseline = "bottom",
                                        this.ctx.textAlign = "left"),
                                        C.label = 20;
                                case 20:
                                    return [2]
                            }
                        })
                    })
                }
                ,
                A.prototype.renderStackContent = function (t) {
                    return z(this, void 0, void 0, function () {
                        var r, n, w, s, i, w, o, a, w, B, l, w, c, u, w, g, f, w, Q, F, w;
                        return $(this, function (h) {
                            switch (h.label) {
                                case 0:
                                    if (X(t.element.container.flags, 16))
                                        debugger; return [4, this.renderNodeBackgroundAndBorders(t.element)];
                                case 1:
                                    h.sent(),
                                        r = 0,
                                        n = t.negativeZIndex,
                                        h.label = 2;
                                case 2:
                                    return r < n.length ? (w = n[r],
                                        [4, this.renderStack(w)]) : [3, 5];
                                case 3:
                                    h.sent(),
                                        h.label = 4;
                                case 4:
                                    return r++,
                                        [3, 2];
                                case 5:
                                    return [4, this.renderNodeContent(t.element)];
                                case 6:
                                    h.sent(),
                                        s = 0,
                                        i = t.nonInlineLevel,
                                        h.label = 7;
                                case 7:
                                    return s < i.length ? (w = i[s],
                                        [4, this.renderNode(w)]) : [3, 10];
                                case 8:
                                    h.sent(),
                                        h.label = 9;
                                case 9:
                                    return s++,
                                        [3, 7];
                                case 10:
                                    o = 0,
                                        a = t.nonPositionedFloats,
                                        h.label = 11;
                                case 11:
                                    return o < a.length ? (w = a[o],
                                        [4, this.renderStack(w)]) : [3, 14];
                                case 12:
                                    h.sent(),
                                        h.label = 13;
                                case 13:
                                    return o++,
                                        [3, 11];
                                case 14:
                                    B = 0,
                                        l = t.nonPositionedInlineLevel,
                                        h.label = 15;
                                case 15:
                                    return B < l.length ? (w = l[B],
                                        [4, this.renderStack(w)]) : [3, 18];
                                case 16:
                                    h.sent(),
                                        h.label = 17;
                                case 17:
                                    return B++,
                                        [3, 15];
                                case 18:
                                    c = 0,
                                        u = t.inlineLevel,
                                        h.label = 19;
                                case 19:
                                    return c < u.length ? (w = u[c],
                                        [4, this.renderNode(w)]) : [3, 22];
                                case 20:
                                    h.sent(),
                                        h.label = 21;
                                case 21:
                                    return c++,
                                        [3, 19];
                                case 22:
                                    g = 0,
                                        f = t.zeroOrAutoZIndexOrTransformedOrOpacity,
                                        h.label = 23;
                                case 23:
                                    return g < f.length ? (w = f[g],
                                        [4, this.renderStack(w)]) : [3, 26];
                                case 24:
                                    h.sent(),
                                        h.label = 25;
                                case 25:
                                    return g++,
                                        [3, 23];
                                case 26:
                                    Q = 0,
                                        F = t.positiveZIndex,
                                        h.label = 27;
                                case 27:
                                    return Q < F.length ? (w = F[Q],
                                        [4, this.renderStack(w)]) : [3, 30];
                                case 28:
                                    h.sent(),
                                        h.label = 29;
                                case 29:
                                    return Q++,
                                        [3, 27];
                                case 30:
                                    return [2]
                            }
                        })
                    })
                }
                ,
                A.prototype.mask = function (t) {
                    this.ctx.beginPath(),
                        this.ctx.moveTo(0, 0),
                        this.ctx.lineTo(this.canvas.width, 0),
                        this.ctx.lineTo(this.canvas.width, this.canvas.height),
                        this.ctx.lineTo(0, this.canvas.height),
                        this.ctx.lineTo(0, 0),
                        this.formatPath(t.slice(0).reverse()),
                        this.ctx.closePath()
                }
                ,
                A.prototype.path = function (t) {
                    this.ctx.beginPath(),
                        this.formatPath(t),
                        this.ctx.closePath()
                }
                ,
                A.prototype.formatPath = function (t) {
                    var r = this;
                    t.forEach(function (n, s) {
                        var i = aA(n) ? n.start : n;
                        s === 0 ? r.ctx.moveTo(i.x, i.y) : r.ctx.lineTo(i.x, i.y),
                            aA(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y)
                    })
                }
                ,
                A.prototype.renderRepeat = function (t, r, n, s) {
                    this.path(t),
                        this.ctx.fillStyle = r,
                        this.ctx.translate(n, s),
                        this.ctx.fill(),
                        this.ctx.translate(-n, -s)
                }
                ,
                A.prototype.resizeImage = function (t, r, n) {
                    var s;
                    if (t.width === r && t.height === n)
                        return t;
                    var i = (s = this.canvas.ownerDocument) !== null && s !== void 0 ? s : document
                        , o = i.createElement("canvas");
                    o.width = Math.max(1, r),
                        o.height = Math.max(1, n);
                    var a = o.getContext("2d");
                    return a.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n),
                        o
                }
                ,
                A.prototype.renderBackgroundImage = function (t) {
                    return z(this, void 0, void 0, function () {
                        var r, n, s, i, o, a;
                        return $(this, function (B) {
                            switch (B.label) {
                                case 0:
                                    r = t.styles.backgroundImage.length - 1,
                                        n = function (l) {
                                            var c, u, g, O, tA, rA, K, Z, v, f, O, tA, rA, K, Z, Q, F, w, h, H, E, p, C, y, v, m, O, T, k, K, Z, xA, tA, rA, kA, wA, TA, PA, XA, dA, JA, pA;
                                            return $(this, function (Be) {
                                                switch (Be.label) {
                                                    case 0:
                                                        if (l.type !== 0)
                                                            return [3, 5];
                                                        c = void 0,
                                                            u = l.url,
                                                            Be.label = 1;
                                                    case 1:
                                                        return Be.trys.push([1, 3, , 4]),
                                                            [4, s.context.cache.match(u)];
                                                    case 2:
                                                        return c = Be.sent(),
                                                            [3, 4];
                                                    case 3:
                                                        return Be.sent(),
                                                            s.context.logger.error("Error loading background-image " + u),
                                                            [3, 4];
                                                    case 4:
                                                        return c && (g = qr(t, r, [c.width, c.height, c.width / c.height]),
                                                            O = g[0],
                                                            tA = g[1],
                                                            rA = g[2],
                                                            K = g[3],
                                                            Z = g[4],
                                                            v = s.ctx.createPattern(s.resizeImage(c, K, Z), "repeat"),
                                                            s.renderRepeat(O, v, tA, rA)),
                                                            [3, 6];
                                                    case 5:
                                                        tc(l) ? (f = qr(t, r, [null, null, null]),
                                                            O = f[0],
                                                            tA = f[1],
                                                            rA = f[2],
                                                            K = f[3],
                                                            Z = f[4],
                                                            Q = $B(l.angle, K, Z),
                                                            F = Q[0],
                                                            w = Q[1],
                                                            h = Q[2],
                                                            H = Q[3],
                                                            E = Q[4],
                                                            p = document.createElement("canvas"),
                                                            p.width = K,
                                                            p.height = Z,
                                                            C = p.getContext("2d"),
                                                            y = C.createLinearGradient(w, H, h, E),
                                                            Ds(l.stops, F).forEach(function (Te) {
                                                                return y.addColorStop(Te.stop, J(Te.color))
                                                            }),
                                                            C.fillStyle = y,
                                                            C.fillRect(0, 0, K, Z),
                                                            K > 0 && Z > 0 && (v = s.ctx.createPattern(p, "repeat"),
                                                                s.renderRepeat(O, v, tA, rA))) : rc(l) && (m = qr(t, r, [null, null, null]),
                                                                    O = m[0],
                                                                    T = m[1],
                                                                    k = m[2],
                                                                    K = m[3],
                                                                    Z = m[4],
                                                                    xA = l.position.length === 0 ? [pr] : l.position,
                                                                    tA = x(xA[0], K),
                                                                    rA = x(xA[xA.length - 1], Z),
                                                                    kA = jB(l, tA, rA, K, Z),
                                                                    wA = kA[0],
                                                                    TA = kA[1],
                                                                    wA > 0 && TA > 0 && (PA = s.ctx.createRadialGradient(T + tA, k + rA, 0, T + tA, k + rA, wA),
                                                                        Ds(l.stops, wA * 2).forEach(function (Te) {
                                                                            return PA.addColorStop(Te.stop, J(Te.color))
                                                                        }),
                                                                        s.path(O),
                                                                        s.ctx.fillStyle = PA,
                                                                        wA !== TA ? (XA = t.bounds.left + .5 * t.bounds.width,
                                                                            dA = t.bounds.top + .5 * t.bounds.height,
                                                                            JA = TA / wA,
                                                                            pA = 1 / JA,
                                                                            s.ctx.save(),
                                                                            s.ctx.translate(XA, dA),
                                                                            s.ctx.transform(1, 0, 0, JA, 0, 0),
                                                                            s.ctx.translate(-XA, -dA),
                                                                            s.ctx.fillRect(T, pA * (k - dA) + dA, K, Z * pA),
                                                                            s.ctx.restore()) : s.ctx.fill())),
                                                            Be.label = 6;
                                                    case 6:
                                                        return r--,
                                                            [2]
                                                }
                                            })
                                        }
                                        ,
                                        s = this,
                                        i = 0,
                                        o = t.styles.backgroundImage.slice(0).reverse(),
                                        B.label = 1;
                                case 1:
                                    return i < o.length ? (a = o[i],
                                        [5, n(a)]) : [3, 4];
                                case 2:
                                    B.sent(),
                                        B.label = 3;
                                case 3:
                                    return i++,
                                        [3, 1];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }
                ,
                A.prototype.renderSolidBorder = function (t, r, n) {
                    return z(this, void 0, void 0, function () {
                        return $(this, function (s) {
                            return this.path(Xi(n, r)),
                                this.ctx.fillStyle = J(t),
                                this.ctx.fill(),
                                [2]
                        })
                    })
                }
                ,
                A.prototype.renderDoubleBorder = function (t, r, n, s) {
                    return z(this, void 0, void 0, function () {
                        var i, o;
                        return $(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    return r < 3 ? [4, this.renderSolidBorder(t, n, s)] : [3, 2];
                                case 1:
                                    return a.sent(),
                                        [2];
                                case 2:
                                    return i = ig(s, n),
                                        this.path(i),
                                        this.ctx.fillStyle = J(t),
                                        this.ctx.fill(),
                                        o = og(s, n),
                                        this.path(o),
                                        this.ctx.fill(),
                                        [2]
                            }
                        })
                    })
                }
                ,
                A.prototype.renderNodeBackgroundAndBorders = function (t) {
                    return z(this, void 0, void 0, function () {
                        var r, n, s, i, o, a, B, l, c = this;
                        return $(this, function (u) {
                            switch (u.label) {
                                case 0:
                                    return this.applyEffects(t.getEffects(2)),
                                        r = t.container.styles,
                                        n = !_A(r.backgroundColor) || r.backgroundImage.length,
                                        s = [{
                                            style: r.borderTopStyle,
                                            color: r.borderTopColor,
                                            width: r.borderTopWidth
                                        }, {
                                            style: r.borderRightStyle,
                                            color: r.borderRightColor,
                                            width: r.borderRightWidth
                                        }, {
                                            style: r.borderBottomStyle,
                                            color: r.borderBottomColor,
                                            width: r.borderBottomWidth
                                        }, {
                                            style: r.borderLeftStyle,
                                            color: r.borderLeftColor,
                                            width: r.borderLeftWidth
                                        }],
                                        i = Cg(ae(r.backgroundClip, 0), t.curves),
                                        n || r.boxShadow.length ? (this.ctx.save(),
                                            this.path(i),
                                            this.ctx.clip(),
                                            _A(r.backgroundColor) || (this.ctx.fillStyle = J(r.backgroundColor),
                                                this.ctx.fill()),
                                            [4, this.renderBackgroundImage(t.container)]) : [3, 2];
                                case 1:
                                    u.sent(),
                                        this.ctx.restore(),
                                        r.boxShadow.slice(0).reverse().forEach(function (g) {
                                            c.ctx.save();
                                            var f = St(t.curves)
                                                , Q = g.inset ? 0 : wg
                                                , F = ng(f, -Q + (g.inset ? 1 : -1) * g.spread.number, (g.inset ? 1 : -1) * g.spread.number, g.spread.number * (g.inset ? -2 : 2), g.spread.number * (g.inset ? -2 : 2));
                                            g.inset ? (c.path(f),
                                                c.ctx.clip(),
                                                c.mask(F)) : (c.mask(f),
                                                    c.ctx.clip(),
                                                    c.path(F)),
                                                c.ctx.shadowOffsetX = g.offsetX.number + Q,
                                                c.ctx.shadowOffsetY = g.offsetY.number,
                                                c.ctx.shadowColor = J(g.color),
                                                c.ctx.shadowBlur = g.blur.number,
                                                c.ctx.fillStyle = g.inset ? J(g.color) : "rgba(0,0,0,1)",
                                                c.ctx.fill(),
                                                c.ctx.restore()
                                        }),
                                        u.label = 2;
                                case 2:
                                    o = 0,
                                        a = 0,
                                        B = s,
                                        u.label = 3;
                                case 3:
                                    return a < B.length ? (l = B[a],
                                        l.style !== 0 && !_A(l.color) && l.width > 0 ? l.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(l.color, l.width, o, t.curves, 2)] : [3, 11]) : [3, 13];
                                case 4:
                                    return u.sent(),
                                        [3, 11];
                                case 5:
                                    return l.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(l.color, l.width, o, t.curves, 3)];
                                case 6:
                                    return u.sent(),
                                        [3, 11];
                                case 7:
                                    return l.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(l.color, l.width, o, t.curves)];
                                case 8:
                                    return u.sent(),
                                        [3, 11];
                                case 9:
                                    return [4, this.renderSolidBorder(l.color, o, t.curves)];
                                case 10:
                                    u.sent(),
                                        u.label = 11;
                                case 11:
                                    o++,
                                        u.label = 12;
                                case 12:
                                    return a++,
                                        [3, 3];
                                case 13:
                                    return [2]
                            }
                        })
                    })
                }
                ,
                A.prototype.renderDashedDottedBorder = function (t, r, n, s, i) {
                    return z(this, void 0, void 0, function () {
                        var o, a, B, l, c, u, g, f, Q, F, w, h, H, E, p, C, p, C;
                        return $(this, function (y) {
                            return this.ctx.save(),
                                o = ag(s, n),
                                a = Xi(s, n),
                                i === 2 && (this.path(a),
                                    this.ctx.clip()),
                                aA(a[0]) ? (B = a[0].start.x,
                                    l = a[0].start.y) : (B = a[0].x,
                                        l = a[0].y),
                                aA(a[1]) ? (c = a[1].end.x,
                                    u = a[1].end.y) : (c = a[1].x,
                                        u = a[1].y),
                                n === 0 || n === 2 ? g = Math.abs(B - c) : g = Math.abs(l - u),
                                this.ctx.beginPath(),
                                i === 3 ? this.formatPath(o) : this.formatPath(a.slice(0, 2)),
                                f = r < 3 ? r * 3 : r * 2,
                                Q = r < 3 ? r * 2 : r,
                                i === 3 && (f = r,
                                    Q = r),
                                F = !0,
                                g <= f * 2 ? F = !1 : g <= f * 2 + Q ? (w = g / (2 * f + Q),
                                    f *= w,
                                    Q *= w) : (h = Math.floor((g + Q) / (f + Q)),
                                        H = (g - h * f) / (h - 1),
                                        E = (g - (h + 1) * f) / h,
                                        Q = E <= 0 || Math.abs(Q - H) < Math.abs(Q - E) ? H : E),
                                F && (i === 3 ? this.ctx.setLineDash([0, f + Q]) : this.ctx.setLineDash([f, Q])),
                                i === 3 ? (this.ctx.lineCap = "round",
                                    this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1,
                                this.ctx.strokeStyle = J(t),
                                this.ctx.stroke(),
                                this.ctx.setLineDash([]),
                                i === 2 && (aA(a[0]) && (p = a[3],
                                    C = a[0],
                                    this.ctx.beginPath(),
                                    this.formatPath([new U(p.end.x, p.end.y), new U(C.start.x, C.start.y)]),
                                    this.ctx.stroke()),
                                    aA(a[1]) && (p = a[1],
                                        C = a[2],
                                        this.ctx.beginPath(),
                                        this.formatPath([new U(p.end.x, p.end.y), new U(C.start.x, C.start.y)]),
                                        this.ctx.stroke())),
                                this.ctx.restore(),
                                [2]
                        })
                    })
                }
                ,
                A.prototype.render = function (t) {
                    return z(this, void 0, void 0, function () {
                        var r;
                        return $(this, function (n) {
                            switch (n.label) {
                                case 0:
                                    return this.options.backgroundColor && (this.ctx.fillStyle = J(this.options.backgroundColor),
                                        this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)),
                                        r = sg(t),
                                        [4, this.renderStack(r)];
                                case 1:
                                    return n.sent(),
                                        this.applyEffects([]),
                                        [2, this.canvas]
                            }
                        })
                    })
                }
                ,
                A
        }
        )(Yi)
        , hg = function (e) {
            return e instanceof Ci || e instanceof hi ? !0 : e instanceof Mr && e.type !== yt && e.type !== vt
        }
        , Cg = function (e, A) {
            switch (e) {
                case 0:
                    return St(A);
                case 2:
                    return zu(A);
                case 1:
                default:
                    return xt(A)
            }
        }
        , Ug = function (e) {
            switch (e) {
                case 1:
                    return "center";
                case 2:
                    return "right";
                case 0:
                default:
                    return "left"
            }
        }
        , Fg = ["-apple-system", "system-ui"]
        , dg = function (e) {
            return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter(function (A) {
                return Fg.indexOf(A) === -1
            }) : e
        }
        , pg = (function (e) {
            cA(A, e);
            function A(t, r) {
                var n = e.call(this, t, r) || this;
                return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"),
                    n.ctx = n.canvas.getContext("2d"),
                    n.options = r,
                    n.canvas.width = Math.floor(r.width * r.scale),
                    n.canvas.height = Math.floor(r.height * r.scale),
                    n.canvas.style.width = r.width + "px",
                    n.canvas.style.height = r.height + "px",
                    n.ctx.scale(n.options.scale, n.options.scale),
                    n.ctx.translate(-r.x, -r.y),
                    n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale),
                    n
            }
            return A.prototype.render = function (t) {
                return z(this, void 0, void 0, function () {
                    var r, n;
                    return $(this, function (s) {
                        switch (s.label) {
                            case 0:
                                return r = Dr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t),
                                    [4, Eg(r)];
                            case 1:
                                return n = s.sent(),
                                    this.options.backgroundColor && (this.ctx.fillStyle = J(this.options.backgroundColor),
                                        this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)),
                                    this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale),
                                    [2, this.canvas]
                        }
                    })
                })
            }
                ,
                A
        }
        )(Yi)
        , Eg = function (e) {
            return new Promise(function (A, t) {
                var r = new Image;
                r.onload = function () {
                    A(r)
                }
                    ,
                    r.onerror = t,
                    r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(e))
            }
            )
        }
        , mg = (function () {
            function e(A) {
                var t = A.id
                    , r = A.enabled;
                this.id = t,
                    this.enabled = r,
                    this.start = Date.now()
            }
            return e.prototype.debug = function () {
                // for (var A = [], t = 0; t < arguments.length; t++)
                //     A[t] = arguments[t];
                // this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Je([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
            }
                ,
                e.prototype.getTime = function () {
                    return Date.now() - this.start
                }
                ,
                e.prototype.info = function () {
                    // for (var A = [], t = 0; t < arguments.length; t++)
                    //     A[t] = arguments[t];
                    // this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Je([this.id, this.getTime() + "ms"], A))
                }
                ,
                e.prototype.warn = function () {
                    // for (var A = [], t = 0; t < arguments.length; t++)
                    //     A[t] = arguments[t];
                    // this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Je([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
                }
                ,
                e.prototype.error = function () {
                    // for (var A = [], t = 0; t < arguments.length; t++)
                    //     A[t] = arguments[t];
                    // this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Je([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A))
                }
                ,
                e.instances = {},
                e
        }
        )()
        , Hg = (function () {
            function e(A, t) {
                var r;
                this.windowBounds = t,
                    this.instanceName = "#" + e.instanceCount++,
                    this.logger = new mg({
                        id: this.instanceName,
                        enabled: A.logging
                    }),
                    this.cache = (r = A.cache) !== null && r !== void 0 ? r : new Xu(this, A)
            }
            return e.instanceCount = 1,
                e
        }
        )()
        , Zi = function (e, A) {
            return A === void 0 && (A = {}),
                vg(e, A)
        };
    typeof window < "u" && Mi.setContext(window);
    var vg = function (e, A) {
        return z(void 0, void 0, void 0, function () {
            var t, r, n, s, i, o, a, B, l, c, u, g, f, Q, F, w, h, H, E, p, y, C, y, v, m, O, T, k, K, Z, xA, tA, rA, kA, wA, TA, PA, XA, dA, JA;
            return $(this, function (pA) {
                switch (pA.label) {
                    case 0:
                        if (!e || typeof e != "object")
                            return [2, Promise.reject("Invalid element provided as first argument")];
                        if (t = e.ownerDocument,
                            !t)
                            throw new Error("Element is not attached to a Document");
                        if (r = t.defaultView,
                            !r)
                            throw new Error("Document is not attached to a Window");
                        return n = {
                            allowTaint: (v = A.allowTaint) !== null && v !== void 0 ? v : !1,
                            imageTimeout: (m = A.imageTimeout) !== null && m !== void 0 ? m : 15e3,
                            proxy: A.proxy,
                            useCORS: (O = A.useCORS) !== null && O !== void 0 ? O : !1
                        },
                            s = er({
                                logging: (T = A.logging) !== null && T !== void 0 ? T : !0,
                                cache: A.cache
                            }, n),
                            i = {
                                windowWidth: (k = A.windowWidth) !== null && k !== void 0 ? k : r.innerWidth,
                                windowHeight: (K = A.windowHeight) !== null && K !== void 0 ? K : r.innerHeight,
                                scrollX: (Z = A.scrollX) !== null && Z !== void 0 ? Z : r.pageXOffset,
                                scrollY: (xA = A.scrollY) !== null && xA !== void 0 ? xA : r.pageYOffset
                            },
                            o = new hA(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight),
                            a = new Hg(s, o),
                            B = (tA = A.foreignObjectRendering) !== null && tA !== void 0 ? tA : !1,
                            l = {
                                allowTaint: (rA = A.allowTaint) !== null && rA !== void 0 ? rA : !1,
                                onclone: A.onclone,
                                ignoreElements: A.ignoreElements,
                                inlineImages: B,
                                copyStyles: B
                            },
                            a.logger.debug("Starting document clone with size " + o.width + "x" + o.height + " scrolled to " + -o.left + "," + -o.top),
                            c = new Oi(a, e, l),
                            u = c.clonedReferenceElement,
                            u ? [4, c.toIFrame(t, o)] : [2, Promise.reject("Unable to find element in cloned iframe")];
                    case 1:
                        return g = pA.sent(),
                            f = Vr(u) || Iu(u) ? na(u.ownerDocument) : We(a, u),
                            Q = f.width,
                            F = f.height,
                            w = f.left,
                            h = f.top,
                            H = yg(a, u, A.backgroundColor),
                            E = {
                                canvas: A.canvas,
                                backgroundColor: H,
                                scale: (wA = (kA = A.scale) !== null && kA !== void 0 ? kA : r.devicePixelRatio) !== null && wA !== void 0 ? wA : 1,
                                x: ((TA = A.x) !== null && TA !== void 0 ? TA : 0) + w,
                                y: ((PA = A.y) !== null && PA !== void 0 ? PA : 0) + h,
                                width: (XA = A.width) !== null && XA !== void 0 ? XA : Math.ceil(Q),
                                height: (dA = A.height) !== null && dA !== void 0 ? dA : Math.ceil(F)
                            },
                            B ? (a.logger.debug("Document cloned, using foreign object rendering"),
                                y = new pg(a, E),
                                [4, y.render(u)]) : [3, 3];
                    case 2:
                        return p = pA.sent(),
                            [3, 5];
                    case 3:
                        return a.logger.debug("Document cloned, element located at " + w + "," + h + " with size " + Q + "x" + F + " using computed rendering"),
                            a.logger.debug("Starting DOM parsing"),
                            C = di(a, u),
                            H === C.styles.backgroundColor && (C.styles.backgroundColor = UA.TRANSPARENT),
                            a.logger.debug("Starting renderer for element at " + E.x + "," + E.y + " with size " + E.width + "x" + E.height),
                            y = new Qg(a, E),
                            [4, y.render(C)];
                    case 4:
                        p = pA.sent(),
                            pA.label = 5;
                    case 5:
                        return (!((JA = A.removeContainer) !== null && JA !== void 0) || JA) && (Oi.destroy(g) || a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),
                            a.logger.debug("Finished rendering"),
                            [2, p]
                }
            })
        })
    }
        , yg = function (e, A, t) {
            var r = A.ownerDocument
                , n = r.documentElement ? ye(e, getComputedStyle(r.documentElement).backgroundColor) : UA.TRANSPARENT
                , s = r.body ? ye(e, getComputedStyle(r.body).backgroundColor) : UA.TRANSPARENT
                , i = typeof t == "string" ? ye(e, t) : t === null ? UA.TRANSPARENT : 4294967295;
            return A === r.documentElement ? _A(n) ? _A(s) ? i : s : n : i
        };
    class Ig {
        defaultOptions = {
            quality: .92,
            backgroundColor: "#ffffff",
            scale: 1,
            useCORS: !0,
            allowTaint: !1,
            pixelRatio: 1
        };
        imageBackups = new Map;
        hiddenElements = new Map;
        removedElements = [];
        failedImages = new Set;
        detectBrowser() {
            const A = navigator.userAgent.toLowerCase();
            return (A.indexOf("chrome") > -1 || A.indexOf("chromium") > -1) && A.indexOf("edge") === -1 && A.indexOf("edg/") === -1 ? "chrome" : A.indexOf("safari") > -1 && A.indexOf("chrome") === -1 && A.indexOf("chromium") === -1 ? "safari" : A.indexOf("firefox") > -1 ? "firefox" : "other"
        }
        isFirefox() {
            return this.detectBrowser() === "firefox"
        }
        shouldUseFlutterPostMessage() {
            return this.isFlutterContext()
        }
        isFlutterContext() {
            try {
                if (document.querySelector("flutter-view") !== null || document.querySelector("[data-flutter]") !== null || document.querySelector("flt-scene-host") !== null || document.querySelector("flt-glass-pane") !== null)
                    return !0;
                const A = window;
                if (A.flutter || A.__flutter)
                    return !0;
                if (window.parent !== window)
                    try {
                        const t = window.parent
                            , r = t;
                        if (r.flutter || r.__flutter)
                            return !0;
                        try {
                            const n = t.document;
                            if (n.querySelector("flutter-view") !== null || n.querySelector("[data-flutter]") !== null || n.querySelector("flt-scene-host") !== null)
                                return !0
                        } catch { }
                    } catch {
                        return !1
                    }
                return !1
            } catch {
                return !1
            }
        }
        getDocumentDimensions() {
            const A = document.body
                , t = document.documentElement
                , r = Math.max(A.scrollHeight, A.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight);
            return {
                width: Math.max(A.scrollWidth, A.offsetWidth, t.clientWidth, t.scrollWidth, t.offsetWidth),
                height: r
            }
        }
        async cropScreenshot(A, t) {
            return new Promise((r, n) => {
                const s = new Image;
                s.onload = () => {
                    try {
                        const i = s.width || A.width
                            , o = s.height || A.height
                            , a = this.getDocumentDimensions()
                            , B = a.width
                            , l = a.height
                            , c = i / B
                            , u = o / l
                            , g = t.x * c
                            , f = t.y * u
                            , Q = t.width * c
                            , F = t.height * u
                            , w = Math.max(0, Math.min(g, i))
                            , h = Math.max(0, Math.min(f, o))
                            , H = Math.max(1, Math.min(Q, i - w))
                            , E = Math.max(1, Math.min(F, o - h))
                            , p = document.createElement("canvas");
                        p.width = H,
                            p.height = E;
                        const C = p.getContext("2d");
                        if (!C) {
                            n(new Error("Could not get canvas context for cropping"));
                            return
                        }
                        C.drawImage(s, w, h, H, E, 0, 0, H, E);
                        const y = p.toDataURL("image/png");
                        p.toBlob(v => {
                            if (!v) {
                                n(new Error("Failed to create blob from cropped canvas"));
                                return
                            }
                            r({
                                dataUrl: y,
                                blob: v,
                                width: H,
                                height: E
                            })
                        }
                            , "image/png")
                    } catch (i) {
                        // n(new Error(`Failed to crop screenshot: ${iinstanceof Error ? i.message : String(i)} `))
                    }
                }
                ,
                s.onerror = () => {
                    n(new Error("Failed to load image for cropping"))
                }
                ,
                s.src = A.dataUrl
            }
            )
        }
        async captureViaFlutter(A={}, t=1e4, r) {
            return new Promise( (n, s) => {
                const i = {
                    id: null
                }
                  , o = a => {
                    if (a.data && typeof a.data == "object" && "type"in a.data && a.data.type === bn.FLUTTER_SCREENSHOT_CAPTURED && "data"in a.data) {
                        i.id !== null && clearTimeout(i.id),
                        window.removeEventListener("message", o);
                        try {
                            const l = a.data.data;
                            if (!l || typeof l != "string") {
                                s(new Error("Invalid Flutter screenshot response: missing data"));
                                return
                            }
                            const c = l.startsWith("data:") ? l : `data: image / png; base64, ${ l } `;
                            fetch(c).then(u => u.blob()).then(async u => {
                                const g = new Image;
                                g.onload = async () => {
                                    const f = {
                                        dataUrl: c,
                                        blob: u,
                                        width: g.width,
                                        height: g.height
                                    };
                                    if (r)
                                        try {
                                            const Q = await this.cropScreenshot(f, r);
                                            n(Q)
                                        } catch (Q) {
                                            // console.warn("Failed to crop Flutter screenshot:", Q),
                                            n(f)
                                        }
                                    else
                                        n(f)
                                }
                                ,
                                g.onerror = () => {
                                    n({
                                        dataUrl: c,
                                        blob: u,
                                        width: 0,
                                        height: 0
                                    })
                                }
                                ,
                                g.src = c
                            }
                            ).catch(u => {
                                s(new Error(`Failed to process Flutter screenshot: ${ u.message } `))
                            }
                            )
                        } catch (B) {
                            // s(new Error(`Failed to process Flutter screenshot response: ${Binstanceof Error ? B.message : String(B) } `))
                        }
                    }
                }
                ;
                i.id = setTimeout( () => {
                    window.removeEventListener("message", o),
                    s(new Error("Flutter screenshot timeout"))
                }
                , t),
                window.addEventListener("message", o);
                try {
                    window.postMessage(JSON.stringify({
                        type: bn.FLUTTER_SCREENSHOT
                    }), "*")
                } catch (a) {
                    // i.id !== null && clearTimeout(i.id),
                    // window.removeEventListener("message", o),
                    // s(new Error(`Failed to send Flutter screenshot request: ${ainstanceof Error ? a.message : String(a) } `))
                }
            }
            )
        }
        removeCrossOriginStylesheets() {
            const A = []
              , t = Array.from(document.styleSheets);
            for (const r of t)
                try {
                    r.cssRules
                } catch {
                    const n = document.querySelectorAll('link[rel="stylesheet"]');
                    for (const s of Array.from(n)) {
                        const i = s;
                        if (i.sheet === r) {
                            A.push({
                                link: i,
                                parent: i.parentNode
                            }),
                            i.remove();
                            break
                        }
                    }
                }
            return A
        }
        suppressConsoleErrors() {
            const A = console.error
              , t = console.warn;
            return console.error = (...r) => {
                // const n = r.join(" ");
                // n.includes("cssRules") || n.includes("Cannot access rules") || n.includes("Failed to read the 'cssRules'") || n.includes("Error while reading CSS rules") || n.includes("Error inlining remote css file") || A.apply(console, r)
            }
            ,
            console.warn = (...r) => {
                // const n = r.join(" ");
                // n.includes("cssRules") || n.includes("Cannot access rules") || n.includes("Failed to read the 'cssRules'") || t.apply(console, r)
            }
            ,
            () => {
                // console.error = A,
                // console.warn = t
            }
        }
        async useHtml2CanvasFallback(A, t) {
            const r = {
                backgroundColor: t?.backgroundColor || this.defaultOptions.backgroundColor,
                scale: t?.pixelRatio || this.defaultOptions.pixelRatio || 1,
                useCORS: this.defaultOptions.useCORS,
                allowTaint: this.defaultOptions.allowTaint,
                logging: !1
            };
            if (t?.style) {
                const n = A.style.cssText;
                try {
                    Object.entries(t.style).forEach( ([s,i]) => {
                        A.style.setProperty(s, i)
                    }
                    )
                } catch (s) {
                    // console.warn("Error applying styles for html2canvas:", s)
                }
                try {
                    const s = await Zi(A, r);
                    return A.style.cssText = n,
                    s.toDataURL("image/png")
                } catch (s) {
                    throw A.style.cssText = n,
                    s
                }
            } else
                return (await Zi(A, r)).toDataURL("image/png")
        }
        async safeToPng(A, t) {
            if (this.isFirefox())
                try {
                    return await this.useHtml2CanvasFallback(A, t)
                } catch (s) {
                    // console.warn("html2canvas failed in Firefox, trying html-to-image:", s)
                }
            const r = this.removeCrossOriginStylesheets()
              , n = this.suppressConsoleErrors();
            try {
                const s = await Jn(A, t);
                return this.restoreStylesheets(r),
                n(),
                s
            } catch (s) {
                if (s instanceof Error && (s.name === "SecurityError" || s.message.includes("cssRules") || s.message.includes("Cannot access rules") || s.message.includes("Failed to read the 'cssRules'")))
                    try {
                        const i = await Jn(A, t);
                        return this.restoreStylesheets(r),
                        n(),
                        i
                    } catch (i) {
                        if (this.restoreStylesheets(r),
                        n(),
                        this.isFirefox())
                            try {
                                return await this.useHtml2CanvasFallback(A, t)
                            } catch (o) {
                                // throw new Error(`Failed to capture screenshot in Firefox: html - to - image failed(${ iinstanceof Error? i.message : String(i) }) and html2canvas failed(${ oinstanceof Error? o.message : String(o) })`)
                            }
                        // throw new Error(`Failed to capture screenshot due to SecurityError accessing cross - origin CSS: ${iinstanceof Error ? i.message : String(i) } `)
                    }
                if (this.restoreStylesheets(r),
                n(),
                this.isFirefox())
                    try {
                        return await this.useHtml2CanvasFallback(A, t)
                    } catch {
                        throw s
                    }
                throw s
            }
        }
        restoreStylesheets(A) {
            for (const {link: t, parent: r} of A)
                try {
                    r && !t.parentNode && r.appendChild(t)
                } catch (n) {
                    // console.warn("Failed to restore stylesheet:", n)
                }
        }
        async captureFullScreen(A={}, t) {
            const r = {
                ...this.defaultOptions,
                ...A
            };
            if (t?.aborted)
                throw new Error("Operation cancelled");
            if (this.shouldUseFlutterPostMessage())
                try {
                    return await this.captureViaFlutter(r)
                } catch (l) {
                    // console.warn("Flutter screenshot failed, falling back to standard method:", l)
                }
            const n = 7
              , s = document.body
              , i = document.documentElement
              , o = Math.max(s.scrollHeight, s.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight)
              , a = Math.max(s.scrollWidth, s.offsetWidth, i.clientWidth, i.scrollWidth, i.offsetWidth);
            let B = null;
            for (let l = 1; l <= n; l++)
                try {
                    if (t?.aborted)
                        throw new Error("Operation cancelled");
                    this.restoreAllElements(),
                    this.hideOverlayElements(),
                    this.removeNoscriptTags(document.body),
                    await this.prepareImagesForScreenshot(document),
                    this.applyProgressiveFiltering(document.body, l);
                    const c = await this.safeToPng(document.body, {
                        backgroundColor: r.backgroundColor,
                        quality: r.quality,
                        width: a,
                        height: o,
                        pixelRatio: r.pixelRatio,
                        style: {
                            transform: "scale(1)",
                            transformOrigin: "top left"
                        },
                        filter: f => this.createProgressiveFilter(f, l)
                    });
                    if (t?.aborted)
                        throw new Error("Operation cancelled");
                    const g = await (await fetch(c)).blob();
                    return this.restoreAllElements(),
                    this.showOverlayElements(),
                    this.restoreImages(),
                    {
                        dataUrl: c,
                        blob: g,
                        width: a,
                        height: o
                    }
                } catch (c) {
                    // if (B = c instanceof Error ? c : new Error(String(c)),
                    // console.warn(`Screenshot attempt ${ l }/${n} failed:`, B),
                    // B.message === "Operation cancelled")
                    //     throw this.restoreAllElements(),
                    //     this.showOverlayElements(),
                    //     this.restoreImages(),
                    //     B;
                    // l === n ? (this.restoreAllElements(),
                    // this.showOverlayElements(),
                    // this.restoreImages()) : await new Promise(u => setTimeout(u, 100))
                }
            try {
        this.restoreAllElements(),
            this.hideOverlayElements(),
            this.removeNoscriptTags(document.body),
            this.applyProgressiveFiltering(document.body, n + 1);
        const l = await this.safeToPng(document.body, {
            backgroundColor: r.backgroundColor,
            quality: r.quality,
            width: a,
            height: o,
            pixelRatio: r.pixelRatio,
            style: {
                transform: "scale(1)",
                transformOrigin: "top left"
            },
            filter: g => this.createProgressiveFilter(g, n + 1)
        })
            , u = await(await fetch(l)).blob();
        return this.restoreAllElements(),
            this.showOverlayElements(),
            this.restoreImages(),
        {
            dataUrl: l,
            blob: u,
            width: a,
            height: o
        }
    } catch {
        this.restoreAllElements(),
            this.showOverlayElements(),
            this.restoreImages();
        const l = new Error("Screenshot capture failed after all retry attempts");
        throw this.isFirefox() && (l.name = "SilentError"),
        l
    }
}
        async captureArea(A, t = {}, r) {
    const n = {
        ...this.defaultOptions,
        ...t
    };
    if (r?.aborted)
        throw new Error("Operation cancelled");
    if (this.shouldUseFlutterPostMessage())
        try {
            return await this.captureViaFlutter(n, 3e4, A)
        } catch (o) {
            // console.warn("Flutter screenshot failed, falling back to standard method:", o)
        }
    const s = 7;
    let i = null;
    for (let o = 1; o <= s; o++)
        try {
            if (r?.aborted)
                throw new Error("Operation cancelled");
            this.restoreAllElements(),
                this.hideOverlayElements(),
                this.removeNoscriptTags(document.body),
                await this.prepareImagesForScreenshot(document),
                this.applyProgressiveFiltering(document.body, o);
            const a = document.body.getBoundingClientRect()
                , B = a.left + window.scrollX
                , l = a.top + window.scrollY
                , c = A.x - B
                , u = A.y - l
                , g = await this.safeToPng(document.body, {
                    backgroundColor: n.backgroundColor,
                    quality: n.quality,
                    width: A.width,
                    height: A.height,
                    style: {
                        transform: `translate(-${c}px, -${u}px)`,
                        transformOrigin: "top left"
                    },
                    filter: F => this.createProgressiveFilter(F, o)
                });
            if (r?.aborted)
                throw new Error("Operation cancelled");
            const Q = await(await fetch(g)).blob();
            return this.restoreAllElements(),
                this.showOverlayElements(),
                this.restoreImages(),
            {
                dataUrl: g,
                blob: Q,
                width: A.width,
                height: A.height
            }
        } catch (a) {
            // if (i = a instanceof Error ? a : new Error(String(a)),
                    // console.warn(`Area screenshot attempt ${o}/${s} failed:`, i),
                    // i.message === "Operation cancelled")
                    //     throw this.restoreAllElements(),
                    //     this.showOverlayElements(),
                    //     this.restoreImages(),
                    //     i;
                    // o === s ? (this.restoreAllElements(),
                    // this.showOverlayElements(),
                    // this.restoreImages()) : await new Promise(B => setTimeout(B, 100))
                }
    try {
        this.restoreAllElements(),
            this.hideOverlayElements(),
            this.removeNoscriptTags(document.body),
            this.applyProgressiveFiltering(document.body, s + 1);
        const o = await this.safeToPng(document.body, {
            backgroundColor: n.backgroundColor,
            quality: n.quality,
            width: A.width,
            height: A.height,
            style: {
                transform: `translate(-${A.x}px, -${A.y}px)`,
                transformOrigin: "top left"
            },
            filter: l => this.createProgressiveFilter(l, s + 1)
        })
            , B = await(await fetch(o)).blob();
        return this.restoreAllElements(),
            this.showOverlayElements(),
            this.restoreImages(),
        {
            dataUrl: o,
            blob: B,
            width: A.width,
            height: A.height
        }
    } catch {
        this.restoreAllElements(),
            this.showOverlayElements(),
            this.restoreImages();
        const o = new Error("Area screenshot capture failed after all retry attempts");
        throw this.isFirefox() && (o.name = "SilentError"),
        o
    }
}
        async captureElement(A, t = {}, r) {
    const n = {
        ...this.defaultOptions,
        ...t
    };
    if (r?.aborted)
        throw new Error("Operation cancelled");
    if (this.shouldUseFlutterPostMessage())
        try {
            return await this.captureViaFlutter(n)
        } catch (a) {
            // console.warn("Flutter screenshot failed, falling back to standard method:", a)
        }
    const s = 7
        , i = A.getBoundingClientRect();
    let o = null;
    for (let a = 1; a <= s; a++)
        try {
            if (r?.aborted)
                throw new Error("Operation cancelled");
            this.restoreAllElements(),
                this.removeNoscriptTags(A),
                await this.prepareImagesForScreenshot(A),
                this.applyProgressiveFiltering(A, a);
            const B = await this.safeToPng(A, {
                backgroundColor: n.backgroundColor,
                quality: n.quality,
                filter: u => this.createProgressiveFilter(u, a)
            });
            if (r?.aborted)
                throw new Error("Operation cancelled");
            const c = await(await fetch(B)).blob();
            return this.restoreAllElements(),
                this.restoreImages(),
            {
                dataUrl: B,
                blob: c,
                width: i.width,
                height: i.height
            }
        } catch (B) {
            // if (o = B instanceof Error ? B : new Error(String(B)),
                    // console.warn(`Element screenshot attempt ${a}/${s} failed:`, o),
                    // o.message === "Operation cancelled")
                    //     throw this.restoreAllElements(),
                    //     this.restoreImages(),
                    //     o;
                    // a === s ? (this.restoreAllElements(),
                    // this.restoreImages()) : await new Promise(l => setTimeout(l, 100))
                }
    try {
        this.restoreAllElements(),
            this.removeNoscriptTags(A),
            this.applyProgressiveFiltering(A, s + 1);
        const a = await this.safeToPng(A, {
            backgroundColor: n.backgroundColor,
            quality: n.quality,
            filter: c => this.createProgressiveFilter(c, s + 1)
        })
            , l = await(await fetch(a)).blob();
        return this.restoreAllElements(),
            this.restoreImages(),
        {
            dataUrl: a,
            blob: l,
            width: i.width,
            height: i.height
        }
    } catch {
        this.restoreAllElements(),
            this.restoreImages();
        const a = new Error("Element screenshot capture failed after all retry attempts");
        throw this.isFirefox() && (a.name = "SilentError"),
        a
    }
}
downloadScreenshot(A, t = "screenshot.png") {
    const r = document.createElement("a");
    r.download = t,
        r.href = A.dataUrl,
        document.body.appendChild(r),
        r.click(),
        document.body.removeChild(r)
}
        async copyToClipboard(A) {
    try {
        return await navigator.clipboard.write([new ClipboardItem({
            "image/png": A.blob
        })]),
            !0
    } catch (t) {
        // return console.warn("Failed to copy to clipboard:", t),
        // !1
    }
}
hideOverlayElements() {
    document.querySelectorAll('[id*="rocket-shot"], [class*="rocket-shot"]').forEach(n => {
        const s = n;
        s.style.display = "none"
    }
    ),
        document.querySelectorAll('[class*="overlay"], [class*="screenshot"], [class*="floating"], [class*="toolbar"], [class*="progress"]').forEach(n => {
            const s = n;
            !(typeof s.id == "string" && s.id.includes("rocket-shot")) && !(typeof s.className == "string" && s.className.includes("rocket-shot")) && (s.style.visibility = "hidden")
        }
        ),
        document.querySelectorAll("*").forEach(n => {
            const s = n
                , i = window.getComputedStyle(s);
            parseInt(i.zIndex, 10) > 1e3 && (s.style.visibility = "hidden",
                s.setAttribute("data-screenshot-hidden", "true"))
        }
        )
}
showOverlayElements() {
    document.querySelectorAll('[id*="rocket-shot"], [class*="rocket-shot"]').forEach(n => {
        const s = n;
        s.style.display = ""
    }
    ),
        document.querySelectorAll('[class*="overlay"], [class*="screenshot"], [class*="floating"], [class*="toolbar"], [class*="progress"]').forEach(n => {
            const s = n;
            !(typeof s.id == "string" && s.id.includes("rocket-shot")) && !(typeof s.className == "string" && s.className.includes("rocket-shot")) && (s.style.visibility = "")
        }
        ),
        document.querySelectorAll('[data-screenshot-hidden="true"]').forEach(n => {
            const s = n;
            s.style.visibility = "",
                s.removeAttribute("data-screenshot-hidden")
        }
        )
}
removeNoscriptTags(A) {
    (A instanceof Document ? A.body : A).querySelectorAll("noscript").forEach(r => r.parentNode?.removeChild(r))
}
        async prepareImagesForScreenshot(A) {
    this.imageBackups.clear(),
        this.failedImages.clear();
    const t = (A instanceof Document ? A.body : A).querySelectorAll("img");
    for (const r of Array.from(t))
        try {
            if (r.src.startsWith("data:") || r.src.startsWith("blob:"))
                continue;
            if (new URL(r.src, window.location.href).origin !== window.location.origin && (this.imageBackups.set(r, {
                src: r.src,
                crossOrigin: r.crossOrigin
            }),
                !r.crossOrigin || r.crossOrigin !== "anonymous")) {
                const i = new Image;
                i.crossOrigin = "anonymous";
                try {
                    await Promise.race([new Promise((a, B) => {
                        i.onload = () => a(),
                            i.onerror = () => B(new Error("CORS load failed")),
                            i.src = r.src
                    }
                    ), new Promise((a, B) => setTimeout(() => B(new Error("Image load timeout")), 5e3))]),
                        r.crossOrigin = "anonymous";
                    const o = r.src;
                    r.src = "",
                        r.src = o
                } catch {
                    try {
                        const o = await this.convertImageToDataUrl(r);
                        r.src = o,
                            r.removeAttribute("crossorigin")
                    } catch (o) {
                        // console.warn("Could not prepare image for screenshot:", r.src, o),
                        // this.failedImages.add(r)
                    }
                }
            }
        } catch (n) {
            // console.warn("Error preparing image:", r.src, n),
            // this.failedImages.add(r)
        }
    await new Promise(r => setTimeout(r, 100))
}
        async convertImageToDataUrl(A) {
    return new Promise((t, r) => {
        try {
            const n = document.createElement("canvas");
            n.width = A.naturalWidth || A.width,
                n.height = A.naturalHeight || A.height;
            const s = n.getContext("2d");
            if (!s) {
                r(new Error("Could not get canvas context"));
                return
            }
            s.drawImage(A, 0, 0);
            const i = n.toDataURL("image/png");
            t(i)
        } catch (n) {
            r(n)
        }
    }
    )
}
createProgressiveFilter(A, t) {
    try {
        if (A instanceof HTMLElement && (A.tagName && typeof A.tagName == "string" && A.tagName.toLowerCase() === "noscript" || A.classList.contains("rocket-shot-overlay") || typeof A.id == "string" && A.id.includes("rocket-shot") || A.classList.contains("screenshot-overlay")))
            return !1;
        if (A.nodeType === Node.ELEMENT_NODE) {
            const s = A;
            if (s.tagName && typeof s.tagName == "string" && s.tagName.toLowerCase() === "noscript")
                return !1
        }
        const r = A.nodeName
            , n = (r && typeof r == "string" ? r.toLowerCase() : "") || "";
        if (t <= 2)
            return !0;
        if (t === 3)
            return !(n === "img" && this.failedImages.has(A));
        if (t === 4)
            return n !== "img";
        if (t === 5)
            return !["img", "iframe", "video", "canvas", "embed", "object"].includes(n);
        if (t === 6) {
            if (["img", "iframe", "video", "audio", "canvas", "embed", "object", "script", "style", "link", "source", "track"].includes(n))
                return !1;
            if (A instanceof HTMLElement)
                try {
                    const i = window.getComputedStyle(A)?.backgroundImage;
                    if (i && typeof i == "string" && i !== "none" && i.includes("http"))
                        return !1
                } catch { }
            return !0
        }
        if (t >= 7) {
            if (["img", "iframe", "video", "audio", "canvas", "embed", "object", "script", "style", "link", "source", "track", "svg", "picture"].includes(n))
                return !1;
            if (A instanceof HTMLElement)
                try {
                    const i = window.getComputedStyle(A)?.backgroundImage;
                    if (i && typeof i == "string" && i !== "none" && (i.includes("http") || i.includes("url(")) || A.hasAttribute("data-src") || A.hasAttribute("data-background"))
                        return !1
                } catch { }
            return !0
        }
        return !0
    } catch (r) {
        // return console.warn("Error in progressive filter:", r),
        // !0
    }
}
applyProgressiveFiltering(A, t) {
    const r = A instanceof Document ? A.body : A;
    if (!(t <= 2)) {
        if (t === 3) {
            r.querySelectorAll("img").forEach(s => {
                if (this.failedImages.has(s)) {
                    const i = s;
                    this.hiddenElements.has(i) || (this.hiddenElements.set(i, {
                        display: i.style.display,
                        visibility: i.style.visibility
                    }),
                        i.style.display = "none")
                }
            }
            );
            return
        }
        if (t === 4) {
            r.querySelectorAll("img").forEach(s => {
                const i = s;
                this.hiddenElements.has(i) || (this.hiddenElements.set(i, {
                    display: i.style.display,
                    visibility: i.style.visibility
                }),
                    i.style.display = "none")
            }
            );
            return
        }
        if (t === 5) {
            ["img", "iframe", "video", "canvas", "embed", "object"].forEach(s => {
                r.querySelectorAll(s).forEach(o => {
                    const a = o;
                    this.hiddenElements.has(a) || (this.hiddenElements.set(a, {
                        display: a.style.display,
                        visibility: a.style.visibility
                    }),
                        a.style.display = "none")
                }
                )
            }
            );
            return
        }
        if (t === 6) {
            ["img", "iframe", "video", "audio", "canvas", "embed", "object", "script", "style", 'link[rel="stylesheet"]', "source", "track"].forEach(i => {
                r.querySelectorAll(i).forEach(a => {
                    const B = a;
                    this.hiddenElements.has(B) || (this.hiddenElements.set(B, {
                        display: B.style.display,
                        visibility: B.style.visibility
                    }),
                        B.style.display = "none")
                }
                )
            }
            ),
                r.querySelectorAll("*").forEach(i => {
                    const o = i;
                    if (this.hiddenElements.has(o))
                        return;
                    const a = window.getComputedStyle(o).backgroundImage;
                    a && a !== "none" && a.includes("http") && (this.hiddenElements.set(o, {
                        display: o.style.display,
                        visibility: o.style.visibility
                    }),
                        o.style.display = "none")
                }
                );
            return
        }
        t >= 7 && (["img", "iframe", "video", "audio", "canvas", "embed", "object", "script", "style", "link", "source", "track", "svg", "picture"].forEach(i => {
            r.querySelectorAll(i).forEach(a => {
                const B = a;
                this.hiddenElements.has(B) || (this.hiddenElements.set(B, {
                    display: B.style.display,
                    visibility: B.style.visibility
                }),
                    B.style.display = "none")
            }
            )
        }
        ),
            r.querySelectorAll("*").forEach(i => {
                const o = i;
                if (this.hiddenElements.has(o))
                    return;
                const B = window.getComputedStyle(o).backgroundImage;
                B && B !== "none" && (B.includes("http") || B.includes("url(")) && (this.hiddenElements.set(o, {
                    display: o.style.display,
                    visibility: o.style.visibility
                }),
                    o.style.display = "none"),
                    (o.hasAttribute("data-src") || o.hasAttribute("data-background")) && (this.hiddenElements.has(o) || (this.hiddenElements.set(o, {
                        display: o.style.display,
                        visibility: o.style.visibility
                    }),
                        o.style.display = "none"))
            }
            ))
    }
}
restoreAllElements() {
    for (const [A, t] of this.hiddenElements.entries())
        try {
            A.style.display = t.display,
                A.style.visibility = t.visibility
        } catch (r) {
            // console.warn("Error restoring element:", r)
        }
    this.hiddenElements.clear();
    for (const { element: A, parent: t, nextSibling: r } of this.removedElements)
        try {
            t && (r ? t.insertBefore(A, r) : t.appendChild(A))
        } catch (n) {
            // console.warn("Error restoring removed element:", n)
        }
    this.removedElements = [],
        this.failedImages.clear()
}
restoreImages() {
    for (const [A, t] of this.imageBackups.entries())
        try {
            A.src = t.src,
                t.crossOrigin === null ? A.removeAttribute("crossorigin") : A.crossOrigin = t.crossOrigin
        } catch (r) {
            // console.warn("Error restoring image:", r)
        }
    this.imageBackups.clear()
}
sendScreenshotToParent(A, t = q.SCREENSHOT_UPLOAD) {
    try {
        window.parent.postMessage({
            type: t,
            data: {
                dataUrl: A.dataUrl,
                width: A.width,
                height: A.height,
                timestamp: Date.now()
            }
        }, "*")
    } catch (r) {
        // console.warn("Failed to send screenshot to parent:", r)
    }
}
    }
const xe = new Ig;
function bg({ data: e }) {
    const [A, t] = OA({
        toolbar: {
            isVisible: !0,
            mode: null
        },
        thumbnail: {
            isVisible: !1,
            screenshot: null,
            autoHideTimer: null
        },
        progress: {
            isVisible: !1,
            message: "",
            abortController: null
        }
    })
        , r = Yt(o => {
            window.parent.postMessage({
                type: "screenshot-thumbnail-state",
                data: {
                    isVisible: !0,
                    screenshot: {
                        dataUrl: o.dataUrl,
                        width: o.width,
                        height: o.height,
                        timestamp: Date.now()
                    }
                }
            }, "*")
        }
            , []);
    EA(() => {
        A.toolbar.mode === "area" ? document.body.style.border = "2px dashed #000" : document.body.style.border = "none"
    }
        , [A.toolbar.mode]),
        EA(() => {
            A.toolbar.isVisible || window.parent.postMessage({
                type: q.TOOLBAR_CLOSE,
                props: {}
            }, "*")
        }
            , [A.toolbar.isVisible]);
    const n = Yt(async (o, a = !1) => {
        try {
            if (o === "fullscreen") {
                const B = new AbortController;
                a ? t(c => ({
                    ...c,
                    toolbar: {
                        isVisible: !1,
                        mode: null
                    },
                    progress: {
                        isVisible: !1,
                        message: "",
                        abortController: null
                    }
                })) : (t(c => ({
                    ...c,
                    toolbar: {
                        isVisible: !1,
                        mode: null
                    },
                    progress: {
                        isVisible: !0,
                        message: "Capturing full screen...",
                        abortController: B
                    }
                })),
                    window.parent.postMessage({
                        type: q.PROGRESS_SHOW,
                        data: {
                            message: "Capturing full screen..."
                        }
                    }, "*")),
                    await new Promise(c => setTimeout(c, a ? 100 : 200));
                const l = await xe.captureFullScreen({}, B.signal);
                (e.type === q.SCREENSHOT || e.type === q.SCREENSHOT_SILENT) && xe.sendScreenshotToParent(l, q.BACKGROUND_SCREENSHOT),
                    a || (t(c => ({
                        ...c,
                        progress: {
                            isVisible: !1,
                            message: "",
                            abortController: null
                        }
                    })),
                        window.parent.postMessage({
                            type: q.PROGRESS_HIDE
                        }, "*"),
                        r(l))
            } else
                o === "area" && t(B => ({
                    ...B,
                    toolbar: {
                        isVisible: !1,
                        mode: o
                    }
                }))
        } catch (B) {
            navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || console.error("Screenshot capture failed:", B),
                xe.sendScreenshotToParent({
                    dataUrl: "data:image/png;base64,",
                    blob: new Blob,
                    width: 0,
                    height: 0
                }, q.SCREENSHOT_FAILED),
                a ? t(c => ({
                    ...c,
                    toolbar: {
                        isVisible: !1,
                        mode: null
                    },
                    progress: {
                        isVisible: !1,
                        message: "",
                        abortController: null
                    }
                })) : (t(c => ({
                    ...c,
                    toolbar: {
                        isVisible: !0,
                        mode: null
                    },
                    progress: {
                        isVisible: !1,
                        message: "",
                        abortController: null
                    }
                })),
                    window.parent.postMessage({
                        type: q.PROGRESS_HIDE
                    }, "*"))
        }
    }
        , [r, e.type]);
    EA(() => {
        e.type === q.SCREENSHOT ? n("fullscreen") : (e.type === q.SCREENSHOT_SILENT || e.silent) && n("fullscreen", !0)
    }
        , [e, n]);
    const s = () => {
        t(o => ({
            ...o,
            toolbar: {
                isVisible: !1,
                mode: null
            }
        }))
    }
        , i = () => {
            A.progress.abortController && A.progress.abortController.abort(),
                t(o => ({
                    ...o,
                    progress: {
                        isVisible: !1,
                        message: "",
                        abortController: null
                    },
                    toolbar: {
                        isVisible: !0,
                        mode: null
                    }
                })),
                window.parent.postMessage({
                    type: q.PROGRESS_HIDE
                }, "*")
        }
        ;
    return I(WA, {
        children: [I(co, {
            isVisible: A.toolbar.isVisible || A.progress.isVisible,
            onCaptureMode: n,
            onClose: s,
            isProcessing: A.progress.isVisible,
            progressMessage: A.progress.message,
            onCancel: i
        }), A.toolbar.mode === "area" && I(Bo, {
            onSelectionComplete: async o => {
                const a = new AbortController;
                try {
                    t(l => ({
                        ...l,
                        toolbar: {
                            isVisible: !1,
                            mode: null
                        },
                        progress: {
                            isVisible: !0,
                            message: "Capturing selected area...",
                            abortController: a
                        }
                    })),
                        window.parent.postMessage({
                            type: q.PROGRESS_SHOW,
                            data: {
                                message: "Capturing selected area..."
                            }
                        }, "*"),
                        await new Promise(l => setTimeout(l, 100));
                    const B = await xe.captureArea(o, {}, a.signal);
                    xe.sendScreenshotToParent(B, q.BACKGROUND_SCREENSHOT),
                        t(l => ({
                            ...l,
                            progress: {
                                isVisible: !1,
                                message: "",
                                abortController: null
                            }
                        })),
                        window.parent.postMessage({
                            type: q.PROGRESS_HIDE
                        }, "*"),
                        r(B)
                } catch (B) {
                    navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || console.error("Area screenshot capture failed:", B),
                        t(c => ({
                            ...c,
                            toolbar: {
                                isVisible: !0,
                                mode: null
                            },
                            progress: {
                                isVisible: !1,
                                message: "",
                                abortController: null
                            }
                        })),
                        window.parent.postMessage({
                            type: q.PROGRESS_HIDE
                        }, "*")
                }
            }
            ,
            onCancel: () => {
                t(o => ({
                    ...o,
                    toolbar: {
                        isVisible: !0,
                        mode: null
                    }
                }))
            }
        })]
    })
}
const qi = "rocket-shot"
    , $r = `${qi}-mount-point`
    , jr = `${qi}-style`
    , _g = "https://static.rocket.new";
function Lg() {
    document.getElementById(jr)?.remove(),
        document.getElementById($r)?.remove()
}
function zr(e) {
    const A = document.getElementById($r)
        , t = document.getElementById(jr)
        , r = A || document.createElement("div");
    if (A || (r.id = $r,
        document.body.appendChild(r)),
        !t) {
        const n = document.createElement("link");
        n.href = `${_g}/rocket-shot.css`,
            n.rel = "stylesheet",
            n.id = jr,
            n.crossOrigin = "anonymous",
            r.appendChild(n)
    }
    A || ro(I(bg, {
        data: e || {}
    }), r)
}
window.addEventListener("message", e => {
    try {
        const A = e.data;
        switch (A.type) {
            case "mount":
                window.parent.postMessage({
                    type: "screenshot-ack"
                }, "*"),
                    zr();
                break;
            case "unmount":
                Lg();
                break;
            case "screenshot":
                window.parent.postMessage({
                    type: "screenshot-ack"
                }, "*"),
                    zr({
                        ...A
                    });
                break;
            case "screenshot-silent":
                window.parent.postMessage({
                    type: "screenshot-ack"
                }, "*"),
                    zr({
                        ...A,
                        silent: !0
                    });
                break;
            default:
            // console.warn(`Unknown message type: ${A.type}`, A);
            // break
        }
    } catch (A) {
        // console.log(A)
    }
}
)
}
) ();
