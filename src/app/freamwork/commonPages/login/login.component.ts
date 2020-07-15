import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Key } from 'protractor';
import { info } from 'console';
import { Router } from '@angular/router';
import { runInThisContext } from 'vm';
class userInfo {
  userName: string;
  passwd: string;
  rePasswd: string;
  email: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: userInfo = new userInfo();
  constructor(
    private msgs: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  /**
   * 登录
   */
  login() {
    if (!this.user.userName) {
      this.msgs.add({ key: 'tc', severity: 'info', summary: '信息提示:', detail: '用户名不能为空！' });
    }
    if (!this.user.passwd) {
      this.msgs.add({ key: 'tc', severity: 'info', summary: '信息提示:', detail: '密码不能为空！' });
    }
    if (this.user.passwd && this.user.userName) {
      if (this.user.passwd === '123' && this.user.userName === 'admin') {
        this.msgs.add({ key: 'tc', severity: 'success', summary: '成功提示:', detail: '登录成功' });
        window.sessionStorage.setItem('userName', this.user.userName);
        setTimeout(() => {
          this.router.navigate(['/pages/home']);
        }, 1500);
      } else {
        this.msgs.add({ key: 'tc', severity: 'error', summary: '错误提示:', detail: '用户名或密码错误！' });
        return;
      }
    }
  }

}
