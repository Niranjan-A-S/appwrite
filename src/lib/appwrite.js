import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66192f72384b0238b1dc');

export const account = new Account(client);

export { ID } from 'appwrite';
