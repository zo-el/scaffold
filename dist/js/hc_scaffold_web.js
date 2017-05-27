"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){if("object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).hc_scaffold_web=e()}}(function(){return function e(t,n,r){function a(o,l){if(!n[o]){if(!t[o]){var s="function"==typeof require&&require;if(!l&&s)return s(o,!0);if(i)return i(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[o]={exports:{}};t[o][0].call(d.exports,function(e){var n=t[o][1][e];return a(n||e)},d,d.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)a(r[o]);return a}({1:[function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(){var e=new o.HandlebarsEnvironment;return u.extend(e,o),e.SafeString=l.default,e.Exception=s.default,e.Utils=u,e.escapeExpression=u.escapeExpression,e.VM=d,e.template=function(t){return d.template(t,e)},e}n.__esModule=!0;var o=a(e("./handlebars/base")),l=r(e("./handlebars/safe-string")),s=r(e("./handlebars/exception")),u=a(e("./handlebars/utils")),d=a(e("./handlebars/runtime")),c=r(e("./handlebars/no-conflict")),f=i();f.create=i,c.default(f),f.default=f,n.default=f,t.exports=n.default},{"./handlebars/base":2,"./handlebars/exception":5,"./handlebars/no-conflict":15,"./handlebars/runtime":16,"./handlebars/safe-string":17,"./handlebars/utils":18}],2:[function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){this.helpers=e||{},this.partials=t||{},this.decorators=n||{},l.registerDefaultHelpers(this),s.registerDefaultDecorators(this)}n.__esModule=!0,n.HandlebarsEnvironment=a;var i=e("./utils"),o=r(e("./exception")),l=e("./helpers"),s=e("./decorators"),u=r(e("./logger"));n.VERSION="4.0.8";n.COMPILER_REVISION=7;var d={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};n.REVISION_CHANGES=d;a.prototype={constructor:a,logger:u.default,log:u.default.log,registerHelper:function(e,t){if("[object Object]"===i.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple helpers");i.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===i.toString.call(e))i.extend(this.partials,e);else{if(void 0===t)throw new o.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===i.toString.call(e)){if(t)throw new o.default("Arg not supported with multiple decorators");i.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var c=u.default.log;n.log=c,n.createFrame=i.createFrame,n.logger=u.default},{"./decorators":3,"./exception":5,"./helpers":6,"./logger":14,"./utils":18}],3:[function(e,t,n){function r(e){a.default(e)}n.__esModule=!0,n.registerDefaultDecorators=r;var a=function(e){return e&&e.__esModule?e:{default:e}}(e("./decorators/inline"))},{"./decorators/inline":4}],4:[function(e,t,n){n.__esModule=!0;var r=e("../utils");n.default=function(e){e.registerDecorator("inline",function(e,t,n,a){var i=e;return t.partials||(t.partials={},i=function(a,i){var o=n.partials;n.partials=r.extend({},o,t.partials);var l=e(a,i);return n.partials=o,l}),t.partials[a.args[0]]=a.fn,i})},t.exports=n.default},{"../utils":18}],5:[function(e,t,n){function r(e,t){var n=t&&t.loc,i=void 0,o=void 0;n&&(e+=" - "+(i=n.start.line)+":"+(o=n.start.column));for(var l=Error.prototype.constructor.call(this,e),s=0;s<a.length;s++)this[a[s]]=l[a[s]];Error.captureStackTrace&&Error.captureStackTrace(this,r);try{n&&(this.lineNumber=i,Object.defineProperty?Object.defineProperty(this,"column",{value:o,enumerable:!0}):this.column=o)}catch(e){}}n.__esModule=!0;var a=["description","fileName","lineNumber","message","name","number","stack"];r.prototype=new Error,n.default=r,t.exports=n.default},{}],6:[function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function a(e){i.default(e),o.default(e),l.default(e),s.default(e),u.default(e),d.default(e),c.default(e)}n.__esModule=!0,n.registerDefaultHelpers=a;var i=r(e("./helpers/block-helper-missing")),o=r(e("./helpers/each")),l=r(e("./helpers/helper-missing")),s=r(e("./helpers/if")),u=r(e("./helpers/log")),d=r(e("./helpers/lookup")),c=r(e("./helpers/with"))},{"./helpers/block-helper-missing":7,"./helpers/each":8,"./helpers/helper-missing":9,"./helpers/if":10,"./helpers/log":11,"./helpers/lookup":12,"./helpers/with":13}],7:[function(e,t,n){n.__esModule=!0;var r=e("../utils");n.default=function(e){e.registerHelper("blockHelperMissing",function(t,n){var a=n.inverse,i=n.fn;if(!0===t)return i(this);if(!1===t||null==t)return a(this);if(r.isArray(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):a(this);if(n.data&&n.ids){var o=r.createFrame(n.data);o.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:o}}return i(t,n)})},t.exports=n.default},{"../utils":18}],8:[function(e,t,n){n.__esModule=!0;var r=e("../utils"),a=function(e){return e&&e.__esModule?e:{default:e}}(e("../exception"));n.default=function(e){e.registerHelper("each",function(e,t){function n(t,n,a){u&&(u.key=t,u.index=n,u.first=0===n,u.last=!!a,d&&(u.contextPath=d+t)),s+=i(e[t],{data:u,blockParams:r.blockParams([e[t],t],[d+t,null])})}if(!t)throw new a.default("Must pass iterator to #each");var i=t.fn,o=t.inverse,l=0,s="",u=void 0,d=void 0;if(t.data&&t.ids&&(d=r.appendContextPath(t.data.contextPath,t.ids[0])+"."),r.isFunction(e)&&(e=e.call(this)),t.data&&(u=r.createFrame(t.data)),e&&"object"===(void 0===e?"undefined":_typeof(e)))if(r.isArray(e))for(var c=e.length;l<c;l++)l in e&&n(l,l,l===e.length-1);else{var f=void 0;for(var p in e)e.hasOwnProperty(p)&&(void 0!==f&&n(f,l-1),f=p,l++);void 0!==f&&n(f,l-1,!0)}return 0===l&&(s=o(this)),s})},t.exports=n.default},{"../exception":5,"../utils":18}],9:[function(e,t,n){n.__esModule=!0;var r=function(e){return e&&e.__esModule?e:{default:e}}(e("../exception"));n.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new r.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},t.exports=n.default},{"../exception":5}],10:[function(e,t,n){n.__esModule=!0;var r=e("../utils");n.default=function(e){e.registerHelper("if",function(e,t){return r.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||r.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},t.exports=n.default},{"../utils":18}],11:[function(e,t,n){n.__esModule=!0,n.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)t.push(arguments[r]);var a=1;null!=n.hash.level?a=n.hash.level:n.data&&null!=n.data.level&&(a=n.data.level),t[0]=a,e.log.apply(e,t)})},t.exports=n.default},{}],12:[function(e,t,n){n.__esModule=!0,n.default=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})},t.exports=n.default},{}],13:[function(e,t,n){n.__esModule=!0;var r=e("../utils");n.default=function(e){e.registerHelper("with",function(e,t){r.isFunction(e)&&(e=e.call(this));var n=t.fn;if(r.isEmpty(e))return t.inverse(this);var a=t.data;return t.data&&t.ids&&((a=r.createFrame(t.data)).contextPath=r.appendContextPath(t.data.contextPath,t.ids[0])),n(e,{data:a,blockParams:r.blockParams([e],[a&&a.contextPath])})})},t.exports=n.default},{"../utils":18}],14:[function(e,t,n){n.__esModule=!0;var r=e("./utils"),a={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=r.indexOf(a.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=a.lookupLevel(e),"undefined"!=typeof console&&a.lookupLevel(a.level)<=e){var t=a.methodMap[e];console[t]||(t="log");for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];console[t].apply(console,r)}}};n.default=a,t.exports=n.default},{"./utils":18}],15:[function(e,t,n){(function(e){n.__esModule=!0,n.default=function(t){var n=void 0!==e?e:window,r=n.Handlebars;t.noConflict=function(){return n.Handlebars===t&&(n.Handlebars=r),t}},t.exports=n.default}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],16:[function(e,t,n){function r(e){var t=e&&e[0]||1,n=p.COMPILER_REVISION;if(t!==n){if(t<n){var r=p.REVISION_CHANGES[n],a=p.REVISION_CHANGES[t];throw new f.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+a+").")}throw new f.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function a(e,t){function n(n,r,a){a.hash&&(r=c.extend({},r,a.hash),a.ids&&(a.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,a);var i=t.VM.invokePartial.call(this,n,r,a);if(null==i&&t.compile&&(a.partials[a.name]=t.compile(n,e.compilerOptions,t),i=a.partials[a.name](r,a)),null!=i){if(a.indent){for(var o=i.split("\n"),l=0,s=o.length;l<s&&(o[l]||l+1!==s);l++)o[l]=a.indent+o[l];i=o.join("\n")}return i}throw new f.default("The partial "+a.name+" could not be compiled when running in runtime-only mode")}function r(t){function n(t){return""+e.main(a,t,a.helpers,a.partials,o,s,l)}var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=i.data;r._setup(i),!i.partial&&e.useData&&(o=u(t,o));var l=void 0,s=e.useBlockParams?[]:void 0;return e.useDepths&&(l=i.depths?t!=i.depths[0]?[t].concat(i.depths):i.depths:[t]),(n=d(e.main,n,a,i.depths||[],o,s))(t,i)}if(!t)throw new f.default("No environment passed to template");if(!e||!e.main)throw new f.default("Unknown template object: "+(void 0===e?"undefined":_typeof(e)));e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var a={strict:function(e,t){if(!(t in e))throw new f.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var n=e.length,r=0;r<n;r++)if(e[r]&&null!=e[r][t])return e[r][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:c.escapeExpression,invokePartial:n,fn:function(t){var n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,a){var o=this.programs[e],l=this.fn(e);return t||a||r||n?o=i(this,e,l,t,n,r,a):o||(o=this.programs[e]=i(this,e,l)),o},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var n=e||t;return e&&t&&e!==t&&(n=c.extend({},t,e)),n},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};return r.isTop=!0,r._setup=function(n){n.partial?(a.helpers=n.helpers,a.partials=n.partials,a.decorators=n.decorators):(a.helpers=a.merge(n.helpers,t.helpers),e.usePartial&&(a.partials=a.merge(n.partials,t.partials)),(e.usePartial||e.useDecorators)&&(a.decorators=a.merge(n.decorators,t.decorators)))},r._child=function(t,n,r,o){if(e.useBlockParams&&!r)throw new f.default("must pass block params");if(e.useDepths&&!o)throw new f.default("must pass parent depths");return i(a,t,e[t],n,0,r,o)},r}function i(e,t,n,r,a,i,o){function l(t){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=o;return!o||t==o[0]||t===e.nullContext&&null===o[0]||(l=[t].concat(o)),n(e,t,e.helpers,e.partials,a.data||r,i&&[a.blockParams].concat(i),l)}return l=d(n,l,e,o,r,i),l.program=t,l.depth=o?o.length:0,l.blockParams=a||0,l}function o(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],e}function l(e,t,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var a=void 0;if(n.fn&&n.fn!==s&&function(){n.data=p.createFrame(n.data);var e=n.fn;a=n.data["partial-block"]=function(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=p.createFrame(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=c.extend({},n.partials,e.partials))}(),void 0===e&&a&&(e=a),void 0===e)throw new f.default("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)}function s(){return""}function u(e,t){return t&&"root"in t||((t=t?p.createFrame(t):{}).root=e),t}function d(e,t,n,r,a,i){if(e.decorator){var o={};t=e.decorator(t,o,n,r&&r[0],a,i,r),c.extend(t,o)}return t}n.__esModule=!0,n.checkRevision=r,n.template=a,n.wrapProgram=i,n.resolvePartial=o,n.invokePartial=l,n.noop=s;var c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(e("./utils")),f=function(e){return e&&e.__esModule?e:{default:e}}(e("./exception")),p=e("./base")},{"./base":2,"./exception":5,"./utils":18}],17:[function(e,t,n){function r(e){this.string=e}n.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},n.default=r,t.exports=n.default},{}],18:[function(e,t,n){function r(e){return c[e]}function a(e){for(var t=1;t<arguments.length;t++)for(var n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}function i(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function o(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return p.test(e)?e.replace(f,r):e}function l(e){return!e&&0!==e||!(!m(e)||0!==e.length)}function s(e){var t=a({},e);return t._parent=e,t}function u(e,t){return e.path=t,e}function d(e,t){return(e?e+".":"")+t}n.__esModule=!0,n.extend=a,n.indexOf=i,n.escapeExpression=o,n.isEmpty=l,n.createFrame=s,n.blockParams=u,n.appendContextPath=d;var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},f=/[&<>"'`=]/g,p=/[&<>"'`=]/,h=Object.prototype.toString;n.toString=h;var v=function(e){return"function"==typeof e};v(/x/)&&(n.isFunction=v=function(e){return"function"==typeof e&&"[object Function]"===h.call(e)}),n.isFunction=v;var m=Array.isArray||function(e){return!(!e||"object"!==(void 0===e?"undefined":_typeof(e)))&&"[object Array]"===h.call(e)};n.isArray=m},{}],19:[function(e,t,n){t.exports=e("./dist/cjs/handlebars.runtime").default},{"./dist/cjs/handlebars.runtime":1}],20:[function(e,t,n){var r=e("handlebars/runtime"),a=r.template,i=r.templates=r.templates||{};i["field-checkbox"]=a({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){var i,o=e.lambda,l=e.escapeExpression;return'<input type="checkbox" data-hc-bind="change:$validateField" data-hc-json-path="'+l(o(null!=t?t.jsonPath:t,t))+'" id="field-'+l(o(null!=t?t.jsonPath:t,t))+'" '+(null!=(i=o(null!=t?t.checked:t,t))?i:"")+'/><span class="validation-result"></span>\n'},useData:!0}),i["field-container"]=a({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){var i,o=e.lambda,l=e.escapeExpression;return'<fieldset>\n  <label for="field-'+l(o(null!=t?t.jsonPath:t,t))+'">'+l(o(null!=t?t.name:t,t))+"</label>\n  <legend>"+l(o(null!=t?t.description:t,t))+"</legend>\n  "+(null!=(i=o(null!=t?t.inputWidget:t,t))?i:"")+"\n</fieldset>\n"},useData:!0}),i["field-table-delete-row"]=a({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){var i=e.lambda,o=e.escapeExpression;return'<input type="button" data-hc-bind="click:$deleteTableRow" data-hc-json-path="'+o(i(null!=t?t.jsonPath:t,t))+'" data-hc-row-index="'+o(i(null!=t?t.rowIndex:t,t))+'" value="Delete Row" />\n'},useData:!0}),i["field-table"]=a({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){return'<div class="hc-table"></div>\n<input type="button" data-hc-bind="click:$addTableRow" data-hc-json-path="'+e.escapeExpression(e.lambda(null!=t?t.jsonPath:t,t))+'" value="Add Row" />\n'},useData:!0}),i["field-text"]=a({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){var i=e.lambda,o=e.escapeExpression;return'<input type="text" data-hc-bind="change:$validateField keyup:$validateField" data-hc-json-path="'+o(i(null!=t?t.jsonPath:t,t))+'" id="field-'+o(i(null!=t?t.jsonPath:t,t))+'" value="'+o(i(null!=t?t.value:t,t))+'" /><span class="validation-result"></span>\n'},useData:!0}),i.page=a({compiler:[7,">= 4.0.0"],main:function(e,t,n,r,a){return'<div class="page">\n  <form>\n    <h1>HC Scaffold</h1>\n    <div class="form-body"></div>\n    <div class="form-controls">\n    </div>\n  </form>\n  <div class="sidebar">\n    <input type="button" data-hc-bind="click:$downloadJson" value="Download Scaffold Json" />\n    <pre class="json-display json"></pre>\n  </div>\n</div>\n'},useData:!0})},{"handlebars/runtime":19}],21:[function(e,t,n){var r=hc_scaffold_wizard.Wizard,a=e("handlebars/runtime");e("../gen/webtemplates");var i=function(){function e(t){_classCallCheck(this,e),document.body.appendChild(this._genTemplate("page",{})),this.formBody=document.body.querySelector(".form-body"),this.jsonDisplay=document.body.querySelector(".json-display"),this.wiz=new r(t),this._displayJson(),this.fields={}}return _createClass(e,[{key:"run",value:function(){var e=this;return new Promise(function(t,n){e._resolve=t,e._reject=n,e._run()})}},{key:"$validateField",value:function(e,t,n){if(!("json-path"in n&&n["json-path"]in this.fields))throw new Error("invalid validateField call "+JSON.stringify(n));var r=this.fields[n["json-path"]],a="ok";try{r.fieldDef.setValue(r.setter(e))}catch(e){a=e.toString()}for(var i=r.validationResultElem;i.childNodes.length;)i.removeChild(i.childNodes[0]);i.appendChild(document.createTextNode(a)),"ok"===a?(i.classList.remove("validation-fail"),i.classList.add("validation-ok")):(i.classList.add("validation-fail"),i.classList.remove("validation-ok")),this._displayJson()}},{key:"$downloadJson",value:function(e,t,n){var r=JSON.stringify(this.wiz.getJson(),null,"  ");r=new Blob([r],{type:"application/json"}),r=URL.createObjectURL(r);var a=document.createElement("a");a.style.display="none",a.href=r,a.download="hc-scaffold.json",document.body.appendChild(a),a.click(),document.body.removeChild(a),window.revokeObjectURL(r)}},{key:"$addTableRow",value:function(e,t,n){if(!("json-path"in n&&n["json-path"]in this.fields))throw new Error("invalid addTableRow call "+JSON.stringify(n));var r=this.fields[n["json-path"]],a=r.fieldDef,i=JSON.parse(JSON.stringify(a.getValue())),o={},l=!0,s=!1,u=void 0;try{for(var d,c=a.children[Symbol.iterator]();!(l=(d=c.next()).done);l=!0){var f=d.value;o[f.path]=f.getDefault()}}catch(e){s=!0,u=e}finally{try{!l&&c.return&&c.return()}finally{if(s)throw u}}i.push(o),a.value=i,this._fillTable(r),this._displayJson()}},{key:"$deleteTableRow",value:function(e,t,n){if(!("json-path"in n&&n["json-path"]in this.fields))throw new Error("invalid deleteTableRow call "+JSON.stringify(n));if(!("row-index"in n))throw new Error("invalid deleteTableRow call "+JSON.stringify(n));var r=this.fields[n["json-path"]],a=r.fieldDef,i=parseInt(n["row-index"]),o=JSON.parse(JSON.stringify(a.getValue()));o.splice(i,1),a.value=o,this._fillTable(r),this._displayJson()}},{key:"_run",value:function(){var e=this.wiz.getNextFieldDef();if(!e)return void this._resolve(this.wiz);var t=this._genField(e,e.getJsonPath());this.formBody.appendChild(t.containerElem),this._run()}},{key:"_displayJson",value:function(){for(;this.jsonDisplay.childNodes.length;)this.jsonDisplay.removeChild(this.jsonDisplay.childNodes[0]);this.jsonDisplay.appendChild(document.createTextNode(JSON.stringify(this.wiz.getJson(),null,"  "))),hljs.highlightBlock(this.jsonDisplay)}},{key:"_recBind",value:function(e){var t=this,n=!0,r=!1,a=void 0;try{for(var i,o=e.childNodes[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var l=i.value;this._recBind(l)}}catch(e){r=!0,a=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw a}}if(e.getAttribute){var s=e.getAttribute("data-hc-bind");if(s){s=s.split(/\s+/);var u={},d=!0,c=!1,f=void 0;try{for(var p,h=e.attributes[Symbol.iterator]();!(d=(p=h.next()).done);d=!0){var v=p.value;v.name&&v.name.startsWith("data-hc-")&&(u[v.name.substr(8)]=v.value||v.nodeValue||v.textContent)}}catch(e){c=!0,f=e}finally{try{!d&&h.return&&h.return()}finally{if(c)throw f}}var m=void 0,g=!0,y=!1,b=void 0;try{for(var w,_=s[Symbol.iterator]();!(g=(w=_.next()).done);g=!0)!function(n){var r=n.split(":"),a=r[1];r=r[0],e.addEventListener(r,function(){if("function"!=typeof t[a])throw new Error("bad bind "+a);clearTimeout(m),m=setTimeout(function(){t[a](e,r,JSON.parse(JSON.stringify(u)))},200)},!1)}(w.value)}catch(e){y=!0,b=e}finally{try{!g&&_.return&&_.return()}finally{if(y)throw b}}}}}},{key:"_genTemplate",value:function(e,t){var n=document.createElement("div");n.innerHTML=a.templates[e](t);var r=n.childNodes[0];return n.removeChild(r),this._recBind(r),r}},{key:"_genField",value:function(e,t){var n={fieldDef:e},r=void 0;switch(e.getHcHintType()){case"table":r=a.templates["field-table"]({jsonPath:t});break;case"checkbox":r=a.templates["field-checkbox"]({jsonPath:t,checked:e.getValue()?'checked="checked"':""}),n.setter=function(e){return e.checked?"true":"false"};break;default:r=a.templates["field-text"]({jsonPath:t,value:e.getValue()}),n.setter=function(e){return e.value}}return n.containerElem=this._genTemplate("field-container",{jsonPath:t,name:e.getTrName(),description:e.getTrDescription(),inputWidget:r}),n.validationResultElem=n.containerElem.querySelector(".validation-result"),"table"===e.getHcHintType()&&this._fillTable(n),this.fields[t]=n,n}},{key:"_fillTable",value:function(e){for(var t=this,n=e.fieldDef.getJsonPath(),r=e.containerElem.querySelector(".hc-table");r.childNodes.length;)r.removeChild(r.childNodes[0]);for(var a=e.fieldDef.getValue(),i=0;i<a.length;++i)!function(i){var o=a[i],l=document.createElement("div");l.classList.add("hc-table-row"),l.appendChild(t._genTemplate("field-table-delete-row",{jsonPath:n,rowIndex:i}));var s=!0,u=!1,d=void 0;try{for(var c,f=e.fieldDef.children[Symbol.iterator]();!(s=(c=f.next()).done);s=!0)!function(n){n.value=o[n.path];var r=n.getJsonPath()+"["+i+"]",a=t._genField(n,r),s=a.setter;a.setter=function(n){var r=s(n);return t._tableValidate(e,a,i,r),r},l.appendChild(a.containerElem)}(c.value)}catch(e){u=!0,d=e}finally{try{!s&&f.return&&f.return()}finally{if(u)throw d}}r.appendChild(l)}(i)}},{key:"_tableValidate",value:function(e,t,n,r){var a=e.fieldDef,i=JSON.parse(JSON.stringify(a.getValue()));i[n][t.fieldDef.path]=r,a.setValue(i)}}]),e}();!function(){new i(null).run().then(function(e){console.log(JSON.stringify(e.getJson(),null,"  "))},function(e){console.error(e)})}()},{"../gen/webtemplates":20,"handlebars/runtime":19}]},{},[21])(21)});