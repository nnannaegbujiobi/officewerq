(function(t){function a(a){for(var s,r,o=a[0],l=a[1],c=a[2],d=0,p=[];d<o.length;d++)r=o[d],i[r]&&p.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(a);while(p.length)p.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,o=1;o<e.length;o++){var l=e[o];0!==i[l]&&(s=!1)}s&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},i={app:0},n=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("c21b"),i=e.n(s);i.a},"1ee0":function(t,a,e){},"2d7d":function(t,a,e){"use strict";var s=e("1ee0"),i=e.n(s);i.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("header",{staticClass:"header-narrow header-full-width header-transparent header-transparent-bottom-border",attrs:{id:"header","data-plugin-options":"{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 1, 'stickySetTop': '1'}"}},[e("div",{staticClass:"header-body"},[e("div",{staticClass:"header-container container"},[e("div",{staticClass:"header-row"},[t._m(0),e("div",{staticClass:"header-column justify-content-end"},[e("div",{staticClass:"header-row"},[e("div",{staticClass:"header-nav"},[e("div",{staticClass:"header-nav-main header-nav-main-square custom-header-nav-main-effect-1"},[e("nav",{staticClass:"collapse"},[e("ul",{staticClass:"nav nav-pills",attrs:{id:"mainNav"}},[e("li",[t.isLoggedIn()?e("a",{staticClass:"nav-link active",attrs:{href:"/#/workouts/daily","data-hash":""}},[t._v("\n                                   DailyWorkout\n                                     ")]):t._e()]),t._m(1),e("li",[t.isLoggedIn()?e("a",{staticClass:"nav-link",attrs:{href:"/#/users/me","data-hash":"","data-hash-offset":"78"}},[t._v("\n                                        Profile\n                                     ")]):t._e()]),e("li",[t.isLoggedIn()?e("a",{staticClass:"nav-link",attrs:{href:"/#/users","data-hash":"","data-hash-offset":"78"}},[t._v(" LeaderBoard\n                                     ")]):t._e()]),t._m(2),t._m(3),e("li",[t.isLoggedIn()?e("a",{staticClass:"nav-link",attrs:{href:"/#/logout","data-hash":"","data-hash-offset":"78"}},[t._v("\n                                        Logout\n                                     ")]):t._e()]),t._m(4)])])]),t._m(5),t._m(6)])])])])])])]),e("div",{staticClass:"container"},[e("router-view")],1),t._m(7)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header-column"},[e("div",{staticClass:"header-row"},[e("div",{staticClass:"header-logo"},[e("a",{attrs:{href:"/#/"}},[e("img",{attrs:{width:"108",height:"72",src:"img/OfficeWerq2.jpg"}})])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{staticClass:"nav-link",attrs:{href:"/#/","data-hash":"","data-hash-offset":"78"}},[t._v("\n                                        Home\n                                     ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{staticClass:"nav-link",attrs:{href:"/#/login","data-hash":"","data-hash-offset":"78"}},[t._v(" Login\n                                        \n                                     ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{staticClass:"nav-link",attrs:{href:"/#/signup","data-hash":"","data-hash-offset":"78"}},[t._v(" Signup\n                                        \n                                     ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{staticClass:"nav-link",attrs:{href:"#contact-us","data-hash":"","data-hash-offset":"78"}},[t._v("\n                                        Contact\n                                     ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"header-social-icons social-icons custom-social-icons-style-1 _white d-none d-sm-block  rm-menu"},[e("li",{staticClass:"social-icons-facebook"},[e("a",{attrs:{href:"http://www.facebook.com/",target:"_blank",title:"Facebook"}},[e("i",{staticClass:"fa fa-facebook-square"})])]),e("li",{staticClass:"social-icons-twitter"},[e("a",{attrs:{href:"http://www.twitter.com/",target:"_blank",title:"Twitter"}},[e("i",{staticClass:"fa fa-twitter-square"})])]),e("li",{staticClass:"social-icons-linkedin"},[e("a",{attrs:{href:"http://www.linkedin.com/",target:"_blank",title:"Linkedin"}},[e("i",{staticClass:"fa fa-linkedin-square"})])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn header-btn-collapse-nav",attrs:{"data-toggle":"collapse","data-target":".header-nav-main nav"}},[e("i",{staticClass:"fa fa-bars"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer stylelamas",attrs:{id:"footer-1"}},[e("div",{staticClass:"main"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("section",[e("div",{staticClass:"heading"},[e("h4",{staticClass:"title"},[t._v("Newsletter")])]),e("p",{staticClass:"mb-10"},[t._v("\n                            Keep up on our always evolving product features and technology. Enter your e-mail and subscribe to our newsletter.\n                         ")]),e("div",{staticClass:"clearfix"},[e("form",{attrs:{id:"newsletterForm",action:"php/newsletter-subscribe.php",method:"POST",novalidate:"novalidate"}},[e("div",{staticClass:"input-group"},[e("input",{staticClass:"form-control",attrs:{placeholder:"Email Address",name:"newsletterEmail",id:"newsletterEmail",type:"text"}}),e("span",{staticClass:"input-group-btn"},[e("button",{staticClass:"btn btn-light",attrs:{type:"submit"}},[e("i",{staticClass:"fa fa-search"})])])])])]),e("div",{staticClass:"clearfix social-wrap mt-25"},[e("ul",{staticClass:"list-inline"},[e("li",[e("a",{staticClass:"asc_twitter clearfix",attrs:{href:"http://twitter.com/"}},[e("span",{staticClass:"social-icon"},[e("i",{staticClass:"ion-social-twitter"})]),e("div",{staticClass:"meta clearfix"},[e("strong",{staticClass:"asc_count"},[t._v("Follow")]),e("div",{staticClass:"name"},[t._v("on Twitter")])])])]),e("li",[e("a",{staticClass:"asc_facebook clearfix",attrs:{href:"http://facebook.com/"}},[e("span",{staticClass:"social-icon"},[e("i",{staticClass:"ion-social-facebook"})]),e("div",{staticClass:"meta clearfix"},[e("strong",{staticClass:"asc_count"},[t._v("Follow")]),e("div",{staticClass:"name"},[t._v("on Facebook")])])])])])])])]),e("div",{staticClass:"col-md-1"}),e("div",{staticClass:"col-md-2 col-sm-6"},[e("section",[e("div",{staticClass:"heading"},[e("h4",{staticClass:"title"},[t._v("Company")])]),e("ul",{staticClass:"list-unstyled"},[e("li",[e("a",{attrs:{href:"index.html"}},[t._v("FAQ & Terms")])]),e("li",[e("a",{attrs:{href:"custom-fonts/index.html"}},[t._v("About Company")])]),e("li",[e("a",{attrs:{href:"index.html"}},[t._v("Terms of Service")])]),e("li",[e("a",{attrs:{href:"index.html"}},[t._v("Track Order")])]),e("li",[e("a",{attrs:{href:"custom-fonts/index.html"}},[t._v("Delivery")])]),e("li",[e("a",{attrs:{href:"index.html"}},[t._v("Privacy Policy")])]),e("li",[e("a",{attrs:{href:"index.html"}},[t._v("Jobs")]),e("span",{staticClass:"label label-default o-8"},[t._v("2")])])])])]),e("div",{staticClass:"col-md-2 col-sm-6"},[e("section",[e("div",{staticClass:"heading"},[e("h4",{staticClass:"title"},[t._v("Usefull Links")])]),e("ul",{staticClass:"list-unstyled"},[e("li",[e("a",{attrs:{href:"contact/index.html"}},[t._v("Knowledge Base")])]),e("li",[e("a",{attrs:{href:"custom-fonts/index.html"}},[t._v("Tracking & Reports")])]),e("li",[e("a",{attrs:{href:"index.html"}},[t._v("Contact Express")])]),e("li",[e("a",{attrs:{href:"responsive-image/index.html"}},[t._v("Conditions")])]),e("li",[e("a",{attrs:{href:"contact/index.html"}},[t._v("Privacy Policy")])]),e("li",[e("a",{attrs:{href:"index.html"}},[t._v("Documentation")])]),e("li",[e("a",{attrs:{href:"custom-fonts/index.html"}},[t._v("All Features")])])])])]),e("div",{staticClass:"col-md-3"},[e("section",[e("div",{staticClass:"heading"},[e("h4",{staticClass:"title"},[t._v("Contact Us")])]),e("div",{staticClass:"map-img"},[e("address",[e("i",{staticClass:"ion-ios-location"}),e("strong",[t._v(" Address")]),e("br"),t._v("\n                               795 Folsom Ave, Suite 600 San Francisco, CA 94107"),e("br")]),e("abbr",{attrs:{title:"Phone Number"}},[e("strong",[t._v("Phone:")])]),t._v(" (91) 8547 632521"),e("br"),e("abbr",{attrs:{title:"Fax"}},[e("strong",[t._v("Fax:")])]),t._v(" (91) 11 4752 1433"),e("br"),e("abbr",{attrs:{title:"Email Address"}},[e("strong",[t._v("Email:")])]),t._v(" info@express.com\n                         ")])])])])])]),e("div",{staticClass:"copyright"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("ul",{staticClass:"list-inline fs-13 mb-none"},[e("li",[e("p",{staticClass:"mb-0 fw-6"},[t._v("© 2015-2018 Express")])]),e("li",[e("a",{attrs:{href:"pages-about.html"}},[t._v("About")])]),e("li",[e("a",{attrs:{href:"blog-grid.html"}},[t._v("Blog")])]),e("li",[e("a",{attrs:{href:"pages-contact.html"}},[t._v("Contact")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Terms")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Jobs")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Sitemap")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Public Policy")])])])]),e("div",{staticClass:"col-sm-6"},[e("ul",{staticClass:"footer-socials list-inline pull-right mb-none"},[e("li",[e("a",{staticClass:"tooltips",attrs:{href:"#","data-placement":"top","data-rel":"tooltip","data-original-title":"Twitter"}},[e("i",{staticClass:"fa fa-twitter"})])]),e("li",[e("a",{staticClass:"tooltips",attrs:{href:"#","data-placement":"top","data-rel":"tooltip","data-original-title":"Facebook"}},[e("i",{staticClass:"fa fa-facebook"})])]),e("li",[e("a",{staticClass:"tooltips",attrs:{href:"#","data-placement":"top","data-rel":"tooltip","data-original-title":"Google+"}},[e("i",{staticClass:"fa fa-google-plus"})])]),e("li",[e("a",{staticClass:"tooltips",attrs:{href:"#","data-placement":"top","data-rel":"tooltip","data-original-title":"Linkedin"}},[e("i",{staticClass:"fa fa-linkedin"})])]),e("li",[e("a",{staticClass:"tooltips",attrs:{href:"#","data-placement":"top","data-rel":"tooltip","data-original-title":"Linkedin"}},[e("i",{staticClass:"fa fa-tumblr"})])])])])])])])])}],r={methods:{isLoggedIn:function(){return!!localStorage.getItem("jwt")}}},o=r,l=(e("034f"),e("2877")),c=Object(l["a"])(o,i,n,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,d=e("8c4f"),p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("img",{attrs:{src:"https://i1.wp.com/freefitnesstips.co.uk/wp-content/uploads/2018/05/Office-Workout-1-1200-x-800.png?resize=1200%2C800"}}),e("HelloWorld",{attrs:{msg:"Hero for Hire!"}}),t._m(0)],1)},m=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"section-primary p-none"},[e("div",{staticClass:"row fw-row"},[e("div",{staticClass:"xpromo-wrap col-sm-12"},[e("div",{staticClass:"xpromo-bar promo-button",staticStyle:{"background-color":"#27303d"}},[e("p",{staticClass:"text-white"}),e("a",{staticClass:"btn btn-primary",attrs:{href:"/#/signup",target:"_self"}},[t._v("Start Now")])])])])])}],v=(e("cccb"),{}),f=Object(l["a"])(v,p,m,!1,null,null,null);f.options.__file="Home.vue";var h=f.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"signup"},[e("div",{staticClass:"container"},[e("div",{staticClass:"smart-wrap"},[e("div",{staticClass:"smart-forms smart-container wrap-3"},[t._m(0),e("div",{staticClass:"form-body"},[t._m(1),e("div",[t._v("\n              avatar: "),e("input",{ref:"fileInput",attrs:{type:"file"},on:{change:function(a){t.setFile(a)}}})]),e("div",{staticClass:"frm-row"},[e("div",{staticClass:"section colm colm6"},[e("label",{staticClass:"field prepend-icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"gui-input",attrs:{type:"text",name:"name",placeholder:"name"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),t._m(2)])]),e("div",{staticClass:"section colm colm6"},[e("label",{staticClass:"field prepend-icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"gui-input",attrs:{type:"text",name:"email",placeholder:"email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._m(3)])])]),e("div",{staticClass:"section"},[e("label",{staticClass:"field prepend-icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.bio,expression:"bio"}],staticClass:"gui-input",attrs:{type:"text",name:"bio",placeholder:"say something"},domProps:{value:t.bio},on:{input:function(a){a.target.composing||(t.bio=a.target.value)}}}),t._m(4)])]),e("div",{staticClass:"section"},[e("label",[t._v("Level")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.level=a.target.multiple?e:e[0]}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("Beginner ")]),e("option",{attrs:{value:"Beginner"}},[t._v("Beginner")]),e("option",{attrs:{value:"Intermediate"}},[t._v("Intermediate")]),e("option",{attrs:{value:"Advanced"}},[t._v("Advanced")])])]),e("div",{staticClass:"section"},[e("label",{staticClass:"field prepend-icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"gui-input",attrs:{type:"password",name:"password",placeholder:"Create a password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),t._m(5)])]),e("div",{staticClass:"section"},[e("label",{staticClass:"field prepend-icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"gui-input",attrs:{type:"password",name:"confirmPassword",placeholder:"Retype your password"},domProps:{value:t.passwordConfirmation},on:{input:function(a){a.target.composing||(t.passwordConfirmation=a.target.value)}}}),t._m(6)])])])]),e("button",{staticClass:"button btn-primary",attrs:{type:"submit"},on:{click:function(a){t.submit()}}},[t._v(" Create Account")])])])])},C=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-header header-primary"},[e("h4",[e("i",{staticClass:"fa fa-pencil-square"}),t._v("Registration form")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"spacer-b30"},[e("div",{staticClass:"tagline"},[e("span",{staticStyle:{color:"#0bb4cd"}},[t._v("Create Account ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"field-icon"},[e("i",{staticClass:"fa fa-user"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"field-icon"},[e("i",{staticClass:"fa fa-envelope"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"field-icon"},[e("i",{staticClass:"fa fa-envelope"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"field-icon"},[e("i",{staticClass:"fa fa-lock"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"field-icon"},[e("i",{staticClass:"fa fa-unlock-alt"})])}],g=(e("7f7f"),e("bc3a")),b=e.n(g),w={data:function(){return{name:"",email:"",gender:"",bio:"",level:"",password:"",passwordConfirmation:"",errors:[]}},methods:{setFile:function(t){t.target.files.length>0&&(this.avatar=t.target.files[0])},submit:function(){var t=this,a=new FormData;a.append("name",this.name),a.append("email",this.email),a.append("bio",this.bio),a.append("gender",this.gender),a.append("avatar",this.avatar),a.append("level",this.level),a.append("password",this.password),b.a.post("http://localhost:3000/api/users",a).then(function(a){t.name="",t.email="",t.bio="",t.gender="",t.avatar="",t.level="",t.password="",t.$refs.fileInput.value="",t.$router.push("/login")})}}},x=w,k=Object(l["a"])(x,_,C,!1,null,null,null);k.options.__file="Signup.vue";var y=k.exports,E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"login"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8 offset-md-2"},[e("div",{staticClass:"smart-wrap"},[e("div",{staticClass:"smart-forms smart-container wrap-3"},[t._m(0),e("ul",t._l(t.errors,function(a){return e("li",{staticClass:"text-danger"},[t._v(t._s(a))])})),e("form",{on:{submit:function(a){a.preventDefault(),t.submit()}}},[e("div",{staticClass:"form-body"},[t._m(1),t._m(2),t._m(3),e("div",{staticClass:"section"},[e("label",{staticClass:"field prepend-icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"gui-input",attrs:{type:"text",name:"email",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._m(4)])]),e("div",{staticClass:"section"},[e("label",{staticClass:"field prepend-icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"gui-input",attrs:{type:"password",name:"password",placeholder:"Enter password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),t._m(5)])])]),t._m(6)])])])])])])])},$=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-header header-primary"},[e("h4",[e("i",{staticClass:"fa fa-sign-in"}),t._v("Login")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"spacer-b30"},[e("div",{staticClass:"tagline"},[e("span",[t._v("Sign in  With ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"section"},[e("a",{staticClass:"button btn-social facebook span-left",attrs:{href:"#"}},[e("span",[e("i",{staticClass:"fa fa-facebook"})]),t._v(" Facebook ")]),e("a",{staticClass:"button btn-social twitter span-left",attrs:{href:"#"}},[e("span",[e("i",{staticClass:"fa fa-twitter"})]),t._v(" Twitter ")]),e("a",{staticClass:"button btn-social googleplus span-left",attrs:{href:"#"}},[e("span",[e("i",{staticClass:"fa fa-google-plus"})]),t._v(" Google+ ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"spacer-t30 spacer-b30"},[e("div",{staticClass:"tagline"},[e("span",[t._v(" Login ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"field-icon"},[e("i",{staticClass:"fa fa-user"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"field-icon"},[e("i",{staticClass:"fa fa-lock"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-footer"},[e("button",{staticClass:"button btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])}],P={template:"#login-page",data:function(){return{email:"",password:"",errors:[]}},methods:{submit:function(){var t=this,a={email:this.email,password:this.password};b.a.post("http://localhost:3000/api/sessions",a).then(function(a){b.a.defaults.headers.common["Authorization"]="Bearer "+a.data.jwt,localStorage.setItem("jwt",a.data.jwt),t.$router.push("/users/me")}).catch(function(a){t.errors=["Invalid email or password."],t.email="",t.password=""})}}},j=P,S=Object(l["a"])(j,E,$,!1,null,null,null);S.options.__file="Login.vue";var N=S.exports,O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"logout"})},A=[],I={created:function(){delete b.a.defaults.headers.common["Authorization"],localStorage.removeItem("jwt"),this.$router.push("/")}},F=I,L=Object(l["a"])(F,O,A,!1,null,null,null);L.options.__file="Logout.vue";var T=L.exports,B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"users-new"},[e("div",{staticClass:"container"},[e("form",{on:{submit:function(a){a.preventDefault(),t.submit()}}},[e("h1",[t._v("New User")]),e("ul",t._l(t.errors,function(a){return e("li",{staticClass:"text-danger"},[t._v(t._s(a))])})),e("div",{staticClass:"form-group"},[e("label",[t._v("name:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("email:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("bio:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.bio,expression:"bio"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.bio},on:{input:function(a){a.target.composing||(t.bio=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("gender:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.gender},on:{input:function(a){a.target.composing||(t.gender=a.target.value)}}})]),e("div",[t._v("\n      avatar: "),e("input",{ref:"fileInput",attrs:{type:"file"},on:{change:function(a){t.setFile(a)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("level:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],staticClass:"form-control",attrs:{type:"string"},domProps:{value:t.level},on:{input:function(a){a.target.composing||(t.level=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("password:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"string"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),e("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])])},D=[],W={data:function(){return{name:"",email:"",bio:"",gender:"",avatar:"",level:"",password:"",errors:[]}},methods:{setFile:function(t){t.target.files.length>0&&(this.avatar=t.target.files[0])},submit:function(){var t=this,a=new FormData;a.append(name,this.name),a.append("email",this.email),a.append("bio",this.bio),a.append("gender",this.gender),a.append("avatar",this.avatar),a.append("level",this.level),a.append("password",this.password),b.a.post("http://localhost:3000/api/users/new",a).then(function(a){t.title="",t.body="",t.$refs.fileInput.value="",t.$router.push("/users/me")})}}},U=W,q=Object(l["a"])(U,B,D,!1,null,null,null);q.options.__file="UsersNew.vue";var z=q.exports,H=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"users-show"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 pr-70"},[e("div",{staticClass:"team-member"},[e("div",{staticClass:"member-photo"},[e("img",{staticClass:"img-responsive",attrs:{src:t.user.avatar}})])])]),e("div",{staticClass:"col-md-6"},[e("h2",{staticClass:"section-title fw-4 fs-30 mt-60"},[t._v("\n            "+t._s(t.user.name)+" ")]),e("p",{staticClass:"primary-color"},[t._v(" Badge:\n            "+t._s(t.user.badge_name)+"\n         ")]),t._m(0),e("p",{staticClass:"lead fs-22"},[t._v("\n            "+t._s(t.user.bio)+"\n         ")]),e("p",{staticClass:"lh-26 mb-30"},[t._v("\n            Level: "+t._s(t.user.level)+"\n         ")]),e("h4",{staticClass:"clearfix mb-0"},[e("strong",[t._v(" Progress: "+t._s(t.user.progress)+"%")])]),e("p",{staticClass:"clearfix"},[e("i",{staticClass:"fa fa-envelope-o mr-10 o-4"}),e("a",{staticClass:"b-link fw-5",attrs:{href:"mailto:kevin@example.com"}},[t._v(t._s(t.user.email))])]),e("button",[e("router-link",{attrs:{to:"/users/me/edit"}},[t._v("Edit")])],1)])])])},M=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"exp-separator"},[e("div",{staticClass:"exp-separator-inner"})])}],J={data:function(){return{user:{}}},created:function(){var t=this;b.a.get("http://localhost:3000/api/users/me").then(function(a){console.log(a.data),t.user=a.data})},methods:{},computed:{}},R=J,G=(e("5cfb"),Object(l["a"])(R,H,M,!1,null,null,null));G.options.__file="UsersShow.vue";var K=G.exports,Q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"workouts-show"},[e("div",{staticClass:"container"},[e("img",{attrs:{src:t.workout.image}}),e("a",{on:{click:function(a){t.completeWorkout()}}},[t._v("Completed")])])])},V=[],X={data:function(){return{workout:{}}},created:function(){var t=this;b.a.get("http://localhost:3000/api/workouts/daily").then(function(a){t.workout=a.data,console.log(t.workout)})},methods:{completeWorkout:function(){var t=this,a={workout_id:this.workout.id};b.a.post("http://localhost:3000/api/user_workouts",a).then(function(a){console.log(a.data),t.$router.push("/users/me")})}},computed:{}},Y=X,Z=Object(l["a"])(Y,Q,V,!1,null,null,null);Z.options.__file="WorkoutsShow.vue";var tt=Z.exports,at=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"user_workouts-show"},[e("div",{staticClass:"container"},[e("h2",[t._v(t._s(t.user_workout.user_name))]),e("h3",[t._v(t._s(t.user_workout.workout_name))]),e("h3",[t._v(t._s(t.user_workout.times_done))]),e("router-link",{attrs:{to:"/users/me"}},[t._v("Back to index")])],1)])},et=[],st={data:function(){return{user_workout:{}}},created:function(){var t=this;b.a.get("http://localhost:3000/api/user_workouts/"+this.$route.params.id).then(function(a){t.user_workout=a.data,console.log(t.user_workout)})},methods:{},computed:{}},it=st,nt=Object(l["a"])(it,at,et,!1,null,null,null);nt.options.__file="UserWorkoutsShow.vue";var rt=nt.exports,ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"workouts-index"},[e("h1",[t._v("All Workouts")]),t._l(t.workouts,function(a){return e("div",[e("h2",[t._v(t._s(a.name))]),e("h3",[t._v("Time: "+t._s(a.time))]),e("h4",[t._v("Image: "+t._s(a.image))]),e("h5",[t._v("Description: "+t._s(a.description))]),e("h6",[t._v("Level: "+t._s(a.level))])])})],2)},lt=[],ct={data:function(){return{workouts:[]}},created:function(){var t=this;b.a.get("http://localhost:3000/api/workouts").then(function(a){t.workouts=a.data})},methods:{},computed:{}},ut=ct,dt=(e("2d7d"),Object(l["a"])(ut,ot,lt,!1,null,null,null));dt.options.__file="WorkoutsIndex.vue";var pt=dt.exports,mt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"users-edit"},[e("div",{staticClass:"container"},[e("form",{on:{submit:function(a){a.preventDefault(),t.submit()}}},[e("div",{staticClass:"smart-wrap"},[e("div",{staticClass:"smart-forms smart-container wrap-3"},[e("div",{staticClass:"form-header header-primary"},[t._m(0),e("ul",t._l(t.errors,function(a){return e("li",{staticClass:"text-danger"},[t._v(t._s(a))])}))]),e("div",{staticClass:"form-body"},[t._m(1),e("div",[t._v("\n              avatar: "),e("input",{ref:"fileInput",attrs:{type:"file"},on:{change:function(a){t.setFile(a)}}})]),e("div",{staticClass:"frm-row"},[e("div",{staticClass:"section colm colm6"},[e("label",{staticClass:"field prepend-icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"gui-input",attrs:{type:"text",name:"name"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),t._m(2)])]),e("div",{staticClass:"section colm colm6"},[e("label",{staticClass:"field prepend-icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"gui-input",attrs:{type:"text",name:"email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._m(3)])])]),e("div",{staticClass:"section"},[e("label",{staticClass:"field prepend-icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.bio,expression:"bio"}],staticClass:"gui-input",attrs:{type:"text",name:"bio"},domProps:{value:t.bio},on:{input:function(a){a.target.composing||(t.bio=a.target.value)}}}),t._m(4)])]),e("div",{staticClass:"section"},[e("label",[t._v("Level")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.level=a.target.multiple?e:e[0]}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("Beginner ")]),e("option",{attrs:{value:"Beginner"}},[t._v("Beginner")]),e("option",{attrs:{value:"Intermediate"}},[t._v("Intermediate")]),e("option",{attrs:{value:"Advanced"}},[t._v("Advanced")])])]),e("div",{staticClass:"section"},[e("label",{staticClass:"field prepend-icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"gui-input",attrs:{type:"text",name:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),t._m(5)])]),e("div",{staticClass:"section"},[e("label",{staticClass:"field prepend-icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"gui-input",attrs:{type:"text",name:"confirmPassword",placeholder:"confirm password"},domProps:{value:t.passwordConfirmation},on:{input:function(a){a.target.composing||(t.passwordConfirmation=a.target.value)}}}),t._m(6)])])])]),e("input",{staticClass:"button btn-primary",attrs:{value:"edit user",type:"submit"}}),e("button",{staticClass:"button btn-danger",on:{click:function(a){t.deleteUser(t.user)}}},[t._v("Delete User")])])])])])},vt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h4",[e("i",{staticClass:"fa fa-pencil-square"}),t._v("EDIT")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"spacer-b30"},[e("div",{staticClass:"tagline"},[e("span",{staticStyle:{color:"#0bb4cd"}},[t._v("Create Account ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"field-icon"},[e("i",{staticClass:"fa fa-user"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"field-icon"},[e("i",{staticClass:"fa fa-envelope"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"field-icon"},[e("i",{staticClass:"fa fa-envelope"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"field-icon"},[e("i",{staticClass:"fa fa-lock"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"field-icon"},[e("i",{staticClass:"fa fa-unlock-alt"})])}],ft={data:function(){return{name:"",email:"",bio:"",gender:"",avatar:"",level:"",password:"",passwordConfirmation:"",errors:[]}},created:function(){b.a.get("http://localhost:3000/api/users/me").then(function(t){this.name=t.data.name,this.email=t.data.email,this.bio=t.data.bio,this.gender=t.data.gender,this.avatar=t.data.avatar,this.level=t.data.level,console.log(t.data)}.bind(this))},methods:{setFile:function(t){t.target.files.length>0&&(this.avatar=t.target.files[0])},submit:function(){var t=this,a=new FormData;a.append("name",this.name),a.append("email",this.email),a.append("bio",this.bio),a.append("gender",this.gender),a.append("avatar",this.avatar),a.append("level",this.level),a.append("password",this.password),b.a.patch("http://localhost:3000/api/users/me",a).then(function(a){t.$refs.fileInput.value="",t.$router.push("/users/me")})},deleteUser:function(t){b.a.delete("http://localhost:3000/api/users/"+this.$route.params.id).then(function(t){delete b.a.defaults.headers.common["Authorization"],localStorage.removeItem("jwt")})}}},ht=ft,_t=Object(l["a"])(ht,mt,vt,!1,null,null,null);_t.options.__file="UsersEdit.vue";var Ct=_t.exports,gt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"users-index"},[e("div",{staticClass:"container"},[e("h2",[t._v(" Employees of The Week: "+t._s(t.users.length))]),e("ol",[e("div",{staticClass:"row"},t._l(t.users,function(a){return e("div",{staticClass:"col-md-4 col-sm-4 col-md-border"},[e("div",{staticClass:"feature-box feature-box-secundary-one v-animation",attrs:{"data-animation":"grow","data-delay":"0"}},[t._m(0,!0),e("div",{staticClass:"feature-box-text no-padding"},[e("h3",[t._v(t._s(a.name))]),e("div",{staticClass:"feature-box-text-inner"},[e("p"),e("h4",[t._v("Progress: "+t._s(a.progress)+"%  ")]),e("h4",[t._v("Badge Name: "+t._s(a.badge_name))]),e("p")])])])])}))]),e("button",[e("router-link",{attrs:{to:"/users/me"}},[t._v("Profile")])],1)])])},bt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"feature-box-icon small icon-shadow center-icon"},[e("i",{staticClass:"ion-person-stalker v-icon"})])}],wt={data:function(){return{users:[]}},created:function(){var t=this;b.a.get("http://localhost:3000/api/users").then(function(a){console.log(a.data),t.users=a.data})},computed:{}},xt=wt,kt=Object(l["a"])(xt,gt,bt,!1,null,null,null);kt.options.__file="UsersIndex.vue";var yt=kt.exports;s["a"].use(d["a"]);var Et=new d["a"]({routes:[{path:"/",name:"home",component:h},{path:"/signup",name:"signup",component:y},{path:"/login",name:"login",component:N},{path:"/logout",name:"logout",component:T},{path:"/users/new",name:"users-new",component:z},{path:"/users/me",name:"users-show",component:K},{path:"/workouts/daily",name:"workouts-show",component:tt},{path:"/user_workouts/:id",name:"user_workouts-show",component:rt},{path:"/workouts",name:"workouts-index",component:pt},{path:"/users/me/edit",name:"users-edit",component:Ct},{path:"/users",name:"users-index",component:yt}]}),$t=localStorage.getItem("jwt");$t&&(b.a.defaults.headers.common["Authorization"]="Bearer "+$t),s["a"].config.productionTip=!1,new s["a"]({router:Et,render:function(t){return t(u)}}).$mount("#app")},"5cfb":function(t,a,e){"use strict";var s=e("c931"),i=e.n(s);i.a},"8f59":function(t,a,e){},c21b:function(t,a,e){},c931:function(t,a,e){},cccb:function(t,a,e){"use strict";var s=e("8f59"),i=e.n(s);i.a}});
//# sourceMappingURL=app.573b947c.js.map