<template>
    <!-- 这是主页每一节的标题组件 -->
    <div>
        <div class="sectionTitle_head">
            <h2>{{ytitle}}</h2>
            <p><span class="hidden-xs"></span>{{ytitleEn}}<span class="hidden-xs"></span></p>
            <b></b>
        </div>
    </div>
</template>
<script>
    export default {
        props:['ytitle','ytitleEn'],
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
.sectionTitle_head{
    text-align: center;
    margin-bottom: 20px;
}
.sectionTitle_head h2{
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
}
.sectionTitle_head p{
    margin: 10px auto 7px auto;
    width: 420px;
    color: #ccc;
    font-size: 1.5rem;
}
.sectionTitle_head span:nth-of-type(1){
    float: left;
    width: 6rem;
    background: -webkit-linear-gradient(left, transparent , #c6c6c6); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, transparent, #c6c6c6); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, transparent, #c6c6c6); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, transparent , #c6c6c6); /* 标准的语法 */
    height: 1px;
    display: block;
    margin-top: 15px;
}
.sectionTitle_head span:nth-of-type(2){
    float: right;
    width: 6rem;
    background: -webkit-linear-gradient(left,  #c6c6c6,transparent); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(left,  #c6c6c6,transparent); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(left,  #c6c6c6,transparent); /* Firefox 3.6 - 15 */
    background: linear-gradient(to left,  #c6c6c6),transparent; /* 标准的语法 */
    height: 1px;
    display: block;
    margin-top: 15px;
    background: linear-gradient(to left, transparent, #c6c6c6);
}
.sectionTitle_head b{
    width: 10px;
    height: 10px;
    border-style: solid;
    border-color: #ccc transparent transparent transparent;
    border-width: 10px;
}
@media screen and (max-width:750px ) {
    .sectionTitle_head p{
        width: auto;
    }

}
</style>