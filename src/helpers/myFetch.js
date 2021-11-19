import axios from "axios";

export const myFetch = async ({url, options}) => {
    const result =  await axios({
        validateStatus: false,
        method: options?.method || "GET",
        url: url,
        data: options?.body,
        headers: options?.headers || {"Content-Type": "application/json"},
        withCredentials: true,
    });
    if (result.status < 200 || result.status >= 300) {
        throw new Error();
    }
    try {
        return result.data;
    } catch (e) {
        return result;
    }
};