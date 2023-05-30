
export default async function updateService(parent, args, context, info) {
    // console.log("args", args);
    // console.log("context.mutations ", context.mutations)

    const updatedServiceResponse = await context.mutations.updateService(context, args);
    // console.log("serviceResponse ", updatedServiceResponse);
    if (updatedServiceResponse) {
        return updatedServiceResponse;
    }
    else {
        return null
    }
}