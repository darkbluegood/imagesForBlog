webpackJsonp([1,18],{41:function(t,e,i){var a,o,n={};i(42),a=i(43),o=i(44),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(s.template=o),s.computed||(s.computed={}),Object.keys(n).forEach(function(t){var e=n[t];s.computed[t]=function(){return e}})},42:function(t,e){},43:function(t,e,i){(function(t){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(10),n=a(o),s=i(11),l=a(s),c=i(15),r=a(c);n.default.mock("reslist.json",{retcode:1,retmsg:"查询成功",data:{total:1,records:10,page:1,"rows|10":[{"id|+1":1,caipiaotype:"@natural(1, 3)","periods|+1":"11000002",downtime:"@natural(14592352, 64592352)","publishtime|+10":"1460448164569",title:"@csentence(6, 10)",cover:"http://raowensheng.com/plugin/SLslider/images/2.jpg",wuser:'{"nickname":"抽奖小王子","buycount":1199,"bingocode":"10001167"}'}]}}),e.default={data:function(){return{lists:[],page:1,scroll:!0,loading:!0}},route:{data:function(e){var i=this;i.getAjaxData(e),t(window).on("scroll",function(t){i.getScrollData(t)})},deactivate:function(e){var i=this;i.lists=[],i.page=1,t(window).off("scroll"),e.next()}},ready:function(){},methods:{getAjaxData:function(t){var e=this;e.$http.get("reslist.json").then(function(t){e.loading=!1;var i=t.data;if(e.loadshow=!0,1==i.retcode){var a=i.data.rows;1===e.page?e.lists=a:e.lists=e.lists.concat(a)}},function(t){})},getScrollData:function(e){var i=this;if(i.scroll){var a=parseFloat(t(window).height())+parseFloat(t(window).scrollTop());t(document).height()<=a+200&&(i.scroll=!1,i.page++,i.page<=3&&i.getAjaxData(e))}},runtime:function(t,e){}},components:{appheader:l.default,Loading:r.default}}}).call(e,i(9))},44:function(t,e){t.exports=' <div class=indiana> <appheader title=特价></appheader> <section class=announced-container v-if=!loading> <ul class=floatBox> <li v-for="item in lists"> <a v-link="{name:\'goods\',query:{id:item.id}}"> <img :src=item.cover :style="{ width:item.imgwh +\'px\',height:item.imgwh +\'px\' }"> <div class=info> <p class="title nowrap">{{item.title}}</p> <p class=issue>期号：{{item.periods}}</p> <div class=msg v-if="item.caipiaotype == 2"> <span class=txt v-for="(key, val) in item.wuser | jsonFormat"> <label v-if="key == \'nickname\'">获得者：</label> <label v-if="key == \'buycount\'">参与人次：</label> <label v-if="key == \'bingocode\'">幸运号码：</label> {{val}} </span> <span class=txt>揭晓时间：{{item.publishtime | timeago }}</span> </div> <div class=msg v-if="item.caipiaotype == 1"> <span class="btn reds">即将揭晓</span> <span class=time id={{item.id}}>{{runtime(item.id,item.downtime)}}</span> </div> </div> </a> </li> </ul> </section> <loading :show=loading></loading> </div> '}});
//# sourceMappingURL=1.20f9975c4c41b3c56f59.js.map