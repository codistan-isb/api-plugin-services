import ObjectID from "mongodb";
export default async function deleteService(context, input) {
  let { id } = input;
  let { Service } = context.collections;
  let data = {
    _id: ObjectID.ObjectId(id),
  };
  let updatedService = await Service.deleteOne(data);
  if (updatedService.deletedCount > 0) return true;
  else return false;
}
