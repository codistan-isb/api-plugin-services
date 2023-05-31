import ObjectID from "mongodb";

export default async function updateService(context, input) {
  try {
    const now = new Date();
    let { Service } = context.collections;
    const { id, name, options } = input;
    const updatedContact = {};
    if (name) updatedContact.name = name;
    if (options) updatedContact.options = options;
    updatedContact.updatedAt = now;
    let approvedServices = await Service.findOneAndUpdate(
      {
        _id: ObjectID.ObjectId(id),
      },
      {
        $set: updatedContact,
      },
      {
        new: true,
      }
    );
    if (approvedServices) {
      return await Service.findOne({ _id: ObjectID.ObjectId(id) });
    } else return null;
  } catch (err) {
    return err;
  }
}
