var mainDiv = document.getElementsByClassName('customTable');
console.log(mainDiv[1])
subjectTable = document.getElementsByTagName('tbody')[0];
assignmentTable = document.getElementsByTagName('tbody')[2];

subjectName = subjectTable.children[1].children[2].innerText;
console.log(subjectName)
l = assignmentTable.children.length;

chrome.storage.sync.get(['csvRows'], function(res) {
    console.log(res.csvRows)
    for(var i=0; i<l; i++) {
        var row = assignmentTable.children[i];
        var c = row.children;
        var assignment = c[1].innerText
        var deadline = c[4].innerText
        res.csvRows.push([subjectName, assignment, deadline]);
    }
    console.log(res.csvRows);
    chrome.storage.sync.set({csvRows: res.csvRows}, function() {
        console.log("updated")
    })
})

var csvRows = []
