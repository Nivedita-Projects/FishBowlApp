function Play() {
    var myAudio = document.getElementById("audioval");
    if (myAudio.paused) {
        myAudio.play();
    }
    else {
        myAudio.pause();
    }
}


function violet() {
    var button1 = document.getElementById("t1")
    var button2 = document.getElementById("display"),
        count = 0;
    button1.onclick = function () {
        count += 1;
        button2.innerHTML = " ";
        switch (count) {
            case 1:
                document.getElementById("display").style.backgroundColor = 'violet';
                document.getElementById("display").style.color = 'black';
                button2.innerHTML = "Video";
                document.getElementById("video1").hidden = "false";
                document.getElementById("video1").style.display = "block";
                document.getElementById("video2").style.display = "none";
                document.getElementById("video3").style.display = "none";
                document.getElementById("video4").style.display = "none";
                break;

            case 2:
                {
                    document.getElementById("display").style.backgroundColor = 'violet';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Audio";
                    document.getElementById("video1").hidden = "false";
                    document.getElementById("video1").style.display = "none";
                    document.getElementById("video3").style.display = "none";
                    document.getElementById("video4").style.display = "none";
                    document.getElementById("video2").style.display = "block";
                    break;
                }
            case 3:
                {
                    document.getElementById("display").style.backgroundColor = 'violet';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Image";
                    document.getElementById("video1").hidden = "false";
                    document.getElementById("video1").style.display = "none";
                    document.getElementById("video2").style.display = "none";
                    document.getElementById("video4").style.display = "none";
                    document.getElementById("video3").style.display = "block";
                    break;
                }
            case 4:
                {
                    document.getElementById("display").style.backgroundColor = 'violet';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Who is your secret crush? Speak out loudly";
                    document.getElementById("video1").style.display = "none";
                    document.getElementById("video2").style.display = "none";
                    document.getElementById("video3").style.display = "none";
                    document.getElementById("video4").style.display = "block";
                    break;
                }
            case 5:
                {
                    document.getElementById("display").style.backgroundColor = 'violet';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Who is your secret crush? Speak out loudly";
                    break;
                }
            case 6:
                {
                    document.getElementById("display").style.backgroundColor = 'violet';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Who is your secret crush? Speak out loudly";
                    break;
                }
            case 7:
                {
                    document.getElementById("display").style.backgroundColor = 'violet';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Who is your secret crush? Speak out loudly";
                    break;
                }
            case 8:
                {
                    document.getElementById("display").style.backgroundColor = 'violet';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Who is your secret crush? Speak out loudly";
                    break;
                }
            case 9:
                {
                    document.getElementById("display").style.backgroundColor = 'violet';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Do a free-style rap for the next minute";
                    count = 0;
                    break;
                }
            default:


        }
    };
}

function indigo() {
    var button1 = document.getElementById("t2")
    var button2 = document.getElementById("display"),
        count = 0;
    button1.onclick = function () {
        count += 1;
        button2.innerHTML = " ";
        switch (count) {
            case 1:
                document.getElementById("display").style.backgroundColor = 'indigo';
                document.getElementById("display").style.color = 'white';
                button2.innerHTML = "Video 2";
                break;

            case 2:
                {
                    document.getElementById("display").style.backgroundColor = 'indigo';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "What is the most childish thing you still do?";
                    break;
                }
            case 3:
                {
                    document.getElementById("display").style.backgroundColor = 'indigo';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "What is the most childish thing you still do?";
                    break;
                }
            case 4:
                {
                    document.getElementById("display").style.backgroundColor = 'indigo';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "What is the most childish thing you still do?";
                    break;
                }
            case 5:
                {
                    document.getElementById("display").style.backgroundColor = 'indigo';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "What is the most childish thing you still do?";
                    break;
                }
            case 6:
                {
                    document.getElementById("display").style.backgroundColor = 'indigo';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "What is the most childish thing you still do?";
                    break;
                }
            case 7:
                {
                    document.getElementById("display").style.backgroundColor = 'indigo';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "What is the most childish thing you still do?";
                    break;
                }
            case 8:
                {
                    document.getElementById("display").style.backgroundColor = 'indigo';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "What is the most childish thing you still do?";
                    break;
                }
            case 9:
                {
                    document.getElementById("display").style.backgroundColor = 'indigo';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Do 20 squats.";
                    count = 0;
                    break;
                }
            default:

        }
    };
}



