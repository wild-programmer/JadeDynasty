/**
 * Wanmei Analytics
 * @date 2012.02.27
 * @author lihongyu
 * @author hongyu611@hotmail.com
 * 2.3.2 - add heatmap
 * 2.3.3 - add pv source path
 */
/**
 * change log
 * 2012.04.12 修改了util的命名
 */
(function () {
    var _v = "2.3.3", _q = "_mtxq", _t = true, _n = "(none)", _r = "(direct)", _f = false, _u = undefined, _l = "length",
        _p = "/", _ud = "__mtxud", _sd = "__mtxsd", _vt = "__mtxvt", _cd = "__mtxcid", _sr = "__mtxsr", _ar = "__mtxcar",
        _d = "../analytics.wanmei.com/__mtx.gif"/*tpa=http://analytics.wanmei.com/__mtx.gif*/, _de = "../analytics.wanmei.com/__mtxe.gif"/*tpa=http://analytics.wanmei.com/__mtxe.gif*/;
    var ts = function () {
        return new Date().getTime();
    }, su = function (a, b, c) {
        return c && c != -1 ? a.substring(b, c) : a.substring(b);
    }, pz = function (a, b, c) {
        return c && c != -1 ? a.indexOf(b, c) : a.indexOf(b);
    }, pa = function (u, p) {
        var z = pz(u, "?" + p + "=");
        if (z == -1) {
            z = pz(u, "&" + p + "=");
            if (z == -1)
                return;
        }
        z += p[_l] + 2;
        var e = pz(u, "&", z), s = pz(u, "#", z);
        e = e != -1 ? e : s != -1 ? s : e;
        return su(u, z, e);
    }, pt = function (v) {
        var s = pz(v, "://") + 3, e = pz(v, "/", s), f = pz(v, "?"), h = pz(v, "#");
        if (e == -1)
            return "/";
        f = f != -1 ? f : h != -1 ? h : f;
        return su(v, e, f);
    }, co = function (a, c) {
        for (var i = 0; i < a[_l]; i++)
            if (a[i] === c)
                return _t;
        return _f;
    }, ho = function (v) {
        var u = v.toLowerCase(), s = pz(u, "://") + 3, e = pz(u, "/", s), f = pz(u, ":", s);
        e = f == -1 ? e : e < f ? e : f;
        return su(u, s, e);
    }, So = function (n, k) {
        this.n = n;
        this.k = k;
    }, Sa = function (v) {
        var L = [], u = v.toLowerCase(), h = ho(u), sl = "google=q&msn=q&aol=q&live=q&bing=q&yahoo=p&soso=w&3721=name&youdao=q&vnet=kw&sogou=query&iask=key&iask=title&zhongsou=w&qihoo=kw&baidu=wd&baidu=word&baidu=kw".split("&");
        for (var i = 0; i < sl[_l]; i++) {
            var s = sl[i].split("=");
            L.push(new So(s[0], s[1]));
        }
        for (var i = 0; i < L[_l]; i++) {
            var so = L[i], kw;
            if (pz(u, so.n + ".") != -1) {
                kw = pa(v, so.k);
                if (kw)
                    return [so.n, kw];
            }
        }
        return _u;
    }, B = function (ht, pg) {
        var fv = function () {
            var f = "-", n = navigator;
            if (n.plugins && n.plugins.length) {
                for (var ii = 0; ii < n.plugins.length; ii++) {
                    if (n.plugins[ii].name.indexOf('Shockwave Flash') != -1) {
                        f = n.plugins[ii].description.split('Shockwave Flash ')[1].split(".")[0];
                        break;
                    }
                }
            }
            else {
                var fl;
                try {
                    fl = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                    f = fl.GetVariable("$version");
                }
                catch (e) {
                }
                if (f == "-") {
                    try {
                        fl = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                        f = "WIN 6,0,21,0";
                        fl.AllowScriptAccess = "always";
                        f = fl.GetVariable("$version");
                    }
                    catch (e) {
                    }
                }
                if (f == "-") {
                    try {
                        fl = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                        f = fl.GetVariable("$version");
                    }
                    catch (e) {
                    }
                }
                if (f != "-") {
                    f = f.split(" ")[1].split(",");
                    f = f[0];
                }
            }
            return f;
        }, ul = function () {
            var n = navigator, l = "language", b = "browserLanguage";
            return n[l] ? n[l].toLowerCase() : n[b] ? n[b].toLowerCase() : "-";
        }, sr = function () {
            return screen.width + "x" + screen.height;
        }, os = function () {
            var u = navigator.userAgent.toLowerCase();
            if (pz(u, "nt 5.0") != -1)
                return "windows2000";
            if (pz(u, "nt 5.1") != -1)
                return "windowsxp";
            if (pz(u, "nt 5.2") != -1)
                return "windows2003";
            if (pz(u, "nt 6.0") != -1)
                return "windowsvista";
            if (pz(u, "nt 6.1") != -1)
                return "windows7";
            if (pz(u, "linux") != -1)
                return "linux";
            if (pz(u, "mac") != -1)
                return "mac";
            if (pz(u, "ipad") != -1)
                return "ipad";
            if (pz(u, "symbian") != -1)
                return "symbian";
            return "-";
        }, bt = function () {
            var a = navigator.userAgent.toLowerCase(), b = "-", ie = "msie", ch = "chrome", ff = "firefox", op = "opera", sf = "safari", p = -1, e;
            p = a.indexOf(ie);
            if (p != -1) {
                b = ie;
                e = pz(a, ";", p);
                b += su(a, p, e).split(" ")[1].split(".")[0];
                return b;
            }
            return pz(a, ff) != -1 ? ff : pz(a, ch) != -1 ? ch : pz(a, op) != -1 ? op : pz(a, sf) != -1 ? sf : b;
        }, h = function () {
            return location.hostname;
        }, p = function () {
            return location.pathname;
        }, pqy = function () {
            var qy = location.search;
            if (qy == "" || qy == null || qy == undefined) {
                return _n;
            }
            return escape(qy);
        }, rn = function () {
            return Math.round(Math.random() * 1687215791);
        }, rr = function () {
            var rf = document.referrer, rh;
            if (rf == "")
                return _r;
            rh = ho(rf);
            if (h() == rh)
                return "(internal)";
            return encodeURIComponent(rf);
        }, ce = function () {
            return navigator.cookieEnabled ? 1 : 0;
        }, ua = function () {
            return encodeURIComponent(navigator.userAgent);
        };
        return ["mtxhn=" + (ht ? ht : h()), "mtxp=" + (pg ? pg : p()), "mtxpqy=" + pqy(), "mtxfv=" + _v, "mtxfl=" + fv(), "mtxul=" + ul(), "mtxsr=" + sr(), "mtxo=" + os(), "mtxb=" + bt(), "mtxr=" + rr(), "mtxn=" + rn(), "mtxce=" + ce(), "mtxua=" + ua()];
    }, Ck = function (d, st, ar, ac, cr, cc, ev) {
        var a = this, ut = 259200, ru = function (l) { // ut = 259200 TODO
            var r = "";
            for (var i = 0; i < l; i++)
                r += Math.round(Math.random() * 1687215791).toString(16).substring(1, 2);
            return r;
        }, iu = function (v) {
            if (v === _u)
                return _f;
            if (v === _f)
                return _f;
            if (v == "")
                return _f;
            return _t;
        }, gc = function (n) {
            var c = document.cookie;
            if (c == "")
                return _u;
            c = c.split("; ");
            for (var i = 0; i < c[_l]; i++) {
                var t = c[i].split("=");
                if (t[0] == n)
                    return t[1];
            }
            return _u;
        }, gn = function (n) {
            var i = gc(n);
            return i ? i : _n;
        }, gd = function (n) {
            var i = gc(n);
            return i ? i : _r;
        }, sc = function (v, d, m) {
            var c = v + ";";
            if (m) {
                var n = new Date;
                n.setMinutes(n.getMinutes() + m);
                c += "expires=" + n.toGMTString() + ";";
            }
            c += "path=/;domain=" + d;
            document.cookie = c;
        }, cu = function (d) {
            var t = "." + ts();
            sc(_ud + "=" + ru(16) + t + t + t + ".1", d, ut);
        }, cs = function (d) {
            sc(_sd + "=" + ru(8) + "." + ts() + ".0.1", d);
        }, uu = function (ud) {
            var x = ud.split(".");
            x[2] = x[3];
            x[3] = ts();
            x[4] = parseInt(x[4]) + 1;
            sc(_ud + "=" + x.join("."), d, ut);
        }, us = function (v) {
            if (ev)
                return;
            var i = v.split("."), t = ts(), w = t - parseInt(i[1]);
            if (w > (st * 60 * 1000)) {
                i[0] = ru(8);
                i[2] = 0;
                i[3] = 1;
                uu(gc(_ud));
            }
            else {
                i[2] = w;
                i[3] = parseInt(i[3]) + 1;
            }
            i[1] = t;
            sc(_sd + "=" + i.join("."), d);
        }, cr = function (d) {
            var a = [], vt = gc(_vt), cd = gc(_cd), rf = document.referrer, se;
            if (rf == "") {
                a = a.concat(["csr:" + _r, "cdt:" + _r]);
            }
            else {
                se = Sa(rf);
                a = se ? a.concat(["csr:" + se[0], "cdt:" + se[1]]) : a.concat(["csr:" + ho(rf), "cdt:" + pt(rf)]);
            }
            vt ? a.push("advt:" + vt) : a.push("advt:" + _n);
            cd ? a.push("camp:" + cd) : a.push("camp:" + _n);
            sc(_sr + "=" + a.join("|"), d, 50400); // TODO 50400
        }, ca = function () {
            var f = document.referrer, rl;
            if (f == "") {
                rl = _r + ":" + _n;
            }
            else {
                rl = Sa(f);
//                rl = rl ? rl.join(":") : ho(f) + ":" + _n;
                rl = rl ? rl.join(":") : ho(f) + ":" + pt(f);
            }
            sc(_ar + "=" + rl, d);
        }, nu = function (v) {
            return v != _u && v != null && v != "";
        }, ic = function () {
            var ud = gc(_ud), sd = gc(_sd), vt = gc(_vt), cd = gc(_cd), sr = gc(_sr), al = gc(_ar);
            if (nu(ud)) {
                if (nu(sd)) {
                    us(sd);
                }
                else {
                    uu(ud);
                    cs(d);
                }
            }
            else {
                cu(d);
                cs(d);
            }
            ac && (vt ? ar && sc(_vt + "=" + ac, d) : sc(_vt + "=" + ac, d));
            cc && (cd ? cr && sc(_cd + "=" + cc, d) : sc(_cd + "=" + cc, d));
            if (!nu(sr)) {
                cr(d);
            }
            if (al == undefined) {
                ca();
            }
        };
        ic();
        return ["mtxud=" + gc(_ud), "mtxsd=" + gc(_sd), "mtxvt=" + gn(_vt), "mtxcid=" + gn(_cd), "mtxcsr=" + gc(_sr), "mtxcar=" + gd(_ar)];
    },D = function (k,v) {
        var gc = function (n) {
            var c = document.cookie;
            if (c == "")
                return "none";
            c = c.split("; ");
            for (var i = 0; i < c.length; i++) {
                var t = c[i].split("=");
                if (t[0] == n)
                    return t[1];
            }
            return "none";
        };
        return ["mtxud=" + gc("__mtxud"), "mtxsd=" + gc("__mtxsd"), "mtxvt=" + gc("__mtxvt"), "mtxek=" + encodeURIComponent(k), "mtxen=" + encodeURIComponent(v)];
    }, x = function (dd,v) {
        var m = new Image(1, 1);
        m.src = dd + "?" + v + "&mtxq=1";
        m.onload = function () {
            return;
        };
    }, Tr = function () {
        var a = this, content = "";
        a.d = _u;
        a.c = _u;
        a.t = 30; // TODO 30 checked
        a.e = _u;
        a.h = _u;
        a.p = _u;
        a.ar = _t;
        a.ak = "dida"
        a.sc = _u;
        a.cr = _t;
        a.cc = _u;
        a.ck = _u;
        a._setHostName = function (v) {
            a.h = v;
        }
        a._setPathName = function (v) {
            a.p = v;
        }
        a._setDomainName = function (v) {
            a.d = v;
        }
        a._setCampaign = function () {
            a.cc = a.cc || [], f = arguments;
            for (var i = 0; i < f[_l]; i++)
                !co(a.cc, f[i]) && a.cc.push(f[i]);
        }
        a._setCampaignKey = function (v) {
            a.ck = v;
        }
        a._setAdvertisementKey = function (v) {
            a.ak = v;
        }
        a._setAdvertisementRefreshable = function (v) {
            a.ar = v;
        }
        a._setCampaignRefreshable = function (v) {
            a.cr = v;
        }
        a._setSessionTimeOut = function (v) {
            a.t = v;
        }
        a.it = function (w, v, e) {
            var ls = location.search, cu = pa(ls, a.ck), ca, ci, st = ts();
            a.ac = pa(ls, a.ak);
            a.ck && cu && a._setCampaign(cu);
            a.cc && (ca = a.cc.join("."));
            var ci = Ck(a.d, a.t, a.ar, a.ac, a.cr, ca, e), bi = B(w, v);
            bi.push("mtxct=" + (ts() - st));
            return ci.concat(bi);
        }
        a._trackPageview = function (v, w) {
            var cb = a.it(a.h, v);
            cb.push("mtxe=(none)");
            cb.push("mtxpz=0:0");
            x(_d,cb.join("&"));
        }
        a._trackEvent = function () {
            var cb = a.it(a.h, a.p, _t), ta = [];
            a.p = _u;
            f = arguments;
            for (var i = 0; i < f[_l]; i++)
                !co(ta, f[i]) && ta.push(f[i]);
            cb.push("mtxe=(" + encodeURIComponent(ta.join("*")) + ")");
            cb.push("mtxpz=0:0");
            x(cb.join("&"));
        }
        a._trackClick = function (w, v) {
            var cb = a.it(a.h, v);
            cb.push("mtxe=(none)");
            cb.push("mtxpz=" + w);
            x(cb.join("&"));
        }
        a._trackActionEvent = function (k, v) {
            var z = D(k, v);
            z.push("mtxtm=" + ts() );
            x(_de, z.join("&"));
        }
    }, W = function (t) {
        var a = this;
        a.t = t;
        a.push = function () {
            var v = arguments, c = 0;
            for (var i = 0; i < v[_l]; i++) {
                try {
                    a.t[v[i][0]].apply(a.tt, v[i].slice(1));
                }
                catch (e) {
                    c++;
                    x("error --> " + e);
                }
            }
        }
    };
    (function () {
        var t = new Tr, w = new W(t), q = window[_q], s = _f;
        if (q && typeof q.push == "function") {
            s = q.constructor == Array;
            if (!s)
                return;
        }
        window[_q] = w;
        s && w.push.apply(w, q);
    })();
})();
var __mtxUtils = {
    externalTrack:function (v) {
        try {
            if (v == undefined || v == null || v == "") {
                _mtxq.push(["_trackPageview"]);
            }
            else {
                _mtxq.push(["_trackPageview", v]);
            }
        }
        catch (e) {
        }
    },
    trackClick:function (v, xm, xy) {
        var d = document, b = d.body, w = window, m = "attachEvent", n = "addEventListener", r, wx = xm, hy = xy || 2700;
        wx ? (wx = wx / 2) : (wx = 640);
        var x = "~", y = "~", e = v || w.event, mx = Math.max, el = d.documentElement, b = d.body, g = w.innerWidth || el.clientWidth || b.offsetWidth, l = "scrollLeft", t = "scrollTop", j = "clientX", k = "clientY";
        /msie (\d+\.\d)/i.test(navigator.userAgent) ? (x = mx(el[l], b[l]) + e[j], y = mx(el[t], b[t]) + e[k]) : (x = e.pageX, y = e.pageY);
        x = mx(el[l], b[l]) + e[j] - Math.ceil(g / 2);
        y = mx(el[t], b[t]) + e[k];
        (Math.abs(x) <= wx && y <= hy) && (_mtxq && _mtxq.push(["_trackClick", x + ":" + y]));
    },
    trackEvent:function (k, v) {
        var _d = "../analytics.wanmei.com/__mtxe.gif"/*tpa=http://analytics.wanmei.com/__mtxe.gif*/,
            gc = function (n) {
                var c = document.cookie;
                if (c == "")
                    return "none";
                c = c.split("; ");
                for (var i = 0; i < c.length; i++) {
                    var t = c[i].split("=");
                    if (t[0] == n)
                        return t[1];
                }
                return "none";
            },
            x = function (v) {
                var m = new Image(1, 1);
                m.src = _d + "?" + v + "&mtxq=" + new Date().getTime();
                m.onload = function () {
                    return;
                }
            }
        var ckinfo = ["mtxud=" + gc("__mtxud"), "mtxsd=" + gc("__mtxsd"), "mtxvt=" + gc("__mtxvt"), "mtxek=" + encodeURIComponent(k), "mtxen=" + encodeURIComponent(v)].join("&");
        x(ckinfo);
    }
};
var wm_analytics_islode = 10;
