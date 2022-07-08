(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[272],{6850:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/configurator",function(){return n(1926)}])},1926:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Re}});var o,i=n(828),r=n(5893),a=n(9043),l=n(3131),c=n(6076),s=n(9895),d=n(7294),u=n(9352),f=n(8207),p=n(8852),m=n(9815),v=n(6042),h=n(9396),g=n(3701),x=n.n(g),b=function(e){var t=e.size,n=e.children,o=e.weight,i=e.font;return(0,r.jsx)("p",{className:x().text,style:{"--font-size":"".concat(t,"px"),"--font-weight":o,"--font-family":i},children:n})},E=n(4924),Z=n(1997),y=n(4671);!function(e){e[e.NUMBER=0]="NUMBER",e[e.SLIDER=1]="SLIDER",e[e.CODE=2]="CODE",e[e.OBJECT=3]="OBJECT",e[e.SELECT=4]="SELECT",e[e.COLOR=5]="COLOR",e[e.SCORE_VISUALIZER_CONFIG=6]="SCORE_VISUALIZER_CONFIG",e[e.TOGGLE=7]="TOGGLE",e[e.TOGGLE_COMPONENTS=8]="TOGGLE_COMPONENTS"}(o||(o={}));var w=(0,y.Z)((function(e,t){return{elements:{},isDragging:!1,activeElement:null,canvas:{width:960,height:720,zoom:1},setInitialElements:function(t){return[e({elements:t})]},removeElement:function(n){var o=t().elements;delete o[n],e({elements:o})},addElement:function(n){var o=t().elements;e({elements:(0,h.Z)((0,v.Z)({},o),(0,E.Z)({},n.slug,(0,h.Z)((0,v.Z)({},n),{cords:{x:0,y:0}})))})},selectElement:function(n){e(n?{activeElement:Object.values(t().elements).find((function(e){return e.slug===n}))||null}:{activeElement:null})},toggleActiveElementComponents:function(n,i){var r=t().activeElement;r&&e({activeElement:(0,h.Z)((0,v.Z)({},r),{options:r.options.map((function(e){return(null===e||void 0===e?void 0:e.id)===n&&e.inputTypeName===o.TOGGLE_COMPONENTS?(0,h.Z)((0,v.Z)({},e),{checked:i,options:e.options.map((function(e){return!i&&"uncheckedValue"in e?(0,h.Z)((0,v.Z)({},e),{value:e.uncheckedValue}):i&&"checkedValue"in e?(0,h.Z)((0,v.Z)({},e),{value:e.checkedValue}):e}))}):(0,h.Z)((0,v.Z)({},e),{checked:i})}))})})},editActiveElement:function(n,i){var r=t().activeElement;r&&e({activeElement:(0,h.Z)((0,v.Z)({},r),{options:r.options.map((function(e){return e.inputTypeName===o.TOGGLE_COMPONENTS?(0,h.Z)((0,v.Z)({},e),{options:e.options.map((function(e){return(null===e||void 0===e?void 0:e.id)===n?(0,h.Z)((0,v.Z)({},e),{value:i}):e}))}):(null===e||void 0===e?void 0:e.id)===n?(0,h.Z)((0,v.Z)({},e),{value:i}):e}))})})},editActiveELementState:function(n){return n(t(),e)},dragElement:function(n){var o=n.slug,i=n.x,r=n.y,a=t().elements;e({elements:(0,h.Z)((0,v.Z)({},a),(0,E.Z)({},o,(0,h.Z)((0,v.Z)({},a[o]),{cords:{x:i,y:r}})))})},saveConfig:function(){var n=t(),o=n.activeElement,i=n.elements;(null===o||void 0===o?void 0:o.slug)&&e({elements:(0,h.Z)((0,v.Z)({},i),(0,E.Z)({},o.slug,o))})},setCanvas:function(n){var o=t().canvas;e({canvas:(0,v.Z)({},o,n)})}}})),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e},t=(0,i.Z)((0,Z.Z)({key:"overlay-config"}),2),n=t[0],o=t[1],r=(0,i.Z)(w((function(e){return[e.setInitialElements,e.elements]})),2),a=r[0],l=r[1],c=w(e);return(0,d.useEffect)((function(){n&&a(JSON.parse(n))}),[]),(0,d.useEffect)((function(){o(JSON.stringify(l))}),[l,o]),(0,v.Z)({},c)},z=["Teko","Oswald","Montserrat","Montserrat Alternates"],N={name:"Accuracy percentage",slug:"accuracy-percentage",component:function(e){w();return(0,r.jsx)(b,(0,h.Z)((0,v.Z)({},e),{children:"91.5%"}))},category:"performance",order:0,image:"",description:"Display cuts from the game",options:(0,m.Z)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.size,n=void 0===t?14:t,i=e.weight,r=void 0===i?400:i,a=e.font,l=void 0===a?"Montserrat Alternates":a;return[{id:"font-size",propName:"size",inputTypeName:o.SLIDER,label:"Font size",min:6,max:32,value:n},{id:"font-weight",propName:"weight",inputTypeName:o.SLIDER,label:"Font weight",min:300,max:900,step:100,value:r},{id:"font-family",propName:"font",inputTypeName:o.SELECT,label:"Font",data:z,value:l,placeholder:"Pick one"}]}())},k=[{name:"CutVisualizer",slug:"cut-visualizer",component:n(5134).H,category:"visualizers",order:0,image:"",description:"Display cuts from the game",options:[{id:"cell-size",propName:"cellSize",inputTypeName:o.SLIDER,label:"Size",description:"size of each note",min:10,max:140,value:70},{id:"fade-time",propName:"fadeTime",inputTypeName:o.NUMBER,label:"Fade",description:"time in ms after the note disappear",min:0,max:1e3,value:300},{id:"grid-show-toggle",inputTypeName:o.TOGGLE_COMPONENTS,label:"Show grid",checked:!1,options:[{visibleWhenChecked:!0,uncheckedValue:"rgba(255, 255, 255, 0.08)",id:"grid-color",propName:"gridColor",inputTypeName:o.COLOR,format:"rgba",label:"Grid color",value:"rgba(255, 255, 255, 0.08)"},{visibleWhenChecked:!0,uncheckedValue:0,checkedValue:1,id:"grid-border-size",propName:"gridBorderSize",inputTypeName:o.SLIDER,label:"Grid border size",min:0,max:10,value:0}]}]},{name:"Hit Score Visualizer",slug:"score-visualizer",component:n(8602).I,category:"visualizers",order:0,image:"",description:"Display cut scores from the game",options:[]},N],j=function(e){var t=e.opened,n=e.setOpened,o=C().addElement;return(0,r.jsx)(f.d,{opened:t,onClose:function(){return n(!1)},title:"Add element",padding:"xl",size:"xl",children:(0,r.jsx)(l.Z,{direction:"column",spacing:16,children:k.map((function(e){return(0,r.jsx)(p.z,{onClick:function(){o(e),n(!1)},children:"add ".concat(e.name)})}))})})},O=n(1843),S=n(1706),T=n(6126),R="configurator-canvas",L=function(e){return Math.round(100*(e+Number.EPSILON))/100},I=n(9534),G=n(9755),_=n(753),M=n(2185),A=n(665),D=n(1193),P=n.n(D),B=n(9920),W=n(7563),V=n(5399),F=function(){return document.getElementById(R)},U=n(5127),H=n(8067),Y=(0,H.k)((function(e){return{options:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],textAlign:"center",padding:8,borderRadius:e.radius.md,cursor:"pointer",transform:"scale(var(--options-scale))",margin:"var(--options-offset) 0px",flexWrap:"nowrap"}}})),X=function(e){var t=e.visible,n=e.locked,o=e.forceUpdateDependencies,i=e.zoom,a=e.onEdit,s=e.onLock,d=e.onRemove,f=e.boxRef,p=e.optionsRef,m=Y(),v=m.classes,h=m.cx;return(0,r.jsx)(U.r,{mounted:t,referenceElement:f.current,placement:"end",withArrow:!1,gutter:6,forceUpdateDependencies:o,transition:"slide-down",zIndex:100,withinPortal:!1,modifiers:[{name:"zoomTransform",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state,n=t.placement,o=t.rects,r=n.includes("bottom"),a=n.includes("end");t.styles.popper.transform="translate3d(".concat(a?4:-4,"px, -").concat(r?0:(null===o||void 0===o?void 0:o.reference.height)||0,"px, 0px) scale(").concat(1/i,")")}},{name:"transformOriginControl",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state,n=t.placement;t.styles.popper["transform-origin"]="".concat(n.includes("top")?"bottom":"top"," ").concat(t.placement.includes("start")?"left":"right")}}],children:(0,r.jsxs)(l.Z,{spacing:8,className:h(v.options,"options"),ref:p,style:{"--options-scale":1,"--options-offset":"".concat(6*i,"px")},children:[(0,r.jsx)(c.A,{onClick:s,children:n?(0,r.jsx)(u.Dx2,{}):(0,r.jsx)(u.Vxc,{})}),(0,r.jsx)(c.A,{onClick:a,children:(0,r.jsx)(u.la$,{})}),(0,r.jsx)(c.A,{onClick:d,children:(0,r.jsx)(u.vZ2,{})})]})})},J=n(7297);function q(){var e=(0,J.Z)(["\n  from {\n    opacity: 0;\n    background: red;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]);return q=function(){return e},e}var $,K=(0,n(1055).F4)(q()),Q=(0,H.k)((function(e,t){var n=t.zoom;return{offset:{position:"absolute","& span":{position:"absolute",padding:3/n,animation:"".concat(K," 1s ease forward"),backgroundColor:e.colors.dark[4],fontSize:12/n,borderRadius:4},"&::after":{position:"absolute",background:e.colors.dark[3],content:"''"}},horizontal:{bottom:"50%","&::after":{height:1,width:"200vw",top:4}},vertical:{left:"50%","&::after":{width:1,height:"200vh",right:4}},top:{height:"var(--offset-top)",bottom:"100%","& span":{left:0,bottom:"calc(50% - 10px)"},"&::after":{bottom:"calc(100% - var(--offset-top))"}},bottom:{height:"var(--offset-bottom)",top:"100%","& span":{left:0,bottom:"calc(50% - 10px)"},"&::after":{top:"calc(100% - var(--offset-bottom))"}},left:{width:"var(--offset-left)",right:"100%","& span":{bottom:0,left:"calc(50% - 10px)"},"&::after":{right:"calc(100% - var(--offset-left))"}},right:{width:"var(--offset-right)",left:"100%","& span":{bottom:0,right:"calc(50% - 10px)"},"&::after":{left:"calc(100% - var(--offset-right))"}}}}));!function(e){e.left="left",e.right="right",e.top="top",e.bottom="bottom"}($||($={}));var ee=function(e){var t,n=e.value,o=e.direction,i=e.zoom,a=Q({zoom:i}),l=a.classes,c=a.cx;return(0,r.jsx)("div",{className:c(l.offset,l[o],(t={},(0,E.Z)(t,l.horizontal,o===$.left||o===$.right),(0,E.Z)(t,l.vertical,o===$.top||o===$.bottom),t)),children:n>0&&(0,r.jsx)("span",{children:n})})},te=(0,H.k)((function(e,t){var n=t.zoom;return{wrapper:{position:"absolute",zIndex:1,cursor:"grab",outlineOffset:4,transition:"0.2s outline-offset ease"},wrapperGrabbing:{cursor:"grabbing",outlineOffset:0},active:{zIndex:2},disabled:{zIndex:0},box:{width:"max-content",height:"auto",position:"relative","& > div:last-of-type > *":{pointerEvents:"none","& > *":{pointerEvents:"auto !important"}},"&:hover":{outline:"1px solid ".concat(e.colors.dark[2])},"&:focus":{boxShadow:"none","&:not(:hover)":{outline:"1px solid ".concat(e.colors.dark[3])}}},dragging:{outline:"1px solid ".concat(e.colors.dark[2])},options:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],textAlign:"center",padding:8,borderRadius:e.radius.md,cursor:"pointer",transform:"scale(".concat(1/n,")"),transformOrigin:"bottom right",flexWrap:"nowrap"},offset:{position:"absolute","& span":{position:"absolute",padding:3,backgroundColor:e.colors.dark[4],fontSize:10,borderRadius:4},"&::after":{position:"absolute",background:e.colors.dark[3],content:"''"}},offsetHorizontal:{bottom:"50%","&::after":{height:1,width:"100vw",top:4}},offsetVertical:{left:"50%","&::after":{width:1,height:"100vh",right:4}},offsetTop:{height:"var(--offset-top)",bottom:"100%","& span":{left:0,bottom:"calc(50% - 10px)"},"&::after":{bottom:"calc(100% - var(--offset-top))"}},offsetBottom:{height:"var(--offset-bottom)",top:"100%","& span":{left:0,bottom:"calc(50% - 10px)"},"&::after":{top:"calc(100% - var(--offset-bottom))"}},offsetLeft:{width:"var(--offset-left)",right:"100%","& span":{bottom:0,left:"calc(50% - 10px)"},"&::after":{right:"calc(100% - var(--offset-left))"}},offsetRight:{width:"var(--offset-right)",left:"100%","& span":{bottom:0,right:"calc(50% - 10px)"},"&::after":{left:"calc(100% - var(--offset-right))"}}}}));function ne(e){return"number"===typeof e&&!Number.isNaN(e)}function oe(e){return parseInt(e,10)}function ie(e){var t=e.clientHeight,n=getComputedStyle(e);return t+=oe((null===n||void 0===n?void 0:n.borderTopWidth)||"0px"),t+=oe((null===n||void 0===n?void 0:n.borderBottomWidth)||"0px")}function re(e){var t=e.clientWidth,n=getComputedStyle(e);return t+=oe((null===n||void 0===n?void 0:n.borderLeftWidth)||"0px"),t+=oe((null===n||void 0===n?void 0:n.borderRightWidth)||"0px")}function ae(e){var t=e.clientHeight,n=getComputedStyle(e);return t-=oe((null===n||void 0===n?void 0:n.paddingTop)||"0px"),t-=oe((null===n||void 0===n?void 0:n.paddingBottom)||"0px")}function le(e){var t=e.clientWidth,n=getComputedStyle(e);return t-=oe((null===n||void 0===n?void 0:n.paddingLeft)||"0px"),t-=oe((null===n||void 0===n?void 0:n.paddingRight)||"0px")}var ce,se={top:0,left:0,right:0,bottom:0},de=function(e){var t,n=e.bounds,o=void 0===n?"parent":n,a=e.onStop,l=e.onRemove,c=e.onEdit,u=e.defaultPosition,f=e.children,p=e.propsDependencies,g=e.id,x=e.zoom,b=(0,I.Z)(e,["bounds","onStop","onRemove","onEdit","defaultPosition","children","propsDependencies","id","zoom"]),Z=(0,i.Z)((0,s.P)(!1),2),y=Z[0],C=Z[1],z=(0,i.Z)((0,s.P)(!1),2),N=z[0],k=z[1],j=(0,d.useState)(!1),O=j[0],S=j[1],T=(0,d.useState)(u),R=T[0],L=T[1],D=(0,d.useRef)(se),U=(0,d.useState)(se),H=U[0],Y=U[1],J=(0,d.useRef)(null),q=(0,d.useRef)(null),$=(0,_.O)((function(){return C(!1)})),K=w((function(e){return e.canvas})),Q=(0,M.h)(),ce=Q.ref,de=Q.width,ue=Q.height,fe=te({zoom:x}),pe=fe.classes,me=fe.cx,ve=(0,B.useTransition)(O,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0},delay:O?300:0,config:{duration:175}}),he=function(e){var t;return q.current===e.target||(null===(t=q.current)||void 0===t?void 0:t.contains(e.target))||!1},ge=(0,W.Z)((function(){var e,t=(null===(e=J.current)||void 0===e?void 0:e.getBoundingClientRect())||se,n=t.top,o=t.left,i=t.bottom,r=t.right;Y({top:Math.abs(Math.round((n-D.current.top)/x)),right:Math.abs(Math.round((r-D.current.right)/x)),bottom:Math.abs(Math.round((i-D.current.bottom)/x)),left:Math.abs(Math.round((o-D.current.left)/x))})}),8),xe=(0,d.useCallback)((function(e){e.stopPropagation(),he(e)||(ge(),y&&C(!1))}),[ge,y,C]),be=(0,V.Z)((function(){var e=function(e,t,n){var o=document.getElementById("".concat(e)),i=F();if(!o||!i)return{x:0,y:0};var r=getComputedStyle(o),a=getComputedStyle(i),l={left:-o.offsetLeft+oe(a.paddingLeft)+oe(r.marginLeft),top:-o.offsetTop+oe(a.paddingTop)+oe(r.marginTop),right:le(i)-re(o)-o.offsetLeft+oe(a.paddingRight)-oe(r.marginRight),bottom:ae(i)-ie(o)-o.offsetTop+oe(a.paddingBottom)-oe(r.marginBottom)},c=t,s=n;return ne(l.right)&&(c=Math.min(c,l.right)),ne(l.bottom)&&(s=Math.min(s,l.bottom)),ne(l.left)&&(c=Math.max(c,l.left)),ne(l.top)&&(s=Math.max(s,l.top)),{x:c,y:s}}(g,(null===R||void 0===R?void 0:R.x)||0,(null===R||void 0===R?void 0:R.y)||0);L(e)}),500);return(0,d.useEffect)((function(){be(),ge()}),[K.height,K.width,g,ue,de]),(0,r.jsx)(P(),(0,h.Z)((0,v.Z)({bounds:o,position:R,defaultClassName:me(pe.wrapper,"draggable",(t={},(0,E.Z)(t,pe.disabled,N),(0,E.Z)(t,pe.active,y),(0,E.Z)(t,pe.dragging,O),t)),defaultClassNameDragging:pe.wrapperGrabbing,disabled:N,cancel:".options",scale:x,offsetParent:(null===document||void 0===document?void 0:document.getElementById("configurator-canvas"))||void 0,nodeRef:J,onStart:function(){!function(){var e=F();D.current=(null===e||void 0===e?void 0:e.getBoundingClientRect())||se}(),S(!0)},onStop:function(e,t){a&&a(e,t),he(e)||L({x:t.x,y:t.y}),S(!1)},onDrag:xe},b),{children:(0,r.jsxs)(G.k,{ref:(0,A.Y)(J,$,ce),onClick:function(e){he(e)||C()},className:me(pe.box,(0,E.Z)({},pe.dragging,O)),id:g,style:{"--offset-left":"".concat(H.left,"px"),"--offset-right":"".concat(H.right,"px"),"--offset-top":"".concat(H.top,"px"),"--offset-bottom":"".concat(H.bottom,"px")},children:[ve((function(e,t){return t&&(0,r.jsxs)(B.animated.div,{style:e,children:[(0,r.jsx)(ee,{direction:"left",value:H.left,zoom:x}),(0,r.jsx)(ee,{direction:"right",value:H.right,zoom:x}),(0,r.jsx)(ee,{direction:"top",value:H.top,zoom:x}),(0,r.jsx)(ee,{direction:"bottom",value:H.bottom,zoom:x})]})})),f,(0,r.jsx)(X,{visible:y,forceUpdateDependencies:[R].concat((0,m.Z)(p)),onEdit:function(){c((0,h.Z)((0,v.Z)({},function(){var e;return{initialLeft:((null===(e=J.current)||void 0===e?void 0:e.getBoundingClientRect())||se).left,finalLeft:(window.innerWidth-de-500)/2}}()),{y:(null===R||void 0===R?void 0:R.y)||0}))},onRemove:l,onLock:function(){return k()},locked:N,boxRef:J,optionsRef:q,zoom:K.zoom})]})}))},ue=(0,d.memo)((function(e){var t=e.onEdit,n=w((function(e){return e.canvas.zoom})),i=C((function(e){return{elements:e.elements,dragElement:e.dragElement,removeElement:e.removeElement,selectElement:e.selectElement}})),a=i.dragElement,l=i.elements,c=i.removeElement,s=i.selectElement;return(0,r.jsx)(r.Fragment,{children:Object.values(l).map((function(e){var i,d=e.name,u=e.slug,f=e.options,p=null===(i=k.find((function(e){return e.name===d})))||void 0===i?void 0:i.component;if(!p)return null;var m=f.reduce((function(e,t){return(null===t||void 0===t?void 0:t.inputTypeName)===o.TOGGLE_COMPONENTS?(0,v.Z)({},e,t.options.reduce((function(e,t){return(0,h.Z)((0,v.Z)({},e),(0,E.Z)({},t.propName,t.value))}),{})):(0,h.Z)((0,v.Z)({},e),(0,E.Z)({},t.propName,t.value))}),{});return(0,r.jsx)(de,{id:d,onStop:function(e,t){var n=t.x,o=t.y;a({slug:u,x:n,y:o})},bounds:"parent",zoom:n,defaultPosition:l[u].cords,propsDependencies:[f.map((function(e){return e.value}))],onRemove:function(){return c(u)},onEdit:function(e){t(!0,e),s(u)},children:(0,r.jsx)(p,(0,v.Z)({},m))})}))})})),fe=(0,H.k)((function(e,t){var n=t.width,o=t.height,i=t.zoom;return{background:{width:"100%",height:"100vh",cursor:"move","& .react-resizable-handle":{transformOrigin:"bottom right",transform:"scale(".concat(1/i,")")}},wrapper:{margin:"10vmin"},canvas:{outline:"2px solid ".concat(e.colors.dark[4]),height:o,width:n,position:"relative",overflow:"hidden",padding:20,backgroundColor:e.colors.dark[8]},size:(0,v.Z)({position:"absolute",bottom:"calc(100% + 2px)",left:0,color:e.colors.dark[2],fontSize:12/i},e.fn.fontStyles()),canvasControls:{position:"fixed",bottom:16,right:16}}})),pe=.5,me=.2,ve=1.22,he=function(e){var t=e.onEdit,n=e.editing,o=C((function(e){return{canvas:e.canvas,setCanvas:e.setCanvas}})),i=o.canvas,s=o.setCanvas,f=(0,O.O)(),p=f.toggle,m=f.fullscreen,v=(0,d.useState)(!1),h=v[0],g=v[1],x=(0,d.useState)(!1),b=x[0],E=x[1],Z=(0,d.useRef)(null),y=(0,d.useRef)(),w=fe(i).classes,z=function(e,t){var n=t.size;s({width:n.width,height:n.height})},N=function(e,t){if(Z.current){var n=Z.current.state,o=n.positionY,i=n.positionX;y.current={x:null!==e&&void 0!==e?e:i,y:null!==t&&void 0!==t?t:o}}};return(0,d.useEffect)((function(){var e,t,o;!n&&b&&(null===(e=y.current)||void 0===e?void 0:e.x)&&(null===(t=y.current)||void 0===t?void 0:t.y)&&(null===(o=Z.current)||void 0===o||o.setTransform(y.current.x,y.current.y,i.zoom))}),[i.zoom,n,b]),(0,d.useEffect)((function(){if(!b&&Z.current){var e=function(){var e=window.innerHeight>window.innerWidth?window.innerWidth:window.innerHeight,t=L(window.innerHeight/(i.height+.1*e)),n=L(window.innerWidth/(i.width+.1*e));return t>n?n:t}();s({zoom:e}),Z.current.centerView(e),E(!0),N()}}),[Z.current]),(0,d.useEffect)((function(){Z.current&&N()}),[i.zoom]),(0,r.jsx)(T.d$,{ref:Z,minScale:pe,maxScale:3,centerOnInit:!0,disabled:h,doubleClick:{disabled:!0},onInit:function(e){var t=e.state;return s({zoom:t.scale})},onZoomStop:function(e){var t=e.state,n=t.scale;t.scale<pe&&(n=pe),t.scale>3&&(n=3),N(t.positionX,t.positionY),s({zoom:n})},children:function(e){var n=e.zoomIn,o=e.zoomOut,d=e.state,f=e.centerView,v=e.setTransform;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T.Uv,{wrapperClass:w.background,children:(0,r.jsx)(S.Resizable,{width:i.width,height:i.height,onResize:z,onResizeStart:function(){return g(!0)},onResizeStop:function(){g(!1),f()},children:(0,r.jsxs)("div",{className:w.wrapper,children:[(0,r.jsx)("span",{className:w.size,children:"".concat(i.width," x ").concat(i.height,", zoom: ").concat(i.zoom,"x")}),(0,r.jsx)("div",{className:w.canvas,id:R,children:(0,r.jsx)(ue,{onEdit:function(e,n){var o,r,a=n.finalLeft,l=n.initialLeft;t(e);var c=(null===(o=Z.current)||void 0===o?void 0:o.state.positionX)||0;N();var s=a+c-l+500,d=(null===(r=Z.current)||void 0===r?void 0:r.state.positionY)||0;v(s,d,i.zoom)}})})]})})}),(0,r.jsx)(a.h,{zIndex:5,children:(0,r.jsxs)(l.Z,{spacing:4,className:w.canvasControls,children:[(0,r.jsx)(c.A,{size:"lg",radius:"lg",variant:"filled",onClick:function(){n(me);var e=L(d.scale*ve);s({zoom:3>e?e:3})},children:(0,r.jsx)(u.pnK,{})}),(0,r.jsx)(c.A,{size:"lg",radius:"lg",variant:"filled",onClick:function(){o(me);var e=L(d.scale/ve);s({zoom:pe<e?e:pe})},children:(0,r.jsx)(u.$56,{})}),(0,r.jsx)(c.A,{size:"lg",radius:"lg",variant:"filled",onClick:function(){return p()},children:m?(0,r.jsx)(u.Cti,{}):(0,r.jsx)(u.tRC,{})})]})})]})}})},ge=n(1181),xe=n(112),be=n(6403),Ee=(0,H.k)((function(e){return{drawer:{display:"flex",flexDirection:"column",maxHeight:"100vh",borderRight:"1px solid ".concat(e.colors.gray[7])},content:{flexGrow:1,overflow:"scroll",flexWrap:"nowrap","& > *":{width:"100%"}},buttons:{alignSelf:"flex-end"}}})),Ze=n(6668),ye=n(8050),we=n(3481),Ce=n(1820),ze=n(6058),Ne=function(e){return e},ke=(ce={},(0,E.Z)(ce,o.NUMBER,{component:we.Y,handler:Ne}),(0,E.Z)(ce,o.CODE,{component:we.Y,handler:Ne}),(0,E.Z)(ce,o.COLOR,{component:Ce.T,handler:Ne}),(0,E.Z)(ce,o.OBJECT,{component:we.Y,handler:Ne}),(0,E.Z)(ce,o.SCORE_VISUALIZER_CONFIG,{component:we.Y,handler:Ne}),(0,E.Z)(ce,o.SELECT,{component:ze.Ph,handler:Ne}),(0,E.Z)(ce,o.SLIDER,{component:function(e){var t=e.label,n=e.description,o=(0,I.Z)(e,["label","description"]);return(0,r.jsx)(Ze.S,{label:t,description:n,children:(0,r.jsx)(ye.i,(0,v.Z)({},o))})},handler:Ne}),(0,E.Z)(ce,o.TOGGLE,{component:be.r,handler:Ne}),(0,E.Z)(ce,o.TOGGLE_COMPONENTS,{component:be.r,handler:Ne}),ce),je=function(e){var t=e.opened,n=e.setOpened,i=Ee().classes,a=C(),c=a.activeElement,s=a.saveConfig,d=a.editActiveElement,u=a.toggleActiveElementComponents;return(0,r.jsxs)(f.d,{opened:t,classNames:{drawer:i.drawer},onClose:function(){return n(!1)},title:(0,r.jsx)(ge.D,{order:4,children:"Edit element"}),padding:"xl",overlayOpacity:0,size:500,children:[(null===c||void 0===c?void 0:c.description)&&(0,r.jsx)(xe.x,{size:"sm",mb:16,children:null===c||void 0===c?void 0:c.description}),(0,r.jsx)(l.Z,{direction:"column",spacing:12,className:i.content,children:null===c||void 0===c?void 0:c.options.map((function(e){var t=e.inputTypeName,n=e.id,i=(0,I.Z)(e,["inputTypeName","id"]),a=ke[t],l=a.component,c=a.handler;if(t===o.TOGGLE_COMPONENTS){var f=i.options,p=i.checked,g=(0,I.Z)(i,["options","checked"]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(be.r,(0,v.Z)({checked:p,onChange:function(e){u(n,e.target.checked),s()}},g)),f.map((function(e){var t=e.id,n=e.visibleWhenChecked,o=e.inputTypeName,i=(0,I.Z)(e,["id","visibleWhenChecked","inputTypeName"]);if(n!==p)return null;var a=ke[o],l=a.component,c=a.handler;return(0,r.jsx)(l,(0,h.Z)((0,v.Z)({},i),{onChange:function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];d(t,c.apply(void 0,(0,m.Z)(n))),s()}}))}))]})}return(0,r.jsx)(l,(0,h.Z)((0,v.Z)({},i),{onChange:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];d(n,c.apply(void 0,(0,m.Z)(t))),s()}}))}))}),(0,r.jsxs)(l.Z,{direction:"row",spacing:16,className:i.buttons,children:[(0,r.jsx)(p.z,{color:"red",onClick:function(){n(!1)},children:"cancel"}),(0,r.jsx)(p.z,{onClick:function(){s(),n(!1)},children:"save"})]})]})},Oe=n(5362),Se=n(6159),Te=n(5618),Re=function(){var e=(0,Te.N)((function(e){return e.cutNote})),t=(0,i.Z)((0,s.P)(!0),2),n=t[0],o=t[1],f=(0,i.Z)((0,s.P)(!1),2),p=f[0],m=f[1],v=(0,d.useState)(!1),h=v[0],g=v[1];return(0,Se.Y)((function(){e((0,Oe.b)())}),n?150:null),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(he,{editing:p,onEdit:function(e){return m(e)}}),(0,r.jsx)(a.h,{zIndex:5,children:(0,r.jsxs)(l.Z,{spacing:8,styles:{root:{position:"fixed",bottom:16,left:16}},children:[(0,r.jsx)(c.A,{color:"blue",size:"xl",radius:"xl",variant:"filled",onClick:function(){return g(!0)},children:(0,r.jsx)(u.uGf,{size:20})}),(0,r.jsx)(c.A,{color:"blue",size:"xl",radius:"xl",variant:"filled",onClick:function(){return o((function(e){return!e}))},children:n?(0,r.jsx)(u.RAg,{size:20}):(0,r.jsx)(u.qfg,{size:20})})]})}),(0,r.jsx)(j,{opened:h,setOpened:g}),(0,r.jsx)(je,{opened:p,setOpened:m})]})}},3701:function(e){e.exports={purple100:"#f1f5f9",purple200:"#e2e8f0",purple300:"#cbd5e1",purple400:"#575570",purple500:"#464260",purple600:"#2d2c45",purple700:"#1d1b36",purple800:"#05001e",purple900:"#001",green100:"#dcfce7",green200:"#bbf7d0",green300:"#86efac",green400:"#4ade80",green500:"#22c55e",green600:"#16a34a",green700:"#15803d",green800:"#166534",green900:"#14532d",blue100:"#dbeafe",blue200:"#bfdbfe",blue300:"#93c5fd",blue400:"#60a5fa",blue500:"#3b82f6",blue600:"#2563eb",blue700:"#1d4ed8",blue800:"#1e40af",blue900:"#1e3a8a",yellow100:"#fef9c3",yellow200:"#fef08a",yellow300:"#fde047",yellow400:"#facc15",yellow500:"#eab308",yellow600:"#ca8a04",yellow700:"#a16207",yellow800:"#854d0e",yellow900:"#713f12",red100:"#fee2e2",red200:"#fecaca",red300:"#fca5a5",red400:"#f87171",red500:"#ef4444",red600:"#dc2626",red700:"#b91c1c",red800:"#991b1b",red900:"#7f1d1d",gray100:"#f4f4f5",gray200:"#e4e4e7",gray300:"#d4d4d8",gray400:"#a1a1aa",gray500:"#71717a",gray600:"#52525b",gray700:"#3f3f46",gray800:"#27272a",gray900:"#18181b",text:"TextCore_text__e3KgX"}}},function(e){e.O(0,[937,265,906,568,774,888,179],(function(){return t=6850,e(e.s=t);var t}));var t=e.O();_N_E=t}]);