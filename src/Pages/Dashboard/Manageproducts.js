import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductDeleteModal from './ProductDeleteModal';
import ProductRow from './ProductRow';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Manageproducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);
    const [user, loading] = useAuthState(auth);
    const { data: products, isLoading, refetch } = useQuery("products", () => fetch("http://localhost:5000/tools").then(res => res.json()));
    if (isLoading || loading) {
        return <Loading></Loading>
    }
    
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price/unit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => <ProductRow
                        key={product._id}
                        product={product}
                        setDeleteProduct={setDeleteProduct}></ProductRow>)}
                </tbody>
            </table>
            {deleteProduct && <ProductDeleteModal
                deleteProduct={deleteProduct}
                refetch={refetch}
                setDeleteProduct={setDeleteProduct}></ProductDeleteModal>}
        </div>
    );
};

export default Manageproducts;