import { Collection, MongoClient, MongoClientOptions, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: "./.env" })



export class Database {
    private uri: string;
    private options: MongoClientOptions;

    private db: any;
    private client: MongoClient | null = null;

    constructor(uri: string, options?: MongoClientOptions) {
        this.uri = uri;
        this.options = options || {};
    }

    public async connect(): Promise<void> {
        try {
            this.client = await MongoClient.connect(this.uri, this.options);
            this.db = this.client.db();
            console.log("Connected to Database")
        } catch(e) {
            console.log("Failed to connect to database", e);
        }
    }

    public async findAll(collectio: string, query: Record<string, any>): Promise <> {}
}