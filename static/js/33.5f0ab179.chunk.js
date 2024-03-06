"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{315:function(r,e,n){n.d(e,{f3:function(){return l},po:function(){return d},sK:function(){return p},t4:function(){return f},uP:function(){return h}});var t=n(861),c=n(757),a=n.n(c),i=n(340),o=n(694),s="https://api.themoviedb.org/3/",u="996e01a07f47e64fc2cf01d8ba7bce2b",p=function(){var r=(0,t.Z)(a().mark((function r(){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(u));case 3:return e=r.sent,r.abrupt("return",e);case 7:return r.prev=7,r.t0=r.catch(0),o.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),l=function(){var r=(0,t.Z)(a().mark((function r(e){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("".concat(s,"/search/movie?api_key=").concat(u,"&query=").concat(e));case 3:return n=r.sent,r.abrupt("return",n);case 7:return r.prev=7,r.t0=r.catch(0),o.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(a().mark((function r(e){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("".concat(s,"movie/").concat(e,"?api_key=").concat(u));case 3:return n=r.sent,r.abrupt("return",n);case 7:return r.prev=7,r.t0=r.catch(0),o.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),d=function(){var r=(0,t.Z)(a().mark((function r(e){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("".concat(s,"movie/").concat(e,"/credits?api_key=").concat(u));case 3:return n=r.sent,r.abrupt("return",n);case 7:return r.prev=7,r.t0=r.catch(0),o.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,t.Z)(a().mark((function r(e){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.get("".concat(s,"movie/").concat(e,"/reviews?api_key=").concat(u));case 3:return n=r.sent,r.abrupt("return",n);case 7:return r.prev=7,r.t0=r.catch(0),o.Notify.error("Error fetching trending movies:",r.t0.message),r.abrupt("return",{error:r.t0.message});case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},33:function(r,e,n){n.r(e),n.d(e,{default:function(){return A}});var t,c,a,i,o,s,u,p,l,f=n(861),d=n(439),h=n(757),v=n.n(h),x=n(791),g=n(689),m=n(315),b=n(213),Z=n(694),j=n(168),y=n(924),w=n(87),k=(0,y.ZP)(w.rU)(t||(t=(0,j.Z)(["\n  display: inline-block;\n  border: 1px solid #007bff;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 20px;\n  text-decoration: none;\n  color: #343a40;\n  &:hover {\n    background-color: #007bff;\n    color: #fff;\n  }\n"]))),_=y.ZP.div(c||(c=(0,j.Z)(["\n  display: flex;\n"]))),P=y.ZP.img(a||(a=(0,j.Z)(["\n  display: flex;\n"]))),N=y.ZP.ul(i||(i=(0,j.Z)(["\n  list-style: none;\n"]))),E=y.ZP.ul(o||(o=(0,j.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0px;\n  height: auto;\n"]))),U=y.ZP.h1(s||(s=(0,j.Z)(["\n  font-size: 35px;\n  color: #343a40;\n  margin: 0;\n"]))),C=y.ZP.ul(u||(u=(0,j.Z)(["\n  list-style: none;\n  display: flex;\n  padding: 0;\n"]))),F=y.ZP.li(p||(p=(0,j.Z)(["\n  margin-right: 20px;\n"]))),S=(0,y.ZP)(w.rU)(l||(l=(0,j.Z)(["\n  text-decoration: none;\n  display: inline-block;\n  border: 1px solid #007bff;\n  padding: 10px;\n  border-radius: 5px;\n  width: 80px;\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n  color: #007bff;\n  &:hover {\n    background-color: #007bff;\n    color: #fff;\n  }\n"]))),z=n(184),A=function(){var r,e,n=(0,g.UO)().movieId,t=(0,x.useState)([]),c=(0,d.Z)(t,2),a=c[0],i=c[1],o=(0,g.TH)(),s=(0,x.useRef)(null!==(r=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==r?r:"/");(0,x.useEffect)((function(){var r=function(){var r=(0,f.Z)(v().mark((function r(){var e,t;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,m.t4)(n);case 3:e=r.sent,t=e.data,i(t),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),Z.Notify.error("An error occurred while fetching movie details.");case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}();r()}),[n]);var u=a.poster_path,p=a.title,l=a.vote_average,h=a.genres,j=a.overview;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(k,{to:s.current,children:"Back to collection"}),(0,z.jsxs)(_,{children:[(0,z.jsx)(P,{src:u?"https://image.tmdb.org/t/p/w500/".concat(u):b,alt:p,width:"500",height:"500"}),(0,z.jsxs)(N,{children:[(0,z.jsxs)(E,{children:[(0,z.jsx)(U,{children:p}),(0,z.jsxs)("p",{children:["Users Score: ",(10*l).toFixed(0),"%"]})]}),(0,z.jsxs)(E,{children:[(0,z.jsx)("h2",{children:"Overview"}),(0,z.jsx)("p",{children:j})]}),(0,z.jsxs)(E,{children:[(0,z.jsx)("h2",{children:"Genres"}),h&&(0,z.jsx)("ul",{children:h.map((function(r,e){return(0,z.jsx)("li",{children:r.name},e)}))})]}),(0,z.jsx)("hr",{}),(0,z.jsx)("h3",{children:"Additional information"}),(0,z.jsxs)(C,{children:[(0,z.jsx)(F,{children:(0,z.jsx)(S,{to:"cast",children:"Cast"})}),(0,z.jsx)(F,{children:(0,z.jsx)(S,{to:"reviews",children:"Reviews"})})]})]})]}),(0,z.jsx)("hr",{}),(0,z.jsx)(x.Suspense,{fallback:(0,z.jsx)("div",{children:"Loading..."}),children:(0,z.jsx)(g.j3,{})})]})}},213:function(r,e,n){r.exports=n.p+"static/media/imageNotFound.e464b79c277980d64cbb.jpg"}}]);
//# sourceMappingURL=33.5f0ab179.chunk.js.map