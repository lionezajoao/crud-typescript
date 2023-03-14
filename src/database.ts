import { Collection, MongoClient, MongoClientOptions, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: "./.env" })



class Database {
    private uri: string;
    private options: MongoClientOptions;

    private db: any;
    private client: MongoClient;

    constructor(uri: string, options?: MongoClientOptions) {
        this.uri = uri;
        this.options = options || {};
    }

    public async connect(): Promise<void> {
        try {
            this.client = new MongoClient(this.uri, this.options);
            await this.client.connect();
        } catch(e) {
            console.log("Failed to connect to database", e);
        }
    }

    public async getDb(dbName: string): Promise<void> {
        this.db = this.client.db(dbName);
    }

    public async findAll(collection: string, query: Record<string, any>): Promise <any[]> {
        return this.db.getCollection(collection).find(query);
    }

    public async insertOne(collection: string, query: Record<string, any>): Promise<void> {
        const response = await this.db.getCollection(collection).insertOne(query);
        console.log(response)
    }

    public async disconnect(): Promise<void> {
        this.client.close();
    }

    public isConnected():boolean {
        return true ? this.client != null : false; 
    }
}

export default Database;