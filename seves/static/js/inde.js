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
    $(".personal").click(function(){
        $("#user").val(1);
    });
    $(".enterprise").click(function(){
        $("#user").val(2);
    });


});

$(function(){
    $("#mobile").blur(function(){
        var reg = new RegExp("^\d{11}$");
        var obj = document.getElementById("mobile");
//            if(!reg.test(obj.value)){
//                alert("请输入数字!");
//            }
        if(!/^\d{11}$/.test(obj.value)) {
            if (obj.value == "") {
                $(".mobile").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor tgpf fine'>" + " 号码不能为空!" + "</span></span>")
            } else
                $(".mobile").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor tgpf fine'>" + " 请输入11位数字!" + "</span></span>")
        }
        else{
            $(".mobile").html("<span class='judgeColor glyphicon glyphicon-ok-circle'></span>")
        }
    })
    $("#password").blur(function(){
        var reg = new RegExp("^[a-z0-9_-]{6,18}$");
        var obj = document.getElementById("password");
//            if(!reg.test(obj.value)){
//                alert("请输入数字!");
//            }
        if(!/^[a-zA-Z0-9_-]{6,18}$/.test(obj.value)){
            if (obj.value == "") {
                $(".password").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "请输入密码!" + "</span></span>")
            } else {
                $(".password").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor tgpf fine'>" + "长度在6-18之间，只能包含字母、数字和下划线!" + "</span></span>")
            }
        }
        else{
            $(".password").html("<span class='judgeColor glyphicon glyphicon-ok-circle'></span>")
        }
    })
    $("#username").blur(function(){
        var obj = document.getElementById("username");
//            if(!reg.test(obj.value)){
//                alert("请输入数字!");
//            }
        if(!/^[a-zA-Z/d_]{6,18}$/.test(obj.value)){
            if(obj.value!=""){
                $(".username").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "请输入字母或下划线!" + "</span></span>")

            }else{
                $(".username").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "用户名不能为空!" + "</span></span>")

            }
        }
        else{
            $(".username").html("<span class='judgeColor glyphicon glyphicon-ok-circle'></span>")
        }
    })
    $("#emil").blur(function(){
        var reg = new RegExp("^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$");
        var obj = document.getElementById("emil");
//            if(!reg.test(obj.value)){
//                alert("请输入数字!");
//            }
        if(!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(obj.value)){
            if(obj.value==""){
                $(".emil").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "邮箱不能为空!" + "</span></span>")
            }else
                $(".emil").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "您输入的邮箱有误!" + "</span></span>")
        }
        else{
            $(".emil").html("<span class='judgeColor glyphicon glyphicon-ok-circle'></span>")
        }
    })
    $("#usersname").blur(function(){
        var reg = new RegExp("^[a-zA-Z/d_]{6,18}$");
        var obj = document.getElementById("usersname");
//            if(!reg.test(obj.value)){
//                alert("请输入数字!");
//            }
        if(!/^[a-zA-Z/d_]{6,18}$/.test(obj.value)) {
            if (obj.value == "") {
                $(".usersname").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "用户名不能为空!" + "</span></span>")

            } else {
                $(".usersname").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "用户名有误!" + "</span></span>")

            }
        }
        else{
            $(".usersname").html("<span class='judgeColor glyphicon glyphicon-ok-circle'></span>")
        }
    })
    $("#passd").blur(function(){
        var reg = new RegExp("^[a-z0-9_-]{6,18}$");
        var obj = document.getElementById("passd");
//            if(!reg.test(obj.value)){
//                alert("请输入数字!");
//            }
        if(!/^[a-zA-Z0-9_-]{6,18}$/.test(obj.value)) {
            if (obj.value == "") {
                $(".passd").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "密码不能为空!" + "</span></span>")

            } else {
                $(".passd").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "密码有误!" + "</span></span>")

            }
        }
        else{
            $(".passd").html("<span class='judgeColor glyphicon glyphicon-ok-circle'></span>")
        }
    })

})
$(function(){
    $("#check").click(function(){
            var obj = document.getElementById("mobile");
//            if(!reg.test(obj.value)){
//                alert("请输入数字!");
//            }
            if(!/^\d{11}$/.test(obj.value)) {
                if (obj.value == "") {
                    $(".mobile").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor tgpf fine'>" + " 号码不能为空!" + "</span></span>")
                } else
                    $(".mobile").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor tgpf fine'>" + " 请输入11位数字!" + "</span></span>")
            }
            else{
                $(".mobile").html("<span class='judgeColor glyphicon glyphicon-ok-circle'></span>")
            }
            var obj1 = document.getElementById("password");
//            if(!reg.test(obj.value)){
//                alert("请输入数字!");
//            }
            if(!/^[a-zA-Z0-9_-]{6,18}$/.test(obj1.value)){
                if (obj1.value == "") {
                    $(".password").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "请输入密码!" + "</span></span>")
                } else {
                    $(".password").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor tgpf fine'>" + "长度在6-18之间，只能包含字母、数字和下划线!" + "</span></span>")
                }
            }
            else{
                $(".password").html("<span class='judgeColor glyphicon glyphicon-ok-circle'></span>")
            }
            var obj2 = document.getElementById("username");
//            if(!reg.test(obj.value)){
//                alert("请输入数字!");
//            }
            if(!/^[a-zA-Z/d_]{6,18}$/.test(obj2.value)){
                if(obj2.value!=""){
                    $(".username").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "请输入字母或下划线!" + "</span></span>")

                }else{
                    $(".username").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "用户名不能为空!" + "</span></span>")

                }
            }
            else{
                $(".username").html("<span class='judgeColor glyphicon glyphicon-ok-circle'></span>")
            }
            var obj3 = document.getElementById("emil");
//            if(!reg.test(obj.value)){
//                alert("请输入数字!");
//            }
            if(!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(obj3.value)){
                if(obj3.value==""){
                    $(".emil").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "邮箱不能为空!" + "</span></span>")
                }else
                    $(".emil").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "您输入的邮箱有误!" + "</span></span>")
            }
            else{
                $(".emil").html("<span class='judgeColor glyphicon glyphicon-ok-circle'></span>")
            }

        if(/^\d{11}$/.test(obj.value)&&/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(obj3.value)&&/^[a-zA-Z/d_]{6,18}$/.test(obj2.value)&&/^[a-zA-Z0-9_-]{6,18}$/.test(obj1.value)){
            console.log("认证成功 ")
        }else{
            console.log("认证失败 ")
        }

    })
})
$(function() {

    $("#checked").click(function () {
        var obj = document.getElementById("usersname");
//            if(!reg.test(obj.value)){
//                alert("请输入数字!");
//            }
        if(!/^[a-zA-Z/d_]{6,18}$/.test(obj.value)) {
            if (obj.value == "") {
                $(".usersname").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "用户名不能为空!" + "</span></span>")
            } else {
                $(".usersname").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "用户名有误!" + "</span></span>")
            }
        }
        else{
            $(".usersname").html("<span class='judgeColor glyphicon glyphicon-ok-circle'></span>")
        }
        var obj1 = document.getElementById("passd");
//            if(!reg.test(obj.value)){
//                alert("请输入数字!");
//            }
        if(!/^[a-zA-Z0-9_-]{6,18}$/.test(obj1.value)) {
            if (obj1.value == "") {
                $(".passd").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "密码不能为空!" + "</span></span>")
            } else {
                $(".passd").html("<span class='judgeErrorColor glyphicon glyphicon-remove-circle'><span class='errorColor fine'>" + "密码有误!" + "</span></span>")
            }
        }
        else{
            $(".passd").html("<span class='judgeColor glyphicon glyphicon-ok-circle'></span>")
        }

        if(/^[a-zA-Z/d_]{6,18}$/.test(obj.value)&&/^[a-zA-Z0-9_-]{6,18}$/.test(obj1.value)){
            console.log("认证ss")
        }
    })
})