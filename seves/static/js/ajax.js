/**
 * Created by maker on 2016/8/10.
 */
$(function(){

    //点击左右按钮，图片进行切换效果
    $(".text-5").click(function(){
        $(".over-1").animate({marginTop:-425},"slow")
    });
    $(".input-1-3").click(function(){
        $(".over-1").animate({marginTop:0},"slow")
    });
    $(".loding").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

	var submit_ajax = function ($form, callback) {
		$.ajax({
			url: $form.attr("action"),
			type: $form.attr("method"),
			data: $form.serialize(),
			dataType: "JSON",
			success: callback
		});
	}

	//提交表单
	$(".submit").bind("click", function () {
		$form = $(this).closest("form");
		submit_ajax($form, function (data) {
			if(data.result) {
				alert('提交成功');
			}else{
				alert('提交失败');
			}
		});
	});

	//登陆
	$(".login").bind("click", function () {
		$form = $(this).closest("form");
		submit_ajax($form, function (data) {
			alert(data.message);
			if(data.result == 1) {
				document.location.href = data.url;
			}
		});
	});
});