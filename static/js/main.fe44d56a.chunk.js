(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{80:function(e,a,t){e.exports=t(81)},81:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return b});var n=t(46),l=t(47),r=t(59),c=t(48),s=t(58),i=t(0),o=t.n(i),m=t(49),d=t.n(m),u=t(6),g=(t(86),t(50)),p=t.n(g),b=(t(89),function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(u.d,{app:"spotlightsearch",credentials:"viCwcDpu7:f78f550b-9926-402f-b603-d6bb1aa56d27",url:"https://scalr.api.appbase.io",analytics:!0},o.a.createElement("table",{className:"maintable"},o.a.createElement("tbody",null,o.a.createElement("tr",{valign:"top"},o.a.createElement("td",null,o.a.createElement(u.a,{componentId:"search",dataField:["name","jobtitle","jobcompany","sector"],fieldWeights:[100,1,1,1],fuzziness:0,highlightField:["name"],URLParams:!0,style:{marginBottom:20}}),o.a.createElement("table",{className:"maintable"},o.a.createElement("tbody",null,o.a.createElement("tr",{valign:"top"},o.a.createElement("td",{className:"filtertablerow"},o.a.createElement(u.c,{componentId:"Sector",dataField:"categories.keyword",placeholder:"Search Sectors",size:1e4,style:{marginBottom:20,fontSize:12},title:"By Sector",URLParams:!0,react:{and:["Country","search","Sector","willingness","quality","Region","lsfirstdegree"]}})),o.a.createElement("td",{className:"filtertablerow"},o.a.createElement(u.c,{componentId:"Region",dataField:"region.keyword",placeholder:"Search Regions",size:1e4,style:{marginBottom:20,fontSize:12},title:"By Region",URLParams:!0,react:{and:["Country","search","Sector","willingness","quality","Region","lsfirstdegree"]}})),o.a.createElement("td",{className:"filtertablerow"},o.a.createElement(u.c,{componentId:"Country",dataField:"country.keyword",placeholder:"Search Countries",size:1e4,style:{fontSize:12,marginBottom:20},title:"By Country",URLParams:!0,react:{and:["Country","search","Sector","willingness","quality","Region","lsfirstdegree"]}})),o.a.createElement("td",{className:"filtertablerow"},o.a.createElement(u.b,{componentId:"willingness",dataField:"willingness",title:"Willingness To Share",URLParams:!0,data:[{label:"A",value:"5"},{label:"B",value:"4"},{label:"C",value:"3"}],showSearch:!1,react:{and:["Country","search","Sector","willingness","quality","Region","lsfirstdegree"]}})),o.a.createElement("td",{className:"filtertablerow"},o.a.createElement(u.b,{componentId:"quality",dataField:"quality",title:"Quality of Insight",URLParams:!0,data:[{label:"A",value:"5"},{label:"B",value:"4"},{label:"C",value:"3"}],showSearch:!1,react:{and:["Country","search","Sector","willingness","quality","Region","lsfirstdegree"]}})),o.a.createElement("td",{className:"filtertablerow"},o.a.createElement(u.g,{componentId:"lsfirstdegree",dataField:"lscontactcount",URLParams:!0,data:[{start:1,end:14,label:"Yes"},{start:0,end:0,label:"No"}],title:"LS First Degree Contact",showFilter:!1}))))),o.a.createElement(u.f,null),o.a.createElement(u.e,{componentId:"result",dataField:"name",pagination:!0,showResultStats:!1,react:{and:["Country","search","Sector","willingness","quality","Region","lsfirstdegree"]},renderData:h,size:20,style:{marginTop:20}}))))))}}]),a}(o.a.Component));function h(e){var a=new URLSearchParams(window.location.search),t=a.get("Sector"),n=a.get("Country"),l=a.get("Region"),r=a.get("willingness"),c=a.get("quality"),s=a.get("lsfirstdegree"),i=a.get("search");return t||n||l||r||c||s||i?o.a.createElement("div",{className:"list-item",key:e._id},o.a.createElement(p.a,{previewHeight:"390px",expandText:"Show more"},o.a.createElement("table",{className:"maintable"},o.a.createElement("tr",null,o.a.createElement("td",{className:"padright",valign:"top",rowSpan:"2"},e.avatar&&"NULL"!=e.avatar?o.a.createElement("img",{width:"50px",src:e.avatar.replace("t_api_images/w_50,h_50,c_scale/","t_api_images/")}):"Person"==e.url.substring(0,6)?o.a.createElement("img",{width:"50px",src:"https://cdn.icon-icons.com/icons2/510/PNG/512/person_icon-icons.com_50075.png"}):o.a.createElement("img",{width:"50px",src:"https://visualpharm.com/assets/302/Company-595b40b75ba036ed117d5a00.svg"})),o.a.createElement("td",{className:"namefont"},o.a.createElement("a",{target:"_parent",href:"https://lscportal.azurewebsites.net/webpages/RMS/"+e.url},e.name),o.a.createElement("div",{className:"icondiv"},e.crunchbase&&"NULL"!=e.crunchbase&&"nbsp;"!=e.cruncbase?"Person"==e.url.substring(0,6)?o.a.createElement("a",{target:"_blank",href:"http://crunchbase.com/person/"+e.crunchbase},o.a.createElement("img",{src:"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/p370x247/14238104_10154509878326171_7795750764042171439_n.png?_nc_cat=100&_nc_ht=scontent-sjc3-1.xx&oh=193da79d7563483ba878729156683717&oe=5D138A28"})):o.a.createElement("a",{target:"_blank",href:"http://crunchbase.com/organization/"+e.crunchbase},o.a.createElement("img",{src:"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/p370x247/14238104_10154509878326171_7795750764042171439_n.png?_nc_cat=100&_nc_ht=scontent-sjc3-1.xx&oh=193da79d7563483ba878729156683717&oe=5D138A28",alt:""})):null,e.linkedin&&"NULL"!=e.linkedin?o.a.createElement("a",{target:"_blank",href:e.linkedin},o.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",alt:""})):null,e.facebook&&"NULL"!=e.facebook?o.a.createElement("a",{target:"_blank",href:e.facebook},o.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png",alt:""})):null))),o.a.createElement("tr",{className:"rowup"},o.a.createElement("td",null,o.a.createElement("div",{className:"jobtitlefont"},"Person"==e.url.substring(0,6)&&"NULL"!=e.jobtitle?e.jobtitle+" at ":null,"Person"==e.url.substring(0,6)&&"NULL"!=e.jobtitle?o.a.createElement("a",{target:"_parent",href:"https://lscportal.azurewebsites.net/webpages/RMS/Company.aspx?SearchCompanyName="+e.jobcompany},e.jobcompany):null),o.a.createElement("div",null,o.a.createElement("div",{className:"card-bottom"},e.willingness>0?o.a.createElement("div",{className:"card-stars"},"Willingess:"," ",e.willingness.replace("5","A").replace("4","B").replace("3","C").replace("2","D").replace("0","F")):null,e.quality>0?o.a.createElement("div",{className:"card-stars"},"Quality:"," ",e.quality.replace("5","A").replace("4","B").replace("3","C").replace("2","D").replace("0","F")):null,e.lscontactcount>0?o.a.createElement("div",{className:"card-stars"},"LS Contacts: ",e.lscontactcount):null),e.categories.length>0?o.a.createElement("div",{className:"card-tags"},e.categories.slice(0,7).map(function(a){return o.a.createElement("span",{className:"card-tag",key:"".concat(e.name,"-").concat(a)},"#",a)})):null)))))):null}new URLSearchParams(window.location.search);d.a.render(o.a.createElement(b,null),document.getElementById("root"))},89:function(e,a,t){}},[[80,1,2]]]);
//# sourceMappingURL=main.fe44d56a.chunk.js.map