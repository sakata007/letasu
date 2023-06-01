import sqlite3 from "sqlite3";
import { join } from "path";

import { QRCodesDB } from "./qr-codes-db.js";

const database = new sqlite3.Database(join(process.cwd(), "database.sqlite"));

// Initialize SQLite DB
QRCodesDB.db = database;
QRCodesDB.init();

const shopify = shopifyApp({
    api: {
        apiVersion: LATEST_API_VERSION,
        restResources,
        billing: undefined, // or replace with billingConfig above to enable example billing
    },
    auth: {
        path: "/api/auth",
        callbackPath: "/api/auth/callback",
    },
    webhooks: {
        path: "/api/webhooks",
    },
    sessionStorage: new SQLiteSessionStorage(database),
});
