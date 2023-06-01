import ObjectID from "mongodb";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function getServiceByID(id, context) {
    let { Service } = context.collections;
    let allServices = await Service.findOne({ _id: ObjectID.ObjectId(id) });
    // console.log("allServices ", allServices)
    if (allServices) {
        return allServices;
    } else {
        throw new ReactionError("not-found", "Service not found");
    }
}