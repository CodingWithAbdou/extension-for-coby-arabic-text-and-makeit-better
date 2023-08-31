chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message.title == 'hi') {
            let text = request.message.body
            copyContent(text)
        }
    }
);

const copyContent = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}