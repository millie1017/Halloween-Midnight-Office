if(window.midnightFinalHandler)window.removeEventListener('message',window.midnightFinalHandler);
window.midnightFinalHandler=function(event){
 const d=event.data;if(!d)return;
 if(!Array.from(document.querySelectorAll('iframe')).some(f=>f.contentWindow===event.source))return;
 const p=GetPlayer();
 if(d.type==='MIDNIGHT_FINAL_RESET'){p.SetVar('FinalQuizScore',0);p.SetVar('FinalQuizPassed',false);p.SetVar('FinalQuizDone',false);}
 if(d.type==='MIDNIGHT_FINAL_RESULT'&&Number.isInteger(d.score)&&d.score>=0&&d.score<=10){p.SetVar('FinalQuizScore',d.score);p.SetVar('FinalQuizPassed',d.score===10);}
 if(d.type==='MIDNIGHT_FINAL_CONTINUE'&&d.score===10&&p.GetVar('FinalQuizScore')===10&&p.GetVar('FinalQuizPassed')===true){p.SetVar('FinalQuizDone',true);}
};window.addEventListener('message',window.midnightFinalHandler);
