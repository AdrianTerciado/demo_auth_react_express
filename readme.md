# Role authentication MERN with JWT

You can visit a deployed version of this app [here](https://demo-auth-react-express.onrender.com/).

### RUNNING THE APP 

```zsh
npm install
echo 'MONGO_URI=\nMY_TOKEN_SECRET='>.env
```
Fill out .env\
You can generate MY_TOKEN_SECRET using this [password generator](https://www.lastpass.com/es/features/password-generator#generatorTool)

connect to a MongoDB Database (i.e. `mongodb://localhost:27017`)

```
MONGO_URI=
MY_TOKEN_SECRET=
```

----
## Express
### Routes

1. Routes
* users: manages users
* resources: serves protected resources

<br>

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
    "__v":0
}
```

3. Middlewares

* **getAccessToken** => inspect cookies and [save the access_token in the request object](https://stackoverflow.com/questions/10983500/how-do-i-store-request-level-variables-in-node-js)
* **decodeToken** => Check that the access_token has a valid signature and decode the payload using [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken). Save the decoded payload in the request object
* **adminRoutes** => used to protect admin routes
* **userRoutes** => used to protect user routes

4. Login

This endpoint must 
- Retrieve user role from the database using provided credentials
- Set Authorization header
- Send cookie


## React 

&lt;Home/&gt; component manages sign up and login. 
Role is allowed to be selected only for learning purposes.

&lt;Main/&gt; component stores the logged and role states.
Admin and Client routes are nested respectively.

# Protected Routes
This components takes a component and the logged in state as props. 
If logged is true, renders the component passed as props, otherwise renders a message to log in. This usually would redirect to login.  

# Role manager
This component takes an array of allowed roles and a component, if the user role is in the list of allowed roles it renders the component. Otherwise it renders an "unauthorized" message

ProtectedRoutes and RoleManager are nested in the &lt;Route/&gt; components in &lt;Main/&gt;.





