export const getData = async (url , endpoint) => {
    try{
        const fullURL = url + endpoint;
        const response = await fetch(fullURL);
        const responseJson = await response.json();
        return responseJson;
    }
    catch (error){
        return error.toString();
    }
}; 