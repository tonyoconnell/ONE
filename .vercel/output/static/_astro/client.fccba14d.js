const ae="modulepreload",fe=function(e){return"/"+e},q={},ue=function(t,n,r){if(!n||n.length===0)return t();const l=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=fe(o),o in q)return;q[o]=!0;const i=o.endsWith(".css"),p=i?'[rel="stylesheet"]':"";if(!!r)for(let u=l.length-1;u>=0;u--){const _=l[u];if(_.href===o&&(!i||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${p}`))return;const h=document.createElement("link");if(h.rel=i?"stylesheet":ae,i||(h.as="script",h.crossOrigin=""),h.href=o,document.head.appendChild(h),i)return new Promise((u,_)=>{h.addEventListener("load",u),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};var $,v,Z,pe,E,G,ee,W,T={},te=[],de=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,j=Array.isArray;function x(e,t){for(var n in t)e[n]=t[n];return e}function ne(e){var t=e.parentNode;t&&t.removeChild(e)}function N(e,t,n){var r,l,o,i={};for(o in t)o=="key"?r=t[o]:o=="ref"?l=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?$.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return M(e,i,r,l,null)}function M(e,t,n,r,l){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++Z};return l==null&&v.vnode!=null&&v.vnode(o),o}function A(e){return e.children}function H(e,t){this.props=e,this.context=t}function D(e,t){if(t==null)return e.__?D(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?D(e):null}function _e(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return _e(e)}}function J(e){(!e.__d&&(e.__d=!0)&&E.push(e)&&!R.__r++||G!==v.debounceRendering)&&((G=v.debounceRendering)||ee)(R)}function R(){var e,t,n,r,l,o,i,p,c;for(E.sort(W);e=E.shift();)e.__d&&(t=E.length,r=void 0,l=void 0,o=void 0,p=(i=(n=e).__v).__e,(c=n.__P)&&(r=[],l=[],(o=x({},i)).__v=i.__v+1,V(c,i,o,n.__n,c.ownerSVGElement!==void 0,i.__h!=null?[p]:null,r,p??D(i),i.__h,l),ie(r,i,l),i.__e!=p&&_e(i)),E.length>t&&E.sort(W));R.__r=0}function oe(e,t,n,r,l,o,i,p,c,h,u){var _,m,a,s,f,P,d,y,S,k=0,g=r&&r.__k||te,L=g.length,w=L,C=t.length;for(n.__k=[],_=0;_<C;_++)(s=n.__k[_]=(s=t[_])==null||typeof s=="boolean"||typeof s=="function"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?M(null,s,null,null,s):j(s)?M(A,{children:s},null,null,null):s.__b>0?M(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s)!=null?(s.__=n,s.__b=n.__b+1,(y=he(s,g,d=_+k,w))===-1?a=T:(a=g[y]||T,g[y]=void 0,w--),V(e,s,a,l,o,i,p,c,h,u),f=s.__e,(m=s.ref)&&a.ref!=m&&(a.ref&&z(a.ref,null,s),u.push(m,s.__c||f,s)),f!=null&&(P==null&&(P=f),(S=a===T||a.__v===null)?y==-1&&k--:y!==d&&(y===d+1?k++:y>d?w>C-d?k+=y-d:k--:k=y<d&&y==d-1?y-d:0),d=_+k,typeof s.type!="function"||y===d&&a.__k!==s.__k?typeof s.type=="function"||y===d&&!S?s.__d!==void 0?(c=s.__d,s.__d=void 0):c=f.nextSibling:c=le(e,f,c):c=re(s,c,e),typeof n.type=="function"&&(n.__d=c))):(a=g[_])&&a.key==null&&a.__e&&(a.__e==c&&(c=D(a)),B(a,a,!1),g[_]=null);for(n.__e=P,_=L;_--;)g[_]!=null&&(typeof n.type=="function"&&g[_].__e!=null&&g[_].__e==n.__d&&(n.__d=g[_].__e.nextSibling),B(g[_],g[_]))}function re(e,t,n){for(var r,l=e.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=e,t=typeof r.type=="function"?re(r,t,n):le(n,r.__e,t));return t}function le(e,t,n){return n==null||n.parentNode!==e?e.insertBefore(t,null):t==n&&t.parentNode!=null||e.insertBefore(t,n),t.nextSibling}function he(e,t,n,r){var l=e.key,o=e.type,i=n-1,p=n+1,c=t[n];if(c===null||c&&l==c.key&&o===c.type)return n;if(r>(c!=null?1:0))for(;i>=0||p<t.length;){if(i>=0){if((c=t[i])&&l==c.key&&o===c.type)return i;i--}if(p<t.length){if((c=t[p])&&l==c.key&&o===c.type)return p;p++}}return-1}function ve(e,t,n,r,l){var o;for(o in n)o==="children"||o==="key"||o in t||I(e,o,null,n[o],r);for(o in t)l&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||I(e,o,t[o],n[o],r)}function K(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||de.test(t)?n:n+"px"}function I(e,t,n,r,l){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||K(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||K(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?X:Q,o):e.removeEventListener(t,o?X:Q,o);else if(t!=="dangerouslySetInnerHTML"){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Q(e){return this.l[e.type+!1](v.event?v.event(e):e)}function X(e){return this.l[e.type+!0](v.event?v.event(e):e)}function V(e,t,n,r,l,o,i,p,c,h){var u,_,m,a,s,f,P,d,y,S,k,g,L,w,C,b=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,p=t.__e=n.__e,t.__h=null,o=[p]),(u=v.__b)&&u(t);e:if(typeof b=="function")try{if(d=t.props,y=(u=b.contextType)&&r[u.__c],S=u?y?y.props.value:u.__:r,n.__c?P=(_=t.__c=n.__c).__=_.__E:("prototype"in b&&b.prototype.render?t.__c=_=new b(d,S):(t.__c=_=new H(d,S),_.constructor=b,_.render=me),y&&y.sub(_),_.props=d,_.state||(_.state={}),_.context=S,_.__n=r,m=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),b.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=x({},_.__s)),x(_.__s,b.getDerivedStateFromProps(d,_.__s))),a=_.props,s=_.state,_.__v=t,m)b.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(b.getDerivedStateFromProps==null&&d!==a&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(d,S),!_.__e&&(_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(d,_.__s,S)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(_.props=d,_.state=_.__s,_.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(U){U&&(U.__=t)}),k=0;k<_._sb.length;k++)_.__h.push(_._sb[k]);_._sb=[],_.__h.length&&i.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(d,_.__s,S),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(a,s,f)})}if(_.context=S,_.props=d,_.__P=e,_.__e=!1,g=v.__r,L=0,"prototype"in b&&b.prototype.render){for(_.state=_.__s,_.__d=!1,g&&g(t),u=_.render(_.props,_.state,_.context),w=0;w<_._sb.length;w++)_.__h.push(_._sb[w]);_._sb=[]}else do _.__d=!1,g&&g(t),u=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++L<25);_.state=_.__s,_.getChildContext!=null&&(r=x(x({},r),_.getChildContext())),m||_.getSnapshotBeforeUpdate==null||(f=_.getSnapshotBeforeUpdate(a,s)),oe(e,j(C=u!=null&&u.type===A&&u.key==null?u.props.children:u)?C:[C],t,n,r,l,o,i,p,c,h),_.base=t.__e,t.__h=null,_.__h.length&&i.push(_),P&&(_.__E=_.__=null)}catch(U){t.__v=null,(c||o!=null)&&(t.__e=p,t.__h=!!c,o[o.indexOf(p)]=null),v.__e(U,t,n)}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ye(n.__e,t,n,r,l,o,i,c,h);(u=v.diffed)&&u(t)}function ie(e,t,n){for(var r=0;r<n.length;r++)z(n[r],n[++r],n[++r]);v.__c&&v.__c(t,e),e.some(function(l){try{e=l.__h,l.__h=[],e.some(function(o){o.call(l)})}catch(o){v.__e(o,l.__v)}})}function ye(e,t,n,r,l,o,i,p,c){var h,u,_,m=n.props,a=t.props,s=t.type,f=0;if(s==="svg"&&(l=!0),o!=null){for(;f<o.length;f++)if((h=o[f])&&"setAttribute"in h==!!s&&(s?h.localName===s:h.nodeType===3)){e=h,o[f]=null;break}}if(e==null){if(s===null)return document.createTextNode(a);e=l?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,a.is&&a),o=null,p=!1}if(s===null)m===a||p&&e.data===a||(e.data=a);else{if(o=o&&$.call(e.childNodes),u=(m=n.props||T).dangerouslySetInnerHTML,_=a.dangerouslySetInnerHTML,!p){if(o!=null)for(m={},f=0;f<e.attributes.length;f++)m[e.attributes[f].name]=e.attributes[f].value;(_||u)&&(_&&(u&&_.__html==u.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(ve(e,a,m,l,p),_)t.__k=[];else if(oe(e,j(f=t.props.children)?f:[f],t,n,r,l&&s!=="foreignObject",o,i,o?o[0]:n.__k&&D(n,0),p,c),o!=null)for(f=o.length;f--;)o[f]!=null&&ne(o[f]);p||("value"in a&&(f=a.value)!==void 0&&(f!==e.value||s==="progress"&&!f||s==="option"&&f!==m.value)&&I(e,"value",f,m.value,!1),"checked"in a&&(f=a.checked)!==void 0&&f!==e.checked&&I(e,"checked",f,m.checked,!1))}return e}function z(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){v.__e(r,n)}}function B(e,t,n){var r,l;if(v.unmount&&v.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||z(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){v.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&B(r[l],t,n||typeof e.type!="function");n||e.__e==null||ne(e.__e),e.__=e.__e=e.__d=void 0}function me(e,t,n){return this.constructor(e,n)}function F(e,t,n){var r,l,o,i;v.__&&v.__(e,t),l=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],i=[],V(t,e=(!r&&n||t).__k=N(A,null,[e]),l||T,T,t.ownerSVGElement!==void 0,!r&&n?[n]:l?null:t.firstChild?$.call(t.childNodes):null,o,!r&&n?n:l?l.__e:t.firstChild,r,i),ie(o,e,i)}function se(e,t){F(e,t,se)}$=te.slice,v={__e:function(e,t,n,r){for(var l,o,i;t=t.__;)if((l=t.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(e)),i=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,r||{}),i=l.__d),i)return l.__E=l}catch(p){e=p}throw e}},Z=0,pe=function(e){return e!=null&&e.constructor===void 0},H.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof e=="function"&&(e=e(x({},n),this.props)),e&&x(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),J(this))},H.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),J(this))},H.prototype.render=A,E=[],ee=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,W=function(e,t){return e.__v.__b-t.__v.__b},R.__r=0;const ce=({value:e,name:t,hydrate:n=!0})=>e?N(n?"astro-slot":"astro-static-slot",{name:t,dangerouslySetInnerHTML:{__html:e}}):null;ce.shouldComponentUpdate=()=>!1;var Y=ce;const O=new Map;var ge=e=>async(t,n,{default:r,...l},{client:o})=>{if(!e.hasAttribute("ssr"))return;for(const[c,h]of Object.entries(l))n[c]=N(Y,{value:h,name:c});if(e.dataset.preactSignals){const{signal:c}=await ue(()=>import("./signals.module.799f55b0.js"),[]);let h=JSON.parse(e.dataset.preactSignals);for(const[u,_]of Object.entries(h)){if(!O.has(_)){const m=c(n[u]);O.set(_,m)}n[u]=O.get(_)}}(o!=="only"?se:F)(N(t,n,r!=null?N(Y,{value:r}):r),e),e.addEventListener("astro:unmount",()=>F(null,e),{once:!0})};export{H as b,ge as c,v as l,pe as t};