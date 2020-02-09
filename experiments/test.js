var fs = require('fs');
var https = require('https');


fs.writeFile(__dirname + "/index.html", "<h1>HTML I	S GREAT</h1>", function(error) {
	
	if(error) {
		
		return console.log(error);
		
	}  else {
		
		return console.log("Congratulations");
	}
	
});


var myPhotoLocation = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
https.get(myPhotoLocation,function(response) {
	
	response.pipe(fs.createWriteStream(__dirname + "/pinkpicture.jpg"));
	
});

