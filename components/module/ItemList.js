import Form from "./Form";
import FormInput from "./FormInput";


const ItemList = ({form , setForm}) => {

    const {products}=form;

    const addHandler =()=>{
        setForm({
            ...form , products:[...products ,{name : "" , price :"" , qty : ""}],
        })
            console.log(products);
    }

    const changeHandler = ()=>{

    }

    const deleteHandler = ()=>{

    }
  return (
    <div className="item-list">
        <p>Purchased Products</p>
        {
            products.map((product,index) =>(
                <div className="form-input__list" key={index}>
                    <FormInput
                    name="name"
                    type="text"
                    label="Product Name"
                    value={product.name}
                    onChange={changeHandler}
                    />
                    <div>
                    <FormInput 
                    name="price"
                    type="text"
                    label="Price"
                    value={product.price}
                    onChange={changeHandler}
                    />
                     <FormInput 
                    name="qty"
                    type="number"
                    label="Qty"
                    value={product.qty}
                    onChange={changeHandler}
                    /> 
                    </div>
                    <button onClick={deleteHandler}>Remove</button>
                </div>
            ))
        }
        <button onClick={addHandler}>Add Item</button>
      
    </div>
  )
}

export default ItemList
