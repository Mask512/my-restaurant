import { createFocusTrap } from 'focus-trap';

const focusTrapInitiator = ({ container, openBtn, closeBtn }) => {
  const focusTrap = createFocusTrap(container, {
    onActivate: () => container.classList.add('open'),
    onDeactivate: () => container.classList.remove('open'),
  });

  openBtn.addEventListener('click', focusTrap.activate);
  closeBtn.addEventListener('click', focusTrap.deactivate);
};

export default focusTrapInitiator;
