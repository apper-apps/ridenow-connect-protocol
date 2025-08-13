import React from "react";
import Error from "@/components/ui/Error";
const tableName = 'service_c';

export const servicesService = {
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
          { field: { Name: "description_c" } },
          { field: { Name: "icon_c" } },
          { field: { Name: "base_price_c" } },
          { field: { Name: "features_c" } }
        ],
        orderBy: [{ fieldName: "Id", sorttype: "ASC" }]
      };

      const response = await apperClient.fetchRecords(tableName, params);
      
      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      // Transform database fields to match UI expectations
      return response.data.map(service => ({
        Id: service.Id,
        name: service.Name || '',
        description: service.description_c || '',
        icon: service.icon_c || '',
        basePrice: service.base_price_c || 0,
        features: service.features_c ? service.features_c.split(',') : []
      }));
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching services:", error?.response?.data?.message);
      } else {
        console.error("Error fetching services:", error.message);
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
          { field: { Name: "description_c" } },
          { field: { Name: "icon_c" } },
          { field: { Name: "base_price_c" } },
          { field: { Name: "features_c" } }
        ]
      };

      const response = await apperClient.getRecordById(tableName, parseInt(id), params);
      
      if (!response.success) {
        console.error(response.message);
        throw new Error(response.message);
      }

      const service = response.data;
      return {
        Id: service.Id,
        name: service.Name || '',
        description: service.description_c || '',
        icon: service.icon_c || '',
        basePrice: service.base_price_c || 0,
        features: service.features_c ? service.features_c.split(',') : []
      };
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error(`Error fetching service with ID ${id}:`, error?.response?.data?.message);
      } else {
        console.error(`Error fetching service with ID ${id}:`, error.message);
      }
      throw error;
    }
  },

  async create(serviceData) {
    try {
      const { ApperClient } = window.ApperSDK;
      const apperClient = new ApperClient({
        apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
        apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
      });

      // Transform UI data to database fields (only Updateable fields)
      const params = {
        records: [{
          Name: serviceData.name || '',
          description_c: serviceData.description || '',
          icon_c: serviceData.icon || '',
          base_price_c: parseFloat(serviceData.basePrice) || 0,
          features_c: Array.isArray(serviceData.features) ? serviceData.features.join(',') : ''
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
          console.error(`Failed to create service records:${JSON.stringify(failedRecords)}`);
          
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
        console.error("Error creating service:", error?.response?.data?.message);
      } else {
        console.error("Error creating service:", error.message);
      }
      throw error;
    }
  },

  async update(id, serviceData) {
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
          Name: serviceData.name || '',
          description_c: serviceData.description || '',
          icon_c: serviceData.icon || '',
          base_price_c: parseFloat(serviceData.basePrice) || 0,
          features_c: Array.isArray(serviceData.features) ? serviceData.features.join(',') : ''
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
          console.error(`Failed to update service records:${JSON.stringify(failedUpdates)}`);
          
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
        console.error("Error updating service:", error?.response?.data?.message);
      } else {
        console.error("Error updating service:", error.message);
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
          console.error(`Failed to delete service records:${JSON.stringify(failedDeletions)}`);
          
          failedDeletions.forEach(record => {
            if (record.message) throw new Error(record.message);
          });
        }
        
        return successfulDeletions.length > 0;
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error deleting service:", error?.response?.data?.message);
      } else {
        console.error("Error deleting service:", error.message);
      }
      throw error;
throw error;
    }
  }
};