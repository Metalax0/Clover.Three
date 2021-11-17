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
var puzzleDOM = document.getElementsByClassName("puzzle");
var puzzlecontainerDOM = document.querySelector('.parallax-2 .column-left');
var checkanswerDOM = document.getElementsByClassName("checkAnswer");

var isCorrect = false;
var currentPuzzle = 1;

// Checks answer for all puzzles
function checkAnswer()
{
	var answerDOM = document.getElementsByClassName("puzzle-answer");
	var puzzlecontainerDOM = document.querySelector('.parallax-2 .column-left');
	var checkanswerDOM = document.getElementsByClassName("checkAnswer");

	if(currentPuzzle == 1)
	{
		if (answerDOM[0].value.toUpperCase() == "NO PRESSURE NO DIAMONDS")
		{
			isCorrect = true;
		}
		else
		{
			isCorrect = false;
		}
	}

	else if(currentPuzzle == 2)
	{
		if (answerDOM[1].value.toUpperCase() == "ALAN TURING")
		{
			isCorrect = true;
		}
		else
		{
			isCorrect = false;
		}
	}

	else if(currentPuzzle == 3)
	{
		if (answerDOM[2].value.toUpperCase() == "CONGRATS YOU FOUND THE ANSWER")
		{
			isCorrect = true;
		}
		else
		{
			isCorrect = false;
		}
	}

	if (isCorrect)
	{
		checkanswerDOM[0].style.background = '#AAFF00';
		puzzlecontainerDOM.style.outlineColor = '#AAFF00';
		puzzlecontainerDOM.style.outlineWidth = "8px";
	}
	else
	{
		checkanswerDOM[0].style.background = "red";
		puzzlecontainerDOM.style.outlineColor = "red"
		puzzlecontainerDOM.style.outlineWidth = "8px";
	}
}

// Loads up html for next puzzle and hides current one
function nextPuzzle()
{
	var puzzlecontainerDOM = document.querySelector('.parallax-2 .column-left');
	var checkanswerDOM = document.getElementsByClassName("checkAnswer");

	if (isCorrect && currentPuzzle!=puzzleDOM.length)
	{
		puzzleDOM[currentPuzzle-1].style.display = "none"
		puzzleDOM[currentPuzzle].style.display = "flex"

		checkanswerDOM[0].style.background = "";
		puzzlecontainerDOM.style.outlineColor = ""
		puzzlecontainerDOM.style.outlineWidth = "5";

		currentPuzzle += 1;
		isCorrect = false;
	}
}

// Loads up html for previous puzzle and hides current one
function previousPuzzle()
{
	var puzzlecontainerDOM = document.querySelector('.parallax-2 .column-left');
	var checkanswerDOM = document.getElementsByClassName("checkAnswer");
	
	if (currentPuzzle !=1)
	{
		checkanswerDOM[0].style.background = "";
		puzzlecontainerDOM.style.outlineColor = ""
		puzzlecontainerDOM.style.outlineWidth = "5";

		puzzleDOM[currentPuzzle-1].style.display = "none"
		puzzleDOM[currentPuzzle-2].style.display = "flex"
		currentPuzzle -=1
	}
}

