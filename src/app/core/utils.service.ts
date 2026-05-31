import { Injectable } from '@angular/core';

import { fromEvent, map, Observable } from 'rxjs';

type ScrollEventTarget = Window | Document | HTMLElement;

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    listenScrolling( target: ScrollEventTarget ): Observable<number> {

        const scroll$ = fromEvent( target, 'scroll' );
        return scroll$.pipe( 
            map( (response) => {
                const { clientHeight, scrollHeight, scrollTop } = (response.target as any)['documentElement'];
                return Math.trunc( ( scrollTop / ( scrollHeight - clientHeight ) * 100 ) );
            })
        );

    }

}