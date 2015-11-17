// JavaScript Document

		$(document).on("click", "#btbox_error", function (e) {
			bootbox.dialog({
			  message: "<div class='row modalline'><div class='col-xs-1'><span class='glyphicon glyphicon-remove-circle red'></span></div><div class='col-xs-11'>对不起，您的操作不正确！</div></div>", 
			  title: "提示",
			  onEscape: function() {},
			  show: true,
			  backdrop: true,
			  closeButton: true,
			  animate: true,
			  className: "btbox_errorinfo",
			  buttons: {
				"取消": {
				  className: "btn-default",
				  callback: function() {}
				},
				success: {   
				  label: "确定",
				  className: "btn-primary", 
				  callback: function() {}
				}
			  }
			});
			setTimeout("$('.btbox_errorinfo').hide()",3000);
			setTimeout("$('.modal-backdrop').hide()",3000);
			
       });
	   $(document).on("click", "#btbox_success", function (e) {
			bootbox.dialog({
			  message: "<div class='row modalline'><div class='col-xs-1'><span class='glyphicon glyphicon-ok-circle green'></span></div><div class='col-xs-11'>恭喜您，操作成功！</div></div>",
			  title: "提示",
			  onEscape: function() {},
			  show: true,
			  backdrop: true,
			  closeButton: true,
			  animate: true,
			  className: "btbox_okinfo",
			  buttons: {
				"取消": {
				  className: "btn-default",
				  callback: function() {}
				},
				success: {   
				  label: "确定",
				  className: "btn-primary",
				  callback: function() {}
				}			 
			  }
			});
       });
	   
	   $(document).on("click", ".big-loading", function (e) {
			bootbox.dialog({
			  message: "<h2>弹窗加载</h2><button class='btn btn-success btn-lg loading'>加载</button><div class='loading-modal-box'><div class='modal-dialog-ld'><span class='ldclose'>×</span><div class='loadingbx'><h1><img src='app/images/erploading.gif'></h1><h2>正在加载中...</h2></div></div></div><div class='liner-modalbg fade'></div>",
			  title: "提示",
			  onEscape: function() {},
			  show: true,
			  backdrop: true,
			  closeButton: true,
			  animate: true,
			  className: "loading-bigbox",
			  buttons: {
				"取消": {
				  className: "btn-default",
				  callback: function() {}
				},
				success: {   
				  label: "确定",
				  className: "btn-primary", 
				  callback: function() {}
				}
			  }	  
			});
       });
	
	$(document).on("click", ".loading", function (e) {
		var $loadbx = $(".loading-bigbox .modal-dialog");
		var ldwidth = $loadbx.width();
		var ldheight = $loadbx.height();
		$(".loading-bigbox .modal-body").css("position","static");
		$(".liner-modalbg").css({
			width:ldwidth,
			height:ldheight,
			display:"block"
		});
		$(".liner-modalbg").fadeIn();
		$(".loading-modal-box").fadeIn(300);
       });
	   
	   $(document).on("click",function (e) {
		   if($(e.target).is(".ldclose")||$(e.target).is(".liner-modalbg")){
				$(".liner-modalbg").fadeOut();
				$(".loading-modal-box").fadeOut(300);
		   }
       });