(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{74:function(e,t,a){e.exports=a(75)},75:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(45),c=a.n(r),s=a(6),i=(a(80),a(46)),o=a.n(i);a(83);function m(e){return l.a.createElement("div",{className:"list-item",key:e._id},l.a.createElement(o.a,{previewHeight:"390px",expandText:"Show more"},l.a.createElement("table",{class:"maintable"},l.a.createElement("tr",null,l.a.createElement("td",{class:"padright",valign:"top",rowSpan:"2"},e.avatar&&"NULL"!=e.avatar?l.a.createElement("img",{width:"50px",src:e.avatar.replace("t_api_images/w_50,h_50,c_scale/","t_api_images/")}):"Person"==e.url.substring(0,6)?l.a.createElement("img",{width:"50px",src:"https://cdn.icon-icons.com/icons2/510/PNG/512/person_icon-icons.com_50075.png"}):l.a.createElement("img",{width:"50px",src:"https://visualpharm.com/assets/302/Company-595b40b75ba036ed117d5a00.svg"})),l.a.createElement("td",{class:"namefont"},l.a.createElement("a",{target:"_parent",href:"https://lscportal.azurewebsites.net/webpages/RMS/"+e.url},e.name),l.a.createElement("div",{class:"icondiv"},e.crunchbase&&"NULL"!=e.crunchbase&&"nbsp;"!=e.cruncbase?"Person"==e.url.substring(0,6)?l.a.createElement("a",{target:"_blank",href:"http://crunchbase.com/person/"+e.crunchbase},l.a.createElement("img",{src:"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/p370x247/14238104_10154509878326171_7795750764042171439_n.png?_nc_cat=100&_nc_ht=scontent-sjc3-1.xx&oh=193da79d7563483ba878729156683717&oe=5D138A28"})):l.a.createElement("a",{target:"_blank",href:"http://crunchbase.com/organization/"+e.crunchbase},l.a.createElement("img",{src:"https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/p370x247/14238104_10154509878326171_7795750764042171439_n.png?_nc_cat=100&_nc_ht=scontent-sjc3-1.xx&oh=193da79d7563483ba878729156683717&oe=5D138A28",alt:""})):null,e.linkedin&&"NULL"!=e.linkedin?l.a.createElement("a",{target:"_blank",href:e.linkedin},l.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",alt:""})):null,e.facebook&&"NULL"!=e.facebook?l.a.createElement("a",{target:"_blank",href:e.facebook},l.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png",alt:""})):null))),l.a.createElement("tr",{class:"rowup"},l.a.createElement("td",null,l.a.createElement("div",{class:"jobtitlefont"},"Person"==e.url.substring(0,6)&&"NULL"!=e.jobtitle?e.jobtitle+" at ":null,"Person"==e.url.substring(0,6)&&"NULL"!=e.jobtitle?l.a.createElement("a",{target:"_parent",href:"https://lscportal.azurewebsites.net/webpages/RMS/Company.aspx?SearchCompanyName="+e.jobcompany},e.jobcompany):null),l.a.createElement("div",null,l.a.createElement("div",{className:"card-bottom"},e.willingness>0?l.a.createElement("div",{className:"card-stars"},"Willingess:"," ",e.willingness.replace("5","A").replace("4","B").replace("3","C").replace("2","D").replace("0","F")):null,e.quality>0?l.a.createElement("div",{className:"card-stars"},"Quality:"," ",e.quality.replace("5","A").replace("4","B").replace("3","C").replace("2","D").replace("0","F")):null,e.lscontactcount>0?l.a.createElement("div",{className:"card-stars"},"LS Contacts: ",e.lscontactcount):null),e.categories.length>0?l.a.createElement("div",{className:"card-tags"},e.categories.slice(0,7).map(function(t){return l.a.createElement("span",{className:"card-tag",key:"".concat(e.name,"-").concat(t)},"#",t)})):null))))))}"2jkn2jk4njk53in5un359unt9ntgjkmrj4393943t349hnrwg389232i2"==new URLSearchParams(window.location.search).get("sdvnkjsdsjkng3093248954wsfdsdd0023mm2rwiumrgw9")&&c.a.render(l.a.createElement(function(){return l.a.createElement(s.d,{app:"spotlightsearch",credentials:"viCwcDpu7:f78f550b-9926-402f-b603-d6bb1aa56d27",url:"https://scalr.api.appbase.io",analytics:!0},l.a.createElement("table",{class:"maintable"},l.a.createElement("tr",{valign:"top"},l.a.createElement("td",null,l.a.createElement(s.a,{componentId:"search",dataField:["name","jobtitle","jobcompany","sector"],fieldWeights:[100,1,1,1],fuzziness:0,highlightField:["name"],style:{marginBottom:20}}),l.a.createElement("table",{class:"maintable"},l.a.createElement("tr",{valign:"top"},l.a.createElement("td",{class:"filtertablerow"},l.a.createElement(s.c,{componentId:"Sector",dataField:"categories.keyword",placeholder:"Search Sectors",size:1e4,style:{marginBottom:20,fontSize:12},title:"By Sector",react:{and:["Country","search","Sector","willingness","quality","Region","lsfirstdegree"]}})),l.a.createElement("td",{class:"filtertablerow"},l.a.createElement(s.c,{componentId:"Region",dataField:"region.keyword",placeholder:"Search Regions",size:1e4,style:{marginBottom:20,fontSize:12},title:"By Region"})),l.a.createElement("td",{class:"filtertablerow"},l.a.createElement(s.c,{componentId:"Country",dataField:"country.keyword",placeholder:"Search Countries",size:1e4,style:{fontSize:12,marginBottom:20},title:"By Country",react:{and:["Country","search","Sector","willingness","quality","Region","lsfirstdegree"]}})),l.a.createElement("td",{class:"filtertablerow"},l.a.createElement(s.b,{componentId:"willingness",dataField:"willingness",title:"Willingness To Share",data:[{label:"A",value:"5"},{label:"B",value:"4"},{label:"C",value:"3"}],showSearch:!1,react:{and:["Country","search","Sector","willingness","quality","Region","lsfirstdegree"]}})),l.a.createElement("td",{class:"filtertablerow"},l.a.createElement(s.b,{componentId:"quality",dataField:"quality",title:"Quality of Insight",data:[{label:"A",value:"5"},{label:"B",value:"4"},{label:"C",value:"3"}],showSearch:!1,react:{and:["Country","search","Sector","willingness","quality","Region","lsfirstdegree"]}})),l.a.createElement("td",{class:"filtertablerow"},l.a.createElement(s.g,{componentId:"lsfirstdegree",dataField:"lscontactcount",data:[{start:1,end:14,label:"Yes"},{start:0,end:0,label:"No"}],title:"LS First Degree Contact",showFilter:!1})))),l.a.createElement(s.f,null),l.a.createElement(s.e,{componentId:"result",dataField:"name",pagination:!0,react:{and:["Country","search","Sector","willingness","quality","Region","lsfirstdegree"]},renderData:m,size:20,style:{marginTop:20}})))))},null),document.getElementById("root"))},83:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.edc9d09e.chunk.js.map