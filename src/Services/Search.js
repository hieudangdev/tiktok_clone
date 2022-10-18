import * as httprequest from '~/Utils/HttpRequest'



export const search = async (q, type = 'less') => {
    try {

        const response = await httprequest.get(
            'users/search',
            {
                params: {
                    q,
                    type,
                }
            })
        return response.data

    } catch (error) {
        console.log(error)
    }
}
