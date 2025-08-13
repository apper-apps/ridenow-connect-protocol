const tableName = 'route_c';

export const routesService = {
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
          { field: { Name: "origin_c" } },
          { field: { Name: "destination_c" } },
          { field: { Name: "distance_c" } },
          { field: { Name: "estimated_time_c" } },
          { field: { Name: "base_fare_c" } },
          { field: { Name: "popular_c" } },
          { field: { Name: "type_c" } }
        ],
        orderBy: [{ fieldName: "Id", sorttype: "ASC" }]
      };

      const response = await apperClient.fetchRecords(tableName, params);
      
      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      // Transform database fields to match UI expectations
      return response.data.map(route => ({
        Id: route.Id,
        origin: route.origin_c || '',
        destination: route.destination_c || '',
        distance: route.distance_c || 0,
        estimatedTime: route.estimated_time_c || '',
        baseFare: route.base_fare_c || 0,
        popular: route.popular_c || false,
        type: route.type_c || 'local'
      }));
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching routes:", error?.response?.data?.message);
      } else {
        console.error("Error fetching routes:", error.message);
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
          { field: { Name: "origin_c" } },
          { field: { Name: "destination_c" } },
          { field: { Name: "distance_c" } },
          { field: { Name: "estimated_time_c" } },
          { field: { Name: "base_fare_c" } },
          { field: { Name: "popular_c" } },
          { field: { Name: "type_c" } }
        ]
      };

      const response = await apperClient.getRecordById(tableName, parseInt(id), params);
      
      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      const route = response.data;
      return {
        Id: route.Id,
        origin: route.origin_c || '',
        destination: route.destination_c || '',
        distance: route.distance_c || 0,
        estimatedTime: route.estimated_time_c || '',
        baseFare: route.base_fare_c || 0,
        popular: route.popular_c || false,
        type: route.type_c || 'local'
      };
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error(`Error fetching route with ID ${id}:`, error?.response?.data?.message);
      } else {
        console.error(`Error fetching route with ID ${id}:`, error.message);
      }
      throw error;
    }
  },

  async create(routeData) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      // Transform UI data to database fields (only Updateable fields)
      const params = {
        records: [{
          Name: `${routeData.origin} to ${routeData.destination}`,
          origin_c: routeData.origin || '',
          destination_c: routeData.destination || '',
          distance_c: parseInt(routeData.distance) || 0,
          estimated_time_c: routeData.estimatedTime || '',
          base_fare_c: parseFloat(routeData.baseFare) || 0,
          popular_c: Boolean(routeData.popular),
          type_c: routeData.type || 'local'
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
          console.error(`Failed to create route records:${JSON.stringify(failedRecords)}`);
          
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
        console.error("Error creating route:", error?.response?.data?.message);
      } else {
        console.error("Error creating route:", error.message);
      }
      throw error;
    }
  },

  async update(id, routeData) {
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
          Name: `${routeData.origin} to ${routeData.destination}`,
          origin_c: routeData.origin || '',
          destination_c: routeData.destination || '',
          distance_c: parseInt(routeData.distance) || 0,
          estimated_time_c: routeData.estimatedTime || '',
          base_fare_c: parseFloat(routeData.baseFare) || 0,
          popular_c: Boolean(routeData.popular),
          type_c: routeData.type || 'local'
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
          console.error(`Failed to update route records:${JSON.stringify(failedUpdates)}`);
          
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
        console.error("Error updating route:", error?.response?.data?.message);
      } else {
        console.error("Error updating route:", error.message);
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
          console.error(`Failed to delete route records:${JSON.stringify(failedDeletions)}`);
          
          failedDeletions.forEach(record => {
            if (record.message) throw new Error(record.message);
          });
        }
        
        return successfulDeletions.length > 0;
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error deleting route:", error?.response?.data?.message);
      } else {
        console.error("Error deleting route:", error.message);
      }
      throw error;
}
  }
};