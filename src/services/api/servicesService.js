import servicesData from "@/services/mockData/services.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const servicesService = {
  async getAll() {
    await delay(300);
    return [...servicesData];
  },

  async getById(id) {
    await delay(200);
    const service = servicesData.find(s => s.Id === parseInt(id));
    if (!service) {
      throw new Error("Service not found");
    }
    return { ...service };
  },

  async create(serviceData) {
    await delay(500);
    const newService = {
      ...serviceData,
      Id: Math.max(...servicesData.map(s => s.Id), 0) + 1
    };
    servicesData.push(newService);
    return { ...newService };
  },

  async update(id, serviceData) {
    await delay(400);
    const index = servicesData.findIndex(s => s.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Service not found");
    }
    servicesData[index] = { ...servicesData[index], ...serviceData };
    return { ...servicesData[index] };
  },

  async delete(id) {
    await delay(300);
    const index = servicesData.findIndex(s => s.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Service not found");
    }
    servicesData.splice(index, 1);
    return { success: true };
  }
};