/**
 * Interface for the JQuery promise/deferred callbacks
 */
export interface JQueryPromiseCallback<T> {
    (value?: T, ...args: any[]): void;

}

/**
 * Allows jQuery Promises to interop with non-jQuery promises
 */
export interface JQueryGenericPromise<T> {
    /**
     * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     * 
     * @param doneFilter A function that is called when the Deferred is resolved.
     * @param failFilter An optional function that is called when the Deferred is rejected.
     */
    then<U>(doneFilter: (value: T) => U, failFilter?: (reason: any) => U): JQueryGenericPromise<U>;
    /**
     * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     * 
     * @param doneFilter A function that is called when the Deferred is resolved.
     * @param failFilter An optional function that is called when the Deferred is rejected.
     */
    then<U>(doneFilter: (value: T) => JQueryGenericPromise<U>, failFilter?: (reason: any) => U): JQueryGenericPromise<U>;
    /**
     * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     * 
     * @param doneFilter A function that is called when the Deferred is resolved.
     * @param failFilter An optional function that is called when the Deferred is rejected.
     */
    then<U>(doneFilter: (value: T) => U, failFilter?: (reason: any) => JQueryGenericPromise<U>): JQueryGenericPromise<U>;
    /**
     * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     * 
     * @param doneFilter A function that is called when the Deferred is resolved.
     * @param failFilter An optional function that is called when the Deferred is rejected.
     */
    then<U>(doneFilter: (value: T) => JQueryGenericPromise<U>, failFilter?: (reason: any) => JQueryGenericPromise<U>): JQueryGenericPromise<U>;
}

/**
 * Interface for the JQuery promise, part of callbacks
 */
export interface JQueryPromise<T> {
    /**
     * Add handlers to be called when the Deferred object is either resolved or rejected.
     * 
     * @param alwaysCallbacks1 A function, or array of functions, that is called when the Deferred is resolved or rejected.
     * @param alwaysCallbacks2 Optional additional functions, or arrays of functions, that are called when the Deferred is resolved or rejected.
     */
    always(...alwaysCallbacks: JQueryPromiseCallback<T>[]): JQueryDeferred<T>;
    /**
     * Add handlers to be called when the Deferred object is resolved.
     * 
     * @param doneCallbacks1 A function, or array of functions, that are called when the Deferred is resolved.
     * @param doneCallbacks2 Optional additional functions, or arrays of functions, that are called when the Deferred is resolved.
     */
    done(...doneCallbacks: JQueryPromiseCallback<T>[]): JQueryDeferred<T>;
    /**
     * Add handlers to be called when the Deferred object is rejected.
     * 
     * @param failCallbacks1 A function, or array of functions, that are called when the Deferred is rejected.
     * @param failCallbacks2 Optional additional functions, or arrays of functions, that are called when the Deferred is rejected.
     */
    fail(...failCallbacks: JQueryPromiseCallback<any>[]): JQueryDeferred<T>;
    /**
     * Add handlers to be called when the Deferred object generates progress notifications.
     * 
     * @param progressCallbacks A function, or array of functions, to be called when the Deferred generates progress notifications.
     */
    progress(...progressCallbacks: JQueryPromiseCallback<T>[]): JQueryDeferred<T>;


