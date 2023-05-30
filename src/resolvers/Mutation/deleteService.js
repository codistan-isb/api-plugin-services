export default async function deleteService(parent, args, context, info) {
    // console.log("args", args);
    const deleteServiceResponse = await context.mutations.deleteService(
        context,
        args
    );
    // console.log("serviceResponse ", deleteServiceResponse);
    return deleteServiceResponse;
}
