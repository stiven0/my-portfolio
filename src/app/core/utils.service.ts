import { Injectable } from '@angular/core';

import { fromEvent, map, Observable } from 'rxjs';
import { HasEventTargetAddRemove } from 'rxjs/internal/observable/fromEvent';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    listenScrolling( target: HasEventTargetAddRemove<Event> ): Observable<number> {

        const scroll$ = fromEvent( target, 'scroll' );
        return scroll$.pipe( 
            map( (response) => {
                const { clientHeight, scrollHeight, scrollTop } = (response.target as any)['documentElement'];
                return Math.trunc( ( scrollTop / ( scrollHeight - clientHeight ) * 100 ) );
            })
        );

    }

}