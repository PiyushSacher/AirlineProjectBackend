const {Logger}=require("../config/index")

class CrudRepository {
    constructor(model){
        this.model=model;
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            Logger.info(`Created new ${this.model.name}: ${JSON.stringify(result)}`);
            return result;
        } catch (error) {
            Logger.error(`Error creating ${this.model.name}: ${error.message}`);
            throw error;
        }
    }

    async destroy(data){
        try {
            const result = await this.model.destroy({ where: { id:data } });
            Logger.info(`Deleted ${this.model.name} with ID ${id}`);
            return result;
        } catch (error) {
            Logger.error(`Error deleting ${this.model.name} with ID ${id}: ${error.message}`);
            throw error;
        }
    }

    async get(data){
        try {
            const result = await this.model.findByPk(data);
            Logger.info(`Retrieved ${this.model.name} with ID ${data}: ${JSON.stringify(result)}`);
            return result;
        } catch (error) {
            Logger.error(`Error retrieving ${this.model.name} with ID ${data}: ${error.message}`);
            throw error;
        }
    }

    async getAll(){
        try {
            const result = await this.model.findAll();
            Logger.info(`Retrieved all ${this.model.name}: ${JSON.stringify(result)}`);
            return result;
        } catch (error) {
            Logger.error(`Error retrieving all ${this.model.name}: ${error.message}`);
            throw error;
        }
    }

    async update(id,data){
        try {
            const result = await this.model.update(data, { where: { id } });
            Logger.info(`Updated ${this.model.name} with ID ${id}: ${JSON.stringify(result)}`);
            return result;
        } catch (error) {
            Logger.error(`Error updating ${this.model.name} with ID ${id}: ${error.message}`);
            throw error;
        }
    }
}

module.exports = CrudRepository;