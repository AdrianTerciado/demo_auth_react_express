# Role authentication MERN with JWT

You can visit a deployed version of this app [here](https://demo-auth-react-express.onrender.com/).

## RUN THIS APP 

npm install
add .env


```
MONGO_URI=
MY_TOKEN_SECRET=
```


## Express
### Routes

1. Routes
    * users: manages users
    * resources: serves protected resources

2. MongoDB connection 
* Create MongoDB
* Create Schema

Data structure 
```js
{
"_id":ObjectId("***************"),
"password":"prueba"
"email":"prueba"
"role":"user"
"createdAt":"2023-03-16T23:47:38.481+00:00"
"updatedAt":"2023-03-16T23:47:38.481+00:00"
__v
0
}
```

3. Middlewares

* getAccessToken => inspect cookies and [save the access_token in the request object](https://stackoverflow.com/questions/10983500/how-do-i-store-request-level-variables-in-node-js)
* decodeToken => Check that the access_token has a valid signature and decode the payload using [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken). Save the decoded payload in the request object
* adminRoutes => used to protect admin routes
* userRoutes => used to protect user routes

4. Login

Retreive user role from the database
Set Authorization header
Send cookie


## React 

Home component manages sign up and login. 
role is allowed to be selected only for learning purposes.


# Protected Routes
This components takes a component and the logged in state as props. 
If logged is true, renders the component, otherwise renders a message to log in. 

# Role manager
This component takes the user role, an array of allowed roles and a component, if the user role is in the list of allowed roles it renders the component. Otherwise it renders an "unauthorized" message

ProtectedRoutes and RoleManager are nested in the &lt;Route/&gt; components in Main.



## TODO 

- Add delete user route
- Add password type to input
- 
- 

