# MERN STACK APP
## Live URL
https://fine-rose-bass-cuff.cyclic.cloud/

## Technologies Used
1.  **Frontend:** React
2. **Backend:** Express.js
3. **Database:** MongoDB

## API Reference

#### User APIs

##### Signup

```http
  POST /signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Enter your username|
| `password` | `string` | **Required**. Enter your password|
| `email` | `string` | **Required**. Enter your email|
| `contact` | `string` | **Required**. Enter your contact|
| `address` | `string` | **Required**. Enter your address|



##### Login
```http
  Post /login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` | `string` | **Required**. Enter your email|
| `password` | `string` | **Required**. Enter your password|



##### Get All Users
```http
  Get /api/getallusers
```

|  Description                       |
|  :-------------------------------- |
|   Displays All Users|


##### Get User by ID
```http
 Get /api/getuserbyid?_id=64d60ec318164efceed763a5
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id` | `string` | id by params|

##### Delete user
```http
 Delete /api/deleteuser
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id` | `string` | provide id|

##### Update user
```http
 Put /api/updateuser
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id` | `string` | provide id for filteration|
| `username` | `string` | enter username to update|
| `email` | `string` | enter email to update|
| `profile` | `string` | enter profile to update|

#### Category APIs

##### Create Category

```http
  POST /createcategory
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Enter name|
| `image` | `string` | **Required**. Enter image|

##### Get All Category

```http
  Get api/getallcategory
```

|  Description                       |
|  :-------------------------------- |
|   Displays All Categories|

##### Get Category By Name

```http
  Get /api/categorybyname?name=Shoes
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. provide name|

##### Get Category By ID

```http
  Get /api/getcategorybyid?_id=64e13551b99b3ca42ed0e5bd
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. provide ID|

##### Delete Category 

```http
  Delete /api/deletecategory
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. provide name|

##### Update Category 

```http
  Put /api/updatecategory
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id` | `string` | provide id for filteration|
| `name` | `string` | **Required**.  name to update|
| `image` | `string` | **Required**. image to update|

#### Brand APIs

##### Create Brand

```http
  POST /createbrand
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `brandname` | `string` | **Required**. Enter brandname|
| `logo` | `string` | **Required**. Enter logo image|

##### Get All Brands

```http
  Get api/getallbrand
```
|  Description                       |
|  :-------------------------------- |
|   Displays All Brands|

##### Get Brand By Name

```http
  Get /api/brandbyname?brandname=Gucci
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `brandname` | `string` | **Required**. provide name|

##### Get Brand By ID

```http
  Get /api/getbrandbyid?_id=64c83763b92029949e7c2aad
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. provide ID|

##### Delete Brand 

```http
  Delete /api/deletebrand
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `brandname` | `string` | **Required**. provide name|

##### Update Brand 

```http
  Put /api/updatebrand
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id` | `string` | provide id for filteration|
| `brandname` | `string` | **Required**.  name to update|
| `logo` | `string` | **Required**. image to update|

#### Product APIs

##### Create Product

```http
  POST /createproduct
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Enter brandname|
| `price` | `Number` | **Required**. Enter price|
| `category` | `string` | **Required**. Enter category|
| `brand` | `string` | **Required**. Enter brand|
| `thumbnail` | `string` | **Required**. Enter thumbnail omage|
| `images` | `string` | **Required**. Enter images|
| `description` | `string` | **Required**. Enter description|

##### Get All Products

```http
  Get api/getallproduct
```
|  Description                       |
|  :-------------------------------- |
|   Displays All Products|

##### Get Product By Name

```http
  Get /api/productbyname?name=Ottoman
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. provide name|

##### Get Product By ID

```http
  Get /api/getproductbyid?_id=64c834d3b92029949e7c2a9d
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. provide ID|

##### Delete Product 

```http
  Delete /api/deleteproduct
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. provide ID |


##### Update Product 

```http
  Put /api/updateproduct
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. provide ID for filteration|
| `name` | `string` | **Required**. Enter brandname to update|
| `price` | `Number` | **Required**. Enter price to update|
| `category` | `string` | **Required**. Enter category to update|
| `brand` | `string` | **Required**. Enter brand to update|
| `thumbnail` | `string` | **Required**. Enter thumbnail omage to update|
| `images` | `string` | **Required**. Enter images to update|
| `description` | `string` | **Required**. Enter description to update|


##### Get Product By Category

```http
  Get /api/productbycategory?category=Chairs
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `category` | `string` | **Required**. provide name|

##### Get Product By Brand

```http
  Get /api/productbybrand?brand=Interwood
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `brand` | `string` | **Required**. provide name|


#### Order APIs

##### Create Order

```http
  POST /create-order
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `items` | `Array` | **Required**. Enter items|
| `totalBill` | `Number` | **Required**. Enter totalBill|
| `customerName` | `string` | **Required**. Enter customerName|
| `customerEmail` | `string` | **Required**. Enter brand|
| `customerContact` | `string` | **Required**. Enter customerEmail|
| `customerAddress` | `string` | **Required**. Enter customerAddress|

##### Get All Order

```http
  Get api/all-orders
```
|  Description                       |
|  :-------------------------------- |
|   Displays All Orders|

##### Get Order By ID

```http
  Get api/order-by-id/64de71adad989c3dd0355161
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. provide ID|

##### Update Order 

```http
  Put api/update-order
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_id` | `string` | **Required**. provide ID for filteration|
| `Status` | `string` | **Required**. Enter status to update|
| `Message` | `Number` | **Required**. Enter message to update|
