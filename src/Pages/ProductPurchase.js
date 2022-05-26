import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import Loading from './Shared/Loading';

const ProductPurchase = () => {
    const { id } = useParams();

    const { data: item, isLoading, refetch } = useQuery('itemDetail', () => fetch(`http://localhost:5000/itemDetail/${id}`)
        .then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    const { name, image, description, minOrder, avlQuantity, price, _id } = item;
    const handlePurchase = () => {

    }
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl w-1/2 mx-auto h-3/5">
                <figure><img src={image} alt="Album" /></figure>
                <div class="card-body w-1/2">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <h3 className='text-xl'>Price: ${price}</h3>
                    <h4>Minimum Order Quantity: {minOrder} pcs</h4>
                    <h4>Available Quantity: {avlQuantity} pcs</h4>
                    <div class="card-actions justify-end">
                        <div class="form-control">
                            <div class="input-group">
                                <input type="number" placeholder={minOrder} class="input input-bordered" />
                                <button class="btn btn-square">
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPurchase;