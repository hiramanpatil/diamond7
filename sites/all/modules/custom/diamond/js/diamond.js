(function ($) {

  $(document).ready(function(){

  	// auto calculate sub total and grand total
  	
    $( "#edit-field-lr-charges-und-0-value" ).blur(function() {

	    var lr_charges = $("#edit-field-lr-charges-und-0-value").val();	//alert(lr_charges);
	    var special_charges = $("#edit-field-special-approval-charges-und-0-value").val();
	    var other_charges = $("#edit-field-other-charges-und-0-value").val();
	    var detention_charges = $("#edit-field-detention-charges-und-0-value").val();
	    var loading_charges = $("#edit-field-loading-charges-und-0-value").val();
	    var unloading_charges = $("#edit-field-unloading-charge-und-0-value").val();
	    var sub_total = +lr_charges + +special_charges + +other_charges + +detention_charges + +loading_charges + +unloading_charges;

	    $("#edit-field-sub-total-und-0-value").val(sub_total);
	    $("#edit-field-grand-total-und-0-value").val(sub_total);

	});

    $( "#edit-field-special-approval-charges-und-0-value" ).blur(function() {
    	
	    var lr_charges = $("#edit-field-lr-charges-und-0-value").val();	//alert(lr_charges);
	    var special_charges = $("#edit-field-special-approval-charges-und-0-value").val();
	    var other_charges = $("#edit-field-other-charges-und-0-value").val();
	    var detention_charges = $("#edit-field-detention-charges-und-0-value").val();
	    var loading_charges = $("#edit-field-loading-charges-und-0-value").val();
	    var unloading_charges = $("#edit-field-unloading-charge-und-0-value").val();
	    var sub_total = +lr_charges + +special_charges + +other_charges + +detention_charges + +loading_charges + +unloading_charges;

	    $("#edit-field-sub-total-und-0-value").val(sub_total);
	    $("#edit-field-grand-total-und-0-value").val(sub_total);

	});

	$( "#edit-field-other-charges-und-0-value" ).blur(function() {
    	
	    var lr_charges = $("#edit-field-lr-charges-und-0-value").val();	//alert(lr_charges);
	    var special_charges = $("#edit-field-special-approval-charges-und-0-value").val();
	    var other_charges = $("#edit-field-other-charges-und-0-value").val();
	    var detention_charges = $("#edit-field-detention-charges-und-0-value").val();
	    var loading_charges = $("#edit-field-loading-charges-und-0-value").val();
	    var unloading_charges = $("#edit-field-unloading-charge-und-0-value").val();
	    var sub_total = +lr_charges + +special_charges + +other_charges + +detention_charges + +loading_charges + +unloading_charges;

	    $("#edit-field-sub-total-und-0-value").val(sub_total);
	    $("#edit-field-grand-total-und-0-value").val(sub_total);

	});


	$( "#edit-field-detention-charges-und-0-value" ).blur(function() {
    	
	    var lr_charges = $("#edit-field-lr-charges-und-0-value").val();	//alert(lr_charges);
	    var special_charges = $("#edit-field-special-approval-charges-und-0-value").val();
	    var other_charges = $("#edit-field-other-charges-und-0-value").val();
	    var detention_charges = $("#edit-field-detention-charges-und-0-value").val();
	    var loading_charges = $("#edit-field-loading-charges-und-0-value").val();
	    var unloading_charges = $("#edit-field-unloading-charge-und-0-value").val();
	    var sub_total = +lr_charges + +special_charges + +other_charges + +detention_charges + +loading_charges + +unloading_charges;

	    $("#edit-field-sub-total-und-0-value").val(sub_total);
	    $("#edit-field-grand-total-und-0-value").val(sub_total);

	});

	$( "#edit-field-loading-charges-und-0-value" ).blur(function() {
    	
	    var lr_charges = $("#edit-field-lr-charges-und-0-value").val();	//alert(lr_charges);
	    var special_charges = $("#edit-field-special-approval-charges-und-0-value").val();
	    var other_charges = $("#edit-field-other-charges-und-0-value").val();
	    var detention_charges = $("#edit-field-detention-charges-und-0-value").val();
	    var loading_charges = $("#edit-field-loading-charges-und-0-value").val();
	    var unloading_charges = $("#edit-field-unloading-charge-und-0-value").val();
	    var sub_total = +lr_charges + +special_charges + +other_charges + +detention_charges + +loading_charges + +unloading_charges;

	    $("#edit-field-sub-total-und-0-value").val(sub_total);
	    $("#edit-field-grand-total-und-0-value").val(sub_total);

	});

	$( "#edit-field-unloading-charge-und-0-value" ).blur(function() {
    	
	    var lr_charges = $("#edit-field-lr-charges-und-0-value").val();	//alert(lr_charges);
	    var special_charges = $("#edit-field-special-approval-charges-und-0-value").val();
	    var other_charges = $("#edit-field-other-charges-und-0-value").val();
	    var detention_charges = $("#edit-field-detention-charges-und-0-value").val();
	    var loading_charges = $("#edit-field-loading-charges-und-0-value").val();
	    var unloading_charges = $("#edit-field-unloading-charge-und-0-value").val();
	    var sub_total = +lr_charges + +special_charges + +other_charges + +detention_charges + +loading_charges + +unloading_charges;

	    $("#edit-field-sub-total-und-0-value").val(sub_total);
	    $("#edit-field-grand-total-und-0-value").val(sub_total);

	});

  });

})(jQuery);