const { conn } = require('../config/conn');

const getAll = async () => {
  try {
    const [rows] = await conn.query('SELECT product.*, category.categoryName, licence.licenceName FROM (product LEFT JOIN category ON product.categoryId = category.categoryId) LEFT JOIN licence ON product.licenceId = licence.licenceId;');
    const response = {
      isError: false,
      data: rows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos recuperar los datos ${e}.`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
}

const getOne = async (params) => {
  try {
    const [rows] = await conn.query('SELECT product.*, category.categoryName, licence.licenceName FROM (product LEFT JOIN category ON product.categoryId = category.categoryId) LEFT JOIN licence ON product.licenceId = licence.licenceId WHERE ?;', params);
    const response = {
      isError: false,
      data: rows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos recuperar los datos.`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
}

const create = async (params) => {
  try {
    const [rows] = await conn.query('INSERT INTO product (productName, productDescription, productPrice, productStock, productDiscount, productSKU, productDues, productImageFront, productImageBack, licenceId, categoryId) VALUES ?;', [params]);

    const response = {
      isError: false,
      data: rows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos crear los valores seleccionados por: ${e}`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
};

const edit = async (params, id) => {
  try {
    const [rows] = await conn.query('UPDATE product SET ? WHERE ?;', [params, id]);
    const response = {
      isError: false,
      message: `El item fue modificado exitosamente.`,
      status: rows
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos modificar el item seleccionado, error: ${e}`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
};

const deleteOne = async (params) => {
  try {
    const [rows] = await conn.query('DELETE FROM product WHERE ?;', params);
    const response = {
      isError: false,
      data: rows,
      message: `Item borrado exitosamente.`
    };

    return response;
  } catch (e) {
    const error = {
      isError: true,
      message: `No pudimos insertar los valores seleccionados por: ${e}`
    };

    return error;
  } finally {
    await conn.releaseConnection();
  }
}

module.exports = {
  getAll,
  getOne,
  create,
  edit,
  delete: deleteOne
};