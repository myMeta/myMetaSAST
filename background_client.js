var managed_domains = [];
var local_domains = [];
var fixed_domains = [
    {domain:"workday.com"},
    {domain:".sapsf.eu"},
    {domain:".sapsf.com"},
    {domain:"successfactors.eu"},
    {domain:".successfactors.com"},
    {domain:"en.wikipedia.org"},
    {domain:".concursolutions.com"},
    {domain:"docsweb.it"}
];

chrome.storage.managed.get(['mymeta_settings'], function(managed_result) {
    if(managed_result.mymeta_settings) {
        managed_domains = JSON.parse(managed_result.mymeta_settings);
    }
});

chrome.storage.local.get(['mymeta_settings'], function(local_result) {
    if(local_result.mymeta_settings) {
        local_domains = JSON.parse(local_result.mymeta_settings);
    }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        if(findDomain(tab.url)) {
            chrome.tabs.executeScript(tabId,{file:'compiled.js'});
            chrome.tabs.insertCSS(tabId,{file:'compiled.css'});
            chrome.browserAction.setIcon({path: 'icon_active.png'});
        } else {
            chrome.browserAction.setIcon({path: 'icon.png'});
        }
    }
});

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.get(['mymeta_settings'], function(local_result) {
        if(!local_result.mymeta_settings) {
            chrome.storage.local.set({'mymeta_settings': '[]'});
        }
    });
});

chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.getSelected(null, function(tab) {
        if(findDomain(fromUrlToDomain(tab.url))) {
            chrome.browserAction.setIcon({path: 'icon_active.png'});
        } else {
            chrome.browserAction.setIcon({path: 'icon.png'});
        }
    })
});

function fromUrlToDomain(url) {
    var hostname;
    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }
    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    return hostname;
}

function findDomain(domain_string) {

    // Plateau exception: injected by content_script
    if(domain_string.indexOf(".plateau.com")!=-1)
        return false;

    var found = false;

    managed_domains.forEach(domain => {
        if(domain_string.indexOf(domain.domain)!=-1) {
            found = true;
        }
    });

    local_domains.forEach(domain => {
        if(domain_string.indexOf(domain.domain)!=-1) {
            found = true;
        }
    });

    fixed_domains.forEach(domain => {
        if(domain_string.indexOf(domain.domain)!=-1) {
            found = true;
        }
    });
    
    return found;
}

function addLocalDomain(domain_string,parameter) {
    chrome.browserAction.setIcon({path: 'icon_active.png'});
    local_domains.push({domain:domain_string,parameter:parameter});
    chrome.storage.local.set({'mymeta_settings': JSON.stringify(local_domains)});
}

function removeLocalDomain(domain_string) {
    chrome.browserAction.setIcon({path: 'icon.png'});
    local_domains.forEach((domain, index) => {
        if(domain_string.indexOf(domain.domain)!=-1) {
            local_domains.splice(index, 1);
        }
    });
    chrome.storage.local.set({'mymeta_settings': JSON.stringify(local_domains)});
}