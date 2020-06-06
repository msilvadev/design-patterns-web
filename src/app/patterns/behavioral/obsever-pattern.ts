import { Observable } from 'rxjs';
import { PatternsInterface } from '../patterns-interface';

export class ObserverPattern implements PatternsInterface {

  /**
   * @param name  Your name, to function say hello for you =D ´name´.
   */
  execute(name: string): void {

    const observerOk = this._myObservable(name);
    observerOk.subscribe(this._observer);

    /* Execution with error. 
     * In this case the Observable will be kill.
     * See more about in: https://github.com/Reactive-Extensions/RxJS/tree/master/doc/designguidelines#31-the-rxjs-grammar
     */
    const observerError = this._myObservable(undefined);
    observerError.subscribe(this._observer);
  }

  private _myObservable(name: string): Observable<string> {
    return new Observable(subscriber => {
      if (name !== undefined) {
        subscriber.next(`Hello ${name}!`);
        subscriber.complete();
      } else {
        subscriber.error(`Ops ${name} is undefined!`);
      }
    });
  }

  private _observer = {
      next: valor => console.log('Next: ', valor),
      error: error => console.log('Oops error: ', error),
      complete: () => console.log('Observable completed!')
    };
  
}
