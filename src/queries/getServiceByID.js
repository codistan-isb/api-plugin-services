import ObjectID from "mongodb";

export default async function getServiceByID(id, context) {
    let { Service } = context.collections;
    let allServices = await Service.findOne({ _id: ObjectID.ObjectId(id) });
    // console.log("allServices ", allServices)
    if (allServices) {
        return allServices;
    } else {
        return null;
    }
}