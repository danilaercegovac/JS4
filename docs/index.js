// Берём часть после вопросительного знака
const query = window.location.search; // пример: "?123456"
const res = query.replace("?", "");
const massive = JSON.parse(res);

document.title = toString(massive.sort());


