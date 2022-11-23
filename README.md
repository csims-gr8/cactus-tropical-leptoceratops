# Jobs app

A baby app that holds some data about jobs. There are TODOs scattered around the app with ideas for things to add.

- [] Add parameter to the getJobs function to filter the jobs returned (handlers.js)
- [] Show job descriptions in the UI (public/client.js)
- [] Improve UI appearance (public/client.js, views/index.html)
- [] Add ability to filter jobs in the UI (public/client.js, views/index.html)
- [] Add backend endpoint to save a job for later review (handlers.js, server.js)
- [] Add tests for the handlers (handlers.spec.js)

### UI To Do List
- [] Create a list of jobs
- [] When selected, show description of respective job

## Database

The job database (sqlite) is initialized in server.js. The table schema:

```sql
CREATE TABLE Jobs (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, location TEXT)
```

Documentation for the `sqlite3` npm package [on github](https://github.com/TryGhost/node-sqlite3/wiki/API).

## About hello-sqlite (starter app from Glitch)

A starter that has a database

- This app uses sqlite but you can power your apps with [a number of other storage options](https://glitch.com/storage)
- `sqlite.db` is created and put into the `.data` folder, a hidden directory whose contents aren’t copied when a project is remixed. You can see the contents of `.data` in the console under "Logs"
- To save to the database, remix this app!

On the front-end,

- Edit `views/index.html`, `public/style.css`, and `public/client.js`
- Drag in `assets`, like images or music, to add them to your project

On the back-end,

- Your app starts at `server.js`
- Add frameworks and packages in `package.json`
- Safely store app secrets in `.env` (nobody can see this but you and people you invite)

Click `Show` in the header to see your app live. Updates to your code will instantly deploy.

## Made by [Glitch](https://glitch.com/)

\ ゜ o ゜)ノ
