const createApiCache = () => {
    const cache = new Map(); 
    const generateCacheKey = (url, options) => {
        return `${url}:${JSON.stringify(options)}`;
    }; 
    const fetchWithCache = (url, options = {}) => {
        const cacheKey = generateCacheKey(url, options);  // Check if response is in cache
        if (cache.has(cacheKey)) {
            return Promise.resolve(cache.get(cacheKey));
        }  // Make API call if not cached
        return fetch(url, options)
            .then(response => response.json())
            .then(data => {
                cache.set(cacheKey, data);
                return data;
            });
    };
     const clearCache = () => {
        cache.clear();
    }; 
    return {
        fetchWithCache,
        clearCache,
    };
};
// Usage example
const apiCache = createApiCache(); 
apiCache.fetchWithCache('https://api.example.com/data')
    .then(data => {
        console.log('Data from API:', data);
    })
    .catch(error => {
        console.error('API call failed:', error);
    });


//API cache module with expiry time
const createCachedAPICall = (cacheDuration) => {
    const cache = {}; 
    const generateKey = (path, config) => {
        return `${path}:${JSON.stringify(config)}`;
    }; 
    return async function (path, config = {}) {
        const key = generateKey(path, config);
        const currentTimestamp = Date.now(); if (!cache[key] || currentTimestamp > cache[key].expiry) {
            try {
                const response = await fetch(path, config);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                cache[key] = { data, expiry: currentTimestamp + cacheDuration };
            } catch (error) {
                console.error('Fetch error:', error);
                throw error;
            }
        } return cache[key].data;
    };
};  // Usage example
const cachedAPICall = createCachedAPICall(1500); 
cachedAPICall('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });