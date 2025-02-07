export const readLocalStorage = (key, defaultValue) => {
  let maybeValue = null;
  try {
    maybeValue = window.localStorage.getItem(key);
  } catch (error) {
    // TODO: log error somewhere
    return defaultValue;
  }

  if (maybeValue !== null) {
    return JSON.parse(maybeValue);
  }

  return defaultValue;
};

export const writeLocalStorage = (key, newState) => {
  try {
    window.localStorage.setItem(key, newState);
  } catch (error) {
    // TODO: log error somewhere
    console.log(`can not write new value for ${key} to local storage.`);
  }
};

export const deleteLocalStorage = (key) => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    // TODO: log error somewhere
    console.log(`can not delete key ${key} from local storage.`);
  }
};
