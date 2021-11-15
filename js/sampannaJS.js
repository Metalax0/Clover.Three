/* 
----------------------
----------------------
JS CODE FOR TO-DO-LIST
----------------------
----------------------
*/

// Method to strike a text (strike to do tasks)
function strikeTask(currentCheckbox)
{
	/* 
	NOTE : According to html structure, first checkbox corresponds to second text field
		   this is why we're comparing checkbox of i index with text tield of i+1 index
	*/

	var inputDOM = document.querySelectorAll('input[type="text"]');
	var checkboxDOM = document.querySelectorAll('input[type="checkbox"]')

	for(var i=0; i<checkboxDOM.length; i++)
	{
		if(checkboxDOM[i] == currentCheckbox)
		{
			inputDOM[i+1].classList.add("strike");
			inputDOM[i+1].disabled = true;
			checkboxDOM[i].disabled = true;
		}
	}
}

// Method to delete task when delete button is pressed
function deleteTask(buttonPressed)
{
	parentContainer = buttonPressed.parentElement;
	parentContainer.outerHTML="";
}

// Method to add new task (adds at the end of previous task)
function addTask()
{
	var parentContainer = document.getElementById("todo-checkbox-container");
	var allTask = document.getElementsByClassName("task");
	var content = '<div class="task"><input type="checkbox" onclick = strikeTask(this)><input class="todo-option" type="text" placeholder="Write Task Name Here"><button class="deleteButton" onclick="deleteTask(this)"><img src="../resources/icon_delete.png"></button></div>';

	// If all tasks are empty, adds to parent container, else adds to last task
	if(allTask.length==0)
	{
		parentContainer.innerHTML = content;
	}
	else
	{
		var lastTask = allTask[allTask.length-1];
		lastTask.insertAdjacentHTML("afterend", content);
	}
}

/* 
------------------------
------------------------
JS CODE FOR CRYPTIC QUIZ
------------------------
------------------------
*/

//  For the purpose of testing (only works in case of one question)
function checkAnswer()
{
	var answerDOM = document.querySelector('#puzzle-container input[type="text"]');
	var checkanswerDOM = document.getElementsByClassName("checkAnswer");
	var correctAnswer = false;
	console.log(checkanswerDOM[0]);

	if (answerDOM.value.toUpperCase() == "ALAN TURING")
	{
		correctAnswer = true;
	}

	if (correctAnswer)
	{
		checkanswerDOM[0].style.background = "green";
	}
	else
	{
		checkanswerDOM[0].style.background = "red";
	}
}

function nextPuzzle()
{
	//
}

function previousPuzzle()
{
	//
}

