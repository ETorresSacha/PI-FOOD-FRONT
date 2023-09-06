import './homePage.css'

import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux";
import { addTypeRecipe, filterForStorage, getRecipeAll, upwardOrfalling,upwardOrfallingTitle,filterForDiets, filterHealthScore, resetForName} from "../../redux/action";
import HomeCard from './HomeCard';
import Nav from '../nav/Nav';
import Paginado from '../Paginado/Paginado';
import Loading from '../loading/Loading';
import swal from 'sweetalert';


const HomePage = ()=>{

    const dispatch = useDispatch();
     //-------------------   LOADING   -------------------//
     const loading=useSelector(state=>state.loading)
    //-------------------             -------------------//

     const recipeFilter = useSelector(state => state.recipeFilter);
     const nullRecipeName = useSelector(state => state.nullRecipeName);
     const numberOfRecets=recipeFilter.length


     //-------------------   PAGINADO   -------------------//

    const [index,setIndex]=useState(0) // se crea este estado dentro de "HomePage" con la finalidad de pasarlo por props al componente "Nav" y utilizarlo, pero el uso principal de este hook es en el componente "Paginado"
    
    const [recipeForPage,setRecipeForPage] = useState(10)
    const [page,setPage] = useState(1)
  
    const inicio = (page - 1) * recipeForPage;
  
    const final = inicio + recipeForPage;
  
    let cards = recipeFilter.slice(inicio, final);

    //-------------------             -------------------//

     //-------------------   CARGAMOS LOS ESTADOS CON LAS RECETAAS   -------------------//
     useEffect(()=>{
        dispatch(getRecipeAll())     
    },[dispatch])

    //-------------------   UNA RECETA QUE NO EXISTE   -------------------//
    useEffect(()=>{
       if(nullRecipeName) swal({
        title:"¡ATENCIÓN!",
        text:"No existe registro",
        icon:"info",
        button:"aceptar",
        timer:"3000"
    })
       
       return ()=>dispatch(resetForName(false))
    },[nullRecipeName,dispatch])


                //-------------------   FILTROS   -------------------//
        //-------------------   ID   -------------------//
    const handleOrder=(event)=>{
        dispatch(upwardOrfalling(event.target.value))
        setPage(1) 
        setIndex(0)
    }

     //-------------------   TITULO   -------------------//

    const handleOrdertitle=(event)=>{
        dispatch(upwardOrfallingTitle(event.target.value))
        setPage(1) 
        setIndex(0)
    }
    
    //-------------------   API O BD   -------------------//
    const handleOrderForStorage =(event)=>{
        dispatch(filterForStorage(event.target.value))
        setPage(1) 
        setIndex(0)

    }

    //-------------------   TIPO DE DIETA   -------------------//
        //.......cargamos y traemos las dietas
        useEffect(()=>{

            dispatch(addTypeRecipe())
        },[dispatch])
        
        const typeDiet = useSelector((state)=>state.typesDiets)
      

        const handleFilterDiets =(event)=>{
            dispatch(filterForDiets(event.target.value))
            setPage(1) 
            setIndex(0)
    
        }

    //-------------------   HEALTH SCORE   -------------------//
        const handleOrderHealthScore =(event)=>{
            dispatch(filterHealthScore(event.target.value))
            setPage(1) 
            setIndex(0)

        }


    //-------------------   RESET   -------------------// 
    const resetAllRecipe =()=>{
        dispatch(getRecipeAll())
        // para volver a la pagina principal
        setPage(1) 
        setIndex(0)

    }
    
        

    return(
        <div className="conteiner-homePage">
            {loading && <Loading/>}
            <div>
                <Nav
                    setPage={setPage}
                    setIndex={setIndex}
                />
            </div>
            
            <section id='section-home'>
                <div>
                    <select className='input' placeholder='Orden' onChange={handleOrder}>
                        <option  >Order</option>
                        <option value="Ascendente" >Ascendente</option>
                        <option value="Descendente">Descendente</option>
                    </select>
                </div>

                <div>
                    <select className='input' placeholder='Orden' onChange={handleOrdertitle}>
                        <option  >Select for name</option>
                        <option value="A-Z" >A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>    
                </div>

               
               <div>
                    <select className='input' placeholder='Orden' onChange={handleOrderForStorage}>
                        <option  >Filter for storage</option>
                        <option value="TODOS" >TODOS</option>
                        <option value="API" >API</option>
                        <option value="BASE DE DATOS">BASE DE DATOS</option>
                    </select>
               </div>

               <div>
                    <select className='input' placeholder='Type Diet' onChange={handleFilterDiets}>
                            <option  value="diets">Dieta</option>
                            <option  value="Todos">Todos</option>
                            {typeDiet.map((diet,index)=>(
                            <option  key= {index} value={diet.name} >{diet.name}</option>
                            ))}
                    </select>
               </div>

                <div>
                    <select className='input' placeholder='Orden' onChange={handleOrderHealthScore}>
                        <option  >Health Score</option>
                        <option value="Ascendente" >Ascendente</option>
                        <option value="Descendente">Descendente</option>
                    </select>
                </div>

                <div>
                    <button className='input' onClick={resetAllRecipe}>Reset</button>
                </div>
            </section>
            <br/>
            <br/>
            <Paginado
                numberOfRecets={numberOfRecets}
                page={page}
                recipeForPage={recipeForPage}
                setPage={setPage}
                index={index}
                setIndex={setIndex}
            />

            <div className="recipe">
                {!loading && <HomeCard recipesAll={cards}/>}
                
            </div>
            <Paginado
                numberOfRecets={numberOfRecets}
                page={page}
                recipeForPage={recipeForPage}
                setPage={setPage}
                index={index}
                setIndex={setIndex}
            />
        </div>
    )
}

export default HomePage

