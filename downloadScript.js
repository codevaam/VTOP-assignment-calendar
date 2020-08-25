chrome.storage.sync.get(['csvRows'], function (res) {
    const rows = res.csvRows;
    let csvContent = "data:text/csv;charset=utf-8,"
        + rows.map(e => e.join(",")).join("\n");

    var downloadLink = document.createElement("a");
    downloadLink.href = csvContent;
    downloadLink.download = "assignments.csv";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
})