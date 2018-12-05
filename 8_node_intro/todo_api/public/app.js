/* global $ */
$(document).ready(function(){
  $.getJSON('/api/todos')
    .then(addTodos)
    .catch(function(err){
      console.log(err);
    });
  $('#todoInput').keypress(function(event){
    if(event.which == 13 && $(this).val() != ''){
      createTodo();
    }
  });
  $('.list').on('click', 'span', function(e){ //specify on span
    e.stopPropagation(); //not to react on li events
    removeTodo($(this).parent());
  });
  $('.list').on('click','li', function(){
    updateTodo($(this))
  })
});

function updateTodo(todo){
  var updateUrl = '/api/todos/'+ todo.data('todoId');
  var isDone = !todo.data('completed'); //this data does not change after click
  var updateData = {completed: isDone};
  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData
  })
    .then(function(updatedTodo){
      todo.toggleClass('done');
      todo.data('completed', isDone); //update of item data
    })
    .catch(function(err){console.log(err)});
}

function removeTodo(todo){
  var clickedId = todo.data('todoId'); //to get data
  todo.remove();
  var deleteUrl = '/api/todos/'+ clickedId;
  $.ajax({
    method: 'DELETE',
    url: deleteUrl
  })
    .then(function(data){console.log(data)})
    .catch(function(err){console.log(err)});
}

function addTodos(todos) {
  todos.forEach(function(todo){
    addTodo(todo);
  });
}

function addTodo(todo){
  var newTodo = $('<li class="task">'+todo.name+' <span>X</span></li>');
  newTodo.data('todoId', todo._id);
  newTodo.data('completed', todo.completed);
  if (todo.completed) {
    newTodo.addClass('done');
  }
  $('.list').append(newTodo);
}


function createTodo(){
  var userInput = $('#todoInput').val();
  $.post('/api/todos', {name: userInput})
    .then(function(newTodo){
      $('#todoInput').val('');
      addTodo(newTodo);
    })
    .catch(function(err){console.log(err);});
}
