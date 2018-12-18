var score_s = $("#score h2").text();
var score = Number(score_s);
var renderBoardGlobal;
const player = {
    name: "player1",
    position: 0
};
const monster = {
    name: "wumpus",
    position: Math.ceil(Math.random() * 15)
};
const stench = [{
        name: "stenchTop",
        position: monster.position + 4
    },
    {
        name: "stenchBottom",
        position: monster.position - 4
    },
    {
        name: "stenchRight",
        position: monster.position + 1
    },
    {
        name: "stenchLeft",
        position: monster.position - 1
    }
];



const gold = {
    name: "gold1",
    position: Math.ceil(Math.random() * 15)
};
const shine = [{
        name: "shineTop",
        position: gold.position + 4
    },
    {
        name: "shineBottom",
        position: gold.position - 4
    },
    {
        name: "shineRight",
        position: gold.position + 1
    },
    {
        name: "shineLeft",
        position: gold.position - 1
    }
];



function setPosition(){
    player.position = 0;
    monster.position = Math.ceil(Math.random() * 15);
    gold.position = Math.ceil(Math.random() * 15);

    if (monster.position === gold.position) {
        if (gold.position === 15) {
            gold.position -= 1;
        } else {
            gold.position += 1;
        }
    }

    stench[0].position = monster.position + 4;
    stench[1].position = monster.position - 4;
    stench[2].position = monster.position + 1;
    stench[3].position = monster.position - 1;

    shine[0].position = gold.position + 4;
    shine[1].position = gold.position - 4;
    shine[2].position = gold.position + 1;
    shine[3].position = gold.position - 1;

    if (monster.position == 3 || monster.position == 7 || monster.position == 11 || monster.position == 15) {
        stench[2].position = 100;
        console.log("running")
    }
    
    if (monster.position == 0 || monster.position == 4 || monster.position == 8 || monster.position == 12) {
        stench[3].position = 100;
        console.log("running2")
    }

    if (gold.position == 3 || gold.position == 7 || gold.position == 11 || gold.position == 15) {
        shine[2].position = 100;
        console.log("running")
    }
    
    if (gold.position == 0 || gold.position == 4 || gold.position == 8 || gold.position == 12) {
        shine[3].position = 100;
        console.log("running2")
    }
}
setPosition();
// const pit1 = {
//     name: "pit1",
//     position: Math.ceil(Math.random() * 15)
// };
// const wind1 = [{
//         name: "wind1Top",
//         position: pit1.position + 4
//     },
//     {
//         name: "wind1Bottom",
//         position: pit1.position - 4
//     },
//     {
//         name: "wind1Right",
//         position: pit1.position + 1
//     },
//     {
//         name: "wind1Left",
//         position: pit1.position - 1
//     }
// ];

// if (pit1.position == 3 || pit1.position == 7 || pit1.position == 11 || pit1.position == 15) {
//     wind1[2].position = 100;
//     console.log("running")
// }

// if (pit1.position == 0 || pit1.position == 4 || pit1.position == 8 || pit1.position == 12) {
//     wind1[3].position = 100;
//     console.log("running2")
// }

// if (pit1.position === gold.position || pit1.position === monster.position) {
//     if (pit1.position === 15) {
//         pit1.position -= 1;
//     } else {
//         pit1.position += 1;
//     }

// }

// const pit2 = {
//     name: "pit2",
//     position: Math.ceil(Math.random() * 15)
// };
// const wind2 = [{
//         name: "wind2Top",
//         position: pit2.position + 4
//     },
//     {
//         name: "wind2Bottom",
//         position: pit2.position - 4
//     },
//     {
//         name: "wind2Right",
//         position: pit2.position + 1
//     },
//     {
//         name: "wind2Left",
//         position: pit2.position - 1
//     }
// ];

// if (pit2.position == 3 || pit2.position == 7 || pit2.position == 11 || pit2.position == 15) {
//     wind2[2].position = 100;
//     console.log("running")
// }

// if (pit2.position == 0 || pit2.position == 4 || pit2.position == 8 || pit2.position == 12) {
//     wind2[3].position = 100;
//     console.log("running2")
// }

// if (pit2.position === gold.position || pit2.position === monster.position || pit2.position === pit1.position) {
//     if (pit2.position === 15) {
//         pit2.position -= 1;
//     } else {
//         pit2.position += 1;
//     }

// }

// console.log(stench[0]);
// console.log(stench[1]);
// console.log(stench[2]);
// console.log(stench[3]);
// console.log(stench);
// console.log(monster);