function blue() {
    var button1 = document.getElementById("t3")
    var button2 = document.getElementById("display"),
        count = 0;
    button1.onclick = function () {
        count += 1;
        button2.innerHTML = " ";
        switch (count) {
            case 1:
                {
                    document.getElementById("display").style.backgroundColor = 'blue';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Call your crush.";
                    break;
                }
            case 2:
                {
                    document.getElementById("display").style.backgroundColor = 'blue';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Get into a Debate with a Wall";
                    break;
                }
            case 3:
                {
                    document.getElementById("display").style.backgroundColor = 'blue';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Get into a Debate with a Wall";
                    break;
                }
            case 4:
                {
                    document.getElementById("display").style.backgroundColor = 'blue';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Get into a Debate with a Wall";
                    break;
                }
            case 5:
                {
                    document.getElementById("display").style.backgroundColor = 'blue';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Get into a Debate with a Wall";
                    break;
                }
            case 6:
                {
                    document.getElementById("display").style.backgroundColor = 'blue';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Get into a Debate with a Wall";
                    break;
                }
            case 7:
                {
                    document.getElementById("display").style.backgroundColor = 'blue';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Get into a Debate with a Wall";
                    break;
                }
            case 8:
                {
                    document.getElementById("display").style.backgroundColor = 'blue';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Get into a Debate with a Wall";
                    break;
                }
            case 9:
                {
                    document.getElementById("display").style.backgroundColor = 'blue';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Tell us about the worst date you've ever been on?";
                    count = 0;
                    break;
                }
            default:

        }
    };
}


function green() {
    var button1 = document.getElementById("t4")
    var button2 = document.getElementById("display"),
        count = 0;
    button1.onclick = function () {
        count += 1;
        button2.innerHTML = " ";
        switch (count) {
            case 1:
                {
                    document.getElementById("display").style.backgroundColor = 'green';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Tell us weird thing you experienced in your life till now";
                    break;
                }
            case 2:
                {
                    document.getElementById("display").style.backgroundColor = 'green';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Have you ever blamed your fart on someone else?";
                    break;
                }
            case 3:
                {
                    document.getElementById("display").style.backgroundColor = 'green';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Have you ever blamed your fart on someone else?";
                    break;
                }
            case 4:
                {
                    document.getElementById("display").style.backgroundColor = 'green';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Have you ever blamed your fart on someone else?";
                    break;
                }
            case 5:
                {
                    document.getElementById("display").style.backgroundColor = 'green';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Have you ever blamed your fart on someone else?";
                    break;
                }
            case 6:
                {
                    document.getElementById("display").style.backgroundColor = 'green';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Have you ever blamed your fart on someone else?";
                    break;
                }
            case 7:
                {
                    document.getElementById("display").style.backgroundColor = 'green';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Have you ever blamed your fart on someone else?";
                    break;
                }
            case 8:
                {
                    document.getElementById("display").style.backgroundColor = 'green';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Have you ever blamed your fart on someone else?";
                    break;
                }
            case 9:
                {
                    document.getElementById("display").style.backgroundColor = 'green';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Act like a monkey";
                    count = 0;
                    break;
                }

            default:
        }
    };
}

function yellow() {
    var button1 = document.getElementById("t5")
    var button2 = document.getElementById("display"),
        count = 0;
    button1.onclick = function () {
        count += 1;
        button2.innerHTML = " ";
        switch (count) {
            case 1:
                {
                    document.getElementById("display").style.backgroundColor = 'yellow';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Sing a famous song you know.";
                    break;
                }
            case 2:
                {
                    document.getElementById("display").style.backgroundColor = 'yellow';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Do 5 minutes of stand-up comedy.";
                    break;
                }
            case 3:
                {
                    document.getElementById("display").style.backgroundColor = 'yellow';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Do 5 minutes of stand-up comedy.";
                    break;
                }
            case 4:
                {
                    document.getElementById("display").style.backgroundColor = 'yellow';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Do 5 minutes of stand-up comedy.";
                    break;
                }
            case 5:
                {
                    document.getElementById("display").style.backgroundColor = 'yellow';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Do 5 minutes of stand-up comedy.";
                    break;
                }
            case 6:
                {
                    document.getElementById("display").style.backgroundColor = 'yellow';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Do 5 minutes of stand-up comedy.";
                    break;
                }
            case 7:
                {
                    document.getElementById("display").style.backgroundColor = 'yellow';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Do 5 minutes of stand-up comedy.";
                    break;
                }
            case 8:
                {
                    document.getElementById("display").style.backgroundColor = 'yellow';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Do 5 minutes of stand-up comedy.";
                    break;
                }
            case 9:
                {
                    document.getElementById("display").style.backgroundColor = 'yellow';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Do you have any hidden talents? What are they?";
                    count = 0;
                    break;
                }
            default:
        }
    };
}

