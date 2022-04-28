
const express = require('express')

// get the router object
// it is responsible for adding the routes to the main application
const router = express.Router()

const data = {
	status: true,
	user_id: 'john_doe_17091999',
	email_id: 'john@xyz.com',
	roll_no: 'ABCD123',
	array_num: [1, 334, 4],
	array_alpha: ['A', 'R'],
};
router.post('/signin', (request, response) => {
  var arr = JSON.parse(request.query.data);
   console.log(arr);
    
   response.send(data);
  });
      
   


// export router so that we can add these routes
// into the main application in server.js
module.exports = router