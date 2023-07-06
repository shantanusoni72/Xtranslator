const apiSearch = {
    "url": {
        "translate": {
            "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
            "endpoint": "https://text-translator2.p.rapidapi.com/translate"
        },
        "detection": {
            "X-RapidAPI-Host": "typewise-ai.p.rapidapi.com",
            "endpoint": "https://typewise-ai.p.rapidapi.com/language_detection/detector"
        }
    },
    "X-RapidAPI-Key": "334e2f8d43msh3bdef36f36cb285p1cf9e8jsn6688cac7cf3b"
}

const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': apiSearch['X-RapidAPI-Key'],
        'X-RapidAPI-Host': null
    },
    body: null
};

module.exports = {
    apiSearch,
    options
}