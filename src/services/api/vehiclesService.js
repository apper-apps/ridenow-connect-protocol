const tableName = 'vehicle_c';
export const vehiclesService = {
  async getAll() {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "category_c" } },
          { field: { Name: "model_c" } },
          { field: { Name: "seating_c" } },
          { field: { Name: "price_per_km_c" } },
          { field: { Name: "features_c" } },
          { field: { Name: "image_url_c" } },
          { field: { Name: "availability_c" } }
        ],
        orderBy: [{ fieldName: "Id", sorttype: "ASC" }]
      };

      const response = await apperClient.fetchRecords(tableName, params);
      
      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      // Transform database fields to match UI expectations
      return response.data.map(vehicle => ({
        Id: vehicle.Id,
        category: vehicle.category_c || '',
        model: vehicle.model_c || '',
        seating: vehicle.seating_c || 0,
        pricePerKm: vehicle.price_per_km_c || 0,
        features: vehicle.features_c ? vehicle.features_c.split(',') : [],
        imageUrl: vehicle.image_url_c || '',
        availability: vehicle.availability_c || false
      }));
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching vehicles:", error?.response?.data?.message);
      } else {
        console.error("Error fetching vehicles:", error.message);
      }
      return [];
    }
  },

  async getById(id) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        fields: [
          { field: { Name: "Name" } },
          { field: { Name: "category_c" } },
          { field: { Name: "model_c" } },
          { field: { Name: "seating_c" } },
          { field: { Name: "price_per_km_c" } },
          { field: { Name: "features_c" } },
          { field: { Name: "image_url_c" } },
          { field: { Name: "availability_c" } }
        ]
      };

      const response = await apperClient.getRecordById(tableName, parseInt(id), params);
      
      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      const vehicle = response.data;
      return {
        Id: vehicle.Id,
        category: vehicle.category_c || '',
        model: vehicle.model_c || '',
        seating: vehicle.seating_c || 0,
        pricePerKm: vehicle.price_per_km_c || 0,
        features: vehicle.features_c ? vehicle.features_c.split(',') : [],
        imageUrl: vehicle.image_url_c || '',
        availability: vehicle.availability_c || false
      };
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error(`Error fetching vehicle with ID ${id}:`, error?.response?.data?.message);
      } else {
        console.error(`Error fetching vehicle with ID ${id}:`, error.message);
      }
      throw error;
    }
  },

  async create(vehicleData) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      // Transform UI data to database fields (only Updateable fields)
      const params = {
        records: [{
          Name: vehicleData.category || '',
          category_c: vehicleData.category || '',
          model_c: vehicleData.model || '',
          seating_c: parseInt(vehicleData.seating) || 0,
          price_per_km_c: parseFloat(vehicleData.pricePerKm) || 0,
          features_c: Array.isArray(vehicleData.features) ? vehicleData.features.join(',') : '',
          image_url_c: vehicleData.imageUrl || '',
          availability_c: Boolean(vehicleData.availability)
        }]
      };

      const response = await apperClient.createRecord(tableName, params);
      
      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      if (response.results) {
        const successfulRecords = response.results.filter(result => result.success);
        const failedRecords = response.results.filter(result => !result.success);
        
        if (failedRecords.length > 0) {
          console.error(`Failed to create vehicle records:${JSON.stringify(failedRecords)}`);
          
          failedRecords.forEach(record => {
            record.errors?.forEach(error => {
              throw new Error(`${error.fieldLabel}: ${error.message}`);
            });
            if (record.message) throw new Error(record.message);
          });
        }
        
        return successfulRecords.map(result => result.data);
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error creating vehicle:", error?.response?.data?.message);
      } else {
        console.error("Error creating vehicle:", error.message);
      }
      throw error;
    }
  },

  async update(id, vehicleData) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      // Transform UI data to database fields (only Updateable fields)
      const params = {
        records: [{
          Id: parseInt(id),
          Name: vehicleData.category || '',
          category_c: vehicleData.category || '',
          model_c: vehicleData.model || '',
          seating_c: parseInt(vehicleData.seating) || 0,
          price_per_km_c: parseFloat(vehicleData.pricePerKm) || 0,
          features_c: Array.isArray(vehicleData.features) ? vehicleData.features.join(',') : '',
          image_url_c: vehicleData.imageUrl || '',
          availability_c: Boolean(vehicleData.availability)
        }]
      };

      const response = await apperClient.updateRecord(tableName, params);
      
      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      if (response.results) {
        const successfulUpdates = response.results.filter(result => result.success);
        const failedUpdates = response.results.filter(result => !result.success);
        
        if (failedUpdates.length > 0) {
          console.error(`Failed to update vehicle records:${JSON.stringify(failedUpdates)}`);
          
          failedUpdates.forEach(record => {
            record.errors?.forEach(error => {
              throw new Error(`${error.fieldLabel}: ${error.message}`);
            });
            if (record.message) throw new Error(record.message);
          });
        }
        
        return successfulUpdates.map(result => result.data);
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error updating vehicle:", error?.response?.data?.message);
      } else {
        console.error("Error updating vehicle:", error.message);
      }
      throw error;
    }
  },

  async delete(id) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      const params = {
        RecordIds: [parseInt(id)]
      };

      const response = await apperClient.deleteRecord(tableName, params);
      
      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      if (response.results) {
        const successfulDeletions = response.results.filter(result => result.success);
        const failedDeletions = response.results.filter(result => !result.success);
        
        if (failedDeletions.length > 0) {
          console.error(`Failed to delete vehicle records:${JSON.stringify(failedDeletions)}`);
          
          failedDeletions.forEach(record => {
            if (record.message) throw new Error(record.message);
          });
        }
        
        return successfulDeletions.length > 0;
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error deleting vehicle:", error?.response?.data?.message);
      } else {
        console.error("Error deleting vehicle:", error.message);
      }
      throw error;
    }
}
};