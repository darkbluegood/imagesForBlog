webpackJsonp([15,18],{101:function(e,t,l){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=l(102),i=s(a);t.default=function(e,t,l){return t in e?(0,i.default)(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}},102:function(e,t,l){e.exports={default:l(103),__esModule:!0}},103:function(e,t,l){var s=l(104);e.exports=function(e,t,l){return s.setDesc(e,t,l)}},104:function(e,t){var l=Object;e.exports={create:l.create,getProto:l.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:l.getOwnPropertyDescriptor,setDesc:l.defineProperty,setDescs:l.defineProperties,getKeys:l.keys,getNames:l.getOwnPropertyNames,getSymbols:l.getOwnPropertySymbols,each:[].forEach}},106:function(e,t,l){var s,a,i={};l(107),s=l(108),a=l(109),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports.default);var d="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(d.template=a),d.computed||(d.computed={}),Object.keys(i).forEach(function(e){var t=i[e];d.computed[e]=function(){return t}})},107:function(e,t){},108:function(e,t,l){(function(e){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,i=l(101),d=s(i),c=l(10),u=s(c),r=l(11),o=s(r);u.default.mock("address.json",{retcode:1,retmsg:"查询成功",data:{total:1,records:10,page:1,"addressList|3":[(a={"aid|+1":1},(0,d.default)(a,"aid|+1",88801),(0,d.default)(a,"name","@name()"),(0,d.default)(a,"country",1),(0,d.default)(a,"province",1),(0,d.default)(a,"city",1),(0,d.default)(a,"district",1),(0,d.default)(a,"address","@county(true)"),(0,d.default)(a,"zipcode|+100",518e3),(0,d.default)(a,"tel+19090","075525252522"),(0,d.default)(a,"mobile+19090",12452154822),(0,d.default)(a,"isdefault",0),a)]}}),t.default={data:function(){return{adsId:this.$route.query.adsId,title:"默认为北京",value:[],title2:"手动设定",value2:["广东省","深圳市","南山区"],addressData:[]}},components:{appHeader:o.default},route:{data:function(e){console.log(this.adsId)},deactivate:function(e){e.next()}},methods:{getAjaxData:function(){var e=this;e.$http.get("address.json").then(function(t){var l=t.data;1==l.retcode&&(e.lists=l.data.addressList)},function(e){})},delAddress:function(t){e.ajax({type:"GET",url:"../../src/data/address.json",data:{ids:t},dataType:"json",success:function(e){}})}}}}).call(t,l(9))},109:function(e,t){e.exports=' <div class=login> <app-header title=添加地址 :title-bg=true header-bg=#fff> <a href=javascript:history.back(); slot=left><i class=icon>&#xe60b;</i></a> <p slot=right>保存</p> </app-header> <div class=weui_cells> <div class=weui_cell> <p class=weui_cell_hd> <label class=weui_label style="width: 4.5em">收货人</label> </p> <p class="weui_cell_bd weui_cell_primary"> <input class=weui_input placeholder=请输入收货人 type=text> </p> </div> <div class=weui_cell> <p class=weui_cell_hd> <label class=weui_label style="width: 5em">手机号码</label> </p> <p class="weui_cell_bd weui_cell_primary"> <input class=weui_input placeholder=请输入密码 type=text> </p> </div> <div class=weui_cell> <p class=weui_cell_hd> <label class=weui_label style="width: 5em">详细地址</label> </p> <div class="weui_cell_bd weui_cell_primary"> <textarea class=weui_textarea placeholder=请输入评论 rows=3></textarea> </div> </div> </div> <div class="weui_cells weui_cells_form"> <div class="weui_cell weui_cell_switch"> <div class="weui_cell_hd weui_cell_primary">设置默认</div> <div class=weui_cell_ft> <input class=weui_switch type=checkbox> </div> </div> </div> <div class=weui_cells v-if="adsId != undefined"> <div class=weui_cell @click=delAddress(adsId)>删除地址</div> </div> </div> '}});
//# sourceMappingURL=15.306ca70b7de8b94684ef.js.map