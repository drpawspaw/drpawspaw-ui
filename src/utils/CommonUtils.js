export const truncate = (keyword, limit) => {
  if (keyword?.length <= limit) {
    return keyword;
  }
  return keyword?.slice(0, limit - 3) + "..." ?? keyword;
};

export const capitalize = (string) => {
  return string?.charAt(0)?.toUpperCase() + string?.slice(1) ?? string;
};

export const deepCompare = (obj1, obj2) => {
  if (
    typeof obj1 === "object" &&
    obj1 !== null &&
    typeof obj2 === "object" &&
    obj2 !== null
  ) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (!obj2.hasOwnProperty(key) || !deepCompare(obj1[key], obj2[key])) {
        return false;
      }
    }
    for (let key of keys2) {
      if (!obj1.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  } else {
    return obj1 === obj2;
  }
};

export const convertDateFormat = (dateString) => {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = padZero(date.getUTCMonth() + 1);
  const day = padZero(date.getUTCDate());
  const hours = padZero(date.getUTCHours());
  const minutes = padZero(date.getUTCMinutes());
  const seconds = padZero(date.getUTCSeconds());
  const milliseconds = padZero(date.getUTCMilliseconds(), 3);
  const offset = formatOffset(date.getTimezoneOffset());

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${offset}`;
};

function padZero(num, digits = 2) {
  return String(num).padStart(digits, "0");
}

function formatOffset(offset) {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = padZero(Math.floor(absOffset / 60));
  const minutes = padZero(absOffset % 60);

  return `${sign}${hours}:${minutes}`;
}

export const isDateBefore = (date1, date2) => {
  const timestamp1 = new Date(date1).getTime();
  const timestamp2 = new Date(date2).getTime();

  return timestamp1 < timestamp2;
};
