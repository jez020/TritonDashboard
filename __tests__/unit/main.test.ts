import { describe, expect, test } from 'vitest';
import fetch from 'node-fetch';
import dotenv from "dotenv";
dotenv.config();

// Check each site route to make sure all are working as expected
describe('Check site', () => {
  const port = process.env.PORT || 3000;

  // Test the unitTest route to make sure server is online
  test('Test server online', async () => {
    const res : {} = await (await fetch('http://localhost:' + port + 
      '/unitTest')).json();
    if (!('online' in res)) {
      throw new Error("Response does not have 'online' property");
    }
    expect(res.online).toBe(true);
  });

});
