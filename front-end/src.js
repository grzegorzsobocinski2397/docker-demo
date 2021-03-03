document.addEventListener("DOMContentLoaded", () => initApp());

/**
 * Send request for environment message from back-end.
 */
function initApp() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "http://localhost:7071/Value");
  xhr.onload = () => changeMessage(xhr.response);
  xhr.send();
}

/**
 * Update message element with environment message.
 * @param {string} message Environment message from back-end set by Docker
 */
function changeMessage(message) {
  const MESSAGE_SELECTOR = ".message";
  const messageElement = document.querySelector(MESSAGE_SELECTOR);
  messageElement.textContent = message;
}
