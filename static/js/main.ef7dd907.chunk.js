(this["webpackJsonpreact-image-cropper"]=this["webpackJsonpreact-image-cropper"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(5),l=c.n(i),n=(c(12),c(13),c(0));function r(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("nav",{children:Object(n.jsxs)("div",{className:"nav-wrapper",children:[Object(n.jsxs)("a",{href:"#",className:"brand-logo center",children:[Object(n.jsx)("i",{className:"material-icons hide-on-med-and-down",children:"crop"}),"React Cropper"]}),Object(n.jsx)("ul",{id:"nav-mobile",className:"left hide-on-med-and-down",children:Object(n.jsx)("li",{children:Object(n.jsx)("a",{"data-target":"modal1",className:"waves-effect waves-light btn btn-large modal-trigger",children:Object(n.jsx)("i",{className:"material-icons",children:"help_outline"})})})}),Object(n.jsx)("a",{href:"#","data-target":"mobile-demo",className:"sidenav-trigger",children:Object(n.jsx)("i",{className:"material-icons",children:"menu"})}),Object(n.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/DanielOram/react-image-cropper",children:"Github"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://stackoverflow.com/users/4486146/danoram",children:"StackOverflow"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/danieloram1/",children:"Linked In"})})]})]})}),Object(n.jsxs)("ul",{className:"sidenav",id:"mobile-demo",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{"data-target":"modal1",className:"waves-effect waves-light btn btn-large modal-trigger",children:Object(n.jsxs)("span",{children:["How to Use",Object(n.jsx)("i",{className:"material-icons right",children:"help_outline"})]})})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"https://github.com/DanielOram/react-image-cropper",children:["Github",Object(n.jsx)("i",{className:"material-icons right",children:"code"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"https://stackoverflow.com/users/4486146/danoram",children:["StackOverflow",Object(n.jsx)("i",{className:"material-icons right",children:"code"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"https://www.linkedin.com/in/danieloram1/",children:["Linked In",Object(n.jsx)("i",{className:"material-icons right",children:"info_outline"})]})})]})]})}function d(){return Object(n.jsxs)("footer",{className:"page-footer",children:[Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col l6 s12",children:[Object(n.jsx)("h5",{className:"white-text",children:"Created by Daniel Oram."}),Object(n.jsx)("p",{className:"grey-text text-lighten-4",children:"A webapp for cropping and downloading images using React and cropperjs."})]}),Object(n.jsxs)("div",{className:"col l4 offset-l2 s12",children:[Object(n.jsx)("h5",{className:"white-text",children:"Links"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"grey-text text-lighten-3",href:"https://github.com/DanielOram/react-image-cropper",children:"Github"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"grey-text text-lighten-3",href:"https://stackoverflow.com/users/4486146/danoram",children:"StackOverflow"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{className:"grey-text text-lighten-3",href:"https://www.linkedin.com/in/danieloram1/",children:"Linked In"})})]})]})]})}),Object(n.jsx)("div",{className:"footer-copyright",children:Object(n.jsx)("div",{className:"container",children:"\xa9 2021 Daniel Oram"})})]})}var j=c(2),o=c(6);c(15);function h(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"crop-preview-container",style:{width:"100%",height:200,float:"right",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(n.jsx)("div",{className:"crop-preview",style:{width:"100%",height:"inherit",overflow:"hidden",maxHeight:"100%"}})})})}function m(){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{id:"modal1",className:"modal",children:[Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsx)("h4",{children:"React Cropper"}),Object(n.jsx)("p",{children:"Double click the cropping canvas to toggle between moving the selected image and creating a cropping area."}),Object(n.jsx)("p",{children:"Press 'RESET' to return the cropping canvas back to it's default position and aspect ratio."}),Object(n.jsx)("p",{children:"Press 'FREEFORM' to be able to manually change the aspect ratio of the crop."}),Object(n.jsx)("p",{children:"Scroll to zoom in and out."})]}),Object(n.jsx)("div",{className:"modal-footer",children:Object(n.jsx)("a",{href:"#!",className:"modal-close waves-effect waves-green btn-flat",children:"Close"})})]})})}var b=c.p+"static/media/oranges.789a5bbd.jpg";function x(){var e=Object(s.useState)(b),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(1),l=Object(j.a)(i,2),r=l[0],d=(l[1],Object(s.useState)({reset:function(){}})),x=Object(j.a)(d,2),O=x[0],f=x[1],v=Object(s.useState)("#"),p=Object(j.a)(v,2),g=p[0],u=p[1],w=Object(s.useState)(!1),N=Object(j.a)(w,2),y=N[0],k=N[1],C=function(e){O.setAspectRatio(e)};return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row"}),Object(n.jsxs)("div",{className:"row",children:[y&&Object(n.jsxs)("div",{className:"center-align",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col xl12 l12 m12 s12",children:Object(n.jsx)("div",{className:"crop-preview-container",style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"50vh"},children:Object(n.jsx)("img",{id:"croppedImage",style:{maxWidth:"100%"},src:g,alt:"cropped"})})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col xl12 l12 m12 s12",children:Object(n.jsx)("a",{className:"waves-effect waves-light btn btn-large",style:{width:"100%"},href:c,download:"cropped.png",children:"Download Image"})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col xl12 l12 m12 s12",children:Object(n.jsx)("a",{className:"waves-effect waves-light btn teal darken-4",style:{width:"100%"},onClick:function(){return k(!1)},children:"Back"})})})]}),!y&&Object(n.jsxs)("div",{className:"col xl12",children:[Object(n.jsx)("div",{className:"col xl8 l8 m12 s12",children:Object(n.jsx)(o.a,{src:c,style:{height:400,width:"100%"},preview:".crop-preview",initialAspectRatio:r,aspectRatio:r,onInitialized:function(e){f(e)}})}),Object(n.jsxs)("div",{className:"col xl4 l4 m12 s12",children:[Object(n.jsx)("div",{className:"hide-on-med-and-down",children:Object(n.jsx)(h,{})}),Object(n.jsx)("div",{className:"",children:Object(n.jsx)("div",{className:"",children:Object(n.jsxs)("div",{className:"btn file-field input-field teal darken-4",style:{width:"100%"},children:[Object(n.jsx)("span",{children:"Choose Image"}),Object(n.jsx)("input",{type:"file",onChange:function(e){var t;e.preventDefault(),e.dataTransfer?t=e.dataTransfer.files:e.target&&(t=e.target.files);var c=new FileReader;c.onload=function(){a(c.result)},c.readAsDataURL(t[0]),k(!1)}})]})})}),Object(n.jsx)("div",{className:"",style:{display:"none"},children:Object(n.jsx)("div",{className:"file-path-wrapper",children:Object(n.jsx)("input",{className:"file-path validate",type:"text",placeholder:"File Name"})})}),!y&&Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col xl12 l12 m12 s12",children:[Object(n.jsx)("a",{className:"waves-effect waves-light btn col xl3 l3 m3 s3",style:{textAlign:"center"},onClick:function(){return C(1)},children:"1:1"}),Object(n.jsx)("a",{className:"waves-effect waves-light btn col xl3 l3 m3 s3",style:{textAlign:"center"},onClick:function(){return C(4/3)},children:"4:3"}),Object(n.jsx)("a",{className:"waves-effect waves-light btn col xl3 l3 m3 s3",style:{textAlign:"center"},onClick:function(){return C(9/16)},children:"9:16"}),Object(n.jsx)("a",{className:"waves-effect waves-light btn col xl3 l3 m3 s3",style:{textAlign:"center"},onClick:function(){return C(16/9)},children:"16:9"}),Object(n.jsx)("a",{className:"waves-effect waves-light btn col xl6 l6 m6 s6",onClick:function(){return C({})},children:"freeform"}),Object(n.jsx)("a",{className:"waves-effect waves-light btn col xl6 l6 m6 s6",onClick:function(){k(!1),O.reset()},children:"reset"})]})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col xl12 l12 m12 s12",children:!y&&Object(n.jsx)("a",{className:"black-text waves-effect waves-light btn teal lighten-4",style:{width:"100%"},onClick:function(){"undefined"!==O&&(k(!0),u(O.getCroppedCanvas().toDataURL()))},children:"Crop Image"})})})]})]})]}),Object(n.jsx)(m,{})]})}var O=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(r,{}),Object(n.jsx)(x,{}),Object(n.jsx)(d,{})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,l=t.getTTFB;c(e),s(e),a(e),i(e),l(e)}))},v=c(4),p=c.n(v);l.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),f(),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".modal");p.a.Modal.init(e,{})})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".sidenav");p.a.Sidenav.init(e,{})}))}},[[17,1,2]]]);
//# sourceMappingURL=main.ef7dd907.chunk.js.map