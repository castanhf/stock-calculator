# stock-calculator
Handy stock calculator to determine the profit or loss from buying and selling stocks.  
Using React framework and Typescript.

Using this https://goodcalculators.com/stock-calculator/ as guideline.

Planning on using react framework to develop this.

Info in .gitignore was taken from this [Stackoverflow QA](https://stackoverflow.com/questions/60220919/which-files-or-folders-should-be-in-gitignore-in-react-project#:~:text=If%20you%20use%20create%20react,to%20keep%20node_modules%20in%20gitignore.)


# Install create-react app
create-react-app is useful for default React projects
```
npm install -g create-react-app
```

# Create our new project
Used the following command to create the react project folder called stock-calculator:
```
create-react-app stock-calculator --template typescript
```

Got info from this link: [create-react-app.dev](https://create-react-app.dev/docs/adding-typescript/)

After that, run the next command
```
cd stock-calculator
```  
followed by one of the following:  
```
npm start
```  
or  
```
yarn start
```  
Note: Need npm or yarn installed, respectively for either the commands to work  

Your prefered browser will open a tab on `localhost:3000` running the contents on `src/App`.  
To stop this process just hit `Ctrl + c` in the terminal to kill the process.  

# Adding state management
The following information regards Redux, which is a state management library, was searched in this [Microsoft GitHub Archive](https://github.com/microsoft/TypeScript-React-Starter).  

Once in the aforementioned Github archive repository, `Ctrl + f`, then search for "Installing Redux".  

Redux comes into play with this app since the stock calculator is a bit more interactive, so we can update and synchronize the data in a seamless and smoother style to the user.  
