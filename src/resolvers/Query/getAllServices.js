export default async function getAllServices(parent, args, context, info) {
    // console.log("args", args);
    const serviceResponse = await context.queries.getAllServices(context);
    // console.log("serviceResponse ", serviceResponse);
    return serviceResponse;
}