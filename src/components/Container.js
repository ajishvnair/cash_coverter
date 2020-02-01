import React, { useEffect,useReducer } from 'react';
import axios from 'axios';
import {initialState} from './reducer/initialState';
import {reducer} from './reducer/reducer';
import {setInitialStateReducer} from './reducer/reducerTypes';
import Header from './Header';
import CurrencySelector from './CurrencySelector';
import DisplayBoxComponent from './DisplayBoxComponent';
import PriceDisplayOption from './PriceDisplayOption';
import IntegrationWithOtherApps from './IntegrationWithOtherApps';
export const userContext=React.createContext();
function Container(props){
    const[state,dispatch]=useReducer(reducer,undefined);
    const setInitialState=(data)=>{
        dispatch(setInitialStateReducer(data))
    }
    const onSubmit=()=>{
        axios.put(`http://localhost:3001/userConfiguration/${state.id}`,state)
        .then(res=>console.log('successfully updated'))
        .catch(error=>console.log(error))
    }
    useEffect(()=>{
        axios.get('http://localhost:3001/userConfiguration/')
        .then(response=>{
            let found=response.data.find((data)=>
            data.id===parseInt(props.match.params.id))
            if(found===undefined){
                axios({
                    method: 'post',
                    url: 'http://localhost:3001/userConfiguration/',
                    data: {
                        ...initialState,
                        id:parseInt(props.match.params.id)
                    }
                    })
                    .then(response=> {
                       setInitialState(response.data);
                    })
                    .catch(response=> {
                        console.log(response);
                    });
            }
            else{
                setInitialState(found);
            }
        })
        .catch(error=>{
            console.log(error);
        })
        
    },[])
    return (
        <div className='Main-div'>
        {state!==undefined&& 
        <userContext.Provider value={{state,dispatch}}>
        <Header onSubmit={onSubmit}/>
        <CurrencySelector/>
        <DisplayBoxComponent/>
        <PriceDisplayOption/>
        <IntegrationWithOtherApps/>
        </userContext.Provider>}
        </div>
    )
    
};

export default Container;