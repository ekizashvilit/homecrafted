import { useParams, useNavigate } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { Error, Loading } from '../components';
import { useEffect } from 'react';

const url = `https://course-api.com/react-store-single-product?id=`;

const SingleProductPage = () => {
  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 5000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <div>SingleProductPage</div>;
};
export default SingleProductPage;
