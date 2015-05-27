(function( controller, $, undefined ) {
    //Private Property
    var _privateVar = null;
   
    //Public Property
    controller.gallery = null;
	controller.slider = null;

    //Public Method
    controller.setGallery = function(juice,slider) {
        controller.gallery = juice;
		controller.slider = buildSlider(slider);
		controller.gallery.onImageChange = function(event){
	               controller.slider.slider( "value", event.id );
	          };
    };
  
    /*build slider from a control*/
	function buildSlider(control) {
      console.log(controller.gallery.getImageCount());
	  return control.slider({
			range: "max",
			min: 1,
			max: controller.gallery.getImageCount() ,
			value: 0,
			slide: function( event, ui ) {
					 controller.gallery.showImage(ui.value) ;
					}
			 });
    }; 
	
}( window.controller = window.controller || {}, jQuery ));