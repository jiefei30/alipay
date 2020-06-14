//主体
var mainBody = getId('mainBody')
//当前界面
var curPage = 0
//上一个界面
var lastPage= 0
//当前打开了哪个导航栏
var curList = -1
//轮播图切换按钮
var btns = getClasses('btn','i')
//下个箭头按钮
var nextIcon = getId('downIcon')
//获取下拉框
var downLists = getClasses('menuContent','.downList') 
//获取视频
var video =  getId('video')
//获取视频的poster（定格画面）
var poster = getId('video-poster')
//视频开始按钮
var start = getId('videoStart')
//头部注册部分
var menuReg = getId('menu-reg')
//视频定时器，用于检测视频结束
var videoClock
//界面2效果是否展示
var page2Play = false
//界面3效果是否展示
var page3Play = false
//界面4效果是否展示
var page4Play = false
//界面5效果是否展示
var page5Play = false
//界面6效果是否展示
var page6Play = false

//当页面载入完成后自动执行
window.onload=function (){
	//设置每20毫秒检测一次视频是否结束
  videoClock = setInterval('videoIsOver();',20);
}

//按下一个箭头
function next() {
	//先将当前页面给上一个页面
	lastPage = curPage
	//当前页面++
	curPage ++	
	//页面跳转
	pagejump()
}
//按下了轮播切换按钮，参数a是哪个界面
function clickBtn(a) {
	lastPage = curPage
	curPage =a;
	pagejump()
}

//页面跳转方法
function pagejump() {
	//将界面转换到当前界面
	mainBody.style.transform = 'translate3d(0px,-'+curPage*100+'%, 0px)'
	//改变类名
	changeClass(btns[lastPage],'index-btn')
	//改变类名
	changeClass(btns[curPage],'index-btn btn-isOn')
	//如果在最后一个界面，则关闭下一个箭头
	if(curPage==6) setNone(nextIcon)
		else setBlock(nextIcon)
	//如果在第一个界面，则没有头部的登录
	if(curPage==0) menuReg.style.marginTop = '-100px'
		else menuReg.style.marginTop = '17px'
	//如果在第二个界面而且效果未展示
	if(curPage==1&&!page2Play){
		//加上mp-bg-scale1类名，用于缩放背景div
		changeClass(getClass('page2','div'),'mp-bg-img mp-bg-co mp-bg-2 mp-bg-scale1') 
		//界面2艺术字体出现
		getClass('page2','.page2-words').style.opacity=1;
		//界面2已经播放过了
		page2Play= true
	}
	if(curPage==2&&!page3Play){
		changeClass(getClass('page3','.hand1'),'hand1 hand1-move') 
		changeClass(getClass('page3','.hand2'),'hand2 hand2-move') 
		getClass('page3','.page3-words').style.opacity=1;
		page3Play= true
	}
	if(curPage==3&&!page4Play){
		changeClass(getClass('page4','div'),'mp-bg-img mp-bg-co mp-bg-4 mp-bg-scale1-1') 
		getClass('page4','.page4-words').style.opacity=1;
		page4Play= true
	}
	if(curPage==4&&!page5Play){
		getClass('page5','.mask').style.opacity=0.6;
		getClass('page5','.page5-words').style.opacity=1;
		page5Play= true
	}
	if(curPage==5&&!page6Play){
		changeClass(getClass('page6','div'),'mp-bg-img mp-bg-co mp-bg-6 mp-bg-scale1') 
		getClass('page6','.page6-words').style.opacity=1;
		page6Play= true
	}
}

//打开导航栏，参数a是哪一个导航栏
function openList(a) {
	//如果不是-1就说明前面有打开的导航栏
	if(curList!=-1){
		//先把打开的导航栏关闭
		closeList(curList)
	}
	//设置当前打开的导航栏
	curList =a
	//改变类名
	changeClass(downLists[a],'downList downListOpen')
}

//关闭导航栏
function closeList(a){
	//改变类名
	changeClass(downLists[curList],'downList')
	//初始当前
	curList = -1
}

//检测视频是否结束
function videoIsOver() {
	//如果结束
	if(video.ended){
		//开始按钮出现
		setBlock(start)
		//定格画面出现
		poster.style.opacity = 1
		//清除定时
		clearInterval(videoClock);
	}
}

//开始视频
function startVideo() {
	//关闭开始按钮
	setNone(start)
	//透明定格画面
	poster.style.opacity = 0
	//视频开始播放
	video.play();
	//开始计时
	videoClock = setInterval('videoIsOver();',20);
}

//获得顶部下三角
var triangle  = getClass('head','.triangleIcon')
//下拉框出来，三角一直翻上去
function triangleMouseOver() {
	changeClass(triangle,'triangleIcon rotating')
}
//移开三角不再旋转
function triangleMouseOut() {
	changeClass(triangle,'triangleIcon')
}
