(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{64:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(29),r=n.n(s),i=n(13),l=n.n(i),o=n(9),d=n(17),u=n(4),j=n(8),b=n(2),h=(n(39),n(30)),m=n(31),O=n(32),v=n.n(O).a.create({baseURL:"https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/restaurant-reviews-ittzt/service/restaurants/incoming_webhook/",headers:{"Content-type":"application/json"}}),x=new(function(){function e(){Object(h.a)(this,e)}return Object(m.a)(e,[{key:"getAll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return v.get("restaurants?page=".concat(e))}},{key:"get",value:function(e){return v.get("/restaurant?id=".concat(e))}},{key:"find",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return v.get("restaurants?".concat(t,"=").concat(e,"&page=").concat(n))}},{key:"createReview",value:function(e){return v.post("/review-new",e)}},{key:"updateReview",value:function(e){return v.put("/review-edit",e)}},{key:"deleteReview",value:function(e,t){return v.delete("/review-delete?id=".concat(e),{data:{user_id:t}})}},{key:"getCuisines",value:function(e){return v.get("/cuisines")}}]),e}()),p=n(0),f=function(e){var t="",n=!1;e.location.state&&e.location.state.currentReview&&(n=!0,t=e.location.state.currentReview.text);var a=Object(c.useState)(t),s=Object(u.a)(a,2),r=s[0],i=s[1],l=Object(c.useState)(!1),o=Object(u.a)(l,2),d=o[0],b=o[1];return Object(p.jsx)("div",{children:e.user?Object(p.jsx)("div",{className:"submit-form",children:d?Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:"You submitted successfully!"}),Object(p.jsx)(j.b,{to:"/restaurants/"+e.match.params.id,className:"btn btn-success",children:"Back to Restaurant"})]}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsxs)("label",{htmlFor:"description",children:[n?"Edit":"Create"," Review"]}),Object(p.jsx)("textarea",{type:"text",className:"form-control",id:"text",rows:"3",required:!0,value:r,onChange:function(e){i(e.target.value)},name:"text"})]}),Object(p.jsx)("button",{onClick:function(){var t={text:r,name:e.user.name,user_id:e.user.id,restaurant_id:e.match.params.id};n?(t.review_id=e.location.state.currentReview._id,x.updateReview(t).then((function(e){b(!0),console.log(e.data)})).catch((function(e){console.log(e)}))):x.createReview(t).then((function(e){b(!0),console.log(e.data)})).catch((function(e){console.log(e)}))},className:"btn btn-success",children:"Submit"})]})}):Object(p.jsx)("div",{children:"Please log in."})})},g=function(e){var t=Object(c.useState)({id:null,name:"",address:{},cuisine:"",reviews:[]}),n=Object(u.a)(t,2),a=n[0],s=n[1];Object(c.useEffect)((function(){var t;t=e.match.params.id,x.get(t).then((function(e){s(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[e.match.params.id]);return Object(p.jsx)("div",{children:a?Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{children:a.name}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Cuisine: "}),a.cuisine,Object(p.jsx)("br",{}),Object(p.jsx)("strong",{children:"Address: "}),a.address.building," ",a.address.street,", ",a.address.zipcode]}),Object(p.jsx)(j.b,{to:"/restaurants/"+e.match.params.id+"/review",className:"btn btn-primary",children:"Add Review"}),Object(p.jsx)("h4",{children:" Reviews "}),Object(p.jsx)("div",{className:"row",children:a.reviews.length>0?a.reviews.map((function(t,n){return Object(p.jsx)("div",{className:"col-lg-4 pb-1",children:Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsxs)("p",{className:"card-text",children:[t.text,Object(p.jsx)("br",{}),Object(p.jsx)("strong",{children:"User: "}),t.name,Object(p.jsx)("br",{}),Object(p.jsx)("strong",{children:"Date: "}),t.date]}),e.user&&e.user.id===t.user_id&&Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("a",{onClick:function(){return function(t,n){x.deleteReview(t,e.user.id).then((function(e){s((function(e){return e.reviews.splice(n,1),Object(o.a)({},e)}))})).catch((function(e){console.log(e)}))}(t._id,n)},className:"btn btn-primary col-lg-5 mx-1 mb-1",children:"Delete"}),Object(p.jsx)(j.b,{to:{pathname:"/restaurants/"+e.match.params.id+"/review",state:{currentReview:t}},className:"btn btn-primary col-lg-5 mx-1 mb-1",children:"Edit"})]})]})})},n)})):Object(p.jsx)("div",{className:"col-sm-4",children:Object(p.jsx)("p",{children:"No reviews yet."})})})]}):Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:"No restaurant selected."})]})})},N=function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(""),i=Object(u.a)(r,2),l=i[0],o=i[1],d=Object(c.useState)(""),b=Object(u.a)(d,2),h=b[0],m=b[1],O=Object(c.useState)(""),v=Object(u.a)(O,2),f=v[0],g=v[1],N=Object(c.useState)(["All Cuisines"]),w=Object(u.a)(N,2),y=w[0],k=w[1];Object(c.useEffect)((function(){C(),R()}),[]);var C=function(){x.getAll().then((function(e){console.log(e.data),s(e.data.restaurants)})).catch((function(e){console.log(e)}))},R=function(){x.getCuisines().then((function(e){console.log(e.data),k(["All Cuisines"].concat(e.data))})).catch((function(e){console.log(e)}))},S=function(e,t){x.find(e,t).then((function(e){console.log(e.data),s(e.data.restaurants)})).catch((function(e){console.log(e)}))};return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"row pb-1",children:[Object(p.jsxs)("div",{className:"input-group col-lg-4",children:[Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"Search by name",value:l,onChange:function(e){var t=e.target.value;o(t)}}),Object(p.jsx)("div",{className:"input-group-append",children:Object(p.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){S(l,"name")},children:"Search"})})]}),Object(p.jsxs)("div",{className:"input-group col-lg-4",children:[Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"Search by zip",value:h,onChange:function(e){var t=e.target.value;m(t)}}),Object(p.jsx)("div",{className:"input-group-append",children:Object(p.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){S(h,"zipcode")},children:"Search"})})]}),Object(p.jsxs)("div",{className:"input-group col-lg-4",children:[Object(p.jsx)("select",{onChange:function(e){var t=e.target.value;g(t)},children:y.map((function(e){return Object(p.jsxs)("option",{value:e,children:[" ",e.substr(0,20)," "]})}))}),Object(p.jsx)("div",{className:"input-group-append",children:Object(p.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){"All Cuisines"===f?C():S(f,"cuisine")},children:"Search"})})]})]}),Object(p.jsx)("div",{className:"row",children:a.map((function(e){var t="".concat(e.address.building," ").concat(e.address.street,", ").concat(e.address.zipcode);return Object(p.jsx)("div",{className:"col-lg-4 pb-1",children:Object(p.jsx)("div",{className:"card",children:Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h5",{className:"card-title",children:e.name}),Object(p.jsxs)("p",{className:"card-text",children:[Object(p.jsx)("strong",{children:"Cuisine: "}),e.cuisine,Object(p.jsx)("br",{}),Object(p.jsx)("strong",{children:"Address: "}),t]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)(j.b,{to:"/restaurants/"+e._id,className:"btn btn-primary col-lg-5 mx-1 mb-1",children:"View Reviews"}),Object(p.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.google.com/maps/place/"+t,className:"btn btn-primary col-lg-5 mx-1 mb-1",children:"View Map"})]})]})})})}))})]})},w=n(14),y=function(e){var t=Object(c.useState)({name:"",id:""}),n=Object(u.a)(t,2),a=n[0],s=n[1],r=function(e){var t=e.target,n=t.name,c=t.value;s(Object(o.a)(Object(o.a)({},a),{},Object(w.a)({},n,c)))};return Object(p.jsx)("div",{className:"submit-form",children:Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"form-group col-md-2",children:[Object(p.jsx)("label",{htmlFor:"user",children:"Username"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"name",required:!0,value:a.name,onChange:r,name:"name"})]}),Object(p.jsxs)("div",{className:"form-group col-md-2",children:[Object(p.jsx)("label",{htmlFor:"id",children:"ID"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"id",required:!0,value:a.id,onChange:r,name:"id"})]}),Object(p.jsx)("button",{onClick:function(){e.login(a),e.history.push("/")},className:"btn btn-success",children:"Login"})]})})};var k=function(){var e=a.a.useState(null),t=Object(u.a)(e,2),n=t[0],c=t[1];function s(){return r.apply(this,arguments)}function r(){return(r=Object(d.a)(l.a.mark((function e(){var t,n=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.length>0&&void 0!==n[0]?n[0]:null,c(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(null);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(p.jsx)("a",{href:"/restaurants",className:"navbar-brand",children:"Restaurant Reviews"}),Object(p.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(j.b,{to:"/restaurants",className:"nav-link",children:"Restaurants"})}),Object(p.jsx)("li",{className:"nav-item",children:n?Object(p.jsxs)("a",{onClick:function(){return i.apply(this,arguments)},className:"nav-link",style:{cursor:"pointer"},children:["Logout ",n.name]}):Object(p.jsx)(j.b,{to:"/login",className:"nav-link",children:"Login"})})]})]}),Object(p.jsx)("div",{className:"container mt-3",children:Object(p.jsxs)(b.c,{children:[Object(p.jsx)(b.a,{exact:!0,path:["/","/restaurants"],component:N}),Object(p.jsx)(b.a,{path:"/restaurants/:id/review",render:function(e){return Object(p.jsx)(f,Object(o.a)(Object(o.a)({},e),{},{user:n}))}}),Object(p.jsx)(b.a,{path:"/restaurants/:id",render:function(e){return Object(p.jsx)(g,Object(o.a)(Object(o.a)({},e),{},{user:n}))}}),Object(p.jsx)(b.a,{path:"/login",render:function(e){return Object(p.jsx)(y,Object(o.a)(Object(o.a)({},e),{},{login:s}))}})]})})]})};r.a.render(Object(p.jsx)(j.a,{children:Object(p.jsx)(k,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.093dc298.chunk.js.map