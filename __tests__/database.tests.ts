import Database from "../src/database";
const db = new Database(process.env.MONGO_URI);

beforeAll(async () => {
    await db.connect();
});

afterAll(async () => {
    await db.disconnect();
});

describe('Database', () => {
    it('should connect to database', async () => {
        expect(db.isConnected()).toBeTruthy();
    });
});
