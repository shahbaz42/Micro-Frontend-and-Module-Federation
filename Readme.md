# Micro Frontend & Module Federation

Micro Frontend is a concept derived from microservices, offering flexibility and scalability in web development, allowing the combining of components created in several frameworks or libraries. This is a practical implementation of Microfrontend using Module Federation. 

## Micro Frontend
Micro Frontend is a web development approach where a website is composed of multiple web pages, each contributed by different teams. These teams may use different frameworks or libraries to build components that come together to create a cohesive web application. This modular approach enhances flexibility and enables teams to collaborate seamlessly.

## Benefits of Micro Frontends

Micro Frontends offer several advantages:

- **Independent Deployments:** Each micro frontend can have its own CI/CD pipeline, allowing teams to deploy and update their components independently.

- **Independent Teams:** Teams have full control over their deliverables, eliminating the need for specialized frontend teams based on technical skills.

- **Easier Maintenance and Bug Fixes:** Micro Frontends make it easier to maintain and fix bugs, as codebases are smaller and more focused.

- **Tech Stack Freedom:** Different technological stacks can be used for each micro frontend, facilitating hiring and promoting single responsibility.

- **Simple Decoupled Units:** Micro Frontends enforce proper boundaries between components, reducing unintentional couplings found in monolithic applications.

## How to Split Apps

Developers can split large apps in various ways:

- **Page by Page:** Splitting by page is secure when dealing with multiple open pages, with each page having its own micro-app.

- **By Functionality:** Separate notable features into smaller micro apps, each responsible for a specific functionality within a single page.

- **By Section:** Organize apps into sections, allowing multiple programs to share the same components or chunks.

## Module Federation

Module Federation is a JavaScript framework designed to simplify code sharing and improve autonomy between applications. It enables one JavaScript program to import code from another through Webpack configuration. This approach grants developers the freedom to construct projects according to their specific needs.

## Sharing Remote State/Component with Host App

To share the state of our remote app with the host app and focus on adding content, we need to convert our Header into a Micro Frontend. Follow these steps:

## Update Webpack Configuration in Host App

1. Open the webpack config file inside your host app.
2. Scroll down to find the module federation plugin configuration.
3. Notice that it has a default name called "remote." You can change this name if needed, but it must be a valid JavaScript variable name.
4. Inside the `exposes{}` section, add the following line:
   ```
   "./Header": "./src/Header.jsx"
   ```
   This configuration exposes the Header component.

## Restart the Remote App

1. To apply the changes, restart the remote app. Stop the remote app by pressing `ctrl+c` in the terminal.
2. Start the remote app again using `npm start`.

## Manifest File Generation

1. After restarting the remote app, webpack generates a new file. You can access it by appending `/remoteEntry.js` to the URL. For example, `localhost:8081/remoteEntry.js`.
2. This file serves as a manifest of all the modules exposed by the remote application.

## Configure Remotes in Host App

1. Copy the URL of your remote app, which should be something like `localhost:8081/remoteEntry.js`.
2. Navigate to your host app's directory.
3. Inside the `src/webpack.config.js` file, scroll down to the `plugins: ModuleFederationPlugin` section.
4. Instead of adding the configuration inside `exposes{}`, paste it inside the `remotes{}` section like this:
   ```
   remote: "remote@http://localhost:8081/remoteEntry.js"
   ```
   The name "remote" should match what you defined in the webpack.config of the remote application.

## Access Exposed Components

Now, you can access any exposed components from the remote application in your host app.

## Update App.jsx in Host App

1. Inside your `App.jsx` file in the host app, import the Header component from the remote app as follows:
   ```javascript
   import React from "react";
   import ReactDOM from "react-dom";
   import Header from "remote/Header"; // Import the Header component from the remote app

   const App = () => (
     <div className="container">
       <div>
         <Header /> {/* Use the Header component from the remote app */}
       </div>
     </div>
   );

   ReactDOM.render(<App />, document.getElementById("app"));
   ```

Now, your host app can seamlessly use the Header component exposed by the remote app.

This integration allows you to share and utilize components between different applications effectively.