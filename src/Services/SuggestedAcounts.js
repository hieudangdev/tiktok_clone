import * as httprequest from '~/Utils/HttpRequest'



export const Suggest = async (page = "1", per_page) => {
    try {

        const response = await httprequest.get(
            'users/suggested',
            {
                params: {
                    page,
                    per_page,
                }
            })
        return response.data

    } catch (error) {
        console.log(error)
    }
}
