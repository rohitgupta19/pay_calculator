import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import express from 'express';
import taxRouter from './routes/taxCalcRoute';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));

app.use('/payslip', taxRouter);

app.get('/', (req, res) => {
  res.send('This is a tax calculator landing web page!');
});

app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`);
});
