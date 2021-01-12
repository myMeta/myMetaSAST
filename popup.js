document.addEventListener('DOMContentLoaded', function () {
    var domain_string = "";
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        try {
          chrome.runtime.getBackgroundPage(function(backgroundWindow) {
            domain_string = backgroundWindow.fromUrlToDomain(tabs[0].url);

            document.getElementById("DisableMyMetaButton").addEventListener("click", function(){
              try {
                backgroundWindow.addLocalDomain(domain_string);
              } catch (error) {
                console.log("Background not found-> ",error);
              }
              chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
              window.close();
            });
        
            document.getElementById("EnableMyMetaButton").addEventListener("click", function(){
                try {
                  backgroundWindow.removeLocalDomain(domain_string);
                } catch (error) {
                  console.log("Background not found-> ",error);
                }
                chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
                window.close();
            });
    
            getVersion().then(function (data) {
                document.getElementById("VersionNumber").innerHTML = data.version;
              })
              .catch(function (err) {
                console.error('ERROR RETRIEVING VERSION: ', err.statusText);
              });
    
            document.getElementById("ContactUsButton").addEventListener("click", function() {
                window.open("mailto:info@mymetasoftware.com");
            });
    
            try {
              if(backgroundWindow.findDomain(domain_string)) {
                  document.getElementById("EnableMyMeta").style.display = "block";
              } else {
                  document.getElementById("DisableMyMeta").style.display = "block";
              }
            } catch (error) {
              console.log("Background not found-> ",error);
            }
          });
        } catch (error) {
          console.log("Background not found-> ",error);
        }
    });
}, false);

function getVersion() {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', chrome.extension.getURL('manifest.json'));
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject({
        status: this.status,
        statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
      status: this.status,
      statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}