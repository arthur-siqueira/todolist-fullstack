const getAll = () => {
    return responde.status(200).json({ message: 'controller está tudo certo!'});
};

module.exports = {
    getAll
};