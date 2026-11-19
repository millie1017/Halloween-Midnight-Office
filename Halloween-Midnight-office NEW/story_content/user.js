window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  // Execute on the cover slide when its timeline starts.
if (window.midnightCoverHandler) window.removeEventListener('message', window.midnightCoverHandler);
window.midnightCoverHandler = function(event) {
  if (!event.data || event.data.type !== 'MIDNIGHT_COVER_START') return;
  // Accept only a message from a child frame in the current document.
  const frames = Array.from(document.querySelectorAll('iframe'));
  if (!frames.some(frame => frame.contentWindow === event.source)) return;
  GetPlayer().SetVar('CoverStart', true);
  event.source.postMessage({type:'MIDNIGHT_COVER_ACK'}, '*');
};
window.addEventListener('message', window.midnightCoverHandler);
}

window.Script2 = function()
{
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
}

window.Script3 = function()
{
  if(window.midnightDoorHandler)window.removeEventListener('message',window.midnightDoorHandler);
window.midnightDoorHandler=function(event){
 if(!event.data)return;
 if(!Array.from(document.querySelectorAll('iframe')).some(frame=>frame.contentWindow===event.source))return;
 const data=event.data,player=GetPlayer();
 if(data.type==='MIDNIGHT_DOOR_SCORE'&&(data.score===0||data.score===10)){
  player.SetVar('DoorScore',data.score);
 }
 if(data.type==='MIDNIGHT_DOOR_CONTINUE'&&data.score===10){
  const email=Number(player.GetVar('EmailScore')),door=Number(player.GetVar('DoorScore'));
  player.SetVar('TotalScore',email+door);
  if(email===10&&door===10)player.SetVar('DoorDone',true);
 }
};window.addEventListener('message',window.midnightDoorHandler);
}

window.Script4 = function()
{
  if(window.midnightQuizStartHandler)window.removeEventListener('message',window.midnightQuizStartHandler);
window.midnightQuizStartHandler=function(event){
 if(!event.data||event.data.type!=='MIDNIGHT_QUIZ_START')return;
 if(!Array.from(document.querySelectorAll('iframe')).some(frame=>frame.contentWindow===event.source))return;
 GetPlayer().SetVar('QuizStart',true);
};window.addEventListener('message',window.midnightQuizStartHandler);
}

window.Script5 = function()
{
  if(window.midnightFinalHandler)window.removeEventListener('message',window.midnightFinalHandler);
window.midnightFinalHandler=function(event){
 const d=event.data;if(!d)return;
 if(!Array.from(document.querySelectorAll('iframe')).some(f=>f.contentWindow===event.source))return;
 const p=GetPlayer();
 if(d.type==='MIDNIGHT_FINAL_RESET'){p.SetVar('FinalQuizScore',0);p.SetVar('FinalQuizPassed',false);p.SetVar('FinalQuizDone',false);}
 if(d.type==='MIDNIGHT_FINAL_RESULT'&&Number.isInteger(d.score)&&d.score>=0&&d.score<=10){p.SetVar('FinalQuizScore',d.score);p.SetVar('FinalQuizPassed',d.score===10);}
 if(d.type==='MIDNIGHT_FINAL_CONTINUE'&&d.score===10&&p.GetVar('FinalQuizScore')===10&&p.GetVar('FinalQuizPassed')===true){p.SetVar('FinalQuizDone',true);}
};window.addEventListener('message',window.midnightFinalHandler);
}

};
