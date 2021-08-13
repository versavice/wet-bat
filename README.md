#  WET-BAT submission - Craig


### Running the app
> In the root folder, execute the following in terminal to install packages and run the web app:
`npm i`
`npm start`

### Node Server
> Create another terminal window, navigate to `src/Node Server` directory and execute:
 `npm i`
 `npm run node`

### Generate database
> In `root/DB scripts` there is a sql file called `Generate Database.sql`, run this after creating a local database with the name `db-wet-bat`
`root/src/Node Server/node.js` is where you can modify the connection string if needed, currently it uses the following:
  host: "localhost",
  user: "user",
  password: "root",
  database: "db-wet-bat" 