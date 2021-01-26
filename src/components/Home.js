import React, { useState, useEffect } from 'react';
import rock from '../images/rock.png';
import paper from '../images/paper.png';
import scissors from '../images/scissors.png';
import {Button} from '@material-ui/core'

const options = ['rock', 'paper', 'scissors']
const randomSelection = () => options[Math.floor(Math.random() * 3)]

const Home = () => {

    const [selection, setSelection] = useState('')
    const [computerSelection, setComputerSelection] = useState('')
    const [playerWinCount, setPlayerWinCount] = useState(0)
    const [computerWinCount, setComputerWinCount] = useState(0)
    const [status, setStatus] = useState('')
    
    const onSelection = (value) => {
        setSelection(value)
        setComputerSelection(randomSelection())
    }
    const getSelectedImage = (value) => {
        if (value === 'rock') {
            return rock
        }
        else if (value === 'paper') {
            return paper
        }
        else if (value === 'scissors') {
            return scissors
        }
    }
    const reset = () => {
        setSelection('');
        setComputerSelection('')
        if (playerWinCount === 3) {
            setPlayerWinCount(0)
            setComputerWinCount(0)
            setStatus('')
        } else if (computerWinCount === 3) {
            setPlayerWinCount(0)
            setComputerWinCount(0)
            setStatus('')
        }
    }
    const calculateResults = () => {
        if (selection) {
            if (selection === computerSelection) {
                console.log('tied')
                setStatus('You Tied')
                return
            }
            if (selection === 'rock') {
                if (computerSelection === 'scissors') {
                    setPlayerWinCount(playerWinCount + 1)
                    setStatus('You win!')
                }
                else {
                    setComputerWinCount(computerWinCount + 1)
                    setStatus('You lose')
                }
            }
            if (selection === 'paper') {
                if (computerSelection === 'rock') {
                    setPlayerWinCount(playerWinCount + 1)
                    setStatus('You win!')
                }
                else {
                    setComputerWinCount(computerWinCount + 1)
                    setStatus('You lose')
                }
            }
            if (selection === 'scissors') {
                if (computerSelection === 'paper') {
                    setPlayerWinCount(playerWinCount + 1)
                    setStatus('You win!')
                }
                else {
                    setComputerWinCount(computerWinCount + 1)
                    setStatus('You lose')
                }
            }
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(calculateResults, [selection])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (playerWinCount === 3) {
            setStatus("Congrats you won the game!  🎉")
        } else if (computerWinCount === 3) {
            setStatus("You lost the game 😔")
        }
    }, [playerWinCount, computerWinCount])
    
    return (
        <div>
            <h1 className="title">ROCK PAPER SCISSORS</h1>
            {selection.length === 0 ? null : <Button onClick={reset} variant="contained">Next</Button>}
            <div className="game-board">
                <div>
                    <h2 className='player'>Player</h2>
                    <p>{'⭐️'.repeat(playerWinCount)}</p>
                </div>
                <div></div>
                <div>            
                    <h2 className='computer'>Computer</h2>
                    <p>{'⭐️'.repeat(computerWinCount)}</p>
                </div>
            </div>
            <br />
            <br />
            <div className="game-board">
                <div className="player-choice">
                    {selection.length === 0 ? (<>
                        <img onClick={() => { onSelection('rock') }} src={rock} alt="Rock"></img>
                        <img onClick={() => { onSelection('paper') }} src={paper} alt="Paper"></img>
                        <img onClick={() => { onSelection('scissors') }} src={scissors} alt="Scissors"></img>
                    </>) : <img src={getSelectedImage(selection)} alt={selection}></img>}
                </div>
                <div>
                    <p className="alerts">{status}</p>
                </div>
                <div className="player-choice">
                    {computerSelection.length === 0 ? (<>
                        <img src={rock} alt="Rock"></img>
                        <img src={paper} alt="Paper"></img>
                        <img src={scissors} alt="Scissors"></img>
                    </>) : <img src={getSelectedImage(computerSelection)} alt={computerSelection}></img>}

                </div>
            </div>
        </div>
    )
};

export default Home;
