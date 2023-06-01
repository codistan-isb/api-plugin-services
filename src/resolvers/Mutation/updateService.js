import ReactionError from "@reactioncommerce/reaction-error";
import { decodeShopOpaqueId } from "../../xforms/id.js";

export default async function updateService(parent, { input }, context, info) {
  if (context.user === undefined || context.user === null) {
    throw new ReactionError(
      "access-denied",
      "Unauthorized access. Please login first"
    );
  }
  // console.log("input", input);
  const { service: ServiceInput, shopId, serviceId } = input;
  const updatedServiceResponse = await context.mutations.updateService(
    context,
    {
      service: ServiceInput,
      serviceId: serviceId,
      shopId: decodeShopOpaqueId(shopId),
    }
  );
  // console.log("serviceResponse ", updatedServiceResponse);
  if (updatedServiceResponse) {
    return updatedServiceResponse;
  } else {
    return null;
  }
}
