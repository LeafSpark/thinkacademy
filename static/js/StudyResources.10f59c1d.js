(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["StudyResources"],{4186:function(e,t,a){"use strict";a("a202")},5885:function(e,t,a){"use strict";a("ce5f")},"5f39":function(e,t,a){"use strict";a("ef22")},a202:function(e,t,a){},aaf0:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{class:["error-wrapper",e.bgWhiteAuth?"bg-white":""]},[t("div",{staticClass:"center"},[t("div",{staticClass:"error-status"}),t("div",{staticClass:"message"},[t("div",{staticClass:"message-main"},[e._v(e._s(e.message))]),e.scene?t("p",{staticClass:"message-sub"},[e._v(" "+e._s("Scene: ".concat(e.scene,"."))+" "+e._s(e.subMessage)+" ")]):e._e()]),t("div",{staticClass:"button-wrapper"},[e.showRefresh?t("a-button",{class:e.showBack||e.isClassLiveOrPlayback?"mr40":"",attrs:{type:"primary",shape:"round",size:"large"},on:{click:e.handleRefresh}},[e._v(" "+e._s(e.$t("common.refresh"))+" ")]):e._e(),e.showBack||e.isClassLiveOrPlayback?t("a-button",{staticClass:"color-orange",attrs:{shape:"round",size:"large"},on:{click:e.handleBack}},[e._v(" "+e._s(e.isClassLiveOrPlayback?e.$t("classroom.modules.systemError.backButtonName"):e.$t("common.back"))+" ")]):e._e()],1)])])},o=[],n=(a("14d9"),a("caad"),a("9ca9")),r={name:"ErrorStatus",props:{message:{type:String,default:function(){return console.info("对象函数 default,filePath:renderer/components/Common/ErrorStatus.vue"),this.$t("common.components.errorStatus.message")}},isClassLiveOrPlayback:{type:Boolean,default:!1},scene:{type:String,default:""},subMessage:{type:String,default:""},showRefresh:{type:Boolean,default:!0},showBack:{type:Boolean,default:!1},backUrl:{type:String,default:""}},computed:{bgWhiteAuth:function(){return console.info("对象函数 bgWhiteAuth,filePath:renderer/components/Common/ErrorStatus.vue"),["ClassLiving","PlaybackReadyClass","LivingReadyClass","PlayBack"].includes(this.scene)}},methods:{handleRefresh:function(){console.info("对象函数 handleRefresh,filePath:renderer/components/Common/ErrorStatus.vue"),this.isClassLiveOrPlayback?window.location.reload():this.$emit("click-refresh")},handleBack:function(){console.info("对象函数 handleBack,filePath:renderer/components/Common/ErrorStatus.vue"),this.isClassLiveOrPlayback?Object(n["a"])("/#/courses"):this.$router.push({path:this.backUrl})}}},i=r,l=(a("4186"),a("2877")),c=Object(l["a"])(i,s,o,!1,null,"31fed01e",null);t["a"]=c.exports},bd12:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return e.show?t("div",{staticClass:"loading-wrapper",class:e.className,style:e.loadingStyle},[e._m(0)]):e._e()},o=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"loading-contenter"},[t("div",{staticClass:"loading-logo"},[t("img",{attrs:{src:a("c63e")}})]),t("div",{staticClass:"loading-animation"})])}],n={name:"Loading",props:{show:{default:!0,type:Boolean},size:{default:"default",type:String,validator:function(e){return console.info("对象函数 validator(value)",e,"filePath:renderer/components/Common/Loading.vue"),-1!==["small","default"].indexOf(e)}},marginTop:{default:"0",type:String},marginBottom:{default:"0",type:String}},computed:{className:function(){return console.info("对象函数 className,filePath:renderer/components/Common/Loading.vue"),"loading-".concat(this.size)},loadingStyle:function(){return console.info("对象函数 loadingStyle,filePath:renderer/components/Common/Loading.vue"),{marginTop:this.marginTop,marginBottom:this.marginBottom}}}},r=n,i=(a("f761"),a("2877")),l=Object(i["a"])(r,s,o,!1,null,"92d727e8",null);t["a"]=l.exports},c63e:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP/DL//DLv/BL//DLv/EL//DL//DLv/DL//CLv/DL//DL//CLf/DL//DL//DL//DLv/DL//DMv/DMGSQIxsAAAATdFJOUwDwcSTeYM1AwICojww0SLNSmhsrwQ8LAAABI0lEQVRYw+3X2a6DIBCAYbaBYXXh/d/1aE3UxtbjMhdtOv+l6BeiiYAQ5+tzLwhK2oGKjTW1Vn/HyQV8NzlzF8HRkfVV10BX38Ygg18FptICKB+70OAWDD4GNPIMaJentyAuv4l8FKx7IIjYdB7a3CdBArplWFoMUYHTiQhcZdDTgqt3yyCDdgTlkBmy1iLeBIcJ7Q6fB2txzpGCYwz+HuhWAR4BcR98LhwAU6vGlXIDaruZexBwAJy35dN2WtadNX++iESbiK8BDRYyULWXT0AvwTsxyCCDnwJaUhAjaCrQBFWSuNsESoytFiRpYzqVxc/kh0Mipaemj2tDHE62iWKCh7daDDLI4CeDhRoUPXSWFHysASpIUnAsK6QFp+Pjf3f8AVRMjNs7xw9TAAAAAElFTkSuQmCC"},ce5f:function(e,t,a){},cf2d:function(e,t,a){"use strict";a.r(t);a("b0c0");var s=function(){var e,t,a=this,s=a._self._c;return s("div",{staticClass:"resource-wrapper"},[a.isError?[s("ErrorStatus",{attrs:{scene:"StudyResources"},on:{"click-refresh":a.getResourcesList}})]:s("div",{staticClass:"resource-inner"},[s("div",{staticClass:"resource-content"},[a.loading?s("Loading",{attrs:{"margin-top":"200px"}}):[a.courseDetailData.planInfo?s("div",{staticClass:"syllabus-card"},[s("div",{staticClass:"number"},[s("label"),s("span",[a._v(a._s(a.courseDetailData.planInfo.order))])]),s("div",{staticClass:"syllabus-info"},[s("div",{staticClass:"title"},[a._v(" "+a._s(a.courseDetailData.planInfo.name)+" ")]),s("div",{staticClass:"datetime"},[s("span",{staticClass:"content"},[a._v(a._s(a.courseDetailData.planInfo.startTime))])])])]):a._e(),null!==(e=a.courseDetailData)&&void 0!==e&&null!==(e=e.planBlackboards)&&void 0!==e&&e.length?s("div",[s("div",{staticClass:"download-title"},[a._v(a._s(a.$t("courses.detail.classNotes")))]),s("div",{staticClass:"download"},a._l(a.courseDetailData.planBlackboards,(function(e,t){return s("DownloadCard",{key:t,staticClass:"downloadCard",attrs:{downloadItem:e,burryPointData:a.burryPointData},on:{openVideo:function(t){return a.openVideo(e.fileUrl,e.name)}}})})),1)]):a._e(),null!==(t=a.courseDetailData)&&void 0!==t&&null!==(t=t.materials)&&void 0!==t&&t.length?s("div",[s("div",{staticClass:"download-title"},[a._v(a._s(a.$t("courses.detail.learningMaterials")))]),s("div",{staticClass:"download"},a._l(a.courseDetailData.materials,(function(e,t){return s("DownloadCard",{key:t,staticClass:"downloadCard",attrs:{downloadItem:e,burryPointData:a.burryPointData},on:{openVideo:function(t){return a.openVideo(e.fileUrl,e.name)}}})})),1)]):a._e()]],2)]),s("section",{directives:[{name:"show",rawName:"v-show",value:a.showVideo,expression:"showVideo"}],on:{keydown:a.keyDown}},[s("div",{staticClass:"video-title"},[s("span",[a._v(a._s(a.fileName))]),s("div",{staticClass:"close",on:{click:a.closeVideo}})]),s("video",{staticClass:"video-js",attrs:{id:"myVideo"}},[s("source",{attrs:{src:a.fileUrl,type:"application/x-mpegURL"}})])])],2)},o=[],n=a("c7eb"),r=a("1da1"),i=a("f0e2"),l=(a("fda2"),function(){var e=this,t=e._self._c;return e.downloadItem?t("div",{staticClass:"download-wrapper",class:e.downloadItem.fileExt?"".concat(e.downloadItem.fileExt,"_wrapper"):"pdf_wrapper"},[t("div",{staticClass:"inner"},[t("span",{staticClass:"common_icon file_icon"}),t("div",{staticClass:"classinfo"},[t("span",{staticClass:"title"},[e._v(e._s(e.downloadItem.name))]),t("label",[t("span",[e._v(e._s(e.downloadItem.uploadTime))]),t("span",[e._v(e._s(e.downloadItem.size))])])]),t("div",{staticClass:"download_btn",on:{click:function(t){return e.downloadFile(e.downloadItem.fileCate)}}},[e.downloadLoading?1==e.downloadItem.fileCate?t("a-icon",{staticClass:"downloadLoading",staticStyle:{"font-size":"14px"},attrs:{slot:"indicator",type:"loading",spin:""},slot:"indicator"}):e._e():t("span"),t("span",[e._v(e._s(1==e.downloadItem.fileCate?"Download":"Play videos"))])],1)])]):e._e()}),c=[],d=a("dc21"),u=a("e39c"),f=function(){var e=Object(r["a"])(Object(n["a"])().mark((function e(t,a,s){var o,r,i;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=Object(u["h"])(),r=o.oversea,e.next=3,Object(d["a"])({url:a,params:s,apiDomain:r});case 3:return i=e.sent,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t,a,s){return e.apply(this,arguments)}}(),p=function(){var e=Object(r["a"])(Object(n["a"])().mark((function e(t,a){var s,o;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s="/classroom-hub/material/student/view/increment",e.next=3,f(t,s,a);case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),m=a("0d52"),h={data:function(){return{downloadLoading:!1}},props:{downloadItem:{type:Array,default:function(){return[]}},burryPointData:{type:Object,default:function(){return{}}}},methods:{downloadFile:function(e){var t=this;return Object(r["a"])(Object(n["a"])().mark((function a(){var s;return Object(n["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(console.info("对象函数 downloadFile(fileCate)",e,"filePath:renderer/components/Courses/DownloadCard.vue"),2!=e){a.next=4;break}return t.$emit("openVideo",t.downloadItem.fileUrl),a.abrupt("return");case 4:return a.next=6,m["nativeApi"].openDirDialog({title:"选择文件夹"});case 6:if(s=a.sent,!s){a.next=11;break}return t.downloadLoading=!0,a.next=11,m["downloaderApi"].downloadFile({fileURL:t.downloadItem.fileUrl,saveName:t.downloadItem.name,savePath:s[0],complete:function(e){console.log(e),t.$Message.success("downloadFile, Download successfully"),t.downloadLoading=!1,t.downloadFeedback()},fail:function(e){console.log(e),t.$Message.error("Download failed"),t.downloadLoading=!1}});case 11:case"end":return a.stop()}}),a)})))()},downloadFeedback:function(){var e=this;return Object(r["a"])(Object(n["a"])().mark((function t(){return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.info("对象函数 downloadFeedback,filePath:renderer/components/Courses/DownloadCard.vue"),t.next=3,p(e,{materialIds:[e.downloadItem.materialId]}).then((function(e){console.info("箭头函数 _downloadFeedback的then(res)",e,"filePath:renderer/components/Courses/DownloadCard.vue"),e&&e.code}));case 3:case"end":return t.stop()}}),t)})))()}},mounted:function(){}},v=h,w=(a("5885"),a("2877")),y=Object(w["a"])(v,l,c,!1,null,"3c1077d2",null),b=y.exports,C=a("383d"),g=a("bd12"),D=a("aaf0"),A={data:function(){return{courseDetailParams:{},courseDetailData:{},burryPointData:{},loading:!1,isError:!1,showVideo:!1,myPlayer:null,fileUrl:"",fileName:""}},components:{DownloadCard:b,Loading:g["a"],ErrorStatus:D["a"]},computed:{},methods:{updateHeaderAttr:function(){console.info("对象函数 updateHeaderAttr,filePath:renderer/views/StudyResources.vue"),this.$bus.$emit("updateHeaderAttr",{title:this.$t("courses.studyResources.title"),showGoback:!0,backUrl:"/courses-detail?classId=".concat(this.courseDetailParams.classId)})},getResourcesList:function(){var e=this;return Object(r["a"])(Object(n["a"])().mark((function t(){var a;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.info("对象函数 getResourcesList,filePath:renderer/views/StudyResources.vue"),e.loading=!0,t.next=4,Object(C["e"])({planId:e.courseDetailParams.lessonId});case 4:if(a=t.sent,e.$bus.$emit("reload-completed"),a&&0!=!a.code){t.next=9;break}return e.isError=!0,t.abrupt("return");case 9:e.loading=!1,e.courseDetailData=a.data;case 11:case"end":return t.stop()}}),t)})))()},openVideo:function(e,t){var a=this;console.info("对象函数 openVideo(fileUrl, name)",e,t,"filePath:renderer/views/StudyResources.vue"),this.fileName=t,this.fileUrl=e,setTimeout((function(){!a.myPlayer&&a.initVideo(),a.myPlayer.load(a.fileUrl),a.myPlayer.src({src:a.fileUrl,type:"application/x-mpegURL"}),a.showVideo=!0}),300)},closeVideo:function(){console.info("对象函数 closeVideo,filePath:renderer/views/StudyResources.vue"),this.showVideo=!1,this.myPlayer.pause()},initVideo:function(){console.info("对象函数 initVideo,filePath:renderer/views/StudyResources.vue"),this.myPlayer=Object(i["a"])("myVideo",{controls:!0,autoplay:!0,preload:"auto"})},keyDown:function(){console.info("对象函数 keyDown,filePath:renderer/views/StudyResources.vue"),console.log(this.myPlayer,"this.myPlayer")}},mounted:function(){var e=this;this.courseDetailParams=this.$route.query,this.updateHeaderAttr(),this.getResourcesList(),this.$bus.$on("reload",(function(){console.info("箭头函数 监听 reload,filePath:renderer/views/StudyResources.vue"),e.getResourcesList()}))},destroyed:function(){console.info("对象函数 destroyed,filePath:renderer/views/StudyResources.vue"),this.$bus.$off("reload"),this.myPlayer&&this.myPlayer.dispose()}},_=A,k=(a("5f39"),Object(w["a"])(_,s,o,!1,null,null,null));t["default"]=k.exports},ebc2:function(e,t,a){},ef22:function(e,t,a){},f761:function(e,t,a){"use strict";a("ebc2")}}]);
//# sourceMappingURL=StudyResources.10f59c1d.js.map