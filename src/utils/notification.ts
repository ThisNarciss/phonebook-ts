import { Notify, INotifyOptions } from 'notiflix/build/notiflix-notify-aio';

type ContactType = {
  name: string;
};

type SettingsType = INotifyOptions & {
  timeout: number;
  cssAnimationStyle: string;
};

const settings: SettingsType = {
  timeout: 2000,
  cssAnimationStyle: 'from-right',
};

export function failureNameNotify(contact: ContactType) {
  Notify.failure(`${contact.name} is already in contacts`, settings);
}
export function failureNumberNotify(contact: ContactType) {
  Notify.failure(`This is ${contact.name} phone number`, settings);
}
export function successNotify(contact: ContactType) {
  Notify.success(`${contact.name} add to the contacts`, settings);
}

export function successDelNotify(contact: ContactType) {
  Notify.success(`${contact.name} delete from the contacts`, settings);
}

export function successEditNotify() {
  Notify.success(`Contact edits`, settings);
}

export function errorNotify(error: string) {
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
