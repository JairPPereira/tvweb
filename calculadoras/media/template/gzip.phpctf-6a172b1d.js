var modo="M";var arrdmt=16;var gto_=null;var funcs=['inv','log','fat','ln','raiz','raiz3','raizn','ex','x2','x3','exp','x10','dpf','por','pd','pf','pdif','aum','redu','lb','sen','cos','tg','cotg','sec','cosec','gpr','rpg','asen','acos','atg','acotg','asec','acsc','hip','fatorar','simp','abs','sum','angtg','ppc','cpp','r3d','r3i','as','ar','cs','cr','ps','pc','ter','nb','bpmf','bcdf','bm','bvar','va','dp','jcmontante','jc','jcvp','jcn','jci','jciam','jcima','valoravista','montante','montante2','montante3','objt','objp','obja','a1m','t1m','delta','med','medg','medh','medp','rand','mdc','mmc'];var funcsd=['dpf','fatorar','simp','ppc','cpp'];var mem='';var tem="P";var funp=[];var funpc=[];var uFunc='';var uVal=[];var trig="R";var trigm='Radianos';var ucamp='';var pmais=false;var snum='D';var snumm='';var bsindc='';function a_lk(l){window.open('/'+l,'_blank');}
function sisnum(o){switch(snum){case'H':jQuery(o).html('Dec');snum='D';snumm='';bsindc='';break;case'D':jQuery(o).html('Bin');snum='B';snumm='(Apenas o resultado em binário)';bsindc=' <sub>(2)</sub>';break;case'B':jQuery(o).html('Oct');snum='O';snumm='(Apenas o resultado em octal)';bsindc=' <sub>(8)</sub>';break;case'O':jQuery(o).html('Hex');snum='H';snumm='(Apenas o resultado em hexadecimal)';bsindc=' <sub>(16)</sub>';break;}}
function csnum(v){if(snum=='D')return v;if(isNaN(v)==true)return v;else{var m=new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F');var r='';var v1=0,v2=0,v2a='',v3=0,a='',ae='',b=0,c=0,f=0,n=false;switch(snum){case'B':f=2;break;case'O':f=8;break;case'H':f=16;break;}
n=(v<0)?true:false;v=v.toString().split('.');v[0]=v[0].replace('-','');v1=parseInt(v[0]);v2a=(v[1]==undefined)?'':v[1].split('e');v3=(v2a[1]==undefined)?0:parseInt(v2a[1]);v2=(v[1]==undefined)?0:((v3==0)?parseFloat('0.'+v[1]):parseFloat('0.'+v2a[0]));if(f==16){while(v1>0){r=m[v1%16]+r;v1=parseInt(v1/16);}
while(v2>0&&c<arrdmt){b=parseInt(v2*16);a+=m[b];v2=(v2*16)-b;c++;}}else{while(v1>0){r=(v1%f)+r;v1=parseInt(v1/f);}
while(v2>0&&c<arrdmt){b=parseInt(v2*f);a+=b.toString();v2=(v2*f)-b;c++;}}
if(v3!=0){ae='×'+f+'^'+Math.floor(v3*(Math.log(10)/Math.log(f)));}
r=(r=='')?'0':r;r=(a=='')?r:r+','+a+ae;r=(n==true)?'-'+r:r;}
return r.toString();}
function a_crr(a){var b='/assets/embed/cientifica-aj-';switch(a){case'hlp_f':b+='fin.html';break;case'hlp_t':b+='trig.html';break;case'hlp_e':b+='est.html';break;case'hlp_o':b+='out.html';break;case'hlp_q':b+='faq.html';break;}
if(jQuery('#'+a).html()=='')jQuery('#'+a).load(b);}
function chgfnl(){if(jQuery('#painelcalcdesk').is(':visible')==true)return;var e=document.getElementById('TIExp');if(e.setSelectionRange){e.readOnly=true;e.focus();e.setSelectionRange(1000,1000);setTimeout(function(){e.blur();e.readOnly=false;},1000);}else if(e.createTextRange){var t=e.createTextRange();t.collapse(true);t.moveEnd('character',1000);t.moveStart('character',1000);t.select();}}
function sepspc(v){if(/^[0-9,\.]*$/g.test(v)==false)return v;var n=v.replace(',','.');var i=n;var f=0;if(n.indexOf('.')!=-1){i=n.split('.')[0];f=n.split('.')[1];}
while(/(\d+)(\d{3})/.test(i)){i=i.replace(/(\d+)(\d{3})/,'$1'+' '+'$2');}
if(n.indexOf('.')!=-1)n=i+','+f;else n=i;return n;}
function a_mf(){if(pmais==false){jQuery('#amaisfc').load('/assets/embed/mais_c.html',{a:'a'});pmais=true;}}
function ultimofield(n){ucamp=n;}
function ipi(n){if(ucamp==''){jQuery('#'+n+'_0').val(jQuery('#'+n+'_0').val()+'π');jQuery('#'+n+'_0').focus();}else{jQuery('#'+ucamp).val(jQuery('#'+ucamp).val()+'π');jQuery('#'+ucamp).focus();}}
function immra(n){if(ucamp==''){if(jQuery('#'+n+'_0').val()=='')jQuery('#'+n+'_0').val(mem);else jQuery('#'+n+'_0').val(jQuery('#'+n+'_0').val()+' '+mem);jQuery('#'+n+'_0').focus();}
else{if(jQuery('#'+ucamp).val()=='')jQuery('#'+ucamp).val(mem);else jQuery('#'+ucamp).val(jQuery('#'+ucamp).val()+' '+mem);jQuery('#'+ucamp).focus();}}
function ivisor(n){if(ucamp==''){if(jQuery('#'+n+'_0').val()=='')jQuery('#'+n+'_0').val(jQuery('#TIExp').val());else jQuery('#'+n+'_0').val(jQuery('#'+n+'_0').val()+' '+jQuery('#TIExp').val());jQuery('#'+n+'_0').focus();}else{if(jQuery('#'+ucamp).val()=='')jQuery('#'+ucamp).val(jQuery('#TIExp').val());else jQuery('#'+ucamp).val(jQuery('#'+ucamp).val()+' '+jQuery('#TIExp').val());jQuery('#'+ucamp).focus();}}
function mtrig(o){switch(trig){case'R':jQuery(o).html('Graus');trig='G';trigm='Graus';break;case'G':jQuery(o).html('Grad');trig='A';trigm='Grados';break;case'A':jQuery(o).html('Rad');trig='R';trigm='Radianos';break;}}
function msum(){calc(jQuery('#TIExp').val()+'+'+mem);}
function msub(){calc(jQuery('#TIExp').val()+'-'+mem);}
function limpa(){jQuery('#TIExp').val('');jQuery('#LBSubResu').html('');uFunc='';uVal=[];jQuery('#painelConv').html('&nbsp;');}
function calc_en(e,f){var ev=e||window.event;var k=ev.keyCode||ev.which;if(k==13){if(f==undefined)calc();else eval(f+'();');}}
function tmp_msg(t){jQuery('#LBSubResu').html('Insira um valor');if(jQuery('#painelcalcdesk').is(':visible')==true){var e=document.querySelector('#LBSubResu');if(e.getBoundingClientRect().top<0){jQuery('html, body').animate({scrollTop:jQuery("#TIExp").offset().top},1000);}}else{if(t!='')jQuery('#avs_cmp').html(t);jQuery('#avs_dv_cp').show();setTimeout(function(){jQuery('#avs_dv_cp').hide();jQuery('#avs_cmp').html('');},2000);}
setTimeout(function(){jQuery('#LBSubResu').html('');},2500);}
function pcalc(op,id,v,s){var x=(v=='d')?'':'m';switch(modo){case"A":var i=parseInt(id.replace('b',''));var r=assprf.replace(/_n_/g,i);if(jQuery('#'+x+id).find('div').length==0)jQuery('#'+x+id).append("<div id='"+x+'dp'+id+"' class='uk-dropdown dpdw_' onclick='event.stopPropagation()' style='left:"+s+"'></div>");jQuery('#'+x+'dp'+id).html(r+abtns[i]).promise().done(function(){setTimeout(function(){jQuery('#cx'+i+'_0').focus();},500);});break;case"C":if(uFunc!=''&&uFunc!=op)lmpt();if(jQuery('#TIExp').val()==''){var t=jQuery('#'+x+id).attr('data-pr');t=(t==undefined)?'':t;tmp_msg(t);}else{calc_c(op);chgfnl();}
break;case"M":var i=parseInt(id.replace('b',''));if(abtns[i]!=null){var r=assprf.replace(/_n_/g,i);if(jQuery('#'+x+id).find('div').length==0)jQuery('#'+x+id).append("<div id='"+x+'dp'+id+"' class='uk-dropdown dpdw_' onclick='event.stopPropagation()' style='left:"+s+"'></div>");jQuery('#'+x+'dp'+id).html(r+abtns[i]).promise().done(function(){setTimeout(function(){jQuery('#cx'+i+'_0').focus();},500);});}else{if(uFunc!=''&&uFunc!=op)lmpt();if(jQuery('#TIExp').val()==''){var t=jQuery('#'+x+id).attr('data-pr');t=(t==undefined)?'':t;tmp_msg(t);}else{calc_c(op);chgfnl();}}
break;}}
function cp_exp(v){var t=jQuery('#TIExp').val();v=v.replace(/\|_\|/g,'"');if(t!='')jQuery('#TIExp').val(t+' '+v);else jQuery('#TIExp').val(v);if(jQuery('#painelcalcdesk').is(':visible')==true)jQuery('#TIExp').focus();}
function cp_men(v){var n=v.replace(',','.');n=parseFloat(n).toFixed(arrdmt);n=parseFloat(n);mem=(isNaN(n))?'':frmres(n);}
function cp_ant(o){jQuery(o).find('.Anotacao').focus();}
function fc_res(o){jQuery(o).remove();}
function ctrlc(v,t){var c;if(t=='v'){c=jQuery(v).parent().parent().children().eq(1).find('input');c=c[0];c.select();c.setSelectionRange(0,99999);document.execCommand("copy");}else{c=jQuery(v).parent().parent().children().eq(1).find('div');c=c[0];var r,s;if(document.createRange){r=document.createRange();r.selectNode(c)
s=window.getSelection();s.removeAllRanges();s.addRange(r);document.execCommand('copy');s.removeAllRanges();}else{r=document.body.createTextRange();r.moveToElementText(c);r.select();document.execCommand('copy');}}}
function ihist(exp,val,rot,desc){var r;desc=(desc==undefined)?'':desc;var exp2=exp.replace(/\"/g,'|_|');r="<div class='resultado'>"+"<table class='tbresultado'>"+" <tr>"+"  <td style='width:35px'><a class='uk-icon-justify uk-icon-copy' onclick=\"ctrlc(this,'v')\" title='Copiar' style='position:relative;top:1px'></a> <a style='position:relative;top:1px' class='uk-icon-justify uk-icon-level-up' title='Copiar expressão para o campo' onclick=\"cp_exp('"+exp2+"')\"></a> </td> "+" <td title='"+exp+"'> <table class='tbresusubtb'><tr><td style='width:40%'><input type='text' value='"+exp+"' onkeypress='return false'></text></td><td class='uk-hidden-small italico' style='width:60%'>"+((rot)?rot+' ':'')+snumm+"</td></tr></table> </td> "+"  <td style='width:70px;text-align:right'>"+"   <a class='uk-icon-justify uk-icon-hdd-o' title='Copiar resultado para memória' onclick=\"cp_men('"+val+"')\"></a> "+"   <a class='uk-icon-justify uk-icon-edit' title='Anotação' onclick='cp_ant(this.parentNode.parentNode.parentNode)'></a> "+"   <a class='uk-icon-justify uk-icon-remove' title='Remover este resultado' onclick='fc_res(this.parentNode.parentNode.parentNode.parentNode.parentNode)'></a> "+"  </td>"+" </tr>"+" <tr>"+"  <td><a class='uk-icon-justify uk-icon-copy' onclick=\"ctrlc(this,'h')\" title='Copiar' style='position:relative;top:1px'></a> <a style='position:relative;top:1px' class='uk-icon-justify uk-icon-level-up' style='cursor:pointer' title='Copiar resultado para o campo' onclick=\"cp_exp('"+val+"')\"></a> </td> "+"  <td colspan='2'><table style='width:100%'><tr><td style='width:60%'> <div class='resu2l1i'>"+sepspc(val)+bsindc+"</div> </td><td style='width:40%'> <input type='text' class='Anotacao' value='"+desc+"'> </td></tr></table></td> "+" </tr>"+"</table>"+"</div>";jQuery('#result').prepend(r);jQuery('#LBSubResu').html('');}
function replexp(o){var a=[/⁰/g,/¹/g,/²/g,/³/g,/⁴/g,/⁵/g,/⁶/g,/⁷/g,/⁸/g,/⁹/g];var b=['^0','^1','^2','^3','^4','^5','^6','^7','^8','^9'];var v=(o==undefined)?jQuery('#TIExp').val():jQuery(o).val();for(var i=0;i<10;i++){v=v.replace(a[i],b[i]);}
if(o==undefined)jQuery('#TIExp').val(v);else jQuery(o).val(v);}
function parsear(val){val=val.replace(/ /gi,'');for(var i=0;i<funcs.length;i++){val=val.replace(new RegExp('([0-9]|\\)|π)('+funcs[i]+')','gi'),'$1*$2');}
var a=[/\)\(/gi,/([0-9]|π)\(/gi,/\)([0-9]|π)/gi,/,/g,/;/g,/×/g,/%([A-Z0-9\(])/gi,/%/g,/([0-9])π/gi,/π([0-9]|-)/gi,/π|pi/gi,/rest/gi,/\^/g,/z3\*\(/gi,/x2\*\(/gi,/x3\*\(/gi,/x10\*\(/gi,/e2\*\(/gi,/e3\*\(/gi];var b=[')*(','$1*(',')*$1','.',',','*','%*$1','/100','$1*π','π*$1',Math.PI,'%','**','z3(','x2(','x3(','x10(','e2(','e3('];for(var i=0;i<19;i++){val=val.replace(a[i],b[i]);}
return val;}
function v_arrd(v){var r=arrdmt,tt=0,p;if(r!=16){p=((v+'').indexOf('.')>=0)?(v+'').split('.')[1]:v;switch(r){case 1:tt=0.1;break;case 2:tt=0.01;break;case 3:tt=0.001;break;case 4:tt=0.0001;break;case 5:tt=0.00001;break;}
if(parseFloat('0.'+p)<tt&&parseFloat('0.'+p)>=0.0000000000000001)r=16;else if(parseFloat('0.'+p)<0.0000000000000001)r=100;}else{if(Math.abs(v)<0.0000000000000001)r=100;}
return r;}
function v_trat(v){var s,r;r=v;s=(v+'').split('.');if(s[1]!=undefined){if(s[1].substring(0,11)=='00000000000'&&s[1].indexOf('e')==-1)r=s[0];else if(s[1].substring(0,11)=='99999999999'&&s[1].indexOf('e')==-1)r=(r<0)?parseInt(s[0])-1:parseInt(s[0])+1;else if(s[1].indexOf('000000000')!=-1&&s[1].indexOf('e')==-1)r=s[0]+'.'+s[1].substring(0,s[1].indexOf('000000000'));else if(s[1].indexOf('999999999')!=-1&&s[1].indexOf('e')==-1){a=s[1].substring(0,s[1].indexOf('999999999'));b=parseInt(a.substring(a.length-1,a.length))+1;r=s[0]+'.'+a.substring(0,a.length-1)+b;}}
return r;}
function v_ns(n){try{return(n>=-9007199254740991&&n<=9007199254740991)?n:n.toExponential();}catch(e){return n;}}
function frmres(val){return(val+'').replace('.',',');}
function calc_d(e_,rt){var r,f=parsear(e_);var asn=snum,asm=snumm,abs=bsindc;snum='D';snumm='',bsindc='';try{r=eval(f);r=v_trat(r);r=v_ns(r);}catch(e){r='Erro';}
r=frmres(r);ihist(e_,csnum(r),rt);jQuery('#LBSubResu').html('');jQuery('#TIExp').val(r);if(jQuery('#painelcalcdesk').is(':visible')==true)jQuery('#TIExp').focus();snum=asn;snumm=asm;bsindc=abs;}
function calc_s(f){var r,a;try{r=eval(f);a=v_arrd(r);r=v_trat(r);r=v_ns(r);if(a==100){r=parseFloat(r);}else{r=parseFloat(r).toFixed(a);r=parseFloat(r);}}catch(e){r='-';}
return r;}
function calc_i(){var f,r;f=parsear(jQuery('#TIExp').val());for(var l=0;l<funcsd.length;l++){if(f.indexOf(funcsd[l])!=-1){jQuery('#LBSubResu').html('');return;}}
r=calc_s(f);if(r=='-'||f==r||isNaN(r))jQuery('#LBSubResu').html('');else{if(snum!='R'){r=csnum(r);jQuery('#LBSubResu').html(frmres(r)+' '+snumm.replace('Apenas o resultado em ',''));}else jQuery('#LBSubResu').html(frmres(r));}}
function calc_pa(v,p){var m=new RegExp(p+"\\([0-9A-Z,.;\"']+\\)",'gi');var e=v.match(m);for(var i=0;i<e.length;i++){var p_,r,z=e[i];try{r=eval(z);r=v_trat(r);r=v_ns(r);}catch(er){r='Erro';}
r=frmres(r);p_=e[i].replace(/\(/g,'\\(');p_=p_.replace(/\)/g,'\\)');v=v.replace(new RegExp(p_,'g'),r);}
return v;}
function calc(e_,rt){var v,f,r,vv;v=(e_!=undefined)?e_:jQuery('#TIExp').val();if(v=='')return;if(uFunc!=''){calc_c(uFunc);return;}
f=parsear(v);vv=f;for(var l=0;l<funcsd.length;l++){if(f.indexOf(funcsd[l])!=-1){vv=calc_pa(f,funcsd[l]);}}
if(vv!=f){vv=frmres(vv);ihist(v,csnum(vv),rt);jQuery('#LBSubResu').html('');jQuery('#TIExp').val(vv);if(jQuery('#painelcalcdesk').is(':visible')==true)jQuery('#TIExp').focus();return;}
r=calc_s(f);r=csnum(r);r=frmres(r);ihist(v,r,rt);jQuery('#LBSubResu').html('');jQuery('#TIExp').val(r);if(jQuery('#painelcalcdesk').is(':visible')==true)jQuery('#TIExp').focus();avssn();}
function avssn(){if(snum!='D'){setTimeout(function(){jQuery('#LBSubResu').html(snumm.replace('Apenas o resultado em ',''));setTimeout(function(){jQuery('#LBSubResu').html('');},1000);},1000);}}
function c_ist(){if(gto_!=null)clearTimeout(gto_);gto_=setTimeout(calc_i,900);}
function ivlr(v){jQuery('#TIExp').val(jQuery('#TIExp').val()+v);if(jQuery('#painelcalcdesk').is(':visible')==true){jQuery('#TIExp').focus();}else chgfnl();c_ist();}
function carregado(url){var v=false;jQuery('script').each(function(){if(this.src.indexOf(url)>=0)v=true;});return v;}
function gvck(nome,valor){jQuery.cookie(nome,valor,{expires:730});}
function rjpt(arq){var scp=document.getElementsByTagName('script');for(var i=0;i<scp.length;i++){if(scp[i]&&scp[i].getAttribute('src')!=null&&scp[i].getAttribute('src').indexOf(arq)!=-1)scp[i].parentNode.removeChild(scp[i]);}}
function mudamodo(md){jQuery('.trmais').remove();switch(md){case'A':jQuery('#painelConv').hide('fast');if(carregado("/assets/calc/ctf-a.min.js")==false){var scp=document.createElement('script');scp.src="/assets/calc/ctf-a.min.js";document.getElementsByTagName('head')[0].appendChild(scp);}
rjpt('ctf-c.min.js');rjpt('ctf-m.min.js');break;case'C':jQuery('#painelConv').show('fast');if(carregado("/assets/calc/ctf-c.min.js")==false){var scp=document.createElement('script');scp.src="/assets/calc/ctf-c.min.js";document.getElementsByTagName('head')[0].appendChild(scp);}
rjpt('ctf-a.min.js');rjpt('ctf-m.min.js');break;case'M':jQuery('#painelConv').hide('fast');if(carregado("/assets/calc/ctf-m.min.js")==false){var scp=document.createElement('script');scp.src="/assets/calc/ctf-m.min.js";document.getElementsByTagName('head')[0].appendChild(scp);}
rjpt('ctf-a.min.js');rjpt('ctf-c.min.js');break;}}
function hsave(){var b='';jQuery('.tbresultado').each(function(){jQuery(this).find('[type=text]').each(function(){b+=this.value+'_|_';});b+=jQuery(this).find('.resu2l1i').text()+'_|_'+jQuery(this).find('.italico').text()+'|-|';});gvck('his_c',b);}
function hclear(){jQuery.removeCookie('his_c');jQuery('#result').html('');}
function msave(){var n=(jQuery('#TIExp').val()).replace(',','.');n=parseFloat(n).toFixed(arrdmt);n=parseFloat(n);mem=(isNaN(n))?'':frmres(n);}
function mclear(){mem="";}
function tema(t){switch(t){case'P':jQuery('.ctrig').removeClass('bt5l').removeClass('bt5a').addClass('bt5');jQuery('.cfin').removeClass('bt3l').removeClass('bt3a').addClass('bt3');jQuery('.cest').removeClass('bt4l').removeClass('bt4a').addClass('bt4');jQuery('.ccom').removeClass('bt2l').addClass('bt2');jQuery('.cnum').removeClass('bt1l').addClass('bt1');jQuery('.quadt').removeClass('bt5l').removeClass('bt5a').addClass('bt5');jQuery('.quadf').removeClass('bt3l').removeClass('bt3a').addClass('bt3');jQuery('.quade').removeClass('bt4l').removeClass('bt4a').addClass('bt4');break;case'A':jQuery('.ctrig').removeClass('bt5').removeClass('bt5l').addClass('bt5a');jQuery('.cfin').removeClass('bt3').removeClass('bt3l').addClass('bt3a');jQuery('.cest').removeClass('bt4').removeClass('bt4l').addClass('bt4a');jQuery('.ccom').removeClass('bt2l').addClass('bt2');jQuery('.cnum').removeClass('bt1l').addClass('bt1');jQuery('.quadt').removeClass('bt5').removeClass('bt5l').addClass('bt5a');jQuery('.quadf').removeClass('bt3').removeClass('bt3l').addClass('bt3a');jQuery('.quade').removeClass('bt4').removeClass('bt4l').addClass('bt4a');break;case'L':jQuery('.ctrig').removeClass('bt5').removeClass('bt5a').addClass('bt5l');jQuery('.cfin').removeClass('bt3').removeClass('bt3a').addClass('bt3l');jQuery('.cest').removeClass('bt4').removeClass('bt4a').addClass('bt4l');jQuery('.ccom').removeClass('bt2').addClass('bt2l');jQuery('.cnum').removeClass('bt1').addClass('bt1l');jQuery('.quadt').removeClass('bt5').removeClass('bt5a').addClass('bt5l');jQuery('.quadf').removeClass('bt3').removeClass('bt3a').addClass('bt3l');jQuery('.quade').removeClass('bt4').removeClass('bt4a').addClass('bt4l');break;}
gvck('tem_c',t);}
function meesc(n){switch(n){case 1:modo='A';gvck('mod_c',modo);mudamodo('A');break;case 2:modo='C';gvck('mod_c',modo);mudamodo('C');break;case 3:modo='M';gvck('mod_c',modo);mudamodo('M');break;case 4:arrdmt=16;jQuery.removeCookie("arr_c");break;case 5:arrdmt=1;gvck('arr_c',1);break;case 6:arrdmt=2;gvck('arr_c',2);break;case 7:arrdmt=3;gvck('arr_c',3);break;case 8:arrdmt=4;gvck('arr_c',4);break;case 9:arrdmt=5;gvck('arr_c',5);break;case 10:var v=jQuery('#TIExp').val();ivlr(((v=='')?'':' ')+Math.PI.toFixed(arrdmt));break;case 11:var v=jQuery('#TIExp').val();ivlr(((v=='')?'':' ')+Math.E.toFixed(arrdmt));break;case 12:var v=jQuery('#TIExp').val();ivlr(((v=='')?'':' ')+(1.61803398875).toFixed(arrdmt));break;case 13:var v=jQuery('#TIExp').val();ivlr(((v=='')?'':' ')+Math.sqrt(2).toFixed(arrdmt));break;case 14:var v=jQuery('#TIExp').val();ivlr(((v=='')?'':' ')+(0.57721566490153286060651209008240243).toFixed(arrdmt));break;case 15:jQuery('#aexpc').load('/assets/embed/exp_salvas_c.html',{a:'a'},function(){popexpslv()});break;case 16:if(jQuery('#TIExp').val()!=''){var val=(jQuery.cookie('fun_c')==undefined)?jQuery('#TIExp').val():decodeURIComponent(jQuery.cookie('fun_c'))+'_|_'+jQuery('#TIExp').val();gvck('fun_c',val);}
break;case 19:var m='Memória vazia!';if(mem!='')m=(mem+'').replace('.',',');jQuery('#amemc').html(m);break;case 20:if(mem!=''){var m=(mem+'').replace('.',',');var vl=jQuery('#TIExp').val();if(vl=='')jQuery('#TIExp').val(m);else jQuery('#TIExp').val(vl+' '+m);}
break;case 23:tema('P');break;case 24:tema('A');break;case 25:tema('L');break;case 26:jQuery('#acotmc').load('/cron/cotacao_lightbox_n.html',{a:'a'});break;case 27:jQuery('#afuncsc').load('/assets/embed/cientifica-fp.html',{a:'a'},function(){tbduncprogset()});break;case 28:jQuery('#acotbc').load('/cron/bolsa_lightbox_n.html',{a:'a'});break;case 29:jQuery('#aindc').load('/assets/embed/indice-lightbox.html');break;case 30:jQuery('#aconstc').load('/assets/embed/consts.html');break;case 31:jQuery('#atablac').load('/assets/embed/tb_c.html');break;}}
function denovo(t){var v=0,n=(t=='d')?'basica-desk':'basica-mob';for(var i=0;i<5;i++){jQuery('#painelcalcdesk').load('/assets/embed/'+n+'.html',function(r,s){if(s!='error')v=1;});if(v==1)break;}}
function loadbtns(){if(jQuery('#painelcalcdesk').is(':visible')==true){if(jQuery('#painelcalcdesk').html()=='')jQuery('#painelcalcdesk').load('/assets/embed/cientifica-desk.html');}else{if(jQuery('#painelcalcmobi').html()=='')jQuery('#painelcalcmobi').load('/assets/embed/cientifica-mob.html');}}
jQuery(document).ready(function(){jQuery('#TIExp').val('');if(jQuery('#painelcalcdesk').is(':visible')==true){if(jQuery('#painelcalcdesk').html()==''){jQuery('#painelcalcdesk').load('/assets/embed/cientifica-desk.html',function(r,s){if(s=='error')denovo('d');});}
jQuery('#TIExp').focus();}else{if(jQuery('#painelcalcmobi').html()==''){jQuery('#painelcalcmobi').load('/assets/embed/cientifica-mob.html',function(r,s){if(s=='error')denovo('m');});}}
if(jQuery.cookie('mod_c')!=undefined){modo=jQuery.cookie('mod_c');}else{if(jQuery('#painelcalcdesk').is(':visible')==false)modo='C';else modo='M';}
mudamodo(modo);if(jQuery.cookie('arr_c')!=undefined)arrdmt=parseInt(jQuery.cookie('arr_c'));if(jQuery.cookie('his_c')!=undefined){var v,cb=jQuery.cookie('his_c').split('|-|');cb=cb.reverse();for(var i=0;i<cb.length;i++){v=cb[i].split('_|_');if(v[0]!='')ihist(v[0],v[2],v[3],v[1]);}}
if(jQuery.cookie('tem_c')!=undefined){tem=jQuery.cookie('tem_c');tema(tem);}
if(jQuery.cookie('funp_c')!=undefined){if(jQuery.cookie('funp_c')!=''){var p,vv,re='',fp=jQuery.cookie('funp_c').split('|-|');for(var i=0;i<fp.length;i++){p=fp[i].split('|_|');funp.push(p[2]);funpc.push(p[0]+'|_|'+p[1]);}
for(var j=0;j<funpc.length;j++){vv=funpc[j].split('|_|');if(vv[0]=='')continue;re+=" function "+vv[0].replace(';',',')+" { return "+vv[1]+"; }; ";}
jQuery('#funcoesdin').html('<script>'+re+'<\/script>');}else{jQuery.removeCookie('funp_c');}}
window.addEventListener("resize",loadbtns);});function cmt(val){switch(trig){case"G":val=val*Math.PI/180;break;case"A":val=val*Math.PI/200;break;}
return val;}
function rpgd(x){return(x*200)/Math.PI;}
function inv(x){return(x!=0)?Math.pow(x,-1):'NaN';}
function log(a,b){return Math.log(a)/Math.log(b);}
function fat(x){if(x<0)return'NaN';var r=1;for(var c=1;c<=x;c++){r=r*c;}
return r;}
function ln(x){return Math.log(x)/Math.log(Math.E);}
function raiz(v){return Math.sqrt(v);}
function raiz3(a){if(a>=0)return Math.pow(a,1/3);else return-1*Math.pow(-1*a,1/3);}
function raizn(a,b){if(a>=0)return Math.pow(a,1/b);else{if(b%2==0)return Math.pow(a,1/b);else return-1*Math.pow(-1*a,1/b);}}
function ex(x){return Math.pow(Math.E,x);}
function x2(v){return Math.pow(v,2);}
function x3(v){return Math.pow(v,3);}
function exp(a,b){return Math.pow(a,b);}
function x10(x){return Math.pow(10,x);}
function dpf(x){var p,a,b,r;p=(x+'').split('.');a=p[0];b=p[1];r=(b==undefined||Math.pow(10,b.length)==Infinity)?'Erro':simp(a+''+b,Math.pow(10,b.length));return(r=='NaN/NaN')?'NaN':r;}
function por(i,f){return(f/i)*100;}
function pd(p,v){return v/(1-(p/100));}
function pf(p,v){return v*(p/100);}
function pdif(x,y){return((y/x)-1)*100;}
function aum(i,f){return(f/i-1)*100;}
function redu(i,f){return(f/i-1)*-100;}
function lb(x){return Math.log(x)/Math.log(2);}
function sen(a){return(Math.sin(cmt(a))).toFixed(15);}
function cos(a){return(Math.cos(cmt(a))).toFixed(15);}
function tg(a){var c,v;c=(Math.cos(cmt(a))).toFixed(15);if(c==0)return'NaN';else{v=Math.tan(cmt(a));return v.toFixed(15);}}
function cotg(x){var c,v;c=(Math.tan(cmt(x))).toFixed(15);if(c==0)return'NaN';else{v=1/c;return v.toFixed(15);}}
function sec(x){var c,v;c=(Math.cos(cmt(x))).toFixed(15);if(c==0)return'NaN';else{v=1/c;return v.toFixed(15);}}
function cosec(x){var c,v;c=(Math.sin(cmt(x))).toFixed(15);if(c==0)return'NaN';else{v=1/c;return v.toFixed(15);}}
function gpr(x){return v_trat(x*(Math.PI/180));}
function rpg(x){return v_trat(x*(180/Math.PI));}
function asen(x){var re=0;switch(trig){case"R":re=Math.asin(x);break;case"G":re=rpg(Math.asin(x));break;case"A":re=rpgd(Math.asin(x));break;}
return re;}
function acos(x){var re=0;switch(trig){case"R":re=Math.acos(x);break;case"G":re=rpg(Math.acos(x));break;case"A":re=rpgd(Math.acos(x));break;}
return re;}
function atg(x){var re=0;switch(trig){case"R":re=Math.atan(x);break;case"G":re=rpg(Math.atan(x));break;case"A":re=rpgd(Math.atan(x));break;}
return re;}
function acotg(x){var re=0;switch(trig){case"R":re=Math.PI/2-Math.atan(x);break;case"G":re=rpg(Math.PI/2-Math.atan(x));break;case"A":re=rpgd(Math.PI/2-Math.atan(x));break;}
return re;}
function asec(x){var re=0;switch(trig){case"R":re=Math.acos(1/x);break;case"G":re=rpg(Math.acos(1/x));break;case"A":re=rpgd(Math.acos(1/x));break;}
return re;}
function acsc(x){var re=0;switch(trig){case"R":re=Math.asin(1/x);break;case"G":re=rpg(Math.asin(1/x));break;case"A":re=rpgd(Math.asin(1/x));break;}
return re;}
function hip(x,y){return Math.sqrt(Math.pow(x,2)+Math.pow(y,2));}
function fatorar(n){var partes='';if(/^\d{0,}$/.test(n)==false)return'NaN';while(n>1){for(var i=2;i<=n;i++){if(n%i)continue;partes+='*'+i;n=n/i;break;}}
return partes.substring(1);}
function simp(n,d){var m=mdc(n+','+d);return(n/m)+'/'+(d/m);}
function abs(x){var a=(x+'').replace('-','');return parseFloat(a);}
function sum(f,n,N){var r=0,e=parsear(f);e=e.replace(/([0-9])(x)/gi,'$1*$2');e=e.replace(/(x)([0-9])/gi,'$1*$2');for(var c=n;c<=N;c++){r+=eval(e.replace(/x/gi,c));}
return r;}
function angtg(x,y){var re=0;switch(trig){case'R':re=Math.atan2(y,x);break;case'G':re=rpg(Math.atan2(y,x));break;case'A':re=rpgd(Math.atan2(y,x));break;}return re;}
function ppc(r,o){var x=r*Math.cos(cmt(o));var y=r*Math.sin(cmt(o));x=v_trat(x);x=v_ns(x);y=v_trat(y);y=v_ns(y);var re="("+x+"; "+y+")";return re.replace(/\./g,',');}
function cpp(x,y){var r=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));var o=angtg(x,y);var c='';r=v_trat(r);r=v_ns(r);o=v_trat(o);o=v_ns(o);switch(trig){case'R':c=' rad';break;case'G':c='°';break;case'A':c=' grado';break;}
var re="("+r+"; "+o+c+")";return re.replace(/\./g,',');}
function r3d(a,b,c){return(c*b)/a;}
function r3i(a,b,c){return(a*b)/c;}
function as(n,r){return fat(n)/fat(n-r);}
function ar(n,r){return exp(n,r);}
function cs(n,r){return fat(n)/(fat(n-r)*fat(r));}
function cr(n,r){return fat(n+r-1)/(fat(r)*fat(n-1));}
function ps(n){return fat(n);}
function pc(n){return fat(n-1);}
function ter(x){return(Math.pow(x,2)+x)/2;}
function nb(n,k){if(Number.isNaN(n)||Number.isNaN(k)){return NaN;}
if(k<0||k>n){return 0}
if(k===0||k===n){return 1}
if(k===1||k===n-1){return n}
var r=n;for(let i=2;i<=k;i++){r*=(n-i+1)/i;}
return r;}
function bpmf(n,k,p){return nb(n,k)*(Math.pow((p/100),k))*(Math.pow(1-(p/100),(n-k)));}
function bcdf(n,m,p){var r=0;for(var i=0;i<=m;i++){r+=nb(n,i)*(Math.pow((p/100),i))*(Math.pow(1-(p/100),(n-i)));}
return r;}
function bm(n,p){return n*(p/100);}
function bvar(n,p){return n*(p/100)*(1-(p/100));}
function va(ar){ar=ar.split(',');var t=0,m=0,v=0;for(var i=0;i<ar.length;i++){t+=eval(ar[i]);}
m=t/ar.length;for(var i=0;i<ar.length;i++){v+=Math.pow(eval(ar[i])-m,2);}
return v/ar.length;}
function dp(ar){return Math.sqrt(va(ar));}
function jcmontante(p,i,n){return p*Math.pow(1+(i/100),n);}
function jc(p,i,n){return jcmontante(p,i,n)-p;}
function jcvp(m,i,n){return m/(Math.pow(1+(i/100),n));}
function jcn(p,i,m){return Math.log(m/p)/Math.log(1+(i/100));}
function jci(p,n,m){return(Math.pow(m/p,1/n)-1)*100;}
function jciam(ia){return(Math.pow(1+ia/100,1/12)-1)*100;}
function jcima(im){return(Math.pow(1+im/100,12)-1)*100;}
function valoravista(r,i,n){return r*((Math.pow(1+(i/100),n)-1)/((i/100)*Math.pow(1+i/100,n)));}
function montante(vp,r,i,n){return jcmontante(vp,i,n)+r*((Math.pow(1+(i/100),n)-1)/(i/100));}
function montante2(vp,r,i,n,s){return jcmontante(vp,i,n)+r*((Math.pow(1+(i/100),n)-1)/(i/100))-s*((Math.pow(1+(i/100),n)-1)/(i/100));}
function montante3(vp,r,ii,n,s,f){var i=ii-f;return montante2(vp,r,i,n,s,f);}
function objt(o,vp,r,i){return Math.log(((i/100)*o+r)/(r+(i/100)*vp))/Math.log(1+(i/100));}
function objp(o,vp,n,i){return((i/100)*o-(i/100)*vp*Math.pow(1+(i/100),n))/(Math.pow(1+(i/100),n)-1);}
function obja(o,t,p,i){return(o*(i/100)-p*(Math.pow(1+(i/100),t)-1))/((i/100)*Math.pow(1+(i/100),t));}
function a1m(vp,n,i){return((i/100)*1000000-(i/100)*vp*Math.pow(1+(i/100),n))/(Math.pow(1+(i/100),n)-1);}
function t1m(vp,r,i){return Math.log(((i/100)*1000000+r)/(r+(i/100)*vp))/Math.log(1+(i/100));}
function delta(a,b,c){return Math.pow(b,2)-4*a*c;}
function med(ar){ar=ar.split(',');var tot=0;for(var i=0;i<ar.length;i++){tot+=eval(ar[i]);}
return tot/ar.length;}
function medg(ar){ar=ar.split(',');var tot=1;for(var i=0;i<ar.length;i++){tot*=eval(ar[i]);}
return Math.pow(tot,1/ar.length);}
function medh(ar){ar=ar.split(',');var tot=0;for(var i=0;i<ar.length;i++){tot+=1/eval(ar[i]);}
return ar.length/tot;}
function medp(v,p){var t=0,c=0;var a=v.split(',');var b=p.split(',');if(a.length!=b.length)return'NaN';for(var i=0;i<a.length;i++){t+=eval(a[i])*eval(b[i]);c+=parseFloat(eval(b[i]));}
return t/c;}
function rand(min,max){return Math.floor(Math.random()*(max-min))+min;}
function mdc(ar){var c,comm,cont,fat,ver,veri_,d,verif_,veri,verif,resu,fica,cc=0;ar=ar.split(',');fica=false;for(var i=0;i<ar.length;i++){if(parseInt(eval(ar[i]))<=0)fica=true;}
if(fica==true)return'NaN';c=2;comm=new Array();cont=true;fat=new Array();ver=false;while(cont&&cc<600000){veri_=true;for(var i=0;i<ar.length;i++){d=parseInt(eval(ar[i]))%c;if(d!=0)veri_=false;}
if(veri_==true){comm.push(c);}
veri=new Array();for(var i=0;i<ar.length;i++){d=parseInt(eval(ar[i]))%c;if(d==0){ar[i]=parseInt(eval(ar[i]))/c;ver=true;}else veri_=false;veri.push(eval(ar[i]));}
if(ver)fat.push(c);verif_=false
for(var k=0;k<ar.length;k++)if(parseInt(eval(ar[k]))%c==0)verif_=true;if(verif_==false)c++;else c=2;ver=false;verif=false;for(var k=0;k<ar.length;k++)if(parseInt(eval(ar[k]))!=1)verif=true;if(verif==false)cont=false;cc++;}
resu=1;for(var i=0;i<comm.length;i++){resu=resu*parseInt(comm[i]);}
return(cont==false)?resu:'NaN';}
function mmc(ar){var c,ct,f,v,vi,d,vif_,vif,r,fica;ar=ar.split(',');fica=false;for(var i=0;i<ar.length;i++){if(parseInt(eval(ar[i]))<=0)fica=true;}
if(fica==true)return'NaN';c=2;ct=true;f=new Array();v=false;while(ct){vi=new Array();for(var i=0;i<ar.length;i++){d=parseInt(eval(ar[i]))%c;if(d==0){ar[i]=parseInt(eval(ar[i]))/c;v=true;}
vi.push(eval(ar[i]));}
if(v)f.push(c);vif_=false
for(var k=0;k<ar.length;k++)if(parseInt(eval(ar[k]))%c==0)vif_=true;if(vif_==false)c++;else c=2;v=false;vif=false;for(var k=0;k<ar.length;k++)if(parseInt(eval(ar[k]))!=1)vif=true;if(vif==false)ct=false;}
r=1;for(var i=0;i<f.length;i++){r=r*parseInt(f[i]);}
return r;}