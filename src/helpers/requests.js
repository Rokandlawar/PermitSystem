import axios from "axios";
const token = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjEzRTQ3NkRFNUZGRkZGNDA2OENFRjY1NkQ5RjI0MUJDNEMwODAxM0UiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoidXBhYWRtaW4iLCJzdWIiOiJDMjBUNTZPRUhPQjNJVTJLRUI1OE43SUYxSzAzSUpTVFNOVEZVWjE2Qlc1TEtPQVQwNSIsInRva2VuX3VzYWdlIjoiYWNjZXNzX3Rva2VuIiwianRpIjoiZjhmZTBjZTQtOWNlMy00Yjc4LThjNmEtOWQ4YzI3Njg1MWY5Iiwic2NvcGUiOlsicHJvZmlsZSIsIk9wZW5JZCJdLCJhdWQiOlsiQ29yZUNsaWVudCIsIkdhdGV3YXlDbGllbnQiLCJyZXNvdXJjZV9zZXJ2ZXIiLCJNYXN0ZXJBZG1pbkNsaWVudCIsIlVQQU1vZHVsZUFkbWluQ2xpZW50IiwiVVBBQWRtaW5Db25maWdDbGllbnQiLCJVUEFBcHBsaWNhdGlvbkNsaWVudCIsIlVQQVBlcm1pdENsaWVudCIsIlVQQU5vdGlmaWNhdGlvbkNsaWVudCJdLCJuYmYiOjE1ODIzODIwMjksImV4cCI6MTU4MjQ2NjAyOSwiaWF0IjoxNTgyMzgyMDI5LCJpc3MiOiJodHRwOi8vZGV2ZWxvcG1lbnQuZGVsYXNvZnQuY29tOjg0NDMvYXV0aCJ9.RLUKv2wf6usGQzfQhCfDbzzb8OUnJQl1j8GmK1Pn06Va4sh38OWkOW68bGD8I7reyuxDoctk6Q8hYy_d6zhm1la6h59gV1A9t1GrG7isz5mYV6EGLGiSNSx7LDdB_r2PM27tRN6fcnbSyRSmWudY7XwIfwLClpYQkRyn7jsN0VhYmLsP1-SK23uqOlScKPXeL3t6fO17ZwgE3pN3CvWxBQM7qIehZsN6y2NLDNL3pmB5pikO_ldc0FvsGH5Yq9nOaskRBgTFvdRqXrr7k_2tTzYc4Lg5kk0E1M-cT6Nx_3CnnyYNc13xvv5y8YjXeV42iGuatPCRrUtH5q9T--DNHA'

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
