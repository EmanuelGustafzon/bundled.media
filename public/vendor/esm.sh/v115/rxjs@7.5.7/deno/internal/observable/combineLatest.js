/* esm.sh - esbuild bundle(rxjs@7.5.7/internal/observable/combineLatest) deno production */
import{Observable as y}from"/v115/rxjs@7.5.7/deno/internal/Observable.js";import{argsArgArrayOrObject as S}from"/v115/rxjs@7.5.7/deno/internal/util/argsArgArrayOrObject.js";import{from as a}from"/v115/rxjs@7.5.7/deno/internal/observable/from.js";import{identity as s}from"/v115/rxjs@7.5.7/deno/internal/util/identity.js";import{mapOneOrManyArgs as g}from"/v115/rxjs@7.5.7/deno/internal/util/mapOneOrManyArgs.js";import{popResultSelector as h,popScheduler as A}from"/v115/rxjs@7.5.7/deno/internal/util/args.js";import{createObject as b}from"/v115/rxjs@7.5.7/deno/internal/util/createObject.js";import{createOperatorSubscriber as v}from"/v115/rxjs@7.5.7/deno/internal/operators/OperatorSubscriber.js";import{executeSchedule as x}from"/v115/rxjs@7.5.7/deno/internal/util/executeSchedule.js";function q(...t){let e=A(t),n=h(t),{args:r,keys:o}=S(t);if(r.length===0)return a([],e);let i=new y(d(r,e,o?c=>b(o,c):s));return n?i.pipe(g(n)):i}function d(t,e,n=s){return r=>{p(e,()=>{let{length:o}=t,i=new Array(o),c=o,f=o;for(let m=0;m<o;m++)p(e,()=>{let u=a(t[m],e),l=!1;u.subscribe(v(r,O=>{i[m]=O,l||(l=!0,f--),f||r.next(n(i.slice()))},()=>{--c||r.complete()}))},r)},r)}}function p(t,e,n){t?x(n,t,e):e()}export{q as combineLatest,d as combineLatestInit};
//# sourceMappingURL=combineLatest.js.map