const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const port = process.env.PORT || 5000;
// 5) Server start
app.listen(port);
