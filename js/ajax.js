
var new_element=document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src","../js/md5.js");// 在这里引入了md5.js
document.body.appendChild(new_element);

var load_element=document.createElement("script");
load_element.setAttribute("type","text/javascript");
load_element.setAttribute("src","../js/load.js");// 在这里引入了load.js
document.body.appendChild(load_element);

	var debug_log = true ;
//	var httpUrl = new_element.src.getServerHost();//主服务
//	var httpImageUrl = new_element.src.getImageHost();//图片服务
	var timeout =15000;
	
//	var app_key = "9e304d4e8df1b74cfa009913198428ab";
//	var signConstant = "4f4f8dd219bbdde0ae6bbe02be217c3a";
//	session_key = localStorage.getItem('session_key');
	//获取当前时间戳
//	function getTimestamp(){
//		return Math.round(new Date().getTime()/1000);//(Date.parse(new Date())/1000).toString();
//	}
//	
//	function getAppId(){return "jinqianzhuang";}
//	function getMsgSignature(timpstamp){
//		var appid = getAppId();
//		return hex_md5(timpstamp+appid);
//	}
//	//获取sign签名 
//	function getSign(){
//		return getMsgSignature(getTimestamp());
//	}
	//获取发送数据的
	 function getdata(options){
		var timestamp = getTimestamp();
		var sign = getSign();
		var data = {
			clientType:app,
			timestamp:timestamp,
			sign:sign,
		};
		
		for (var key in options) {
			data[key] = options[key];
		}
		return data;
	}
	//控制台打印信息 
	function logV(info){
		if(debug_log){
			console.log("ajax:",info);
		}
		
	}
	//控制台打印信息 
	function logData(data){
		if(debug_log){
			console.log("request:",JSON.stringify(data));
			//log(JSON.stringify(data));
		}
		
	}
	//控制台打印信息 
	function logDataResponse(data){
		if(debug_log){
			console.log("Response:",JSON.stringify(data));
			//log(JSON.stringify(data));
		}
		
	}
	 
	 //请求网络返回信息
	function ToastMsg(msg){
		mui.toast(msg);
	}
	 

