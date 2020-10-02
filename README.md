# JWT_TOKEN 
<p>  
<img src="https://img.icons8.com/windows/64/000000/nodejs.png" alt="nodejs" width="40" height="40"/>
<img src="https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png" alt="jwt" width="50" height="40"/>
<img src="https://img.icons8.com/color/64/000000/graphql.png"  alt="graphql" width="40" height="40"/>
<img src="https://img.icons8.com/color/64/000000/mongodb.png" alt="mongodb" width="40" height="40"/>
</p> 

[JSON](https://jwt.io/introduction/) Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

As a JSON object, the JSON Web Token or JWT is used to safely transfer user information between parties.

## Prerequisite
◾ [NodeJS](https://nodejs.org/en/download/)

◾ [MongoDB](https://www.mongodb.com/try/download)

◾ Any GUI for local Database server [MongoDB-Compass](https://www.mongodb.com/products/compass), [Studio 3T](https://studio3t.com/download/), [Robo 3T](https://robomongo.org/download)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install.
or 
Use the package manager [yarn](https://yarnpkg.com/) to install.

```bash
npm install --save http
npm install --save dotenv
npm install --save express
npm install --save body-parser
npm install --save mongoose
npm install --save jsonwebtoken
npm install --save bcrypt-nodejs
npm install --save passport
npm install --save passport-local passport-jwt 
```

## Usage

```
🔸 Clone the Repo
🔸 Install The Above #Installation
🔸 Run it through either npm dev or npm start
🔸 For local db server connect your localhost server url
🔸 For Atlas(mongoose) server add your url as .env
🔸 Test API Through Postman
🔸🔸🔸🔸🔸🔸
*NOTE: For Atlas server You have to create .env and place your MONGODB_URI or replace [MONGODB_URI] with your srv in **CONGIF FOLDER** *
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
