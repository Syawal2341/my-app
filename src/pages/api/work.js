import clientPromise from "../../lib/mongodb";

export default async function handler(
    req, 
    res
) {
    let client = await clientPromise;
    let db = client.db(process.env.MONGODB_NAME);
    switch (req.method) {
      case "POST":
        const myWork = await db.collection("work").insertOne(req.body);
        res.json({ data: myWork });
        break;
      case "GET":
        const allWork = await db.collection("work").find({}).toArray();
        res.json({ data: allWork });
        break;
    default:
            res.status(404).json({ message: 'pange not found' });
        break;
    }
  }