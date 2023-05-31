import ReactionError from "@reactioncommerce/reaction-error";

export default async function updateService(parent, args, context, info) {
    if (context.user === undefined || context.user === null) {
        throw new ReactionError(
            "access-denied",
            "Unauthorized access. Please Login First"
        );
    }
    const updatedServiceResponse = await context.mutations.updateService(context, args);
    // console.log("serviceResponse ", updatedServiceResponse);
    if (updatedServiceResponse) {
        return updatedServiceResponse;
    }
    else {
        return null
    }
}