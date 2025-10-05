
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { languages } from './languages'
import clsx from 'clsx'

function App() {
//state values
const [currentWord,setCurrentWord]=useState('react')
const [guessLetter,setGuessLetter]=useState([])
 //derived values

const wrongGuessedArray=guessLetter.filter(letter=>!currentWord.includes(letter))
console.log(wrongGuessedArray);

const alphabet='abcdefghijklmnopqrstuvwxyz'


function addGuessedLetter(letter){
setGuessLetter(prevLetters=>
    prevLetters.includes(letter)?prevLetters:
    [...prevLetters,letter])
}

//key board 
const letterElements=
      alphabet.split('').map((letter,i)=> {
        const isGuessed=guessLetter.includes(letter)
        const isCorrect=isGuessed && currentWord.includes(letter)
        const isWrong=isGuessed && !currentWord.includes(letter)
        const className=clsx({
          correct: isCorrect,
          wrong: isWrong
        })
      return (
     <button 
      onClick={()=>addGuessedLetter(letter)}
      className={`${className} w-9 h-9 flex justify-center items-center
    bg-[#FCBA29] text-xl text-black  cursor-pointer   
    rounded border border-[#D7D7D7] `}
     key={i}>{letter.toUpperCase()}</button>
   )
   } )
     

const languageElements=
  languages.map(lang=>{
   const styles={
    backgroundColor:lang.backgroundColor,
    color:lang.color,
    
   }
  return(
    <p  className='p-1 rounded  ' style={styles} key={lang.name}>{lang.name}</p>
  )
  })

  const wordElements=currentWord
     .split('').map((letter,index)=>
  <p className='w-10 h-10 flex justify-center items-center
    bg-[#323232] text-xl border-b border-b-[#F9F4DA] '
     key={index}>{ guessLetter.includes(letter)? letter.toUpperCase():""}</p>)

  return (
    <>
     <Navbar></Navbar>
     <section className='bg-[#10A95B] text-center text-white rounded-2xl my-5 py-2 '>
      <h2 className='text-xl font-medium'>You Win !</h2>
      <p className='text-base'>Well done 🎉</p>
     </section>
           <section className='flex flex-wrap gap-1
                        justify-center items-center max-width-[350px]'>
           {languageElements}
       </section>
         {/* word */}
                <section className='flex  justify-center items-center mt-5 gap-2'>
                   {wordElements}
             </section >
{       /* alphabet */}
                   <section className='flex flex-wrap justify-center items-center
                    max-w-[450px] mx-auto  mt-5 gap-2'>
                       {letterElements}
                   </section>
              <div className='text-center bg-sky-500 w-40 border rounded border-[#D7D7D7]  mx-auto  mt-5 '>
                   <button className='px-2 py-3 text-[#1E1E1E] font-semibold text-center'>New Game</button>
  
             </div>
    </>
  )
}

export default App
