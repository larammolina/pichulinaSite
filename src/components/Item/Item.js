const Item = ({ id, name, img, price }) => {
    return (
        <div>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <h3> {name} {id} </h3>
            <p> $ {price} </p>
            <Link to={`/item/${id}`}> Ver detalle </Link>
        </div>
    )
}
export default Item