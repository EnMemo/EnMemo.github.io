function checkInput()
{var b=document.form1.uin,a=document.form1.pwd;if(0==b.value.length){b.focus();return false;}if(0==a.value.length){a.focus();return false;}document.form1.submit();setTimeout(" document.form1.pwd.value = '' ",500);return false;}
function writeLoginPanel(b)
{if(!b||!b.domainlist||-1==b.domainlist.indexOf(".")){return;}var e='return checkInput()',c='<div id="divLoginpanelHor" class="bizmail_loginpanel" style="width:450px;"><div class="bizmail_LoginBox"><h3>\u004d\u0061\u0069\u006c\u0062\u006f\u0078\u0040\u0045\u006e\u004d\u0065\u006d\u006f</h3><form name="form1" action="https://en.exmail.qq.com/cgi-bin/login" target="_blank" method="post" onsubmit="'+e+'"><input type="hidden" name="firstlogin" value="false" /><input type="hidden" name="errtemplate" value="dm_loginpage" /><input type="hidden" name="aliastype" value="other" /><input type="hidden" name="dmtype" value="bizmail" /><input type="hidden" name="p" value="" /><label>\u0041\u0063\u0063\u006f\u0075\u006e\u0074:</label><input type="text" name="uin" class="text" value="" />@#domainlist#<label>&nbsp;\u0050\u0061\u0073\u0073\u0077\u006f\u0072\u0064:</label><input type="password" name="pwd" class="text" value="" /><input type="submit" class="" name="" value="\u0053\u0069\u0067\u006e\u0020\u0069\u006e" />&nbsp;<a href="https://en.exmail.qq.com/cgi-bin/readtemplate?check=false&t=bizmail_orz" target="_blank">\u0046\u006f\u0072\u0067\u006f\u0074\u0020\u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u003f</a></form></div></div>',d='<div id="divLoginpanelVer" class="bizmail_loginpanel"><div class="bizmail_LoginBox"><h3>\u004d\u0061\u0069\u006c\u0062\u006f\u0078\u0040\u0045\u006e\u004d\u0065\u006d\u006f</h3><form name="form1" action="https://en.exmail.qq.com/cgi-bin/login" target="_blank" method="post" onsubmit="'+e+'"><input type="hidden" name="firstlogin" value="false" /><input type="hidden" name="errtemplate" value="dm_loginpage" /><input type="hidden" name="aliastype" value="other" /><input type="hidden" name="dmtype" value="bizmail" /><input type="hidden" name="p" value="" /><div class="bizmail_column"><label>\u0041\u0063\u0063\u006f\u0075\u006e\u0074:</label><div class="bizmail_inputArea"><input type="text" name="uin" class="text" value="" />@#domainlist#</div></div><div class="bizmail_column"><label>\u0050\u0061\u0073\u0073\u0077\u006f\u0072\u0064:</label><div class="bizmail_inputArea"><input type="password" name="pwd" class="text" value="" /></div></div><div class="bizmail_SubmitArea"><input type="submit" class="" name="" style="width:40px;" value="\u0053\u0069\u0067\u006e\u0020\u0069\u006e" /><a href="https://en.exmail.qq.com/cgi-bin/readtemplate?check=false&t=bizmail_orz" target="_blank">\u0046\u006f\u0072\u0067\u006f\u0074\u0020\u0070\u0061\u0073\u0073\u0077\u006f\u0072\u0064\u003f</a></div></form></div></div>';var g=b.domainlist.split(";");if(g.length==1){var a='<span>#domain#</span><input type="hidden" name="domain" value="#domain#" />';var f=a.replace(/#domain#/g,g[0]);}else{var f='<select name="domain">';for(i=0;i<g.length;i++){f+='<option value="'+g[i]+'">'+g[i]+'</option>';}f+='</select>';}if(!b.mode||b.mode=="vertical"||b.mode=="both"){document.write(d.replace(/#domainlist#/g,f));}if(b.mode=="horizontal"||b.mode=="both"){document.write(c.replace(/#domainlist#/g,f));}}
