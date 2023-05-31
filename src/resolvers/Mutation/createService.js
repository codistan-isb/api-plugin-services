import ReactionError from "@reactioncommerce/reaction-error";

export default async function createService(parent, args, context, info) {
    if (context.user === undefined || context.user === null) {
        throw new ReactionError(
            "access-denied",
            "Unauthorized access. Please Login First"
        );
    }
    const serviceResponse = await context.mutations.createServices(context, args);
    console.log("serviceResponse ", serviceResponse);
    return serviceResponse;
}