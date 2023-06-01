import ObjectID from "mongodb";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function updateService(context, input) {
  const {
    service: ServiceInput,
    shopId,
    serviceId
  } = input;
  let { Service } = context.collections;
  const currentService = await Service.findOne({ _id: ObjectID.ObjectId(serviceId) });
  if (!currentService) throw new ReactionError("not-found", "Service not found");

  if (Object.keys(ServiceInput).length === 0) {
    throw new ReactionError("invalid-param", "At least one field to update must be provided");
  }
  ServiceInput.updatedAt = new Date();
  const modifier = { $set: ServiceInput };
  const UpdateServiceResponse = await Service.findOneAndUpdate(
    {
      _id: ObjectID.ObjectId(serviceId),
      shopId
    },
    modifier,
    {
      returnOriginal: true
    }
  );
  // console.log("value ", UpdateServiceResponse.value);
  if (UpdateServiceResponse.value) {
    return UpdateServiceResponse.value
  }
  else {
    throw new ReactionError("server-error", "Try again later");
  }


}
