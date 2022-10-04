import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private list: string[] = [];

  constructor() { }

  /**
   * 新增代辦事項
   *
   * @param {string} title - 代辦事項的標題
   * @memberof TodoListService
   */
  add(title: string): void {

    //避免傳入的title 是無效值或空白字串，稍微判斷一下
    if(title || title.trim()){
      this.list.push(title);
    }
  }

  /**
   * 取得代辦事項清單
   *
   * @return {*}  {string[]}
   * @memberof TodoListService
   */
  getList(): string[]{
    return this.list;
  }
}
