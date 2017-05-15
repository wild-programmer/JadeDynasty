try {
	document.domain = 'http://www.wanmei.com/public/js/wanmei.com';
} catch (e) { }
var typeTongji1307;
function gaMoniter(aa) {
	typeTongji1307 = aa + '-fastregister';
}
function trackRegEvent() {
	_gaq.push(['_trackEvent', 'register', 'fastregister', typeTongji1307]);
	/*_gaq.push(['_trackPageview','http://www.wanmei.com/fastreg/success.html'])*/
	GA('send', 'event', 'register', 'fastregister', typeTongji1307);
}

