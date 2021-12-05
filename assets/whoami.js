window.onload = function () {

    'use strict';
  
    var words = [
        'person',
        'husband',
        'father',
        'hacker',
        'creator',
        'whisky drinker',
        'technical marketer',
        'IAQ obsessionist',
        'live music archivist'
    ], 
        i = 0,
        whoami = document.querySelector('#whoami');
  
    setInterval(function () {
        whoami.classList.add('fadeOut');
  
        // timeout equal to transition duration
        setTimeout(function () {
            whoami.textContent = words[ (i === words.length - 1) ? i = 0 : i += 1];
            whoami.classList.remove('fadeOut');
        }, 700);
  
    }, 2000);
};