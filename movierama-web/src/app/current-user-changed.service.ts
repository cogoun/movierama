import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserChangedService {

  private currentUserSelectedIdSource = new Subject<string>();
  currentUserSelectedId$ = this.currentUserSelectedIdSource.asObservable()

  constructor() { }

  selectUser(userId: string) {
    console.log('userId'+userId);
    this.currentUserSelectedIdSource.next(userId);
  }
}
