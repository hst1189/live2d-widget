function loadCSS(url) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url;
  link.defer = true;  // 或者使用 async = true; 根据需求选择

  link.onload = function() {
    console.log('CSS loaded successfully!');
  };
  link.onerror = function() {
    console.error('Failed to load CSS!');
  };
  document.head.appendChild(link);
}
loadCSS("https://cdn.jsdelivr.net/gh/hst1189/live2d-widget/assets/waifu.min.css");

function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.async = true;

    script.onload = () => {
      console.log('Script loaded successfully!');
      resolve();
    };
    script.onerror = () => {
      console.error('Failed to load script!');
      reject(new Error(`Failed to load script: ${url}`));
    };
    document.head.appendChild(script);
  });
}

async function loadScriptsInOrder() {
  try {
    await loadScript("https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js");
    await loadScript("https://cdn.jsdelivr.net/npm/jquery-ui@1.14.1/dist/jquery-ui.min.js");
    await loadScript("https://cdn.jsdelivr.net/gh/hst1189/live2d-widget/assets/live2d.min.js");
//  await loadScript("https://cdn.jsdelivr.net/gh/hst1189/live2d-widget/assets/waifu-tips.min.js");
    await loadScript("./assets/waifu-tips.min.js");
    console.log("All scripts loaded and executed in order.");
  } catch (error) {
    console.error("Error loading scripts:", error);
  }
}
loadScriptsInOrder();

function loadDiv(htmlString, targetElementId) {
  // targetElement = document.getElementById(targetElementId);
  const targetElement = document.body;
  if (targetElement) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;  // Use innerHTML to parse the HTML string safely

    // Iterate through the children of the temporary div and append them to the target
    while (tempDiv.firstChild) {
      targetElement.appendChild(tempDiv.firstChild);
    }
  } else {
    console.error("Target element not found!");
  }
}
const htmlString = "<div class='waifu'><div class='waifu-tips'></div><canvas id='live2d' class='live2d'></canvas><div class='waifu-tool'> <span class='fui-home'></span> <span class='fui-chat'></span> <span class='fui-eye'></span> <span class='fui-user'></span> <span class='fui-photo'></span> <span class='fui-info-circle'></span> <span class='fui-cross'></span></div></div>";
loadDiv(htmlString, 'body');

var id = Math.floor(Math.random() * 100 + 1) - 1;// 随机生成一个*/
localStorage.setItem("modelId",id);
