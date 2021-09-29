function ListProduct(props) {
    return (<div id = "list">
        <ul>
            {props.product.map((item)=>{
                return <li key={item.id}>{item.name} : {item.price}</li>
            })}
        </ul>
    </div>)
}

export default ListProduct;