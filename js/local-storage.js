function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      // everything except Firefox
      && (e.code === 22
        // Firefox
        || e.code === 1014
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && storage
      && storage.length !== 0
    );
  }
}

const form2 = document.querySelector('#contact-form');
const name2 = form2.elements['user-name'];
const email2 = form2.elements['user-email'];
const msg2 = document.querySelector('#msg');

function populateStorage() {
  const formData = {
    userName: name2.value,
    userEmail: email2.value,
    userMsg: msg2.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

if (storageAvailable('localStorage')) {
  name2.onchange = populateStorage;
  email2.onchange = populateStorage;
  msg2.onchange = populateStorage;

  const storageData = JSON.parse(localStorage.getItem('formData'));

  name2.value = storageData.userName;
  email2.value = storageData.userEmail;
  msg2.value = storageData.userMsg;
}
