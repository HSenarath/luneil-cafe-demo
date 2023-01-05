# Setting Up the MongoDB Connection using .env File

1. 
```
npm install dotenv
```
2. In app.js add the following:
```
const mongoose = require('mongoose')
require('dotenv').config()
```
3. Create .env file and add URL connection to MongoDB cluster:
```
MONGO_URI = URL
```
 Note: make sure to sub in password and the db name

4. Add the following code to app.js:
```
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => console.log('connected to db'))
  .catch(err => console.log(err));
```

5. Test to ensure you are connected to db:
```
npm start
```
 It should print out 'connected to db' if successful

6. Add the following to the .gitignore file before pushing!
```
.env
```