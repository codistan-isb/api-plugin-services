import ReactionError from "@reactioncommerce/reaction-error";
import { decodeShopOpaqueId } from "../../xforms/id.js";

export default async function createService(parent, { input }, context, info) {
    if (context.user === undefined || context.user === null) {
        throw new ReactionError(
            "access-denied",
            "Unauthorized access. Please Login First"
        );
    }
    const {
        service: ServiceInput,
        shopId,
    } = input;
    const serviceResponse = await context.mutations.createServices(context, {
        service: ServiceInput,
        shopId: decodeShopOpaqueId(shopId),
    });
    return serviceResponse;
}