--------------- How to setup the project -------------
step1 : just clone the repo
step2 : open terminal in your vs code and type command "npm install"
step3 : Install MongoDB and also install MongoDB Compass (copy the link if you are beginner "https://www.mongodb.com/try/download/community-kubernetes-operator")
   Note - this is for windows users only and let me know if you want for mac and linux
Step4 : After installing just change the MongoDB connect "URI" in server.js file       (to find out where it is, look for the try catch block in server.js)
Step5 : Open 2 separate terminals one for Laravel and one for serving the server.js file
         terminal 1 commands --- npm run watch
         terminal 2 commands --- npm run dev

Now the app should be runnning properly but it wont show any data from the backend as the DB is empty So just take the JSON files i have uploaded and add them to DB
or you can also use your own data just keep in the DB how i kept them and make sure the collection and DB names are the same

So say hello to your new project and i bid you farewell byee
