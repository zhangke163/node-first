/**
 * Created by KeKe on 2017/4/12.
 */
function aa(name){
    this.name=name;
}
aa.prototype.think=function(){
    console.log('我在想',this.name);
}
module.exports=aa;//发射出来一个对象