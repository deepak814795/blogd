(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{114:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var a,c,r,i,o,s,j,u,l=n(0),b=n.n(l),d=n(39),p=n.n(d),h=(n(114),n(7)),O=n(99),x=n(196),f=n(15),m=n(20),g=n(1),v=Object(l.createContext)(null),y=function(e){var t=e.children,n=Object(l.useState)({name:"",username:""}),a=Object(h.a)(n,2),c=a[0],r=a[1];return Object(g.jsx)(v.Provider,{value:{account:c,setAccount:r},children:t})},w=n(16),k=n.n(w),S=n(19),E=n(11),C=n(5),P=n(193),T=n(195),F=Object(C.a)(P.a)(a||(a=Object(E.a)(["\n    background: #FFFFFF;\n    color: black;\n"]))),A=Object(C.a)(T.a)(c||(c=Object(E.a)(["\n    justify-content: center;\n    & > a {\n        padding: 20px;\n        color: #000;\n        text-decoration: none;\n    }\n"]))),D=function(){Object(f.h)();return Object(g.jsx)(F,{children:Object(g.jsxs)(A,{children:[Object(g.jsx)(m.b,{to:"/",children:"HOME"}),Object(g.jsx)(m.b,{to:"/about",children:"ABOUT"}),Object(g.jsx)(m.b,{to:"/contact",children:"CONTACT"}),Object(g.jsx)(m.b,{to:"/account",children:"LOGOUT"})]})})},z=n(192),I=n(197),_=n.p+"static/media/blogbg.785b9a1f.jpg",R=Object(C.a)(x.a)(r||(r=Object(E.a)(["\n    width: 100%;\n    background: hero;\n    height: 50vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    \n"]))),L=Object(C.a)(I.a)(i||(i=Object(E.a)(["\n\n    font-size: 70px;\n    color: black;\n    line-height: 1;\n    font-family: Georgia, serif;\n\n    \n"]))),q=Object(C.a)(I.a)(o||(o=Object(E.a)(["\n    font-size: 30px;\n    background: black;\n    color: #fff;\n    font-family: Georgia, serif;\n"]))),B=function(){return Object(g.jsxs)(R,{style:{backgroundImage:"url(".concat(_,")")},children:[Object(g.jsx)(L,{children:"BLOGGER"}),Object(g.jsx)(q,{children:"What's Your Story ?"})]})},N=n(198),G=n(190),M=n(199),U=n(200),Y=n(201),J=n(202),W=[{id:1,type:"Algorithms"},{id:2,type:"Artificial_Intelligence"},{id:3,type:"Development"},{id:4,type:"Data_Structures"},{id:5,type:"Designing"},{id:6,type:"Fashion"},{id:7,type:"Gaming"},{id:8,type:"Geography"},{id:9,type:"Geo_Politics"},{id:10,type:"Machine_Learning"},{id:11,type:"Movies"},{id:12,type:"Music"},{id:13,type:"Sports"},{id:14,type:"Social"},{id:15,type:"Technology"},{id:16,type:"Zoology"}],H=Object(C.a)(N.a)(s||(s=Object(E.a)(["\n    border: 1px solid rgba(224, 224, 224, 1);\n"]))),K=Object(C.a)(G.a)(j||(j=Object(E.a)(["\n    margin: 20px;\n    width: 85%;\n    background: #6495ED;\n    color: #fff;\n    text-decoration: none;\n"]))),Z=Object(C.a)(m.b)(u||(u=Object(E.a)(["\n    text-decoration: none;\n    color: inherit;\n    font-weight:1000;\n    font-size:15px;\n"]))),Q=function(){var e=Object(m.c)(),t=Object(h.a)(e,1)[0].get("category");return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(m.b,{to:"/create?category=".concat(t||""),style:{textDecoration:"none"},children:Object(g.jsx)(K,{variant:"contained",children:"Create Blog"})}),Object(g.jsxs)(H,{children:[Object(g.jsx)(M.a,{children:Object(g.jsx)(U.a,{children:Object(g.jsx)(Y.a,{children:Object(g.jsx)(Z,{to:"/",children:"All Categories"})})})}),Object(g.jsx)(J.a,{children:W.map((function(e){return Object(g.jsx)(U.a,{children:Object(g.jsx)(Y.a,{children:Object(g.jsx)(Z,{to:"/?category=".concat(e.type),children:e.type})})},e.id)}))})]})]})},V=n(96),X={loading:{title:"Loading...",message:"Data is being loaded. Please wait"},success:{title:"Success",message:"Data successfully loaded"},requestFailure:{title:"Error!",message:"An error occur while parsing request data"},responseFailure:{title:"Error!",message:"An error occur while fetching response from server. Please try again"},networkError:{title:"Error!",message:"Unable to connect to the server. Please check internet connectivity and try again."}},$=function(e,t){return e.params?{params:t}:e.query?"object"===typeof t?{query:t._id}:{query:t}:{}},ee=n.n(V).a.create({baseURL:"https://kfjn.onrender.com/",timeout:1e4,headers:{"content-type":"application/json"}});ee.interceptors.request.use((function(e){return e.TYPE.params?e.params=e.TYPE.params:e.TYPE.query&&(e.url=e.url+"/"+e.TYPE.query),e}),(function(e){return Promise.reject(e)})),ee.interceptors.response.use((function(e){return te(e)}),(function(e){return Promise.reject(ne(e))}));for(var te=function(e){return 200===(null===e||void 0===e?void 0:e.status)?{isSuccess:!0,data:e.data}:{isFailure:!0,status:null===e||void 0===e?void 0:e.status,msg:null===e||void 0===e?void 0:e.msg,code:null===e||void 0===e?void 0:e.code}},ne=function(){var e=Object(S.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.response){e.next=9;break}if(403!==(null===(n=t.response)||void 0===n?void 0:n.status)){e.next=5;break}sessionStorage.clear(),e.next=7;break;case 5:return console.log("ERROR IN RESPONSE: ",t.toJSON()),e.abrupt("return",{isError:!0,msg:X.responseFailure,code:t.response.status});case 7:e.next=16;break;case 9:if(!t.request){e.next=14;break}return console.log("ERROR IN RESPONSE: ",t.toJSON()),e.abrupt("return",{isError:!0,msg:X.requestFailure,code:""});case 14:return console.log("ERROR IN RESPONSE: ",t.toJSON()),e.abrupt("return",{isError:!0,msg:X.networkError,code:""});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae={},ce=function(){var e=Object(h.a)(ie[re],2),t=e[0],n=e[1];ae[t]=function(e,t,a){return ee({method:n.method,url:n.url,data:"DELETE"===n.method?"":e,responseType:n.responseType,headers:{authorization:sessionStorage.getItem("accessToken")},TYPE:$(n,e),onUploadProgress:function(e){if(t){var n=Math.round(100*e.loaded/e.total);t(n)}},onDownloadProgress:function(e){if(a){var t=Math.round(100*e.loaded/e.total);a(t)}}})}},re=0,ie=Object.entries({userLogin:{url:"/login",method:"POST"},userSignup:{url:"/signup",method:"POST"},getAllPosts:{url:"/posts",method:"GET",params:!0},getRefreshToken:{url:"/token",method:"POST"},uploadFile:{url:"file/upload",method:"POST"},createPost:{url:"create",method:"POST"},deletePost:{url:"delete",method:"DELETE",query:!0},getPostById:{url:"post",method:"GET",query:!0},newComment:{url:"/comment/new",method:"POST"},getAllComments:{url:"comments",method:"GET",query:!0},deleteComment:{url:"comment/delete",method:"DELETE",query:!0},updatePost:{url:"update",method:"PUT",query:!0}});re<ie.length;re++)ce();var oe,se,je,ue,le,be,de,pe,he,Oe,xe,fe,me,ge,ve,ye,we,ke,Se,Ee,Ce,Pe,Te,Fe,Ae,De,ze,Ie,_e,Re,Le,qe,Be=n.p+"static/media/blog2.06844e57.jpg",Ne=Object(C.a)(x.a)(oe||(oe=Object(E.a)(["\n    border: 1px solid #d3cede;\n    border-radius: 25px;\n    margin: 10px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    background: #071330;    \n    color: #fff;\n    height: 350px;\n    & > img, & > p {\n        padding: 0 5px 5px 5px;\n    }\n"]))),Ge=Object(C.a)("img")({width:"100%",objectFit:"cover",borderRadius:"10px 10px 0 0",height:200}),Me=Object(C.a)(I.a)(se||(se=Object(E.a)(["\n    color: #878787\n    font-size: 15px;\n"]))),Ue=Object(C.a)(I.a)(je||(je=Object(E.a)(["\n    font-size: 22px;\n    font-weight: 600\n"]))),Ye=Object(C.a)(I.a)(ue||(ue=Object(E.a)(["\n    font-size: 14px;\n    word-break: break-word;\n"]))),Je=function(e){var t=e.post,n=t.picture?t.picture:Be,a=function(e,t){return e.length>t?e.substring(0,t)+"...":e};return Object(g.jsxs)(Ne,{children:[Object(g.jsx)(Ge,{src:n,alt:"post"}),Object(g.jsx)(Me,{children:t.categories}),Object(g.jsx)(Ue,{children:a(t.title,20)}),Object(g.jsxs)(Me,{children:["Author: ",t.username]}),Object(g.jsx)(Ye,{children:a(t.description,100)})]})},We=function(){var e=Object(l.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(m.c)(),r=Object(h.a)(c,1)[0].get("category");return Object(l.useEffect)((function(){(function(){var e=Object(S.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.getAllPosts({category:r||""});case 2:(t=e.sent).isSuccess&&a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(g.jsx)(g.Fragment,{children:(null===n||void 0===n?void 0:n.length)?n.map((function(e){return Object(g.jsx)(z.a,{item:!0,lg:3,sm:4,xs:12,children:Object(g.jsx)(m.b,{style:{textDecoration:"none",color:"inherit"},to:"details/".concat(e._id),children:Object(g.jsx)(Je,{post:e})})})})):Object(g.jsx)(x.a,{style:{color:"878787",margin:"30px 80px",fontSize:18},children:"No data is available for selected category"})})},He=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(B,{}),Object(g.jsxs)(z.a,{container:!0,children:[Object(g.jsx)(z.a,{item:!0,lg:2,xs:12,sm:2,children:Object(g.jsx)(Q,{})}),Object(g.jsx)(z.a,{container:!0,item:!0,xs:12,sm:10,lg:10,children:Object(g.jsx)(We,{})})]})]})},Ke=n(29),Ze=n(4),Qe=n.p+"static/media/blogg1.3c33540d.jpg",Ve=n(203),Xe=n(24),$e=n(180),et=n(181),tt=Object(C.a)(x.a)((function(e){var t=e.theme;return Object(Ze.a)({margin:"50px 100px"},t.breakpoints.down("md"),{margin:0})})),nt=Object(C.a)("img")({width:"100%",height:"50vh",objectFit:"cover"}),at=Object(C.a)(Ve.a)(le||(le=Object(E.a)(["\n    margin-top: 10px;\n    display: flex;\n    flex-direction: row;\n"]))),ct=Object(C.a)(Xe.c)(be||(be=Object(E.a)(["\n    flex: 1;\n    margin: 0 30px;\n    font-size: 25px;\n"]))),rt=Object(C.a)($e.a)(de||(de=Object(E.a)(["\n    width: 100%;\n    border: none;\n    margin-top: 50px;\n    font-size: 18px;\n    &:focus-visible {\n        outline: none;\n    }\n"]))),it={title:"",description:"",picture:"",username:"",categories:"",createdDate:new Date},ot=function(){var e=Object(f.h)(),t=Object(f.g)(),n=Object(l.useState)(it),a=Object(h.a)(n,2),c=a[0],r=a[1],i=Object(l.useState)(""),o=Object(h.a)(i,2),s=o[0],j=o[1],u=Object(l.useContext)(v).account,b=c.picture?c.picture:Qe;Object(l.useEffect)((function(){var e;(function(){var e=Object(S.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=8;break}return(t=new FormData).append("name",s.name),t.append("file",s),e.next=6,ae.uploadFile(t);case 6:n=e.sent,c.picture=n.data;case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),c.categories=(null===(e=t.search)||void 0===e?void 0:e.split("=")[1])||"All",c.username=u.username}),[s]);var d=function(){var t=Object(S.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ae.createPost(c);case 2:e("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(e){r(Object(Ke.a)(Object(Ke.a)({},c),{},Object(Ze.a)({},e.target.name,e.target.value)))};return Object(g.jsxs)(tt,{children:[Object(g.jsx)(nt,{src:b,alt:"post"}),Object(g.jsxs)(at,{children:[Object(g.jsx)("label",{htmlFor:"fileInput",children:Object(g.jsx)(et.a,{fontSize:"large",color:"action"})}),Object(g.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return j(e.target.files[0])}}),Object(g.jsx)(ct,{onChange:function(e){return p(e)},name:"title",placeholder:"Title"}),Object(g.jsx)(G.a,{onClick:function(){return d()},variant:"contained",color:"primary",children:"Publish"})]}),Object(g.jsx)(rt,{rowsMin:5,placeholder:"Tell your story...",name:"description",onChange:function(e){return p(e)}})]})},st=n.p+"static/media/blogg1.3c33540d.jpg",jt=n(183),ut=n(182),lt=Object(C.a)(x.a)(pe||(pe=Object(E.a)(["\n    margin-top: 30px;\n    background: #BDB5C0;\n    padding: 10px;\n"]))),bt=Object(C.a)(x.a)(he||(he=Object(E.a)(["\n    display: flex;\n    margin-bottom: 5px;\n"]))),dt=Object(C.a)(I.a)(Oe||(Oe=Object(E.a)(["\n    font-weight: 600,\n    font-size: 18px;\n    margin-right: 20px;\n"]))),pt=Object(C.a)(I.a)(xe||(xe=Object(E.a)(["\n    font-size: 14px;\n    color: black;\n"]))),ht=Object(C.a)(ut.a)(fe||(fe=Object(E.a)(["\n    margin-left: auto;\n"]))),Ot=function(e){var t=e.comment,n=e.setToggle,a=Object(l.useContext)(v).account,c=function(){var e=Object(S.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.deleteComment(t._id);case 2:e.sent.isSuccess&&n((function(e){return!e}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(lt,{children:[Object(g.jsxs)(bt,{children:[Object(g.jsx)(dt,{children:t.name}),Object(g.jsx)(pt,{children:new Date(t.date).toDateString()}),t.name===a.username&&Object(g.jsx)(ht,{onClick:function(){return c()}})]}),Object(g.jsx)(I.a,{children:t.comments})]})},xt=Object(C.a)(x.a)(me||(me=Object(E.a)(["\n    margin-top: 100px;\n    display: flex;\n"]))),ft=Object(C.a)("img")({width:50,height:50,borderRadius:"50%"}),mt=Object(C.a)($e.a)(ge||(ge=Object(E.a)(["\n    height: 100px !important;\n    width: 100%; \n    margin: 0 20px;\n"]))),gt={name:"",postId:"",date:new Date,comments:""},vt=function(e){var t=e.post,n=Object(l.useState)(gt),a=Object(h.a)(n,2),c=a[0],r=a[1],i=Object(l.useState)([]),o=Object(h.a)(i,2),s=o[0],j=o[1],u=Object(l.useState)(!1),b=Object(h.a)(u,2),d=b[0],p=b[1],O=Object(l.useContext)(v).account;Object(l.useEffect)((function(){(function(){var e=Object(S.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.getAllComments(t._id);case 2:(n=e.sent).isSuccess&&j(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[d,t]);var f=function(){var e=Object(S.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.newComment(c);case 2:r(gt),p((function(e){return!e}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(x.a,{children:[Object(g.jsxs)(xt,{children:[Object(g.jsx)(ft,{src:"https://static.thenounproject.com/png/12017-200.png",alt:"dp"}),Object(g.jsx)(mt,{rowsMin:5,placeholder:"what's on your mind?",onChange:function(e){return function(e){r(Object(Ke.a)(Object(Ke.a)({},c),{},{name:O.username,postId:t._id,comments:e.target.value}))}(e)},value:c.comments}),Object(g.jsx)(G.a,{variant:"contained",color:"primary",size:"medium",style:{height:40},onClick:function(e){return f(e)},children:"Post"})]}),Object(g.jsx)(x.a,{children:s&&s.length>0&&s.map((function(e){return Object(g.jsx)(Ot,{comment:e,setToggle:p})}))})]})},yt=Object(C.a)(x.a)((function(e){var t=e.theme;return Object(Ze.a)({background:"black",margin:"50px 100px"},t.breakpoints.down("md"),{margin:0})})),wt=Object(C.a)("img")({width:"100%",height:"65vh",borderRadius:"35px",objectFit:"cover"}),kt=Object(C.a)(jt.a)(ve||(ve=Object(E.a)(["\n    margin: 5px;\n    padding: 5px;\n    border: 1px solid #878787;\n    border-radius: 10px;\n"]))),St=Object(C.a)(ut.a)(ye||(ye=Object(E.a)(["\n    margin: 5px;\n    padding: 5px;\n    border: 1px solid #878787;\n    border-radius: 10px;\n"]))),Et=Object(C.a)(I.a)(we||(we=Object(E.a)(["\n    color:#fff;\n    font-size: 38px;\n    font-weight: 600;\n    text-align: center;\n    margin: 50px 0 10px 0;\n"]))),Ct=Object(C.a)(x.a)((function(e){var t=e.theme;return Object(Ze.a)({color:"#00FF00",display:"flex",margin:"20px 0"},t.breakpoints.down("sm"),{display:"block"})})),Pt=function(){var e=Object(l.useState)({}),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(f.i)().id,r=n.picture?n.picture:st,i=Object(l.useContext)(v).account,o=Object(f.h)();Object(l.useEffect)((function(){(function(){var e=Object(S.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.getPostById(c);case 2:(t=e.sent).isSuccess&&a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var s=function(){var e=Object(S.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.deletePost(n._id);case 2:o("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)(yt,{children:[Object(g.jsx)(wt,{src:n.picture||r,alt:"post"}),Object(g.jsx)(x.a,{style:{float:"right"},children:i.username===n.username&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(m.b,{to:"/update/".concat(n._id),children:Object(g.jsx)(kt,{color:"primary"})}),Object(g.jsx)(St,{onClick:function(){return s()},color:"error"})]})}),Object(g.jsx)(Et,{children:n.title}),Object(g.jsxs)(Ct,{children:[Object(g.jsx)(m.b,{to:"/?username=".concat(n.username),style:{textDecoration:"none",color:"inherit"},children:Object(g.jsxs)(I.a,{children:["Author: ",Object(g.jsx)("span",{style:{fontWeight:600},children:n.username})]})}),Object(g.jsx)(I.a,{style:{marginLeft:"auto"},children:new Date(n.createdDate).toDateString()})]}),Object(g.jsx)(I.a,{color:"white",children:n.description}),Object(g.jsx)(vt,{post:n})]})},Tt=Object(C.a)(x.a)((function(e){var t=e.theme;return Object(Ze.a)({margin:"50px 100px"},t.breakpoints.down("md"),{margin:0})})),Ft=Object(C.a)("img")({width:"100%",height:"50vh",objectFit:"cover"}),At=Object(C.a)(Ve.a)(ke||(ke=Object(E.a)(["\n    margin-top: 10px;\n    display: flex;\n    flex-direction: row;\n"]))),Dt=Object(C.a)(Xe.c)(Se||(Se=Object(E.a)(["\n    flex: 1;\n    margin: 0 30px;\n    font-size: 25px;\n"]))),zt=Object(C.a)($e.a)(Ee||(Ee=Object(E.a)(["\n    width: 100%;\n    border: none;\n    margin-top: 50px;\n    font-size: 18px;\n    &:focus-visible {\n        outline: none;\n    }\n"]))),It={title:"",description:"",picture:"",username:"codeforinterview",categories:"Tech",createdDate:new Date},_t=function(){var e=Object(f.h)(),t=Object(l.useState)(It),n=Object(h.a)(t,2),a=n[0],c=n[1],r=Object(l.useState)(""),i=Object(h.a)(r,2),o=i[0],s=i[1],j=Object(l.useState)(""),u=Object(h.a)(j,2),b=(u[0],u[1]),d=Object(f.i)().id,p=a.picture?a.picture:Qe;Object(l.useEffect)((function(){(function(){var e=Object(S.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.getPostById(d);case 2:(t=e.sent).isSuccess&&c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.useEffect)((function(){(function(){var e=Object(S.a)(k.a.mark((function e(){var t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=8;break}return(t=new FormData).append("name",o.name),t.append("file",o),e.next=6,ae.uploadFile(t);case 6:(n=e.sent).isSuccess&&(a.picture=n.data,b(n.data));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]);var O=function(){var t=Object(S.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ae.updatePost(a);case 2:e("/details/".concat(d));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(e){c(Object(Ke.a)(Object(Ke.a)({},a),{},Object(Ze.a)({},e.target.name,e.target.value)))};return Object(g.jsxs)(Tt,{children:[Object(g.jsx)(Ft,{src:a.picture||p,alt:"post"}),Object(g.jsxs)(At,{children:[Object(g.jsx)("label",{htmlFor:"fileInput",children:Object(g.jsx)(et.a,{fontSize:"large",color:"action"})}),Object(g.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return s(e.target.files[0])}}),Object(g.jsx)(Dt,{onChange:function(e){return x(e)},value:a.title,name:"title",placeholder:"Title"}),Object(g.jsx)(G.a,{onClick:function(){return O()},variant:"contained",color:"primary",children:"Update"})]}),Object(g.jsx)(zt,{rowsMin:5,placeholder:"Tell your story...",name:"description",onChange:function(e){return x(e)},value:a.description})]})},Rt=n(204),Lt=n(184),qt=n(185),Bt=n(186),Nt=n(62),Gt=n.n(Nt),Mt=n(63),Ut=n.n(Mt),Yt=Object(C.a)(x.a)(Ce||(Ce=Object(E.a)(["\n    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);\n    width: 100%;\n    height: 50vh;\n    background-position: left 0px bottom 0px;\n    background-size: cover;\n"]))),Jt=Object(C.a)(x.a)(Pe||(Pe=Object(E.a)(["\n    height: 46vh;  \n    padding: 20px;\n    & > h3, & > h5 {\n        margin-top: 50px;\n    }\n"]))),Wt=Object(C.a)(I.a)(Te||(Te=Object(E.a)(["\n    color: #fff;\n"]))),Ht=function(){return Object(g.jsx)("div",{style:{backgroundColor:"black"},children:Object(g.jsxs)(x.a,{children:[Object(g.jsx)(Yt,{}),Object(g.jsxs)(Jt,{children:[Object(g.jsx)(I.a,{variant:"h3",color:"whitesmoke",children:"My name is Deepak Kushwaha"}),Object(g.jsxs)(Wt,{variant:"h5",children:["I'm a Software Engineer based in India. I've built websites and web applications.",Object(g.jsx)("br",{}),"If you are interested, you can view some of my favorite projects here \xa0 \xa0",Object(g.jsx)(x.a,{component:"span",style:{marginLeft:5},children:Object(g.jsx)(Rt.a,{href:"https://github.com/deepak814795",color:"inherit",target:"_blank",children:Object(g.jsx)(Lt.a,{})})})]}),Object(g.jsxs)(Wt,{variant:"h5",children:["Need something built or simply want to have chat? Reach out to me on \xa0 \xa0",Object(g.jsx)(x.a,{component:"span",style:{marginLeft:5},children:Object(g.jsx)(Rt.a,{href:"https://www.instagram.com/__dk.20/",color:"inherit",target:"_blank",children:Object(g.jsx)(qt.a,{})})}),"\xa0 or send me an Email \xa0 \xa0",Object(g.jsx)(Rt.a,{href:"mailto:deepkush40@gmail.com?Subject=This is a subject",target:"_blank",color:"inherit",children:Object(g.jsx)(Bt.a,{})}),".",Object(g.jsx)("br",{})," Check out my amazing Portfolio here  \xa0 \xa0",Object(g.jsx)(Rt.a,{href:"https://6478f2ff932d5802d348cbd1--strong-dodol-20f52f.netlify.app/",color:"inherit",target:"_blank",children:Object(g.jsx)(Gt.a,{})}),Object(g.jsx)("br",{}),Object(g.jsxs)("p",{style:{color:"#04D010",fontSize:"40px"},children:["Wanna hire me!!! Connect with me on Linkedin  \xa0 \xa0",Object(g.jsx)(Rt.a,{href:"https://www.linkedin.com/in/deepakkushwaha-893464152/",color:"inherit",target:"_blank",children:Object(g.jsx)(Ut.a,{})})," "]})]})]})]})})},Kt=Object(C.a)(x.a)(Fe||(Fe=Object(E.a)(["\n    background-image: url(http://mrtaba.ir/image/bg2.jpg);\n    width: 100%;\n    height: 50vh;\n    background-position: left 0px top -100px;\n    background-size: cover;\n"]))),Zt=Object(C.a)(x.a)(Ae||(Ae=Object(E.a)(["\n    height: 47vh;\n    padding: 20px;\n    & > h3, & > h5 {\n        margin-top: 50px;\n    }\n"]))),Qt=Object(C.a)(I.a)(De||(De=Object(E.a)(["\n    color: #fff;\n"]))),Vt=function(){return Object(g.jsx)("div",{style:{backgroundColor:"black"},children:Object(g.jsxs)(x.a,{children:[Object(g.jsx)(Kt,{}),Object(g.jsxs)(Zt,{children:[Object(g.jsx)(I.a,{variant:"h3",children:"Getting in touch is easy!"}),Object(g.jsxs)(Qt,{variant:"h5",children:["Reach out to me on  \xa0 \xa0",Object(g.jsx)(Rt.a,{href:"https://www.instagram.com/__dk.20/",color:"inherit",target:"_blank",children:Object(g.jsx)(qt.a,{})}),"\xa0 \xa0 or send me an Email  \xa0 \xa0",Object(g.jsx)(Rt.a,{href:"mailto:deepkush40@gmail.com?Subject=This is a subject",target:"_blank",color:"inherit",children:Object(g.jsx)(Bt.a,{})}),".",Object(g.jsx)("br",{})," Phone  \xa0 \xa0+91 8917756429",Object(g.jsx)("br",{})," Check out my amazing Portfolio here  \xa0 \xa0",Object(g.jsx)(Rt.a,{href:"https://6478f2ff932d5802d348cbd1--strong-dodol-20f52f.netlify.app/",color:"inherit",target:"_blank",children:Object(g.jsx)(Gt.a,{})}),Object(g.jsx)("br",{}),Object(g.jsxs)("p",{style:{color:"#04D010",fontSize:"40px"},children:["Wanna hire me!!! Connect with me on Linkedin  \xa0 \xa0",Object(g.jsx)(Rt.a,{href:"https://www.linkedin.com/in/deepakkushwaha-893464152/",color:"inherit",target:"_blank",children:Object(g.jsx)(Ut.a,{})})," "]})]})]})]})})},Xt=n.p+"static/media/blog-logo.99d91a46.png",$t=n(189),en=n.p+"static/media/blog1.dde6e0c3.jpg",tn=Object(C.a)(x.a)(ze||(ze=Object(E.a)(["\n    margin-top:0px;\n    width: 400px;\n    margin: auto;\n    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);\n    background: #FEFBEA;\n    height: 60vh;\n"]))),nn=Object(C.a)("img")({width:100,display:"flex",margin:"auto",padding:"50px 0 0"}),an=Object(C.a)(x.a)(Ie||(Ie=Object(E.a)(["\n    padding: 25px 35px;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    & > div, & > button, & > p {\n        margin-top: 20px;\n    }\n"]))),cn=Object(C.a)(G.a)(_e||(_e=Object(E.a)(["\n    text-transform: none;\n    background: blue;\n    color: #fff;\n    height: 48px;\n    border-radius: 2px;\n"]))),rn=Object(C.a)(G.a)(Re||(Re=Object(E.a)(["\n    text-transform: none;\n    background: white;\n    color: #2874f0;\n    height: 48px;\n    border-radius: 2px;\n    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);\n"]))),on=Object(C.a)(I.a)(Le||(Le=Object(E.a)(["\n    color: #878787;\n    font-size: 12px;\n"]))),sn=Object(C.a)(I.a)(qe||(qe=Object(E.a)(["\n    font-size: 10px;\n    color: #ff6161;\n    line-height: 0;\n    margin-top: 10px;\n    font-weight: 600;\n"]))),jn={username:"",password:""},un={name:"",username:"",password:""},ln=function(e){var t=e.isUserAuthenticated,n=Object(l.useState)(jn),a=Object(h.a)(n,2),c=a[0],r=a[1],i=Object(l.useState)(un),o=Object(h.a)(i,2),s=o[0],j=o[1],u=Object(l.useState)(""),b=Object(h.a)(u,2),d=b[0],p=b[1],O=Object(l.useState)("login"),m=Object(h.a)(O,2),y=m[0],w=m[1],E=Object(f.h)(),C=Object(l.useContext)(v).setAccount,P=Xt;Object(l.useEffect)((function(){p(!1)}),[c]);var T=function(e){r(Object(Ke.a)(Object(Ke.a)({},c),{},Object(Ze.a)({},e.target.name,e.target.value)))},F=function(e){j(Object(Ke.a)(Object(Ke.a)({},s),{},Object(Ze.a)({},e.target.name,e.target.value)))},A=function(){var e=Object(S.a)(k.a.mark((function e(){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.userLogin(c);case 2:(n=e.sent).isSuccess?(p(""),sessionStorage.setItem("accessToken","Bearer ".concat(n.data.accessToken)),sessionStorage.setItem("refreshToken","Bearer ".concat(n.data.refreshToken)),C({name:n.data.name,username:n.data.username}),t(!0),r(jn),E("/")):p("Something went wrong! please try again later");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(S.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.userSignup(s);case 2:e.sent.isSuccess?(p(""),j(un),w("login")):p("Something went wrong! please try again later");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){w("signup"===y?"login":"signup")};return Object(g.jsx)("div",{style:{height:"100vh",backgroundImage:"url(".concat(en,")")},children:Object(g.jsx)(tn,{children:Object(g.jsxs)(x.a,{children:[Object(g.jsx)(nn,{src:P,alt:"blog"}),"login"===y?Object(g.jsxs)(an,{children:[Object(g.jsx)($t.a,{variant:"standard",value:c.username,onChange:function(e){return T(e)},name:"username",label:"Enter Username"}),Object(g.jsx)($t.a,{variant:"standard",value:c.password,onChange:function(e){return T(e)},name:"password",label:"Enter Password"}),d&&Object(g.jsx)(sn,{children:d}),Object(g.jsx)(cn,{variant:"contained",onClick:function(){return A()},children:"Login"}),Object(g.jsx)(on,{style:{textAlign:"center"},children:"OR"}),Object(g.jsx)(rn,{onClick:function(){return z()},style:{marginBottom:50},children:"Create an account"})]}):Object(g.jsxs)(an,{children:[Object(g.jsx)($t.a,{variant:"standard",onChange:function(e){return F(e)},name:"name",label:"Enter Name"}),Object(g.jsx)($t.a,{variant:"standard",onChange:function(e){return F(e)},name:"username",label:"Enter Username"}),Object(g.jsx)($t.a,{variant:"standard",onChange:function(e){return F(e)},name:"password",label:"Enter Password"}),Object(g.jsx)(rn,{onClick:function(){return D()},children:"Signup"}),Object(g.jsx)(on,{style:{textAlign:"center"},children:"OR"}),Object(g.jsx)(cn,{variant:"contained",onClick:function(){return z()},children:"Already have an account"})]})]})})})},bn=["isAuthenticated"],dn=function(e){var t=e.isAuthenticated,n=(Object(O.a)(e,bn),sessionStorage.getItem("accessToken"));return t&&n?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(D,{}),Object(g.jsx)(f.b,{})]}):Object(g.jsx)(f.a,{replace:!0,to:"/account"})};var pn=function(){var e=Object(l.useState)(!1),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(g.jsx)(y,{children:Object(g.jsx)(m.a,{children:Object(g.jsx)(x.a,{style:{marginTop:0},children:Object(g.jsxs)(f.e,{children:[Object(g.jsx)(f.c,{path:"/account",element:Object(g.jsx)(ln,{isUserAuthenticated:a})}),Object(g.jsx)(f.c,{path:"/",element:Object(g.jsx)(dn,{isAuthenticated:n}),children:Object(g.jsx)(f.c,{path:"/",element:Object(g.jsx)(He,{})})}),Object(g.jsx)(f.c,{path:"/create",element:Object(g.jsx)(dn,{isAuthenticated:n}),children:Object(g.jsx)(f.c,{path:"/create",element:Object(g.jsx)(ot,{})})}),Object(g.jsx)(f.c,{path:"/details/:id",element:Object(g.jsx)(dn,{isAuthenticated:n}),children:Object(g.jsx)(f.c,{path:"/details/:id",element:Object(g.jsx)(Pt,{})})}),Object(g.jsx)(f.c,{path:"/update/:id",element:Object(g.jsx)(dn,{isAuthenticated:n}),children:Object(g.jsx)(f.c,{path:"/update/:id",element:Object(g.jsx)(_t,{})})}),Object(g.jsx)(f.c,{path:"/about",element:Object(g.jsx)(dn,{isAuthenticated:n}),children:Object(g.jsx)(f.c,{path:"/about",element:Object(g.jsx)(Ht,{})})}),Object(g.jsx)(f.c,{path:"/contact",element:Object(g.jsx)(dn,{isAuthenticated:n}),children:Object(g.jsx)(f.c,{path:"/contact",element:Object(g.jsx)(Vt,{})})})]})})})})},hn=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,205)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};p.a.render(Object(g.jsx)(b.a.StrictMode,{children:Object(g.jsx)(pn,{})}),document.getElementById("root")),hn()}},[[138,1,2]]]);
//# sourceMappingURL=main.486d2e55.chunk.js.map