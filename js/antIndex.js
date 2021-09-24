//图片框
var imagesWidth =  getId('imagesWidth')
//当前图片
var imageNumber = 1
//按钮组
var imgBtn = getClasses('clickChange','button')
var control;

window.onload=function (){
	//循环轮播
  control = setInterval('imgDistance();',4000);
}
//图片移动
function imgDistance() {
	if(imageNumber == 3){
		imagesWidth.style.right = '0px'
		changeClass(imgBtn[0],'btnUnActive btnActive')
		changeClass(imgBtn[2],'btnUnActive')
		// imgBtn[0].setAttribute('class','btnUnActive btnActive')
		// imgBtn[2].setAttribute('class','btnUnActive')
		imageNumber = 1
	}else{
		imagesWidth.style.right = imageNumber*1920 + 'px'
		changeClass(imgBtn[imageNumber],'btnUnActive btnActive')
		changeClass(imgBtn[imageNumber-1],'btnUnActive')
		// imgBtn[imageNumber].setAttribute('class','btnUnActive btnActive')
		// imgBtn[imageNumber-1].setAttribute('class','btnUnActive')
		imageNumber++
	}
}
//通过按钮图片切换
function clickImgBtn(which) {
	//先清除当前循环
	clearInterval(control)
	imageNumber = which
	imagesWidth.style.right = imageNumber*1920 + 'px'
	for(var i=0;i<3;i++){
		if(which==i){
			changeClass(imgBtn[i],'btnUnActive btnActive')
			// imgBtn[i].setAttribute('class','btnUnActive btnActive')
		}else changeClass(imgBtn[i],'btnUnActive') 
		// imgBtn[i].setAttribute('class','btnUnActive')
	}
	imageNumber++
	//再添加循环
	control = setInterval('imgDistance();',4000)
}