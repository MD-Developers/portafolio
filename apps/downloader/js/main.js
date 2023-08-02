let Btn = document.getElementById('btn');
let URLinput = document.querySelector('.URL-input');
let select = document.querySelector('.custom-select');
let serverURL = 'https://milaadownloader.kuroki.repl.co';

Btn.addEventListener('click', () => {
	if (!URLinput.value) {
		alert('Ingresa una URL de Youtube');
	} else {
		if (select.value == 'mp3') {
			downloadMp3(URLinput.value);
		} else if (select.value == 'mp4') {
			downloadMp4(URLinput.value);
		}
	}
});

async function downloadMp3(query) {
	const res = await fetch(`${serverURL}/downloadmp3?url=${query}`);
	if(res.status == 200) {
    alert('Descarga en proceso...');
    select.value = '';
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
    select.value = '';
    URLinput.value = '';
		var a = document.createElement('a');
  		a.href = `${serverURL}/downloadmp4?url=${query}`;
  		a.setAttribute('download', '');
		  a.click();
	} else if(res.status == 400) {
		alert('URL Invalida!');
	}
}