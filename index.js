const { JSDOM } = require('jsdom');

exports.handler = async (event) => {
    const dom = await JSDOM.fromURL("https://twitter.com/search?q=from%3Atomasdev%20%23protip&src=typd");
    const tweet = dom.window.document.body.querySelector('.tweet .tweet-text').textContent;

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ tweet });
    };
};