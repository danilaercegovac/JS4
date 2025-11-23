const query = window.location.search;   // "?[5,3,1]"
const res = query.slice(1);             // "[5,3,1]"
const massive = JSON.parse(res);        // [5,3,1]

document.title = massive.sort().toString();

