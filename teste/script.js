const mediaTags = document.querySelector('#media-tags');
var input = document.querySelector('input');
var songUpload = document.querySelector('#audio');

songUpload.addEventListener("change", (event) => {
    var files = event.target.files;
    document.getElementById("src").setAttribute("src", URL.createObjectURL(files[0]));
    document.getElementById("audio").load();
})

input.addEventListener("change", (event) => {
  var file = event.target.files[0];
  jsmediatags.read(file, {
    onSuccess: function(tag) { 
    try{ 
      // Array buffer to base64
      const data = tag.tags.picture.data;
      const format = tag.tags.picture.format;
      let base64String = "";
      for (let i = 0; i < data.length; i++) {
          base64String += String.fromCharCode(data[i]);
      }
      document.getElementById("cover").style.backgroundImage = 'url(data:'+format+';base64,'+window.btoa(base64String)+')';
      document.getElementById("title").textContent = tag.tags.title;
      document.getElementById("artist").textContent = tag.tags.artist;
      document.getElementById("album").textContent = tag.tags.album;
    }catch(error){
      console.log(error);
      document.getElementById("cover").style.backgroundImage = 'url(music.jpg)';
      document.getElementById("title").textContent = `${document.getElementById("songUpload").value.split(/(\\|\/)/g).pop()}`;
      document.getElementById("artist").textContent = 'Unknown';
      document.getElementById("album").textContent = 'Unknown';
    }
    
  },
  onError: function(error) {
    console.log(error);
    document.getElementById("cover").style.backgroundImage = 'url(music.jpg)';
    document.getElementById("title").textContent = `${document.getElementById("songUpload").value.split(/(\\|\/)/g).pop()}`;
    document.getElementById("artist").textContent = 'Unknown';
    document.getElementById("album").textContent = 'Unknown';
  }
  })
})

