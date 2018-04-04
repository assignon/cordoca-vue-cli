import Notifications from '../components/notification'
import camerasos from '../components/cameraSos'
import Animation from '../classes/animations'

class isCordova {

   constructor ()
   {



   }


   takePicture ()
   {

        document.addEventListener('deviceready', function()
        {
alert();
            var cameraopts = {

              quality: 50,
              destinationType: Camera.DestinationType.FILE_URI,
              sourceType: Camera.PictureSourceType.CAMERA,
              encodingType: Camera.EncodingType.JPEG,
              mediaType: Camera.mediaType.PICTURE,
              CAMERAdirection: Camera.Direction.BACK,
              allowEdit: true,
              correctOrientation: true,
              targetWidth: 500,
              targetHeight: 500

            };

            //return cameraopts;

            navigator.camera.getPicture(this.camerSucces, this.cameraError, cameraOpts);

       })

   }


   cameraSucces (imageUri)
   {

     Animations.callSos('cameraSos');
     var picture = document.querySelector('.cameraFoto');
     picture.src = imageUri;
     console.log(imageUri);

   }


   cameraErr (error)
   {

     Notifications.notificationContent(error, '../assets/notificationsIcons/errormsg.svg');
     console.debug('Unable to take the picture due: '+ error, 'app');

   }

}

export default new isCordova();
