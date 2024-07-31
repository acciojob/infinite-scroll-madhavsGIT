//your code here!

document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById('infi-list');
    let itemCount = 0;

    // Function to add a list item
    function addListItem() {
        const listItem = document.createElement('li');
        listItem.textContent = `Item ${++itemCount}`;
        list.appendChild(listItem);
    }

    // Add initial list items
    function addInitialItems(count) {
        for (let i = 0; i < count; i++) {
            addListItem();
        }
    }

    // Add initial 10 items
    addInitialItems(10);

    // Event listener for scroll event on the list container
    list.addEventListener('scroll', function() {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            // User has reached the bottom of the list
            addInitialItems(2); // Add 2 more items
        }
    });
});
