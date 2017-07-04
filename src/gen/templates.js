var Handlebars=require("handlebars/runtime"),template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates.about=template({compiler:[7,">= 4.0.0"],main:function(a,n,e,l,t){var i,d=null!=n?n:a.nullContext||{},s=e.helperMissing,c=a.escapeExpression;return'<div>\n<h1>\n  <i class="material-icons">&#xE88E;</i> - '+c((e.__||n&&n.__||s).call(d,"pageTitle",{name:"__",hash:{},data:t}))+'\n</h1>\n<br />\n<div>\n  Version: <pre style="display: inline-block">'+c((i=null!=(i=e.version||(null!=n?n.version:n))?i:s,"function"==typeof i?i.call(d,{name:"version",hash:{},data:t}):i))+'</pre><br />\n  <br />\n  This project uses software.<br />\n  <a href="'+c((i=null!=(i=e.url||(null!=n?n.url:n))?i:s,"function"==typeof i?i.call(d,{name:"url",hash:{},data:t}):i))+'">'+c((i=null!=(i=e.url||(null!=n?n.url:n))?i:s,"function"==typeof i?i.call(d,{name:"url",hash:{},data:t}):i))+"</a>\n</div>\n</div>\n"},useData:!0}),templates["lang-button"]=template({compiler:[7,">= 4.0.0"],main:function(a,n,e,l,t){var i,d=null!=n?n:a.nullContext||{},s=e.helperMissing,c=a.escapeExpression;return'<a href="javascript:void(0)" data-hc-bind="click:$selectLocale" data-hc-locale="'+c((i=null!=(i=e.locale||(null!=n?n.locale:n))?i:s,"function"==typeof i?i.call(d,{name:"locale",hash:{},data:t}):i))+'">\n  <i class="material-icons">&#xE894;</i><span>'+c((i=null!=(i=e.langName||(null!=n?n.langName:n))?i:s,"function"==typeof i?i.call(d,{name:"langName",hash:{},data:t}):i))+"</span>\n</a>\n"},useData:!0}),templates.menu=template({compiler:[7,">= 4.0.0"],main:function(a,n,e,l,t){var i,d=null!=n?n:a.nullContext||{},s=e.helperMissing,c="function",o=a.escapeExpression;return'<div class="menu-bg" data-hc-bind="click:$dismiss" data-hc-id="'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'">\n  <div class="menu-container">\n    <a href="javascript:void(0)" data-hc-bind="click:$languageMenu" data-hc-id="'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'">\n      <i class="material-icons">&#xE894;</i><span>'+o((e.__||n&&n.__||s).call(d,"button-language",{name:"__",hash:{},data:t}))+'</span>\n    </a>\n    <a href="javascript:void(0)" data-hc-bind="click:$newDocument" data-hc-id="'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'">\n      <i class="material-icons">&#xE148;</i><span>'+o((e.__||n&&n.__||s).call(d,"button-newDocument",{name:"__",hash:{},data:t}))+'</span>\n    </a>\n    <a href="javascript:void(0)" data-hc-bind="click:$upload" data-hc-id="'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'">\n      <i class="material-icons">&#xE2C6;</i><span>'+o((e.__||n&&n.__||s).call(d,"button-upload",{name:"__",hash:{},data:t}))+'</span>\n    </a>\n    <a href="javascript:void(0)" data-hc-bind="click:$downloadYaml">\n      <i class="material-icons">&#xE2C4;</i><span>'+o((e.__||n&&n.__||s).call(d,"button-downloadScaffoldYaml",{name:"__",hash:{},data:t}))+'</span>\n    </a>\n    <a href="javascript:void(0)" data-hc-bind="click:$about" data-hc-id="'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'">\n      <i class="material-icons">&#xE88E;</i><span>'+o((e.__||n&&n.__||s).call(d,"button-about",{name:"__",hash:{},data:t}))+"</span>\n    </a>\n  </div>\n</div>\n"},useData:!0}),templates.modal=template({compiler:[7,">= 4.0.0"],main:function(a,n,e,l,t){var i,d=null!=n?n:a.nullContext||{},s=e.helperMissing,c=a.escapeExpression;return'<div class="modal-bg" data-hc-bind="click:$dismiss" data-hc-id="'+c((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,"function"==typeof i?i.call(d,{name:"id",hash:{},data:t}):i))+'">\n  <div class="modal-wrap" data-hc-bind="click:$intercept">\n    <div class="modal-container">\n    </div>\n    <div class="modal-button">\n      <a href="javascript:void(0)" data-hc-bind="click:$dismiss" data-hc-id="'+c((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,"function"==typeof i?i.call(d,{name:"id",hash:{},data:t}):i))+'">\n        <i class="material-icons">&#xE5C4;</i><span>'+c((e.__||n&&n.__||s).call(d,"button-back",{name:"__",hash:{},data:t}))+"</span>\n      </a>\n    </div>\n  </div>\n</div>\n"},useData:!0}),templates.page=template({compiler:[7,">= 4.0.0"],main:function(a,n,e,l,t){var i=null!=n?n:a.nullContext||{},d=e.helperMissing,s=a.escapeExpression;return'<div class="page">\n  <form>\n    <h1>'+s((e.__||n&&n.__||d).call(i,"pageTitle",{name:"__",hash:{},data:t}))+'</h1>\n    <div class="instructions">'+s((e.__||n&&n.__||d).call(i,"pageInstructions",{name:"__",hash:{},data:t}))+"</div>\n    <fieldset>\n      <legend>"+s((e.__||n&&n.__||d).call(i,"field-name-Name",{name:"__",hash:{},data:t}))+'</legend>\n      <label for="appname">'+s((e.__||n&&n.__||d).call(i,"field-desc-Name",{name:"__",hash:{},data:t}))+'</label>\n      <input type="text" data-hc-bind="change:$render keyup:$render" id="appname" />\n    </fieldset>\n    <fieldset>\n      <legend>'+s((e.__||n&&n.__||d).call(i,"field-name-Properties.description",{name:"__",hash:{},data:t}))+'</legend>\n      <label for="appdesc">'+s((e.__||n&&n.__||d).call(i,"field-desc-Properties.description",{name:"__",hash:{},data:t}))+'</label>\n      <input type="text" data-hc-bind="change:$render keyup:$render" id="appdesc" />\n    </fieldset>\n\n    <div class="instructions">\n      '+s((e.__||n&&n.__||d).call(i,"field-desc-Zomes",{name:"__",hash:{},data:t}))+'\n    </div>\n    <div id="zomes"></div>\n    <a href="javascript:void(0)" data-hc-bind="click:$addZome">\n      <i class="material-icons">&#xE147;</i><span>'+s((e.__||n&&n.__||d).call(i,"button-addZome",{name:"__",hash:{},data:t}))+'</span>\n    </a>\n  </form>\n  <div class="sidebar">\n    <a href="javascript:void(0)" data-hc-bind="click:$toggleYaml" class="when-shown">\n      <i class="material-icons">&#xE315;</i><span>'+s((e.__||n&&n.__||d).call(i,"button-showHideYaml",{name:"__",hash:{},data:t}))+'</span>\n    </a>\n    <a href="javascript:void(0)" data-hc-bind="click:$menu" class="when-shown">\n      <i class="material-icons">&#xE5D2;</i><span>'+s((e.__||n&&n.__||d).call(i,"button-menu",{name:"__",hash:{},data:t}))+'</span>\n    </a>\n    <a title="'+s((e.__||n&&n.__||d).call(i,"button-showHideYaml",{name:"__",hash:{},data:t}))+'" href="javascript:void(0)" data-hc-bind="click:$toggleYaml" class="no-text when-hidden">\n      <i class="material-icons">&#xE314;</i>\n    </a>\n    <a title="'+s((e.__||n&&n.__||d).call(i,"button-menu",{name:"__",hash:{},data:t}))+'" href="javascript:void(0)" data-hc-bind="click:$menu" class="no-text when-hidden">\n      <i class="material-icons">&#xE5D2;</i>\n    </a>\n    <div class="yaml-wrapper">\n      <div class="yaml-display"></div>\n    </div>\n  </div>\n</div>\n'},useData:!0}),templates["zome-code"]=template({compiler:[7,">= 4.0.0"],main:function(a,n,e,l,t){return'<div class="javascript-wrap">\n  <div class="javascript-display"></div>\n</div>\n'},useData:!0}),templates["zome-entry-advanced"]=template({compiler:[7,">= 4.0.0"],main:function(a,n,e,l,t){var i,d=null!=n?n:a.nullContext||{},s=e.helperMissing;return'<div class="entry-advanced-wrap">\n  <div class="entry-advanced-top">\n    <h1>'+a.escapeExpression((e.__||n&&n.__||s).call(d,"zomeAdvancedOptions",null!=n?n.zomeName:n,null!=n?n.entryName:n,{name:"__",hash:{},data:t}))+'</h1>\n    <div class="instructions">'+(null!=(i=(e.__||n&&n.__||s).call(d,"zomeEntrySchemaInstructions",{name:"__",hash:{},data:t}))?i:"")+'</div>\n    <div class="instructions results">changes saved</div>\n  </div>\n  <div class="entry-advanced-bottom">\n    <div class="json-schema-wrap">\n      <div class="json-schema-display"></div>\n    </div>\n  </div>\n</div>\n'},useData:!0}),templates["zome-entry"]=template({compiler:[7,">= 4.0.0"],main:function(a,n,e,l,t){var i,d=null!=n?n:a.nullContext||{},s=e.helperMissing,c="function",o=a.escapeExpression;return'<tr class="zome-entry-row" id="'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'">\n  <td>\n    <a href="javascript:void(0)" data-hc-bind="click:$deleteZomeEntry" data-hc-id="'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'">\n      <i class="material-icons">&#xE92B;</i><span>'+o((e.__||n&&n.__||s).call(d,"button-deleteZomeEntry",{name:"__",hash:{},data:t}))+'</span>\n    </a>\n  </td>\n  <td>\n    <input type="text" data-hc-bind="change:$render keyup:$render" id="name-'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'" class="zome-entry-name" />\n  </td>\n  <td>\n    <select data-hc-bind="change:$render change:$entryRowType" data-hc-id="'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'" class="zome-entry-data-format">\n      <option value="json" selected="selected">Json</option>\n      <option value="links">Links</option>\n      <option value="string">String</option>\n    </select>\n  </td>\n  <td>\n    <select data-hc-bind="change:$render" class="zome-entry-sharing">\n      <option value="public" selected="selected">Public</option>\n      <option value="private">Private</option>\n    </select>\n  </td>\n  <td>\n    <input type="checkbox" data-hc-bind="change:$render" name="create-'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'" checked="checked" class="zome-entry-create" />\n  </td>\n  <td>\n    <input type="checkbox" data-hc-bind="change:$render" name="read-'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'" checked="checked" class="zome-entry-read" />\n  </td>\n  <td>\n    <input type="checkbox" data-hc-bind="change:$render" name="update-'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'" class="zome-entry-update" />\n  </td>\n  <td>\n    <input type="checkbox" data-hc-bind="change:$render" name="delete-'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'" class="zome-entry-delete" />\n  </td>\n  <td>\n    <a title="'+o((e.__||n&&n.__||s).call(d,"button-zomeEntryMore",{name:"__",hash:{},data:t}))+'" href="javascript:void(0)" data-hc-bind="click:$zomeEntryMore" data-hc-id="'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'" data-hc-zome-id="'+o((i=null!=(i=e["zome-id"]||(null!=n?n["zome-id"]:n))?i:s,typeof i===c?i.call(d,{name:"zome-id",hash:{},data:t}):i))+'" class="no-text entry-more">\n      <i class="material-icons">&#xE5D3;</i>\n    </a>\n  </td>\n</tr>\n'},useData:!0}),templates["zome-function"]=template({compiler:[7,">= 4.0.0"],main:function(a,n,e,l,t){var i,d=null!=n?n:a.nullContext||{},s=e.helperMissing,c=a.escapeExpression;return'<tr class="zome-function-row" id="'+c((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,"function"==typeof i?i.call(d,{name:"id",hash:{},data:t}):i))+'">\n  <td>\n    <a href="javascript:void(0)" data-hc-bind="click:$deleteZomeFunction" data-hc-id="'+c((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,"function"==typeof i?i.call(d,{name:"id",hash:{},data:t}):i))+'">\n      <i class="material-icons">&#xE92B;</i><span>'+c((e.__||n&&n.__||s).call(d,"button-deleteZomeFunction",{name:"__",hash:{},data:t}))+'</span>\n    </a>\n  </td>\n  <td>\n    <input type="text" data-hc-bind="change:$render keyup:$render" id="name-'+c((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,"function"==typeof i?i.call(d,{name:"id",hash:{},data:t}):i))+'" class="zome-function-name" />\n  </td>\n  <td>\n    <select data-hc-bind="change:$render" class="zome-function-calling-type">\n      <option value="json" selected="selected">Json</option>\n      <option value="string">String</option>\n    </select>\n  </td>\n  <td>\n    <select data-hc-bind="change:$render" class="zome-function-exposure">\n      <option value="" selected="selected">Zome</option>\n      <option value="auth">Auth</option>\n      <option value="public">Public</option>\n    </select>\n  </td>\n</tr>\n'},useData:!0}),templates["zome-options"]=template({compiler:[7,">= 4.0.0"],main:function(a,n,e,l,t){var i,d=null!=n?n:a.nullContext||{},s=e.helperMissing,c=a.escapeExpression;return'<a href="javascript:void(0)" data-hc-bind="click:$deleteZome" data-hc-id="'+c((i=null!=(i=e["zome-id"]||(null!=n?n["zome-id"]:n))?i:s,"function"==typeof i?i.call(d,{name:"zome-id",hash:{},data:t}):i))+'" data-hc-menu-id="'+c((i=null!=(i=e["menu-id"]||(null!=n?n["menu-id"]:n))?i:s,"function"==typeof i?i.call(d,{name:"menu-id",hash:{},data:t}):i))+'">\n  <i class="material-icons">&#xE92B;</i><span>'+c((e.__||n&&n.__||s).call(d,"button-deleteZome",{name:"__",hash:{},data:t}))+'</span>\n</a>\n<a href="javascript:void(0)" data-hc-bind="click:$viewZomeCode" data-hc-id="'+c((i=null!=(i=e["zome-id"]||(null!=n?n["zome-id"]:n))?i:s,"function"==typeof i?i.call(d,{name:"zome-id",hash:{},data:t}):i))+'" data-hc-menu-id="'+c((i=null!=(i=e["menu-id"]||(null!=n?n["menu-id"]:n))?i:s,"function"==typeof i?i.call(d,{name:"menu-id",hash:{},data:t}):i))+'">\n  <i class="material-icons">&#xE8A0;</i><span>'+c((e.__||n&&n.__||s).call(d,"button-viewZomeCode",{name:"__",hash:{},data:t}))+"</span>\n</a>\n"},useData:!0}),templates.zome=template({compiler:[7,">= 4.0.0"],main:function(a,n,e,l,t){var i,d=null!=n?n:a.nullContext||{},s=e.helperMissing,c="function",o=a.escapeExpression;return'<fieldset class="zome" id="'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'">\n  <a href="javascript:void(0)" data-hc-bind="click:$zomeOptions" data-hc-id="'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'">\n    <i class="material-icons">&#xE5D2;</i><span>'+o((e.__||n&&n.__||s).call(d,"button-zomeOptions",{name:"__",hash:{},data:t}))+"</span>\n  </a>\n  <fieldset>\n    <legend>"+o((e.__||n&&n.__||s).call(d,"field-name-Zomes.Name",{name:"__",hash:{},data:t}))+'</legend>\n    <label for="zomename-'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'">'+o((e.__||n&&n.__||s).call(d,"field-desc-Zomes.Name",{name:"__",hash:{},data:t}))+'</label>\n    <input type="text" data-hc-bind="change:$render keyup:$render" id="zomename-'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'" class="zomename" />\n  </fieldset>\n  <fieldset>\n    <legend>'+o((e.__||n&&n.__||s).call(d,"field-name-Zomes.Description",{name:"__",hash:{},data:t}))+'</legend>\n    <label for="zomename-'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'">'+o((e.__||n&&n.__||s).call(d,"field-desc-Zomes.Description",{name:"__",hash:{},data:t}))+'</label>\n    <input type="text" data-hc-bind="change:$render keyup:$render" id="zomedesc-'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'" class="zomedesc" />\n  </fieldset>\n  <fieldset>\n    <legend>'+o((e.__||n&&n.__||s).call(d,"field-name-Zomes.Entries",{name:"__",hash:{},data:t}))+"</legend>\n    <label>"+o((e.__||n&&n.__||s).call(d,"field-desc-Zomes.Entries",{name:"__",hash:{},data:t}))+'</label>\n    <table id="zomeentries-'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'">\n      <tr>\n        <td></td>\n        <th>'+o((e.__||n&&n.__||s).call(d,"field-name-Zomes.Entries.Name",{name:"__",hash:{},data:t}))+"</th>\n        <th>"+o((e.__||n&&n.__||s).call(d,"field-name-Zomes.Entries.DataFormat",{name:"__",hash:{},data:t}))+"</th>\n        <th>"+o((e.__||n&&n.__||s).call(d,"field-name-Zomes.Entries.Sharing",{name:"__",hash:{},data:t}))+'</th>\n        <th><i title="'+o((e.__||n&&n.__||s).call(d,"field-name-Zomes.Entries.Create",{name:"__",hash:{},data:t}))+'" class="material-icons">&#xE146;</i></th>\n        <th><i title="'+o((e.__||n&&n.__||s).call(d,"field-name-Zomes.Entries.Read",{name:"__",hash:{},data:t}))+'" class="material-icons">&#xE151;</i></th>\n        <th><i title="'+o((e.__||n&&n.__||s).call(d,"field-name-Zomes.Entries.Update",{name:"__",hash:{},data:t}))+'" class="material-icons">&#xE150;</i></th>\n        <th><i title="'+o((e.__||n&&n.__||s).call(d,"field-name-Zomes.Entries.Delete",{name:"__",hash:{},data:t}))+'" class="material-icons">&#xE14A;</i></th>\n        <td></td>\n      </tr>\n    </table>\n    <a href="javascript:void(0)" data-hc-bind="click:$addZomeEntry" data-hc-id="'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'">\n      <i class="material-icons">&#xE147;</i><span>'+o((e.__||n&&n.__||s).call(d,"button-addZomeEntry",{name:"__",hash:{},data:t}))+"</span>\n    </a>\n  </fieldset>\n  <fieldset>\n    <legend>"+o((e.__||n&&n.__||s).call(d,"field-name-Zomes.Functions",{name:"__",hash:{},data:t}))+"</legend>\n    <label>"+o((e.__||n&&n.__||s).call(d,"field-desc-Zomes.Functions",{name:"__",hash:{},data:t}))+'</label>\n    <table id="zomefunctions-'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'">\n      <tr>\n        <td></td>\n        <th>'+o((e.__||n&&n.__||s).call(d,"field-name-Zomes.Functions.Name",{name:"__",hash:{},data:t}))+"</th>\n        <th>"+o((e.__||n&&n.__||s).call(d,"field-name-Zomes.Functions.CallingType",{name:"__",hash:{},data:t}))+"</th>\n        <th>"+o((e.__||n&&n.__||s).call(d,"field-name-Zomes.Functions.Exposure",{name:"__",hash:{},data:t}))+'</th>\n      </tr>\n    </table>\n    <a href="javascript:void(0)" data-hc-bind="click:$addZomeFunction" data-hc-id="'+o((i=null!=(i=e.id||(null!=n?n.id:n))?i:s,typeof i===c?i.call(d,{name:"id",hash:{},data:t}):i))+'">\n      <i class="material-icons">&#xE147;</i><span>'+o((e.__||n&&n.__||s).call(d,"button-addZomeFunction",{name:"__",hash:{},data:t}))+"</span>\n    </a>\n  </fieldset>\n</fieldset>\n"},useData:!0});