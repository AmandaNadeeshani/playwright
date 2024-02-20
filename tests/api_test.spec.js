import { test, expect } from '@playwright/test';

//1) Get list of all objects
test('API GET REQUEST', async ({ request }) => {
    const response = await request.get('https://api.restful-api.dev/objects')
    expect(response.status()).toBe(200)
    const text = await response.text();
    expect(text).toContain(' abc')
    console.log(await response.json())
})

//2) Get a single object by id
test('Get a single object by id', async ({ request }) => {

    const response = await request.get('https://api.restful-api.dev/objects/7')
    expect(response.status()).toBe(200)
    const text = await response.text();
    expect(text).toContain('Apple MacBook Pro 16')
    console.log(await response.json())
})

//3) Add an object using POST
test('Add an object using POST', async ({ request }) => {

    const response = await request.post('https://api.restful-api.dev/objects', {
        data: {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }
    })
    expect(response.status()).toBe(200)
    const text = await response.text();
    expect(text).toContain('Intel Core i9')
    console.log(await response.json())
})

//4) Update the object using PUT
test('Update the object using PUT', async ({ request }) => {

    const response = await request.post('https://api.restful-api.dev/objects/7', {
        data: {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2023,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }
    })
    expect(response.status()).toBe(200)
    const text = await response.text();
    expect(text).toContain('Intel Core i9')
    console.log(await response.json())
})


//5) Delete the object using DELETE
test(' Delete the object using DELETE', async ({ request }) => {

    const response = await request.delete('https://api.restful-api.dev/objects/6')
    expect(response.status()).toBe(204)

})
