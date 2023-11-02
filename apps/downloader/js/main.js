let Btn = document.getElementById('btn');
let URLinput = document.querySelector('.URL-input');
// let serverURL = 'http://127.0.0.1:4000';
let serverURL = 'https://milaadownloader.kuroki.repl.co';

Btn.addEventListener('click', () => {
	if (!URLinput.value) {
		alert('Ingresa una URL de Youtube');
	} else {
		if(URLinput.value.startsWith('https://www.tiktok.com') || URLinput.value.startsWith('https://www.vm.tiktok.com')){
			downloadTiktok(URLinput.value);
		} else {
			downloadMp4(URLinput.value);
		}
	}
});

async function downloadMp3(query) {
	const res = await fetch(`${serverURL}/downloadmp3?url=${query}`);
	if(res.status == 200) {
    alert('Descarga en proceso...');
    // select.value = '';
    URLinput.value = '';
		var a = document.createElement('a');
  		a.href = `${serverURL}/downloadmp3?url=${query}`;
  		a.setAttribute('download', '');
		  a.click();
	} else if(res.status == 400) {
		alert("URL Invalida!");
	}
}

async function downloadMp4(query) {
	const res = await fetch(`${serverURL}/downloadmp4?url=${query}`);
	if(res.status == 200) {
    alert('Descarga en proceso...');
    // select.value = '';
    URLinput.value = '';
		var a = document.createElement('a');
  		a.href = `${serverURL}/downloadmp4?url=${query}`;
  		a.setAttribute('download', '');
		  a.click();
	} else if(res.status == 400) {
		alert('URL Invalida!');
	}
}

async function downloadTiktok(query) {

	axios.get(`${serverURL}/downloadtiktok?url=${query}`)
  .then(function (response) {
    alert('Descarga en proceso...');
		URLinput.value = '';
		var a = document.createElement('a');
  		a.href = response.data.video.noWatermark;
  		a.setAttribute('download', '');
		  a.click();
  })
  .catch(function (error) {
    alert("URL Invalida!");
  });
}