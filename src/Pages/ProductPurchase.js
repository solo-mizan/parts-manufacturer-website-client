import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './Shared/Loading';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ProductPurchase = () => {
    const { id } = useParams();
    const [user, loading] = useAuthState(auth);
    const { data: tool, isLoading, refetch } = useQuery("tool", () => fetch(`https://car-geeks.heroku.com/itemDetail/${id}`).then(res => res.json()))
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    if (isLoading || loading) {
        return <Loading></Loading>
    };

    const { name, minOrder, price, avlQuantity, image, description, _id } = tool;

    if (errors) {
        if (errors?.quantity) {
            toast.error(`${errors.quantity.message}`, { id: "stockError" });
        }
        if (errors?.phone) {
            toast.error(`${errors.phone.message}`, { id: "phoneError" });
        }
        if (errors?.address) {

            toast.error(`${errors.address.message}`, { id: "addressError" })
        }
    }
    const onSubmit = data => {
        const quantity = data.orderQuantity;
        const body = {
            productId: _id,
            name: tool.name,
            userName: user.displayName,
            userEmail: user.email,
            quantity: quantity,
            totalPrice: price * quantity,
            phone: data.phone,
            address: data.address,
            payment: "unpaid"
        };
        fetch(`https://car-geeks.heroku.com/order`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Order placed susccessfully!');
                    reset();
                    refetch();
                }
            })
    }
    return (
        <div className='min-h-screen w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center'>
            <div>
                <img className='w-80 mx-auto' src={image} alt="" />
                <div className='p-5'>
                    <p className='py-2 text-3xl font-semibold'>{name}</p>
                    <p className='py-2'>{description}</p>
                    <p className='text-lg font-semibold'>Price: ${price}</p>
                    <p className='text-lg font-semibold'>Available: {avlQuantity} pcs</p>
                    <p className='text-lg font-semibold'>Min Order: {minOrder} pcs</p>
                </div>
            </div>
            <div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-sm">
                            <label className="label">
                                <span className="label-text text-xl">Name</span>
                            </label>
                            <input {...register("name")} type="text" disabled defaultValue={`${user.displayName}`} className="input input-bordered w-full max-w-sm" />
                            <label className="label">
                                <span className="label-text text-xl">Email</span>
                            </label>
                            <input {...register("email"
                            )} type="email" defaultValue={`${user.email}`} disabled className="input input-bordered w-full max-w-sm" />
                            <label className="label">
                                <span className="label-text text-xl">Order Quantity</span>
                            </label>
                            <input {...register("orderQuantity", {
                                valueAsNumber: true,
                                required: "Order quantity is required", min: {
                                    value: `${minOrder}`,
                                    message: "Minimum purchase amount required"
                                }, max: {
                                    value: `${avlQuantity}`,
                                    message: "Stock not available"
                                }
                            })} type="number" defaultValue={`${minOrder}`} className="input input-bordered w-full max-w-sm" />
                            <label className="label">
                                <span className="label-text text-xl">Phone Number</span>
                            </label>
                            <input {...register("phone", {
                                valueAsNumber: true,
                                required: "Phone number is required"
                            })} type="number" className="input input-bordered w-full max-w-sm" />
                            <label className="label">
                                <span className="label-text text-xl">Shipping Address</span>
                            </label>
                            <input {...register("address", {
                                required: "Address is required"
                            })} type="text" className="input input-bordered w-full max-w-sm" />
                            <input type="submit" value="Order" disabled={errors?.quantity} className="my-5 btn btn-light w-full max-w-lg" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductPurchase;