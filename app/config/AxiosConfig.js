import axios from 'axios'
// Create instance called instance
const instance = axios.create({
    baseURL: ' http://localhost:8080/api/v1'
    // headers: {
    //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjEzNzU1Mzg3fQ.OIB4CPXGTkW3XcXZ_kJfaGwyORs77-nh1qVdfOs-0tv0LZfx8ukZYwQPFEg9-ePhRlfkgmSER4aZ6KKQRbQQ2Q'
    // }
});


const axiosCopnfig = {
    getData: (url, data) =>
        instance({
            method: 'GET',
            url: `${url}`
        }),
    postData: (url, data) =>
        instance({
            method: 'POST',
            url: url,
            data: data
        }),
    postDataWithToken: (url, data) =>
        instance({
            method: 'POST',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            },
            data: data
        }),
    patchDataWithToken: (url, data) =>
        instance({
            method: 'PATCH',
            url: url,
            headers: {
                'Content-Type': 'application/json-patch+json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            data: data
        }),
    putDataWithToken: (url, data) =>        
        instance({
            method: 'PUT',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            },
            data: data
        }),
    getDataWithToken: (url) =>
        instance({
            method: 'GET',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            }
        }),
    getDataWithTokenAndRequestParams: (url, data) =>
        instance({
            method: 'GET',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            },
            params: {
                ...data
            }

        }),
    getToken: (url, data) =>
        instance({
            method: 'POST',
            url: url,
            data: data
        })
}

export default axiosCopnfig;