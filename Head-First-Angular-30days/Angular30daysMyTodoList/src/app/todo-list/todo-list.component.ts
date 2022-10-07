import { TodoStatusType } from './todo-status-type.enum';
import { TodoListService } from './todo-list.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  /**
   * 代辦事項狀態的列舉
   *
   * @memberof TodoListComponent
   */
  todoStatusType = TodoStatusType;

  /**
   * 目前狀態
   *
   * @private
   * @memberof TodoListComponent
   */
  private status = TodoStatusType.ALL;

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
  }

  /**
   * 新增代辦事項
   *
   * @param {HTMLInputElement} inputRef - 輸入框的元素實體
   * @memberof TodoListComponent
   */
  addTodo(inputRef: HTMLInputElement):void {

    const todo = inputRef.value.trim();

    if(todo){
      this.todoListService.add(todo);
      inputRef.value='';
    }

  }

  /**
   * 取得代辦事項
   *
   * @return {*}  {Todo[]}
   * @memberof TodoListComponent
   */
  getList(): Todo[] {
    let list: Todo[] = [];

    switch (this.status) {

      case TodoStatusType.Active:
        list = this.getRemainingList();
        break;

      case TodoStatusType.Completed:
        list = this.getCompletedList();
        break;

      default:
        list = this.todoListService.getList();
        break;

    }

    return list;
  }

  /**
   * 移除代辦事項
   *
   * @param {number} index - 代辦事項的索引位置
   * @memberof TodoListComponent
   */
  remove(index: number): void{
    this.todoListService.remove(index);
  }

  /**
   * 開啟編輯代辦事項
   *
   * @param {Todo} todo
   * @memberof TodoListComponent
   */
  edit(todo: Todo) {
    todo.editable = true;
  }

  /**
   * 更新代辦事項
   *
   * @param todo - 原本的代辦事項
   * @param newTitle - 新的事項名稱
   * @returns
   */
  update(todo: Todo, newTitle: string): void {

    if (!todo.editing) {
      return;
    }

    const title = newTitle.trim();

    // 如果有輸入名稱則修改事項名稱
    if (title) {
      todo.setTitle(title);
      todo.editable = false;

      // 如果沒有名稱則刪除該代辦事項
    } else {
      const index = this.getList().indexOf(todo);
      if (index !== -1) {
        this.remove(index);
      }
    }
  }

  /**
   * 取消編輯模式
   *
   * @param {Todo} todo
   * @memberof TodoListComponent
   */
  cancelEditing(todo: Todo): void {
    todo.editable = false;
  }

  /**
   * 取得未完成的代辦事項清單
   *
   * @return {*}  {Todo[]}
   * @memberof TodoListComponent
   */
  getRemainingList(): Todo[] {
    return this.todoListService.getWithCompleted(false);
  }

  /**
   * 取得已完成的代辦事項
   *
   * @return {*}  {Todo[]}
   * @memberof TodoListComponent
   */
  getCompletedList(): Todo[] {
    return this.todoListService.getWithCompleted(true);
  }

  /**
   * 設定狀態
   *
   * @param {number} status - 欲設定的狀態
   * @memberof TodoListComponent
   */
  setStatus(status: number): void {
    this.status = status;
  }

  /**
   * 檢查目前狀態
   *
   * @param {number} status - 欲檢查的狀態
   * @return {*}  {boolean}
   * @memberof TodoListComponent
   */
  checkStatus(status: number): boolean {
    return this.status === status;
  }
}
