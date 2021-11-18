var video = document.getElementById("player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
    video.pause();
});


 document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
	console.log(video.playbackRate);
    
});


document.querySelector("#skip").addEventListener("click", function() {
	console.log(video.currentTime);
    video.currentTime = video.currentTime + 15;
	if (video.ended) {
		// reset playback
		video.load();
		video.play();
		// reset speed
		playbackRate = 1;
	}});


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		console.log("Unmuted");
	}
	else {
		video.muted = true;
		console.log("Muted");
	}
});


document.querySelector("#slider").addEventListener("click", function() {
	console.log(volumeSlider.value);
	var slider_val = document.querySelector('#slider').innerHTML; 
	// update slider value
	slider_val = volumeSlider.value;
	// update new video volume out of 100
	video.volume = slider_val / 100;
	// update html div
	document.querySelector('#slider').innerHTML = slider_val + '%';
});



//Styled	Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
}

);


//Original	Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
