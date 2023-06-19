import{O as T,n as u,a as O,j as p,R as s}from"./index-90ab3fc5.js";var f={exports:{}},w="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_=w,P=_;function y(){}function b(){}b.resetWarningCache=y;var k=function(){function e(n,o,c,m,l,i){if(i!==P){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:b,resetWarningCache:y};return r.PropTypes=r,r};f.exports=k();var S=f.exports;const h=T(S),j="/phonebook-ts/assets/bg-01-8ff98a3b.jpg",E=u.div`
  display: flex;
`,R=u.section`
  margin: 0 auto;
  display: flex;

  align-items: center;
  padding: 40px 0px;
  min-height: 810px;
  background-image: url(${j});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;
  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: background-color 250ms linear;
    background-color: ${({theme:e})=>{switch(e.palette.mode){case"light":return"rgba(255, 255, 255, 0.9)";case"dark":return"rgba(75, 73, 73, 0.9)";default:return"rgba(255, 255, 255, 0.9)"}}};
  }
`,C=u.h1`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`,N=({title:e,children:t})=>{const r=O();return p.jsxs(R,{theme:r,children:[p.jsx(E,{children:p.jsx(C,{children:e})}),t]})};N.propTypes={title:h.string.isRequired,children:h.node};var x={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g=s.createContext&&s.createContext(x),a=globalThis&&globalThis.__assign||function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)},z=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function v(e){return e&&e.map(function(t,r){return s.createElement(t.tag,a({key:r},t.attr),v(t.child))})}function F(e){return function(t){return s.createElement(I,a({attr:a({},e.attr)},t),v(e.child))}}function I(e){var t=function(r){var n=e.attr,o=e.size,c=e.title,m=z(e,["attr","size","title"]),l=o||r.size||"1em",i;return r.className&&(i=r.className),e.className&&(i=(i?i+" ":"")+e.className),s.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,m,{className:i,style:a(a({color:e.color||r.color},r.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&s.createElement("title",null,c),e.children)};return g!==void 0?s.createElement(g.Consumer,null,function(r){return t(r)}):t(x)}export{F as G,h as P,N as S};
