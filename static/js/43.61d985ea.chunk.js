"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[43],{7043:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var o=r(2791),s={main:"Dialogs_main__5NNjU",message:"Dialogs_message__v4ap8",dialogs:"Dialogs_dialogs__WTCAs",usersList:"Dialogs_usersList__tZy2H",user:"Dialogs_user__8ZZ8t",messages:"Dialogs_messages__h3jrF",img:"Dialogs_img__5D4uB",addMessageBorder:"Dialogs_addMessageBorder__uZEbw",talkbubble:"Dialogs_talkbubble__QX5bv",one:"Dialogs_one__x3SAr",two:"Dialogs_two__MgvyW",item:"Dialogs_item__F7DvV",messages_item:"Dialogs_messages_item__7v2o9",logo:"Dialogs_logo__6OTvo"},n=r(1413),i=r(885),l=r(5290),a=r(7799),c=r(6151),u=r(4465),d=r(2419),p=r(8086),h=r(152),f=r(8687),m=r(4635),g=r(8448),_=r(184),b=o.memo((function(e){var t=e.buttonType,r=(0,l.cI)(),s=r.register,b=r.handleSubmit,v=(r.resetField,r.formState.errors),x=b((function(e){R&&(C((0,g.bG)(R)),w(""))})),y=(0,o.useState)(""),j=(0,i.Z)(y,2),R=j[0],w=j[1],C=(0,f.I0)(),S=(0,m.CG)((function(e){return e.chat.status}));return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("form",{onSubmit:x,children:(0,_.jsxs)("div",{className:u.Z.flex_container,children:[(0,_.jsx)("div",{className:u.Z.text_field,children:(0,_.jsx)(a.Z,(0,n.Z)((0,n.Z)({},s("post",{required:!0,maxLength:300})),{},{error:!!v.post,type:"text",onChange:function(e){return w(e.currentTarget.value)},value:R,id:"filled-multiline-flexible",label:"Add your post",multiline:!0,color:"info",style:{width:"100%",padding:"5px",height:"75px"},sx:{bgcolor:"AppWorkspace",boxShadow:1,borderRadius:2}}))}),(0,_.jsxs)("div",{className:u.Z.btn_container,children:[(0,_.jsx)(c.Z,{className:u.Z.btn,style:{backgroundColor:"#6c7272"},size:"small",type:"submit",variant:"contained",disabled:"ready"!==S,onClick:x,children:t}),(0,_.jsxs)("div",{className:u.Z.image_upload,children:[(0,_.jsx)("label",{htmlFor:"contained-button-file",children:(0,_.jsx)(d.Z,{})}),(0,_.jsx)(p.Z,{}),(0,_.jsx)(h.Z,{})]})]})]})})})})),v=r(3044),x=function(e,t){return x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},x(e,t)};var y="styles_scrollable-div__prSCv";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!==typeof document){var o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===r&&o.firstChild?o.insertBefore(s,o.firstChild):o.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}(".styles_scrollable-div__prSCv {\r\n  max-height: inherit;\r\n  height: inherit;\r\n  overflow-y: auto;\r\n}\r\n");var j=function(e){function t(t){var r=e.call(this,t)||this;return r.bottomRef=(0,o.createRef)(),r.wrapperRef=(0,o.createRef)(),r.handleScroll=r.handleScroll.bind(r),r}return function(e,t){function r(){this.constructor=e}x(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.getSnapshotBeforeUpdate=function(){if(this.wrapperRef.current&&this.bottomRef.current){var e=this.props.viewableDetectionEpsilon;return t.isViewable(this.wrapperRef.current,this.bottomRef.current,e)}return!1},t.prototype.componentDidUpdate=function(e,t,r){var o=this.props,s=o.forceScroll;(0,o.changeDetectionFilter)(e,this.props)&&(s||r)&&this.bottomRef.current&&this.wrapperRef.current&&this.scrollParentToChild(this.wrapperRef.current,this.bottomRef.current)},t.prototype.componentDidMount=function(){this.bottomRef.current&&this.wrapperRef.current&&this.scrollParentToChild(this.wrapperRef.current,this.bottomRef.current)},t.prototype.scrollParentToChild=function(e,r){var o=this.props.viewableDetectionEpsilon;if(!t.isViewable(e,r,o)){var s=e.getBoundingClientRect(),n=r.getBoundingClientRect().top+e.scrollTop-s.top,i=this.props,l=i.animateScroll,a=i.onScrollComplete;l&&(l(e,n),a())}},t.isViewable=function(e,t,r){r=r||0;var o=e.getBoundingClientRect(),s=t.getBoundingClientRect(),n=s.top>=o.top,i=o.top+e.clientHeight-s.top;return n&&i+r>=0},t.prototype.handleScroll=function(){var e=this.props,r=e.viewableDetectionEpsilon,o=e.onScroll;o&&this.bottomRef.current&&this.wrapperRef.current&&o(t.isViewable(this.wrapperRef.current,this.bottomRef.current,r))},t.prototype.scrollToBottom=function(){this.bottomRef.current&&this.wrapperRef.current&&this.scrollParentToChild(this.wrapperRef.current,this.bottomRef.current)},t.prototype.render=function(){var e=this.props,t=e.children,r=e.className,s=y+(r?" "+r:"");return(0,o.createElement)("div",{className:s,ref:this.wrapperRef,onScroll:this.handleScroll},t,(0,o.createElement)("div",{ref:this.bottomRef}))},t.defaultProps={forceScroll:!1,animateScroll:function(e,t){e.scrollBy?e.scrollBy({top:t}):e.scrollTop=t},onScrollComplete:function(){},changeDetectionFilter:function(){return!0},viewableDetectionEpsilon:2,onScroll:function(){}},t}(o.Component),R=function(){var e=(0,m.CG)((function(e){return e.chat.messages})),t=((0,o.useRef)(null),(0,o.useState)(!0)),r=(0,i.Z)(t,2);r[0],r[1];return(0,_.jsx)("div",{className:s.messages_item,children:(0,_.jsx)(j,{children:e.map((function(e){return(0,_.jsx)("div",{className:s.item,children:(0,_.jsxs)("div",{id:s.talkbubble,children:[(0,_.jsx)("div",{className:s.one,children:(0,_.jsx)(v.Z,{sx:{width:56,height:56},src:e.photo?e.photo:"https://g1.dcdn.lt/images/pix/aliaksandras-lukasenka-89134905.jpg"})}),(0,_.jsxs)("div",{className:s.two,children:[(0,_.jsx)("div",{children:(0,_.jsx)("span",{children:e.userName})}),(0,_.jsx)("div",{className:s.message,children:e.message}),(0,_.jsx)("div",{className:s.icons})]})]},e.id)})}))})})},w=r(6871);var C=function(){var e=(0,f.I0)(),t=(0,w.s0)(),r=(0,m.CG)((function(e){return e.auth.isAuth})),n=(0,m.CG)((function(e){return e.chat.status}));return(0,o.useEffect)((function(){return e((0,g.WE)()),function(){e((0,g.R7)())}}),[]),(0,o.useEffect)((function(){if(!r)return t("/login")}),[r]),(0,_.jsxs)(_.Fragment,{children:["error"===n&&(0,_.jsx)("div",{children:"Some error occured. Please refresh the page"}),(0,_.jsxs)("div",{className:s.main,children:[(0,_.jsx)("div",{style:{textAlign:"center"},children:(0,_.jsx)("h4",{style:{color:"#525252"},children:"Messages"})}),(0,_.jsx)(R,{}),(0,_.jsx)("div",{className:s.addMessageBorder,children:(0,_.jsx)(b,{buttonType:"addMessage"})})]})]})}}}]);
//# sourceMappingURL=43.61d985ea.chunk.js.map