import axios from "axios";
const token = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkY2NEI1QzM0RTJDNTQwMzkyNjZCNjk5REUyODI1QzVDNTUwQTdCMDUiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoidXBhYWRtaW4iLCJzdWIiOiJYQ0YxWFRJV09EUUFYUDhWUUswSURNTjgxNzVNN0Y3V1hCTzNLQkMzQzVFQlJSOUdUMyIsInRva2VuX3VzYWdlIjoiYWNjZXNzX3Rva2VuIiwianRpIjoiNDYwMDFlMmUtZTk3ZS00YmJhLWE1NjMtYzQ2N2UzZGY3ZDY1Iiwic2NvcGUiOlsicHJvZmlsZSIsIk9wZW5JZCJdLCJhdWQiOlsiQ29yZUNsaWVudCIsIkdhdGV3YXlDbGllbnQiLCJyZXNvdXJjZV9zZXJ2ZXIiLCJNYXN0ZXJBZG1pbkNsaWVudCIsIlVQQU1vZHVsZUFkbWluQ2xpZW50IiwiVVBBQWRtaW5Db25maWdDbGllbnQiLCJVUEFBcHBsaWNhdGlvbkNsaWVudCIsIlVQQVBlcm1pdENsaWVudCIsIlVQQU5vdGlmaWNhdGlvbkNsaWVudCJdLCJuYmYiOjE1ODQzNjY3MzUsImV4cCI6MTU4NDQ1MDczNSwiaWF0IjoxNTg0MzY2NzM1LCJpc3MiOiJodHRwOi8vZGV2ZWxvcG1lbnQuZGVsYXNvZnQuY29tOjg0NDMvYXV0aCJ9.D0qCff7e05xTDoym2BFAYVM2JlaLb-UVu1jkF0NxTuc8V7zFLmcSoTlv2XXGtpcIkr8Hkin2fdpgl_g8H4R7O1BUFvsCSInU-yLtvugvs2NYq8NOZv3BPVcqijomKzAYrELmANQC3TrwujghhqonTwy_i5JRAfZfRAdRyo-uPptfPg4ThT9mFcBadfJkA7Zs2OiSXrjpcbBke2KYlITYV5CNHxsJlLGSZzflnFxAq1WYdAMPKWoH7WdJSMjSD_Mdg5iehzLJT0qvQ8Zvqp4TH9YCAosfMCTsFNZiTJd3vVRGJyu-m4fdSaZR868Tf4XutmnA3YWcfMzqCTSrwmr4Lw'
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
