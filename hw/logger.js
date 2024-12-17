const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "log.txt");

/**
 * Записывает сообщение в лог-файл.
 * @param {string} message
 */
function logMessage(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;

  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error("Ошибка при записи в лог-файл:", err);
    } else {
      console.log("Лог записан:", message);
    }
  });
}
module.exports = { logMessage };
