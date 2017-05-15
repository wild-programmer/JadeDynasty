(function() {	
	
	if (!Function.prototype.bind) {
		Function.prototype.bind = function() {
			var __method = this;
			var args = Array.prototype.slice.call(arguments);
			var object = args.shift();
			return function() {
				return __method.apply(object,
					args.concat(Array.prototype.slice.call(arguments)));
			}
		}
	}

	var isPlaceholderSupport = 'placeholder' in document.createElement('input')

	
	var GAME_KEY = {
		"world2": 1,
		"wulin2": 2,
		"w2i": 3,
		"zhuxian2": 4,
		"sg": 5,
		"rwpd": 6,
		"kdxy": 7,
		"sgcq": 8,
		"xmhzx": 9,
		"shenmo": 10,
		"xlzj": 11,
		"sgsj": 12,
		"xljz": 13,
		"yt": 14,
		"sdxl": 15,
		"seiya": 16,
		"xa": 19,
		"sw": 20,
		"zxsj": 23,
		"shushan": 23,
		"hytj": 103
	}
	
	function setCookie(key, value) {
		var expires_i = 1000 * 60 * 60 * 24;
		var expires_date = new Date(new Date().getTime() + expires_i);
		document.cookie = key + "=" + escape(value) + ";domain=.wanmei.com;path=/;expires=" + expires_date.toGMTString();
	}

	function deleteCookie(key) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		document.cookie = key + "=''" + ";domain=.wanmei.com;path=/;expires=" + exp.toGMTString();
	}
	
	function checkIdcard(idcardx){
		var area={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"} 
		
		var idcard = idcardx.toUpperCase();
		var Y,JYM;
		var S,M;
		var idcard_array = new Array();
		idcard_array = idcard.split("");
		//地区检验
		if(area[parseInt(idcard.substr(0,2))]==null) return 4;
		//身份号码位数及格式检验
		switch(idcard.length){
		case 15:
		if ( (parseInt(idcard.substr(6,2))+1900) % 4 == 0 || ((parseInt(idcard.substr(6,2))+1900) % 100 == 0 && (parseInt(idcard.substr(6,2))+1900) % 4 == 0 )){
		ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性
		} else {
		ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性
		}
		if(ereg.test(idcard)) return 0;
		else return 2;
		break;
		case 18:
		//18位身份号码检测
		//出生日期的合法性检查 
		//闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
		//平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
		if ( parseInt(idcard.substr(6,4)) % 4 == 0 || (parseInt(idcard.substr(6,4)) % 100 == 0 && parseInt(idcard.substr(6,4))%4 == 0 )){
		ereg=/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;//闰年出生日期的合法性正则表达式
		} else {
		ereg=/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;//平年出生日期的合法性正则表达式
		}
		if(ereg.test(idcard)){//测试出生日期的合法性
		//计算校验位
		S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
		+ (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
		+ (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
		+ (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
		+ (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
		+ (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
		+ (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
		+ parseInt(idcard_array[7]) * 1 
		+ parseInt(idcard_array[8]) * 6
		+ parseInt(idcard_array[9]) * 3 ;
		Y = S % 11;
		M = "F";
		JYM = "10X98765432";
		M = JYM.substr(Y,1);//判断校验位
		if(M == idcard_array[17]) return 0; //检测ID的校验位
		else return 3;
		}
		else return 2;
		break;
		default:
		return 1;
		break;
		}
		}
	
    function getCaptchaImg(){   
        var t = (new Date).getTime()
        return 'http://captchas.wanmei.com/various_captcha/wanmei_captcha?appId=f3ba1af9293e48a08d96a7128ed6dfb8&time=' + t    
    }
	
	var util = {
		jsonp: function(method, params, callback) {
			var url;
			if (method == "register") {
				url = "http://passport.wanmei.com/member/fastreg/v3.do"
			}else if(method == "addIndulge"){ 
                url = "http://passport.wanmei.com/member/fastreg/v1.do"               
            } else if(method == 'checkRandom'){ 
                url = "http://passport.wanmei.com/ajax/checkrand"            
            }else if(method == 'sendCode'){ 
                url = 'http://passport.wanmei.com/ajax/sendcode'
            }else{
				url = "http://passport.wanmei.com/member/common/v1.do"
			}
			params.method = method;
			$.ajax({
				url: url,
				data: params,
				dataType: "jsonp",
				jsonp: "jsonpCallback",
				success: callback,
				error: function(XMLHttpRequest, textStatus) {}
			})
		}
	}

	var reg = {
		init: function(opt) {
			this.options = opt
			this.$el = this.options.el
			this.type = this.options.type || 'normal'
			this.render()
			this.bindEvents()
		},
		render: function() {
			this.$el.html(this.template(this.type))
			if (this.type == 'normal') {
				this.checkLimit()
			}
			if (!isPlaceholderSupport) {
				this.$el.find('.qreg-input').each(function(i, el) {
					var label = '<label class="qreg-placeholder">' + $(el).attr('placeholder') + '</label>'
					$(el).before(label).val('').attr('autocomplete', 'off')
				})
			}
			//reset
			this.account_cache = ''
			this.account_remote = -2
			this.captcha_cache = ''
			this.captcha_remote = -2
			this.clearSendTimer()
		},
		bindEvents: function() {
			this.$el.on('focus', '.qreg-input', this.onFocus.bind(this))
			this.$el.on('blur', '.qreg-input', this.onBlur.bind(this))
			this.$el.on('click', '.qreg-btn-reg', this.regSubmit.bind(this))
			this.$el.on('click', '.qreg-btn-code', this.sendCode.bind(this))
				//验证码
			this.$el.on('focus', '[name=captcha]', this.showCaptchaLayer.bind(this))
			this.$el.on('click', '.qreg-btn-captcha', this.changeCaptcha.bind(this))
			this.$el.on("click", ".qreg-field-captcha", function(e) {
				e.stopPropagation()
			})
			$(document).on('click', this.hideCaptchaLayer.bind(this))
				//ie6
			if (!isPlaceholderSupport) {
				this.$el.on('click', '.qreg-placeholder', function(e) {
					var $input = $(e.target).closest('.qreg-input-wrap').find('.qreg-input')
					$input.focus()
				})
				this.$el.on('focus', '.qreg-input', function() {
					var $lb = $(this).closest('.qreg-input-wrap').find('.qreg-placeholder')
					$lb.hide()
				})
				this.$el.on('blur', '.qreg-input', function() {
					var $lb = $(this).closest('.qreg-input-wrap').find('.qreg-placeholder')
					if (this.value == '') {
						$lb.show()
					}
				})
			}
			//2015-09-01 短信验证码
			this.$el.on("click",".qreg-btn-smscaptcha",this.changeSmsCaptcha.bind(this))
			this.$el.on("click",".qreg-btn-smscaptcha-submit",this.submitSmsCaptcha.bind(this))
		},
		onFocus: function(e) {
			var $input = $(e.target)
			var $field = $input.closest('.qreg-field')
			var msg = $input.attr('tip')
			var isError = false
			if ($field.hasClass('qreg-field-error') && $input.val()) {
				msg = $field.attr('errMsg')
				isError = true
			} else {
				$field.removeClass('qreg-field-error').addClass('qreg-field-focus')
			}
			this.showGolbalTip(msg, isError)
		},
		onBlur: function(e) {
			var $input = $(e.target)
			var $field = $input.closest('.qreg-field')
			$field.removeClass('qreg-field-focus')
			var name = $input.attr('name')
			if($input.val()){
				this[name] && this[name]()
			}
		},
		showError: function(name, msg) {
			var $input = this.$el.find('[name=' + name + ']')
			var $field = $input.closest('.qreg-field')
			$field.removeClass("qreg-field-right").addClass("qreg-field-error").attr('errMsg', msg)
			this.showGolbalTip(msg, true)
		},
		showCorrect: function(name) {
			var $input = this.$el.find('[name=' + name + ']')
			var $field = $input.closest('.qreg-field')
			$field.removeClass('qreg-field-error').addClass('qreg-field-right').removeAttr('errMsg')
			if(this.$el.find('.qreg-tip').hasClass('qreg-tip-error')){
				this.showGolbalTip('')
			}
		},
		showGolbalTip: function(msg, err) {
			var $tip = this.$el.find('.qreg-tip')
			if (err) {
				$tip.addClass('qreg-tip-error').html(msg)
			} else {
				$tip.removeClass('qreg-tip-error').html(msg)
			}
		},
		showCaptchaLayer: function() {
			this.$el.find('.qreg-pop-captcha').show()
		},
		hideCaptchaLayer: function() {
			this.$el.find('.qreg-pop-captcha').hide()
		},
		toggleCaptcha: function(need) {
			this.needCaptcha = need
			this.$el.find('.qreg-field-captcha').toggle(need)
			if (need) {
				this.refreshCaptcha()
			}
		},
		refreshCaptcha: function() {
			this.$el.find('.qreg-captcha').attr('src', getCaptchaImg())
		},
		changeCaptcha: function(event) {
			event.preventDefault()
			this.$el.find('[name=captcha]').val('').focus()
			this.refreshCaptcha()
		},
		checkLimit: function() {
			util.jsonp('checkLimit', {}, function(data) {
				this.toggleCaptcha(!!data.code)
			}.bind(this))
		},
		account_cache: '',
		account_remote: -9, //-9 未验证，-8验证中
		account: function() {
			var self = this
			var type = this.type
			var $input = this.$el.find('[name=account]')
			var value = $input.val()
			var oldvalue = this.account_cache
			var remote = oldvalue == value ? this.account_remote : -9
			var check = function() {
				switch (type) {
					case 'normal':
						if (value == '') {
							return "账号不能为空"
						}
						if (!/^[a-z]/.test(value)) {
							return "账号首位必须为小写字母"
						}
						if (value.length < 6 || value.length > 16) {
							return "账号长度必须在6-16个字符之间"
						}
						if (!/^[a-z]{1}[a-z0-9]{5,15}$/.test(value)) {
							return "只能由小写字母和数字组成"
						}
						break
					case 'phone':
						if (value == '') {
							return "手机号不能为空"
						}
						if (!/1[3|5|7|8|][0-9]{9}/.test(value)) {
							return "手机号不符合规则"
						}
						break
					case 'email':
						if (value == '') {
							return "邮箱不能为空"
						}
						if (!/([\w|-]+[\.?\w|-]*@[\w|-]+\.[\w|-]+)(\.?[\w|-]*)(\.?[\w|-]*)/i.test(value)) {
							return "邮箱格式不符合规则"
						}
						break
				}
				if (remote === -1) {
					return '用户名格式错误'
				} else if (remote === 1 || remote === 2 || remote === 3) {
					return '用户已存在'
				} else if (remote === -2) {
					return 'IP被封禁'
				}

			}
			this.account_cache = value
			var msg = check()
			if (msg) {
				this.showError('account', msg)
				return {
					state: false,
					val: value
				}
			}
			if (remote === -8) {
				return {
					state: 'loading',
					val: value
				}
			} else if (remote === -9) {
				this.account_remote = -8
				util.jsonp('checkUser', {
					username: value
				}, function(data) {
					self.account_remote = data.code
					if (data.code === 0) {
						self.showCorrect('account')
					} else {
						self.account()
					}
				})
				return {
					state: 'loading',
					val: value
				}
			}

			return {
				state: true,
				val: value
			}
		},
		password: function() {
			var $input = this.$el.find('[name=password]')
			var value = $input.val()
			var check = function() {
				if (value == '') {
					return "密码不能为空"
				}
				if (value.length < 6 || value.length > 16) {
					return "密码长度必须在6-16个字符之间"
				}
				if (!/^[a-z0-9A-Z]{6,16}$/.test(value)) {
					return "密码只能由字母或数字组成"
				}
			}
			var msg = check()
			if (msg) {
				this.showError('password', msg)
				return {
					state: false,
					val: value
				}
			}
			this.showCorrect('password')
			return {
				state: true,
				val: value
			}
		},
		
		email: function() {
			var $input = this.$el.find('[name=email]')
			var value = $input.val()
			var check = function() {
				if (value == '') {
					return "邮箱不能为空"
				}
				if (!/([\w|-]+[\.?\w|-]*@[\w|-]+\.[\w|-]+)(\.?[\w|-]*)(\.?[\w|-]*)/i.test(value)) {
					return "邮箱格式不符合规则"
				}
			}
			var msg = check()
			if (msg) {
				this.showError('email', msg)
				return {
					state: false,
					val: value
				}
			}
			this.showCorrect('email')
			return {
				state: true,
				val: value
			}
		},
		
		needCaptcha: false,
		captcha_cache: '',
		captcha_remote: -2,
		captcha: function() {
			if(!this.needCaptcha){
				return {
					state: true,
					val: ''
				}
			}
			var self = this
			var $input = this.$el.find('[name=captcha]')
			var value = $input.val()
			var oldvalue = this.captcha_cache
			var remote = oldvalue == value ? this.captcha_remote : -2
			var check = function() {
				if (value == "") {
					return "验证码不能为空"
				}
                /*
				if (value.length !== 4) {
					return "验证码错误"
				}
                */
				if (remote === 1) {
					return '验证码错误'
				}
			}
			this.captcha_cache = value
			var msg = check()
			if (msg) {
				this.showError('captcha', msg)
				return {
					state: false,
					val: value
				}
			}
			if (remote === -3) {
				return {
					state: 'loading',
					val: value
				}
			} else if (remote === -2) {
				this.captcha_remote = -3
				util.jsonp('checkRandom', {
					rand: value
				}, function(data) {
					self.captcha_remote = data.code
					if (data.code === 0) {
						self.showCorrect('captcha')
					} else {
						self.captcha()
					}
				})
				return {
					state: 'loading',
					val: value
				}
			}
			return {
				state: true,
				val: value
			}
		},
		phonecode: function() {
			var $input = this.$el.find('[name=phonecode]')
			var value = $input.val()
			var check = function() {
				if (value == "") {
					return "验证码不能为空"
				}
			}
			var msg = check()
			if (msg) {
				this.showError('phonecode', msg)
				return {
					state: false,
					val: value
				}
			}
			//没异步验证
			//this.showCorrect('phonecode')
			return {
				state: true,
				val: value
			}
		},
		emailcode: function() {
			var $input = this.$el.find('[name=emailcode]')
			var value = $input.val()
			var check = function() {
				if (value == "") {
					return "验证码不能为空"
				}
			}
			var msg = check()
			if (msg) {
				this.showError('emailcode', msg)
				return {
					state: false,
					val: value
				}
			}
			//没异步验证
			//this.showCorrect('emailcode')
			return {
				state: true,
				val: value
			}
		},
		send_state: 0,
		sendCode: function(event) {
			event.preventDefault()
			var self = this
			setTimeout(function() {
				if (this.send_state !== 0) {
					return false
				}
				var type = this.type === "phone" ? 1 : 2
				var account = this.account()
				if (account.state === true) {
					//发送手机验证码
					if(type == 1){	
						this.showSmsCaptcha()
					}else if(type == 2){	
						this.setCodeBtn(2)
						util.jsonp('sendCode', {
							account: account.val,
							type: type
						}, function(data) {
							self.setCodeBtn(1)
						})
					}
				} else {
					this.$el.find('[name=account]').focus()
				}
			}.bind(this), 100)
		},
		//短信验证码 弹出层
		showSmsCaptcha: function(){	
			this.$el.find(".qreg-core-reg").hide()
			this.$el.find(".qreg-core-smscaptcha").show()
			this.$el.find(".qreg-smscaptcha-img").attr("src",getCaptchaImg())
			this.$el.find(".qreg-smscaptcha-tip").html('正确输入验证码后给您发送短信').removeClass("qreg-tip-error")
			this.$el.find("[name=smscaptcha]").val('')
		},
		hideSmsCaptcha: function(){	
			this.$el.find(".qreg-core-reg").show()
			this.$el.find(".qreg-core-smscaptcha").hide()
		},
		changeSmsCaptcha: function(event){
			event.preventDefault()
			this.$el.find(".qreg-smscaptcha-img").attr("src",getCaptchaImg())
		},
		submitSmsCaptcha: function(event){
			event.preventDefault()
			var $input = this.$el.find('[name=smscaptcha]')
			var $tip = this.$el.find('.qreg-smscaptcha-tip')
			var value = $input.val()
			if(value == ""){	
				$tip.html("验证码不能为空").addClass("qreg-tip-error")
				return false
			}
			var account = this.account()
			var self = this
			util.jsonp('sendCode', {
				account: account.val,
				type: 1,
				rand: value
			}, function(data) {
				if(data.code === 0){
					self.hideSmsCaptcha()
					self.setCodeBtn(1)
				}else{	
					$tip.html(data.message).addClass("qreg-tip-error")
					self.changeSmsCaptcha()
					$input.val('').focus()
				}
			})
		},
		send_timer: null,
		setCodeBtn: function(state) {
			this.send_state = state
			var $btn = this.$el.find(".qreg-btn-code")
			var self = this
			switch (state) {
				case 0:
					$btn.html("重新发送验证码")
					break
				case 1:
					var time = 60
					var timeout = function() {
						if (time > 0) {
							$btn.html(time + "秒后可重新获取")
							time--
							self.send_timer = setTimeout(timeout, 1000)
						} else {
							self.setCodeBtn(0)
						}
					}
					timeout()
					break
				case 2:
					$btn.html("发送中...")
					break
			}
		},
		clearSendTimer: function(){	
			this.send_state = 0
			if(this.send_timer){
				clearTimeout(this.send_timer)
				this.send_timer = null
			}
		},
		checkAll: function() {
			var fields = []
			var json = {}
			switch (this.type) {
				case 'normal':
					
					fields = ['account', 'password', 'email', 'captcha']
					break
				case 'phone':
					fields = ['account', 'phonecode', 'password']
					break
				case 'email':
					fields = ['account', 'emailcode', 'password']
					break
			}

			for (var i = 0; i < fields.length; i++) {
				var name = fields[i]
				var mod = this[name]()
				if (mod.state === false) {
					return false
				} else {
					json[name] = mod.val
				}
			}
			if (!this.$el.find('[name=isagree]')[0].checked) {
				this.showGolbalTip('请先勾选同意用户协议及防沉迷协议', true)
				return false
			}
			return json
		},
		submit_loading: false,
		regSubmit: function(event) {
			event.preventDefault()
			if (this.submit_loading) {
				return false
			}
			var json = this.checkAll()
			if (json) {
				var params = {
					username: json.account,
					passwd: json.password
					//xtnr: '', //游戏类型 c
					//whichType: 2, //推广专员1或新手卡2 
					//tgyidnumber: '' //专员推广值或者新手卡号推广值，现用
				}
				
				if (app.data.game in GAME_KEY) {
					params.xtnr = GAME_KEY[app.data.game]
				}
				if (app.data.card) {
					params.tgyidnumber = app.data.card
				}
				
				if (app.data.wmrid) {
					setCookie('WMRID', app.data.wmrid)
				}
				switch (this.type) {
					case 'normal':
						params.type = 3
						params.rand = json.captcha
						params.email = json.email
						break
					case 'phone':
						params.type = 1
						params.code = json.phonecode
						break
					case 'email':
						params.type = 2
						params.code = json.emailcode
						break
				}	
				this.submit_loading = true
				util.jsonp('register', params, function(data) {
					this.submit_loading = false
					if (data.code === 0) {
						app.data.username = json.account
						app.router('regSuc')
						if (app.data.wmrid) {
							deleteCookie('WMRID')
						}
					} else if (data.code === -201) {
						this.toggleCaptcha(true)
						//添加验证码错误提示
						this.showGolbalTip(data.message, true)
					} else {
						this.showGolbalTip(data.message, true)
					}
				}.bind(this))
			}
		},
		template: function(type) {
			var html = '<form class="qreg-core-reg" autocomplete="off">'
			html += '<div class="qreg-tip"></div>'
			html += '<div class="qreg-fields">'
			switch (type) {
				case 'normal':
					html += '<div class="qreg-field qreg-field-account">'
					html += '<div class="qreg-input-wrap">'
					html += '<input type="text" placeholder="通行证账号" maxlength="16" class="qreg-input" name="account" tip="6-16位小写英文字母及数字组成，首位为字母。">'
					html += '</div>'
					html += '<div class="qreg-ico"></div>'
					html += '</div>'
					html += '<div class="qreg-field qreg-field-password">'
					html += '<div class="qreg-input-wrap">'
					html += '<input type="password" placeholder="通行证密码" maxlength="16" class="qreg-input" name="password" tip="密码由6-16位英文字母或数字组成。">'
					html += '</div>'
					html += '<div class="qreg-ico"></div>'
					html += '</div>'
					
					html += '<div class="qreg-field qreg-field-email">'
					html += '<div class="qreg-input-wrap">'
					html += '<input type="text" placeholder="邮箱" class="qreg-input" name="email" tip="可以通过电子邮箱修改密码">'
					html += '</div>'
					html += '<div class="qreg-ico"></div>'
					html += '</div>'
					
					html += '<div class="qreg-field qreg-field-captcha" style="display:none">'
					html += '<div class="qreg-input-wrap">'
					html += '<input type="text" placeholder="点击显示验证码" class="qreg-input" name="captcha" tip="请输入验证码">'
					html += '<div class="qreg-pop-captcha"><img class="qreg-captcha"><a href="###" class="qreg-btn-captcha">换一张</a></div>'
					html += '</div>'
					html += '<div class="qreg-ico"></div>'
					html += '</div>'
					break
				case 'phone':
					html += '<div class="qreg-field qreg-field-account">'
					html += '<div class="qreg-input-wrap">'
					html += '<input type="text" placeholder="手机号" maxlength="11" class="qreg-input" name="account" tip="注册后将免费享有短信服务">'
					html += '</div>'
					html += '<div class="qreg-ico"></div>'
					html += '</div>'
					html += '<div class="qreg-field qreg-field-phonecode">'
					html += '<div class="qreg-input-wrap">'
					html += '<input type="text" placeholder="验证码" class="qreg-input" name="phonecode" tip="请输入获取到的验证码">'
					html += '<a href="###" class="qreg-btn-code">发送验证码</a>'
					html += '</div>'
					html += '<div class="qreg-ico"></div>'
					html += '</div>'
					html += '<div class="qreg-field qreg-field-password">'
					html += '<div class="qreg-input-wrap">'
					html += '<input type="password" placeholder="密码" maxlength="16" class="qreg-input" name="password" tip="密码由6-16位英文字母或数字组成">'
					html += '</div>'
					html += '<div class="qreg-ico"></div>'
					html += '</div>'
					break
				case 'email':
					html += '<div class="qreg-field qreg-field-account">'
					html += '<div class="qreg-input-wrap">'
					html += '<input type="text" placeholder="邮箱" class="qreg-input" name="account" tip="可以通过邮箱修改密码">'
					html += '</div>'
					html += '<div class="qreg-ico"></div>'
					html += '</div>'
					html += '<div class="qreg-field qreg-field-emailcode">'
					html += '<div class="qreg-input-wrap">'
					html += '<input type="text" placeholder="验证码" class="qreg-input" name="emailcode" tip="请输入获取到的验证码">'
					html += '<a href="###" class="qreg-btn-code">发送验证码</a>'
					html += '</div>'
					html += '<div class="qreg-ico"></div>'
					html += '</div>'
					html += '<div class="qreg-field qreg-field-password">'
					html += '<div class="qreg-input-wrap">'
					html += '<input type="password" placeholder="密码" maxlength="16" class="qreg-input" name="password" tip="密码由6-16位英文字母或数字组成">'
					html += '</div>'
					html += '<div class="qreg-ico"></div>'
					html += '</div>'
					break
			}
			html += '<div class="qreg-agree">'
			html += '<label>'
			html += '<input type="checkbox" checked name="isagree">'
			html += '已阅读并同意<a href="http://passport.wanmei.com/jsp/member/agreement.htm" target="_blank">用户协议及防沉迷协议</a> </label>'
			html += '</div>'
			html += '</div>'
			html += '<div class="qreg-btns"> '
			html += '<a href="###" class="qreg-btn-reg"><span>'+ app.data.regBtnText +'</span></a>'
			html += '</div>'
			html += '</form>'
			
			if(type == 'phone'){	
				html += '<div class="qreg-core-smscaptcha" style="display:none">'
				html += '<div class="qreg-smscaptcha-tip">正确输入验证码后给您发送短信</div>'
				html += '<div class="qreg-field qreg-field-smscaptcha">'
				html += '<div class="qreg-input-wrap">'
				html += '<input type="text" placeholder="验证码" class="qreg-input" name="smscaptcha">'
				html += '<img class="qreg-smscaptcha-img"><a href="###" class="qreg-btn-smscaptcha">换一个</a>'
				html += '</div></div>'
				html += '<div class="qreg-btns"> '
				html += '<a href="###" class="qreg-btn-smscaptcha-submit"><span>确定</span></a>'
				html += '</div>'
				html += '</div>'
			}
			
			return html
		}
	}
	
	var regSuc = {
		init: function(opt) {
			this.$el = opt.el
			this.render()
			this.bindEvents()
		},
		render: function() {
			this.$el.html(this.template())
		},
		bindEvents: function() {
			this.$el.on('click', '.qreg-btn-tobind', function(event) {
				event.preventDefault()
				app.router('regBind')
			})
			this.$el.on('click', '.qreg-btn-back', function(event) {
				event.preventDefault()
				if(app.data.backUrl){	
					window.location.href = app.data.backUrl
				}else{
					app.router('reg')
				}
			})
		},
		template: function() {
			var html = ''
			html += '<div class="qreg-p1">恭喜您，注册成功！</div>'
			html += '<div class="qreg-p2">您的完美通行证是：</div>'
			html += '<div class="qreg-p3">' + app.data.username + '</div>'
			html += '<div class="qreg-p4">您的账号信息尚不完善，存在严重安全隐患，并会受到防沉迷系统限制，请您及时补填信息。</div>'
			html += '<div class="qreg-succ-btn">'
			html += '<a href="###" class="qreg-btn-tobind">补填账号信息</a>'
			html += '<a href="###" class="qreg-btn-back">返回</a>'
			html += '</div>'
			return html
		}
	}

	var regBind = {
		init: function(opt) {
			this.$el = opt.el
			this.render()
			this.bindEvents()
		},
		render: function() {
			this.$el.html(this.template())
			if (!isPlaceholderSupport) {
				this.$el.find('.qreg-input').each(function(i, el) {
					var label = '<label class="qreg-placeholder">' + $(el).attr('placeholder') + '</label>'
					$(el).before(label).val('').attr('autocomplete', 'off')
				})
			}
		},
		bindEvents: function() {
			this.$el.on('focus', '.qreg-input', this.onFocus.bind(this))
			this.$el.on('blur', '.qreg-input', this.onBlur.bind(this))
			this.$el.on('click', '.qreg-btn-bind', this.submit.bind(this))
			if (!isPlaceholderSupport) {
				this.$el.on('click', '.qreg-placeholder', function(e) {
					var $input = $(e.target).closest('.qreg-input-wrap').find('.qreg-input')
					$input.focus()
				})
				this.$el.on('focus', '.qreg-input', function() {
					var $lb = $(this).closest('.qreg-input-wrap').find('.qreg-placeholder')
					$lb.hide()
				})
				this.$el.on('blur', '.qreg-input', function() {
					var $lb = $(this).closest('.qreg-input-wrap').find('.qreg-placeholder')
					if (this.value == '') {
						$lb.show()
					}
				})
			}
		},
		onFocus: function(e) {
			var $input = $(e.target)
			var $field = $input.closest('.qreg-field')
			var msg = $input.attr('tip')
			var isError = false
			if ($field.hasClass('qreg-field-error') && $input.val()) {
				msg = $field.attr('errMsg')
				isError = true
			} else {
				$field.removeClass('qreg-field-error').addClass('qreg-field-focus')
			}
			this.showGolbalTip(msg, isError)
		},
		onBlur: function(e) {
			var $input = $(e.target)
			var $field = $input.closest('.qreg-field')
			$field.removeClass('qreg-field-focus')
			var name = $input.attr('name')
			this[name]()
		},
		showError: function(name, msg) {
			var $input = this.$el.find('[name=' + name + ']')
			var $field = $input.closest('.qreg-field')
			$field.removeClass("qreg-field-right").addClass("qreg-field-error").attr('errMsg', msg)
			this.showGolbalTip(msg, true)
		},
		showCorrect: function(name) {
			var $input = this.$el.find('[name=' + name + ']')
			var $field = $input.closest('.qreg-field')
			$field.removeClass("qreg-field-error").addClass("qreg-field-right").removeAttr('errMsg')
			this.showGolbalTip('')
		},
		showGolbalTip: function(msg, err) {
			var $tip = this.$el.find('.qreg-tip')
			if (err) {
				$tip.addClass('qreg-tip-error').html(msg)
			} else {
				$tip.removeClass('qreg-tip-error').html(msg)
			}
		},
		realname: function() {
			var $input = this.$el.find('[name=realname]')
			var value = $input.val()
			var check = function() {
				if (!value) {
					return "真实姓名不能为空"
				}
				if (!/[\u4e00-\u9fa5]/g.test(value)) {
					return "真实姓名必须为汉字"
				}
				if(value.length !== value.replace(/\s+/g,"").length){	
					return "真实姓名不符合规则"
				}
				if (value.length < 2 || value.length > 5) {
					return "长度必须在2-5个汉字之间"
				}
			}
			var msg = check()
			if (msg) {
				this.showError('realname', msg)
				return {
					state: false,
					val: value
				}
			}
			this.showCorrect('realname')
			return {
				state: true,
				val: value
			}
		},
		idnum: function() {
			var $input = this.$el.find('[name=idnum]')
			var value = $input.val()
			var check = function() {
				if (!value) {
					return "身份证号码不能为空"
				}
				if (checkIdcard(value)!=0) {
					return "身份证号码不符合规则"
				}
			}
			var msg = check()
			if (msg) {
				this.showError('idnum', msg)
				return {
					state: false,
					val: value
				}
			}
			this.showCorrect('idnum')
			return {
				state: true,
				val: value
			}
		},
		checkAll: function() {
			var fields = ['realname', 'idnum']
			var json = {}
			for (var i = 0; i < fields.length; i++) {
				var name = fields[i]
				var mod = this[name]()
				if (mod.state === false) {
					return false
				} else {
					json[name] = mod.val
				}
			}
			return json
		},
		submit_loading: false,
		submit: function(event) {
			event.preventDefault()
			if (this.submit_loading) {
				return false
			}
			var json = this.checkAll()
			if (json) {
				var params = {
					username: app.data.username,
					idnumber: json.idnum,
					truename: encodeURIComponent(json.realname)
				}
				this.submit_loading = true
				util.jsonp('addIndulge', params, function(data) {
					this.submit_loading = false
					if (data.code === 0) {
						app.router('regBindSuc')
					} else {
						this.showGolbalTip(data.message, true)
					}
				}.bind(this))
			}
		},
		template: function() {
			var html = ''
			html += '<div class="qreg-tip"></div>'
			html += '<div class="qreg-fields">'
			html += '<div class="qreg-field qreg-field-realname">'
			html += '<div class="qreg-input-wrap">'
			html += '<input type="text" placeholder="真实姓名" maxlength="10" class="qreg-input" name="realname" tip="真实姓名为2-5个汉字">'
			html += '</div>'
			html += '<div class="qreg-ico"></div>'
			html += '</div>'
			html += '<div class="qreg-field qreg-field-idnum">'
			html += '<div class="qreg-input-wrap">'
			html += '<input type="text" placeholder="身份证号码" class="qreg-input" name="idnum" tip="证件号码必须与您的证件姓名相符">'
			html += '</div>'
			html += '<div class="qreg-ico"></div>'
			html += '</div>'
			html += '</div>'
			html += '<div class="qreg-btns"> '
			html += '<a href="###" class="qreg-btn-bind">提交信息</a>'
			html += '</div>'
			return html
		}
	}
	
	var regBindSuc = {
		init: function(opt) {
			this.$el = opt.el
			this.render()
			this.bindEvents()
		},
		render: function() {
			this.$el.html(this.template())
		},
		bindEvents: function() {
			this.$el.on('click','.qreg-btn-back',function(event) {
				event.preventDefault()
				if(app.data.backUrl){	
					window.location.href = app.data.backUrl
				}else{
					app.router('reg')
				}
			})
		},
		template: function() {
			var html = ''
			html += '<div class="qreg-p1">恭喜您，补填信息成功！</div>'
			html += '<div class="qreg-p2">您的完美通行证是：</div>'
			html += '<div class="qreg-p3">' + app.data.username + '</div>'
			html += '<div class="qreg-p4">祝您游戏愉快~</div>'
			html += '<div class="qreg-succ-btn">'
			html += '<a href="###" class="qreg-btn-back">返回</a>'
			html += '</div>'
			return html
		}
	}
	
	var app = {
		init: function(opt) {
			this.options = opt
			$.extend(app.data,this.options)
			this.$el = this.options.box
			this.render()
			this.cacheElements()
			this.bindEvents()
			this.router('reg',{type:app.data.tab[0]})
		},
		render: function() {
			this.$el.html(this.template())
			this.$tabs = this.$el.find('.qreg-tab li')
			this.$tabs.eq(0).addClass("qreg-tab-select")
		},
		cacheElements: function() {
			this.$regEl = this.$el.find('.qreg-core')
			this.$regSucEl = this.$el.find('.qreg-suc')
			this.$regBindEl = this.$el.find('.qreg-bind')
			this.$regBindSucEl = this.$el.find('.qreg-bind-suc')
		},
		bindEvents: function() {
			this.$el.on('click', '.qreg-tab-li', this.setTab)
		},
		setTab: function(e) {
			e.preventDefault()
			var tab = $(e.currentTarget)
			var type = tab.attr('tab')
			app.router('reg', {type: type})
			tab.addClass("qreg-tab-select").siblings().removeClass("qreg-tab-select")
		},
		
		router: function(mod, args) {
			$('.qreg-main > div').hide()
			switch (mod) {
				case 'reg':
					if (reg._init) {
						if(args && args.type){
							reg.type = args.type
						}
						reg.render()
					} else {
						reg.init({
							el: this.$regEl,
							type: args.type
						})
						reg._init = true
					}
					this.$regEl.show()
					break
				case 'regSuc':
					if (regSuc._init) {
						regSuc.render()
					} else {
						regSuc.init({
							el: this.$regSucEl
						})
						regSuc._init = true
					}
					this.$regSucEl.show()
					try{	
						trackRegEvent()
					}catch(e){}
					break
				case 'regBind':
					if (regBind._init) {
						regBind.render()
					} else {
						regBind.init({
							el: this.$regBindEl
						})
						regBind._init = true
					}
					this.$regBindEl.show()
					break
				case 'regBindSuc':
					if (regBindSuc._init) {
						regBindSuc.render()
					} else {
						regBindSuc.init({
							el: this.$regBindSucEl
						})
						regBindSuc._init = true
					}
					this.$regBindSucEl.show()
					break
			}
		},
		template: function() {
			var tabText = {
				'normal': '个性',
				'phone': '手机',
				'email': '邮箱'
			}
			var tab = app.data.tab
			var html = ''
			
			html += '<ul class="qreg-tab" '+ (tab.length === 1 ? 'style="display:none"' : '') +'>'
			for (var i = 0; i < tab.length; i++) {
				html += '<li class="qreg-tab-li" tab="' + tab[i] + '">'
				html += '<a href="###">' + tabText[tab[i]] + '</a>'
				html += '</li>'
			}
			html += '</ul>'
			html += '<div class="qreg-main">'
			html += '<div class="qreg-core"></div>'
			html += '<div class="qreg-suc"></div>'
			html += '<div class="qreg-bind"></div>'
			html += '<div class="qreg-bind-suc"></div>'
			html += '</div>'
			return html
		},
		data: {
			regBtnText: '免费注册完美通行证',
			tab: ['normal','phone','email']
		}
	}

	
	window.fastreg = function(opt){	
		app.init($.extend({	
			box: '', 
			wmrid: '',
			card: '',
			game: '', //备用，最好使用gameid
			from: 0 //备用,标记端游，页游
		},opt))
	}
})()