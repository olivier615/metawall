"use strict";(self["webpackChunkposts_wall"]=self["webpackChunkposts_wall"]||[]).push([[600],{3600:function(e,a,t){t.r(a),t.d(a,{default:function(){return M}});var s=t(6252),r=t(9963);const i={class:"col-md-7"},o=(0,s._)("div",{class:"border border-2 border-dark py-3 position-relative bg-white mb-3"},[(0,s._)("h3",{class:"text-center mb-0 fw-bold"},"修改個人資料"),(0,s._)("div",{class:"position-absolute border py-3 border-dark border-2 w-100 bg-white",style:{"z-index":"-1",top:"4px",left:"-6px"}},[(0,s._)("h3",{class:"text-center mb-0 fw-bold"},"修改個人資料")])],-1),l={class:"mt-6"},d={class:"ms-3 d-flex"},n={class:"py-2 px-4 border border-2 border-dark border-bottom-0 cus-tag-border-radio bg-dark"},c=(0,s.Uk)(" 暱稱修改 "),p={class:"py-2 px-4 border border-2 border-dark border-bottom-0 cus-tag-border-radio bg-white"},u=(0,s.Uk)(" 重設密碼 "),m={class:"px-md-3 px-lg-10 border border-2 border-dark bg-white cus-border-radio"},g={class:"d-flex align-items-center flex-column py-5"},b=["src"],h={class:"mb-3"},f={class:"input-group mb-2"},k={class:"btn btn-dark cus-non-radio"},_=(0,s.Uk)(" 上傳大頭照 "),v={key:0,class:"spinner-border spinner-border-sm",role:"status"},w={class:"input-group mb-3"},y={class:"d-flex flex-column"},D=(0,s._)("label",{for:"nickname",class:"mb-1"},"暱稱",-1),x={class:"input-group mb-3"},U={class:"d-flex flex-column"},L=(0,s._)("span",{class:"mb-1"},"性別",-1),I={class:"d-flex"},S={class:"form-check me-4"},Z=["checked"],T=(0,s._)("label",{class:"form-check-label",for:"male"}," 男性 ",-1),P={class:"form-check"},$=["checked"],j=(0,s._)("label",{class:"form-check-label",for:"female"}," 女性 ",-1),z={class:"w-100"},C=(0,s.Uk)(" 送出更新 "),J={key:0,class:"spinner-border spinner-border-sm",role:"status"};function N(e,a,t,N,O,V){const q=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",i,[o,(0,s._)("div",l,[(0,s._)("ul",d,[(0,s._)("li",n,[(0,s.Wm)(q,{to:"/editProfile",class:"text-white"},{default:(0,s.w5)((()=>[c])),_:1})]),(0,s._)("li",p,[(0,s.Wm)(q,{to:"/changePassword",class:"text-dark"},{default:(0,s.w5)((()=>[u])),_:1})])]),(0,s._)("div",m,[(0,s._)("div",g,[(0,s._)("img",{src:O.imgUrl?O.imgUrl:O.userData.photo,alt:"userAvatar",class:"img-fluid border border-dark border-3 rounded-circle mb-3",style:{height:"107px",width:"107px"}},null,8,b),(0,s._)("div",h,[(0,s._)("div",f,[(0,s._)("label",k,[(0,s._)("input",{ref:"upload_img",style:{display:"none"},type:"file",onChange:a[0]||(a[0]=(...e)=>V.uploadImage&&V.uploadImage(...e))},null,544),_,O.isLoading?((0,s.wg)(),(0,s.iD)("div",v)):(0,s.kq)("",!0)])])]),(0,s._)("form",null,[(0,s._)("div",w,[(0,s._)("div",y,[D,(0,s.wy)((0,s._)("input",{type:"text",placeholder:"暱稱",id:"nickname",class:"py-2 form-control no-border-radius border-2 border-dark text-azeret","onUpdate:modelValue":a[1]||(a[1]=e=>O.userData.name=e)},null,512),[[r.nr,O.userData.name]])])]),(0,s._)("div",x,[(0,s._)("div",U,[L,(0,s._)("div",I,[(0,s._)("div",S,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"radio",id:"male",name:"gender",value:"male",checked:"male"===O.userData.gender,"onUpdate:modelValue":a[2]||(a[2]=e=>O.userData.gender=e)},null,8,Z),[[r.G2,O.userData.gender]]),T]),(0,s._)("div",P,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"radio",id:"female",name:"gender",value:"female",checked:"female"===O.userData.gender,"onUpdate:modelValue":a[3]||(a[3]=e=>O.userData.gender=e)},null,8,$),[[r.G2,O.userData.gender]]),j])])])]),(0,s._)("div",z,[(0,s._)("button",{onClick:a[4]||(a[4]=(0,r.iM)(((...e)=>V.updateProfile&&V.updateProfile(...e)),["prevent"])),class:"btn btn-primary text-azeret fw-bold btn-blue-dark border-2 w-100"},[C,O.isLoading?((0,s.wg)(),(0,s.iD)("div",J)):(0,s.kq)("",!0)])])])])])])])}var O=t(4902),V={data(){return{isLoading:!1,fileInput:null,url:"https://fathomless-earth-71463.herokuapp.com/api",userData:{},imgUrl:""}},methods:{updateProfile(){this.isLoading=!0,this.imgUrl!==this.userData.photo&&(this.userData.photo=this.imgUrl),this.$http.patch(`${this.url}/users/profile`,this.userData).then((e=>{this.userData=e.data.data,localStorage.setItem("userData",JSON.stringify(this.userData)),this.userData=JSON.parse(localStorage.userData);const a={icon:"success",title:"個人訊息更新成功"};O.Z.emit("popToast",a),this.isLoading=!1})).catch((e=>{const a={icon:"error",title:e.response.data.message};O.Z.emit("popToast",a),this.isLoading=!1}))},uploadImage(){this.isLoading=!0;const e=this.fileInput.files[0];if(!e){const e={icon:"warning",title:"未選擇圖片檔案"};return O.Z.emit("popToast",e),void(this.isLoading=!1)}if("image/jpeg"!==e.type&&"image/png"!==e.type&&"image/jpg"!==e.type&&"image/gif"!==e.type){const e={icon:"warning",title:"檔案類別僅限 jpg, jpeg, png 或 gif"};return O.Z.emit("popToast",e),void(this.isLoading=!1)}if(e.size>2097152){const e={icon:"warning",title:"上傳檔案須小於 2 MB"};return O.Z.emit("popToast",e),void(this.isLoading=!1)}const a=new FormData;a.append("image",e),this.$http.post(`${this.url}/upload?type=avatar`,a).then((e=>{this.imgUrl=e.data.imgUrl,this.isLoading=!1})).catch((e=>{const a={icon:"error",title:e.response.data.message};O.Z.emit("popToast",a),this.isLoading=!1}))}},mounted(){this.fileInput=this.$refs.upload_img,localStorage.userData&&(this.userData=JSON.parse(localStorage.userData))}},q=t(3744);const G=(0,q.Z)(V,[["render",N]]);var M=G}}]);
//# sourceMappingURL=600.af5e935b.js.map