//获取注意框
var attentionContent = getId('attentionContent')
//获取个人注册步骤
var personalProcess = getId('personalProcess')
//获取公司注册步骤
var corporationProcess = getId('corporationProcess')
//获取个人注册选择
var personalChoice = getId('personalChoice')
//获取公司注册选择
var corporationChoice = getId('corporationChoice')
//获取个人注册内容
var personalContent = getId('personalContent')
//获取公司注册内容
var corporationContent = getId('corporationContent')
//获取尾部图片
var footImg = getClass('foot','img')

//打开或关闭注意框
function openAttention() {
	if(attentionContent.style.height=='250px'){
		attentionContent.style.height=0
		attentionContent.style.paddingTop=0
	}else{
		attentionContent.style.height='250px'
		attentionContent.style.paddingTop='30px'
	}
}

//切换到个人注册
function toPersonal() {
	setBlock(personalProcess)
	setBlock(personalChoice)
	setBlock(personalContent)
	setNone(corporationProcess)
	setNone(corporationChoice)
	setNone(corporationContent)
	footImg.setAttribute('src','../images/regFoot.jpg')
}

//切换到公司注册
function toCorporation() {
	setNone(personalProcess)
	setNone(personalChoice)
	setNone(personalContent)
	setBlock(corporationProcess)
	setBlock(corporationChoice)
	setBlock(corporationContent)
	footImg.setAttribute('src','../images/regFoot2.jpg')
}

//打开下拉框
function openCheckbox(checkbox) {
	var downList = checkbox.querySelector('.downList')
	checkbox.style.borderColor = '#e3e3e3'
	downList.style.height = '90px'
	checkbox.style.boxShadow = '0 0 5px #c7c5c5'
}

//盒上下拉框
function closeCheckbox(checkbox) {
	var downList = checkbox.querySelector('.downList')
	checkbox.style.borderColor = '#fff'
	downList.style.height = '0px'
	checkbox.style.boxShadow = '0 0 5px #fff'
}

//输入框后提示图片的切换
function onInput(img1,img2) {
	getId(img1).style.opacity=1;
	getId(img2).style.opacity=0;
}

//获取表单中的手机号
var telInput = getId('tel-input')
//获取手机验证码
var testInput1 = getId('test-input1')

//个人注册表单验证
function testPForm(){
	if(telInput.value.replace(/\s+/g,"").length==0){
		onInput('regError1','regError2')
		return false
	}else if(testInput1.value.replace(/\s+/g,"").length==0){	
			onInput('regError2','regError1')
			return false
		}else return true
}

//获取邮箱账号
var actInput = getId('act-input')
//获取验证码
var testInput2 = getId('test-input2')

//企业注册表单验证
function testCForm(){
	if(actInput.value.replace(/\s+/g,"").length==0){
		onInput('regError3','regError4')
		return false
	}else if(testInput2.value.replace(/\s+/g,"").length==0){	
			onInput('regError4','regError3')
			return false
		}else return true
}

//条款同意
function Agree() {
	getId('confirm').style.display = 'none'
}

//验证码
var imgCode = getId('imgCode')

//切换验证码
function changeCode() {
	number = imgCode.getAttribute('src') 
	if(number=='../images/imgcode1.png'){
		imgCode.setAttribute('src','../images/imgcode2.png')
	}else if(number=='../images/imgcode2.png'){
		imgCode.setAttribute('src','../images/imgcode3.png')
	}else imgCode.setAttribute('src','../images/imgcode1.png')
}

