import { getData } from "../../helper";

export default async function (req, res) {
  try {
    const response = await getData();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'max-age=180000');
    res.end(JSON.stringify(response));
  }

  catch (error) {
    res.json(error);
    res.status(405).end();
  }
}