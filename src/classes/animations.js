import { TweenMax, TimelineMax } from "greensock";
class Animations {

   constructor (){

     this.tl = new TimelineMax();
     this.tl2 = new TimelineMax();

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


   pauseLauchScreen ()
   {

      this.tl.pause();

   }


   displaySos ()
   {

     this.tl.to('.appIntro',1, {display: 'none', ease: Quad.easeOut});
     this.tl2.to('.appCore',0.9, {opacity: 1,zIndex: '2', ease: Quad.easeOut});

     this.tl2.staggerTo('.alerts', 1, {scale: 1, ease: Back.easeOut});

   }


}

export default new Animations()
