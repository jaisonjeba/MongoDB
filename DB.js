db.product.insertMany([
  {
    id: "1",
    product_name: "Intelligent Fresh Chips",
    product_price: 655.0,
    product_material: "Concrete",
    product_color: "mint green",
  },
  {
    id: "2",
    product_name: "Practical Fresh Sausages",
    product_price: 911.0,
    product_material: "Cotton",
    product_color: "indigo",
  },
  {
    id: "3",
    product_name: "Refined Steel Car",
    product_price: 690.0,
    product_material: "Rubber",
    product_color: "gold",
  },
  {
    id: "4",
    product_name: "Gorgeous Plastic Pants",
    product_price: 492.0,
    product_material: "Soft",
    product_color: "plum",
  },
  {
    id: "5",
    product_name: "Sleek Cotton Chair",
    product_price: 33.0,
    product_material: "Fresh",
    product_color: "black",
  },
  {
    id: "6",
    product_name: "Awesome Wooden Towels",
    product_price: 474.0,
    product_material: "Plastic",
    product_color: "orange",
  },
  {
    id: "7",
    product_name: "Practical Soft Shoes",
    product_price: 500.0,
    product_material: "Rubber",
    product_color: "pink",
  },
  {
    id: "8",
    product_name: "Incredible Steel Hat",
    product_price: 78.0,
    product_material: "Rubber",
    product_color: "violet",
  },
  {
    id: "9",
    product_name: "Awesome Wooden Ball",
    product_price: 28.0,
    product_material: "Soft",
    product_color: "azure",
  },
  {
    id: "10",
    product_name: "Generic Wooden Pizza",
    product_price: 84.0,
    product_material: "Frozen",
    product_color: "indigo",
  },
  {
    id: "11",
    product_name: "Unbranded Wooden Cheese",
    product_price: 26.0,
    product_material: "Soft",
    product_color: "black",
  },
  {
    id: "12",
    product_name: "Unbranded Plastic Salad",
    product_price: 89.0,
    product_material: "Wooden",
    product_color: "pink",
  },
  {
    id: "13",
    product_name: "Gorgeous Cotton Keyboard",
    product_price: 37.0,
    product_material: "Concrete",
    product_color: "sky blue",
  },
  {
    id: "14",
    product_name: "Incredible Steel Shirt",
    product_price: 54.0,
    product_material: "Metal",
    product_color: "white",
  },
  {
    id: "15",
    product_name: "Ergonomic Cotton Hat",
    product_price: 43.0,
    product_material: "Rubber",
    product_color: "mint green",
  },
  {
    id: "16",
    product_name: "Small Soft Chair",
    product_price: 47.0,
    product_material: "Cotton",
    product_color: "teal",
  },
  {
    id: "17",
    product_name: "Incredible Metal Car",
    product_price: 36.0,
    product_material: "Fresh",
    product_color: "indigo",
  },
  {
    id: "18",
    product_name: "Licensed Plastic Bacon",
    product_price: 88.0,
    product_material: "Steel",
    product_color: "yellow",
  },
  {
    id: "19",
    product_name: "Intelligent Cotton Chips",
    product_price: 46.0,
    product_material: "Soft",
    product_color: "azure",
  },
  {
    id: "20",
    product_name: "Handcrafted Wooden Bacon",
    product_price: 36.0,
    product_material: "Concrete",
    product_color: "lime",
  },
  {
    id: "21",
    product_name: "Unbranded Granite Chicken",
    product_price: 90.0,
    product_material: "Metal",
    product_color: "gold",
  },
  {
    id: "22",
    product_name: "Ergonomic Soft Hat",
    product_price: 99.0,
    product_material: "Rubber",
    product_color: "black",
  },
  {
    id: "23",
    product_name: "Intelligent Steel Pizza",
    product_price: 95.0,
    product_material: "Cotton",
    product_color: "azure",
  },
  {
    id: "24",
    product_name: "Tasty Rubber Cheese",
    product_price: 47.0,
    product_material: "Frozen",
    product_color: "orchid",
  },
  {
    id: "25",
    product_name: "Licensed Steel Car",
    product_price: 20.0,
    product_material: "Cotton",
    product_color: "indigo",
  },
]);

//Find all the information about each products

db.product.find({});

//Find the product price which are between 400 to 800

db.product.find({ product_price: { $lt: 800, $gt: 400 } });

//Find the product price which are not between 400 to 600

db.product.find({ product_price: { $not: { $lt: 600, $gt: 400 } } });

//List the four product which are grater than 500 in price

db.product.find({ product_price: { $gt: 500 } }).limit(4);

//Find the product name and product material of each products
db.product.find({}, { _id: 0, product_name: 1, product_material: 1 });

//Find the product with a row id of 10

db.product.find({ id: "10" });

//Find only the product name and product material
db.product.find({}, { _id: 0, product_name: 1, product_material: 1 });

//Find all products which contain the value of soft in product material

db.product.find({ product_material: "Soft" });

//Find products which contain product color indigo  and product price 492.00
db.product.find({
  $or: [{ product_color: "indigo" }, { product_price: 492.0 }],
});

db.product
  .aggregate([
    { $group: { _id: "$product_price", count: { $sum: 1 } } },
    { $match: { count: { $gt: 1 } } },
    { $project: { _id: 0, product_price: "$_id" } },
  ])
  .forEach(function (doc) {
    db.product.deleteMany({ product_price: doc.product_price });
  });
