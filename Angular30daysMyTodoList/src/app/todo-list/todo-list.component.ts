import { TodoListService } from './todo-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

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

  getList(): string[] {
    return this.todoListService.getList();
  }

}
