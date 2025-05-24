   // Fetch wishes from localStorage (assuming the form saves them there)
//    named "hoardwishes" as a joke pretending we're the villians storeing their wishes, excpet
// this code allows the wishes to be made and displahyed in the vault page
function loadWishes() {
    const wishes = JSON.parse(localStorage.getItem('wishes') || '[]');
    const listDiv = document.getElementById('wishes-list');
    listDiv.innerHTML = '';
    if (wishes.length === 0) {
        listDiv.textContent = 'No wishes have been made yet.';
        return;
    }
    const ul = document.createElement('ul');
    wishes.forEach(wish => {
        const li = document.createElement('li');
        li.textContent = wish;
        ul.appendChild(li);
    });
    listDiv.appendChild(ul);
}
window.addEventListener('DOMContentLoaded', loadWishes);