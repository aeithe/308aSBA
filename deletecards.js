export default function deleteCards(container){
    if(container.children.length){
        container.removeChild(container.children[0])
    }
}

