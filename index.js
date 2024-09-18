const favicon = () => [...document.querySelectorAll('link[rel*=icon]')].map(link => '' + new URL(link.getAttribute('href'), location.origin));

const url = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);

        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
    });
};

const get = async () => {
    const iconArr = await favicon();
    if (iconArr.length === 0) return;

    const iconUrl = iconArr[0];
    const iconBase64 = await url(iconUrl);

    return iconBase64;
};

const chatgpt = "data:image/webp;base64,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";

(async () => {
    const base64 = await get();

    //console.log(base64) <-- THIS IS HOW YOU GET THE CHATGPT STRING (LOAD CHATGPT.COM AND LOOK AT CHROME CONSOLE)

    if (base64 === chatgpt) {
        window.location.href = "about:blank";
    } else return;
})();