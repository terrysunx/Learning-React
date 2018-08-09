export const getUsers = (count) => new Promise((resolve, reject) => {
    const api = `https://api.randomuser.me/?nat=us&results=${count}`;
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () => request.status == 200?
        resolve(JSON.parse(request.response).results)
        : reject(Error(request.statusText));
    request.onerror = error => reject(error);
    request.send();
});
