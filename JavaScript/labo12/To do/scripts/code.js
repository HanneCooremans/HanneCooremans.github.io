tasks = [];

const setup = () => {
    document.getElementById('buttonMake').addEventListener('click', make);
    document.querySelectorAll('.column').forEach(col => {
        const status = col.dataset.status;
        //Het dragover-event wordt geactiveerd wanneer een gesleept element over een geldig dropgebied beweegt
        //Zonder het dragover-event kunnen we het drop-event niet uitvoeren. Dit is omdat de standaard browseractie voor
        // het dragover-event niet toestaat dat de gebruiker iets daadwerkelijk "dropt".
        //Om de drop-actie toe te staan, moet je e.preventDefault() aanroepen in de dragover-event handler. H
        // ierdoor wordt de standaard browseractie (die het droppen verhindert) voorkomen.
        //Wanneer een gebeurtenis (zoals click, submit, dragover, enz.) plaatsvindt, heeft de browser daar vaak een standaardgedrag aan gekoppeld.
        // Soms wil je dat standaardgedrag overschrijven — dan gebruik je preventDefault().
        col.addEventListener('dragover', e => e.preventDefault());
        col.addEventListener('drop', e => handleDrop(e, status));
    });
}

const make = () => {

    const title = document.getElementById('txt1').value
    const subtitle = document.getElementById('txt2').value
    const datum = new Date().toString()

    const task = {
        title: title,
        discription: subtitle,
        createdAt: datum,
        status: 'todo'
    }
    tasks.push(task);

    const taskDiv = document.createElement('div')
    taskDiv.className = 'task';
    taskDiv.draggable = true;
    taskDiv.id = task.createdAt;

    let todo = document.querySelector("#todo")

    taskDiv.appendChild(createElementWithClassNameAndText('h2','',title))
    taskDiv.appendChild(createElementWithClassNameAndText('h3','',subtitle))

    taskDiv.appendChild(createElementWithClassNameAndText('p','',datum))
    todo.appendChild(taskDiv)

    taskDiv.addEventListener('dragstart', handleDragStart);

}

const handleDrop = (e, status) => {

    let dropZone;
    if (status === 'todo') {
        dropZone = document.querySelector('#todo')
    }
    else if (status === 'inprogress') {
        dropZone = document.querySelector('#inprogress')
    }else if (status === 'done') {
        dropZone = document.querySelector('#done')
    }
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const task = tasks.find (t => t.createdAt === id)

    const taskDiv = document.createElement('div')
    taskDiv.className = 'task';
    taskDiv.draggable = true;
    taskDiv.id = task.createdAt;

    let todo = document.querySelector("#todo")

    taskDiv.appendChild(createElementWithClassNameAndText('h2','',task.title))
    taskDiv.appendChild(createElementWithClassNameAndText('h3','',task.discription))

    taskDiv.appendChild(createElementWithClassNameAndText('p','',task.createdAt))
    todo.appendChild(taskDiv)

    dropZone.appendChild(taskDiv);
    taskDiv.addEventListener('dragstart', handleDragStart);
}

const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
}

const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className)
    e.appendChild(document.createTextNode(text));
    return e;
};

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
}

window.addEventListener("load", setup);