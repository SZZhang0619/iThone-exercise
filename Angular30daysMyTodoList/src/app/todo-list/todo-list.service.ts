import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private list: Todo[] = [];

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
      this.list.push(new Todo(title));
    }
  }

  /**
   * 取得代辦事項清單
   *
   * @return {*}  {Todo[]}
   * @memberof TodoListService
   */
  getList(): Todo[]{
    return this.list;
  }

  /**
   * 移除代辦事項
   *
   * @param {number} index - 代辦事項的索引位置
   * @memberof TodoListService
   */
  remove(index: number): void{
    this.list.splice(index,1);
  }
}
