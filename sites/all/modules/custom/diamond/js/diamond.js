(function ($) {

  $(document).ready(function(){

  	// auto calculate sub total and grand total
  	
  	//CREATE SALE
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
    	
	    var lr_charges = $("#edit-field-lr-charges-und-0-value").val();
	    var special_charges = $("#edit-field-special-approval-charges-und-0-value").val();
	    var other_charges = $("#edit-field-other-charges-und-0-value").val();
	    var detention_charges = $("#edit-field-detention-charges-und-0-value").val();
	    var loading_charges = $("#edit-field-loading-charges-und-0-value").val();
	    var unloading_charges = $("#edit-field-unloading-charge-und-0-value").val();
	    var sub_total = +lr_charges + +special_charges + +other_charges + +detention_charges + +loading_charges + +unloading_charges;

	    $("#edit-field-sub-total-und-0-value").val(sub_total);
	    $("#edit-field-grand-total-und-0-value").val(sub_total);

	});

	// CREATE MEMO
	$("#edit-freight").blur(function() {

		var freight = $("#edit-freight").val();
		var loading_detention_charge = $("#edit-loading-detention-charge").val();
		var advance = $("#edit-advance").val();
		var diesel = $("#edit-diesel").val();
		var transfer_amount = $("#edit-transfer-amount").val();
		var loading_charge = $("#edit-loading-charge").val();
		var unloading_charge = $("#edit-unloading-charge").val();
		var lr_charges = $("#edit-lr-charges").val();
		var labour_charge = $("#edit-labour-charge").val();
		
		var sub_total = +freight - +advance - +labour_charge - +lr_charges - +transfer_amount - +diesel;

		var pod_bal = sub_total + +loading_detention_charge + +loading_charge + +unloading_charge;

		$("#edit-pod-bal").val(pod_bal);

	});

	$("#edit-loading-detention-charge").blur(function() {

		var freight = $("#edit-freight").val();
		var loading_detention_charge = $("#edit-loading-detention-charge").val();
		var advance = $("#edit-advance").val();
		var diesel = $("#edit-diesel").val();
		var transfer_amount = $("#edit-transfer-amount").val();
		var loading_charge = $("#edit-loading-charge").val();
		var unloading_charge = $("#edit-unloading-charge").val();
		var lr_charges = $("#edit-lr-charges").val();
		var labour_charge = $("#edit-labour-charge").val();
		
		var sub_total = +freight - +advance - +labour_charge - +lr_charges - +transfer_amount - +diesel;

		var pod_bal = sub_total + +loading_detention_charge + +loading_charge + +unloading_charge;

		$("#edit-pod-bal").val(pod_bal);

	});

	$("#edit-advance").blur(function() {

		var freight = $("#edit-freight").val();
		var loading_detention_charge = $("#edit-loading-detention-charge").val();
		var advance = $("#edit-advance").val();
		var diesel = $("#edit-diesel").val();
		var transfer_amount = $("#edit-transfer-amount").val();
		var loading_charge = $("#edit-loading-charge").val();
		var unloading_charge = $("#edit-unloading-charge").val();
		var lr_charges = $("#edit-lr-charges").val();
		var labour_charge = $("#edit-labour-charge").val();
		
		var sub_total = +freight - +advance - +labour_charge - +lr_charges - +transfer_amount - +diesel;

		var pod_bal = sub_total + +loading_detention_charge + +loading_charge + +unloading_charge;

		$("#edit-pod-bal").val(pod_bal);

	});

	$("#edit-diesel").blur(function() {

		var freight = $("#edit-freight").val();
		var loading_detention_charge = $("#edit-loading-detention-charge").val();
		var advance = $("#edit-advance").val();
		var diesel = $("#edit-diesel").val();
		var transfer_amount = $("#edit-transfer-amount").val();
		var loading_charge = $("#edit-loading-charge").val();
		var unloading_charge = $("#edit-unloading-charge").val();
		var lr_charges = $("#edit-lr-charges").val();
		var labour_charge = $("#edit-labour-charge").val();
		
		var sub_total = +freight - +advance - +labour_charge - +lr_charges - +transfer_amount - +diesel;

		var pod_bal = sub_total + +loading_detention_charge + +loading_charge + +unloading_charge;

		$("#edit-pod-bal").val(pod_bal);

	});

	$("#edit-transfer-amount").blur(function() {

		var freight = $("#edit-freight").val();
		var loading_detention_charge = $("#edit-loading-detention-charge").val();
		var advance = $("#edit-advance").val();
		var diesel = $("#edit-diesel").val();
		var transfer_amount = $("#edit-transfer-amount").val();
		var loading_charge = $("#edit-loading-charge").val();
		var unloading_charge = $("#edit-unloading-charge").val();
		var lr_charges = $("#edit-lr-charges").val();
		var labour_charge = $("#edit-labour-charge").val();
		
		var sub_total = +freight - +advance - +labour_charge - +lr_charges - +transfer_amount - +diesel;

		var pod_bal = sub_total + +loading_detention_charge + +loading_charge + +unloading_charge;

		$("#edit-pod-bal").val(pod_bal);

	});

	$("#edit-loading-charge").blur(function() {

		var freight = $("#edit-freight").val();
		var loading_detention_charge = $("#edit-loading-detention-charge").val();
		var advance = $("#edit-advance").val();
		var diesel = $("#edit-diesel").val();
		var transfer_amount = $("#edit-transfer-amount").val();
		var loading_charge = $("#edit-loading-charge").val();
		var unloading_charge = $("#edit-unloading-charge").val();
		var lr_charges = $("#edit-lr-charges").val();
		var labour_charge = $("#edit-labour-charge").val();
		
		var sub_total = +freight - +advance - +labour_charge - +lr_charges - +transfer_amount - +diesel;

		var pod_bal = sub_total + +loading_detention_charge + +loading_charge + +unloading_charge;

		$("#edit-pod-bal").val(pod_bal);

	});

	$("#edit-unloading-charge").blur(function() {

		var freight = $("#edit-freight").val();
		var loading_detention_charge = $("#edit-loading-detention-charge").val();
		var advance = $("#edit-advance").val();
		var diesel = $("#edit-diesel").val();
		var transfer_amount = $("#edit-transfer-amount").val();
		var loading_charge = $("#edit-loading-charge").val();
		var unloading_charge = $("#edit-unloading-charge").val();
		var lr_charges = $("#edit-lr-charges").val();
		var labour_charge = $("#edit-labour-charge").val();
		
		var sub_total = +freight - +advance - +labour_charge - +lr_charges - +transfer_amount - +diesel;

		var pod_bal = sub_total + +loading_detention_charge + +loading_charge + +unloading_charge;

		$("#edit-pod-bal").val(pod_bal);

	});

	$("#edit-lr-charges").blur(function() {

		var freight = $("#edit-freight").val();
		var loading_detention_charge = $("#edit-loading-detention-charge").val();
		var advance = $("#edit-advance").val();
		var diesel = $("#edit-diesel").val();
		var transfer_amount = $("#edit-transfer-amount").val();
		var loading_charge = $("#edit-loading-charge").val();
		var unloading_charge = $("#edit-unloading-charge").val();
		var lr_charges = $("#edit-lr-charges").val();
		var labour_charge = $("#edit-labour-charge").val();
		
		var sub_total = +freight - +advance - +labour_charge - +lr_charges - +transfer_amount - +diesel;

		var pod_bal = sub_total + +loading_detention_charge + +loading_charge + +unloading_charge;

		$("#edit-pod-bal").val(pod_bal);

	});

	$("#edit-labour-charge").blur(function() {

		var freight = $("#edit-freight").val();
		var loading_detention_charge = $("#edit-loading-detention-charge").val();
		var advance = $("#edit-advance").val();
		var diesel = $("#edit-diesel").val();
		var transfer_amount = $("#edit-transfer-amount").val();
		var loading_charge = $("#edit-loading-charge").val();
		var unloading_charge = $("#edit-unloading-charge").val();
		var lr_charges = $("#edit-lr-charges").val();
		var labour_charge = $("#edit-labour-charge").val();
		
		var sub_total = +freight - +advance - +labour_charge - +lr_charges - +transfer_amount - +diesel;

		var pod_bal = sub_total + +loading_detention_charge + +loading_charge + +unloading_charge;

		$("#edit-pod-bal").val(pod_bal);

	});						

  });

})(jQuery);