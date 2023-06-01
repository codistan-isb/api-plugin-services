import ReactionError from "@reactioncommerce/reaction-error";
import { decodeShopOpaqueId } from "../../xforms/id.js";

export default async function updateService(parent, { input }, context, info) {
  if (context.user === undefined || context.user === null) {
    throw new ReactionError(
      "access-denied",
      "Unauthorized access. Please Login First"
    );
  }
  // console.log("input", input);
  const { service: ServiceInput, shopId, productId } = input;
  const updatedServiceResponse = await context.mutations.updateService(
    context,
    {
      service: ServiceInput,
      productId: productId,
      shopId: decodeShopOpaqueId(shopId),
    }
  );
  console.log("serviceResponse ", updatedServiceResponse);
  if (updatedServiceResponse) {
    return updatedServiceResponse;
  } else {
    return null;
  }
}
