var _SlideshowTransitions = [
    //Fade Fly in R
    {$Duration: 1200, $During: { $Left: [0.3, 0.7] }, $FlyDirection: 2, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $Opacity: 2, $Outside: true }
    //Fade Fly out L
    , { $Duration: 1200, $SlideOut: true, $FlyDirection: 1, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.3, $Opacity: 2, $Outside: true }
];

var _CaptionTransitions = [];
_CaptionTransitions["L"] = { $Duration: 800, $FlyDirection: 1, $Easing: $JssorEasing$.$EaseInCubic };
_CaptionTransitions["R"] = { $Duration: 800, $FlyDirection: 2, $Easing: $JssorEasing$.$EaseInCubic };
_CaptionTransitions["T"] = { $Duration: 800, $FlyDirection: 4, $Easing: $JssorEasing$.$EaseInCubic };
_CaptionTransitions["B"] = { $Duration: 800, $FlyDirection: 8, $Easing: $JssorEasing$.$EaseInCubic };
_CaptionTransitions["TL"] = { $Duration: 800, $FlyDirection: 5, $Easing: $JssorEasing$.$EaseInCubic };
_CaptionTransitions["TR"] = { $Duration: 800, $FlyDirection: 6, $Easing: $JssorEasing$.$EaseInCubic };
_CaptionTransitions["BL"] = { $Duration: 800, $FlyDirection: 9, $Easing: $JssorEasing$.$EaseInCubic };
_CaptionTransitions["BR"] = { $Duration: 800, $FlyDirection: 10, $Easing: $JssorEasing$.$EaseInCubic };

_CaptionTransitions["CLIP|LR"] = { $Duration: 600, $Clip: 3, $Easing: $JssorEasing$.$EaseInOutCubic };
_CaptionTransitions["MCLIP|L"] = { $Duration: 600, $Clip: 1, $Move: true, $Easing: $JssorEasing$.$EaseInOutCubic };
_CaptionTransitions["LISTH|L"] = { $Duration: 1000, $Clip: 1, $FlyDirection: 1, $Easing: $JssorEasing$.$EaseInOutCubic, $ScaleHorizontal: 0.8, $ScaleClip: 0.8, $During: { $Left: [0.4, 0.6], $Clip: [0, 0.4]} };
_CaptionTransitions["WAVE|L"] = { $Duration: 1300, $FlyDirection: 5, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseInWave }, $ScaleVertical: 0.3, $Round: { $Top: 2.5} };
_CaptionTransitions["JUMPDN|R"] = { $Duration: 1000, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseOutJump }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.4, $Round: { $Top: 1.5} };
_CaptionTransitions["DDG|TR"] = { $Duration: 1200, $Clip: 15, $FlyDirection: 6, $Easing: { $Left: $JssorEasing$.$EaseInJump, $Top: $JssorEasing$.$EaseInJump, $Clip: $JssorEasing$.$EaseSwing }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.3, $During: { $Left: [0, 0.8], $Top: [0, 0.8] }, $Round: { $Left: 0.8, $Top: 0.8} };
_CaptionTransitions["DODGEDANCE|L"] = { $Duration: 1200, $Clip: 15, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseInJump, $Top: $JssorEasing$.$EaseInJump, $Clip: $JssorEasing$.$EaseOutQuad }, $ScaleHorizontal: 0.3, $ScaleVertical: 0.3, $During: { $Left: [0, 0.8], $Top: [0, 0.8] }, $Round: { $Left: 0.8, $Top: 2.5} };
_CaptionTransitions["FLUTTER|L"] = { $Duration: 600, $FlyDirection: 9, $Easing: { $Left: $JssorEasing$.$EaseLinear, $Top: $JssorEasing$.$EaseOutWave, $Opacity: $JssorEasing$.$EaseLinear }, $ScaleHorizontal: 0.2, $ScaleVertical: 0.1, $Opacity: 2, $Round: { $Top: 1.3} };
_CaptionTransitions["TORTUOUS|VB"] = { $Duration: 1200, $Clip: 15, $FlyDirection: 8, $Easing: { $Top: $JssorEasing$.$EaseOutWave, $Clip: $JssorEasing$.$EaseOutCubic }, $ScaleVertical: 0.2, $During: { $Top: [0, 0.7] }, $Round: { $Top: 1.3} };
_CaptionTransitions["FADE"] = { $Duration: 600, $Opacity: 2 };
_CaptionTransitions["ZMF|10"] = { $Duration: 600, $Zoom: 11, $Easing: { $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 };
_CaptionTransitions["RTT|10"] = { $Duration: 600, $Zoom: 11, $Rotate: true, $Easing: { $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.8} };
_CaptionTransitions["RTTL|BR"] = { $Duration: 600, $Zoom: 11, $Rotate: true, $FlyDirection: 10, $Easing: { $Left: $JssorEasing$.$EaseInExpo, $Top: $JssorEasing$.$EaseInExpo, $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $ScaleHorizontal: 0.6, $ScaleVertical: 0.6, $Opacity: 2, $Round: { $Rotate: 0.8} };

var options = {
    $AutoPlay: true,
    $AutoPlaySteps: 1,
    $AutoPlayInterval: 5000,
    $PauseOnHover: 3,
    $ArrowKeyNavigation: true,
    $SlideDuration: 500,      
    $MinDragOffsetToSlide: 20,
    $SlideSpacing: 0,
    $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
    $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
    $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
    $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
    $DragOrientation: 1,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
    
    $SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
        $Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
        $Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
        $TransitionsOrder: 1,                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
        $ShowLink: true                                    //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
    },
    
    $CaptionSliderOptions: {                            //[Optional] Options which specifies how to animate caption
        $Class: $JssorCaptionSlider$,                   //[Required] Class to create instance to animate caption
        $CaptionTransitions: _CaptionTransitions,       //[Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
        $PlayInMode: 1,                                 //[Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
        $PlayOutMode: 3                                 //[Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
    },
    
    $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
        $Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
        $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
        $ActionMode: 3,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
        $Lanes: 2,                                      //[Optional] Specify lanes to arrange items, default value is 1
        $SpacingX: 10,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
        $SpacingY: 10                                    //[Optional] Vertical space between each item in pixel, default value is 0
    },
    
    $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
        $ChanceToShow: 1                                //[Required] 0 Never, 1 Mouse Over, 2 Always
    },
    
    $ThumbnailNavigatorOptions: {
        $Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
        $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
        $ActionMode: 0,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
        $DisableDrag: true,                             //[Optional] Disable drag or not, default value is false
        $Orientation: 2                                 //[Optional] Orientation to arrange thumbnails, 1 horizental, 2 vertical, default value is 1
    }
};

