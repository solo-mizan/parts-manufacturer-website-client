import { signOut } from 'firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Addproduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    if (errors) {
        if (errors.name) {
            toast.error(`${errors.name.message}`, { id: "nameError" });
        }
        if (errors.description) {
            toast.error(`${errors.description.message}`, { id: "descriptionError" });
        }
        if (errors.avlQuantity) {
            toast.error(`${errors.avlQuantity.message}`, { id: "stockError" });
        }
        if (errors.price) {
            toast.error(`${errors.price.message}`, { id: "priceError" });
        }
        if (errors.minOrder) {
            toast.error(`${errors.minOrder.message}`, { id: "minpurchaseError" });
        }
        if (errors.image) {
            toast.error(`${errors.image.message}`, { id: "imgError" });
        }
    }


    const onSubmit = data => {
        const body = {
            name: data.name,
            description: data.description,
            price: data.price,
            avlQuantity: data.avlQuantity,
            minOrder: data.minOrder,
            image: data.image
        }
        console.log(body);

        fetch('http://localhost:5000/tools', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    toast.success("Parts added successfully", { id: "productAdd" });
                }
            })
    }
    return (
        <div className='p-5 lg:w-1/2 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text text-lg">Product Name:</span>
                    </label>
                    <input {...register("name", {
                        required: "Product name is required"
                    })} type="text" placeholder="Product Name" className="input input-bordered w-full max-w-sm" />
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text text-lg">Product Description:</span>
                    </label>
                    <input {...register("description", {
                        required: "Product description is required"
                    })} type="text" placeholder="Product description" className="input input-bordered w-full max-w-sm" />
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text text-lg">Unit Price:</span>
                    </label>
                    <input {...register("price", {
                        valueAsNumber: true,
                        required: "Price is required"
                    })} type="number" placeholder="Price/unit" className="input input-bordered w-full max-w-sm" />
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text text-lg">Product Quantity:</span>
                    </label>
                    <input {...register("avlQuantity", {
                        valueAsNumber: true,
                        required: "Stock amount is required"
                    })} type="number" placeholder="Product Stock" className="input input-bordered w-full max-w-sm" />
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text text-lg">Set Min Purchase Amount:</span>
                    </label>
                    <input {...register("minOrder", {
                        valueAsNumber: true,
                        required: "Min purchase amount is required is required"
                    })} type="number" placeholder="Min purchase amount" className="input input-bordered w-full max-w-sm" />
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text text-lg">Photo URL</span>
                    </label>
                    <input placeholder='https://photoExample.com' {...register("image", { required: "Image is required" })} type="url" className="input input-bordered w-full max-w-sm" />
                </div>
                <input type="submit" value="Add Product" className="w-full max-w-sm btn btn-secondary my-5" />
            </form>
        </div>
    );
};

export default Addproduct;