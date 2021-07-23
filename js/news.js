var a = document.getElementById('business');
var b = document.getElementById('entertainment');
var c = document.getElementById('health');
var d = document.getElementById('science');
var e = document.getElementById('sports');
var f = document.getElementById('tech');

a.onclick = function () {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=bbef87e0eb754c53b5dfbc0e611a37e8", true);
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.responseText);
      var articles = json.articles;

      let k = document.getElementById("accordionExample");
      var l = " ";
      for (i in articles) {

        var news = `<div class="accordion-item">
        <h2 class="accordion-header" id="heading${i}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
              ${articles[i].title}
          </button>
        </h2>
        <div id="collapse${i}" class="accordion-collapse collapse " aria-labelledby="heading${i}" data-bs-parent="#accordionExample">
          <div class="accordion-body" style=" background-color:thistle">
             ${articles[i].description}
             <a href=${articles[i].url}>Read more</a>
          </div>
        </div>
      </div>`
        l += news;
      }
      k.innerHTML = l;

    }
    else {
      console.log("Some error occured")
    }
  };

  xhttp.send();
}

b.onclick = function () {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=bbef87e0eb754c53b5dfbc0e611a37e8", true);
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.responseText);
      var articles = json.articles;

      let k = document.getElementById("accordionExample");
      var l = " ";
      for (i in articles) {

        var news = `<div class="accordion-item">
        <h2 class="accordion-header" id="heading${i}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
              ${articles[i].title}
          </button>
        </h2>
        <div id="collapse${i}" class="accordion-collapse collapse " aria-labelledby="heading${i}" data-bs-parent="#accordionExample">
          <div class="accordion-body" style=" background-color:thistle">
             ${articles[i].description}
             <a href=${articles[i].url}>Read more</a>
          </div>
        </div>
      </div>`
        l += news;
      }
      k.innerHTML = l;

    }
    else {
      console.log("Some error occured")
    }
  };

  xhttp.send();
}
c.onclick = function () {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=bbef87e0eb754c53b5dfbc0e611a37e8", true);
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.responseText);
      var articles = json.articles;

      let k = document.getElementById("accordionExample");
      var l = " ";
      for (i in articles) {

        var news = `<div class="accordion-item">
        <h2 class="accordion-header" id="heading${i}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
              ${articles[i].title}
          </button>
        </h2>
        <div id="collapse${i}" class="accordion-collapse collapse " aria-labelledby="heading${i}" data-bs-parent="#accordionExample">
          <div class="accordion-body" style=" background-color:thistle">
             ${articles[i].description}
             <a href=${articles[i].url}>Read more</a>
          </div>
        </div>
      </div>`
        l += news;
      }
      k.innerHTML = l;

    }
    else {
      console.log("Some error occured")
    }
  };

  xhttp.send();

}
d.onclick = function () {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=bbef87e0eb754c53b5dfbc0e611a37e8", true);
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.responseText);
      var articles = json.articles;

      let k = document.getElementById("accordionExample");
      var l = " ";
      for (i in articles) {

        var news = `<div class="accordion-item">
        <h2 class="accordion-header" id="heading${i}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
              ${articles[i].title}
          </button>
        </h2>
        <div id="collapse${i}" class="accordion-collapse collapse " aria-labelledby="heading${i}" data-bs-parent="#accordionExample">
          <div class="accordion-body" style=" background-color:thistle">
             ${articles[i].description}
             <a href=${articles[i].url}>Read more</a>
          </div>
        </div>
      </div>`
        l += news;
      }
      k.innerHTML = l;

    }
    else {
      console.log("Some error occured")
    }
  };

  xhttp.send();

}
e.onclick = function () {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=bbef87e0eb754c53b5dfbc0e611a37e8", true);
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.responseText);
      var articles = json.articles;

      let k = document.getElementById("accordionExample");
      var l = " ";
      for (i in articles) {

        var news = `<div class="accordion-item">
        <h2 class="accordion-header" id="heading${i}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
              ${articles[i].title}
          </button>
        </h2>
        <div id="collapse${i}" class="accordion-collapse collapse " aria-labelledby="heading${i}" data-bs-parent="#accordionExample">
          <div class="accordion-body" style=" background-color:thistle">
             ${articles[i].description}
             <a href=${articles[i].url}>Read more</a>
          </div>
        </div>
      </div>`
        l += news;
      }
      k.innerHTML = l;

    }
    else {
      console.log("Some error occured")
    }
  };

  xhttp.send();

}
f.onclick = function () {
  var xhttp = new XMLHttpRequest();

  xhttp.open("GET", "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=bbef87e0eb754c53b5dfbc0e611a37e8", true);
  xhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.responseText);
      var articles = json.articles;

      let k = document.getElementById("accordionExample");
      var l = " ";
      for (i in articles) {

        var news = `<div class="accordion-item">
        <h2 class="accordion-header" id="heading${i}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
              ${articles[i].title}
          </button>
        </h2>
        <div id="collapse${i}" class="accordion-collapse collapse " aria-labelledby="heading${i}" data-bs-parent="#accordionExample">
          <div class="accordion-body" style=" background-color:thistle">
             ${articles[i].description}
             <a href=${articles[i].url}>Read more</a>
          </div>
        </div>
      </div>`
        l += news;
      }
      k.innerHTML = l;

    }
    else {
      console.log("Some error occured")
    }
  };

  xhttp.send();

}