(function(w){
	
//	//手机号注册
//	w.ajax_register = function(options){
//		var data = getdata(options);
//		var regster_url=getServerHost()+"host/user/addUserByPhone.do";
//		logV(regster_url);
//		logData(data);
//		mui.ajax(regster_url,{
//			data:data,
//			dataType:'json',//服务器返回json格式数据
//			type:'post',//HTTP请求类型
//			timeout:timeout,//超时时间设置为15秒；
//			success:function(data){
//				logDataResponse(data);
//				registerSeccess(data);
//			},
//			error:function(xhr,type,errorThrown){
//				console.log("用户注册失败:type="+type+";errorThrown="+errorThrown.toString());
//			}
//		});
//	}
//	
//	
//	//用户登陆
//	w.ajax_login = function(options){
//		var data = getdata(options);
//		var login_url=getServerHost()+"/user/loginUser.do";
//		logV(login_url);
//		logData(data);
//		mui.ajax(login_url,
//		{
//			data:data,
//			dataType:'json',//服务器返回json格式数据
//			type:'post',//HTTP请求类型
//			timeout:timeout,//超时时间设置为15秒；
//			success:function(data){
//				logDataResponse(data);
//				data.account = options.user_name;
//				loginSuccess(data);
//			},
//			error:function(xhr,type,errorThrown){
//				console.log("登录失败:type="+type+";errorThrown="+errorThrown.toString());
//			}
//		});
//	}
//	
//	
//	//修改密码
//	w.ajax_change_pwd = function(options){
//		var data = getdata(options);
//		mui.ajax(getServerHost(),{
//			data:data,
//			dataType:'json',//服务器返回json格式数据
//			type:'post',//HTTP请求类型
//			timeout:timeout,//超时时间设置为15秒；
//			success:function(data){
//				logDataResponse(data);
//				changePwdSuccess(data);
//			},
//			error:function(xhr,type,errorThrown){
//				console.log("修改密码失败:type="+type+";errorThrown="+errorThrown.toString());
//			}
//		});
//	}
//	
//	//退出登录
//	w.ajax_logout = function(options){
//		var data = getdata(options);
//		mui.ajax(getServerHost(),{
//			data:data,
//			dataType:'json',//服务器返回json格式数据
//			type:'get',//HTTP请求类型
//			timeout:timeout,//超时时间设置为10秒；
//			success:function(data){
//				logDataResponse(data);
//				logoutSuccess(data);
//			},
//			error:function(xhr,type,errorThrown){
//				console.log("退出登录失败:type="+type+";errorThrown="+errorThrown.toString());
//			}
//		});
//	}
//	
//	//获取分类第一级
//	w.ajax_get_first_category = function(options) {
//		startLoad();
//		var data = getdata(options);
//		mui.ajax(getServerHost(),{
//			data:data,
//			dataType:'json',//服务器返回json格式数据
//			type:'get',//HTTP请求类型
//			timeout:timeout,//超时时间设置为10秒；
//			success:function(data){
//				
//				logDataResponse(data);
//				setTimeout(function(){
//					endLoad();
//					categoryStairSuccess(data);
//				},500);
//			},
//			error:function(xhr,type,errorThrown){
//				
//			}
//		});
//	}
//	
//	//获取分类第二级
//	w.ajax_get_sub_category = function(options){
//		startLoad();
//		var data = getdata(options);
//		mui.ajax(getServerHost(),{
//			data:data,
//			dataType:'json',//服务器返回json格式数据
//			type:'get',//HTTP请求类型
//			timeout:timeout,//超时时间设置为10秒；
//			success:function(data){
//				logDataResponse(data);
//				setTimeout(function(){
//					endLoad();
//					categoryMoversSuccess(options.parent_category_id,data);
//				},500);
//				
//			},
//			error:function(xhr,type,errorThrown){
//				
//			}
//		});
//	}
//	
//	//获取分类产品
//	w.ajax_get_product_list = function(options){
//		startLoad();
//		var data = getdata(options);
//		mui.ajax(getServerHost(),{
//			data:data,
//			dataType:'json',//服务器返回json格式数据
//			type:'get',//HTTP请求类型
//			timeout:timeout,//超时时间设置为10秒；
//			success:function(data){
//				logDataResponse(data);
//				setTimeout(function(){
//					endLoad();
//					productlistSuccess(data);
//				},500);
//				
//				
//			},
//			error:function(xhr,type,errorThrown){
//				
//			}
//		});
//	}
//	
//	//查询用户喜欢的商品
//	w.ajax_get_likelist = function(options){
//		startLoad();
//		var data = getdata(options);
//		mui.ajax(getServerHost(),{
//			data:data,
//			dataType:'json',//服务器返回json格式数据
//			type:'get',//HTTP请求类型
//			timeout:timeout,//超时时间设置为10秒；
//			success:function(data){
//				logDataResponse(data);
//				setTimeout(function(){
//					endLoad();
//					likelistSuccess(data);
//				},500);
//				
//				
//			},
//			error:function(xhr,type,errorThrown){
//				
//			}
//		});
//	}
//	
//	//删除喜欢的商品
//	w.ajax_delete_likeItem = function(options){
//		startLoad();
//		var data = getdata(options);
//		mui.ajax(getServerHost(),{
//			data:data,
//			dataType:'json',//服务器返回json格式数据
//			type:'get',//HTTP请求类型
//			timeout:timeout,//超时时间设置为10秒；
//			success:function(data){
//				logDataResponse(data);
//				data.id = options.product_id;
//				setTimeout(function(){
//					endLoad();
//					deleteItemSuccess(data);
//				},500);
//				
//			},
//			error:function(xhr,type,errorThrown){
//				
//			}
//		});
//		
//	}
//	
//	//商品详情
//	w.ajax_get_product_detail = function(options){
//		startLoad();
//		var data = getdata(options);
//		mui.ajax(getServerHost(),{
//			data:data,
//			dataType:'json',//服务器返回json格式数据
//			type:'get',//HTTP请求类型
//			timeout:timeout,//超时时间设置为10秒；
//			success:function(data){
//				logDataResponse(data);
//				data.id = options.product_id;
//				setTimeout(function(){
//					endLoad();
//					productDetailSuccess(data);
//				},500);
//				
//				
//			},
//			error:function(xhr,type,errorThrown){
//				
//			}
//		});
//	}
//	
//	//获取首页跑马灯
//	w.ajax_get_Marquee = function(options){
//		var data = getdata(options);
//		mui.ajax(getServerHost(),{
//			data:data,
//			dataType:'json',
//			type:'get',
//			timeout:timeout,
//			success:function(data){
//				logDataResponse(data);
//				setTimeout(function(){
//					endLoad();
//					getMarqueeSuccess(data);
//				},500);
//				
//			},
//			error:function(xhr,type,errorThrown){
//				
//			}
//		});
//	}
//	//获取推荐商品
//	w.ajax_get_Recommend = function(options){
//		startLoad();
//		var data = getdata(options);
//		mui.ajax(getServerHost(),{
//			data:data,
//			dataType:'json',
//			type:'get',
//			timeout:timeout,
//			success:function(data){
//				logDataResponse(data);
//				setTimeout(function(){
//					endLoad();
//					getRecommendSuccess(data);
//				},500);
//				
//				
//			},
//			error:function(xhr,type,errorThrown){
//				
//			}
//		});
//	}
//	
//	
})(window);
