(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{80:function(e,a,t){e.exports=t(81)},81:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return b});var n=t(46),l=t(47),r=t(59),c=t(48),s=t(58),o=t(0),i=t.n(o),m=t(49),d=t.n(m),p=t(6),u=(t(86),t(50)),g=t.n(u),b=(t(89),function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(p.d,{app:"spotlightsearch",credentials:"viCwcDpu7:f78f550b-9926-402f-b603-d6bb1aa56d27",url:"https://scalr.api.appbase.io",analytics:!0},i.a.createElement("table",{className:"maintable"},i.a.createElement("tbody",null,i.a.createElement("tr",{valign:"top"},i.a.createElement("td",null,i.a.createElement(p.a,{componentId:"search",dataField:["name","jobs_current.company_name","jobs_current.company_name.keyword","jobs_former.company_name","jobs_former.company_name.keyword","jobs_other.company_name","jobs_other.company_name.keyword","jobs_primary.company_name","jobs_primary.company_name.keyword"],fieldWeights:[1,1,1,1,1,1,1,1,1],highlight:!0,highlightField:["jobs_current.company_name"],fuzziness:0,placeholder:"Search People and Companies...",URLParams:!0,style:{marginBottom:20}}),i.a.createElement("table",{className:"maintable"},i.a.createElement("tbody",null,i.a.createElement("tr",{valign:"top"},i.a.createElement("td",{className:"filtertablerow"},i.a.createElement(p.c,{componentId:"Sector",dataField:"categories.keyword",placeholder:"Search Sectors",size:1e4,style:{marginBottom:20,fontSize:12},title:"Filter by Sector",URLParams:!0,react:{and:["Country","search","Sector","willingness","quality","Region","lsfirstdegree"]}})),i.a.createElement("td",{className:"filtertablerow"},i.a.createElement(p.c,{componentId:"Region",dataField:"region.keyword",placeholder:"Search Regions",size:1e4,style:{marginBottom:20,fontSize:12},title:"Filter by Region",URLParams:!0,react:{and:["Country","search","Sector","willingness","quality","Region","lsfirstdegree"]}})),i.a.createElement("td",{className:"filtertablerow"},i.a.createElement(p.c,{componentId:"Country",dataField:"country.keyword",placeholder:"Search Countries",size:1e4,style:{fontSize:12,marginBottom:20},title:"Filter By Country",URLParams:!0,react:{and:["Country","search","Sector","willingness","quality","Region","lsfirstdegree"]}}))),i.a.createElement("tr",null,i.a.createElement("td",{className:"filtertablerow"},i.a.createElement(p.b,{componentId:"willingness",dataField:"willingness",title:"Willingness To Share",URLParams:!0,data:[{label:"A",value:"5"},{label:"B",value:"4"},{label:"C",value:"3"}],showSearch:!1,react:{and:["Country","search","Sector","willingness","quality","Region","lsfirstdegree"]}})),i.a.createElement("td",{className:"filtertablerow"},i.a.createElement(p.b,{componentId:"quality",dataField:"quality",title:"Quality of Insight",URLParams:!0,data:[{label:"A",value:"5"},{label:"B",value:"4"},{label:"C",value:"3"}],showSearch:!1,react:{and:["Country","search","Sector","willingness","quality","Region","lsfirstdegree"]}})),i.a.createElement("td",{className:"filtertablerow"},i.a.createElement(p.g,{componentId:"lsfirstdegree",dataField:"lscontactcount",URLParams:!0,data:[{start:1,end:14,label:"Yes"},{start:0,end:0,label:"No"}],title:"LS First Degree Contact",showFilter:!1}))))),i.a.createElement(p.f,null),i.a.createElement(p.e,{componentId:"result",dataField:"name",pagination:!0,showResultStats:!1,react:{and:["Country","search","Sector","willingness","quality","Region","lsfirstdegree"]},renderData:h,size:20,style:{marginTop:20}}))))))}}]),a}(i.a.Component));function h(e){var a=new URLSearchParams(window.location.search),t=a.get("Sector"),n=a.get("Country"),l=a.get("Region"),r=a.get("willingness"),c=a.get("quality"),s=a.get("lsfirstdegree"),o=a.get("search");return t||n||l||r||c||s||o?i.a.createElement("div",{className:"list-item",key:e._id},i.a.createElement(g.a,{previewHeight:"390px",expandText:"Show more"},i.a.createElement("table",{className:"maintable"},i.a.createElement("tr",null,i.a.createElement("td",{className:"padright",valign:"top",rowSpan:"2"},e.avatar&&"NULL"!=e.avatar?i.a.createElement("img",{width:"50px",src:e.avatar.replace("t_api_images/w_50,h_50,c_scale/","t_api_images/")}):"Person"==e.url.substring(0,6)?i.a.createElement("img",{width:"50px",src:"https://cdn.icon-icons.com/icons2/510/PNG/512/person_icon-icons.com_50075.png"}):i.a.createElement("img",{width:"50px",src:"https://visualpharm.com/assets/302/Company-595b40b75ba036ed117d5a00.svg"})),i.a.createElement("td",{className:"namefont"},i.a.createElement("a",{target:"_parent",href:"https://lscportal.azurewebsites.net/webpages/RMS/"+e.url},e.name),i.a.createElement("div",{className:"icondiv"},e.crunchbase&&"NULL"!=e.crunchbase&&"nbsp;"!=e.cruncbase?"Person"==e.url.substring(0,6)?i.a.createElement("a",{target:"_blank",href:"http://crunchbase.com/person/"+e.crunchbase},i.a.createElement("img",{src:"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/p370x247/14238104_10154509878326171_7795750764042171439_n.png?_nc_cat=100&_nc_ht=scontent-sjc3-1.xx&oh=193da79d7563483ba878729156683717&oe=5D138A28"})):i.a.createElement("a",{target:"_blank",href:"http://crunchbase.com/organization/"+e.crunchbase},i.a.createElement("img",{src:"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/p370x247/14238104_10154509878326171_7795750764042171439_n.png?_nc_cat=100&_nc_ht=scontent-sjc3-1.xx&oh=193da79d7563483ba878729156683717&oe=5D138A28",alt:""})):null,e.linkedin&&"NULL"!=e.linkedin?i.a.createElement("a",{target:"_blank",href:e.linkedin},i.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",alt:""})):null,e.facebook&&"NULL"!=e.facebook?i.a.createElement("a",{target:"_blank",href:e.facebook},i.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png",alt:""})):null))),i.a.createElement("tr",{className:"rowup"},i.a.createElement("td",null,i.a.createElement("div",{className:"jobtitlefont"},"Person"==e.url.substring(0,6)&&"NULL"!=e.jobtitle?e.jobtitle+" at ":null,"Person"==e.url.substring(0,6)&&"NULL"!=e.jobtitle?i.a.createElement("a",{target:"_parent",href:"https://lscportal.azurewebsites.net/webpages/RMS/Company.aspx?SearchCompanyName="+e.jobcompany},e.jobcompany):null),i.a.createElement("div",null,i.a.createElement("div",{className:"card-bottom"},e.willingness>0?i.a.createElement("div",{className:"card-stars"},"Willingess:"," ",e.willingness.replace("5","A").replace("4","B").replace("3","C").replace("2","D").replace("0","F")):null,e.quality>0?i.a.createElement("div",{className:"card-stars"},"Quality:"," ",e.quality.replace("5","A").replace("4","B").replace("3","C").replace("2","D").replace("0","F")):null,e.lscontactcount>0?i.a.createElement("div",{className:"card-stars"},"LS Contacts: ",e.lscontactcount):null),e.categories.length>0?i.a.createElement("div",{className:"card-tags"},e.categories.slice(0,7).map(function(a){return i.a.createElement("span",{className:"card-tag",key:"".concat(e.name,"-").concat(a)},"#",a)})):null)))))):null}new URLSearchParams(window.location.search);d.a.render(i.a.createElement(b,null),document.getElementById("root"))},89:function(e,a,t){}},[[80,1,2]]]);
//# sourceMappingURL=main.f6e214ca.chunk.js.map