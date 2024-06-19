import React, { useEffect, useState } from 'react';
import "./wordle.css"




const totalGuessMax = 6

type WordleProps = {
    puzzleWord: string;
}


const Wordle = ({
    puzzleWord
}: WordleProps) => {

if (puzzleWord.length !== 5) {
    throw new Error(`Puzzle word must bu 5 charactes long. ${puzzleWord} is not a valid puzzle word.`)
}

    const [submitedGuesses, setSubmitedGuesses] = useState<string[][]>([])
    const [guess, setGuess] = useState <string[]>([]);

    useEffect(() => {
        function hundleKeyDown({key}: {key: string}) {
            console.log(key);


            const isChar = /^[a-z]$/.test(key);
            const isBackspace = key === "Backspace";
            const isSubmit = key === "Enter"
            const isGuessFinished = guess.length === 5

            if (isBackspace) {
                setGuess((prev) => {
                    const temp = [...prev]
                    temp.pop()
                    return temp
                })
            } else if (isChar && !isGuessFinished) {
                setGuess((prev) => [...prev, key])
            } else if (isGuessFinished && isSubmit) {
                setSubmitedGuesses((prev) => [...prev, guess]);
                setGuess([]);
            }
        }
        window.addEventListener("keydown", hundleKeyDown);
        return () => {
            window.removeEventListener("keydown", hundleKeyDown);
        }
    }, [guess.length, guess])
    
    console.log(submitedGuesses);

    const isCorrect = submitedGuesses.length > 0 && submitedGuesses[submitedGuesses.length - 1].join("") === puzzleWord;
    
    return (
        <div className='wordle'>
            <SubmitedGuesses submitedGuesses={submitedGuesses} puzzleWord={puzzleWord}/>
            {!isCorrect && (
                 <CurrentGuess  
                 guess={guess}/>
            )}
           
            {Array.from({length: totalGuessMax - submitedGuesses.length - (isCorrect ? 0 : 1)}).map((_, i) => {
                return <EmptyGeess key={i}/>
            })}
            </div>
    );
};

type SubmitedGuessesProps  = {
    submitedGuesses: string[][]
    puzzleWord: string;
}


function SubmitedGuesses({submitedGuesses,puzzleWord}: SubmitedGuessesProps) {
    return (
        <>
        {submitedGuesses.map((guess, i) => {
            return <SubmitedGuess puzzleWord={puzzleWord} guess={guess} key={i}/>
        })}
        </>
    )
}

type GuessProps = {
    guess: string[]
}

function SubmitedGuess({
    guess
}: GuessProps & {
    puzzleWord: string
}) {
    return (
        <div className="SubmitedGuess">
           {Array.from({length: 5}).map((_, i) => {
                return <span className='char' key={i}>{guess[i] || ""}</span>
            })}
        </div>
    )
}

function CurrentGuess({guess}: GuessProps) {
return (
    <div className='word'>
        {Array.from({length: 5}).map((_, i) => {
                return <span className='char' key={i}>{guess[i] || ""}</span>
            })}
    </div>
)
}

function EmptyGeess () {
return (
    <div className="word">
{Array.from({length: 5}).map((_, i) => {
    return <span className='char' key={i}/>
})}
</div> 
)
}


export default Wordle;