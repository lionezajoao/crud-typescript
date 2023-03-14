import Database from "../src/database";
import dotenv from 'dotenv';
dotenv.config({ path: "./.env" })
const db = new Database(process.env.MONGO_URI);

beforeAll(async () => {
    try {
        await db.connect();
        console.log('Connected');
        
    } catch(e) {
        console.log("Error trying to connect to MongoDB database", e);
    }
});

afterAll(async () => {
    try {
        await db.disconnect();
        console.log("Disconnected");
    } catch(e) {
        console.log("Error trying to disconnect to MongoDB database", e);
        return
    }
});

describe('Database', () => {
    it('should connect to database', async () => {
        console.log("Is connected?");
        expect(db.isConnected()).toBeTruthy();
    });
});