function orange() {
    var button1 = document.getElementById("t6")
    var button2 = document.getElementById("display"),
        count = 0;
    button1.onclick = function () {
        count += 1;
        button2.innerHTML = " ";
        switch (count) {
            case 1:
                {
                    document.getElementById("display").style.backgroundColor = 'orange';
                    button2.innerHTML = "If you could only listen to one song for the rest of your life, what would you choose?";
                    break;
                }
            case 2:
                {
                    document.getElementById("display").style.backgroundColor = 'orange';
                    button2.innerHTML = "What is one thing you wish you could change about yourself?";
                    break;
                }
            case 3:
                {
                    document.getElementById("display").style.backgroundColor = 'orange';
                    button2.innerHTML = "What is one thing you wish you could change about yourself?";
                    break;
                }
            case 4:
                {
                    document.getElementById("display").style.backgroundColor = 'orange';
                    button2.innerHTML = "What is one thing you wish you could change about yourself?";
                    break;
                }
            case 5:
                {
                    document.getElementById("display").style.backgroundColor = 'orange';
                    button2.innerHTML = "What is one thing you wish you could change about yourself?";
                    break;
                }
            case 6:
                {
                    document.getElementById("display").style.backgroundColor = 'orange';
                    button2.innerHTML = "What is one thing you wish you could change about yourself?";
                    break;
                }
            case 7:
                {
                    document.getElementById("display").style.backgroundColor = 'orange';
                    button2.innerHTML = "What is one thing you wish you could change about yourself?";
                    break;
                }
            case 8:
                {
                    document.getElementById("display").style.backgroundColor = 'orange';
                    button2.innerHTML = "What is one thing you wish you could change about yourself?";
                    break;
                }
            case 9:
                {
                    document.getElementById("display").style.backgroundColor = 'orange';
                    button2.innerHTML = "What is your biggest insecurity?";
                    count = 0;
                }
            default:

        }
    };
}


