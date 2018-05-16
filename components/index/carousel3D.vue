<template>
    <!-- 这是主页的产品3D轮播图 -->
    <div>
        <div class="cascade-list">
            <div @mouseover="clearTimer" @mouseout="setTimer" v-for="(item, index) in items" :key='index' class="item" :style="{width:item.width+'px',height:item.height+'px',left:item.left+'px',bottom:item.bottom+'px','z-index':item.zIndex,opacity:item.opacity,'background-color':rlist[index].color}">
                <img :style="{'line-height':item.height+'px'+';width:100%'}" :src="rlist[index].content" />
            </div> 
        </div>
    </div>
</template>
<script>
    function copyArr(arr){
		return arr.map((e)=>{
			if(typeof e === 'object'){
				return Object.assign({},e)
			}else{
				return e
			}
		})
	}
    export default {
        
        props:['list','allWidth','allHeight','curHeight','curWidth','scale'],
        template:'#cascade',
        created:function(){
			this.setTimer();
		},
        data(){
            var items = [];
            var rlist = copyArr(this.list);
			var level = Math.floor(this.list.length/2);
			if(this.list.length%2==0){
				var center = this.list[0];
				rlist.push(Object.assign({},center));
			}
     
            var lefts = rlist.slice(0,level);
            var rights = rlist.slice(level);
            var that = this;
            var leftGap = (this.allWidth - this.curWidth)/2;
                    //console.log(this.allWidth);
            var gap = leftGap/level;
            lefts.forEach(function(e,i){
                var obj = {};
                obj.content = e.content;
                obj.left = i*gap;
                obj.zIndex = i+1;
                        obj.opacity = 1/(level+1-i);
                    //	console.log(that.curWidth);
                obj.width = that.curWidth*Math.pow(that.scale,level-i);
                        obj.height = that.curHeight*Math.pow(that.scale,level-i);
                obj.bottom = (that.allHeight-obj.height)/2;
                items.push(obj);
            });
            rights.forEach(function(e,i){
                var obj = {};
                obj.content = e.content;
                obj.width = that.curWidth*Math.pow(that.scale,i);
                        obj.height = that.curHeight*Math.pow(that.scale,i);
                obj.left = that.allWidth - (level-i)*gap - obj.width;
                obj.zIndex = level-i+1;
                        obj.opacity = 1/(i+1);
                obj.bottom = (that.allHeight-obj.height)/2;
                items.push(obj); 
            });
                    //console.log(items);
            return {
                items:items,
                rlist:rlist,
                timer:null,
                dir:'right'
            }
        },
        
        methods:{
            setTimer:function(){
				var that = this;
				this.clearTimer();
				function cb(){
					that.timer = setTimeout(function(){
						if(that.dir=="right"){
						
							var pop = that.items.shift();
							that.items.push(pop);
						}else{
							var pop = that.items.pop();
							that.items.unshift(pop);
						}
						cb();
					},2000);
				}
				cb();
			},
			clearTimer:function(){
				if(this.timer){
					clearTimeout(this.timer);
				}
			}
        }
    }
</script>
<style scoped>
.cascade-list{
    width:1200px;
    height:425px;
    position:relative;
    margin:0 auto;
}
.toggle{
    position:absolute;
    padding:.5em .8em;
    top:0;
    left:0;
}
.item{
    box-sizing:border-box;
    border:1px solid #fff;
    position:absolute;
    display:block;
    background-color:blue;
    color:#fff;
    text-align:center;
    transition: all .8s ease;
}
.item span{
    transition:inherit;
    font-size:60px;
}
.cascade-list .item:nth-child(2n){
    /*
    background-color:red;
    */
}
.cascade-list .item img{
    width: 100%;
}
</style>