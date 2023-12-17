const ItemModel = require('../models/itemModel');

const getAllItems = async () => {
  return await ItemModel.getAll();
}

const getItem = async (id) => {
  return await ItemModel.getOne({productId: id});
}

const createItem = async (item, files) => {
  const itemSchema = {
    productName: item.name,
    productDescription: item.description,
    productPrice: item.price,
    productStock: item.stock,
    productDiscount: item.discount,
    productSKU: item.sku,
    productDues: item.dues,
    productImageFront: '/'+files[0].filename,
    productImageBack: '/'+files[1].filename,
    licenceId: item.collection,
    categoryId: item.category
  }
  return await ItemModel.create([Object.values(itemSchema)]);
}

const editItem = async (item, id) => {
  const itemSchema = {
    productName: item.name,
    productDescription: item.description,
    productPrice: item.price,
    productStock: item.stock,
    productDiscount: item.discount,
    productSKU: item.sku,
    productDues: item.dues,
    productImageFront: `/${id.categoryName}`,
    productImageBack: `/`,
    licenceId: item.collection,
    categoryId: item.category
  }

  return await ItemModel.edit(itemSchema, {productId: id});
}

const deleteItem = async (id) => {
  return await ItemModel.delete({productId: id});
}

module.exports = {
  getAllItems,
  getItem,
  create: createItem,
  edit: editItem,
  delete: deleteItem
}