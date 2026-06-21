import dayjs from 'dayjs';

type inputDate = number | string | Date | dayjs.Dayjs;

export const formatDate = (date?: inputDate) =>
  date ? dayjs(date).format(`DD.MM.YYYY.`) : '';

export const formatDateYMD = (date: inputDate) => dayjs(date).format(`YYYY-MM-DD`);

export const formatDateAndTime = (date?: inputDate, withSeconds?: boolean) =>
  date ? dayjs(date).format(`DD.MM.YYYY. HH:mm${withSeconds ? ':ss' : ''}`) : '';

export const checkIfExpired = (date?: inputDate) =>
  date ? dayjs(date).isBefore(dayjs()) : false;

export const getTime = (date?: inputDate, withSeconds?: boolean) =>
  date ? dayjs(date).format(`HH:mm${withSeconds ? ':ss' : ''}`) : '';

