(()=> {
    fetch('https://prog2700.onrender.com/threeinarow/random')
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            createMyPuzzleGame(json.rows);
        })
    
    

    //-----------------------------------//
    // COLOR SCHEMES
    const colorPalettes = {
        lightMode: {
            default: { 
                cell1: "#D76C82",
                cell2: "#B03052",
                background: "#EBE8DB",
                text: "#3D0301",
                errorOutline: "#D72638",
                toggle: "#3D0301",
                buttonBackground: "#B03052",
                buttonText: "#FFFFFF",
                inputBackground: "#F8E8E0",
                border: "#3D0301"
            }, 
            protanopia: {//red-blindness - inablility to distinguish red/green
                cell1: "#ae9c45",
                cell2: "#6073b1",
                background: "antiquewhite",
                text: "black",
                errorOutline: "#2A52BE",
                toggle: "black",
                buttonBackground: "#6073b1",
                buttonText: "#FFFFFF",
                inputBackground: "#F8E8E0",
                border: "#3D0301"
            }, 
            deuteranopia: {//green blindness
                cell1: "#c59434",
                cell2: "#6f7498",
                background: "antiquewhite",
                text: "black",
                errorOutline: "#6A0DAD",
                toggle: "black",
                buttonBackground: "#6f7498",
                buttonText: "#FFFFFF",
                inputBackground: "#F8E8E0",
                border: "#3D0301"
            }, 
            tritanopia: {// blue-yellow-blindness
                cell1: "#ff0066",
                cell2: "#00e6e6",
                background: "antiquewhite",
                text: "black",
                errorOutline: "#FF7F00",
                toggle: "black",
                buttonBackground: "#ff0066",
                buttonText: "black",
                inputBackground: "#F8E8E0",
                border: "#3D0301"
            }, 
            achromatopsia: {// total color blindness (high contrast)
                cell1: "#2f2f2f",
                cell2: "#4f4f4f",
                background: "white",
                text: "black",
                errorOutline: "#880808",
                toggle: "black",
                buttonBackground: "black",
                buttonText: "#FFFFFF",
                inputBackground: "#F8E8E0",
                border: "#3D0301"
            },
            warm: {
                cell1: "#ff7251",
                cell2: "#ffca7b",
                background: "#ffedbf",
                text: "maroon",
                errorOutline: "#BF360C",
                toggle: "#9b2948",
                buttonBackground: "#ff7251",
                buttonText: "#FFFFFF",
                inputBackground: "#F8E8E0",
                border: "#3D0301"
            }, 
            cool: {
                cell1: "#B3D8A8",
                cell2: "#A3D1C6",
                background: "#FBFFE4",
                text: "#3D8D7A",
                errorOutline: "#00796B",
                toggle: "#3D8D7A",
                buttonBackground: "#A3D1C6",
                buttonText: "#3D8D7A",
                inputBackground: "#F8E8E0",
                border: "#3D0301"
            }, 
            neutral:{
                cell1: "#B6CBBD",
                cell2: "#CBA35C",
                background: "#F8E1B7",
                text: "#754E1A",
                errorOutline: "#8B0000",
                toggle: "#754E1A",
                buttonBackground: "#CBA35C",
                buttonText: "#FFFFFF",
                inputBackground: "#F8E8E0",
                border: "#3D0301"
            }
        },
        darkMode: {
            default: {
                cell1: "#B03052",
                cell2: "#D76C82",
                background: "#3D0301",
                text: "#EBE8DB",
                errorOutline: "#B71C1C",
                toggle: "#EBE8DB",
                buttonBackground: "#B03052",
                buttonText: "#FFFFFF",
                inputBackground: "#B03052",
                border: "#3D0301"
            }, 
            protanopia: { //red-blindness - inablility to distinguish red/green
                cell1: "#ae9c45",
                cell2: "#6073b1",
                background: "black",
                text: "antiquewhite",
                errorOutline: "#00FFFF",
                toggle: "antiquewhite",
                buttonBackground: "#6073b1",
                buttonText: "#FFFFFF",
                inputBackground: "#6073b1",
                border: "#3D0301"
            }, 
            deuteranopia: { //green blindness
                cell1: "#c59434",
                cell2: "#6f7498",
                background: "black",
                text: "antiquewhite",
                errorOutline: "#9400D3",
                toggle: "antiquewhite",
                buttonBackground: "#6f7498",
                buttonText: "#FFFFFF",
                inputBackground: "#6f7498",
                border: "#3D0301"
            }, 
            tritanopia: { // blue-yellow-blindness
                cell1: "#ff0066",
                cell2: "#00e6e6",
                background: "black",
                text: "antiquewhite",
                errorOutline: "#FFA500",
                toggle: "antiquewhite",
                buttonBackground: "#00e6e6",
                buttonText: "#black",
                inputBackground: "#ff0066",
                border: "#3D0301"
            }, 
            achromatopsia: { // total color blindness (high contrast)
                cell1: "#6f6f6f",
                cell2: "#8e8e8e",
                background: "black",
                text: "white",
                errorOutline: "#FFFFFF",
                toggle: "white",
                buttonBackground: "#8e8e8e",
                buttonText: "black",
                inputBackground: "#8e8e8e",
                border: "#3D0301"
            }, 
            warm: { 
                cell1: "#ff7251",
                cell2: "#ffca7b",
                background: "maroon",
                text: "#ffedbf",
                errorOutline: "#FF4500",
                toggle: "#ffedbf",
                buttonBackground: "#ff7251",
                buttonText: "#ffedbf",
                inputBackground: "#ff7251",
                border: "#3D0301"
            }, 
            cool: {
                cell1: "#301E67",
                cell2: "#5B8FB9",
                background: "#03001C",
                text: "#B6EADA",
                errorOutline: "#00E5FF",
                toggle: "#B6EADA",
                buttonBackground: "#301E67",
                buttonText: "#FFFFFF",
                inputBackground: "#301E67",
                border: "#3D0301"
            }, 
            neutral:{
                cell1: "#A76F6F",
                cell2: "#EAB2A0",
                background: "#3E3232",
                text: "antiquewhite",
                errorOutline: "#800020",
                toggle: "antiquewhite",
                buttonBackground: "#A76F6F",
                buttonText: "#FFFFFF",
                inputBackground: "#A76F6F",
                border: "#3D0301"
            }
        }
    }

    function applyColorsToPage(){
        let currentTheme = localStorage.getItem("selectedTheme") || "default";
        let currentMode = localStorage.getItem("mode") || "lightMode";
        let themeColors = colorPalettes[currentMode][currentTheme];

        // Update page background and text color
            document.body.style.backgroundColor = themeColors.background;
            document.body.style.color = themeColors.text;

        // Update puzzle cells
        document.querySelectorAll("td").forEach(cell => {
            flipCellColor(cell);
        });

        // Update buttons
        document.querySelectorAll("button").forEach(button => {
            button.style.backgroundColor = themeColors.buttonBackground;
            button.style.color = themeColors.buttonText;
        });

        // Update inputs
        document.querySelectorAll("input, textarea, select").forEach(input => {
            input.style.backgroundColor = themeColors.inputBackground;
            input.style.borderColor = themeColors.border;
            input.style.color = themeColors.text;
        });

        // Update toggle switch specifically
        let toggle = document.querySelector(".switch input");
        if (toggle) {
            toggle.style.backgroundColor = themeColors.toggle;
        }
        document.body.classList.toggle("darkMode");
    }


    function flipCellColor(cell) {
        let state = cell.dataset.state;
        let currentTheme = localStorage.getItem("selectedTheme") || "default";
        let currentMode = localStorage.getItem("mode") || "lightMode";
        let themeColors = colorPalettes[currentMode][currentTheme];

        if (state === "1") {
            cell.style.backgroundColor = themeColors.cell1;
        } else if (state === "2") {
            cell.style.backgroundColor = themeColors.cell2;
        } else {
            cell.style.backgroundColor = "transparent";
        }
    }


    function createMyPuzzleGame(puzzleData) {
        const container = document.getElementById('puzzleContainer');
        const puzzleTable = document.createElement('table');
        
            puzzleTable.style.marginTop = '20px';
            
    
        puzzleData.forEach((row,rowIndex) => {
            const tr = document.createElement("tr");

            row.forEach((cell,colIndex) => {
                const td = document.createElement('td');

                    td.style.width = '50px';
                    td.style.height = '50px';
                    td.style.textAlign = 'center';
                    td.style.fontSize = '20px';
                    td.style.border = '1px solid';
                    td.style.borderRadius = '25%';

                td.dataset.row = rowIndex;
                td.dataset.col = colIndex;
                td.dataset.state = cell.currentState;
                td.dataset.correct = cell.correctState;


                if (!cell.canToggle) {
                    td.classList.add('locked');
                } else {
                    td.addEventListener('click', () => cycleCellState(td,rowIndex,colIndex))
                }
                flipCellColor(td);
                
                tr.appendChild(td);
            });
            puzzleTable.appendChild(tr);
        });
        container.appendChild(puzzleTable);
    }

    
    function cycleCellState(cell) {
        const cellStates = ["1", "2"];
        let currentState = cell.dataset.state;
        let nextIndex = (cellStates.indexOf(currentState)+1) % cellStates.length;
        if (nextIndex >= cellStates.length) nextIndex = 0;
        let newState = cellStates[nextIndex];

        cell.dataset.state = newState;
        flipCellColor(cell);

    }


    function checkPuzzle() {
        let alrightAlrightALRIGHT = true;
        let emptySquare = false;

        document.querySelectorAll("td").forEach(td => {
            if (!td.classList.contains("locked")) {
                let userState = td.dataset.state;
                let correctState = td.dataset.correct;

                console.log(`Cell [${td.dataset.row}, ${td.dataset.col}] - User State: ${userState}, Correct State: ${correctState}`);

                if (!userState || userState === "0") {
                    emptySquare = true; 
                } else if (userState !== correctState) {
                    alrightAlrightALRIGHT = false;
                }
            }
        });

        if (alrightAlrightALRIGHT && emptySquare) {
            alert("So far so good!");
        } else if (alrightAlrightALRIGHT && !emptySquare) {
            alert ("You solved it!")
        } else {
            alert("Something is wrong.");
        }

        const resultMessage = document.getElementById("result");

        if (alrightAlrightALRIGHT && !emptySquare) {
            resultMessage.classList.add("resultMessage");
            resultMessage.style.display = "block";
        } else {
            resultMessage.classList.remove("resultMessage");
            resultMessage.style.display = "none";
        }
        
    }
    
   
    function showMeWhatsWrong() {
        let showMeWhatsWrong = document.getElementById("showErrors").checked;

        document.querySelectorAll("td").forEach(td => {
            if (!td.classList.contains("locked")) {
                let userState = td.dataset.state;
                let correctState = td.dataset.correct;

                if (userState === "0" || !userState){
                    td.style.outline = "none";
                } else {
                    td.style.outline = (userState !== correctState && showMeWhatsWrong) ? "2px solid firebrick" : "none";
                }
            }
        });
    }


    document.addEventListener("DOMContentLoaded", function(){
        const darkModeToggle = document.getElementById("darkModeToggle");
        let currentMode = localStorage.getItem("mode") || "lightMode";
        darkModeToggle.checked = currentMode === "darkMode";
        let currentTheme = localStorage.getItem("selectedTheme");
        this.getElementById("themeSelect").value = currentTheme;

        applyColorsToPage();
        
    });

    darkModeToggle.addEventListener("change", function(){
        let newMode = darkModeToggle.checked ? "lightMode" : "darkMode";
        localStorage.setItem("mode",newMode);
        applyColorsToPage();
    });

    document.getElementById("themeSelect").addEventListener("change", function() {
        console.log("Dropdown Selected Value:", this.value);
        localStorage.setItem("selectedTheme",this.value);
        applyColorsToPage();
    });

    document.getElementById("checkBTN").addEventListener("click",checkPuzzle);

    document.getElementById("showErrors").addEventListener("change", showMeWhatsWrong);
    
})()