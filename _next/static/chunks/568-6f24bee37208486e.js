(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[568],{5134:function(e,r,n){"use strict";n.d(r,{H:function(){return x}});var t=n(6042),o=n(9396),a=n(5893),c=n(4651),i=n(7294),l=n(5618),f=n(4584),d=n.n(f),u=n(1472),s=function(e){return"Any"===e?{transform:"translate3d(-50%, -50%, 0)",top:"50%",left:"50%"}:{bottom:0}},g=n(8198),p=n(6147),b=n(7418),y=n.n(b),w=function(e){var r=(0,l.N)((function(e){return e.hideCut})),n=e.noteConfig,t=e.fadeTime,o=void 0===t?300:t,c=e.cut,i=c.active,f=c.direction,d=c.x,b=c.y,w=c.color,h=void 0===w?"#FFF":w,m=c.fromCenter,v=void 0===m?0:m,x=c.deviation,_=void 0===x?0:x,N=n.indicator,z=n.dot,k=n.cut,C=n.note,j=(0,u.useSpring)({opacity:i?1:0,immediate:i,config:{tension:210,friction:20}}).opacity;return(0,p.K)((function(){r({x:d,y:b})}),i?o:null),(0,a.jsxs)(u.animated.div,{className:y().wrapper,style:{opacity:j,transform:"rotate(".concat(-(0,g.c)(f),"deg)"),"--note-size":C.size,"--note-color":C.color(h),"--note-background-color":C.backgroundColor(h),"--note-indicator-color":N.color(h),"--note-indicator-shadow":N.shadow(h),"--note-indicator-margin":"Any"!==f?N.margin:0,"--note-cut-size":k.size,"--note-cut-color":k.color(h),"--note-cut-shadow":k.shadow(h)},children:[(0,a.jsx)("div",{className:y().block,children:"Any"===f?(0,a.jsx)("svg",{className:y().indicator,width:z.size,height:z.size,fill:"none",xmlns:"http://www.w3.org/2000/svg",style:s(f),children:(0,a.jsx)("circle",{cx:z.position,cy:z.position,r:z.position})}):(0,a.jsx)("svg",{className:y().indicator,width:N.width,height:N.height,fill:"none",xmlns:"http://www.w3.org/2000/svg",style:s(f),children:(0,a.jsx)("path",{fill:"#000",d:"M".concat(N.width," ").concat(N.topHeight," L").concat(.5*N.width," 0 L 0 ").concat(N.topHeight," L 0 ").concat(N.height," H ").concat(N.width," L ").concat(N.width," ").concat(N.topHeight," Z M 0 ").concat(N.topHeight)})})}),(0,a.jsx)("span",{className:y().cut,style:{left:"".concat(50-50*v,"%"),transform:"translateX(-50%) rotate(".concat(-_,"deg)")}})]})},h=(0,c.$n)(.2),m=(0,c.$n)(.75),v=(0,c.$n)(.9),x=function(e){var r=e.cellSize,n=void 0===r?50:r,f=e.fadeTime,u=void 0===f?300:f,s=e.gridColor,g=void 0===s?"transparent":s,p=e.gridBorderSize,b=void 0===p?2:p,y=e.style,x=e.gap,_=(0,l.N)((function(e){return e.noteCuts})),N=(0,i.useMemo)((function(){return{noteConfig:{indicator:{color:function(e){return m(e)},shadow:function(e){return h(e)},height:.2*n,width:.56*n,topHeight:.1*n,margin:.22*n},dot:{size:.2*n,position:.1*n},cut:{color:function(e){return v(e)},shadow:function(e){return h(e)},size:.05*n},note:{color:function(e){return e},backgroundColor:function(e){return(0,c.m4)(e,.1)},size:n}},notePadding:(x||(Math.SQRT2-1.08)*n)/2}}),[n,x]),z=N.noteConfig,k=N.notePadding;return(0,a.jsx)("div",{className:d().grid,style:(0,o.Z)((0,t.Z)({},y),{"--note-padding":k,"--note-border-size":b,"--note-border-color":g}),children:_.map((function(e){return e.map((function(e){return(0,a.jsx)("div",{className:d().blockWrapper,children:(0,a.jsx)(w,{fadeTime:u,noteConfig:z,cut:e})})}))}))})}},8602:function(e,r,n){"use strict";n.d(r,{I:function(){return w}});var t=n(6042),o=n(9396),a=n(9534),c=n(5893),i=n(5618),l=n(828),f=n(1472),d=n(7294),u=n(6147),s=n(5704),g=n.n(s),p=function(e){var r=e.note,n=e.unmountTime,s=e.maxRow,p=e.maxRotate,b=e.scoreCutShift,y=e.config,w=r.radians,h=void 0===w?0:w,m=r.x,v=r.y,x=r.score,_=r.id,N=(0,i.N)((function(e){return e.unmountScoreNote})),z=(0,d.useMemo)((function(){var e=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,n=e*Math.PI/180,t=Math.cos(n)*r,o=Math.sin(n)*r;return{x0:t,y0:-o,x1:-t,y1:o}}(h,b),r=e.x0,n=e.x1,o=e.y0,c=e.y1,i=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=Math.abs(e>180?e-180:e),t=n>90?n:180-n;return(t-r<90?t-90:r)*(n<90?1:-1)}(h,p);return(0,t.Z)({transform:{x0:r,x1:n,y0:o,y1:c},rotate:i},function(e,r){var n=null===r||void 0===r?void 0:r.find((function(r){return r.above<=e}));if(n){var o=n.color,c=n.fontSize,i=(0,a.Z)(n,["color","fontSize"]);return(0,t.Z)({fontSize:c,color:o},i)}return{fontSize:14,color:"white",textShadow:"white 1px 1px 10px"}}(x,y))}),[h,b,p,x,y]),k=z.transform,C=z.rotate,j=(0,a.Z)(z,["transform","rotate"]),S=(0,l.Z)((0,f.useSpring)((function(){return{from:{x:k.x0,y:k.y0,rotate:0,opacity:0},to:{x:k.x1,y:k.y1,rotate:C,opacity:1},config:{tension:260,friction:20,velocity:.01,mass:2}}})),2),Z=S[0],R=S[1];(0,u.K)((function(){R({opacity:0}),_&&N({id:_,x:m,y:v})}),n);var M=s-v>1?s-v:1;return(0,c.jsx)(f.animated.div,{className:g().score,style:(0,t.Z)((0,o.Z)((0,t.Z)({},Z),{"--hit-score-column":m+1,"--hit-score-row":M}),j),children:r.score})},b=n(6320),y=n.n(b),w=function(e){var r=e.rows,n=e.style,l=e.width,f=e.rowHeight,d=(0,a.Z)(e,["rows","style","width","rowHeight"]),u=(0,i.N)((function(e){return e.noteScores}));return(0,c.jsx)("div",{className:y().grid,style:(0,o.Z)((0,t.Z)({},n),{"--grid-rows-amount":r,"--grid-width":l,"--grid-height":r*f}),children:u.map((function(e){return e.map((function(e){return e.scores.map((function(e){return(0,c.jsx)(p,(0,t.Z)({maxRow:r,note:e},d),e.id)}))}))}))})}},5362:function(e,r,n){"use strict";n.d(r,{b:function(){return i}});var t=function(e,r){return Math.floor(Math.random()*(r-e+1)+e)},o=n(4640),a=n(8198),c=["Up","UpLeft","UpRight","Right","DownRight","Down","DownLeft","DownRight","Left","Any"],i=function(){var e=t(0,3),r=t(0,2),n=t(0,1),i=c[t(0,c.length-1)],l=t(-35,35);return{direction:i,x:e,y:r,deviation:l,score:t(98,115),id:t(0,3e4),color:n?"rgb(200, 20, 20)":"rgb(106, 13, 179)",fromCenter:t(-100,100)/100,radians:(0,o.q)((l+("Any"!==i?(0,a.c)(i):t(0,360))-90)*Math.PI/180)}}},8198:function(e,r,n){"use strict";n.d(r,{c:function(){return t}});var t=function(e){switch(e){case"Right":return 270;case"UpRight":return 315;case"Up":default:return 0;case"UpLeft":return 45;case"Left":return 90;case"DownLeft":return 135;case"Down":return 180;case"DownRight":return 225}}},6147:function(e,r,n){"use strict";n.d(r,{K:function(){return o}});var t=n(7294),o=function(e,r){var n=(0,t.useRef)(),o=(0,t.useRef)(e);return(0,t.useEffect)((function(){o.current=e}),[e]),(0,t.useEffect)((function(){if("number"===typeof r)return n.current=setTimeout((function(){return o.current()}),r),function(){return clearTimeout(n.current)}}),[r]),n}},4584:function(e){e.exports={purple100:"#f1f5f9",purple200:"#e2e8f0",purple300:"#cbd5e1",purple400:"#575570",purple500:"#464260",purple600:"#2d2c45",purple700:"#1d1b36",purple800:"#05001e",purple900:"#001",green100:"#dcfce7",green200:"#bbf7d0",green300:"#86efac",green400:"#4ade80",green500:"#22c55e",green600:"#16a34a",green700:"#15803d",green800:"#166534",green900:"#14532d",blue100:"#dbeafe",blue200:"#bfdbfe",blue300:"#93c5fd",blue400:"#60a5fa",blue500:"#3b82f6",blue600:"#2563eb",blue700:"#1d4ed8",blue800:"#1e40af",blue900:"#1e3a8a",yellow100:"#fef9c3",yellow200:"#fef08a",yellow300:"#fde047",yellow400:"#facc15",yellow500:"#eab308",yellow600:"#ca8a04",yellow700:"#a16207",yellow800:"#854d0e",yellow900:"#713f12",red100:"#fee2e2",red200:"#fecaca",red300:"#fca5a5",red400:"#f87171",red500:"#ef4444",red600:"#dc2626",red700:"#b91c1c",red800:"#991b1b",red900:"#7f1d1d",gray100:"#f4f4f5",gray200:"#e4e4e7",gray300:"#d4d4d8",gray400:"#a1a1aa",gray500:"#71717a",gray600:"#52525b",gray700:"#3f3f46",gray800:"#27272a",gray900:"#18181b",grid:"CutVisualizer_grid__awNji",blockWrapper:"CutVisualizer_blockWrapper__W12Yv"}},7418:function(e){e.exports={purple100:"#f1f5f9",purple200:"#e2e8f0",purple300:"#cbd5e1",purple400:"#575570",purple500:"#464260",purple600:"#2d2c45",purple700:"#1d1b36",purple800:"#05001e",purple900:"#001",green100:"#dcfce7",green200:"#bbf7d0",green300:"#86efac",green400:"#4ade80",green500:"#22c55e",green600:"#16a34a",green700:"#15803d",green800:"#166534",green900:"#14532d",blue100:"#dbeafe",blue200:"#bfdbfe",blue300:"#93c5fd",blue400:"#60a5fa",blue500:"#3b82f6",blue600:"#2563eb",blue700:"#1d4ed8",blue800:"#1e40af",blue900:"#1e3a8a",yellow100:"#fef9c3",yellow200:"#fef08a",yellow300:"#fde047",yellow400:"#facc15",yellow500:"#eab308",yellow600:"#ca8a04",yellow700:"#a16207",yellow800:"#854d0e",yellow900:"#713f12",red100:"#fee2e2",red200:"#fecaca",red300:"#fca5a5",red400:"#f87171",red500:"#ef4444",red600:"#dc2626",red700:"#b91c1c",red800:"#991b1b",red900:"#7f1d1d",gray100:"#f4f4f5",gray200:"#e4e4e7",gray300:"#d4d4d8",gray400:"#a1a1aa",gray500:"#71717a",gray600:"#52525b",gray700:"#3f3f46",gray800:"#27272a",gray900:"#18181b",wrapper:"NoteBlock_wrapper___g_z_",block:"NoteBlock_block__XsXAX",indicator:"NoteBlock_indicator__bAocv",cut:"NoteBlock_cut__LjnoC"}},5704:function(e){e.exports={purple100:"#f1f5f9",purple200:"#e2e8f0",purple300:"#cbd5e1",purple400:"#575570",purple500:"#464260",purple600:"#2d2c45",purple700:"#1d1b36",purple800:"#05001e",purple900:"#001",green100:"#dcfce7",green200:"#bbf7d0",green300:"#86efac",green400:"#4ade80",green500:"#22c55e",green600:"#16a34a",green700:"#15803d",green800:"#166534",green900:"#14532d",blue100:"#dbeafe",blue200:"#bfdbfe",blue300:"#93c5fd",blue400:"#60a5fa",blue500:"#3b82f6",blue600:"#2563eb",blue700:"#1d4ed8",blue800:"#1e40af",blue900:"#1e3a8a",yellow100:"#fef9c3",yellow200:"#fef08a",yellow300:"#fde047",yellow400:"#facc15",yellow500:"#eab308",yellow600:"#ca8a04",yellow700:"#a16207",yellow800:"#854d0e",yellow900:"#713f12",red100:"#fee2e2",red200:"#fecaca",red300:"#fca5a5",red400:"#f87171",red500:"#ef4444",red600:"#dc2626",red700:"#b91c1c",red800:"#991b1b",red900:"#7f1d1d",gray100:"#f4f4f5",gray200:"#e4e4e7",gray300:"#d4d4d8",gray400:"#a1a1aa",gray500:"#71717a",gray600:"#52525b",gray700:"#3f3f46",gray800:"#27272a",gray900:"#18181b",score:"HitScore_score__Yo_1Y"}},6320:function(e){e.exports={purple100:"#f1f5f9",purple200:"#e2e8f0",purple300:"#cbd5e1",purple400:"#575570",purple500:"#464260",purple600:"#2d2c45",purple700:"#1d1b36",purple800:"#05001e",purple900:"#001",green100:"#dcfce7",green200:"#bbf7d0",green300:"#86efac",green400:"#4ade80",green500:"#22c55e",green600:"#16a34a",green700:"#15803d",green800:"#166534",green900:"#14532d",blue100:"#dbeafe",blue200:"#bfdbfe",blue300:"#93c5fd",blue400:"#60a5fa",blue500:"#3b82f6",blue600:"#2563eb",blue700:"#1d4ed8",blue800:"#1e40af",blue900:"#1e3a8a",yellow100:"#fef9c3",yellow200:"#fef08a",yellow300:"#fde047",yellow400:"#facc15",yellow500:"#eab308",yellow600:"#ca8a04",yellow700:"#a16207",yellow800:"#854d0e",yellow900:"#713f12",red100:"#fee2e2",red200:"#fecaca",red300:"#fca5a5",red400:"#f87171",red500:"#ef4444",red600:"#dc2626",red700:"#b91c1c",red800:"#991b1b",red900:"#7f1d1d",gray100:"#f4f4f5",gray200:"#e4e4e7",gray300:"#d4d4d8",gray400:"#a1a1aa",gray500:"#71717a",gray600:"#52525b",gray700:"#3f3f46",gray800:"#27272a",gray900:"#18181b",grid:"HitScoreVisualizer_grid__si_KD"}}}]);