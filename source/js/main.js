import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();




    const photoSections = document.querySelectorAll('.photo');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-photo');
          observer.unobserve(entry.target); // Отслеживание прекращается после появления анимации
        }
      });
    }, { threshold: 0.5 }); // Наблюдение за появлением 50% элемента в области просмотра

    photoSections.forEach(section => {
      observer.observe(section);
    });


  });
});

