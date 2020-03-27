# SemiSmartStorage
This little React App helps you to keep track of your fridges and storages.
The lightweight backend is written in PHP 7 and only requires a Raspberry Pi with an Apache 2 server and an SQLite 3 database.

Further information can be found in the [documentation](docs/Documentation.md).
The project's progress can be seen in the [roadmap](docs/Roadmap.md).

Thanks to Dan, who gift me a Raspberry Pi, which made me come up with this project!

## Features
- Create virtual storages to save content, i.e. item, unit and quantity
- Use predefined items and units to keep lists consistent
- Host and sync the whole app with one Raspberry Pi

## Installation
It is assumed that both backend and frontend are installed at the server's document-root (typically `/var/www/html`, look at [documentation](docs/Documentation.md)´s last paragraph for settings with different locations).
After installation there are three new directories at document-root: `/api`, `/database` and `/SemiSmartStorage`.

### Backend
Once an Apache2-server is set up on your Raspberry Pi, you can simply copy the directories `./api` and `./database` into your document-root.
Then change into `/database` and run
```
sh setup-database.sh
```

The script creates the SQLite3-database _db_3S.db_ and all necessary tables, and inserts some initial data.

### Frontend (installation on Raspberry Pi)
Change into the project-directory and run
```
npm i
npm run build
```

These commands install all dependencies and create a production build, which you can serve with the Apache server.
It is assumed it will be hosted in a directory `/SemiSmartStorage` at the server's document-root.
Otherwise the homepage-field in package.json can be modified to the correct location.

Simply upload `./build` to your Raspberry Pi and rename it `./SemiSmartStorage`.
If you use the standard-configuration, the app is available under [http://raspberrypi/SemiSmartStorage/](http://raspberrypi/SemiSmartStorage/) now.

### Frontend (development mode)
Change into the project-directory and run
```
npm i
npm run
```

These commands install all dependencies, create a development build and start a development server.

## Available Scripts (development mode)
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More
Further information has been moved to [React-information](docs/React-information.md).
