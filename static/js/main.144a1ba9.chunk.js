(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{110:function(e,t,n){e.exports={searchProfile:"searchProfile_searchProfile__2bj6V",nickname:"searchProfile_nickname__2HSAE"}},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return d})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return f}));var a=n(4),c=n(22),i=Object(a.e)({name:"modal",initialState:{isEditModal:!1,isPhotoModal:!1,isNotifModal:!1,isCreatePostModal:!1,editModal:null,fotoModal:null,IsPostModal:!1},reducers:{showEditModal:function(e){e.isEditModal=!0},hideEditModal:function(e){e.isEditModal=!1},showNotifModal:function(e){e.isNotifModal=!0},hideNotifModal:function(e){e.isNotifModal=!1},showCreatePostModal:function(e){e.isCreatePostModal=!0},hideCreatePostModal:function(e){e.isCreatePostModal=!1},showPhotoModal:function(e){e.isPhotoModal=!0},hidePhotoModal:function(e){e.isPhotoModal=!1},updateprofile:function(e,t){e.editModal&&(t.payload.avatar&&(e.editModal.avatar=t.payload.avatar),t.payload.description&&(e.editModal.description=t.payload.description),t.payload.background&&(e.editModal.background=t.payload.background),t.payload.name&&(e.editModal.name=t.payload.name))},PhotoModal:function(e,t){e.IsPostModal=t.payload}},extraReducers:function(e){e.addMatcher(c.k.endpoints.refresh.matchFulfilled,(function(e,t){e.editModal={avatar:t.payload.avatar_url,background:t.payload.back_url,description:t.payload.description,name:t.payload.name}}))}}),r=i.actions,o=(r.hideCreatePostModal,r.hideEditModal),s=(r.hideNotifModal,r.showCreatePostModal,r.showEditModal),d=(r.showNotifModal,r.updateprofile),u=r.hidePhotoModal,l=r.showPhotoModal,f=r.PhotoModal},113:function(e,t,n){"use strict";t.a=n.p+"static/media/logo.899d2e1a.png"},170:function(e,t,n){e.exports={JET:"#2f2f2f","YELLOW-ORANGE":"#f90","BABY-POWDER":"#f3f4f0",WHITE:"#fff",PALE_ORANGE:"#ffb94a",DARK_GRAY:"#818181",GRAY:"#bfbfbf",LIGHT_GRAY:"#d7d7d7"}},182:function(e,t,n){},191:function(e,t){},196:function(e,t){},198:function(e,t){},209:function(e,t){},211:function(e,t){},22:function(e,t,n){"use strict";n.d(t,"k",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"j",(function(){return f})),n.d(t,"i",(function(){return j}));var a=n(38).a.enhanceEndpoints({addTagTypes:["user"]}).injectEndpoints({endpoints:function(e){return{signin:e.mutation({query:function(e){return{url:"signin",method:"POST",body:e}}}),signup:e.mutation({query:function(e){return{url:"/signup",method:"POST",body:e}}}),refresh:e.query({query:function(){return"/refresh"}}),getUser:e.query({query:function(e){return{url:"/getuser/".concat(e)}},providesTags:["user"]}),recomendUser:e.query({query:function(e){return{url:"/recomenduser/".concat(e)}}}),subscribe:e.mutation({query:function(e){return{url:"/subscribe",method:"POST",body:{id:e}}},invalidatesTags:["user"]}),unSubscribe:e.mutation({query:function(e){return{url:"/unsubscribe",method:"POST",body:{id:e}}},invalidatesTags:["user"]}),findUser:e.query({query:function(e){return"/search?query=".concat(e)}}),updateProfile:e.mutation({query:function(e){return{url:"/updateprofile",method:"PUT",body:e.body}},invalidatesTags:["user"]}),updatePhoto:e.mutation({query:function(e){return{url:"/setphoto",method:"PUT",body:e.body}},invalidatesTags:["user"]})}}}),c=a.useSigninMutation,i=a.useSignupMutation,r=a.useGetUserQuery,o=a.useRefreshQuery,s=a.useRecomendUserQuery,d=a.useSubscribeMutation,u=a.useUnSubscribeMutation,l=a.useFindUserQuery,f=a.useUpdateProfileMutation,j=a.useUpdatePhotoMutation},236:function(e,t){},238:function(e,t){},239:function(e,t){},244:function(e,t){},246:function(e,t){},252:function(e,t){},254:function(e,t){},273:function(e,t){},285:function(e,t){},288:function(e,t){},292:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var a,c=n(1),i=n(17),r=n(169),o=n.n(r),s=n(170),d=n.n(s),u=n(5),l=n(49),f=n(70),j=n(71),b=n(64),h=n(173),O=(n(182),n(69)),_=n(2),p=function(){var e=Object(O.a)((function(e){return e.auth.user})).id;return Object(_.jsxs)("div",{className:"LinksBar",children:[Object(_.jsx)(i.c,{to:"/",className:"link",children:Object(_.jsx)(l.a,{variant:"Icon",icon:Object(_.jsx)(f.c,{}),children:window.innerWidth<980?"":"Home"})}),Object(_.jsx)(i.c,{to:"/profile/".concat(e),className:"link",children:Object(_.jsx)(l.a,{variant:"Icon",icon:Object(_.jsx)(j.c,{}),children:window.innerWidth<980?"":"Profile"})}),Object(_.jsx)(i.c,{to:"/massages",className:"link",children:Object(_.jsx)(l.a,{variant:"Icon",icon:Object(_.jsx)(b.b,{}),children:window.innerWidth<980?"":"Masseges"})}),Object(_.jsx)(i.c,{to:"/explore",className:"link",children:Object(_.jsx)(l.a,{variant:"Icon",icon:Object(_.jsx)(b.a,{}),children:window.innerWidth<980?"":"Explore"})}),Object(_.jsx)(i.c,{to:"/settings",className:"link",children:Object(_.jsx)(l.a,{variant:"Icon",icon:Object(_.jsx)(h.a,{}),children:window.innerWidth<980?"":"Settings"})})]})},x=n(113),m=n(41),v=n.n(m),g=n(8),y=n(32),N=n.n(y),A=n(68),E=n(82),w=n(116),M=n(55),R=n.n(M),k=function(e){var t=e.show,n=Object(c.useState)(""),a=Object(g.a)(n,2),i=a[0],r=a[1],o=[];return Object(_.jsx)("div",{className:"".concat(R.a.modal," ").concat(t?R.a.active:""),children:Object(_.jsxs)("div",{className:R.a.wrapper,children:[Object(_.jsx)("div",{children:"Notifications"}),Object(_.jsxs)("div",{className:R.a.tabs,children:[Object(_.jsx)(E.a,{name:"not",text:"all",value:"all",onChange:r,selectedValue:i}),Object(_.jsx)(E.a,{name:"not",text:"Unread",value:"unread",onChange:r,selectedValue:i})]}),Object(_.jsx)("div",{className:R.a.massage,children:o.length?o.map((function(e){return Object(_.jsx)("div",{children:e})})):Object(_.jsxs)("div",{children:[Object(_.jsx)(w.a,{}),Object(_.jsx)("span",{children:"You have no notifications"})]})})]})})},P=n(67),B=function(){var e=Object(O.a)((function(e){return e.auth.user})),t=e.id,n=e.avatar_url;Object(c.useEffect)((function(){console.log(t,n)}),[t,n]);var a=Object(c.useState)(!1),i=Object(g.a)(a,2),r=i[0],o=i[1];return Object(_.jsxs)("nav",{className:N.a.nav,children:[Object(_.jsxs)("div",{className:N.a.links,children:[Object(_.jsx)("div",{className:N.a.linkBorder,children:Object(_.jsx)(b.b,{className:N.a.icon,size:20})}),Object(_.jsx)("div",{className:N.a.linkBorder,children:Object(_.jsx)(f.a,{className:N.a.icon,size:20,color:r?"orange":"black",onClick:function(){return o((function(e){return!e}))}})}),Object(_.jsx)("div",{className:N.a.avatar,children:Object(_.jsx)(A.a,{url:Object(P.a)(n),width:40,height:40,userId:t})})]}),Object(_.jsx)(k,{show:r})]})},L=n(25),G=n(174),I=n(42),T=n.n(I),S=function(e){var t=Object.assign({},(Object(G.a)(e),e)),n=Object(c.useState)(!0),a=Object(g.a)(n,2),i=a[0],r=a[1],o=Object(c.useState)(window.innerWidth),s=Object(g.a)(o,2),d=s[0],u=s[1];Object(c.useEffect)((function(){var e=function(){var e=window.innerWidth;u(e),r(!(e<=720))};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);return Object(_.jsxs)("div",{className:"".concat(T.a.inputBlock," ").concat(i?T.a.inputVisible:T.a.inputHidden),onClick:function(){console.log("wd"),d>720||r(!0)},children:[Object(_.jsx)("button",{className:T.a.button,children:Object(_.jsx)(j.d,{style:{color:"orange"},className:T.a.searchIcon})}),Object(_.jsx)("input",Object(L.a)({type:"text",className:T.a.input},t))]})},Y=n(22),W=n(110),H=n.n(W),q=function(e){var t=e.nickname,n=e.id,a=e.avatar_url;return Object(_.jsx)(i.b,{to:"/profile/".concat(n),children:Object(_.jsxs)("div",{className:H.a.searchProfile,children:[Object(_.jsx)(A.a,{userId:n,url:Object(P.a)(a),height:30,width:30}),Object(_.jsx)("div",{className:H.a.nickname,children:t})]})})},C=function(){var e=Object(c.useState)(""),t=Object(g.a)(e,2),n=t[0],a=t[1],i=Object(Y.a)(n),r=i.data,o=i.isLoading;return Object(_.jsxs)("div",{style:{position:"relative"},children:[Object(_.jsx)(S,{value:n,onChange:function(e){return a(e.target.value)},placeholder:"search"}),Object(_.jsx)("div",{style:{position:"absolute",backgroundColor:"#fff",width:"100%",borderRadius:"10px"},children:r&&r.map((function(e){var t=e.avatar_url,n=e.id,a=e.nickname;return Object(_.jsx)(q,{avatar_url:t,id:n,nickname:a},n)}))}),o&&Object(_.jsx)("h1",{children:"loading..."})]})},U=function(){return Object(_.jsx)("header",{className:v.a.background,children:Object(_.jsx)("div",{className:v.a.wrapper,children:Object(_.jsxs)("div",{className:v.a.header,children:[Object(_.jsx)(i.b,{to:"/",children:Object(_.jsx)("div",{className:v.a.logo,children:Object(_.jsx)("img",{src:x.a,className:v.a.logoSvg,alt:"logo",width:"150px",height:"50px"})})}),Object(_.jsx)("div",{children:Object(_.jsx)(C,{})}),Object(_.jsx)("div",{className:v.a.nav,children:Object(_.jsx)(B,{})})]})})})},D=n(33),J=n.n(D),V=function(){var e=Object(u.o)(),t=Object(Y.d)({}),n=t.isLoading,a=t.error,i=t.data;return Object(c.useEffect)((function(){a&&e("/signin")}),[a,e]),n?Object(_.jsx)("h1",{children:"Loading..."}):Object(_.jsx)(_.Fragment,{children:i&&Object(_.jsxs)("div",{className:J.a.layout,children:[Object(_.jsx)("div",{className:J.a.header,children:Object(_.jsx)(U,{})}),Object(_.jsx)("div",{className:J.a.container,children:Object(_.jsx)("div",{className:J.a.wrapper,children:Object(_.jsxs)("div",{className:J.a.main,children:[Object(_.jsx)("div",{children:Object(_.jsx)("div",{className:J.a.bar,children:Object(_.jsx)(p,{})})}),Object(_.jsx)("div",{className:J.a.outlet,children:Object(_.jsx)(u.a,{})})]})})})]})})},z=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,330))})),F=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(9),n.e(5)]).then(n.bind(null,334))})),K=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,333))})),Q=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,331))})),Z=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,332))})),X=function(){return Object(_.jsx)("div",{className:d.a.content,children:Object(_.jsxs)(u.d,{children:[Object(_.jsxs)(u.b,{path:"/",element:Object(_.jsx)(V,{}),children:[Object(_.jsx)(u.b,{index:!0,element:Object(_.jsx)(F,{})}),Object(_.jsx)(u.b,{path:"profile/:id",element:Object(_.jsx)(K,{})}),Object(_.jsx)(u.b,{path:"massages"}),Object(_.jsx)(u.b,{path:"explore",element:Object(_.jsx)(z,{})}),Object(_.jsx)(u.b,{path:"settings"})]}),Object(_.jsx)(u.b,{path:"/signin",element:Object(_.jsx)(Q,{})}),Object(_.jsx)(u.b,{path:"/signup",element:Object(_.jsx)(Z,{})})]})})},$=(n(292),n(4)),ee=n(38),te=n(11),ne=n(23),ae=Object($.e)({name:"auth",initialState:{access:!1,user:null},reducers:{},extraReducers:function(e){e.addMatcher(Y.k.endpoints.signin.matchFulfilled,(function(e,t){e.access=t.payload.access})),e.addMatcher(Y.k.endpoints.signin.matchRejected,(function(e){e.access=!1})),e.addMatcher(Y.k.endpoints.signup.matchFulfilled,(function(e,t){e.access=t.payload.access})),e.addMatcher(Y.k.endpoints.signup.matchRejected,(function(e){e.access=!1})),e.addMatcher(Y.k.endpoints.refresh.matchFulfilled,(function(e,t){e.user=t.payload}))}}).reducer,ce=n(112),ie=Object(ne.b)((a={auth:ae},Object(te.a)(a,ee.a.reducerPath,ee.a.reducer),Object(te.a)(a,"modal",ce.a.reducer),a)),re=Object($.b)({reducer:ie,middleware:function(e){return e().concat(ee.a.middleware)}}),oe=n(15);o.a.createRoot(document.getElementById("root")).render(Object(_.jsx)(c.Suspense,{children:Object(_.jsx)(i.a,{children:Object(_.jsx)(oe.a,{store:re,children:Object(_.jsx)(X,{})})})}))},32:function(e,t,n){e.exports={JET:"#2f2f2f","YELLOW-ORANGE":"#f90","BABY-POWDER":"#f3f4f0",WHITE:"#fff",PALE_ORANGE:"#ffb94a",DARK_GRAY:"#818181",GRAY:"#bfbfbf",LIGHT_GRAY:"#d7d7d7",nav:"Nav_nav__37QfO",avatar:"Nav_avatar__BIJsK",links:"Nav_links__3dQXt",icon:"Nav_icon__1qpAr",linkBorder:"Nav_linkBorder__16OFw",logo:"Nav_logo__1UrRj"}},33:function(e,t,n){e.exports={JET:"#2f2f2f","YELLOW-ORANGE":"#f90","BABY-POWDER":"#f3f4f0",WHITE:"#fff",PALE_ORANGE:"#ffb94a",DARK_GRAY:"#818181",GRAY:"#bfbfbf",LIGHT_GRAY:"#d7d7d7",container:"Layout_container__b1pFA",header:"Layout_header__2e4G2",wrapper:"Layout_wrapper__riAt2",main:"Layout_main__1LwCX",bar:"Layout_bar__3pZAA",outlet:"Layout_outlet__1SalS"}},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(175),c=n(19),i=(n(114),Object(a.a)({baseQuery:Object(c.d)({baseUrl:"http://localhost:5000",credentials:"include"}),endpoints:function(){return{}}}))},41:function(e,t,n){e.exports={background:"Header_background__3jbcy",wrapper:"Header_wrapper__3uV_N",header:"Header_header__3-9eA",logo:"Header_logo__18jt3",nav:"Header_nav__Tc9y7",arrow:"Header_arrow__2jhIZ"}},42:function(e,t,n){e.exports={JET:"#2f2f2f","YELLOW-ORANGE":"#f90","BABY-POWDER":"#f3f4f0",WHITE:"#fff",PALE_ORANGE:"#ffb94a",DARK_GRAY:"#818181",GRAY:"#bfbfbf",LIGHT_GRAY:"#d7d7d7",input:"InputSearch_input__2VE9K",button:"InputSearch_button__1eAmk",inputBlock:"InputSearch_inputBlock__318Kk",searchIcon:"InputSearch_searchIcon__2PMJI",inputHidden:"InputSearch_inputHidden__1z8Sd"}},49:function(e,t,n){"use strict";var a=n(25),c=n(111),i=n(53),r=n.n(i),o=n(2),s=["children","variant","icon"];t.a=function(e){var t=e.children,n=e.variant,i=e.icon,d=Object(c.a)(e,s);return i?Object(o.jsx)("button",Object(a.a)(Object(a.a)({},d),{},{className:"".concat(r.a.Button," ").concat(r.a[n]),children:Object(o.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(o.jsx)("div",{style:{marginRight:"10px",display:"flex",alignItems:"center"},className:r.a.icon,children:i}),Object(o.jsx)("div",{children:t})]})})):Object(o.jsx)("button",Object(a.a)(Object(a.a)({},d),{},{className:"".concat(r.a.Button," ").concat(r.a[n]),children:t}))}},53:function(e,t,n){e.exports={JET:"#2f2f2f","YELLOW-ORANGE":"#f90","BABY-POWDER":"#f3f4f0",WHITE:"#fff",PALE_ORANGE:"#ffb94a",DARK_GRAY:"#818181",GRAY:"#bfbfbf",LIGHT_GRAY:"#d7d7d7",Button:"Button_Button__2x6nV",Orange:"Button_Orange__7L3wB",Black:"Button_Black__3Sgat",BorderBlack:"Button_BorderBlack__1VuLI",BorderOrange:"Button_BorderOrange__3JC8Q",Gray:"Button_Gray__1fofO",Icon:"Button_Icon__ayPLp",WithoutBorder:"Button_WithoutBorder__16_Vr",icon:"Button_icon__gtM2B"}},54:function(e,t,n){e.exports={avatar:"Avatar_avatar__3skdR",show:"Avatar_show__27VD0",animate:"Avatar_animate__-AJSZ",hide:"Avatar_hide__3vbwc"}},55:function(e,t,n){e.exports={modal:"ModalNotifications_modal__QhmMq",wrapper:"ModalNotifications_wrapper__33Th3",active:"ModalNotifications_active__A5WRD",tabs:"ModalNotifications_tabs__3_p-O"}},66:function(e,t,n){e.exports={JET:"#2f2f2f","YELLOW-ORANGE":"#f90","BABY-POWDER":"#f3f4f0",WHITE:"#fff",PALE_ORANGE:"#ffb94a",DARK_GRAY:"#818181",GRAY:"#bfbfbf",LIGHT_GRAY:"#d7d7d7",tab:"Tab_tab__2lg_A",radio:"Tab_radio__3xBWa",text:"Tab_text__13t3c",line:"Tab_line__3hFuU"}},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(114);function a(e){return"http://localhost:5000/"+e}},68:function(e,t,n){"use strict";var a=n(8),c=n(1),i=n(54),r=n.n(i),o=n(17),s=n(2),d=function(e){var t=e.height,n=e.width,a=e.loading;return Object(s.jsx)("div",{style:{width:n,height:t},className:"".concat(r.a.avatar," ").concat(a?r.a.show:r.a.hide)})},u=n.p+"static/media/user-avatar.b7be40cc.png";t.a=function(e){var t=e.width,n=e.height,i=e.url,l=e.userId,f=Object(c.useState)(!0),j=Object(a.a)(f,2),b=j[0],h=j[1];return Object(s.jsxs)(o.b,{to:"/profile/".concat(l),children:[Object(s.jsx)(d,{height:n,width:t,loading:b}),Object(s.jsx)("img",{src:i,style:{display:b?"none":"block"},className:r.a.avatar,width:t,height:n,alt:"",onLoad:function(){h(!1)},onError:function(e){e.currentTarget.src=u,h(!1)}})]})}},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=n(15).e},82:function(e,t,n){"use strict";var a=n(66),c=n.n(a),i=n(2);t.a=function(e){var t=e.text,n=e.name,a=e.value,r=e.onChange,o=e.selectedValue;return Object(i.jsxs)("label",{className:c.a.tab,children:[Object(i.jsx)("input",{checked:o===a,type:"radio",className:c.a.radio,name:n,value:a,onChange:function(e){return r(e.target.value)}}),Object(i.jsx)("div",{className:c.a.text,children:t}),Object(i.jsx)("span",{className:c.a.line})]})}}},[[293,2,3]]]);
//# sourceMappingURL=main.144a1ba9.chunk.js.map