/* esm.sh - esbuild bundle(rxjs@7.5.7/internal/observable/race) deno production */
import{Observable as f}from"/v115/rxjs@7.5.7/deno/internal/Observable.js";import{innerFrom as o}from"/v115/rxjs@7.5.7/deno/internal/observable/innerFrom.js";import{argsOrArgArray as m}from"/v115/rxjs@7.5.7/deno/internal/util/argsOrArgArray.js";import{createOperatorSubscriber as p}from"/v115/rxjs@7.5.7/deno/internal/operators/OperatorSubscriber.js";function c(...r){return r=m(r),r.length===1?o(r[0]):new f(a(r))}function a(r){return i=>{let t=[];for(let e=0;t&&!i.closed&&e<r.length;e++)t.push(o(r[e]).subscribe(p(i,l=>{if(t){for(let n=0;n<t.length;n++)n!==e&&t[n].unsubscribe();t=null}i.next(l)})))}}export{c as race,a as raceInit};
//# sourceMappingURL=race.js.map