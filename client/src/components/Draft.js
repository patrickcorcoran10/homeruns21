import {useState, useEffect} from 'react';
import axios from 'axios';
export default function Draft(props) {
    const [fetchedTeamData, setFetchedTeamData] = useState([])
    // const [fetchedPlayerData, setFetchedPlayerData] = useState([]);
    const [playerSearched, setPlayerSearched] = useState("");
    const [playerSearchedReturn, setPlayerSearchedReturn] = useState([]);
    const handlePlayerSearch = e => {
        setPlayerSearched(e.target.value)
    }
    const submitSearch = async e => {
        e.preventDefault();
        if (playerSearched.length === 0) {
            alert("not enough name")
        } else {
            const response = await fetch("http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='"+ playerSearched + "%25'")
            const data  = await response.json();
            let playerList = []
            
            if (!data.search_player_all.queryResults.row.length) {
                console.log(data.search_player_all.queryResults.row)
                
                setPlayerSearchedReturn([data.search_player_all.queryResults.row.name_display_first_last])
            } else {
                data.search_player_all.queryResults.row.forEach(guy => {
                    
                    playerList.push(guy.name_display_first_last) 
                }) 
                setPlayerSearchedReturn(playerList)
            }
        }
    }
    const getTeams = async () => {
        const response = await fetch("/api/get-all-teams")
        const data = await response.json();
        console.log("getting teams.", data)
        setFetchedTeamData(data)
    }
    const teamDisplay = fetchedTeamData.map((team, i) => {
        return (
            
                <th key={i}>{team.player}</th>
            
        )
    })
    const playerDisplay = playerSearchedReturn.map((player, i) => {
        return (
            <div key={i}>
                <button value={player} onClick={(e)=> {console.log("click", e.target.value)}}>{player}</button>
                <br/>
            </div>
            
        )
    })
    
    useEffect(() => {
        console.log("effect", playerSearchedReturn)
        getTeams();
    }, [playerSearchedReturn])
    return (
        <div>
            <p>draft, {props.month}, {props.year}</p>
            <p>Player Search</p>
            <input placeholder="player to find" onChange={handlePlayerSearch}/>
            <button onClick={submitSearch}>Search</button>
            <br/>
            <div>{playerDisplay}</div>

            <br/>
            <table>
                <thead>
                <tr>
                    {teamDisplay}
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>

        </div>
    )
}