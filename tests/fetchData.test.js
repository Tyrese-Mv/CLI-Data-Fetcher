const fetchData = require('../api');

beforeEach(() => {
    fetch.resetMocks(); 
});

test('fetchData returns expected data from API', async () => {
    const mockData = { id: 1, title: 'Test Todo' };

    
    fetch.mockResponseOnce(JSON.stringify(mockData));

    const data = await fetchData('https://jsonplaceholder.typicode.com/todos/1');

    expect(data).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
});

test('fetchData logs error on failure', async () => {
    console.error = jest.fn();

    fetch.mockReject(() => Promise.reject('API is down'));

    const result = await fetchData('https://example.com');
    expect(result).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith('Error fetching data:', 'API is down');
});