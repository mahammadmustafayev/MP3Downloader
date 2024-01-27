const convertBtn= document.getElementById('convert-button'),
      convertInput=document.getElementById('convert-input'),
      resultTitle=document.querySelector('.result');

convertBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  getAudio();
})



async function getAudio(){
    let link = convertInput.value;
    let parts=link.split("=");
    let partMobile=link.split('/')[3].split('?');
    let videoId="";

    if (parts.length===2) {
        videoId=parts[1];
        console.log(videoId);
    }
    if (partMobile.length===2) {
       videoId=partMobile[0];
       console.log(videoId);
    }
    else{
      alert('Error Invalid Youtube Link!');
    }

    const url =`https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`;
    const options={
       method:'GET',
       headers: {
        'X-RapidAPI-Key': '26698c6f52msh5251d6fb37703e1p130839jsnde4bf25d0529',
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com',
      },
    };

    // const url =`https://youtube-video-download-info.p.rapidapi.com/dl?id=${videoId}`;
    // const options={
    //    method:'GET',
    //    headers: {
    //     'X-RapidAPI-Key': '26698c6f52msh5251d6fb37703e1p130839jsnde4bf25d0529',
    //     'X-RapidAPI-Host': 'youtube-video-download-info.p.rapidapi.com',
    //   },
    // };

    const response = await fetch(url,options);
    const result= await response.json();
    resultTitle.innerHTML= `<p class="title">Title: ${result.title}</p>`;

    setTimeout(() => {
        window.open(result.link,"_blank");
        convertInput.value='';
    }, 1000);
}