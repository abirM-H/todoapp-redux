
import React, { Component } from 'react'
import {connect} from "react-redux";
import {removeList,editList, toggle_list} from '../actions/action'
// 


 class ToDoList extends Component {
    
     
    render() {
        return (
            <div>
            {this.props.ToDoList.map((el,i)=>(
                <div key={i}>
                    {/* <button  className="completed" onClick= {()=>this.props.toggle(i)}  */}
                   
                    {/* >complete</button> */}
                    <input type="text" value={el.todo} onChange={(e)=>this.props.edit(e.target.value,i)}/>
                    <button onClick={()=>this.props.remove(i)}>Remove</button>
                </div>
            ))}
            </div>
        )
    }
}
const mapStateToProps=state=>({
    ToDoList:state
})

const mapDispatchToProps=dispatch=>{
    return{
        remove:payload=>{
            dispatch(removeList(payload))
        },
        edit:(payload,index)=>{
            dispatch(editList(payload,index))
        },
        // toggle:payload=>{
        //     dispatch(toggle_list(payload))
        // }
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(ToDoList)