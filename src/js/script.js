document.addEventListener('DOMContentLoaded', function() {
    const buttonProductDesc = document.querySelector('.product-desc__text--btn-open');
    const productDesc = document.querySelector('.product-desc__text--hidden');

    buttonProductDesc.addEventListener('click', function() {
        this.classList.add('hide');
        productDesc.classList.add('show');
    })
})