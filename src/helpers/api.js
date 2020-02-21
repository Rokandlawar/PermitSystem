/**        
      *********************************************************
      Description: handles the request to getdata, post data or put data from the service.
      Required props:  url is required for all the functions.
      limitations    : N/A
      *********************************************************
**/

import axios from "axios";
const token = ''
export const GetData = (url) =>
    fetch(`${url}`, {
        method: 'GET',
        headers: {
            'Authorization': ''
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw response.json();
            }
        })


export const PostData = (url, bodyval) => {
    return fetch((`${url}`), {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': token || '',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Credentials": "true"
        },
        body: JSON.stringify(bodyval)

    }).then(response => {
        if (response.ok) { console.log('ok response', response); return response.json() }
        else {
            throw response.json();
        }
        //return response.json()
    })
}

export const PostDataNoBody = (url) => {
    return fetch((`${url}`), {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': token || '',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Credentials": "true"
        }
    }).then(response => {
        if (response.ok) { console.log('ok response', response); return response.json() }
        else {
            throw response.json();
        }
        //return response.json()
    })
}

export const PostFormData = (url, bodyval) => {
    let formData = new URLSearchParams();
    const bodyvalkeys = Object.keys(bodyval)
    bodyvalkeys.forEach(each => {
        formData.set(each, bodyval[each])
    })

    return fetch((`${url}`), {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': token || '',
            'Content-Type': 'application/x-www-form-urlencoded',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Credentials": "true"
        },
        body: formData

    }).then(response => {
        if (response.ok) { console.log('ok response', response); return response.json() }
        else {
            throw response.json();
        }
        //return response.json()
    })
}

export const PutData = (url, bodyval) => {
    if (bodyval) {
        return fetch((`${url}`), {
            method: 'PUT',
            headers: {
                //'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token || '',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Credentials": "true"


            },
            body: JSON.stringify(bodyval)

        }).then(response => {
            if (response.ok) { console.log('ok response', response); return response.json() }
            else {
                throw response.json();
            }
            //return response.json()
        })
    }
    else{
        return fetch((`${url}`), {
            method: 'PUT',
            headers: {
                //'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token || '',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Credentials": "true"
            },
            body: {}

        }).then(response => {
            if (response.ok) { console.log('ok response', response); return response.json() }
            else {
                throw response.json();
            }
            //return response.json()
        })
    }
    // else {
    //     return fetch((`${url}`), {
    //         method: 'PUT',
    //         headers: {
    //             //'Content-Type': 'application/x-www-form-urlencoded',
    //             'Authorization': token || '',
    //             'Content-Type': 'application/json',
    //         }

    //     }).then(response => response.json()).catch(res => res)
    // }

}

export const PutFormData = (url, bodyval) => {
    let formData = new URLSearchParams();
    const bodyvalkeys = bodyval && Object.keys(bodyval)
    bodyvalkeys && bodyvalkeys.forEach(each => {
        formData.set(each, JSON.stringify(bodyval[each]))
    })
    if (bodyval) {
        return fetch((`${url}`), {
            method: 'PUT',
            headers: {
                //'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token || '',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Credentials": "true"


            },
            body: JSON.stringify(bodyval)

        }).then(response => {
            if (response.ok) { console.log('ok response', response); return response.json() }
            else {
                throw response.json();
            }
            //return response.json()
        })
    }
    else{
        return fetch((`${url}`), {
            method: 'PUT',
            headers: {
                //'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': token || '',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Credentials": "true"
            },
            body: {}

        }).then(response => {
            if (response.ok) { console.log('ok response', response); return response.json() }
            else {
                throw response.json();
            }
            //return response.json()
        })
    }
}
