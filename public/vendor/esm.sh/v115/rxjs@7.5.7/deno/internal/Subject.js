/* esm.sh - esbuild bundle(rxjs@7.5.7/internal/Subject) deno production */
import{Observable as l}from"/v115/rxjs@7.5.7/deno/internal/Observable.js";import{Subscription as c,EMPTY_SUBSCRIPTION as u}from"/v115/rxjs@7.5.7/deno/internal/Subscription.js";import{ObjectUnsubscribedError as d}from"/v115/rxjs@7.5.7/deno/internal/util/ObjectUnsubscribedError.js";import{arrRemove as v}from"/v115/rxjs@7.5.7/deno/internal/util/arrRemove.js";import{errorContext as h}from"/v115/rxjs@7.5.7/deno/internal/util/errorContext.js";var i=class extends l{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(r){let e=new o(this,this);return e.operator=r,e}_throwIfClosed(){if(this.closed)throw new d}next(r){h(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let e of this.currentObservers)e.next(r)}})}error(r){h(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=r;let{observers:e}=this;for(;e.length;)e.shift().error(r)}})}complete(){h(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:r}=this;for(;r.length;)r.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var r;return((r=this.observers)===null||r===void 0?void 0:r.length)>0}_trySubscribe(r){return this._throwIfClosed(),super._trySubscribe(r)}_subscribe(r){return this._throwIfClosed(),this._checkFinalizedStatuses(r),this._innerSubscribe(r)}_innerSubscribe(r){let{hasError:e,isStopped:s,observers:t}=this;return e||s?u:(this.currentObservers=null,t.push(r),new c(()=>{this.currentObservers=null,v(t,r)}))}_checkFinalizedStatuses(r){let{hasError:e,thrownError:s,isStopped:t}=this;e?r.error(s):t&&r.complete()}asObservable(){let r=new l;return r.source=this,r}};i.create=(n,r)=>new o(n,r);var o=class extends i{constructor(r,e){super(),this.destination=r,this.source=e}next(r){var e,s;(s=(e=this.destination)===null||e===void 0?void 0:e.next)===null||s===void 0||s.call(e,r)}error(r){var e,s;(s=(e=this.destination)===null||e===void 0?void 0:e.error)===null||s===void 0||s.call(e,r)}complete(){var r,e;(e=(r=this.destination)===null||r===void 0?void 0:r.complete)===null||e===void 0||e.call(r)}_subscribe(r){var e,s;return(s=(e=this.source)===null||e===void 0?void 0:e.subscribe(r))!==null&&s!==void 0?s:u}};export{o as AnonymousSubject,i as Subject};
//# sourceMappingURL=Subject.js.map