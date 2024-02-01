export interface Image {
    url: string;
}

export interface ProductDetail {
    style_code: string;
    closure: string;
    pockets: string;
    fabric: string;
    pattern: string;
    color: string;
}

export interface FashionProduct {
    _id: string;
    actual_price: string;
    average_rating: string;
    brand: string;
    category: string;
    crawled_at: string;
    description: string;
    discount: string;
    images: string[];
    out_of_stock: boolean;
    pid: string;
    product_details: { _id: string }[]; // Il peut y avoir d'autres propriétés ici en fonction de ce que contiennent les détails du produit
    seller: string;
    selling_price: string;
    sub_category: string;
    title: string;
    url: string;
  }
