const ratings_container = document.querySelector('.container-ratings');
const ratings = document.querySelectorAll('.rating');
const btn_sub = document.querySelector('.btn-sub');
const content = document.querySelector('.content');
const content_sec = document.querySelector('.content_sec');
const selected = document.querySelector('.selected');

let rate_count;

ratings_container.addEventListener('click', e => {
    if (e.target.classList.contains('rating')) {
        // check and remove active class
        ratings.forEach(rating => {
            rating.classList.remove('active');
        });
        e.target.classList.add('active');
        rate_count = e.target.textContent;
        console.log(rate_count)
    }
})

btn_sub.addEventListener('click', e => {
    content.classList.add('hidden');
    content_sec.classList.remove('hidden');

    selected.textContent = `You selected ${rate_count} out of ${ratings.length}`
})