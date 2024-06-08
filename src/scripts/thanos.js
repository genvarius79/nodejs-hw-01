import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const newArr = JSON.parse(data).filter(() => Math.random() > 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(newArr, null, 2), 'utf-8');
  } catch (err) {
    console.error(`Error processing the contacts:: ${err.message}`);
  }
};

await thanos();
