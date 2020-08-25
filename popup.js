let addBtn = document.getElementById('addBtn');

addBtn.onclick = function () {
	chrome.tabs.executeScript({
		file: 'contentScript.js'
	});
};

let downloadBtn = document.getElementById('download');
downloadBtn.onclick = function () {
	chrome.tabs.executeScript({
		file: 'downloadScript.js'
	});
}