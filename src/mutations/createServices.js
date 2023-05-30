export default async function createServices(context, input) {
    // console.log("input ", input);
    try {
        // console.log(context.collections)
        let { Service } = context.collections;
        let { name, options } = input;

        let data = {
            name,
            options,
        }; 
        let createdServices = await Service.insertOne(data);
        console.log("Created transaction is ", createdServices);
        // console.log("Created  is ", createdServices.ops);
        return createdServices.ops[0];

    }
    catch (err) {
        return err
    }
}