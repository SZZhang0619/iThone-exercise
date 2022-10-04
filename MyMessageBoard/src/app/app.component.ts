import { Message } from './message';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * 綁定畫面中的「名稱」欄位
   *
   * @memberof AppComponent
   */
  name = '';

  /**
   * 綁定畫面中的「內容」欄位
   *
   * @memberof AppComponent
   */
  content = '';

  /**
   * 所有留言都放在這裡
   *
   * @type {Message[]}
   * @memberof AppComponent
   */
  messages: Message[] = [];

  addMessage(): void {

    // 防呆，避免名稱或內容是空值也可以留言
    if(
      !this.name.trim() ||
      !this.content.trim()
    ) {
      return
    }

    // 用名稱跟內容產生一個留言的資料物件
    const message = new Message(this.name,this.content);

    // 將留言的資料放進容器裡
    this.messages.push(message);

    // 清空內容
    this.content = '';
  }
}
