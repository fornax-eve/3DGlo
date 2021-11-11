import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import calc from './modules/calc'
import validation from './modules/validation'
import tabs from './modules/tabs'
import slider from './modules/slider'
import sendforms from "./modules/sendforms";

timer('7 january 2022');
menu();
modal();
calc(100, 1);
validation();
tabs();
slider('portfolio-content', 'portfolio-item', 'portfolio-dots', 'dot', 'portfolio-btn');
sendforms({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
sendforms({
    formId: 'form2',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
sendforms({
    formId: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})
