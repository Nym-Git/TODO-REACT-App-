import React, {useState} from 'react';


export const Add = ({add}) =>{
    const [title, setTitle]= useState("")
    const [desc, setDesc]= useState("")

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("somthing is not filled")
        }
        else{
            add(title, desc);
            setTitle("");
            setDesc("");    
        }
    }

    return(
        <form className="container" onSubmit={submit}><br/>
            <div className="mb-3">
                <label htmlfor="title" className="form-label"><b>Todo Subject</b></label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your TODO subject with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlfor="desc" className="form-label"><b>Todo Discription</b></label>
                <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="exampleInputPassword1"/>
            </div><br/>
            <button type="submit" className="btn btn-primary btn-lg btn-block">push to <b>TODO</b> list</button>
        </form>
    )
}
