"use strict";(self["webpackChunkposts_wall"]=self["webpackChunkposts_wall"]||[]).push([[935],{4935:function(s,e,t){t.r(e),t.d(e,{default:function(){return I}});var i=t(6252),l=t(3577),a=t(9963);const r={class:"col-md-7"},o={class:"border border-2 border-dark py-3 position-relative bg-white mb-3"},n={class:"text-center mb-0 fw-bold"},d=(0,i.Uk)("我按讚的貼文 "),c={key:0,class:"spinner-border",role:"status"},u=(0,i._)("div",{class:"position-absolute border py-3 border-dark border-2 w-100 bg-white",style:{"z-index":"-1",top:"4px",left:"-6px"}},[(0,i._)("h3",{class:"text-center mb-0 fw-bold"},"我按讚的貼文")],-1),h={class:""},m={class:"d-flex justify-content-center align-items-center"},p=["src"],b={class:"ms-3 d-flex flex-column"},f={class:"d-none d-md-block text-secondary cus-fs-sm"},k={class:"d-block d-md-none text-secondary cus-fs-sm"},g={class:""},_={class:"d-flex"},w={class:"me-3 me-md-4"},x=["onClick"],L=(0,i._)("div",{class:"d-flex flex-column justify-content-center align-items-center"},[(0,i._)("span",{class:"bi bi-hand-thumbs-up fs-5 text-primary"}),(0,i._)("span",{class:"fw-bolder text-dark cus-fs-sm"},"取消")],-1),v=[L],y={class:"me-3 me-md-4"},$=(0,i._)("div",{class:"d-flex flex-column justify-content-center align-items-center"},[(0,i._)("span",{class:"bi bi-arrow-right-circle fs-5 text-dark"}),(0,i._)("span",{class:"fw-bolder text-dark cus-fs-sm"},"查看")],-1);function D(s,e,t,L,D,j){const z=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",o,[(0,i._)("h3",n,[d,D.isLoading?((0,i.wg)(),(0,i.iD)("div",c)):(0,i.kq)("",!0)]),u]),(0,i._)("ul",h,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(D.likeList,(s=>((0,i.wg)(),(0,i.iD)("li",{class:"p-md-3 p-2 mb-3 d-flex bg-white border border-2 border-dark cus-border-radio cus-shadow-border justify-content-between",key:s._id},[(0,i._)("div",m,[(0,i._)("img",{src:s.user.photo,alt:"userAvatar",class:"img-fluid rounded-circle",style:{height:"40px",width:"40px"}},null,8,p),(0,i._)("div",b,[(0,i.Wm)(z,{to:`/personalWall/${s.user._id}`,class:"card-title mb-0 fw-bold name-link"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(s.user.name),1)])),_:2},1032,["to"]),(0,i._)("span",f,"發文時間： "+(0,l.zw)(new Date(s.createdAt).toLocaleString()),1),(0,i._)("span",k,(0,l.zw)(new Date(s.createdAt).toLocaleString()),1)])]),(0,i._)("div",g,[(0,i._)("ul",_,[(0,i._)("li",w,[(0,i._)("a",{href:"#",onClick:(0,a.iM)((e=>j.dislikePost(s)),["prevent"])},v,8,x)]),(0,i._)("li",y,[(0,i.Wm)(z,{to:`/singlePost/${s._id}`},{default:(0,i.w5)((()=>[$])),_:2},1032,["to"])])])])])))),128))])])}var j=t(4902),z={data(){return{isLoading:!1,url:"https://fathomless-earth-71463.herokuapp.com/api",likeList:[]}},methods:{getLikeLIst(){this.isLoading=!0,this.$http.get(`${this.url}/users/likeList`).then((s=>{this.likeList=s.data.likeList,this.isLoading=!1})).catch((()=>{this.isLoading=!1}))},dislikePost(s){this.isLoading=!0,this.$http.delete(`${this.url}/posts/${s._id}/dislikes`).then((()=>{this.getLikeLIst();const s={icon:"success",title:"已取消貼文點讚"};j.Z.emit("popToast",s),this.isLoading=!1})).catch((s=>{const e={icon:"error",title:s.response.data.message};j.Z.emit("popToast",e),this.isLoading=!1}))}},mounted(){this.getLikeLIst()}},C=t(3744);const A=(0,C.Z)(z,[["render",D]]);var I=A}}]);
//# sourceMappingURL=935.447d39ba.js.map