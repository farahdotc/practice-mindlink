require('dotenv').config();
const app = require('./server/app');




const PORT = process.env.PORT || 5000;

require('./server/db/config/index')

app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`)
})