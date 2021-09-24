//获取id
function getId(id){
	return document.getElementById(id)
}
//获取一个类
function getClass(id,c) {
	return document.getElementById(id).querySelector(c)
}
//获取全部的类（数组）
function getClasses(id,c) {
	return document.getElementById(id).querySelectorAll(c)
}
//改变类名
function changeClass(id,c){
	id.setAttribute('class',c)
}
//设置样式为block
function setBlock(id) {
	id.style.display = 'block'
}
//设置样式为none
function setNone(id) {
	id.style.display = 'none'
}