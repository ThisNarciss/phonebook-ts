import{n as p,r as _,i as A,j as e,b as y,c as j,f as le,d as de,e as ue,g as h,I as Y,L as K,M as pe,B as me,h as fe,s as G,T as xe,k as he,a as ge,l as be,m as ve,o as ye,p as je,q as V,t as we}from"./index-90ab3fc5.js";import{c as Q,a as k,n as w,F as X,U as ee,I as S,b as z,B as I,L as F,E as $,d as te,e as Ce,f as ke,g as Se}from"./index.esm-873db0b2.js";import{P as b,S as ze}from"./iconBase-1e1880b7.js";var q="NOT_FOUND";function Ie(r){var n;return{get:function(a){return n&&r(n.key,a)?n.value:q},put:function(a,i){n={key:a,value:i}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}function Fe(r,n){var t=[];function a(o){var s=t.findIndex(function(m){return n(o,m.key)});if(s>-1){var d=t[s];return s>0&&(t.splice(s,1),t.unshift(d)),d.value}return q}function i(o,s){a(o)===q&&(t.unshift({key:o,value:s}),t.length>r&&t.pop())}function c(){return t}function l(){t=[]}return{get:a,put:i,getEntries:c,clear:l}}var $e=function(n,t){return n===t};function qe(r){return function(t,a){if(t===null||a===null||t.length!==a.length)return!1;for(var i=t.length,c=0;c<i;c++)if(!r(t[c],a[c]))return!1;return!0}}function Ee(r,n){var t=typeof n=="object"?n:{equalityCheck:n},a=t.equalityCheck,i=a===void 0?$e:a,c=t.maxSize,l=c===void 0?1:c,o=t.resultEqualityCheck,s=qe(i),d=l===1?Ie(s):Fe(l,s);function m(){var u=d.get(arguments);if(u===q){if(u=r.apply(null,arguments),o){var f=d.getEntries(),g=f.find(function(x){return o(x.value,u)});g&&(u=g.value)}d.put(arguments,u)}return u}return m.clearCache=function(){return d.clear()},m}function Le(r){var n=Array.isArray(r[0])?r[0]:r;if(!n.every(function(a){return typeof a=="function"})){var t=n.map(function(a){return typeof a=="function"?"function "+(a.name||"unnamed")+"()":typeof a}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function Re(r){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];var i=function(){for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];var d=0,m,u={memoizeOptions:void 0},f=o.pop();if(typeof f=="object"&&(u=f,f=o.pop()),typeof f!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof f+"]");var g=u,x=g.memoizeOptions,v=x===void 0?t:x,se=Array.isArray(v)?v:[v],E=Le(o),O=r.apply(void 0,[function(){return d++,f.apply(null,arguments)}].concat(se)),P=r(function(){for(var T=[],ce=E.length,L=0;L<ce;L++)T.push(E[L].apply(null,arguments));return m=O.apply(null,T),m});return Object.assign(P,{resultFunc:f,memoizedResultFunc:O,dependencies:E,lastResult:function(){return m},recomputations:function(){return d},resetRecomputations:function(){return d=0}}),P};return i}var re=Re(Ee);const _e=p.div`
  height: 810px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
  max-width: 700px;
`,Ae=p.p`
  @keyframes changeSize {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.1);
    }
  }

  animation-name: changeSize;
  animation-duration: 1000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  padding: 20px 40px;
  font: 20px;
  border-radius: 5px;
  border: 1px solid red;
  color: white;
  background-color: red;
  margin-bottom: 20px;
`;p.figure`
  $unit: 60vmin;
  margin-left: 2em;
  height: 1.43 * $unit;
  width: $unit;
  line-height: 1.43 * $unit;
  border-width: $unit/20;
  border-radius: $unit/14;
  background-image: linear-gradient(rgba(0, 0, 0, 0), #111),
    url(https://www.apple.com/v/ipad-pro/s/images/overview/retina_screen_1__csuokryyjb42_large.jpg);
  z-index: 100;
  display: block;
  /* color: #fff; */
  text-align: center;
  font-family: 'SF Pro Display', Helvetica Neue, Arial, sans-serif;
  letter-spacing: -0.022em;
  font-size: 2.5vmin;
  text-shadow: 0 0 0.5em #000;
  background-color: #000;
  background-size: auto 200%, cover;
  background-repeat: no-repeat, no-repeat;
  border: solid #111;
  margin-bottom: 2em;
  position: relative;
  box-shadow: 0 0.5em 2em 0.2em rgba(0, 0, 0, 0.33), 0 0 0 0.5px #000 inset;
  transition: all 0.1s linear, line-height 0s linear;
  background-position: 50% 100%, center;
  transform-origin: bottom center;
  &:hover,
  :focus {
    /* color: transparent; */
    text-shadow: 0 0 0em transparent;
    background-position: 50% -100%, center center;
    transition: all 0.15s linear, line-height 5s linear;
    box-shadow: 0 0.5em 3em 0.25em rgba(0, 0, 0, 0.33), 0 0 0 1px #000 inset;
    transform: scale(1.0025);
    /* line-height: 0vmin; */
  }
`;const B=r=>r.contacts.items,Be=r=>r.contacts.isLoading,De=r=>r.contacts.error;var D={},Ne=A;Object.defineProperty(D,"__esModule",{value:!0});var ne=D.default=void 0,Me=Ne(_()),Oe=e,Pe=(0,Me.default)((0,Oe.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddCircle");ne=D.default=Pe;const Te=Q().shape({name:k().min(2).max(30).trim().required(),number:k().min(12).max(13).trim().required()}),U=w(),Z=w(),Ve={name:"",number:""},Ue=()=>{const r=y(B),n=j(),t=i=>{const c=r.find(({name:o})=>o.toLowerCase()===i.name.toLowerCase()),l=r.find(({number:o})=>o.toLowerCase()===i.number.toLowerCase());if(c){le(c);return}if(l){de(l);return}n(ue(i))},a=(i,{resetForm:c})=>{t(i),c()};return e.jsx(X,{validationSchema:Te,initialValues:Ve,onSubmit:a,children:e.jsxs(ee,{children:[e.jsxs(S,{children:[e.jsx(z,{id:U,type:"text",name:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),e.jsx(I,{}),e.jsx(F,{htmlFor:U,children:"Name"}),e.jsx($,{name:"name",component:"p"})]}),e.jsxs(S,{children:[e.jsx(z,{id:Z,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),e.jsx(I,{}),e.jsx(F,{htmlFor:Z,children:"Number"}),e.jsx($,{name:"number",component:"p"})]}),e.jsx(te,{type:"submit",variant:"contained",size:"large",sx:{transitionProperty:"all",transitionDuration:"250ms",transitionTimingFunction:"linear"},endIcon:e.jsx(ne,{fontSize:"large"}),children:"Add"})]})})},Ze=p.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
  font-size: 12px;
  @media screen and (min-width: 600px) {
    font-size: 14px;
  }
  @media screen and (min-width: 900px) {
    font-size: 16px;
  }
`,He=p.li`
  position: relative;
  padding: 5px;
  background-color: ${({theme:r})=>r.palette.mode==="dark"?"transparent":"#FFFFFF"};
  background-image: linear-gradient(to right, rgb(0 0 0 / 0.15), transparent);
  transform-style: preserve-3d;

  display: grid;
  grid-template-rows: 1fr;
  row-gap: 0.5rem;
  column-gap: 2rem;

  box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08),
    0 2px 2px rgba(0, 0, 0, 0.12);
  ::before {
    --ry: -1;
    right: 100%;
    --side-rotate: 60deg;
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 70px;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    transform-origin: calc(50% - (50% * var(--ry))) 50%;
    transform: rotateY(calc(var(--side-rotate) * var(--ry)));
    background-color: inherit;
    background-image: linear-gradient(
      calc(90deg * var(--ry)),
      rgb(0 0 0 / 0.25),
      rgb(0 0 0 / 0.5)
    );
    box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08),
      0 2px 2px rgba(0, 0, 0, 0.12);
  }
  ::after {
    --ry: 1;
    left: 100%;
    --side-rotate: 60deg;
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 70px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    transform-origin: calc(50% - (50% * var(--ry))) 50%;
    transform: rotateY(calc(var(--side-rotate) * var(--ry)));
    background-color: inherit;
    background-image: linear-gradient(
      calc(90deg * var(--ry)),
      rgb(0 0 0 / 0.25),
      rgb(0 0 0 / 0.5)
    );
    box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.08),
      0 2px 2px rgba(0, 0, 0, 0.12);
  }
`,We=p.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #bdbdbd;
  padding: 5px;
`,Je=p.p`
  width: 100%;
`,Ye=p.div`
  display: flex;
`;var N={},Ke=A;Object.defineProperty(N,"__esModule",{value:!0});var ae=N.default=void 0,Ge=Ke(_()),Qe=e,Xe=(0,Ge.default)((0,Qe.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");ae=N.default=Xe;var M={},et=A;Object.defineProperty(M,"__esModule",{value:!0});var R=M.default=void 0,tt=et(_()),rt=e,nt=(0,tt.default)((0,rt.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");R=M.default=nt;const at={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",borderRadius:"8px",boxShadow:24,p:4},it=Q().shape({name:k().min(2).max(30).trim().required(),number:k().min(12).max(13).trim().required()}),H=w(),W=w(),ie=({id:r,name:n,number:t})=>{const[a,i]=h.useState(""),[c,l]=h.useState(!1),[o,s]=h.useState(!1),d=j(),m=()=>{i(r),s(!0)},u=()=>s(!1),f=x=>{l(!0),d(fe({id:a,value:x})).unwrap().finally(()=>l(!1)),s(!1)},g=(x,{resetForm:v})=>{f(x),v()};return e.jsxs(e.Fragment,{children:[e.jsxs(Y,{"aria-label":"edits",size:"medium",onClick:m,sx:{fontSize:{xs:"16px",sm:"18px",md:"20px"},":hover":{backgroundColor:"green",color:"white"},":focus":{backgroundColor:"green",color:"white"},transitionProperty:"all",transitionDuration:"250ms",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1) 0ms"},children:[!c&&e.jsx(R,{fontSize:"inherit"}),c&&a===r&&e.jsx(K,{})]}),e.jsx(pe,{open:o,onClose:u,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsx(me,{sx:at,children:e.jsx(X,{validationSchema:it,initialValues:{name:n,number:t},onSubmit:g,children:({values:x})=>e.jsxs(ee,{children:[e.jsxs(S,{children:[e.jsx(z,{id:H,type:"text",name:"name",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:x.name}),e.jsx(I,{}),e.jsx(F,{htmlFor:H,children:"Name"}),e.jsx($,{name:"name",component:"p"})]}),e.jsxs(S,{children:[e.jsx(z,{id:W,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:x.number}),e.jsx(I,{}),e.jsx(F,{htmlFor:W,children:"Number"}),e.jsx($,{name:"number",component:"p"})]}),e.jsx(te,{type:"submit",variant:"contained",size:"large",endIcon:e.jsx(R,{fontSize:"inherit"}),children:"Edit"})]})})})})]})};ie.propTypes={id:b.string.isRequired,name:b.string.isRequired,number:b.string.isRequired};const ot=G(xe)(({theme:r})=>({display:"flex",alignItems:"center",justifyContent:"space-between",transition:"color 250ms linear",maxWidth:"600px",color:r.palette.mode==="dark"?"white":"black"})),st=G(he)(({theme:r})=>({textDecoration:"none",padding:"5px",borderRadius:"5px",transition:"background-color 250ms linear, color 250ms linear",color:r.palette.mode==="dark"?"white":"black",":hover":{backgroundColor:r.palette.mode==="dark"?"#512da8":"#e1bee7"},":focus":{backgroundColor:r.palette.mode==="dark"?"#512da8":"#e1bee7"}})),oe=({bool:r,id:n,name:t,number:a})=>{const i=ge(),[c,l]=h.useState(null),[o,s]=h.useState(!1),d=j(),m=u=>{l(u),s(!0),d(be(u)).unwrap().finally(()=>s(!1))};return e.jsxs(e.Fragment,{children:[r&&e.jsx(We,{children:e.jsx(Je,{children:t.slice(0,1)})}),e.jsx(He,{theme:i,children:e.jsxs(Ze,{children:[e.jsx(Ce,{style:{fontSize:"inherit",transition:" color 250ms linear",color:i.palette.mode==="dark"?"white":"black"}}),e.jsxs(ot,{sx:{fontSize:{xs:"10px",sm:"12px",md:"14px"}},children:[t,":"]}),e.jsx(st,{sx:{fontSize:{xs:"10px",sm:"12px",md:"14px"}},href:`tel:${a}`,children:a}),e.jsxs(Ye,{children:[e.jsxs(Y,{"aria-label":"delete",size:"medium",onClick:()=>{m(n)},disabled:o,sx:{fontSize:{xs:"16px",sm:"18px",md:"20px"},":hover":{color:"white",backgroundColor:"red"},":focus":{color:"white",backgroundColor:"red"},transitionProperty:"all",transitionDuration:"250ms",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1) 0ms"},children:[!o&&e.jsx(ae,{fontSize:"inherit"}),o&&c===n&&e.jsx(K,{})]}),e.jsx(ie,{id:n,name:t,number:a})]})]})})]})};oe.propTypes={id:b.string.isRequired,name:b.string.isRequired,number:b.string.isRequired};const ct=r=>r.filter,lt=re([B],r=>[...r].sort((n,t)=>n.name.localeCompare(t.name))),dt=re([ct,lt],(r,n)=>n.filter(t=>t.name.toLowerCase().includes(r.toLowerCase()))),ut=p.ul`
  max-height: 810px;
  width: min(100%, 60rem);
  overflow: auto;
  margin-inline: auto;
  padding-inline: clamp(1rem, 5vw, 4rem);
  list-style: none;
  perspective: 1000px;
  display: grid;
  row-gap: 0.5rem;
`,pt=()=>{const r=y(dt),n=h.useMemo(()=>r.map(t=>t.name.slice(0,1)).map((t,a,i)=>i.indexOf(t)===a),[r]);return e.jsx(ut,{children:r.map((t,a)=>e.jsx(oe,{bool:n[a],...t},t.id))})},mt=p.div`
  position: relative;
  text-align: center;
  width: 100%;
  background-image: url('./images/bg-01.jpg');
`,ft=p(ke)`
  position: absolute;
  top: 10px;
  left: 5px;
  color: grey;
`,xt=p.label``,ht=p.input`
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 1.25rem 2rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;

  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`,J=w(),gt=()=>{const r=j(),n=t=>{r(ve(t.target.value.trim()))};return e.jsxs(mt,{children:[e.jsx(ft,{size:25}),e.jsx(xt,{"aria-label":"find contacts by name",htmlFor:J}),e.jsx(ht,{id:J,type:"text",name:"filter",placeholder:"Search...",onChange:n})]})};function bt(){const r=y(B),n=y(Be),t=y(De),a=j();return h.useEffect(()=>{a(ye())},[a]),h.useEffect(()=>{t&&je(t)},[t]),e.jsx(ze,{title:"Contacts",children:e.jsx(V,{maxWidth:"xl",children:e.jsxs(V,{sx:{padding:"30px 0",display:{xs:"flex"},flexDirection:{xs:"column",md:"row"},justifyContent:{md:"center"},alignItems:{xs:"center"},gap:"50px",backgroundImage:`url(${Se})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"10px"},children:[e.jsx(Ue,{}),r.length?e.jsxs(_e,{children:[e.jsx(gt,{}),e.jsx(pt,{})]}):e.jsx(Ae,{children:"There are no contacts in the phone book"}),n&&!t&&e.jsx(we,{})]})})})}function wt(){return e.jsx("main",{children:e.jsx(bt,{})})}export{wt as default};
