import React from 'react';

const WordleKeyBoard: React.FC = (): JSX.Element => {
    const alphabet: string[] = "qwertyuiopasdfghjklzxcvbnm ".split("")
    const entered: string[] = ["Enetr"]
    return (
        <div className='keyboardBase'>
            {alphabet.map((letter: string, i: number): JSX.Element => (
                <div className="key" id={letter} key={i}>
                    {letter}
                </div>
            ))}
            
        </div>
    );
};

export default WordleKeyBoard;