const convertWebBtn=document.getElementById('convert-button-web'),
convertWebInput=document.getElementById('convert-input-web'),
resultWebTitle=document.querySelector('.resultWeb');




convertWebBtn.addEventListener('click',()=>{
  
    getWebAudio();
  })
  
  
  
  async function getWebAudio(){
      let link = convertWebInput.value;
      let parts=link.split("=");
      //let partMobile=link.split('/')[3].split('?');
      let videoId="";
  
      if (parts.length===2) {
          videoId=parts[1];
          console.log(videoId);
      }
      // if (partMobile.length===2) {
      //    videoId=partMobile[0];
      //    console.log(videoId);
      // }
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
  
      
  
      const response = await fetch(url,options);
      const result= await response.json();
      resultWebTitle.innerHTML= `<p class="title">Title: ${result.title}</p>`;
  
      setTimeout(() => {
          window.open(result.link,"_blank");
          convertWebInput.value='';
      }, 1000);
  }