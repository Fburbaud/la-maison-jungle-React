//Formulaire non controlé:
// function handleSubmit(e) {
//     e.preventDefault()
//     alert(e.target['my_input'].value)
// }

// function QuestionForm() {
//     return <form onSubmit={handleSubmit}>
//                 <input type='text' name='my_input' defaultValue='Tapez votre texte' />
//                 <button type='submit'>Entrer</button>
//             </form>
// }

//formulaire controlé:
import { useState } from 'react';

//2 façons de vérifier la valeur saisie d'un input:

//au clic du bouton:
// function QuestionForm() {
//     const [inputValue, setInputValue] = useState('Posez votre question ici')
//     const isInputError = inputValue.includes('f')
//     return (
//         <div>
//             <textarea
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//             />
//             <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
//             {isInputError && (
//                 <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
//             )}
//         </div>
//     )
// }

//ou direct à la saisie:
function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')

    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }

    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}

export default QuestionForm;