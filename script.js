function addProblem() {
    let problem = document.getElementById("problem").value;
    let location = document.getElementById("location").value;
    let category = document.getElementById("category").value;

    if (problem === "" || location === "") {
        alert("Please fill all fields!");
        return;
    }

    let suggestion = getAISuggestion(problem);

    document.getElementById("aiSuggestion").innerText = 
        "🤖 AI Suggestion: " + suggestion;

    let list = document.getElementById("problemList");

    let item = document.createElement("li");
    item.innerText = `${problem} (${location}) - ${category}`;

    list.appendChild(item);

    // Clear input
    document.getElementById("problem").value = "";
    document.getElementById("location").value = "";
}

function getAISuggestion(problem) {
    problem = problem.toLowerCase();

    if (problem.includes("fan") || problem.includes("light")) {
        return "Contact maintenance department. Priority: Medium";
    }
    else if (problem.includes("water")) {
        return "Inform admin office immediately. Priority: High";
    }
    else if (problem.includes("bus")) {
        return "Check transport office. Priority: Medium";
    }
    else if (problem.includes("network")) {
        return "Try IT support team. Priority: Low";
    }
    else {
        return "Forward issue to college management.";
    }
}
