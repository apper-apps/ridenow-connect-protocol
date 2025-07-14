import vehiclesData from "@/services/mockData/vehicles.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const vehiclesService = {
  async getAll() {
    await delay(300);
    return [...vehiclesData];
  },

  async getById(id) {
    await delay(200);
    const vehicle = vehiclesData.find(v => v.Id === parseInt(id));
    if (!vehicle) {
      throw new Error("Vehicle not found");
    }
    return { ...vehicle };
  },

  async create(vehicleData) {
    await delay(500);
    const newVehicle = {
      ...vehicleData,
      Id: Math.max(...vehiclesData.map(v => v.Id), 0) + 1
    };
    vehiclesData.push(newVehicle);
    return { ...newVehicle };
  },

  async update(id, vehicleData) {
    await delay(400);
    const index = vehiclesData.findIndex(v => v.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Vehicle not found");
    }
    vehiclesData[index] = { ...vehiclesData[index], ...vehicleData };
    return { ...vehiclesData[index] };
  },

  async delete(id) {
    await delay(300);
    const index = vehiclesData.findIndex(v => v.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Vehicle not found");
    }
    vehiclesData.splice(index, 1);
    return { success: true };
  }
};