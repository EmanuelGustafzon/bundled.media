/* esm.sh - esbuild bundle(rxjs@7.5.7/internal/operators/exhaustMap) deno production */
import{map as u}from"/v115/rxjs@7.5.7/deno/internal/operators/map.js";import{innerFrom as n}from"/v115/rxjs@7.5.7/deno/internal/observable/innerFrom.js";import{operate as a}from"/v115/rxjs@7.5.7/deno/internal/util/lift.js";import{createOperatorSubscriber as f}from"/v115/rxjs@7.5.7/deno/internal/operators/OperatorSubscriber.js";function d(i,m){return m?o=>o.pipe(d((e,t)=>n(i(e,t)).pipe(u((r,p)=>m(e,r,t,p))))):a((o,e)=>{let t=0,r=null,p=!1;o.subscribe(f(e,l=>{r||(r=f(e,void 0,()=>{r=null,p&&e.complete()}),n(i(l,t++)).subscribe(r))},()=>{p=!0,!r&&e.complete()}))})}export{d as exhaustMap};
//# sourceMappingURL=exhaustMap.js.map