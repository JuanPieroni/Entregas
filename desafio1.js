class ProductManager {
    constructor() {
      this.products = [];
      this.idCounter = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Falta información obligatoria.");
        return;
      }
  
      if (this.products.some((p) => p.code === code)) {
        console.log("No es posible agregar el producto, código ya existente");
        return;
      }
  
      const id = this.idCounter++;
      const product = { id, title, description, price, thumbnail, code, stock };
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductByID(id) {
      const product = this.products.find((p) => p.id === id);
  
      if (!product) {
        console.log("El Producto no fue encontrado");
        return;
      }
      return product;
    }
  }
  
  const productManager = new ProductManager();
  
  productManager.addProduct(
    "Aceite",
    "Extra Virgen",
    4500,
    "No disponible",
     "000",
    55
  );
  
  productManager.addProduct(
    "Cacao",
    "Extra Amargo",
    2200,
    "No disponible",
    "001",
    30
  );

  productManager.addProduct(
    "Muzzarella",
    "Fior Di Latte para pizza",
    4100,
    "No disponible",
    "002",
    34
  )
  
  const obtenerProductos = productManager.getProducts();
  const product = productManager.getProductByID(3);
  console.log(product);
  console.log(obtenerProductos);