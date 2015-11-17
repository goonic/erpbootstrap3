
jQuery(function($){
	//全选//checkbox chose
	$(".roles-choseipt .roles-all").click(function(){
		$(this).parents(".checkbox").siblings(".row").find("input:checkbox").prop("checked",this.checked);
    });
	
	$(".roles-choseipt .row").each(function(){
		var ind = $(".roles-choseipt .row").index(this);
		var $tmp = $("input:checkbox",this);
		$tmp.click(function(){
			$(".roles-all").eq(ind).prop("checked", $tmp.length==$tmp.filter(":checked").length);
		});
	});
	//反选
	$(".roles-choseipt .roles-reverse").click(function(){
		 var index = $(".roles-choseipt .roles-reverse").index(this);
		 $(".roles-choseipt .roles-reverse").parents(".checkbox").eq(index).siblings(".row").find("input:checkbox").each(function () {   
			$(this).prop("checked",!$(this).prop("checked"));
		 }); 
	});

})