import { GetData, PostData, PutData, PostFormData } from './requests'


export const createRequest = (request, results, routeValues) => {
    let ids = []
    if (request) {
        const { type, url, routeProps, matchProps, ...otherProps } = request
        ids = ids.concat(createIds(routeProps, routeValues))
        ids = ids.concat(createIds(matchProps, results))
        return { url: url, body: results, type: type, id: ids }
    }
    else return null

}


export const createIds = (props, results) => {
    if (Array.isArray(props)) {
        return props.map(each => {
            const { key, name } = each
            return { key: key, value: results[name] }
        })
    }
    else return []
}

export const requestApi = (request) => {
    if (request) {
        let {
            type,
            body,
            url, //query part of url 
            id
        } = request

        id && id.forEach(each => {
            const { key, value } = each
            if (url) url = `${url.replace(`{${key}}`, value)}`;
        });

        switch (type) {
            case 'get':
                return GetData(url)
            case 'put':
                return PutData(url, body)
            case 'post':
                return PostData(url, body)
        }
    }
    else return null
}