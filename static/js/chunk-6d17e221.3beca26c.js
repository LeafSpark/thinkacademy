(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d17e221"],{"0481":function(e,t,n){"use strict";var o=n("23e7"),s=n("a2bf"),r=n("7b0b"),i=n("07fa"),a=n("5926"),c=n("65f0");o({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=r(this),n=i(t),o=c(t,0);return o.length=s(o,t,t,n,0,void 0===e?1:a(e)),o}})},"0919":function(e,t,n){},"0ccb":function(e,t,n){"use strict";var o=n("e330"),s=n("50c4"),r=n("577e"),i=n("1148"),a=n("1d80"),c=o(i),u=o("".slice),l=Math.ceil,d=function(e){return function(t,n,o){var i,d,m=r(a(t)),p=s(n),f=m.length,h=void 0===o?" ":r(o);return p<=f||""===h?m:(i=p-f,d=c(h,l(i/h.length)),d.length>i&&(d=u(d,0,i)),e?m+d:d+m)}};e.exports={start:d(!1),end:d(!0)}},"1e6f":function(e,t,n){},"2f75":function(e,t,n){"use strict";n("80f2")},"39b8":function(e,t,n){"use strict";n("67da")},"3de5b":function(e,t,n){"use strict";n("0919")},4069:function(e,t,n){"use strict";var o=n("44d2");o("flat")},"4bcc":function(e,t,n){"use strict";n("970c")},"4d90":function(e,t,n){"use strict";var o=n("23e7"),s=n("0ccb").start,r=n("9a0c");o({target:"String",proto:!0,forced:r},{padStart:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},5290:function(e,t,n){"use strict";n("1e6f")},"5ee3":function(e,t,n){e.exports=n.p+"static/media/interact-fail.55547638.mp3"},"67da":function(e,t,n){},"80f2":function(e,t,n){},"85f5":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ce}));var o,s=n("5530"),r=n("d4ec"),i=n("bee2"),a=n("262e"),c=n("2caf"),u=n("b6c9"),l=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],class:e.isSubmit&&!e.isExceptionStatus?"courseware-board-container-musk":"courseware-board-container"},[t("audio",{ref:"interactFail",staticClass:"hide",attrs:{src:n("5ee3")}}),t("audio",{ref:"interactKeyTone",staticClass:"hide",attrs:{src:n("e32e")}}),t("audio",{ref:"interactSubmit",staticClass:"hide",attrs:{src:n("afc3")}}),t("audio",{ref:"interactSuccess",staticClass:"hide",attrs:{src:n("b0ec")}}),t("audio",{ref:"coinAudio",attrs:{src:n("bc2e")}}),t("div",{ref:"coursewareBoardBlock",staticClass:"courseware-board-block",class:[e.isExpanded?"closeBoard":"openBoard"]},[e.countdownOptions?t("div",{ref:"timerBox",staticClass:"timer-box",class:[e.isSubmit?"hidden":""]},[t("CountDown",{attrs:{time:e.countdownOptions,format:"mm:ss"},on:{complete:e.countdownComplete}})],1):e._e(),e.isSubmit?e._e():[t("div",{staticClass:"courseware-board-control",on:{click:function(t){e.isExpanded=!e.isExpanded}}},[t("i",{staticClass:"ne-icon",class:[e.iconClass]})]),t("div",{staticClass:"courseware-board-content"},[t("QuestionOption",{attrs:{optionList:e.optionList,quesTypeId:e.quesTypeId},on:{change:e.upodateUserAnswer}}),t("button",{staticClass:"submit-box",class:{"is-disabled":e.btnDisabled},on:{click:e.submitAnswer}},[e._v(" "+e._s(e.$t("common.submit"))+" ")])],1)],e.isSubmit&&!e.isExceptionStatus?[t("div",{staticClass:"courseware-board-content is-submit"},[t("QuestionJudge",{attrs:{quesTypeId:e.quesTypeId,userAnswer:e.userAnswer,quesAnswer:e.quesAnswer}})],1)]:e._e()],2)])},d=[],m=n("c7eb"),p=n("1da1"),f=n("2909"),h=(n("99af"),n("0481"),n("4069"),n("d3b7"),n("25f0"),n("4e82"),n("e260"),n("6062"),n("3ca3"),n("ddb0"),n("753a")),v=n("ceab"),w=n("8bbf"),b=n.n(w),g=function(){var e=this,t=e._self._c;return t("transition",{on:{"after-leave":e.handleAfterLeave}},[e.visible?t("div",{staticClass:"coursewae-toast",class:[e.typeClass],on:{mouseenter:e.clearTimer,mouseleave:e.startTimer}},[t("h2",[e._v(e._s(e.title))]),t("p",[e._v(e._s(e.message))]),"right"===e.type?t("div",{staticClass:"coins-number"},[t("i"),e._v(" +"+e._s(e.coin))]):e._e()]):e._e()])},C=[],I={right:"right",wrong:"wrong"},y={data:function(){return{visible:!1,type:"right",title:"",message:"",coin:0,duration:0,closed:!1,onClose:null,timer:null}},computed:{typeClass:function(){return console.info("对象函数 typeClass,filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/toast/toast.vue"),"is-".concat(I[this.type])}},mounted:function(){this.startTimer()},methods:{handleAfterLeave:function(){var e;console.info("对象函数 handleAfterLeave,filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/toast/toast.vue"),this.$destroy(!0),null===(e=this.$el)||void 0===e||null===(e=e.parentNode)||void 0===e||e.removeChild(this.$el)},close:function(){console.info("对象函数 close,filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/toast/toast.vue"),this.closed=!0,"function"===typeof this.onClose&&this.onClose(this)},clearTimer:function(){console.info("对象函数 clearTimer,filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/toast/toast.vue"),clearTimeout(this.timer)},startTimer:function(){var e=this;console.info("对象函数 startTimer,filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/toast/toast.vue"),this.duration>0&&(this.timer=setTimeout((function(){e.closed||e.close()}),this.duration))}},watch:{closed:function(e){console.info("对象函数 closed(newVal)",e,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/toast/toast.vue"),e&&(this.visible=!1)}}},O=y,B=(n("3de5b"),n("2877")),A=Object(B["a"])(O,g,C,!1,null,"50eee934",null),q=A.exports,_=b.a.extend(q),x=1,j=function(e){console.info("箭头函数 ToastBox(options)",e,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/toast/index.js"),e=e||{},"string"===typeof e&&(e={message:e});var t="toast_"+x++;return o=new _({data:e}),o.id=t,o.$mount(),document.getElementById("interactionController").appendChild(o.$el),o.visible=!0,o};j.close=function(){o&&(o.visible=!1)};var S=j,T=n("d0db"),k=function(e){Object(a["a"])(n,e);var t=Object(c["a"])(n);function n(){var e,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return console.info("函数申明 Main(opts)",o,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/coursewareBoard.js"),Object(r["a"])(this,n),e=t.call(this),e.options=o,e.vm=o.vm,e.quesInfo=null,e.handleQuesInfo(),e}return Object(i["a"])(n,[{key:"initCountdown",value:function(){var e=+new Date,t=this.options.roomMessage.roomInfo.commonOption.timeOffset,n=1e3*this.options.ircMsg.countDownTime-(e+t-this.options.ircMsg.currentTime);return T["a"].send({tag:"student.Interact",content:{msg:"本机时间：".concat(e,",偏移量:").concat(t,",倒计时").concat(n),interactType:"答题h5互动",interactId:this.options.ircMsg.interactId}}),n}},{key:"handleQuesInfo",value:function(){var e=this.options.ircMsg,t=e.quesTypeId,n=e.quesAnswer,o=e.quesOptions,s=e.quesId,r=e.interactId,i=e.rightCoin,a=e.countDownTime,c=this.options.roomMessage.roomInfo,u=c.stuInfo,l=c.teacherInfo,d=c.stuLiveInfo;return this.quesInfo={quesTypeId:1*t,quesAnswer:n,quesOptions:o.flat(),quesId:s,interactId:r,rightCoin:i,countDownTime:a,stuInfo:u,teacherInfo:l,stuLiveInfo:d},this.quesInfo}},{key:"handleCorrectQues",value:function(e,t){return e.length?Object(f["a"])(new Set(e)).sort().toString()===Object(f["a"])(new Set(t)).sort().toString()?1:2:3}},{key:"submitAnswer",value:function(){var e=Object(p["a"])(Object(m["a"])().mark((function e(t){var n,o,r,i,a,c,u;return Object(m["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={teacherId:this.quesInfo.teacherInfo.id,tutorId:this.quesInfo.stuLiveInfo.tutorId,planId:this.quesInfo.stuLiveInfo.planId,classId:this.quesInfo.stuLiveInfo.classId,interactId:this.quesInfo.interactId,questionId:this.quesInfo.quesId,userAnswer:Object(f["a"])(t),isRight:this.handleCorrectQues(t,this.quesInfo.quesAnswer),userName:this.quesInfo.stuInfo.nickName},e.next=3,Object(v["f"])(n).catch((function(e){return console.info("箭头函数 submitUserAnswer的catch(err)",e,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/coursewareBoard.js"),T["a"].send({tag:"http",content:{msg:"接口报错:提交答案:",err:e,params:n},level:"error"}),e}));case 3:if(o=e.sent,r=o.code,i=o.data,a=n.isRight,c=Object(s["a"])(Object(s["a"])({},i),{},{isRight:a,rightCoin:null===i||void 0===i?void 0:i.rightCoin}),u={params:n,response:o,isSubmit:!1,isRight:a},b.a.prototype.$bus.$emit("continuousCorrect",c),0!==r){e.next=13;break}return 1!==a&&2!=a||b.a.prototype.$bus.$emit("updateAchievement","add",i.rightCoin),u.isSubmit=!0,e.abrupt("return",u);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e,this)})));function t(t){return console.info("函数申明 submitAnswer(_x)",t,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/coursewareBoard.js"),e.apply(this,arguments)}return t}()},{key:"questionStatus",value:function(){var e=Object(p["a"])(Object(m["a"])().mark((function e(){var t;return Object(m["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t={teacherId:this.quesInfo.teacherInfo.id,tutorId:this.quesInfo.stuLiveInfo.tutorId,planId:this.quesInfo.stuLiveInfo.planId,courseId:this.quesInfo.stuLiveInfo.courseId,classId:this.quesInfo.stuLiveInfo.classId,interactId:this.quesInfo.interactId},e.next=4,Object(v["d"])(t);case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e["catch"](0),console.error("getQuestionStatus",e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return console.info("函数申明 questionStatus, filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/coursewareBoard.js"),e.apply(this,arguments)}return t}()},{key:"interactReport",value:function(){var e=Object(p["a"])(Object(m["a"])().mark((function e(){var t;return Object(m["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t={planId:this.quesInfo.stuLiveInfo.planId,classId:this.quesInfo.stuLiveInfo.classId,interactId:this.quesInfo.interactId},e.next=4,Object(v["e"])(t);case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e["catch"](0),console.error("interactReport",e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return console.info("函数申明 interactReport, filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/coursewareBoard.js"),e.apply(this,arguments)}return t}()},{key:"closeToast",value:function(){return S.close()}}]),n}(h["a"]),$=function(){var e=this,t=e._self._c;return t("div",{staticClass:"options-box",attrs:{"data-log":"单选多选判断面板"}},[1===e.quesTypeId?t("Single",{staticClass:"courseware-options",attrs:{options:e.optionList},on:{change:e.handleChange},model:{value:e.userAnswer,callback:function(t){e.userAnswer=t},expression:"userAnswer"}}):e._e(),2===e.quesTypeId?t("Multiple",{staticClass:"courseware-options",attrs:{options:e.optionList},on:{change:e.handleChange},model:{value:e.userAnswer,callback:function(t){e.userAnswer=t},expression:"userAnswer"}}):e._e(),5===e.quesTypeId?t("Judge",{attrs:{options:e.judgeOptions,value:e.userAnswer},on:{change:e.handleChange}}):e._e()],1)},P=[],L=(n("a9e3"),n("caad"),n("2532"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"multi-select"},e._l(e.options,(function(n,o){return t("button",{key:o,class:{active:e.selectedOptions.includes(n)},on:{click:function(t){return e.toggleOption(n)}}},[e._v(" "+e._s(n)+" ")])})),0)}),D=[],M=(n("a434"),n("14d9"),{props:{options:{type:Array,required:!0},value:{type:Array,default:function(){return[]}}},mounted:function(){console.log("optionList",this.optionList)},data:function(){return{selectedOptions:this.value}},watch:{value:function(e){console.info("对象函数 value(newValue)",e,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/Multiple.vue"),this.selectedOptions=e}},methods:{toggleOption:function(e){console.info("对象函数 toggleOption(option)",e,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/Multiple.vue");var t=this.selectedOptions.indexOf(e);-1===t?this.selectedOptions.push(e):this.selectedOptions.splice(t,1),console.log("this.selectedOptions",this.selectedOptions),this.$emit("input",this.selectedOptions),this.$emit("change",this.selectedOptions)}}}),Q=M,E=(n("2f75"),Object(B["a"])(Q,L,D,!1,null,"441cc34f",null)),N=E.exports,J=function(){var e=this,t=e._self._c;return t("div",{staticClass:"radio-group"},e._l(e.options,(function(n,o){return t("button",{key:o,class:{active:e.selectedOption===n},on:{click:function(t){return e.selectOption(n)}}},[e._v(" "+e._s(n)+" ")])})),0)},U=[],R={props:{options:{type:Array,required:!0},value:{type:String,default:""}},data:function(){return{selectedOption:this.value}},watch:{value:function(e){console.info("对象函数 value(newValue)",e,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/Single.vue"),this.selectedOption=e}},methods:{selectOption:function(e){console.info("对象函数 selectOption(option)",e,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/Single.vue"),this.selectedOption=e,this.$emit("input",e),this.$emit("change",e)}}},V=R,F=(n("4bcc"),Object(B["a"])(V,J,U,!1,null,"7a9a4164",null)),H=F.exports,K=function(){var e=this,t=e._self._c;return t("div",{staticClass:"radio-group"},e._l(e.options,(function(n,o){return t("button",{key:o,class:{active:n.value===e.selected},on:{click:function(t){return e.select(n.value)}}},[e._v(" "+e._s(n.label)+" ")])})),0)},z=[],G={props:{options:{type:Array,required:!0,validator:function(e){return e.every((function(e){return console.info("箭头函数 every(option)",e,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/Judge.vue"),"string"===typeof e.label&&["T","F"].includes(e.value)}))}},value:{type:String,validator:function(e){return["T","F"].includes(e)}}},data:function(){return{selected:this.value}},methods:{select:function(e){console.info("对象函数 select(value)",e,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/Judge.vue"),this.selected=e,this.$emit("input",e),this.$emit("change",e)}}},W=G,X=(n("5290"),Object(B["a"])(W,K,z,!1,null,"0d121f5c",null)),Y=X.exports,Z={name:"QuestionOption",props:{optionList:{type:Array,default:function(){return[]}},quesTypeId:{type:Number,default:0}},components:{Multiple:N,Single:H,Judge:Y},data:function(){return{userAnswer:[],judgeOptions:[{label:this.$t("classroom.interactions.coursewareBoard.true"),value:"T"},{label:this.$t("classroom.interactions.coursewareBoard.false"),value:"F"}]}},methods:{handleChange:function(e){console.info("对象函数 handleChange(val)",e,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/question-option.vue"),this.$emit("change",e)}}},ee=Z,te=Object(B["a"])(ee,$,P,!1,null,null,null),ne=te.exports,oe=function(){var e=this,t=e._self._c;return t("div",{staticClass:"answer-box"},[5===e.quesTypeId?[e.theUserAnswer&&e.theUserAnswer!==e.theQuesAnswer?t("div",{staticClass:"my-answer-box"},[t("p",[e._v(e._s(e.$t("classroom.interactions.coursewareBoard.yourAnswer")))]),t("span",[[e._v(e._s("T"===e.theUserAnswer?e.$t("classroom.interactions.coursewareBoard.true"):e.$t("classroom.interactions.coursewareBoard.false")))]],2)]):e._e(),t("div",{staticClass:"right-answer-box"},[t("p",[e._v(e._s(e.$t("classroom.interactions.coursewareBoard.rightAnswer")))]),t("span",[[e._v(e._s("T"===e.theQuesAnswer?e.$t("classroom.interactions.coursewareBoard.true"):e.$t("classroom.interactions.coursewareBoard.false")))]],2)])]:[e.theUserAnswer&&e.theUserAnswer!==e.theQuesAnswer?t("div",{staticClass:"my-answer-box"},[t("p",[e._v(e._s(e.$t("classroom.interactions.coursewareBoard.yourAnswer")))]),t("span",[e._l(e.userAnswer,(function(t){return[e._v(e._s(t[0]))]}))],2)]):e._e(),t("div",{staticClass:"right-answer-box"},[t("p",[e._v(e._s(e.$t("classroom.interactions.coursewareBoard.correctAnswer")))]),t("span",[e._l(e.quesAnswer,(function(t){return[e._v(e._s(t[0]))]}))],2)])]],2)},se=[],re={name:"QuestionJudge",props:{quesTypeId:{type:Number,default:0},userAnswer:{type:Array,default:function(){return[]}},quesAnswer:{type:Array,default:function(){return[]}}},computed:{theUserAnswer:function(){return console.info("对象函数 theUserAnswer,filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/question-judge.vue"),Object(f["a"])(new Set(this.userAnswer)).sort().toString()},theQuesAnswer:function(){return console.info("对象函数 theQuesAnswer,filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/question-judge.vue"),Object(f["a"])(new Set(this.quesAnswer)).sort().toString()}}},ie=re,ae=Object(B["a"])(ie,oe,se,!1,null,null,null),ce=ae.exports,ue=function(){var e=this,t=e._self._c;return t("div",[e._v(e._s(e.countdown))])},le=[],de=(n("ac1f"),n("5319"),n("4d90"),{props:{time:{type:Number,required:!0},format:{type:String,default:"mm:ss"}},data:function(){return{remainingTime:Math.ceil(this.time/1e3)}},computed:{countdown:function(){console.info("对象函数 countdown,filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/CountDown.vue");var e=Math.floor(this.remainingTime/60),t=this.remainingTime%60,n=this.format;return n=n.replace("mm",e.toString().padStart(2,"0")),n=n.replace("ss",t.toString().padStart(2,"0")),n}},mounted:function(){var e=this;this.timer=setInterval((function(){e.remainingTime>0?e.remainingTime--:(clearInterval(e.timer),e.$emit("complete"))}),1e3)},beforeDestroy:function(){console.info("对象函数 beforeDestroy,filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/components/CountDown.vue"),clearInterval(this.timer)}}),me=de,pe=Object(B["a"])(me,ue,le,!1,null,null,null),fe=pe.exports,he=n("c02a"),ve={props:{options:{type:Object,default:function(){return{}}}},data:function(){return{quesAnswer:[],optionList:[],quesTypeId:null,clickDisabled:!1,btnDisabled:!0,userAnswer:[],isExpanded:!1,isSubmit:!1,isExceptionStatus:!1,countdownOptions:null,visible:!1}},components:{QuestionOption:ne,QuestionJudge:ce,CountDown:fe},created:function(){var e=this;return Object(p["a"])(Object(m["a"])().mark((function t(){return Object(m["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.initEventListener(),e.coursewareBoard=new k(Object(s["a"])({},e.options)),e.$nextTick((function(){var t=e.coursewareBoard.quesInfo;e.optionList=t.quesOptions,e.quesAnswer=t.quesAnswer,e.quesTypeId=t.quesTypeId,e.sendLogger({msg:"收到互动",stage:"start",response:t}),e.coursewareBoard.interactReport();var n=e.questionStatus();e.sendLogger({msg:"上报结果".concat(JSON.stringify(n)),stage:"开始互动上报"}),e.countdownOptions=e.coursewareBoard.initCountdown(),e.sendLogger({msg:"互动倒计时".concat(e.countdownOptions),stage:"开始互动倒计时"})}));case 3:case"end":return t.stop()}}),t)})))()},computed:{iconClass:function(){return console.info("对象函数 iconClass,filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/app.vue"),this.isExpanded?"ne-icon-courseware-arrow ne-icon-courseware-up":"ne-icon-courseware-arrow"}},methods:{initEventListener:function(){var e=this;console.info("对象函数 initEventListener,filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/app.vue"),this.$bus.$emit("initClose"),this.$bus.$on("closeContinusCorrect",(function(t){console.info("箭头函数 监听 closeContinusCorrect(data)",t,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/app.vue"),t&&e.closeBoard()}))},upodateUserAnswer:function(e){console.info("对象函数 upodateUserAnswer(val)",e,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/app.vue"),this.sendLogger({msg:"学生答案",stage:"start",params:{val:e}}),this.$refs.interactKeyTone.play(),this.userAnswer=e},closeBoard:function(){var e=this;console.info("对象函数 closeBoard,filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/app.vue"),this.isExpanded=!0,this.$refs.coursewareBoardBlock&&this.$refs.coursewareBoardBlock.addEventListener("transitionend",(function(){console.info("箭头函数 监听 transitionend,filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/app.vue"),e.destroy()}),!1)},questionStatus:function(){var e=this;return Object(p["a"])(Object(m["a"])().mark((function t(){var n,o,s;return Object(m["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.info("对象函数 questionStatus,filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/app.vue"),t.next=3,e.coursewareBoard.questionStatus().catch((function(t){return console.info("箭头函数 catch(err)",t,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/app.vue"),e.sendLogger({msg:"接口报错:异常恢复:",response:t},"error"),t||{}}));case 3:n=t.sent,o=n.code,s=n.data,0===o&&(s.userAnswer?(e.isSubmit=!0,e.isExceptionStatus=!0,e.userAnswer=s.userAnswer):e.visible=!0);case 7:case"end":return t.stop()}}),t)})))()},submitAnswer:function(e){var t=this;return Object(p["a"])(Object(m["a"])().mark((function n(){var o,s,r,i,a,c,u,l;return Object(m["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.info("对象函数 submitAnswer(e)",e,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/app.vue"),!t.clickDisabled){n.next=3;break}return n.abrupt("return");case 3:return t.btnDisabled=!0,t.clickDisabled=!0,t.$refs.interactSubmit&&t.$refs.interactSubmit.play(),n.next=8,t.coursewareBoard.submitAnswer(t.userAnswer);case 8:return i=n.sent,a=i.isSubmit,c=i.isRight,u=i.params,l=i.response,t.isSubmit=a,t.clickDisabled=!1,t.sendLogger({msg:"提交答案结果",params:u,response:l}),n.next=18,t.$nextTick();case 18:1===c?null===(o=t.$refs.interactSuccess)||void 0===o||o.play():null===(s=t.$refs.interactFail)||void 0===s||s.play(),he["f"](null===(r=t.options)||void 0===r?void 0:r.ircMsg,t.quesTypeId,c);case 20:case"end":return n.stop()}}),n)})))()},countdownComplete:function(){console.info("对象函数 countdownComplete,filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/app.vue"),this.sendLogger({msg:"倒计时结束自动提交答案结果",stage:"submit"}),!this.isSubmit&&this.submitAnswer()},destroyInteraction:function(e){console.info("对象函数 destroyInteraction(msg)",e,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/app.vue"),e.isNeedSubmit?(this.sendLogger({msg:"主讲关闭自动提交答案结果",stage:"submit"}),!this.isSubmit&&this.submitAnswer()):this.destroy()},autoCloseBoard:function(e){var t=this;console.info("对象函数 autoCloseBoard(timer)",e,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/app.vue");var n=setTimeout((function(){t.closeBoard(),clearTimeout(n),n=null}),e)},sendLogger:function(e){var t=e.msg,n=void 0===t?"":t,o=e.stage,s=void 0===o?"":o,r=e.params,i=void 0===r?{}:r,a=e.response,c=void 0===a?{}:a,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info",l={1:"QuestionDanxuan",2:"QuestionDuoxuan",5:"QuestionPanduan"};T["a"].send({tag:"student.Interact",content:{msg:n,interactType:l[this.quesTypeId],interactId:this.options.ircMsg.interactId,interactStage:s,params:JSON.stringify(i),response:JSON.stringify(c)},level:u})},destroy:function(){var e;console.info("对象函数 destroy,filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/app.vue"),this.$bus.$off("closeContinusCorrect"),this.sendLogger({msg:"结束互动",stage:"end"}),this.$destroy(),this.coursewareBoard.closeToast(),null===(e=this.$el)||void 0===e||null===(e=e.parentNode)||void 0===e||e.removeChild(this.$el)}},watch:{userAnswer:function(e){console.info("对象函数 userAnswer(val)",e,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/app.vue"),e.length>0?this.btnDisabled=!1:this.btnDisabled=!0}}},we=ve,be=(n("39b8"),Object(B["a"])(we,l,d,!1,null,null,null)),ge=be.exports,Ce=function(e){Object(a["a"])(n,e);var t=Object(c["a"])(n);function n(){var e,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return console.info("函数申明 CoursewareBoard(opts)",o,"filePath:renderer/components/Classroom/CommonInteractions/coursewareBoard/index.js"),Object(r["a"])(this,n),e=t.call(this,ge),e.options=o,e.dom=o.roomMessage.roomInfo.interactionController,e.initVmApp("h5课件互动题"),e}return Object(i["a"])(n,[{key:"createPropsData",value:function(){var e={};return Object(s["a"])({options:this.options},e)}}]),n}(u["a"])},"970c":function(e,t,n){},"9a0c":function(e,t,n){"use strict";var o=n("342f");e.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(o)},a2bf:function(e,t,n){"use strict";var o=n("e8b5"),s=n("07fa"),r=n("3511"),i=n("0366"),a=function(e,t,n,c,u,l,d,m){var p,f,h=u,v=0,w=!!d&&i(d,m);while(v<c)v in n&&(p=w?w(n[v],v,t):n[v],l>0&&o(p)?(f=s(p),h=a(e,t,p,f,h,l-1)-1):(r(h+1),e[h]=p),h++),v++;return h};e.exports=a},afc3:function(e,t,n){e.exports=n.p+"static/media/interact-submit.83bed748.mp3"},b0ec:function(e,t,n){e.exports=n.p+"static/media/interact-success.bd430e73.mp3"},b6c9:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n("d4ec"),s=n("bee2"),r=(n("99af"),n("d9e2"),n("8bbf")),i=n.n(r),a=n("3898"),c=n("d0db"),u=function(){function e(t){console.info("函数申明 InteractionBase(app)",t,"filePath:renderer/components/Classroom/CommonInteractions/interaction-base.js"),Object(o["a"])(this,e),this.app=t,this.vm=null,this.keepOtherDom=!1}return Object(s["a"])(e,[{key:"initVmApp",value:function(e){if(!this.dom)throw Error("互动的dom容器不存在");this.dom.children.length>0&&!this.keepOtherDom&&(c["a"].send({tag:"tempInteractionTest",content:{msg:"清空互动容器，由".concat(e,"触发清空，清空").concat(this.dom.children[0].className)}}),this.dom.innerHTML=""),this.vm=this.initVm(this.app),this.render(this.dom,this.vm)}},{key:"initVm",value:function(e){var t=i.a.extend(e),n=this.createPropsData(),o=new t({i18n:a["b"],propsData:n,store:this.store||{}});return o.$mount(),o}},{key:"render",value:function(e,t){e.appendChild(t.$el)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.submit,n=e.key,o=void 0===n?"":n;if(this.vm){var s,r;if(t&&this.vm.submit(),this.vm.$destroy(),"classRest"===o)null===this||void 0===this||null===(s=this.dom)||void 0===s||s.removeChild(null===this||void 0===this||null===(r=this.vm)||void 0===r?void 0:r.$el);else this.dom.innerHTML="";this.vm=null,this.app=null}}},{key:"getProperties",value:function(e,t){return e["".concat(t)].properties}},{key:"handleMsg",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log(e)}}]),e}()},bc2e:function(e,t,n){e.exports=n.p+"static/media/get-coins.71310f30.mp3"},e32e:function(e,t,n){e.exports=n.p+"static/media/interact-key-tone.631f9373.mp3"}}]);
//# sourceMappingURL=chunk-6d17e221.3beca26c.js.map