export default async function getAllServices(context) {
    // console.log("args", args);
    let { Service } = context.collections;
    let allServices = await Service.find().toArray();
    if (allServices?.length) {
        // console.log("allServices ", allServices)
        return allServices;
    } else {
        return [];
    }
}