function red() {
    var button1 = document.getElementById("t9")
    var button2 = document.getElementById("display"),
        count = 0;
    button1.onclick = function () {
        count += 1;
        button2.innerHTML = " ";
        switch (count) {
            case 1:
                {
                    document.getElementById("display").style.backgroundColor = 'red';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Who do you hate and why?";
                    break;
                }
            case 2:
                {
                    document.getElementById("display").style.backgroundColor = 'red';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 3:
                {
                    document.getElementById("display").style.backgroundColor = 'red';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 4:
                {
                    document.getElementById("display").style.backgroundColor = 'red';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 5:
                {
                    document.getElementById("display").style.backgroundColor = 'red';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 6:
                {
                    document.getElementById("display").style.backgroundColor = 'red';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 7:
                {
                    document.getElementById("display").style.backgroundColor = 'red';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 8:
                {
                    document.getElementById("display").style.backgroundColor = 'red';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 9:
                {
                    document.getElementById("display").style.backgroundColor = 'red';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Color your Teeth with Lipstick";
                    count = 0;
                    break;
                }
            default:

        }
    };
}

function pink() {
    var button1 = document.getElementById("t8")
    var button2 = document.getElementById("display"),
        count = 0;
    button1.onclick = function () {
        count += 1;
        button2.innerHTML = " ";
        switch (count) {
            case 1:
                {
                    document.getElementById("display").style.backgroundColor = 'pink';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Who do you hate and why?";
                    break;
                }
            case 2:
                {
                    document.getElementById("display").style.backgroundColor = 'pink';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 3:
                {
                    document.getElementById("display").style.backgroundColor = 'pink';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 4:
                {
                    document.getElementById("display").style.backgroundColor = 'pink';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 5:
                {
                    document.getElementById("display").style.backgroundColor = 'pink';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 6:
                {
                    document.getElementById("display").style.backgroundColor = 'pink';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 7:
                {
                    document.getElementById("display").style.backgroundColor = 'pink';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 8:
                {
                    document.getElementById("display").style.backgroundColor = 'pink';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 9:
                {
                    document.getElementById("display").style.backgroundColor = 'pink';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Color your Teeth with Lipstick";
                    count = 0;
                    break;
                }
            default:

        }
    };
}
function brown() {
    var button1 = document.getElementById("t7")
    var button2 = document.getElementById("display"),
        count = 0;
    button1.onclick = function () {
        count += 1;
        button2.innerHTML = " ";
        switch (count) {
            case 1:
                {
                    document.getElementById("display").style.backgroundColor = 'brown';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Who do you hate and why?";
                    break;
                }
            case 2:
                {
                    document.getElementById("display").style.backgroundColor = 'brown';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 3:
                {
                    document.getElementById("display").style.backgroundColor = 'brown';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 4:
                {
                    document.getElementById("display").style.backgroundColor = 'brown';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 5:
                {
                    document.getElementById("display").style.backgroundColor = 'brown';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 6:
                {
                    document.getElementById("display").style.backgroundColor = 'brown';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 7:
                {
                    document.getElementById("display").style.backgroundColor = 'brown';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 8:
                {
                    document.getElementById("display").style.backgroundColor = 'brown';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 9:
                {
                    document.getElementById("display").style.backgroundColor = 'brown';
                    document.getElementById("display").style.color = 'white';
                    button2.innerHTML = "Color your Teeth with Lipstick";
                    count = 0;
                    break;
                }
            default:

        }
    };
}

function white() {
    var button1 = document.getElementById("t10")
    var button2 = document.getElementById("display"),
        count = 0;
    button1.onclick = function () {
        count += 1;
        button2.innerHTML = " ";
        switch (count) {
            case 1:
                {
                    document.getElementById("display").style.backgroundColor = 'white';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Who do you hate and why?";
                    break;
                }
            case 2:
                {
                    document.getElementById("display").style.backgroundColor = 'white';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 3:
                {
                    document.getElementById("display").style.backgroundColor = 'white';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 4:
                {
                    document.getElementById("display").style.backgroundColor = 'white';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 5:
                {
                    document.getElementById("display").style.backgroundColor = 'white';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 6:
                {
                    document.getElementById("display").style.backgroundColor = 'white';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 7:
                {
                    document.getElementById("display").style.backgroundColor = 'white';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 8:
                {
                    document.getElementById("display").style.backgroundColor = 'white';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 9:
                {
                    document.getElementById("display").style.backgroundColor = 'white';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Color your Teeth with Lipstick";
                    count = 0;
                    break;
                }
            default:

        }
    };
}
function silver() {
    var button1 = document.getElementById("t11")
    var button2 = document.getElementById("display"),
        count = 0;
    button1.onclick = function () {
        count += 1;
        button2.innerHTML = " ";
        switch (count) {
            case 1:
                {
                    document.getElementById("display").style.backgroundColor = 'silver';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Who do you hate and why?";
                    break;
                }
            case 2:
                {
                    document.getElementById("display").style.backgroundColor = 'silver';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 3:
                {
                    document.getElementById("display").style.backgroundColor = 'silver';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 4:
                {
                    document.getElementById("display").style.backgroundColor = 'silver';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 5:
                {
                    document.getElementById("display").style.backgroundColor = 'silver';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 6:
                {
                    document.getElementById("display").style.backgroundColor = 'silver';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 7:
                {
                    document.getElementById("display").style.backgroundColor = 'silver';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 8:
                {
                    document.getElementById("display").style.backgroundColor = 'silver';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }

            case 9:
                {
                    document.getElementById("display").style.backgroundColor = 'silver';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Color your Teeth with Lipstick";
                    count = 0;
                    break;
                }
            default:

        }
    };
}

function gold() {
    var button1 = document.getElementById("t12")
    var button2 = document.getElementById("display"),
        count = 0;
    button1.onclick = function () {
        count += 1;
        button2.innerHTML = " ";
        switch (count) {
            case 1:
                {
                    document.getElementById("display").style.backgroundColor = 'gold';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Who do you hate and why?";
                    break;
                }
            case 2:
                {
                    document.getElementById("display").style.backgroundColor = 'gold';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 3:
                {
                    document.getElementById("display").style.backgroundColor = 'gold';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 4:
                {
                    document.getElementById("display").style.backgroundColor = 'gold';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 5:
                {
                    document.getElementById("display").style.backgroundColor = 'gold';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 6:
                {
                    document.getElementById("display").style.backgroundColor = 'gold';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 7:
                {
                    document.getElementById("display").style.backgroundColor = 'gold';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 8:
                {
                    document.getElementById("display").style.backgroundColor = 'gold';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Walk in reverse and sing for 1 minute";
                    break;
                }
            case 9:
                {
                    document.getElementById("display").style.backgroundColor = 'gold';
                    document.getElementById("display").style.color = 'black';
                    button2.innerHTML = "Color your Teeth with Lipstick";
                    count = 0;
                    break;
                }
            default:

        }
    };
}