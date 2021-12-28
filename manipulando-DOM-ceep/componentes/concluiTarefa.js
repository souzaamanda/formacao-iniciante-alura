const BotaoConclui = () => {
    const botaoConclui =  document.createElement("button")

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'
    
    botaoConclui.addEventListener('click', concluirtarefa) 

    return botaoConclui

}


const concluirtarefa = (evento) => {
    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')
}

export default BotaoConclui