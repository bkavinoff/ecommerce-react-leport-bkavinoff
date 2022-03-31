import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

//css:
import './ItemListContainer.css';

//Componentes:
import Item from '../Item/Item'
import mockProductos from '../Data/Data'
import mockCategories from '../Data/Categories'

const ListProducts = () => {

    const {categoryId} = useParams();//recibo el id del producto que quiero mostrar
    
    const [products, setProducts] = useState([])//seteo el valor inicial del state
    const [category, setCategory] = useState({})
    const catId = categoryId;

    //products
    const getProducts = () => {
        return new Promise ( (resolve,reject)=>{

            setTimeout( () => {
                resolve(filterProductByCategoryId(mockProductos, catId))
            },2000)
        })
    }

    const filterProductByCategoryId = (array, catId) => {
        
        if (typeof catId === 'undefined'){
            //si no recibe categoryId, muestra todos
            return array;
        }else{
            //si recibe categoryId, filtra por esa categoría
            let arr = array.filter( (prod) => {
                return prod.categoryId==catId
            })
            
            return arr;
        }
    }

    //category
    const getCategories = (catId) => {
        return new Promise ( (resolve,reject)=>{
                resolve(filterCategoryById(mockCategories,categoryId))
        })
    }

    const filterCategoryById = (arrayCat, catId) => {
        if (typeof categoryId === 'undefined'){
            //si no recibe categoryId, muestra todos
            return setCategory({
                id: 0,
                name: 'Productos'
            });
        }else{

            let arr = arrayCat.filter( (cat) => {
                return cat.id==catId
            })
            //console.log(arr[0])
            return setCategory(arr[0])
        }
    }

    //esto se ejecuta después que se renderiza
    useEffect(  ()=>{
        
        getProducts()
        .then( (data) =>{
            setProducts(data)
        })

        getCategories()
    })

    return(
        <div className="container-cards">
            <h2>{category.name}</h2>
            {products.map( (product) => {
                    return(
                        <Item key={product.id} data={product} />
                   )
                }
            )}
        </div>
    )
}

export default ListProducts;