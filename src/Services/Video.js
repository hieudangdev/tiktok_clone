import * as httprequest from '~/Utils/HttpRequest'



export const VideoApi = async (type = 'for-you', page = "1") => {
    try {

        const response = await httprequest.get(
            'videos',
            {
                params: {
                    type,
                    page,
                }
            })
        return response.data

    } catch (error) {
        console.log(error)
    }
}
