document.querySelector('.text').addEventListener('input', function() {
    const text = this.value; 
    const charCount = text.length;

    
    document.querySelector('.result').textContent = `Character Count: ${charCount}`;
});
