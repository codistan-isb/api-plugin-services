export default async function createServices(context, input) {
  try {
    const now = new Date();
    let { Service } = context.collections;
    let { name, options } = input;
    let data = {
      name,
      options,
      createdAt: now,
    };
    let createdServices = await Service.insertOne(data);
    return createdServices.ops[0];
  } catch (err) {
    return err;
  }
}
