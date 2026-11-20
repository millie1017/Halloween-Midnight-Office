if(window.midnightEmailHandler)window.removeEventListener('message',window.midnightEmailHandler);
window.midnightEmailHandler=function(event){
 if(!event.data)return;
 if(!Array.from(document.querySelectorAll('iframe')).some(frame=>frame.contentWindow===event.source))return;
 const data=event.data,player=GetPlayer();
 if(data.type==='MIDNIGHT_EMAIL_SCORE'&&(data.score===0||data.score===10)){
  player.SetVar('EmailScore',data.score);
 }
 if(data.type==='MIDNIGHT_EMAIL_CONTINUE'&&data.score===10&&player.GetVar('EmailScore')===10){
  player.SetVar('EmailDone',true);
 }
};window.addEventListener('message',window.midnightEmailHandler);
