//扫码登录div
var sLogin = getId('s-login')
//账号登陆div
var aLogin = getId('a-login')
//选择扫码标签
var sweepCode = getClass('sweepCode','a') 
//选择账号标签
var account = getClass('account','a') 
//使用帮助标签
var usehelp = getId('usehelp')
//帮助图片
var usehelpImg = getId('usehelpImg')
//二维码图片
var scanMaskImg = getId('scanMaskImg')
//人icon
var iPeople = getId('iPeople')
//锁icon
var iLock = getId('iLock')
//text icon
var iTest = getId('iTest')
//验证码
var imgCode = getId('imgCode')

//随机背景	
function backgroundImg() {
	//获取body
	var body = document.querySelector('body');
	//产生随机数
	var a = Math.random()*3;
	if(a<1){
		body.style.backgroundImage='url(../images/login_bg1.jpg)'
	}else if(a<2){
		body.style.backgroundImage='url(../images/login_bg2.jpg)'
	}else body.style.backgroundImage='url(../images/login_bg3.jpg)'
	changeToScan() //默认扫码登录
}

//切换到扫码登录
function changeToScan(){
	aLogin.style.display = 'none' 
	sLogin.style.display = 'block'
	sweepCode.style.color = '#0AE'
	sweepCode.style.borderColor = '#0AE'
	account.style.color = '#fff'
	account.style.borderColor = '#fff'
}

//切换到账号密码
function changeToAccount(){
	sLogin.style.display ='none'
	aLogin.style.display = 'block'
	sweepCode.style.color = '#fff'
	sweepCode.style.borderColor = '#fff'
	account.style.color = '#0AE'
	account.style.borderColor = '#0AE'
}

//鼠标移到选择框
function aOnMouseOver(a){
	a.style.color = '#0AE'
	a.style.borderColor = '#0AE'
	// a.style.transitionDelay = '100ms'
	// a.style.transitionDuration = '500ms'
}

//鼠标移出选择框
function aOnMouseOut(a,id){
	var display = getId(id).style.display
	//如果不在当前的登录模式
	if(display == 'none'){
	a.style.color = '#fff'
	a.style.borderColor = '#fff'
	// a.style.transitionDelay = '100ms'
	// a.style.transitionDuration = '500ms'
	}
}

//换到用户帮助图片
function mouseOverChangeImg(){
	scanMaskImg.style.opacity= 0
	useHelpImg.style.opacity = 1
}
//换到二维码
function mouseOutChangeImg(){
	scanMaskImg.style.opacity= 1
	useHelpImg.style.opacity = 0
}

//小图标变换
function iOver(i) {
	if(i=='iPeople'){
		iPeople.style.backgroundImage ='url(../images/iPeople2.jpg)'
	}else if(i=='iLock'){
		iLock.style.backgroundImage='url(../images/iLock2.jpg)'
	}else{
		iTest.style.backgroundImage='url(../images/iTest2.jpg)'
	}
}

//小图标变换
function iOut(i) {
	if(i=='iPeople'){
		iPeople.style.backgroundImage='url(../images/iPeople.png)'
	}else if(i=='iLock'){
		iLock.style.backgroundImage='url(../images/iLock.jpg)'
	}else{
		iTest.style.backgroundImage='url(../images/iTest.jpg)'
	}
}

//切换验证码
function changeCode() {
	number = imgCode.getAttribute('src') 
	if(number=='../images/imgcode1.png'){
		imgCode.setAttribute('src','../images/imgcode2.png')
	}else if(number=='../images/imgcode2.png'){
		imgCode.setAttribute('src','../images/imgcode3.png')
	}else imgCode.setAttribute('src','../images/imgcode1.png')
}

//获取表单中的账号
var laccount = getId('laccount')
//获取表单中的密码
var password = getId('password')
//获取表单中的验证码
var textCode = getId('textCode')
//获取表单中的验证码框
var testCodeFrame = document.getElementById('testCodeFrame')
//获取错误提示框
var errorSpan = error.querySelector('span')

//表单验证
function testLoginForm()
{	
	if(laccount.value.replace(/\s+/g,"").length==0){
		error.style.display = 'block'
		errorSpan.innerHTML = '请输入账户名'
		return false
	}else if(password.value.replace(/\s+/g,"").length==0){
		
			error.style.display = 'block'
			errorSpan.innerHTML = '请输入密码'
			return false
		}else if(testCodeFrame.style.display == 'block'){
				if(textCode.value.replace(/\s+/g,"").length == 0){
					errorSpan.innerHTML = '请输入验证码'
					return false
				}else return true
			}else{
				testCodeFrame.style.display = 'block'
				error.style.display = 'block'
				errorSpan.innerHTML = '请输入验证码'
				return false
			}
}