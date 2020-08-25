chrome.storage.sync.get(['csvRows'], function (res) {
    const rows = res.csvRows;
    let csvContent = "data:text/csv;charset=utf-8,"
        + rows.map(e => e.join(",")).join("\n");
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
})