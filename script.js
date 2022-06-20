let id = 1;

function add() {
    if (document.getElementById("metas").value == ''){
        alert("Campo Metas vazio!");
    }
    else{
        let novaMeta = document.getElementById("metas").value;
        document.getElementById("lista").insertAdjacentHTML('afterend', '<li id="meta'+ id +'">'+ novaMeta +'</li><button type="button" id="meta'+ id +'" class="bt" onclick="remove('+ id +')">🗑</button></br>');
        id++;
        document.getElementById('metas').value = '';
    }
    
}

function remove(metaId){
    document.getElementById('meta' + metaId).remove();
    document.getElementById('meta' + metaId).remove();
}


function invalid(){
    alert("Sessão indisponível no momento!");
}