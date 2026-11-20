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
