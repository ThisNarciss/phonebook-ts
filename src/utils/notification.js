import { Notify } from 'notiflix/build/notiflix-notify-aio';

const settings = { timeout: 2000, cssAnimationStyle: 'from-right' };

export function failureNameNotify(contact) {
  Notify.failure(`${contact.name} is already in contacts`, settings);
}
export function failureNumberNotify(contact) {
  Notify.failure(`This is ${contact.name} phone number`, settings);
}
export function successNotify(contact) {
  Notify.success(`${contact.name} add to the contacts`, settings);
}

export function successDelNotify(contact) {
  Notify.success(`${contact.name} delete from the contacts`, settings);
}

export function successEditNotify() {
  Notify.success(`Contact edits`, settings);
}

export function errorNotify(error) {
  Notify.failure(`${error}`, settings);
}

export function errorLogin() {
  Notify.failure(
    'You have entered an incorrect login or password, please try again',
    settings
  );
}
export function errorRegister() {
  Notify.failure(
    'This user is already registered or you have entered incorrect data',
    settings
  );
}
