'use strict';

chrome.storage.sync.get('color', function(data) {
	document.body.style.backgroundColor = data.color;
});
var item_actions = document.getElementsByClassName("item-action");
/*for (var i = 0; i < 2; i++) {
		var btns = item_actions[i].getElementsByTagName("button");
		if (btns.length > 0 && ! btns[0].classList.contains("shopee-button--outline")) {
			console.log(btns[0].click());
			
		}
    }*/
// Select the node that will be observed for mutations
var targetNode = document.getElementsByClassName('order')[0];

// Options for the observer (which mutations to observe)
const config = {attributes: true, childList: true, subtree: true};

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
            console.log(mutation.addedNodes, mutation.removedNodes);
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.',mutation.target, mutation.oldValue);
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

