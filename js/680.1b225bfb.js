"use strict";(self["webpackChunkposts_wall"]=self["webpackChunkposts_wall"]||[]).push([[680],{7680:function(s,t,e){e.r(t),e.d(t,{default:function(){return z}});var a=e(6252),r=e(3577);const i={class:"col-md-7"},o={class:"border border-2 border-dark py-3 position-relative bg-white mb-3"},d={class:"text-center mb-0 fw-bold"},l=(0,a.Uk)(" 追蹤名單 "),c={key:0,class:"spinner-border",role:"status"},n=(0,a._)("div",{class:"position-absolute border py-3 border-dark border-2 w-100 bg-white",style:{"z-index":"-1",top:"4px",left:"-6px"}},[(0,a._)("h3",{class:"text-center mb-0 fw-bold"},"追蹤名單")],-1),u={class:""},h={key:0,class:"mb-3"},b=(0,a.uE)('<div class="card border-2 border-dark cus-border-radio cus-shadow-bottom"><div class="px-3 py-2 border-bottom border-2 border-dark"><div class="d-flex my-1"><div class="cus-dot cus-dot-bg-pink"></div><div class="cus-dot cus-dot-bg-yellow"></div><div class="cus-dot cus-dot-bg-green"></div></div></div><div class="card-body p-4"><div class="d-flex align-items-center justify-content-center"><p class="card-title text-secondary">你還沒有追蹤其他使用者，快去看看大家的動態吧</p></div></div></div>',1),g=[b],w={key:0,class:"d-flex justify-content-center"},p=(0,a._)("div",{class:"spinner-border",role:"status"},null,-1),f=[p],v=["src"],m={class:"ms-3 d-flex flex-column w-100"},D={class:"d-flex justify-content-between w-100"},k={class:"text-secondary cus-fs-sm"},y={class:"d-md-block d-none"};function x(s,t,e,b,p,x){const _=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",o,[(0,a._)("h3",d,[l,p.isLoading?((0,a.wg)(),(0,a.iD)("div",c)):(0,a.kq)("",!0)]),n]),(0,a._)("ul",u,[0===p.userData.following?.length?((0,a.wg)(),(0,a.iD)("li",h,g)):((0,a.wg)(!0),(0,a.iD)(a.HY,{key:1},(0,a.Ko)(p.userData.following,(s=>((0,a.wg)(),(0,a.iD)("li",{class:"p-3 mb-3 d-flex w-100 bg-white border border-2 border-dark cus-border-radio cus-shadow-border",key:s.user},[p.isLoading?((0,a.wg)(),(0,a.iD)("div",w,f)):((0,a.wg)(),(0,a.iD)("img",{key:1,src:s.user.photo,alt:"userAvatar",class:"img-fluid rounded-circle",style:{height:"40px",width:"40px"}},null,8,v)),(0,a._)("div",m,[(0,a.Wm)(_,{to:`/personalWall/${s.user._id}`,class:"card-title mb-0 fw-bold name-link"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(s.user.name),1)])),_:2},1032,["to"]),(0,a._)("div",D,[(0,a._)("span",k," 追蹤時間: "+(0,r.zw)(new Date(s.createdAt).toLocaleString()),1),(0,a._)("span",y," 您已追蹤 "+(0,r.zw)(Math.floor(Math.abs(new Date-new Date(s.createdAt))/864e5)+1)+" 天！ ",1)])])])))),128))])])}var _={data(){return{isLoading:!1,url:"https://fathomless-earth-71463.herokuapp.com/api",userData:{}}},methods:{getUserData(){this.isLoading=!0,this.$http.get(`${this.url}/posts/user/${this.userData._id}`).then((s=>{this.userData=s.data.userData,this.getFollowingList(this.userData.following)})).catch((()=>{this.isLoading=!1}))},getFollowingList(s){this.isLoading=!0,s.forEach(((s,t)=>{this.$http.get(`${this.url}/posts/user/${s.user}`).then((s=>{this.userData.following[t].user=s.data.userData,this.isLoading=!1})).catch((()=>{this.isLoading=!1}))}))}},mounted(){localStorage.userData&&(this.userData=JSON.parse(localStorage.userData)),this.getUserData()}},L=e(3744);const $=(0,L.Z)(_,[["render",x]]);var z=$}}]);
//# sourceMappingURL=680.1b225bfb.js.map