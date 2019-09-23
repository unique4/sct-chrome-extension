'use strict';


chrome.storage.sync.get('color', function(data) {
	document.body.style.backgroundColor = data.color;
});
var item_actions = document.getElementsByClassName("item-action");
for (var i = 0; i < 2; i++) {
		var btns = item_actions[i].getElementsByTagName("button");
		if (btns.length > 0 && ! btns[0].classList.contains("shopee-button--outline")) {
			console.log(btns[0].click());
			
		}
    }


var myFunction() {
	
}