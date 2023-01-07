export function formatTimestamp(timestamp) {
  let dateObj = new Date(timestamp);

  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  let date = dateObj.getDate();

  return `${month}/${date}/${year}`;
}

export function formatMessage(message) {
  let formattedMessage = message;

  if (formattedMessage.length > 137) {
    formattedMessage = formattedMessage.substring(0, 134) + "...";
  }
  return formattedMessage;
}
