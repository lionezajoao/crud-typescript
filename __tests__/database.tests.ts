import Database from "../src/database";

describe('Database', () => {
    const db = new Database(process.env.MONGO_URI);

    beforeAll(async () => {
        await db.connect();
    });

    afterAll(async () => {
        await db.disconnect();
    });

    it('should connect to database', async () => {
        expect(db.isConnected()).toBeTruthy();
    });
});
