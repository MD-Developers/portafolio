let Btn = document.getElementById('btn');
let URLinput = document.querySelector('.URL-input');
// let serverURL = 'http://127.0.0.1:4000';
// let serverURL = 'https://milaadownloader.kuroki.repl.co';

Btn.addEventListener('click', () => {
	if (!URLinput.value) {
		alert('Ingresa una URL de Youtube/Tiktok');
	} else {
		if(URLinput.value.startsWith('https://www.tiktok.com') || URLinput.value.startsWith('https://www.vm.tiktok.com')){
			downloadTiktok(URLinput.value);
		} else {
      if(URLinput.value.startsWith('https://www.youtube.com')){
        downloadYoutube(URLinput.value);
      } else 
        alert('URL Inalida!');
    }

	}
});

async function downloadYoutube(query) {
  let pos = query.indexOf('y'),
      url = '';

  url = query.slice(0, pos) + 'ss' + query.slice(pos);
  var a = document.createElement('a');
  a.href = `${url}`;
  a.setAttribute('target', '_blank');
  a.setAttribute('download', '');
  a.click();
  URLinput.value = '';
}

async function downloadTiktok(query) {
  var a = document.createElement('a');
  a.href = `https://sfrom.net/${query}`;
  a.setAttribute('target', '_blank');
  a.setAttribute('download', '');
  a.click();
  URLinput.value = '';
}