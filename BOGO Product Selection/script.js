document.addEventListener('DOMContentLoaded', function() {
    // Get all radio buttons
    const radioButtons = document.querySelectorAll('input[name="unit-option"]');
    
    // Get all option details containers
    const optionDetails = {
        1: document.querySelector('.option-1-details'),
        2: document.querySelector('.option-2-details'),
        3: document.querySelector('.option-3-details')
    };
    
    // Get total amount element
    const totalAmount = document.getElementById('total-amount');
    
    // Price mapping
    const prices = {
        1: '$10.00 USD',
        2: '$18.00 USD',
        3: '$24.00 USD'
    };
    
    // Function to update UI based on selected option
    function updateSelection() {
        // Hide all option details first
        for (let key in optionDetails) {
            if (optionDetails[key]) {
                optionDetails[key].style.display = 'none';
            }
        }
        
        // Get selected option
        const selectedOption = document.querySelector('input[name="unit-option"]:checked').value;
        
        // Show details for selected option
        if (optionDetails[selectedOption]) {
            optionDetails[selectedOption].style.display = 'block';
        }
        
        // Update total amount
        totalAmount.textContent = prices[selectedOption];
    }
    
    // Add event listeners to radio buttons
    radioButtons.forEach(radio => {
        radio.addEventListener('change', updateSelection);
    });
    
    // Initialize UI
    updateSelection();
});