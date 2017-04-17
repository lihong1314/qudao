$(document).ready(function(){
		$("#xiugaibtn").click(function(){
			$("#zhezhao").fadeIn('slow/400/fast', function() {});(300);
		})
		$(".zhezhaobox").click(function(){
			$("#zhezhao").fadeOut('slow/400/fast', function() {});(300);
		})
        $("#exit").click(function(){
        	location.replace("login.html");
        })


		$("#submit1").click(function(){
		    if($("#ps").val()=="" ||$("#ps2").val()==""||$("#ps3").val()==""){
                layer.open({
				    content: "密码不能为空"
				    ,skin: 'msg'
				    ,time: 2 
				});
		    }else{
				if($("#ps2").val()==$("#ps3").val()){
					var ps={"oldpassword":$("#ps").val(),"newpasswod":$("#ps2").val(),"channelId":window.localStorage.getItem("ChannelId")};
					$.ajax({
						type:"GET",
						url:"http://192.168.15.30:808/api/StudentInfo/ChangePassword",
						data:ps,
						dataType:"json",
						success:function(data){
							console.log(data);
							if(data.Result==0){
								layer.open({
								    content: data.Msg
								    ,skin: 'msg'
								    ,time: 2 
								});

							}
							setTimeout(function(){
								window.localStorage.removeItem("ps");
	                            location.href="login.html";
							},2000)
							
						}
					})
				}else{
	                layer.open({
					    content: '两次密码输入不一致'
					    ,skin: 'msg'
					    ,time: 2 
					});
					$("#ps3").val("")
				}
		    }
			
		})


	})