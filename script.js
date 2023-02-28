const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd376368fc5mshd5bcd05a13d5726p1bfa79jsn26cd842a803d',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};
const A = async()=>{
await fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(response => {
        document.getElementById('quote').innerHTML = response.content;
        console.log(response);
        document.getElementById('author').innerHTML = '-' + response.originator.name
    })
	.catch(err => console.error(err));
}
A();