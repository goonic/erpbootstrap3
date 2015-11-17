
$(document).ready(function(){
	
	$('.data-table').dataTable({
		"bJQueryUI": true,
		"sPaginationType": "full_numbers",
		"sDom": '<""l>t<"F"ip>',
		"aLengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
		"oLanguage": {
			"sLengthMenu": "每页显示 _MENU_ 条记录",
			"sZeroRecords": "抱歉， 没有找到",
			"sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
			"sInfoEmpty": "没有数据",
			"sInfoFiltered": "(从 _MAX_ 条数据中检索)",
			"oPaginate": {
			"sFirst": "首页",
			"sPrevious": "前一页",
			"sNext": "后一页",
			"sLast": "尾页"
			},
			"sZeroRecords": "没有检索到数据"
			}
		
	});
	
	$('.dataTables_length select').addClass('form-control');
	
	$('.editor-table tr .btn-danger').click(function(){
		$(this).parents('tr').remove();
	})
	
});
