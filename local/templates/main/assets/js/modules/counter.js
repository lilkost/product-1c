export function counter() {
    const items = document.querySelectorAll('.item-counter');

    if (!items) return;

    items.forEach(item => {
        const itemCounterNode = item.querySelector('.item-count');
        const counterParentNode = item.querySelector('.orders__counter');
        const itemPlusNode = item.querySelector('.btn-counter-plus');
        const itemMinusNode = item.querySelector('.btn-counter-minus');

        CheckStatus(item, counterParentNode);

        itemPlusNode.addEventListener('click', () => Increment(item, itemCounterNode, counterParentNode));
        itemMinusNode.addEventListener('click', () => Decrement(item, itemCounterNode, counterParentNode));
    });


    function Increment(item, count, parent) {
        const allCount = Number(item.getAttribute('data-count-all'));
        let currentCounter = Number(parent.getAttribute('data-count'));
        const statusItemNode = item.querySelector('.orders__status');

        count.innerText = currentCounter;

        if (currentCounter === allCount) {
            statusItemNode.classList.add('status-success');
        }
        if (currentCounter >= allCount) return;

        parent.setAttribute('data-count', currentCounter + 1);

    }

    function Decrement(item, count, parent) {
        const allCount = Number(item.getAttribute('data-count-all'));
        let currentCounter = Number(parent.getAttribute('data-count'));
        const statusItemNode = item.querySelector('.orders__status');

        count.innerText = currentCounter;

        if (currentCounter < allCount) {
            statusItemNode.classList.remove('status-success');
        }

        if (currentCounter <= 0) return;

        parent.setAttribute('data-count', currentCounter - 1);
    }

    function CheckStatus(item, parent) {
        const allCount = Number(item.getAttribute('data-count-all'));
        const currentCounter = Number(parent.getAttribute('data-count'));
        const statusNode = item.querySelector('.orders__status');

        if (allCount === currentCounter) {
            statusNode.classList.add('status-success');
        }
    }
}