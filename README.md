# SimpleTableLibrary-SGX

This project implements a simple and reusable table component called `SimpleTable` using React.js and Typescript. 

The component supports features such as column definitions, data rendering.

The search bar for searching by employee name, and a filter dropdown for the "Manager Decision" column.

## Features

Simple and Reusable Table Component: The `SimpleTable` component is designed to be easy to use and highly reusable. It provides a straightforward way to display tabular data with minimal dependencies.

Column Definitions: Users can define columns with `header` and `key` properties. The component also supports an optional `cellRenderer` function for custom cell rendering.

Search Bar: A search bar is integrated into the UI, allowing users to search for specific employee names within the table.

Manager Decision Filter: The "Manager Decision" column includes a dropdown filter, enabling users to filter records based on approval status (Approved, Pending, Declined).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
