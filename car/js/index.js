$(function(){
	// 数据从最新开始
	var date=[{'user':'张小六','pic':'friendcircle-banner.png'},
		[{
		'photo':'user.jpg',
		'name':'甲壳虫',
		'text':'2017年一月,心向往之，记我的西藏行，历时16天，川进青出。',
		'article':{'pic':'user.jpg','title':'滴滴出行，从此出行再无忧'},
		'love':'9',
		'time':'一小时前',	
		'sharepic':['user.jpg','user.jpg','user.jpg','user.jpg','user.jpg','user.jpg','user.jpg','user.jpg','user.jpg','user.jpg'],
		'comment':[{'name':'秋香','text':'赞~'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽'}],
	 	},{
		'photo':'user.jpg',
		'name':'甲壳虫',
		'text':'2017年一月,心向往之，记我的西藏行，历时16天，川进青出。',
		'article':{'pic':'user.jpg','title':'滴滴出行，从此出行再无滴出行从此出行再无忧滴滴出行'},
		'love':'5',
		'time':'一天前',	
		'sharepic':[],
		'comment':[{'name':'秋香','text':'赞~'},{'name1':'我爱保时捷','name2':'我爱保时捷','text':'滴滴,让出行更美丽'}],
	 	},{
		'photo':'user.jpg',
		'name':'张小六',
		'text':'2016年一月,心向往之，记我的西藏行，历时16天，川进青出。',
		'article':{'pic':'user.jpg','title':'滴滴出行，从此出行再无忧'},
		'love':'6',
		'time':'两天前',	
		'sharepic':['user.jpg','user.jpg','user.jpg','user.jpg'],
		'comment':[{'name':'秋香','text':'赞~'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽'}],
	 	},{
		'photo':'user.jpg',
		'name':'甲壳虫',
		'text':'2017年一月,心向往之，记我的西藏行，历时16天，川进青出。',
		'article':{'pic':'user.jpg','title':'滴滴出行，从此出行再无忧'},
		'love':'100',
		'time':'一周前',	
		'sharepic':['user.jpg','user.jpg','user.jpg'],
		'comment':[{'name':'秋香','text':'赞~'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽'},{'name':'我爱保时捷','text':'滴滴,让出行更美丽'}],
	 	},{
		'photo':'user.jpg',
		'name':'张小六',
		'text':'2017年一月,心向往之，记我的西藏行，历时16天，川进青出。',
		'article':{},
		'love':'6',
		'time':'一月前',	
		'sharepic':['user.jpg'],
		'comment':[{'name':'秋香','text':'赞~'}],
	 	},]
		
	];
	// cookie设置
	// (function(){
	// 	function setCookie(c_name,value,expiredays)
	// 	{
	// 	var exdate=new Date()
	// 	exdate.setDate(exdate.getDate()+expiredays)
	// 	document.cookie=c_name+ "=" +escape(value)+
	// 	((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
	// 	}
	// 	setCookie('name',date[0].user,10000)
		
	// })();
	// 渲染视图
	// 头部
	(function(){
		var section=$('<section>').attr({id:'pic'});
				$('<img>').attr({src:'img/friendcircle-banner.png'}).appendTo(section);
		var div=$('<div>').attr({id:'user'}).appendTo(section);
				$('<span>').text(date[0].user).appendTo(div);
				$('<img>').attr({src:'img/user.jpg'}).appendTo(div);
				$('<span>').attr({id:'red-spot'}).appendTo(div);
		
		section.appendTo($('main'))
		
		
	})();
	// 渲染视图
	// 主体
	(function(){
		function getCookie(cname){
		  var name = cname + "=";
		  var ca = document.cookie.split(';');
		  for(var i=0; i<ca.length; i++) 
		  {
		    var c = ca[i].trim();
		    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
		  }
		  return "";
		}

		for (var i = date[1].length-1; i >-1 ; i--) {	
			section(i);
		}
			
		// 整体section渲染
		function section(i){

			var section2=$('<section>').attr({class:'message'})
			var aside=$('<aside>').appendTo(section2);
					$('<img>').attr({src:'img/'+date[1][i].photo}).appendTo(aside);
			var mian=$('<main>').appendTo(section2);
					$('<h2>').text(date[1][i].name).appendTo(mian);
			var div=$('<div>').attr({class:'publish'}).appendTo(mian);
						$('<h3>').text(date[1][i].text).appendTo(div);
					if(date[1][i].sharepic.length){
						var length=date[1][i].sharepic.length;
						pic(i,div,length);
					}
					if(date[1][i].article.title){
						article(i,div)
					}
					
						$('<span>').text(date[1][i].love).appendTo(div);
						$('<span>').text('评论').appendTo(div);

						if(date[1][i].name==date[0].user){
							console.log(i)
							$('<span>').text('删除').appendTo(div);
							
						}
						
						
						$('<br>').appendTo(div);
						$('<strong>').attr({class:'time'}).text(date[1][i].time).appendTo(div);

					// 评论	
					if(date[1][i].comment.length){

						var length=date[1][i].comment.length;
						var div=comment(i,length);
					}	
					div.appendTo(mian);	
					//查看
					if(length>3){

						var p=look(length);
						p.appendTo(mian);
					}
					
			section2.appendTo($('#main'));			
		}

		// 图片区域渲染
		function pic(i,div,length){
			var sharephoto=$('<div>').attr({class:'share-photo'}).appendTo(div);
			var ul=$('<ul>').attr({class:'clear'}).appendTo(sharephoto);
			for (var j = 0; j < length; j++) {
				var li=$('<li>').appendTo(ul);
				if(length==1){
					$('<img>').attr({src:'img/'+date[1][i].sharepic[j],width:'172px',height:'172px'}).appendTo(li);
				}
				if(length==2||length==4){
					$('<img>').attr({src:'img/'+date[1][i].sharepic[j],width:'134px',height:'134px'}).appendTo(li);
				}
				if(length==3||length>=5){
					if(length>=9){
						length=9
					}	
					$('<img>').attr({src:'img/'+date[1][i].sharepic[j],width:'88px',height:'88px'}).appendTo(li);
				}
			}	
		}	
		// 分享文章区域渲染
		function article(i,div){
			var article=$('<article>').appendTo(div);
				$('<img>').attr({src:'img/'+date[1][i].photo}).appendTo(article);
				$('<h3>').text(date[1][i].article.title).appendTo(article);
		}
		// 评论区域渲染
		function comment(i,length){
			var div=$('<div>').attr({class:'comment'});
			var ul=$('<ul>').appendTo(div);
			
			for (var j = 0; j < length; j++) {				
				if(j>=3){
					if(date[1][i].comment[j].name1){
						$('<li>').attr({class:'display'}).html('<span class="user">'+date[1][i].comment[j].name1+'</span> 回复 <span class="user">'+date[1][i].comment[j].name2+'</span>: <span>'+date[1][i].comment[j].text+'</span>').appendTo(ul)
					}else{
						$('<li>').attr({class:'display'}).html('<span class="user">'+date[1][i].comment[j].name+'</span><span>: '+date[1][i].comment[j].text+'</span>').appendTo(ul)
					}								
				}else{
					if(date[1][i].comment[j].name1){
						$('<li>').attr({class:'display'}).html('<span class="user">'+date[1][i].comment[j].name1+'</span> 回复 <span class="user">'+date[1][i].comment[j].name2+'</span>: <span>'+date[1][i].comment[j].text+'</span>').appendTo(ul)
					}else{
						$('<li>').html('<span class="user">'+date[1][i].comment[j].name+'</span><span>: '+date[1][i].comment[j].text+'</span>').appendTo(ul)
					}			
				}	
			}
			//代码还可以合并
			return div;		
		}
		//查看
		function look(length){
				var p=$('<p>').html('查看全部<span>'+length+'</span>条评论<img src="img/comment-downarrow.svg" alt="">');	
			return p;
		}
	})();
	// 图片点击跳转事件
	// 运用html5本地缓存
	(function(){
		$('.share-photo img').on("click", function(){
			var siteurl = this.src;  
		    localStorage.setItem('sitename', siteurl);
		    window.location.href = 'picshow.html';
		});

	})();
	// 评论显示隐藏
	(function(){
		$('main p').on('click',function(){
			if($(this).attr('a')=='1'){
				$(this).html('查看全部<span>'+ $(this).attr('b') +'</span>条评论 <img src="img/comment-downarrow.svg" alt="">');
				$(this).attr({a:'0'})				
			}else{
				$(this).attr({'b':$(this).find('span').text()});
				$(this).html('收起<img src="img/comment-uparrow.svg" alt=""> ');
				$(this).attr({a:'1'})
			}
			$(this).parent().find("li[class='display']").toggle();
		})

	})();	
	// 点赞设置
	(function(){	
		$('.publish').find('span:nth-of-type(1)').on('click',function(){
			
			if($(this).attr('a')=='1'){
				$(this).text(parseInt($(this).text())-1);
				$(this).attr({a:'0'})				
			}else{
				$(this).text(parseInt($(this).text())+1)
				$(this).attr({a:'1'})
			}
		})	
	})()	

})
	
