// import saveSettings from '$lib/db'

export async function post(request) {
    console.log(request.body)
    return{
        body: {'test':'test'}
    }
}