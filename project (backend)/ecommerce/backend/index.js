process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const express = require("express");
const cors = require("cors");
const axios = require("axios");
var bodyParser = require("body-parser");
// const { default: Buynow } = require("../my-app/src/Pages/Buynow/Buynow");
const ObjectId = require('mongodb').ObjectId;
const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// this for insert one or feedback

app.post("/insertdata", (req, res) => {
  const { name, email, message } = req.body;

  var data = JSON.stringify({
    collection: "feedback",
    database: "ATC",
    dataSource: "Cluster1",
    document: {
      name: name,
      email: email,
      message: message

    },
  });

  var config = {
    method: "post",
    url: "https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/insertOne",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key":
        "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek",
    },
    data: data,
  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      res.status(200).send({ success: "sumbitted sucessfully" });
    })
    .catch((error) => {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      res
        .status(500)
        .send({ error: "An error occurred while processing your request" });
    });
});

// for login/for signup

// this for insert one or singup

app.post("/insertreg", (req, res) => {
  const { username, email, password } = req.body;

  var data = JSON.stringify({
    collection: "login",
    database: "ATC",
    dataSource: "Cluster1",
    document: {
      username: username,
      email: email,
      password: password,
    },
  });

  var config = {
    method: "post",
    url: "https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/insertOne",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key":
      "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek",

    },
    data: data,
  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      res.status(200).send({ success: "Registration is success" });
    })
    .catch((error) => {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      res
        .status(500)
        .send({ error: "An error occurred while processing your request" });
    });
});

app.post("/getlogin", (req, res) => {
  const { username, password } = req.body;

  var data = JSON.stringify({
    collection: "login",
    database: "ATC",
    dataSource: "Cluster1",
    filter: { username: username, password: password },
  });

  var config = {
    method: "post",
    url: "https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/findOne",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key":
      "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek",

    },
    data: data,
  };

  axios(config)
    .then((response) => {
      console.log(response);
      if (response.data.document !== null) {
        res.status(200).send({ success: "Login is success" });
      } else {
        res.status(400).send({ error: " Please register before the login" });
      }
    })
    .catch((error) => {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      res
        .status(500)
        .send({ error: "An error occurred while processing your request" });
    });
});

// this for all heels page
// for allheels/allproduct 
// for allheels add
app.post('/addallheels', (req, res) => {
  const products = req.body;
 
 
  if (!products || products.length === 0) {
    return res.status(400).json({ error: 'No products provided' });
  }
 
  const data = {
    collection: 'allheels',
    database: 'ATC',
    dataSource: 'Cluster1',
    documents: products.map(product => ({
    
      image: product.image,
      title: product.title,
      desc: product.desc,
      type: product.type,
      category: product.category,
      price: product.price,
    })),
  };
 
  const config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/insertMany',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek"
    },
    data: JSON.stringify(data),
  };
 
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.status(200).send(response.data);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    });
});
 

app.post('/getallheels', (req, res) => {
  const { id } = req.body; 
 
  const newData = {
    "collection": "allheels",
    "database": "ATC",
    "dataSource": "Cluster1",
  };
 
  const data = JSON.stringify(newData);
 
  const config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/find', // Use findOne action
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek"

    },
    data: data
  };
 console.log("getallproducts");
 console.log(data);
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.json(response.data); 
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send('Error fetching data');
    });
});
  // for product or add to cart ,(addproduct , deleteproduct,getproduct)
  app.post('/addproduct', (req, res) => {
    const {  image, title, desc, type, category, price } = req.body;
   
    var data = JSON.stringify({
      "collection": "product",
      "database": "ATC",
      "dataSource": "Cluster1",
      "document": {
        
        "image": image,
        "title": title,
        "desc": desc,
        "type": type,
        "category": category,
        "price": price
      }
    });
   
    var config = {
      method: 'post',
      url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/insertOne',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key':"tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek",

      },
      data: data
    };
   
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).send(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).send(error);
      });
  });
   
  app.post('/getproduct', (req, res) => {
    var data = JSON.stringify({
      "collection": "product",
      "database": "ATC",
      "dataSource": "Cluster1"
    });
   
    var config = {
      method: 'post',
      url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/find',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek",

      },
      data: data
    };
   
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).send(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).send(error);
      });
  });
   
   
   
  app.post('/deleteproduct', (req, res) => {
    const { id } = req.body;
   
    var data = JSON.stringify({
      "collection": "product",
      "database": "ATC",
      "dataSource": "Cluster1",
      "filter": {
        "id":id
      }
    });
   
    var config = {
      method: 'post',
      url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/deleteOne',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key':"tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek",

      },
      data: data
    };
   
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).send(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).send(error);
      });
  });
   
   
  // for favorites like add.get .delete

  app.post('/addtofavorites', (req, res) => {
    const { image, title, desc, type, category, price } = req.body;
  
    var data = JSON.stringify({
      "collection": "favorites", // Assuming a separate collection for favorites
      "database": "ATC",
      "dataSource": "Cluster1",
      "document": {
        "image": image,
        "title": title,
        "desc": desc,
        "type": type,
        "category": category,
        "price": price
      }
    });
  
    var config = {
      method: 'post',
      url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/insertOne',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek",

      },
      data: data
    };
  
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).send(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).send(error);
      });
  });
  
  
  
  app.post('/getfavorites', (req, res) => {
    var data = JSON.stringify({
      "collection": "favorites", // Assuming the collection for favorites
      "database": "ATC",
      "dataSource": "Cluster1"
    });
  
    var config = {
      method: 'post',
      url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/find',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek",

      },
      data: data
    };
  
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).send(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).send(error);
      });
  });
  
  
  app.post('/removefromfavorites', (req, res) => {
    const { id } = req.body;
  
    var data = JSON.stringify({
      "collection": "favorites", // Assuming the collection for favorites
      "database": "ATC",
      "dataSource": "Cluster1",
      "filter": {
        "id": id // Adjust the filter based on your document structure
      }
    });
  
    var config = {
      method: 'post',
      url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/deleteOne',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek",

      },
      data: data
    };
  
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).send(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).send(error);
      });
  });
  
  // For favorites add, get ,delete

  app.post('/addtofavorites', (req, res) => {
    const { image, title, desc, type, category, price } = req.body;
  
    var data = JSON.stringify({
      "collection": "favorites", // Assuming a separate collection for favorites
      "database": "ATC",
      "dataSource": "Cluster1",
      "document": {
        "image": image,
        "title": title,
        "desc": desc,
        "type": type,
        "category": category,
        "price": price
      }
    });
  
    var config = {
      method: 'post',
      url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/insertOne',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek",

      },
      data: data
    };
  
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).send(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).send(error);
      });
  });
  
  
  
  app.post('/getfavorites', (req, res) => {
    var data = JSON.stringify({
      "collection": "favorites", // Assuming the collection for favorites
      "database": "ATC",
      "dataSource": "Cluster1"
    });
  
    var config = {
      method: 'post',
      url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/find',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek",

      },
      data: data
    };
  
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).send(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).send(error);
      });
  });
  
  
  app.post('/removefromfavorites', (req, res) => {
    const { id } = req.body;
  
    var data = JSON.stringify({
      "collection": "favorites", // Assuming the collection for favorites
      "database": "ATC",
      "dataSource": "Cluster1",
      "filter": {
        "id": id // Adjust the filter based on your document structure
      }
    });
  
    var config = {
      method: 'post',
      url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/deleteOne',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek",

      },
      data: data
    };
  
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).send(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.status(500).send(error);
      });
  });
  
