// Using http://www.ebay.in/itm/Samsung-Galaxy-J7-Dual-Sim-Black-Color-LTE-16GB-1-Year-Manufacturer-Warranty-/282039745210?hash=item41aae0faba:g:RawAAOSwQ15XOXFZ

var brand = $('h1').text().toLowerCase();
var id;
if (brand.indexOf('samsung')>=0)
	id = "1";
else if (brand.indexOf('apple')>=0)
	id = "2";
else
	id = "3";

console.log("id "+id);

var  data= {'id': id};


chrome.runtime.sendMessage({
    method: 'POST',
    action: 'xhttp',
    url: 'http://localhost:3000/getItem',
    data: JSON.stringify(data),
}, 	
function(responseText) {
    console.log(JSON.parse(responseText));
    insertHistory(JSON.parse(responseText));
});

// Create the HTML to display the data here
function insertHistory(data){
	var div = document.getElementById('promotionsCntr');
	div.innerHTML= data;
}

