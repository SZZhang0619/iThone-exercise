import { LoginComponent } from './login.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnsureLoginGuard implements CanDeactivate<LoginComponent> {
  /**
   * 當使用者要離開這個 Guard 所防守的路由時，會觸發這個函式
   *
   * @param {LoginComponent} component - 該路由的 Component
   * @param {ActivatedRouteSnapshot} currentRoute - 當前的路由
   * @param {RouterStateSnapshot} currentState - 當前路由狀態的快照
   * @param {RouterStateSnapshot} [nextState] - 欲前往路由的路由狀態快照
   * @return {*}  {(Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree)}
   * @memberof EnsureLoginGuard
   */
  canDeactivate(
    component: LoginComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (component.name.trim()) {
        return confirm('是否要離開此頁面？');
      }

      return true;
  }

}
