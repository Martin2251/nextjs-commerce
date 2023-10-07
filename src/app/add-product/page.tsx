export default function AddProductPage(){
    return(
        <div>
            <h1 className="text-lg mb-3 font-bold">Add Product </h1>
            <form>
                <input required name="name" placeholder="Name" className="mb-3 w-full input input-bordered" />
                <textarea required name="description" placeholder="Description" className="textarea-bordered textarea mb-3 w-full" />
                <input required name="Image URL" type="url" placeholder="Name" className="mb-3 w-full input input-bordered" />
                <input required name="price" placeholder="Price" type="number" className="mb-3 w-full input input-bordered" />
                <button className="btn btn-primary btn-block"type="submit"> Add Product</button>
            </form>
        </div>
    )
}