// this for allbags pages
//  for  allbags /insert  data
app.post('/addallbags', (req, res) => {
  const products = req.body;
 
  if (!products || products.length === 0) {
    return res.status(400).json({ error: 'No products provided' });
  }
 
  const data = {
    collection: 'allbags',
    database: 'ATC',
    dataSource: 'Cluster1',
    documents: products.map(product => ({
    
      image: product.image,
      title: product.title,
      desc: product.desc,
      type: product.type,
      category: product.category,
      price: product.price,
    })),
  };
 
  const config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/insertMany',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek"
    },
    data: JSON.stringify(data),
  };
 
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.status(200).send(response.data);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    });
});
app.post('/getallbags', (req, res) => {
  const { id } = req.body; 
 
  const newData = {
    "collection": "allbags",
    "database": "ATC",
    "dataSource": "Cluster1",
  };
 
  const data = JSON.stringify(newData);
 
  const config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/find', // Use findOne action
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek"

    },
    data: data
  };
 console.log("getallproducts");
 console.log(data);
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.json(response.data); 
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send('Error fetching data');
    });
});
 

// this for alljewellary pages
//  for  alljewellary /insert  data
app.post('/addalljewellary', (req, res) => {
  const products = req.body;
 
  if (!products || products.length === 0) {
    return res.status(400).json({ error: 'No products provided' });
  }
 
  const data = {
    collection: 'alljewellary',
    database: 'ATC',
    dataSource: 'Cluster1',
    documents: products.map(product => ({
    
      image: product.image,
      title: product.title,
      desc: product.desc,
      type: product.type,
      category: product.category,
      price: product.price,
    })),
  };
 
  const config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/insertMany',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek"
    },
    data: JSON.stringify(data),
  };
 
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.status(200).send(response.data);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send({ error: error.message });
    });
});
app.post('/getalljewellary', (req, res) => {
  const { id } = req.body; 
 
  const newData = {
    "collection": "alljewellary",
    "database": "ATC",
    "dataSource": "Cluster1",
  };
 
  const data = JSON.stringify(newData);
 
  const config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/find', // Use findOne action
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek"

    },
    data: data
  };
 console.log("getallproducts");
 console.log(data);
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.json(response.data); 
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send('Error fetching data');
    });
});
 
// this for Buynow/

app.post('/getproductbyid', (req, res) => {
  const { _id,collection } = req.body;
 console.log(_id,collection);
  // Define the query to search in two collections
  const newData = {
    "database": "ATC",
    "dataSource": "Cluster1",
    "collection": collection,
   "filter":{ "_id": { "$oid": _id } },
   
  };
 
  const data = JSON.stringify(newData);
  // const agent = new https.Agent({
  //   rejectUnauthorized: false,
  //   minVersion: 'TLSv1',
  // });
  const config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-iepguef/endpoint/data/v1/action/findOne', // Use findOne action
    headers: {
      'Content-Type': 'application/json',
      'api-key': "tt8N60mF9SGG7yOWh5hUkSVqkGPzvZYEWudMXgp54uZi98mbKJoucQqBlWXT1vek"
    },
    data: data,
    // httpsAgent:agent
  };
 
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send('Error fetching data');
    });
});
 

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});