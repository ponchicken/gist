(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{25:function(t,n,e){"use strict";e.r(n);var o=e(0),r=e.n(o),i=e(24),a=e.n(i),u=e(4),c=e(21),l=e(49),f=e(50),s=function(t){return function(n){n({type:"FETCH_GIST_FILE_REQUEST",payload:{name:t.file.filename,id:t.id}}),fetch(t.file.raw_url).then(function(t){return t.text()}).then(function(e){n(function(t){return{type:"FETCH_GIST_FILE_SUCCESS",payload:t}}({id:t.id,name:t.file.filename,data:e}))}).catch(function(t){return n(function(t){return{type:"FETCH_GIST_FILE_FAILURE",payload:t}}(t))})}},p=function(t){var n=t.search("]"),e=-1!==n?t.slice(1,n):t.slice(0,t.length),o=-1!==n?t.slice(n+1,t.length):t.slice(0,t.length),r=t.match(/#[\w\-_]*/g);return{title:e.trim(),description:o.trim(),tags:r}};function y(t){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,n){return(d=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function h(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function m(t,n){return!n||"object"!==y(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function b(t){return(b=Object.getPrototypeOf||function(t){return t.__proto__})(t)}var g=function(t){function n(){var t,e,o;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];return m(o,(e=o=m(this,(t=b(n)).call.apply(t,[this].concat(a))),o.displayGists=function(){var t=o.props.gists.data;return t.length?t.map(function(t){var n=p(t.description);return r.a.createElement("button",{onClick:o.props.setGist(t.id),key:t.id,className:o.chooseGistClass(t)},n.title)}):r.a.createElement("div",null,"no gists")},e))}var e,o,i;return e=n,(o=[{key:"chooseGistClass",value:function(t){var n="";return n+=t.id===this.props.gists.active?"active ":"",n+=t.changed?"changed ":""}},{key:"render",value:function(){return r.a.createElement("div",{className:"gists-list"},this.displayGists())}}])&&h(e.prototype,o),i&&h(e,i),function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");d(t.prototype,n&&n.prototype),n&&d(t,n)}(n,t),n}(o.Component),E=Object(u.b)(function(t){return{gists:t.gists}},function(t){return{setGist:function(n){return function(e){e.preventDefault(),t(function(t){return{type:"SET_ACTIVE_GIST",payload:t}}(n))}},loadGistFiles:function(t){}}})(g),v=e(20),_=e.n(v),S=e(10),w=e.n(S);function T(t){return(T="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,n){return(O=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function C(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function k(t,n){return!n||"object"!==T(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function j(t){return(j=Object.getPrototypeOf||function(t){return t.__proto__})(t)}var F=function(t){function n(t){var e;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(e=k(this,j(n).call(this,t))).onFilenameChange=function(t){var n=e.props.files,o=e.state.filename,r=t.target.value;e.setState({filename:r}),n[e.state.filename].filename=r,n[r]=n[o],delete n[o]},e.getFilename=function(){return e.state.filename},e.onFileContentChange=function(t){var n=e.props,o=n.filename,r=n.files;e.setState({content:t}),r[o].content=t},e.state=e.getInitialState(),e}var e,o,i;return e=n,(o=[{key:"getInitialState",value:function(){return{filename:this.props.filename,content:this.props.files[this.props.filename].content}}},{key:"componentDidUpdate",value:function(){this.state.filename!==this.props.filename&&this.setState(this.getInitialState())}},{key:"render",value:function(){var t=this.props.files[this.state.filename];if(t){var n=t.language?t.language.toLowerCase():"clike",e=w.a.languages.hasOwnProperty(n)?n:"clike",o=this.state.content||"";return r.a.createElement("div",{className:"gist-file"},r.a.createElement("input",{type:"text",className:"gist-file-name",value:this.getFilename(),onChange:this.onFilenameChange}),r.a.createElement(_.a,{className:"gist-editor",value:o,onValueChange:this.onFileContentChange,highlight:function(t){return w.a.highlight(t,w.a.languages[e])},padding:10,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:14}}))}return r.a.createElement("div",null,"loading...")}}])&&C(e.prototype,o),i&&C(e,i),function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");O(t.prototype,n&&n.prototype),n&&O(t,n)}(n,t),n}(o.Component);function I(t){return(I="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function G(t,n){return(G=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function P(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function U(t,n){return!n||"object"!==I(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function R(t){return(R=Object.getPrototypeOf||function(t){return t.__proto__})(t)}var A=function(t){function n(t){var e;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(e=U(this,R(n).call(this,t))).onFileAdd=function(t){return function(n){console.log("Adding file"),e.props.fileAdd(t)}},e.state={gist:e.props.gist},e}var e,o,i;return e=n,(o=[{key:"getFiles",value:function(){var t=this.props.gist;return Object.keys(t.files).map(function(n,e){return console.log("GistData",n),r.a.createElement(F,{key:e,files:t.files,filename:n})})}},{key:"render",value:function(){var t=this.props.gist;return r.a.createElement("div",{className:"gist"},r.a.createElement("h3",null,t.description),r.a.createElement("div",null,this.getFiles()),r.a.createElement("div",{className:"gist-actions"},r.a.createElement("button",{className:"btn",onClick:this.onFileAdd(t)},"Add file"),r.a.createElement("button",{className:"btn gist-submit",onClick:this.props.updateGist(t)},"Submit")))}}])&&P(e.prototype,o),i&&P(e,i),function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");G(t.prototype,n&&n.prototype),n&&G(t,n)}(n,t),n}(o.Component);function H(t){return(H="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,n){return(N=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function D(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function L(t,n){return!n||"object"!==H(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function x(t){return(x=Object.getPrototypeOf||function(t){return t.__proto__})(t)}var K=function(t){function n(t){var e;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(e=L(this,x(n).call(this,t))).displayGist=function(){var t=e.props.gists;return t.active?(e.gist=t.data.find(function(n){return n.id===t.active}),r.a.createElement(A,{gist:e.gist,updateGist:e.props.onUpdateGist,fileAdd:e.props.onFileAdd})):"no active gist"},e.handleKeyboard=function(t){if(t.ctrlKey||t.metaKey)switch(String.fromCharCode(t.which).toLowerCase()){case"s":e.gist&&e.props.onUpdateGist(e.gist)(t)}},e.state={code:""},e}var e,o,i;return e=n,(o=[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyboard)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyboard)}},{key:"render",value:function(){return r.a.createElement("div",null,this.displayGist())}}])&&D(e.prototype,o),i&&D(e,i),function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");N(t.prototype,n&&n.prototype),n&&N(t,n)}(n,t),n}(o.Component),Q=Object(u.b)(function(t){return{gists:t.gists}},function(t){return{loadFile:function(n){return function(e){t(s(n))}},onUpdateGist:function(n){return function(e){e&&e.preventDefault(),t(function(t){return{type:"CHANGE_GIST",payload:t}}(n))}},onFileAdd:function(n){t(function(t){return{type:"FILE_ADD",payload:t}}(n))}}})(K),W=e(9),M=e.n(W),V=function(){var t=window.location.origin+window.location.pathname,n=M.a.stringify({client_id:"169a193bbe75c0e129d0",scope:"gist",redirect_uri:t}),e="https://github.com/login/oauth/authorize?".concat(n);window.location.href=e},z=function(t){return"".concat("https://api.github.com").concat(t)},J=function(){return{Authorization:"token ".concat(localStorage.getItem("ghtoken"))}},B=function(t){if(t.ok)return t.json();throw new X(t)};function X(t){this.name="Error",this.status=t.status,this.message=t.statusText,this.url=t.url}X.prototype=Object.create(Error.prototype),X.prototype.constructor=X;var $,q=($="GET",function(t){return function(n){return n=n||z(t),fetch(n,{method:$,headers:J()}).then(B)}}),Y=q("/user"),Z=q("/gists"),tt=function(t){t({type:"FETCH_USER_REQUEST"}),Y().then(function(n){return t({type:"FETCH_USER_SUCCESS",payload:n})}).catch(function(n){return t(function(t){return{type:"FETCH_USER_FAILURE",payload:t}}(n))})},nt=function(t){return function(n){return function(e){return fetch(z(n),{method:t,headers:J(),body:JSON.stringify(e)}).then(B)}}}("PATCH"),et=function(t){t({type:"FETCH_GISTS_REQUEST"}),Z().then(function(n){t(function(t){return{type:"FETCH_GISTS_SUCCESS",payload:t}}(n)),t(ot(n))}).catch(function(n){return console.log(n),t(function(t){return{type:"FETCH_GISTS_FAILURE",payload:t}}(n))})},ot=function(t){return function(n){t.forEach(function(t){n(function(t){return function(n){Object.keys(t.files).forEach(function(e){n(s({id:t.id,file:t.files[e]}))})}}(t))})}},rt=function(t){return function(n){var e=t.data.filter(function(t){return t.changed});return e.forEach(function(t){n({type:"UPDATE_GISTS_START"}),function(t){return nt("/gists/".concat(t.id))(t)}(t).then(function(t){n(function(t){return{type:"UPDATE_GIST_SUCCESS",payload:t}}(t))}).catch(function(t){n({type:"UPDATE_GIST_ERROR",payload:t})}).finally(function(t){n({type:"UPDATE_GISTS_FINISH"})})}),e}};function it(t){return(it="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function at(t,n){return(at=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function ut(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function ct(t,n){return!n||"object"!==it(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function lt(t){return(lt=Object.getPrototypeOf||function(t){return t.__proto__})(t)}var ft=function(t){function n(){var t,e,o;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return ct(o,(e=o=ct(this,(t=lt(n)).call.apply(t,[this].concat(i))),o.loading=function(){if(o.props.login.pending)return"loading..."},e))}var e,o,i;return e=n,(o=[{key:"componentDidMount",value:function(){var t=this.props,n=t.login,e=t.onFetchToken;n.isAuth||e()}},{key:"render",value:function(){var t=this.props.user.data;return r.a.createElement("div",{className:"header-user"},r.a.createElement("a",{href:t.html_url,className:"header-user-name"},r.a.createElement("img",{src:t.avatar_url,alt:"",className:"header-user-img"}),t.login),this.loading(),r.a.createElement("button",{className:"btn",onClick:V},"Login"),r.a.createElement("button",{className:"btn",onClick:this.props.onLogout},"Logout"))}}])&&ut(e.prototype,o),i&&ut(e,i),function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");at(t.prototype,n&&n.prototype),n&&at(t,n)}(n,t),n}(o.Component),st=Object(u.b)(function(t){return{login:t.login,user:t.user}},function(t){return{onFetchToken:function(){(function(t){var n=M.a.parse(window.location.search);if(n.code){var e=M.a.stringify({code:n.code}),o="https://server-aenjidvwww.now.sh/callback?".concat(e);return t({type:"FETCH_GH_TOKEN_REQUEST"}),fetch(o).then(function(t){return t.json()}).then(function(n){var e=n.token,o=e.access_token,r=e.error;r?t(function(t){return{type:"FETCH_GH_TOKEN_ERROR",payload:t,error:!0}}(r)):(localStorage.setItem("ghtoken",o),t({type:"FETCH_GH_TOKEN_SUCCESS",payload:o}))})}})(t).then(function(n){tt(t),et(t)})},onLogout:function(){t((localStorage.removeItem("ghtoken"),{type:"LOGOUT"}))},onFetchData:function(){tt(t),et(t)}}})(ft);function pt(t){return(pt="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function yt(t,n){return(yt=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function dt(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function ht(t,n){return!n||"object"!==pt(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function mt(t){return(mt=Object.getPrototypeOf||function(t){return t.__proto__})(t)}var bt=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),ht(this,mt(n).apply(this,arguments))}var e,o,i;return e=n,(o=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"sync"},r.a.createElement("button",{className:"btn",onClick:this.props.onFetchData},"pull"),r.a.createElement("button",{className:"btn",onClick:this.props.onUpdateGists(this.props.gists)},"push"),r.a.createElement("div",{className:"status"},this.props.gists.patching?"pushing github":""))}}])&&dt(e.prototype,o),i&&dt(e,i),function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");yt(t.prototype,n&&n.prototype),n&&yt(t,n)}(n,t),n}(o.Component),gt=Object(u.b)(function(t){return{gists:t.gists}},function(t){return{onFetchData:function(){tt(t),et(t)},onUpdateGists:function(n){return function(){t(rt(n))}}}})(bt);function Et(t){return(Et="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function vt(t,n){return(vt=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _t(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function St(t,n){return!n||"object"!==Et(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function wt(t){return(wt=Object.getPrototypeOf||function(t){return t.__proto__})(t)}var Tt=function(t){function n(){var t,e,o;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return St(o,(e=o=St(this,(t=wt(n)).call.apply(t,[this].concat(i))),o.isAuthenticated=!1,e))}var e,o,i;return e=n,(o=[{key:"render",value:function(){return r.a.createElement(f.a,{basename:"/gist"},r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"header"},r.a.createElement(gt,null),r.a.createElement(st,null)),r.a.createElement("aside",null,r.a.createElement(E,null)),r.a.createElement("main",null,r.a.createElement(l.a,{exact:!0,path:"/",component:Q})),r.a.createElement("footer",null,"footer")))}}])&&_t(e.prototype,o),i&&_t(e,i),function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");vt(t.prototype,n&&n.prototype),n&&vt(t,n)}(n,t),n}(o.Component),Ot=(e(29),e(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Ct(t){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(t){console.error("Error during service worker registration:",t)})}var kt=e(6),jt=e(11),Ft=e(18),It=e.n(Ft),Gt=e(17);function Pt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){Ut(t,n,e[n])})}return t}function Ut(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var Rt;function At(t,n){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,o=arguments.length>1?arguments[1]:void 0;return n.hasOwnProperty(o.type)?n[o.type](e,o):e}}function Ht(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){Nt(t,n,e[n])})}return t}function Nt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var Dt={pending:!1,data:{},error:""},Lt=At(Dt,(Nt(Rt={},"FETCH_GISTS_REQUEST",function(t){return Ht({},t,{pending:!0})}),Nt(Rt,"FETCH_GISTS_SUCCESS",function(t,n){return Ht({},t,{pending:!1,data:n.payload,error:Dt.error})}),Nt(Rt,"FETCH_GISTS_FAILURE",function(t,n){return Ht({},t,{pending:!1,error:n.payload})}),Nt(Rt,"SET_ACTIVE_GIST",function(t,n){return Pt({},t,{active:n.payload})}),Nt(Rt,"FETCH_GIST_FILE_REQUEST",function(t,n){var e=n.payload,o=e.name,r=e.id,i=Pt({},t),a=i.data.findIndex(function(t){return t.id===r});return i.data[a].files[o].pending=!0,i}),Nt(Rt,"FETCH_GIST_FILE_SUCCESS",function(t,n){var e=n.payload,o=e.id,r=e.name,i=e.data,a=Pt({},t),u=a.data.findIndex(function(t){return t.id===o}),c=a.data[u].files[r];return c.pending=!1,c.content=i,a}),Nt(Rt,"FETCH_GIST_FILE_FAILURE",function(t,n){return t}),Nt(Rt,"CHANGE_GIST",function(t,n){var e=Pt({},t),o=n.payload;o.changed=!0;var r=t.data.findIndex(function(t){return t.id===o.id});return e.data[r]=o,e}),Nt(Rt,"UPDATE_GISTS_START",function(t){return Ht({},t,{patching:!0})}),Nt(Rt,"UPDATE_GISTS_FINISH",function(t){return Ht({},t,{patching:!1})}),Nt(Rt,"UPDATE_GIST_SUCCESS",function(t,n){var e=Pt({},t),o=n.payload;o.changed=!1;var r=t.data.findIndex(function(t){return t.id===o.id});return e.data[r]=o,e}),Nt(Rt,"UPDATE_GIST_ERROR",function(t,n){var e=Pt({},t),o=n.payload;o.changed=!1;var r=t.data.findIndex(function(t){return t.id===o.id});return e.data[r]=o,e}),Nt(Rt,"FILE_ADD",function(t,n){console.log("reducer",n.payload);var e=Pt({},t),o=n.payload;o.files.new={filename:"new",content:""};var r=t.data.findIndex(function(t){return t.id===o.id});return e.data[r]=o,e}),Rt));function xt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){Kt(t,n,e[n])})}return t}function Kt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var Qt,Wt={pending:!1,data:{},error:""};function Mt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){Vt(t,n,e[n])})}return t}function Vt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var zt={pending:!1,token:"",error:{},isAuth:!1},Jt=At(zt,(Vt(Qt={},"FETCH_GH_TOKEN_REQUEST",function(t){return Mt({},t,{pending:!0})}),Vt(Qt,"FETCH_GH_TOKEN_SUCCESS",function(t,n){return{pending:!1,token:n.payload,error:zt.error,isAuth:!0}}),Vt(Qt,"FETCH_GH_TOKEN_ERROR",function(t,n){return Mt({},t,{pending:!1,error:n.payload})}),Vt(Qt,"LOGOUT",function(t){return Mt({},t,{token:zt.token,isAuth:!1})}),Qt)),Bt=Object(kt.c)({gists:Lt,user:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Wt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FETCH_USER_REQUEST":return xt({},t,{pending:!0});case"FETCH_USER_SUCCESS":return xt({},t,{pending:!1,data:n.payload,error:Wt.error});case"FETCH_USER_FAILURE":return xt({},t,{pending:!1,data:Wt.data,error:n.payload});default:return t}},login:Jt}),Xt={key:"root",storage:It.a},$t=Object(jt.a)(Xt,Bt),qt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||kt.d,Yt=Object(kt.e)($t,qt(Object(kt.a)(Gt.a))),Zt=Object(jt.b)(Yt);a.a.render(r.a.createElement(u.a,{store:Yt},r.a.createElement(c.a,{loading:null,persistor:Zt},r.a.createElement(Tt,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/gist",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/gist","/service-worker.js");Ot?(function(t){fetch(t).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):Ct(t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Ct(t)})}}()},29:function(t,n,e){},48:function(t,n,e){e(47),t.exports=e(25)}},[[48,0,1]]]);
//# sourceMappingURL=main.0297ac89.chunk.js.map