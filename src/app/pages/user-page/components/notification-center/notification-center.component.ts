import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ErrorService } from 'src/app/service/error.service';

import { Notification, NotificationType } from 'src/app/models/notification';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';
import { LeaderboardService } from 'src/app/service/leaderboard.service';

@Component({
  selector: 'app-notification-center',
  templateUrl: './notification-center.component.html',
  styleUrls: ['./notification-center.component.scss']
})
export class NotificationCenterComponent implements OnInit {

  code:string;
  notifList:Notification[];
  hasNotifications:boolean = false;

  constructor(
    private errorService: ErrorService,
    private authService: AuthService, 
    private leaderboardService: LeaderboardService
  ) { }

  ngOnInit(): void {
    this.errorService.showLoading();
    this.authService.getNotifications().then(res=>{
      this.notifList = res;
      this.errorService.hideLoading();
    })
    this.hasNotifications = this.notifList.length > 0;
  }

  @Output() closeEvent = new EventEmitter();

  closeModal(){
    this.closeEvent.emit();
    console.log('emitting');
  }

  validateForm():boolean{
    return true;
  }

  changeCode(newCode:string){
    this.code = newCode;
  }

  openNotification(notification:Notification){
    if(notification.Type == NotificationType.JOIN_NOTIFICATION){
      console.log(notification);
      Swal.fire({
        title: 'New request to join your league!',
        text: notification.Message,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Accept',
        denyButtonText: `Don't accept`,
      }).then((resultSwal) => {
        this.errorService.showLoading();
        this.leaderboardService.sendJoinResult(notification.League_Key, notification.Requesting_User, resultSwal.isConfirmed).then(result => {
          if (resultSwal.isConfirmed) { 
            Swal.fire('User accepted', 'The user has added to your league', 'success');
            this.deleteElementOfNotifications(notification);
          } else if (resultSwal.isDenied) {
            Swal.fire('User rejected', 'The user has been rejected', 'info');
            this.deleteElementOfNotifications(notification);
          }
        })
      })
    }else{
      Swal.fire('Notification', notification.Message);
      this.authService.deleteNotification(notification.Id).then(res=>{return});
      this.deleteElementOfNotifications(notification);
    }
  }

  deleteElementOfNotifications(notification:Notification):void{
      this.notifList = this.notifList.filter(notificationEle=>{
        notificationEle.Id != notification.Id
      });
  }

  determineMessageToShow(notification:Notification){
    let message:string='';
    if(notification.Type == NotificationType.JOIN_NOTIFICATION){
      message='New request to join your league';
    }else{
      message='Waiting for confirmation...';
    }
    return message;
  }


}
