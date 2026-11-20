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
