To start server

    node node_modules/http-server/bin/http-server 
    
To start database
    
    node node_modules/json-server/bin/index.js --watch db.json

To add new todo:

    http POST localhost:3000/todo text="First One"
    
To list all todos:

    http GET localhost:3000/todo
    
To remove n-th todo:

    http DELETE localhost:3000/todo/n
    
Screen of application

[![screen.png](https://s9.postimg.org/ysv78yphb/screen.png)](https://postimg.org/image/h2tinxbwb/)
