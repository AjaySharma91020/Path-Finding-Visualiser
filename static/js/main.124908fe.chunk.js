(this["webpackJsonppath-finding-visualiser"]=this["webpackJsonppath-finding-visualiser"]||[]).push([[0],{17:function(e,i,t){},18:function(e,i,t){},20:function(e,i,t){},21:function(e,i,t){"use strict";t.r(i);var n=t(1),a=t(9),s=t.n(a),l=(t(17),t(18),t(12)),r=t(11),c=t(3),u=t(4),o=t(2),d=t(6),h=t(5),f=(t(8),t(10)),b=t.n(f),j=t(0),v=function(e){Object(d.a)(t,e);var i=Object(h.a)(t);function t(){return Object(c.a)(this,t),i.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props,i=e.id,t=e.row,n=e.col,a=e.handleClickSquare,s=e.isInitial,l=e.isFinal;return Object(j.jsx)("div",{id:i,className:b()("square border border-dark",{"initial-square":s,"final-square":l}),onClick:function(){return a(t,n)}})}}]),t}(n.Component);t(20);var m=function(e){Object(d.a)(t,e);var i=Object(h.a)(t);function t(){return Object(c.a)(this,t),i.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"info-bar",children:[Object(j.jsx)("div",{className:"square border border-dark initial-square"}),Object(j.jsx)("span",{className:"info-text",children:"Start"})]}),Object(j.jsxs)("div",{className:"info-bar",children:[Object(j.jsx)("div",{className:"square border border-dark final-square"}),Object(j.jsx)("span",{className:"info-text",children:"Destination"})]}),Object(j.jsxs)("div",{className:"info-bar",children:[Object(j.jsx)("div",{className:"square border border-dark visited-square"}),Object(j.jsx)("span",{className:"info-text",children:"Visited"})]}),Object(j.jsxs)("div",{className:"info-bar",children:[Object(j.jsx)("div",{className:"square border border-dark path-square"}),Object(j.jsx)("span",{className:"info-text",children:"Path"})]})]})}}]),t}(n.Component),O=28,p=55,x=function(e){Object(d.a)(t,e);var i=Object(h.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=i.call(this,e)).state={grid:[],initialX:null,initialY:null,finalX:null,finalY:null,status:""},n.initialiseGrid=n.initialiseGrid.bind(Object(o.a)(n)),n.handleClickSquare=n.handleClickSquare.bind(Object(o.a)(n)),n.visualise=n.visualise.bind(Object(o.a)(n)),n.animateBFS=n.animateBFS.bind(Object(o.a)(n)),n.animatePath=n.animatePath.bind(Object(o.a)(n)),n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=window.screen.availWidth;e<1400&&e>=1e3?(O=20,p=45):e<1e3&&e>=780?(O=20,p=35):e<780&&e>500?(O=20,p=25):e<500&&(O=13,p=14),this.initialiseGrid()}},{key:"initialiseGrid",value:function(){for(var e=[],i=0;i<O;i++){for(var t=[],n=0;n<p;n++)t.push({row:i,col:n,isInitial:!1,isFinal:!1,isVisited:!1});e.push(t)}this.setState({grid:e,initialX:null,initialY:null,finalX:null,finalY:null,status:"Select the Source Node"})}},{key:"handleClickSquare",value:function(e,i){var t=this.state.grid,n=this.state,a=n.initialX,s=n.initialY,l=n.finalX,c=n.finalY,u=n.status,o=Object(r.a)(t);if(null==a||null===s||null===l||null===c){if(null===a&&null===s&&null===l&&null===c)a=e,s=i,o[e][i].isInitial=!0,u="Select the Destination Node";else if(null!==a&&null!==s&&null===l&&null===c){if(a===e&&s===i)return void alert("intial and final points cannot be same");l=e,c=i,o[e][i].isFinal=!0,u="Ready to Visualise"}this.setState({initialX:a,initialY:s,finalX:l,finalY:c,grid:o,status:u})}}},{key:"visualise",value:function(){var e=this,i=this.state,t=i.initialX,n=i.initialY,a=i.finalX,s=i.finalY,l=i.grid,r=this.animateBFS,c=this.animatePath;if(null!==t||null!==a)if(null===t||null!==a){var u=function(e,i,t,n,a){if(e.isVisited)return{path:[],visitedNodes:[],distance:[]};for(var s=[],l=[],r=[],c=[[0,1],[1,0],[0,-1],[-1,0]],u=0;u<n;u++){for(var o=[],d=0;d<a;d++)o.push(null);r.push(o)}var h=0,f=!1;for(s.push(e),t[e.row][e.col].isVisited=!0;s.length&&!f;){for(var b=s.length,j=0;j<b;j++){var v=s.shift();l.push(v);for(var m=0;m<c.length;m++){var O=v.row+c[m][0],p=v.col+c[m][1];if(O>=0&&p>=0&&O<n&&p<a&&!t[O][p].isVisited){if(t[O][p]===i){r[O][p]=v,f=!0;break}s.push(t[O][p]),t[O][p].isVisited=!0,r[O][p]=v}}}if(h++,f)break}return{path:function(e,i,t){for(var n=[],a=t;null!==a;)n.push(a),a=i[a.row][a.col];return n.reverse(),n}(0,r,i),visitedNodes:l,distance:h}}(l[t][n],l[a][s],l,O,p),o=u.path,d=u.visitedNodes,h=u.distance;r(d),setTimeout((function(){c(o),e.setState({distance:h,status:"Shortest distance found is ".concat(h)})}),25*d.length)}else alert("Please specify the final point");else alert("Please specify initial and final points")}},{key:"animateBFS",value:function(e){for(var i=function(i){setTimeout((function(){var t=e[i];document.getElementById("square-".concat(t.row,"-").concat(t.col)).classList.add("visited-square")}),25*i)},t=1;t<e.length;t++)i(t)}},{key:"animatePath",value:function(e){for(var i=function(i){setTimeout((function(){var t=e[i];document.getElementById("square-".concat(t.row,"-").concat(t.col)).classList.add("path-square")}),25*i)},t=1;t<e.length-1;t++)i(t)}},{key:"reset",value:function(){window.location.reload()}},{key:"render",value:function(){var e=this.state,i=e.grid,t=e.status,n=this.handleClickSquare,a=this.visualise,s=this.reset;return Object(j.jsxs)("div",{className:"container mt-2",children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Path Finding Visualiser"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-6 text-center mt-3",children:Object(j.jsx)(m,{})}),Object(j.jsx)("div",{className:"col-md-4 text-center mt-3",children:Object(j.jsx)("span",{className:"bg-dark text-white font-weight-light font-italic p-2 m-1",children:t})}),Object(j.jsx)("div",{className:"col-md-1",children:Object(j.jsx)("button",{className:"btn btn-warning mt-3 mb-1",onClick:function(){return a()},children:"Visualise"})}),Object(j.jsx)("div",{className:"col-md-1",children:Object(j.jsx)("button",{className:"btn btn-primary mt-3 mb-1",onClick:function(){return s()},children:"Reset"})})]})]}),Object(j.jsx)("div",{className:"container mt-2",children:i.map((function(e,t){return Object(j.jsx)("div",{className:"row",children:e.map((function(e,a){return Object(j.jsx)(v,Object(l.a)({id:"square-".concat(t,"-").concat(a),handleClickSquare:n},i[t][a]),"square-".concat(t,"-").concat(a))}))},t)}))})]})}}]),t}(n.Component);var N=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(x,{})})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(i){var t=i.getCLS,n=i.getFID,a=i.getFCP,s=i.getLCP,l=i.getTTFB;t(e),n(e),a(e),s(e),l(e)}))};s.a.render(Object(j.jsx)(N,{}),document.getElementById("root")),k()},8:function(e,i,t){}},[[21,1,2]]]);
//# sourceMappingURL=main.124908fe.chunk.js.map