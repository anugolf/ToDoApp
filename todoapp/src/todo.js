import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import firebase from "./firebase";
import Button from '@material-ui/core/Button';
function Todo() {
    const [task, setTask] = useState("");
    const [age, setAge] = useState(40);
    const createTodo = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        const userRef = db.collection("Todos").add({
            task: task,
            email: false
        }); 
        setTask("")
    }

    return (
        <form onSubmit={createTodo}>
            <TextField
                style={{ width: "100%",marginTop: 50}}
                id="standard-basic"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                label="Add Todo"
                variant="outlined"
            />
            <Button variant="contained" style={{marginTop: 50}}>Default</Button>
        </form>
        
        
    )
}
export default Todo