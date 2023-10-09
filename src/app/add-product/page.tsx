import prisma from "../lib/db/prisma"

export const metadata ={
    title: "Add Product - Shop"
}

// server action
async function addProduct(formData:FormData){
"use server"

const name = formData.get("name")?.toString();
const description = formData.get("description")?.toString();
const imageURL = formData.get("imageUrl")?.toString();
const price = Number(formData.get("price") || 0);

// check if we have got these values 
if (!name || !description || !imageURL ||!price){
    throw Error("Missing required fileds");
}
await prisma.product.create({
    data:{name , description,imageURL ,price}
})
}

export default function AddProductPage(){
    return(
        <div>
            <h1 className="text-lg mb-3 font-bold">Add Product </h1>
            <form action={addProduct}>
                <input required name="name" placeholder="Name" className="mb-3 w-full input input-bordered" />
                <textarea required name="description" placeholder="Description" className="textarea-bordered textarea mb-3 w-full" />
                <input required name="imageURL" type="url" placeholder="Name" className="mb-3 w-full input input-bordered" />
                <input required name="price" placeholder="Price" type="number" className="mb-3 w-full input input-bordered" />
                <button className="btn btn-primary btn-block"type="submit"> Add Product</button>
            </form>
        </div>
    )
}