/**
 * Asynchronously fetches JSON data from a given URL.
 *
 * This function performs a network request to the provided URL using the Fetch API.
 * If the request is successful, it parses the response body as JSON and returns the result.
 * If an error occurs during the request or response parsing, the error is caught and logged to the console.
 *
 * @async
 * @function fetchData
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<Object|undefined>} - A promise that resolves to the parsed JSON data,
 *                                        or `undefined` if an error occurs.
 */

async function fetchData(url) {
    try{
        const response = await fetch(url)
        const data = await response.json();
        return data;
    }
    catch (error){
        console.error('Error fetching data:', error);
    }
}
module.exports = fetchData;
