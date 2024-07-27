import ProductModel from "../models/ProductModel.js";

export const getAllProduct = async (req, res) => {
  try {
    const product = await ProductModel.find({});
    if (product && product.length !== 0) {
      return res.status(200).json({
        message: "Lay danh sach san pham thanh cong",
        data: product,
      });
    }
    return res.status(404).json({
      message: "Khong co san pham nao trong danh sach",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      name: error.name,
    });
  }
};

export const createProduct = async (req, res, next) => {
  try {
    console.log("Received data:", req.body);

    const product = await ProductModel.create(req.body);
    console.log("Product created:", product);

    return res.status(201).json({
      message: "Tạo sản phẩm thành công",
      data: product,
    });
  } catch (error) {
    console.error("Error creating product:", error); // Log lỗi chi tiết
    return res.status(500).json({
      message: "Tạo sản phẩm thất bại",
      error: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (!product) {
      return res.status(400).json({
        message: "Lay danh sach san pham that bai",
      });
    }
    return res.status(201).json({
      message: "Lay danh sach san pham thanh cong",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      name: error.name,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!product) {
      return res.status(400).json({
        message: "Cap nhap san pham that bai",
      });
    }
    return res.status(201).json({
      message: "Update sản phẩm thành công",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      name: error.name,
    });
  }
};

export const removeProduct = async (req, res, next) => {
  try {
    const product = await ProductModel.findByIdAndDelete(
      `${req.params.id}`,
      {
        hide: true,
      },
      {
        new: true,
      }
    );
    if (!product) {
      return res.status(400).json({
        message: "Xoa danh sach san pham that bai",
      });
    }
    return res.status(201).json({
      message: "Xoa san pham thanh cong",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};