if (monster.position === player.position) {
    console.log("GAME OVER");
    $(".status-outside").css("display", "block");
    $(".status").css("display", "block");
    $(".lost").css("display", "block");
}
if (gold.position === player.position) {
    console.log("YOU WON");
    $(".status-outside").css("display", "block");
    $(".status").css("display", "block");
    $(".win").css("display", "block");
}
// if (pit1.position === player.position || pit2.position === player.position) {
//     console.log("START AGAIN");
//     player.position = 0;
//     if (score >= 20) {
//         score -= 20;
//     } else {
//         score = 0;
//     }

//     $("#score h2").text(score);
// }



for (var s = 0; s < stench.length; s++) {

    if (stench[s].position === player.position) {
        console.log("player is on stench");
    }
}
for (var s = 0; s < shine.length; s++) {

    if (shine[s].position === player.position) {
        console.log("player is on shine");
    }
}
// for (var s = 0; s < wind1.length; s++) {

//     if (wind1[s].position === player.position) {
//         console.log("player is on wind");
//     }
// }
// for (var s = 0; s < wind2.length; s++) {

//     if (wind2[s].position === player.position) {
//         console.log("player is on wind");
//     }
// }

$(document).ready(function () {
    if (monster.position === player.position) {
        console.log("GAME OVER");

        $(".status-outside").css("display", "block");
    $(".status").css("display", "block");
    $(".lost").css("display", "block");
    }
    const width = 4;
    const height = 4;
    let position = 0;
    const board = [];
    for (var y = height - 1; y >= 0; y--) {
        let row = [];
        board.push(row);
        for (var x = 0; x < width; x++) {
            row.push({
                x,
                y,
                ocuupied: null,
                position
            });
            position++;
        }
    }
    console.log(board);
    const renderBoard = () => {
        let boardHTML = "";
        board.forEach(row => {
            row.forEach(square => {
                var top = square.y * 117;
                var left = square.x * 167;
                boardHTML += "<div class='square' style='top:" + top + "px;left:" +
                    left + "px'></div>";
            });
        });
        let square = null;
        board.forEach(row => {
            row.forEach(square => {
                var top = square.y * 117;
                var left = square.x * 167;
                if (player.position === square.position) {
                    console.log("player is on this square : ", square);
                    boardHTML += "<div class='player' style='top:" + top +
                        "px;left:" + left + "px'></div>";
                }
                if (monster.position === square.position) {
                    console.log("monster is on this square : ", square);
                    boardHTML += "<div class='monster' style='top:" + top +
                        "px;left:" + left + "px'></div>";
                }
                if (gold.position === square.position) {
                    console.log("monster is on this square : ", square);
                    boardHTML += "<div class='gold' style='top:" + top +
                        "px;left:" + left + "px'></div>";
                }
                // if (pit1.position === square.position) {
                //     console.log("pit is on this square : ", square);
                //     boardHTML += "<div class='pit1' style='top:" + top +
                //         "px;left:" + left + "px'></div>";
                // }
                // if (pit2.position === square.position) {
                //     console.log("pit is on this square : ", square);
                //     boardHTML += "<div class='pit2' style='top:" + top +
                //         "px;left:" + left + "px'></div>";
                // }
                for (var s = 0; s < stench.length; s++) {
                    if (stench[s].position === square.position) {
                        console.log("stench is on this square : ", square);
                        boardHTML += "<div class='stench' id=" + s + " style='top:" +
                            top +
                            "px;left:" + left + "px'></div>";
                    }
                }
                for (var s = 0; s < shine.length; s++) {
                    if (shine[s].position === square.position) {
                        console.log("shine is on this square : ", square);
                        boardHTML += "<div class='shine' id=" + s + s +
                            " style='top:" + top +
                            "px;left:" + left + "px'></div>";
                    }
                }
                // for (var s = 0; s < wind1.length; s++) {
                //     if (wind1[s].position === square.position) {
                //         console.log("wind is on this square : ", square);
                //         boardHTML += "<div class='wind' id=" + s + s + s +
                //             " style='top:" + top +
                //             "px;left:" + left + "px'></div>";
                //     }
                // }
                // for (var s = 0; s < wind2.length; s++) {
                //     if (wind2[s].position === square.position) {
                //         console.log("wind is on this square : ", square);
                //         boardHTML += "<div class='wind' id=" + s + s + s + s+
                //             " style='top:" + top +
                //             "px;left:" + left + "px'></div>";
                //     }
                // }

            });
        });
        $("#board").html(boardHTML);
    }
    renderBoard();
    renderBoardGlobal = renderBoard;
    document.onkeydown = function (e) {

        if (score == 5) {
            $(".monster").css("opacity", "1");
            $(".status-outside").css("display", "block");
            $(".status").css("display", "block");
            $(".lost").css("display", "block");
        }
        switch (e.keyCode) {
            case 37:

                //left
                if (score !== 0) {

                    if (player.position != 0 && player.position != 4 && player.position != 8 &&
                        player.position != 12) {
                        score -= 5;
                        $("#score h2").text(score);
                        player.position--;
                    }
                    renderBoard();
                }
                if (monster.position === player.position) {
                    console.log("GAME OVER");
                    $(".monster").css("opacity", "1");
                    $(".status-outside").css("display", "block");
                    $(".status").css("display", "block");
                    $(".lost").css("display", "block");

                }
                if (gold.position === player.position) {
                    console.log("YOU WON");
                    $(".gold").css("opacity", "1");
                    $(".status-outside").css("display", "block");
    $(".status").css("display", "block");
    $(".win").css("display", "block");

                }
                // if (pit1.position === player.position) {
                //     console.log("START AGAIN");
                //     $(".pit1").css("opacity", "1");
                //     if (score >= 20) {
                //         score -= 20;
                //     } else {
                //         score = 0;
                //     }

                //     $("#score h2").text(score);

                // }
                // if (pit2.position === player.position) {
                //     console.log("START AGAIN");
                //     $(".pit2").css("opacity", "1");
                //     if (score >= 20) {
                //         score -= 20;
                //     } else {
                //         score = 0;
                //     }

                //     $("#score h2").text(score);

                // }
                // for (var s = 0; s < wind1.length; s++) {

                //     if (wind1[s].position === player.position) {
                //         console.log("player is on wind");
                //         $("#" + s + s + s).css("opacity", "1");
                //     }
                // }
                // for (var s = 0; s < wind2.length; s++) {

                //     if (wind2[s].position === player.position) {
                //         console.log("player is on wind");
                //         $("#" + s + s + s + s).css("opacity", "1");
                //     }
                // }
                for (var s = 0; s < stench.length; s++) {

                    if (stench[s].position === player.position) {
                        console.log("player is on stench");
                        $("#" + s).css("opacity", "1");
                    }
                }
                for (var s = 0; s < shine.length; s++) {

                    if (shine[s].position === player.position) {
                        console.log("player is on shine");
                        $("#" + s + s).css("opacity", "1");
                    }
                }
                for (var s = 0; s < stench.length; s++) {
                    for (var t = 0; t < shine.length; t++) {

                        if (stench[s].position === shine[t].position) {
                            console.log("player is on shine and stench");
                        }
                    }
                }
                break;
            case 38:
                if (score !== 0) {

                    if (player.position < 12) {
                        score -= 5;
                        $("#score h2").text(score);
                        player.position += 4;

                    }
                    renderBoard();
                }
                //up
                if (monster.position === player.position) {
                    console.log("GAME OVER");
                    $(".monster").css("opacity", "1");
                    $(".status-outside").css("display", "block");
    $(".status").css("display", "block");
    $(".lost").css("display", "block");

                }
                if (gold.position === player.position) {
                    console.log("YOU WON");
                    $(".gold").css("opacity", "1");

                    $(".status-outside").css("display", "block");
    $(".status").css("display", "block");
    $(".win").css("display", "block");

                }
                // if (pit1.position === player.position) {
                //     console.log("START AGAIN");
                //     $(".pit1").css("opacity", "1");
                //     if (score >= 20) {
                //         score -= 20;
                //     } else {
                //         score = 0;
                //     }

                //     $("#score h2").text(score);

                // }
                // if (pit2.position === player.position) {
                //     console.log("START AGAIN");
                //     $(".pit2").css("opacity", "1");
                //     if (score >= 20) {
                //         score -= 20;
                //     } else {
                //         score = 0;
                //     }

                //     $("#score h2").text(score);

                // }
                // for (var s = 0; s < wind1.length; s++) {

                //     if (wind1[s].position === player.position) {
                //         console.log("player is on wind");
                //         $("#" + s + s + s).css("opacity", "1");
                //     }
                // }
                // for (var s = 0; s < wind2.length; s++) {

                //     if (wind2[s].position === player.position) {
                //         console.log("player is on wind");
                //         $("#" + s + s + s).css("opacity", "1");
                //     }
                // }
                for (var s = 0; s < stench.length; s++) {

                    if (stench[s].position === player.position) {
                        console.log("player is on stench");
                        $("#" + s).css("opacity", "1");
                    }
                }
                for (var s = 0; s < shine.length; s++) {

                    if (shine[s].position === player.position) {
                        console.log("player is on shine");
                        $("#" + s + s).css("opacity", "1");
                    }
                }
                for (var s = 0; s < stench.length; s++) {
                    for (var t = 0; t < shine.length; t++) {

                        if (stench[s].position === shine[t].position) {
                            console.log("player is on shine and stench");
                        }
                    }
                }
                break;
            case 39:
                if (score !== 0) {

                    if (player.position != 3 && player.position != 7 && player.position != 11 &&
                        player.position != 15) {
                        score -= 5;
                        $("#score h2").text(score);
                        player.position++;
                        renderBoard();

                    }

                    //right
                }
                if (monster.position === player.position) {
                    console.log("GAME OVER");
                    $(".status-outside").css("display", "block");
                    $(".status").css("display", "block");
                    $(".lost").css("display", "block");
                    $(".monster").css("opacity", "1");
                }
                if (gold.position === player.position) {
                    console.log("YOU WON");
                    $(".gold").css("opacity", "1");
                    $(".status-outside").css("display", "block");
    $(".status").css("display", "block");
    $(".win").css("display", "block");

                }
                // if (pit1.position === player.position) {
                //     console.log("START AGAIN");
                //     $(".pit1").css("opacity", "1");

                //     if (score >= 20) {
                //         score -= 20;
                //     } else {
                //         score = 0;
                //     }

                //     $("#score h2").text(score);
                // }
                // if (pit2.position === player.position) {
                //     console.log("START AGAIN");
                //     $(".pit2").css("opacity", "1");


                // }
                // for (var s = 0; s < wind1.length; s++) {

                //     if (wind1[s].position === player.position) {
                //         console.log("player is on wind");
                //         $("#" + s + s + s).css("opacity", "1");
                //     }
                // }
                // for (var s = 0; s < wind2.length; s++) {

                //     if (wind2[s].position === player.position) {
                //         console.log("player is on wind");
                //         $("#" + s + s + s).css("opacity", "1");
                //     }
                // }
                for (var s = 0; s < stench.length; s++) {

                    if (stench[s].position === player.position) {
                        console.log("player is on stench");
                        $("#" + s).css("opacity", "1");
                    }
                }
                for (var s = 0; s < shine.length; s++) {

                    if (shine[s].position === player.position) {
                        console.log("player is on shine");
                        $("#" + s + s).css("opacity", "1");
                    }
                }
                for (var s = 0; s < stench.length; s++) {
                    for (var t = 0; t < shine.length; t++) {

                        if (stench[s].position === shine[t].position) {
                            console.log("player is on shine and stench");
                        }
                    }
                }
                break;
            case 40:
                if (score !== 0) {



                    if (player.position > 3) {
                        score -= 5;
                        $("#score h2").text(score);
                        player.position -= 4;

                    }
                    renderBoard();

                }
                //down
                if (monster.position === player.position) {
                    console.log("GAME OVER");
                    $(".monster").css("opacity", "1");
                    $(".status-outside").css("display", "block");
    $(".status").css("display", "block");
    $(".lost").css("display", "block");
                }
                if (gold.position === player.position) {
                    console.log("YOU WON");
                    $(".gold").css("opacity", "1");
                    $(".status-outside").css("display", "block");
    $(".status").css("display", "block");
    $(".win").css("display", "block");

                }
                // if (pit1.position === player.position) {
                //     console.log("START AGAIN");
                //     $(".pit1").css("opacity", "1");


                // }
                // if (pit2.position === player.position) {
                //     console.log("START AGAIN");
                //     $(".pit2").css("opacity", "1");
                //     if (score >= 20) {
                //         score -= 20;
                //     } else {
                //         score = 0;
                //     }

                //     $("#score h2").text(score);

                // }
                // for (var s = 0; s < wind1.length; s++) {

                //     if (wind1[s].position === player.position) {
                //         console.log("player is on wind");
                //         $("#" + s + s + s).css("opacity", "1");
                //     }
                // }
                // for (var s = 0; s < wind2.length; s++) {

                //     if (wind2[s].position === player.position) {
                //         console.log("player is on wind");
                //         $("#" + s + s + s).css("opacity", "1");
                //     }
                // }
                for (var s = 0; s < stench.length; s++) {

                    if (stench[s].position === player.position) {
                        console.log("player is on stench");
                        $("#" + s).css("opacity", "1");
                    }
                }
                for (var s = 0; s < shine.length; s++) {

                    if (shine[s].position === player.position) {
                        console.log("player is on shine");
                        $("#" + s + s).css("opacity", "1");
                    }
                }
                for (var s = 0; s < stench.length; s++) {
                    for (var t = 0; t < shine.length; t++) {

                        if (stench[s].position === shine[t].position) {
                            console.log("player is on shine and stench");
                        }
                    }
                }
                break;
        }
    };






});
function playAgain(){
    console.log("lets play agian");
    score = 100;
    $("#score h2").text(score);

    player.position = 0;

    setPosition();

    $(".status-outside").css("display", "none");
    $(".status").css("display", "none");
    $(".lost").css("display", "none");
    $(".win").css("display", "none");

    $(".gold").css("opacity", "0");
    $(".monster").css("opacity", "0");

    renderBoardGlobal();
}
function exitTab(){
    window.close();
}
