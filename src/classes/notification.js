import Animation from '../classes/animations'
import notif from '../components/notification'
class Notification{

  constructor ()
  {

     //this.notifContent = null;
     //this.notifIcon = [];
     /*this.notificationData = {

        notifContent: null,
        notifIcon: null

     }*/

  }


  notificationContent (content, src)
  {

     var notifContent = document.querySelector('.notifContent');
     var notifIcon = document.querySelector('.notifIcon');
     notifContent.textContent = content;
     notifIcon.src = src;
     Animation.callNotification();

  }


}

export default new Notification()
