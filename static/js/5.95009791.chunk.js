(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{294:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var c=s(18),a=(s(1),s(303),s(2)),n=function(e){var t=e.classes,s=["skeleton"].concat(Object(c.a)(t),["animate"]).join(" ");return Object(a.jsx)("div",{className:s})}},295:function(e,t,s){e.exports={JET:"#2f2f2f","YELLOW-ORANGE":"#f90","BABY-POWDER":"#f3f4f0",WHITE:"#fff",PALE_ORANGE:"#ffb94a",DARK_GRAY:"#818181",GRAY:"#bfbfbf",LIGHT_GRAY:"#d7d7d7",wrapper:"Post_wrapper__70dWi",left:"Post_left__35IBK",folowed:"Post_folowed__35nhg",post:"Post_post__2yuq1",img:"Post_img__3d_LH",right:"Post_right__3QaWk",headerButton:"Post_headerButton__1c3w4",postComents:"Post_postComents__3LLq2",setting:"Post_setting__12LQK",likedButton:"Post_likedButton__398C6",dislikedButton:"Post_dislikedButton__3FHWG",dislikedNumber:"Post_dislikedNumber__36LUM",footerLeft:"Post_footerLeft__2brBX",likedNumber:"Post_likedNumber__3Mcqg",footerRight:"Post_footerRight__1x-Tz",share:"Post_share__3Dekh",chat:"Post_chat__GE7i6",dischat:"Post_dischat__3F-K4",description:"Post_description__KslCY"}},296:function(e,t,s){e.exports={JET:"#2f2f2f","YELLOW-ORANGE":"#f90","BABY-POWDER":"#f3f4f0",WHITE:"#fff",PALE_ORANGE:"#ffb94a",DARK_GRAY:"#818181",GRAY:"#bfbfbf",LIGHT_GRAY:"#d7d7d7",blog:"RecommendedBlog_blog__2mPRN",left:"RecommendedBlog_left__3QllJ",text:"RecommendedBlog_text__3MOrT",userName:"RecommendedBlog_userName__3kxtz",desc:"RecommendedBlog_desc__1-vMf",blogWrapper:"RecommendedBlog_blogWrapper__3u8Zx",right:"RecommendedBlog_right__242dw",button:"RecommendedBlog_button__2Wqs8"}},297:function(e,t,s){"use strict";var c=s(25),a=s(111),n=s(298),i=s.n(n),r=s(2),o=["border"];t.a=function(e){var t=e.border,s=Object(a.a)(e,o);return Object(r.jsx)("input",Object(c.a)(Object(c.a)({},s),{},{type:"text",className:"".concat(i.a.input,"   ").concat(i.a[t])}))}},298:function(e,t,s){e.exports={input:"Input_input__2RIMM",BorderBlack:"Input_BorderBlack__3CpZK",BorderOrange:"Input_BorderOrange__206zi",BorderRed:"Input_BorderRed__1NB5G",BorderGray:"Input_BorderGray__2Wx-g",BorderWhite:"Input_BorderWhite__2LzII"}},299:function(e,t,s){"use strict";s.d(t,"c",(function(){return a})),s.d(t,"d",(function(){return n})),s.d(t,"b",(function(){return i})),s.d(t,"a",(function(){return r}));var c=s(38).a.injectEndpoints({endpoints:function(e){return{getPosts:e.query({query:function(e){var t=e.id,s=e.limit,c=e.page,a=e.type;return{url:"/posts/recomendposts/".concat(t,"?limit=").concat(s,"&page=").concat(c,"&type=").concat(a)}}}),likePost:e.mutation({query:function(e){return{url:"/posts/like",method:"POST",body:e}}}),disLikePost:e.mutation({query:function(e){return{url:"/posts/dislike",method:"POST",body:e}}}),createPost:e.mutation({query:function(e){return{url:"/posts/create",method:"POST",body:e}}})}}}),a=c.useGetPostsQuery,n=(c.useLazyGetPostsQuery,c.useLikePostMutation),i=c.useDisLikePostMutation,r=c.useCreatePostMutation},300:function(e,t,s){"use strict";var c=s(295),a=s.n(c),n=s(311),i=s(70),r=s(71),o=s(312),l=s(302),d=s.n(l),j=s(68),u=s(2),b=function(e){var t=e.id,s=e.likes,c=e.time,a=e.descr,n=e.userName,r=e.liked,o=e.setLiked,l=e.logoUrl;return Object(u.jsx)("div",{className:d.a.comment,children:Object(u.jsxs)("div",{className:d.a.wrapper,children:[Object(u.jsx)("div",{className:d.a.commentLeft,children:Object(u.jsx)(j.a,{height:40,width:40,url:l,userId:t})}),Object(u.jsxs)("div",{className:d.a.commentRight,children:[Object(u.jsx)("div",{className:d.a.name,children:n}),Object(u.jsx)("div",{className:d.a.descr,children:a}),Object(u.jsxs)("div",{className:d.a.settings,children:[Object(u.jsxs)("div",{className:d.a.settingsLeft,children:[Object(u.jsx)("div",{className:d.a.time,children:c}),Object(u.jsxs)("div",{className:d.a.likes,children:[s," likes"]})]}),r?Object(u.jsx)("div",{className:d.a.liked,onClick:o,children:Object(u.jsx)(i.b,{})}):Object(u.jsx)("div",{className:d.a.disliked,onClick:o,children:Object(u.jsx)(i.b,{})})]})]})]})})},f=function(e){var t=Date.now()-new Date(e).getTime();switch(!0){case t>=1728e5:var s=Math.floor(t/864e5);return"".concat(s," days ago");case t>=36e5:var c=Math.floor(t/36e5);return"".concat(c," hours ago");case t>=6e4:var a=Math.floor(t/6e4);return"".concat(a," minutes ago");case t>=1e3:var n=Math.floor(t/1e3);return"".concat(n," seconds ago");default:return null}};t.a=function(e){var t=e.folowed,s=e.setLiked,c=e.setComented,l=e.coments,d=e.comented,j=e.description,m=e.title,_=e.time,O=e.likes,p=e.img_url,h=e.liked,x=e.userId;return Object(u.jsxs)("div",{className:a.a.post,children:[Object(u.jsx)("header",{className:a.a.header,children:Object(u.jsxs)("div",{className:a.a.wrapper,children:[Object(u.jsxs)("div",{className:a.a.left,children:[Object(u.jsx)("p",{children:m}),t?null:Object(u.jsx)("button",{className:a.a.folowed,children:"Follow"})]}),Object(u.jsxs)("div",{className:a.a.right,children:[Object(u.jsx)("p",{children:f(_)}),Object(u.jsx)("button",{className:a.a.headerButton,children:Object(u.jsx)(n.a,{})})]})]})}),Object(u.jsx)("div",{className:a.a.img,children:Object(u.jsx)("img",{className:a.a.img,src:p,alt:""})}),Object(u.jsxs)("footer",{children:[Object(u.jsx)("div",{className:a.a.wrapper,children:Object(u.jsx)("div",{className:a.a.description,children:j})}),Object(u.jsxs)("div",{className:a.a.setting,children:[Object(u.jsxs)("div",{className:a.a.footerLeft,children:[h?Object(u.jsx)("button",{className:a.a.likedButton,onClick:s,children:Object(u.jsx)(i.b,{size:20})}):Object(u.jsx)("button",{className:a.a.dislikedButton,onClick:s,children:Object(u.jsx)(i.b,{size:20})}),Object(u.jsx)("span",{className:h?a.a.likedNumber:a.a.dislikedNumber,children:O})]}),Object(u.jsxs)("div",{className:a.a.footerRight,children:[Object(u.jsx)("button",{className:a.a.share,children:Object(u.jsx)(r.b,{size:20})}),d?Object(u.jsx)("button",{className:a.a.chat,onClick:c,children:Object(u.jsx)(o.a,{size:27})}):Object(u.jsx)("button",{className:a.a.dischat,onClick:c,children:Object(u.jsx)(o.a,{size:27})})]})]})]}),Object(u.jsx)("div",{className:a.a.wrapper,children:d?Object(u.jsxs)("div",{className:a.a.postComents,children:[Object(u.jsxs)("h2",{children:["Comments ",Object(u.jsxs)("span",{children:["(",l.length,")"]})]}),Object(u.jsx)(b,{descr:"You pet very good \ud83e\udd70",userName:"vasya",time:"2d",liked:!0,likes:123,setLiked:function(){},logoUrl:"",id:x})]}):null})]})}},301:function(e,t,s){e.exports={posts:"Posts_posts__3wtlH",tabs:"Posts_tabs__1eq83"}},302:function(e,t,s){e.exports={JET:"#2f2f2f","YELLOW-ORANGE":"#f90","BABY-POWDER":"#f3f4f0",WHITE:"#fff",PALE_ORANGE:"#ffb94a",DARK_GRAY:"#818181",GRAY:"#bfbfbf",LIGHT_GRAY:"#d7d7d7",comment:"Coments_comment__-berG",wrapper:"Coments_wrapper__2Q_H2",liked:"Coments_liked__VJspo",disliked:"Coments_disliked__3ZcOx",name:"Coments_name__2zhri",descr:"Coments_descr__qrUV-",commentRight:"Coments_commentRight__3QaTU",settings:"Coments_settings__IUWw_",time:"Coments_time__2mevY",likes:"Coments_likes__LLI2l",settingsLeft:"Coments_settingsLeft__18Hpd"}},303:function(e,t,s){},304:function(e,t,s){e.exports={profiles:"ProfileList_profiles__1faD1",title:"ProfileList_title__32tHu",profileList:"ProfileList_profileList__3seTc"}},306:function(e,t,s){"use strict";var c=s(25),a=s(111),n=s(313),i=s.n(n),r=s(2),o=["id","onClickShow","children"];t.a=function(e){var t=e.id,s=e.onClickShow,n=e.children,l=Object(a.a)(e,o);return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:i.a.link,children:[Object(r.jsx)("input",Object(c.a)(Object(c.a)({},l),{},{id:t,className:i.a.input,accept:"image/png, image/jpeg, image/jpg"})),Object(r.jsx)("label",{htmlFor:t,className:i.a.item,onClick:s,children:n})]})})}},307:function(e,t,s){"use strict";var c=s(18),a=s(9),n=s(25),i=s(13),r=s(8),o=s(1),l=s(82),d=s(301),j=s.n(d),u=s(300),b=s(299),f=s(67);var m=s(294),_=s(295),O=s.n(_),p=s(2),h=function(){return Object(p.jsx)("div",{className:O.a.post,style:{minHeight:"150px",padding:"10px 20px "},children:Object(p.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(p.jsx)(m.a,{classes:["avatar","small"]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(m.a,{classes:["field"]}),Object(p.jsx)(m.a,{classes:["wide-field"]})]})]})})};t.a=function(e){var t=e.tabs,s=e.id,d=Object(o.useState)([]),m=Object(r.a)(d,2),_=m[0],O=m[1],x=Object(o.useState)(t[0].value),v=Object(r.a)(x,2),g=v[0],N=v[1],k=Object(o.useState)(0),R=Object(r.a)(k,2),L=R[0],A=R[1],P=Object(b.d)(),w=Object(r.a)(P,1)[0],B=Object(b.b)(),y=Object(r.a)(B,1)[0],E=function(){var e=Object(i.a)(Object(a.a)().mark((function e(t,s){var c,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!s){e.next=8;break}return e.next=4,y({post_id:t}).unwrap();case 4:c=e.sent,O((function(e){return e.map((function(e){return e.id===t?Object(n.a)(Object(n.a)({},e),{},{likes:c.likes,liked:!s}):e}))})),e.next=12;break;case 8:return e.next=10,w({post_id:t}).unwrap();case 10:i=e.sent,O((function(e){return e.map((function(e){return e.id===t?Object(n.a)(Object(n.a)({},e),{},{likes:i.likes,liked:!s}):e}))}));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error("Error liking the post:",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,s){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){O([]),A(0)}),[g]);var C=Object(b.c)({id:s,limit:"5",page:L,type:g}),G=C.data,I=C.isLoading,W=function(e){var t=Object(o.useRef)(null),s=Object(o.useState)(!1),c=Object(r.a)(s,2),a=c[0],n=c[1];return Object(o.useEffect)((function(){var s=new IntersectionObserver((function(e){return n(e[0].isIntersecting)})),c=t.current;return c&&!e&&s.observe(c),function(){c&&s.unobserve(c)}}),[t,e]),[t,a]}(I),Y=Object(r.a)(W,2),T=Y[0],H=Y[1];return Object(o.useEffect)((function(){_&&H&&A((function(e){return e+(null===G||void 0===G?void 0:G.length)}))}),[H,_,null===G||void 0===G?void 0:G.length]),Object(o.useEffect)((function(){G&&O((function(e){return[].concat(Object(c.a)(e),Object(c.a)(G))}))}),[G]),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:j.a.tabs,children:Object(p.jsx)("div",{style:{display:"flex"},children:t.map((function(e){return Object(p.jsx)(l.a,{name:e.name,text:e.text,value:e.value,selectedValue:g,onChange:N},e.value)}))})}),Object(p.jsx)("div",{className:j.a.posts,children:_&&_.map((function(e){return Object(p.jsx)(u.a,{id:e.id,comented:e.comented,coments:e.coments,description:e.description,folowed:e.folowed,img_url:Object(f.a)(e.img_url),liked:e.liked,likes:e.likes,title:e.title,time:e.time,userId:e.userId,setLiked:function(){return E(e.id,e.liked)}},e.id)}))}),I&&Object(c.a)(Array(4).keys()).map((function(e){return Object(p.jsx)(h,{},e)})),!I&&_&&Object(p.jsx)("div",{ref:T,children:"there aren`t any new posts for you"})]})}},308:function(e,t,s){"use strict";var c=s(18),a=s(304),n=s.n(a),i=s(296),r=s.n(i),o=s(305),l=s(68),d=s(67),j=s(2),u=function(e){var t=e.nickname,s=e.id,c=e.description,a=e.avatar_url;return Object(j.jsx)("div",{className:r.a.blog,children:Object(j.jsxs)("div",{className:r.a.blogWrapper,children:[Object(j.jsxs)("div",{className:r.a.left,children:[Object(j.jsx)(l.a,{width:45,height:45,url:Object(d.a)(a),userId:s}),Object(j.jsxs)("div",{className:r.a.text,children:[Object(j.jsx)("h3",{className:r.a.userName,children:t}),Object(j.jsx)("p",{className:r.a.desc,children:c})]})]}),Object(j.jsxs)("div",{className:r.a.right,children:[Object(j.jsx)(o.b,{className:r.a.close}),Object(j.jsx)("button",{className:r.a.button,children:"Follow"})]})]})})},b=s(294),f=function(){return Object(j.jsx)("div",{className:r.a.blog,children:Object(j.jsxs)("div",{style:{padding:"17px",display:"flex",backgroundColor:"#fff",alignItems:"center",borderRadius:"10px"},children:[Object(j.jsx)("div",{style:{marginRight:"10px"},children:Object(j.jsx)(b.a,{classes:["avatar","small"]})}),Object(j.jsx)(b.a,{classes:["field"]})]})})};t.a=function(e){var t=e.title,s=e.profiles,a=e.loading;return Object(j.jsxs)("div",{className:n.a.profileList,children:[Object(j.jsx)("div",{className:n.a.title,children:t}),Object(j.jsxs)("div",{className:n.a.profiles,children:[s&&s.map((function(e){return Object(j.jsx)(u,{description:e.description,nickname:e.nickname,id:e.id,avatar_url:e.avatar_url},e.id)})),a&&Object(c.a)(Array(3).keys()).map((function(e){return Object(j.jsx)(f,{},e)}))]})]})}},309:function(e,t,s){"use strict";var c=s(25),a=s(111),n=s(314),i=s.n(n),r=s(2),o=["children","visible"];t.a=function(e){var t=e.children,s=e.visible,n=Object(a.a)(e,o);return Object(r.jsx)("div",Object(c.a)(Object(c.a)({},n),{},{className:"".concat(i.a.ModalWrapper," ").concat(!s&&i.a.visible),children:t}))}},310:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var c=s(8),a=s(1),n=function(e){var t=Object(a.useState)(),s=Object(c.a)(t,2),n=s[0],i=s[1],r=Object(a.useMemo)((function(){return new FileReader}),[]);return Object(a.useEffect)((function(){var t=function(e){var t;i(null===(t=e.target)||void 0===t?void 0:t.result)};return e&&e instanceof File?(r.onload=t,r.readAsDataURL(e)):e&&i(e),function(){r.removeEventListener("load",t)}}),[e,r]),[n]}},313:function(e,t,s){e.exports={JET:"#2f2f2f","YELLOW-ORANGE":"#f90","BABY-POWDER":"#f3f4f0",WHITE:"#fff",PALE_ORANGE:"#ffb94a",DARK_GRAY:"#818181",GRAY:"#bfbfbf",LIGHT_GRAY:"#d7d7d7",input:"AddBlog_input__11B8Q",item:"AddBlog_item__2pQTg"}},314:function(e,t,s){e.exports={ModalWrapper:"modalWrapper_ModalWrapper__B2WlU",visible:"modalWrapper_visible__18Wsu"}},318:function(e,t,s){e.exports={JET:"#2f2f2f","YELLOW-ORANGE":"#f90","BABY-POWDER":"#f3f4f0",WHITE:"#fff",PALE_ORANGE:"#ffb94a",DARK_GRAY:"#818181",GRAY:"#bfbfbf",LIGHT_GRAY:"#d7d7d7",item:"AddBlogList_item__1RqzN",ml:"AddBlogList_ml__6o881",blogText:"AddBlogList_blogText__2kt-g",transitionText:"AddBlogList_transitionText__1YvmV",wrapper:"AddBlogList_wrapper__8sP9-",blockShow:"AddBlogList_blockShow__15lze",btn:"AddBlogList_btn__35R12",paperclip:"AddBlogList_paperclip__3eeER"}},319:function(e,t,s){e.exports={JET:"#2f2f2f","YELLOW-ORANGE":"#f90","BABY-POWDER":"#f3f4f0",WHITE:"#fff",PALE_ORANGE:"#ffb94a",DARK_GRAY:"#818181",GRAY:"#bfbfbf",LIGHT_GRAY:"#d7d7d7",wrapper:"CreatePost_wrapper__1CFp5",modal:"CreatePost_modal__OUj7G",photo:"CreatePost_photo__O6lnk",cross:"CreatePost_cross__sO_Hs",textarea:"CreatePost_textarea__11blh"}},322:function(e,t,s){e.exports={wrapper:"Home_wrapper__1hceg",blockAdd:"Home_blockAdd__2uv8P",mr:"Home_mr__XD5yH",title:"Home_title__KRgZ8",title2:"Home_title2__34aFe",right:"Home_right__29Z2u",left:"Home_left__1CgFa",recomendblog:"Home_recomendblog__31t33"}},334:function(e,t,s){"use strict";s.r(t);var c=s(8),a=s(1),n=s(306),i=s(318),r=s.n(i),o=s(71),l=s(321),d=s(9),j=s(13),u=s(309),b=s(49),f=s(319),m=s.n(f),_=s(297),O=s(320),p=s(305),h=s(15),x=s(112),v=s(69),g=s(310),N=s(299),k=s(2),R=function(e){var t=e.file,s=Object(v.a)((function(e){return e.modal})).IsPostModal,i=Object(a.useState)(),r=Object(c.a)(i,2),o=r[0],l=r[1],f=Object(a.useState)(t),R=Object(c.a)(f,2),L=R[0],A=R[1],P=Object(N.a)(),w=Object(c.a)(P,1)[0];Object(a.useEffect)((function(){A(t)}),[t]);var B=Object(g.a)(L),y=Object(c.a)(B,1)[0],E=Object(h.d)(),C=function(){var e=Object(j.a)(Object(d.a)().mark((function e(t){var s;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=new FormData,L&&s.append("post",L),s.append("title",o),s.append("description",t.currentTarget.elements.description.value),t.preventDefault(),e.next=7,w(s).then((function(){return E(Object(x.b)(!1))}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsx)(u.a,{visible:s,children:Object(k.jsx)("div",{className:m.a.wrapper,onClick:function(){return E(Object(x.b)(!1))},children:Object(k.jsxs)("form",{className:m.a.modal,onClick:function(e){return e.stopPropagation()},onSubmit:C,children:[Object(k.jsx)("div",{onClick:function(){return E(Object(x.b)(!1))},className:m.a.cross,style:{top:"20px",right:"20px",padding:"4px"},children:Object(k.jsx)(p.a,{})}),Object(k.jsxs)("div",{style:{position:"relative",height:"100%"},children:[Object(k.jsx)("div",{style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"},children:Object(k.jsx)("div",{children:"Create Post"})}),Object(k.jsx)(_.a,{style:{marginBottom:"10px",fontSize:"20px"},border:"BorderWhite",variant:"Black",placeholder:"title",value:o,onChange:function(e){return l(e.target.value)}}),Object(k.jsx)("div",{children:Object(k.jsx)("textarea",{className:m.a.textarea,placeholder:"description",name:"description",id:"description"})}),Object(k.jsx)("div",{className:m.a.photo,children:L?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("img",{src:null===y||void 0===y?void 0:y.toString(),alt:"oleg"}),Object(k.jsx)("div",{className:m.a.cross,onClick:function(){return A(null)},children:Object(k.jsx)(p.a,{})})]}):Object(k.jsx)(n.a,{type:"file",id:"postfile",onChange:function(e){return A(e.target.files[0])},children:Object(k.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(k.jsx)(O.a,{}),"add photo"]})})}),Object(k.jsx)(b.a,{disabled:!o,type:"submit",variant:o?"Orange":"Gray",style:{position:"absolute",width:"100%",bottom:"0px"},children:"post"})]})]})})})},L=function(){var e=Object(a.useState)(),t=Object(c.a)(e,2),s=t[0],i=t[1],d=Object(h.d)();return Object(k.jsxs)("div",{className:r.a.wrapper,children:[Object(k.jsxs)("div",{className:r.a.item,children:[Object(k.jsxs)(n.a,{id:"1",type:"file",onChange:function(e){return function(e){e.target.files&&(i(e.target.files[0]),d(Object(x.b)(!0)))}(e)},children:[Object(k.jsx)("h3",{children:"Photo"}),Object(k.jsx)(o.a,{})]}),Object(k.jsx)("div",{className:r.a.ml,children:Object(k.jsxs)(n.a,{id:"2",onClickShow:function(){return d(Object(x.b)(!0))},type:"text",children:[Object(k.jsx)("h3",{children:"Text"}),Object(k.jsx)(l.a,{})]})})]}),Object(k.jsx)(R,{file:s})]})},A=s(68),P=s(322),w=s.n(P),B=s(307),y=s(300),E=s(67),C=s(22),G=s(308);t.default=function(){var e=Object(v.a)((function(e){return e.auth.user})),t=e.avatar_url,s=e.id,c=Object(C.c)(s),a=c.data,n=c.isLoading;return Object(k.jsxs)("div",{className:w.a.wrapper,children:[Object(k.jsxs)("div",{className:w.a.left,children:[Object(k.jsxs)("div",{className:w.a.blockAdd,children:[Object(k.jsx)("div",{className:w.a.mr,children:Object(k.jsx)(A.a,{width:70,height:70,url:Object(E.a)(t),userId:s})}),Object(k.jsx)(L,{})]}),Object(k.jsx)(B.a,{tabs:[{text:"Following",name:"home",value:"following",onChange:function(){}},{text:"Popular",name:"home",value:"popular",onChange:function(){}},{text:"New",name:"home",value:"new",onChange:function(){}}],id:s})]}),Object(k.jsxs)("div",{className:w.a.right,children:[Object(k.jsx)(G.a,{title:"Check out this blogs",profiles:a,loading:n}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{className:w.a.title2,children:"Recomended for you"}),Object(k.jsx)("div",{className:w.a.blog,children:Object(k.jsx)(y.a,{id:5,title:"Hooray",description:"Description of post 4",likes:40,liked:!1,img_url:"https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?cs=srgb&dl=pexels-alex-andrews-2295744.jpg&fm=jpg",time:"2 hours ago",comented:!1,folowed:!1,coments:[],userId:3})})]})]})]})}}}]);
//# sourceMappingURL=5.95009791.chunk.js.map