const { FormData } = require('../domain/models');
const { getDB } = require('../data/mongodb');

async function saveFormData(formData){
    const db = getDB();
    const collection = db.collection('form_data');

    try{
        await collection.insertOne(formData);
        console.log('Form data saved successfully');
    } catch (error){
        console.error('Error saving form data: ', error);
        throw new Error('Could not save form data');
    }
}

module.exports = {
    saveFormData,
};