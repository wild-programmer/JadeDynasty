(function() {
	//加载js
    var loadJS = (function() {
        var __head = document.head || document.getElementsByTagName('head')[0];
        var __loaded = {};
        var __loading = {};
        var __load = function(url, type, charset, callback) {
            if (__loading[url]) {
                if (callback) {
                    setTimeout(function() {
                        __load(url, type, charset, callback)
                    },
                    1);
                    return
                }
                return
            }
            if (__loaded[url]) {
                if (callback) {
                    callback();
                    return
                }
                return
            }
            __loading[url] = true;
            var pureurl = url.split('?')[0];
            var n, t = type || pureurl.toLowerCase().substring(pureurl.lastIndexOf('.') + 1);
            if (t === 'js') {
                n = document.createElement('script');
                n.type = 'text/javascript';
                n.src = url;
                n.async = 'true';
                if (charset) {
                    n.charset = charset
                }
            } else if (t === 'css') {
                n = document.createElement('link');
                n.type = 'text/css';
                n.rel = 'stylesheet';
                n.href = url;
                __loaded[url] = true;
                __loading[url] = false;
                __head.appendChild(n);
                if (callback) callback();
                return
            }
            n.onload = n.onreadystatechange = function() {
                if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
                    __loading[url] = false;
                    __loaded[url] = true;
                    if (callback) {
                        callback()
                    }
                    n.onload = n.onreadystatechange = null
                }
            };
            n.onerror = function() {
                __loading[url] = false;
                if (callback) {
                    callback()
                }
                n.onerror = null
            }
            __head.appendChild(n)
        };
        return function(url, callback) {
            __load(url, "js", "utf-8", callback)
        }
    })();
	
    var extend = function() {
        var target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false,
        options;
        if (target.constructor == Boolean) {
            deep = target;
            target = arguments[1] || {};
            i = 2;
        }
        if (typeof target != "object" && typeof target != "function") {
            target = {}
        };
        if (length == i) {
            target = this; --i;
        }
        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (var name in options) {
                    var src = target[name],
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && typeof copy == "object" && !copy.nodeType) {
                        target[name] = this.extend(deep, src || (copy.length != null ? [] : {}), copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    }
	
    var filesize = function(size) {
        if (size < 1024 * 1000) { //1000KB
            return Math.round(size / 1024 * 100) / 100 + "KB";
        }
        if (size < 1024 * 1024 * 1000) { //1000MB
            return Math.round(size / 1024 / 1024 * 100) / 100 + "MB";
        }
        return Math.round(size / 1024 / 1024 / 1024 * 100) / 100 + "GB";
    }
    //数据预处理
    var preDealData = function(data) {
        var ret = {};
        for (var a in data) {
            ret[a] = [];
            var arr = data[a];
            for (var i = 0; i < arr.length; i++) {
                var it = arr[i];
                var obj = extend(it, {
                    file_size: filesize(it.file_size),
                    url: it.url ? it.url: it.cdn_url
                });
                ret[a].push(obj);
            }
        }
        //之前命名错误
        ret.patch = ret.path;
        return ret;
    }
	
	window.loadPatchJs = (function() {
        var time = (new Date()).getTime();
        var baseurl = "http://www.wanmei.com/public/data/patch/";
        var games = {
            world2: 1,
            wulin2: 2,
            w2i: 3,
            zhuxian: 4,
            sg: 5,
            rwpd: 6,
            kdxy: 7,
            sgcq: 8,
            mhzx: 9,
            xlzj: 10,
            shenmo: 11,
            sgsj: 12,
            seiya: 2801,
            sdxl: 26,
            zhuxian_exp: 401,
            w2i_exp: 301,
            seiya_exp: 28,
            xljz: 21,
            dota2: 33,
            xa: 16,
            sw: 68,
            xa_exp: 1601,
            sd: 32,
            sgcqhj: 227,
			sgcqhj_exp: 279,
			zzbq: 277,
			shushan: 361
        };
        return function(game, callback) {
            var id = games[game];
            var url = baseurl + id + ".js?t=" + time;
            loadJS(url,
            function() {
                var data = preDealData(download_json[id]);
                callback(data);
            });
        }
    })();
	
	window.patchUtil = {
		load: loadPatchJs,
		setTemplate: function(el, temp, data) {
			if (document.getElementById(el)) {
				document.getElementById(el).innerHTML = template(temp, data);
			}
		},
		getCommonPatch: function(data) {
			var patch = data.patch;
			for(var i=0;i<patch.length;i++){
				if(patch[i].common){
					return patch[i]
				}
			}
			return patch[0]
		},
		getLatestPatch: function(data) {
			var patch = data.patch;
			for(var i=0;i<patch.length;i++){
				if(patch[i].latest){
					return patch[i]
				}
			}
			return patch[0]
		}
	}

})()

//接口
function getCommonPatch(data) {
    var client_version = data.client[0].end;
    var patch_version = data.patch[0].end;
    var patch = data.patch;
    for (var i = 0; i < patch.length; i++) {
        if (patch[i].type == 'COMMON') {
            return patch[i];
        }
    }
    for (var i = 0; i < patch.length; i++) {
        if (patch[i].start == client_version && patch[i].end == patch_version) {
            return patch[i];
        }
    }
    return patch[0];
}

function setTemplate(el, temp, data) {
    if (document.getElementById(el)) {
        document.getElementById(el).innerHTML = template(temp, data);
    }
}