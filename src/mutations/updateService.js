import ObjectID from "mongodb";

export default async function updateService(context, input) {
    // console.log("input ", input);
    try {
        // console.log(context.collections)
        let { Service } = context.collections;
        const { id, name, options } = input;
        // console.log(args)
        // console.log(id)
        // console.log(options)
        // console.log(options.price)
        const updatedContact = {};
        if (name) updatedContact.name = name;
        if (options) updatedContact.options = options;
        // if (options) updatedContact.options.price = options.price;
        // console.log("updatedContact ", updatedContact)
        let approvedServices = await Service.findOneAndUpdate(
            {
                _id: ObjectID.ObjectId(id),
            },
            {
                $set: updatedContact
            },
            {
                new: true
            }
        );
        // console.log("approvedServices ", approvedServices);

        if (approvedServices) {
            // const resp = await Service.findOne({ _id: ObjectID.ObjectId(id) })
            // console.log("Update ", resp)
            return await Service.findOne({ _id: ObjectID.ObjectId(id) })
        }
        else return null

    }
    catch (err) {
        return err
    }
}