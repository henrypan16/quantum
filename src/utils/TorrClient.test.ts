import { expect, test, describe } from 'vitest'
import { TorrClient } from './TorrClient'

describe('Test torrent API', async () => {
    const response = await TorrClient.login({username:"admin", password:"adminadmin"});

    // beforeEach(async () => {
    //     // tell vitest we use mocked time
    //     response = await TorrClient.login({username:"admin", password:"adminadmin"})
    // })

    test('login', () => {
        expect(response.status).toBe(200);
      })

    test('get all torrents', async () => {
        await TorrClient.getTorrents().then((data) => {expect(data.status).toBe(200)});
    })

    test('get torrent info', async () => {
        await TorrClient.getProperties().then((data) => {expect(data.status).toBe(200)});
    })
});
