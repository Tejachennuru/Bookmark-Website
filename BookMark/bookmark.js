let SiteForm = document.getElementById("bookmarkForm");
let bookMarksList = document.getElementById("bookmarksList");
let siteName = document.getElementById("siteNameInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");
let siteUrl = document.getElementById("siteUrlInput");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");

// Validation for site name
siteName.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
});

// Validation for site URL
siteUrl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else if (!/^https?:\/\/.+\..+/.test(event.target.value)) {
        siteUrlErrMsg.textContent = "Enter a valid URL (e.g., https://example.com)";
    } else {
        siteUrlErrMsg.textContent = "";
    }
});

// Handle form submission
SiteForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Validate inputs
    let name = siteName.value.trim();
    let url = siteUrl.value.trim();
    let isValid = true;

    if (name === "") {
        siteNameErrMsg.textContent = "Required*";
        isValid = false;
    }

    if (url === "") {
        siteUrlErrMsg.textContent = "Required*";
        isValid = false;
    } else if (!/^https?:\/\/.+\..+/.test(url)) {
        siteUrlErrMsg.textContent = "Enter a valid URL (e.g., https://example.com)";
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    // Create a bookmark block
    let bookmarkItem = document.createElement("div");
    bookmarkItem.classList.add("bookmark-item");

    let bookmarkTitle = document.createElement("span");
    bookmarkTitle.classList.add("bookmark-title");
    bookmarkTitle.textContent = name;

    let bookmarkLink = document.createElement("a");
    bookmarkLink.href = url;
    bookmarkLink.target = "_blank";
    bookmarkLink.textContent = "Visit";

    bookmarkItem.appendChild(bookmarkTitle);
    bookmarkItem.appendChild(document.createTextNode(" - "));
    bookmarkItem.appendChild(bookmarkLink);

    // Append to bookmarks list
    bookMarksList.appendChild(bookmarkItem);

    // Clear inputs
    siteName.value = "";
    siteUrl.value = "";
});