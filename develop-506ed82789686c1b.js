(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17],{33:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/develop",function(){return r(5123)}])},2565:function(e,n,r){"use strict";var t=r(5893),a=(r(7294),r(4245)),o=r(7989),s=(0,a.QM)({image:{display:"block",margin:"0 auto",width:"100%",maxWidth:"728px",height:"auto"}});n.Z=function(e){s();return(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsx)(o.Z,{type:1})})})}},7328:function(e,n,r){"use strict";var t=r(5893),a=r(7294),o=(0,r(4245).QM)({box:{width:"40px",float:"right",border:"1px solid #777777",background:"linear-gradient(0deg, rgba(224,224,224,1) 0%, rgba(255,255,255,1) 100%)","&:hover":{background:"linear-gradient(0deg, rgba(203,216,255,1) 0%, rgba(255,255,255,1) 100%)"},cursor:"pointer",userSelect:"none"},boxOpen:{background:"rgb(224,224,224)"},gear:{backgroundImage:'url("/img/Unofficial/settings-gear.png")',height:"12px",width:"12px",display:"block",backgroundSize:"12px 12px",backgroundPosition:"0 0"},gearWrapper:{paddingLeft:"5px",paddingTop:"5px",paddingBottom:"2px",display:"inline-block"},caretWrapper:{display:"inline-block",color:"#666",fontSize:"12px",paddingLeft:"5px",position:"relative",top:"-3px",right:"1px"},caret:{},boxDropdown:{background:"rgb(224,224,224)",position:"absolute",width:"100px",top:"24px",right:"-13px",border:"1px solid #777777",zIndex:99},boxDropdownEntry:{fontSize:"12px",padding:"3px 6px","&:hover":{background:"#d8d8d8"},color:"black",fontFamily:"Arial,Helvetica,sans-serif"},container:{position:"relative"}});n.Z=function(e){var n=o(),r=(0,a.useState)(!1),s=r[0],u=r[1];return(0,t.jsxs)("div",{className:n.container,children:[(0,t.jsxs)("div",{className:n.box+" "+(s?n.boxOpen:""),onClick:function(){u(!s)},children:[(0,t.jsx)("div",{className:n.gearWrapper,children:(0,t.jsx)("div",{className:n.gear})}),(0,t.jsx)("div",{className:n.caretWrapper,children:(0,t.jsx)("div",{className:n.caret,children:"\u25bc"})})]}),s&&(0,t.jsx)("div",{className:n.boxDropdown,style:{right:"0px"}||void 0,children:e.options.map((function(e,r){return"separator"===e.name?(0,t.jsx)("div",{className:"divider-top"},"separator "+r):(0,t.jsx)("a",{href:e.url||"#",onClick:e.onClick,children:(0,t.jsx)("p",{className:"mb-0 ".concat(n.boxDropdownEntry),children:e.name})},e.name)}))})]})}},1068:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var t=r(5893),a=(r(7294),r(4245)),o=r(8452),s=(0,a.QM)({wrapper:{width:"100%",color:"#000",display:"block",padding:"5px 10px","&:hover":{background:"#efefef",color:"#000"}},wrapperSelected:{borderLeft:"1px solid #ccc",borderTop:"1px solid #ccc",borderBottom:"1px solid #ccc",backgroundColor:"#efefef"},wrapperDisabled:{opacity:.25},text:{fontSize:"16px"},textSelected:{fontWeight:"600"}}),u=function(e){var n=s(),r=(0,t.jsx)("a",{onClick:e.onClick,className:n.wrapper+(e.selected?" "+n.wrapperSelected:"")+(e.disabled?" "+n.wrapperDisabled:""),children:(0,t.jsx)("span",{className:n.text+(e.selected?" "+n.textSelected:""),children:e.name})});return e.url?(0,t.jsx)(o.Z,{href:e.url,children:r}):r},i=(0,a.QM)({row:{borderRight:"1px solid #ccc"}}),c=function(e){var n=i();return(0,t.jsx)("div",{className:"row mt-4 pe-0 "+n.row,children:(0,t.jsx)("div",{className:"col-12 pe-0 me-0",children:e.options.map((function(n){return(0,t.jsx)(u,{onClick:n.onClick,name:n.name,url:n.url,selected:e.selected===n.name,disabled:n.disabled},n.name+n.url)}))})})}},1789:function(e,n){"use strict";var r={string:function(e){return"string"!==typeof e?"":e},array:function(e){return e&&Array.isArray(e)?e:[]},object:function(e){return"object"===typeof e||e?e:{}}};n.Z=r},5123:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return ne}});var t=r(5893),a=r(387),o=r(7294),s=r(4245),u=r(2565),i=r(1681),c=r(1068),l=r(5948),d=r(5435),p=r(5304),m=r(7328),f=r(7484),v=r.n(f),g=r(9979),h=r(7378),x=r(8452),b=function(e){if("Asset"===e.targetType)return(0,p.yz)({assetId:e.targetId,name:e.targetName});if("Group"===e.targetType)return"/Groups/Group.aspx?gid=".concat(e.targetId);throw new Error("Type not implemented: "+e.targetType)},I=(0,s.QM)({createdLabel:{color:"#999"}}),j=function(e){var n=e.name,r=e.value,a=I();return(0,t.jsx)("div",{className:"col-3",children:(0,t.jsxs)("p",{className:"mb-0",children:[(0,t.jsxs)("span",{className:a.createdLabel,children:[n,": "]})," ",r]})})},w=(0,s.QM)({notRunningIcon:{height:"4px",width:"4px",background:"#0a0a0a"},bidLabel:{fontWeight:600},btn:{fontSize:"1rem",display:"inline",marginLeft:"0.5rem"}}),y=function(e){var n=w(),r=(0,g.Z)(),a=e.ad,s=e.target,u=e.runMenuOpen,i=e.setRunMenuOpen,c=(0,o.useState)(!1),d=c[0],p=c[1],m=(0,o.useRef)(null),f=(0,o.useState)(null),v=f[0],I=f[1],y=(a.clicksLastRun/a.impressionsLastRun*100).toFixed(2),P=(a.clicksAll/a.impressionsAll*100).toFixed(2);return(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"mb-0",children:[a.name," (for ",(0,t.jsx)(x.Z,{href:b(s),children:(0,t.jsx)("a",{children:s.targetName})}),")"]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)(j,{name:"Impressions",value:a.impressionsLastRun.toLocaleString()}),(0,t.jsx)(j,{name:"Clicks",value:a.clicksLastRun.toLocaleString()}),(0,t.jsx)(j,{name:"CTR",value:y+"%"}),(0,t.jsx)(j,{name:"Bid",value:a.bidAmountRobuxLastRun.toLocaleString()}),(0,t.jsx)(j,{name:"Total Impr",value:a.impressionsAll.toLocaleString()}),(0,t.jsx)(j,{name:"Total Clicks",value:a.clicksAll.toLocaleString()}),(0,t.jsx)(j,{name:"Total CTR",value:P+"%"}),(0,t.jsx)(j,{name:"Total Bid",value:a.bidAmountRobuxAll.toLocaleString()})]}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsxs)("p",{className:"cursor-pointer",onClick:function(e){a.isRunning,i(!u)},children:[(0,t.jsx)("span",{className:"game-privacy-symbol "+(a.isRunning?"gps-active":"gps-inactive")})," ",a.isRunning?"Running":"Not Running"]})})}),u?(0,t.jsxs)("div",{className:"row",children:[v&&(0,t.jsx)("div",{className:"col-12",children:(0,t.jsx)("p",{className:"text-danger",children:v})}),(0,t.jsxs)("div",{className:"col-12",children:[(0,t.jsx)("span",{className:n.bidLabel,children:"Bid in Robux: "}),(0,t.jsx)("input",{disabled:d,ref:m,type:"text",className:"p-1"}),(0,t.jsx)(h.Z,{disabled:d,label:"Bid",className:r.buyButton+" "+r.normal+" "+n.btn,divClassName:n.btn,onClick:function(){if(!d){I(null);var e=parseInt(m.current.value,10);if(!Number.isSafeInteger(e)||e<0)return I("Invalid Robux amount.");p(!0),(0,l.ow)({adId:a.id,robux:e}).then((function(){window.location.reload()})).catch((function(e){I("Error buying ad. "+e.message),p(!1)}))}}}),(0,t.jsx)(h.Z,{label:"Cancel",className:r.cancelButton+" "+r.normal+" "+n.btn,divClassName:n.btn,onClick:function(){i(!1)}})]})]}):null]})},P=(0,s.QM)({createdLabel:{color:"#999"}}),T=function(e){var n=P();return(0,t.jsx)("div",{children:(0,t.jsxs)("p",{className:"mb-0",children:[(0,t.jsx)("span",{className:n.createdLabel,children:"Created: "})," ",v()(e.created).format("M/d/YYYY")]})})},N=(0,s.QM)({startPlaceLabel:{color:"#999",paddingRight:"8px",fontSize:"13px"},visibilityButton:{}}),S=function(e){var n=N();return(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"mb-0",children:[(0,t.jsx)("span",{className:n.startPlaceLabel,children:"Start Place: "})," ",(0,t.jsx)(x.Z,{href:e.url,children:(0,t.jsx)("a",{children:e.startPlaceName})})]}),(0,t.jsx)("p",{className:n.visibilityButton+" mb-0 mt-1",children:(0,t.jsx)(x.Z,{href:e.url+"#/#basicSettings",children:(0,t.jsx)("a",{children:"Public"})})})]})},C=r(1747),Z=(r(2300),r(2069));function k(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var E=(0,s.QM)({image:{margin:"0 auto",display:"block",height:"70px",width:"70px",objectFit:"cover"},row:{borderBottom:"1px solid #f2f2f2",paddingBottom:"4px"},gearDropdownWrapper:{marginBottom:"-1rem"}}),A=function(e){var n=E(),r=C.Z.useContainer(),a=9===e.assetType,s=void 0!==e.ad&&void 0!==e.target,u=a?(0,Z.IH)({placeId:e.assetId,name:e.name}):(0,p.yz)({assetId:e.assetId,name:e.name}),i=a?"/universes/configure?id=".concat(e.universeId):u,c=s?e.ad.advertisementAssetId:e.assetId,l=(0,o.useState)(!1),d=l[0],f=l[1],v=[a&&{url:"/universes/configure?id="+e.universeId,name:"Configure Game"},a&&{url:"/places/"+e.assetId+"/update",name:"Configure Start Place"},a&&{name:"separator"},a&&{name:"Create Badge",url:"/develop?selectedPlaceId=".concat(e.assetId,"&View=21")},a&&{name:"Create Pass",url:"/develop?selectedplaceId=".concat(e.assetId,"&View=34")},a&&{name:"Developer Stats",url:"/creations/games/".concat(e.universeId,"/stats")},a&&{name:"separator"},!s&&!a&&{name:"Configure",url:"/My/Item.aspx?id=".concat(e.assetId)},!s&&{name:"Advertise",url:"/My/CreateUserAd.aspx?targetId=".concat(e.assetId,"&targetType=asset")},s&&{name:"Run",onClick:function(e){e.preventDefault(),console.log("run ad"),f(!d)}},a&&{name:"separator"},a&&{name:"Shut Down All Servers",url:"#",onClick:function(e){e.preventDefault()}}];return(0,t.jsxs)("div",{className:"row "+n.row,children:[(0,t.jsx)("div",{className:"col-2",children:(0,t.jsx)("img",{className:n.image,src:r.getAssetThumbnail(c)})}),(0,t.jsxs)("div",{className:"col-9 ps-0",children:[(0,t.jsx)("p",{className:"mb-0",children:(0,t.jsx)(x.Z,{href:i,children:(0,t.jsx)("a",{children:e.name})})}),s?(0,t.jsx)(y,{ad:e.ad,target:e.target,runMenuOpen:d,setRunMenuOpen:f}):9===e.assetType?(0,t.jsx)(S,{url:u,startPlaceName:e.name}):(0,t.jsx)(T,{created:e.created})]}),(0,t.jsx)("div",{className:"col-1",children:(0,t.jsx)(m.Z,{boxDropdownRightAmount:0,options:v.filter((function(e){return!!e}))})})]})},R=function(e){return(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:e.assets.map((function(e){return(0,t.jsx)(A,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){k(e,n,r[n])}))}return e}({},e),e.assetId||e.ad.id)}))})})},G=function(e){var n=(0,o.useState)(null),r=n[0],a=n[1],s=d.Z.useContainer();return(0,o.useEffect)((function(){(s.userId||e.groupId)&&(a(null),(0,l.bW)({creatorId:e.groupId||s.userId,creatorType:e.groupId?"Group":"User"}).then((function(e){a(e)})))}),[s.userId,e.groupId]),r?(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-12",children:(0,t.jsx)("h2",{children:"User Ads"})}),(0,t.jsx)("div",{className:"col-12 mt-4",children:0===r.data.length?(0,t.jsx)("p",{children:"You haven't created any User Ads."}):(0,t.jsx)(R,{assets:r.data})})]}):null},O=r(465),L=r(1885),D={2:{name:"T-Shirt",namePlural:"T-Shirts",title:"a T-Shirt",templateUrl:"",fileLabel:"image"},11:{name:"Shirt",namePlural:"Shirts",title:"a Shirt",templateUrl:"".concat((0,O.mn)("rbxcdn","/static/images/Template-Shirts-R15_07262019.png")),fileLabel:"image"},12:{name:"Pants",namePlural:"pants",title:"Pants",templateUrl:"".concat((0,O.mn)("rbxcdn","/static/images/Template-Shirts-R15_07262019.png")),fileLabel:"image"},3:{name:"Audio",namePlural:"audio",title:"Audio",fileLabel:".mp3 or .ogg file",subtext:"Audio uploads cost 350 Robux regardless of size, however this will change in the future. Audio uploads must be less than 7 minutes and smaller than 19.5 MB."},1:{name:"Image",namePlural:"images",title:"Image",fileLabel:".png or .jpeg"}},U=(0,s.QM)({subtext:{color:"#d2d2d2",fontSize:"14px",marginLeft:"8px"},inputItemName:{width:"calc(100% - 200px)",marginLeft:"28px"}}),V=function(e){var n=e.id,r=e.groupId,a=D[n],s=d.Z.useContainer(),u=(0,o.useState)(null),i=u[0],c=u[1],l=(0,o.useState)(!1),p=l[0],m=l[1],f=(0,o.useState)(null),v=f[0],g=f[1],x=(0,o.useRef)(null),b=(0,o.useRef)(null);(0,o.useEffect)((function(){g(null),(s.userId||r)&&(0,L.gs)({limit:100,cursor:"",assetType:n,groupId:r}).then((function(e){g(e)}))}),[s.userId,n,r]);var I=U();return a?(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-12",children:[(0,t.jsxs)("h2",{children:["Create ",a.title," ",a.subtext?null:(0,t.jsxs)("span",{className:I.subtext,children:["Don't know how? ",(0,t.jsx)("a",{href:"https://developer.roblox.com/articles/How-to-Make-Shirts-and-Pants-for-Roblox-Characters",children:"Click Here"})]})]}),a.subtext?(0,t.jsx)("p",{children:a.subtext}):null]}),(0,t.jsx)("div",{className:"col-12",children:(0,t.jsxs)("div",{className:"ms-4 me-4 mt-4",children:[a.templateUrl?(0,t.jsxs)("p",{children:["Did you use the template? If not, ",(0,t.jsx)("a",{href:a.templateUrl,children:"download it here"}),"."]}):null,(0,t.jsxs)("p",{children:["Find your ",a.fileLabel,": ",(0,t.jsx)("input",{ref:b,type:"file"})," ",i&&(0,t.jsx)("span",{className:"text-danger",children:i})]}),(0,t.jsxs)("p",{children:[a.name," Name: ",(0,t.jsx)("input",{ref:x,type:"text",className:I.inputItemName})]}),(0,t.jsx)("div",{className:"float-left",children:(0,t.jsx)(h.Z,{disabled:p,label:"Upload",onClick:function(e){if(e.preventDefault(),!p){if(!b.current.files.length)return c("You must select a file");if(!x.current.value)return c("You must specify a name");var t=b.current.files[0];if(t.size>=8e7)return c("The file is too large");if(0===t.size)return c("The file is empty");m(!0),(0,L.i0)({name:x.current.value,assetTypeId:n,file:t,groupId:r}).then((function(){window.location.reload()})).catch((function(e){c(e.message),m(!1)}))}}})})]})}),(0,t.jsx)("div",{className:"col-12 mt-4",children:v?0===v.data.length?(0,t.jsxs)("p",{children:["You haven't created any ",a.namePlural.toLowerCase(),"."]}):(0,t.jsx)(R,{assets:v.data}):null})]}):null},M=(0,s.QM)({}),B=function(e){M();var n=(0,g.Z)(),r=(0,o.useState)(null),a=r[0],s=r[1],u=d.Z.useContainer();return(0,o.useEffect)((function(){s(null),e.groupId?(0,Z.af)({groupId:e.groupId,cursor:""}).then((function(e){return s(e)})):u.userId&&(0,Z.Sq)({userId:u.userId,cursor:""}).then((function(e){return s(e)}))}),[u.userId,e.groupId]),(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-12",children:[(0,t.jsx)(h.Z,{className:n.buyButton+" w-auto ms-0",label:"Create New Game"}),(0,t.jsx)("h2",{className:"mt-2",children:"Games"}),a?0===a.data.length?(0,t.jsx)("p",{className:"mt-4",children:"You haven't created any games."}):(0,t.jsx)(R,{assets:a.data.map((function(e){return{assetId:e.rootPlace.id,assetType:9,name:e.name,universeId:e.id,isPublic:!0}}))}):null]})})};function F(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function H(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){F(e,n,r[n])}))}return e}var _=[{id:0,name:"Games",url:"/develop?View=0",element:function(e){return(0,t.jsx)(B,H({},e))}},{id:9,name:"Places",url:"/develop?View=9",disabled:!0},{id:10,name:"Models",url:"/develop?View=10",disabled:!0},{id:13,name:"Decals",url:"/develop?View=13",disabled:!0},{id:102,name:"Images",url:"/develop?View=102",element:function(e){return(0,t.jsx)(V,H({id:1},e))}},{id:21,name:"Badges",url:"/develop?View=21",disabled:!0},{id:100,name:"Passes",url:"/develop?View=100",disabled:!0},{id:3,name:"Audio",url:"/develop?View=3",element:function(e){return(0,t.jsx)(V,H({id:3},e))}},{id:24,name:"Animations",url:"/develop?View=24",disabled:!0},{id:40,name:"Meshes",url:"/develop?View=40",disabled:!0},{id:101,name:"User Ads",url:"/develop?View=101",element:function(e){return(0,t.jsx)(G,H({},e))}},{id:102,name:"Sponsored Games",url:"/develop?View=102",disabled:!0},{id:11,name:"Shirts",url:"/develop?View=11",element:function(e){return(0,t.jsx)(V,H({id:11},e))}},{id:2,name:"T-Shirts",url:"/develop?View=2",element:function(e){return(0,t.jsx)(V,H({id:2},e))}},{id:12,name:"Pants",url:"/develop?View=12",element:function(e){return(0,t.jsx)(V,H({id:12},e))}},{id:38,name:"Plugins",url:"/develop?View=38",disabled:!0}],z=r(9917),Q=function(e){var n=_.find((function(n){return n.id===e.id}))||_[0];return n?(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-2",children:[e.groupId?(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"mb-0 mt-2",children:"Select Group:"}),(0,t.jsx)("select",{className:"w-100",onChange:function(n){e.setGroupId(parseInt(n.currentTarget.value,10))},children:e.groups.map((function(e){return(0,t.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}):null,(0,t.jsx)(c.Z,{selected:n.name,options:_.map((function(e){return{name:e.name,url:e.url,disabled:e.disabled}}))})]}),(0,t.jsx)("div",{className:"col-8 mt-4",children:n.element({isGroupTab:e.isGroupTab,groupId:e.groupId})})]}):null},W=function(e){return(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsx)("p",{className:"mt-2",children:"This feature is not available right now."})})})};function Y(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function q(e){return function(e){if(Array.isArray(e))return Y(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return Y(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Y(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var X=(0,s.QM)({developerContainer:{backgroundColor:"#fff",padding:"4px 8px",overflow:"hidden"}}),J=function(e,n){var r=[];return e&&(r=q(e)),"ADD"===n.action&&r.push(n.group),r},K=function(e){var n=X(),r=(0,o.useState)([]),a=r[0],s=r[1],c=(0,o.useState)(null),l=c[0],p=c[1],m=(0,o.useState)(null),f=m[0],v=m[1],g=(0,o.useReducer)(J,null),h=g[0],x=g[1],b=d.Z.useContainer();return(0,o.useEffect)((function(){b.userId&&(0,z.no)({userId:b.userId}).then((function(e){e.forEach((function(e){(0,z.pz)({groupId:e.group.id,rolesetId:e.role.id}).then((function(n){n.permissions.groupEconomyPermissions.manageGroupGames&&x({action:"ADD",group:e.group})})).catch((function(e){}))}))}))}),[b.userId]),(0,o.useEffect)((function(){null===f&&h&&h.length>0&&v(h[0].id)}),[f,h]),(0,o.useEffect)((function(){var n=[{name:"My Creations",element:(0,t.jsx)(Q,{id:e.id})},{name:"Group Creations",element:(0,t.jsx)(Q,{id:e.id,group:!0,groupId:f,groups:h,setGroupId:v})},{name:"Library",element:(0,t.jsx)(W,{})},{name:"Developer Exchange",element:(0,t.jsx)(W,{})}];null===l&&p(n[0].name),s(n)}),[e.id,f,l]),a.length?(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(u.Z,{}),(0,t.jsx)("div",{className:n.developerContainer,children:(0,t.jsx)(i.Z,{options:a,default:l,onChange:function(e){return p(e.name)}})})]}):null},$=r(1789),ee=function(e){var n=(0,a.useRouter)(),r=$.Z.string(n.query.View);return(0,t.jsx)(K,{id:parseInt(r,10)||0})};ee.getInitialProps=function(){return{title:"Develop - ROBLOX"}};var ne=ee},5948:function(e,n,r){"use strict";r.d(n,{_4:function(){return a},bW:function(){return o},ow:function(){return s}});var t=r(465),a=function(e){var n=e.file,r=e.name,a=e.targetId,o=e.type,s=new FormData;return s.append("name",r),s.append("files",n),(0,t.ZP)("POST",(0,t.mn)("ads","/v1/user-ads/"+o+"/create?assetId="+a),s)},o=function(e){var n=e.creatorId,r=e.creatorType;return(0,t.ZP)("GET",(0,t.mn)("ads","/v1/user-ads/"+("User"===r?"User":"Group")+"/"+n)).then((function(e){return e.data}))},s=function(e){var n=e.adId,r=e.robux;return(0,t.ZP)("POST",(0,t.mn)("ads","/v1/user-ads/"+n+"/run"),{robux:r})}},1885:function(e,n,r){"use strict";r.d(n,{i0:function(){return c},R_:function(){return l},gs:function(){return d},dQ:function(){return p},sl:function(){return m},Ks:function(){return f},pY:function(){return v}});var t=r(4051),a=r.n(t),o=r(2300),s=r(465);function u(e,n,r,t,a,o,s){try{var u=e[o](s),i=u.value}catch(c){return void r(c)}u.done?n(i):Promise.resolve(i).then(t,a)}function i(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var o=e.apply(n,r);function s(e){u(o,t,a,s,i,"next",e)}function i(e){u(o,t,a,s,i,"throw",e)}s(void 0)}))}}var c=function(e){var n=e.name,r=e.assetTypeId,t=e.file,a=e.groupId,o=new FormData;return o.append("name",n),o.append("assetType",r),o.append("file",t),a&&o.append("groupId",a),(0,s.ZP)("POST",(0,s.SV)()+"/develop/upload",o)},l=function(e){var n=e.assetId,r=e.file,t=new FormData;return t.append("assetId",n),t.append("file",r),(0,s.ZP)("POST",(0,s.SV)()+"/develop/upload-version",t)},d=function(e){var n=e.assetType,r=e.limit,t=e.cursor,a=e.groupId,o="/v1/creations/get-assets?assetType="+n+"&limit="+r+"&cursor="+encodeURIComponent(t);return a&&(o=o+"&groupId="+encodeURIComponent(a)),(0,s.ZP)("GET",(0,s.mn)("itemconfiguration",o)).then((function(e){return 0!==e.data.data.length?(n=e.data.data.map((function(e){return e.assetId})),(0,s.ZP)("POST",(0,s.mn)("itemconfiguration","/v1/creations/get-asset-details"),{assetIds:n})).then((function(n){return e.data.data=n.data.sort((function(e,n){return e.assetId>n.assetId?-1:1})),e.data})):e.data;var n}))},p=function(){var e=i(a().mark((function e(n){var r,t,o,u,i,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.assetId,t=n.name,o=n.description,u=n.genres,i=n.isCopyingAllowed,c=n.enableComments,e.next=3,(0,s.ZP)("PATCH",(0,s.mn)("develop","/v1/assets/".concat(r)),{name:t,description:o,genres:u,isCopyingAllowed:i,enableComments:c});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=i(a().mark((function e(n){var r,t,u,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.assetId,t=n.priceInRobux,u=n.priceInTickets,i={priceInRobux:t},(0,o.Z)("sellItemForTickets",!1)&&(i.priceInTickets=u),e.next=5,(0,s.ZP)("POST",(0,s.mn)("itemconfiguration","/v1/assets/".concat(r,"/update-price")),i);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=i(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.ZP)("GET",(0,s.mn)("develop","/v1/assets/genres"));case 2:return e.abrupt("return",e.sent.data.data);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=i(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.universeId,t=n.maxPlayers,e.next=3,(0,s.ZP)("PATCH",(0,s.mn)("develop","/v1/universes/".concat(r,"/max-player-count")),{maxPlayers:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},2069:function(e,n,r){"use strict";r.d(n,{IH:function(){return c},Sq:function(){return l},af:function(){return d},Xy:function(){return p},ZN:function(){return m},CT:function(){return f},Yv:function(){return v},nh:function(){return g},eJ:function(){return h},MC:function(){return x},Ff:function(){return b},TD:function(){return I}});var t=r(4051),a=r.n(t),o=r(2300),s=r(465),u=r(5304);function i(e,n,r,t,a,o,s){try{var u=e[o](s),i=u.value}catch(c){return void r(c)}u.done?n(i):Promise.resolve(i).then(t,a)}(0,o.Z)("2015GameDetailsPageEnabled",!1),(0,o.Z)("clientSideRenderingEnabled",!1);var c=function(e){var n=e.placeId,r=e.name;return"/games/".concat(n,"/").concat((0,u.FS)(r))},l=function(e){var n=e.userId,r=e.cursor;return(0,s.ZP)("GET",(0,s.mn)("games","/v2/users/".concat(n,"/games?cursor=").concat(encodeURIComponent(r||"")))).then((function(e){return e.data}))},d=function(e){var n=e.groupId,r=e.cursor;return(0,s.ZP)("GET",(0,s.mn)("games","/v2/groups/".concat(n,"/games?cursor=").concat(encodeURIComponent(r||"")))).then((function(e){return e.data}))},p=function(e){var n=e.gameSortsContext;return(0,s.ZP)("GET",(0,s.mn)("games","/v1/games/sorts?gameSortsContext=".concat(encodeURIComponent(n||"")))).then((function(e){return e.data}))},m=function(e){var n=e.sortToken,r=e.limit,t=e.genre,a=void 0===t?0:t,o=e.keyword;return(0,s.ZP)("GET",(0,s.mn)("games","/v1/games/list?sortToken=".concat(encodeURIComponent(n),"&maxRows=").concat(r,"&genre=").concat(a,"&keyword=").concat(o))).then((function(e){return e.data}))},f=function(e){var n=e.universeId;return(0,s.ZP)("GET",(0,s.mn)("games","/v2/games/".concat(n,"/media"))).then((function(e){return e.data.data}))},v=function(){var e,n=(e=a().mark((function e(n){var r,t,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.placeId,e.next=3,(0,s.ZP)("GET",(0,s.SV)()+"/game/get-join-script?placeId="+encodeURIComponent(r));case 3:(t=e.sent).data.joinUrl,(o=document.createElement("a")).setAttribute("href",t.data.prefix+""+t.data.joinScriptUrl),document.body.appendChild(o),o.click(),setTimeout((function(){o.remove()}),1e3);case 10:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,a){var o=e.apply(n,r);function s(e){i(o,t,a,s,u,"next",e)}function u(e){i(o,t,a,s,u,"throw",e)}s(void 0)}))});return function(e){return n.apply(this,arguments)}}(),g=function(e){var n=e.placeIds;return(0,s.ZP)("GET",(0,s.mn)("games","/v1/games/multiget-place-details?placeIds=".concat(encodeURIComponent(n.join(","))))).then((function(e){return e.data}))},h=function(e){var n=e.universeIds;return(0,s.ZP)("GET",(0,s.mn)("games","/v1/games?universeIds=".concat(encodeURIComponent(n.join(","))))).then((function(e){return e.data.data}))},x=function(e){var n=e.placeId,r=e.offset;return(0,s.ZP)("GET",(0,s.SV)()+"/games/getgameinstancesjson?placeId=".concat(n,"&startIndex=").concat(r)).then((function(e){return e.data}))},b=function(e){var n=e.universeIds;return(0,s.ZP)("GET",(0,s.mn)("games","/v1/games/votes?universeIds="+encodeURIComponent(n.join(",")))).then((function(e){return e.data.data}))},I=function(e){var n=e.universeId,r=e.isUpvote;return(0,s.ZP)("PATCH",(0,s.mn)("games","/v1/games/"+n+"/user-votes"),{vote:r}).then((function(e){return e.data.data}))}},9917:function(e,n,r){"use strict";r.d(n,{no:function(){return i},pz:function(){return c},be:function(){return l},Ln:function(){return d},Tf:function(){return p},sS:function(){return m},F3:function(){return f},Zw:function(){return v},Tm:function(){return g},TD:function(){return h},Qo:function(){return x},fR:function(){return b},C5:function(){return I},qo:function(){return j},Uv:function(){return w},AE:function(){return y},TC:function(){return P},WR:function(){return T},I7:function(){return N},FH:function(){return S},Lm:function(){return C},Iu:function(){return Z},x_:function(){return k},fA:function(){return E},Aq:function(){return A},Rd:function(){return R},G0:function(){return G},pU:function(){return O},yL:function(){return L},UT:function(){return D}});var t=r(4051),a=r.n(t),o=r(465);function s(e,n,r,t,a,o,s){try{var u=e[o](s),i=u.value}catch(c){return void r(c)}u.done?n(i):Promise.resolve(i).then(t,a)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var o=e.apply(n,r);function u(e){s(o,t,a,u,i,"next",e)}function i(e){s(o,t,a,u,i,"throw",e)}u(void 0)}))}}var i=function(e){var n=e.userId;return(0,o.ZP)("GET",(0,o.mn)("groups","/v1/users/".concat(n,"/groups/roles"))).then((function(e){return e.data.data}))},c=function(e){var n=e.groupId,r=e.rolesetId;return(0,o.ZP)("GET",(0,o.mn)("groups","/v1/groups/".concat(n,"/roles/").concat(r,"/permissions"))).then((function(e){return e.data}))},l=function(e){var n=e.groupId;return(0,o.ZP)("POST",(0,o.mn)("groups","/v1/groups/".concat(n,"/users")))},d=function(e){var n=e.groupId,r=e.userId;return(0,o.ZP)("DELETE",(0,o.mn)("groups","/v1/groups/".concat(n,"/users/").concat(r)))},p=function(e){var n=e.groupId,r=e.message;return(0,o.ZP)("PATCH",(0,o.mn)("groups","/v1/groups/".concat(n,"/status")),{message:r})},m=function(e){var n=e.name,r=e.description,t=e.iconElement,a=new FormData;return a.append("name",n),a.append("description",r),a.append("icon",t.files[0]),(0,o.ZP)("POST",(0,o.mn)("groups","/v1/groups/create"),a).then((function(e){return e.data}))},f=function(e){var n=e.groupId;return(0,o.ZP)("GET",(0,o.mn)("groups","/v1/groups/".concat(n,"/roles"))).then((function(e){return e.data.roles}))},v=function(e){var n=e.groupId,r=e.cursor,t=e.limit,a=void 0===t?10:t,s=e.sortOrder;return(0,o.ZP)("GET",(0,o.mn)("groups","/v1/groups/".concat(n,"/users?cursor=").concat(encodeURIComponent(r||""),"&limit=").concat(a,"&sortOrder=").concat(s))).then((function(e){return e.data}))},g=function(e){var n=e.groupId,r=e.roleSetId,t=e.cursor,a=e.limit,s=void 0===a?10:a,u=e.sortOrder;return(0,o.ZP)("GET",(0,o.mn)("groups","/v1/groups/".concat(n,"/roles/").concat(r,"/users?cursor=").concat(encodeURIComponent(t||""),"&limit=").concat(s,"&sortOrder=").concat(u))).then((function(e){return e.data}))},h=function(e){var n=e.groupId,r=e.cursor,t=e.sort,a=e.limit;return(0,o.ZP)("GET",(0,o.mn)("groups","/v2/groups/".concat(n,"/wall/posts?sortOrder=").concat(t,"&limit=").concat(a,"&cursor=").concat(encodeURIComponent(r||"")))).then((function(e){return e.data}))},x=function(e){var n=e.groupId,r=e.content;return(0,o.ZP)("POST",(0,o.mn)("groups","/v1/groups/".concat(n,"/wall/posts")),{body:r})},b=function(e){var n=e.groupId,r=e.postId;return(0,o.ZP)("DELETE",(0,o.mn)("groups","/v1/groups/".concat(n,"/wall/posts/").concat(r)))},I=function(e){var n=e.groupId;return(0,o.ZP)("GET",(0,o.mn)("groups","/v1/groups/".concat(n))).then((function(e){return e.data}))},j=function(e){var n=e.groupId;return(0,o.ZP)("POST",(0,o.mn)("groups","/v1/groups/".concat(n,"/claim-ownership")))},w=function(e){var n=e.groupId;return(0,o.ZP)("POST",(0,o.mn)("groups","/v1/user/groups/primary"),{groupId:n})},y=function(){return(0,o.ZP)("DELETE",(0,o.mn)("groups","/v1/user/groups/primary"))},P=function(e){var n=e.userId;return(0,o.ZP)("GET",(0,o.mn)("groups","/v1/users/".concat(n,"/groups/primary/role"))).then((function(e){return e.data}))},T=function(e){var n=e.groupId,r=e.userId,t=e.roleId;return(0,o.ZP)("PATCH",(0,o.mn)("groups","/v1/groups/".concat(n,"/users/").concat(r)),{roleId:t})},N=function(e){var n=e.groupId,r=e.icon,t=new FormData;return t.append("file",r),(0,o.ZP)("PATCH",(0,o.mn)("groups","/v1/groups/icon?groupId=".concat(n)),t).then((function(e){return e.data}))},S=function(e){var n=e.groupId,r=e.description;return(0,o.ZP)("PATCH",(0,o.mn)("groups","/v1/groups/".concat(n,"/description")),{description:r})},C=function(e){var n=e.groupId;return(0,o.ZP)("GET",(0,o.mn)("groups","/v1/groups/".concat(n,"/settings"))).then((function(e){return e.data}))},Z=function(e){var n=e.groupId,r=e.isApprovalRequired,t=e.areEnemiesAllowed,a=e.areGroupFundsVisible,s=e.areGroupGamesVisible;return(0,o.ZP)("PATCH",(0,o.mn)("groups","/v1/groups/".concat(n,"/settings")),{isApprovalRequired:r,areEnemiesAllowed:t,areGroupFundsVisible:a,areGroupGamesVisible:s})},k=function(){var e=u(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.groupId,t=n.userId,e.abrupt("return",(0,o.ZP)("PATCH",(0,o.mn)("groups","/v1/groups/".concat(r,"/change-owner")),{userId:t}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),E=function(){var e=u(a().mark((function e(n){var r,t,s,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.groupId,t=n.name,s=n.description,u=n.rank,e.abrupt("return",(0,o.ZP)("POST",(0,o.mn)("groups","/v1/groups/".concat(r,"/rolesets/create")),{name:t,description:s,rank:u}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),A=function(){var e=u(a().mark((function e(n){var r,t,s,u,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.groupId,t=n.roleId,s=n.name,u=n.description,i=n.rank,e.abrupt("return",(0,o.ZP)("PATCH",(0,o.mn)("groups","/v1/groups/".concat(r,"/rolesets/").concat(t)),{name:s,description:u,rank:i}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),R=function(){var e=u(a().mark((function e(n){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.groupId,t=n.roleId,e.abrupt("return",(0,o.ZP)("DELETE",(0,o.mn)("groups","/v1/groups/".concat(r,"/rolesets/").concat(t))));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),G=function(){var e=u(a().mark((function e(n,r,t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.ZP)("PATCH",(0,o.mn)("groups","/v1/groups/".concat(n,"/roles/").concat(r,"/permissions")),{permissions:t}));case 1:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}(),O=function(){var e=u(a().mark((function e(n){var r,t,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.groupId,t=n.userId,s=n.amount,e.abrupt("return",(0,o.ZP)("POST",(0,o.mn)("groups","/v1/groups/".concat(r,"/payouts")),{PayoutType:"FixedAmount",Recipients:[{recipientId:t,recipientType:"User",amount:s}]}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),L=function(e){var n=e.groupId;return(0,o.ZP)("GET",(0,o.mn)("groups","/v1/groups/".concat(n))).then((function(e){return e.data}))},D=function(e){var n=e.groupId,r=e.cursor,t=e.userId,a=e.action;return(0,o.ZP)("GET",(0,o.mn)("groups","/v1/groups/".concat(n,"/audit-log?cursor=").concat(r,"&action=").concat(a,"&userId=").concat(t,"&sortOrder=desc&limit=100"))).then((function(e){return e.data}))}}},function(e){e.O(0,[790,774,888,179],(function(){return n=33,e(e.s=n);var n}));var n=e.O();_N_E=n}]);