const addComment = (e) => {
    e.preventDefault();
    let comment = document.getElementById('comment');
    document.getElementById('comment-list').innerHTML += "<li class='mbtm-3'><b>Swapnil: </b><small class='overflow-wrap'>"+comment.value+"</small></li>";
    document.getElementById('comment-list').scrollTop = document.getElementById('comment-list').scrollHeight;
    comment.value = "";
}