import {getdata}  from './APIHelper';
import * as config from './APIConfig';
export const getBooks = async () => {
    const endpoint = config.GET_BOOKS_BY_NAME_ENDPOINT + config.KEY_HEADER;
    return await getData(config.GOOGLE_BOOKS_URL, endpoint);
}