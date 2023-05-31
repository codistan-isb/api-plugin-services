export default async function getAllServices(context) {
    let { Service } = context.collections;
    let allServices = await Service.find().sort({ createdAt: -1 }).toArray();
    if (allServices?.length) {
        return allServices;
    } else {
        return [];
    }
}