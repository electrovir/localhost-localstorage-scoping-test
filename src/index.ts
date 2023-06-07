import {randomString} from '@augment-vir/browser';
import type LocalForageType from 'localforage';
// @ts-ignore this explicit .js file has no typings
import localForageImport from 'localforage/src/localforage.js';

export const localForage: typeof LocalForageType = localForageImport;

const testItemKey = 'test-item';

async function main() {
    const item = await localForage.getItem(testItemKey);

    console.log(`item was ${item ? '' : 'not'}stored`);

    if (!item) {
        const newValue = randomString();
        await localForage.setItem(testItemKey, newValue);
        console.log('setting value', newValue);
    }
}

main();
