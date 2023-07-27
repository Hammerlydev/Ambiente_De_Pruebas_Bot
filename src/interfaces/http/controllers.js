const { saveFormData } = require('../../usecases/saveFormData');
const { FormData } = require('../../domain/models');

async function handleFormData(req, res) {
    const { opciones, archivoA, archivoN, numeros } = req.body;

    const formData = new FormData(opciones, archivoA, archivoN, numeros);

    try{
        await saveFormData(formData);
        res.json({ message: 'Form data saved successfully'});
    } catch (error) {
        res.status(500).json({ error: 'Could not save form data'});
    }
}

module.exports = {
    handleFormData,
};