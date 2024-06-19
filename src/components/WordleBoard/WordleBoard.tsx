import React, { useEffect, useState } from 'react';
import WordleKeyBoard from '../WordleKeyBoard/WordleKeyBoard';
import WordleInput from '../WordleInput/WordleInput';

const WordleBoard: React.FC = (): JSX.Element => {
    const [guesses, setGuesses] = useState<string[]>([...Array(6)])
    const [solution, setSolution] = useState<string>("")
    const [usableWords, setUsableWords] = useState<string[]>([])

    useEffect((): void => {
let words: string[] = require("an-array-of-english-words")   
let fiveLetterWords: string[] = words.filter((word: string) => word.length === 5);
setUsableWords(fiveLetterWords)
let randomNumber: number = Math.floor(Math.random() * fiveLetterWords.length - 1)
setSolution(fiveLetterWords[randomNumber])
    }, []) 

    useEffect((): void => {
      console.log(solution);
        let hasWon: boolean = guesses.filter((guess: string): boolean => guess == solution).length > 0 ?true : false
        let realGuesses: string[] = guesses.filter((guess: string): string => guess && guess)
        if (hasWon) {
            // alert("Congrats.")
            window.location.reload()
        } else if (realGuesses.length >= 6) {
            alert("Loser!")
            window.location.reload()
        }
    }, [solution, guesses])
    return (
        <div>
            {guesses.map((guess: string, i: number): JSX.Element => (
            <WordleInput index={i} key={i} setGuesses={setGuesses} guesses={guesses} usablaWords={usableWords} solution={solution}/>
            ))}
            <WordleKeyBoard/>
        </div>
    );
};

export default WordleBoard;