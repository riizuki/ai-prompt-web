const formInput = document.getElementById('form-input');
const url = 'https://api.ryzumi.vip/api/ai/chatgpt?text='

function tampilkanKeWeb(data) {
  const hasilPrompt = document.getElementById('hasil');
  hasilPrompt.innerText = data.result;
}

const prosesPrompt = (promptUser) => {
  fetch(url + promptUser)
    .then(response => {
      if (!response) {
        alert('Jaringan respons sedang tidak oke')
      }

      return response.json();
    })
    .then(data => {
      tampilkanKeWeb(data)
    })
    .catch(error => {
      console.error('Terjadi Kesalahan', error);
    })
}


formInput.onsubmit = e => {
  e.preventDefault();

  const inputPrompt = document.getElementById('input-prompt');

  if (inputPrompt.value.trim() === '') {
    alert('Anda belum memasukkan Prompt')
  } else {
    prosesPrompt(inputPrompt.value.trim());
  }
}