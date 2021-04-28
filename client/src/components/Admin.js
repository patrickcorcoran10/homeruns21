import {useState} from 'react'
import axios from 'axios'

export default function Admin() {
    const [teamName, setTeamName] = useState("");
    const handleTeamInput = e => {
        console.log(e.target.value)
        setTeamName(e.target.value)
    }
    const submitTeam = e => {
        e.preventDefault();
        console.log("click", teamName)
        axios.post("/api/create-team", {
            player: teamName
        })
        .then(function(response) {
            console.log(response)
        })
        setTeamName("")
    }
    return (
        <div>
            <p>Admin Page</p>
            <p>Team Creation</p>
            <input placeholder="player name" onChange={handleTeamInput}/>
            <button onClick={submitTeam}>Submit</button>
        </div>
    )
}