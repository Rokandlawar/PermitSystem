import axios from "axios";
const token = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkRBMzRGOTQ1NTMyMDg4RkJERTMzODFDNjc0MDlBQzQ1Rjk4ODk3NEMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoidXBhYWRtaW4iLCJzdWIiOiIwRDcyWEk0MUdRRlk2TUlMTEtDM0VSQ1ROMllRNFlDMjJJMzlGOVRHNUZURVpXVVZCMSIsInRva2VuX3VzYWdlIjoiYWNjZXNzX3Rva2VuIiwianRpIjoiMGJkZDc4NWYtYzY4OC00NmJmLWFkYjUtZmQ4YmJlNjZjNTIxIiwic2NvcGUiOlsicHJvZmlsZSIsIk9wZW5JZCJdLCJhdWQiOlsiQ29yZUNsaWVudCIsIkdhdGV3YXlDbGllbnQiLCJyZXNvdXJjZV9zZXJ2ZXIiLCJNYXN0ZXJBZG1pbkNsaWVudCIsIlVQQU1vZHVsZUFkbWluQ2xpZW50IiwiVVBBQWRtaW5Db25maWdDbGllbnQiLCJVUEFBcHBsaWNhdGlvbkNsaWVudCIsIlVQQVBlcm1pdENsaWVudCIsIlVQQU5vdGlmaWNhdGlvbkNsaWVudCJdLCJuYmYiOjE1ODI4NDY5MjcsImV4cCI6MTU4MjkzMDkyNywiaWF0IjoxNTgyODQ2OTI3LCJpc3MiOiJodHRwOi8vZGV2ZWxvcG1lbnQuZGVsYXNvZnQuY29tOjg0NDMvYXV0aCJ9.PlTHrzvULg38BLd1asGRflLsqboTmaNypw0df_PqPPQXYDkK_4UGcYXnFdK0LgdqiCZpQALx5ZWGBU8k3-Y8owFonEqN2Po_-uMSnMgCqeJ0e0XCbM0UYNZegjLFWEZhHI8EISuXyXkcPZgE0wWenOw-8WmWNCpKtzRNe7gQKGos2WH_1z2Ym0l0Y-7YrJVZz0UlZf9KoBH-F4zS8S5IH1NGKw9m7Yvx89Dy4Uo13K_nDIPkIZTkSJtqKStdC01ZasZSgWLRUJghgKn4-72RNWrSHuMh7Oapu8FBc-w1jnW3UE-36nez5QC3-XRa0_hHqrD1r1FBcfVjNClM9Itw5w'

export const GetData = (url) =>
    fetch(`${url}`, {
        method: 'GET',
        headers: {
            'Authorization': token
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
