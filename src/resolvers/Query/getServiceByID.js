import ReactionError from "@reactioncommerce/reaction-error";
export default async function getServiceByID(parent, args, context, info) {
    if (context.user === undefined || context.user === null) {
        throw new ReactionError(
            "access-denied",
            "Unauthorized access. Please login first"
        );
    }
    const { id } = args;
    // console.log("args ", id)
    const serviceResponse = await context.queries.getServiceByID(id, context);
    // console.log("getServiceByID ", serviceResponse)
    return serviceResponse;
}
