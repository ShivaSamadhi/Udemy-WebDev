import { MongoClient, ServerApiVersion } from 'mongodb';


const connectDB = async () => {



    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Successful DB Connection");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

export default connectDB