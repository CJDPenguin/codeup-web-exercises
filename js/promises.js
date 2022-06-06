"use strict"
let username = prompt("Enter GitHub Username")
fetch((`https://api.github.com/users/${username}/events/public`), {headers: {'Authorization': `token ${GITHUB_KEY}`}}).then(resp => resp.json()).then(data => console.log(data[0].created_at))