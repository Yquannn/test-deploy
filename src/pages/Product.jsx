import { useParams } from "react-router-dom";


const ProductPage = () =>{
  const {id} = useParams()
  return(
    <div>
      this is Product page single product {id}
    </div>
  );

}
export default ProductPage