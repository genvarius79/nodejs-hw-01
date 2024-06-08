import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const currentContact = JSON.parse(data);

    currentContact.push(createFakeContact());

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(currentContact, null, 2),
      'utf-8',
    );
  } catch (err) {
    console.error(err);
  }
};

await addOneContact();
