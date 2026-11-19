if(window.midnightQuizStartHandler)window.removeEventListener('message',window.midnightQuizStartHandler);
window.midnightQuizStartHandler=function(event){
 if(!event.data||event.data.type!=='MIDNIGHT_QUIZ_START')return;
 if(!Array.from(document.querySelectorAll('iframe')).some(frame=>frame.contentWindow===event.source))return;
 GetPlayer().SetVar('QuizStart',true);
};window.addEventListener('message',window.midnightQuizStartHandler);
