"use strict";(self["webpackChunkposts_wall"]=self["webpackChunkposts_wall"]||[]).push([[326],{8326:function(e,t,s){s.r(t),s.d(t,{default:function(){return re}});var r=s(6252);const o={class:"container px-lg"},a={class:"row"},l={class:"col-md-5"};function i(e,t,s,i,n,d){const c=(0,r.up)("headerView"),u=(0,r.up)("router-view"),b=(0,r.up)("sideView");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(c,{class:"mb-6","user-data":n.userData},null,8,["user-data"]),(0,r._)("section",null,[(0,r._)("div",o,[(0,r._)("div",a,[n.isLogin?((0,r.wg)(),(0,r.j4)(u,{key:0})):(0,r.kq)("",!0),(0,r._)("div",l,[(0,r.Wm)(b,{"user-data":n.userData},null,8,["user-data"])])])])])],64)}var n=s(9963);const d={class:"mb-4 navbar navbar-expand-lg navbar-light border-bottom border-3 border-dark bg-white"},c={class:"container px-lg"},u={class:"text-paytone"},b=(0,r.Uk)("MetaWall"),p={class:"d-flex"},h={class:"nav-item dropdown"},m={class:"nav-link dropdown-toggle d-flex align-items-center pe-0",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},g=["src"],f=(0,r._)("a",{href:"#",class:"border-bottom p-0 text-black text-azeret fw-bold"},"Member",-1),w={class:"dropdown-menu rounded-0 p-0 text-center","aria-labelledby":"navbarDropdown"},_=(0,r.Uk)(" 我的貼文牆 "),k=(0,r.Uk)(" 修改個人資料 ");function x(e,t,s,o,a,l){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("section",null,[(0,r._)("nav",d,[(0,r._)("div",c,[(0,r._)("h1",u,[(0,r.Wm)(i,{to:"/postWall",class:"navbar-brand fs-1 fw-bolder"},{default:(0,r.w5)((()=>[b])),_:1})]),(0,r._)("div",p,[(0,r._)("div",h,[(0,r._)("div",m,[(0,r._)("img",{src:s.userData.photo,alt:"userAvatar",class:"head d-block me-2 border border-dark border-3 rounded-circle",style:{height:"30px",width:"30px"}},null,8,g),f]),(0,r._)("ul",w,[(0,r._)("li",null,[(0,r.Wm)(i,{to:`/personalWall/${s.userData._id}`,class:"dropdown-item py-2 border-bottom"},{default:(0,r.w5)((()=>[_])),_:1},8,["to"])]),(0,r._)("li",null,[(0,r.Wm)(i,{to:"/editProfile",class:"dropdown-item py-2 border-bottom"},{default:(0,r.w5)((()=>[k])),_:1})]),(0,r._)("li",null,[(0,r._)("a",{class:"dropdown-item py-2 link-pointer",onClick:t[0]||(t[0]=(0,n.iM)(((...e)=>l.signOut&&l.signOut(...e)),["prevent"]))}," 登出 ")])])])])])])])}var v=s(4902),y={props:["userData"],methods:{signOut(){document.cookie="MetaWall=;",localStorage.userData&&localStorage.removeItem("userData");const e={icon:"success",title:"帳號已登出，請重新登入"};v.Z.emit("popToast",e),this.$router.push("/login/sign_in")}}},D=s(3744);const W=(0,D.Z)(y,[["render",x]]);var $=W,T=s(3577);const j={class:"px-4 py-5 border border-3 border-dark bg-white d-none d-md-block"},S={class:"d-grid mb-4"},z=(0,r._)("span",{class:"fw-bold"},"張貼動態",-1),M={class:"ps-2"},P={class:"mb-4"},Z=["src"],A={class:"fw-bolder ms-3"},L={class:"mb-4"},I=(0,r._)("div",{class:"icon-border-box d-flex align-items-center justify-content-center"},[(0,r._)("span",{class:"bi bi-bell fs-4"})],-1),O=(0,r._)("span",{class:"fw-bolder ms-3"},"追蹤名單",-1),U={class:"mb-4"},C=(0,r._)("div",{class:"icon-border-box d-flex align-items-center justify-content-center"},[(0,r._)("span",{class:"bi bi-hand-thumbs-up fs-4"})],-1),V=(0,r._)("span",{class:"fw-bolder ms-3"},"我按讚的文章",-1),B={class:"d-md-none fixed-bottom d-flex border border-3 border-dark cus-border-pill bg-light px-6 py-2 mx-2 mb-2 justify-content-between"},q={style:{height:"48px",width:"48px"},class:"d-flex justify-content-center align-items-center border border-3 border-dark cus-border-pill bg-white"},H=(0,r._)("span",{class:"bi bi-house-door text-dark"},null,-1),J=[H],N={style:{height:"48px",width:"48px"},class:"d-flex justify-content-center align-items-center border border-3 border-dark cus-border-pill bg-white"},Y=(0,r._)("span",{class:"bi bi-bell text-dark"},null,-1),E={style:{height:"48px",width:"48px"},class:"d-flex justify-content-center align-items-center border border-3 border-dark cus-border-pill bg-white"},F=(0,r._)("span",{class:"bi bi-hand-thumbs-up text-dark"},null,-1),G={style:{height:"48px",width:"48px"},class:"d-flex justify-content-center align-items-center border border-3 border-dark cus-border-pill bg-primary"},K=(0,r._)("span",{class:"bi bi-plus-lg text-white"},null,-1);function Q(e,t,s,o,a,l){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("section",null,[(0,r._)("div",j,[(0,r._)("div",S,[(0,r.Wm)(i,{to:"/newPost",type:"button",class:"cus-border-radio btn btn-blue-dark btn-lg border-dark border-3 cus-shadow-border cus-border-radio"},{default:(0,r.w5)((()=>[z])),_:1})]),(0,r._)("ul",M,[(0,r._)("li",P,[(0,r.Wm)(i,{to:`/personalWall/${s.userData._id}`,class:"d-flex align-items-center link-hover"},{default:(0,r.w5)((()=>[(0,r._)("img",{src:s.userData.photo,class:"border border-dark border-3 rounded-circle",alt:"userAvatar",style:{height:"50px",width:"50px"}},null,8,Z),(0,r._)("span",A,(0,T.zw)(s.userData.name),1)])),_:1},8,["to"])]),(0,r._)("li",L,[(0,r.Wm)(i,{to:"/followList",class:"d-flex align-items-center link-hover"},{default:(0,r.w5)((()=>[I,O])),_:1})]),(0,r._)("li",U,[(0,r.Wm)(i,{to:"/likedPosts",class:"d-flex align-items-center link-hover"},{default:(0,r.w5)((()=>[C,V])),_:1})])])]),(0,r._)("ul",B,[(0,r._)("li",q,[(0,r._)("a",{href:"#",class:"fs-2",onClick:t[0]||(t[0]=(0,n.iM)(((...e)=>l.scrollToTop&&l.scrollToTop(...e)),["prevent"]))},J)]),(0,r._)("li",N,[(0,r.Wm)(i,{to:"/followList",class:"fs-2"},{default:(0,r.w5)((()=>[Y])),_:1})]),(0,r._)("li",E,[(0,r.Wm)(i,{to:"/likedPosts",class:"fs-2"},{default:(0,r.w5)((()=>[F])),_:1})]),(0,r._)("li",G,[(0,r.Wm)(i,{to:"/newPost",class:"fs-2"},{default:(0,r.w5)((()=>[K])),_:1})])])])}var R={props:["userData"],methods:{scrollToTop(){window.scroll(0,0)},signOut(){document.cookie="MetaWall=;",localStorage.userData&&localStorage.removeItem("userData");const e={icon:"success",title:"帳號已登出，請重新登入"};v.Z.emit("popToast",e),this.$router.push("/login/sign_in")}}};const X=(0,D.Z)(R,[["render",Q]]);var ee=X,te={components:{headerView:$,sideView:ee},data(){return{url:"https://fathomless-earth-71463.herokuapp.com/api",isLogin:!1,token:document.cookie.replace(/(?:(?:^|.*;\s*)MetaWall\s*\=\s*([^;]*).*$)|^.*$/,"$1"),userData:{}}},methods:{checkSignIn(){this.takeAuthorization(),this.token&&this.$http.get(`${this.url}/users`).then((e=>{this.isLogin=!0,this.$router.push("/postWall")})).catch((e=>{this.isLogin=!1;const t={icon:"error",title:e.response.data.message};v.Z.emit("popToast",t),this.$router.push("/login/sign_in")}))},takeAuthorization(){this.$http.defaults.headers.common["Authorization"]=`Bearer ${this.token}`},getUserProfile(){this.$http.get(`${this.url}/users/profile`).then((e=>{this.userData=e.data.data,localStorage.setItem("userData",JSON.stringify(this.userData))})).catch((()=>{const e={icon:"error",title:"無法取得使用者資料，請刷新網頁或重新登入"};v.Z.emit("popToast",e),this.$router.push("/login/sign_in")}))}},provide(){return{token:`Bearer ${this.token}`,authorization:this.takeAuthorization()}},mounted(){this.checkSignIn(),this.getUserProfile()}};const se=(0,D.Z)(te,[["render",i]]);var re=se}}]);
//# sourceMappingURL=326.84ba1fee.js.map