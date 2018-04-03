import { TweenMax, TimelineMax } from "greensock";
class Animations {

   constructor (){

     this.tl = new TimelineMax();
     this.tl2 = new TimelineMax();
     this.tl3 = new TimelineMax();

   }


   lauchScreen ()
   {


     this.tl.to('.appIntro',1, {opacity: 1,width: '800px', height:'800px', ease: Quad.easeOut}, 0.3);
     this.tl.to('.appIntro',0.9, {width: '100%', height:'100%', ease: Cubic.easeOut}, '-=0.8');
     this.tl.to('.appIntro',0.9, {borderRadius: '0px', ease: Quad.easeOut}, '-=0.7');
     this.tl.to('.lauchBody .logo', 1.2, {scale: 1, ease: Back.easeOut}, '-=0.1','#logo');
     this.tl.staggerTo('.lauchFoot p, .lauchFoot .alertIcon', 0.5, {opacity: 1, ease: Cubic.easeOut}, 0.5, 'logo +=0.3');
     this.tl.to('.lauchFoot .alertIcon', 0.09, {yoyo: true, rotation: 30, repeat: 7}, 'logo +=2.2');
     this.tl.staggerTo('.lauchFoot p, .lauchFoot .alertIcon', 0.5, {opacity:0, ease: Cubic.easeOut}, 0.5, 'logo +=3.2');
     this.tl.to('.lauchBody .logo', 1.2, {rotation: -90, scale: 0, ease: Back.easeIn}, 'logo +=4.5');
     this.tl.to('.appIntro',0.9, {opacity: 0,zIndex: '0', ease: Quad.easeOut}, 'logo +=5.5');
     this.tl.to('.appCore',0.9, {opacity: 1,zIndex: '2', ease: Quad.easeOut}, 'logo +=5.6');

     this.tl.staggerTo('.alerts', 1, {scale: 1, ease: Back.easeOut}, 0.3, 'logo +=6');


   }



   displaySos ()
   {

     this.tl.to('.appIntro',1, {display: 'none', ease: Quad.easeOut});
     this.tl2.to('.appCore',0.9, {opacity: 1,zIndex: '2', ease: Quad.easeOut});

     this.tl2.staggerTo('.alerts', 1, {scale: 1, ease: Back.easeOut});

   }


   displayForm ()
   {

     this.tl3.to('.formsContainer',1, {zIndex: 7, display: 'flex'});
     //this.tl3.to('.formBack',1, {opacity: 0.9, ease: Quad.easeOut}, 0.3);
     //this.tl3.to('.loginOut input',1, {opacity: 1, ease: Quad.easeOut}, 0.4);

   }


   hideForm ()
   {

     this.tl3.to('.formsContainer',1, {zIndex: 0, display: 'none'});
     //this.tl3.to('.formBack',0.9, {opacity: 0, ease: Cubic.easeOut});

   }


   callSosConfirm ()
   {

     var tl = new TimelineMax();
     tl.to('.sosContainer',0.7, {scale: 1, ease: Back.easeOut});
     tl.to('.alerts',0.7, {scale: 0.7, ease: Back.easeOut}, '-=1');

   }


   hideSosConfirm ()
   {

     var tl = new TimelineMax();
     tl.to('.sosContainer',0.7, {scale: 0, ease: Back.easeOut});
     tl.to('.alerts',0.7, {scale: 1, ease: Back.easeOut}, '-=0.7');

   }


   callSos (selector)
   {

     var tl = new TimelineMax();
     tl.to('.'+selector,0.7, {scale: 1, ease: Back.easeOut});
     tl.to('.alerts',0.7, {scale: 0.7, ease: Back.easeOut}, '-=1');

   }


   hideSos (selector)
   {

     var tl = new TimelineMax();
     tl.to('.'+selector,0.7, {scale: 0, ease: Back.easeOut});
     tl.to('.alerts',0.7, {scale: 1, ease: Back.easeOut}, '-=0.7');

   }


   callNotification ()
   {

     var tl = new TimelineMax();
     tl.to('.notificationCont',0.7, {right: '0px', ease: Back.easeOut});
     tl.to('.alerts',0.7, {scale: 0.8, ease: Back.easeOut}, '-=1');

     tl.to('.notificationCont',0.7, {right: '-300px', ease: Back.easeinOut}, 5, '#hideNotification');
     tl.to('.alerts',0.7, {scale: 1, ease: Back.easeOut}, 'hideNotification');

   }


   hideNotification ()
   {

     var tl = new TimelineMax();
     tl.to('.notificationCont',0.7, {right: '300px', ease: Back.easeinOut});
     tl.to('.alerts',0.7, {scale: 1, ease: Back.easeOut}, '-=0.7');

   }


}

export default new Animations()
