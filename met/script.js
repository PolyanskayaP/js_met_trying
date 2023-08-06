function openWindowAbout(){
    //window.open("./about.html", "_self");

    //location = "./about.html";
    // аналогично
    // location.href = "http://google.com";
    // location.assign("http://google.com");

    location.replace("about.html");
  }

function openWindowIndex(){
    //window.open("./index.html", "_self");

    //location = "./index.html";
    // аналогично
    // location.href = "http://google.com";
    // location.assign("http://google.com");

    location.replace("index.html");
  }

function openWindowPopup(){
    window.open("https://music.yandex.ru/album/23451072", "_blank", "popup=true", "width=600,height=400");
  }

function openCloseWindow(){
    const popup = window.open("https://metanit.com", "_blank", "width=600,height=400");
    setTimeout(()=>popup.close(), 5000);
  }

//document.querySelector('.infoSys').innerHTML =  
function infoAbout(){
    document.write("Строка запроса: " + location.href + "<br />");
    document.write("Путь к ресурсу: " + location.pathname + "<br />");
    document.write("Схема: " + location.origin + "<br />");
    document.write("Протокол: " + location.protocol + "<br />");
    document.write("Порт: " + location.port + "<br />");
    document.write("Хост: " + location.host + "<br />");
    document.write("Имя хоста: " + location.hostname + "<br />");
    document.write("Хэш: " + location.hash + "<br />");
    document.write("Поиск: " + location.search + "<br />");
}
