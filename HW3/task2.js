const fs = require("fs");

fs.writeFile("info.txt", "Node.js is awesome!", (err) => {
  if (err) {
    console.error("Ошибка при записи в файл:", err);
    return;
  }
  console.log("Файл info.txt успешно создан и записан.");

  fs.readFile("info.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Ошибка при чтении файла:", err);
      return;
    }
    console.log("Содержимое файла:", data);
  });
});
