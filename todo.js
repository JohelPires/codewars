form = document.querySelector('form')
tasks = document.querySelector('#tasks')
tarefa = document.querySelector('#tarefa')



form.onsubmit = () => {
    const li = document.createElement('li')
    li.innerHTML = tarefa.value
    tasks.append(li)
    tarefa.value = ''

    return false
}