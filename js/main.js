const showTime = () => {
	const date = new Date();
	const time = date.toLocaleTimeString();
	document.querySelector(".clock").innerHTML = time;
};
 
const clockId = setInterval(showTime, 1000);
