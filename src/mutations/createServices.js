import Random from "@reactioncommerce/random";
// import { encodeProductOpaqueId } from "../xforms/id.js";

export default async function createServices(context, input) {
  const { service: ServiceInput, shopId } = input;
  const createdAt = new Date();
  let { Service } = context.collections;
  // const newProductId = Random.id();

  const createService = {
    // _id: newProductId,
    name: ServiceInput.name,
    options: ServiceInput.options,
    ancestors: ServiceInput.ancestorId ? ServiceInput.ancestorId : [],
    imageLink: ServiceInput.imageLink,
    description: ServiceInput.description,
    createdAt,
    shopId,
    updatedAt: createdAt,
  };
  let createdServices = await Service.insertOne(createService);
  console.log("createdServices ", createdServices.ops[0]._id)
  // return {
  //   _id: encodeProductOpaqueId(createdServices.ops[0]._id),
  //   ...createdServices.ops[0]
  // }
  return createdServices.ops[0];
}
