var mainDiv = document.getElementsByClassName('customTable');
subjectTable = document.getElementsByTagName('tbody')[0];
assignmentTable = document.getElementsByTagName('tbody')[2];

subjectName = subjectTable.children[1].children[2].innerText;
l = assignmentTable.children.length;

chrome.storage.sync.get(['csvRows'], function(res) {
    for(var i=0; i<l; i++) {
        var row = assignmentTable.children[i];
        var c = row.children;
        var assignment = subjectName + " " + c[1].innerText;
        var deadline = c[4].innerText;
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var date = deadline.split('-');
        deadline = (months.indexOf(date[1])+1) + '/' + date[0] + '/' + date[2];
        res.csvRows.push([assignment, deadline]);
    }
    chrome.storage.sync.set({csvRows: res.csvRows}, function() {
        alert("Subject added. Add next subject or download the csv if you're done")
    })
})

var csvRows = []
