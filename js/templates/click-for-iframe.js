// Frank Poth 03/27/2018

const ClickForIframe = function() {};

ClickForIframe.replace = function(element, source, width, aspect_ratio) {

  var div = DocKit.createElement("div", ["class=ClickForIframe", "style=max-width:" + width], "click to load content");

  DocKit.replaceElement(element, div);

  div.addEventListener("click", function(event) {

    div.innerHTML = "";

    let iframe = DocKit.createElement("iframe", ["src=" + source]);

    div.appendChild(iframe);

    div.style.height = div.clientWidth * aspect_ratio + "px";

  }, { once:true });

  window.addEventListener("resize", function(event) {

    div.style.height = div.clientWidth * aspect_ratio + "px";

  });

};
