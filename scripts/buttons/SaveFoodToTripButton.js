const eventHub = document.querySelector('.container')

export const SaveFoodButton = () => {
    return `
        <button id="saveFoodButton">Save Restaurant to Trip</button>
    `
}

//creates a click event listener for the save park button that dispatches the parkCode in a custom event
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveFoodButton") {

        let foodSelectDropdownValue = document.getElementById("foodSelectDropdown").value

        const saveFoodClickEvent = new CustomEvent("saveFoodButtonClicked", {
            detail: {
                foodId: foodSelectDropdownValue
            }
        })

        eventHub.dispatchEvent(saveFoodClickEvent)

    }
})