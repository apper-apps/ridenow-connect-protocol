import routesData from "@/services/mockData/routes.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const routesService = {
  async getAll() {
    await delay(300);
    return [...routesData];
  },

  async getById(id) {
    await delay(200);
    const route = routesData.find(r => r.Id === parseInt(id));
    if (!route) {
      throw new Error("Route not found");
    }
    return { ...route };
  },

  async create(routeData) {
    await delay(500);
    const newRoute = {
      ...routeData,
      Id: Math.max(...routesData.map(r => r.Id), 0) + 1
    };
    routesData.push(newRoute);
    return { ...newRoute };
  },

  async update(id, routeData) {
    await delay(400);
    const index = routesData.findIndex(r => r.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Route not found");
    }
    routesData[index] = { ...routesData[index], ...routeData };
    return { ...routesData[index] };
  },

  async delete(id) {
    await delay(300);
    const index = routesData.findIndex(r => r.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Route not found");
    }
    routesData.splice(index, 1);
    return { success: true };
  }
};