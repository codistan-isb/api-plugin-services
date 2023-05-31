import ReactionError from "@reactioncommerce/reaction-error";

export default async function deleteService(parent, args, context, info) {
  if (context.user === undefined || context.user === null) {
    throw new ReactionError(
      "access-denied",
      "Unauthorized access. Please Login First"
    );
  }
  const deleteServiceResponse = await context.mutations.deleteService(
    context,
    args
  );
  // console.log("serviceResponse ", deleteServiceResponse);
  return deleteServiceResponse;
}