    // Deprecated - given no typings
	pipe<U>(doneFilter: (value: T) => JQueryGenericPromise<U>, failFilter?: (...reasons: any[]) => U, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;

    /**
     * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     * 
     * @param doneFilter A function that is called when the Deferred is resolved.
     * @param failFilter An optional function that is called when the Deferred is rejected.
     * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
     */
    then<U>(doneFilter: (value: T) => U, failFilter?: (...reasons: any[]) => U, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;
    /**
     * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     * 
     * @param doneFilter A function that is called when the Deferred is resolved.
     * @param failFilter An optional function that is called when the Deferred is rejected.
     * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
     */
    then<U>(doneFilter: (value: T) => JQueryGenericPromise<U>, failFilter?: (...reasons: any[]) => U, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;
    /**
     * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     * 
     * @param doneFilter A function that is called when the Deferred is resolved.
     * @param failFilter An optional function that is called when the Deferred is rejected.
     * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
     */
    then<U>(doneFilter: (value: T) => U, failFilter?: (...reasons: any[]) => JQueryGenericPromise<U>, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;
    /**
     * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     * 
     * @param doneFilter A function that is called when the Deferred is resolved.
     * @param failFilter An optional function that is called when the Deferred is rejected.
     * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
     */
    then<U>(doneFilter: (value: T) => JQueryGenericPromise<U>, failFilter?: (...reasons: any[]) => JQueryGenericPromise<U>, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;

    // Because JQuery Promises Suck
    /**
     * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     * 
     * @param doneFilter A function that is called when the Deferred is resolved.
     * @param failFilter An optional function that is called when the Deferred is rejected.
     * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
     */
    then<U>(doneFilter: (...values: any[]) => U, failFilter?: (...reasons: any[]) => U, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;
    /**
     * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     * 
     * @param doneFilter A function that is called when the Deferred is resolved.
     * @param failFilter An optional function that is called when the Deferred is rejected.
     * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
     */
    then<U>(doneFilter: (...values: any[]) => JQueryGenericPromise<U>, failFilter?: (...reasons: any[]) => U, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;
    /**
     * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     * 
     * @param doneFilter A function that is called when the Deferred is resolved.
     * @param failFilter An optional function that is called when the Deferred is rejected.
     * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
     */
    then<U>(doneFilter: (...values: any[]) => U, failFilter?: (...reasons: any[]) => JQueryGenericPromise<U>, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;
    /**
     * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     * 
     * @param doneFilter A function that is called when the Deferred is resolved.
     * @param failFilter An optional function that is called when the Deferred is rejected.
     * @param progressFilter An optional function that is called when progress notifications are sent to the Deferred.
     */
    then<U>(doneFilter: (...values: any[]) => JQueryGenericPromise<U>, failFilter?: (...reasons: any[]) => JQueryGenericPromise<U>, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;
}

/**
 * Interface for the JQuery deferred, part of callbacks
 */
export interface JQueryDeferred<T> extends JQueryPromise<T> {
    /**
     * Add handlers to be called when the Deferred object is either resolved or rejected.
     * 
     * @param alwaysCallbacks1 A function, or array of functions, that is called when the Deferred is resolved or rejected.
     * @param alwaysCallbacks2 Optional additional functions, or arrays of functions, that are called when the Deferred is resolved or rejected.
     */
    always(...alwaysCallbacks: JQueryPromiseCallback<T>[]): JQueryDeferred<T>;
    /**
     * Add handlers to be called when the Deferred object is resolved.
     * 
     * @param doneCallbacks1 A function, or array of functions, that are called when the Deferred is resolved.
     * @param doneCallbacks2 Optional additional functions, or arrays of functions, that are called when the Deferred is resolved.
     */
    done(...doneCallbacks: JQueryPromiseCallback<T>[]): JQueryDeferred<T>;
    /**
     * Add handlers to be called when the Deferred object is rejected.
     * 
     * @param failCallbacks1 A function, or array of functions, that are called when the Deferred is rejected.
     * @param failCallbacks2 Optional additional functions, or arrays of functions, that are called when the Deferred is rejected.
     */
    fail(...failCallbacks: JQueryPromiseCallback<any>[]): JQueryDeferred<T>;
    /**
     * Add handlers to be called when the Deferred object generates progress notifications.
     * 
     * @param progressCallbacks A function, or array of functions, to be called when the Deferred generates progress notifications.
     */
    progress(...progressCallbacks: JQueryPromiseCallback<T>[]): JQueryDeferred<T>;

    /**
     * Call the progressCallbacks on a Deferred object with the given args.
     * 
     * @param args Optional arguments that are passed to the progressCallbacks.
     */
    notify(...args: any[]): JQueryDeferred<T>;

    /**
     * Reject a Deferred object and call any failCallbacks with the given args.
     * 
     * @param args Optional arguments that are passed to the failCallbacks.
     */
    reject(...args: any[]): JQueryDeferred<T>;

    /**
     * Resolve a Deferred object and call any doneCallbacks with the given args.
     * 
     * @param value First argument passed to doneCallbacks.
     * @param args Optional subsequent arguments that are passed to the doneCallbacks.
     */
    resolve(value?: T, ...args: any[]): JQueryDeferred<T>;

    /**
     * Determine the current state of a Deferred object.
     */
    state(): string;

    /**
     * Return a Deferred's Promise object.
     * 
     * @param target Object onto which the promise methods have to be attached
     */
    promise(target?: any): JQueryPromise<T>;
}


/**
 * Static members of jQuery (those on $ and jQuery themselves)
 */
export interface JQueryStatic {

    /**
     * A constructor function that returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function.
     *
     * @param beforeStart A function that is called just before the constructor returns.
     */
     Deferred: new <T>(beforeStart?: (deferred: JQueryDeferred<T>) => any) => JQueryDeferred<T>;

     when: (...promises: JQueryPromise<any>[]) =>JQueryPromise<any>;
}

class JQueryPromiseAdapter<T> implements JQueryPromise<T> {

	public static _wrap(callback: (...args: any[])=> any) {
		// unmarshal any promise results
		return function(...args: any[]) {
			var result = callback.apply(this, args);
			if( result instanceof JQueryPromiseAdapter || result instanceof JQueryDeferredAdapter ) {
				result = result._promise;
			}
			return result;
		}
	}

	constructor(public _promise?: Q.Promise<T>) {

	}

    always(...alwaysCallbacks: JQueryPromiseCallback<T>[]): JQueryDeferred<T> {
    	var result = this._promise;
    	if( alwaysCallbacks ) {
    		for( var i in alwaysCallbacks ) {
    			var callback = alwaysCallbacks[i];
    			result = result.finally(JQueryPromiseAdapter._wrap(callback));
    		}
    	}
    	// assume we're a deferred, OR that they'll only use the subset of methods that we expose
    	return new JQueryDeferredAdapter(result);
    }

    done(...doneCallbacks: JQueryPromiseCallback<T>[]): JQueryDeferred<T> {
    	if( doneCallbacks ) {
    		for( var i in doneCallbacks ) {
    			var callback = doneCallbacks[i];
    			this._promise.done(JQueryPromiseAdapter._wrap(callback));
    		}
    	}
    	return <JQueryDeferred<T>><any>this;
    }

    fail(...failCallbacks: JQueryPromiseCallback<any>[]): JQueryDeferred<T> {
    	var result: Q.Promise<any> = this._promise;
    	if( failCallbacks ) {
    		for( var i in failCallbacks ) {
    			var callback = failCallbacks[i];
    			result = result.catch(JQueryPromiseAdapter._wrap(callback));
    		}
    	}
    	return new JQueryDeferredAdapter(result);
    }

    progress(...progressCallbacks: JQueryPromiseCallback<T>[]): JQueryDeferred<T> {
    	var result = this._promise;
    	if( progressCallbacks ) {
    		for( var i in progressCallbacks ) {
    			var callback = progressCallbacks[i];
    			result = result.progress(JQueryPromiseAdapter._wrap(callback));
    		}
    	}
    	return new JQueryDeferredAdapter(result);
    }


    pipe<U>(doneFilter: (value: T) => JQueryGenericPromise<U>, failFilter?: (...reasons: any[]) => U, progressFilter?: (...progression: any[]) => any): JQueryPromise<U> {
    	return this.then(doneFilter, failFilter, progressFilter);
    }

    then<U>(doneFilter: (...values: any[]) => U, failFilter?: (...reasons: any[]) => U, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;
    then<U>(doneFilter: (...values: any[]) => JQueryGenericPromise<U>, failFilter?: (...reasons: any[]) => U, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;
    then<U>(doneFilter: (...values: any[]) => U, failFilter?: (...reasons: any[]) => JQueryGenericPromise<U>, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;
    then<U>(doneFilter: (...values: any[]) => JQueryGenericPromise<U>, failFilter?: (...reasons: any[]) => JQueryGenericPromise<U>, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;
    then<U>(doneFilter: (value: T) => U, failFilter?: (...reasons: any[]) => U, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;
    then<U>(doneFilter: (value: T) => JQueryGenericPromise<U>, failFilter?: (...reasons: any[]) => U, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;
    then<U>(doneFilter: (value: T) => U, failFilter?: (...reasons: any[]) => JQueryGenericPromise<U>, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;
    then<U>(doneFilter: (value: T) => JQueryGenericPromise<U>, failFilter?: (...reasons: any[]) => JQueryGenericPromise<U>, progressFilter?: (...progression: any[]) => any): JQueryPromise<U> {
    	var result = this._promise.then(doneFilter, failFilter, progressFilter);
    	return new JQueryPromiseAdapter(result);
    }


}

class JQueryDeferredAdapter<T> extends JQueryPromiseAdapter<T> implements JQueryDeferred<T> {
	private _deferred: Q.Deferred<T>;

	constructor(promise: Q.Promise<T>);
	constructor(beforeStart?: (deferred: JQueryDeferred<T>) => any) 
	constructor(p: any) {
		super();
		if( p instanceof Function ) {
			var beforeStart = p;
			beforeStart(this);			
		} else {
			this._deferred = p;
			this._promise = this._deferred.promise;
		}
	}

    notify(...args: any[]): JQueryDeferred<T> {
    	var result = this._deferred.notify.apply(this._deferred, args);
    	return new JQueryDeferredAdapter(result);
    }


    reject(...args: any[]): JQueryDeferred<T> {
    	var result = this._deferred.reject.apply(this._deferred, args);
    	return new JQueryDeferredAdapter(result);
    }

    resolve(value?: T, ...args: any[]): JQueryDeferred<T> {
    	var result = this._deferred.resolve.apply(this._deferred, args);
    	return new JQueryDeferredAdapter(result);
    }

    state(): string {
    	return this._promise.inspect().state;
    }

    promise(target?: any): JQueryPromise<T> {
    	return new JQueryPromiseAdapter(this._promise);
    }
}

export var jQuery: JQueryStatic = {
	Deferred: JQueryDeferredAdapter,
	when: function(...promises: JQueryPromise<any>[]): JQueryPromise<any> {
		var qPromises = [];
		for( var i in promises ) {
			var promise = <JQueryPromiseAdapter<any>>promises[i];
			qPromises.push(promise._promise);
		}
		var result = Q.all.apply(Q, qPromises);
		return new JQueryPromiseAdapter(result);
	}
};
export var $: JQueryStatic = jQuery;