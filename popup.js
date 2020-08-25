let addBtn = document.getElementById('addBtn');
chrome.storage.sync.get('color', function (data) {
	addBtn.style.backgroundColor = data.color;
	addBtn.setAttribute('value', data.color);
});

addBtn.onclick = function (element) {
	let color = element.target.value;
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.executeScript(
			tabs[0].id,
			{ file: 'contentScript.js'});	
	});
};

let downloadBtn = document.getElementById('download');
downloadBtn.onclick = function (element) {
	chrome.tabs.executeScript(
		{file: 'downloadScript.js'}
	)
}